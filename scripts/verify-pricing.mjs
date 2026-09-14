import { readFileSync } from 'node:fs';
const cat = readFileSync('/Users/liviumaftuleac/develop/ai-backoffice-api/apps/backoffice-api/src/pricing/__fixtures__/legacy-plan-catalog.ts','utf8');
const want = { free:'Free', 'starter-public-subscription':'Starter', 'business-public-subscription':'Business', 'premium-public-subscription':'Premium' };
const truth = {};
for (const line of cat.split('\n')) {
  const m = line.match(/alias: '([^']+)'.*?active: (true|false).*?messages: (\d+), price: '([^']*)', additionalMessagePrice: '([^']*)', giftCredits: (\d+),.*?members: (\d+), includedSeats: (\d+)/);
  if (m && want[m[1]] && m[2]==='true') truth[want[m[1]]] = { credits:+m[3], price:+m[4], topup:+m[5], gift:+m[6], members:+m[7] };
}
const html = readFileSync('dist/pricing/index.html','utf8');
const checks = [];
const ck = (label, ok, detail) => checks.push({ label, ok, detail });
// prices & credits rendered on the page
for (const [name, t] of Object.entries(truth)) {
  if (t.price > 0) ck(`${name} price $${t.price}`, html.includes(`$${t.price}`), `$${t.price}`);
  if (t.credits > 0) {
    const fmt = t.credits.toLocaleString('de-DE'); // 10.000 style used on the page
    ck(`${name} credits ${fmt}`, html.includes(fmt), fmt);
  }
}
// seat claims: what the page now says vs plan.members
const seatClaims = { Free:1, Starter:1, Business:5, Premium:10 };
for (const [name, n] of Object.entries(seatClaims)) {
  ck(`${name} members = ${n} (matches plan.members ${truth[name]?.members})`, truth[name]?.members === n, String(n));
}
// top-up rates: page shows $X / 1.000  => X/1000 must equal additionalMessagePrice
const topups = { Free:18, Starter:15, Business:12, Premium:10 };
for (const [name, x] of Object.entries(topups)) {
  const perCredit = x/1000;
  ck(`${name} top-up $${x}/1.000 = ${perCredit}`, Math.abs(perCredit - truth[name].topup) < 1e-9, `${perCredit} vs ${truth[name].topup}`);
  ck(`${name} top-up rendered`, html.includes(`$${x} / 1.000`), `$${x} / 1.000`);
}
let bad = 0;
for (const c of checks) { if (!c.ok) bad++; console.log(`${c.ok?'PASS':'FAIL'}  ${c.label}${c.ok?'':'   <-- '+c.detail}`); }
console.log(bad ? `\n${bad} FAILURES` : `\nALL ${checks.length} PRICING CHECKS PASS`);
