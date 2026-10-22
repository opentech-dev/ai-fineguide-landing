/**
 * The facts behind the /compare/ pages (English), /ro/compare/ (Romanian) and /ru/compare/ (Russian).
 *
 * No competitor prices, by the owner's decision (2026-10-22): no price figures, plans' prices, currencies,
 * discounts, fees, trials, free plans, billing or contract terms, and no "cheaper" or "costs less" anywhere
 * on these pages. So there is no monthly price re-check. Every competitor fact below is a capability (AI,
 * channels, phone, call scoring, languages, data) read on the vendor's own pages on CHECKED and linked in
 * that competitor's `sources`; the pages print each source as a numbered footnote. A fact we could not
 * confirm on a vendor page is `null` and the table says so. It is never guessed. When a vendor page changes,
 * fix the text here and update CHECKED (and `checked` on the competitor).
 *
 * Fineguide's own column is built from public/llms.txt and the product pages; the one line about Fineguide's
 * own plans under the table comes from src/data/pricing.ts (`fineguidePlansFrom`). It never says where
 * Fineguide is hosted or which providers it runs on.
 */
import { PLANS, formatAmount } from './pricing';

export const CHECKED = '2026-10-21';

export type CompareLang = 'en' | 'ro' | 'ru';
export type CompetitorId = 'kommo' | 'amocrm' | 'hubspot' | 'pipedrive' | 'bitrix24' | 'odoo' | 'zoho';

/** Copy in each language: every comparison is published in all three. */
export interface Text {
  en: string;
  ro: string;
  ru: string;
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

/** The table's rows: capabilities only (no price, plan, trial or billing rows; see the header). */
export type RowKey = 'ai' | 'channels' | 'phone' | 'callScoring' | 'languages' | 'data';

export const ROW_ORDER: RowKey[] = ['ai', 'channels', 'phone', 'callScoring', 'languages', 'data'];

export interface Competitor {
  id: CompetitorId;
  name: string;
  url: string;
  checked: string;
  /** One cell per table row; null when no vendor page states it. */
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
  facts: {
    ai: {
      en: 'AI reply suggestions, summaries and writing help on every plan. AI agents: up to 3 on Advanced, up to 50 on Pro. Agents reply to incoming messages only and cannot start a conversation.',
      ro: 'Sugestii de răspuns, rezumate și ajutor la scris cu AI pe toate planurile. Agenți AI: până la 3 pe Advanced, până la 50 pe Pro. Agenții răspund doar la mesajele primite și nu pot începe o conversație.',
      ru: 'Подсказки ответов, саммари и помощь с текстами на всех тарифах. ИИ-агенты: до 3 на Advanced, до 50 на Pro. Агенты отвечают только на входящие сообщения и не начинают диалог сами.',
      src: ['plans', 'ai-agent'],
    },
    channels: {
      en: 'WhatsApp, Instagram, TikTok, Facebook Messenger and Telegram, live chat and two-way email sync. Base: 1 WhatsApp number and 1 Instagram account; Advanced: 3 of each; Pro: unlimited channels.',
      ro: 'WhatsApp, Instagram, TikTok, Facebook Messenger și Telegram, chat live și email sincronizat în ambele sensuri. Base: 1 număr WhatsApp și 1 cont Instagram; Advanced: câte 3; Pro: canale nelimitate.',
      ru: 'WhatsApp, Instagram, TikTok, Facebook Messenger и Telegram, онлайн-чат и двусторонняя синхронизация почты. Base: 1 номер WhatsApp и 1 аккаунт Instagram; Advanced: по 3; Pro: без ограничения каналов.',
      src: ['plans'],
    },
    phone: {
      en: 'SMS and VoIP integrations. On Pro, the AI agent answers incoming voice messages in text. Neither the plans page nor the AI agent page lists AI on live phone calls.',
      ro: 'Integrări SMS și VoIP. Pe Pro, agentul AI răspunde în scris la mesajele vocale primite. Nici pagina planurilor, nici cea despre agentul AI nu menționează AI pe apeluri telefonice în direct.',
      ru: 'Интеграции SMS и VoIP. На Pro ИИ-агент отвечает текстом на входящие голосовые сообщения. Ни на странице тарифов, ни на странице ИИ-агента ИИ на живых звонках не указан.',
      src: ['plans', 'ai-agent'],
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
    { id: 'plans', title: 'Kommo: Plans and features (with FAQ)', url: 'https://www.kommo.com/pricing/' },
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
  facts: {
    ai: {
      en: 'amoAI text processing, reply suggestions and conversation summaries. The AI agent is on Профессиональный, Enterprise and Enterprise Lite; you connect your own OpenAI or YandexGPT API key, and the provider cannot be changed afterwards.',
      ro: 'amoAI: procesare de text, sugestii de răspuns și rezumate ale conversațiilor. Agentul AI este pe Профессиональный, Enterprise și Enterprise Lite; conectezi propria cheie API OpenAI sau YandexGPT, iar furnizorul nu mai poate fi schimbat după aceea.',
      ru: 'amoAI: обработка текста, предложение ответов и резюме бесед. ИИ-агент доступен на «Профессиональном», Enterprise и Enterprise Lite; подключается ваш собственный API-ключ OpenAI или YandexGPT, сменить провайдера после подключения нельзя.',
      src: ['plans', 'ai-agent'],
    },
    channels: {
      en: 'Messenger integrations, online chat, web forms and email feed the pipeline; Salesbot is a visual chat-bot builder.',
      ro: 'Integrări cu mesagerii, chat online, formulare web și email care alimentează pâlnia de vânzări; Salesbot este un constructor vizual de chatboți.',
      ru: 'Интеграции с мессенджерами, онлайн-чат, веб-формы и почта создают сделки в воронке; Salesbot — визуальный конструктор чат-ботов.',
      src: ['plans'],
    },
    phone: {
      en: 'Telephony through integrations: calls create deals and call statistics appear in reports. No AI on live calls is listed.',
      ro: 'Telefonie prin integrări: apelurile creează tranzacții, iar statisticile apelurilor apar în rapoarte. AI pe apeluri în direct nu este menționat.',
      ru: 'Телефония через интеграции: звонки создают сделки, статистика звонков есть в отчётах. ИИ на живых звонках не указан.',
      src: ['plans'],
    },
    callScoring: null,
    languages: {
      en: 'The amoCRM site and help centre are in Russian.',
      ro: 'Site-ul și centrul de ajutor amoCRM sunt în rusă.',
      ru: 'Сайт и справка amoCRM — на русском языке.',
      src: ['plans', 'ai-agent'],
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
    { id: 'plans', title: 'amoCRM: plans and features (with FAQ)', url: 'https://www.amocrm.ru/buy' },
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
  facts: {
    ai: {
      en: 'AI agents: the Customer Agent answers across chat, email, forms and calling; Prospecting and Data agents and Agent Builder are also listed.',
      ro: 'Agenți AI: Customer Agent răspunde pe chat, email, formulare și apeluri; sunt listați și agenții Prospecting și Data, plus Agent Builder.',
      ru: 'ИИ-агенты: Customer Agent отвечает в чате, почте, формах и звонках; также указаны агенты Prospecting и Data и Agent Builder.',
      src: ['plans'],
    },
    channels: {
      en: 'Live chat, Facebook Messenger and email. Connecting WhatsApp to the inbox needs Marketing Hub or Service Hub Professional or Enterprise.',
      ro: 'Chat live, Facebook Messenger și email. Conectarea WhatsApp la inbox cere Marketing Hub sau Service Hub Professional ori Enterprise.',
      ru: 'Онлайн-чат, Facebook Messenger и почта. Для подключения WhatsApp к inbox нужен Marketing Hub или Service Hub уровня Professional или Enterprise.',
      src: ['plans', 'whatsapp'],
    },
    phone: {
      en: 'Calling from Starter, with limits on calling minutes; HubSpot-provided phone numbers are not supported in every country.',
      ro: 'Apeluri de la Starter, cu limite de minute; numerele de telefon oferite de HubSpot nu sunt disponibile în toate țările.',
      ru: 'Звонки начиная со Starter, с лимитами минут; номера от HubSpot доступны не во всех странах.',
      src: ['plans'],
    },
    callScoring: {
      en: 'Conversation intelligence (call transcription and coaching) on Professional and Enterprise.',
      ro: 'Conversation intelligence (transcrierea apelurilor și coaching) pe Professional și Enterprise.',
      ru: 'Conversation intelligence (расшифровка звонков и коучинг) на Professional и Enterprise.',
      src: ['plans'],
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
    { id: 'plans', title: 'HubSpot: Sales Hub plans and features', url: 'https://www.hubspot.com/pricing/sales' },
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
  facts: {
    ai: {
      en: 'AI import assistant, AI report creation and the Sales Assistant on every plan; AI email writing, summaries and suggested replies on Premium and Ultimate. Pipedrive Nova (meeting briefs, call transcripts, suggested CRM updates) is listed from Lite.',
      ro: 'Asistent AI de import, rapoarte create cu AI și Sales Assistant pe toate planurile; scrierea emailurilor cu AI, rezumate și răspunsuri sugerate pe Premium și Ultimate. Pipedrive Nova (pregătire pentru întâlniri, transcrieri ale apelurilor, actualizări sugerate în CRM) apare de la Lite.',
      ru: 'ИИ-помощник импорта, создание отчётов с ИИ и Sales Assistant на всех тарифах; написание писем с ИИ, саммари и предлагаемые ответы на Premium и Ultimate. Pipedrive Nova (подготовка к встречам, расшифровки звонков, предлагаемые обновления CRM) указан начиная с Lite.',
      src: ['plans', 'ai'],
    },
    channels: {
      en: 'Full email sync with tracking from Growth. The WhatsApp integration is on Growth and above, still in beta and not yet open to every customer. LeadBooster add-on for lead capture.',
      ro: 'Sincronizare completă a emailului, cu urmărire, de la Growth. Integrarea WhatsApp este pe Growth și mai sus, încă în beta și nu e deschisă încă tuturor clienților. Add-on-ul LeadBooster pentru captarea lead-urilor.',
      ru: 'Полная синхронизация почты с отслеживанием — с Growth. Интеграция WhatsApp — на Growth и выше, пока в бете и доступна не всем клиентам. Дополнение LeadBooster для сбора лидов.',
      src: ['plans', 'whatsapp'],
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
    { id: 'plans', title: 'Pipedrive: Plans and features', url: 'https://www.pipedrive.com/en/pricing' },
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
  facts: {
    ai: {
      en: 'CoPilot AI: AI for everyday work from Basic; AI chat assistant, voice-to-task and meeting follow-up on Standard Vibe+; AI automation agents on Professional Vibe+.',
      ro: 'CoPilot AI: AI pentru munca de zi cu zi de la Basic; asistent AI în chat, sarcini din mesaje vocale și rezumate după întâlniri pe Standard Vibe+; agenți AI de automatizare pe Professional Vibe+.',
      ru: 'CoPilot: ИИ для повседневной работы с Basic; ИИ-ассистент в чате, задачи из голоса и итоги встреч на Standard Vibe+; ИИ-агенты автоматизации на Professional Vibe+.',
      src: ['plans'],
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
      src: ['plans'],
    },
  },
  uiLanguages: null,
  dataLocation: null, // the plans page names an on-premise edition, not where the cloud keeps data
  reviewComplaints: [],
  sources: [
    { id: 'plans', title: 'Bitrix24: Plans and features (Essentials and Vibe+, FAQ, on-premise)', url: 'https://www.bitrix24.com/prices/' },
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
  facts: {
    ai: {
      en: 'AI app with AI agents that answer from PDFs, web links, Documents files and Knowledge articles, on a choice of ChatGPT or Gemini models. With Live Chat installed, a Livechat AI agent answers visitors and escalates to human follow-up. Agentic AI is listed with the Custom plan.',
      ro: 'Aplicația AI, cu agenți AI care răspund din PDF-uri, linkuri web, fișiere din Documents și articole din Knowledge, pe modele ChatGPT sau Gemini, la alegere. Cu Live Chat instalat, un agent AI răspunde vizitatorilor și escaladează conversația pentru preluare de către un om. Agentic AI apare la planul Custom.',
      ru: 'Приложение AI с ИИ-агентами, которые отвечают по PDF, веб-ссылкам, файлам Documents и статьям Knowledge, на моделях ChatGPT или Gemini на выбор. При установленном Live Chat ИИ-агент отвечает посетителям и передаёт диалог людям для дальнейшей работы. Agentic AI указан в тарифе Custom.',
      src: ['plans', 'ai-agents', 'ai-live-chat'],
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
      src: ['plans'],
    },
  },
  uiLanguages: null,
  dataLocation: null,
  reviewComplaints: [],
  sources: [
    { id: 'plans', title: 'Odoo: Plans and apps (with FAQ)', url: 'https://www.odoo.com/pricing' },
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
  facts: {
    ai: {
      en: 'Zoho lists AI agents from Professional and extended AI on Enterprise. In the edition comparison, Zia’s prediction, conversational AI and email AI rows are marked for Enterprise and Ultimate; some Zia features work in English only.',
      ro: 'Zoho listează agenți AI de la Professional și AI extins pe Enterprise. În comparația edițiilor, rândurile Zia pentru predicții, AI conversațional și AI pentru email sunt bifate la Enterprise și Ultimate; unele funcții Zia merg doar în engleză.',
      ru: 'Zoho указывает ИИ-агентов с Professional, расширенный ИИ — на Enterprise. В сравнении редакций строки Zia (прогнозы, разговорный ИИ, ИИ для почты) отмечены для Enterprise и Ultimate; часть функций Zia работает только на английском.',
      src: ['plans', 'comparison'],
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
      src: ['plans', 'comparison'],
    },
    callScoring: null,
    languages: {
      en: '28 interface languages, including Russian; Romanian is not listed.',
      ro: '28 de limbi de interfață, inclusiv rusa; româna nu apare în listă.',
      ru: '28 языков интерфейса, включая русский; румынского в списке нет.',
      src: ['plans'],
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
    { id: 'plans', title: 'Zoho CRM: Editions and features (with FAQ)', url: 'https://www.zoho.com/crm/zohocrm-pricing.html' },
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
      en: 'A broad company workspace with built-in telephony and an on-premise edition, against a CRM built around AI conversations and calls.',
      ro: 'Un spațiu de lucru vast pentru toată compania, cu telefonie integrată și ediție on-premise, față în față cu un CRM construit în jurul conversațiilor și apelurilor cu AI.',
      ru: 'Широкая платформа для всей компании со встроенной телефонией и коробочной версией — против CRM, построенной вокруг ИИ-диалогов и звонков.',
    },
    langs: ['en', 'ro', 'ru'],
  },
  {
    slug: 'hubspot',
    competitors: ['hubspot'],
    label: { en: 'HubSpot', ro: 'HubSpot', ru: 'HubSpot' },
    summary: {
      en: 'The large ecosystem, with marketing, service and content tools beside sales, against a CRM with AI on chat, email and live calls.',
      ro: 'Ecosistemul mare, cu unelte de marketing, service și conținut lângă vânzări, față în față cu un CRM cu AI pe chat, email și apeluri în direct.',
      ru: 'Большая экосистема с инструментами маркетинга, сервиса и контента рядом с продажами — против CRM с ИИ в чатах, почте и живых звонках.',
    },
    langs: ['en', 'ro', 'ru'],
  },
  {
    slug: 'kommo-amocrm',
    competitors: ['kommo', 'amocrm'],
    label: { en: 'Kommo and amoCRM', ro: 'Kommo și amoCRM', ru: 'Kommo и amoCRM' },
    summary: {
      en: 'Mature, messenger-first sales CRMs, against an AI-first CRM whose assistants also take phone calls and can work inside them.',
      ro: 'CRM-uri de vânzări mature, construite în jurul mesageriei, față în față cu un CRM construit pe AI, ai cărui asistenți răspund și la telefon și pot lucra chiar în ele.',
      ru: 'Зрелые CRM для продаж через мессенджеры — против CRM, построенной вокруг ИИ, чьи ассистенты отвечают и на звонки и могут работать прямо внутри них.',
    },
    langs: ['en', 'ro', 'ru'],
  },
  {
    slug: 'odoo',
    competitors: ['odoo'],
    label: { en: 'Odoo', ro: 'Odoo', ru: 'Odoo' },
    summary: {
      en: 'A full business suite, against a CRM that goes deeper on customer conversations and calls.',
      ro: 'O suită completă pentru afacere, față în față cu un CRM care merge mai adânc pe conversații și apeluri.',
      ru: 'Полный набор бизнес-приложений — против CRM, которая глубже работает с диалогами и звонками.',
    },
    langs: ['en', 'ro', 'ru'],
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
    langs: ['en', 'ro', 'ru'],
  },
  {
    slug: 'zoho',
    competitors: ['zoho'],
    label: { en: 'Zoho CRM', ro: 'Zoho CRM', ru: 'Zoho CRM' },
    summary: {
      en: '28 interface languages and nine data-centre regions, with most Zia AI on the top tiers, against AI assistants on every plan.',
      ro: '28 de limbi de interfață și nouă regiuni de centre de date, cu cea mai mare parte din AI-ul Zia pe planurile de top, față în față cu asistenți AI pe toate planurile.',
      ru: '28 языков интерфейса и девять регионов дата-центров, большая часть ИИ Zia — на старших тарифах; против ИИ-ассистентов на всех тарифах.',
    },
    langs: ['en', 'ro', 'ru'],
  },
];

// ---------------------------------------------------------------------------------------------------------
// Fineguide's column (public/llms.txt and the product pages; never hosting or providers)
// ---------------------------------------------------------------------------------------------------------

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

/** The text in `lang`. A page must never fall back to another language silently, so a gap fails the build. */
export function pick(text: Text, lang: CompareLang): string {
  const s = text[lang];
  if (!s) throw new Error(`Missing ${lang} copy for "${text.en.slice(0, 60)}…" in src/data/compare.ts`);
  return s;
}

/**
 * Fineguide's cheapest paid plan, a month, in euros ("€100"), read from src/data/pricing.ts so it never drifts.
 * It feeds the one line about Fineguide's own plans (PlansLine.astro), the only price these pages show.
 */
export function fineguidePlansFrom(lang: CompareLang): string {
  const from = Math.min(...PLANS.filter((p) => p.monthly > 0).map((p) => p.monthly));
  return `€${formatAmount(from, lang)}`;
}

/** Fineguide's cells, one per table row. */
export const FINEGUIDE_FACTS: Record<RowKey, Fact> = {
  ai: {
    en: 'AI assistants on every plan. They answer from the knowledge you give them (URLs, documents, PDFs), follow your persona and handoff rules, call your own systems through custom actions and hand the conversation to a person. On paid plans they also write the fields you define into CRM leads.',
    ro: 'Asistenți AI pe toate planurile. Răspund din cunoștințele pe care le dai (URL-uri, documente, PDF-uri), respectă persona și regulile de predare, apelează sistemele tale prin acțiuni personalizate și predau conversația unui om. Pe planurile plătite scriu și câmpurile alese de tine în lead-urile din CRM.',
    ru: 'ИИ-ассистенты на всех тарифах. Отвечают по вашим материалам (ссылки, документы, PDF), следуют заданной роли и правилам передачи, вызывают ваши системы через собственные действия и передают разговор человеку. На платных тарифах они также записывают нужные поля в лиды CRM.',
    src: ['fg-assistants', 'fg-pricing'],
  },
  channels: {
    en: 'Website chat widget, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord, and inside amoCRM and Kommo. One team inbox for chat and your own email (IMAP and SMTP).',
    ro: 'Widgetul de chat de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord, plus direct în amoCRM și Kommo. Un singur inbox de echipă pentru chat și emailul tău (IMAP și SMTP).',
    ru: 'Чат-виджет на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack и Discord, а также внутри amoCRM и Kommo. Общий inbox команды для чатов и вашей собственной почты (IMAP и SMTP).',
    src: ['fg-assistants', 'fg-messages'],
  },
  phone: {
    en: 'AI assistants on live inbound and outbound calls over your own phone system (SIP), in 14 languages including Romanian and Russian; outbound call campaigns (outreach, survey, promotion).',
    ro: 'Asistenți AI pe apeluri în direct, primite și efectuate, prin propria ta centrală telefonică (SIP), în 14 limbi, inclusiv română și rusă; campanii de apeluri (prospectare, sondaj, promoție).',
    ru: 'ИИ-ассистенты на живых входящих и исходящих звонках через вашу телефонию (SIP), на 14 языках, включая русский и румынский; исходящие обзвоны (привлечение, опрос, промо).',
    src: ['fg-voice-ai', 'fg-campaigns'],
  },
  callScoring: {
    en: 'Voice QA: every recorded call transcribed and scored against each department’s own rules and weights, with quotes and a suggestion for every rule; agent scorecards; reports in 30 languages.',
    ro: 'Voice QA: fiecare apel înregistrat este transcris și evaluat după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă; fișe de scor pe operator; rapoarte în 30 de limbi.',
    ru: 'Voice QA: каждый записанный звонок расшифровывается и оценивается по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу; карточки оценок сотрудников; отчёты на 30 языках.',
    src: ['fg-voice-qa'],
  },
  languages: {
    en: 'Workspace in English. Chat widget interface in 24 languages, including Romanian and Russian; AI phone calls in 14. Website in English, Romanian and Russian; support in English and Romanian.',
    ro: 'Workspace-ul este în engleză. Interfața widgetului de chat, în 24 de limbi, inclusiv română și rusă; apelurile AI, în 14. Site în română, engleză și rusă; suport în română și engleză.',
    ru: 'Рабочее пространство — на английском. Интерфейс чат-виджета — на 24 языках, включая русский и румынский; ИИ-звонки — на 14. Сайт — на английском, румынском и русском; поддержка — на английском и румынском.',
    src: ['fg-llms'],
  },
  data: {
    en: 'Personal data handled under Moldova’s Law No. 195/2024 on personal data protection, and the GDPR where it applies. On-premise deployment on your own infrastructure under an Enterprise contract.',
    ro: 'Datele personale sunt prelucrate conform Legii nr. 195/2024 privind protecția datelor cu caracter personal și GDPR, acolo unde se aplică. Instalare on-premise pe infrastructura ta, prin contract Enterprise.',
    ru: 'Персональные данные обрабатываются по Закону Республики Молдова № 195/2024 о защите персональных данных и по GDPR, где он применяется. Развёртывание on-premise на вашей инфраструктуре — по договору Enterprise.',
    src: ['fg-privacy', 'fg-enterprise'],
  },
};

// ---------------------------------------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------------------------------------

/** /compare/x/, /ro/compare/x/ or /ru/compare/x/; a page not (yet) published in `lang` links to its English copy. */
export function comparePath(lang: CompareLang, slug?: string): string {
  const page = slug ? COMPARE_PAGES.find((p) => p.slug === slug) : undefined;
  const target: CompareLang = !slug || page?.langs.includes(lang) ? lang : 'en';
  const prefix = target === 'en' ? '' : `/${target}`;
  return `${prefix}/compare/${slug ? `${slug}/` : ''}`;
}

/** A site page in the reader's language: /x/, /ro/x/ or /ru/x/. A file (llms.txt) has one copy for all three. */
export function sitePath(lang: CompareLang, path: string): string {
  if (lang === 'en' || path.endsWith('.txt')) return path;
  return `/${lang}${path}`;
}
