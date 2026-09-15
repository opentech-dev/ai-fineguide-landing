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
 * The 2026 plans are euro-only in Stripe: there is no dollar price and no
 * `currency_options`. Until dollar prices exist, a US customer who picks a plan
 * is charged its euro price, so the dollar view carries a line saying so. Set this to true
 * once dollar billing is live and the line disappears.
 */
export const USD_BILLING_LIVE = false;

export const ANNUAL_DISCOUNT = 0.2;
export const ANNUAL_TOPUP_DISCOUNT = 0.15;
const TOPUP_FLOOR_PER_1000 = 13;

/**
 * Dollar prices: the euro price converted at USD_RATE, then rounded.
 *   plan prices     rounded up to the next number ending in 9 (117 -> 119)
 *   everything else rounded to the nearest whole dollar (52.65 -> 53)
 * The figures are written out below rather than computed, so a change to the
 * rate never moves a price by accident. scripts/verify-pricing.mjs recomputes
 * them from this rule and fails if the table and the rule disagree.
 * Yearly dollar amounts follow the product's own formula on the dollar price,
 * exactly as euro does, so they keep their cents ($1,142.40 a year).
 */
export const USD_RATE = 1.17;

export const PLANS = [
  { monthly: 0, usdMonthly: 0, topup: 45, usdTopup: 53, seat: 0, usdSeat: 0, yearly: false },
  { monthly: 100, usdMonthly: 119, topup: 40, usdTopup: 47, seat: 20, usdSeat: 23, yearly: true },
  { monthly: 200, usdMonthly: 239, topup: 30, usdTopup: 35, seat: 18, usdSeat: 21, yearly: true },
  { monthly: 500, usdMonthly: 589, topup: 24, usdTopup: 28, seat: 15, usdSeat: 18, yearly: true },
] as const;

export const PACK_PRICE = 20;
export const USD_PACK_PRICE = 23;

export interface Money {
  eur: number;
  usd: number;
  /** Present only when the yearly figure differs from the monthly one. */
  yearlyEur?: number;
  yearlyUsd?: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;
const money = (eur: number, usd: number, yearly?: { eur: number; usd: number }): Money => ({
  eur,
  usd,
  ...(yearly ? { yearlyEur: yearly.eur, yearlyUsd: yearly.usd } : {}),
});

export const yearlyTotal = (monthly: number) => round2(monthly * 12 * (1 - ANNUAL_DISCOUNT));
export const yearlyTopup = (per1000: number, floor = TOPUP_FLOOR_PER_1000) =>
  Math.max(round2(per1000 * (1 - ANNUAL_TOPUP_DISCOUNT)), floor);
const USD_TOPUP_FLOOR_PER_1000 = round2(TOPUP_FLOOR_PER_1000 * USD_RATE);

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
    price: money(p.monthly, p.usdMonthly, p.yearly ? { eur: round2(eur / 12), usd: round2(usd / 12) } : undefined),
    yearTotal: money(eur, usd),
    yearSaving: money(round2(p.monthly * 12 - eur), round2(p.usdMonthly * 12 - usd)),
  };
}

/** "1,920" / "25.50" in English, "1.920" / "25,50" in Romanian. */
export function formatAmount(n: number, lang: string): string {
  return n.toLocaleString(lang === 'ro' ? 'de-DE' : 'en-US', {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

/** Split "Then {seat1} per person" into text and token parts. */
export function splitTemplate(template: string): { text?: string; token?: string }[] {
  return template
    .split(/(\{\w+\})/)
    .filter(Boolean)
    .map((part) => (/^\{\w+\}$/.test(part) ? { token: part.slice(1, -1) } : { text: part }));
}
