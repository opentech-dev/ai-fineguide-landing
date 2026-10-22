// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import llmsFull from './src/integrations/llms-full.mjs';

// https://astro.build/config
export default defineConfig({
  // Canonical + hreflang + og:url in Layout.astro all resolve against this.
  // Without it Astro.site is undefined and those tags silently emit nothing.
  site: 'https://fineguide.ai',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ro'],
    routing: { prefixDefaultLocale: false },
  },
  // /llms-full.txt, written from the built pages after the build (src/integrations/llms-full.mjs).
  integrations: [llmsFull()],
  vite: {
    plugins: [tailwindcss()]
  }
});