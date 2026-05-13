# ai-fineguide-landing

Marketing site: **Astro 5** + **Tailwind CSS v4** (`@tailwindcss/vite`). Static output to `dist/`.

## Commands

```bash
npm install
npm run dev      # local dev
npm run build    # production build
npm run preview  # serve dist
```

## Copy and locales

- **Canonical strings:** [`src/i18n/en.ts`](src/i18n/en.ts) — edit here first.
- **Romanian:** [`src/i18n/ro.ts`](src/i18n/ro.ts) currently re-exports `en` as `ro` until translations return.
- **HTML / OG language:** [`src/i18n/utils.ts`](src/i18n/utils.ts) exports `RO_LOCALE_MIRRORS_ENGLISH`. While `true`, `/ro/*` pages use `lang="en"` and `og:locale` `en_US` so document metadata matches visible English. Set to `false` when `ro.ts` is a real translation again.

## Routes

- English: `/`, `/ai-assistants`, `/crm`, `/voice-qa`, `/voice-ai`, `/workspace`, etc.
- Romanian prefix: `/ro`, `/ro/ai-assistants`, … (same English copy until `ro.ts` is filled in).

## Layout / SEO

- [`src/layouts/Layout.astro`](src/layouts/Layout.astro): `og:url` is built from the current path on `https://fineguide.ai`.

## Blog

External / separate from this Astro app; do not refactor the `blog/` tree as part of landing work.
