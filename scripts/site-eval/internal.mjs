// Our browsers are not visitors. Every page a context opens gets `fg.internal` in its localStorage before the site's
// own script runs, so src/lib/site-arrival.ts sends nothing for it and remembers no source. Use it on every Playwright
// context that opens fineguide.ai:
//   import { markInternal } from './internal.mjs';  …  await markInternal(context);
// An agent's or a person's browser: run `node scripts/site-eval/internal.mjs` and evaluate the line it prints on a
// fineguide.ai page.
import { realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const INTERNAL_FLAG = 'fg.internal';
export const MARK_LINE = `localStorage.setItem('${INTERNAL_FLAG}', '1');`;

export async function markInternal(context) {
  await context.addInitScript((flag) => { try { localStorage.setItem(flag, '1'); } catch { /* no storage: nothing to mark */ } }, INTERNAL_FLAG);
  return context;
}

const runDirectly = () => { try { return !!process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href; } catch { return false; } };
if (runDirectly()) console.log(MARK_LINE);
