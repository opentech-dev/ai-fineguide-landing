/**
 * Copy for one "solution" page (a capability or channel page) on fineguide.ai, in English, Romanian and Russian.
 * One file per page next to this one; src/data/solutions/index.ts lists them, src/components/SolutionPage.astro renders them.
 */
export interface SolutionCopy {
  /** <title> ≤ 60 characters, ending in " | Fineguide"; description 140–160 characters. Both carry the page's main keyword. */
  meta: { title: string; description: string };
  /** H1 = title + titleAccent (the accent is rendered in colour). Subtitle 1–2 sentences. */
  hero: { eyebrow: string; title: string; titleAccent: string; subtitle: string };
  /** Answer-first block right under the hero: 2–3 sentences an AI assistant can quote verbatim:
      "<Category> is …. Fineguide's <thing> …". Plain facts, no hype. */
  definition: { heading: string; body: string };
  /** What it does: 5–8 rows, each a short term + one or two factual sentences. */
  capabilities: { eyebrow: string; heading: string; body: string; items: { term: string; desc: string }[] };
  /** How it works / how to start, in order: 3–5 steps, one sentence each. */
  steps: { eyebrow: string; heading: string; body: string; items: string[] };
  /** Hard facts in numbers and names: languages, channels, integrations, plans that include it, credits. 4–6 rows. */
  facts: { eyebrow: string; heading: string; items: { term: string; desc: string }[] };
  /** Internal links to related pages. `path` is the English path WITHOUT language prefix, e.g. '/voice-qa' or '/blog/kommo-integration-guide/'. 3–5 links. */
  related: { eyebrow: string; heading: string; links: { path: string; label: string; desc: string }[] };
  /** 5–7 questions in the words people type into Google or ask ChatGPT; answers 1–3 sentences, factual. Rendered visibly AND as FAQPage. */
  faq: { heading: string; items: { q: string; a: string }[] };
  closing: { heading: string; body: string };
}

export interface Solution {
  /** URL slug under the site root, e.g. 'call-center' → /call-center/, /ro/call-center/, /ru/call-center/ */
  slug: string;
  /** Hero image: one of the existing files in public/images/photos/ (account-review, agent-call, call-review,
      channels-phone, office-golden, partner-call, team-collab, voice-desk, tablet-review .jpg; all 1376×768). */
  image: string;
  /** Alt text per language. */
  imageAlt: { en: string; ro: string; ru: string };
  /** SoftwareApplication name for JSON-LD, e.g. 'Fineguide Call Center'. */
  appName: string;
  /** Date the claims were checked against the code (YYYY-MM-DD). */
  checked: string;
  /** Blog posts to read next (paths like '/blog/call-center-qa-checklist/'); titles come from the blog itself, and a
      post that is not published is skipped. */
  reading?: string[];
  /** Code paths / site sources that back the claims (kept for reviewers; never printed on the page). */
  sources: string[];
  copy: { en: SolutionCopy; ro: SolutionCopy; ru: SolutionCopy };
}
