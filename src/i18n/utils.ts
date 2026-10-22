import { en } from './en';
import { ro } from './ro';
import { ru } from './ru';

export type Lang = 'en' | 'ro' | 'ru';
/** Every language the site is published in; English lives at the root, the others under /ro/ and /ru/. */
export const LANGS: Lang[] = ['en', 'ro', 'ru'];
export const LANG_NAMES: Record<Lang, string> = { en: 'English', ro: 'Română', ru: 'Русский' };
import type { Translations } from './types';
export type { Translations };

/** Set to `false` when `ro.ts` holds real Romanian copy again (not re-exporting `en`). */
export const RO_LOCALE_MIRRORS_ENGLISH = false;

const translations: Record<Lang, Translations> = { en, ro, ru };
const PREFIX = /^\/(ro|ru)(?=\/|$)/;

export function getLangFromUrl(url: URL): Lang {
  return (url.pathname.match(PREFIX)?.[1] as Lang | undefined) ?? 'en';
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
  const clean = path.replace(PREFIX, '') || '/';
  return withSlash(lang === 'en' ? clean : `/${lang}${clean}`);
}

/** The same page in another language: /ro/crm/ → /ru/crm/. */
export function switchLangPath(currentPath: string, targetLang: Lang): string {
  return getLocalizedPath(currentPath, targetLang);
}
