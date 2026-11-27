// Facts checked on 2026-11-27 on Synthflow's own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Page: /compare/synthflow/ (EN), /ro/compare/synthflow/, /ru/compare/synthflow/.
// Competitor id to add to compare.ts (MORE + CATEGORY 'call-center'): 'synthflow'.
//
// Every Synthflow fact below was read on 2026-11-27 on synthflow.ai or docs.synthflow.ai and is linked in `sources`.
// Capabilities only: no prices, plans' prices, trials, minutes or billing terms. Plan names appear only to say where a
// feature sits (SIP connection needs an Enterprise plan, per Synthflow's telephony docs).
// Fineguide refs ('fg:…') use the ids in FINEGUIDE_SOURCES (src/data/compare.ts).

const synthflowData = {
  en: 'Each workspace picks a cluster when it is created, and the choice is permanent: US (data and processing in the United States), EU (all in the European Union) or Global (stored in the EU, calls processed in the US or the EU). ISO/IEC 27001, SOC 2 Type II and PCI DSS; signs a HIPAA BAA; per-agent retention can delete recordings, transcripts and caller IDs after 30 days.',
  ro: 'Fiecare workspace alege un cluster la creare, iar alegerea este definitivă: US (date și procesare în Statele Unite), EU (totul în Uniunea Europeană) sau Global (stocare în UE, apeluri procesate în SUA sau UE). ISO/IEC 27001, SOC 2 Type II și PCI DSS; semnează un BAA HIPAA; păstrarea per agent poate șterge înregistrările, transcrierile și numerele apelanților după 30 de zile.',
  ru: 'Каждое рабочее пространство при создании выбирает кластер, и выбор окончательный: US (данные и обработка в США), EU (всё в Евросоюзе) или Global (хранение в ЕС, звонки обрабатываются в США или ЕС). ISO/IEC 27001, SOC 2 Type II и PCI DSS; подписывает HIPAA BAA; настройка хранения у агента может удалять записи, расшифровки и номера звонящих через 30 дней.',
  src: ['region', 'home'],
};

export const competitors = [
  {
    id: 'synthflow',
    name: 'Synthflow',
    url: 'https://synthflow.ai/',
    checked: '2026-11-27',
    facts: {
      ai: {
        en: 'Voice and chat agents built in the Flow Designer (a node-based builder) or the Prompt Builder, from templates or JSON; knowledge bases from PDFs, documents, URLs, crawled websites and Zendesk help-center articles; actions book meetings, transfer calls, call your APIs and send SMS or WhatsApp messages during a call; a Test Center simulates calls before launch. Models include OpenAI GPT, Anthropic Claude and Meta Llama, with ElevenLabs voices.',
        ro: 'Agenți vocali și de chat construiți în Flow Designer (un constructor cu noduri) sau în Prompt Builder, din șabloane sau JSON; baze de cunoștințe din PDF-uri, documente, URL-uri, site-uri parcurse și articole din centrul de ajutor Zendesk; acțiunile programează întâlniri, transferă apeluri, apelează API-urile tale și trimit SMS sau mesaje WhatsApp în timpul apelului; un Test Center simulează apeluri înainte de lansare. Modele OpenAI GPT, Anthropic Claude și Meta Llama, cu voci ElevenLabs.',
        ru: 'Голосовые и чат-агенты собираются во Flow Designer (конструктор на узлах) или Prompt Builder, из шаблонов или JSON; базы знаний из PDF, документов, ссылок, обойдённых сайтов и статей справочного центра Zendesk; действия записывают на встречи, переводят звонки, вызывают ваши API и отправляют SMS или сообщения WhatsApp во время звонка; Test Center симулирует звонки до запуска. Модели OpenAI GPT, Anthropic Claude и Meta Llama, голоса ElevenLabs.',
        src: ['create', 'kb', 'actions', 'test', 'home'],
      },
      channels: {
        en: 'Phone calls first. Chat agents run in a website widget and through the API in all regions; WhatsApp and SMS run through your own Twilio account and only for US-region workspaces. WhatsApp Business calling is also listed.',
        ro: 'În primul rând apeluri telefonice. Agenții de chat rulează într-un widget pe site și prin API în toate regiunile; WhatsApp și SMS rulează prin propriul cont Twilio și doar pentru workspace-urile din regiunea SUA. Sunt listate și apelurile WhatsApp Business.',
        ru: 'В первую очередь звонки. Чат-агенты работают в виджете на сайте и через API во всех регионах; WhatsApp и SMS — через ваш аккаунт Twilio и только для пространств в регионе США. Указаны и звонки WhatsApp Business.',
        src: ['chat', 'deploy'],
      },
      phone: {
        en: 'Buy numbers in Synthflow (US, Canada and Australia), bring your Twilio numbers, or connect a carrier or PBX over SIP (an Enterprise plan feature); built-in connections for Five9, Genesys Cloud, Zoom, RingCentral, 8x8, Freshcaller, Telnyx and Vonage. Transfers to phone numbers or SIP endpoints; outbound campaigns are created through the Platform API, with calling windows per weekday and failed recipients resent by hand.',
        ro: 'Cumperi numere în Synthflow (SUA, Canada și Australia), aduci numerele Twilio sau conectezi un operator ori o centrală prin SIP (funcție a planului Enterprise); conexiuni integrate pentru Five9, Genesys Cloud, Zoom, RingCentral, 8x8, Freshcaller, Telnyx și Vonage. Transferuri spre numere de telefon sau puncte SIP; campaniile de apeluri se creează prin Platform API, cu ferestre de apel pe zile, iar destinatarii eșuați se retrimit manual.',
        ru: 'Номера можно купить в Synthflow (США, Канада и Австралия), подключить свои номера Twilio или оператора либо АТС по SIP (функция тарифа Enterprise); встроенные подключения для Five9, Genesys Cloud, Zoom, RingCentral, 8x8, Freshcaller, Telnyx и Vonage. Перевод на номера или SIP-адреса; исходящие кампании создаются через Platform API, с окнами звонков по дням недели, а неудачных получателей отправляют повторно вручную.',
        src: ['telephony', 'home', 'transfers', 'campaigns'],
      },
      callScoring: {
        en: 'Custom evaluations score each call on the agents they are attached to against your own criteria (a 1–10 scale, pass or fail, Likert or your own categories); an analytics dashboard tracks call volume, outcomes, sentiment and agent performance. These apply to the calls Synthflow’s agents handle.',
        ro: 'Evaluările personalizate notează fiecare apel al agenților cărora le sunt atașate, după criteriile tale (scară 1–10, trecut/picat, Likert sau propriile categorii); un panou de analiză urmărește volumul apelurilor, rezultatele, sentimentul și performanța agenților. Se aplică apelurilor preluate de agenții Synthflow.',
        ru: 'Пользовательские оценки проверяют каждый звонок агентов, к которым они привязаны, по вашим критериям (шкала 1–10, прошёл/не прошёл, Лайкерт или свои категории); аналитический дашборд показывает объём звонков, итоги, тональность и работу агентов. Это относится к звонкам, которые ведут агенты Synthflow.',
        src: ['evaluations', 'analytics'],
      },
      languages: {
        en: '33 languages for single-language agents, Romanian and Russian among them; multilingual agents answer only in the languages you select, up to 60 with Synthflow’s own speech recognition. Callers can switch language mid-call.',
        ro: '33 de limbi pentru agenții într-o singură limbă, printre ele româna și rusa; agenții multilingvi răspund doar în limbile alese, până la 60 cu recunoașterea vorbirii proprie Synthflow. Apelanții pot schimba limba în timpul apelului.',
        ru: '33 языка для одноязычных агентов, включая румынский и русский; многоязычные агенты отвечают только на выбранных языках, до 60 с собственным распознаванием речи Synthflow. Звонящий может сменить язык посреди разговора.',
        src: ['languages', 'home'],
      },
      data: synthflowData,
    },
    uiLanguages: null,
    dataLocation: synthflowData,
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'Synthflow: AI voice agents for enterprise contact centers (telephony, compliance, scale)', url: 'https://synthflow.ai/' },
      { id: 'create', title: 'Synthflow docs: Create an agent (Flow Designer, Prompt Builder)', url: 'https://docs.synthflow.ai/create-an-agent' },
      { id: 'kb', title: 'Synthflow docs: Knowledge base', url: 'https://docs.synthflow.ai/knowledge-base' },
      { id: 'actions', title: 'Synthflow docs: Actions', url: 'https://docs.synthflow.ai/actions-overview' },
      { id: 'test', title: 'Synthflow docs: Test Center', url: 'https://docs.synthflow.ai/simulations' },
      { id: 'versions', title: 'Synthflow docs: Version control', url: 'https://docs.synthflow.ai/version-control' },
      { id: 'chat', title: 'Synthflow docs: Chat (widget, API, WhatsApp, SMS)', url: 'https://docs.synthflow.ai/chat' },
      { id: 'deploy', title: 'Synthflow docs: Deploy your agent', url: 'https://docs.synthflow.ai/deploy-your-agent' },
      { id: 'telephony', title: 'Synthflow docs: Telephony', url: 'https://docs.synthflow.ai/telephony' },
      { id: 'transfers', title: 'Synthflow docs: Call transfers', url: 'https://docs.synthflow.ai/call-transfers' },
      { id: 'campaigns', title: 'Synthflow docs: Campaigns', url: 'https://docs.synthflow.ai/batch-calling' },
      { id: 'evaluations', title: 'Synthflow docs: Custom evaluations', url: 'https://docs.synthflow.ai/configure-custom-evaluations' },
      { id: 'analytics', title: 'Synthflow docs: Analytics', url: 'https://docs.synthflow.ai/collect-analytics' },
      { id: 'languages', title: 'Synthflow docs: About supported languages', url: 'https://docs.synthflow.ai/about-supported-languages' },
      { id: 'region', title: 'Synthflow docs: Clusters and regions', url: 'https://docs.synthflow.ai/customer-region' },
      { id: 'export', title: 'Synthflow docs: Export call data', url: 'https://docs.synthflow.ai/export-call-data' },
      { id: 'integrations', title: 'Synthflow docs: Integrations overview (CRM, scheduling, automation, telephony)', url: 'https://docs.synthflow.ai/about-integrations' },
    ],
  },
];

export const page = {
  slug: 'synthflow',
  competitors: ['synthflow'],
  label: { en: 'Synthflow', ro: 'Synthflow', ru: 'Synthflow' },
  summary: {
    en: 'A no-code voice-agent platform with deep telephony and contact-center connections, against AI voice agents on your own SIP with the CRM, chat channels, campaigns and team call scoring around them.',
    ro: 'O platformă de agenți vocali fără cod, cu multe conexiuni de telefonie și contact center, față în față cu agenți vocali AI pe propriul SIP, cu CRM, canale de chat, campanii și evaluarea apelurilor echipei în jurul lor.',
    ru: 'No-code платформа голосовых агентов с глубокими подключениями к телефонии и контакт-центрам — против голосовых ИИ-агентов на вашем SIP, вокруг которых уже есть CRM, чаты, обзвоны и оценка звонков команды.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Synthflow alternative: Fineguide vs Synthflow',
    description: 'A Synthflow alternative compared on its own pages: no-code voice agents, telephony, chat channels, call scoring, languages and data, checked 27 Nov 2026.',
    crumb: 'Synthflow',
    h1: 'Fineguide vs Synthflow:',
    h1Accent: 'no-code voice agents, with or without a CRM',
    shortAnswer:
      'Synthflow is a no-code platform for AI voice agents, built in a visual Flow Designer or a Prompt Builder, with many telephony connections (Twilio, Telnyx, Vonage, Five9, Genesys Cloud, Zoom, RingCentral, 8x8), a Test Center, 33 to 60 call languages and US or EU data clusters. Fineguide is also set up without code, and puts the same AI assistants on your own phone system (SIP) and on chat channels, inside a CRM with a team inbox, outbound campaigns built from your contacts and Voice QA scoring of your team’s calls. Choose Synthflow for voice-agent depth inside a contact center; choose Fineguide when calls belong on the same customer record as chats, emails and deals.',
    tableHeading: 'Synthflow vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Synthflow is stronger',
      items: [
        { text: 'Telephony and contact-center connections. Numbers bought in Synthflow (US, Canada, Australia), your own Twilio numbers, Telnyx and Vonage over SIP, and built-in connections for Five9, Genesys Cloud, Zoom, RingCentral, 8x8 and Freshcaller.', refs: ['synthflow:telephony', 'synthflow:home'] },
        { text: 'More call languages. 33 languages for a single-language agent and up to 60 with Synthflow’s own speech recognition, with callers switching language mid-call. Fineguide’s AI calls run in 14.', refs: ['synthflow:languages', 'synthflow:home', 'fg:fg-voice-ai'] },
        { text: 'Testing and release tools: a Test Center that simulates calls before launch, version control with rollback, and custom evaluations of each call against your own success criteria.', refs: ['synthflow:test', 'synthflow:versions', 'synthflow:evaluations'] },
        { text: 'A choice of data region and compliance programmes: US, EU or Global clusters; ISO/IEC 27001, SOC 2 Type II, PCI DSS and a HIPAA BAA.', refs: ['synthflow:region', 'synthflow:home'] },
        { text: 'Integrations with CRMs and schedulers such as Salesforce, HubSpot, Freshworks and GoHighLevel, read and updated during calls.', refs: ['synthflow:integrations', 'synthflow:home'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'Chat channels everywhere. The same assistants answer in the website widget, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord and JivoChat, in any region. Synthflow’s WhatsApp and SMS chat are for US-region workspaces only.', refs: ['fg:fg-assistants', 'synthflow:chat'] },
        { text: 'A CRM around every call. Known callers are greeted by first name, callback requests become CRM tasks, every call is kept as a transcript, and the contact’s deals, tasks and email threads sit on the same record.', refs: ['fg:fg-voice-ai', 'fg:fg-crm', 'fg:fg-messages'] },
        { text: 'Campaigns in the workspace. Outreach, survey and promotion campaigns built from a CSV, contacts, tags or saved segments, with automatic retries on no answer or busy, calling hours for each weekday and a test call first, no API needed. Synthflow creates campaigns through its Platform API and does not retry failed recipients automatically.', refs: ['fg:fg-campaigns', 'synthflow:campaigns'] },
        { text: 'Scoring your human agents’ calls too. Voice QA scores the recorded calls of your team, from uploads, the API, a connected phone system or the Fineguide recording app for Android, against each department’s own rules and weights, with agent scorecards and reports in 30 languages.', refs: ['fg:fg-voice-qa'] },
        { text: 'Your own phone system is simply how AI calls connect: a standard SIP account or trunk from your carrier or PBX, over UDP, TCP or TLS, with several lines on one PBX. Synthflow’s telephony docs list a SIP connection as an Enterprise plan feature.', refs: ['fg:fg-call-center', 'synthflow:telephony'] },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Synthflow if…',
        items: [
          'you run voice agents inside a contact center such as Five9, Genesys Cloud, Zoom or 8x8;',
          'you need calls in many more than 14 languages, or US, EU or Global data clusters;',
          'you want simulations, version control and per-call evaluations around each voice agent;',
          'your CRM is Salesforce, HubSpot or GoHighLevel and should stay the system of record.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'your customers call and also write on WhatsApp, Telegram, Instagram or your website;',
          'you want the CRM, the team inbox and outbound campaigns in the same place as the voice agent;',
          'you want your team’s recorded calls scored as well as the AI’s answered.',
        ],
      },
    },
    switching: {
      heading: 'Moving from Synthflow',
      intro: 'If your numbers live with your carrier or PBX, they stay there: Fineguide answers over SIP, so the move is a change of routing, not of numbers.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed) and give an assistant your website, documents and FAQ.' },
        { title: 'Export your call data', body: { text: 'Export call logs from Synthflow for your records and for the contacts you want to bring.', refs: ['synthflow:export'] } },
        { title: 'Move the prompt and the actions', body: { text: 'Copy the agent’s instructions into the assistant’s persona and handoff rules, and rebuild each custom action as an assistant action from a pasted cURL command, with keys kept as stored secrets.', refs: ['fg:fg-llms'] } },
        { title: 'Point your phone system at Fineguide', body: { text: 'Connect your carrier or PBX with a standard SIP account or trunk, give the number to the assistant, and set its voice, languages, hours and transfer number.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] } },
        { title: 'Import contacts and launch a campaign', body: { text: 'Import contacts into the CRM (CSV, TSV, XLS or XLSX), build an outbound campaign from them and place a test call to your own number first.', refs: ['fg:fg-llms', 'fg:fg-campaigns'] } },
      ],
    },
    faq: [
      { q: 'What is a good Synthflow alternative?', a: 'For voice agents inside a large contact center, Synthflow is strong. If the same AI should also answer chats, and calls should sit on a CRM record with campaigns and call scoring, Fineguide is an alternative built that way, also without code.', refs: ['synthflow:home', 'fg:fg-llms'] },
      { q: 'Is Fineguide no-code like Synthflow?', a: 'Yes. Assistants, phone routing, campaigns and call-scoring rules are set up in the Fineguide workspace without code; actions are made from a pasted cURL command. Synthflow builds agents in its Flow Designer or Prompt Builder.', refs: ['fg:fg-llms', 'synthflow:create'] },
      { q: 'Can I keep my own phone numbers?', a: 'With both. Fineguide answers over your carrier or PBX through SIP, so numbers and carrier minutes stay with your carrier. Synthflow takes your Twilio numbers or a SIP connection, which its docs list as an Enterprise feature.', refs: ['fg:fg-call-center', 'synthflow:telephony'] },
      { q: 'Does Synthflow work on WhatsApp?', a: 'Synthflow’s chat docs say WhatsApp and SMS run through your own Twilio account for US-region workspaces only; the website widget and API chat work in all regions. Fineguide answers on WhatsApp in any region, beside Telegram, Instagram, Messenger and the website chat.', refs: ['synthflow:chat', 'fg:fg-assistants'] },
      { q: 'Which languages can the AI speak on calls?', a: 'Fineguide’s AI calls run in 14 languages: English, Romanian, Russian, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Arabic, Japanese, Korean and Chinese. Synthflow lists 33 languages for single-language agents and up to 60 with its own speech recognition.', refs: ['fg:fg-llms', 'synthflow:languages'] },
    ],
    closing: { heading: 'Hear an assistant on your own number', body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough with your phone system.' },
    extraLinks: [
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
      { href: '/campaigns/', label: 'Outbound call campaigns' },
      { href: '/call-center/', label: 'Call center software' },
    ],
  },

  ro: {
    title: 'Alternativă la Synthflow: Fineguide vs Synthflow',
    description: 'Alternativă la Synthflow comparată pe paginile lui: agenți vocali fără cod, telefonie, chat, evaluarea apelurilor, limbi și date, verificate la 27.11.2026.',
    crumb: 'Synthflow',
    h1: 'Fineguide vs Synthflow:',
    h1Accent: 'agenți vocali fără cod, cu sau fără CRM',
    shortAnswer:
      'Synthflow este o platformă fără cod pentru agenți vocali AI, construiți într-un Flow Designer vizual sau în Prompt Builder, cu multe conexiuni de telefonie (Twilio, Telnyx, Vonage, Five9, Genesys Cloud, Zoom, RingCentral, 8x8), un Test Center, între 33 și 60 de limbi pe apeluri și clustere de date în SUA sau UE. Fineguide se configurează tot fără cod și pune aceiași asistenți AI pe propria ta centrală (SIP) și pe canalele de chat, într-un CRM cu inbox de echipă, campanii construite din contactele tale și evaluarea cu Voice QA a apelurilor echipei. Alege Synthflow pentru agenți vocali avansați într-un contact center; alege Fineguide când apelurile trebuie să stea pe aceeași fișă de client cu chaturile, emailurile și ofertele.',
    tableHeading: 'Synthflow și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Synthflow este mai puternic',
      items: [
        { text: 'Conexiuni de telefonie și contact center. Numere cumpărate în Synthflow (SUA, Canada, Australia), propriile numere Twilio, Telnyx și Vonage prin SIP și conexiuni integrate pentru Five9, Genesys Cloud, Zoom, RingCentral, 8x8 și Freshcaller.', refs: ['synthflow:telephony', 'synthflow:home'] },
        { text: 'Mai multe limbi pe apeluri. 33 de limbi pentru un agent într-o singură limbă și până la 60 cu recunoașterea vorbirii proprie Synthflow, iar apelanții pot schimba limba în timpul apelului. Apelurile AI Fineguide rulează în 14.', refs: ['synthflow:languages', 'synthflow:home', 'fg:fg-voice-ai'] },
        { text: 'Unelte de testare și lansare: un Test Center care simulează apeluri înainte de lansare, controlul versiunilor cu revenire și evaluări personalizate ale fiecărui apel după propriile criterii de reușită.', refs: ['synthflow:test', 'synthflow:versions', 'synthflow:evaluations'] },
        { text: 'Alegerea regiunii datelor și programe de conformitate: clustere US, EU sau Global; ISO/IEC 27001, SOC 2 Type II, PCI DSS și BAA HIPAA.', refs: ['synthflow:region', 'synthflow:home'] },
        { text: 'Integrări cu CRM-uri și programatoare precum Salesforce, HubSpot, Freshworks și GoHighLevel, citite și actualizate în timpul apelurilor.', refs: ['synthflow:integrations', 'synthflow:home'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'Canale de chat peste tot. Aceiași asistenți răspund în widgetul de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord și JivoChat, în orice regiune. Chatul pe WhatsApp și SMS de la Synthflow este doar pentru workspace-urile din regiunea SUA.', refs: ['fg:fg-assistants', 'synthflow:chat'] },
        { text: 'Un CRM în jurul fiecărui apel. Apelanții cunoscuți sunt salutați pe nume, cererile de revenire devin sarcini în CRM, fiecare apel rămâne ca transcriere, iar ofertele, sarcinile și emailurile contactului stau pe aceeași fișă.', refs: ['fg:fg-voice-ai', 'fg:fg-crm', 'fg:fg-messages'] },
        { text: 'Campanii direct în workspace. Campanii de prospectare, sondaj și promoție construite din CSV, contacte, etichete sau segmente salvate, cu reîncercări automate la lipsă de răspuns sau ocupat, ore de apel pe fiecare zi a săptămânii și un apel de test înainte, fără API. Synthflow creează campaniile prin Platform API și nu reîncearcă automat destinatarii eșuați.', refs: ['fg:fg-campaigns', 'synthflow:campaigns'] },
        { text: 'Evaluarea apelurilor operatorilor umani. Voice QA evaluează apelurile înregistrate ale echipei, din încărcări, API, o centrală conectată sau aplicația Fineguide de înregistrare pentru Android, după regulile și ponderile fiecărui departament, cu fișe de scor pe operator și rapoarte în 30 de limbi.', refs: ['fg:fg-voice-qa'] },
        { text: 'Propria centrală este pur și simplu felul în care se conectează apelurile AI: un cont sau trunchi SIP standard de la operator ori centrală, prin UDP, TCP sau TLS, cu mai multe linii pe aceeași centrală. Documentația de telefonie Synthflow listează conexiunea SIP ca funcție a planului Enterprise.', refs: ['fg:fg-call-center', 'synthflow:telephony'] },
      ],
    },
    choose: {
      heading: 'Cine ce ar trebui să aleagă',
      competitor: {
        label: 'Alege Synthflow dacă…',
        items: [
          'rulezi agenți vocali într-un contact center ca Five9, Genesys Cloud, Zoom sau 8x8;',
          'ai nevoie de apeluri în mult mai mult de 14 limbi sau de clustere de date US, EU ori Global;',
          'vrei simulări, controlul versiunilor și evaluări pe fiecare apel în jurul fiecărui agent vocal;',
          'CRM-ul tău este Salesforce, HubSpot sau GoHighLevel și trebuie să rămână sistemul principal.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'clienții te sună și îți scriu pe WhatsApp, Telegram, Instagram sau pe site;',
          'vrei CRM-ul, inboxul de echipă și campaniile de apeluri în același loc cu agentul vocal;',
          'vrei evaluate și apelurile înregistrate ale echipei, nu doar cele preluate de AI.',
        ],
      },
    },
    switching: {
      heading: 'Trecerea de la Synthflow',
      intro: 'Dacă numerele tale sunt la operator sau în centrală, rămân acolo: Fineguide răspunde prin SIP, așa că mutarea înseamnă o schimbare de rutare, nu de numere.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card) și dă unui asistent site-ul, documentele și întrebările frecvente.' },
        { title: 'Exportă datele apelurilor', body: { text: 'Exportă jurnalele de apeluri din Synthflow pentru arhiva ta și pentru contactele pe care vrei să le aduci.', refs: ['synthflow:export'] } },
        { title: 'Mută promptul și acțiunile', body: { text: 'Copiază instrucțiunile agentului în persona și regulile de predare ale asistentului și refă fiecare acțiune personalizată ca acțiune de asistent dintr-o comandă cURL lipită, cu cheile păstrate ca secrete.', refs: ['fg:fg-llms'] } },
        { title: 'Îndreaptă centrala spre Fineguide', body: { text: 'Conectează operatorul sau centrala cu un cont ori trunchi SIP standard, dă numărul asistentului și setează vocea, limbile, orele și numărul de transfer.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] } },
        { title: 'Importă contactele și pornește o campanie', body: { text: 'Importă contactele în CRM (CSV, TSV, XLS sau XLSX), construiește din ele o campanie și fă mai întâi un apel de test spre propriul număr.', refs: ['fg:fg-llms', 'fg:fg-campaigns'] } },
      ],
    },
    faq: [
      { q: 'Care este o alternativă bună la Synthflow?', a: 'Pentru agenți vocali într-un contact center mare, Synthflow este puternic. Dacă același AI trebuie să răspundă și la chat, iar apelurile să stea pe o fișă din CRM, cu campanii și evaluarea apelurilor, Fineguide este o alternativă construită așa, tot fără cod.', refs: ['synthflow:home', 'fg:fg-llms'] },
      { q: 'Este Fineguide fără cod, ca Synthflow?', a: 'Da. Asistenții, rutarea telefonică, campaniile și regulile de evaluare se configurează în workspace-ul Fineguide fără cod; acțiunile se fac dintr-o comandă cURL lipită. Synthflow construiește agenții în Flow Designer sau Prompt Builder.', refs: ['fg:fg-llms', 'synthflow:create'] },
      { q: 'Îmi pot păstra numerele de telefon?', a: 'Cu amândouă. Fineguide răspunde prin operatorul sau centrala ta, prin SIP, așa că numerele și minutele rămân la operator. Synthflow acceptă numerele tale Twilio sau o conexiune SIP, pe care documentația o listează ca funcție Enterprise.', refs: ['fg:fg-call-center', 'synthflow:telephony'] },
      { q: 'Funcționează Synthflow pe WhatsApp?', a: 'Documentația de chat Synthflow spune că WhatsApp și SMS rulează prin propriul cont Twilio, doar pentru workspace-urile din regiunea SUA; widgetul și chatul prin API funcționează în toate regiunile. Fineguide răspunde pe WhatsApp în orice regiune, alături de Telegram, Instagram, Messenger și chatul de pe site.', refs: ['synthflow:chat', 'fg:fg-assistants'] },
      { q: 'În ce limbi vorbește AI-ul la telefon?', a: 'Apelurile AI Fineguide rulează în 14 limbi: română, engleză, rusă, spaniolă, franceză, germană, italiană, portugheză, poloneză, turcă, arabă, japoneză, coreeană și chineză. Synthflow listează 33 de limbi pentru agenții într-o singură limbă și până la 60 cu propria recunoaștere a vorbirii.', refs: ['fg:fg-llms', 'synthflow:languages'] },
    ],
    closing: { heading: 'Ascultă un asistent pe propriul număr', body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute cu centrala ta.' },
    extraLinks: [
      { href: '/ro/voice-ai/', label: 'Telefonie AI pe propria centrală' },
      { href: '/ro/campaigns/', label: 'Campanii de apeluri' },
      { href: '/ro/call-center/', label: 'Soft pentru call center' },
    ],
  },

  ru: {
    title: 'Альтернатива Synthflow: Fineguide и Synthflow',
    description: 'Альтернатива Synthflow, сравнение по его страницам: no-code голосовые агенты, телефония, чаты, оценка звонков, языки и данные. Проверено 27.11.2026.',
    crumb: 'Synthflow',
    h1: 'Fineguide и Synthflow:',
    h1Accent: 'голосовые агенты без кода — с CRM или без',
    shortAnswer:
      'Synthflow — no-code платформа голосовых ИИ-агентов: их собирают в визуальном Flow Designer или Prompt Builder, есть много подключений к телефонии (Twilio, Telnyx, Vonage, Five9, Genesys Cloud, Zoom, RingCentral, 8x8), Test Center, от 33 до 60 языков на звонках и кластеры данных в США или ЕС. Fineguide тоже настраивается без кода и ставит тех же ИИ-ассистентов на вашу телефонию (SIP) и в чаты, внутри CRM с общим inbox, обзвонами по вашим контактам и оценкой звонков команды Voice QA. Выбирайте Synthflow для продвинутых голосовых агентов внутри контакт-центра; Fineguide — когда звонки должны быть в той же карточке клиента, что и чаты, письма и сделки.',
    tableHeading: 'Synthflow и Fineguide: коротко',
    competitorStronger: {
      heading: 'Где сильнее Synthflow',
      items: [
        { text: 'Подключения к телефонии и контакт-центрам. Номера, купленные в Synthflow (США, Канада, Австралия), свои номера Twilio, Telnyx и Vonage по SIP и встроенные подключения к Five9, Genesys Cloud, Zoom, RingCentral, 8x8 и Freshcaller.', refs: ['synthflow:telephony', 'synthflow:home'] },
        { text: 'Больше языков на звонках. 33 языка для одноязычного агента и до 60 с собственным распознаванием речи Synthflow, звонящий может сменить язык посреди разговора. ИИ-звонки Fineguide — на 14 языках.', refs: ['synthflow:languages', 'synthflow:home', 'fg:fg-voice-ai'] },
        { text: 'Инструменты тестирования и выпуска: Test Center симулирует звонки до запуска, контроль версий с откатом и пользовательские оценки каждого звонка по вашим критериям успеха.', refs: ['synthflow:test', 'synthflow:versions', 'synthflow:evaluations'] },
        { text: 'Выбор региона данных и программы соответствия: кластеры US, EU или Global; ISO/IEC 27001, SOC 2 Type II, PCI DSS и HIPAA BAA.', refs: ['synthflow:region', 'synthflow:home'] },
        { text: 'Интеграции с CRM и планировщиками — Salesforce, HubSpot, Freshworks и GoHighLevel, — которые читаются и обновляются во время звонка.', refs: ['synthflow:integrations', 'synthflow:home'] },
      ],
    },
    fineguideStronger: {
      heading: 'Где сильнее Fineguide',
      items: [
        { text: 'Чаты везде. Те же ассистенты отвечают в виджете на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord и JivoChat в любом регионе. Чат в WhatsApp и SMS у Synthflow — только для пространств в регионе США.', refs: ['fg:fg-assistants', 'synthflow:chat'] },
        { text: 'CRM вокруг каждого звонка. Знакомых абонентов приветствуют по имени, заявки на перезвон становятся задачами в CRM, каждый звонок сохраняется как расшифровка, а сделки, задачи и переписка контакта — в той же карточке.', refs: ['fg:fg-voice-ai', 'fg:fg-crm', 'fg:fg-messages'] },
        { text: 'Обзвоны прямо в рабочем пространстве. Кампании привлечения, опроса и промо из CSV, контактов, тегов или сохранённых сегментов, с автоматическими повторами при «нет ответа» или «занято», часами звонков по дням недели и тестовым звонком — без API. Synthflow создаёт кампании через Platform API и не повторяет неудачные звонки автоматически.', refs: ['fg:fg-campaigns', 'synthflow:campaigns'] },
        { text: 'Оценка звонков живых сотрудников. Voice QA оценивает записанные звонки команды — из загрузок, API, подключённой АТС или приложения записи Fineguide для Android — по правилам и весам каждого отдела, с карточками сотрудников и отчётами на 30 языках.', refs: ['fg:fg-voice-qa'] },
        { text: 'Своя телефония — это и есть способ подключить ИИ-звонки: стандартный SIP-аккаунт или транк от оператора или АТС по UDP, TCP или TLS, несколько линий на одной АТС. В документации Synthflow SIP-подключение указано как функция тарифа Enterprise.', refs: ['fg:fg-call-center', 'synthflow:telephony'] },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Synthflow, если…',
        items: [
          'вы запускаете голосовых агентов внутри контакт-центра вроде Five9, Genesys Cloud, Zoom или 8x8;',
          'нужны звонки на гораздо большем числе языков, чем 14, или кластеры данных US, EU или Global;',
          'вокруг каждого голосового агента нужны симуляции, контроль версий и оценка каждого звонка;',
          'ваша CRM — Salesforce, HubSpot или GoHighLevel, и она должна оставаться основной системой.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'клиенты звонят и пишут в WhatsApp, Telegram, Instagram или на сайт;',
          'CRM, общий inbox и обзвоны должны быть там же, где голосовой агент;',
          'оценивать нужно и записанные звонки команды, а не только ответы ИИ.',
        ],
      },
    },
    switching: {
      heading: 'Переход с Synthflow',
      intro: 'Если ваши номера у оператора или в АТС, они там и остаются: Fineguide отвечает по SIP, поэтому меняется маршрутизация, а не номера.',
      steps: [
        { title: 'Начните с бесплатного тарифа', body: 'Создайте аккаунт Fineguide (без карты) и дайте ассистенту ваш сайт, документы и частые вопросы.' },
        { title: 'Выгрузите данные звонков', body: { text: 'Выгрузите журналы звонков из Synthflow — для архива и для контактов, которые хотите перенести.', refs: ['synthflow:export'] } },
        { title: 'Перенесите промпт и действия', body: { text: 'Скопируйте инструкции агента в роль и правила передачи ассистента и пересоберите каждое пользовательское действие как действие ассистента из вставленной команды cURL, с ключами в хранимых секретах.', refs: ['fg:fg-llms'] } },
        { title: 'Направьте телефонию на Fineguide', body: { text: 'Подключите оператора или АТС стандартным SIP-аккаунтом или транком, закрепите номер за ассистентом и задайте голос, языки, часы и номер перевода.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] } },
        { title: 'Импортируйте контакты и запустите обзвон', body: { text: 'Импортируйте контакты в CRM (CSV, TSV, XLS или XLSX), соберите из них кампанию и сначала сделайте тестовый звонок на свой номер.', refs: ['fg:fg-llms', 'fg:fg-campaigns'] } },
      ],
    },
    faq: [
      { q: 'Какая есть хорошая альтернатива Synthflow?', a: 'Для голосовых агентов внутри большого контакт-центра Synthflow силён. Если тот же ИИ должен отвечать и в чатах, а звонки — лежать в карточке CRM вместе с обзвонами и оценкой звонков, Fineguide — альтернатива, устроенная именно так, тоже без кода.', refs: ['synthflow:home', 'fg:fg-llms'] },
      { q: 'Fineguide тоже без кода, как Synthflow?', a: 'Да. Ассистенты, маршрутизация звонков, кампании и правила оценки настраиваются в рабочем пространстве Fineguide без кода; действия создаются из вставленной команды cURL. В Synthflow агенты собираются во Flow Designer или Prompt Builder.', refs: ['fg:fg-llms', 'synthflow:create'] },
      { q: 'Можно ли оставить свои номера телефонов?', a: 'В обоих. Fineguide отвечает через вашего оператора или АТС по SIP, так что номера и минуты остаются у оператора. Synthflow принимает ваши номера Twilio или SIP-подключение, которое в документации указано как функция Enterprise.', refs: ['fg:fg-call-center', 'synthflow:telephony'] },
      { q: 'Работает ли Synthflow в WhatsApp?', a: 'В документации по чатам Synthflow сказано, что WhatsApp и SMS работают через ваш аккаунт Twilio и только для пространств в регионе США; виджет и чат через API доступны во всех регионах. Fineguide отвечает в WhatsApp в любом регионе, а также в Telegram, Instagram, Messenger и чате на сайте.', refs: ['synthflow:chat', 'fg:fg-assistants'] },
      { q: 'На каких языках ИИ говорит по телефону?', a: 'ИИ-звонки Fineguide идут на 14 языках: русском, английском, румынском, испанском, французском, немецком, итальянском, португальском, польском, турецком, арабском, японском, корейском и китайском. Synthflow указывает 33 языка для одноязычных агентов и до 60 с собственным распознаванием речи.', refs: ['fg:fg-llms', 'synthflow:languages'] },
    ],
    closing: { heading: 'Послушайте ассистента на своём номере', body: 'Начните с бесплатного тарифа без карты или запишитесь на 30-минутную демонстрацию с вашей телефонией.' },
    extraLinks: [
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
      { href: '/ru/campaigns/', label: 'Исходящие обзвоны' },
      { href: '/ru/call-center/', label: 'Программа для колл-центра' },
    ],
  },
};
