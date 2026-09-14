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

## Built but deliberately not advertised

Both are implemented and both are behind environment flags that are not set in
any env file, values file or chart in either repo, so both evaluate to `false`:

| Feature | Flag | What it would add |
|---|---|---|
| Context Packs | `STORAGE_PACKS_ENABLED` | €20/month per pack, +5M characters of knowledge base (`STORAGE_PACKS`) |
| Annual billing | `ANNUAL_BILLING_ENABLED` | 20% off the plan (`ANNUAL_DISCOUNT`), 15% off top-ups (`ANNUAL_TOPUP_DISCOUNT`), floored at `TOPUP_FLOOR_EUR_PER_CREDIT` = 0.013 |

Turn either flag on in production and the corresponding section should be added
to the pricing page in the same change.

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
