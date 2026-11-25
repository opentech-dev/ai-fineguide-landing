// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Page: /compare/vapi-retell/ (EN), /ro/compare/vapi-retell/, /ru/compare/vapi-retell/.
// Competitor ids to add to CompetitorId in src/data/compare.ts: 'vapi' | 'retell'.
//
// Fineguide refs: all in FINEGUIDE_SOURCES today except 'fg-automations' (one line, the call-triggered workflows;
// see compare-zapier-make.ts `newFineguideSources`, and the note there about /automations/ and llms.txt).
//
// Fineguide facts were checked against public/llms.txt and the code (origin/main, 2026-11-25):
// - AI Telephony over the customer's own SIP: ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/
//   (channels/pages/ChannelFormPage.tsx: SIP URI / phone number channels; integrations/components/CarrierSetupGuide.tsx:
//   Twilio Elastic SIP Trunking or "point your PBX or SIP trunk at the address below"); 14 call languages per llms.txt
// - Campaigns: modules/telephony/campaigns/ (wizard steps: details, agent, contacts, retry, concurrency, questions;
//   TestCallForm; survey and promotion reports)
// - Call-triggered workflows: modules/workflows/elements/defs/triggers.ts (VOICE_CALL_RECEIVED / _TRANSCRIBED / _EVALUATED)
// - Chat channels incl. JivoChat: llms.txt "Integrations & languages"; greeting by first name: owner rule in the brief
// - Voice QA scores recorded calls of the team (uploaded, API, connected phone system, Android recording app)

export const competitors = [
  {
    id: 'vapi',
    name: 'Vapi',
    url: 'https://vapi.ai/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'A developer platform for voice agents: Assistants (one system prompt plus tools and structured outputs) or Squads of specialised assistants that hand a call to each other. You choose the transcriber, the model and the voice from providers such as OpenAI, Anthropic, Google, Deepgram and ElevenLabs.',
        ro: 'O platformă pentru dezvoltatori, pentru agenți vocali: Assistants (un singur prompt de sistem plus unelte și rezultate structurate) sau Squads, echipe de asistenți specializați care își predau apelul unul altuia. Alegi transcrierea, modelul și vocea de la furnizori precum OpenAI, Anthropic, Google, Deepgram și ElevenLabs.',
        ru: 'Платформа для разработчиков голосовых агентов: Assistants (один системный промпт плюс инструменты и структурированные выходные данные) или Squads — группы специализированных ассистентов, которые передают звонок друг другу. Распознавание речи, модель и голос выбираются у провайдеров вроде OpenAI, Anthropic, Google, Deepgram и ElevenLabs.',
        src: ['intro'],
      },
      channels: {
        en: 'Phone and web calls; a website widget with voice and text chat; text chat through the Chat API, and SMS chat on a 10DLC-approved Twilio number (customers start the conversation).',
        ro: 'Apeluri telefonice și web; un widget pentru site cu voce și chat text; chat text prin Chat API și chat prin SMS pe un număr Twilio aprobat 10DLC (conversația o începe clientul).',
        ru: 'Телефонные и веб-звонки; виджет для сайта с голосом и текстовым чатом; текстовый чат через Chat API и SMS-чат на номере Twilio с одобрением 10DLC (диалог начинает клиент).',
        src: ['intro', 'widget', 'sms'],
      },
      phone: {
        en: 'Vapi numbers with US area codes take inbound calls only; for outbound and international calls you import numbers from Twilio, Telnyx or DIDWW or connect your own SIP trunk. Outbound campaigns run from the dashboard. Vapi for CX connects contact-centre and office phone systems such as Genesys Cloud, Five9, Talkdesk, Amazon Connect, Microsoft Teams and Zoom.',
        ro: 'Numerele Vapi, cu prefixe din SUA, primesc doar apeluri; pentru apeluri efectuate și internaționale imporți numere din Twilio, Telnyx sau DIDWW ori conectezi propriul trunchi SIP. Campaniile de apeluri rulează din dashboard. Vapi for CX conectează sisteme de contact center și centrale de birou precum Genesys Cloud, Five9, Talkdesk, Amazon Connect, Microsoft Teams și Zoom.',
        ru: 'Номера Vapi с американскими кодами принимают только входящие; для исходящих и международных звонков номера импортируются из Twilio, Telnyx или DIDWW либо подключается собственный SIP-транк. Исходящие кампании запускаются из дашборда. Vapi for CX подключает контакт-центры и офисные АТС, например Genesys Cloud, Five9, Talkdesk, Amazon Connect, Microsoft Teams и Zoom.',
        src: ['phone', 'sip', 'campaigns', 'phone-systems'],
      },
      callScoring: {
        en: 'Call analysis after every call: a language model summarises it, extracts structured data and evaluates whether it succeeded; Vapi recommends structured outputs for this.',
        ro: 'Analiza apelului după fiecare apel: un model de limbaj îl rezumă, extrage date structurate și evaluează dacă a reușit; Vapi recomandă pentru asta rezultatele structurate (structured outputs).',
        ru: 'Анализ после каждого звонка: языковая модель делает саммари, извлекает структурированные данные и оценивает, был ли звонок успешным; для этого Vapi рекомендует structured outputs.',
        src: ['analysis'],
      },
      languages: {
        en: 'Depends on the providers you pick: for speech recognition Google lists 125+ languages and Azure 100+; for voices Azure lists 140+ and Vapi’s own voices 40+.',
        ro: 'Depinde de furnizorii aleși: pentru recunoașterea vorbirii, Google listează peste 125 de limbi, iar Azure peste 100; pentru voci, Azure listează peste 140, iar vocile proprii Vapi peste 40.',
        ru: 'Зависит от выбранных провайдеров: для распознавания речи Google указывает 125+ языков, Azure — 100+; для голосов Azure — 140+, собственные голоса Vapi — 40+.',
        src: ['languages'],
      },
      data: {
        en: 'Each organization sits in one region, the United States or the European Union; the EU region comes with the Premier Success Package.',
        ro: 'Fiecare organizație stă într-o singură regiune, Statele Unite sau Uniunea Europeană; regiunea UE vine cu Premier Success Package.',
        ru: 'Каждая организация находится в одном регионе — США или Европейский союз; регион ЕС доступен в пакете Premier Success Package.',
        src: ['eu-region'],
      },
    },
    uiLanguages: null,
    dataLocation: {
      en: 'Each organization sits in one region, the United States or the European Union; the EU region comes with the Premier Success Package.',
      ro: 'Fiecare organizație stă într-o singură regiune, Statele Unite sau Uniunea Europeană; regiunea UE vine cu Premier Success Package.',
      ru: 'Каждая организация находится в одном регионе — США или Европейский союз; регион ЕС доступен в пакете Premier Success Package.',
      src: ['eu-region'],
    },
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'Vapi: Platform overview (integrations, compliance, scale)', url: 'https://vapi.ai/' },
      { id: 'intro', title: 'Vapi docs: Introduction', url: 'https://docs.vapi.ai/quickstart/introduction' },
      { id: 'phone', title: 'Vapi docs: Phone calling', url: 'https://docs.vapi.ai/phone-calling' },
      { id: 'sip', title: 'Vapi docs: SIP', url: 'https://docs.vapi.ai/advanced/sip' },
      { id: 'phone-systems', title: 'Vapi docs: Connect a phone line (Vapi for CX)', url: 'https://docs.vapi.ai/phone-systems' },
      { id: 'campaigns', title: 'Vapi docs: Outbound campaigns overview', url: 'https://docs.vapi.ai/outbound-campaigns/overview' },
      { id: 'widget', title: 'Vapi docs: Web widget', url: 'https://docs.vapi.ai/chat/web-widget' },
      { id: 'sms', title: 'Vapi docs: SMS chat', url: 'https://docs.vapi.ai/chat/sms-chat' },
      { id: 'analysis', title: 'Vapi docs: Call analysis', url: 'https://docs.vapi.ai/assistants/call-analysis' },
      { id: 'languages', title: 'Vapi docs: Multilingual support', url: 'https://docs.vapi.ai/customization/multilingual' },
      { id: 'eu-region', title: 'Vapi docs: EU region and data residency', url: 'https://docs.vapi.ai/security-and-privacy/eu-region' },
    ],
  },
  {
    id: 'retell',
    name: 'Retell AI',
    url: 'https://www.retellai.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'Voice and chat agents built from a single prompt or a conversation flow (a no-code builder with nodes for dialogue, tools, transfers and code), with a knowledge base from crawled websites and documents. Conductor, Retell’s AI copilot, builds, tests and refines agents with you.',
        ro: 'Agenți vocali și de chat construiți dintr-un singur prompt sau dintr-un conversation flow (un editor fără cod, cu noduri pentru dialog, unelte, transferuri și cod), cu bază de cunoștințe din site-uri parcurse automat și documente. Conductor, copilotul AI al Retell, construiește, testează și îmbunătățește agenții împreună cu tine.',
        ru: 'Голосовые и чат-агенты на одном промпте или на conversation flow (конструктор без кода с узлами для диалога, инструментов, переводов и кода), с базой знаний из обхода сайтов и документов. Conductor, ИИ-копилот Retell, вместе с вами создаёт, тестирует и дорабатывает агентов.',
        src: ['intro', 'home'],
      },
      channels: {
        en: 'Phone calls, a website widget (text chat, in-browser voice calls or phone callbacks) and SMS. Retell says it has no built-in integrations with chat platforms such as WhatsApp or Messenger; you connect your own channel through its chat API.',
        ro: 'Apeluri telefonice, un widget pentru site (chat text, apeluri vocale din browser sau apel înapoi) și SMS. Retell spune că nu are integrări proprii cu platforme de chat precum WhatsApp sau Messenger; îți conectezi propriul canal prin API-ul de chat.',
        ru: 'Телефонные звонки, виджет для сайта (текстовый чат, голосовые звонки из браузера или обратный звонок) и SMS. Retell сообщает, что встроенных интеграций с чат-платформами вроде WhatsApp или Messenger нет; свой канал подключается через chat API.',
        src: ['chat', 'widget'],
      },
      phone: {
        en: 'Buy Retell-managed US or Canada numbers in the dashboard, or connect your own provider over elastic SIP trunking or SIP URI dialing. The Dialer runs outbound call and text campaigns with retries on a schedule and Do Not Call screening.',
        ro: 'Cumperi din dashboard numere din SUA sau Canada gestionate de Retell ori îți conectezi furnizorul prin elastic SIP trunking sau apelare la un SIP URI. Dialer rulează campanii de apeluri și SMS, cu reîncercări programate și verificare în registrele Do Not Call.',
        ru: 'Номера США или Канады от Retell покупаются в дашборде, либо свой провайдер подключается через elastic SIP trunking или вызов на SIP URI. Dialer ведёт исходящие кампании звонков и SMS с повторами по расписанию и проверкой по реестрам Do Not Call.',
        src: ['intro', 'telephony', 'dialer'],
      },
      callScoring: {
        en: 'Post Call Extraction scores call success and sentiment after every call and fills custom fields; AI QA evaluates a sampled set of calls on hallucination, knowledge-base accuracy, latency, sentiment and tool use, with transcript evidence.',
        ro: 'Post Call Extraction evaluează după fiecare apel reușita și sentimentul și completează câmpuri personalizate; AI QA evaluează un eșantion de apeluri după halucinații, acuratețea răspunsurilor din baza de cunoștințe, latență, sentiment și folosirea uneltelor, cu dovezi din transcriere.',
        ru: 'Post Call Extraction после каждого звонка оценивает успешность и тональность и заполняет пользовательские поля; AI QA оценивает выборку звонков по галлюцинациям, точности ответов по базе знаний, задержкам, тональности и работе инструментов, с подтверждениями из расшифровки.',
        src: ['extraction', 'ai-qa'],
      },
      languages: {
        en: 'Retell’s provider tables list 57 languages for voices and 55 for speech recognition, Romanian and Russian among them; agents can be single-language or multilingual.',
        ro: 'Tabelele de furnizori Retell listează 57 de limbi pentru voci și 55 pentru recunoașterea vorbirii, printre ele româna și rusa; agenții pot fi într-o singură limbă sau multilingvi.',
        ru: 'В таблицах провайдеров Retell — 57 языков для голосов и 55 для распознавания речи, среди них русский и румынский; агент может быть одноязычным или многоязычным.',
        src: ['languages', 'home'],
      },
      data: {
        en: 'Retell says it complies with the GDPR through AWS but does not currently operate services within the European Union; retention can be set per agent from 1 day to 2 years.',
        ro: 'Retell spune că respectă GDPR prin AWS, dar nu operează în prezent servicii în Uniunea Europeană; retenția se poate seta pe fiecare agent, de la 1 zi la 2 ani.',
        ru: 'Retell сообщает, что соответствует GDPR благодаря AWS, но сейчас не размещает сервисы в Европейском союзе; срок хранения задаётся для каждого агента — от 1 дня до 2 лет.',
        src: ['compliance'],
      },
    },
    uiLanguages: null,
    dataLocation: {
      en: 'Retell says it complies with the GDPR through AWS but does not currently operate services within the European Union; retention can be set per agent from 1 day to 2 years.',
      ro: 'Retell spune că respectă GDPR prin AWS, dar nu operează în prezent servicii în Uniunea Europeană; retenția se poate seta pe fiecare agent, de la 1 zi la 2 ani.',
      ru: 'Retell сообщает, что соответствует GDPR благодаря AWS, но сейчас не размещает сервисы в Европейском союзе; срок хранения задаётся для каждого агента — от 1 дня до 2 лет.',
      src: ['compliance'],
    },
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'Retell AI: Platform overview (with FAQ)', url: 'https://www.retellai.com/' },
      { id: 'intro', title: 'Retell AI docs: Introduction to Retell', url: 'https://docs.retellai.com/general/introduction' },
      { id: 'chat', title: 'Retell AI docs: Create chat agent', url: 'https://docs.retellai.com/build/create-chat-agent' },
      { id: 'widget', title: 'Retell AI docs: Website widget', url: 'https://docs.retellai.com/deploy/chat-widget' },
      { id: 'telephony', title: 'Retell AI docs: Connect voice agents to custom telephony', url: 'https://docs.retellai.com/deploy/custom-telephony' },
      { id: 'dialer', title: 'Retell AI docs: Outbound call campaigns (Dialer)', url: 'https://docs.retellai.com/dialer/overview' },
      { id: 'extraction', title: 'Retell AI docs: Post Call Extraction overview', url: 'https://docs.retellai.com/features/post-call-analysis-overview' },
      { id: 'ai-qa', title: 'Retell AI docs: Evaluate call quality with AI QA', url: 'https://docs.retellai.com/ai-qa/overview' },
      { id: 'contacts', title: 'Retell AI docs: Contacts', url: 'https://docs.retellai.com/features/contacts' },
      { id: 'languages', title: 'Retell AI docs: Supported languages by provider', url: 'https://docs.retellai.com/build/language-support' },
      { id: 'compliance', title: 'Retell AI docs: Security and compliance', url: 'https://docs.retellai.com/general/compliance' },
    ],
  },
];

export const page = {
  slug: 'vapi-retell',
  competitors: ['vapi', 'retell'],
  label: { en: 'Vapi and Retell AI', ro: 'Vapi și Retell AI', ru: 'Vapi и Retell AI' },
  summary: {
    en: 'Voice-agent platforms with deep model and telephony choice, against AI voice agents on your own SIP with the CRM, inbox, chat channels, campaigns and call scoring around them.',
    ro: 'Platforme de agenți vocali cu multe opțiuni de modele și telefonie, față în față cu agenți vocali AI pe propriul SIP, cu CRM, inbox, canale de chat, campanii și evaluarea apelurilor în jurul lor.',
    ru: 'Платформы голосовых агентов с широким выбором моделей и телефонии — против ИИ-агентов на вашем SIP, вокруг которых уже есть CRM, inbox, чаты, кампании обзвона и оценка звонков.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Fineguide vs Vapi and Retell AI: a Vapi alternative',
    description: 'A Vapi and Retell AI alternative, compared on vendor pages: AI voice agents on your own SIP, chat channels, campaigns, call scoring, languages and data.',
    crumb: 'Vapi and Retell AI',
    h1: 'Fineguide vs Vapi and Retell AI:',
    h1Accent: 'voice agents with the CRM around them',
    shortAnswer:
      'Vapi and Retell AI are platforms for building AI voice agents. Vapi is developer-first, with APIs, SDKs and a choice of speech and language models; Retell adds a no-code flow builder, an outbound dialer and AI QA. Fineguide puts AI assistants on your own phone system (SIP) and on chat channels, inside a CRM with a team inbox, outbound call campaigns and Voice QA call scoring, all set up without code. Choose Vapi or Retell for voice-agent depth; choose Fineguide when calls belong on the same customer record as chats, emails and deals.',
    tableHeading: 'Vapi vs Retell AI vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Vapi and Retell AI are stronger',
      items: [
        {
          text: 'Voice depth and choice. Vapi lets you pick the transcriber, the model and the voice from providers such as OpenAI, Anthropic, Google, Deepgram and ElevenLabs, and splits complex calls across Squads of assistants. Retell builds agents from a single prompt or a conversation flow with nodes for dialogue, tools, transfers and code.',
          refs: ['vapi:intro', 'retell:intro'],
        },
        {
          text: 'More call languages. Vapi’s provider tables list 125+ languages for Google speech recognition and 140+ for Azure voices; Retell lists 57 voice languages and 55 for speech recognition. Fineguide’s AI calls run in 14.',
          refs: ['vapi:languages', 'retell:languages', 'fg:fg-voice-ai'],
        },
        {
          text: 'Telephony reach. Vapi imports numbers from Twilio, Telnyx and DIDWW, takes your own SIP trunk and connects contact-centre systems such as Genesys Cloud, Five9, Talkdesk and Amazon Connect. Retell sells US and Canada numbers in its dashboard and connects any provider over SIP trunking. Both also run SMS conversations.',
          refs: ['vapi:phone', 'vapi:phone-systems', 'vapi:sms', 'retell:intro', 'retell:telephony', 'retell:chat'],
        },
        {
          text: 'Testing and scale. Retell runs simulation tests and A/B tests that split live traffic between agents. Vapi states 1 billion calls supported and more than 1 million developers; Retell states more than 4,000 customers and 100 million calls a month.',
          refs: ['retell:intro', 'vapi:home', 'retell:home'],
        },
        {
          text: 'Compliance programmes. Vapi says it is SOC 2, HIPAA and PCI compliant and offers an EU region; Retell is HIPAA and GDPR compliant and SOC 2 Type 1 and Type 2 certified, with data retention set per agent.',
          refs: ['vapi:home', 'vapi:eu-region', 'retell:compliance'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        {
          text: 'Chat channels as well as calls. The same assistants answer in the website widget, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord and JivoChat. Retell says it has no built-in integrations with WhatsApp or Messenger; Vapi’s text chat runs in its web widget, over SMS and through its Chat API.',
          refs: ['fg:fg-assistants', 'fg:fg-llms', 'retell:chat', 'vapi:widget', 'vapi:sms'],
        },
        {
          text: 'A CRM and an inbox around every call. Callers already in the CRM are greeted by their first name, callback requests become CRM tasks, every call is kept as a transcript, and the contact’s deals, tasks and email threads sit on the same record. Vapi and Retell reach CRMs such as Salesforce and HubSpot through integrations.',
          refs: ['fg:fg-voice-ai', 'fg:fg-crm', 'fg:fg-messages', 'vapi:home', 'retell:home'],
        },
        {
          text: 'Scoring your team’s calls too. Voice QA transcribes the recorded calls of your human agents, from uploads, the API, a connected phone system or the Fineguide recording app for Android, and scores them against each department’s own rules and weights, with quotes and a suggestion for every rule, agent scorecards and reports in 30 languages.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'Campaigns built from the CRM. Outbound campaigns of three kinds (outreach, survey and promotion) take their audience from a CSV, existing contacts, tags or saved segments, with retries on no answer or busy, calling hours for each day of the week and a test call to your own number first.',
          refs: ['fg:fg-campaigns', 'fg:fg-llms'],
        },
        {
          text: 'Workflows that start from calls. On paid plans, a call received, transcribed or scored can start a workflow that raises a task, tags the contact or writes a summary on the record.',
          refs: ['fg:fg-automations'],
        },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Vapi or Retell AI if…',
        items: [
          'you are building a voice product and want to choose each speech, language and voice model yourself;',
          'you need calls in many more than 14 languages, SMS conversations, or numbers bought in the dashboard;',
          'you run HIPAA workloads or connect a large contact-centre platform such as Genesys or Five9;',
          'you want developer tooling around the agent: APIs, SDKs, simulations and A/B tests.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'your customers call you and also write on WhatsApp, Telegram, Instagram or your website;',
          'you want the CRM, the team inbox and outbound campaigns in the same place as the voice agent;',
          'you run a call centre and want your team’s recorded calls scored as well as the AI’s answered.',
        ],
      },
    },
    switching: {
      heading: 'Moving from Vapi or Retell AI',
      intro:
        'If your numbers live with your own carrier or phone system, they stay there: Fineguide answers over SIP, so the move is a change of routing rather than of numbers.',
      steps: [
        {
          title: 'Start on the Free plan',
          body: 'Create a Fineguide account (no card needed), give an assistant your website, documents and PDFs, and test it in the website chat widget.',
        },
        {
          title: 'Move the prompt and the tools',
          body: {
            text: 'Copy your agent’s instructions into the assistant’s persona and handoff rules, and rebuild each tool call as an action made from a pasted cURL command, with its keys kept as stored secrets.',
            refs: ['fg:fg-assistants', 'fg:fg-llms'],
          },
        },
        {
          title: 'Point your phone system at Fineguide',
          body: {
            text: 'Connect your PBX or SIP trunk, or a Twilio number over Elastic SIP Trunking, route the number to the assistant, and choose its voice and languages.',
            refs: ['fg:fg-voice-ai'],
          },
        },
        {
          title: 'Bring the contacts',
          body: {
            text: 'Import contacts into the CRM from CSV, TSV, XLS or XLSX, map the columns to your custom fields and review duplicates: a person confirms every merge.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Launch a campaign with a test call',
          body: {
            text: 'Build an outbound campaign from a CSV, contacts or tags, place a test call to your own number, then start it inside your calling hours.',
            refs: ['fg:fg-campaigns'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Is there a Vapi alternative that needs no code?',
        a: 'Fineguide is one: assistants, phone routing, campaigns and call scoring are set up in the Fineguide workspace, without an API. Vapi is built for developers first, though its dashboard and its Vapi for CX app also let you build a phone agent without coding, and Retell has a no-code conversation flow builder.',
        refs: ['vapi:intro', 'vapi:phone-systems', 'retell:home'],
      },
      {
        q: 'Does Retell AI have a CRM?',
        a: 'Retell keeps Contacts, records keyed by phone number with custom fields and conversation history, and syncs with CRMs such as Salesforce and HubSpot. Fineguide is itself a CRM, with companies, deals on a board or a table, tasks and a team inbox for chat and email.',
        refs: ['retell:contacts', 'retell:home', 'fg:fg-crm'],
      },
      {
        q: 'Can I use my own SIP trunk or phone numbers?',
        a: 'With all three. Fineguide’s assistants answer over your own phone system (SIP); Vapi takes your own SIP trunk or numbers imported from Twilio, Telnyx or DIDWW; Retell connects your provider over elastic SIP trunking or SIP URI dialing.',
        refs: ['fg:fg-voice-ai', 'vapi:phone', 'retell:telephony'],
      },
      {
        q: 'Which languages can the AI speak on calls?',
        a: 'Fineguide’s AI calls run in 14 languages: English, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Arabic, Japanese, Korean, Chinese, Romanian and Russian. Vapi and Retell depend on the speech providers you choose; Retell lists 57 voice languages and Vapi’s providers list more than 100.',
        refs: ['fg:fg-llms', 'retell:languages', 'vapi:languages'],
      },
      {
        q: 'Can the AI score phone calls?',
        a: 'Vapi analyses every call with a summary, structured data and a success evaluation; Retell scores call success and sentiment, and its AI QA checks sampled calls for hallucinations, knowledge-base accuracy and latency. Fineguide’s Voice QA scores your team’s recorded calls against each department’s own rules and weights.',
        refs: ['vapi:analysis', 'retell:extraction', 'retell:ai-qa', 'fg:fg-voice-qa'],
      },
      {
        q: 'Where do Vapi and Retell keep call data?',
        a: 'A Vapi organization sits in a US or an EU region. Retell says it does not currently operate services within the European Union, and lets you set retention per agent from 1 day to 2 years.',
        refs: ['vapi:eu-region', 'retell:compliance'],
      },
    ],
    closing: {
      heading: 'Hear an assistant on your own number',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough with your phone system.',
    },
    extraLinks: [
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
      { href: '/campaigns/', label: 'Outbound call campaigns' },
      { href: '/call-center/', label: 'Call center software' },
    ],
  },

  ro: {
    title: 'Fineguide vs Vapi și Retell AI: alternativă la Vapi',
    description: 'Alternativă la Vapi și Retell AI, comparată pe paginile oficiale: agenți vocali pe propriul SIP, canale de chat, campanii, evaluarea apelurilor și limbi.',
    crumb: 'Vapi și Retell AI',
    h1: 'Fineguide vs Vapi și Retell AI:',
    h1Accent: 'agenți vocali cu CRM-ul în jurul lor',
    shortAnswer:
      'Vapi și Retell AI sunt platforme pentru construit agenți vocali AI. Vapi e gândit întâi pentru dezvoltatori, cu API-uri, SDK-uri și modele de vorbire și de limbaj la alegere; Retell adaugă un editor de fluxuri fără cod, un dialer pentru apeluri efectuate și AI QA. Fineguide pune asistenți AI pe propria ta centrală telefonică (SIP) și pe canalele de chat, într-un CRM cu inbox de echipă, campanii de apeluri și evaluarea apelurilor cu Voice QA, totul configurat fără cod. Alege Vapi sau Retell pentru profunzime pe agenții vocali; alege Fineguide când apelurile trebuie să stea pe aceeași fișă de client cu chaturile, emailurile și tranzacțiile.',
    tableHeading: 'Vapi, Retell AI și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Vapi și Retell AI sunt mai puternice',
      items: [
        {
          text: 'Profunzime și alegere pe voce. Vapi te lasă să alegi transcrierea, modelul și vocea de la furnizori precum OpenAI, Anthropic, Google, Deepgram și ElevenLabs și împarte apelurile complexe între asistenții unui Squad. Retell construiește agenți dintr-un singur prompt sau dintr-un conversation flow cu noduri pentru dialog, unelte, transferuri și cod.',
          refs: ['vapi:intro', 'retell:intro'],
        },
        {
          text: 'Mai multe limbi pe apeluri. Tabelele Vapi listează peste 125 de limbi pentru recunoașterea vorbirii Google și peste 140 pentru vocile Azure; Retell listează 57 de limbi pentru voci și 55 pentru recunoașterea vorbirii. Apelurile AI Fineguide rulează în 14.',
          refs: ['vapi:languages', 'retell:languages', 'fg:fg-voice-ai'],
        },
        {
          text: 'Acoperire în telefonie. Vapi importă numere din Twilio, Telnyx și DIDWW, acceptă propriul trunchi SIP și conectează sisteme de contact center precum Genesys Cloud, Five9, Talkdesk și Amazon Connect. Retell vinde din dashboard numere din SUA și Canada și conectează orice furnizor prin SIP trunking. Ambele poartă și conversații prin SMS.',
          refs: ['vapi:phone', 'vapi:phone-systems', 'vapi:sms', 'retell:intro', 'retell:telephony', 'retell:chat'],
        },
        {
          text: 'Testare și scară. Retell rulează teste prin simulare și teste A/B care împart traficul real între agenți. Vapi declară 1 miliard de apeluri suportate și peste 1 milion de dezvoltatori; Retell, peste 4.000 de clienți și 100 de milioane de apeluri pe lună.',
          refs: ['retell:intro', 'vapi:home', 'retell:home'],
        },
        {
          text: 'Programe de conformitate. Vapi spune că respectă SOC 2, HIPAA și PCI și oferă o regiune UE; Retell respectă HIPAA și GDPR și are certificare SOC 2 Type 1 și Type 2, cu retenția datelor setată pe fiecare agent.',
          refs: ['vapi:home', 'vapi:eu-region', 'retell:compliance'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        {
          text: 'Canale de chat, nu doar apeluri. Aceiași asistenți răspund în widgetul de pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack, Discord și JivoChat. Retell spune că nu are integrări proprii cu WhatsApp sau Messenger; chatul text Vapi rulează în widgetul web, prin SMS și prin Chat API.',
          refs: ['fg:fg-assistants', 'fg:fg-llms', 'retell:chat', 'vapi:widget', 'vapi:sms'],
        },
        {
          text: 'CRM și inbox în jurul fiecărui apel. Cei care sună și sunt deja în CRM sunt salutați după prenume, cererile de revenire devin sarcini în CRM, fiecare apel rămâne ca transcriere, iar tranzacțiile, sarcinile și firele de email ale contactului stau pe aceeași fișă. Vapi și Retell ajung la CRM-uri precum Salesforce și HubSpot prin integrări.',
          refs: ['fg:fg-voice-ai', 'fg:fg-crm', 'fg:fg-messages', 'vapi:home', 'retell:home'],
        },
        {
          text: 'Evaluezi și apelurile echipei. Voice QA transcrie apelurile înregistrate ale operatorilor tăi, încărcate, trimise prin API, venite de la o centrală telefonică conectată sau din aplicația Fineguide de înregistrare pentru Android, și le notează după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă, fișe de scor pe operator și rapoarte în 30 de limbi.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'Campanii făcute din CRM. Campaniile de apeluri de trei tipuri (prospectare, sondaj și promoție) își iau publicul dintr-un CSV, din contactele existente, din etichete sau din segmente salvate, cu reîncercări când nu răspunde sau e ocupat, ore de apel pentru fiecare zi a săptămânii și un apel de test la propriul tău număr mai întâi.',
          refs: ['fg:fg-campaigns', 'fg:fg-llms'],
        },
        {
          text: 'Workflow-uri care pornesc de la apeluri. Pe planurile plătite, un apel primit, transcris sau evaluat poate porni un workflow care creează o sarcină, etichetează contactul sau scrie un rezumat pe fișă.',
          refs: ['fg:fg-automations'],
        },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege Vapi sau Retell AI dacă…',
        items: [
          'construiești un produs vocal și vrei să alegi singur fiecare model de vorbire, de limbaj și de voce;',
          'ai nevoie de apeluri în mult mai mult de 14 limbi, de conversații prin SMS sau de numere cumpărate din dashboard;',
          'lucrezi cu date medicale sub HIPAA sau conectezi o platformă mare de contact center, precum Genesys sau Five9;',
          'vrei unelte de dezvoltator în jurul agentului: API-uri, SDK-uri, simulări și teste A/B.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'clienții te sună și îți scriu și pe WhatsApp, Telegram, Instagram sau pe site;',
          'vrei CRM-ul, inboxul echipei și campaniile de apeluri în același loc cu agentul vocal;',
          'ai un call center și vrei să fie evaluate și apelurile înregistrate ale echipei, nu doar cele preluate de AI.',
        ],
      },
    },
    switching: {
      heading: 'Cum treci de la Vapi sau Retell AI',
      intro:
        'Dacă numerele tale sunt la propriul operator sau în propria centrală, rămân acolo: Fineguide răspunde prin SIP, așa că mutarea înseamnă o schimbare de rutare, nu de numere.',
      steps: [
        {
          title: 'Începe cu planul Free',
          body: 'Creează un cont Fineguide (fără card), dă-i unui asistent site-ul, documentele și PDF-urile tale și testează-l în widgetul de chat de pe site.',
        },
        {
          title: 'Mută promptul și uneltele',
          body: {
            text: 'Copiază instrucțiunile agentului în persona și regulile de predare ale asistentului și refă fiecare apel de unealtă ca acțiune creată dintr-o comandă cURL lipită, cu cheile păstrate ca secrete salvate.',
            refs: ['fg:fg-assistants', 'fg:fg-llms'],
          },
        },
        {
          title: 'Îndreaptă centrala spre Fineguide',
          body: {
            text: 'Conectează centrala (PBX) sau trunchiul SIP ori un număr Twilio prin Elastic SIP Trunking, direcționează numărul către asistent și alege-i vocea și limbile.',
            refs: ['fg:fg-voice-ai'],
          },
        },
        {
          title: 'Adu contactele',
          body: {
            text: 'Importă contactele în CRM din CSV, TSV, XLS sau XLSX, potrivește coloanele cu câmpurile personalizate și verifică duplicatele: fiecare unire o confirmă un om.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Pornește o campanie cu un apel de test',
          body: {
            text: 'Fă o campanie de apeluri dintr-un CSV, din contacte sau din etichete, dă un apel de test la propriul număr, apoi pornește-o în orele de apel stabilite.',
            refs: ['fg:fg-campaigns'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Există o alternativă la Vapi fără cod?',
        a: 'Fineguide este una: asistenții, rutarea apelurilor, campaniile și evaluarea apelurilor se configurează în workspace-ul Fineguide, fără API. Vapi e gândit întâi pentru dezvoltatori, deși dashboardul său și aplicația Vapi for CX te lasă să faci un agent telefonic fără cod, iar Retell are un editor de conversation flow fără cod.',
        refs: ['vapi:intro', 'vapi:phone-systems', 'retell:home'],
      },
      {
        q: 'Retell AI are CRM?',
        a: 'Retell păstrează Contacts, înregistrări identificate după numărul de telefon, cu câmpuri personalizate și istoricul conversațiilor, și se sincronizează cu CRM-uri precum Salesforce și HubSpot. Fineguide este el însuși un CRM, cu companii, tranzacții pe un panou sau într-un tabel, sarcini și un inbox de echipă pentru chat și email.',
        refs: ['retell:contacts', 'retell:home', 'fg:fg-crm'],
      },
      {
        q: 'Pot folosi propriul trunchi SIP sau propriile numere?',
        a: 'Cu toate trei. Asistenții Fineguide răspund prin propria ta centrală (SIP); Vapi acceptă propriul trunchi SIP sau numere importate din Twilio, Telnyx ori DIDWW; Retell îți conectează furnizorul prin elastic SIP trunking sau apelare la un SIP URI.',
        refs: ['fg:fg-voice-ai', 'vapi:phone', 'retell:telephony'],
      },
      {
        q: 'În ce limbi vorbește AI-ul la telefon?',
        a: 'Apelurile AI Fineguide rulează în 14 limbi: engleză, spaniolă, franceză, germană, italiană, portugheză, poloneză, turcă, arabă, japoneză, coreeană, chineză, română și rusă. La Vapi și Retell depinde de furnizorii de vorbire aleși; Retell listează 57 de limbi pentru voci, iar furnizorii Vapi peste 100.',
        refs: ['fg:fg-llms', 'retell:languages', 'vapi:languages'],
      },
      {
        q: 'Poate AI-ul să evalueze apelurile?',
        a: 'Vapi analizează fiecare apel, cu rezumat, date structurate și o evaluare a reușitei; Retell notează reușita și sentimentul, iar AI QA verifică un eșantion de apeluri pentru halucinații, acuratețea bazei de cunoștințe și latență. Voice QA de la Fineguide evaluează apelurile înregistrate ale echipei tale după regulile și ponderile fiecărui departament.',
        refs: ['vapi:analysis', 'retell:extraction', 'retell:ai-qa', 'fg:fg-voice-qa'],
      },
      {
        q: 'Unde își țin Vapi și Retell datele apelurilor?',
        a: 'O organizație Vapi stă într-o regiune din SUA sau din UE. Retell spune că nu operează în prezent servicii în Uniunea Europeană și te lasă să setezi retenția pe fiecare agent, de la 1 zi la 2 ani.',
        refs: ['vapi:eu-region', 'retell:compliance'],
      },
    ],
    closing: {
      heading: 'Ascultă un asistent pe propriul tău număr',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute cu centrala ta telefonică.',
    },
    extraLinks: [
      { href: '/ro/voice-ai/', label: 'Telefonie AI pe propria centrală' },
      { href: '/ro/campaigns/', label: 'Campanii de apeluri' },
      { href: '/ro/call-center/', label: 'Software pentru call center' },
    ],
  },

  ru: {
    title: 'Fineguide vs Vapi и Retell AI: альтернатива Vapi',
    description: 'Альтернатива Vapi и Retell AI: сравниваем ИИ-агентов на вашем SIP, мессенджеры, кампании обзвона, оценку звонков, языки и данные по официальным страницам.',
    crumb: 'Vapi и Retell AI',
    h1: 'Fineguide vs Vapi и Retell AI:',
    h1Accent: 'голосовые агенты вместе с CRM',
    shortAnswer:
      'Vapi и Retell AI — платформы для создания голосовых ИИ-агентов. Vapi ориентирован прежде всего на разработчиков: API, SDK и выбор моделей распознавания и генерации речи; у Retell есть конструктор сценариев без кода, дайлер для исходящих звонков и AI QA. Fineguide подключает ИИ-ассистентов к вашей телефонии (SIP) и к мессенджерам внутри CRM с общим inbox, кампаниями обзвона и оценкой звонков в Voice QA, и всё это настраивается без кода. Выбирайте Vapi или Retell ради глубины голосовых агентов; выбирайте Fineguide, когда звонки должны быть в той же карточке клиента, что и чаты, письма и сделки.',
    tableHeading: 'Vapi, Retell AI и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Vapi и Retell AI',
      items: [
        {
          text: 'Глубина и выбор в голосе. В Vapi распознавание речи, модель и голос выбираются у провайдеров вроде OpenAI, Anthropic, Google, Deepgram и ElevenLabs, а сложные звонки делятся между ассистентами в Squads. Retell собирает агентов на одном промпте или на conversation flow с узлами для диалога, инструментов, переводов и кода.',
          refs: ['vapi:intro', 'retell:intro'],
        },
        {
          text: 'Больше языков в звонках. В таблицах Vapi — 125+ языков для распознавания речи Google и 140+ для голосов Azure; у Retell — 57 языков для голосов и 55 для распознавания речи. ИИ-звонки Fineguide работают на 14 языках.',
          refs: ['vapi:languages', 'retell:languages', 'fg:fg-voice-ai'],
        },
        {
          text: 'Охват телефонии. Vapi импортирует номера из Twilio, Telnyx и DIDWW, принимает собственный SIP-транк и подключает контакт-центры вроде Genesys Cloud, Five9, Talkdesk и Amazon Connect. Retell продаёт номера США и Канады прямо в дашборде и подключает любого провайдера через SIP trunking. Оба также ведут диалоги по SMS.',
          refs: ['vapi:phone', 'vapi:phone-systems', 'vapi:sms', 'retell:intro', 'retell:telephony', 'retell:chat'],
        },
        {
          text: 'Тестирование и масштаб. Retell проводит тесты на симуляциях и A/B-тесты, которые делят живой трафик между агентами. Vapi заявляет 1 миллиард поддержанных звонков и более 1 миллиона разработчиков; Retell — более 4 000 клиентов и 100 миллионов звонков в месяц.',
          refs: ['retell:intro', 'vapi:home', 'retell:home'],
        },
        {
          text: 'Программы соответствия. Vapi сообщает о соответствии SOC 2, HIPAA и PCI и предлагает регион ЕС; Retell соответствует HIPAA и GDPR и сертифицирован по SOC 2 Type 1 и Type 2, срок хранения данных задаётся для каждого агента.',
          refs: ['vapi:home', 'vapi:eu-region', 'retell:compliance'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'В чём сильнее Fineguide',
      items: [
        {
          text: 'Мессенджеры, а не только звонки. Те же ассистенты отвечают в виджете на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack, Discord и JivoChat. Retell сообщает, что встроенных интеграций с WhatsApp и Messenger у него нет; текстовый чат Vapi работает в веб-виджете, по SMS и через Chat API.',
          refs: ['fg:fg-assistants', 'fg:fg-llms', 'retell:chat', 'vapi:widget', 'vapi:sms'],
        },
        {
          text: 'CRM и inbox вокруг каждого звонка. Звонящих, которые уже есть в CRM, ассистент приветствует по имени, просьбы перезвонить становятся задачами в CRM, каждый звонок сохраняется как расшифровка, а сделки, задачи и переписка контакта лежат в той же карточке. Vapi и Retell подключают CRM вроде Salesforce и HubSpot через интеграции.',
          refs: ['fg:fg-voice-ai', 'fg:fg-crm', 'fg:fg-messages', 'vapi:home', 'retell:home'],
        },
        {
          text: 'Оценка звонков команды тоже. Voice QA расшифровывает записанные звонки ваших сотрудников — загруженные, присланные через API, пришедшие из подключённой телефонии или из приложения Fineguide для записи звонков на Android — и оценивает их по правилам и весам каждого отдела, с цитатами и рекомендацией по каждому правилу, карточками оценок сотрудников и отчётами на 30 языках.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'Кампании прямо из CRM. Исходящие кампании трёх видов (привлечение, опрос и промо) берут аудиторию из CSV, существующих контактов, тегов или сохранённых сегментов, с повторами при «не ответил» или «занято», часами звонков на каждый день недели и тестовым звонком на ваш номер перед запуском.',
          refs: ['fg:fg-campaigns', 'fg:fg-llms'],
        },
        {
          text: 'Сценарии, которые запускаются звонками. На платных тарифах поступивший, расшифрованный или оценённый звонок может запустить сценарий, который ставит задачу, добавляет тег контакту или пишет саммари в карточку.',
          refs: ['fg:fg-automations'],
        },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Vapi или Retell AI, если…',
        items: [
          'вы делаете голосовой продукт и хотите сами выбирать каждую модель распознавания, генерации и голоса;',
          'вам нужны звонки на гораздо большем числе языков, чем 14, диалоги по SMS или номера, купленные прямо в дашборде;',
          'вы работаете с медицинскими данными по HIPAA или подключаете крупный контакт-центр вроде Genesys или Five9;',
          'вам нужны инструменты разработчика вокруг агента: API, SDK, симуляции и A/B-тесты.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'клиенты вам звонят и пишут в WhatsApp, Telegram, Instagram или на сайте;',
          'вы хотите, чтобы CRM, общий inbox и кампании обзвона были там же, где голосовой агент;',
          'у вас колл-центр, и нужно оценивать не только ответы ИИ, но и записанные звонки сотрудников.',
        ],
      },
    },
    switching: {
      heading: 'Как перейти с Vapi или Retell AI',
      intro:
        'Если ваши номера у вашего оператора или на вашей АТС, они там и остаются: Fineguide отвечает через SIP, поэтому переход — это смена маршрутизации, а не номеров.',
      steps: [
        {
          title: 'Начните с тарифа Free',
          body: 'Создайте аккаунт Fineguide (без карты), дайте ассистенту ваш сайт, документы и PDF и проверьте его в чат-виджете на сайте.',
        },
        {
          title: 'Перенесите промпт и инструменты',
          body: {
            text: 'Скопируйте инструкции агента в роль и правила передачи ассистента и пересоберите каждый вызов инструмента как действие из вставленной команды cURL, с ключами в сохранённых секретах.',
            refs: ['fg:fg-assistants', 'fg:fg-llms'],
          },
        },
        {
          title: 'Направьте телефонию на Fineguide',
          body: {
            text: 'Подключите АТС или SIP-транк либо номер Twilio через Elastic SIP Trunking, направьте номер на ассистента и выберите ему голос и языки.',
            refs: ['fg:fg-voice-ai'],
          },
        },
        {
          title: 'Перенесите контакты',
          body: {
            text: 'Импортируйте контакты в CRM из CSV, TSV, XLS или XLSX, сопоставьте колонки с пользовательскими полями и проверьте дубли: каждое объединение подтверждает человек.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Запустите кампанию с тестовым звонком',
          body: {
            text: 'Соберите кампанию обзвона из CSV, контактов или тегов, сделайте тестовый звонок на свой номер и запустите её в заданные часы звонков.',
            refs: ['fg:fg-campaigns'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Есть ли аналог Vapi без программирования?',
        a: 'Да, Fineguide: ассистенты, маршрутизация звонков, кампании и оценка звонков настраиваются в рабочем пространстве Fineguide, без API. Vapi рассчитан прежде всего на разработчиков, хотя его дашборд и приложение Vapi for CX позволяют собрать телефонного агента без кода, а у Retell есть конструктор conversation flow без кода.',
        refs: ['vapi:intro', 'vapi:phone-systems', 'retell:home'],
      },
      {
        q: 'Есть ли у Retell AI своя CRM?',
        a: 'У Retell есть Contacts — записи по номеру телефона с пользовательскими полями и историей разговоров — и синхронизация с CRM вроде Salesforce и HubSpot. Fineguide сам является CRM: компании, сделки на доске или в таблице, задачи и общий inbox для чатов и почты.',
        refs: ['retell:contacts', 'retell:home', 'fg:fg-crm'],
      },
      {
        q: 'Можно ли использовать свой SIP-транк или свои номера?',
        a: 'Во всех трёх. Ассистенты Fineguide отвечают через вашу телефонию (SIP); Vapi принимает собственный SIP-транк или номера, импортированные из Twilio, Telnyx или DIDWW; Retell подключает вашего провайдера через elastic SIP trunking или вызов на SIP URI.',
        refs: ['fg:fg-voice-ai', 'vapi:phone', 'retell:telephony'],
      },
      {
        q: 'На каких языках ИИ говорит по телефону?',
        a: 'ИИ-звонки Fineguide работают на 14 языках: английском, испанском, французском, немецком, итальянском, португальском, польском, турецком, арабском, японском, корейском, китайском, румынском и русском. У Vapi и Retell это зависит от выбранных провайдеров речи; Retell указывает 57 языков для голосов, провайдеры Vapi — больше 100.',
        refs: ['fg:fg-llms', 'retell:languages', 'vapi:languages'],
      },
      {
        q: 'Может ли ИИ оценивать звонки?',
        a: 'Vapi анализирует каждый звонок: саммари, структурированные данные и оценка успешности; Retell оценивает успешность и тональность, а AI QA проверяет выборку звонков на галлюцинации, точность по базе знаний и задержки. Voice QA в Fineguide оценивает записанные звонки ваших сотрудников по правилам и весам каждого отдела — это речевая аналитика для колл-центра.',
        refs: ['vapi:analysis', 'retell:extraction', 'retell:ai-qa', 'fg:fg-voice-qa'],
      },
      {
        q: 'Где Vapi и Retell хранят данные звонков?',
        a: 'Организация Vapi находится в регионе США или ЕС. Retell сообщает, что сейчас не размещает сервисы в Европейском союзе, и позволяет задать срок хранения для каждого агента — от 1 дня до 2 лет.',
        refs: ['vapi:eu-region', 'retell:compliance'],
      },
    ],
    closing: {
      heading: 'Послушайте ассистента на своём номере',
      body: 'Начните с тарифа Free, без карты, или запишитесь на 30-минутную демонстрацию на вашей телефонии.',
    },
    extraLinks: [
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
      { href: '/ru/campaigns/', label: 'Кампании обзвона' },
      { href: '/ru/call-center/', label: 'Программа для колл-центра' },
    ],
  },
};
