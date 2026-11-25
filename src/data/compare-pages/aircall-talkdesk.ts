// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
// No competitor prices, plans' prices, trials, free plans, minutes allowances or billing terms (owner rule 2026-10-22).
// Talkdesk's help centre (support.talkdesk.com) answered 403 to every read, so its interface languages and data
// location are left null rather than taken from anywhere else.

/** Aircall's data row, also its dataLocation. */
const aircallData = {
  en: 'Call recordings, voicemails, transcriptions and AI Assist insights are stored in the US (default), the EU (Frankfurt) or Australia (Sydney), set at sign-up from the phone number and not changeable later. Account data, call metadata, analytics and SMS and WhatsApp messages stay in the US in most cases.',
  ro: 'Înregistrările apelurilor, mesajele vocale, transcrierile și analizele AI Assist sunt stocate în SUA (implicit), în UE (Frankfurt) sau în Australia (Sydney); regiunea se stabilește la înregistrare după numărul de telefon și nu se mai poate schimba. Datele contului, metadatele apelurilor, analizele și mesajele SMS și WhatsApp rămân în cele mai multe cazuri în SUA.',
  ru: 'Записи звонков, голосовая почта, расшифровки и аналитика AI Assist хранятся в США (по умолчанию), в ЕС (Франкфурт) или в Австралии (Сидней); регион назначается при регистрации по номеру телефона и потом не меняется. Данные аккаунта, метаданные звонков, аналитика и сообщения SMS и WhatsApp в большинстве случаев остаются в США.',
  src: ['hosting'],
};

export const competitors = [
  {
    id: 'aircall',
    name: 'Aircall',
    url: 'https://aircall.io/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'AI Voice Agents answer inbound calls, call out when a lead arrives or an appointment approaches, and reply to SMS and WhatsApp, with live handoff to a rep. They work with or without an Aircall phone system and connect natively to HubSpot, Salesforce, Zendesk, Shopify, Stripe and Calendly. AI Assist adds call summaries, sentiment, key topics and call scoring; AI Assist Pro adds real-time coaching on live calls.',
        ro: 'AI Voice Agents răspund la apelurile primite, sună când apare un lead sau se apropie o programare și răspund la SMS și WhatsApp, cu predare în direct către un agent. Funcționează cu sau fără sistemul telefonic Aircall și se conectează nativ la HubSpot, Salesforce, Zendesk, Shopify, Stripe și Calendly. AI Assist adaugă rezumate de apel, sentiment, subiecte-cheie și evaluarea apelurilor; AI Assist Pro adaugă coaching în timp real pe apelurile în direct.',
        ru: 'AI Voice Agents принимают входящие звонки, сами звонят, когда приходит лид или приближается запись, и отвечают в SMS и WhatsApp, с передачей разговора сотруднику в реальном времени. Работают с телефонией Aircall и без неё, напрямую подключаются к HubSpot, Salesforce, Zendesk, Shopify, Stripe и Calendly. AI Assist добавляет саммари звонков, анализ тональности, ключевые темы и оценку звонков; AI Assist Pro — подсказки сотруднику в реальном времени во время звонка.',
        src: ['voice-agent', 'plans', 'assist-pro'],
      },
      channels: {
        en: 'Voice, SMS and MMS, WhatsApp and a shared inbox in one workspace. SMS is available in 14 countries across North America, Europe and Australia; WhatsApp comes with the WhatsApp in Aircall or AI Messaging Agents add-ons.',
        ro: 'Voce, SMS și MMS, WhatsApp și un inbox comun într-un singur spațiu de lucru. SMS-ul este disponibil în 14 țări din America de Nord, Europa și Australia; WhatsApp vine cu add-on-urile WhatsApp in Aircall sau AI Messaging Agents.',
        ru: 'Голос, SMS и MMS, WhatsApp и общий inbox в одном рабочем пространстве. SMS доступны в 14 странах Северной Америки, Европы и Австралии; WhatsApp подключается через дополнения WhatsApp in Aircall или AI Messaging Agents.',
        src: ['facts', 'plans'],
      },
      phone: {
        en: 'A cloud business phone system: local, toll-free and international numbers in more than 100 countries, IVR, call routing, skills-based routing, queues, a Power Dialer and click-to-dial. Smart routing and queue callback on Professional and Enterprise; call coaching and whispering on Professional.',
        ro: 'Un sistem telefonic de business în cloud: numere locale, gratuite și internaționale în peste 100 de țări, IVR, rutarea apelurilor, rutare după competențe, cozi de așteptare, Power Dialer și apelare dintr-un clic. Rutare inteligentă și revenire din coadă pe Professional și Enterprise; coaching și „whisper” pe apeluri pe Professional.',
        ru: 'Облачная бизнес-телефония: местные, бесплатные и международные номера более чем в 100 странах, IVR, маршрутизация звонков, в том числе по навыкам, очереди, Power Dialer и звонок в один клик. Умная маршрутизация и обратный звонок из очереди — на Professional и Enterprise; коучинг и суфлирование на звонке — на Professional.',
        src: ['facts', 'plans'],
      },
      callScoring: {
        en: 'Call scoring with scorecards that admins and supervisors build. AI Assist Standard scores predefined AI questions and does not support automated call scoring; custom AI questions and automated scoring need AI Assist Pro. Scoring is verified in 7 languages (English, French, Spanish, German, Dutch, Italian and Portuguese), with 17 more on a best-effort basis.',
        ro: 'Evaluarea apelurilor pe fișe de scor create de administratori și supervizori. AI Assist Standard evaluează întrebări AI predefinite și nu are evaluare automată a apelurilor; întrebările AI proprii și evaluarea automată cer AI Assist Pro. Evaluarea este verificată în 7 limbi (engleză, franceză, spaniolă, germană, olandeză, italiană și portugheză), iar alte 17 sunt oferite fără garanția aceleiași precizii.',
        ru: 'Оценка звонков по скоркартам, которые создают администраторы и супервайзеры. AI Assist Standard оценивает только готовые ИИ-вопросы и не поддерживает автоматическую оценку звонков; собственные ИИ-вопросы и автоматическая оценка требуют AI Assist Pro. Оценка проверена на 7 языках (английский, французский, испанский, немецкий, нидерландский, итальянский и португальский), ещё 17 поддерживаются без гарантии той же точности.',
        src: ['scoring', 'assist-pro'],
      },
      languages: {
        en: 'Dashboard in 7 languages: English (US), Spanish, French, German, Norwegian, Italian and Portuguese. AI Voice Agents speak 38 languages.',
        ro: 'Panoul de administrare (Dashboard), în 7 limbi: engleză (SUA), spaniolă, franceză, germană, norvegiană, italiană și portugheză. AI Voice Agents vorbesc 38 de limbi.',
        ru: 'Панель управления (Dashboard) на 7 языках: английский (США), испанский, французский, немецкий, норвежский, итальянский и португальский. AI Voice Agents говорят на 38 языках.',
        src: ['dashboard-language', 'voice-agent'],
      },
      data: aircallData,
    },
    // The help centre lists these for the Aircall Dashboard only; it says the setting does not change the Workspace app.
    uiLanguages: {
      list: ['English (US)', 'Spanish', 'French', 'German', 'Norwegian', 'Italian', 'Portuguese'],
      romanian: false,
      russian: false,
    },
    dataLocation: aircallData, // the same fact as facts.data, as compare.ts does
    reviewComplaints: [],
    sources: [
      { id: 'plans', title: 'Aircall: Plans and features', url: 'https://aircall.io/pricing/' },
      { id: 'voice-agent', title: 'Aircall: AI Voice Agent', url: 'https://aircall.io/products/ai/voice-agent/' },
      { id: 'assist-pro', title: 'Aircall: AI Assist Pro (conversation intelligence)', url: 'https://aircall.io/products/ai/ai-assist-pro/' },
      { id: 'scoring', title: 'Aircall Help Center: AI Assist, understanding call scoring', url: 'https://support.aircall.io/en-gb/articles/22662722946205' },
      { id: 'facts', title: 'Aircall: Official entity data and fact sheet', url: 'https://aircall.io/llm-info/' },
      { id: 'dashboard-language', title: 'Aircall Help Center: Changing the language of the Aircall Dashboard', url: 'https://support.aircall.io/en-gb/articles/10375395242397' },
      { id: 'hosting', title: 'Aircall: Regional data hosting', url: 'https://aircall.io/regional-data-hosting/' },
    ],
  },
  {
    id: 'talkdesk',
    name: 'Talkdesk',
    url: 'https://www.talkdesk.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'CXA AI: AI agents (Autopilot) for voice and digital channels in 59+ languages, which hand the customer to a human agent with context; Copilot helps agents during live interactions; Navigator prioritises incoming voice and digital inquiries; AI Gateway adds AI to on-premises contact centers.',
        ro: 'CXA AI: agenți AI (Autopilot) pe voce și canale digitale, în peste 59 de limbi, care predau clientul unui agent uman împreună cu contextul; Copilot îi ajută pe agenți în timpul interacțiunilor în direct; Navigator prioritizează solicitările primite pe voce și pe canalele digitale; AI Gateway adaugă AI în call centerele on-premise.',
        ru: 'CXA AI: ИИ-агенты (Autopilot) для голоса и цифровых каналов на 59+ языках, которые передают клиента оператору вместе с контекстом; Copilot помогает операторам во время живых обращений; Navigator расставляет приоритеты входящих голосовых и цифровых обращений; AI Gateway добавляет ИИ в колл-центры on-premise.',
        src: ['ai', 'autopilot'],
      },
      channels: {
        en: 'Email, chat, SMS, fax and social messaging such as Facebook Messenger and WhatsApp, plus custom channels through Digital Connect.',
        ro: 'Email, chat, SMS, fax și mesagerie socială, de exemplu Facebook Messenger și WhatsApp, plus canale proprii prin Digital Connect.',
        ru: 'Почта, чат, SMS, факс и соцсети-мессенджеры, например Facebook Messenger и WhatsApp, а также собственные каналы через Digital Connect.',
        src: ['digital', 'plans'],
      },
      phone: {
        en: 'A full cloud contact center: local and toll-free numbers or ported ones, provisioned in more than 160 countries; no-code voice flows in Studio, intelligent routing, ACD, an outbound dialer, call recording, and web, desktop and mobile apps for agents. 99.999% uptime SLA on Elite and the Industry Experience Clouds.',
        ro: 'Un call center complet în cloud: numere locale și gratuite sau portate, disponibile în peste 160 de țări; fluxuri vocale fără cod în Studio, rutare inteligentă, ACD, apelare automată, înregistrarea apelurilor și aplicații web, desktop și mobile pentru agenți. SLA de disponibilitate 99,999% pe Elite și pe Industry Experience Clouds.',
        ru: 'Полноценный облачный колл-центр: местные и бесплатные номера или перенос своих, более чем в 160 странах; голосовые сценарии без кода в Studio, интеллектуальная маршрутизация, ACD, автодозвон, запись звонков и веб-, десктопное и мобильное приложения для операторов. SLA доступности 99,999% на Elite и Industry Experience Clouds.',
        src: ['voice', 'reliability'],
      },
      callScoring: {
        en: 'Quality Management with AI-driven automation that evaluates 100% of interactions, custom evaluation forms or pre-built templates, audio and screen recording with omnichannel transcripts, and coaching. Interaction & Quality Analytics is part of CXA; Performance Management and Workforce Management are on Elite.',
        ro: 'Quality Management cu automatizare AI care evaluează 100% din interacțiuni, formulare de evaluare proprii sau șabloane gata făcute, înregistrare audio și a ecranului cu transcrieri omnicanal și coaching. Interaction & Quality Analytics face parte din CXA; Performance Management și Workforce Management sunt pe Elite.',
        ru: 'Quality Management: ИИ-автоматизация оценивает 100% обращений, есть собственные формы оценки или готовые шаблоны, запись звука и экрана с омниканальными расшифровками и коучинг. Interaction & Quality Analytics входит в CXA; Performance Management и Workforce Management — на Elite.',
        src: ['qm', 'ai', 'plans'],
      },
      languages: {
        en: 'Autopilot AI agents hold conversations in 59+ languages. We could not read an interface-language list on a Talkdesk page.',
        ro: 'Agenții AI Autopilot poartă conversații în peste 59 de limbi. Nu am putut citi o listă a limbilor de interfață pe o pagină Talkdesk.',
        ru: 'ИИ-агенты Autopilot ведут диалог на 59+ языках. Список языков интерфейса на страницах Talkdesk нам прочитать не удалось.',
        src: ['autopilot'],
      },
      data: null,
    },
    uiLanguages: null,
    dataLocation: null, // the reliability page counts eight points of presence but does not say where customer data is kept
    reviewComplaints: [],
    sources: [
      { id: 'plans', title: 'Talkdesk: Plans and features', url: 'https://www.talkdesk.com/pricing/' },
      { id: 'ai', title: 'Talkdesk: AI contact center platform (CXA)', url: 'https://www.talkdesk.com/contact-center-platform/ai/' },
      { id: 'autopilot', title: 'Talkdesk: AI Virtual Agent (Autopilot)', url: 'https://www.talkdesk.com/cloud-contact-center/self-service-experience/autopilot/' },
      { id: 'digital', title: 'Talkdesk: Digital customer engagement', url: 'https://www.talkdesk.com/cloud-contact-center/omnichannel-engagement/digital/' },
      { id: 'voice', title: 'Talkdesk: Talkdesk Voice', url: 'https://www.talkdesk.com/cloud-contact-center/omnichannel-engagement/voice/' },
      { id: 'reliability', title: 'Talkdesk: Reliability and availability', url: 'https://www.talkdesk.com/contact-center-platform/reliability-availability/' },
      { id: 'qm', title: 'Talkdesk: Quality Management', url: 'https://www.talkdesk.com/cloud-contact-center/wem/quality-management/' },
      { id: 'integrations', title: 'Talkdesk: Integrations', url: 'https://www.talkdesk.com/integrations/' },
    ],
  },
];

export const page = {
  slug: 'aircall-talkdesk',
  competitors: ['aircall', 'talkdesk'],
  label: { en: 'Aircall and Talkdesk', ro: 'Aircall și Talkdesk', ru: 'Aircall и Talkdesk' },
  summary: {
    en: 'A cloud phone system and a full cloud contact center, against AI voice agents, call scoring, a CRM and a team inbox on the phone system you already have.',
    ro: 'Un sistem telefonic în cloud și un call center complet în cloud, față de agenți vocali AI, evaluarea apelurilor, CRM și inbox de echipă pe centrala telefonică pe care o ai deja.',
    ru: 'Облачная телефония и полноценный облачный колл-центр против голосовых ИИ-агентов, оценки звонков, CRM и общего inbox на той телефонии, что у вас уже есть.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Aircall and Talkdesk alternative with AI voice agents',
    description:
      'An Aircall alternative and Talkdesk alternative, compared fact by fact: AI voice agents, call scoring, CRM, inbox and languages, from vendor pages.',
    crumb: 'Aircall and Talkdesk',
    h1: 'Fineguide vs Aircall and Talkdesk:',
    h1Accent: 'AI voice agents on the phone system you have',
    shortAnswer:
      'Aircall is a cloud phone system for sales and support teams, and Talkdesk a full cloud contact center; both sell numbers, call routing and AI of their own. Fineguide works on the phone line you already have: it puts AI voice agents on your carrier or PBX over SIP, scores recorded calls with Voice QA, and keeps a CRM and a team inbox on the same customer record. Choose Aircall or Talkdesk for the phone system itself; choose Fineguide for the AI, the call scoring and the customer record around your calls.',
    tableHeading: 'Aircall vs Talkdesk vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Aircall and Talkdesk are stronger',
      items: [
        {
          text: 'A phone system of their own. Aircall provides local, toll-free and international numbers in more than 100 countries, with IVR, smart routing, queue callback and a Power Dialer; Talkdesk provisions numbers in more than 160 countries, with no-code voice flows in Studio, intelligent routing, an outbound dialer and apps for agents. Fineguide connects to the carrier or PBX you already have.',
          refs: ['aircall:facts', 'aircall:plans', 'talkdesk:voice', 'talkdesk:reliability', 'fg:fg-voice-ai'],
        },
        {
          text: 'More AI voice languages. Aircall’s AI Voice Agents speak 38 languages and Talkdesk’s AI agents 59 and more; Fineguide’s AI calls run in 14.',
          refs: ['aircall:voice-agent', 'talkdesk:autopilot', 'fg:fg-llms'],
        },
        {
          text: 'Help for human agents on live calls. Aircall has call coaching and whispering on Professional and real-time AI coaching with AI Assist Pro; Talkdesk Copilot helps agents answer during live interactions.',
          refs: ['aircall:plans', 'aircall:assist-pro', 'talkdesk:ai'],
        },
        {
          text: 'Contact-center operations at scale. Talkdesk lists workforce management, performance management and screen recording on Elite, industry editions for sectors such as financial services, insurance and healthcare, and a 99.999% uptime SLA on Elite and the industry clouds.',
          refs: ['talkdesk:plans', 'talkdesk:reliability'],
        },
        {
          text: 'Integrations and a hosting choice. Aircall counts more than 250 integrations and can keep recordings and transcriptions in the EU or Australia; Talkdesk lists more than 60, including Salesforce, Zendesk, HubSpot, ServiceNow and Microsoft Dynamics 365.',
          refs: ['aircall:plans', 'aircall:hosting', 'talkdesk:integrations'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        {
          text: 'AI voice agents on the phone system you have. Fineguide connects to your carrier or PBX over standard SIP, so your numbers stay where they are; its AI voice agents answer inbound calls, run outbound campaigns, greet known callers by first name from the CRM, put a caller through to your team on request and save callback requests as CRM tasks. (Aircall says its AI Voice Agent also works without an Aircall phone system.)',
          refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'aircall:voice-agent'],
        },
        {
          text: 'Call scoring by your own rules, in 30 languages. Voice QA scores every recorded call against each department’s rules and weights, with the reasoning, quotes from the call and a suggestion for every rule, and writes its reports in 30 languages. Aircall’s call scoring is verified in 7 languages, and its custom AI questions and automated scoring need AI Assist Pro.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'aircall:scoring'],
        },
        {
          text: 'A CRM and a team inbox on the same record. Contacts, companies, deals and tasks live in Fineguide, next to one team inbox for nine chat channels and your own email. Aircall and Talkdesk connect to CRMs such as HubSpot and Salesforce.',
          refs: ['fg:fg-crm', 'fg:fg-messages', 'aircall:voice-agent', 'talkdesk:integrations'],
        },
        {
          text: 'One assistant on every channel. The assistant that answers the phone also answers in the website chat widget, on WhatsApp, Telegram, Instagram, Messenger, Slack and Discord, and inside JivoChat, amoCRM and Kommo, from the same knowledge. Aircall’s AI Messaging Agents cover SMS and WhatsApp.',
          refs: ['fg:fg-assistants', 'fg:fg-llms', 'aircall:plans'],
        },
        {
          text: 'A start on your own. Fineguide opens on the Free plan with no card, and the same credits pay for chat replies, AI calls and call scoring.',
          refs: ['fg:fg-pricing'],
        },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Aircall or Talkdesk if…',
        items: [
          'you need a business phone system with new numbers, IVR, queues and routing for a team of human agents;',
          'you run a large contact center that needs workforce management, screen recording or an industry edition (Talkdesk);',
          'your agents want live coaching or call whispering during calls;',
          'you need AI voice agents in more than 14 languages.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'you already have a carrier or PBX and want AI voice agents on it;',
          'you want every recorded call scored against your own rules, with reports in your managers’ language;',
          'you want calls, chats and email on one customer record, with the CRM built in.',
        ],
      },
    },
    switching: {
      heading: 'Moving calls to Fineguide',
      intro:
        'You can start with a single line. Each number rings the assistant you give it to, so the rest of your phone setup keeps working while you test.',
      steps: [
        {
          title: 'Start on the Free plan',
          body: 'Create a Fineguide account (no card needed), give an assistant your website and documents, and test it in the chat widget.',
        },
        {
          title: 'Connect your phone system',
          body: {
            text: 'Add your carrier or PBX with a standard SIP account or trunk and each line as a channel, then give each number to an assistant and set its languages, answering hours, transfer and callback options.',
            refs: ['fg:fg-voice-ai'],
          },
        },
        {
          title: 'Score your recorded calls',
          body: {
            text: 'Create departments with their own rules and weights, then send recordings by upload, through the API, from a connected phone system or from the Fineguide call-recording app for Android.',
            refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
          },
        },
        {
          title: 'Bring your contacts',
          body: {
            text: 'Import contacts from CSV, TSV, XLS or XLSX into the Fineguide CRM, map the columns to custom fields and review duplicates: a person confirms every merge.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Run outbound campaigns',
          body: {
            text: 'Build an audience from a CSV, CRM contacts or tags, place a test call to your own number, then launch an outreach, survey or promotion campaign.',
            refs: ['fg:fg-campaigns'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'What is a good Aircall alternative with AI voice agents?',
        a: 'It depends on whether you need a new phone system. If you do, Aircall and Talkdesk sell one, with AI of their own. If you already have a carrier or PBX, Fineguide puts AI voice agents on it over SIP and adds call scoring, a CRM and a team inbox.',
        refs: ['aircall:facts', 'talkdesk:voice', 'fg:fg-voice-ai'],
      },
      {
        q: 'Can an AI answer calls on my existing phone system?',
        a: 'Yes. Fineguide connects to your carrier or PBX with a standard SIP account or trunk, and its AI voice agents answer inbound calls and call out in campaigns, in 14 languages. Aircall also says its AI Voice Agent works with or without an Aircall phone system.',
        refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'aircall:voice-agent'],
      },
      {
        q: 'Does Aircall score calls automatically?',
        a: 'Aircall’s help centre says AI Assist Standard does not support automated call scoring, and that custom AI questions and automated scoring come with AI Assist Pro. Fineguide’s Voice QA scores every recorded call against the rules each department writes.',
        refs: ['aircall:scoring', 'fg:fg-voice-qa'],
      },
      {
        q: 'Which languages can AI phone calls use?',
        a: 'Fineguide’s AI calls run in 14 languages: English, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Arabic, Japanese, Korean, Chinese, Romanian and Russian, and Voice QA reports come in 30. Aircall lists 38 languages for its AI Voice Agents, and Talkdesk 59 and more for its AI agents.',
        refs: ['fg:fg-llms', 'aircall:voice-agent', 'talkdesk:autopilot'],
      },
      {
        q: 'Can I keep my phone numbers?',
        a: 'Yes. Fineguide works over SIP with the carrier or PBX you already use, so your numbers and carrier minutes stay with your carrier.',
        refs: ['fg:fg-voice-ai'],
      },
    ],
    closing: {
      heading: 'Put an AI voice agent on one of your lines',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your own calls.',
    },
    extraLinks: [
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
      { href: '/call-center/', label: 'Call center software with AI voice agents' },
      { href: '/campaigns/', label: 'Outbound call campaigns' },
    ],
  },

  ro: {
    title: 'Alternativă la Aircall și Talkdesk, cu agenți vocali AI',
    description:
      'Alternativă la Aircall și Talkdesk, comparată punct cu punct: agenți vocali AI, evaluarea apelurilor, CRM, inbox și limbi, verificate pe site-urile lor.',
    crumb: 'Aircall și Talkdesk',
    h1: 'Fineguide vs Aircall și Talkdesk:',
    h1Accent: 'agenți vocali AI pe centrala pe care o ai',
    shortAnswer:
      'Aircall este un sistem telefonic în cloud pentru echipele de vânzări și suport, iar Talkdesk un call center complet în cloud; amândouă oferă numere, rutarea apelurilor și AI propriu. Fineguide lucrează pe linia telefonică pe care o ai deja: pune agenți vocali AI pe operatorul sau centrala ta prin SIP, evaluează apelurile înregistrate cu Voice QA și ține CRM-ul și inboxul echipei pe aceeași fișă de client. Alege Aircall sau Talkdesk pentru sistemul telefonic în sine; alege Fineguide pentru AI, evaluarea apelurilor și fișa clientului din jurul apelurilor.',
    tableHeading: 'Aircall, Talkdesk și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Aircall și Talkdesk sunt mai puternice',
      items: [
        {
          text: 'Un sistem telefonic propriu. Aircall oferă numere locale, gratuite și internaționale în peste 100 de țări, cu IVR, rutare inteligentă, revenire din coadă și Power Dialer; Talkdesk oferă numere în peste 160 de țări, cu fluxuri vocale fără cod în Studio, rutare inteligentă, apelare automată și aplicații pentru agenți. Fineguide se conectează la operatorul sau centrala pe care le ai deja.',
          refs: ['aircall:facts', 'aircall:plans', 'talkdesk:voice', 'talkdesk:reliability', 'fg:fg-voice-ai'],
        },
        {
          text: 'Mai multe limbi pentru vocea AI. AI Voice Agents de la Aircall vorbesc 38 de limbi, iar agenții AI Talkdesk peste 59; apelurile AI Fineguide merg în 14.',
          refs: ['aircall:voice-agent', 'talkdesk:autopilot', 'fg:fg-llms'],
        },
        {
          text: 'Ajutor pentru operatori în timpul apelului. Aircall are coaching și „whisper” pe apeluri pe Professional și coaching AI în timp real cu AI Assist Pro; Talkdesk Copilot îi ajută pe agenți să răspundă în timpul interacțiunilor în direct.',
          refs: ['aircall:plans', 'aircall:assist-pro', 'talkdesk:ai'],
        },
        {
          text: 'Operațiuni de call center la scară mare. Talkdesk listează pe Elite managementul forței de muncă, managementul performanței și înregistrarea ecranului, ediții pe industrii (servicii financiare, asigurări, sănătate și altele) și un SLA de disponibilitate de 99,999% pe Elite și pe edițiile de industrie.',
          refs: ['talkdesk:plans', 'talkdesk:reliability'],
        },
        {
          text: 'Integrări și regiune de găzduire la alegere. Aircall numără peste 250 de integrări și poate păstra înregistrările și transcrierile în UE sau în Australia; Talkdesk listează peste 60, printre care Salesforce, Zendesk, HubSpot, ServiceNow și Microsoft Dynamics 365.',
          refs: ['aircall:plans', 'aircall:hosting', 'talkdesk:integrations'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        {
          text: 'Agenți vocali AI pe centrala pe care o ai. Fineguide se conectează la operatorul sau centrala ta prin SIP standard, așa că numerele rămân unde sunt; agenții vocali AI răspund la apelurile primite, derulează campanii de apeluri, îi salută pe apelanții cunoscuți pe prenume din CRM, transferă apelul la echipă la cerere și salvează cererile de revenire ca sarcini în CRM. (Aircall spune că AI Voice Agent funcționează și fără sistemul telefonic Aircall.)',
          refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'aircall:voice-agent'],
        },
        {
          text: 'Evaluarea apelurilor după regulile tale, cu rapoarte în 30 de limbi. Voice QA notează fiecare apel înregistrat după regulile și ponderile fiecărui departament, cu argumentarea, citate din apel și o sugestie pentru fiecare regulă, iar rapoartele vin în 30 de limbi. Evaluarea Aircall este verificată în 7 limbi, iar întrebările AI proprii și evaluarea automată cer AI Assist Pro.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'aircall:scoring'],
        },
        {
          text: 'CRM și inbox de echipă pe aceeași fișă. Contactele, companiile, tranzacțiile și sarcinile sunt în Fineguide, lângă un singur inbox de echipă pentru nouă canale de chat și emailul tău. Aircall și Talkdesk se conectează la CRM-uri precum HubSpot și Salesforce.',
          refs: ['fg:fg-crm', 'fg:fg-messages', 'aircall:voice-agent', 'talkdesk:integrations'],
        },
        {
          text: 'Același asistent pe toate canalele. Asistentul care răspunde la telefon răspunde și în widgetul de chat de pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack și Discord, precum și în JivoChat, amoCRM și Kommo, din aceleași cunoștințe. AI Messaging Agents de la Aircall acoperă SMS și WhatsApp.',
          refs: ['fg:fg-assistants', 'fg:fg-llms', 'aircall:plans'],
        },
        {
          text: 'Începi singur. Fineguide pornește cu planul Free, fără card, iar aceleași credite plătesc răspunsurile pe chat, apelurile AI și evaluarea apelurilor.',
          refs: ['fg:fg-pricing'],
        },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege Aircall sau Talkdesk dacă…',
        items: [
          'ai nevoie de un sistem telefonic de business cu numere noi, IVR, cozi și rutare pentru o echipă de operatori;',
          'ai un call center mare care cere managementul forței de muncă, înregistrarea ecranului sau o ediție pe industrie (Talkdesk);',
          'operatorii au nevoie de coaching în direct sau de „whisper” în timpul apelurilor;',
          'ai nevoie de agenți vocali AI în mai mult de 14 limbi.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'ai deja un operator sau o centrală telefonică și vrei agenți vocali AI pe ea;',
          'vrei ca fiecare apel înregistrat să fie evaluat după regulile tale, cu rapoarte în limba managerilor tăi;',
          'vrei apelurile, chaturile și emailul pe o singură fișă de client, cu CRM inclus.',
        ],
      },
    },
    switching: {
      heading: 'Cum muți apelurile în Fineguide',
      intro:
        'Poți începe cu o singură linie. Fiecare număr sună la asistentul căruia i-l dai, așa că restul telefoniei funcționează în continuare cât timp testezi.',
      steps: [
        {
          title: 'Începe cu planul Free',
          body: 'Creează un cont Fineguide (fără card), dă-i unui asistent site-ul și documentele tale și testează-l în widgetul de chat.',
        },
        {
          title: 'Conectează centrala telefonică',
          body: {
            text: 'Adaugă operatorul sau centrala cu un cont ori un trunchi SIP standard și fiecare linie ca un canal, apoi dă fiecare număr unui asistent și setează limbile, programul, transferul și opțiunile de revenire.',
            refs: ['fg:fg-voice-ai'],
          },
        },
        {
          title: 'Evaluează apelurile înregistrate',
          body: {
            text: 'Creează departamente cu reguli și ponderi proprii, apoi trimite înregistrările prin încărcare, prin API, de la o centrală conectată sau din aplicația Fineguide de înregistrare a apelurilor pentru Android.',
            refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
          },
        },
        {
          title: 'Adu-ți contactele',
          body: {
            text: 'Importă contactele din CSV, TSV, XLS sau XLSX în CRM-ul Fineguide, potrivește coloanele cu câmpurile personalizate și verifică duplicatele: fiecare unire o confirmă un om.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Pornește campanii de apeluri',
          body: {
            text: 'Construiește o audiență dintr-un CSV, din contactele CRM sau din etichete, fă un apel de test pe propriul număr, apoi lansează o campanie de prospectare, sondaj sau promoție.',
            refs: ['fg:fg-campaigns'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Care este o alternativă la Aircall cu agenți vocali AI?',
        a: 'Depinde dacă ai nevoie de un sistem telefonic nou. Dacă da, Aircall și Talkdesk îl oferă, cu AI propriu. Dacă ai deja un operator sau o centrală, Fineguide pune pe ea agenți vocali AI prin SIP și adaugă evaluarea apelurilor, CRM și inbox de echipă.',
        refs: ['aircall:facts', 'talkdesk:voice', 'fg:fg-voice-ai'],
      },
      {
        q: 'Poate un AI să răspundă la apeluri pe centrala mea actuală?',
        a: 'Da. Fineguide se conectează la operatorul sau centrala ta cu un cont ori un trunchi SIP standard, iar agenții vocali AI răspund la apelurile primite și sună în campanii, în 14 limbi. Și Aircall spune că AI Voice Agent funcționează cu sau fără sistemul telefonic Aircall.',
        refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'aircall:voice-agent'],
      },
      {
        q: 'Aircall evaluează apelurile automat?',
        a: 'Centrul de ajutor Aircall spune că AI Assist Standard nu are evaluare automată a apelurilor, iar întrebările AI proprii și evaluarea automată vin cu AI Assist Pro. Voice QA de la Fineguide notează fiecare apel înregistrat după regulile scrise de fiecare departament.',
        refs: ['aircall:scoring', 'fg:fg-voice-qa'],
      },
      {
        q: 'În ce limbi pot vorbi apelurile AI?',
        a: 'Apelurile AI Fineguide merg în 14 limbi: engleză, spaniolă, franceză, germană, italiană, portugheză, poloneză, turcă, arabă, japoneză, coreeană, chineză, română și rusă, iar rapoartele Voice QA vin în 30. Aircall listează 38 de limbi pentru AI Voice Agents, iar Talkdesk peste 59 pentru agenții săi AI.',
        refs: ['fg:fg-llms', 'aircall:voice-agent', 'talkdesk:autopilot'],
      },
      {
        q: 'Îmi pot păstra numerele de telefon?',
        a: 'Da. Fineguide lucrează prin SIP cu operatorul sau centrala pe care le folosești deja, așa că numerele și minutele rămân la operatorul tău.',
        refs: ['fg:fg-voice-ai'],
      },
    ],
    closing: {
      heading: 'Pune un agent vocal AI pe una dintre liniile tale',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe apelurile tale.',
    },
    extraLinks: [
      { href: '/ro/voice-ai/', label: 'Telefonia AI pe propria centrală' },
      { href: '/ro/call-center/', label: 'Software de call center cu agenți vocali AI' },
      { href: '/ro/campaigns/', label: 'Campanii de apeluri' },
    ],
  },

  ru: {
    title: 'Альтернатива Aircall и Talkdesk с голосовыми ИИ-агентами',
    description:
      'Альтернатива Aircall и Talkdesk: сравниваем голосовых ИИ-агентов, оценку звонков, CRM, inbox и языки по официальным страницам Aircall и Talkdesk.',
    crumb: 'Aircall и Talkdesk',
    h1: 'Fineguide vs Aircall и Talkdesk:',
    h1Accent: 'голосовые ИИ-агенты на вашей телефонии',
    shortAnswer:
      'Aircall — облачная телефония для отделов продаж и поддержки, Talkdesk — полноценный облачный колл-центр; оба продают номера, маршрутизацию звонков и собственный ИИ. Fineguide работает на той линии, что у вас уже есть: подключает голосовых ИИ-агентов к вашему оператору или АТС по SIP, оценивает записанные звонки в Voice QA и держит CRM и общий inbox команды в одной карточке клиента. Выбирайте Aircall или Talkdesk ради самой телефонии; выбирайте Fineguide ради ИИ, оценки звонков и карточки клиента вокруг звонков.',
    tableHeading: 'Aircall, Talkdesk и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Aircall и Talkdesk',
      items: [
        {
          text: 'Собственная телефония. Aircall даёт местные, бесплатные и международные номера более чем в 100 странах, с IVR, умной маршрутизацией, обратным звонком из очереди и Power Dialer; Talkdesk подключает номера более чем в 160 странах, с голосовыми сценариями без кода в Studio, интеллектуальной маршрутизацией, автодозвоном и приложениями для операторов. Fineguide подключается к оператору или АТС, которые у вас уже есть.',
          refs: ['aircall:facts', 'aircall:plans', 'talkdesk:voice', 'talkdesk:reliability', 'fg:fg-voice-ai'],
        },
        {
          text: 'Больше языков для голосового ИИ. AI Voice Agents от Aircall говорят на 38 языках, ИИ-агенты Talkdesk — на 59 и более; ИИ-звонки Fineguide — на 14.',
          refs: ['aircall:voice-agent', 'talkdesk:autopilot', 'fg:fg-llms'],
        },
        {
          text: 'Помощь операторам на живом звонке. У Aircall есть коучинг и суфлирование на звонке на Professional и ИИ-подсказки в реальном времени с AI Assist Pro; Talkdesk Copilot помогает операторам отвечать во время живых обращений.',
          refs: ['aircall:plans', 'aircall:assist-pro', 'talkdesk:ai'],
        },
        {
          text: 'Колл-центр большого масштаба. Talkdesk указывает на Elite управление персоналом (WFM), управление эффективностью и запись экрана, отраслевые редакции (финансы, страхование, здравоохранение и другие) и SLA доступности 99,999% на Elite и отраслевых редакциях.',
          refs: ['talkdesk:plans', 'talkdesk:reliability'],
        },
        {
          text: 'Интеграции и выбор региона хранения. У Aircall более 250 интеграций, а записи и расшифровки можно хранить в ЕС или Австралии; Talkdesk указывает более 60 интеграций, среди них Salesforce, Zendesk, HubSpot, ServiceNow и Microsoft Dynamics 365.',
          refs: ['aircall:plans', 'aircall:hosting', 'talkdesk:integrations'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'В чём сильнее Fineguide',
      items: [
        {
          text: 'Голосовые ИИ-агенты на вашей телефонии. Fineguide подключается к вашему оператору или АТС по стандартному SIP, номера остаются там, где были; голосовые ИИ-агенты принимают входящие звонки, ведут обзвоны, приветствуют знакомых клиентов по имени из CRM, по просьбе переводят звонок на сотрудника и сохраняют заявки на обратный звонок как задачи в CRM. (Aircall пишет, что его AI Voice Agent тоже работает без телефонии Aircall.)',
          refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'aircall:voice-agent'],
        },
        {
          text: 'Оценка звонков по вашим правилам, отчёты на 30 языках. Voice QA оценивает каждый записанный звонок по правилам и весам конкретного отдела, с обоснованием, цитатами из разговора и рекомендацией по каждому правилу, а отчёты выдаёт на 30 языках. Оценка звонков у Aircall проверена на 7 языках, а собственные ИИ-вопросы и автоматическая оценка требуют AI Assist Pro.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'aircall:scoring'],
        },
        {
          text: 'CRM и общий inbox в одной карточке. Контакты, компании, сделки и задачи ведутся в Fineguide, рядом с общим inbox команды для девяти чат-каналов и вашей почты. Aircall и Talkdesk подключаются к внешним CRM, например HubSpot и Salesforce.',
          refs: ['fg:fg-crm', 'fg:fg-messages', 'aircall:voice-agent', 'talkdesk:integrations'],
        },
        {
          text: 'Один ассистент во всех каналах. Ассистент, который отвечает по телефону, отвечает и в чат-виджете на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack и Discord, а также внутри JivoChat, amoCRM и Kommo, по тем же материалам. AI Messaging Agents от Aircall работают в SMS и WhatsApp.',
          refs: ['fg:fg-assistants', 'fg:fg-llms', 'aircall:plans'],
        },
        {
          text: 'Можно начать самому. Fineguide открывается на тарифе Free без карты, и одни и те же кредиты оплачивают ответы в чатах, ИИ-звонки и оценку звонков.',
          refs: ['fg:fg-pricing'],
        },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Aircall или Talkdesk, если…',
        items: [
          'вам нужна бизнес-телефония с новыми номерами, IVR, очередями и маршрутизацией для команды операторов;',
          'у вас большой колл-центр, которому нужны WFM, запись экрана или отраслевая редакция (Talkdesk);',
          'операторам нужны живые подсказки или суфлирование во время звонка;',
          'вам нужны голосовые ИИ-агенты больше чем на 14 языках.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'у вас уже есть оператор связи или АТС и вы хотите поставить на них голосовых ИИ-агентов;',
          'нужна оценка каждого записанного звонка по вашим правилам, с отчётами на языке ваших руководителей;',
          'вы хотите видеть звонки, чаты и почту в одной карточке клиента, со встроенной CRM.',
        ],
      },
    },
    switching: {
      heading: 'Как перевести звонки в Fineguide',
      intro:
        'Можно начать с одной линии. Каждый номер звонит тому ассистенту, которому вы его отдали, поэтому остальная телефония продолжает работать, пока вы тестируете.',
      steps: [
        {
          title: 'Начните с тарифа Free',
          body: 'Создайте аккаунт Fineguide (без карты), загрузите в ассистента свой сайт и документы и проверьте его в чат-виджете.',
        },
        {
          title: 'Подключите телефонию',
          body: {
            text: 'Добавьте оператора или АТС через стандартный SIP-аккаунт или транк, а каждую линию — как канал; затем отдайте каждый номер ассистенту и задайте языки, часы работы, перевод на сотрудника и обратный звонок.',
            refs: ['fg:fg-voice-ai'],
          },
        },
        {
          title: 'Оценивайте записанные звонки',
          body: {
            text: 'Создайте отделы со своими правилами и весами, затем отправляйте записи загрузкой, через API, из подключённой АТС или из приложения Fineguide для записи звонков на Android.',
            refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
          },
        },
        {
          title: 'Перенесите контакты',
          body: {
            text: 'Импортируйте контакты из CSV, TSV, XLS или XLSX в CRM Fineguide, сопоставьте колонки с вашими полями и проверьте дубли: каждое объединение подтверждает человек.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Запустите обзвоны',
          body: {
            text: 'Соберите аудиторию из CSV, контактов CRM или тегов, сделайте тестовый звонок на свой номер и запустите кампанию: привлечение, опрос или промо.',
            refs: ['fg:fg-campaigns'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Какая есть альтернатива Aircall с голосовыми ИИ-агентами?',
        a: 'Зависит от того, нужна ли вам новая телефония. Если да, Aircall и Talkdesk её продают, вместе со своим ИИ. Если оператор или АТС у вас уже есть, Fineguide подключает к ним голосовых ИИ-агентов по SIP и добавляет оценку звонков, CRM и общий inbox.',
        refs: ['aircall:facts', 'talkdesk:voice', 'fg:fg-voice-ai'],
      },
      {
        q: 'Может ли ИИ отвечать на звонки на моей текущей АТС?',
        a: 'Да. Fineguide подключается к вашему оператору или АТС через стандартный SIP-аккаунт или транк, а голосовые ИИ-агенты принимают входящие звонки и звонят в рамках обзвонов, на 14 языках. Aircall тоже пишет, что его AI Voice Agent работает как с телефонией Aircall, так и без неё.',
        refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'aircall:voice-agent'],
      },
      {
        q: 'Оценивает ли Aircall звонки автоматически?',
        a: 'В справке Aircall сказано, что AI Assist Standard не поддерживает автоматическую оценку звонков, а собственные ИИ-вопросы и автоматическая оценка есть в AI Assist Pro. Voice QA в Fineguide оценивает каждый записанный звонок по правилам, которые пишет каждый отдел.',
        refs: ['aircall:scoring', 'fg:fg-voice-qa'],
      },
      {
        q: 'На каких языках говорят ИИ-звонки?',
        a: 'ИИ-звонки Fineguide работают на 14 языках: английский, испанский, французский, немецкий, итальянский, португальский, польский, турецкий, арабский, японский, корейский, китайский, румынский и русский; отчёты Voice QA — на 30. Aircall указывает 38 языков для AI Voice Agents, Talkdesk — 59 и более для своих ИИ-агентов.',
        refs: ['fg:fg-llms', 'aircall:voice-agent', 'talkdesk:autopilot'],
      },
      {
        q: 'Можно ли сохранить свои номера телефонов?',
        a: 'Да. Fineguide работает по SIP с вашим оператором или АТС, поэтому номера и минуты остаются у вашего оператора связи.',
        refs: ['fg:fg-voice-ai'],
      },
    ],
    closing: {
      heading: 'Поставьте голосового ИИ-агента на одну из ваших линий',
      body: 'Начните с тарифа Free без карты или запишитесь на 30-минутную демонстрацию на ваших звонках.',
    },
    extraLinks: [
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
      { href: '/ru/call-center/', label: 'Софт для колл-центра с голосовыми ИИ-агентами' },
      { href: '/ru/campaigns/', label: 'Кампании обзвона' },
    ],
  },
};
