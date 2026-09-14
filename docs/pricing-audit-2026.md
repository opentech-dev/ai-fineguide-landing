# Pricing audit — resolved

**Status: closed. The site now advertises the live 2026 ladder.**

Earlier revisions of this document said the opposite — that the site's dollar
figures were correct and the euro ladder was development-only. That conclusion
was wrong. It was reached by comparing the site against
`__fixtures__/legacy-plan-catalog.ts`, whose rows are still marked `active` and
happened to match the page exactly. Matching a stale fixture is not evidence
that the fixture is what production bills.

The question was settled by the product owner, who confirmed the site was out
of date and that credits are now substantially more expensive. That is the one
input the codebase could not supply: no public plan endpoint exists (by
design), `/api/core/subscription-plans` returns 401, the cutover-verification
endpoint sits behind `InternalGuard`, and the client app fetches prices at
runtime so its bundle carries none.

## Source of truth

`NEW_LADDER_2026` in:

```
ai-backoffice-api/apps/backoffice-api/src/pricing/pricing-config.ts
```

That constant is what `pricing-ladder-seed.service.ts` reads when it provisions
plans and Stripe prices. `scripts/verify-pricing.mjs` parses it directly and
asserts every figure rendered on `/pricing/`, so the page cannot drift from it
without a check failing.

## What the site says now

| | Free | Starter | Business | Premium |
|---|---|---|---|---|
| Price / month | €0 | €100 | €200 | €500 |
| Included credits | 200 | 3,000 | 8,000 | 25,000 |
| Top-up per 1,000 | €45 | €40 | €30 | €24 |
| Per-credit top-up | 0.045 | 0.040 | 0.030 | 0.024 |
| Seats included | 1 | 3 | 5 | 10 |
| Extra seat / month | — | €20 | €18 | €15 |
| Knowledge base | 1M chars | 5M | 10M | 20M |

Currency is EUR because the ladder is EUR-denominated; the seeder creates the
`EUR` currency row on first run and resolves plan currency by code.

Seats: paid tiers set `members: UNLIMITED_MEMBERS` (999999), so team size is
**not** capped — `includedSeats` is what the price covers and further seats
bill per seat. Free sets `members: 1` as a real hard cap, since it has no
Stripe seat price. The previous copy ("Up to 5 / 10 / 20 members") was wrong in
both directions at once.

## Credit consumption

| Usage | Rate | Constant |
|---|---|---|
| Text message | 1 credit | — |
| Message + attachment | 2 credits | — |
| Voice QA | 12 / min | `VOICE_CREDITS_PER_MIN.qa` |
| Voice AI | 10 / min | `VOICE_CREDITS_PER_MIN.aiGoogle` |
| Voice AI, premium voices | 30 / min | `VOICE_CREDITS_PER_MIN.aiElevenlabs` |
| Workflow AI step | 1 credit | `WORKFLOW_NODE_CREDITS_DEFAULT` |

CRM, Inbox, Messages, analytics, reports and integrations consume nothing.

## Add-ons (on the page)

| Add-on | Price | Source |
|---|---|---|
| Extra seat | €20 / €18 / €15 per month | `NEW_LADDER_2026[].extraSeatPrice` |
| Extra credits | €45 / €40 / €30 / €24 per 1,000 | `NEW_LADDER_2026[].additionalMessagePrice` |
| Context Pack | €20 / month, +5M characters | `STORAGE_PACKS['kb-context-5m']` |

## ⚠️ Open question for the team: Context Packs may be inert

Context Packs are **sold** — the workspace app shows an unconditional
`Settings → Context Packs` nav item with its own page, and
`storage-pack.controller.ts` has no flag guard — but whether a purchased pack
actually does anything depends on `STORAGE_PACKS_ENABLED`:

```ts
export function resolveEffectiveLimit(baseLimit, packs, dimension) {
  if (!storagePacksEnabled()) return baseLimit;   // packs contribute nothing
  return baseLimit + sumPackCapacity(packs, dimension);
}
```

The flag's own comment says "with the flag off, packs are inert and the base
limit is returned unchanged". It is not set in any env file, values file or
chart in either repository, so it defaults to `false`.

If that reflects production, a customer can buy a €20/month Context Pack and
receive no additional capacity. **Someone should confirm the flag is set in the
production environment.** If it is not, either set it or hide the pack UI —
and until then, treat the pricing page's Context Pack card as ahead of the
backend.

## Built and correctly not advertised

| Feature | Flag | What it would add |
|---|---|---|
| Annual billing | `ANNUAL_BILLING_ENABLED` | 20% off the plan (`ANNUAL_DISCOUNT`), 15% off top-ups (`ANNUAL_TOPUP_DISCOUNT`), floored at `TOPUP_FLOOR_EUR_PER_CREDIT` = 0.013 |

This one genuinely is hidden from customers: `subscription.entity.ts` returns
`annualBillingEnabled: annualBillingEnabled()` specifically so the UI "shows
the monthly/annual toggle only when annual billing is actually live
server-side". With the flag unset there is no toggle, so there is nothing to
advertise. Turn it on and add a monthly/annual switch to the pricing page in
the same change — `priceAnnual` is already computed as
`monthly × 12 × 0.8`, i.e. €960 / €1,920 / €4,800 per year.

## Not a tier model on paper

`ai-fineguide-project/docs/PRICING_MODEL.md` proposes replacing tiers entirely
with additive module/seat/credit billing. It is marked **v0.1 proposal** and
states plainly that every customer-facing number in it is a placeholder except
the COGS anchors. It is a design document, not a price list — do not publish
anything from it.

## Lesson worth keeping

Two plan catalogs coexist in the codebase and both look authoritative. The
legacy fixture is still `active: true`. Whenever a pricing question comes up,
check `NEW_LADDER_2026` first and treat the legacy catalog as history.
