// Asserts every pricing figure rendered on dist/pricing/ against the API's
// own NEW_LADDER_2026 definition. That constant is what the seeder reads, so
// it is the source of truth for prices, credits, seats and top-up rates.
//
// This previously checked against __fixtures__/legacy-plan-catalog.ts. Both
// ladders exist in the codebase; the site now advertises the 2026 one, so the
// legacy catalog is no longer what the page should match.
//
// Run after `npm run build`.
import { readFileSync } from 'node:fs';

const CONFIG = '/Users/liviumaftuleac/develop/ai-backoffice-api/apps/backoffice-api/src/pricing/pricing-config.ts';
const src = readFileSync(CONFIG, 'utf8');

// Pull the ladder out of the TS source rather than importing it (the API is a
// separate package with its own build). One object per plan.
const truth = {};
const start = src.indexOf('NEW_LADDER_2026: NewPlanDef[] = [');
if (start < 0) { console.error('FAIL  NEW_LADDER_2026 not found in ' + CONFIG); process.exit(1); }
// Slice to the end of the array literal rather than stopping after N plans, so
// a tier added to the ladder is checked instead of silently skipped.
const end = src.indexOf('\n];', start);
const ladder = src.slice(start, end < 0 ? undefined : end);

for (const block of ladder.split(/\{\s*\n\s*alias:/).slice(1)) {
  const g = (re) => { const m = block.match(re); return m ? m[1] : null; };
  const label = g(/label: '([^']+)'/);
  if (!label) continue;
  truth[label] = {
    price: +g(/price: ([\d_]+)/),
    credits: +g(/messages: ([\d_]+)/),
    topup: +g(/additionalMessagePrice: ([\d.]+)/),
    includedSeats: +g(/includedSeats: (\d+)/),
    extraSeat: +g(/extraSeatPrice: (\d+)/),
    context: +(g(/contextCharacterLimit: ([\d_]+)/) || '0').replace(/_/g, ''),
  };
}

// The page advertises four tiers. If the ladder gains or loses one, the page
// is out of date by definition - fail loudly rather than checking a subset.
const LADDER_SIZE = 4;
if (Object.keys(truth).length !== LADDER_SIZE) {
  console.error(`FAIL  ladder has ${Object.keys(truth).length} plans (${Object.keys(truth).join(', ')}), page shows ${LADDER_SIZE}`);
  process.exit(1);
}

// Voice + workflow credit rates, also authoritative in pricing-config.ts
const voiceQa = +src.match(/qa:\s*(\d+)/)[1];
const voiceAi = +src.match(/aiGoogle:\s*(\d+)/)[1];
const voicePremium = +src.match(/aiElevenlabs:\s*(\d+)/)[1];
const workflowNode = +src.match(/WORKFLOW_NODE_CREDITS_DEFAULT = (\d+)/)[1];

const html = readFileSync('dist/pricing/index.html', 'utf8');
const checks = [];
const ck = (label, ok, detail) => checks.push({ label, ok, detail });

for (const [name, t] of Object.entries(truth)) {
  if (t.price > 0) ck(`${name} price €${t.price}`, html.includes(`€${t.price}`), `€${t.price}`);

  const fmt = t.credits.toLocaleString('de-DE'); // 3.000 style used on the page
  ck(`${name} credits ${fmt}`, html.includes(fmt), fmt);

  // top-up: page renders "€X / 1.000", so X must be topup * 1000
  const per1000 = Math.round(t.topup * 1000);
  ck(`${name} top-up €${per1000}/1.000 (= ${t.topup}/credit)`,
     html.includes(`€${per1000} / 1.000`), `€${per1000} / 1.000`);

  // seats: included + per-extra price, exactly as the ladder defines them
  if (t.extraSeat > 0) {
    ck(`${name} ${t.includedSeats} seats included`,
       new RegExp(`${t.includedSeats} (seats included|locuri incluse)`).test(html), `${t.includedSeats}`);
    ck(`${name} extra seat €${t.extraSeat}`, html.includes(`€${t.extraSeat}`), `€${t.extraSeat}`);
  } else {
    ck(`${name} is single-seat (extraSeatPrice 0)`, t.includedSeats === 1, '1');
  }

  // knowledge-base capacity, rendered as "5M characters"
  const m = t.context / 1_000_000;
  ck(`${name} ${m}M character knowledge base`,
     new RegExp(`${m}M (characters|caractere)`).test(html), `${m}M`);
}

// Context Packs come from a different file than the ladder.
const packSrc = readFileSync(
  '/Users/liviumaftuleac/develop/ai-backoffice-api/apps/backoffice-api/src/pricing/storage-packs.ts', 'utf8');
const packPrice = +packSrc.match(/priceEur:\s*(\d+)/)[1];
const packCapacity = +packSrc.match(/capacity:\s*([\d_]+)/)[1].replace(/_/g, '');
ck(`Context Pack €${packPrice}/month`, html.includes(`€${packPrice}`), `€${packPrice}`);
ck(`Context Pack +${packCapacity / 1e6}M characters`,
   new RegExp(`\\+${packCapacity / 1e6}M (characters|caractere)`).test(html), `+${packCapacity / 1e6}M`);

ck(`Voice QA ${voiceQa} credits/min`, html.includes(`${voiceQa} credits`), `${voiceQa}`);
ck(`Voice AI ${voiceAi} credits/min`, html.includes(`${voiceAi} credits`), `${voiceAi}`);
ck(`Premium voice ${voicePremium} credits/min`, html.includes(`${voicePremium} credits`), `${voicePremium}`);
ck(`Workflow AI step ${workflowNode} credit`, html.includes(`${workflowNode} credit`), `${workflowNode}`);

// Nothing from the retired dollar ladder may survive anywhere on the page.
for (const stale of ['$99', '$199', '$499', '10.000', '23.000', '65.000', '$18 / 1.000', '$15 / 1.000', '$12 / 1.000', '$10 / 1.000']) {
  ck(`retired legacy figure "${stale}" is gone`, !html.includes(stale), stale);
}

let bad = 0;
for (const c of checks) { if (!c.ok) bad++; console.log(`${c.ok ? 'PASS' : 'FAIL'}  ${c.label}${c.ok ? '' : '   <-- expected ' + c.detail}`); }
console.log(bad ? `\n${bad} FAILURES` : `\nALL ${checks.length} PRICING CHECKS PASS (against NEW_LADDER_2026)`);
process.exit(bad ? 1 : 0);
