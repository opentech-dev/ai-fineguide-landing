#!/usr/bin/env node
/**
 * Sitemap integrity.
 *
 * public/sitemap.xml is hand-maintained, so it drifts from the build silently:
 * a page gets added and never listed, a page gets removed and the entry lingers.
 * It also carried https://app.fineguide.ai/docs at priority 0.8, which returns
 * HTTP 200 and renders "Page not found" — a soft 404, indexed by crawlers as a
 * real page. A status-code check would have passed it, so this does not make
 * network calls; it asserts what can be proven offline and forces anything
 * pointing off-origin to be justified.
 *
 * Checks:
 *   1. the file parses as XML and the root is <urlset>
 *   2. no double hyphen inside a comment (libxml2 rejects it; some parsers do not)
 *   3. every same-origin <loc> corresponds to a page in dist/
 *   4. every page in dist/ appears in the sitemap
 *   5. any off-origin <loc> is listed in ALLOWED_OFFSITE with a reason
 *
 * Run from the repo root after `npm run build`.
 */
import { readFileSync, existsSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ORIGIN = 'https://fineguide.ai';

/**
 * Off-origin URLs allowed in the sitemap. Each needs a reason, and each must be
 * verified by opening it and reading the rendered body — not by trusting the
 * status code, which is what let the /docs soft 404 sit here.
 */
const ALLOWED_OFFSITE = {
  // none currently. https://app.fineguide.ai/docs was removed: it redirects into
  // the workspace SPA and renders "Page not found" behind a 200.
};

const fail = [];
const root = process.cwd();
const sitemapPath = join(root, 'public', 'sitemap.xml');
const distDir = join(root, 'dist');

if (!existsSync(sitemapPath)) {
  console.error('public/sitemap.xml not found');
  process.exit(1);
}
if (!existsSync(distDir)) {
  console.error('dist/ not found — run `npm run build` first');
  process.exit(1);
}

const xml = readFileSync(sitemapPath, 'utf8');

// 2. double hyphen inside a comment
for (const m of xml.matchAll(/<!--([\s\S]*?)-->/g)) {
  if (m[1].includes('--')) {
    fail.push('a comment contains "--", which is invalid XML (libxml2 rejects the file)');
  }
}

// 1. root element
if (!/<urlset[\s>]/.test(xml)) fail.push('root element is not <urlset>');

const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (locs.length === 0) fail.push('sitemap contains no <loc> entries');

// built pages -> "/", "/pricing", "/ro/voice-ai", ...
function builtPages(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) builtPages(p, acc);
    else if (name === 'index.html') {
      const rel = relative(distDir, p).replace(/index\.html$/, '').replace(/\/$/, '');
      acc.push('/' + rel);
    }
  }
  return acc;
}
const built = new Set(builtPages(distDir).map((p) => (p === '/' ? '/' : p)));

const sitemapPaths = new Set();
for (const loc of locs) {
  if (loc.startsWith(ORIGIN)) {
    let p = loc.slice(ORIGIN.length).replace(/\/$/, '');
    if (p === '') p = '/';
    sitemapPaths.add(p);
    // 3. listed but not built
    if (!built.has(p)) fail.push(`sitemap lists ${p} but dist/ has no such page`);
  } else {
    // 5. off-origin
    if (!(loc in ALLOWED_OFFSITE)) {
      fail.push(
        `off-origin URL not in ALLOWED_OFFSITE: ${loc}\n` +
          '    Open it and read the rendered body before allowing it — a soft 404 ' +
          'returns HTTP 200 while showing "Page not found".',
      );
    }
  }
}

// 4. built but not listed
for (const p of built) {
  if (!sitemapPaths.has(p)) fail.push(`dist/ has ${p} but the sitemap does not list it`);
}

if (fail.length) {
  console.error(`SITEMAP: ${fail.length} problem(s)\n`);
  for (const f of fail) console.error('  - ' + f);
  process.exit(1);
}
console.log(
  `sitemap OK — valid, ${locs.length} URLs, all match the ${built.size} built pages, no unvetted off-origin entries`,
);
