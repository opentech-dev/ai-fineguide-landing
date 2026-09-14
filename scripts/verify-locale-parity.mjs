import { en } from '/Users/liviumaftuleac/develop/ai-fineguide-landing/src/i18n/en.ts';
import { ro } from '/Users/liviumaftuleac/develop/ai-fineguide-landing/src/i18n/ro.ts';
const diffs = [];
function walk(a, b, path) {
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) { diffs.push(`${path}: array/non-array mismatch`); return; }
    if (a.length !== b.length) diffs.push(`${path}: LENGTH en=${a.length} ro=${b.length}`);
    for (let i = 0; i < Math.min(a.length, b.length); i++) walk(a[i], b[i], `${path}[${i}]`);
    return;
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const ka = Object.keys(a), kb = Object.keys(b);
    for (const k of ka) if (!(k in b)) diffs.push(`${path}.${k}: MISSING in ro`);
    for (const k of kb) if (!(k in a)) diffs.push(`${path}.${k}: EXTRA in ro`);
    for (const k of ka) if (k in b) walk(a[k], b[k], `${path}.${k}`);
    return;
  }
  if (typeof a !== typeof b) diffs.push(`${path}: TYPE en=${typeof a} ro=${typeof b}`);
}
walk(en, ro, 'root');
console.log(diffs.length ? diffs.join('\n') : 'STRUCTURE IDENTICAL — no length, key, or type drift');
console.log('total diffs:', diffs.length);
