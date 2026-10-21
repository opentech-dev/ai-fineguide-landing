// /blog/media/<id>.<ext> — the posts' images, copied from the API at build time (src/blog.ts says why: the API's
// answers carry a cookie Cloudflare will not cache past, these static files do not). A copy that cannot be fetched
// fails the build: a post must not go out with a broken picture.
import type { APIRoute, GetStaticPaths } from 'astro';
import { blogMedia } from '../../../blog';

export const getStaticPaths: GetStaticPaths = async () =>
  (await blogMedia()).map(({ file, source }) => ({ params: { file }, props: { source } }));

export const GET: APIRoute = async ({ props }) => {
  const { source } = props as { source: string };
  const r = await fetch(source, { headers: { 'User-Agent': 'fineguide-landing-build' } });
  if (!r.ok) throw new Error(`[blog] could not copy ${source}: ${r.status}`);
  return new Response(await r.arrayBuffer());
};
