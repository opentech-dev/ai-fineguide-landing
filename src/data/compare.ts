/**
 * The facts behind the /compare/ pages (English), /ro/compare/ (Romanian) and /ru/compare/ (Russian).
 *
 * Every competitor fact below was read on the vendor's own pricing page or help centre on CHECKED and is
 * linked in that competitor's `sources`; the pages print each source as a numbered footnote. A fact we could
 * not confirm on a vendor page is `null` and the table says so. It is never guessed.
 *
 * Monthly re-check: open every `sources` URL, compare it with the text here, fix what moved, then update
 * CHECKED (and `checked` on the competitor). Prices are the ones the vendor page showed on that day, in the
 * currency it showed (US dollars for a visitor from the US; amoCRM in roubles). Vendors show different
 * prices by country, which the pages say.
 *
 * Fineguide's own column is built from src/data/pricing.ts and public/llms.txt. It never says where
 * Fineguide is hosted or which providers it runs on.
 */
import { PLANS, yearlyMonthly } from './pricing';

export const CHECKED = '2026-10-21';

export type CompareLang = 'en' | 'ro' | 'ru';
export type Currency = 'USD' | 'EUR' | 'RUB';
export type CompetitorId = 'kommo' | 'amocrm' | 'hubspot' | 'pipedrive' | 'bitrix24' | 'odoo' | 'zoho';

/** Copy in each language. `ru` is required wherever a Russian page shows the text (see `pick`). */
export interface Text {
  en: string;
  ro: string;
  ru?: string;
}

/** A sourced statement: `src` holds ids from the competitor's `sources`. */
export interface Fact extends Text {
  src: string[];
}

export interface Source {
  id: string;
  title: string;
  url: string;
}

export interface Plan {
  name: string | Text;
  /** Price per unit per month, billed monthly (or the only price the page shows). */
  price?: number;
  /** "Starts at" price, when that is all the page commits to. */
  from?: number;
  /** Struck-through list price shown next to a lower one. */
  list?: number;
  /** Price per unit per month when billed yearly. */
  yearly?: number;
  free?: boolean;
  custom?: boolean;
}

export type RowKey =
  | 'plans'
  | 'freeTrial'
  | 'billing'
  | 'ai'
  | 'channels'
  | 'phone'
  | 'callScoring'
  | 'languages'
  | 'data';

export const ROW_ORDER: RowKey[] = [
  'plans',
  'freeTrial',
  'billing',
  'ai',
  'channels',
  'phone',
  'callScoring',
  'languages',
  'data',
];

export interface Competitor {
  id: CompetitorId;
  name: string;
  url: string;
  checked: string;
  currency: Currency;
  /** Show every price with this many decimals (Odoo's page prints cents on every figure). */
  decimals?: number;
  plans: Plan[];
  /** Everything a buyer needs to know about the price besides the figures: unit, period, currency. */
  facts: Record<RowKey, Fact | null>;
  /** Interface languages as the vendor lists them; null when no vendor page lists them. */
  uiLanguages: { list: string[]; romanian: boolean; russian: boolean } | null;
  /** Where the vendor says it keeps customer data (the competitor's, never Fineguide's). */
  dataLocation: Fact | null;
  /**
   * Complaints from customer reviews. Left empty on purpose: the comparison rule is that every competitor
   * fact links to the vendor's own page, and review sites are not that. Fill only with the owner's approval,
   * each item linked to the named review page it came from.
   */
  reviewComplaints: Fact[];
  sources: Source[];
}

// ---------------------------------------------------------------------------------------------------------
// Competitors
// ---------------------------------------------------------------------------------------------------------

const kommo: Competitor = {
  id: 'kommo',
  name: 'Kommo',
  url: 'https://www.kommo.com/',
  checked: CHECKED,
  currency: 'USD',
  plans: [
    { name: 'Base', price: 25 },
    { name: 'Advanced', price: 35 },
    { name: 'Pro', price: 45 },
    { name: 'Enterprise', custom: true },
  ],
  facts: {
    plans: {
      en: 'Per user a month, sold for at least 6 months ($150, $210 and $270 per user for 6 months).',
      ro: 'Per utilizator pe lună, vândut pentru minimum 6 luni ($150, $210 și $270 per utilizator pentru 6 luni).',
      ru: 'За пользователя в месяц, продаётся минимум на 6 месяцев ($150, $210 и $270 за пользователя за 6 месяцев).',
      src: ['pricing'],
    },
    freeTrial: {
      en: 'No free plan on the pricing page. 14-day trial with all features, no card needed (media storage limited to 10 GB).',
      ro: 'Niciun plan gratuit pe pagina de prețuri. Perioadă de probă de 14 zile cu toate funcțiile, fără card (spațiul media limitat la 10 GB).',
      ru: 'Бесплатного тарифа на странице цен нет. Пробный период 14 дней со всеми функциями, без карты (медиахранилище ограничено 10 ГБ).',
      src: ['pricing'],
    },
    billing: {
      en: 'No monthly payment: the minimum subscription is 6 months (9-month, 1-year and 2-year terms are also offered). Billed in US dollars only. Every user on the account must be on the same plan. A cancellation takes effect at the end of the paid period.',
      ro: 'Nu există plată lunară: abonamentul minim este de 6 luni (se oferă și 9 luni, 1 an și 2 ani). Facturare doar în dolari americani. Toți utilizatorii contului trebuie să fie pe același plan. Anularea intră în vigoare la sfârșitul perioadei plătite.',
      ru: 'Помесячной оплаты нет: минимальный срок подписки — 6 месяцев (также есть 9 месяцев, 1 год и 2 года). Оплата только в долларах США. Все пользователи аккаунта должны быть на одном тарифе. Отмена вступает в силу в конце оплаченного периода.',
      src: ['pricing'],
    },
    ai: {
      en: 'AI reply suggestions, summaries and writing help on every plan. AI agents: up to 3 on Advanced, up to 50 on Pro (and during the trial). AI credits per user a month: 750, 1,250 and 2,250, reset on the billing date, no carry-over. Agents reply to incoming messages only and cannot start a conversation.',
      ro: 'Sugestii de răspuns, rezumate și ajutor la scris cu AI pe toate planurile. Agenți AI: până la 3 pe Advanced, până la 50 pe Pro (și în perioada de probă). Credite AI per utilizator pe lună: 750, 1.250 și 2.250, resetate la data facturării, fără reportare. Agenții răspund doar la mesajele primite și nu pot începe o conversație.',
      ru: 'Подсказки ответов, саммари и помощь с текстами на всех тарифах. ИИ-агенты: до 3 на Advanced, до 50 на Pro (и в пробный период). ИИ-кредиты на пользователя в месяц: 750, 1 250 и 2 250, обнуляются в дату оплаты и не переносятся. Агенты отвечают только на входящие сообщения и не начинают диалог сами.',
      src: ['pricing', 'ai-agent'],
    },
    channels: {
      en: 'WhatsApp, Instagram, TikTok, Facebook Messenger and Telegram, live chat and two-way email sync. Base: 1 WhatsApp number and 1 Instagram account; Advanced: 3 of each; Pro: unlimited channels.',
      ro: 'WhatsApp, Instagram, TikTok, Facebook Messenger și Telegram, chat live și email sincronizat în ambele sensuri. Base: 1 număr WhatsApp și 1 cont Instagram; Advanced: câte 3; Pro: canale nelimitate.',
      ru: 'WhatsApp, Instagram, TikTok, Facebook Messenger и Telegram, онлайн-чат и двусторонняя синхронизация почты. Base: 1 номер WhatsApp и 1 аккаунт Instagram; Advanced: по 3; Pro: без ограничения каналов.',
      src: ['pricing'],
    },
    phone: {
      en: 'SMS and VoIP integrations. On Pro, the AI agent answers incoming voice messages in text. Neither the pricing page nor the AI agent page lists AI on live phone calls.',
      ro: 'Integrări SMS și VoIP. Pe Pro, agentul AI răspunde în scris la mesajele vocale primite. Nici pagina de prețuri, nici cea despre agentul AI nu menționează AI pe apeluri telefonice în direct.',
      ru: 'Интеграции SMS и VoIP. На Pro ИИ-агент отвечает текстом на входящие голосовые сообщения. Ни на странице цен, ни на странице ИИ-агента ИИ на живых звонках не указан.',
      src: ['pricing', 'ai-agent'],
    },
    callScoring: null,
    languages: {
      en: 'English, Indonesian, Portuguese (Brazil), Russian, Spanish (Latin America) and Turkish. No Romanian.',
      ro: 'Engleză, indoneziană, portugheză (Brazilia), rusă, spaniolă (America Latină) și turcă. Fără română.',
      ru: 'Английский, индонезийский, португальский (Бразилия), русский, испанский (Латинская Америка) и турецкий. Румынского нет.',
      src: ['languages'],
    },
    data: {
      en: 'Kommo’s privacy policy (revised 3 July 2026) says it may store personal information anywhere in the world, including the United States.',
      ro: 'Politica de confidențialitate Kommo (revizuită pe 3 iulie 2026) spune că poate stoca datele personale oriunde în lume, inclusiv în Statele Unite.',
      ru: 'Политика конфиденциальности Kommo (редакция от 3 июля 2026) допускает хранение персональных данных в любой стране мира, включая США.',
      src: ['privacy'],
    },
  },
  uiLanguages: {
    list: ['English', 'Indonesian', 'Portuguese (Brazil)', 'Russian', 'Spanish (Latin America)', 'Turkish'],
    romanian: false,
    russian: true,
  },
  dataLocation: null, // set below, the same fact as facts.data
  reviewComplaints: [],
  sources: [
    { id: 'pricing', title: 'Kommo: Pricing (plans, FAQ)', url: 'https://www.kommo.com/pricing/' },
    { id: 'ai-agent', title: 'Kommo support: Kommo AI agent overview', url: 'https://support.kommo.com/docs/kommo-ai-agent' },
    { id: 'languages', title: 'Kommo support: Change your language', url: 'https://support.kommo.com/docs/change-your-language' },
    { id: 'privacy', title: 'Kommo: Privacy Policy, section 13', url: 'https://www.kommo.com/privacy/' },
    { id: 'export', title: 'Kommo support: Import data into Kommo (export formats)', url: 'https://support.kommo.com/docs/en/import-data-into-kommo' },
    { id: 'rebrand', title: 'Kommo blog: Rebranding, amoCRM has evolved into Kommo (11 October 2022)', url: 'https://www.kommo.com/blog/amocrm-rebranding/' },
  ],
};
kommo.dataLocation = kommo.facts.data;

const amocrm: Competitor = {
  id: 'amocrm',
  name: 'amoCRM',
  url: 'https://www.amocrm.ru/',
  checked: CHECKED,
  currency: 'RUB',
  plans: [
    { name: { en: 'Базовый (Basic)', ro: 'Базовый (Basic)', ru: 'Базовый' }, price: 599 },
    { name: { en: 'Расширенный (Extended)', ro: 'Расширенный (Extended)', ru: 'Расширенный' }, price: 1299 },
    { name: { en: 'Профессиональный (Professional)', ro: 'Профессиональный (Professional)', ru: 'Профессиональный' }, price: 1799 },
  ],
  facts: {
    // The price list does not print the period next to these three figures, so the pages say "per user"
    // and nothing more; the per-user basis is in the limits ("на пользователя") and in the help article on
    // buying extra licences.
    plans: {
      en: 'Listed per user (also in hryvnia, tenge and som). Enterprise Lite: 149,999 ₽ a month for 50 users; Enterprise: 899,999 ₽ a month for 200 users (VAT excluded).',
      ro: 'Listate per utilizator (și în grivne, tenge și sum). Enterprise Lite: 149.999 ₽ pe lună pentru 50 de utilizatori; Enterprise: 899.999 ₽ pe lună pentru 200 de utilizatori (fără TVA).',
      ru: 'Цены указаны за пользователя (также в гривнах, тенге и сумах). Enterprise Lite — 149 999 ₽ в месяц за 50 пользователей, Enterprise — 899 999 ₽ в месяц за 200 пользователей (без НДС).',
      src: ['pricing', 'licences'],
    },
    freeTrial: {
      en: 'No free plan on the price list. 14-day trial with every feature.',
      ro: 'Niciun plan gratuit în lista de prețuri. Perioadă de probă de 14 zile, cu toate funcțiile.',
      ru: 'Бесплатного тарифа в прайс-листе нет. Пробный период 14 дней со всеми функциями.',
      src: ['pricing'],
    },
    billing: {
      en: 'Prices are set for subscriptions of six months or longer; there is no monthly payment. amoCRM does not sign company-to-company contracts: the service runs under its public licence agreement.',
      ro: 'Prețurile sunt stabilite pentru abonamente de minimum șase luni; plata lunară nu există. amoCRM nu semnează contracte între companii: serviciul se prestează în baza acordului de licență public.',
      ru: 'Стоимость установлена для подписки от полугода, помесячной оплаты нет. Договоры между компаниями amoCRM не заключает: услуги оказываются по публичному лицензионному соглашению.',
      src: ['pricing'],
    },
    ai: {
      en: 'amoAI text processing, reply suggestions and conversation summaries, with 5,000, 10,000 and 15,000 AI tokens per user a month. The AI agent is on Профессиональный, Enterprise and Enterprise Lite; you connect your own OpenAI or YandexGPT API key, and the provider cannot be changed afterwards. Extra AI-agent tokens: 100,000 for 999 ₽.',
      ro: 'amoAI: procesare de text, sugestii de răspuns și rezumate ale conversațiilor, cu 5.000, 10.000 și 15.000 de tokeni AI per utilizator pe lună. Agentul AI este pe Профессиональный, Enterprise și Enterprise Lite; conectezi propria cheie API OpenAI sau YandexGPT, iar furnizorul nu mai poate fi schimbat după aceea. Tokeni suplimentari pentru agent: 100.000 pentru 999 ₽.',
      ru: 'amoAI: обработка текста, предложение ответов и резюме бесед; 5 000, 10 000 и 15 000 токенов на пользователя в месяц. ИИ-агент доступен на «Профессиональном», Enterprise и Enterprise Lite; подключается ваш собственный API-ключ OpenAI или YandexGPT, сменить провайдера после подключения нельзя. Дополнительные токены для агента: 100 000 за 999 ₽.',
      src: ['pricing', 'ai-agent'],
    },
    channels: {
      en: 'Messenger integrations, online chat, web forms and email feed the pipeline; Salesbot is a visual chat-bot builder.',
      ro: 'Integrări cu mesagerii, chat online, formulare web și email care alimentează pâlnia de vânzări; Salesbot este un constructor vizual de chatboți.',
      ru: 'Интеграции с мессенджерами, онлайн-чат, веб-формы и почта создают сделки в воронке; Salesbot — визуальный конструктор чат-ботов.',
      src: ['pricing'],
    },
    phone: {
      en: 'Telephony through integrations: calls create deals and call statistics appear in reports. No AI on live calls is listed.',
      ro: 'Telefonie prin integrări: apelurile creează tranzacții, iar statisticile apelurilor apar în rapoarte. AI pe apeluri în direct nu este menționat.',
      ru: 'Телефония через интеграции: звонки создают сделки, статистика звонков есть в отчётах. ИИ на живых звонках не указан.',
      src: ['pricing'],
    },
    callScoring: null,
    languages: {
      en: 'The amoCRM site, price list and help centre are in Russian.',
      ro: 'Site-ul amoCRM, lista de prețuri și centrul de ajutor sunt în rusă.',
      ru: 'Сайт, прайс-лист и справка amoCRM — на русском языке.',
      src: ['pricing', 'ai-agent'],
    },
    data: {
      en: 'amoCRM says it runs on a geographically distributed network of servers in the Russian Federation.',
      ro: 'amoCRM declară că funcționează pe o rețea de servere distribuită geografic în Federația Rusă.',
      ru: 'amoCRM работает на географически распределённой сети серверов, расположенной в Российской Федерации.',
      src: ['security'],
    },
  },
  uiLanguages: null,
  dataLocation: null, // set below
  reviewComplaints: [],
  sources: [
    { id: 'pricing', title: 'amoCRM: Тарифы (price list and FAQ)', url: 'https://www.amocrm.ru/buy' },
    { id: 'licences', title: 'amoCRM help: buying additional licences', url: 'https://www.amocrm.ru/support/account/payment' },
    { id: 'ai-agent', title: 'amoCRM help: AI-агент (availability and setup)', url: 'https://www.amocrm.ru/support/amoai/ai_agent' },
    { id: 'security', title: 'amoCRM: Безопасность и надёжность', url: 'https://www.amocrm.ru/security/' },
    { id: 'export', title: 'amoCRM help: exporting all deals, including closed ones', url: 'https://www.amocrm.ru/support/export/export_closed_leads' },
  ],
};
amocrm.dataLocation = amocrm.facts.data;

const hubspot: Competitor = {
  id: 'hubspot',
  name: 'HubSpot',
  url: 'https://www.hubspot.com/',
  checked: CHECKED,
  currency: 'USD',
  plans: [
    { name: 'Free', free: true },
    { name: 'Starter', from: 7, list: 20 },
    { name: 'Professional', from: 90, list: 100 },
    { name: 'Enterprise', from: 150 },
  ],
  facts: {
    plans: {
      en: 'Sales Hub, per seat a month, on the US-dollar page. "Starts at" prices; the list prices were shown struck through next to them.',
      ro: 'Sales Hub, per loc pe lună, pe pagina în dolari. Prețuri „de la”; prețurile de listă apăreau tăiate alături.',
      ru: 'Sales Hub, за место в месяц, на странице в долларах. Цены «от»; базовые цены показаны рядом зачёркнутыми.',
      src: ['pricing'],
    },
    freeTrial: {
      en: 'Free tools for up to 2 users, no card needed.',
      ro: 'Instrumente gratuite pentru cel mult 2 utilizatori, fără card.',
      ru: 'Бесплатные инструменты для 2 пользователей, без карты.',
      src: ['pricing'],
    },
    billing: {
      en: 'Starter can be committed monthly; Professional needs an annual commitment (paid monthly or yearly). Required one-time onboarding: $1,500 for Professional and $3,500 for Enterprise.',
      ro: 'Starter poate fi luat cu angajament lunar; Professional cere angajament anual (plătit lunar sau anual). Onboarding obligatoriu, plătit o singură dată: $1.500 pentru Professional și $3.500 pentru Enterprise.',
      ru: 'Starter — с помесячным обязательством; Professional требует годового обязательства (оплата помесячно или за год). Обязательный разовый онбординг: $1 500 для Professional и $3 500 для Enterprise.',
      src: ['pricing'],
    },
    ai: {
      en: 'AI agents run on HubSpot Credits: 500 included on Starter, 3,000 on Professional, 5,000 on Enterprise, then packs or pay-as-you-go. The Customer Agent answers across chat, email, forms and calling; Prospecting and Data agents and Agent Builder are also listed.',
      ro: 'Agenții AI folosesc HubSpot Credits: 500 incluse pe Starter, 3.000 pe Professional, 5.000 pe Enterprise, apoi pachete sau plată la consum. Customer Agent răspunde pe chat, email, formulare și apeluri; sunt listați și agenții Prospecting și Data, plus Agent Builder.',
      ru: 'ИИ-агенты работают на HubSpot Credits: 500 на Starter, 3 000 на Professional, 5 000 на Enterprise, дальше пакеты или оплата по факту. Customer Agent отвечает в чате, почте, формах и звонках; также указаны агенты Prospecting и Data и Agent Builder.',
      src: ['pricing'],
    },
    channels: {
      en: 'Live chat, Facebook Messenger and email. Connecting WhatsApp to the inbox needs Marketing Hub or Service Hub Professional or Enterprise.',
      ro: 'Chat live, Facebook Messenger și email. Conectarea WhatsApp la inbox cere Marketing Hub sau Service Hub Professional ori Enterprise.',
      ru: 'Онлайн-чат, Facebook Messenger и почта. Для подключения WhatsApp к inbox нужен Marketing Hub или Service Hub уровня Professional или Enterprise.',
      src: ['pricing', 'whatsapp'],
    },
    phone: {
      en: 'Calling from Starter, with monthly minute limits; HubSpot-provided phone numbers are not supported in every country.',
      ro: 'Apeluri de la Starter, cu limite lunare de minute; numerele de telefon oferite de HubSpot nu sunt disponibile în toate țările.',
      ru: 'Звонки начиная со Starter, с месячными лимитами минут; номера от HubSpot доступны не во всех странах.',
      src: ['pricing'],
    },
    callScoring: {
      en: 'Conversation intelligence (call transcription and coaching) on Professional and Enterprise.',
      ro: 'Conversation intelligence (transcrierea apelurilor și coaching) pe Professional și Enterprise.',
      ru: 'Conversation intelligence (расшифровка звонков и коучинг) на Professional и Enterprise.',
      src: ['pricing'],
    },
    languages: {
      en: '17 interface languages; Romanian and Russian are not among them (they appear only as content-creation languages).',
      ro: '17 limbi de interfață; româna și rusa nu sunt printre ele (apar doar ca limbi pentru crearea de conținut).',
      ru: '17 языков интерфейса; румынского и русского среди них нет (они есть только как языки создания контента).',
      src: ['languages'],
    },
    data: {
      en: 'Hosted in the United States (East and West), Canada, Australia or the EU (Germany).',
      ro: 'Găzduit în Statele Unite (Est și Vest), Canada, Australia sau UE (Germania).',
      ru: 'Размещение в США (восток и запад), Канаде, Австралии или ЕС (Германия).',
      src: ['hosting'],
    },
  },
  uiLanguages: {
    list: [
      'Chinese (traditional)', 'Danish', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Italian', 'Japanese',
      'Korean', 'Norwegian (Bokmål)', 'Polish', 'Portuguese (Brazil)', 'Chinese (simplified)', 'Spanish', 'Swedish', 'Thai',
    ],
    romanian: false,
    russian: false,
  },
  dataLocation: null,
  reviewComplaints: [],
  sources: [
    { id: 'pricing', title: 'HubSpot: Sales Hub pricing', url: 'https://www.hubspot.com/pricing/sales' },
    { id: 'whatsapp', title: 'HubSpot Knowledge Base: Connect WhatsApp to the inbox', url: 'https://knowledge.hubspot.com/inbox/connect-whatsapp-to-the-conversations-inbox' },
    { id: 'languages', title: 'HubSpot Knowledge Base: HubSpot language offerings', url: 'https://knowledge.hubspot.com/help-and-resources/hubspot-language-offerings' },
    { id: 'hosting', title: 'HubSpot Knowledge Base: Cloud infrastructure and data hosting', url: 'https://knowledge.hubspot.com/account-security/hubspot-cloud-infrastructure-and-data-hosting-frequently-asked-questions' },
    { id: 'export', title: 'HubSpot Knowledge Base: Export your records', url: 'https://knowledge.hubspot.com/import-and-export/export-records' },
  ],
};
hubspot.dataLocation = hubspot.facts.data;

const pipedrive: Competitor = {
  id: 'pipedrive',
  name: 'Pipedrive',
  url: 'https://www.pipedrive.com/',
  checked: CHECKED,
  currency: 'USD',
  plans: [
    { name: 'Lite', price: 24, yearly: 14 },
    { name: 'Growth', price: 49, yearly: 39 },
    { name: 'Premium', price: 79, yearly: 59 },
    { name: 'Ultimate', price: 99, yearly: 79 },
  ],
  facts: {
    plans: {
      en: 'Per seat a month, on the US-dollar page; prices exclude VAT.',
      ro: 'Per loc pe lună, pe pagina în dolari; prețurile nu includ TVA.',
      ru: 'За место в месяц, на странице в долларах; цены без НДС.',
      src: ['pricing'],
    },
    freeTrial: {
      en: 'No free plan on the pricing page. 14-day free trial, no card needed.',
      ro: 'Niciun plan gratuit pe pagina de prețuri. Perioadă de probă gratuită de 14 zile, fără card.',
      ru: 'Бесплатного тарифа на странице цен нет. Бесплатный пробный период 14 дней, без карты.',
      src: ['pricing'],
    },
    billing: {
      en: 'Billed monthly, or yearly to save (the page says up to 42%). VAT is added for EU customers without a valid VAT number.',
      ro: 'Facturare lunară sau anuală, cu reducere (pagina spune până la 42%). Clienților din UE fără cod de TVA valid li se adaugă TVA.',
      ru: 'Оплата помесячно или за год со скидкой (на странице — до 42%). Клиентам из ЕС без действующего номера НДС добавляется НДС.',
      src: ['pricing'],
    },
    ai: {
      en: 'AI import assistant, AI report creation and the Sales Assistant on every plan; AI email writing, summaries and suggested replies on Premium and Ultimate. Pipedrive Nova (meeting briefs, call transcripts, suggested CRM updates) is listed from Lite.',
      ro: 'Asistent AI de import, rapoarte create cu AI și Sales Assistant pe toate planurile; scrierea emailurilor cu AI, rezumate și răspunsuri sugerate pe Premium și Ultimate. Pipedrive Nova (pregătire pentru întâlniri, transcrieri ale apelurilor, actualizări sugerate în CRM) apare de la Lite.',
      ru: 'ИИ-помощник импорта, создание отчётов с ИИ и Sales Assistant на всех тарифах; написание писем с ИИ, саммари и предлагаемые ответы на Premium и Ultimate. Pipedrive Nova (подготовка к встречам, расшифровки звонков, предлагаемые обновления CRM) указан начиная с Lite.',
      src: ['pricing', 'ai'],
    },
    channels: {
      en: 'Full email sync with tracking from Growth. The WhatsApp integration is on Growth and above, still in beta and not yet open to every customer. LeadBooster add-on for lead capture, from $32.50.',
      ro: 'Sincronizare completă a emailului, cu urmărire, de la Growth. Integrarea WhatsApp este pe Growth și mai sus, încă în beta și nu e deschisă încă tuturor clienților. Add-on-ul LeadBooster pentru captarea lead-urilor, de la $32,50.',
      ru: 'Полная синхронизация почты с отслеживанием — с Growth. Интеграция WhatsApp — на Growth и выше, пока в бете и доступна не всем клиентам. Дополнение LeadBooster для сбора лидов — от $32,50.',
      src: ['pricing', 'whatsapp'],
    },
    phone: {
      en: 'No built-in calling: calls go through Marketplace apps such as CloudTalk or Aircall, or Pipedrive’s mobile apps.',
      ro: 'Fără apeluri integrate: apelurile trec prin aplicații din Marketplace, ca CloudTalk sau Aircall, ori prin aplicațiile mobile Pipedrive.',
      ru: 'Встроенных звонков нет: звонки идут через приложения из Marketplace, например CloudTalk или Aircall, или через мобильные приложения Pipedrive.',
      src: ['calls'],
    },
    callScoring: null,
    languages: null,
    data: {
      en: 'New sign-ups from the EU are primarily hosted in EU data centres; Pipedrive notes that accounts can land elsewhere because of IP mapping.',
      ro: 'Conturile noi din UE sunt găzduite în principal în centre de date din UE; Pipedrive precizează că, din cauza mapării IP, un cont poate ajunge în altă parte.',
      ru: 'Новые аккаунты из ЕС в основном размещаются в дата-центрах ЕС; Pipedrive отмечает, что из-за IP-маппинга аккаунт может оказаться в другом регионе.',
      src: ['hosting'],
    },
  },
  uiLanguages: null,
  dataLocation: null,
  reviewComplaints: [],
  sources: [
    { id: 'pricing', title: 'Pipedrive: Pricing', url: 'https://www.pipedrive.com/en/pricing' },
    { id: 'ai', title: 'Pipedrive Knowledge Base: Pipedrive AI', url: 'https://support.pipedrive.com/en/article/pipedrive-ai' },
    { id: 'whatsapp', title: 'Pipedrive Knowledge Base: WhatsApp integration', url: 'https://support.pipedrive.com/en/article/whatsapp-integration' },
    { id: 'calls', title: 'Pipedrive Knowledge Base: How can I make calls in Pipedrive?', url: 'https://support.pipedrive.com/en/article/how-can-i-make-calls-in-pipedrive' },
    { id: 'hosting', title: 'Pipedrive: Sub-processors (hosting regions)', url: 'https://www.pipedrive.com/en/subprocessors' },
    { id: 'export', title: 'Pipedrive Knowledge Base: Exporting data from Pipedrive', url: 'https://support.pipedrive.com/en/article/exporting-data-from-pipedrive' },
  ],
};
pipedrive.dataLocation = pipedrive.facts.data;

const bitrix24: Competitor = {
  id: 'bitrix24',
  name: 'Bitrix24',
  url: 'https://www.bitrix24.com/',
  checked: CHECKED,
  currency: 'USD',
  plans: [
    { name: 'Free', free: true },
    { name: 'Basic', price: 69, yearly: 49 },
    { name: 'Standard', price: 144, yearly: 99 },
    { name: 'Professional', price: 289, yearly: 199 },
    { name: 'Enterprise', price: 579, yearly: 399 },
  ],
  facts: {
    plans: {
      en: 'A flat price per organization a month (Essentials plans on bitrix24.com, in US dollars), with 5, 50, 100 and from 250 users included. The Vibe+ plans, which add the Vibecode app builder, Market apps and the REST API, cost $89, $199, $399 and $799 a month.',
      ro: 'Preț fix per organizație pe lună (planurile Essentials pe bitrix24.com, în dolari), cu 5, 50, 100 și de la 250 de utilizatori incluși. Planurile Vibe+, care adaugă constructorul de aplicații Vibecode, aplicațiile din Market și REST API, costă $89, $199, $399 și $799 pe lună.',
      ru: 'Фиксированная цена за организацию в месяц (тарифы Essentials на bitrix24.com, в долларах), включено 5, 50, 100 и от 250 пользователей. Тарифы Vibe+ с конструктором приложений Vibecode, приложениями Market и REST API — $89, $199, $399 и $799 в месяц.',
      src: ['pricing'],
    },
    freeTrial: {
      en: 'Free plan; telephony and Market apps are on paid plans only. 15-day trial of the higher-tier features, no card needed.',
      ro: 'Plan gratuit; telefonia și aplicațiile din Market sunt doar pe planurile plătite. Perioadă de probă de 15 zile pentru funcțiile planurilor superioare, fără card.',
      ru: 'Бесплатный тариф; телефония и приложения Market — только на платных тарифах. Пробный период 15 дней для функций старших тарифов, без карты.',
      src: ['pricing'],
    },
    billing: {
      en: 'Monthly, or annually for about 30% off; an annual subscription is paid in full, with no instalments. A Vibe+ launch offer (until 10 December 2026) discounts 12-month subscriptions; renewals are billed at regular prices.',
      ro: 'Lunar sau anual, cu circa 30% reducere; abonamentul anual se plătește integral, fără rate. O ofertă de lansare Vibe+ (până la 10 decembrie 2026) reduce abonamentele pe 12 luni; reînnoirile se facturează la prețurile obișnuite.',
      ru: 'Помесячно или за год со скидкой около 30%; годовая подписка оплачивается целиком, без рассрочки. Стартовое предложение Vibe+ (до 10 декабря 2026) снижает цену подписок на 12 месяцев; продление — по обычным ценам.',
      src: ['pricing'],
    },
    ai: {
      en: 'CoPilot AI: AI for everyday work from Basic; AI chat assistant, voice-to-task and meeting follow-up on Standard Vibe+; AI automation agents on Professional Vibe+.',
      ro: 'CoPilot AI: AI pentru munca de zi cu zi de la Basic; asistent AI în chat, sarcini din mesaje vocale și rezumate după întâlniri pe Standard Vibe+; agenți AI de automatizare pe Professional Vibe+.',
      ru: 'CoPilot: ИИ для повседневной работы с Basic; ИИ-ассистент в чате, задачи из голоса и итоги встреч на Standard Vibe+; ИИ-агенты автоматизации на Professional Vibe+.',
      src: ['pricing'],
    },
    channels: {
      en: 'Contact Center: WhatsApp, live chat, Bitrix24 Network, Instagram, Facebook, Viber and Telegram.',
      ro: 'Contact Center: WhatsApp, chat live, Bitrix24 Network, Instagram, Facebook, Viber și Telegram.',
      ru: 'Контакт-центр: WhatsApp, онлайн-чат, Битрикс24.Network, Instagram, Facebook, Viber и Telegram.',
      src: ['channels'],
    },
    phone: {
      en: 'Built-in telephony: rent a virtual number from the built-in provider, connect your office or cloud PBX with the SIP connector, or use a Market app.',
      ro: 'Telefonie integrată: închiriezi un număr virtual de la furnizorul integrat, conectezi centrala ta (de birou sau în cloud) prin conectorul SIP sau folosești o aplicație din Market.',
      ru: 'Встроенная телефония: аренда виртуального номера у встроенного провайдера, подключение офисной или облачной АТС через SIP-коннектор или приложение из Market.',
      src: ['telephony'],
    },
    callScoring: {
      en: 'CoPilot transcribes call recordings and gives each analysed call a script-match score; agent ratings average those scores.',
      ro: 'CoPilot transcrie înregistrările apelurilor și dă fiecărui apel analizat un scor de potrivire cu scriptul; ratingul operatorului este media acestor scoruri.',
      ru: 'CoPilot расшифровывает записи звонков и ставит каждому разобранному звонку оценку соответствия скрипту; рейтинг сотрудника — среднее этих оценок.',
      src: ['speech'],
    },
    languages: null,
    data: {
      en: 'Cloud, or the on-premise edition on your own server, with access to the source code.',
      ro: 'În cloud sau ediția on-premise pe serverul tău, cu acces la codul sursă.',
      ru: 'Облако или коробочная версия на вашем сервере с доступом к исходному коду.',
      src: ['pricing'],
    },
  },
  uiLanguages: null,
  dataLocation: null, // the pricing page names an on-premise edition, not where the cloud keeps data
  reviewComplaints: [],
  sources: [
    { id: 'pricing', title: 'Bitrix24: Plans and pricing (Essentials and Vibe+, FAQ, on-premise)', url: 'https://www.bitrix24.com/prices/' },
    { id: 'channels', title: 'Bitrix24 Helpdesk: Communication channels in Contact Center', url: 'https://helpdesk.bitrix24.com/open/25935795/' },
    { id: 'telephony', title: 'Bitrix24 Helpdesk: Telephony connection options overview', url: 'https://helpdesk.bitrix24.com/open/25816375/' },
    { id: 'speech', title: 'Bitrix24 Helpdesk: AI speech analytics and sales scripts in CRM', url: 'https://helpdesk.bitrix24.com/open/23763142/' },
    { id: 'export', title: 'Bitrix24 Helpdesk: Export CRM data', url: 'https://helpdesk.bitrix24.com/open/25822483/' },
  ],
};

const odoo: Competitor = {
  id: 'odoo',
  name: 'Odoo',
  url: 'https://www.odoo.com/',
  checked: CHECKED,
  currency: 'USD',
  decimals: 2,
  plans: [
    { name: 'One App Free', free: true },
    { name: 'Standard', price: 31.1, yearly: 24.9 },
    { name: 'Custom', price: 61.1, yearly: 49 },
  ],
  facts: {
    plans: {
      en: 'Per user a month, on the US-dollar page. These are first-year prices: the discount lasts 12 months for the users first ordered, then Standard is $38.90 monthly or $31.10 yearly, and Custom $76.20 or $61.00. Light users: $8.90.',
      ro: 'Per utilizator pe lună, pe pagina în dolari. Sunt prețuri pentru primul an: reducerea ține 12 luni pentru utilizatorii comandați inițial, apoi Standard costă $38,90 lunar sau $31,10 anual, iar Custom $76,20 sau $61,00. Utilizatori „light”: $8,90.',
      ru: 'За пользователя в месяц, на странице в долларах. Это цены первого года: скидка действует 12 месяцев для первоначально заказанных пользователей, затем Standard — $38,90 помесячно или $31,10 за год, Custom — $76,20 или $61,00. Light-пользователи — $8,90.',
      src: ['pricing'],
    },
    freeTrial: {
      en: 'One App Free: one app (with the apps it depends on) for unlimited users, on Odoo Online. Free trials of Standard and Custom.',
      ro: 'One App Free: o aplicație (plus cele de care depinde) pentru utilizatori nelimitați, pe Odoo Online. Perioade de probă gratuite pentru Standard și Custom.',
      ru: 'One App Free: одно приложение (и зависимые от него) для неограниченного числа пользователей в Odoo Online. Бесплатные пробные версии Standard и Custom.',
      src: ['pricing'],
    },
    billing: {
      en: 'Monthly or yearly. Odoo.sh and on-premise come only with Custom (on-premise with yearly billing); Odoo.sh hosting is charged on top.',
      ro: 'Lunar sau anual. Odoo.sh și on-premise vin doar cu Custom (on-premise cu plată anuală); găzduirea Odoo.sh se plătește separat.',
      ru: 'Помесячно или за год. Odoo.sh и on-premise — только с Custom (on-premise при оплате за год); хостинг Odoo.sh оплачивается отдельно.',
      src: ['pricing'],
    },
    ai: {
      en: 'AI app with AI agents that answer from PDFs, web links, Documents files and Knowledge articles, on a choice of ChatGPT or Gemini models. With Live Chat installed, a Livechat AI agent answers visitors and escalates to human follow-up. The pricing page lists Agentic AI with the Custom plan.',
      ro: 'Aplicația AI, cu agenți AI care răspund din PDF-uri, linkuri web, fișiere din Documents și articole din Knowledge, pe modele ChatGPT sau Gemini, la alegere. Cu Live Chat instalat, un agent AI răspunde vizitatorilor și escaladează conversația pentru preluare de către un om. Pagina de prețuri listează Agentic AI la planul Custom.',
      ru: 'Приложение AI с ИИ-агентами, которые отвечают по PDF, веб-ссылкам, файлам Documents и статьям Knowledge, на моделях ChatGPT или Gemini на выбор. При установленном Live Chat ИИ-агент отвечает посетителям и передаёт диалог людям для дальнейшей работы. На странице цен Agentic AI указан в тарифе Custom.',
      src: ['pricing', 'ai-agents', 'ai-live-chat'],
    },
    channels: {
      en: 'Live Chat, with a Livechat AI agent. WhatsApp is an Odoo Enterprise-only app (not in Community) and needs a WhatsApp Business Platform account.',
      ro: 'Live Chat, cu un agent AI pentru chat. WhatsApp este o aplicație doar pentru Odoo Enterprise (nu și Community) și cere un cont WhatsApp Business Platform.',
      ru: 'Live Chat с ИИ-агентом. WhatsApp — приложение только для Odoo Enterprise (не Community), нужен аккаунт WhatsApp Business Platform.',
      src: ['ai-live-chat', 'whatsapp'],
    },
    phone: {
      en: 'The Phone app needs a VoIP provider; Axivox, DIDWW and OnSIP are the verified ones.',
      ro: 'Aplicația Phone are nevoie de un furnizor VoIP; Axivox, DIDWW și OnSIP sunt cei verificați.',
      ru: 'Приложению Phone нужен VoIP-провайдер; проверенные — Axivox, DIDWW и OnSIP.',
      src: ['phone'],
    },
    callScoring: null,
    languages: null,
    data: {
      en: 'Odoo Online, or Odoo.sh or on-premise with the Custom plan.',
      ro: 'Odoo Online sau, cu planul Custom, Odoo.sh ori on-premise.',
      ru: 'Odoo Online, а с тарифом Custom — Odoo.sh или on-premise.',
      src: ['pricing'],
    },
  },
  uiLanguages: null,
  dataLocation: null,
  reviewComplaints: [],
  sources: [
    { id: 'pricing', title: 'Odoo: Pricing (plans, FAQ)', url: 'https://www.odoo.com/pricing' },
    { id: 'ai-agents', title: 'Odoo 19.0 documentation: AI agents', url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai/agents.html' },
    { id: 'ai-live-chat', title: 'Odoo 19.0 documentation: AI live chat', url: 'https://www.odoo.com/documentation/19.0/applications/productivity/ai/live-chat.html' },
    { id: 'whatsapp', title: 'Odoo 19.0 documentation: WhatsApp', url: 'https://www.odoo.com/documentation/19.0/applications/productivity/whatsapp.html' },
    { id: 'phone', title: 'Odoo 19.0 documentation: Phone', url: 'https://www.odoo.com/documentation/19.0/applications/productivity/phone.html' },
    { id: 'export', title: 'Odoo 19.0 documentation: Export and import data', url: 'https://www.odoo.com/documentation/19.0/applications/essentials/export_import_data.html' },
  ],
};

const zoho: Competitor = {
  id: 'zoho',
  name: 'Zoho CRM',
  url: 'https://www.zoho.com/crm/',
  checked: CHECKED,
  currency: 'USD',
  plans: [
    { name: 'Free', free: true },
    { name: 'Standard', price: 20, yearly: 14 },
    { name: 'Professional', price: 35, yearly: 23 },
    { name: 'Enterprise', price: 50, yearly: 40 },
    { name: 'Ultimate', price: 65, yearly: 52 },
  ],
  facts: {
    plans: {
      en: 'Per user a month, on the US-dollar pages; local taxes are added.',
      ro: 'Per utilizator pe lună, pe paginile în dolari; se adaugă taxele locale.',
      ru: 'За пользователя в месяц, на страницах в долларах; местные налоги добавляются.',
      src: ['pricing', 'comparison'],
    },
    freeTrial: {
      en: 'Free edition for up to 3 users. Free trials of the paid editions.',
      ro: 'Ediție gratuită pentru cel mult 3 utilizatori. Perioade de probă gratuite pentru edițiile plătite.',
      ru: 'Бесплатная редакция для 3 пользователей. Бесплатные пробные версии платных редакций.',
      src: ['pricing'],
    },
    billing: {
      en: 'No contracts or commitments: pay monthly or yearly and change plan when you need to.',
      ro: 'Fără contracte sau angajamente: plătești lunar sau anual și schimbi planul când ai nevoie.',
      ru: 'Без договоров и обязательств: оплата помесячно или за год, тариф можно сменить в любой момент.',
      src: ['pricing'],
    },
    ai: {
      en: 'The pricing page lists AI agents from Professional and extended AI on Enterprise. In the edition comparison, Zia’s prediction, conversational AI and email AI rows are marked for Enterprise and Ultimate; some Zia features work in English only.',
      ro: 'Pagina de prețuri listează agenți AI de la Professional și AI extins pe Enterprise. În comparația edițiilor, rândurile Zia pentru predicții, AI conversațional și AI pentru email sunt bifate la Enterprise și Ultimate; unele funcții Zia merg doar în engleză.',
      ru: 'На странице цен ИИ-агенты указаны с Professional, расширенный ИИ — на Enterprise. В сравнении редакций строки Zia (прогнозы, разговорный ИИ, ИИ для почты) отмечены для Enterprise и Ultimate; часть функций Zia работает только на английском.',
      src: ['pricing', 'comparison'],
    },
    channels: {
      en: 'Built-in WhatsApp integration; Instagram and other messengers through third-party apps on Zoho Marketplace (Wazzup, for example).',
      ro: 'Integrare WhatsApp proprie; Instagram și alte mesagerii prin aplicații ale altor dezvoltatori din Zoho Marketplace (de exemplu Wazzup).',
      ru: 'Собственная интеграция с WhatsApp; Instagram и другие мессенджеры — через сторонние приложения в Zoho Marketplace (например, Wazzup).',
      src: ['whatsapp', 'marketplace'],
    },
    phone: {
      en: 'Built-in calling from Standard, plus telephony and PBX integrations (Ring.io, Amazon Connect, Zoho PhoneBridge and 106 others).',
      ro: 'Apeluri integrate de la Standard, plus integrări de telefonie și PBX (Ring.io, Amazon Connect, Zoho PhoneBridge și alte 106).',
      ru: 'Встроенные звонки с Standard, а также интеграции с телефонией и АТС (Ring.io, Amazon Connect, Zoho PhoneBridge и ещё 106).',
      src: ['pricing', 'comparison'],
    },
    callScoring: null,
    languages: {
      en: '28 interface languages, including Russian; Romanian is not listed.',
      ro: '28 de limbi de interfață, inclusiv rusa; româna nu apare în listă.',
      ru: '28 языков интерфейса, включая русский; румынского в списке нет.',
      src: ['pricing'],
    },
    data: {
      en: 'Zoho runs data centres in the US, Europe, India, Australia, Japan, Canada, Saudi Arabia, the UAE and Singapore.',
      ro: 'Zoho are centre de date în SUA, Europa, India, Australia, Japonia, Canada, Arabia Saudită, Emiratele Arabe Unite și Singapore.',
      ru: 'У Zoho дата-центры в США, Европе, Индии, Австралии, Японии, Канаде, Саудовской Аравии, ОАЭ и Сингапуре.',
      src: ['datacenters'],
    },
  },
  uiLanguages: {
    list: [
      'Arabic', 'English (US)', 'English (UK)', 'Bulgarian', 'Bahasa Indonesian', 'Chinese (Simplified)', 'Chinese (Traditional)',
      'Croatian', 'Czech', 'Dutch', 'Danish', 'French', 'German', 'Hungarian', 'Hindi', 'Italian', 'Japanese', 'Polish',
      'Portuguese (Brazil)', 'Portuguese (Portugal)', 'Russian', 'Spanish', 'Swedish', 'Thai', 'Turkish', 'Vietnamese', 'Korean', 'Hebrew',
    ],
    romanian: false,
    russian: true,
  },
  dataLocation: null,
  reviewComplaints: [],
  sources: [
    { id: 'pricing', title: 'Zoho CRM: Pricing and editions (with FAQ)', url: 'https://www.zoho.com/crm/zohocrm-pricing.html' },
    { id: 'comparison', title: 'Zoho CRM: Compare editions', url: 'https://www.zoho.com/crm/comparison.html' },
    { id: 'whatsapp', title: 'Zoho CRM: WhatsApp integration', url: 'https://www.zoho.com/crm/whatsapp.html' },
    { id: 'marketplace', title: 'Zoho Marketplace: WhatsApp and Instagram integration by Wazzup (a third-party app)', url: 'https://marketplace.zoho.com/app/crm/whatsapp-and-instagram-integration-by-wazzup-for-zoho-crm' },
    { id: 'datacenters', title: 'Zoho: Know your data centre', url: 'https://www.zoho.com/know-your-datacenter.html' },
    { id: 'export', title: 'Zoho CRM Help: Export CRM data', url: 'https://help.zoho.com/portal/en/kb/crm/data-administration/export-data/articles/export-crm-data' },
  ],
};
zoho.dataLocation = zoho.facts.data;

export const COMPETITORS: Record<CompetitorId, Competitor> = { kommo, amocrm, hubspot, pipedrive, bitrix24, odoo, zoho };

// ---------------------------------------------------------------------------------------------------------
// The comparison pages, alphabetically (the hub lists them in this order: no ranking)
// ---------------------------------------------------------------------------------------------------------

export interface ComparePageMeta {
  slug: string;
  competitors: CompetitorId[];
  label: Text;
  summary: Text;
  /** The languages this comparison is published in. */
  langs: CompareLang[];
}

export const COMPARE_PAGES: ComparePageMeta[] = [
  {
    slug: 'bitrix24',
    competitors: ['bitrix24'],
    label: { en: 'Bitrix24', ro: 'Bitrix24', ru: 'Битрикс24 (Bitrix24)' },
    summary: {
      en: 'A broad workspace at a flat price per company, with built-in telephony and an on-premise edition, against a CRM built around AI conversations and calls.',
      ro: 'Un spațiu de lucru vast, la preț fix per companie, cu telefonie integrată și ediție on-premise, față în față cu un CRM construit în jurul conversațiilor și apelurilor cu AI.',
      ru: 'Широкая платформа по фиксированной цене за компанию, со встроенной телефонией и коробочной версией, — против CRM, построенной вокруг ИИ-диалогов и звонков.',
    },
    langs: ['en', 'ro'],
  },
  {
    slug: 'hubspot',
    competitors: ['hubspot'],
    label: { en: 'HubSpot', ro: 'HubSpot', ru: 'HubSpot' },
    summary: {
      en: 'The large ecosystem and per-seat pricing with onboarding fees, against one team price and AI on chat, email and live calls.',
      ro: 'Ecosistemul mare și prețul per loc, cu taxe de onboarding, față în față cu un preț pentru toată echipa și AI pe chat, email și apeluri.',
      ru: 'Большая экосистема и цена за место с платным онбордингом — против одной цены на команду и ИИ в чатах, почте и звонках.',
    },
    langs: ['en', 'ro'],
  },
  {
    slug: 'kommo-amocrm',
    competitors: ['kommo', 'amocrm'],
    label: { en: 'Kommo and amoCRM', ro: 'Kommo și amoCRM', ru: 'Kommo и amoCRM' },
    summary: {
      en: 'Messenger-first sales CRMs sold per user for six months at a time, against monthly billing, a Free plan and AI that also takes phone calls.',
      ro: 'CRM-uri de vânzări prin mesagerie, vândute per utilizator pe câte șase luni, față în față cu plata lunară, un plan Free și AI care răspunde și la telefon.',
      ru: 'CRM для продаж в мессенджерах с оплатой за пользователя минимум на полгода — против помесячной оплаты, бесплатного тарифа и ИИ, который отвечает и на звонки.',
    },
    langs: ['en', 'ro', 'ru'],
  },
  {
    slug: 'odoo',
    competitors: ['odoo'],
    label: { en: 'Odoo', ro: 'Odoo', ru: 'Odoo' },
    summary: {
      en: 'A full business suite priced per user with a first-year discount, against a CRM that goes deeper on customer conversations and calls.',
      ro: 'O suită completă pentru afacere, cu preț per utilizator și reducere în primul an, față în față cu un CRM care merge mai adânc pe conversații și apeluri.',
      ru: 'Полный набор бизнес-приложений с ценой за пользователя и скидкой на первый год — против CRM, которая глубже работает с диалогами и звонками.',
    },
    langs: ['en', 'ro'],
  },
  {
    slug: 'pipedrive',
    competitors: ['pipedrive'],
    label: { en: 'Pipedrive', ro: 'Pipedrive', ru: 'Pipedrive' },
    summary: {
      en: 'A polished pipeline CRM with no built-in calling and WhatsApp in beta, against messaging channels and AI phone calls on every plan.',
      ro: 'Un CRM de pipeline bine finisat, fără apeluri integrate și cu WhatsApp în beta, față în față cu canale de mesagerie și apeluri AI pe toate planurile.',
      ru: 'Аккуратная CRM для воронки без встроенных звонков и с WhatsApp в бете — против мессенджеров и ИИ-звонков на всех тарифах.',
    },
    langs: ['en', 'ro'],
  },
  {
    slug: 'zoho',
    competitors: ['zoho'],
    label: { en: 'Zoho CRM', ro: 'Zoho CRM', ru: 'Zoho CRM' },
    summary: {
      en: 'Five editions, 28 languages and nine data-centre regions, with most Zia AI on the top tiers, against AI assistants on every plan.',
      ro: 'Cinci ediții, 28 de limbi și nouă regiuni de centre de date, cu cea mai mare parte din AI-ul Zia pe planurile de top, față în față cu asistenți AI pe toate planurile.',
      ru: 'Пять редакций, 28 языков и девять регионов дата-центров, большая часть ИИ Zia — на старших тарифах; против ИИ-ассистентов на всех тарифах.',
    },
    langs: ['en', 'ro'],
  },
];

// ---------------------------------------------------------------------------------------------------------
// Fineguide's column (src/data/pricing.ts and public/llms.txt; never hosting or providers)
// ---------------------------------------------------------------------------------------------------------

const PLAN_NAMES = ['Free', 'Starter', 'Business', 'Premium'] as const;
/** Teammates included besides the account owner (llms.txt, Pricing). */
const TEAMMATES = [1, 3, 5, 10] as const;

export const FINEGUIDE_SOURCES: Source[] = [
  { id: 'fg-pricing', title: 'Fineguide: Pricing', url: '/pricing/' },
  { id: 'fg-assistants', title: 'Fineguide: AI Assistants', url: '/ai-assistants/' },
  { id: 'fg-messages', title: 'Fineguide: Messages & Inbox', url: '/messages/' },
  { id: 'fg-voice-ai', title: 'Fineguide: AI Telephony', url: '/voice-ai/' },
  { id: 'fg-campaigns', title: 'Fineguide: Campaigns', url: '/campaigns/' },
  { id: 'fg-voice-qa', title: 'Fineguide: Voice QA', url: '/voice-qa/' },
  { id: 'fg-crm', title: 'Fineguide: CRM', url: '/crm/' },
  { id: 'fg-enterprise', title: 'Fineguide: Enterprise', url: '/enterprise/' },
  { id: 'fg-privacy', title: 'Fineguide: Privacy Policy', url: '/privacy-policy/' },
  { id: 'fg-llms', title: 'Fineguide: product facts (llms.txt)', url: '/llms.txt' },
];

const LOCALE: Record<CompareLang, string> = { en: 'en-US', ro: 'de-DE', ru: 'ru-RU' };

/** "$24.90" in English, "$24,90" in Romanian and Russian; roubles after the number. */
export function money(n: number, currency: Currency, lang: CompareLang, decimals?: number): string {
  const digits = decimals ?? (Number.isInteger(n) ? 0 : 2);
  const s = n.toLocaleString(LOCALE[lang], { minimumFractionDigits: digits, maximumFractionDigits: digits });
  if (currency === 'RUB') return `${s} ₽`;
  return `${currency === 'USD' ? '$' : '€'}${s}`;
}

/** The text in `lang`. A Russian page must never fall back to English silently, so a gap fails the build. */
export function pick(text: Text, lang: CompareLang): string {
  const s = text[lang];
  if (s === undefined) throw new Error(`Missing ${lang} copy for "${text.en.slice(0, 60)}…" in src/data/compare.ts`);
  return s;
}

const PLAN_WORDS: Record<CompareLang, { from: string; list: string; yearly: string; custom: string }> = {
  en: { from: 'from', list: 'list price', yearly: 'billed yearly', custom: 'custom price' },
  ro: { from: 'de la', list: 'preț de listă', yearly: 'la plata anuală', custom: 'preț la cerere' },
  ru: { from: 'от', list: 'базовая цена', yearly: 'при оплате за год', custom: 'цена по запросу' },
};

/** "Base: $25 · Advanced: $35 · …" from the structured plans. */
export function planList(c: Competitor, lang: CompareLang): string {
  const w = PLAN_WORDS[lang];
  const m = (n: number) => money(n, c.currency, lang, n === 0 ? 0 : c.decimals);
  return c.plans
    .map((p) => {
      const name = typeof p.name === 'string' ? p.name : pick(p.name, lang);
      if (p.free) return `${name}: ${m(0)}`;
      if (p.custom) return `${name}: ${w.custom}`;
      let s = p.from !== undefined ? `${w.from} ${m(p.from)}` : m(p.price!);
      const extra: string[] = [];
      if (p.list !== undefined) extra.push(`${w.list} ${m(p.list)}`);
      if (p.yearly !== undefined) extra.push(`${m(p.yearly)} ${w.yearly}`);
      if (extra.length) s += ` (${extra.join('; ')})`;
      return `${name}: ${s}`;
    })
    .join(' · ');
}

/** Fineguide's cells. Romanian shows euros only, the same rule as the Romanian pricing page. */
export function fineguideFacts(lang: CompareLang): Record<RowKey, Fact> {
  const eur = (n: number) => money(n, 'EUR', lang);
  const usd = (n: number) => money(n, 'USD', lang);
  const list = PLANS.map((p, i) => `${PLAN_NAMES[i]}: ${eur(p.monthly)}`).join(' · ');
  const usdList = PLANS.map((p) => usd(p.usdMonthly)).join(' · ');
  const yearly = PLANS.filter((p) => p.yearly).map((p, i) => `${PLAN_NAMES[i + 1]} ${eur(yearlyMonthly(p.monthly))}`).join(', ');
  const mates = TEAMMATES.join(', ').replace(/, (\d+)$/, lang === 'en' ? ' or $1' : lang === 'ro' ? ' sau $1' : ' или $1');

  const plans: Record<CompareLang, string> = {
    en: `${list} a month for the whole organization, including you plus ${mates} teammates. Outside Europe: ${usdList}. Yearly billing costs 20% less (${yearly} a month).`,
    ro: `${list} pe lună pentru toată organizația, cu tine plus ${mates} colegi incluși. Plata anuală costă cu 20% mai puțin (${yearly} pe lună).`,
    ru: `${list} в месяц за всю организацию: владелец плюс ${mates} коллег. За пределами Европы: ${usdList}. При оплате за год на 20% дешевле (${yearly} в месяц).`,
  };

  return {
    plans: { en: plans.en, ro: plans.ro, ru: plans.ru, src: ['fg-pricing'] },
    freeTrial: {
      en: 'Free plan with no time limit and no card: 200 credits given once (about 200 AI replies), you plus 1 teammate. No time-limited trial.',
      ro: 'Plan Free fără limită de timp și fără card: 200 de credite oferite o singură dată (circa 200 de răspunsuri AI), tu plus un coleg. Fără perioadă de probă limitată.',
      ru: 'Тариф Free без ограничения по времени и без карты: 200 кредитов единоразово (около 200 ответов ИИ), владелец плюс 1 коллега. Ограниченного по времени пробного периода нет.',
      src: ['fg-pricing'],
    },
    billing: {
      en: 'Monthly or yearly, chosen when you subscribe. No setup fees; cancel anytime from billing settings, and the plan runs to the end of the paid month. One subscription per organization; euros in Europe, US dollars elsewhere.',
      ro: 'Lunar sau anual, la alegere când te abonezi. Fără taxe de instalare; anulezi oricând din setările de facturare, iar planul merge până la sfârșitul lunii plătite. Un singur abonament pe organizație; clienții din Europa plătesc în euro.',
      ru: 'Помесячно или за год — выбирается при подписке. Без платы за подключение; отменить можно в любой момент в настройках оплаты, тариф действует до конца оплаченного месяца. Одна подписка на организацию; в Европе оплата в евро, в остальных странах — в долларах США.',
      src: ['fg-pricing'],
    },
    ai: {
      en: 'AI assistants on every plan, paid in credits (1 credit = one standard AI reply). They answer from the knowledge you give them (URLs, documents, PDFs), follow your persona and handoff rules, call your own systems through custom actions and hand the conversation to a person. On paid plans they also write the fields you define into CRM leads.',
      ro: 'Asistenți AI pe toate planurile, plătiți în credite (1 credit = un răspuns AI obișnuit). Răspund din cunoștințele pe care le dai (URL-uri, documente, PDF-uri), respectă persona și regulile de predare, apelează sistemele tale prin acțiuni personalizate și predau conversația unui om. Pe planurile plătite scriu și câmpurile alese de tine în lead-urile din CRM.',
      ru: 'ИИ-ассистенты на всех тарифах, оплата кредитами (1 кредит = один обычный ответ ИИ). Отвечают по вашим материалам (ссылки, документы, PDF), следуют заданной роли и правилам передачи, вызывают ваши системы через собственные действия и передают разговор человеку. На платных тарифах они также записывают нужные поля в лиды CRM.',
      src: ['fg-assistants', 'fg-pricing'],
    },
    channels: {
      en: 'Website chat widget, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord, and inside amoCRM and Kommo. One team inbox for chat and your own email (IMAP and SMTP).',
      ro: 'Widgetul de chat de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord, plus direct în amoCRM și Kommo. Un singur inbox de echipă pentru chat și emailul tău (IMAP și SMTP).',
      ru: 'Чат-виджет на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack и Discord, а также внутри amoCRM и Kommo. Общий inbox команды для чатов и вашей собственной почты (IMAP и SMTP).',
      src: ['fg-assistants', 'fg-messages'],
    },
    phone: {
      en: 'AI assistants on live inbound and outbound calls over your own phone system (SIP), in 14 languages including Romanian and Russian; outbound call campaigns (outreach, survey, promotion). 10 credits a minute.',
      ro: 'Asistenți AI pe apeluri în direct, primite și efectuate, prin propria ta centrală telefonică (SIP), în 14 limbi, inclusiv română și rusă; campanii de apeluri (prospectare, sondaj, promoție). 10 credite pe minut.',
      ru: 'ИИ-ассистенты на живых входящих и исходящих звонках через вашу телефонию (SIP), на 14 языках, включая русский и румынский; исходящие обзвоны (привлечение, опрос, промо). 10 кредитов за минуту.',
      src: ['fg-voice-ai', 'fg-campaigns', 'fg-pricing'],
    },
    callScoring: {
      en: 'Voice QA: every recorded call transcribed and scored against each department’s own rules and weights, with quotes and a suggestion for every rule; agent scorecards; reports in 30 languages. 12 credits a minute.',
      ro: 'Voice QA: fiecare apel înregistrat este transcris și evaluat după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă; fișe de scor pe operator; rapoarte în 30 de limbi. 12 credite pe minut.',
      ru: 'Voice QA: каждый записанный звонок расшифровывается и оценивается по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу; карточки оценок сотрудников; отчёты на 30 языках. 12 кредитов за минуту.',
      src: ['fg-voice-qa', 'fg-pricing'],
    },
    languages: {
      en: 'Workspace in English. Chat widget interface in 24 languages, including Romanian and Russian; AI phone calls in 14. Website and support in English and Romanian.',
      ro: 'Workspace-ul este în engleză. Interfața widgetului de chat, în 24 de limbi, inclusiv română și rusă; apelurile AI, în 14. Site și suport în română și engleză.',
      ru: 'Рабочее пространство — на английском. Интерфейс чат-виджета — на 24 языках, включая русский и румынский; ИИ-звонки — на 14. Сайт и поддержка — на английском и румынском.',
      src: ['fg-llms'],
    },
    data: {
      en: 'Personal data handled under Moldova’s Law No. 195/2024 on personal data protection, and the GDPR where it applies. On-premise deployment on your own infrastructure under an Enterprise contract.',
      ro: 'Datele personale sunt prelucrate conform Legii nr. 195/2024 privind protecția datelor cu caracter personal și GDPR, acolo unde se aplică. Instalare on-premise pe infrastructura ta, prin contract Enterprise.',
      ru: 'Персональные данные обрабатываются по Закону Республики Молдова № 195/2024 о защите персональных данных и по GDPR, где он применяется. Развёртывание on-premise на вашей инфраструктуре — по договору Enterprise.',
      src: ['fg-privacy', 'fg-enterprise'],
    },
  };
}

// ---------------------------------------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------------------------------------

/** /compare/x/, /ro/compare/x/ or /ru/compare/x/; a page not published in `lang` links to its English copy. */
export function comparePath(lang: CompareLang, slug?: string): string {
  const page = slug ? COMPARE_PAGES.find((p) => p.slug === slug) : undefined;
  const target: CompareLang = !slug || page?.langs.includes(lang) ? lang : 'en';
  const prefix = target === 'en' ? '' : `/${target}`;
  return `${prefix}/compare/${slug ? `${slug}/` : ''}`;
}

/** A site page in the reader's language: Romanian has /ro/ twins, Russian readers get the English page. */
export function sitePath(lang: CompareLang, path: string): string {
  if (lang !== 'ro' || path.endsWith('.txt')) return path;
  return `/ro${path}`;
}
