// /blog/<slug>.md — a post as Markdown, for language models and answer engines (the page links it as
// rel="alternate" type="text/markdown"; llms.txt points readers of the site at the Markdown copies). The same words as
// the page, with its title, summary, dates, topics and address on top.
import type { APIRoute, GetStaticPaths } from 'astro';
import { blogPosts, SITE, type RenderedPost } from '../../blog';

export const getStaticPaths: GetStaticPaths = async () =>
  (await blogPosts()).map((post) => ({ params: { slug: post.slug }, props: { post } }));

export const GET: APIRoute = ({ props }) => {
  const p = (props as { post: RenderedPost }).post;
  const labels = [...p.categories, ...p.tags];
  const text = [
    `# ${p.title}`,
    '',
    `> ${p.description}`,
    '',
    `By ${p.author} · published ${p.publishedAt.slice(0, 10)}${p.updatedAt.slice(0, 10) !== p.publishedAt.slice(0, 10) ? ` · updated ${p.updatedAt.slice(0, 10)}` : ''}${labels.length ? ` · ${labels.join(', ')}` : ''}`,
    `Source: ${SITE}${p.path}`,
    '',
    p.body.replace(/\]\(\/blog\//g, `](${SITE}/blog/`).trim(),
    '',
  ].join('\n');
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
