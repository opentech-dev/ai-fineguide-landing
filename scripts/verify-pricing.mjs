// Asserts every pricing figure on /pricing/ and /ro/pricing/ against the API's
// own config, in every mode a visitor can switch to, and that the page does not
// repeat statements an audit of the billing code found to be false.
//
// Sources of truth (ai-backoffice-api/apps/backoffice-api/src/pricing):
//   NEW_LADDER_2026        pricing-config.ts   prices, credits, seats, top-ups, KB size
//   ANNUAL_DISCOUNT        pricing-config.ts   yearly plan = monthly x 12 x (1 - d)
//   ANNUAL_TOPUP_DISCOUNT  pricing-config.ts   extra credits on yearly plans
//   TOPUP_FLOOR_EUR_PER_CREDIT                 floor for that discount
//   VOICE_CREDITS_PER_MIN  pricing-config.ts   Voice QA and Voice AI rates
//   STORAGE_PACKS          storage-packs.ts    Context Pack price and capacity
//
// The page renders every price in all its forms (euro / dollar, monthly /
// yearly) and hides the ones that do not match data-period and data-currency
// on <html>. So each check runs against a "view": the page with the hidden
// forms removed, reduced to visible text. English is checked in four views,
// Romanian (euro only) in two. Each locale uses its own number format.
//
// Dollar figures are the euro figures converted at USD_RATE (src/data/pricing.ts):
// plan prices rounded up to the next number ending in 9, everything else to the
// nearest dollar. Yearly dollar amounts use the same formula as euro on the
// dollar price. The site table is checked against that rule, and the page
// against the table.
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

const num = (re) => +src.match(re)[1];
const voiceQa = num(/qa:\s*(\d+)/);
const voiceAi = num(/aiGoogle:\s*(\d+)/);
const voiceEleven = num(/aiElevenlabs:\s*(\d+)/);
const annualDiscount = num(/ANNUAL_DISCOUNT = ([\d.]+)/);
const annualTopupDiscount = num(/ANNUAL_TOPUP_DISCOUNT = ([\d.]+)/);
const topupFloor = num(/TOPUP_FLOOR_EUR_PER_CREDIT = ([\d.]+)/);

const packSrc = readFileSync(`${API}/storage-packs.ts`, 'utf8');
const packPrice = +packSrc.match(/priceEur:\s*(\d+)/)[1];
const packCapacity = +packSrc.match(/capacity:\s*([\d_]+)/)[1].replace(/_/g, '');
// The product's own hint: one pack (5,000,000 characters) is ~1,000 documents.
const CHARS_PER_DOC = 5_000;

const siteData = readFileSync('src/data/pricing.ts', 'utf8');
const usdBillingLive = /USD_BILLING_LIVE = true/.test(siteData);
const usdRate = +siteData.match(/USD_RATE = ([\d.]+)/)[1];
const toUsdPlan = (eur) => (eur === 0 ? 0 : Math.ceil((eur * usdRate - 9) / 10) * 10 + 9);
const toUsd = (eur) => Math.round(eur * usdRate);

const round2 = (n) => Math.round(n * 100) / 100;
const yearlyMonthly = (p) => round2((p * 12 * (1 - annualDiscount)) / 12);
const yearlyTotal = (p) => round2(p * 12 * (1 - annualDiscount));
const yearlyPer1000 = (perCredit) => round2(Math.max(perCredit * (1 - annualTopupDiscount), topupFloor) * 1000);

const LOCALES = {
  en: {
    file: 'dist/pricing/index.html',
    fmt: 'en-US',
    currencies: ['eur', 'usd'],
    credits: 'credits',
    seats: (n) => `You \\+ ${n} teammates?`,
    seatPrice: (m) => `Then ${m} per person`,
    docs: (n) => `About ${n} documents`,
    chars: 'characters',
    per1000: (m) => `${m} (per|/) 1,000`,
    billed: (total, saving) => `Billed ${total} a year\\. You save ${saving}\\.`,
    yearlyNote: 'Yearly plans are paid once a year',
  },
  ro: {
    file: 'dist/ro/pricing/index.html',
    fmt: 'de-DE',
    currencies: ['eur'],
    credits: 'credite',
    seats: (n) => `Tu \\+ ${n} colegi?`,
    seatPrice: (m) => `Apoi ${m} de persoan`,
    docs: (n) => `Aproximativ ${n} de documente`,
    chars: 'caractere',
    per1000: (m) => `${m} (pentru|/) 1\\.000`,
    billed: (total, saving) => `Facturat ${total} pe an\\. Economise[șs]ti ${saving}\\.`,
    yearlyNote: 'Planurile anuale se plătesc o dată pe an',
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
  [/switch (between|from) monthly (and|to) yearly (at any time|anytime)/i, 'an existing subscription cannot change billing period'],
];

// Remove every element carrying one of `classes`, including what it contains.
function removeByClass(html, classes) {
  const open = new RegExp(`<(span|p|div)\\b[^>]*\\bclass="[^"]*\\b(${classes.join('|')})\\b[^"]*"[^>]*>`, 'g');
  let out = html;
  for (let m = open.exec(out); m; open.lastIndex = 0, m = open.exec(out)) {
    const tag = m[1];
    const re = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, 'g');
    re.lastIndex = m.index + m[0].length;
    let depth = 1, stop = -1;
    for (let t = re.exec(out); t; t = re.exec(out)) {
      depth += t[0].startsWith('</') ? -1 : 1;
      if (depth === 0) { stop = t.index + t[0].length; break; }
    }
    if (stop < 0) throw new Error(`unbalanced <${tag}> at ${m.index}`);
    out = out.slice(0, m.index) + out.slice(stop);
  }
  return out;
}

function view(html, period, currency) {
  const hidden = [period === 'yearly' ? 'only-monthly' : 'only-yearly', currency === 'usd' ? 'only-eur' : 'only-usd'];
  return removeByClass(html.replace(/<script[\s\S]*?<\/script>/g, ''), hidden)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    // "€80 /month": tags between the parts leave a space; "€80" must stay whole.
    .replace(/([€$]) /g, '$1')
    .replace(/ ([.,;:])/g, '$1');
}

const checks = [];
const ck = (label, ok, detail) => checks.push({ label, ok, detail });
const warnings = [];

// The literal dollar table in src/data/pricing.ts must match the rule, and no
// dollar figure may simply repeat its euro figure (the bug this rule replaced).
{
  const rows = [...siteData.matchAll(/\{ monthly: (\d+), usdMonthly: (\d+), topup: (\d+), usdTopup: (\d+), seat: (\d+), usdSeat: (\d+)/g)];
  ck(`site table has ${LADDER_SIZE} plans`, rows.length === LADDER_SIZE, rows.length);
  for (const r of rows) {
    const [monthly, usdMonthly, topup, usdTopup, seat, usdSeat] = r.slice(1).map(Number);
    ck(`site table €${monthly} -> $${toUsdPlan(monthly)}`, usdMonthly === toUsdPlan(monthly), `$${usdMonthly}`);
    ck(`site table top-up €${topup} -> $${toUsd(topup)}`, usdTopup === toUsd(topup), `$${usdTopup}`);
    ck(`site table seat €${seat} -> $${toUsd(seat)}`, usdSeat === toUsd(seat), `$${usdSeat}`);
    if (monthly > 0) ck(`site table $${usdMonthly} is not just €${monthly} relabelled`, usdMonthly !== monthly && usdTopup !== topup && usdSeat !== seat, `$${usdMonthly}`);
  }
  const usdPack = +siteData.match(/USD_PACK_PRICE = (\d+)/)[1];
  ck(`site table pack €${packPrice} -> $${toUsd(packPrice)}`, usdPack === toUsd(packPrice) && usdPack !== packPrice, `$${usdPack}`);
}

for (const [loc, L] of Object.entries(LOCALES)) {
  if (!existsSync(L.file)) { ck(`${loc}: ${L.file} exists`, false, 'run npm run build'); continue; }
  const raw = readFileSync(L.file, 'utf8');
  const n = (x) => x.toLocaleString(L.fmt, { minimumFractionDigits: Number.isInteger(x) ? 0 : 2, maximumFractionDigits: 2 });

  for (const currency of L.currencies) {
    const S = currency === 'usd' ? '$' : '€';
    const other = currency === 'usd' ? '€' : '$';
    const m = (x) => `\\${S}${n(x).replace(/\./g, '\\.')}(?![\\d.,]\\d)`;
    const usd = currency === 'usd';
    // Figures in this view's currency: euro straight from the API, dollars by rule.
    const planPrice = (eur) => (usd ? toUsdPlan(eur) : eur);
    const flat = (eur) => (usd ? toUsd(eur) : eur);
    const floorPerCredit = usd ? round2(topupFloor * usdRate * 1000) / 1000 : topupFloor;

    for (const period of ['monthly', 'yearly']) {
      const tag = `${loc} ${currency} ${period}`;
      const text = view(raw, period, currency);
      const has = (re) => new RegExp(re).test(text);
      const yearly = period === 'yearly';

      for (const [name, t] of Object.entries(truth)) {
        const paid = t.price > 0;
        const price = planPrice(t.price);
        const shown = yearly && paid ? yearlyMonthly(price) : price;
        ck(`${tag} ${name} price ${S}${n(shown)}`, has(m(shown)), `${S}${n(shown)}`);
        if (yearly && paid) {
          const total = yearlyTotal(price);
          const saving = round2(price * 12 - total);
          ck(`${tag} ${name} billed ${S}${n(total)} a year, saving ${S}${n(saving)}`,
            has(L.billed(m(total), m(saving))), `${S}${n(total)}`);
        }

        const topupPerCredit = flat(round2(t.topup * 1000)) / 1000;
        const per1000 = yearly && paid
          ? round2(Math.max(topupPerCredit * (1 - annualTopupDiscount), floorPerCredit) * 1000)
          : round2(topupPerCredit * 1000);
        ck(`${tag} ${name} extra credits ${S}${n(per1000)} per 1,000`, has(L.per1000(m(per1000))), `${S}${n(per1000)}`);

        // Seats exclude the owner: ability.service.ts counts organizationMember
        // rows, and the owner has none. So includedSeats 3 is "you + 3". Extra
        // seats are billed monthly on every plan (only a monthly seat price exists).
        ck(`${tag} ${name} you + ${t.includedSeats}`, has(L.seats(t.includedSeats)), `+ ${t.includedSeats}`);
        if (t.extraSeat > 0) {
          const seat = flat(t.extraSeat);
          ck(`${tag} ${name} extra seat ${S}${seat}`, has(L.seatPrice(m(seat))), `${S}${seat}`);
        }

        ck(`${tag} ${name} credits ${n(t.credits)}`, text.includes(n(t.credits)), n(t.credits));
        const mb = t.context / 1_000_000;
        ck(`${tag} ${name} ${mb}M ${L.chars}`, has(`${mb}M ${L.chars}`), `${mb}M`);
        const docs = n(t.context / CHARS_PER_DOC);
        ck(`${tag} ${name} about ${docs} documents`, has(L.docs(docs)), docs);
        // Minutes of call scoring beside paid allowances: credits / Voice QA
        // rate, rounded down to the nearest ten so "about" never overstates it.
        if (paid) {
          const mins = n(Math.floor(t.credits / voiceQa / 10) * 10);
          ck(`${tag} ${name} ${mins} minutes of call scoring`, text.includes(`${mins} `), mins);
        }
      }

      ck(`${tag} Context Pack ${S}${flat(packPrice)}`, has(m(flat(packPrice))), `${S}${flat(packPrice)}`);
      ck(`${tag} shows no ${other} amounts`, !new RegExp(`\\${other}\\d`).test(text), (text.match(new RegExp(`.{0,30}\\${other}\\d.{0,20}`)) || [''])[0]);
      ck(`${tag} yearly note ${yearly ? 'shown' : 'hidden'}`, text.includes(L.yearlyNote) === yearly, L.yearlyNote);
      if (currency === 'usd' && !usdBillingLive) {
        ck(`${tag} says the charge is in euro while USD_BILLING_LIVE is false`, /billed in euro, at the euro price/.test(text), 'usdNote');
      }
    }
  }

  const text = view(raw, 'monthly', 'eur');
  ck(`${loc} Context Pack +${packCapacity / 1e6}M`, new RegExp(`\\+${packCapacity / 1e6}M ${L.chars}`).test(text), `+${packCapacity / 1e6}M`);
  ck(`${loc} Voice QA ${voiceQa} ${L.credits}`, text.includes(`${voiceQa} ${L.credits}`), `${voiceQa}`);
  ck(`${loc} Voice AI ${voiceAi} ${L.credits}`, text.includes(`${voiceAi} ${L.credits}`), `${voiceAi}`);
  ck(`${loc} ElevenLabs rate ${voiceEleven}`, new RegExp(`${voiceEleven}[^.]{0,20}ElevenLabs`).test(text), `${voiceEleven}`);
  ck(`${loc} has a monthly/yearly switch`, /data-set-period="yearly"/.test(raw), 'data-set-period');
  ck(`${loc} ${L.currencies.includes('usd') ? 'has' : 'has no'} a currency switch`,
    /data-set-currency="usd"/.test(raw) === L.currencies.includes('usd'), 'data-set-currency');
  if (!L.currencies.includes('usd')) ck(`${loc} carries no dollar amounts, even hidden`, !/\$\d/.test(raw.replace(/<script[\s\S]*?<\/script>/g, '')), '$');

  for (const [re, why] of BANNED) {
    const hit = raw.match(re);
    ck(`${loc} does not say "${re.source.split('|')[0]}" (${why})`, !hit, hit ? hit[0] : '');
  }
}

if (!usdBillingLive) warnings.push('USD_BILLING_LIVE is false: the dollar view tells visitors they are charged in euro. Flip it in src/data/pricing.ts once Stripe has dollar prices.');

// llms.txt carries the same pricing to AI crawlers and must not contradict it.
if (existsSync('dist/llms.txt')) {
  const txt = readFileSync('dist/llms.txt', 'utf8');
  for (const [re, why] of BANNED) {
    const hit = txt.match(re);
    ck(`llms.txt does not say "${re.source.split('|')[0]}" (${why})`, !hit, hit ? hit[0] : '');
  }
  const total = `€${yearlyTotal(truth.Starter.price).toLocaleString('en-US')}`;
  ck(`llms.txt lists the yearly Starter price ${total}`, txt.includes(total), total);
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
for (const w of warnings) console.log(`WARN  ${w}`);
console.log(bad ? `\n${bad} FAILURES` : `\nALL ${checks.length} PRICING CHECKS PASS (against NEW_LADDER_2026)`);
process.exit(bad ? 1 : 0);
