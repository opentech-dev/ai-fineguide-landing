/**
 * The "best X" guides under /best/ (EN), /ro/best/ and /ru/best/: a fair round-up of the tools people weigh in one
 * category, Fineguide among them. The tools are listed alphabetically, never ranked. Every fact about another product is
 * the sourced, dated capability text of src/data/compare.ts (read on the vendor's own pages; no prices, by the owner's
 * rule); the guide's own words only say who each tool suits. One file per guide next to this one, listed in index.ts;
 * src/components/best/BestPage.astro renders it.
 */
import type { CompareLang, RowKey, Text } from '../compare';

export interface BestPick {
  /** A competitor id from src/data/compare.ts (COMPETITORS), or 'fineguide'. */
  id: string;
  /** One sentence, in each language: the kind of team this tool suits best, judged from its sourced facts. */
  bestFor: Text;
  /** Slug of the /compare/<slug>/ page that sets this tool against Fineguide, when there is one. */
  compare?: string;
}

export interface BestCopy {
  /** <title> ≤ 60 characters; description 120–160. Both carry the category phrase people type. */
  meta: { title: string; description: string };
  /** The breadcrumb label of this guide. */
  crumb: string;
  /** H1 = h1 + h1Accent. */
  h1: string;
  h1Accent: string;
  /** 40–80 words that answer "what is the best X?" on their own, naming the tools in the guide. */
  shortAnswer: string;
  /** "What is X?" — 2–3 sentences, the category defined in plain words. */
  definition: { heading: string; body: string };
  /** How the tools were chosen and compared. */
  method: { heading: string; items: { term: string; desc: string }[] };
  listHeading: string;
  glanceHeading: string;
  /** 5–7 questions in people's words; answers 1–3 sentences. Rendered visibly AND as FAQPage. */
  faq: { q: string; a: string }[];
  closing: { heading: string; body: string };
}

export interface BestGuide {
  /** URL slug: /best/<slug>/ */
  slug: string;
  /** The date the guide was written or last reviewed (YYYY-MM-DD); each tool also shows the date its facts were read. */
  updated: string;
  /** The rows of src/data/compare.ts shown for every tool, in this order. */
  rows: RowKey[];
  /** Alphabetical order is applied by the page (by tool name), whatever the order here. */
  picks: BestPick[];
  /** Fineguide pages to read next (English paths without a language prefix, e.g. '/omnichannel-chatbot'). */
  related: { path: string; label: Text }[];
  /** One line for the /best/ hub and llms.txt. */
  summary: Text;
  copy: Record<CompareLang, BestCopy>;
}
