// Facts checked on 2026-11-27 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Every respond.io fact below was read on 2026-11-27 on respond.io (product pages and its help centre), and every
// Trengo fact on trengo.com; each is linked in `sources`. Capabilities only: no prices, plans' prices, trials, free
// plans, discounts or billing terms. Plan NAMES appear only to say where a feature sits, as in src/data/compare.ts.
// Fineguide refs ('fg:…') use the ids already in FINEGUIDE_SOURCES (src/data/compare.ts).

const respondData = {
  en: 'respond.io says it runs on Amazon Web Services with data replicated across several data centres (no region named), is ISO 27001 certified and GDPR compliant.',
  ro: 'respond.io spune că rulează pe Amazon Web Services, cu datele replicate în mai multe centre de date (fără o regiune numită), că are certificarea ISO 27001 și respectă GDPR.',
  ru: 'respond.io сообщает, что работает на Amazon Web Services с репликацией данных в нескольких дата-центрах (регион не назван), сертифицирован по ISO 27001 и соответствует GDPR.',
  src: ['security'],
};

const trengoData = {
  en: 'Trengo says its application is hosted on Amazon Web Services; its data processing addendum says personal data may be processed in the EEA, with core infrastructure sub-processors located in the EU, and outside the EEA only with the customer’s permission.',
  ro: 'Trengo spune că aplicația este găzduită pe Amazon Web Services; acordul de prelucrare a datelor spune că datele personale pot fi prelucrate în SEE, cu subcontractanții de infrastructură de bază în UE, iar în afara SEE doar cu permisiunea clientului.',
  ru: 'Trengo сообщает, что приложение размещено на Amazon Web Services; по соглашению об обработке данных персональные данные могут обрабатываться в ЕЭЗ, основные инфраструктурные субподрядчики находятся в ЕС, а за пределами ЕЭЗ — только с разрешения клиента.',
  src: ['security', 'dpa'],
};

export const competitors = [
  {
    id: 'respond-io',
    name: 'respond.io',
    url: 'https://respond.io/',
    checked: '2026-11-27',
    facts: {
      ai: {
        en: 'AI Agents from the Growth plan answer from sources you approve (your website, product PDFs, Google Docs and CSV tables; websites re-sync on a schedule), qualify leads, recommend products, book appointments, move leads through Lifecycle stages and hand chats to people by role, online status or workload. On Advanced and Enterprise they check live data and update your CRM through HTTP requests or Workflows.',
        ro: 'Agenții AI, de la planul Growth, răspund din sursele aprobate de tine (site-ul, PDF-uri cu produse, Google Docs și tabele CSV; site-urile se resincronizează periodic), califică lead-uri, recomandă produse, fac programări, mută lead-urile prin etapele Lifecycle și predau chaturile oamenilor după rol, prezență sau încărcare. Pe Advanced și Enterprise verifică date în timp real și actualizează CRM-ul prin cereri HTTP sau Workflows.',
        ru: 'ИИ-агенты (с тарифа Growth) отвечают по одобренным вами источникам (сайт, PDF о продуктах, Google Docs и CSV-таблицы; сайты периодически пересинхронизируются), квалифицируют лидов, рекомендуют товары, записывают на встречи, переводят лидов по этапам Lifecycle и передают чаты людям по роли, статусу или загрузке. На Advanced и Enterprise они проверяют данные в реальном времени и обновляют CRM через HTTP-запросы или Workflows.',
        src: ['ai-agents', 'plans'],
      },
      channels: {
        en: 'WhatsApp Business Platform, Instagram, Facebook Messenger, TikTok (beta), Telegram, Viber, LINE, WeChat, RCS, SMS, email (Gmail, Outlook, IMAP/SMTP), website chat and a custom channel, in one team inbox. HubSpot and Salesforce connect natively; other CRMs through Zapier, Make, n8n, webhooks or HTTP requests.',
        ro: 'WhatsApp Business Platform, Instagram, Facebook Messenger, TikTok (beta), Telegram, Viber, LINE, WeChat, RCS, SMS, email (Gmail, Outlook, IMAP/SMTP), chat pe site și un canal personalizat, într-un singur inbox de echipă. HubSpot și Salesforce se conectează nativ; alte CRM-uri prin Zapier, Make, n8n, webhook-uri sau cereri HTTP.',
        ru: 'WhatsApp Business Platform, Instagram, Facebook Messenger, TikTok (бета), Telegram, Viber, LINE, WeChat, RCS, SMS, почта (Gmail, Outlook, IMAP/SMTP), чат на сайте и собственный канал — в одном inbox команды. HubSpot и Salesforce подключаются напрямую; другие CRM — через Zapier, Make, n8n, вебхуки или HTTP-запросы.',
        src: ['integrations', 'platform'],
      },
      phone: {
        en: 'WhatsApp Business Calling, Messenger calls and VoIP calls through Telnyx (make and receive calls, port an existing number, record calls) land in the same inbox. The Voice AI Agent answers inbound calls on these channels and transfers live calls to a person, on Advanced and above; it does not place outbound calls, and the help article caps each AI-handled call at 3 minutes.',
        ro: 'Apelurile WhatsApp Business Calling, apelurile Messenger și apelurile VoIP prin Telnyx (dai și primești apeluri, porți un număr existent, înregistrezi apelurile) ajung în același inbox. Agentul AI vocal răspunde la apelurile primite pe aceste canale și transferă apelul în direct unui om, de la Advanced în sus; nu face apeluri, iar articolul de ajutor limitează fiecare apel preluat de AI la 3 minute.',
        ru: 'Звонки WhatsApp Business Calling, звонки Messenger и VoIP-звонки через Telnyx (исходящие и входящие, перенос существующего номера, запись) попадают в тот же inbox. Голосовой ИИ-агент отвечает на входящие звонки в этих каналах и переводит живой звонок на человека — с тарифа Advanced; исходящих звонков он не делает, а справка ограничивает каждый звонок с ИИ тремя минутами.',
        src: ['voip', 'voice-agent'],
      },
      callScoring: {
        en: 'Calls can be recorded for review, and completed-call webhook payloads include the recording, a transcript and an AI summary. Chats can be filtered by sentiment to coach the team. The pages we read describe no scoring of calls against a checklist.',
        ro: 'Apelurile pot fi înregistrate pentru verificare, iar webhook-urile pentru apelurile încheiate conțin înregistrarea, transcrierea și un rezumat AI. Chaturile pot fi filtrate după sentiment pentru coaching. Paginile citite nu descriu evaluarea apelurilor după o listă de criterii.',
        ru: 'Звонки можно записывать для проверки, а вебхуки о завершённых звонках содержат запись, расшифровку и ИИ-резюме. Чаты можно фильтровать по тональности для обучения команды. Оценки звонков по чек-листу на прочитанных страницах нет.',
        src: ['voip', 'analytics'],
      },
      languages: {
        en: 'The Voice AI Agent speaks 32 languages and switches to the caller’s. The respond.io website and help centre are in 13 languages, Russian among them; Romanian is not one.',
        ro: 'Agentul AI vocal vorbește 32 de limbi și trece la limba celui care sună. Site-ul și centrul de ajutor respond.io sunt în 13 limbi, printre ele rusa; româna nu este.',
        ru: 'Голосовой ИИ-агент говорит на 32 языках и переключается на язык звонящего. Сайт и справочный центр respond.io — на 13 языках, включая русский; румынского среди них нет.',
        src: ['voice-agent', 'help'],
      },
      data: respondData,
    },
    uiLanguages: null,
    dataLocation: respondData,
    reviewComplaints: [],
    sources: [
      { id: 'ai-agents', title: 'respond.io: AI Agents (knowledge sources, lead qualification, handoff, Voice AI Agents)', url: 'https://respond.io/ai-agents' },
      { id: 'plans', title: 'respond.io: Plans and features (Starter, Growth, Advanced, Enterprise)', url: 'https://respond.io/pricing' },
      { id: 'integrations', title: 'respond.io: Integrations (messaging, calls, SMS, email, website chat, CRMs)', url: 'https://respond.io/integrations' },
      { id: 'platform', title: 'respond.io: Omnichannel AI conversation platform (inbox, CRM, channels)', url: 'https://respond.io/omnichannel-ai-crm-conversation-platform' },
      { id: 'voip', title: 'respond.io: VoIP Calls powered by Telnyx (calls, number porting, recording, webhooks)', url: 'https://respond.io/integrations/voip-calls' },
      { id: 'voice-agent', title: 'respond.io Help: AI skill, Handle calls (Voice AI Agent)', url: 'https://respond.io/help/ai-skills/ai-skill-handle-calls' },
      { id: 'analytics', title: 'respond.io: Conversation analytics', url: 'https://respond.io/conversation-analytics' },
      { id: 'help', title: 'respond.io Help: Getting started with AI Agents (help centre language versions)', url: 'https://respond.io/help/ai-agents/getting-started-with-ai-agents' },
      { id: 'security', title: 'respond.io: Security', url: 'https://respond.io/security' },
      { id: 'export', title: 'respond.io Help: Data export', url: 'https://respond.io/help/workspace-settings/data-export' },
    ],
  },
  {
    id: 'trengo',
    name: 'Trengo',
    url: 'https://trengo.com/',
    checked: '2026-11-27',
    facts: {
      ai: {
        en: 'AI Agent on Boost and Pro (Base has a playground): it answers from your help centre, FAQs, product or service docs and any text, applies labels, triggers actions, checks live data in connected systems, books meetings and hands the conversation to the right person with its history, by escalation rules you set. AI Journeys and AI reporting from Boost.',
        ro: 'AI Agent pe Boost și Pro (Base are un mediu de test): răspunde din centrul de ajutor, întrebările frecvente, documentația de produs sau servicii și orice text, aplică etichete, declanșează acțiuni, verifică date în timp real în sistemele conectate, face programări și predă conversația persoanei potrivite, cu istoric, după regulile de escaladare stabilite de tine. AI Journeys și rapoartele AI de la Boost.',
        ru: 'AI Agent на Boost и Pro (на Base — песочница): отвечает по справочному центру, FAQ, документации о продуктах или услугах и любому тексту, ставит метки, запускает действия, проверяет данные в подключённых системах в реальном времени, записывает на встречи и передаёт разговор нужному сотруднику вместе с историей по вашим правилам эскалации. AI Journeys и ИИ-отчёты — с Boost.',
        src: ['ai-agent', 'plans'],
      },
      channels: {
        en: 'WhatsApp, Instagram, Facebook, Telegram, TikTok, Gmail, Outlook and other email, live chat through a website widget, SMS and VoIP in one omnichannel inbox, with translation and AI summaries of conversations.',
        ro: 'WhatsApp, Instagram, Facebook, Telegram, TikTok, Gmail, Outlook și alt email, chat live printr-un widget pe site, SMS și VoIP într-un singur inbox omnicanal, cu traducere și rezumate AI ale conversațiilor.',
        ru: 'WhatsApp, Instagram, Facebook, Telegram, TikTok, Gmail, Outlook и другая почта, онлайн-чат через виджет на сайте, SMS и VoIP — в одном омниканальном inbox, с переводом и ИИ-резюме диалогов.',
        src: ['inbox'],
      },
      phone: {
        en: 'Trengo Voice, an add-on: local or national numbers in 80+ countries or your existing number, calls made and received inside Trengo, IVR menus, queues and business hours, and recordings logged on the conversation, on a SIP phone, a softphone or the calling widget. The AI Voice Agent answers inbound calls in 70+ languages, routes or escalates them and keeps a transcript; its page does not mention outbound calls.',
        ro: 'Trengo Voice, un add-on: numere locale sau naționale în peste 80 de țări sau numărul tău existent, apeluri date și primite în Trengo, meniuri IVR, cozi și program de lucru, iar înregistrările se salvează pe conversație, pe un telefon SIP, un softphone sau widgetul de apel. AI Voice Agent răspunde la apelurile primite în peste 70 de limbi, le direcționează sau le escaladează și păstrează transcrierea; pagina lui nu menționează apeluri efectuate.',
        ru: 'Trengo Voice — дополнение: местные или национальные номера в 80+ странах или ваш существующий номер, входящие и исходящие звонки внутри Trengo, IVR-меню, очереди и рабочие часы, записи сохраняются в диалоге; работает на SIP-телефоне, софтфоне или в виджете звонков. AI Voice Agent отвечает на входящие звонки на 70+ языках, маршрутизирует или эскалирует их и сохраняет расшифровку; об исходящих звонках на его странице не сказано.',
        src: ['voice', 'voice-agent', 'plans'],
      },
      callScoring: null,
      languages: {
        en: 'The AI Agent and AI Voice Agent work in 70+ languages. The Trengo website is in English, Dutch, Spanish, German, Italian and French; we could not find a list of interface languages.',
        ro: 'AI Agent și AI Voice Agent funcționează în peste 70 de limbi. Site-ul Trengo este în engleză, olandeză, spaniolă, germană, italiană și franceză; nu am găsit o listă a limbilor de interfață.',
        ru: 'AI Agent и AI Voice Agent работают на 70+ языках. Сайт Trengo — на английском, нидерландском, испанском, немецком, итальянском и французском; списка языков интерфейса мы не нашли.',
        src: ['ai-agent', 'home'],
      },
      data: trengoData,
    },
    uiLanguages: null,
    dataLocation: trengoData,
    reviewComplaints: [],
    sources: [
      { id: 'ai-agent', title: 'Trengo: AI Agent', url: 'https://trengo.com/products/ai-automation/ai-agent' },
      { id: 'plans', title: 'Trengo: Plans and features (Base, Boost, Pro, Enterprise)', url: 'https://trengo.com/prices' },
      { id: 'inbox', title: 'Trengo: Omnichannel inbox (channels, translation, AI summaries)', url: 'https://trengo.com/products/omnichannel-inbox' },
      { id: 'voice', title: 'Trengo: Trengo Voice (numbers, IVR, recordings, SIP phones)', url: 'https://trengo.com/products/trengo-voice' },
      { id: 'voice-agent', title: 'Trengo: AI Voice Agent', url: 'https://trengo.com/products/ai-voice-agent' },
      { id: 'home', title: 'Trengo: Home (site languages, integrations)', url: 'https://trengo.com/' },
      { id: 'security', title: 'Trengo: Security', url: 'https://trengo.com/security' },
      { id: 'dpa', title: 'Trengo: Terms and conditions with the data processing addendum (location of the data, sub-processors)', url: 'https://trengo.com/terms-and-conditions' },
    ],
  },
];

export const page = {
  slug: 'respond-io-trengo',
  competitors: ['respond-io', 'trengo'],
  label: { en: 'respond.io and Trengo', ro: 'respond.io și Trengo', ru: 'respond.io и Trengo' },
  summary: {
    en: 'Two omnichannel inboxes with AI agents on messaging apps and calls, against one platform where AI assistants answer chats and make calls, with a sales CRM and call scoring on the same record.',
    ro: 'Două inboxuri omnicanal cu agenți AI pe mesagerie și apeluri, față în față cu o platformă unde asistenții AI răspund pe chat și dau apeluri, cu CRM de vânzări și evaluarea apelurilor pe aceeași fișă.',
    ru: 'Два омниканальных inbox с ИИ-агентами в мессенджерах и звонках — против платформы, где ИИ-ассистенты отвечают в чатах и звонят, а CRM для продаж и оценка звонков работают с одной карточкой.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'respond.io and Trengo alternative: Fineguide compared',
    description: 'A respond.io and Trengo alternative compared fact by fact: AI agents, channels, calls, call scoring, languages and data, checked on the vendors’ own pages.',
    crumb: 'respond.io and Trengo',
    h1: 'Fineguide vs respond.io and Trengo:',
    h1Accent: 'one AI assistant on chats and on calls',
    shortAnswer:
      'respond.io and Trengo are omnichannel inboxes: they put WhatsApp, Instagram, Messenger, Telegram, TikTok, email, website chat and calls in one place, with AI agents that answer messages and inbound calls and hand over to people. Fineguide is an AI-first platform where the same assistants answer chats and also make outbound calls over your own phone system, with a sales CRM, outbound call campaigns and Voice QA call scoring on one customer record. Choose respond.io or Trengo for the widest messaging inbox; choose Fineguide when sales, calls and support belong together.',
    tableHeading: 'respond.io and Trengo vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where respond.io and Trengo are stronger',
      items: [
        { text: 'More messaging apps. respond.io connects Viber, LINE, WeChat, RCS, TikTok and SMS beside WhatsApp, Instagram, Messenger and Telegram; Trengo adds TikTok and SMS to its inbox.', refs: ['respond-io:integrations', 'trengo:inbox'] },
        { text: 'WhatsApp and Messenger calls. respond.io takes WhatsApp Business Calling and Messenger calls in the same inbox as chats, and its Voice AI Agent can answer them.', refs: ['respond-io:voip', 'respond-io:voice-agent'] },
        { text: 'Phone numbers from the vendor. Trengo Voice gives local or national numbers in 80+ countries, with IVR menus and queues, without an outside phone provider; respond.io’s VoIP calls run on Telnyx numbers, including ported ones.', refs: ['trengo:voice', 'respond-io:voip'] },
        { text: 'Native CRM connectors. respond.io connects to HubSpot and Salesforce natively and shows CRM fields beside each chat; Trengo lists HubSpot and Salesforce integrations, plus hospitality and e-commerce systems such as Shopify, Lightspeed, Mews and Cloudbeds.', refs: ['respond-io:platform', 'trengo:home'] },
        { text: 'AI agents in many languages: Trengo’s AI Agent and AI Voice Agent work in 70+ languages, respond.io’s Voice AI Agent in 32.', refs: ['trengo:ai-agent', 'respond-io:voice-agent'] },
        { text: 'Security statements on record: respond.io is ISO 27001 certified; Trengo processes personal data in the EEA by default under its data processing addendum.', refs: ['respond-io:security', 'trengo:dpa'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'AI calls both ways, on your own phone system. Fineguide assistants answer inbound calls and place outbound ones over your SIP, in 14 languages, greet known callers by first name from the CRM, transfer to a person on request and save callback requests as CRM tasks. respond.io’s Voice AI Agent answers inbound calls only, and Trengo’s AI Voice Agent page mentions only inbound calls.', refs: ['fg:fg-voice-ai', 'respond-io:voice-agent', 'trengo:voice-agent'] },
        { text: 'Outbound call campaigns worked by AI: outreach, survey and promotion campaigns over CSV audiences, CRM contacts or tags, with retries, calling hours per weekday and a test call first.', refs: ['fg:fg-campaigns'] },
        { text: 'Every recorded call scored. Voice QA transcribes each call and scores it against each department’s own rules and weights, with quotes and a suggestion for every rule, agent scorecards and reports in 30 languages. The respond.io and Trengo pages we read describe recordings, transcripts and summaries, not scoring against your checklist.', refs: ['fg:fg-voice-qa', 'respond-io:voip', 'trengo:voice'] },
        { text: 'A sales CRM built in, not alongside: contacts, companies, deals on a board or a table with value, probability and expected close date, tasks with two-way Google Calendar sync, and sales reports with a weighted forecast and win rate.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Places the inboxes do not cover: a Telegram user account (not only a bot), Slack and Discord, and inside JivoChat, amoCRM and Kommo, where the assistant works in the tool your team already uses.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        'A knowledge base per customer: through the REST API, each of your own users gets a learning context under the id you already use, and one assistant answers each user only from their own content plus your shared answers.',
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose respond.io or Trengo if…',
        items: [
          'your customers write on Viber, LINE, WeChat, RCS or SMS as well as WhatsApp and Instagram;',
          'you want WhatsApp or Messenger calls in the same inbox as chats (respond.io);',
          'you want phone numbers and IVR from the inbox vendor itself (Trengo Voice);',
          'your sales team lives in HubSpot or Salesforce and you only need the conversations beside it.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'you want AI to make outbound calls and run call campaigns, not only answer;',
          'you run a call center and want every recorded call scored against your own rules;',
          'you want the CRM, deals and forecast on the same record as every chat and call;',
          'your team works in amoCRM, Kommo or JivoChat, or your customers write on Telegram, Slack or Discord.',
        ],
      },
    },
    switching: {
      heading: 'Switching from respond.io or Trengo',
      intro: 'Contacts come over in a spreadsheet and channels reconnect one at a time, so both tools can run side by side until the team is ready.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed), give an assistant your website, FAQs and documents, and test it in the chat widget.' },
        { title: 'Export your contacts', body: { text: 'In respond.io, Owners and Managers export Contacts, Conversations and Messages from Workspace settings → Data export. From Trengo, take your contact list as a spreadsheet.', refs: ['respond-io:export'] } },
        { title: 'Import into Fineguide', body: { text: 'Import the files (CSV, TSV, XLS or XLSX), map the columns to custom fields, and review duplicates: a person confirms every merge.', refs: ['fg:fg-llms'] } },
        { title: 'Reconnect channels and email', body: { text: 'Connect WhatsApp, Telegram, Instagram or Messenger and your own mailboxes over IMAP and SMTP, and route them with rules and departments in the team inbox.', refs: ['fg:fg-messages'] } },
        { title: 'Bring your phone lines', body: { text: 'Connect your carrier or PBX over SIP, give each number to an assistant, and set answering hours, transfer and callback options.', refs: ['fg:fg-voice-ai'] } },
      ],
    },
    faq: [
      { q: 'What is a good respond.io alternative?', a: 'For the widest messaging inbox, Trengo is the closest like-for-like tool. If you also want AI that makes outbound calls, a built-in sales CRM and call scoring on the same record, Fineguide is an alternative.', refs: ['trengo:inbox', 'fg:fg-llms'] },
      { q: 'What is a good Trengo alternative?', a: 'respond.io is the closest like-for-like inbox. Fineguide suits teams that want one AI assistant on chats and on live calls in both directions, with a CRM and Voice QA call scoring.', refs: ['respond-io:integrations', 'fg:fg-voice-ai', 'fg:fg-voice-qa'] },
      { q: 'Can respond.io or Trengo AI make outbound calls?', a: 'respond.io’s help article says its Voice AI Agent answers inbound calls only, and Trengo’s AI Voice Agent page describes inbound calls. Fineguide assistants place outbound calls and run outbound call campaigns over your own phone system.', refs: ['respond-io:voice-agent', 'trengo:voice-agent', 'fg:fg-campaigns'] },
      { q: 'Does Fineguide connect WhatsApp, Instagram and Telegram in one inbox?', a: 'Yes. The team inbox brings the website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord and your own email together, with a routing queue, departments and handover to a person.', refs: ['fg:fg-messages'] },
      { q: 'Can I move from respond.io to Fineguide without losing contacts?', a: 'Yes. Export Contacts from respond.io’s Data export, then import the file into the Fineguide CRM, which reads CSV, TSV, XLS and XLSX and asks a person to confirm every duplicate merge.', refs: ['respond-io:export', 'fg:fg-llms'] },
    ],
    closing: {
      heading: 'See Fineguide on your own channels',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your operation.',
    },
    extraLinks: [
      { href: '/omnichannel-chatbot/', label: 'Omnichannel AI chatbot' },
      { href: '/messages/', label: 'Messages & Inbox' },
      { href: '/whatsapp-ai-chatbot/', label: 'WhatsApp AI chatbot' },
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
    ],
  },

  ro: {
    title: 'Alternativă la respond.io și Trengo: Fineguide comparat',
    description: 'Alternativă la respond.io și Trengo, punct cu punct: agenți AI, canale, apeluri, evaluarea apelurilor, limbi și date, verificate pe paginile oficiale.',
    crumb: 'respond.io și Trengo',
    h1: 'Fineguide vs respond.io și Trengo:',
    h1Accent: 'un singur asistent AI pe chat și la telefon',
    shortAnswer:
      'respond.io și Trengo sunt inboxuri omnicanal: aduc WhatsApp, Instagram, Messenger, Telegram, TikTok, email, chatul de pe site și apelurile într-un singur loc, cu agenți AI care răspund la mesaje și la apelurile primite și predau conversația oamenilor. Fineguide este o platformă construită pe AI, în care aceiași asistenți răspund pe chat și dau și apeluri prin propria ta centrală, cu CRM de vânzări, campanii de apeluri și evaluarea apelurilor cu Voice QA pe aceeași fișă de client. Alege respond.io sau Trengo pentru cel mai larg inbox de mesagerie; alege Fineguide când vânzările, apelurile și suportul trebuie să stea împreună.',
    tableHeading: 'respond.io și Trengo față de Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde respond.io și Trengo sunt mai puternice',
      items: [
        { text: 'Mai multe aplicații de mesagerie. respond.io conectează Viber, LINE, WeChat, RCS, TikTok și SMS pe lângă WhatsApp, Instagram, Messenger și Telegram; Trengo adaugă TikTok și SMS în inbox.', refs: ['respond-io:integrations', 'trengo:inbox'] },
        { text: 'Apeluri WhatsApp și Messenger. respond.io primește apelurile WhatsApp Business Calling și Messenger în același inbox cu chaturile, iar agentul AI vocal poate răspunde la ele.', refs: ['respond-io:voip', 'respond-io:voice-agent'] },
        { text: 'Numere de telefon de la furnizor. Trengo Voice oferă numere locale sau naționale în peste 80 de țări, cu meniuri IVR și cozi, fără un operator telefonic separat; apelurile VoIP din respond.io folosesc numere Telnyx, inclusiv portate.', refs: ['trengo:voice', 'respond-io:voip'] },
        { text: 'Conectori CRM nativi. respond.io se conectează nativ la HubSpot și Salesforce și arată câmpurile CRM lângă fiecare chat; Trengo listează integrări cu HubSpot și Salesforce, plus sisteme pentru ospitalitate și e-commerce ca Shopify, Lightspeed, Mews și Cloudbeds.', refs: ['respond-io:platform', 'trengo:home'] },
        { text: 'Agenți AI în multe limbi: AI Agent și AI Voice Agent de la Trengo funcționează în peste 70 de limbi, agentul AI vocal respond.io în 32.', refs: ['trengo:ai-agent', 'respond-io:voice-agent'] },
        { text: 'Angajamente de securitate scrise: respond.io are certificarea ISO 27001; Trengo prelucrează implicit datele personale în SEE, conform acordului de prelucrare a datelor.', refs: ['respond-io:security', 'trengo:dpa'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'Apeluri AI în ambele sensuri, pe propria centrală. Asistenții Fineguide răspund la apelurile primite și sună prin SIP-ul tău, în 14 limbi, salută după prenume clienții cunoscuți din CRM, transferă la un om la cerere și salvează cererile de revenire ca sarcini în CRM. Agentul AI vocal respond.io răspunde doar la apelurile primite, iar pagina AI Voice Agent de la Trengo menționează doar apeluri primite.', refs: ['fg:fg-voice-ai', 'respond-io:voice-agent', 'trengo:voice-agent'] },
        { text: 'Campanii de apeluri făcute de AI: prospectare, sondaj și promoție, pe audiențe din CSV, contacte CRM sau etichete, cu reîncercări, ore de apel pentru fiecare zi a săptămânii și un apel de test înainte.', refs: ['fg:fg-campaigns'] },
        { text: 'Fiecare apel înregistrat, evaluat. Voice QA transcrie fiecare apel și îl evaluează după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă, fișe de scor pe operator și rapoarte în 30 de limbi. Paginile respond.io și Trengo citite descriu înregistrări, transcrieri și rezumate, nu evaluare după lista ta de criterii.', refs: ['fg:fg-voice-qa', 'respond-io:voip', 'trengo:voice'] },
        { text: 'Un CRM de vânzări inclus, nu alături: contacte, companii, oportunități pe tablă sau în tabel cu valoare, probabilitate și dată estimată de închidere, sarcini cu sincronizare în ambele sensuri cu Google Calendar și rapoarte de vânzări cu prognoză ponderată și rată de câștig.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Locuri pe care inboxurile nu le acoperă: un cont de utilizator Telegram (nu doar un bot), Slack și Discord, plus direct în JivoChat, amoCRM și Kommo, unde asistentul lucrează în instrumentul pe care echipa îl folosește deja.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        'O bază de cunoștințe pentru fiecare client: prin REST API, fiecare utilizator al tău primește un context de învățare sub id-ul pe care îl folosești deja, iar un singur asistent îi răspunde fiecăruia doar din conținutul lui plus răspunsurile comune.',
      ],
    },
    choose: {
      heading: 'Cine ce ar trebui să aleagă',
      competitor: {
        label: 'Alege respond.io sau Trengo dacă…',
        items: [
          'clienții îți scriu pe Viber, LINE, WeChat, RCS sau SMS, nu doar pe WhatsApp și Instagram;',
          'vrei apeluri WhatsApp sau Messenger în același inbox cu chaturile (respond.io);',
          'vrei numere de telefon și IVR chiar de la furnizorul inboxului (Trengo Voice);',
          'echipa de vânzări lucrează în HubSpot sau Salesforce și ai nevoie doar de conversații alături.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'vrei ca AI-ul să și sune și să ruleze campanii de apeluri, nu doar să răspundă;',
          'ai un call center și vrei fiecare apel înregistrat evaluat după propriile reguli;',
          'vrei CRM-ul, oportunitățile și prognoza pe aceeași fișă cu fiecare chat și apel;',
          'echipa lucrează în amoCRM, Kommo sau JivoChat ori clienții îți scriu pe Telegram, Slack sau Discord.',
        ],
      },
    },
    switching: {
      heading: 'Trecerea de la respond.io sau Trengo',
      intro: 'Contactele vin într-un tabel, iar canalele se reconectează pe rând, așa că ambele instrumente pot funcționa în paralel până când echipa e gata.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card), dă unui asistent site-ul, întrebările frecvente și documentele tale și testează-l în widgetul de chat.' },
        { title: 'Exportă contactele', body: { text: 'În respond.io, Owners și Managers exportă Contacts, Conversations și Messages din Workspace settings → Data export. Din Trengo, ia lista de contacte ca tabel.', refs: ['respond-io:export'] } },
        { title: 'Importă în Fineguide', body: { text: 'Importă fișierele (CSV, TSV, XLS sau XLSX), potrivește coloanele cu câmpurile personalizate și verifică duplicatele: un om confirmă fiecare unire.', refs: ['fg:fg-llms'] } },
        { title: 'Reconectează canalele și emailul', body: { text: 'Conectează WhatsApp, Telegram, Instagram sau Messenger și propriile căsuțe de email prin IMAP și SMTP, apoi direcționează-le cu reguli și departamente în inboxul echipei.', refs: ['fg:fg-messages'] } },
        { title: 'Adu liniile telefonice', body: { text: 'Conectează operatorul sau centrala prin SIP, dă fiecare număr unui asistent și setează orele de răspuns, transferul și opțiunile de revenire.', refs: ['fg:fg-voice-ai'] } },
      ],
    },
    faq: [
      { q: 'Care este o alternativă bună la respond.io?', a: 'Pentru cel mai larg inbox de mesagerie, Trengo este instrumentul cel mai asemănător. Dacă vrei și AI care sună, un CRM de vânzări inclus și evaluarea apelurilor pe aceeași fișă, Fineguide este o alternativă.', refs: ['trengo:inbox', 'fg:fg-llms'] },
      { q: 'Care este o alternativă bună la Trengo?', a: 'respond.io este inboxul cel mai asemănător. Fineguide se potrivește echipelor care vor un singur asistent AI pe chat și pe apeluri în ambele sensuri, cu CRM și evaluarea apelurilor cu Voice QA.', refs: ['respond-io:integrations', 'fg:fg-voice-ai', 'fg:fg-voice-qa'] },
      { q: 'Pot AI-ul de la respond.io sau Trengo să facă apeluri?', a: 'Articolul de ajutor respond.io spune că agentul AI vocal răspunde doar la apelurile primite, iar pagina AI Voice Agent de la Trengo descrie apeluri primite. Asistenții Fineguide sună și rulează campanii de apeluri prin propria ta centrală.', refs: ['respond-io:voice-agent', 'trengo:voice-agent', 'fg:fg-campaigns'] },
      { q: 'Fineguide aduce WhatsApp, Instagram și Telegram într-un singur inbox?', a: 'Da. Inboxul echipei reunește chatul de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord și propriul email, cu coadă de direcționare, departamente și predare către un om.', refs: ['fg:fg-messages'] },
      { q: 'Pot trece de la respond.io la Fineguide fără să pierd contactele?', a: 'Da. Exportă Contacts din Data export în respond.io, apoi importă fișierul în CRM-ul Fineguide, care citește CSV, TSV, XLS și XLSX și cere unui om să confirme fiecare unire de duplicate.', refs: ['respond-io:export', 'fg:fg-llms'] },
    ],
    closing: {
      heading: 'Vezi Fineguide pe propriile canale',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe operațiunea ta.',
    },
    extraLinks: [
      { href: '/ro/omnichannel-chatbot/', label: 'Chatbot AI omnicanal' },
      { href: '/ro/messages/', label: 'Mesaje și Inbox' },
      { href: '/ro/whatsapp-ai-chatbot/', label: 'Chatbot AI pentru WhatsApp' },
      { href: '/ro/voice-ai/', label: 'Telefonia AI pe propria centrală' },
    ],
  },

  ru: {
    title: 'Альтернатива respond.io и Trengo: сравнение с Fineguide',
    description: 'Альтернатива и аналог respond.io и Trengo: сравниваем ИИ-агентов, каналы, звонки, оценку звонков, языки и данные по официальным страницам производителей.',
    crumb: 'respond.io и Trengo',
    h1: 'Fineguide vs respond.io и Trengo:',
    h1Accent: 'один ИИ-ассистент в чатах и на звонках',
    shortAnswer:
      'respond.io и Trengo — омниканальные inbox: WhatsApp, Instagram, Messenger, Telegram, TikTok, почта, чат на сайте и звонки в одном месте, с ИИ-агентами, которые отвечают на сообщения и входящие звонки и передают разговор людям. Fineguide — платформа, построенная вокруг ИИ: те же ассистенты отвечают в чатах и сами звонят через вашу телефонию, а CRM для продаж, исходящие обзвоны и оценка звонков Voice QA работают с одной карточкой клиента. Выбирайте respond.io или Trengo ради самого широкого inbox мессенджеров; Fineguide — когда продажи, звонки и поддержка должны быть вместе.',
    tableHeading: 'respond.io и Trengo против Fineguide: коротко',
    competitorStronger: {
      heading: 'Где сильнее respond.io и Trengo',
      items: [
        { text: 'Больше мессенджеров. respond.io подключает Viber, LINE, WeChat, RCS, TikTok и SMS помимо WhatsApp, Instagram, Messenger и Telegram; Trengo добавляет в inbox TikTok и SMS.', refs: ['respond-io:integrations', 'trengo:inbox'] },
        { text: 'Звонки WhatsApp и Messenger. respond.io принимает звонки WhatsApp Business Calling и Messenger в том же inbox, что и чаты, а голосовой ИИ-агент может на них отвечать.', refs: ['respond-io:voip', 'respond-io:voice-agent'] },
        { text: 'Номера от самого сервиса. Trengo Voice даёт местные или национальные номера в 80+ странах, с IVR-меню и очередями, без стороннего оператора; VoIP-звонки respond.io идут через номера Telnyx, в том числе перенесённые.', refs: ['trengo:voice', 'respond-io:voip'] },
        { text: 'Готовые коннекторы к CRM. respond.io напрямую подключается к HubSpot и Salesforce и показывает поля CRM рядом с чатом; Trengo указывает интеграции с HubSpot и Salesforce, а также системами для гостиниц и e-commerce — Shopify, Lightspeed, Mews, Cloudbeds.', refs: ['respond-io:platform', 'trengo:home'] },
        { text: 'ИИ-агенты на многих языках: AI Agent и AI Voice Agent у Trengo работают на 70+ языках, голосовой ИИ-агент respond.io — на 32.', refs: ['trengo:ai-agent', 'respond-io:voice-agent'] },
        { text: 'Задокументированная безопасность: у respond.io сертификат ISO 27001; Trengo по умолчанию обрабатывает персональные данные в ЕЭЗ по своему соглашению об обработке данных.', refs: ['respond-io:security', 'trengo:dpa'] },
      ],
    },
    fineguideStronger: {
      heading: 'Где сильнее Fineguide',
      items: [
        { text: 'ИИ-звонки в обе стороны через вашу телефонию. Ассистенты Fineguide принимают входящие и совершают исходящие звонки через ваш SIP на 14 языках, приветствуют знакомых клиентов по имени из CRM, переводят на человека по просьбе и сохраняют заявки на перезвон задачами в CRM. Голосовой ИИ-агент respond.io отвечает только на входящие, а на странице AI Voice Agent у Trengo описаны только входящие звонки.', refs: ['fg:fg-voice-ai', 'respond-io:voice-agent', 'trengo:voice-agent'] },
        { text: 'Исходящие обзвоны с ИИ: привлечение, опросы и промо по аудиториям из CSV, контактам CRM или тегам, с повторами, часами звонков по дням недели и тестовым звонком.', refs: ['fg:fg-campaigns'] },
        { text: 'Оценка каждого записанного звонка. Voice QA расшифровывает звонок и оценивает его по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу, карточками сотрудников и отчётами на 30 языках. На прочитанных страницах respond.io и Trengo есть записи, расшифровки и резюме, но не оценка по вашему чек-листу.', refs: ['fg:fg-voice-qa', 'respond-io:voip', 'trengo:voice'] },
        { text: 'CRM для продаж внутри, а не рядом: контакты, компании, сделки на доске или в таблице со суммой, вероятностью и ожидаемой датой закрытия, задачи с двусторонней синхронизацией Google Calendar и отчёты о продажах со взвешенным прогнозом и конверсией.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'То, чего нет в этих inbox: пользовательский аккаунт Telegram (не только бот), Slack и Discord, а также работа внутри JivoChat, amoCRM и Kommo — ассистент работает там, где уже работает команда.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        'База знаний для каждого клиента: через REST API каждый ваш пользователь получает свой контекст обучения под уже используемым id, и один ассистент отвечает каждому только по его материалам плюс общим ответам.',
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте respond.io или Trengo, если…',
        items: [
          'клиенты пишут вам в Viber, LINE, WeChat, RCS или SMS, а не только в WhatsApp и Instagram;',
          'нужны звонки WhatsApp или Messenger в том же inbox, что и чаты (respond.io);',
          'нужны номера и IVR от самого сервиса (Trengo Voice);',
          'продажи живут в HubSpot или Salesforce, и вам нужны только диалоги рядом.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'ИИ должен сам звонить и вести обзвоны, а не только отвечать;',
          'у вас колл-центр и каждый записанный звонок нужно оценивать по вашим правилам;',
          'CRM, сделки и прогноз должны быть в той же карточке, что и каждый чат и звонок;',
          'команда работает в amoCRM, Kommo или JivoChat, или клиенты пишут в Telegram, Slack или Discord.',
        ],
      },
    },
    switching: {
      heading: 'Переход с respond.io или Trengo',
      intro: 'Контакты переносятся таблицей, каналы подключаются по одному, поэтому оба инструмента могут работать параллельно, пока команда не будет готова.',
      steps: [
        { title: 'Начните с бесплатного тарифа', body: 'Создайте аккаунт Fineguide (без карты), дайте ассистенту сайт, FAQ и документы и проверьте его в чат-виджете.' },
        { title: 'Выгрузите контакты', body: { text: 'В respond.io владельцы и менеджеры выгружают Contacts, Conversations и Messages в Workspace settings → Data export. Из Trengo возьмите список контактов таблицей.', refs: ['respond-io:export'] } },
        { title: 'Импортируйте в Fineguide', body: { text: 'Импортируйте файлы (CSV, TSV, XLS или XLSX), сопоставьте столбцы с пользовательскими полями и проверьте дубли: каждое объединение подтверждает человек.', refs: ['fg:fg-llms'] } },
        { title: 'Подключите каналы и почту', body: { text: 'Подключите WhatsApp, Telegram, Instagram или Messenger и свои почтовые ящики по IMAP и SMTP, затем распределите их правилами и отделами в inbox команды.', refs: ['fg:fg-messages'] } },
        { title: 'Подключите телефонные линии', body: { text: 'Подключите оператора или АТС по SIP, отдайте каждый номер ассистенту и задайте часы ответа, перевод и перезвон.', refs: ['fg:fg-voice-ai'] } },
      ],
    },
    faq: [
      { q: 'Какая есть хорошая альтернатива respond.io?', a: 'Ближайший аналог по широте inbox — Trengo. Если нужен ещё и ИИ, который сам звонит, встроенная CRM для продаж и оценка звонков в той же карточке, альтернатива — Fineguide.', refs: ['trengo:inbox', 'fg:fg-llms'] },
      { q: 'Какая есть хорошая альтернатива Trengo?', a: 'Ближайший аналог — respond.io. Fineguide подходит командам, которым нужен один ИИ-ассистент в чатах и на звонках в обе стороны, с CRM и оценкой звонков Voice QA.', refs: ['respond-io:integrations', 'fg:fg-voice-ai', 'fg:fg-voice-qa'] },
      { q: 'Может ли ИИ respond.io или Trengo звонить сам?', a: 'В справке respond.io сказано, что голосовой ИИ-агент отвечает только на входящие звонки, а страница AI Voice Agent у Trengo описывает входящие звонки. Ассистенты Fineguide совершают исходящие звонки и ведут обзвоны через вашу телефонию.', refs: ['respond-io:voice-agent', 'trengo:voice-agent', 'fg:fg-campaigns'] },
      { q: 'Собирает ли Fineguide WhatsApp, Instagram и Telegram в одном inbox?', a: 'Да. Inbox команды объединяет чат на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord и вашу почту, с очередью распределения, отделами и передачей человеку.', refs: ['fg:fg-messages'] },
      { q: 'Можно ли перейти с respond.io на Fineguide без потери контактов?', a: 'Да. Выгрузите Contacts через Data export в respond.io и импортируйте файл в CRM Fineguide: она читает CSV, TSV, XLS и XLSX, а каждое объединение дублей подтверждает человек.', refs: ['respond-io:export', 'fg:fg-llms'] },
    ],
    closing: {
      heading: 'Посмотрите Fineguide на своих каналах',
      body: 'Начните с бесплатного тарифа без карты или запишитесь на 30-минутную демонстрацию на вашей задаче.',
    },
    extraLinks: [
      { href: '/ru/omnichannel-chatbot/', label: 'Омниканальный ИИ-чат-бот' },
      { href: '/ru/messages/', label: 'Сообщения и Inbox' },
      { href: '/ru/whatsapp-ai-chatbot/', label: 'ИИ-чат-бот для WhatsApp' },
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
    ],
  },
};
