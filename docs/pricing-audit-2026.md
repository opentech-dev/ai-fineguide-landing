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

Every Context Pack claim on the page traces to source, so the copy is accurate
as a product description regardless of the rollout state below:

| Page says | Source |
|---|---|
| €20 per pack per month | `priceEur: 20` (and the Stripe price is created from this exact value) |
| +5M characters | `capacity: 5_000_000` |
| ≈1,000 documents | the product's own `displayHint`, verbatim |
| billed monthly | `interval: 'month'` |
| unlimited packs | `StoragePackCheckoutDto.quantity` is `@Min(1)` with no `@Max` |

## 🔴 Backend defect: a Context Pack can be paid for while inert

**This is a billing bug in `ai-backoffice-api`, not a website problem.** Every
figure on the pricing page is correct as a product description (verified below).
The defect is that the *purchase* path and the *effect* path are gated
differently.

### The chain, traced end to end

1. `POST /api/core/storage-packs/checkout` — **no flag guard**
   (`storage-pack.controller.ts:52`). It calls
   `stripeService.createStoragePackCheckoutSession`, which calls
   `syncStoragePackPrice(packKey)` — so the €20/month Stripe price is
   **provisioned on demand**. Checkout succeeds even if nobody ran the
   `sync-price` step from PROD-CUTOVER.md.
2. The customer pays. `checkout.session.completed` grants the `OrgStoragePack`.
3. Capacity is resolved **only** through `resolveEffectiveLimit`
   (`usage.service.ts:123` and `:216` are its only callers):

```ts
export function resolveEffectiveLimit(baseLimit, packs, dimension) {
  if (!storagePacksEnabled()) return baseLimit;   // packs contribute nothing
  return baseLimit + sumPackCapacity(packs, dimension);
}
```

With `STORAGE_PACKS_ENABLED` unset, the customer now has a **recurring
€20/month charge and zero extra capacity**.

### Root cause

The same codebase solves this correctly for annual billing and not for packs:

| | Flag | Exposed to the client? | Result |
|---|---|---|---|
| Annual billing | `ANNUAL_BILLING_ENABLED` | **Yes** — `subscription.entity.ts:69` returns `annualBillingEnabled`, commented "lets the UI show the monthly/annual toggle only when annual billing is actually live server-side" | Toggle hidden when off. Cannot be bought. Correct. |
| Storage packs | `STORAGE_PACKS_ENABLED` | **No** — `storagePacksEnabled()` is referenced only inside `resolveEffectiveLimit` | UI shows the pack page unconditionally, checkout is ungated. Can be bought while inert. |

`PROGRESS.md` says packs are "Inert until `STORAGE_PACKS_ENABLED=true`", but
inert is not the same as unsellable, and the code only implements the first.

### The fix (fail closed)

Guard the customer-facing checkout so the flag means what the docs say:

```ts
// storage-pack.controller.ts
@Post('checkout')
async checkout(@Req() req: RequestWithUser, @Body() body: StoragePackCheckoutDto) {
  if (!storagePacksEnabled()) {
    throw new ServiceUnavailableException('Context Packs are not available yet');
  }
  ...
}
```

and mirror `annualBillingEnabled`'s pattern by returning
`storagePacksEnabled` to the client so the workspace can hide the nav item
instead of offering a purchase that does nothing.

No behaviour change when the flag is on; when it is off, customers can no
longer be charged for nothing.

### Why this was not fixed in this run

- It is in `ai-backoffice-api`, a different repository from this project.
- That repo is currently on branch `feat/workflow-engine` with **uncommitted
  changes to the workflow engine** — another engineer's work in flight.
  Touching payment code there would entangle the two.
- The production value of `STORAGE_PACKS_ENABLED` lives in the `fg-prod`
  Kubernetes deployment env, not in any repository file, so it cannot be read
  from here. The flag may already be on, in which case there is no live
  customer impact and the fix is still worth making as defence in depth.
- Flipping a production feature flag is a deployment decision for a human.

**Action for someone with production access:** check whether
`STORAGE_PACKS_ENABLED=true` is set on the `fg-prod` core-api deployment. If it
is, no customer has been affected. If it is not, apply the guard above (or set
the flag) before anyone buys a pack.

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
