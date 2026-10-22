/**
 * The blog's posts, read from the FineGuide API at BUILD time (ai-backoffice-api src/modules/blog; reference:
 * ai-fineguide-project docs/BLOG.md): the site is static, and the API asks Jenkins to rebuild it whenever the
 * published set changes. Markdown is rendered here with Astro's own processor (GitHub-flavoured), then SANITISED by
 * `allowlist` below: Astro's processor would pass raw HTML in the Markdown straight into the page, so raw HTML is
 * dropped whole, and the elements Markdown makes keep only plain article markup — no link or image that is not
 * http(s), mailto or a page path, no attribute outside the list. Posts come from keys, and a leaked key must not be
 * able to put a script on fineguide.ai.
 *
 * Failure is loud on purpose: if the API cannot be read, the build fails and the site keeps the last deploy — a build
 * that quietly produced an empty blog would delete every post from the site and from search.
 *
 * In the image build the posts come from `.blog-posts.json`, which the Dockerfile ADDs from the same API address: a
 * remote ADD is fetched on every build, so the cached build step reruns exactly when the published posts changed.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';

const API = (process.env.FINEGUIDE_API ?? 'https://fineguide.ai').replace(/\/$/, '');
export const SITE = 'https://fineguide.ai';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  categories: string[];
  tags: string[];
  featured: boolean;
  lang: string;
  coverUrl: string | null;
  coverAlt: string | null;
  author: string;
  publishedAt: string;
  updatedAt: string;
};

export type Heading = { depth: number; slug: string; text: string };
export type RenderedPost = BlogPost & { html: string; minutes: number; words: number; path: string; headings: Heading[] };

/** A category's or tag's address part: ASCII, lower case, hyphens — the same rule the API keeps them unique by. */
export const labelSlug = (label: string): string =>
  label.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
export const categoryPath = (c: string): string => `/blog/category/${labelSlug(c)}/`;
export const tagPath = (t: string): string => `/blog/tag/${labelSlug(t)}/`;

/** A tag page is kept out of search until it holds this many posts — a tag with one or two posts is a thin page. */
export const TAG_INDEX_MIN = 3;

/** The blog's own type: Fraunces for titles (as on onetransform.ai, here with its SOFT axis for rounder, warmer
    terminals, and its italic for the accent words), Source Serif 4 for reading; Inter stays for the small interface
    text. Only the blog's pages load them. */
export const BLOG_FONTS =
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,400..700,0..100;1,9..144,400..700,0..100&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..700&display=swap';

type Group = { label: string; slug: string; posts: RenderedPost[] };
function groups(pick: (p: RenderedPost) => string[]): Promise<Group[]> {
  return blogPosts().then((posts) => {
    const by = new Map<string, Group>();
    for (const p of posts) {
      for (const label of pick(p)) {
        const slug = labelSlug(label);
        if (!slug) continue;
        const g = by.get(slug) ?? { label, slug, posts: [] };
        g.posts.push(p);
        by.set(slug, g);
      }
    }
    return [...by.values()].sort((a, b) => b.posts.length - a.posts.length || a.label.localeCompare(b.label));
  });
}
/** Every category with its posts (newest first), the fullest first. */
export const blogCategories = (): Promise<Group[]> => groups((p) => p.categories);
/**
 * The tags that get a place in search: at least TAG_INDEX_MIN posts, and not the very list a topic or a fuller tag
 * already shows (the amoCRM and Kommo tags hold the same three posts: one page of them is enough).
 */
export async function indexedTags(): Promise<Set<string>> {
  const [cats, tags] = await Promise.all([blogCategories(), blogTags()]);
  const key = (posts: RenderedPost[]) => posts.map((p) => p.slug).sort().join(' ');
  const seen = new Set(cats.map((c) => key(c.posts)));
  const out = new Set<string>();
  for (const t of tags) {
    const k = key(t.posts);
    if (t.posts.length >= TAG_INDEX_MIN && !seen.has(k)) out.add(t.label);
    seen.add(k);
  }
  return out;
}
/** Every tag with its posts (newest first), the most used first. */
export const blogTags = (): Promise<Group[]> => groups((p) => p.tags);

// ── the sanitiser (a rehype plugin over the HTML tree: allowlist, not a blocklist) ────────────────────────────────
type HNode = { type: string; tagName?: string; properties?: Record<string, unknown>; children?: HNode[] };
const TAGS = new Set([
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'strong', 'em', 'b', 'i', 'del', 's', 'code', 'pre', 'blockquote', 'ul', 'ol',
  'li', 'img', 'hr', 'br', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'figure', 'figcaption', 'sup', 'sub', 'span', 'div',
  'input', 'section', 'kbd',
]);
const ATTRS: Record<string, string[]> = {
  '*': ['id', 'className', 'title', 'align', 'dataFootnoteRef', 'dataFootnoteBackref', 'ariaLabel', 'ariaDescribedBy', 'dataFootnotes'],
  a: ['href', 'rel'], img: ['src', 'alt', 'width', 'height', 'loading'], input: ['type', 'checked', 'disabled'],
  td: ['style'], th: ['style'], ol: ['start'],
};
const safeUrl = (u: unknown): boolean => typeof u === 'string' && /^(https?:\/\/|mailto:|\/|#)/i.test(u.trim());
function allowlist(node: HNode): void {
  if (!node.children) return;
  node.children = node.children.filter((c) => {
    if (c.type === 'raw' || c.type === 'comment') return false;
    if (c.type !== 'element') return true;
    // A disallowed element goes with its content: <script>, <style>, <iframe>, <form>, <object>…
    if (!TAGS.has(c.tagName!)) return false;
    // A task-list checkbox is the only <input> GFM makes.
    if (c.tagName === 'input' && c.properties?.type !== 'checkbox') return false;
    const keep = new Set([...(ATTRS['*'] ?? []), ...(ATTRS[c.tagName!] ?? [])]);
    for (const k of Object.keys(c.properties ?? {})) {
      const v = c.properties![k];
      if (!keep.has(k)) delete c.properties![k];
      else if ((k === 'href' || k === 'src') && !safeUrl(v)) delete c.properties![k];
      else if (k === 'style' && !/^text-align:\s*(left|right|center);?$/.test(String(v))) delete c.properties![k];
    }
    if (c.tagName === 'img') c.properties = { ...c.properties, loading: 'lazy', decoding: 'async' };
    if (c.tagName === 'a' && typeof c.properties?.href === 'string' && /^https?:/i.test(c.properties.href as string)) {
      // A link off the site opens there; ours stays in the tab.
      const external = !(c.properties.href as string).startsWith(SITE);
      c.properties.rel = external ? ['noopener', 'noreferrer'] : [];
      if (external) c.properties.target = '_blank';
    }
    allowlist(c);
    return true;
  });
}
const rehypeAllowlist = () => (tree: HNode) => { allowlist(tree); };

let cache: Promise<RenderedPost[]> | null = null;

/** Every published post, newest first, with its HTML. Fetched once per build. */
export function blogPosts(): Promise<RenderedPost[]> {
  cache ??= load();
  return cache;
}

let processor: ReturnType<typeof createMarkdownProcessor> | null = null;
/** One post's Markdown as sanitised HTML, with its headings (for the table of contents). */
export async function renderMarkdown(markdown: string): Promise<{ html: string; headings: Heading[] }> {
  processor ??= createMarkdownProcessor({ gfm: true, smartypants: true, syntaxHighlight: false, rehypePlugins: [rehypeAllowlist as never] });
  const r = await (await processor).render(markdown);
  return { html: r.code, headings: (r.metadata?.headings ?? []) as Heading[] };
}

async function read(): Promise<BlogPost[]> {
  const file = join(process.cwd(), '.blog-posts.json');
  if (!process.env.FINEGUIDE_API && existsSync(file)) {
    const posts = JSON.parse(readFileSync(file, 'utf8')) as BlogPost[];
    console.log(`[blog] ${posts.length} post(s) from .blog-posts.json`);
    return posts;
  }
  const url = `${API}/api/core/blog/posts?full=1&limit=1000`;
  const r = await fetch(url, { headers: { 'User-Agent': 'fineguide-landing-build' } });
  if (r.status === 404) {
    console.warn(`[blog] ${url} answered 404 — building the blog empty (the API has no blog yet)`);
    return [];
  }
  if (!r.ok) throw new Error(`[blog] could not read the posts: ${url} answered ${r.status}`);
  const posts = (await r.json()) as BlogPost[];
  console.log(`[blog] ${posts.length} post(s) from ${url}`);
  return posts;
}

// ── images: copied into the site at build time ────────────────────────────────────────────────────────────────
/**
 * The posts' images live in the API (`/api/core/blog/media/<id>.<ext>`), but every API answer carries the load
 * balancer's sticky-session cookie, and Cloudflare caches nothing that sets a cookie — so each view of an image
 * would be a database read. The build copies each one into the site instead (src/pages/blog/media/[file].ts), where
 * Apache serves it cookie-free and Cloudflare caches it by its extension; the API stays where images are kept.
 */
const MEDIA_RE = /https:\/\/[a-z0-9.-]+\/api\/core\/blog\/media\/([0-9a-f]{24}\.(?:png|jpg|webp|gif))/g;
const mediaFiles = new Map<string, string>();
const coverFiles = new Set<string>();
/** An API image address as the site's own, noting it for the copy; any other address as it is. */
function siteMedia(text: string): string {
  return text.replace(MEDIA_RE, (url, file: string) => {
    mediaFiles.set(file, url);
    return `/blog/media/${file}`;
  });
}
/** The images the posts use, as `{ file, source, cover }` — the build fetches each from the API. */
export async function blogMedia(): Promise<Array<{ file: string; source: string; cover: boolean }>> {
  await blogPosts();
  return [...mediaFiles].map(([file, source]) => ({ file, source, cover: coverFiles.has(file) }));
}

/**
 * Cards and topic tiles show a cover at most about 400 px wide (800 on a 2× screen), so they load an 800 px WebP copy
 * the build makes beside the original (src/pages/blog/media/[file].ts) — an original can be several MB, and the
 * index shows them all. GIFs stay as they are: they may move.
 */
export const THUMB_WIDTH = 800;
const THUMBABLE = /\.(png|jpg|webp)$/;
export const thumbName = (file: string): string => file.replace(THUMBABLE, `-${THUMB_WIDTH}.webp`);
/** A cover's card-sized copy, or the address itself when it has none. */
export const thumbOf = (src: string): string =>
  /^\/blog\/media\/[0-9a-f]{24}\.(png|jpg|webp)$/.test(src) ? src.replace(THUMBABLE, `-${THUMB_WIDTH}.webp`) : src;
/** A site path as a whole address, for feeds, cards and structured data. */
export const absolute = (pathOrUrl: string): string => (pathOrUrl.startsWith('/') ? `${SITE}${pathOrUrl}` : pathOrUrl);

async function load(): Promise<RenderedPost[]> {
  const posts = await read();
  const out: RenderedPost[] = [];
  for (const raw of posts) {
    const p = { ...raw, body: siteMedia(raw.body), coverUrl: raw.coverUrl ? siteMedia(raw.coverUrl) : null };
    if (p.coverUrl?.startsWith('/blog/media/')) coverFiles.add(p.coverUrl.slice('/blog/media/'.length));
    const { html, headings } = await renderMarkdown(p.body);
    const words = p.body.split(/\s+/).filter(Boolean).length;
    out.push({ ...p, html, headings, words, minutes: Math.max(1, Math.round(words / 230)), path: `/blog/${p.slug}/` });
  }
  return out.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export const longDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
export const shortDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

/** Posts that share the most categories and tags with this one, newest first among equals. */
export function relatedTo(post: RenderedPost, all: RenderedPost[], n = 3): RenderedPost[] {
  const score = (p: RenderedPost) =>
    p.tags.filter((t) => post.tags.includes(t)).length * 2 + p.categories.filter((c) => post.categories.includes(c)).length;
  return all
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || b.p.publishedAt.localeCompare(a.p.publishedAt))
    .slice(0, n)
    .map((x) => x.p);
}
