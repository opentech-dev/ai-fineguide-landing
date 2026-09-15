# Platform vs website — coverage audit

**Date:** 2026-09-14
**Question:** what does the platform do that the website does not say?
**Scope:** Agency and FineClaw are **out of scope** by direction and are not
assessed here. Everything below excludes them.

> **Status update — Gaps 1, 2 and 3 are now closed on `redesign/landing-2026`.**
> The landing page has gained three sections since this audit was written:
> the workflow builder sold on its 18 shipped step types (`b1e51a6`), a
> campaigns/telephony section built from the `CampaignType` enum (`690dcad`),
> and a Messages + Inbox section (`9d250ed`). Each shipped with a guard in
> `scripts/verify-claims.mjs` that re-derives the claim from source, so the
> gap analysis below is preserved as the record of *why* those sections exist
> — not as a list of outstanding work. **Gap 4 is partly closed (see its table);
> everything from "The company's own feature deck" onward is still open.**

## Method

Three sources, each checked against code rather than documentation:

1. **`MODULE_DEFINITIONS`** in
   `ai-backoffice-api/.../module-registry/module-definitions.ts` — the file names
   itself "the single source of truth for what modules exist".
2. **Workspace app modules** under
   `ai-backoffice-frontend/apps/ai-workspace/src/modules/`, counted by lines of
   `.ts`/`.tsx` and cross-checked against `routes/routes.tsx` for reachability.
3. **Website content** — every `title`/`name`/`label` in `src/i18n/en.ts`.

Where they disagree, code wins. Where a capability is declared but has no
runtime, it is called out as planned, not shipped — that distinction is the most
important thing in this document.

## The shape of the gap

| Module | Workspace LOC | Website coverage |
|---|---|---|
| CRM | 36,848 | full page |
| AI Agents | 23,657 | full page |
| Voice QA | 17,333 | full page |
| **Telephony** | **15,652** | one bullet ("Outbound calls") |
| **Messages** | **13,746** | one landing-page sentence |
| **Workflows** | **11,134** | one landing-page sentence |
| **Inbox** | **6,601** | one landing-page sentence |
| Workspace | 3,376 | full page |

**47,133 lines — the four bolded rows — share four sentences and no page.**
That is more code than CRM and Assistants combined.

---

## Gap 1 — Telephony is a campaign platform, sold as a bullet

`modules/telephony/` is the third-largest module and contains four distinct
products:

| Area | Pages |
|---|---|
| **Campaigns** | List, Wizard, Detail, Report, **Test Call** |
| **Segments** | List, Create, Detail |
| **Channels** | List, Form |
| **Integrations & routing** | List, New, Detail, **Number Routing** |

Backed by 9,247 lines of API (`modules/campaigns/`: dispatcher, import service,
import consumer) — **roughly 17,000 lines across both repos.**

The website's entire treatment is the Voice AI page's bullet "Outbound calls".
Audience segmentation, campaign reporting, test calls before you dial a real
customer, and inbound number routing are all invisible.

This is the largest single gap in scope.

## Gap 2 — The workflow builder: 18 real step types, one sentence

The site says: *"Build workflows visually inside Fineguide, or connect n8n."*

What actually ships — `engine/registry.ts` `HANDLERS`, 18 step types with live
handlers:

- **AI:** `extract` (pull structured variables out of a conversation)
- **Logic:** `condition`, `split`, `for_each`
- **CRM:** `find_contact`, `find_many`, `create`/`update`/`remove` for
  **contact, lead and company** (9 steps), `move_pipeline`, `add_tags`,
  `create_task`

So a workflow can read a conversation, extract fields from it, branch on them,
loop, find or create the contact, create the lead, move it down a pipeline, tag
it and open a task. None of that is on the website.

### What must NOT be claimed

`registry.ts` also exports `PLANNED_STEP_TYPES` — authorable in the builder,
**no runtime**:

> `classify` · `summarize` · `translate` · `reply` · `notify` · `send_email` ·
> `webhook`

The engine pauses such a run for human review with a friendly label rather than
hard-failing (`workflow-engine.service.ts:410` is the "no handler" path for
anything else). This is good design, and it means **the builder showing a step
is not evidence the step works.** Do not market summarise, translate, classify,
auto-reply or send-email workflow steps.

Related, and already fixed earlier in this run: workflow runs consume no credits
at all, so no workflow pricing belongs on the site either
(`.claude/rules/billing-usage.md` states this outright).

## Gap 3 — Messages and Inbox are products, not footnotes

**Messages** (13,746 LOC) — Conversations, **Reports**, and a
**Manager Settings** surface covering Team, Departments, Routing and Tags. That
is supervisor tooling: team structure, conversation routing rules, and its own
reporting. The site gives it one sentence.

**Inbox** (6,601 LOC) — AddMailbox, Mailboxes, MailboxDetail, **Rules**,
**Signature**. Real email: connect your own mailboxes and domains over IMAP and
SMTP, with routing rules and signatures. `Mailboxes & Domains` is a first-class
submodule in the registry. The site gives it one sentence.

## Gap 4 — Capabilities buried as list items

| Capability | Status in code | Status on site |
|---|---|---|
| ~~**Ticketing**~~ | **row was wrong** — `crm/tickets` is a 13-line `<Navigate>` stub: *"Tickets became the Inbox, which is now its own top-level module."* Not a submodule. | resolved differently: the dead `Tickets` surface was replaced with **Companies** (`5f7731c`), which was the real omission — 1,533 lines, absent from the site |
| **Mailboxes & Domains** | Inbox submodule | covered by the Inbox column (`9d250ed`) |
| **Segments** | 3 pages under telephony | covered by the campaigns section (`690dcad`) |
| **Number routing** | dedicated page | covered by the campaigns section (`690dcad`) |
| ~~**Voice QA → Clients**~~ | **row was wrong** — there is no Clients submodule. The only match is `conversations/ClientSearchSelect.tsx`, an async CRM contact picker; its comment records the 2026-04-17 `VoiceQaClient` → `Contact` migration. The agency/BPO reading was unfounded. | n/a — and the site already says calls attach to the same customer record |
| **Voice QA → Cases** | *found while checking the row above* — `voiceqa/cases` 1,669 lines + `case-categories` 592; a named issue grouping many calls for one contact, with a sentiment arc | covered by the Insights block (`c7b5aaf`) |

> **Two rows in this table were wrong**, both from the same mistake: inferring a
> capability from a directory or file name without opening it. `crm/tickets`
> looked like a ticketing submodule and is a redirect; `ClientSearchSelect`
> looked like a Clients submodule and is a contact picker. Anything in this
> document asserted from a path alone deserves the same scrutiny — the line
> counts and code comments elsewhere were each read directly and are sound.

~~`Voice QA` having a **Clients** submodule alongside Departments and Agents
suggests it is usable on behalf of client companies — an agency/BPO framing.~~
**Retracted.** Checked on 2026-09-14: no such submodule exists. `voiceqa/`
contains api, case-categories, cases, components, conversations, departments,
integration, staff, statistics, utils. The inference was built on a filename.

---

## The company's own feature deck: 24 features, ~8 covered

`ai-fineguide-project/docs/marketing/FineGuide-Platform-Features.md` (754 lines)
is the source for a customer-facing PDF, with a Romanian twin
(`FineGuide-Functionalitati.md`). It lists 24 features in 7 groups.

**Verified built, thinly covered or absent on the site:** integrated call centre
(§6), proactive interaction and campaigns (§11), business process automation and
external integrations (§18–19), history and analytics (§21).

### Deck claims the code does not support

Checked because a sales document can run ahead of the product. These must not be
copied onto the site:

| § | Claim | Reality |
|---|---|---|
| 12 | Product catalogue and AI search | Not built. The only `PRODUCT_SEARCH` in the codebase is a storage-pack dimension commented *"future product-search DB (Milvus)"*. |
| 13 | Brand and reputation monitoring | No module. |
| 14 | Social media publishing | No module. |
| 16 | Employee management (HRM) | Marked `Coming soon` in the deck itself. |
| 17 | Training / certification (LMS) | Marked `Coming soon` in the deck itself. |
| 22 | Mobile application | **Built, unshippable as configured.** `ai-callcenter-mobile` is a real Flutter app — 11,135 lines of Dart, iOS/Android/macOS targets, "Operator dashboard for managing customer conversations" — but its bundle id is still Flutter's placeholder `com.example.aiCallcenterMobile`, which neither store accepts. |

The mobile app is the one worth a decision: genuinely finished, genuinely not
released.

---

## Defect found and fixed

**`public/sitemap.xml` advertised a dead URL.** Live on production at priority
0.8:

```xml
<loc>https://app.fineguide.ai/docs</loc>
```

It redirects into the workspace SPA and renders **"Page not found"** while
returning HTTP 200 — a soft 404, which crawlers index as a real page.
`/help` behaves identically; neither `fineguide.ai/docs` nor `docs.fineguide.ai`
exists. Removed, with a comment explaining why so it is not re-added without
checking the rendered body rather than the status code.

## Claims I could not verify

- **"30+ languages supported across voice transcription"** — no language list
  exists anywhere in the API.
- **"AI coverage in under two seconds"** — no latency target or measurement in
  the codebase.

Both predate this audit. Flagged as unsourced, not as wrong.

## What I would do, in order

1. **Give telephony a page.** Campaigns, segments, test calls, reporting and
   number routing — ~17,000 lines currently represented by one bullet.
2. **Rewrite the Automations section around the 18 shipped steps.** "Extract the
   budget from the conversation, create the lead, move it to Qualified and tag
   it" is concrete, true, and shipped. Avoid the seven planned steps.
3. **Give Messages and Inbox a page** — or one honest combined page covering
   team routing, departments, mailboxes and rules.
4. Surface Ticketing, Mailboxes, Segments and Number Routing as named
   capabilities rather than list items.

## Decisions that need a person

- **The mobile app**: finished, unreleasable as configured. Ship it or drop it
  from the deck.
- **Product catalogue, brand monitoring, social publishing**: in the sales deck,
  absent from the code. Either they are roadmap and the deck should say so, or
  the deck is wrong.

## Verification

Every "built" claim is backed by a file path and a line count taken from the
repositories. Every "not built" claim is the absence of a module plus a code
comment or an explicit `PLANNED_STEP_TYPES` entry saying so. The two live-URL
findings were checked against production. Nothing was inferred from the
marketing deck — the deck is the thing being audited.
