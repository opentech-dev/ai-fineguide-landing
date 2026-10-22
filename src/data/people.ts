/**
 * The people the site names: today its founder, who also writes the blog. One record, so the About page, his profile
 * (/about/liviu-maftuleac/), every byline, the feed and the structured data name him the same way and point at one
 * profile. The facts are the owner's (2026-10-21): Liviu Maftuleac is the sole founder, owner and holder of
 * Fineguide.AI, Eightcell Labs and Tesseract. tesseract.dev carries the same profile at its /about/liviu-maftuleac/;
 * each names the other in `sameAs`, with his LinkedIn (the owner's link, 2026-10-22). Add another social profile only
 * with the owner's word that it is his.
 */
export const FOUNDER = {
  name: 'Liviu Maftuleac',
  /** The names the blog API may hold in a post's author field (typed in the admin panel). */
  aliases: ['Liviu', 'Liviu Maftuleac'],
  path: '/about/liviu-maftuleac/',
  id: 'https://fineguide.ai/about/liviu-maftuleac/#person',
  linkedin: 'https://www.linkedin.com/in/liviu-maftuleac-92819829/',
  tesseract: 'https://tesseract.dev/about/liviu-maftuleac/',
  sameAs: ['https://www.linkedin.com/in/liviu-maftuleac-92819829/', 'https://tesseract.dev/about/liviu-maftuleac/'],
} as const;

/** How structured data elsewhere on the site refers to him: by @id, with his name and profile. */
export const founderRef = {
  '@type': 'Person',
  '@id': FOUNDER.id,
  name: FOUNDER.name,
  url: `https://fineguide.ai${FOUNDER.path}`,
};

/** A post author's full name: the founder's whatever the API holds for him, anyone else as written. */
export const authorName = (author: string): string =>
  (FOUNDER.aliases as readonly string[]).includes(author.trim()) ? FOUNDER.name : author;
