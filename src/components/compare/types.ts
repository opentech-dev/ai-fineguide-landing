/** The copy each comparison page file passes to ComparePage.astro, and each hub to CompareHub.astro. */

/** A line of copy, optionally footnoted: refs are "kommo:pricing" (competitor:source) or "fg:fg-pricing". */
export type Line = string | { text: string; refs: string[] };

export interface CompareCopy {
  /** ≤ 60 characters. */
  title: string;
  /** 120 to 155 characters. */
  description: string;
  /** The breadcrumb label. */
  crumb: string;
  h1: string;
  h1Accent: string;
  /** Two or three sentences that answer the question on their own. */
  shortAnswer: string;
  tableHeading: string;
  competitorStronger: { heading: string; items: Line[] };
  fineguideStronger: { heading: string; items: Line[] };
  choose: {
    heading: string;
    competitor: { label: string; items: string[] };
    fineguide: { label: string; items: string[] };
  };
  switching: { heading: string; intro: string; steps: { title: string; body: Line }[] };
  /** Plain text: the same words go into the FAQPage structured data. */
  faq: { q: string; a: string; refs?: string[] }[];
  closing: { heading: string; body: string };
  /** Further reading beyond the five product links every comparison carries. */
  extraLinks?: { href: string; label: string }[];
}

export interface HubCopy {
  /** ≤ 60 characters. */
  title: string;
  /** 120 to 155 characters. */
  description: string;
  h1: string;
  h1Accent: string;
  intro: string;
  aboutHeading: string;
  about: string;
  listHeading: string;
  methodHeading: string;
  method: { term: string; desc: string }[];
  closing: { heading: string; body: string };
}
