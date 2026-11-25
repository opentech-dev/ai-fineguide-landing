// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
// No competitor prices, plans' prices, trials, free plans or billing terms (owner rule 2026-10-22).
// CallMiner's language document (learning.callminer.com) did not show its language list to a reader, so the languages
// row uses the Analyze page's own words. Observe.AI states no language list on the pages read, so that row is null.

/** Observe.AI's data row, also its dataLocation. */
const observeData = {
  en: 'Data stored in your region: the US, Canada, the EU or Australia, in isolated storage for each tenant. PII, PCI and PHI are redacted from audio and transcripts before data reaches the model.',
  ro: 'Datele sunt stocate în regiunea ta: SUA, Canada, UE sau Australia, în spațiu de stocare izolat pentru fiecare client. Datele PII, PCI și PHI sunt eliminate din audio și transcrieri înainte să ajungă la model.',
  ru: 'Данные хранятся в вашем регионе: США, Канада, ЕС или Австралия, в изолированном хранилище для каждого клиента. Данные PII, PCI и PHI удаляются из аудио и расшифровок до того, как попадают в модель.',
  src: ['trust'],
};

export const competitors = [
  {
    id: 'callminer',
    name: 'CallMiner',
    url: 'https://callminer.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'The Eureka platform captures and analyses 100% of omnichannel interactions, with auto-scored insight for every interaction, sentiment on voice and text, and AI summaries. RealTime alerts agents and supervisors during calls and shows live AI summaries; OmniAgent virtual agents run inbound and outbound call flows (authentication, FAQs, routing, collections, surveys, reminders) and digital conversations.',
        ro: 'Platforma Eureka captează și analizează 100% din interacțiunile omnicanal, cu analiză notată automat pentru fiecare interacțiune, sentiment pe voce și text și rezumate AI. RealTime trimite alerte agenților și supervizorilor în timpul apelurilor și arată rezumate AI în direct; agenții virtuali OmniAgent derulează fluxuri de apeluri primite și efectuate (autentificare, întrebări frecvente, rutare, recuperare de datorii, sondaje, mementouri) și conversații digitale.',
        ru: 'Платформа Eureka собирает и анализирует 100% омниканальных обращений: автоматически оцененная аналитика по каждому обращению, тональность голоса и текста, ИИ-саммари. RealTime присылает оповещения операторам и супервайзерам во время звонка и показывает живые ИИ-саммари; виртуальные агенты OmniAgent ведут входящие и исходящие сценарии звонков (идентификация, частые вопросы, маршрутизация, взыскание долгов, опросы, напоминания) и цифровые диалоги.',
        src: ['home', 'analyze', 'realtime', 'omniagent'],
      },
      channels: {
        en: 'Analyses calls, emails, texts and surveys, as well as screen recordings; OmniAgent works on voice and digital channels.',
        ro: 'Analizează apeluri, emailuri, mesaje text și sondaje, precum și înregistrări ale ecranului; OmniAgent lucrează pe voce și pe canale digitale.',
        ru: 'Анализирует звонки, письма, текстовые сообщения и опросы, а также записи экрана; OmniAgent работает в голосовом и цифровых каналах.',
        src: ['home', 'eureka', 'omniagent'],
      },
      phone: {
        en: 'CallMiner Record works as a primary call recorder with many telephony, CRM and CX platforms, in cloud, on-premise or hybrid set-ups. RealTime supports more than 100,000 simultaneous interactions.',
        ro: 'CallMiner Record funcționează ca înregistrator principal de apeluri, cu multe platforme de telefonie, CRM și CX, în cloud, on-premise sau hibrid. RealTime suportă peste 100.000 de interacțiuni simultane.',
        ru: 'CallMiner Record работает как основной рекордер звонков с многими платформами телефонии, CRM и CX, в облаке, on-premise или гибридно. RealTime поддерживает более 100 000 одновременных обращений.',
        src: ['record', 'realtime'],
      },
      callScoring: {
        en: 'Fully automated quality forms for 100% of interactions, or a hybrid with manual scoring, on customised criteria; behaviour and event highlights in each interaction; coaching after the interaction or in real time; supervisor dashboards for agents and teams.',
        ro: 'Formulare de calitate complet automate pentru 100% din interacțiuni sau un mod hibrid cu evaluare manuală, după criterii personalizate; momentele de comportament și evenimentele evidențiate în fiecare interacțiune; coaching după interacțiune sau în timp real; panouri pentru supervizori pe agenți și echipe.',
        ru: 'Полностью автоматические формы оценки качества для 100% обращений или гибрид с ручной оценкой, по настраиваемым критериям; в каждом обращении выделены поведенческие моменты и события; коучинг после обращения или в реальном времени; дашборды супервайзера по операторам и командам.',
        src: ['qm', 'coach'],
      },
      languages: {
        en: 'Voice-to-text transcription in “hundreds of languages”, or with your own transcription engine; real-time multilingual translation.',
        ro: 'Transcriere voce-text în „sute de limbi” sau cu propriul motor de transcriere; traducere multilingvă în timp real.',
        ru: 'Перевод речи в текст на «сотнях языков» или на вашем собственном движке распознавания; многоязычный перевод в реальном времени.',
        src: ['analyze', 'home'],
      },
      data: {
        en: 'Record runs in cloud, on-premise or hybrid set-ups. The security page lists audits for SOC 2 Type II, FISMA, HITRUST, ISO 27001 and PCI DSS controls; it names no hosting region.',
        ro: 'Record funcționează în cloud, on-premise sau hibrid. Pagina de securitate listează audituri pentru controalele SOC 2 Type II, FISMA, HITRUST, ISO 27001 și PCI DSS; nu numește o regiune de găzduire.',
        ru: 'Record работает в облаке, on-premise или гибридно. На странице безопасности перечислены аудиты по SOC 2 Type II, FISMA, HITRUST, ISO 27001 и PCI DSS; регион размещения не указан.',
        src: ['record', 'security'],
      },
    },
    uiLanguages: null,
    dataLocation: null, // no CallMiner page we read says where customer data is kept
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'CallMiner: AI-powered conversation intelligence (home page)', url: 'https://callminer.com/' },
      { id: 'eureka', title: 'CallMiner: Eureka platform', url: 'https://callminer.com/products/eureka' },
      { id: 'analyze', title: 'CallMiner: Analyze', url: 'https://callminer.com/products/analyze' },
      { id: 'realtime', title: 'CallMiner: RealTime', url: 'https://callminer.com/products/realtime' },
      { id: 'omniagent', title: 'CallMiner: OmniAgent virtual agent', url: 'https://callminer.com/products/omniagent-virtual-agent' },
      { id: 'qm', title: 'CallMiner: Quality management', url: 'https://callminer.com/solutions/quality-management' },
      { id: 'coach', title: 'CallMiner: Coach', url: 'https://callminer.com/products/coach' },
      { id: 'record', title: 'CallMiner: Record', url: 'https://callminer.com/products/record' },
      { id: 'redact', title: 'CallMiner: Redact', url: 'https://callminer.com/products/redact' },
      { id: 'integrations', title: 'CallMiner: Integrations', url: 'https://callminer.com/products/integrations' },
      { id: 'security', title: 'CallMiner: Security', url: 'https://callminer.com/our-company-security' },
    ],
  },
  {
    id: 'observe-ai',
    name: 'Observe.AI',
    url: 'https://www.observe.ai/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'Voice AI agents on inbound and outbound calls, with 12+ action types (authenticate, look up, update, refund, schedule) and live transfer to a person with full context; Chat AI agents; the Companion agent recommends the next best action and checks compliance during live conversations.',
        ro: 'Agenți Voice AI pe apeluri primite și efectuate, cu peste 12 tipuri de acțiuni (autentificare, căutare, actualizare, rambursare, programare) și transfer în direct către un om, cu tot contextul; agenți Chat AI; agentul Companion recomandă următorul pas și verifică respectarea regulilor în timpul conversațiilor în direct.',
        ru: 'Голосовые ИИ-агенты (Voice AI) на входящих и исходящих звонках, с 12+ типами действий (идентификация, поиск, обновление, возврат, запись) и живым переводом на человека со всем контекстом; чат-агенты Chat AI; агент Companion подсказывает следующий шаг и следит за соблюдением правил во время живого разговора.',
        src: ['voice-ai', 'chat-ai', 'companion'],
      },
      channels: {
        en: 'Voice and chat: a web chat embed, SMS and RCS, app and social channels. Case Management keeps voice, chat and email under one case.',
        ro: 'Voce și chat: chat încorporat pe site, SMS și RCS, canale în aplicații și rețele sociale. Case Management ține vocea, chatul și emailul în același caz.',
        ru: 'Голос и чат: встраиваемый веб-чат, SMS и RCS, каналы в приложениях и соцсетях. Case Management объединяет голос, чат и почту в одном обращении.',
        src: ['chat-ai', 'ii'],
      },
      phone: {
        en: 'Connects to your telephony and CCaaS through the Integration Fabric: 250+ integrations, with Amazon Connect and Avaya among the CCaaS platforms listed.',
        ro: 'Se conectează la telefonia și platforma ta CCaaS prin Integration Fabric: peste 250 de integrări, printre platformele CCaaS listate fiind Amazon Connect și Avaya.',
        ru: 'Подключается к вашей телефонии и CCaaS через Integration Fabric: 250+ интеграций, среди CCaaS-платформ указаны Amazon Connect и Avaya.',
        src: ['voice-ai', 'integrations'],
      },
      callScoring: {
        en: 'Auto QA scores 100% of calls and chats against your rubric and existing scorecards, each line citing the moment it happened; signals include intent, sentiment, entities and outcomes. Conversations handled by AI and by people are both evaluated, and the results feed coaching.',
        ro: 'Auto QA notează 100% din apeluri și chaturi după grila și fișele de scor pe care le ai, fiecare rând indicând momentul din conversație; semnalele includ intenția, sentimentul, entitățile și rezultatele. Sunt evaluate și conversațiile purtate de AI, și cele purtate de oameni, iar rezultatele alimentează coachingul.',
        ru: 'Auto QA оценивает 100% звонков и чатов по вашей рубрике и существующим скоркартам, каждая строка ссылается на момент разговора; среди сигналов — намерение, тональность, сущности и результат. Оцениваются и разговоры ИИ, и разговоры людей, а результаты идут в коучинг.',
        src: ['ii', 'home'],
      },
      languages: null,
      data: observeData,
    },
    uiLanguages: null,
    dataLocation: observeData, // the same fact as facts.data, as compare.ts does
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'Observe.AI: Agentic CX platform (home page, with FAQ)', url: 'https://www.observe.ai/' },
      { id: 'voice-ai', title: 'Observe.AI: Voice AI agents', url: 'https://www.observe.ai/ai-agents/for-customers/voice-ai' },
      { id: 'chat-ai', title: 'Observe.AI: Chat AI agents', url: 'https://www.observe.ai/ai-agents/for-customers/chat-ai' },
      { id: 'companion', title: 'Observe.AI: Companion agent', url: 'https://www.observe.ai/ai-agents/for-frontline/companion-agent' },
      { id: 'ii', title: 'Observe.AI: Interaction Intelligence (Auto QA)', url: 'https://www.observe.ai/platform/interaction-intelligence' },
      { id: 'integrations', title: 'Observe.AI: Integrations', url: 'https://www.observe.ai/platform/integrations' },
      { id: 'trust', title: 'Observe.AI: Trust, security and responsible AI', url: 'https://www.observe.ai/platform/trust-security-responsible-ai' },
    ],
  },
];

export const page = {
  slug: 'callminer-observe-ai',
  competitors: ['callminer', 'observe-ai'],
  label: { en: 'CallMiner and Observe.AI', ro: 'CallMiner și Observe.AI', ru: 'CallMiner и Observe.AI' },
  summary: {
    en: 'Conversation intelligence across every channel for large contact centers, against call scoring by each department’s own rules, beside a CRM and AI agents for chat and phone.',
    ro: 'Conversation intelligence pe toate canalele pentru call centere mari, față de evaluarea apelurilor după regulile fiecărui departament, alături de CRM și agenți AI pentru chat și telefon.',
    ru: 'Речевая аналитика по всем каналам для крупных колл-центров против оценки звонков по правилам каждого отдела рядом с CRM и ИИ-агентами для чатов и звонков.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'CallMiner and Observe.AI alternative for call QA scoring',
    description:
      'A CallMiner alternative and Observe.AI alternative, compared fact by fact: automated call scoring, AI agents, languages and data, from vendor pages.',
    crumb: 'CallMiner and Observe.AI',
    h1: 'Fineguide vs CallMiner and Observe.AI:',
    h1Accent: 'every call scored by your own rules',
    shortAnswer:
      'CallMiner and Observe.AI are conversation-intelligence platforms for large contact centers: they analyse calls, chats and other interactions, guide agents in real time and run AI agents of their own. Fineguide’s Voice QA scores every recorded call against each department’s own rules, with quotes from the call and a suggestion for every rule, and writes reports in 30 languages; a CRM, a team inbox and AI agents for chat and phone sit on the same platform. Choose CallMiner or Observe.AI for omnichannel analytics at enterprise scale; choose Fineguide to start scoring calls yourself, next to the rest of your customer work.',
    tableHeading: 'CallMiner vs Observe.AI vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where CallMiner and Observe.AI are stronger',
      items: [
        {
          text: 'Every channel, not only calls. CallMiner analyses calls, emails, texts, surveys and screen recordings; Observe.AI scores calls and chats and keeps voice, chat and email under one case. Fineguide’s Voice QA scores phone calls.',
          refs: ['callminer:home', 'callminer:eureka', 'observe-ai:ii', 'fg:fg-voice-qa'],
        },
        {
          text: 'Guidance on live calls. CallMiner RealTime sends desktop alerts and live AI summaries to agents and supervisors and supports more than 100,000 simultaneous interactions; Observe.AI’s Companion agent recommends the next best action and checks compliance as the conversation unfolds.',
          refs: ['callminer:realtime', 'observe-ai:companion'],
        },
        {
          text: 'Compliance tooling. CallMiner Redact removes PCI, PII and PHI data from audio, transcripts and text channels, and its security page lists SOC 2 Type II, HITRUST, ISO 27001 and PCI DSS audits; Observe.AI redacts PII, PCI and PHI before data reaches the model.',
          refs: ['callminer:redact', 'callminer:security', 'observe-ai:trust'],
        },
        {
          text: 'Range of languages, deployments and integrations. CallMiner transcribes in hundreds of languages, can use your own transcription engine and records in cloud, on-premise or hybrid set-ups; Observe.AI keeps data in the US, Canada, the EU or Australia and lists more than 250 integrations.',
          refs: ['callminer:analyze', 'callminer:record', 'observe-ai:trust', 'observe-ai:integrations'],
        },
        {
          text: 'Analyst recognition. CallMiner was named a Leader in The Forrester Wave for Conversation Intelligence for Contact Centers (Q2 2025).',
          refs: ['callminer:home'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        {
          text: 'Rules each department writes. Voice QA scores every recorded call against each department’s own rules and weights and returns the reasoning, quotes from the call and a suggestion for every rule, with agent scorecards and dashboards by department, agent and rule.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'Reports in 30 languages. Each department picks its report language from 30, from Arabic, Bengali and Chinese to Spanish, Turkish and Vietnamese, so every manager reads the scores in their own language.',
          refs: ['fg:fg-llms'],
        },
        {
          text: 'Recordings arrive the way you already have them. Upload them, post them through the API, or let them come in on their own from a connected phone system or the Fineguide call-recording app for Android; results can go on to a webhook, amoCRM or Kommo.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'More than analytics. The same platform has a CRM, one team inbox for chat and email, AI assistants that answer chats and live phone calls over your own SIP, and outbound call campaigns, so a low score can be followed up on the customer’s own record.',
          refs: ['fg:fg-crm', 'fg:fg-messages', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
        },
        {
          text: 'A start on your own. Fineguide opens on the Free plan with no card, and call scoring runs on the same credits as chat replies and AI calls.',
          refs: ['fg:fg-pricing'],
        },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose CallMiner or Observe.AI if…',
        items: [
          'you run a large contact center and want calls, chats, email and surveys analysed in one place;',
          'your agents need live guidance and compliance alerts during calls;',
          'you need card and health data redacted, with audited compliance controls;',
          'you want data kept in a chosen region (Observe.AI) or a hybrid or on-premise recorder (CallMiner).',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'you want every recorded call scored against checklists your own managers write, department by department;',
          'your managers want reports in their own language, with 30 to choose from;',
          'you also want a CRM, a team inbox and AI agents for chat and phone on the same platform.',
        ],
      },
    },
    switching: {
      heading: 'Switching from CallMiner or Observe.AI',
      intro:
        'Start with one department. Write its rules, send it a week of recordings and compare the scores with your current QA before you move the rest.',
      steps: [
        {
          title: 'Start on the Free plan',
          body: { text: 'Create a Fineguide account (no card needed); call scoring uses your plan’s credits.', refs: ['fg:fg-pricing'] },
        },
        {
          title: 'Set up departments and rules',
          body: {
            text: 'Create a department for each team, write its rules, give each rule a weight and pick the report language.',
            refs: ['fg:fg-voice-qa'],
          },
        },
        {
          title: 'Send the recordings',
          body: {
            text: 'Upload recordings, post them through the API, connect your phone system, or install the Fineguide call-recording app for Android on your agents’ phones.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Send results where you work',
          body: { text: 'Push scores to a webhook, amoCRM or Kommo, or follow them up in the Fineguide CRM.', refs: ['fg:fg-llms'] },
        },
        {
          title: 'Add AI on the phone and in chat',
          body: {
            text: 'Connect your carrier or PBX over SIP so AI voice agents answer and place calls, and put the same assistants on your website chat and messaging apps.',
            refs: ['fg:fg-voice-ai', 'fg:fg-assistants'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'What is a CallMiner alternative for smaller teams?',
        a: 'A call-scoring tool you can set up yourself. Fineguide’s Voice QA starts on the Free plan: write each department’s rules, send recordings, and every call is scored with quotes and a suggestion for each rule. CallMiner and Observe.AI cover more channels and add real-time guidance for large contact centers.',
        refs: ['fg:fg-voice-qa', 'fg:fg-pricing', 'callminer:home', 'observe-ai:home'],
      },
      {
        q: 'Can AI score every call against my own checklist?',
        a: 'Yes. In Fineguide each department writes its own rules and weights, and Voice QA scores every recorded call against them, with the reasoning, quotes from the call and a suggestion for each rule. Observe.AI’s Auto QA also scores against your rubric and scorecards, and CallMiner offers fully automated or hybrid quality forms.',
        refs: ['fg:fg-voice-qa', 'observe-ai:ii', 'callminer:qm'],
      },
      {
        q: 'In which languages are the call QA reports?',
        a: 'Fineguide writes Voice QA reports in 30 languages, from Arabic and Bengali to Urdu and Vietnamese. CallMiner says it transcribes in hundreds of languages; we found no language list on the Observe.AI pages we checked.',
        refs: ['fg:fg-llms', 'callminer:analyze'],
      },
      {
        q: 'Does Observe.AI have AI voice agents?',
        a: 'Yes. Observe.AI’s Voice AI works on inbound and outbound calls, with more than 12 action types and live transfer to a person, and CallMiner OmniAgent runs inbound and outbound call flows. Fineguide’s AI voice agents answer and place calls over your own SIP in 14 languages and run outbound campaigns.',
        refs: ['observe-ai:voice-ai', 'callminer:omniagent', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
      },
      {
        q: 'How do I send call recordings to Fineguide?',
        a: 'Upload them, post them through the API, or have them arrive on their own from a connected phone system or the Fineguide call-recording app for Android.',
        refs: ['fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Score a week of your calls',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your own recordings.',
    },
    extraLinks: [
      { href: '/call-center/', label: 'Call center software with AI voice agents' },
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
    ],
  },

  ro: {
    title: 'Alternativă la CallMiner și Observe.AI: evaluarea apelurilor',
    description:
      'Alternativă la CallMiner și Observe.AI, comparată punct cu punct: evaluarea automată a apelurilor, agenți AI, limbi și date, verificate pe site-urile lor.',
    crumb: 'CallMiner și Observe.AI',
    h1: 'Fineguide vs CallMiner și Observe.AI:',
    h1Accent: 'fiecare apel evaluat după regulile tale',
    shortAnswer:
      'CallMiner și Observe.AI sunt platforme de conversation intelligence pentru call centere mari: analizează apeluri, chaturi și alte interacțiuni, ghidează agenții în timp real și au agenți AI proprii. Voice QA de la Fineguide notează fiecare apel înregistrat după regulile fiecărui departament, cu citate din apel și o sugestie pentru fiecare regulă, și scrie rapoarte în 30 de limbi; pe aceeași platformă sunt CRM-ul, inboxul echipei și agenții AI pentru chat și telefon. Alege CallMiner sau Observe.AI pentru analiză omnicanal la scară de enterprise; alege Fineguide ca să începi singur evaluarea apelurilor, lângă restul muncii cu clienții.',
    tableHeading: 'CallMiner, Observe.AI și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde CallMiner și Observe.AI sunt mai puternice',
      items: [
        {
          text: 'Toate canalele, nu doar apelurile. CallMiner analizează apeluri, emailuri, mesaje text, sondaje și înregistrări ale ecranului; Observe.AI notează apeluri și chaturi și ține vocea, chatul și emailul în același caz. Voice QA de la Fineguide evaluează apelurile telefonice.',
          refs: ['callminer:home', 'callminer:eureka', 'observe-ai:ii', 'fg:fg-voice-qa'],
        },
        {
          text: 'Ghidare în timpul apelului. CallMiner RealTime trimite alerte pe desktop și rezumate AI în direct agenților și supervizorilor și suportă peste 100.000 de interacțiuni simultane; agentul Companion de la Observe.AI recomandă următorul pas și verifică respectarea regulilor pe parcursul conversației.',
          refs: ['callminer:realtime', 'observe-ai:companion'],
        },
        {
          text: 'Unelte de conformitate. CallMiner Redact elimină datele PCI, PII și PHI din audio, transcrieri și canalele text, iar pagina de securitate listează audituri SOC 2 Type II, HITRUST, ISO 27001 și PCI DSS; Observe.AI elimină datele PII, PCI și PHI înainte să ajungă la model.',
          refs: ['callminer:redact', 'callminer:security', 'observe-ai:trust'],
        },
        {
          text: 'Gamă largă de limbi, instalări și integrări. CallMiner transcrie în sute de limbi, poate folosi propriul tău motor de transcriere și înregistrează în cloud, on-premise sau hibrid; Observe.AI păstrează datele în SUA, Canada, UE sau Australia și listează peste 250 de integrări.',
          refs: ['callminer:analyze', 'callminer:record', 'observe-ai:trust', 'observe-ai:integrations'],
        },
        {
          text: 'Recunoaștere din partea analiștilor. CallMiner a fost numit Leader în The Forrester Wave pentru Conversation Intelligence for Contact Centers (T2 2025).',
          refs: ['callminer:home'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        {
          text: 'Reguli scrise de fiecare departament. Voice QA notează fiecare apel înregistrat după regulile și ponderile fiecărui departament și dă argumentarea, citate din apel și o sugestie pentru fiecare regulă, cu fișe de scor pe operator și panouri pe departament, operator și regulă.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'Rapoarte în 30 de limbi. Fiecare departament își alege limba rapoartelor din 30, de la arabă, bengali și chineză la spaniolă, turcă și vietnameză, așa că fiecare manager citește scorurile în limba lui.',
          refs: ['fg:fg-llms'],
        },
        {
          text: 'Înregistrările vin așa cum le ai deja. Le încarci, le trimiți prin API sau vin singure de la o centrală telefonică conectată ori din aplicația Fineguide de înregistrare a apelurilor pentru Android; rezultatele pot merge mai departe într-un webhook, în amoCRM sau în Kommo.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'Mai mult decât analiză. Pe aceeași platformă ai CRM, un inbox de echipă pentru chat și email, asistenți AI care răspund pe chat și la apeluri în direct prin SIP-ul tău și campanii de apeluri, așa că un scor slab poate fi urmărit direct pe fișa clientului.',
          refs: ['fg:fg-crm', 'fg:fg-messages', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
        },
        {
          text: 'Începi singur. Fineguide pornește cu planul Free, fără card, iar evaluarea apelurilor folosește aceleași credite ca răspunsurile pe chat și apelurile AI.',
          refs: ['fg:fg-pricing'],
        },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege CallMiner sau Observe.AI dacă…',
        items: [
          'ai un call center mare și vrei apelurile, chaturile, emailurile și sondajele analizate într-un singur loc;',
          'agenții au nevoie de ghidare și alerte de conformitate în timpul apelurilor;',
          'trebuie să elimini datele de card și de sănătate, cu controale de conformitate auditate;',
          'vrei datele într-o regiune aleasă (Observe.AI) sau un înregistrator hibrid ori on-premise (CallMiner).',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'vrei ca fiecare apel înregistrat să fie notat după listele de verificare scrise de managerii tăi, departament cu departament;',
          'managerii vor rapoarte în limba lor, din 30 de limbi;',
          'vrei și CRM, inbox de echipă și agenți AI pentru chat și telefon pe aceeași platformă.',
        ],
      },
    },
    switching: {
      heading: 'Cum treci de la CallMiner sau Observe.AI',
      intro:
        'Începe cu un singur departament. Scrie-i regulile, trimite-i înregistrările dintr-o săptămână și compară scorurile cu evaluarea actuală înainte să muți restul.',
      steps: [
        {
          title: 'Începe cu planul Free',
          body: { text: 'Creează un cont Fineguide (fără card); evaluarea apelurilor folosește creditele planului.', refs: ['fg:fg-pricing'] },
        },
        {
          title: 'Creează departamentele și regulile',
          body: {
            text: 'Creează un departament pentru fiecare echipă, scrie-i regulile, dă fiecărei reguli o pondere și alege limba rapoartelor.',
            refs: ['fg:fg-voice-qa'],
          },
        },
        {
          title: 'Trimite înregistrările',
          body: {
            text: 'Încarcă înregistrările, trimite-le prin API, conectează centrala telefonică sau instalează aplicația Fineguide de înregistrare a apelurilor pentru Android pe telefoanele operatorilor.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Trimite rezultatele unde lucrezi',
          body: { text: 'Trimite scorurile într-un webhook, în amoCRM sau în Kommo, ori urmărește-le în CRM-ul Fineguide.', refs: ['fg:fg-llms'] },
        },
        {
          title: 'Adaugă AI la telefon și pe chat',
          body: {
            text: 'Conectează operatorul sau centrala prin SIP, ca agenții vocali AI să răspundă și să sune, și pune aceiași asistenți pe chatul de pe site și pe aplicațiile de mesagerie.',
            refs: ['fg:fg-voice-ai', 'fg:fg-assistants'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Care este o alternativă la CallMiner pentru echipe mai mici?',
        a: 'O unealtă de evaluare a apelurilor pe care o configurezi singur. Voice QA de la Fineguide pornește cu planul Free: scrii regulile fiecărui departament, trimiți înregistrările, iar fiecare apel este notat cu citate și o sugestie pentru fiecare regulă. CallMiner și Observe.AI acoperă mai multe canale și adaugă ghidare în timp real pentru call centere mari.',
        refs: ['fg:fg-voice-qa', 'fg:fg-pricing', 'callminer:home', 'observe-ai:home'],
      },
      {
        q: 'Poate AI-ul să evalueze fiecare apel după lista mea de verificare?',
        a: 'Da. În Fineguide fiecare departament își scrie regulile și ponderile, iar Voice QA notează fiecare apel înregistrat după ele, cu argumentarea, citate din apel și o sugestie pentru fiecare regulă. Și Auto QA de la Observe.AI notează după grila și fișele tale de scor, iar CallMiner oferă formulare de calitate complet automate sau hibride.',
        refs: ['fg:fg-voice-qa', 'observe-ai:ii', 'callminer:qm'],
      },
      {
        q: 'În ce limbi sunt rapoartele de evaluare a apelurilor?',
        a: 'Fineguide scrie rapoartele Voice QA în 30 de limbi, de la arabă și bengali la urdu și vietnameză, inclusiv română și rusă. CallMiner spune că transcrie în sute de limbi; pe paginile Observe.AI pe care le-am verificat nu am găsit o listă de limbi.',
        refs: ['fg:fg-llms', 'callminer:analyze'],
      },
      {
        q: 'Observe.AI are agenți vocali AI?',
        a: 'Da. Voice AI de la Observe.AI lucrează pe apeluri primite și efectuate, cu peste 12 tipuri de acțiuni și transfer în direct către un om, iar CallMiner OmniAgent derulează fluxuri de apeluri primite și efectuate. Agenții vocali AI Fineguide răspund și sună prin SIP-ul tău, în 14 limbi, și derulează campanii de apeluri.',
        refs: ['observe-ai:voice-ai', 'callminer:omniagent', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
      },
      {
        q: 'Cum trimit înregistrările apelurilor în Fineguide?',
        a: 'Le încarci, le trimiți prin API sau vin singure de la o centrală telefonică conectată ori din aplicația Fineguide de înregistrare a apelurilor pentru Android.',
        refs: ['fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Evaluează o săptămână din apelurile tale',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe înregistrările tale.',
    },
    extraLinks: [
      { href: '/ro/call-center/', label: 'Software de call center cu agenți vocali AI' },
      { href: '/ro/voice-ai/', label: 'Telefonia AI pe propria centrală' },
    ],
  },

  ru: {
    title: 'Альтернатива CallMiner и Observe.AI: оценка звонков с ИИ',
    description:
      'Альтернатива CallMiner и Observe.AI: сравниваем автоматическую оценку звонков, ИИ-агентов, языки и хранение данных по официальным страницам вендоров.',
    crumb: 'CallMiner и Observe.AI',
    h1: 'Fineguide vs CallMiner и Observe.AI:',
    h1Accent: 'каждый звонок по вашим правилам',
    shortAnswer:
      'CallMiner и Observe.AI — платформы речевой аналитики и conversation intelligence для крупных колл-центров: они анализируют звонки, чаты и другие обращения, подсказывают операторам в реальном времени и имеют собственных ИИ-агентов. Voice QA в Fineguide оценивает каждый записанный звонок по правилам конкретного отдела, с цитатами из разговора и рекомендацией по каждому правилу, и выдаёт отчёты на 30 языках; на той же платформе есть CRM, общий inbox команды и ИИ-агенты для чатов и звонков. Выбирайте CallMiner или Observe.AI ради омниканальной аналитики корпоративного масштаба; выбирайте Fineguide, чтобы самостоятельно начать оценку звонков рядом со всей остальной работой с клиентами.',
    tableHeading: 'CallMiner, Observe.AI и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее CallMiner и Observe.AI',
      items: [
        {
          text: 'Все каналы, а не только звонки. CallMiner анализирует звонки, письма, текстовые сообщения, опросы и записи экрана; Observe.AI оценивает звонки и чаты и объединяет голос, чат и почту в одном обращении. Voice QA в Fineguide оценивает телефонные звонки.',
          refs: ['callminer:home', 'callminer:eureka', 'observe-ai:ii', 'fg:fg-voice-qa'],
        },
        {
          text: 'Подсказки во время звонка. CallMiner RealTime присылает операторам и супервайзерам оповещения на рабочий стол и живые ИИ-саммари и выдерживает более 100 000 одновременных обращений; агент Companion от Observe.AI подсказывает следующий шаг и следит за соблюдением правил по ходу разговора.',
          refs: ['callminer:realtime', 'observe-ai:companion'],
        },
        {
          text: 'Инструменты комплаенса. CallMiner Redact удаляет данные PCI, PII и PHI из аудио, расшифровок и текстовых каналов, а на странице безопасности перечислены аудиты SOC 2 Type II, HITRUST, ISO 27001 и PCI DSS; Observe.AI удаляет PII, PCI и PHI до того, как данные попадают в модель.',
          refs: ['callminer:redact', 'callminer:security', 'observe-ai:trust'],
        },
        {
          text: 'Шире выбор языков, развёртывания и интеграций. CallMiner распознаёт речь на сотнях языков, может работать на вашем движке распознавания и записывает звонки в облаке, on-premise или гибридно; Observe.AI хранит данные в США, Канаде, ЕС или Австралии и указывает более 250 интеграций.',
          refs: ['callminer:analyze', 'callminer:record', 'observe-ai:trust', 'observe-ai:integrations'],
        },
        {
          text: 'Признание аналитиков. CallMiner назван лидером в The Forrester Wave: Conversation Intelligence for Contact Centers (II квартал 2025).',
          refs: ['callminer:home'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'В чём сильнее Fineguide',
      items: [
        {
          text: 'Правила пишет каждый отдел. Voice QA оценивает каждый записанный звонок по правилам и весам конкретного отдела и даёт обоснование, цитаты из разговора и рекомендацию по каждому правилу, плюс карточки оценок сотрудников и дашборды по отделам, сотрудникам и правилам.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'Отчёты на 30 языках. Каждый отдел выбирает язык отчётов из 30 — от арабского, бенгальского и китайского до испанского, турецкого и вьетнамского, — и каждый руководитель читает оценки на своём языке.',
          refs: ['fg:fg-llms'],
        },
        {
          text: 'Записи приходят так, как они у вас уже есть. Загрузите их, отправьте через API или получайте автоматически из подключённой АТС или приложения Fineguide для записи звонков на Android; результаты можно отправлять дальше в вебхук, amoCRM или Kommo.',
          refs: ['fg:fg-voice-qa', 'fg:fg-llms'],
        },
        {
          text: 'Больше, чем аналитика. На той же платформе есть CRM, общий inbox для чатов и почты, ИИ-ассистенты, которые отвечают в чатах и на живых звонках через ваш SIP, и кампании обзвона, так что по низкой оценке можно сразу работать в карточке клиента.',
          refs: ['fg:fg-crm', 'fg:fg-messages', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
        },
        {
          text: 'Можно начать самому. Fineguide открывается на тарифе Free без карты, а оценка звонков расходует те же кредиты, что и ответы в чатах и ИИ-звонки.',
          refs: ['fg:fg-pricing'],
        },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте CallMiner или Observe.AI, если…',
        items: [
          'у вас крупный колл-центр и нужно анализировать звонки, чаты, почту и опросы в одном месте;',
          'операторам нужны подсказки и предупреждения о нарушениях прямо во время звонка;',
          'нужно скрывать данные карт и медицинские данные, с проверенными аудитом мерами комплаенса;',
          'данные должны храниться в выбранном регионе (Observe.AI) или нужен гибридный или on-premise рекордер (CallMiner).',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'нужна оценка каждого записанного звонка по чек-листам, которые пишут ваши руководители, отдел за отделом;',
          'руководителям нужны отчёты на их языке — на выбор 30 языков;',
          'вы хотите на той же платформе CRM, общий inbox и ИИ-агентов для чатов и звонков.',
        ],
      },
    },
    switching: {
      heading: 'Как перейти с CallMiner или Observe.AI',
      intro:
        'Начните с одного отдела. Пропишите его правила, отправьте записи за неделю и сравните оценки с вашим текущим контролем качества, прежде чем переводить остальных.',
      steps: [
        {
          title: 'Начните с тарифа Free',
          body: { text: 'Создайте аккаунт Fineguide (без карты); оценка звонков расходует кредиты тарифа.', refs: ['fg:fg-pricing'] },
        },
        {
          title: 'Создайте отделы и правила',
          body: {
            text: 'Создайте отдел для каждой команды, пропишите его правила, задайте каждому правилу вес и выберите язык отчётов.',
            refs: ['fg:fg-voice-qa'],
          },
        },
        {
          title: 'Отправьте записи',
          body: {
            text: 'Загрузите записи, отправьте их через API, подключите АТС или установите приложение Fineguide для записи звонков на Android на телефоны сотрудников.',
            refs: ['fg:fg-llms'],
          },
        },
        {
          title: 'Передайте результаты туда, где вы работаете',
          body: { text: 'Отправляйте оценки в вебхук, amoCRM или Kommo либо работайте с ними в CRM Fineguide.', refs: ['fg:fg-llms'] },
        },
        {
          title: 'Добавьте ИИ в звонки и чаты',
          body: {
            text: 'Подключите оператора или АТС по SIP, чтобы голосовые ИИ-агенты принимали и совершали звонки, и поставьте тех же ассистентов в чат на сайте и в мессенджеры.',
            refs: ['fg:fg-voice-ai', 'fg:fg-assistants'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Какая есть альтернатива CallMiner для небольших команд?',
        a: 'Сервис оценки звонков, который можно настроить самому. Voice QA в Fineguide начинается с тарифа Free: пропишите правила каждого отдела, отправьте записи — и каждый звонок получит оценку с цитатами и рекомендацией по каждому правилу. CallMiner и Observe.AI охватывают больше каналов и добавляют подсказки в реальном времени для крупных колл-центров.',
        refs: ['fg:fg-voice-qa', 'fg:fg-pricing', 'callminer:home', 'observe-ai:home'],
      },
      {
        q: 'Может ли ИИ оценивать каждый звонок по моему чек-листу?',
        a: 'Да. В Fineguide каждый отдел пишет свои правила и веса, а Voice QA оценивает по ним каждый записанный звонок, с обоснованием, цитатами из разговора и рекомендацией по каждому правилу. Auto QA от Observe.AI тоже оценивает по вашей рубрике и скоркартам, а CallMiner предлагает полностью автоматические или гибридные формы оценки.',
        refs: ['fg:fg-voice-qa', 'observe-ai:ii', 'callminer:qm'],
      },
      {
        q: 'На каких языках отчёты по оценке звонков?',
        a: 'Fineguide выдаёт отчёты Voice QA на 30 языках, от арабского и бенгальского до урду и вьетнамского, включая русский. CallMiner пишет, что распознаёт речь на сотнях языков; на проверенных нами страницах Observe.AI списка языков нет.',
        refs: ['fg:fg-llms', 'callminer:analyze'],
      },
      {
        q: 'Есть ли у Observe.AI голосовые ИИ-агенты?',
        a: 'Да. Voice AI от Observe.AI работает на входящих и исходящих звонках, с 12+ типами действий и живым переводом на человека, а CallMiner OmniAgent ведёт входящие и исходящие сценарии звонков. Голосовые ИИ-агенты Fineguide принимают и совершают звонки через ваш SIP на 14 языках и ведут кампании обзвона.',
        refs: ['observe-ai:voice-ai', 'callminer:omniagent', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
      },
      {
        q: 'Как отправить записи звонков в Fineguide?',
        a: 'Загрузите их, отправьте через API или получайте автоматически из подключённой АТС или приложения Fineguide для записи звонков на Android.',
        refs: ['fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Оцените неделю своих звонков',
      body: 'Начните с тарифа Free без карты или запишитесь на 30-минутную демонстрацию на ваших записях.',
    },
    extraLinks: [
      { href: '/ru/call-center/', label: 'Софт для колл-центра с голосовыми ИИ-агентами' },
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
    ],
  },
};
