# Romanian copy review

**Date:** 2026-09-15
**Scope:** every string in `src/i18n/ro.ts` (homepage, all product pages,
pricing, enterprise, contact, demo). The legal pages were **not** touched.
**Needs:** a read-through by a native Romanian speaker before this goes live.

## What was wrong

Much of the Romanian read as a word-for-word translation of the English:

- **Calques** that make no sense in Romanian: "coloană vertebrală nativ AI",
  "dansul de export și import dintre tool-uri", "arheologia de Slack",
  "fără fapte halucinate", "Gata să consolidezi?", "Opt suprafețe",
  "o altă lentilă peste aceleași date", "Identitate care supraviețuiește
  schimbării de canal", "le-ai uni cu scotch".
- **Grammar errors**: "Una platformă" (the "By the numbers" row), "menționări"
  (should be "mențiuni"), "ataşează" written with a cedilla ş instead of a comma ș.
- **Broken sentences** left behind when long dashes were removed from the site:
  "Asistentul apare unde apar clienții tăi, widget-uri web, inbox-uri sociale…",
  "Adaptăm Fineguide pe al tău, integrări custom…", " - " used as a dash.
- **Anglicisms with a normal Romanian word**: task-uri, tickete, deadline-uri,
  custom, walkthrough, deployment, tool-uri, insight-uri, scoring, deal, stack.
- **Inconsistent terms**: "task-uri" on some pages and "sarcini" on others;
  "tickete" and "tichete"; "unelte" and "tool-uri"; two different automation headlines.
- **Drift from the English**: the homepage headline said "Simplifică" where the
  English says "Transform".

## Glossary now used

| English | Romanian | Note |
|---|---|---|
| task | sarcină / sarcini | was mixed with "task-uri" |
| ticket | tichet / tichete | DOOM spelling; was mixed with "tickete" |
| deadline / due date | termen | |
| custom | personalizat | |
| tool | aplicație / instrument | |
| walkthrough | prezentare, or "în 15 minute" | |
| deployment (enterprise) | instalare / implementare | "on-premise" kept |
| builder (workflows) | editor vizual | was "constructor" |
| scoring | punctaj / evaluare | |
| handoff / escalation | predare către un om / un coleg | "escaladare" kept where it is the concept |
| outbound / inbound | apeluri efectuate / primite | already used on Voice AI |
| Outreach campaign | Prospectare | |
| Sales / Support (as teams) | Vânzările / Suportul | |

**Kept in English on purpose:** product and module names (Voice QA, Voice AI,
Workspace, Inbox, Context Packs), plan names, and terms Romanian SaaS users
already say in English: lead, pipeline, workflow, dashboard, webhook, CRM, SLA,
on-premise, white-label, onboarding, bare metal, round-robin.

**Tone:** informal "tu" throughout (unchanged), short declarative sentences,
direct and professional, the same register as the English.

## Headline changes

| Where | Before | After |
|---|---|---|
| Home hero | Simplifică fiecare interacțiune cu clienții tăi. | Transformă felul în care afacerea ta comunică cu clienții. |
| Home hero subtitle | Unifică conversațiile, … totul construit pe AI din temelii. | Conversațiile, CRM-ul, canalele și fluxurile de lucru, reunite într-o singură platformă construită pe AI de la bun început. |
| Home, Assistants | AI care gestionează conversațiile, de fiecare dată. | AI care gestionează fiecare conversație. |
| Home, Messages | Fiecare conversație ajunge undeva unde un om poate prelua. | Fiecare conversație ajunge acolo unde un om o poate prelua. |
| Home + Campaigns page | Apeluri outbound care se desfășoară singure. | Campanii de apeluri care se derulează singure. |
| Home + Workspace page | Documente care trăiesc alături de client. | Documentele echipei, lângă fișa clientului. |
| Home, numbers | Una platformă care înlocuiește cele șapte tool-uri… cu scotch. | O singură platformă în locul celor șapte aplicații pe care altfel le-ai lega cu sârmă. |
| Home + Workspace CTA | Gata să consolidezi? | Gata să aduci totul într-un singur loc? |
| Automations hero | …Nimeni nu se atinge de ea. | …Nimeni nu intervine. (now matches the homepage) |
| CRM | Opt suprafețe, o singură fișă a clientului. | Opt secțiuni, o singură fișă a clientului. |
| CRM | Identitate care supraviețuiește schimbării de canal. | Clientul rămâne același, oricare ar fi canalul. |
| Voice QA CTA | Renunță la eșantion. Începe să scorezi. | Renunță la eșantioane. Evaluează fiecare apel. |
| Enterprise hero | Enterprise în termenii tăi. | Enterprise, în condițiile tale. |
| Pricing add-ons | Suplimente | Opțiuni suplimentare ("suplimente" reads as dietary supplements) |

The full change is one commit on `redesign/landing-2026`; `git show` on it
lists every string.

## Not changed

- Prices, credit counts and the pricing phrases that `scripts/verify-pricing.mjs`
  checks, and every claim `scripts/verify-claims.mjs` guards. Meaning is
  unchanged everywhere, including what the product does not do.
- The security headline "Datele tale, în condițiile tale", which a check
  depends on and which reads fine.
- Privacy policy and terms: legal text, and it needs a lawyer's eye, not a copywriter's.

## For the native reviewer

1. **Headline:** "Transformă felul în care afacerea ta comunică cu clienții."
   is closer to the English than the old line, but "Transformă" at the start
   is a little formal. An alternative is "Schimbă felul în care vorbești cu clienții."
2. **"sarcini" vs "task-uri":** "sarcini" was chosen for consistency and because
   Romanian CRMs use it. If the product interface ever gets a Romanian
   translation, the site should follow whatever it picks.
3. **"le-ai lega cu sârmă"** is the Romanian idiom for a makeshift fix. Check
   it doesn't read too colloquial.
4. The chat widget on the Romanian pages still greets visitors in English
   ("Hi! How can I help you today?"). That text comes from the assistant's
   own settings, not this repo.

## Checked

Build (30 pages) and all 8 verification scripts pass. The Romanian home, CRM,
Campaigns, Workspace, Enterprise, Automations and Voice QA pages were captured
at 1440px and 375px: no sideways scroll, and headlines wrap cleanly.
