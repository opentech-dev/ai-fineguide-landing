# Platform vs website — coverage audit

**Date:** 2026-09-14
**Question:** what does the platform do that the website does not say?

## Method

Three sources, each checked against code rather than documentation:

1. **`MODULE_DEFINITIONS`** in
   `ai-backoffice-api/apps/backoffice-api/src/modules/module-registry/module-definitions.ts`
   — the file names itself "the single source of truth for what modules exist".
2. **Workspace app modules** under
   `ai-backoffice-frontend/apps/ai-workspace/src/modules/`, counted by lines of
   `.ts`/`.tsx`, cross-checked against `routes/routes.tsx` for what is reachable.
3. **Website content** — every `title`/`name`/`label` in `src/i18n/en.ts`,
   page by page.

Where the two disagree, code wins.

## The platform, as the registry defines it

Ten modules. Submodules indented.

| Module | Category | Submodules | Workspace LOC |
|---|---|---|---|
| CRM | core | Contacts, Leads, Tasks, Pipelines, **Ticketing**, Conversations | 36,848 |
| AI Agents | core | — | 23,657 |
| Voice QA | advanced | Rules, Conversations, Departments, Evaluations, Agents, **Clients** | 17,333 |
| *(telephony)* | *not in registry* | — | 15,652 |
| Messages | core | — | 13,746 |
| Workflows | integration | — | 11,134 |
| Inbox | core | **Mailboxes & Domains** | 6,601 |
| Billing | core | — | 4,421 |
| Workspace | core | — | 3,376 |
| **FineClaw** | advanced | — | 2,417 |
| **Agency** | advanced | — | *(API-only)* |

## The website, as it stands

Five product pages: AI Assistants, CRM, Voice AI, Voice QA, Workspace. The
landing page names eight modules; three of them have no page and no nav entry.

| Landing page names | Has a page? |
|---|---|
| Assistants, CRM, Voice, Workspace, QA & Analytics | yes |
| Messages, Inbox, Automations | **no** |

---

## Gap 1 — Agency: an entire business model, invisible

**Nothing on the website mentions it.** Not the landing page, not Enterprise,
not pricing.

`modules/agency/` is a white-label reseller platform. The `Agency` model:

```prisma
model Agency {
  name            String?
  logoUrl         String?
  description     String?
  privacyPolicy   String?      // their own legal docs
  termsOfUse      String?
  theme           Json?        // their own branding
  cname           String? @unique   // their own domain
  loginPageConfig Json?        // their own login page
  organizations   Organization[]    // many customer orgs beneath them
}
```

`agency.config.ts` points at a custom-domain build system
(`builds.fineguide.ai/build-system/custom_domains`) with a configurable
`domainSuffix`. The controller exposes `POST /cname`, enrollment endpoints, and
logo upload. Agency resolution is wired into `auth.service.ts`, so it is live
request-path infrastructure rather than a prototype.

So the platform supports agencies reselling Fineguide under their own domain,
branding, login page and legal terms, each owning multiple customer
organisations — and a visitor cannot discover any of it.

**This is the single largest gap in the audit.** It is not a feature bullet; it
is a go-to-market channel with no landing surface.

## Gap 2 — FineClaw: a no-code agent builder, invisible

Routed at `/agents/:organizationId/*`, permission-gated like every other module
(`ModuleGuard` → `useModuleAccess`), not behind a feature flag.

A six-step wizard — Name & Type → Template → Access → Prompt → **Skills** →
Review — shipping **14 ready-made agent templates**:

> Customer Support · Sales Qualification · HR & Onboarding · Marketing
> Copywriter · Data Analyst · IT Helpdesk · Writing Assistant · Research Helper
> · Code Assistant · Health & Fitness Coach · Personal Finance Advisor ·
> Language Learning Tutor · Creative Brainstorm Partner · Daily Productivity
> Planner

and **10 tool categories** an agent can be granted:

> CRM Contacts · CRM Leads & Pipelines · CRM Tasks · Chat & Messaging ·
> Knowledge Base · n8n Workflows · **Web Search & Fetch** · **Product Search** ·
> Organization & Users · Usage & Analytics

The AI Assistants page describes Persona, Learning Context, Voice, Session
Variables, Actions and Human Handoff. Its "Actions" is *"trigger webhooks, API
calls, or workflows"* — webhook plumbing, not tool use. **Nowhere does the site
say an assistant can search the web, query your product catalogue, or read and
write CRM records as tools.** That is a materially different and stronger claim
than what is currently made.

## Gap 3 — Three named modules with nowhere to go

Messages (13,746 LOC), Inbox (6,601) and Workflows (11,134) are named in one
line each on the landing page and then dead-end. Together that is **31,481
lines of product** — more than CRM — reachable from no page and no nav entry.

Inbox in particular is real email: mailboxes, your own domains, IMAP/SMTP and
routing rules. The site's only mention is a landing-page sentence.

## Gap 4 — Features buried as sub-bullets

| Capability | Where it lives | Where the site puts it |
|---|---|---|
| **Ticketing** | first-class CRM submodule | one word in a list of eight CRM surfaces |
| **Mailboxes & Domains** | Inbox submodule | absent |
| **Departments / Clients** | Voice QA submodules | "Departments" appears; "Clients" does not |
| **Voice cloning** | assistants | one clause: "or use your own clone" |

Voice QA having a **Clients** submodule suggests it is usable as an agency- or
BPO-facing product — scoring calls on behalf of client companies. The website
frames Voice QA purely as internal QA.

---

## Defect found while auditing

**`public/sitemap.xml` advertises a dead URL to search engines.** Live on
production now:

```xml
<!-- Documentation -->
<url>
    <loc>https://app.fineguide.ai/docs</loc>
    <lastmod>2026-06-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
```

That URL redirects into the workspace app and renders **"Page not found"** — a
soft 404, which is worse than a hard one because crawlers index it as a valid
page at priority 0.8. `https://app.fineguide.ai/help` behaves the same way.
Neither `fineguide.ai/docs` nor `docs.fineguide.ai` exists (both 404).

There is no public documentation site. The entry should be removed until one
exists.

---

## The company's own feature list says 24. The site covers about 8.

`ai-fineguide-project/docs/marketing/FineGuide-Platform-Features.md` (754 lines)
describes itself as the source for a customer-facing PDF and HTML deck, with a
Romanian twin (`FineGuide-Functionalitati.md`). It enumerates **24 features in
7 groups**. The website covers roughly a third of them.

**Verified as built, and absent or nearly absent from the site:**

| # | Feature | Evidence |
|---|---|---|
| 6 | Integrated call centre | `telephony/` 15,652 LOC, plus a dedicated call-centre client app |
| 11 | Proactive interaction and **campaigns** | 9,247 LOC API + 7,792 LOC frontend |
| 18/19 | Business process automation, external integrations | `workflows/` 11,134 LOC |
| 21 | History, performance and analytics | Voice QA submodules |

**Campaigns deserves its own line.** ~17,000 lines across both repos, reachable
at `/telephony/:orgId/campaigns/`, comprising a campaign wizard, test calls,
detail and report pages — plus **audience Segments** (list/create/detail) and
number routing. The Voice AI page's single "Outbound calls" bullet is the only
trace of this on the website.

### Claims in that doc which the code does NOT support

Checked because a marketing document can run ahead of the product. These must
not be copied onto the site:

| # | Claim | Reality |
|---|---|---|
| 12 | Product catalogue and AI search | **Not built.** The only `PRODUCT_SEARCH` in the codebase is a storage-pack dimension, commented *"future product-search DB (Milvus)"* and explicitly "unsellable until that service is wired". FineClaw offers a "Product Search" tool category that is ahead of the backend. |
| 13 | Brand and reputation monitoring | No module. |
| 14 | Social media publishing | No module. |
| 16 | Employee management (HRM) | Marked `Coming soon` in the doc itself. |
| 17 | Training / certification (LMS) | Marked `Coming soon` in the doc itself. |
| 22 | Mobile application | **Built but unshippable.** `ai-callcenter-mobile` is a real Flutter app — 11,135 lines of Dart, iOS/Android/macOS targets, "Operator dashboard for managing customer conversations". But its bundle identifier is still Flutter's placeholder `com.example.aiCallcenterMobile`, which neither the App Store nor Play Store will accept. It cannot have shipped. |

The mobile app is the interesting one: it is genuinely built and genuinely not
released. Worth a decision — publish it and market it, or stop listing it.

## Claims I could not verify

- **"30+ languages supported across voice transcription"** — no language list
  exists anywhere in the API. Neither confirmable nor refutable from code.
- **"AI coverage in under two seconds"** — no latency target or measurement in
  the codebase.

Both predate this audit. Flagging them as unsourced, not as wrong.

## What I would do, in order

1. **Build an Agency page.** It is a business model with no front door, and it
   sells to a different buyer than the rest of the site.
2. **Give Campaigns real estate.** ~17,000 lines — wizard, segments, test calls,
   reporting — currently represented by one bullet. This is the most built-out
   capability with the least coverage.
3. **Rewrite the AI Assistants page around tools.** "Your assistant can look up
   a customer, update the CRM record and run a workflow itself" is stronger and
   truer than "trigger webhooks", and it is already shipped. Do **not** include
   Product Search — the backend does not exist.
4. **Give Messages, Inbox and Workflows a page each** — or one honest combined
   page. 31k lines deserve better than a sentence.
5. **Remove the dead docs URL from the sitemap.**
6. Surface Ticketing and Mailboxes as named capabilities, not list items.

## Decisions that need a person

- **The mobile app**: finished, unreleasable as configured. Ship it or drop it
  from the feature deck.
- **Product catalogue / brand monitoring / social publishing**: in the sales
  deck, absent from the code. Either they are planned and the deck should say
  so, or the deck is wrong.
- **FineClaw's "Product Search" tool** promises the same missing backend. Worth
  checking what happens today when an agent is granted it.

## Verification

Every "built" claim above is backed by a file path and a line count taken from
the repositories, not from documentation. Every "not built" claim is the absence
of a module plus a code comment saying so. The two live-URL findings were
checked against production. Nothing here was inferred from the marketing deck —
the deck is the thing being audited.
