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
console.log('route'.padEnd(30) + ' h1 noAlt emptyH undef badLink');

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
  };

  const ok = row.h1 === 1 && !row.noAlt && !row.emptyH && !row.undef && !row.badLink;
  if (!ok) bad++;
  console.log(
    route.padEnd(30) +
    String(row.h1).padStart(3) + String(row.noAlt).padStart(6) +
    String(row.emptyH).padStart(7) + String(row.undef).padStart(6) +
    String(row.badLink).padStart(8) + (ok ? '' : '   <-- ISSUE')
  );
}

console.log(bad ? `\n${bad} of ${list.length} pages have issues\nFAIL`
                : `\nall ${list.length} pages structurally clean — exactly one h1, no empty headings, no undefined output`);
process.exit(bad ? 1 : 0);
