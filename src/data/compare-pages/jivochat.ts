// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Fineguide inside Jivo: ai-backoffice-api apps/chat-api/src/integrations/jivo/jivo.ts (origin/main) and
// controllers/omni.jivochat.ts + router.ts `/jivo/message/:botId`. Jivo posts each CLIENT_MESSAGE to Fineguide, the
// assistant answers with a BOT_MESSAGE to bot.jivosite.com/webhooks/{providerId}/{botId}, and on the first human
// escalation it sends INVITE_AGENT, which hands the chat to a Jivo operator. Each Jivo chat is kept as a Fineguide
// session (external id JIVO_CHAT_ID). The connection is not on the self-serve "Connect apps" page of the workspace
// (no JIVO there); it is created through the integration API, so the copy says "set up with the Fineguide team".

export const competitors = [
  {
    id: 'jivo',
    name: 'JivoChat (Jivo)',
    url: 'https://www.jivochat.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'AI Agent module: answers from your website and up to 5 files, on website chat, messaging apps, social media and email, hands the chat to an operator and saves contacts, tags and an AI summary; up to 15 agents per account. A separate AI Assistant helps operators draft, rephrase and summarise replies.',
        ro: 'Modulul AI Agent: răspunde din site-ul tău și din cel mult 5 fișiere, în chatul de pe site, în aplicațiile de mesagerie, pe rețelele sociale și pe email, predă chatul unui operator și salvează contactele, etichetele și un rezumat AI; până la 15 agenți pe cont. Un AI Assistant separat îi ajută pe operatori să scrie, să reformuleze și să rezume răspunsurile.',
        ru: 'ИИ-агент (на jivo.ru — «ИИ-оператор»): отвечает по вашему сайту и не более чем 5 файлам в чате на сайте, мессенджерах, соцсетях и почте, передаёт чат оператору, сохраняет контакты, теги и ИИ-резюме; до 15 агентов на аккаунт. Отдельный ИИ-ассистент помогает операторам писать, перефразировать и сокращать ответы.',
        src: ['ai-agent', 'ai-agent-setup', 'ai-assistant', 'ru-home'],
      },
      channels: {
        en: 'Website live chat, WhatsApp Business, Telegram, Instagram Direct, Facebook, Viber, Apple Messages for Business and email. The Russian service (jivo.ru) also lists MAX, VK, Avito and AliExpress.',
        ro: 'Chat live pe site, WhatsApp Business, Telegram, Instagram Direct, Facebook, Viber, Apple Messages for Business și email. Serviciul rusesc (jivo.ru) listează în plus MAX, VK, Avito și AliExpress.',
        ru: 'Онлайн-чат на сайте, WhatsApp Business, Telegram, Instagram Direct, Facebook, Viber, Apple Messages for Business и почта. На jivo.ru также указаны MAX, VK, Авито и AliExpress.',
        src: ['help', 'home', 'ru-home'],
      },
      phone: {
        en: 'Business Phone: numbers from more than 50 countries, with calls in the operator app. Telephony Plus adds SIP numbers, call recordings and call statistics; IVR, callback, SMS and video calls are also listed. None of the Jivo pages we checked lists AI on live calls.',
        ro: 'Business Phone: numere din peste 50 de țări, cu apeluri direct în aplicația operatorului. Telephony Plus adaugă numere prin SIP, înregistrări și statistici ale apelurilor; sunt listate și IVR, apel invers (callback), SMS și apeluri video. Niciuna dintre paginile Jivo verificate nu menționează AI pe apeluri în direct.',
        ru: 'Business Phone: номера более чем из 50 стран, звонки прямо в приложении оператора. «Телефония Плюс» добавляет подключение номера по SIP, записи и статистику звонков; также указаны IVR, обратный звонок, SMS и видеозвонки. Ни на одной из проверенных страниц Jivo ИИ на живых звонках не указан.',
        src: ['telephony', 'telephony-plus', 'help'],
      },
      callScoring: null,
      languages: {
        en: 'The help centre lists 25 chat-window languages, Romanian and Russian included, and a Translator for operators; Jivo says its AI Agent speaks more than 50 languages.',
        ro: 'Centrul de ajutor listează 25 de limbi pentru fereastra de chat, inclusiv româna și rusa, plus un Translator pentru operatori; Jivo spune că AI Agent vorbește peste 50 de limbi.',
        ru: 'В справке указаны 25 языков окна чата, включая русский и румынский, и переводчик для операторов; по словам Jivo, ИИ-агент говорит более чем на 50 языках.',
        src: ['languages', 'help', 'ai-agent'],
      },
      data: {
        en: 'Data centres in the United States, South-East Asia and the EU; Jivo says service data may be stored in any region. For the Russian service, personal data is kept only in data centres in Russia.',
        ro: 'Centre de date în Statele Unite, Asia de Sud-Est și UE; Jivo spune că datele serviciului pot fi stocate în oricare regiune. Pentru serviciul rusesc, datele personale sunt păstrate doar în centre de date din Rusia.',
        ru: 'Дата-центры в США, Юго-Восточной Азии и ЕС; по словам Jivo, данные сервиса могут храниться в любом регионе. Для jivo.ru персональные данные размещаются только в дата-центрах на территории России.',
        src: ['security', 'ru-security'],
      },
    },
    uiLanguages: null, // the pages list the chat window's languages, not the operator app's
    dataLocation: {
      en: 'Data centres in the United States, South-East Asia and the EU; Jivo says service data may be stored in any region. For the Russian service, personal data is kept only in data centres in Russia.',
      ro: 'Centre de date în Statele Unite, Asia de Sud-Est și UE; Jivo spune că datele serviciului pot fi stocate în oricare regiune. Pentru serviciul rusesc, datele personale sunt păstrate doar în centre de date din Rusia.',
      ru: 'Дата-центры в США, Юго-Восточной Азии и ЕС; по словам Jivo, данные сервиса могут храниться в любом регионе. Для jivo.ru персональные данные размещаются только в дата-центрах на территории России.',
      src: ['security', 'ru-security'],
    },
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'JivoChat: Live chat software for websites (home page)', url: 'https://www.jivochat.com/' },
      { id: 'features', title: 'JivoChat: Features', url: 'https://www.jivochat.com/features/' },
      { id: 'ai-agent', title: 'JivoChat: AI Agent', url: 'https://www.jivochat.com/ai-agent/' },
      { id: 'ai-agent-setup', title: 'JivoChat help: Setting up an AI bot to automatically respond to customers', url: 'https://www.jivochat.com/help/settings/setting-up-an-ai-bot-to-automatically-respond-to-customers.html' },
      { id: 'ai-assistant', title: 'JivoChat: AI Assistant', url: 'https://www.jivochat.com/ai-assistant/' },
      { id: 'bot-api', title: 'JivoChat help: Bot API', url: 'https://www.jivochat.com/help/api/bot-api.html' },
      { id: 'help', title: 'JivoChat help centre (channels, telephony, integrations)', url: 'https://www.jivochat.com/help/' },
      { id: 'telephony', title: 'JivoChat help: Buying a phone number and configuring the Business Phone', url: 'https://www.jivochat.com/help/telephony/telephony.html' },
      { id: 'telephony-plus', title: 'JivoChat help: Telephony Plus module', url: 'https://www.jivochat.com/help/telephony/telephony-plus.html' },
      { id: 'languages', title: 'JivoChat help: How to change the language of the chat window', url: 'https://www.jivochat.com/help/customization/change-language.html' },
      { id: 'crm', title: 'JivoChat help: How to use the CRM section', url: 'https://www.jivochat.com/help/agentapp/crm.html' },
      { id: 'security', title: 'JivoChat: Security', url: 'https://www.jivochat.com/security/' },
      { id: 'ru-home', title: 'Jivo (jivo.ru): official Russian site', url: 'https://www.jivo.ru/' },
      { id: 'ru-security', title: 'Jivo (jivo.ru): Безопасность данных', url: 'https://www.jivo.ru/security/' },
      { id: 'export', title: 'JivoChat help: How to export chats from JivoChat', url: 'https://www.jivochat.com/help/settings/how-to-export-chats-from-jivo.html' },
      { id: 'export-deals', title: 'JivoChat help: How to export deals from JivoChat', url: 'https://www.jivochat.com/help/functions/export-deals.html' },
    ],
  },
];

export const page = {
  slug: 'jivochat',
  competitors: ['jivo'],
  label: { en: 'JivoChat (Jivo)', ro: 'JivoChat (Jivo)', ru: 'Jivo (JivoSite, JivoChat)' },
  summary: {
    en: 'A mature live chat with built-in telephony and its own AI Agent, against an AI-first CRM whose assistants can also answer inside Jivo.',
    ro: 'Un chat live matur, cu telefonie integrată și AI Agent propriu, față în față cu un CRM construit pe AI, ai cărui asistenți pot răspunde chiar în Jivo.',
    ru: 'Зрелый онлайн-чат со встроенной телефонией и своим ИИ-агентом — против CRM, построенной вокруг ИИ, чьи ассистенты могут отвечать прямо в Jivo.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'JivoChat alternative, or an AI bot in Jivo: Fineguide',
    description: 'A JivoChat alternative compared fact by fact: AI agents, channels, telephony and call scoring, and a Fineguide AI bot that answers inside Jivo.',
    crumb: 'JivoChat (Jivo)',
    h1: 'Fineguide vs JivoChat:',
    h1Accent: 'an AI bot for Jivo, or an alternative',
    shortAnswer:
      'JivoChat (Jivo) is a mature live chat that more than 200,000 businesses use, with built-in telephony, a CRM section and an AI Agent of its own. Fineguide is an AI-first CRM whose assistants answer chats, email and live phone calls and score recorded calls. You do not have to choose on day one: a Fineguide assistant can answer your Jivo chats and hand them to your Jivo operators.',
    tableHeading: 'JivoChat vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where JivoChat is stronger',
      items: [
        { text: 'Scale and apps. Jivo says more than 200,000 businesses use it, with more than 14 million chats a month and 65,000 live operators, and it has operator apps for iOS, Android, Huawei, Windows, Mac and Linux.', refs: ['jivo:home', 'jivo:features'] },
        { text: 'Phone numbers built in. You can buy a number in more than 50 countries and take calls in the operator app; Telephony Plus adds SIP numbers, call recordings and call statistics, with IVR, callback, SMS and video calls beside it. Fineguide works over the phone system you already have (SIP).', refs: ['jivo:telephony', 'jivo:telephony-plus', 'jivo:help', 'fg:fg-voice-ai'] },
        { text: 'More messaging channels. Jivo connects Viber and Apple Messages for Business, and its Russian service also lists MAX, VK, Avito and AliExpress. Fineguide does not list these.', refs: ['jivo:help', 'jivo:ru-home'] },
        { text: 'Ready-made integrations. The help centre has guides for Pipedrive, Bitrix24, Zoho CRM, RetailCRM and other CRMs, and for several outside bot platforms connected through the Bot API.', refs: ['jivo:help', 'jivo:bot-api'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'It works inside Jivo. A Fineguide assistant joins Jivo as a bot through Jivo’s Bot API: Jivo sends it each customer message, it answers in the same chat, and when the customer asks for a person or a handoff rule says so, it invites a Jivo operator. Jivo includes the Bot API in its PRO and VIP plans.', refs: ['fg:fg-llms', 'jivo:bot-api'] },
        { text: 'AI on live phone calls. The same assistants take inbound and outbound calls over your own phone system (SIP), in 14 languages, and run outbound call campaigns (outreach, survey, promotion). None of the Jivo pages we checked lists AI on live calls.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'jivo:telephony', 'jivo:telephony-plus'] },
        { text: 'Call scoring against your own rules. Voice QA transcribes every recorded call and scores it by each department’s rules and weights, with quotes and a suggestion for every rule and reports in 30 languages. Jivo’s Telephony Plus lists call statistics, not quality scoring.', refs: ['fg:fg-voice-qa', 'jivo:telephony-plus'] },
        { text: 'More knowledge, and your own systems. Jivo’s AI Agent learns from your website and up to 5 files. A Fineguide assistant learns from URLs, documents and PDFs (about 200 documents on the Free plan, up to about 4,000 on Premium), can be limited to only what it has learned, and calls your own systems through actions built from a pasted cURL command.', refs: ['jivo:ai-agent-setup', 'fg:fg-llms', 'fg:fg-pricing'] },
        { text: 'A sales CRM with reports. Jivo’s CRM section keeps clients, deals in pipelines and tasks. Fineguide adds deals on a board or a table with value, probability and expected close date, custom fields, two-way Google Calendar sync for tasks, a REST API, and reports on open pipeline, weighted forecast, win rate and a leaderboard by owner. On paid plans, assistants write the fields you define into CRM leads.', refs: ['jivo:crm', 'fg:fg-crm', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose JivoChat if…',
        items: [
          'you want live chat, phone numbers, IVR and callback from one vendor;',
          'your customers write on Viber, Apple Messages, VK or Avito;',
          'you rely on Jivo’s ready CRM integrations or its apps for every phone and desktop (you can still add a Fineguide assistant inside Jivo).',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'you want AI on chats, email and phone calls from one customer record;',
          'you score call quality or run outbound call campaigns;',
          'you want an AI bot in Jivo that knows your documents and your own systems, without moving your operators.',
        ],
      },
    },
    switching: {
      heading: 'Adding Fineguide to Jivo, or moving from it',
      intro: 'Start with the assistant inside Jivo, keep your operators where they are, and move the rest only when you are ready.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed), give an assistant your website and documents, and test it in the chat widget.' },
        { title: 'Connect it to Jivo', body: { text: 'Connect the assistant to Jivo as a bot through Jivo’s Bot API, set up with the Fineguide team. From then on it answers your Jivo chats and invites a Jivo operator when a person is needed.', refs: ['fg:fg-llms', 'jivo:bot-api'] } },
        { title: 'Export from Jivo', body: { text: 'In the CRM section, export deals as CSV or Excel; in the Contact Center, export chats as HTML or JSON (Professional and Enterprise plans).', refs: ['jivo:export-deals', 'jivo:export'] } },
        { title: 'Import into Fineguide', body: { text: 'Import the file (CSV, TSV, XLS or XLSX) into the Fineguide CRM, map the columns to your custom fields, and review duplicates: a person confirms every merge.', refs: ['fg:fg-llms'] } },
        { title: 'Move channels and calls', body: { text: 'Connect WhatsApp, Telegram, Instagram or Messenger directly to Fineguide, add your own mailboxes over IMAP and SMTP, and connect your phone system over SIP if you want AI on calls.', refs: ['fg:fg-messages', 'fg:fg-voice-ai'] } },
      ],
    },
    faq: [
      {
        q: 'Is there an AI bot for JivoChat?',
        a: 'Yes. Jivo has its own AI Agent module, and its Bot API lets outside bots answer Jivo chats. A Fineguide assistant connects that way: it answers Jivo chats from your knowledge and hands the chat to a Jivo operator when a person is needed.',
        refs: ['jivo:ai-agent-setup', 'jivo:bot-api', 'fg:fg-llms'],
      },
      {
        q: 'Is Fineguide a JivoChat alternative or an add-on?',
        a: 'Both. Fineguide is a full CRM with its own team inbox, chat widget and messaging channels, so it can replace Jivo. Its assistants also answer inside Jivo, so you can keep Jivo and your operators and add Fineguide.',
        refs: ['fg:fg-llms', 'fg:fg-messages'],
      },
      {
        q: 'Can JivoChat’s AI answer phone calls?',
        a: 'The Jivo pages we checked describe the AI Agent on website chat, messaging apps, social media and email, and list Jivo’s telephony separately, without AI on live calls. Fineguide’s assistants answer live inbound and outbound calls over your own SIP phone system, in 14 languages.',
        refs: ['jivo:ai-agent', 'jivo:telephony', 'fg:fg-voice-ai'],
      },
      {
        q: 'What languages does JivoChat support?',
        a: 'Jivo’s help centre lists 25 chat-window languages, and Jivo says its AI Agent speaks more than 50. Fineguide’s chat widget interface comes in 24 languages, its AI phone calls in 14 and its Voice QA reports in 30.',
        refs: ['jivo:languages', 'jivo:ai-agent', 'fg:fg-llms'],
      },
      {
        q: 'How do I move my data from Jivo?',
        a: 'Export deals from Jivo’s CRM section as CSV or Excel, then import the file into the Fineguide CRM, which reads CSV, TSV, XLS and XLSX and asks a person to confirm every duplicate merge.',
        refs: ['jivo:export-deals', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Put a Fineguide assistant to work in your Jivo',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your own chats and calls.',
    },
    extraLinks: [
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
      { href: '/messages/', label: 'Messages & Inbox: one team inbox for chat and email' },
    ],
  },

  ro: {
    title: 'Alternativă la JivoChat sau bot AI în Jivo: Fineguide',
    description: 'Alternativă la JivoChat comparată punct cu punct: agenți AI, canale, telefonie, evaluarea apelurilor și un asistent Fineguide care răspunde chiar în Jivo.',
    crumb: 'JivoChat (Jivo)',
    h1: 'Fineguide vs JivoChat:',
    h1Accent: 'un bot AI pentru Jivo sau o alternativă',
    shortAnswer:
      'JivoChat (Jivo) este un chat live matur, folosit de peste 200.000 de companii, cu telefonie integrată, o secțiune CRM și propriul AI Agent. Fineguide este un CRM construit pe AI, ai cărui asistenți răspund pe chat, pe email și la apeluri în direct și evaluează apelurile înregistrate. Nu trebuie să alegi din prima zi: un asistent Fineguide poate răspunde la chaturile din Jivo și le poate preda operatorilor tăi din Jivo.',
    tableHeading: 'JivoChat și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde JivoChat este mai puternic',
      items: [
        { text: 'Amploare și aplicații. Jivo spune că îl folosesc peste 200.000 de companii, cu peste 14 milioane de chaturi pe lună și 65.000 de operatori activi, și are aplicații pentru operatori pe iOS, Android, Huawei, Windows, Mac și Linux.', refs: ['jivo:home', 'jivo:features'] },
        { text: 'Numere de telefon incluse. Poți cumpăra un număr din peste 50 de țări și răspunzi la apeluri din aplicația operatorului; Telephony Plus adaugă numere prin SIP, înregistrări și statistici ale apelurilor, iar alături sunt IVR, apel invers, SMS și apeluri video. Fineguide lucrează prin centrala telefonică pe care o ai deja (SIP).', refs: ['jivo:telephony', 'jivo:telephony-plus', 'jivo:help', 'fg:fg-voice-ai'] },
        { text: 'Mai multe canale de mesagerie. Jivo conectează Viber și Apple Messages for Business, iar serviciul său rusesc listează și MAX, VK, Avito și AliExpress. Fineguide nu le listează.', refs: ['jivo:help', 'jivo:ru-home'] },
        { text: 'Integrări gata făcute. Centrul de ajutor are ghiduri pentru Pipedrive, Bitrix24, Zoho CRM, RetailCRM și alte CRM-uri, plus pentru mai multe platforme de chatboți conectate prin Bot API.', refs: ['jivo:help', 'jivo:bot-api'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'Lucrează chiar în Jivo. Un asistent Fineguide intră în Jivo ca bot, prin Bot API-ul Jivo: Jivo îi trimite fiecare mesaj al clientului, el răspunde în același chat, iar când clientul cere un om sau o regulă de predare o cere, invită un operator Jivo. Jivo include Bot API în planurile PRO și VIP.', refs: ['fg:fg-llms', 'jivo:bot-api'] },
        { text: 'AI la telefon, în direct. Aceiași asistenți răspund la apeluri primite și efectuate prin propria ta centrală telefonică (SIP), în 14 limbi, și derulează campanii de apeluri (prospectare, sondaj, promoție). Niciuna dintre paginile Jivo verificate nu menționează AI pe apeluri în direct.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'jivo:telephony', 'jivo:telephony-plus'] },
        { text: 'Evaluarea apelurilor după regulile tale. Voice QA transcrie fiecare apel înregistrat și îl notează după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă și rapoarte în 30 de limbi. Telephony Plus din Jivo listează statistici ale apelurilor, nu evaluarea calității.', refs: ['fg:fg-voice-qa', 'jivo:telephony-plus'] },
        { text: 'Mai multe cunoștințe și sistemele tale. AI Agent din Jivo învață din site-ul tău și din cel mult 5 fișiere. Un asistent Fineguide învață din URL-uri, documente și PDF-uri (circa 200 de documente pe planul Free, până la circa 4.000 pe Premium), poate fi limitat doar la ce a învățat și apelează sistemele tale prin acțiuni create dintr-o comandă cURL lipită.', refs: ['jivo:ai-agent-setup', 'fg:fg-llms', 'fg:fg-pricing'] },
        { text: 'Un CRM de vânzări cu rapoarte. Secțiunea CRM din Jivo păstrează clienții, tranzacțiile pe pipeline-uri și sarcinile. Fineguide adaugă tranzacții pe tablă sau în tabel, cu valoare, probabilitate și dată estimată de închidere, câmpuri personalizate, sincronizare în ambele sensuri a sarcinilor cu Google Calendar, API REST și rapoarte despre pipeline-ul deschis, prognoza ponderată, rata de câștig și clasamentul pe responsabili. Pe planurile plătite, asistenții scriu câmpurile alese de tine în lead-urile din CRM.', refs: ['jivo:crm', 'fg:fg-crm', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege JivoChat dacă…',
        items: [
          'vrei chat live, numere de telefon, IVR și apel invers de la un singur furnizor;',
          'clienții îți scriu pe Viber, Apple Messages, VK sau Avito;',
          'te bazezi pe integrările CRM gata făcute ale Jivo sau pe aplicațiile lui pentru orice telefon și calculator (poți adăuga oricum un asistent Fineguide în Jivo).',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'vrei AI pe chat, email și apeluri, pe o singură fișă de client;',
          'evaluezi calitatea apelurilor sau derulezi campanii de apeluri;',
          'vrei în Jivo un bot AI care îți cunoaște documentele și sistemele, fără să-ți muți operatorii.',
        ],
      },
    },
    switching: {
      heading: 'Cum adaugi Fineguide în Jivo sau cum treci de la Jivo',
      intro: 'Începe cu asistentul în Jivo, lasă operatorii unde sunt și mută restul doar când ești pregătit.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card), dă-i unui asistent site-ul și documentele tale și testează-l în widgetul de chat.' },
        { title: 'Conectează-l la Jivo', body: { text: 'Conectează asistentul la Jivo ca bot, prin Bot API-ul Jivo, împreună cu echipa Fineguide. De atunci răspunde la chaturile din Jivo și invită un operator Jivo când e nevoie de un om.', refs: ['fg:fg-llms', 'jivo:bot-api'] } },
        { title: 'Exportă din Jivo', body: { text: 'Din secțiunea CRM, exportă tranzacțiile în CSV sau Excel; din Contact Center, exportă chaturile în HTML sau JSON (planurile Professional și Enterprise).', refs: ['jivo:export-deals', 'jivo:export'] } },
        { title: 'Importă în Fineguide', body: { text: 'Importă fișierul (CSV, TSV, XLS sau XLSX) în CRM-ul Fineguide, potrivește coloanele cu câmpurile personalizate și verifică duplicatele: fiecare unire o confirmă un om.', refs: ['fg:fg-llms'] } },
        { title: 'Mută canalele și apelurile', body: { text: 'Conectează WhatsApp, Telegram, Instagram sau Messenger direct la Fineguide, adaugă-ți căsuțele de email prin IMAP și SMTP și conectează centrala telefonică prin SIP dacă vrei AI la telefon.', refs: ['fg:fg-messages', 'fg:fg-voice-ai'] } },
      ],
    },
    faq: [
      {
        q: 'Există un bot AI pentru JivoChat?',
        a: 'Da. Jivo are propriul modul AI Agent, iar Bot API-ul său lasă chatboți externi să răspundă la chaturile din Jivo. Un asistent Fineguide se conectează așa: răspunde la chaturile din Jivo din cunoștințele tale și predă chatul unui operator Jivo când e nevoie de un om.',
        refs: ['jivo:ai-agent-setup', 'jivo:bot-api', 'fg:fg-llms'],
      },
      {
        q: 'Fineguide este o alternativă la JivoChat sau un supliment?',
        a: 'Amândouă. Fineguide este un CRM complet, cu inbox de echipă, widget de chat și canale de mesagerie proprii, deci poate înlocui Jivo. Asistenții lui răspund și în Jivo, așa că poți păstra Jivo și operatorii și doar adaugi Fineguide.',
        refs: ['fg:fg-llms', 'fg:fg-messages'],
      },
      {
        q: 'Poate AI-ul din JivoChat să răspundă la telefon?',
        a: 'Paginile Jivo verificate descriu AI Agent în chatul de pe site, în aplicațiile de mesagerie, pe rețelele sociale și pe email, iar telefonia Jivo apare separat, fără AI pe apeluri în direct. Asistenții Fineguide răspund la apeluri în direct, primite și efectuate, prin centrala ta SIP, în 14 limbi, inclusiv română.',
        refs: ['jivo:ai-agent', 'jivo:telephony', 'fg:fg-voice-ai'],
      },
      {
        q: 'În ce limbi funcționează JivoChat?',
        a: 'Centrul de ajutor Jivo listează 25 de limbi pentru fereastra de chat, inclusiv româna, iar Jivo spune că AI Agent vorbește peste 50. Interfața widgetului Fineguide este în 24 de limbi, apelurile AI în 14, iar rapoartele Voice QA în 30.',
        refs: ['jivo:languages', 'jivo:ai-agent', 'fg:fg-llms'],
      },
      {
        q: 'Cum îmi mut datele din Jivo?',
        a: 'Exportă tranzacțiile din secțiunea CRM a Jivo în CSV sau Excel, apoi importă fișierul în CRM-ul Fineguide, care citește CSV, TSV, XLS și XLSX și cere unui om să confirme fiecare unire de duplicate.',
        refs: ['jivo:export-deals', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Pune un asistent Fineguide la treabă în Jivo',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe propriile chaturi și apeluri.',
    },
    extraLinks: [
      { href: '/ro/voice-ai/', label: 'Telefonia AI pe propria centrală' },
      { href: '/ro/messages/', label: 'Mesaje și Inbox: un singur inbox pentru chat și email' },
    ],
  },

  ru: {
    title: 'Аналог Jivo (JivoSite) и ИИ-бот для Jivo — Fineguide',
    description: 'Аналог Jivo и альтернатива JivoSite (Живосайт): сравниваем ИИ-агентов, каналы, телефонию и оценку звонков, плюс ИИ-бот Fineguide прямо в Jivo.',
    crumb: 'Jivo (JivoSite)',
    h1: 'Fineguide vs Jivo:',
    h1Accent: 'ИИ-бот для Jivo или его аналог',
    shortAnswer:
      'Jivo (ранее JivoSite) — зрелый онлайн-чат, которым пользуются более 200 тысяч компаний, со встроенной телефонией, разделом CRM и собственным ИИ-агентом. Fineguide — CRM, построенная вокруг ИИ: её ассистенты отвечают в чатах, почте и на живых звонках и оценивают записанные разговоры. Выбирать сразу не нужно: ассистент Fineguide может отвечать в чатах Jivo и передавать их вашим операторам в Jivo.',
    tableHeading: 'Jivo и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Jivo',
      items: [
        { text: 'Масштаб и приложения. По данным Jivo, им пользуются более 200 тысяч компаний, через него проходит более 14 миллионов диалогов в месяц, а приложения для операторов есть для iOS, Android, Huawei, Windows, Mac и Linux.', refs: ['jivo:ru-home', 'jivo:home', 'jivo:features'] },
        { text: 'Свои телефонные номера. Номер можно купить более чем в 50 странах и принимать звонки в приложении оператора; «Телефония Плюс» добавляет подключение номера по SIP, записи и статистику звонков, а рядом есть IVR, обратный звонок, SMS и видеозвонки. Fineguide работает через вашу текущую телефонию (SIP).', refs: ['jivo:telephony', 'jivo:telephony-plus', 'jivo:help', 'fg:fg-voice-ai'] },
        { text: 'Больше мессенджеров. Jivo подключает Viber и Apple Messages for Business, а на jivo.ru также MAX, VK, Авито и AliExpress. В списке Fineguide их нет.', refs: ['jivo:help', 'jivo:ru-home'] },
        { text: 'Готовые интеграции. В справке есть инструкции для Pipedrive, Битрикс24, Zoho CRM, RetailCRM и других CRM, а также для нескольких сторонних платформ чат-ботов через Bot API.', refs: ['jivo:help', 'jivo:bot-api'] },
        { text: 'Серверы в России. Для jivo.ru персональные данные размещаются только в дата-центрах на территории России — это важно, если ваша компания обязана хранить данные в России.', refs: ['jivo:ru-security'] },
      ],
    },
    fineguideStronger: {
      heading: 'Почему Fineguide — аналог Jivo и ИИ-бот для него',
      items: [
        { text: 'Работает прямо в Jivo. Ассистент Fineguide подключается к Jivo как бот через Bot API: Jivo передаёт ему каждое сообщение клиента, он отвечает в том же чате, а когда клиент просит человека или срабатывает правило передачи, приглашает оператора Jivo. Bot API входит в тарифы Jivo PRO и VIP.', refs: ['fg:fg-llms', 'jivo:bot-api'] },
        { text: 'ИИ на живых звонках. Те же ассистенты принимают и совершают звонки через вашу телефонию (SIP) на 14 языках, включая русский, и ведут исходящие обзвоны (привлечение, опрос, промо). Ни на одной из проверенных страниц Jivo ИИ на живых звонках не указан.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'jivo:telephony', 'jivo:telephony-plus'] },
        { text: 'Оценка звонков по вашим правилам. Voice QA расшифровывает каждый записанный звонок и оценивает его по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу; отчёты — на 30 языках. В «Телефонии Плюс» Jivo указана статистика звонков, а не оценка качества.', refs: ['fg:fg-voice-qa', 'jivo:telephony-plus'] },
        { text: 'Больше знаний и ваши системы. ИИ-агент Jivo учится по вашему сайту и не более чем 5 файлам. Ассистент Fineguide учится по ссылкам, документам и PDF (около 200 документов на тарифе Free и до 4000 на Premium), может отвечать только по изученному и вызывает ваши системы через действия, собранные из вставленной команды cURL.', refs: ['jivo:ai-agent-setup', 'fg:fg-llms', 'fg:fg-pricing'] },
        { text: 'CRM для продаж с отчётами. В разделе CRM у Jivo есть клиенты, сделки по воронкам и задачи. Fineguide добавляет сделки на доске или в таблице с суммой, вероятностью и ожидаемой датой закрытия, свои поля, двусторонняя синхронизация задач с Google Calendar, REST API и отчёты по открытой воронке, взвешенному прогнозу, доле выигранных сделок и рейтингу ответственных. На платных тарифах ассистенты записывают нужные поля в лиды CRM.', refs: ['jivo:crm', 'fg:fg-crm', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Jivo, если…',
        items: [
          'нужны онлайн-чат, телефонные номера, IVR и обратный звонок у одного поставщика;',
          'клиенты пишут вам в Viber, MAX, VK или на Авито;',
          'вы обязаны хранить данные в России;',
          'вы опираетесь на готовые интеграции Jivo с CRM или его приложения для любых телефонов и компьютеров (ассистента Fineguide всё равно можно подключить внутрь Jivo).',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'нужен ИИ, который отвечает в чатах, почте и по телефону из одной карточки клиента;',
          'вы оцениваете качество звонков или ведёте исходящие обзвоны;',
          'нужен ИИ-бот для Jivo, который знает ваши документы и ваши системы, а операторы остаются на месте.',
        ],
      },
    },
    switching: {
      heading: 'Как подключить Fineguide к Jivo или перейти с Jivo',
      intro: 'Начните с ассистента внутри Jivo, оставьте операторов там, где они работают, а остальное переносите, когда будете готовы.',
      steps: [
        { title: 'Начните с тарифа Free', body: 'Создайте аккаунт Fineguide (без карты), загрузите в ассистента свой сайт и документы и проверьте его в чат-виджете.' },
        { title: 'Подключите его к Jivo', body: { text: 'Подключите ассистента к Jivo как бота через Bot API — вместе с командой Fineguide. После этого он отвечает в ваших чатах Jivo и приглашает оператора Jivo, когда нужен человек.', refs: ['fg:fg-llms', 'jivo:bot-api'] } },
        { title: 'Выгрузите данные из Jivo', body: { text: 'В разделе CRM выгрузите сделки в CSV или Excel; в контакт-центре выгрузите диалоги в HTML или JSON (тарифы Professional и Enterprise).', refs: ['jivo:export-deals', 'jivo:export'] } },
        { title: 'Импортируйте в Fineguide', body: { text: 'Загрузите файл (CSV, TSV, XLS или XLSX) в CRM Fineguide, сопоставьте колонки с вашими полями и проверьте дубли: каждое объединение подтверждает человек.', refs: ['fg:fg-llms'] } },
        { title: 'Перенесите каналы и звонки', body: { text: 'Подключите WhatsApp, Telegram, Instagram или Messenger напрямую к Fineguide, добавьте свои почтовые ящики по IMAP и SMTP и подключите телефонию по SIP, если нужен ИИ на звонках.', refs: ['fg:fg-messages', 'fg:fg-voice-ai'] } },
      ],
    },
    faq: [
      {
        q: 'Есть ли ИИ-бот для Jivo?',
        a: 'Да. У Jivo есть свой ИИ-агент, а Bot API позволяет подключать сторонних ботов к чатам Jivo. Ассистент Fineguide подключается именно так: отвечает в чатах Jivo по вашим материалам и передаёт чат оператору Jivo, когда нужен человек.',
        refs: ['jivo:ai-agent-setup', 'jivo:bot-api', 'fg:fg-llms'],
      },
      {
        q: 'Какой есть аналог JivoSite с ИИ?',
        a: 'Jivo (так теперь называется JivoSite) и сам развивает ИИ: у него есть ИИ-агент и ИИ-ассистент для операторов. Fineguide — CRM, построенная вокруг ИИ: ассистенты отвечают в чатах, почте и на звонках, а Voice QA оценивает записанные разговоры; при этом ассистента Fineguide можно подключить и внутрь Jivo.',
        refs: ['jivo:ru-home', 'jivo:ai-agent', 'fg:fg-assistants', 'fg:fg-llms'],
      },
      {
        q: 'Может ли ИИ Jivo отвечать на звонки?',
        a: 'На проверенных страницах Jivo ИИ-агент работает в чате на сайте, мессенджерах, соцсетях и почте, а телефония описана отдельно, без ИИ на живых звонках. Ассистенты Fineguide принимают и совершают живые звонки через вашу SIP-телефонию на 14 языках, включая русский.',
        refs: ['jivo:ai-agent', 'jivo:telephony', 'fg:fg-voice-ai'],
      },
      {
        q: 'Fineguide — замена Jivo или дополнение к нему?',
        a: 'И то и другое. Fineguide — полноценная CRM со своим общим inbox, чат-виджетом и мессенджерами, поэтому может заменить Jivo. Но ассистенты Fineguide отвечают и внутри Jivo, так что Jivo и операторов можно оставить и просто добавить Fineguide.',
        refs: ['fg:fg-llms', 'fg:fg-messages'],
      },
      {
        q: 'Как перенести данные из Jivo?',
        a: 'Выгрузите сделки из раздела CRM в Jivo в CSV или Excel, затем загрузите файл в CRM Fineguide: она принимает CSV, TSV, XLS и XLSX и просит человека подтвердить каждое объединение дублей.',
        refs: ['jivo:export-deals', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Подключите ассистента Fineguide к вашему Jivo',
      body: 'Начните с бесплатного тарифа, без карты, или запишитесь на 30-минутную демонстрацию на ваших чатах и звонках.',
    },
    extraLinks: [
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
      { href: '/ru/messages/', label: 'Сообщения и inbox: общий inbox для чатов и почты' },
    ],
  },
};
