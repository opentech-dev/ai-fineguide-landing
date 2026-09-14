// An undefined CSS custom property does not error - it silently falls back to
// inheritance, so text meant to be muted renders at full strength and nothing
// anywhere complains. This catches that. Found in review after
// --color-muted-foreground (never defined; the real token is --color-muted)
// shipped into a component and flattened its text hierarchy.
import fs from 'node:fs';
import path from 'node:path';

const CSS = fs.readFileSync('src/styles/global.css', 'utf8');
const defined = new Set([...CSS.matchAll(/^\s*(--[a-z0-9-]+)\s*:/gm)].map(m => m[1]));

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.(astro|ts|tsx|css|html)$/.test(e.name) ? [p] : [];
  });
}

const offenders = [];
for (const f of walk('src')) {
  const src = fs.readFileSync(f, 'utf8');
  for (const m of src.matchAll(/var\((--[a-z0-9-]+)/g)) {
    if (!defined.has(m[1])) {
      const line = src.slice(0, m.index).split('\n').length;
      offenders.push(`${f}:${line}  ${m[1]}`);
    }
  }
}

console.log(`${defined.size} tokens defined in global.css`);
if (offenders.length) {
  console.log(`\n${offenders.length} reference(s) to tokens that do not exist:`);
  for (const o of [...new Set(offenders)]) console.log('  ' + o);
  console.log('\nFAIL');
  process.exit(1);
}
console.log('all var(--*) references resolve to a defined token — OK');
