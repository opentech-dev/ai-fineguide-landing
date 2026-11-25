// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Zendesk facts: zendesk.com and support.zendesk.com only, read 2026-11-25 (see `sources`). No prices, plan prices,
// trials, free plans, discounts or billing terms; plan NAMES only where a feature sits.
// Fineguide facts: public/llms.txt plus the code on origin/main (2026-11-25):
//   - Zendesk integration: ai-backoffice-api apps/backoffice-api/src/modules/inbox/integrations/zendesk/zendesk.service.ts
//     (baseUrl, username, apiKey, groupId; handleSendTicket) + modules/ticket/ticket.service.ts createZendeskTicketTemplate /
//     generateConversationTicket (requester name + email, group_id, body = customer message + the whole chat) +
//     modules/ticket/ticket.consumer.ts (Inbox thread + CRM contact + Ticket task, then Zendesk / Help Scout push) +
//     modules/ability/ticketing-integrations-access.guard.ts (ticketing on paid plans) + ai-workspace
//     modules/agents/features/FeaturesPage.tsx (Send to Zendesk per assistant).
//   - Channels incl. JivoChat and Telegram user accounts: apps/chat-api/src/_v2/channels/telegram-user/*,
//     apps/chat-api/src/controllers/omni.jivochat.ts.
//   - Inbox routing: ai-workspace modules/messages/settings/tabs/RoutingTab.tsx; email AI: prisma EmailInbox aiMode OFF|DRAFT|AUTO.

export const competitors = [
  {
    id: 'zendesk',
    name: 'Zendesk',
    url: 'https://www.zendesk.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'AI agents across messaging, email and voice that take actions through APIs, MCP and connected tools and hand off to a person with full context; 80 languages are fully supported. Copilot (writing tools, summaries) can be added on Suite Professional and higher; AI agents for voice require Zendesk voice.',
        ro: 'Agenți AI pe mesagerie, email și voce, care acționează prin API-uri, MCP și unelte conectate și predau conversația unui om cu tot contextul; 80 de limbi sunt suportate complet. Copilot (unelte de scris, rezumate) se poate adăuga pe Suite Professional și mai sus; agenții AI pentru voce cer Zendesk voice.',
        ru: 'ИИ-агенты в мессенджерах, почте и голосе: выполняют действия через API, MCP и подключённые инструменты и передают диалог человеку с полным контекстом; полностью поддерживаются 80 языков. Copilot (помощь с текстами, саммари) добавляется на Suite Professional и выше; ИИ-агентам для голоса нужен Zendesk voice.',
        src: ['ai-agents', 'ai-languages', 'plans'],
      },
      channels: {
        en: 'Email, the web widget and mobile messaging, WhatsApp, Facebook Messenger, Instagram and Apple Messages for Business. Social messaging and WhatsApp are listed from Suite Team.',
        ro: 'Email, widgetul web și mesageria în aplicațiile mobile, WhatsApp, Facebook Messenger, Instagram și Apple Messages for Business. Mesageria socială și WhatsApp apar de la Suite Team.',
        ru: 'Почта, веб-виджет и мессенджер в мобильных приложениях, WhatsApp, Facebook Messenger, Instagram и Apple Messages for Business. Соцсети и WhatsApp указаны начиная с Suite Team.',
        src: ['messaging', 'plans'],
      },
      phone: {
        en: 'Zendesk voice: toll-free and international numbers, IVR and overflow and after-hours routing (Suite Professional), SIP-IN lines to bring your own carrier. AI agents can answer calls, and AI summarises each call into the agent’s workspace with its transcription.',
        ro: 'Zendesk voice: numere gratuite și internaționale, IVR și rutare la supraîncărcare și în afara programului (Suite Professional), linii SIP-IN pentru propriul operator. Agenții AI pot răspunde la apeluri, iar AI-ul face rezumatul fiecărui apel, cu transcrierea, în spațiul de lucru al operatorului.',
        ru: 'Zendesk voice: бесплатные и международные номера, IVR, маршрутизация при перегрузке и в нерабочее время (Suite Professional), линии SIP-IN для своего оператора связи. ИИ-агенты могут отвечать на звонки, а ИИ кладёт в рабочее место оператора саммари каждого звонка с расшифровкой.',
        src: ['voice', 'lines', 'plans'],
      },
      callScoring: {
        en: 'Zendesk QA, listed as an add-on: AutoQA reviews every conversation, human and AI, across channels including voice, with built-in and custom prompt-based categories, Spotlight and coaching.',
        ro: 'Zendesk QA, listat ca add-on: AutoQA verifică fiecare conversație, a oamenilor și a AI-ului, pe toate canalele, inclusiv voce, cu categorii predefinite și categorii proprii pe bază de prompt, Spotlight și coaching.',
        ru: 'Zendesk QA, указан как дополнение: AutoQA проверяет каждый диалог, и людей, и ИИ, во всех каналах, включая голос, по готовым и собственным категориям на основе промптов, со Spotlight и коучингом.',
        src: ['qa', 'plans'],
      },
      languages: {
        en: 'Agent interface in 33 languages plus 4 regional variants, Romanian and Russian among them; the help center can be localised in 40+ languages on Suite Professional.',
        ro: 'Interfața pentru operatori în 33 de limbi plus 4 variante regionale, printre ele româna și rusa; centrul de ajutor poate fi tradus în peste 40 de limbi pe Suite Professional.',
        ru: 'Интерфейс операторов на 33 языках и 4 региональных вариантах, среди них русский и румынский; справочный центр можно локализовать на 40+ языков на Suite Professional.',
        src: ['languages', 'plans'],
      },
      data: {
        en: 'Hosted in nine AWS regions in the US, the EEA, the UK, Japan and Australia. With the Data Center Location add-on (Suite Professional and higher) you choose the US, the EEA, the UK, Japan or Australia.',
        ro: 'Găzduit în nouă regiuni AWS din SUA, SEE, Marea Britanie, Japonia și Australia. Cu add-on-ul Data Center Location (Suite Professional și mai sus) alegi SUA, SEE, Marea Britanie, Japonia sau Australia.',
        ru: 'Размещение в девяти регионах AWS: США, ЕЭЗ, Великобритания, Япония и Австралия. С дополнением Data Center Location (Suite Professional и выше) можно выбрать США, ЕЭЗ, Великобританию, Японию или Австралию.',
        src: ['hosting', 'locality'],
      },
    },
    uiLanguages: {
      list: [
        'Arabic', 'Portuguese (Brazil)', 'Bulgarian', 'Czech', 'Danish', 'Dutch', 'English (United Kingdom)', 'English (United States)',
        'Finnish', 'French', 'French (Canada)', 'German', 'Greek', 'Hebrew', 'Hindi', 'Hungarian', 'Indonesian', 'Italian', 'Japanese',
        'Korean', 'Norwegian', 'Polish', 'Romanian', 'Russian', 'Simplified Chinese', 'Slovak', 'Spanish', 'Swedish', 'Thai',
        'Traditional Chinese', 'Turkish', 'Ukrainian', 'Vietnamese',
      ],
      romanian: true,
      russian: true,
    },
    dataLocation: {
      en: 'Hosted in nine AWS regions in the US, the EEA, the UK, Japan and Australia. With the Data Center Location add-on (Suite Professional and higher) you choose the US, the EEA, the UK, Japan or Australia.',
      ro: 'Găzduit în nouă regiuni AWS din SUA, SEE, Marea Britanie, Japonia și Australia. Cu add-on-ul Data Center Location (Suite Professional și mai sus) alegi SUA, SEE, Marea Britanie, Japonia sau Australia.',
      ru: 'Размещение в девяти регионах AWS: США, ЕЭЗ, Великобритания, Япония и Австралия. С дополнением Data Center Location (Suite Professional и выше) можно выбрать США, ЕЭЗ, Великобританию, Японию или Австралию.',
      src: ['hosting', 'locality'],
    },
    reviewComplaints: [],
    sources: [
      { id: 'plans', title: 'Zendesk: Suite plans and features', url: 'https://www.zendesk.com/pricing/' },
      { id: 'ai-agents', title: 'Zendesk: AI agents', url: 'https://www.zendesk.com/service/ai/ai-agents/' },
      { id: 'ai-languages', title: 'Zendesk help: Languages supported by AI agents', url: 'https://support.zendesk.com/hc/en-us/articles/8357749663130-Languages-supported-by-AI-agents' },
      { id: 'messaging', title: 'Zendesk: Messaging', url: 'https://www.zendesk.com/service/messaging/' },
      { id: 'voice', title: 'Zendesk: Voice', url: 'https://www.zendesk.com/service/voice/' },
      { id: 'lines', title: 'Zendesk help: Choosing the right line type for voice', url: 'https://support.zendesk.com/hc/en-us/articles/8712714248602-Choosing-the-right-line-type-for-voice' },
      { id: 'qa', title: 'Zendesk: Quality assurance (Zendesk QA)', url: 'https://www.zendesk.com/service/quality-assurance/' },
      { id: 'languages', title: 'Zendesk help: Zendesk language support by product', url: 'https://support.zendesk.com/hc/en-us/articles/4408821324826-Zendesk-language-support-by-product' },
      { id: 'hosting', title: 'Zendesk help: Data hosting locations for your Zendesk service data', url: 'https://support.zendesk.com/hc/en-us/articles/4408825765530-Data-Hosting-Locations-for-Your-Zendesk-Service-Data' },
      { id: 'locality', title: 'Zendesk help: About the Data Center Location add-on', url: 'https://support.zendesk.com/hc/en-us/articles/4408838409754-About-the-Data-Center-Location-add-on' },
      { id: 'export', title: 'Zendesk help: Exporting ticket, user, or organization data from your account', url: 'https://support.zendesk.com/hc/en-us/articles/4408886165402-Exporting-ticket-user-or-organization-data-from-your-account' },
    ],
  },
];

export const page = {
  slug: 'zendesk',
  competitors: ['zendesk'],
  label: { en: 'Zendesk', ro: 'Zendesk', ru: 'Zendesk' },
  summary: {
    en: 'A mature help desk with help centers, its own phone numbers and a large app marketplace, against AI assistants on chats and live calls that can also send support requests into Zendesk.',
    ro: 'Un helpdesk matur, cu centre de ajutor, numere de telefon proprii și un marketplace mare de aplicații, față în față cu asistenți AI pe chat și la telefon, care pot trimite și cererile de suport în Zendesk.',
    ru: 'Зрелый хелпдеск со справочными центрами, своими телефонными номерами и большим маркетплейсом приложений — против ИИ-ассистентов в чатах и на звонках, которые умеют и отправлять заявки в Zendesk.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Fineguide vs Zendesk: a Zendesk alternative with AI calls',
    description: 'A Zendesk alternative compared fact by fact: AI agents, messaging, phone, call scoring and languages, checked on Zendesk’s own pages. Or run both.',
    crumb: 'Zendesk',
    h1: 'Fineguide vs Zendesk:',
    h1Accent: 'instead of it, or beside it',
    shortAnswer:
      'Zendesk is the larger, more mature help desk: ticketing, help centers in 40+ languages, AI agents across messaging, email and voice, its own phone numbers and more than 1,000 marketplace apps. Fineguide is a smaller AI-first platform, with AI assistants on nine chat channels and on live calls over your own phone system, Voice QA call scoring and a CRM on one customer record. It also connects to Zendesk, so support requests from Fineguide chats can land in a Zendesk group and the two can run side by side.',
    tableHeading: 'Zendesk Suite vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Zendesk is stronger',
      items: [
        { text: 'Help desk depth. Ticketing, a help center with a knowledge builder and contextual self-service, and up to five help centers on Suite Professional, localised in 40+ languages.', refs: ['zendesk:plans'] },
        { text: 'AI agents across messaging, email and voice that take actions through APIs, MCP and connected tools, fully supported in 80 languages, plus Copilot for agents on Suite Professional and higher.', refs: ['zendesk:ai-agents', 'zendesk:ai-languages', 'zendesk:plans'] },
        { text: 'A phone system of its own: toll-free and international numbers, IVR with overflow and after-hours routing, AI summaries with the call transcription, and SIP-IN lines to bring your own carrier.', refs: ['zendesk:voice', 'zendesk:lines', 'zendesk:plans'] },
        { text: 'Quality assurance on every channel. Zendesk QA’s AutoQA reviews every conversation, human and AI, voice included, with custom prompt-based categories, Spotlight and coaching.', refs: ['zendesk:qa'] },
        { text: 'Ecosystem and interface languages: more than 1,000 prebuilt apps in the Zendesk Marketplace, and an agent interface in 33 languages, Romanian and Russian among them.', refs: ['zendesk:plans', 'zendesk:languages'] },
        { text: 'A choice of hosting location: the US, the EEA, the UK, Japan or Australia with the Data Center Location add-on on Suite Professional and higher.', refs: ['zendesk:locality'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'It works with Zendesk, not only instead of it. On paid plans, each support request raised in a Fineguide chat can also become a Zendesk ticket in the group you choose, with the customer’s message and the whole chat, while a thread opens in Fineguide’s Inbox linked to a CRM contact.', refs: ['fg:fg-llms'] },
        { text: 'AI on your own phone system. Assistants answer live inbound and outbound calls over your SIP in 14 languages, transfer callers to a person on request and run outbound campaigns (outreach, survey, promotion). Zendesk’s AI agents for voice require Zendesk voice.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'zendesk:plans'] },
        { text: 'Call scoring in the same workspace. Voice QA scores every recorded call by each department’s own rules and weights, with quotes and a suggestion for every rule and reports in 30 languages; recordings can arrive from a connected phone system or the Fineguide recording app for Android. Zendesk lists QA as an add-on.', refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'zendesk:plans'] },
        { text: 'Sales and support on one record. Contacts, companies, deals on a board or a table, tasks with two-way Google Calendar sync and sales reports sit beside the inbox, so a support chat and an open deal belong to the same customer.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'More messaging places to answer in: Telegram (a bot or a Telegram user account), Slack, Discord and JivoChat, and inside amoCRM and Kommo, beside the website widget, WhatsApp, Instagram and Messenger.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Zendesk if…',
        items: [
          'you need a mature ticketing system with a public help center in many languages;',
          'you want phone numbers, IVR and call routing from the same vendor;',
          'you rely on Zendesk Marketplace apps or on Zendesk QA across every channel;',
          'you must pick where your data is hosted, such as the EEA or the UK.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'you want AI assistants on chat, email and live calls over the phone system you already have;',
          'you run a call centre and want every recorded call scored against your own rules;',
          'your support and sales teams should work from one customer record;',
          'you want to keep Zendesk for tickets and put AI on chats and calls in front of it.',
        ],
      },
    },
    switching: {
      heading: 'Moving from Zendesk, or running both',
      intro: 'You don’t have to switch all at once. Fineguide can answer chats and calls first and send support requests into Zendesk, and you move the rest when the team is ready.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed), give an assistant your website, help articles and documents, and test it in the chat widget.' },
        { title: 'Connect Zendesk', body: { text: 'On a paid plan, connect Zendesk with your account address, user and API key, choose a group and turn on sending for an assistant: each support request then also becomes a Zendesk ticket.', refs: ['fg:fg-llms'] } },
        { title: 'Connect channels and email', body: { text: 'Add WhatsApp, Telegram, Instagram or Messenger and your own mailboxes over IMAP and SMTP, then route them with rules and departments.', refs: ['fg:fg-messages'] } },
        { title: 'Bring your contacts over', body: { text: 'Zendesk exports tickets, users and organisations as JSON, CSV or XML, or through its REST API. Save the contacts as a spreadsheet and import it into Fineguide (CSV, TSV, XLS or XLSX), where a person confirms every duplicate merge.', refs: ['zendesk:export', 'fg:fg-llms'] } },
        { title: 'Add your phone line', body: { text: 'Connect your phone system over SIP so assistants take and place calls, and send call recordings to Voice QA for scoring.', refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      {
        q: 'Does Fineguide integrate with Zendesk?',
        a: 'Yes. On paid plans you connect Zendesk with your account address, user and API key and choose a group; each support request raised in a Fineguide chat then also becomes a Zendesk ticket with the customer’s message and the chat conversation.',
        refs: ['fg:fg-llms'],
      },
      {
        q: 'Is Fineguide a Zendesk alternative for small teams?',
        a: 'For teams that mostly answer customers on chat, messaging apps, email and the phone, yes: it covers the AI assistants, the shared inbox, handover to a person and the CRM. Teams that depend on a public help center or on Zendesk Marketplace apps can keep Zendesk and connect Fineguide to it.',
      },
      {
        q: 'Can Zendesk AI agents answer phone calls?',
        a: 'Yes. Zendesk’s voice page says you can assign AI agents to answer calls, and its plans list AI agents for voice as requiring Zendesk voice. Fineguide’s assistants answer and place live calls over the phone system you already have (SIP), in 14 languages.',
        refs: ['zendesk:voice', 'zendesk:plans', 'fg:fg-voice-ai'],
      },
      {
        q: 'Does Zendesk score support calls?',
        a: 'Zendesk QA, which Zendesk lists as an add-on, reviews every conversation with AutoQA, voice included. Fineguide’s Voice QA scores each recorded call against your departments’ own rules and weights, with quotes from the call and a suggestion for every rule.',
        refs: ['zendesk:qa', 'zendesk:plans', 'fg:fg-voice-qa'],
      },
      {
        q: 'Can I move from Zendesk to Fineguide without losing data?',
        a: 'Zendesk exports tickets, users and organisations as JSON, CSV or XML, or through its REST API; the Fineguide CRM imports contacts from CSV, TSV, XLS or XLSX and asks a person to confirm every duplicate merge. You can also keep Zendesk and send new support requests to it.',
        refs: ['zendesk:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'See Fineguide on your own support conversations',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your operation.',
    },
    extraLinks: [
      { href: '/help-desk/', label: 'AI help desk and ticketing' },
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
    ],
  },

  ro: {
    title: 'Fineguide vs Zendesk: alternativă la Zendesk cu apeluri AI',
    description: 'Alternativă la Zendesk comparată punct cu punct: agenți AI, mesagerie, telefon, evaluarea apelurilor și limbi, verificate pe paginile Zendesk. Sau ambele.',
    crumb: 'Zendesk',
    h1: 'Fineguide vs Zendesk:',
    h1Accent: 'în locul lui sau alături de el',
    shortAnswer:
      'Zendesk este helpdesk-ul mai mare și mai matur: tichete, centre de ajutor în peste 40 de limbi, agenți AI pe mesagerie, email și voce, numere de telefon proprii și peste 1.000 de aplicații în marketplace. Fineguide este o platformă mai mică, construită pe AI, cu asistenți AI pe nouă canale de chat și pe apeluri în direct prin propria ta centrală telefonică, evaluarea apelurilor cu Voice QA și un CRM, totul pe o singură fișă de client. Se conectează și la Zendesk, așa că cererile de suport din chaturile Fineguide pot ajunge într-un grup Zendesk, iar cele două pot lucra în paralel.',
    tableHeading: 'Zendesk Suite și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Zendesk este mai puternic',
      items: [
        { text: 'Helpdesk matur. Tichete, un centru de ajutor cu knowledge builder și autoservire contextuală și până la cinci centre de ajutor pe Suite Professional, traduse în peste 40 de limbi.', refs: ['zendesk:plans'] },
        { text: 'Agenți AI pe mesagerie, email și voce, care acționează prin API-uri, MCP și unelte conectate, suportați complet în 80 de limbi, plus Copilot pentru operatori pe Suite Professional și mai sus.', refs: ['zendesk:ai-agents', 'zendesk:ai-languages', 'zendesk:plans'] },
        { text: 'Telefonie proprie: numere gratuite și internaționale, IVR cu rutare la supraîncărcare și în afara programului, rezumate AI cu transcrierea apelului și linii SIP-IN pentru propriul operator.', refs: ['zendesk:voice', 'zendesk:lines', 'zendesk:plans'] },
        { text: 'Controlul calității pe toate canalele. AutoQA din Zendesk QA verifică fiecare conversație, a oamenilor și a AI-ului, inclusiv apelurile, cu categorii proprii pe bază de prompt, Spotlight și coaching.', refs: ['zendesk:qa'] },
        { text: 'Ecosistem și limbi de interfață: peste 1.000 de aplicații gata făcute în Zendesk Marketplace și o interfață pentru operatori în 33 de limbi, printre care româna și rusa.', refs: ['zendesk:plans', 'zendesk:languages'] },
        { text: 'Locul de găzduire la alegere: SUA, SEE, Marea Britanie, Japonia sau Australia, cu add-on-ul Data Center Location pe Suite Professional și mai sus.', refs: ['zendesk:locality'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'Lucrează cu Zendesk, nu doar în locul lui. Pe planurile plătite, fiecare cerere de suport dintr-un chat Fineguide poate deveni și un tichet Zendesk în grupul ales, cu mesajul clientului și tot chatul, iar în Inboxul Fineguide se deschide o conversație legată de un contact din CRM.', refs: ['fg:fg-llms'] },
        { text: 'AI pe propria centrală telefonică. Asistenții răspund la apeluri în direct, primite și efectuate, prin SIP-ul tău, în 14 limbi, transferă apelantul la un om când o cere și derulează campanii de apeluri (prospectare, sondaj, promoție). Agenții AI pentru voce din Zendesk cer Zendesk voice.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'zendesk:plans'] },
        { text: 'Evaluarea apelurilor în același spațiu de lucru. Voice QA notează fiecare apel înregistrat după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă și rapoarte în 30 de limbi; înregistrările pot veni de la o centrală telefonică conectată sau din aplicația Fineguide pentru Android. Zendesk listează QA ca add-on.', refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'zendesk:plans'] },
        { text: 'Vânzări și suport pe aceeași fișă. Contactele, companiile, tranzacțiile pe tablă sau în tabel, sarcinile sincronizate în ambele sensuri cu Google Calendar și rapoartele de vânzări stau lângă inbox, așa că un chat de suport și o tranzacție deschisă țin de același client.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Mai multe locuri în care asistentul răspunde: Telegram (bot sau cont de utilizator Telegram), Slack, Discord și JivoChat, plus direct în amoCRM și Kommo, pe lângă widgetul de pe site, WhatsApp, Instagram și Messenger.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege Zendesk dacă…',
        items: [
          'ai nevoie de un sistem de tichete matur, cu un centru de ajutor public în multe limbi;',
          'vrei numere de telefon, IVR și rutarea apelurilor de la același furnizor;',
          'te bazezi pe aplicații din Zendesk Marketplace sau pe Zendesk QA pe toate canalele;',
          'trebuie să alegi unde sunt găzduite datele, de exemplu în SEE sau în Marea Britanie.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'vrei asistenți AI pe chat, email și apeluri în direct, prin centrala telefonică pe care o ai deja;',
          'ai un call center și vrei ca fiecare apel înregistrat să fie evaluat după regulile tale;',
          'echipele de suport și de vânzări trebuie să lucreze pe aceeași fișă de client;',
          'vrei să păstrezi Zendesk pentru tichete și să pui AI pe chaturi și apeluri înaintea lui.',
        ],
      },
    },
    switching: {
      heading: 'Cum treci de la Zendesk sau cum le folosești pe amândouă',
      intro: 'Nu trebuie să schimbi totul dintr-odată. Fineguide poate răspunde mai întâi la chaturi și apeluri și trimite cererile de suport în Zendesk, iar restul îl muți când echipa e pregătită.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card), dă-i unui asistent site-ul, articolele de ajutor și documentele tale și testează-l în widgetul de chat.' },
        { title: 'Conectează Zendesk', body: { text: 'Pe un plan plătit, conectezi Zendesk cu adresa contului, utilizatorul și cheia API, alegi un grup și activezi trimiterea pentru un asistent: fiecare cerere de suport devine apoi și tichet Zendesk.', refs: ['fg:fg-llms'] } },
        { title: 'Conectează canalele și emailul', body: { text: 'Adaugă WhatsApp, Telegram, Instagram sau Messenger și căsuțele tale de email prin IMAP și SMTP, apoi distribuie conversațiile cu reguli și departamente.', refs: ['fg:fg-messages'] } },
        { title: 'Adu contactele', body: { text: 'Zendesk exportă tichetele, utilizatorii și organizațiile în JSON, CSV sau XML ori prin API-ul REST. Salvează contactele într-un fișier tabelar și importă-l în Fineguide (CSV, TSV, XLS sau XLSX), unde fiecare unire de duplicate o confirmă un om.', refs: ['zendesk:export', 'fg:fg-llms'] } },
        { title: 'Adaugă linia telefonică', body: { text: 'Conectează centrala telefonică prin SIP, ca asistenții să primească și să facă apeluri, și trimite înregistrările în Voice QA pentru evaluare.', refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      {
        q: 'Fineguide are integrare cu Zendesk?',
        a: 'Da. Pe planurile plătite conectezi Zendesk cu adresa contului, utilizatorul și cheia API și alegi un grup; apoi fiecare cerere de suport dintr-un chat Fineguide devine și tichet Zendesk, cu mesajul clientului și conversația din chat.',
        refs: ['fg:fg-llms'],
      },
      {
        q: 'Este Fineguide o alternativă la Zendesk pentru echipe mici?',
        a: 'Pentru echipele care răspund clienților mai ales pe chat, în mesagerii, pe email și la telefon, da: acoperă asistenții AI, inboxul comun, preluarea de către un om și CRM-ul. Echipele care depind de un centru de ajutor public sau de aplicații din Zendesk Marketplace pot păstra Zendesk și conecta Fineguide la el.',
      },
      {
        q: 'Agenții AI din Zendesk pot răspunde la telefon?',
        a: 'Da. Pagina Zendesk despre voce spune că poți desemna agenți AI să răspundă la apeluri, iar planurile arată că agenții AI pentru voce cer Zendesk voice. Asistenții Fineguide primesc și fac apeluri în direct prin centrala pe care o ai deja (SIP), în 14 limbi.',
        refs: ['zendesk:voice', 'zendesk:plans', 'fg:fg-voice-ai'],
      },
      {
        q: 'Zendesk evaluează apelurile de suport?',
        a: 'Zendesk QA, pe care Zendesk îl listează ca add-on, verifică fiecare conversație cu AutoQA, inclusiv apelurile. Voice QA din Fineguide evaluează fiecare apel înregistrat după regulile și ponderile departamentelor tale, cu citate din apel și o sugestie pentru fiecare regulă.',
        refs: ['zendesk:qa', 'zendesk:plans', 'fg:fg-voice-qa'],
      },
      {
        q: 'Pot trece de la Zendesk la Fineguide fără să pierd date?',
        a: 'Zendesk exportă tichetele, utilizatorii și organizațiile în JSON, CSV sau XML ori prin API-ul REST; CRM-ul Fineguide importă contacte din CSV, TSV, XLS sau XLSX și cere confirmarea unui om pentru fiecare unire de duplicate. Poți și să păstrezi Zendesk și să-i trimiți cererile noi de suport.',
        refs: ['zendesk:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Vezi Fineguide pe conversațiile tale de suport',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe operațiunile tale.',
    },
    extraLinks: [
      { href: '/ro/help-desk/', label: 'Helpdesk cu AI și tichete' },
      { href: '/ro/voice-ai/', label: 'Telefonia AI pe propria centrală' },
    ],
  },

  ru: {
    title: 'Fineguide vs Zendesk: альтернатива Zendesk с ИИ-звонками',
    description: 'Альтернатива и аналог Zendesk: сравниваем ИИ-агентов, мессенджеры, телефонию, оценку звонков и языки по официальным страницам Zendesk.',
    crumb: 'Zendesk',
    h1: 'Fineguide vs Zendesk:',
    h1Accent: 'вместо него или вместе с ним',
    shortAnswer:
      'Zendesk — более крупный и зрелый хелпдеск: тикеты, справочные центры на 40+ языках, ИИ-агенты в мессенджерах, почте и голосе, собственные телефонные номера и более 1 000 приложений в маркетплейсе. Fineguide — платформа поменьше, изначально построенная на ИИ: ИИ-ассистенты в девяти каналах чата и на живых звонках через вашу телефонию, оценка звонков в Voice QA и CRM — всё в одной карточке клиента. Fineguide подключается и к Zendesk: заявки из чатов Fineguide могут уходить в группу Zendesk, и системы работают параллельно.',
    tableHeading: 'Zendesk Suite и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Zendesk',
      items: [
        { text: 'Зрелый хелпдеск. Тикеты, справочный центр с knowledge builder и контекстным самообслуживанием, до пяти справочных центров на Suite Professional с локализацией на 40+ языков.', refs: ['zendesk:plans'] },
        { text: 'ИИ-агенты в мессенджерах, почте и голосе, которые выполняют действия через API, MCP и подключённые инструменты и полностью поддерживают 80 языков, плюс Copilot для операторов на Suite Professional и выше.', refs: ['zendesk:ai-agents', 'zendesk:ai-languages', 'zendesk:plans'] },
        { text: 'Собственная телефония: бесплатные и международные номера, IVR с маршрутизацией при перегрузке и в нерабочее время, ИИ-саммари с расшифровкой звонка и линии SIP-IN для своего оператора связи.', refs: ['zendesk:voice', 'zendesk:lines', 'zendesk:plans'] },
        { text: 'Контроль качества во всех каналах. AutoQA в Zendesk QA проверяет каждый диалог, и людей, и ИИ, включая звонки, по собственным категориям на основе промптов, со Spotlight и коучингом.', refs: ['zendesk:qa'] },
        { text: 'Экосистема и языки интерфейса: более 1 000 готовых приложений в Zendesk Marketplace и интерфейс операторов на 33 языках, среди них русский и румынский.', refs: ['zendesk:plans', 'zendesk:languages'] },
        { text: 'Выбор места хранения данных: США, ЕЭЗ, Великобритания, Япония или Австралия — с дополнением Data Center Location на Suite Professional и выше.', refs: ['zendesk:locality'] },
      ],
    },
    fineguideStronger: {
      heading: 'В чём сильнее Fineguide',
      items: [
        { text: 'Работает вместе с Zendesk, а не только вместо него. На платных тарифах каждая заявка из чата Fineguide может также становиться тикетом Zendesk в выбранной группе, с сообщением клиента и всей перепиской, а во входящих Fineguide открывается диалог, привязанный к контакту в CRM.', refs: ['fg:fg-llms'] },
        { text: 'ИИ на вашей телефонии. Ассистенты принимают и совершают живые звонки через ваш SIP на 14 языках, переводят звонящего на человека по просьбе и ведут кампании обзвона (привлечение, опрос, промо). ИИ-агентам Zendesk для голоса нужен Zendesk voice.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'zendesk:plans'] },
        { text: 'Оценка звонков в том же рабочем пространстве. Voice QA оценивает каждый записанный звонок по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу и отчётами на 30 языках; записи приходят из подключённой телефонии или из приложения Fineguide для записи звонков на Android. QA у Zendesk указан как дополнение.', refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'zendesk:plans'] },
        { text: 'Продажи и поддержка в одной карточке. Контакты, компании, сделки на доске или в таблице, задачи с двусторонней синхронизацией с Google Calendar и отчёты по продажам — рядом с входящими, так что обращение в поддержку и открытая сделка относятся к одному клиенту.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Больше мест, где отвечает ассистент: Telegram (бот или пользовательский аккаунт Telegram), Slack, Discord и JivoChat, а также внутри amoCRM и Kommo — в дополнение к виджету на сайте, WhatsApp, Instagram и Messenger.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Zendesk, если…',
        items: [
          'вам нужна зрелая система тикетов с публичным справочным центром на многих языках;',
          'вы хотите номера, IVR и маршрутизацию звонков от одного поставщика;',
          'вы опираетесь на приложения из Zendesk Marketplace или на Zendesk QA во всех каналах;',
          'вам нужно выбрать, где хранятся данные, например в ЕЭЗ или Великобритании.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'вам нужны ИИ-ассистенты в чатах, почте и на живых звонках через вашу текущую телефонию;',
          'у вас колл-центр и вы хотите оценивать каждый записанный звонок по своим правилам;',
          'поддержка и продажи должны работать с одной карточкой клиента;',
          'вы хотите оставить Zendesk для тикетов и поставить ИИ на чаты и звонки перед ним.',
        ],
      },
    },
    switching: {
      heading: 'Как перейти с Zendesk или работать в обеих системах',
      intro: 'Переходить сразу целиком не нужно. Fineguide может сначала отвечать в чатах и на звонках и отправлять заявки в Zendesk, а остальное вы переносите, когда команда будет готова.',
      steps: [
        { title: 'Начните с тарифа Free', body: 'Создайте аккаунт Fineguide (карта не нужна), дайте ассистенту ваш сайт, статьи справки и документы и проверьте его в чат-виджете.' },
        { title: 'Подключите Zendesk', body: { text: 'На платном тарифе подключите Zendesk по адресу аккаунта, пользователю и API-ключу, выберите группу и включите отправку для ассистента: каждая заявка будет также становиться тикетом Zendesk.', refs: ['fg:fg-llms'] } },
        { title: 'Подключите каналы и почту', body: { text: 'Добавьте WhatsApp, Telegram, Instagram или Messenger и свои почтовые ящики по IMAP и SMTP, затем распределяйте диалоги правилами и отделами.', refs: ['fg:fg-messages'] } },
        { title: 'Перенесите контакты', body: { text: 'Zendesk выгружает тикеты, пользователей и организации в JSON, CSV или XML либо через REST API. Сохраните контакты в таблицу и импортируйте её в Fineguide (CSV, TSV, XLS или XLSX); каждое объединение дублей подтверждает человек.', refs: ['zendesk:export', 'fg:fg-llms'] } },
        { title: 'Подключите телефонную линию', body: { text: 'Подключите телефонию по SIP, чтобы ассистенты принимали и совершали звонки, и отправляйте записи в Voice QA на оценку.', refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      {
        q: 'Есть ли у Fineguide интеграция с Zendesk?',
        a: 'Да. На платных тарифах Zendesk подключается по адресу аккаунта, пользователю и API-ключу с выбором группы; после этого каждая заявка из чата Fineguide также становится тикетом Zendesk с сообщением клиента и перепиской.',
        refs: ['fg:fg-llms'],
      },
      {
        q: 'Подойдёт ли Fineguide как аналог Zendesk для небольшой команды?',
        a: 'Для команд, которые в основном отвечают клиентам в чатах, мессенджерах, почте и по телефону, да: Fineguide закрывает ИИ-ассистентов, общий inbox, передачу человеку и CRM. Командам, которым нужен публичный справочный центр или приложения из Zendesk Marketplace, можно оставить Zendesk и подключить к нему Fineguide.',
      },
      {
        q: 'Могут ли ИИ-агенты Zendesk отвечать на звонки?',
        a: 'Да. На странице Zendesk о голосе сказано, что ИИ-агентов можно назначить отвечать на звонки, а в тарифах указано, что ИИ-агентам для голоса нужен Zendesk voice. Ассистенты Fineguide принимают и совершают живые звонки через вашу текущую телефонию (SIP) на 14 языках.',
        refs: ['zendesk:voice', 'zendesk:plans', 'fg:fg-voice-ai'],
      },
      {
        q: 'Оценивает ли Zendesk звонки в поддержку?',
        a: 'Zendesk QA, который Zendesk указывает как дополнение, проверяет каждый диалог через AutoQA, включая звонки. Voice QA в Fineguide оценивает каждый записанный звонок по правилам и весам ваших отделов, с цитатами из звонка и рекомендацией по каждому правилу.',
        refs: ['zendesk:qa', 'zendesk:plans', 'fg:fg-voice-qa'],
      },
      {
        q: 'Можно ли перейти с Zendesk на Fineguide без потери данных?',
        a: 'Zendesk выгружает тикеты, пользователей и организации в JSON, CSV или XML либо через REST API; CRM Fineguide импортирует контакты из CSV, TSV, XLS или XLSX и просит человека подтвердить каждое объединение дублей. Можно и оставить Zendesk, отправляя в него новые заявки.',
        refs: ['zendesk:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Посмотрите Fineguide на ваших обращениях в поддержку',
      body: 'Начните с тарифа Free без карты или запишитесь на 30-минутную демонстрацию на ваших процессах.',
    },
    extraLinks: [
      { href: '/ru/help-desk/', label: 'Хелпдеск с ИИ и тикетами' },
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
    ],
  },
};
