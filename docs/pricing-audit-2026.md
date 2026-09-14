# Pricing & feature audit — landing vs. backoffice

Audited 2026-09-14 against `ai-backoffice-api` and `ai-backoffice-frontend`.
**No pricing figures were changed.** This document says what is wrong and what
has to be confirmed before anyone changes them.

## Why the numbers were not updated

The implemented 2026 ladder lives in
`ai-backoffice-api/apps/backoffice-api/src/pricing/pricing-config.ts:128-189`
(`NEW_LADDER_2026`), pinned by a CI spec and seeded by
`pricing-ladder-seed.service.ts`.

It was verified live **on fg-dev only**. `PROGRESS.md:207` records phases 0–7
verified on dev; `PROD-CUTOVER.md` is a runbook with no completion record.
There is no evidence either way that prod runs the new ladder — and the live
site currently shows the *legacy* figures, which is consistent with prod not
having cut over.

Publishing €100/€200/€500 while prod still bills $99/$199/$499 would put wrong
prices in front of customers. That needs a human yes.

**Blocking question: has the 2026 ladder been cut over on fg-prod?**

- **If yes** — apply the table below.
- **If no** — leave prices, but the credit and seat figures are still wrong
  against *both* ladders and should be checked separately.

## The discrepancies

Landing values are in `src/components/PricingPlans.astro:5-38` (prices, credits,
top-ups) and `src/i18n/en.ts:681-704` (seats, bonus copy).

| | Landing now | Implemented 2026 ladder |
|---|---|---|
| Currency | `$` | **EUR** (`currencyCode: 'EUR'`) |
| Free | $0 · 1,000 credits one-time · $20/1k top-up | €0 · **200/mo** · €0.045 |
| Starter | $99 · 10,000 credits · $15/1k | €100 · **3,000** · €0.040 |
| Business | $199 · 23,000 credits · $12/1k | €200 · **8,000** · €0.030 |
| Premium | $499 · 65,000 credits · $10/1k | €500 · **25,000** · €0.024 |

Credits are overstated by **2.6×–5×** across every tier. That is the most
serious error on the page — worse than the prices, because it is the number a
buyer sizes their usage against.

Seats are also wrong. The page sells fixed caps ("Up to 5 members", "20
members"); the ladder sells *included* seats plus uncapped paid extras —
Starter 3 + €20/seat, Business 5 + €18, Premium 10 + €15. `members` is set to
`UNLIMITED_MEMBERS` (999999), so the advertised 20-seat ceiling does not exist.

Two further copy errors:

- **"Start with 1,000 credits on us"** (`en.ts:681`) — `free-2026` sets
  `giftCredits: 0`. That gift belongs to the frozen legacy free plan.
- **"n8n integrations: Free"** (`en.ts:735`) — workflow AI nodes now cost
  1 credit per execution (`WORKFLOW_NODE_CREDITS_DEFAULT`). This is billable.

Unverifiable: the "2 credits per message + attachment" claim (`en.ts:718`). No
attachment multiplier was found in the API.

## Shipped but not marketed

High confidence — each appears in the module registry, the nav rail and the
router:

- **Messages** — standalone human-agent inbox
- **Inbox (email)** — mailboxes and domains, with a full email subsystem
- **Workspace** — marketed elsewhere on the site but missing from the pricing chips
- **Native Workflows engine** — distinct from n8n, which is all the page sells
- **FineClaw**, **Agency** — no mention anywhere in the copy

Real purchasable SKUs with no landing presence at all:

- **Storage / Context Packs** — +5M KB characters for €20/mo, self-serve Stripe
- **Annual billing at 20% off** — annual prices provisioned (960/1920/4800);
  there is no annual toggle anywhere on the site
- **Affiliate programme** — 20% first-year commission, self-serve
- **Reseller / partner consolidated billing**

Both Storage Packs and Annual are flag-gated, and the flags were confirmed for
fg-dev only — same caveat as the ladder.

Also unmarketed: tiered knowledge-base capacity (1M/5M/10M/20M chars per tier),
which is a genuine per-tier differentiator and absent from the cards; ticketing
integrations (Zendesk, HelpScout); several chat integrations (AmoCRM, Kommo,
JivoChat, Notion); and VoiceQA telco integrations (Moldcell, Orange).

## Already fixed

- `PricingPlans.astro:40` — a Romanian string (`Integrări`) in the English
  module list.
- `en.ts:65` — "telephony arriving next". Telephony ships today, and the
  Romanian copy (`ro.ts:67`) already said so.
