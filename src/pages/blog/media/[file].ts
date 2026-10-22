// /blog/media/<id>.<ext> — the posts' images, copied from the API at build time (src/blog.ts says why: the API's
// answers carry a cookie Cloudflare will not cache past, these static files do not). A copy that cannot be fetched
// fails the build: a post must not go out with a broken picture. Each cover also gets /blog/media/<id>-800.webp, the
// card-sized copy lists show (blog.ts → thumbOf).
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { blogMedia, THUMB_WIDTH, thumbName } from '../../../blog';

export const getStaticPaths: GetStaticPaths = async () => {
  const media = await blogMedia();
  return [
    ...media.map(({ file, source }) => ({ params: { file }, props: { source } })),
    ...media
      .filter((m) => m.cover && /\.(png|jpg|webp)$/.test(m.file))
      .map(({ file, source }) => ({ params: { file: thumbName(file) }, props: { source, thumb: true } })),
  ];
};

export const GET: APIRoute = async ({ props }) => {
  const { source, thumb } = props as { source: string; thumb?: boolean };
  const r = await fetch(source, { headers: { 'User-Agent': 'fineguide-landing-build' } });
  if (!r.ok) throw new Error(`[blog] could not copy ${source}: ${r.status}`);
  const bytes = Buffer.from(await r.arrayBuffer());
  if (!thumb) return new Response(bytes);
  return new Response(await sharp(bytes).resize({ width: THUMB_WIDTH, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer());
};
