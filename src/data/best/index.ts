/**
 * The "best X" guides (see types.ts): the list, the fixed wording of the pages in each language, and their paths.
 * Each language's page file (src/pages/best/<slug>.astro, ro/best/, ru/best/) is one line that names its slug.
 */
import type { CompareLang } from '../compare';
import type { BestGuide } from './types';
import automation from './ai-business-automation-platforms';
import omnichannel from './omnichannel-chatbot-platforms';
import customerService from './ai-customer-service-software';
import voiceAgents from './ai-voice-agents';
import callQa from './call-center-qa-software';
import aiCrm from './ai-crm';
import websiteChatbots from './ai-chatbots-for-websites';
import callCenter from './call-center-software';
import respondIoAlternatives from './respond-io-alternatives';
import kommoAlternatives from './kommo-amocrm-alternatives';

export const BEST_GUIDES: BestGuide[] = [automation, omnichannel, customerService, websiteChatbots, voiceAgents, callCenter, callQa, aiCrm, kommoAlternatives, respondIoAlternatives];

export function guide(slug: string): BestGuide {
  const g = BEST_GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown best guide "${slug}": add it to src/data/best/index.ts`);
  return g;
}

/** /best/x/, /ro/best/x/ or /ru/best/x/ (every guide is published in all three). */
export function bestPath(lang: CompareLang, slug?: string): string {
  return `${lang === 'en' ? '' : `/${lang}`}/best/${slug ? `${slug}/` : ''}`;
}

export const BEST_LABELS: Record<
  CompareLang,
  {
    eyebrow: string;
    crumb: string;
    updated: string;
    disclosure: (oldest: string, updated: string) => string;
    alphabetical: string;
    tool: string;
    bestFor: string;
    checked: string;
    fgChecked: string;
    compare: (name: string) => string;
    allGuides: string;
    allComparisons: string;
    sources: string;
  }
> = {
  en: {
    eyebrow: 'Software guides',
    crumb: 'Software guides',
    updated: 'Updated',
    disclosure: (oldest, updated) =>
      `Fineguide publishes this guide and is one of the tools in it, so it is listed under its own letter like every other tool, not first. Every fact about another product comes from that vendor’s own pages, read between ${oldest} and ${updated} and linked in the sources at the bottom. Prices are left out on purpose: they change often, so check each vendor’s pricing page.`,
    alphabetical: 'In alphabetical order, not ranked. Each tool shows who it suits and what its own pages say it does.',
    tool: 'Tool',
    bestFor: 'Best for',
    checked: 'Facts read on the vendor’s pages on',
    fgChecked: 'Facts checked against the product on',
    compare: (name) => `${name} vs Fineguide, in detail`,
    allGuides: 'All software guides',
    allComparisons: 'All comparisons',
    sources: 'Sources',
  },
  ro: {
    eyebrow: 'Ghiduri de software',
    crumb: 'Ghiduri de software',
    updated: 'Actualizat',
    disclosure: (oldest, updated) =>
      `Fineguide publică acest ghid și este unul dintre instrumentele din el, așa că apare la litera lui, ca oricare altul, nu primul. Fiecare informație despre alt produs vine de pe paginile oficiale ale furnizorului, citite între ${oldest} și ${updated}, cu link în sursele de la final. Prețurile lipsesc intenționat: se schimbă des, așa că verifică pagina de prețuri a fiecărui furnizor.`,
    alphabetical: 'În ordine alfabetică, fără clasament. La fiecare instrument: cui i se potrivește și ce spun paginile lui oficiale că face.',
    tool: 'Instrument',
    bestFor: 'Potrivit pentru',
    checked: 'Informații citite pe paginile furnizorului la',
    fgChecked: 'Informații verificate pe produs la',
    compare: (name) => `${name} vs Fineguide, în detaliu`,
    allGuides: 'Toate ghidurile de software',
    allComparisons: 'Toate comparațiile',
    sources: 'Surse',
  },
  ru: {
    eyebrow: 'Обзоры программ',
    crumb: 'Обзоры программ',
    updated: 'Обновлено',
    disclosure: (oldest, updated) =>
      `Этот обзор публикует Fineguide, и Fineguide — один из инструментов в нём, поэтому он стоит на своей букве, как все остальные, а не первым. Каждый факт о другом продукте взят с официальных страниц производителя, прочитанных с ${oldest} по ${updated}, ссылки — в источниках внизу. Цен здесь нет намеренно: они часто меняются, смотрите страницу цен каждого производителя.`,
    alphabetical: 'По алфавиту, без рейтинга. У каждого инструмента — кому он подходит и что о нём говорят его собственные страницы.',
    tool: 'Инструмент',
    bestFor: 'Лучше всего для',
    checked: 'Факты с сайта производителя, прочитаны',
    fgChecked: 'Факты сверены с продуктом',
    compare: (name) => `${name} и Fineguide: подробное сравнение`,
    allGuides: 'Все обзоры программ',
    allComparisons: 'Все сравнения',
    sources: 'Источники',
  },
};
