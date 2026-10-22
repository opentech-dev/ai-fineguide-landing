import { en } from './en';
import { ro } from './ro';

export type Lang = 'en' | 'ro';
import type { Translations } from './types';
export type { Translations };

/** Set to `false` when `ro.ts` holds real Romanian copy again (not re-exporting `en`). */
export const RO_LOCALE_MIRRORS_ENGLISH = false;

const translations: Record<Lang, Translations> = { en, ro };

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/ro') ? 'ro' : 'en';
}

export function useTranslations(lang: Lang): Translations {
  return translations[lang];
}

/**
 * Every page is served at its address with a trailing slash (Astro writes `<path>/index.html`), and that is the
 * address its canonical names, so a link without the slash costs every reader and crawler a redirect. A file
 * (`/llms.txt`) keeps its name; an anchor or query stays after the slash (`/privacy-policy/#your-rights`).
 */
function withSlash(path: string): string {
  const [, base, rest] = path.match(/^([^?#]*)(.*)$/)!;
  if (base.endsWith('/') || /\.[a-z0-9]+$/i.test(base)) return path;
  return `${base}/${rest}`;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/ro(?=\/|$)/, '') || '/';
  return withSlash(lang === 'ro' ? `/ro${clean === '/' ? '/' : clean}` : clean);
}

export function switchLangPath(currentPath: string, targetLang: Lang): string {
  const stripped = currentPath.replace(/^\/ro(?=\/|$)/, '') || '/';
  return withSlash(targetLang === 'ro' ? `/ro${stripped === '/' ? '/' : stripped}` : stripped);
}
