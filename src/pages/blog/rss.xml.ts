// /blog/rss.xml — the blog as RSS 2.0, the newest 50 posts (src/blog.ts). Readers, aggregators and AI crawlers
// follow feeds: each item carries the summary, the whole article (content:encoded, the same sanitised HTML the page
// shows), its author, topics, tags and cover. The old WordPress feed (/blog/feed/) redirects here.
import type { APIRoute } from 'astro';
import { absolute, blogPosts, SITE } from '../../blog';

const esc = (s: string): string => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** CDATA cannot hold "]]>": split it across two sections. */
const cdata = (s: string): string => `<![CDATA[${s.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
/** Links in the article are site paths; a feed reader needs them whole. */
const whole = (html: string): string => html.replace(/(href|src)="\//g, `$1="${SITE}/`);

export const GET: APIRoute = async () => {
  const posts = (await blogPosts()).slice(0, 50);
  const items = posts.map((p) => [
    '    <item>',
    `      <title>${esc(p.title)}</title>`,
    `      <link>${SITE}${p.path}</link>`,
    `      <guid isPermaLink="true">${SITE}${p.path}</guid>`,
    `      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>`,
    `      <dc:creator>${esc(p.author)}</dc:creator>`,
    `      <description>${esc(p.description)}</description>`,
    `      <content:encoded>${cdata(whole(p.html))}</content:encoded>`,
    ...[...p.categories, ...p.tags].map((c) => `      <category>${esc(c)}</category>`),
    ...(p.coverUrl ? [`      <media:content url="${esc(absolute(p.coverUrl))}" medium="image"${p.coverAlt ? `><media:description>${esc(p.coverAlt)}</media:description></media:content>` : ' />'}`] : []),
    '    </item>',
  ].join('\n'));
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">',
    '  <channel>',
    '    <title>Fineguide Blog</title>',
    `    <link>${SITE}/blog/</link>`,
    `    <atom:link href="${SITE}/blog/rss.xml" rel="self" type="application/rss+xml" />`,
    '    <description>Expert insights, proven strategies and real-world guides to help you master AI customer interactions.</description>',
    '    <language>en</language>',
    `    <image><url>${SITE}/images/favicon.png</url><title>Fineguide Blog</title><link>${SITE}/blog/</link></image>`,
    ...(posts[0] ? [`    <lastBuildDate>${new Date(posts.reduce((m, p) => (p.updatedAt > m ? p.updatedAt : m), posts[0].updatedAt)).toUTCString()}</lastBuildDate>`] : []),
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
