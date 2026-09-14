import fs from 'node:fs';
const src = fs.readFileSync('src/components/IntegrationsRibbon.astro','utf8');
const keys = [...src.matchAll(/^\s{2}([A-Za-z0-9]+):\s*'\/images\/brands\//gm)].map(m=>m[1]);
function items(f){
  const t=fs.readFileSync(f,'utf8');
  const b=t.slice(t.indexOf('integrationsRibbon'));
  const arr=b.slice(b.indexOf('items: ['), b.indexOf(']', b.indexOf('items: [')));
  return [...arr.matchAll(/'([^']+)'/g)].map(m=>m[1]);
}
let bad=0;
for(const [loc,f] of [['en','src/i18n/en.ts'],['ro','src/i18n/ro.ts']]){
  const list=items(f);
  const missing=list.filter(n=>!keys.includes(n));
  console.log(`${loc}: ${list.length} items, ${list.length-missing.length} resolve to a mark`);
  if(missing.length){console.log(`  SILENT-FAIL (renders no logo): ${missing.join(', ')}`);bad=1;}
}
const refs=[...src.matchAll(/'(\/images\/brands\/[^']+)'/g)].map(m=>m[1]);
const gone=refs.filter(p=>!fs.existsSync('public'+p));
console.log(`${refs.length} referenced files, ${refs.length-gone.length} exist on disk`);
if(gone.length){console.log('  MISSING FILES:',gone.join(', '));bad=1;}
const onDisk=fs.readdirSync('public/images/brands');
const orphanFiles=onDisk.filter(f=>!refs.some(r=>r.endsWith('/'+f)));
if(orphanFiles.length) console.log('files on disk referenced by nothing:', orphanFiles.join(', '));
console.log(bad? 'CONTRACT FAIL':'CONTRACT OK — no cell can silently lose its logo');
