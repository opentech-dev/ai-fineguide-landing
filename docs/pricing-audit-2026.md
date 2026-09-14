# Pricing & feature audit — landing vs. backoffice

Audited 2026-09-14 against `ai-backoffice-api` and `ai-backoffice-frontend`.

> **Correction.** An earlier version of this document said the landing page
> overstated credit allowances by 2.6×–5× and had the wrong currency. That was
> wrong. It compared the site against the **2026 ladder**, which is not the
> ladder customers are on. Checked against the *active* plans, the prices,
> credits and top-up rates on the site are **correct**. Only the seat counts
> were wrong. Details below.

## Two ladders exist. The site matches the live one.

**Legacy ladder — currently `active: true`, `available: true`**
(`ai-backoffice-api/apps/backoffice-api/src/pricing/__fixtures__/legacy-plan-catalog.ts`,
pinned in CI so an accidental edit fails loudly):

| Plan | alias | credits | price | top-up €/credit | gift | members |
|---|---|---|---|---|---|---|
| Free | `free` | 0 | 0 | 0.018 | 1,000 | 1 |
| Starter | `starter-public-subscription` | 10,000 | 99 | 0.015 | 0 | 1 |
| Business | `business-public-subscription` | 23,000 | 199 | 0.012 | 0 | 5 |
| Premium | `premium-public-subscription` | 65,000 | 499 | 0.010 | 0 | 10 |

**2026 ladder** (`pricing-config.ts:128-189`, `NEW_LADDER_2026`) — EUR
0/100/200/500 with 200/3,000/8,000/25,000 credits. Seeded and verified **on
fg-dev only**; `PROGRESS.md:207` records phases 0–7 on dev, and `PROD-CUTOVER.md`
is a runbook with no completion record. Its aliases are all suffixed `-2026` and
never collide with legacy rows, so seeding is purely additive — both ladders can
exist at once.

The landing page's $99 / $199 / $499 and 10,000 / 23,000 / 65,000 credits match
the legacy rows **exactly**, as do the top-up rates ($15/$12/$10 per 1,000 =
0.015/0.012/0.010). The site is describing the plans customers are actually on.

**Nothing about prices or credits should change until someone confirms the prod
cutover.** If the 2026 ladder does go live, the whole table above changes at
once — currency included — and that is a deliberate marketing decision, not a
sync job.

## What was actually wrong, and is now fixed

**Seat counts — overstated on every paid plan.** The site promised more members
than the product grants. `ability.service.ts:405` (`const memberLimit =
plan?.members ?? 5`) confirms `members` is the enforced limit.

| Plan | site claimed | actual | now reads |
|---|---|---|---|
| Free | 1 member | 1 | 1 member ✅ was already right |
| Starter | Up to 5 members | **1** | 1 member |
| Business | Up to 10 members | **5** | Up to 5 members |
| Premium | 20 members | **10** | Up to 10 members |

These were wrong against *both* ladders, so they were safe to correct without
resolving the cutover question. Fixed in `src/i18n/en.ts` and `src/i18n/ro.ts`.

**Free top-up rate.** Site said `$20 / 1.000`; the legacy free plan charges
0.018/credit. Corrected to `$18 / 1.000` in `PricingPlans.astro`. (The site was
over-quoting, so no customer was undercharged.)

**Romanian module list.** The overview listed five modules in Romanian against
six in English — `QA & Analytics` was missing entirely. Fixed, and the type
system now enforces equal list lengths between locales.

**Two copy bugs.** A Romanian string (`Integrări`) in the English module chips,
and an English line claiming telephony was "arriving next" when it ships today
and the Romanian copy already said so.

## Still unverified

- **Whether the 2026 ladder is live on prod.** No public plan endpoint, no
  cutover commit in `ai-backoffice-api` history, and production still serves
  dollar prices — consistent with legacy still being live, but not proof.

  **This is answerable with one command.** The API has a purpose-built
  endpoint for it — `pricing-internal.controller.ts:75`, commented *"Read-only
  cutover verification: plan existence, Stripe sync, single default"*:

  ```bash
  curl -s -H "x-service-token: $INTERNAL_SERVICE_TOKEN" \
    https://api.fineguide.ai/pricing-internal/ladder-status | jq
  ```

  It is read-only and safe to run against production. It sits behind
  `InternalGuard`, which authenticates on the `x-service-token` header
  (`internal.strategy.ts:19`), so it needs the internal service secret —
  which is why this audit could not run it. Anyone holding that secret can
  settle the question in seconds.

  If it reports the 2026 ladder live, the whole price table on the site
  changes at once, currency included. If it reports legacy, the site is
  already correct and nothing needs doing.

  **Every credential-free route was tried and none of them answers it:**

  | Attempt | Result |
  |---|---|
  | `GET /pricing-internal/ladder-status` | `InternalGuard`, needs `x-service-token` |
  | `GET https://fineguide.ai/api/core/subscription-plans` | **401** — the real endpoint, authenticated |
  | `api.fineguide.ai/subscription-plan(s)` | 404 |
  | `api.fineguide.ai` `/health`, `/version`, `/api/health`, `/api/version`, `/actuator/info`, `/` | 404 — no unauthenticated version endpoint to fingerprint the deployed release |
  | `client.fineguide.ai/pricing`, `/plans`, `/subscription-plans` | 404 shells — byte-identical for any path, so no SSR'd plan data |
  | Live app JS bundle (`index-D1gsGx2B.js`, 529 KB) | No plan aliases, no currency codes — it fetches from the API at runtime |
  | `git log` in `ai-backoffice-api` | No cutover commit |
  | Live pricing page | Still dollars — consistent with legacy, but not proof |

  There is no public plan endpoint, by design. The question is genuinely
  unanswerable without the internal token, which is why this audit stops here
  rather than guessing.

  **The cutover is a manual action, not a side-effect of deploying.** This is
  the strongest indirect evidence available, and it was the last thing checked.
  The 2026 ladder is *not* applied by a Prisma migration — there is no migration
  under `prisma/migrations/` that writes it. It is applied by a service,
  `pricing-ladder-seed.service.ts`, and that service has **no `OnModuleInit`,
  no `OnApplicationBootstrap`, and no bootstrap hook** — it never runs on its
  own. Its `seed2026Ladder()` is reachable from exactly two places, both of
  which require someone to deliberately call them:

  - `admin-subscription-plan.controller.ts:44` (admin-authenticated)
  - `pricing-internal.controller.ts:68` (`InternalGuard`, service token)

  So shipping the 2026 code to production could never have silently changed
  what customers are billed. Somebody had to press the button, and no record of
  that exists. Combined with the legacy catalog still being `active: true` and
  the live site still quoting dollars, the balance of evidence points clearly
  at legacy being live — which is what the site currently advertises, and why
  the figures were left alone.

  This is inference, not proof. `ladder-status` remains the one authoritative
  answer.
- **"n8n integrations: Free"** (`en.ts`). Under the 2026 work, workflow AI nodes
  cost 1 credit per execution (`WORKFLOW_NODE_CREDITS_DEFAULT`). Whether that
  billing is active on prod depends on the same cutover question, so the claim
  was left alone.
- **"2 credits per message + attachment"** (`en.ts`). No attachment multiplier
  found anywhere in the API. A negative grep is weak evidence; worth a human
  checking rather than editing on my guess.

## Shipped but not marketed — two now fixed

Measured the workspace app's module directories by size. The result is worth
seeing, because the landing page was leading with one of the smallest surfaces
in the product while three of the largest went unmentioned:

| Module | Files | Lines | Was on the landing page? |
|---|---:|---:|---|
| `crm` | 123 | 36,848 | yes — CRM |
| `agents` | 74 | 23,657 | yes — Assistants |
| `voiceqa` | 42 | 17,333 | yes — QA & Analytics |
| `telephony` | 51 | 15,652 | yes — Voice |
| **`messages`** | **59** | **13,746** | **no** |
| **`workflows`** | **48** | **11,134** | **no** |
| **`inbox`** | **26** | **6,601** | **no** |
| `workspace` | 22 | 3,376 | yes — Workspace |
| `n8n` | 10 | 1,105 | yes — sold as "Automations" |

`Messages` was the fifth-largest module in the product and appeared nowhere.
`Inbox` is real email — 155 `mailbox` references, plus IMAP, SMTP and domain
handling, with a rules page. Both are now on the page, in both locales.

`Workflows` is a native drag-and-drop builder with a node registry, conditions,
typed variables and lineage tracking — an order of magnitude more code than the
n8n bridge the page sold as "Automations". Rather than add a ninth chip that
would read as a duplicate of "Automations", the Automations description now
says both things: build workflows in Fineguide, or connect n8n.

None of the three is behind a feature flag; all are unconditional routes.

**`Campaigns` was deliberately not added.** There is a `/campaigns` route, but
no `campaigns` module directory exists — it is routed and not built. Marketing
it would have been a false claim.

Still unmarketed, and left alone on purpose: Storage/Context Packs and annual
billing are flag-gated and confirmed for fg-dev only, so they carry the same
caveat as the ladder. FineClaw (2,417 lines) and Agency have no landing
presence either, but neither is clearly a customer-facing module.

## Original findings

High confidence — each appears in the module registry, the nav rail and the
router: **Messages** (standalone agent inbox), **Inbox** (email, with mailboxes
and domains), **Workspace** (marketed elsewhere but absent from the pricing
chips), a **native Workflows engine** distinct from the n8n the page sells, plus
**FineClaw** and **Agency** which appear nowhere in the copy.

Real purchasable SKUs with no landing presence: **Storage / Context Packs**
(+5M characters for €20/mo, self-serve Stripe), **annual billing at 20% off**
(annual prices provisioned at 960/1920/4800; no annual toggle anywhere on the
site), the **affiliate programme** (20% first-year commission), and **reseller /
partner consolidated billing**. Storage Packs and annual are flag-gated and the
flags were confirmed for fg-dev only — same caveat as the ladder.

Also unmarketed: tiered knowledge-base capacity (1M/5M/10M/20M characters per
tier), ticketing integrations (Zendesk, HelpScout), several chat integrations
(AmoCRM, Kommo, JivoChat, Notion), and VoiceQA telco integrations (Moldcell,
Orange).
