// @ts-check
/**
 * /llms-full.txt — the whole site in one file for language models and answer engines (https://llmstxt.org): llms.txt
 * first, then the English text of every page, then every blog post in full, so an assistant reads everything in one
 * fetch. Written after the build (astro:build:done) FROM the built pages, so it says exactly what the pages say and a
 * new page is in it the day it ships, with no list to keep:
 *
 * - The pages: every built `<path>/index.html` whose <html lang> is English, except the blog's (its posts come in
 *   whole below; its index, topic and tag pages are lists of them). Each page's <main> becomes Markdown: headings,
 *   paragraphs, lists, tables, questions and answers, links with whole addresses. The site's chrome (navigation,
 *   footer, cookie banner) is outside <main> and never read; inside it, what a reader does not see is left out
 *   (aria-hidden decoration, SVG, images, buttons, forms, scripts, styles, phone-only copies of desktop blocks). A
 *   price shows as the page shows it without JavaScript, in euros a month, with the dollar amount beside it.
 *   Ordered as llms.txt lists them; a page it does not list goes after its section's page, or at the end.
 * - The posts: the build's own Markdown copies (src/pages/blog/[slug].md.ts, from src/blog.ts blogPosts()), newest
 *   first, their headings one level down.
 *
 * The HTML parser is hast-util-from-html (parse5), which Astro and @astrojs/markdown-remark already depend on.
 */
import { existsSync } from 'node:fs';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fromHtml } from 'hast-util-from-html';

const SITE = 'https://fineguide.ai';

/** @typedef {{ type: string, tagName?: string, value?: string, properties?: Record<string, any>, children?: HNode[] }} HNode */
/**
 * @typedef {{ base: string, shift: number, wordmark?: boolean, seen: { heading: string } }} Ctx
 * base: the page's address, for its links; shift: how far down its headings go; wordmark: a picture here stands for a
 * name; seen: the page's last heading so far (shared by the whole page).
 */

// ── HTML → Markdown ──────────────────────────────────────────────────────────────────────────────────────────────
/** Elements left out with everything in them: code, decoration, controls, and chrome should a page put any in <main>. */
const SKIP = new Set([
  'script', 'style', 'noscript', 'template', 'svg', 'math', 'canvas', 'video', 'audio', 'iframe', 'object', 'embed',
  'button', 'form', 'input', 'select', 'textarea', 'option', 'dialog', 'nav', 'footer', 'head', 'link', 'meta',
]);
/** Elements that stand on their own lines. */
const BLOCK = new Set([
  'address', 'article', 'aside', 'blockquote', 'dd', 'details', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure',
  'header', 'hgroup', 'li', 'main', 'ol', 'p', 'pre', 'section', 'summary', 'table', 'ul',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr',
]);
const HEADING = /^h[1-6]$/;
// Placeholders that survive whitespace clean-up: a list's indentation, and a line break inside a paragraph.
const INDENT = '\u0001';
const BREAK = '\u0002';

/** @param {HNode} n */
const classes = (n) => /** @type {string[]} */ (n.properties?.className ?? []);

/**
 * What a reader of the page does not see: aria-hidden decoration, the hidden attribute, an inline display:none,
 * Tailwind's `hidden` (unless a breakpoint shows it again), the phone-only copy of a block the desktop layout shows
 * (`md:hidden`), and the yearly prices the pricing page swaps in (global.css: `only-yearly`).
 * @param {HNode} n
 */
function unseen(n) {
  const p = n.properties ?? {};
  if (p.ariaHidden === 'true' || p.ariaHidden === true || p.hidden) return true;
  if (typeof p.style === 'string' && /display\s*:\s*none/i.test(p.style)) return true;
  const c = classes(n);
  if (c.includes('only-yearly')) return true;
  if (c.some((x) => /^(sm|md|lg|xl|2xl):hidden$/.test(x))) return true;
  if (c.includes('hidden') && !c.some((x) => /^(sm|md|lg|xl|2xl):(block|flex|grid|inline|inline-block|inline-flex|table|contents)$/.test(x))) return true;
  return false;
}

/** @param {string} s */
const squash = (s) => s.replace(/\s+/g, ' ').trim();
/** @param {string} s */
const isBlocky = (s) => /\n\n/.test(s);

/**
 * @param {HNode[] | undefined} children
 * @param {Ctx} ctx
 */
const kids = (children, ctx) => (children ?? []).map((c) => render(c, ctx)).join('');

/** A block: its own paragraph, whitespace tidied, with blank lines around it. @param {string} s */
const block = (s) => {
  const t = s.trim();
  return t ? `\n\n${t}\n\n` : '';
};

/** Inline emphasis, keeping the spaces around it outside the markers. @param {string} s @param {string} mark */
function wrap(s, mark) {
  if (!s.trim() || isBlocky(s)) return s;
  const lead = /^\s/.test(s) ? ' ' : '';
  const trail = /\s$/.test(s) ? ' ' : '';
  return `${lead}${mark}${s.trim()}${mark}${trail}`;
}

/** @param {string} href @param {string} base */
function absolute(href, base) {
  try {
    return new URL(href, base).href;
  } catch {
    return '';
  }
}

/** @param {HNode} n @param {Ctx} ctx */
function link(n, ctx) {
  const inner = kids(n.children, { ...ctx, wordmark: alone(n) });
  const raw = String(n.properties?.href ?? '').trim();
  // An in-page jump (a footnote marker, a table of contents) is its text; so is a link to nowhere.
  if (!raw || raw.startsWith('#') || /^javascript:/i.test(raw)) return inner;
  const href = absolute(raw, ctx.base);
  if (!href) return inner;
  // A card that is one big link: its content as it is, the address under it (unless it already shows it: an email
  // address, a phone number).
  if (isBlocky(inner)) return shows(inner, href) ? inner : `${inner}\n\n<${href}>\n\n`;
  const text = squash(inner.replaceAll(BREAK, ' '));
  if (!text) return '';
  const lead = /^\s/.test(inner) ? ' ' : '';
  const trail = /\s$/.test(inner) ? ' ' : '';
  if (shows(text, href)) return `${lead}${/^https?:/.test(href) ? `<${href}>` : text}${trail}`;
  return `${lead}[${text}](${href})${trail}`;
}

/** Whether a link's words already are its address: the URL itself, the email address, the phone number. */
function shows(/** @type {string} */ text, /** @type {string} */ href) {
  if (/^https?:/.test(href)) return squash(text) === href;
  if (href.startsWith('mailto:')) return text.includes(decodeURIComponent(href.slice(7).split('?')[0]));
  if (href.startsWith('tel:')) return text.replace(/\D/g, '').includes(href.replace(/\D/g, ''));
  return false;
}

/**
 * A list item: the marker on its first line, the rest indented under it.
 * @param {string} content @param {string} marker
 */
function item(content, marker) {
  const lines = content.trim().replace(/\n{3,}/g, '\n\n').split('\n');
  const pad = INDENT.repeat(marker.length);
  return lines.map((l, i) => (i === 0 ? `${marker}${l}` : l ? `${pad}${l}` : l)).join('\n');
}

/** @param {HNode} n @param {Ctx} ctx */
function list(n, ctx) {
  const items = (n.children ?? []).filter((c) => c.type === 'element' && c.tagName === 'li' && !unseen(c));
  // A grid of cards marked up as a list (a heading in each item) reads better as the cards themselves.
  if (items.some((li) => hasHeading(li))) return items.map((li) => block(kids(li.children, ctx))).join('');
  let num = Number(n.properties?.start ?? 1) || 1;
  const out = [];
  for (const li of items) {
    const content = kids(li.children, { ...ctx, wordmark: alone(li) }).trim();
    if (!content) continue;
    out.push(item(content, n.tagName === 'ol' ? `${num++}. ` : '- '));
  }
  // A tight list when every item is one line; otherwise a blank line between items.
  const tight = out.every((s) => !s.includes('\n\n'));
  return block(out.join(tight ? '\n' : '\n\n'));
}

/** @param {HNode} n @returns {boolean} */
const hasHeading = (n) =>
  (n.children ?? []).some((c) => c.type === 'element' && !unseen(c) && (HEADING.test(c.tagName ?? '') || hasHeading(c)));

/** @param {HNode} n @param {Ctx} ctx */
function table(n, ctx) {
  /** @type {HNode[]} */
  const rows = [];
  const collect = (/** @type {HNode} */ x) => {
    for (const c of x.children ?? []) {
      if (c.type !== 'element' || unseen(c)) continue;
      if (c.tagName === 'tr') rows.push(c);
      else if (c.tagName === 'thead' || c.tagName === 'tbody' || c.tagName === 'tfoot') collect(c);
    }
  };
  collect(n);
  const cell = (/** @type {HNode} */ c) =>
    squash(kids(c.children, ctx).replaceAll(BREAK, ' ').replace(/\n+/g, ' ')).replace(/\|/g, '\\|');
  const grid = rows
    .map((r) => (r.children ?? []).filter((c) => c.type === 'element' && (c.tagName === 'td' || c.tagName === 'th') && !unseen(c)))
    .map((cells) => cells.flatMap((c) => [cell(c), ...Array(Math.max(0, Number(c.properties?.colSpan ?? 1) - 1)).fill('')]))
    .filter((r) => r.some(Boolean));
  if (!grid.length) return '';
  const width = Math.max(...grid.map((r) => r.length));
  const line = (/** @type {string[]} */ r) => `| ${[...r, ...Array(width - r.length).fill('')].join(' | ')} |`;
  const rowsMd = block([line(grid[0]), `| ${Array(width).fill('---').join(' | ')} |`, ...grid.slice(1).map(line)].join('\n'));
  // A caption that only repeats the heading above the table (it is there for screen readers) is left out.
  const captionNode = (n.children ?? []).find((c) => c.type === 'element' && c.tagName === 'caption');
  const caption = captionNode ? squash(kids(captionNode.children, ctx)) : '';
  return (caption && caption !== ctx.seen.heading ? block(`**${caption}**`) : '') + rowsMd;
}

/**
 * One node as Markdown. Blocks come out wrapped in blank lines; inline content as text.
 * @param {HNode} n @param {Ctx} ctx @returns {string}
 */
function render(n, ctx) {
  if (n.type === 'text') return (n.value ?? '').replace(/\s+/g, ' ');
  if (n.type !== 'element' && n.type !== 'root') return '';
  if (n.type === 'root') return kids(n.children, ctx);
  const tag = n.tagName ?? '';
  if (SKIP.has(tag) || unseen(n)) return '';
  if (HEADING.test(tag)) {
    const text = squash(kids(n.children, ctx).replaceAll(BREAK, ' ').replace(/\n+/g, ' '));
    ctx.seen.heading = text;
    return text ? block(`${'#'.repeat(Math.min(6, Number(tag[1]) + ctx.shift))} ${text}`) : '';
  }
  switch (tag) {
    case 'br':
      return BREAK;
    case 'hr':
      return block('---');
    case 'a':
      return link(n, ctx);
    case 'strong':
    case 'b':
      return wrap(kids(n.children, ctx), '**');
    case 'em':
    case 'i':
      return wrap(kids(n.children, ctx), '_');
    case 'del':
    case 's':
      return wrap(kids(n.children, ctx), '~~');
    case 'code':
    case 'kbd':
      return wrap(kids(n.children, ctx), '`');
    case 'img': {
      // A picture is left out; a logo that stands for a name in a list or a link (a wordmark) is that name.
      const alt = squash(String(n.properties?.alt ?? ''));
      return alt && ctx.wordmark ? alt : '';
    }
    case 'span':
      // The pricing page's dollar amount sits beside the euro one: "€100 ($119)".
      if (classes(n).includes('only-usd')) {
        const usd = squash(kids(n.children, ctx));
        return usd ? ` (${usd})` : '';
      }
      return kids(n.children, ctx);
    case 'ul':
    case 'ol':
      return list(n, ctx);
    case 'table':
      return table(n, ctx);
    case 'caption':
      return '';
    case 'pre':
      return block(`\`\`\`\n${toText(n)}\n\`\`\``);
    case 'blockquote': {
      const inner = kids(n.children, ctx).trim();
      return inner ? block(inner.split('\n').map((l) => `> ${l}`.trimEnd()).join('\n')) : '';
    }
    case 'summary':
    case 'dt':
      return block(wrap(squash(kids(n.children, ctx).replaceAll(BREAK, ' ')), '**'));
    case 'li': {
      // An item outside a list (rare): its content as a paragraph.
      return block(kids(n.children, { ...ctx, wordmark: alone(n) }));
    }
    default:
      if (BLOCK.has(tag)) return block(kids(n.children, { ...ctx, wordmark: false }));
      return kids(n.children, ctx);
  }
}

/** A list item or link whose only words are a picture's (a vendor's wordmark). @param {HNode} n */
const alone = (n) => !squash(toText(n, true));

/** The raw text under a node, for <pre>; with `seen`, only what a reader sees. @param {HNode} n @param {boolean} [seen] @returns {string} */
function toText(n, seen = false) {
  if (n.type === 'text') return n.value ?? '';
  if (n.type !== 'element' || SKIP.has(n.tagName ?? '') || (seen && unseen(n))) return '';
  return (n.children ?? []).map((c) => toText(c, seen)).join('');
}

/**
 * Whitespace, as Markdown wants it: each line trimmed and its runs of spaces made one, at most one blank line in a
 * row, then the list indentation and the in-paragraph line breaks put in.
 * @param {string} md
 */
function tidy(md) {
  const fence = /^```/;
  let inFence = false;
  const lines = md.split('\n').map((l) => {
    if (fence.test(l.trim())) {
      inFence = !inFence;
      return l.trim();
    }
    return inFence ? l : l.replace(/[ \t]+/g, ' ').trim();
  });
  return lines
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(new RegExp(`[ ]*${BREAK}[ ]*`, 'g'), '\n')
    .replace(new RegExp(INDENT, 'g'), ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * A built page as { title, url, lang, markdown }.
 * @param {string} html @param {string} fallbackUrl @param {number} shift how far down the page's headings go
 */
export function pageToMarkdown(html, fallbackUrl, shift) {
  const tree = /** @type {HNode} */ (/** @type {unknown} */ (fromHtml(html)));
  /** @type {HNode | undefined} */ let main;
  /** @type {HNode | undefined} */ let titleEl;
  /** @type {HNode | undefined} */ let htmlEl;
  let canonical = '';
  const walk = (/** @type {HNode} */ x) => {
    if (x.type === 'element') {
      if (x.tagName === 'html') htmlEl ??= x;
      if (x.tagName === 'title') titleEl ??= x;
      if (x.tagName === 'main') main ??= x;
      if (x.tagName === 'link' && [x.properties?.rel ?? []].flat().includes('canonical')) canonical ||= String(x.properties?.href ?? '');
      if (x.tagName === 'main') return;
    }
    for (const c of x.children ?? []) walk(c);
  };
  walk(tree);
  const url = canonical || fallbackUrl;
  return {
    title: titleEl ? squash(toText(titleEl)) : '',
    url,
    lang: String(htmlEl?.properties?.lang ?? ''),
    markdown: main ? tidy(render(main, { base: url, shift, seen: { heading: '' } })) : '',
  };
}

// ── the file ─────────────────────────────────────────────────────────────────────────────────────────────────────
/** Every `<dir>/index.html` under the build, as site paths ('/', '/crm/', …). @param {string} root */
async function builtPages(root) {
  /** @type {string[]} */
  const out = [];
  const visit = async (/** @type {string} */ rel) => {
    const entries = await readdir(join(root, rel), { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) await visit(`${rel}${e.name}/`);
      else if (e.name === 'index.html') out.push(`/${rel}`);
    }
  };
  await visit('');
  return out;
}

/**
 * Pages in llms.txt's order: a listed page where llms.txt lists it, an unlisted one right after its section's page
 * (/compare/hubspot/ after /compare/), anything else at the end.
 * @param {string[]} paths @param {string} llms
 */
function inLlmsOrder(paths, llms) {
  const listed = [...llms.matchAll(/\]\((https:\/\/fineguide\.ai\/[^)\s]*)\)/g)].map((m) => new URL(m[1]).pathname);
  const rank = (/** @type {string} */ p) => {
    const at = listed.indexOf(p);
    if (at >= 0) return at;
    const parent = listed.filter((l) => l !== '/' && p.startsWith(l)).sort((a, b) => b.length - a.length)[0];
    return parent ? listed.indexOf(parent) + 0.5 : listed.length;
  };
  return [...paths].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
}

/** A Markdown text's headings one level down, code blocks untouched. @param {string} md */
function deeper(md) {
  let inFence = false;
  return md
    .split('\n')
    .map((l) => {
      if (/^(```|~~~)/.test(l)) inFence = !inFence;
      return !inFence && /^#{1,5} /.test(l) ? `#${l}` : l;
    })
    .join('\n');
}

/** @param {URL} dir the build's output folder @param {{ info: (s: string) => void, warn: (s: string) => void }} log */
export async function writeLlmsFull(dir, log) {
  const root = fileURLToPath(dir);
  const llmsFile = join(root, 'llms.txt');
  if (!existsSync(llmsFile)) throw new Error('[llms-full] dist/llms.txt is missing (public/llms.txt)');
  // llms.txt as it is, less its own line pointing here.
  const llms = (await readFile(llmsFile, 'utf8')).split('\n').filter((l) => !l.includes(`${SITE}/llms-full.txt`)).join('\n').trim();

  const out = [llms, '', '---', ''];

  // The pages.
  const paths = inLlmsOrder((await builtPages(root)).filter((p) => !p.startsWith('/blog/')), llms);
  const sections = [];
  // A row of nothing but links (the "Get started · Schedule a demo" buttons most pages close with) once, where it
  // first appears.
  const linkRows = new Set();
  const once = (/** @type {string} */ b) => {
    if (b.replace(/\[[^\]]*\]\([^)\s]*\)/g, '').trim()) return true;
    if (linkRows.has(b)) return false;
    linkRows.add(b);
    return true;
  };
  for (const path of paths) {
    const page = pageToMarkdown(await readFile(join(root, path, 'index.html'), 'utf8'), `${SITE}${path}`, 2);
    if (!page.lang.toLowerCase().startsWith('en')) continue;
    if (!page.title || !page.markdown) {
      log.warn(`[llms-full] ${path}: no ${page.title ? 'text in <main>' : '<title>'}; left out`);
      continue;
    }
    sections.push(`## ${page.title}\n\nSource: ${page.url}\n\n${page.markdown.split('\n\n').filter(once).join('\n\n')}`);
  }
  out.push(
    '# The site, page by page',
    '',
    `The English text of every page of ${SITE}/, as Markdown, each under its title and address. The same pages in Romanian are at ${SITE}/ro/ and in Russian at ${SITE}/ru/.`,
    '',
    sections.join('\n\n'),
    '',
  );

  // The posts, newest first.
  const blogDir = join(root, 'blog');
  const posts = [];
  if (existsSync(blogDir)) {
    for (const f of await readdir(blogDir)) {
      if (!f.endsWith('.md')) continue;
      const text = (await readFile(join(blogDir, f), 'utf8')).trim();
      if (!text) continue;
      // [slug].md.ts writes "By <author> · published <yyyy-mm-dd>" under the summary.
      const date = /· published (\d{4}-\d{2}-\d{2})/.exec(text)?.[1] ?? '';
      posts.push({ date, slug: f, text });
    }
  }
  posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  if (posts.length) {
    out.push(
      '---',
      '',
      '# The blog, post by post',
      '',
      `Every post on ${SITE}/blog/ in full, newest first, each with its author, date and address. One post at a time: its address with \`.md\` in place of the trailing slash. Feed: ${SITE}/blog/rss.xml`,
      '',
      posts.map((p) => deeper(p.text)).join('\n\n'),
      '',
    );
  }

  const text = `${out.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`;
  await writeFile(join(root, 'llms-full.txt'), text);
  log.info(`llms-full.txt: ${sections.length} pages, ${posts.length} posts, ${Math.round(Buffer.byteLength(text) / 1024)} KB`);
}

/** The Astro integration. @returns {import('astro').AstroIntegration} */
export default function llmsFull() {
  return {
    name: 'llms-full',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        await writeLlmsFull(dir, logger);
      },
    },
  };
}
