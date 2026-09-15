# 2026 redesign: handoff

**Date:** 2026-09-15
**Branch:** `redesign/landing-2026` (on origin, **not merged**, not live)
**Review:** https://github.com/opentech-dev/ai-fineguide-landing/compare/main...redesign/landing-2026

The redesign session is parked here. Nothing on this branch is on fineguide.ai
until someone reviews it and merges it to `main`, which deploys to `fg-prod`.

## What the branch contains

About 70 commits on top of `main`:

- **One design for every product page**: CRM, Campaigns, Messages & Inbox,
  Automations, Workspace, Voice QA, Voice AI (new full page), Enterprise,
  AI assistants. The homepage blocks are now teasers that link to them.
- **Pricing**: the live 2026 ladder (`NEW_LADDER_2026`), add-ons (seats, credit
  top-ups, Context Packs), a Monthly / Yearly switch, and on English a EUR / USD
  switch with dollar prices converted at `USD_RATE`. No amount has cents.
- **Claims cut back to what the product does**: voice features that don't
  exist, a workflow charge that never happens, the dead Tickets surface.
- **SEO**: canonical, hreflang, social card, JSON-LD, a guarded sitemap.
- **8 verification scripts** (`scripts/README.md`), the closest thing this repo
  has to a test suite. All pass on the branch as of the merge commit that
  brought in the hotfix (30 pages, 45 claim checks, 288 pricing checks).

## Shipped to the live site the same day

`hotfix/remove-leaking-media` was fast-forwarded onto `main` and pushed. It
takes down media recorded from a live account: the intro video (as both
`fineguide-intro.mp4` and `fineguide-intro.mov`) plus `crm-tasks.png` and
`voiceqa-stats.png`. It also brings the live pages' voice claims and llms.txt
in line. The same fixes are merged into the redesign branch.

## Needs a person

1. **Confirm the takedown is live.** Each of these should return 404:
   `https://fineguide.ai/fineguide-intro.mp4`, `/fineguide-intro.mov`,
   `/images/screenshots/crm-tasks.png`, `/images/screenshots/voiceqa-stats.png`.
   If they still return 200 after Jenkins has deployed, purge them in Cloudflare.
   At 16:42 on 2026-09-15, after the deploy, three returned 404 but
   `crm-tasks.png` was still a Cloudflare cache HIT (max-age 4h, age ~58 min),
   while the origin already returned 404.
2. **Decide about the exposure.** The video was public for about three months
   (last-modified 2026-06-19). It showed a real contact's name, email and phone,
   a recorded call transcript, real inbox senders and an internal incident
   report. The files are still in git history. Whether anyone needs to be told
   isn't a decision for the code.
3. **Review and merge this branch.**
4. **`STORAGE_PACKS_ENABLED` on `fg-prod`.** Unknown from the repos; see
   `docs/pricing-audit-2026.md`, "Still open". If it was false, check Stripe for
   subscriptions on `kb-context-5m`.
5. **Dollar billing.** Flip `USD_BILLING_LIVE` in `src/data/pricing.ts` once
   Stripe has dollar prices. Until then the page says US customers pay in euro,
   and `verify-pricing.mjs` warns.
6. **Live site pricing mismatch until the merge.** `main`'s llms.txt describes
   the 2026 euro ladder, but `main`'s pricing page still shows the old dollar
   ladder. Merging this branch fixes that.

## Still open content work

From `docs/platform-vs-website-audit.md`:

- The rest of Gap 4: Ticketing, Mailboxes, Segments and Number Routing as named
  capabilities rather than list items.
- Everything from "The company's own feature deck" onward, including the two
  decisions that need a person: the mobile app (placeholder bundle id), and deck
  features with no code behind them (product catalogue, brand monitoring,
  social publishing).
