// /sitemap.xml — the site's own pages (the blog has /blog/sitemap.xml; robots.txt names both), written from the pages
// that exist, so a new page is in it the day it ships. Each address with its trailing slash — the one its canonical
// names — and, where the page has a Romanian twin, the en / ro / x-default alternates on every entry (Google ignores
// a pair that does not point back), plus ru where a /ru/ copy exists (the comparisons). No <lastmod>: an inaccurate
// date is worse than none, and IndexNow tells Bing and Yandex when something changes.
import type { APIRoute } from 'astro';

const SITE = 'https://fineguide.ai';
const files = Object.keys(import.meta.glob('./**/*.astro'));
const toPath = (file: string): string => {
  const p = file.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/(^|\/)index$/, '$1');
  return p.endsWith('/') ? p : `${p}/`;
};
// The blog lists itself; dynamic routes have no single address; the 404 page is not a page to find.
const pages = files.filter((f) => !f.startsWith('./blog/') && !f.includes('[') && f !== './404.astro').map(toPath);
const has = new Set(pages);

const link = (lang: string, p: string) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${SITE}${p}"/>`;
const alt = (en: string, ro: string, ru: string) =>
  link('en', en) + link('ro', ro) + (has.has(ru) ? link('ru', ru) : '') + link('x-default', en);

export const GET: APIRoute = () => {
  const urls = pages.sort().map((p) => {
    const en = p.replace(/^\/(ro|ru)(?=\/)/, '');
    const ro = `/ro${en}`;
    const ru = `/ru${en}`;
    const pair = has.has(en) && has.has(ro);
    return `  <url><loc>${SITE}${p}</loc>${pair ? alt(en, ro, ru) : ''}</url>`;
  });
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
