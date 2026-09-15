// Structural audit of every built page, for defects that a green build and a
// 200 response both miss. Written after three cards on the pricing page
// shipped with an empty <h3> and an icon with no path data, because the
// component read cat.title / cat.icon while the data supplied cat.name.
//
// Run against dist/ after `npm run build`.
import fs from 'node:fs';
import path from 'node:path';

function pages(dir = 'dist', acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) pages(p, acc);
    else if (e.name === 'index.html') acc.push(p);
  }
  return acc;
}

// Known-benign, deliberately excluded:
//  - Facebook's <img height="1" width="1" ... noscript> pixel has no alt by
//    design and is display:none. It is the vendor's canonical snippet.
//  - `${...}` inside minified inline <script> is a real JS template literal,
//    not leaked Astro syntax.
const FB_PIXEL = /<img height="1" width="1"[^>]*facebook\.com\/tr/;
const stripScripts = h => h.replace(/<script[\s\S]*?<\/script>/g, '');

let bad = 0;
const list = pages();
console.log("route".padEnd(30) + "  h1 noAlt emptyH undef badLink emptyA");

for (const file of list.sort()) {
  const html = fs.readFileSync(file, 'utf8');
  const noScript = stripScripts(html);
  const route = '/' + file.replace(/^dist\/?/, '').replace(/index\.html$/, '');

  const imgs = [...html.matchAll(/<img[^>]*>/g)].map(m => m[0]);

  // Astro DROPS an attribute whose value is undefined rather than emitting it
  // empty. So the icon half of the pricing bug rendered `<path ...>` with no
  // `d` at all - checking for d="" missed it entirely. Count both shapes.
  const paths = [...noScript.matchAll(/<path\b[^>]*>/g)].map(m => m[0]);
  const uses = [...noScript.matchAll(/<use\b[^>]*>/g)].map(m => m[0]);

  const row = {
    h1: (html.match(/<h1[\s>]/g) || []).length,
    noAlt: imgs.filter(i => !/alt=/.test(i) && !FB_PIXEL.test(i)).length,
    emptyH: (noScript.match(/<h[1-6][^>]*>\s*<\/h[1-6]>/g) || []).length,
    // data that did not arrive: rendered as text, as an empty attribute, or -
    // because Astro omits undefined attributes - as a missing one.
    undef: (noScript.match(/>undefined<|\[object Object\]|>NaN<|\sd=""|\ssrc=""|\shref=""/g) || []).length
      + paths.filter(p => !/\sd=/.test(p)).length
      + uses.filter(u => !/(href|xlink:href)=/.test(u)).length
      + imgs.filter(i => !/\ssrc=/.test(i)).length,
    badLink: [...noScript.matchAll(/href="([^"]*)"/g)].map(m => m[1])
      .filter(u => /undefined|NaN|^\s*$/.test(u)).length,
    // A link whose href is fine but whose LABEL is empty: invisible and
    // unclickable, and every check above passes it. This is how three footer
    // links shipped blank on /ro/ when en.ts gained keys ro.ts did not have -
    // the missing translation rendered as nothing, not as "undefined".
    // Icon-only links are legitimate, so anything carrying an image or an
    // accessible name is exempt.
    emptyA: [...noScript.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
      .filter(([, attrs, inner]) =>
        !/<(img|svg|picture|video)\b/i.test(inner) &&
        !/\b(aria-label|aria-labelledby|title)=/i.test(attrs) &&
        inner.replace(/<[^>]*>/g, '').replace(/&[a-z]+;|&#\d+;/gi, 'x').trim() === '').length,
  };

  const ok = row.h1 === 1 && !row.noAlt && !row.emptyH && !row.undef
    && !row.badLink && !row.emptyA;
  if (!ok) bad++;
  console.log(
    route.padEnd(30) +
    String(row.h1).padStart(3) + String(row.noAlt).padStart(6) +
    String(row.emptyH).padStart(7) + String(row.undef).padStart(6) +
    String(row.badLink).padStart(8) + String(row.emptyA).padStart(7) +
    (ok ? '' : '   <-- ISSUE')
  );
}

// Every in-site #fragment link must resolve to an element with that id on the
// page it points at. The footer links to homepage sections from all 24 pages,
// so renaming one section id breaks 24 links at once and nothing else notices:
// the href is well-formed, the label is present, the page returns 200.
const idsOf = f => new Set([...fs.readFileSync(f, 'utf8')
  .matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
const fileFor = p => {
  const c = p.replace(/^\//, '').replace(/\/$/, '');
  for (const cand of [`dist/${c}/index.html`, `dist/${c}.html`,
                      c === '' ? 'dist/index.html' : null]) {
    if (cand && fs.existsSync(cand)) return cand;
  }
  return null;
};
const idCache = new Map();
let dead = 0;
for (const file of list.sort()) {
  const route = '/' + file.replace(/^dist\/?/, '').replace(/index\.html$/, '');
  const html = stripScripts(fs.readFileSync(file, 'utf8'));
  for (const [, href] of html.matchAll(/href="([^"]*#[^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const [rawPath, frag] = href.split('#');
    const target = rawPath === '' ? file : fileFor(rawPath);
    if (!target) { console.log(`  DEAD  ${route} -> ${href} (no such page)`); dead++; continue; }
    if (!idCache.has(target)) idCache.set(target, idsOf(target));
    if (!idCache.get(target).has(frag)) {
      console.log(`  DEAD  ${route} -> ${href} (no id="${frag}" on that page)`);
      dead++;
    }
  }
}
console.log(dead ? `\n${dead} dead in-page anchor link(s)`
                 : `\nall in-page #anchor links resolve to a real element`);

// No long dashes anywhere a reader or a crawler sees text: body copy, <title>,
// meta descriptions, alt text and JSON-LD. House rule: a plain "-" or rewrite
// the sentence. Scripts are stripped except JSON-LD, which is published text.
// llms.txt is plain text served to AI crawlers, so it is scanned too.
const LONG_DASH = /—|–|&mdash;|&ndash;|&#8212;|&#8211;|&#x201[34];/gi;
let dashes = 0;
const dashTargets = [...list.sort(), ...['dist/llms.txt'].filter(f => fs.existsSync(f))];
for (const file of dashTargets) {
  const route = '/' + file.replace(/^dist\/?/, '').replace(/index\.html$/, '');
  const text = fs.readFileSync(file, 'utf8')
    .replace(/<script(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '');
  for (const m of text.matchAll(LONG_DASH)) {
    const around = text.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ');
    console.log(`  DASH  ${route}: ...${around}...`);
    dashes++;
  }
}
console.log(dashes ? `\n${dashes} long dash(es) in published text` : `no long dashes in published text`);

const fail = bad || dead || dashes;
console.log(fail ? `\n${bad} of ${list.length} pages have issues\nFAIL`
                 : `\nall ${list.length} pages structurally clean - exactly one h1, no empty headings, no undefined output, no dead anchors`);
process.exit(fail ? 1 : 0);
