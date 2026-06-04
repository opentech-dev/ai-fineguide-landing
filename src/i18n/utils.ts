import { en } from './en';
import { ro } from './ro';

export type Lang = 'en' | 'ro';
export type Translations = typeof en;

/** Set to `false` when `ro.ts` holds real Romanian copy again (not re-exporting `en`). */
export const RO_LOCALE_MIRRORS_ENGLISH = false;

const translations: Record<Lang, Translations> = { en, ro };

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/ro') ? 'ro' : 'en';
}

export function useTranslations(lang: Lang): Translations {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/ro/, '') || '/';
  return lang === 'ro' ? `/ro${clean === '/' ? '' : clean}` : clean;
}

export function switchLangPath(currentPath: string, targetLang: Lang): string {
  const stripped = currentPath.replace(/^\/ro/, '') || '/';
  return targetLang === 'ro' ? `/ro${stripped === '/' ? '' : stripped}` : stripped;
}
