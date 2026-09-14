// Asserts the head of every built page is fit to be indexed.
//
// Everything here is offline and deterministic — no network, no live server.
// Run after `npm run build`.
//
// The limits are Google's rendering limits, not style preferences: a title past
// ~60 chars and a description past ~160 get truncated with an ellipsis in the
// result, and a description under ~120 wastes the space. Duplicate titles or
// descriptions across URLs make Google pick one page and drop the other.
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://fineguide.ai';
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 160;

function pages(dir = 'dist', out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    e.isDirectory() ? pages(p, out) : e.name.endsWith('.html') && out.push(p);
  }
  return out;
}

const one = (html, re) => {
  const m = [...html.matchAll(re)];
  return { n: m.length, v: m[0]?.[1] };
};

let fail = 0;
const bad = (route, msg) => {
  console.log(`  FAIL  ${route}  ${msg}`);
  fail++;
};

const seenTitle = new Map();
const seenDesc = new Map();
const list = pages().sort();

for (const file of list) {
  const html = fs.readFileSync(file, 'utf8');
  const route = '/' + file.replace(/^dist\/?/, '').replace(/index\.html$/, '');

  // --- title ---
  const title = one(html, /<title>([^<]*)<\/title>/g);
  if (title.n !== 1) bad(route, `expected 1 <title>, found ${title.n}`);
  else if (!title.v.trim()) bad(route, 'empty <title>');
  else if (title.v.length > TITLE_MAX)
    bad(route, `title ${title.v.length} chars (max ${TITLE_MAX}) — truncated in results`);

  // --- description ---
  const desc = one(html, /<meta name="description" content="([^"]*)"/g);
  if (desc.n !== 1) bad(route, `expected 1 meta description, found ${desc.n}`);
  else if (desc.v.length < DESC_MIN || desc.v.length > DESC_MAX)
    bad(route, `description ${desc.v.length} chars (want ${DESC_MIN}-${DESC_MAX})`);

  // --- uniqueness across the whole site ---
  if (title.v) {
    if (seenTitle.has(title.v)) bad(route, `title duplicates ${seenTitle.get(title.v)}`);
    else seenTitle.set(title.v, route);
  }
  if (desc.v) {
    if (seenDesc.has(desc.v)) bad(route, `description duplicates ${seenDesc.get(desc.v)}`);
    else seenDesc.set(desc.v, route);
  }

  // --- canonical must be present, single, and point at THIS url ---
  const canon = one(html, /<link rel="canonical" href="([^"]*)"/g);
  if (canon.n !== 1) bad(route, `expected 1 canonical, found ${canon.n}`);
  else {
    const want = new URL(route, SITE).href;
    if (canon.v !== want) bad(route, `canonical is ${canon.v}, route is ${want}`);
  }

  // --- hreflang: en + ro + x-default, and x-default must equal the en href ---
  const alts = Object.fromEntries(
    [...html.matchAll(/<link rel="alternate" hreflang="([a-zA-Z-]+)" href="([^"]*)"/g)].map((m) => [
      m[1],
      m[2],
    ]),
  );
  for (const k of ['en', 'ro', 'x-default']) {
    if (!alts[k]) bad(route, `missing hreflang="${k}"`);
  }
  if (alts.en && alts['x-default'] && alts.en !== alts['x-default'])
    bad(route, 'x-default does not match the en alternate');
  // the pair must be reciprocal: this page's own url has to be one of them
  if (canon.v && alts.en && alts.ro && canon.v !== alts.en && canon.v !== alts.ro)
    bad(route, 'canonical is not among its own hreflang alternates');

  // --- social card, and the file it points at must actually exist ---
  const og = one(html, /<meta property="og:image" content="([^"]*)"/g);
  if (og.n !== 1) bad(route, `expected 1 og:image, found ${og.n}`);
  else {
    const rel = og.v.replace(SITE, '');
    if (!fs.existsSync(path.join('dist', rel))) bad(route, `og:image 404s: ${rel}`);
  }
  if (!/<meta name="twitter:card"/.test(html)) bad(route, 'missing twitter:card');

  // --- structured data must parse and be typed ---
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!blocks.length) bad(route, 'no JSON-LD');
  for (const b of blocks) {
    let o;
    try {
      o = JSON.parse(b[1]);
    } catch (e) {
      bad(route, `JSON-LD does not parse: ${String(e).slice(0, 60)}`);
      continue;
    }
    if (!o['@type']) bad(route, 'JSON-LD block has no @type');
    if (!o['@context']) bad(route, 'JSON-LD block has no @context');
  }
}

console.log(
  fail
    ? `\n${fail} SEO problem(s) across ${list.length} pages\nFAIL`
    : `\nall ${list.length} pages pass: unique title <=${TITLE_MAX} and description ${DESC_MIN}-${DESC_MAX}, canonical matching the route, en/ro/x-default hreflang, a social card that resolves, and valid JSON-LD`,
);
process.exit(fail ? 1 : 0);
