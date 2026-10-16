/**
 * Every money figure on the pricing page, in one place.
 *
 * Copied from the API (ai-backoffice-api/apps/backoffice-api/src/pricing):
 *   price, topup, seat    NEW_LADDER_2026 in pricing-config.ts
 *   ANNUAL_DISCOUNT       pricing-config.ts   yearly plan = monthly x 12 x 0.8
 *   ANNUAL_TOPUP_DISCOUNT pricing-config.ts   extra credits on yearly plans, 15% off
 *   TOPUP_FLOOR           pricing-config.ts   never below 0.013 per credit
 *   PACK_PRICE            storage-packs.ts    Context Pack per month
 * scripts/verify-pricing.mjs reads those files and checks the rendered page, so
 * a figure that drifts from the API fails the check.
 *
 * The i18n files hold the words, with {tokens} where a price goes. This file
 * turns each token into a euro amount, a dollar amount, and where it differs a
 * yearly amount, so the page can switch period and currency without a reload.
 */

/**
 * Dollar billing is live: each euro price in Stripe carries its dollar figure
 * as a `currency_options` entry, and the app charges a customer outside Europe
 * the dollar price shown here. So the dollar view carries no "billed in euros"
 * line any more.
 */
export const USD_BILLING_LIVE = true;

/**
 * Countries that pay in euros: the EU, the rest of the EEA, Switzerland, the UK
 * and the other countries of Europe. Everywhere else pays in dollars. The same
 * list as the API's `EURO_COUNTRIES` (ai-backoffice-api, src/pricing/currency.ts),
 * which decides what a customer is actually charged in; change both together.
 */
export const EURO_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU',
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES',
  'SE', 'IS', 'LI', 'NO', 'CH', 'GB', 'UK', 'GG', 'JE', 'IM', 'GI', 'AD', 'AL',
  'AX', 'BA', 'BY', 'FO', 'MC', 'MD', 'ME', 'MK', 'RS', 'SM', 'UA', 'VA', 'XK',
];

export const ANNUAL_DISCOUNT = 0.2;
export const ANNUAL_TOPUP_DISCOUNT = 0.15;
const TOPUP_FLOOR_PER_1000 = 13;

/**
 * Dollar prices: the euro price converted at USD_RATE, then rounded UP, so a
 * dollar customer never pays less than a European one:
 *   plan prices     up to the next number ending in 9 (117 -> 119)
 *   everything else up to the next whole dollar (23.40 -> 24, 35.10 -> 36)
 * The API charges exactly these (src/pricing/currency.ts, whose spec pins the
 * same figures). They are written out below rather than computed, so a change
 * to the rate never moves a price by accident. scripts/verify-pricing.mjs
 * recomputes them from this rule and fails if the table and the rule disagree.
 *
 * No amount on the page has cents. Yearly figures, in both currencies:
 *   monthly price   monthly x 12 x (1 - ANNUAL_DISCOUNT) / 12, rounded up
 *   yearly total    that monthly price x 12, so the two numbers on a card agree
 *   extra credits   per 1,000 x (1 - ANNUAL_TOPUP_DISCOUNT), rounded up
 * Rounding up means the page never shows less than billing charges. Euro
 * yearly plan prices come out whole anyway (€80, €960); euro yearly extra
 * credits show €26 and €21 where billing charges €25.50 and €20.40.
 */
export const USD_RATE = 1.17;

export const PLANS = [
  { monthly: 0, usdMonthly: 0, topup: 45, usdTopup: 53, seat: 0, usdSeat: 0, yearly: false },
  { monthly: 100, usdMonthly: 119, topup: 40, usdTopup: 47, seat: 20, usdSeat: 24, yearly: true },
  { monthly: 200, usdMonthly: 239, topup: 30, usdTopup: 36, seat: 18, usdSeat: 22, yearly: true },
  { monthly: 500, usdMonthly: 589, topup: 24, usdTopup: 29, seat: 15, usdSeat: 18, yearly: true },
] as const;

export const PACK_PRICE = 5;
export const USD_PACK_PRICE = 6;

export interface Money {
  eur: number;
  usd: number;
  /** Present only when the yearly figure differs from the monthly one. */
  yearlyEur?: number;
  yearlyUsd?: number;
}

// Round to the cent first so float noise (80.00000000000001) cannot push a
// whole number up to the next one, then round up to a whole number.
const ceilWhole = (n: number) => Math.ceil(Math.round(n * 100) / 100);
const money = (eur: number, usd: number, yearly?: { eur: number; usd: number }): Money => ({
  eur,
  usd,
  ...(yearly ? { yearlyEur: yearly.eur, yearlyUsd: yearly.usd } : {}),
});

export const yearlyMonthly = (monthly: number) => ceilWhole((monthly * 12 * (1 - ANNUAL_DISCOUNT)) / 12);
export const yearlyTotal = (monthly: number) => yearlyMonthly(monthly) * 12;
export const yearlyTopup = (per1000: number, floor = TOPUP_FLOOR_PER_1000) =>
  ceilWhole(Math.max(per1000 * (1 - ANNUAL_TOPUP_DISCOUNT), floor));
const USD_TOPUP_FLOOR_PER_1000 = TOPUP_FLOOR_PER_1000 * USD_RATE;

/** Tokens shared by the whole page: {topup1}, {seat2}, {pack} and so on. */
export function pageTokens(): Record<string, Money> {
  const t: Record<string, Money> = { pack: money(PACK_PRICE, USD_PACK_PRICE) };
  PLANS.forEach((p, i) => {
    t[`topup${i}`] = money(
      p.topup,
      p.usdTopup,
      p.yearly ? { eur: yearlyTopup(p.topup), usd: yearlyTopup(p.usdTopup, USD_TOPUP_FLOOR_PER_1000) } : undefined,
    );
    t[`seat${i}`] = money(p.seat, p.usdSeat);
  });
  return t;
}

/** Tokens for one plan card: its price and, for paid plans, the yearly bill. */
export function planTokens(i: number): Record<string, Money> {
  const p = PLANS[i];
  const eur = yearlyTotal(p.monthly);
  const usd = yearlyTotal(p.usdMonthly);
  return {
    price: money(p.monthly, p.usdMonthly, p.yearly ? { eur: yearlyMonthly(p.monthly), usd: yearlyMonthly(p.usdMonthly) } : undefined),
    yearTotal: money(eur, usd),
    yearSaving: money(p.monthly * 12 - eur, p.usdMonthly * 12 - usd),
  };
}

/**
 * "1,920" in English, "1.920" in Romanian. Whole numbers only: an amount with
 * cents throws, so it fails the build instead of reaching the page.
 */
export function formatAmount(n: number, lang: string): string {
  if (!Number.isInteger(n)) throw new Error(`Price ${n} has cents; round it in src/data/pricing.ts`);
  return n.toLocaleString(lang === 'ro' ? 'de-DE' : 'en-US', { maximumFractionDigits: 0 });
}

/** Split "Then {seat1} per person" into text and token parts. */
export function splitTemplate(template: string): { text?: string; token?: string }[] {
  return template
    .split(/(\{\w+\})/)
    .filter(Boolean)
    .map((part) => (/^\{\w+\}$/.test(part) ? { token: part.slice(1, -1) } : { text: part }));
}
