# Platform vs website — coverage audit

**Date:** 2026-09-14
**Question:** what does the platform do that the website does not say?
**Scope:** Agency and FineClaw are **out of scope** by direction and are not
assessed here. Everything below excludes them.

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
| **Ticketing** | first-class CRM submodule | one word among eight CRM surfaces |
| **Mailboxes & Domains** | Inbox submodule | absent |
| **Segments** | 3 pages under telephony | absent |
| **Number routing** | dedicated page | absent |
| **Voice QA → Clients** | registry submodule | absent |

`Voice QA` having a **Clients** submodule alongside Departments and Agents
suggests it is usable on behalf of client companies — an agency/BPO framing. The
site presents Voice QA purely as internal QA.

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
