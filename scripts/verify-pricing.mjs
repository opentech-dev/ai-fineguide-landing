// Asserts every pricing figure rendered on /pricing/ and /ro/pricing/ against
// the API's own config, and that the page does not repeat the statements an
// audit of the billing code found to be false.
//
// Sources of truth:
//   NEW_LADDER_2026        pricing-config.ts   prices, credits, seats, top-ups, KB size
//   VOICE_CREDITS_PER_MIN  pricing-config.ts   Voice QA and Voice AI rates
//   STORAGE_PACKS          storage-packs.ts    Context Pack price and capacity
//
// Each locale is checked in its own number format ("3,000" in English, "3.000"
// in Romanian). This used to search for "3.000" only, which is why the English
// page printed European separators.
//
// Run after `npm run build`.
import { readFileSync, existsSync } from 'node:fs';

const API = '/Users/liviumaftuleac/develop/ai-backoffice-api/apps/backoffice-api/src/pricing';
const src = readFileSync(`${API}/pricing-config.ts`, 'utf8');

// Pull the ladder out of the TS source rather than importing it (the API is a
// separate package with its own build). One object per plan.
const truth = {};
const start = src.indexOf('NEW_LADDER_2026: NewPlanDef[] = [');
if (start < 0) { console.error(`FAIL  NEW_LADDER_2026 not found in ${API}/pricing-config.ts`); process.exit(1); }
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
    credits: +g(/messages: ([\d_]+)/).replace(/_/g, ''),
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

const voiceQa = +src.match(/qa:\s*(\d+)/)[1];
const voiceAi = +src.match(/aiGoogle:\s*(\d+)/)[1];
const voiceEleven = +src.match(/aiElevenlabs:\s*(\d+)/)[1];

const packSrc = readFileSync(`${API}/storage-packs.ts`, 'utf8');
const packPrice = +packSrc.match(/priceEur:\s*(\d+)/)[1];
const packCapacity = +packSrc.match(/capacity:\s*([\d_]+)/)[1].replace(/_/g, '');
// The product's own hint: one pack (5,000,000 characters) is ~1,000 documents.
const CHARS_PER_DOC = 5_000;

const LOCALES = {
  en: {
    file: 'dist/pricing/index.html',
    num: (n) => n.toLocaleString('en-US'),
    credits: 'credits',
    seats: (n) => `You \\+ ${n} teammates?`,
    docs: (n) => `About ${n} documents`,
    chars: 'characters',
    perK: (n) => `€${n} (per|/) 1,000`,
  },
  ro: {
    file: 'dist/ro/pricing/index.html',
    num: (n) => n.toLocaleString('de-DE'),
    credits: 'credite',
    seats: (n) => `Tu \\+ ${n} colegi?`,
    docs: (n) => `Aproximativ ${n} de documente`,
    chars: 'caractere',
    perK: (n) => `€${n} (pentru|/) 1\\.000`,
  },
};

// Statements the billing code contradicts (docs/pricing-audit-2026.md and the
// plan audit of 2026-09-15). Each one was on the page.
const BANNED = [
  [/free trial|perioad[ăa] de prob[ăa]/i, 'there is no trial, only the Free plan'],
  [/text conversations|conversa[țt]ii text/i, 'a credit is one AI reply, not a conversation'],
  [/attachment[^<]{0,20}2 credits|2 credite[^<]{0,20}ata[șs]ament/i, 'attachments are not charged'],
  [/(assistants?|AI)[^.<]{0,20}(continue to work|keeps? working)|continue to work|continu[ăa] s[ăa] func[țt]ioneze/i, 'assistants stop at zero credits'],
  [/never expire|nu expir[ăa] niciodat[ăa]/i, 'bought credits are lost on a plan change'],
  [/advanced analytics|analiz[ăa] avansat[ăa]/i, 'no plan gates analytics'],
  [/API (&amp;|&) webhooks access|acces API/i, 'no plan gates the API'],
  [/All AI modules included|toate modulele AI incluse/i, 'module access is not a per-plan difference'],
  [/premium voices?|voci premium/i, 'the 30-credit rate is the ElevenLabs voice-agent engine only'],
];

const checks = [];
const ck = (label, ok, detail) => checks.push({ label, ok, detail });

for (const [loc, L] of Object.entries(LOCALES)) {
  if (!existsSync(L.file)) { ck(`${loc}: ${L.file} exists`, false, 'run npm run build'); continue; }
  const html = readFileSync(L.file, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '');
  const has = (re) => new RegExp(re).test(html);

  for (const [name, t] of Object.entries(truth)) {
    ck(`${loc} ${name} price €${t.price}`, html.includes(`€${t.price}<`), `€${t.price}`);
    ck(`${loc} ${name} credits ${L.num(t.credits)}`, html.includes(`${L.num(t.credits)}`), L.num(t.credits));

    const per1000 = Math.round(t.topup * 1000);
    ck(`${loc} ${name} extra credits €${per1000} per 1,000 (= ${t.topup}/credit)`, has(L.perK(per1000)), `€${per1000}`);

    // Seats exclude the owner: ability.service.ts counts organizationMember
    // rows, and the owner has none. So includedSeats 3 is "you + 3".
    ck(`${loc} ${name} you + ${t.includedSeats}`, has(L.seats(t.includedSeats)), `+ ${t.includedSeats}`);
    if (t.extraSeat > 0) ck(`${loc} ${name} extra seat €${t.extraSeat}`, html.includes(`€${t.extraSeat} `), `€${t.extraSeat}`);

    const m = t.context / 1_000_000;
    ck(`${loc} ${name} ${m}M ${L.chars}`, has(`${m}M ${L.chars}`), `${m}M`);
    const docs = L.num(t.context / CHARS_PER_DOC);
    ck(`${loc} ${name} about ${docs} documents`, has(L.docs(docs)), docs);

    // Minutes of call scoring quoted beside paid allowances: credits / Voice QA
    // rate, rounded down to the nearest ten so "about" never overstates it.
    if (t.price > 0) {
      const mins = L.num(Math.floor(t.credits / voiceQa / 10) * 10);
      ck(`${loc} ${name} ${mins} minutes of call scoring`, html.includes(`${mins} `), mins);
    }
  }

  ck(`${loc} Context Pack €${packPrice}`, html.includes(`€${packPrice}<`), `€${packPrice}`);
  ck(`${loc} Context Pack +${packCapacity / 1e6}M`, has(`\\+${packCapacity / 1e6}M ${L.chars}`), `+${packCapacity / 1e6}M`);
  ck(`${loc} Voice QA ${voiceQa} ${L.credits}`, html.includes(`${voiceQa} ${L.credits}`), `${voiceQa}`);
  ck(`${loc} Voice AI ${voiceAi} ${L.credits}`, html.includes(`${voiceAi} ${L.credits}`), `${voiceAi}`);
  ck(`${loc} ElevenLabs rate ${voiceEleven}`, has(`${voiceEleven}[^<]{0,20}ElevenLabs`), `${voiceEleven}`);

  for (const [re, why] of BANNED) {
    const m = html.match(re);
    ck(`${loc} does not say "${re.source.split('|')[0]}" (${why})`, !m, m ? m[0] : '');
  }
}

// llms.txt carries the same pricing to AI crawlers and must not contradict it.
if (existsSync('dist/llms.txt')) {
  const txt = readFileSync('dist/llms.txt', 'utf8');
  for (const [re, why] of BANNED) {
    const m = txt.match(re);
    ck(`llms.txt does not say "${re.source.split('|')[0]}" (${why})`, !m, m ? m[0] : '');
  }
}

// Nothing from the retired dollar ladder may survive.
for (const f of Object.values(LOCALES).map((l) => l.file).filter(existsSync)) {
  const html = readFileSync(f, 'utf8');
  for (const stale of ['$99', '$199', '$499', '10.000 credits', '23.000', '65.000']) {
    ck(`${f}: retired figure "${stale}" is gone`, !html.includes(stale), stale);
  }
}

let bad = 0;
for (const c of checks) { if (!c.ok) bad++; console.log(`${c.ok ? 'PASS' : 'FAIL'}  ${c.label}${c.ok ? '' : `   <-- ${c.detail}`}`); }
console.log(bad ? `\n${bad} FAILURES` : `\nALL ${checks.length} PRICING CHECKS PASS (against NEW_LADDER_2026)`);
process.exit(bad ? 1 : 0);
