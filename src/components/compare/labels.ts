/**
 * The fixed wording of the comparison pages, in the three languages they are published in. The facts live
 * in src/data/compare.ts; each page's own copy lives in its page file.
 */
import type { CompareLang, RowKey } from '../../data/compare';

export interface CompareLabels {
  eyebrow: string;
  hubEyebrow: string;
  checkedOn: string;
  shortAnswer: string;
  rows: Record<RowKey, string>;
  notStated: string;
  tableNote: string;
  sourcesHeading: string;
  faqHeading: string;
  keepReading: string;
  productPages: string;
  otherComparisons: string;
  englishOnly: string;
  readComparison: string;
  correction: string;
  ctaPrimary: string;
  ctaSecondary: string;
  links: { pricing: string; assistants: string; crm: string; voiceQa: string; contact: string };
  crumb: string;
}

export const LABELS: Record<CompareLang, CompareLabels> = {
  en: {
    eyebrow: 'Comparison',
    hubEyebrow: 'Compare',
    checkedOn: 'Checked on vendor pages, 21 October 2026',
    shortAnswer: 'Short answer',
    rows: {
      plans: 'Plans and prices',
      freeTrial: 'Free plan and trial',
      billing: 'Contract and billing',
      ai: 'AI agent',
      channels: 'Messaging channels',
      phone: 'Phone calls',
      callScoring: 'Call-quality scoring',
      languages: 'Languages',
      data: 'Data and deployment',
    },
    notStated: 'Not stated on the vendor pages we checked.',
    tableNote:
      'Competitor facts come from each vendor’s official pricing and help pages, read on 21 October 2026, in the currency the page showed. Vendors show different prices by country and change them often, so check the linked page before you buy. Numbers in brackets point to the sources at the bottom of this page.',
    sourcesHeading: 'Sources (checked 2026-10-21)',
    faqHeading: 'Questions people ask',
    keepReading: 'Keep reading',
    productPages: 'Fineguide, module by module',
    otherComparisons: 'Other comparisons',
    englishOnly: '',
    readComparison: 'Read the comparison',
    correction: 'Spotted something out of date? Write to contact@fineguide.ai and we will correct it.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'Schedule a demo',
    links: {
      pricing: 'Pricing and credits',
      assistants: 'AI assistants',
      crm: 'CRM',
      voiceQa: 'Voice QA call scoring',
      contact: 'Contact the team',
    },
    crumb: 'Compare',
  },
  ro: {
    eyebrow: 'Comparație',
    hubEyebrow: 'Comparații',
    checkedOn: 'Verificat pe paginile oficiale, 21 octombrie 2026',
    shortAnswer: 'Pe scurt',
    rows: {
      plans: 'Planuri și prețuri',
      freeTrial: 'Plan gratuit și perioadă de probă',
      billing: 'Contract și facturare',
      ai: 'Agent AI',
      channels: 'Canale de mesagerie',
      phone: 'Apeluri telefonice',
      callScoring: 'Evaluarea calității apelurilor',
      languages: 'Limbi',
      data: 'Date și instalare',
    },
    notStated: 'Nu apare pe paginile oficiale pe care le-am verificat.',
    tableNote:
      'Datele despre concurenți vin de pe paginile oficiale de prețuri și de ajutor ale fiecărui furnizor, citite pe 21 octombrie 2026, în moneda afișată acolo. Furnizorii arată prețuri diferite în funcție de țară și le schimbă des, așa că verifică pagina indicată înainte să cumperi. Numerele din paranteze trimit la sursele de la finalul paginii.',
    sourcesHeading: 'Surse (verificate pe 2026-10-21)',
    faqHeading: 'Întrebări frecvente',
    keepReading: 'Citește mai departe',
    productPages: 'Fineguide, modul cu modul',
    otherComparisons: 'Alte comparații',
    englishOnly: '',
    readComparison: 'Citește comparația',
    correction: 'Ai găsit ceva depășit? Scrie-ne la contact@fineguide.ai și corectăm.',
    ctaPrimary: 'Începe gratuit',
    ctaSecondary: 'Programează un demo',
    links: {
      pricing: 'Prețuri și credite',
      assistants: 'Asistenți AI',
      crm: 'CRM',
      voiceQa: 'Voice QA, evaluarea apelurilor',
      contact: 'Scrie-ne',
    },
    crumb: 'Comparații',
  },
  ru: {
    eyebrow: 'Сравнение',
    hubEyebrow: 'Сравнения',
    checkedOn: 'Проверено по официальным страницам 21 октября 2026',
    shortAnswer: 'Коротко',
    rows: {
      plans: 'Тарифы и цены',
      freeTrial: 'Бесплатный тариф и пробный период',
      billing: 'Договор и оплата',
      ai: 'ИИ-агент',
      channels: 'Мессенджеры и каналы',
      phone: 'Телефонные звонки',
      callScoring: 'Оценка качества звонков',
      languages: 'Языки',
      data: 'Данные и размещение',
    },
    notStated: 'Не указано на проверенных нами страницах вендора.',
    tableNote:
      'Данные о конкурентах взяты с официальных страниц цен и справки каждого вендора 21 октября 2026 года, в той валюте, которую показывала страница. Цены зависят от страны и часто меняются, поэтому перед покупкой проверьте страницу по ссылке. Числа в скобках ведут к источникам внизу страницы.',
    sourcesHeading: 'Источники (проверено 2026-10-21)',
    faqHeading: 'Частые вопросы',
    keepReading: 'Читайте также',
    productPages: 'Fineguide по модулям (на английском)',
    otherComparisons: 'Другие сравнения',
    englishOnly: ' (на английском)',
    readComparison: 'Читать сравнение',
    correction: 'Нашли устаревшие данные? Напишите на contact@fineguide.ai — исправим.',
    ctaPrimary: 'Начать бесплатно',
    ctaSecondary: 'Записаться на демо',
    links: {
      pricing: 'Цены и кредиты',
      assistants: 'ИИ-ассистенты',
      crm: 'CRM',
      voiceQa: 'Voice QA: оценка звонков',
      contact: 'Связаться с командой',
    },
    crumb: 'Сравнения',
  },
};
