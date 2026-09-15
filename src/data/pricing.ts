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
 * `currency_options`. Until dollar prices exist, a US customer shown "$100" is
 * charged €100, so the dollar view carries a line saying so. Set this to true
 * once dollar billing is live and the line disappears.
 */
export const USD_BILLING_LIVE = false;

export const ANNUAL_DISCOUNT = 0.2;
export const ANNUAL_TOPUP_DISCOUNT = 0.15;
const TOPUP_FLOOR_PER_1000 = 13;

/** Dollar figures use the same numbers as euro, not an exchange rate. */
const toUsd = (eur: number) => eur;

export const PLANS = [
  { monthly: 0, topup: 45, seat: 0, yearly: false },
  { monthly: 100, topup: 40, seat: 20, yearly: true },
  { monthly: 200, topup: 30, seat: 18, yearly: true },
  { monthly: 500, topup: 24, seat: 15, yearly: true },
] as const;

export const PACK_PRICE = 20;

export interface Money {
  eur: number;
  usd: number;
  /** Present only when the yearly figure differs from the monthly one. */
  yearlyEur?: number;
  yearlyUsd?: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;
const money = (eur: number, yearlyEur?: number): Money => ({
  eur,
  usd: toUsd(eur),
  ...(yearlyEur === undefined ? {} : { yearlyEur, yearlyUsd: toUsd(yearlyEur) }),
});

export const yearlyTotal = (monthly: number) => round2(monthly * 12 * (1 - ANNUAL_DISCOUNT));
export const yearlyTopup = (per1000: number) =>
  Math.max(round2(per1000 * (1 - ANNUAL_TOPUP_DISCOUNT)), TOPUP_FLOOR_PER_1000);

/** Tokens shared by the whole page: {topup1}, {seat2}, {pack} and so on. */
export function pageTokens(): Record<string, Money> {
  const t: Record<string, Money> = { pack: money(PACK_PRICE) };
  PLANS.forEach((p, i) => {
    t[`topup${i}`] = money(p.topup, p.yearly ? yearlyTopup(p.topup) : undefined);
    t[`seat${i}`] = money(p.seat);
  });
  return t;
}

/** Tokens for one plan card: its price and, for paid plans, the yearly bill. */
export function planTokens(i: number): Record<string, Money> {
  const p = PLANS[i];
  const total = yearlyTotal(p.monthly);
  return {
    price: money(p.monthly, p.yearly ? round2(total / 12) : undefined),
    yearTotal: money(total),
    yearSaving: money(round2(p.monthly * 12 - total)),
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
