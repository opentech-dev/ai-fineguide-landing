// /blog/sitemap.xml — the blog's pages for search engines, each with its last change (robots.txt names it beside the
// site's own sitemap): the index, every post, every topic, and the tags that hold enough posts to be indexed.
import type { APIRoute } from 'astro';
import { blogCategories, blogPosts, blogTags, categoryPath, indexedTags, SITE, tagPath } from '../../blog';

const newest = (ps: Array<{ updatedAt: string }>): string => ps.reduce((m, p) => (p.updatedAt > m ? p.updatedAt : m), ps[0]?.updatedAt ?? '');

export const GET: APIRoute = async () => {
  const [posts, categories, tags, indexed] = await Promise.all([blogPosts(), blogCategories(), blogTags(), indexedTags()]);
  const urls: Array<[string, string]> = [];
  if (posts.length) urls.push(['/blog/', newest(posts)]);
  for (const p of posts) urls.push([p.path, p.updatedAt]);
  for (const c of categories) urls.push([categoryPath(c.label), newest(c.posts)]);
  for (const tg of tags.filter((x) => indexed.has(x.label))) urls.push([tagPath(tg.label), newest(tg.posts)]);
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(([path, mod]) => `  <url><loc>${SITE}${path}</loc>${mod ? `<lastmod>${mod}</lastmod>` : ''}</url>`),
    '</urlset>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
