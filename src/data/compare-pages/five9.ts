// Facts checked on 2026-11-27 on Five9's own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Page: /compare/five9/ (EN), /ro/compare/five9/, /ru/compare/five9/.
// Competitor id to add to compare.ts (MORE + CATEGORY 'call-center'): 'five9'.
//
// Every Five9 fact below was read on 2026-11-27 on five9.com and is linked in `sources`. Capabilities only: no prices,
// plans' prices, trials or contract terms. Five9 publishes no public interface-language list and no data-centre list
// on the pages we read (the trust page names site versions, not data locations): those cells say only what is stated.
// Fineguide refs ('fg:…') use the ids in FINEGUIDE_SOURCES (src/data/compare.ts).

const five9Data = {
  en: 'Five9 lists SOC 2 Type II, HIPAA (BAA available), PCI-DSS, ISO 27001, C5, DORA, and GDPR with EU data residency, with regional sites and logins for the United States, Europe, Australia, the United Kingdom and Canada; a 99.999% uptime SLA on the Five9 VCC platform.',
  ro: 'Five9 listează SOC 2 Type II, HIPAA (BAA disponibil), PCI-DSS, ISO 27001, C5, DORA și GDPR cu rezidența datelor în UE, cu site-uri și autentificări regionale pentru Statele Unite, Europa, Australia, Regatul Unit și Canada; SLA de disponibilitate 99,999% pe platforma Five9 VCC.',
  ru: 'Five9 указывает SOC 2 Type II, HIPAA (BAA по запросу), PCI-DSS, ISO 27001, C5, DORA и GDPR с хранением данных в ЕС, региональные сайты и входы для США, Европы, Австралии, Великобритании и Канады; SLA доступности 99,999% для платформы Five9 VCC.',
  src: ['home', 'trust'],
};

export const competitors = [
  {
    id: 'five9',
    name: 'Five9',
    url: 'https://www.five9.com/',
    checked: '2026-11-27',
    facts: {
      ai: {
        en: 'Agentic AI agents and no-code Intelligent Virtual Agents (IVAs) on voice, chat, SMS and social, with multi-step reasoning, tool calling and multi-agent orchestration, on models from Google, OpenAI, Anthropic or your own (FlexLM). AI brings in a live agent with the context kept; Agent Assist adds real-time transcription, AI summaries and next-best-action coaching.',
        ro: 'Agenți AI agentici și agenți virtuali inteligenți (IVA) fără cod pe voce, chat, SMS și rețele sociale, cu raționament în mai mulți pași, apelare de unelte și orchestrare de mai mulți agenți, pe modele Google, OpenAI, Anthropic sau proprii (FlexLM). AI-ul aduce un operator uman păstrând contextul; Agent Assist adaugă transcriere în timp real, rezumate AI și recomandări pentru următorul pas.',
        ru: 'Агентные ИИ-агенты и no-code интеллектуальные виртуальные агенты (IVA) в голосе, чате, SMS и соцсетях: многошаговые рассуждения, вызов инструментов и оркестрация нескольких агентов на моделях Google, OpenAI, Anthropic или собственных (FlexLM). ИИ подключает живого оператора с сохранением контекста; Agent Assist добавляет расшифровку в реальном времени, ИИ-сводки и подсказки следующего шага.',
        src: ['engage'],
      },
      channels: {
        en: 'Voice, web chat, SMS, email, WhatsApp, video and social, inbound and outbound, with co-browse and screen share built in; open APIs add other digital channels.',
        ro: 'Voce, chat web, SMS, email, WhatsApp, video și rețele sociale, în ambele sensuri, cu co-browsing și partajare de ecran integrate; API-urile deschise adaugă alte canale digitale.',
        ru: 'Голос, веб-чат, SMS, почта, WhatsApp, видео и соцсети, входящие и исходящие, со встроенным совместным просмотром и демонстрацией экрана; открытые API добавляют другие цифровые каналы.',
        src: ['engage'],
      },
      phone: {
        en: 'A cloud contact center with its own voice infrastructure in 140+ countries and a global voice network of 40+ carrier partners; IVR; predictive, progressive and power dialing in Campaign Manager with TCPA, FDCPA and GDPR controls; number health and audio-quality (MOS) monitoring.',
        ro: 'Un contact center în cloud cu infrastructură vocală proprie în peste 140 de țări și o rețea globală de peste 40 de operatori parteneri; IVR; apelare predictivă, progresivă și power dialing în Campaign Manager, cu controale TCPA, FDCPA și GDPR; monitorizarea stării numerelor și a calității audio (MOS).',
        ru: 'Облачный контакт-центр с собственной голосовой инфраструктурой в 140+ странах и глобальной сетью из 40+ операторов-партнёров; IVR; предиктивный, прогрессивный и power-обзвон в Campaign Manager с контролями TCPA, FDCPA и GDPR; мониторинг состояния номеров и качества звука (MOS).',
        src: ['engage', 'platform', 'home'],
      },
      callScoring: {
        en: 'Agentic Quality Management scores 100% of interactions with automated GenAI evaluations against calibrated criteria and surfaces coaching opportunities; interaction and speech analytics find keywords, phrases and sentiment; forecasting and scheduling for workforce management.',
        ro: 'Agentic Quality Management evaluează 100% din interacțiuni cu evaluări GenAI automate, după criterii calibrate, și scoate la iveală ocaziile de coaching; analiza interacțiunilor și analiza vocală găsesc cuvinte-cheie, expresii și sentiment; prognoză și planificare pentru managementul personalului.',
        ru: 'Agentic Quality Management оценивает 100% взаимодействий автоматическими GenAI-оценками по выверенным критериям и находит точки для коучинга; аналитика взаимодействий и речевая аналитика находят ключевые слова, фразы и тональность; прогнозирование и планирование смен.',
        src: ['insights', 'home'],
      },
      languages: {
        en: 'The Intelligent Virtual Agent understands customers in 130+ languages. We could not read an interface-language list on a Five9 page.',
        ro: 'Agentul virtual inteligent înțelege clienții în peste 130 de limbi. Nu am găsit o listă de limbi ale interfeței pe paginile Five9.',
        ru: 'Интеллектуальный виртуальный агент понимает клиентов на 130+ языках. Списка языков интерфейса на страницах Five9 мы не нашли.',
        src: ['engage'],
      },
      data: five9Data,
    },
    uiLanguages: null,
    dataLocation: five9Data,
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'Five9: The AI contact center platform (channels, quality, certifications, integrations)', url: 'https://www.five9.com/' },
      { id: 'engage', title: 'Five9: Self-service and engagement (AI agents, IVA, channels, Agent Assist, dialers)', url: 'https://www.five9.com/platform/self-service-and-engagement' },
      { id: 'insights', title: 'Five9: Insights and analytics (Agentic Quality Management, speech analytics, WFM)', url: 'https://www.five9.com/platform/insights-and-analytics' },
      { id: 'platform', title: 'Five9: Platform overview (voice network, CRM integrations, uptime)', url: 'https://www.five9.com/platform' },
      { id: 'trust', title: 'Five9: Trust', url: 'https://www.five9.com/platform/trust' },
    ],
  },
];

export const page = {
  slug: 'five9',
  competitors: ['five9'],
  label: { en: 'Five9', ro: 'Five9', ru: 'Five9' },
  summary: {
    en: 'An enterprise cloud contact center with predictive dialers, workforce management and quality management, against AI voice agents on your own phone system with the CRM, chat channels, campaigns and call scoring on one record.',
    ro: 'Un contact center enterprise în cloud, cu apelare predictivă, managementul personalului și al calității, față în față cu agenți vocali AI pe propria centrală, cu CRM, canale de chat, campanii și evaluarea apelurilor pe aceeași fișă.',
    ru: 'Корпоративный облачный контакт-центр с предиктивным обзвоном, планированием смен и контролем качества — против голосовых ИИ-агентов на вашей телефонии, где CRM, чаты, обзвоны и оценка звонков в одной карточке.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Five9 alternative: Fineguide vs Five9',
    description: 'A Five9 alternative compared on Five9’s own pages: AI agents, channels, telephony and dialers, quality management, languages and data, checked 27 Nov 2026.',
    crumb: 'Five9',
    h1: 'Fineguide vs Five9:',
    h1Accent: 'an AI call center without the enterprise build',
    shortAnswer:
      'Five9 is an enterprise cloud contact center: AI agents and virtual agents on voice and digital channels, its own voice network in 140+ countries, predictive and power dialers, workforce management and quality management that scores every interaction. Fineguide is a smaller AI-first platform for teams that want AI voice agents on their own phone system (SIP), outbound call campaigns, chat channels, a CRM and Voice QA call scoring on one customer record, set up without a project. Choose Five9 for a large regulated contact center; choose Fineguide for a small or mid-size team that wants AI on calls and chats together.',
    tableHeading: 'Five9 vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Five9 is stronger',
      items: [
        { text: 'Contact-center scale and reach. Five9 runs its own voice infrastructure in 140+ countries on a network of 40+ carrier partners, and states a 99.999% uptime SLA on its VCC platform.', refs: ['five9:engage', 'five9:platform', 'five9:trust'] },
        { text: 'Dialers for large outbound teams: predictive, progressive and power dialing in Campaign Manager, with TCPA, FDCPA and GDPR controls built into the workflow.', refs: ['five9:engage'] },
        { text: 'Workforce and quality management: forecasting and scheduling, Agentic Quality Management that scores 100% of interactions, and interaction and speech analytics.', refs: ['five9:insights', 'five9:home'] },
        { text: 'More channels and languages for the virtual agent: voice, chat, SMS, email, WhatsApp, video and social, with co-browse and screen share; the IVA understands 130+ languages.', refs: ['five9:engage'] },
        { text: 'Enterprise compliance and integrations: SOC 2 Type II, HIPAA, PCI-DSS, ISO 27001, C5, DORA and GDPR with EU data residency; certified integrations with Salesforce, ServiceNow, Microsoft Dynamics and Epic.', refs: ['five9:home', 'five9:platform'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'AI voice agents on the phone system you already have. Fineguide’s assistants answer and place live calls over your own SIP account or trunk in 14 languages, greet known callers by first name from the CRM, transfer to your team on request and save callback requests as CRM tasks. Your numbers and carrier minutes stay with your carrier.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] },
        { text: 'A CRM built in, not integrated. Contacts, companies, deals on a board or a table, tasks and sales reports sit on the same record as every call transcript, chat and email.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'The same assistant on chat. It answers in the website widget, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord and JivoChat, and inside amoCRM and Kommo, with a team inbox for chat and your own email.', refs: ['fg:fg-assistants', 'fg:fg-messages'] },
        { text: 'Call scoring per department. Voice QA scores recorded calls, uploaded, posted through the API or delivered from a connected phone system or the Fineguide recording app for Android, against each department’s own rules and weights, with quotes, a suggestion for every rule and reports in 30 languages.', refs: ['fg:fg-voice-qa'] },
        { text: 'Self-serve start. A Free plan without a card; assistants, numbers, campaigns and scoring rules are set up in the workspace without an implementation project.', refs: ['fg:fg-pricing'] },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Five9 if…',
        items: [
          'you run a large contact center that needs predictive dialing, workforce management and 100% quality scoring at scale;',
          'you need numbers and voice coverage in many countries from one provider;',
          'you work under HIPAA, PCI-DSS or DORA, or need EU data residency and enterprise CRM integrations such as ServiceNow or Epic.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'you are a small or mid-size team and want AI voice agents on the phone lines you already have;',
          'you want the CRM, chat channels and call campaigns in the same place as the calls;',
          'you want every recorded call scored against each department’s own checklist without a long project.',
        ],
      },
    },
    switching: {
      heading: 'Moving calls from Five9 to Fineguide',
      intro: 'Fineguide answers over SIP, so a move can start with one line or one queue while the rest stays where it is.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed) and give an assistant your website, documents and FAQ.' },
        { title: 'Connect a line', body: { text: 'Connect your carrier or PBX with a standard SIP account or trunk and add the line as a channel; give the number to the assistant and set its languages, hours and transfer number.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] } },
        { title: 'Bring your contacts', body: { text: 'Export contacts from your CRM and import them into Fineguide (CSV, TSV, XLS or XLSX); a person confirms every duplicate merge.', refs: ['fg:fg-llms'] } },
        { title: 'Run a first campaign', body: { text: 'Build an outbound campaign from a CSV, contacts or tags, set retries and calling hours, and place a test call to your own number.', refs: ['fg:fg-campaigns'] } },
        { title: 'Score the calls', body: { text: 'Write each department’s rules in Voice QA and send recordings by upload, the API or a connected phone system.', refs: ['fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      { q: 'What is a good Five9 alternative for a smaller team?', a: 'Fineguide suits small and mid-size teams that want AI voice agents on their own phone lines, outbound campaigns, chat channels, a CRM and call scoring on one platform, started from a Free plan. Five9 fits large contact centers that need its dialers, workforce management and global voice network.', refs: ['fg:fg-call-center', 'five9:engage'] },
      { q: 'Does Five9 have AI agents?', a: 'Yes. Five9 lists agentic AI agents and no-code Intelligent Virtual Agents on voice, chat, SMS and social, which bring in a live agent with context, plus Agent Assist for human agents.', refs: ['five9:engage'] },
      { q: 'Can Fineguide work with my existing phone system?', a: 'Yes. Fineguide connects to your carrier or PBX over SIP (UDP, TCP or TLS); several lines can share one PBX and each number rings the assistant you give it to.', refs: ['fg:fg-call-center'] },
      { q: 'Does Fineguide score 100% of calls?', a: 'Voice QA scores every recorded call you send it, by upload, the API or a connected phone system, against each department’s rules. Five9’s Agentic Quality Management scores 100% of interactions in its own platform.', refs: ['fg:fg-voice-qa', 'five9:insights'] },
      { q: 'Does Fineguide have a predictive dialer?', a: 'Fineguide runs outbound call campaigns worked by AI assistants, with a set number of calls at once, retries and calling hours. Five9 offers predictive, progressive and power dialing for human agents.', refs: ['fg:fg-campaigns', 'five9:engage'] },
    ],
    closing: { heading: 'Put an AI agent on one of your lines', body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough with your own phone system.' },
    extraLinks: [
      { href: '/call-center/', label: 'Call center software' },
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
      { href: '/voice-qa/', label: 'Voice QA call scoring' },
    ],
  },

  ro: {
    title: 'Alternativă la Five9: Fineguide vs Five9',
    description: 'Alternativă la Five9 comparată pe paginile Five9: agenți AI, canale, telefonie și apelare, managementul calității, limbi și date, verificate la 27.11.2026.',
    crumb: 'Five9',
    h1: 'Fineguide vs Five9:',
    h1Accent: 'un call center cu AI, fără un proiect enterprise',
    shortAnswer:
      'Five9 este un contact center enterprise în cloud: agenți AI și agenți virtuali pe voce și canale digitale, rețea vocală proprie în peste 140 de țări, apelare predictivă și power dialing, managementul personalului și un management al calității care evaluează fiecare interacțiune. Fineguide este o platformă mai mică, construită pe AI, pentru echipele care vor agenți vocali AI pe propria centrală (SIP), campanii de apeluri, canale de chat, un CRM și evaluarea apelurilor cu Voice QA pe aceeași fișă de client, configurate fără un proiect. Alege Five9 pentru un contact center mare și reglementat; alege Fineguide pentru o echipă mică sau medie care vrea AI pe apeluri și chat împreună.',
    tableHeading: 'Five9 și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Five9 este mai puternic',
      items: [
        { text: 'Scara și acoperirea unui contact center. Five9 are infrastructură vocală proprie în peste 140 de țări, pe o rețea de peste 40 de operatori parteneri, și declară un SLA de disponibilitate de 99,999% pe platforma VCC.', refs: ['five9:engage', 'five9:platform', 'five9:trust'] },
        { text: 'Apelare pentru echipe mari: predictivă, progresivă și power dialing în Campaign Manager, cu controale TCPA, FDCPA și GDPR în fluxul de lucru.', refs: ['five9:engage'] },
        { text: 'Managementul personalului și al calității: prognoză și planificare, Agentic Quality Management care evaluează 100% din interacțiuni și analiza vocală și a interacțiunilor.', refs: ['five9:insights', 'five9:home'] },
        { text: 'Mai multe canale și limbi pentru agentul virtual: voce, chat, SMS, email, WhatsApp, video și rețele sociale, cu co-browsing și partajare de ecran; IVA înțelege peste 130 de limbi.', refs: ['five9:engage'] },
        { text: 'Conformitate și integrări enterprise: SOC 2 Type II, HIPAA, PCI-DSS, ISO 27001, C5, DORA și GDPR cu rezidența datelor în UE; integrări certificate cu Salesforce, ServiceNow, Microsoft Dynamics și Epic.', refs: ['five9:home', 'five9:platform'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'Agenți vocali AI pe centrala pe care o ai deja. Asistenții Fineguide răspund și sună în direct prin contul sau trunchiul tău SIP, în 14 limbi, salută pe nume apelanții cunoscuți din CRM, transferă la echipă la cerere și salvează cererile de revenire ca sarcini în CRM. Numerele și minutele rămân la operatorul tău.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] },
        { text: 'Un CRM inclus, nu integrat. Contactele, companiile, ofertele pe tablă sau în tabel, sarcinile și rapoartele de vânzări stau pe aceeași fișă cu fiecare transcriere de apel, chat și email.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Același asistent pe chat. Răspunde în widgetul de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord și JivoChat, plus direct în amoCRM și Kommo, cu un inbox de echipă pentru chat și emailul tău.', refs: ['fg:fg-assistants', 'fg:fg-messages'] },
        { text: 'Evaluarea apelurilor pe departamente. Voice QA evaluează apelurile înregistrate, încărcate, trimise prin API ori venite de la o centrală conectată sau din aplicația Fineguide de înregistrare pentru Android, după regulile și ponderile fiecărui departament, cu citate, o sugestie pentru fiecare regulă și rapoarte în 30 de limbi.', refs: ['fg:fg-voice-qa'] },
        { text: 'Pornești singur. Un plan Free fără card; asistenții, numerele, campaniile și regulile de evaluare se configurează în workspace, fără un proiect de implementare.', refs: ['fg:fg-pricing'] },
      ],
    },
    choose: {
      heading: 'Cine ce ar trebui să aleagă',
      competitor: {
        label: 'Alege Five9 dacă…',
        items: [
          'ai un contact center mare care are nevoie de apelare predictivă, managementul personalului și evaluarea 100% a calității la scară;',
          'ai nevoie de numere și acoperire vocală în multe țări de la un singur furnizor;',
          'lucrezi sub HIPAA, PCI-DSS sau DORA ori ai nevoie de rezidența datelor în UE și integrări enterprise ca ServiceNow sau Epic.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'ești o echipă mică sau medie și vrei agenți vocali AI pe liniile pe care le ai deja;',
          'vrei CRM-ul, canalele de chat și campaniile de apeluri în același loc cu apelurile;',
          'vrei fiecare apel înregistrat evaluat după lista fiecărui departament, fără un proiect lung.',
        ],
      },
    },
    switching: {
      heading: 'Mutarea apelurilor de la Five9 la Fineguide',
      intro: 'Fineguide răspunde prin SIP, așa că mutarea poate începe cu o linie sau o coadă, iar restul rămâne unde este.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card) și dă unui asistent site-ul, documentele și întrebările frecvente.' },
        { title: 'Conectează o linie', body: { text: 'Conectează operatorul sau centrala cu un cont ori trunchi SIP standard și adaugă linia ca un canal; dă numărul asistentului și setează limbile, orele și numărul de transfer.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] } },
        { title: 'Adu contactele', body: { text: 'Exportă contactele din CRM și importă-le în Fineguide (CSV, TSV, XLS sau XLSX); un om confirmă fiecare unire de duplicate.', refs: ['fg:fg-llms'] } },
        { title: 'Pornește o primă campanie', body: { text: 'Construiește o campanie din CSV, contacte sau etichete, setează reîncercările și orele de apel și fă un apel de test spre propriul număr.', refs: ['fg:fg-campaigns'] } },
        { title: 'Evaluează apelurile', body: { text: 'Scrie regulile fiecărui departament în Voice QA și trimite înregistrările prin încărcare, API sau o centrală conectată.', refs: ['fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      { q: 'Care este o alternativă bună la Five9 pentru o echipă mai mică?', a: 'Fineguide se potrivește echipelor mici și medii care vor agenți vocali AI pe propriile linii, campanii de apeluri, canale de chat, un CRM și evaluarea apelurilor pe o singură platformă, pornind de la un plan Free. Five9 se potrivește contact centerelor mari care au nevoie de apelarea, managementul personalului și rețeaua vocală globală.', refs: ['fg:fg-call-center', 'five9:engage'] },
      { q: 'Are Five9 agenți AI?', a: 'Da. Five9 listează agenți AI agentici și agenți virtuali inteligenți fără cod pe voce, chat, SMS și rețele sociale, care aduc un operator uman cu context, plus Agent Assist pentru operatori.', refs: ['five9:engage'] },
      { q: 'Poate Fineguide să lucreze cu centrala mea actuală?', a: 'Da. Fineguide se conectează la operator sau la centrală prin SIP (UDP, TCP sau TLS); mai multe linii pot folosi aceeași centrală, iar fiecare număr sună la asistentul căruia i-l dai.', refs: ['fg:fg-call-center'] },
      { q: 'Evaluează Fineguide 100% din apeluri?', a: 'Voice QA evaluează fiecare apel înregistrat pe care i-l trimiți, prin încărcare, API sau o centrală conectată, după regulile fiecărui departament. Agentic Quality Management de la Five9 evaluează 100% din interacțiunile din platforma lui.', refs: ['fg:fg-voice-qa', 'five9:insights'] },
      { q: 'Are Fineguide apelare predictivă?', a: 'Fineguide rulează campanii de apeluri lucrate de asistenți AI, cu un număr ales de apeluri simultane, reîncercări și ore de apel. Five9 oferă apelare predictivă, progresivă și power dialing pentru operatori umani.', refs: ['fg:fg-campaigns', 'five9:engage'] },
    ],
    closing: { heading: 'Pune un agent AI pe una dintre liniile tale', body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute cu propria centrală.' },
    extraLinks: [
      { href: '/ro/call-center/', label: 'Soft pentru call center' },
      { href: '/ro/voice-ai/', label: 'Telefonie AI pe propria centrală' },
      { href: '/ro/voice-qa/', label: 'Evaluarea apelurilor cu Voice QA' },
    ],
  },

  ru: {
    title: 'Альтернатива Five9: Fineguide и Five9',
    description: 'Альтернатива Five9, сравнение по страницам Five9: ИИ-агенты, каналы, телефония и обзвон, контроль качества, языки и данные. Проверено 27.11.2026.',
    crumb: 'Five9',
    h1: 'Fineguide и Five9:',
    h1Accent: 'колл-центр с ИИ без корпоративного внедрения',
    shortAnswer:
      'Five9 — корпоративный облачный контакт-центр: ИИ-агенты и виртуальные агенты в голосе и цифровых каналах, собственная голосовая сеть в 140+ странах, предиктивный и power-обзвон, планирование смен и контроль качества, который оценивает каждое взаимодействие. Fineguide — платформа поменьше, построенная вокруг ИИ, для команд, которым нужны голосовые ИИ-агенты на своей телефонии (SIP), обзвоны, чаты, CRM и оценка звонков Voice QA в одной карточке клиента, без проекта внедрения. Выбирайте Five9 для большого регулируемого контакт-центра; Fineguide — для небольшой или средней команды, которой нужен ИИ на звонках и в чатах вместе.',
    tableHeading: 'Five9 и Fineguide: коротко',
    competitorStronger: {
      heading: 'Где сильнее Five9',
      items: [
        { text: 'Масштаб и охват контакт-центра. У Five9 собственная голосовая инфраструктура в 140+ странах на сети из 40+ операторов-партнёров и заявленный SLA доступности 99,999% для платформы VCC.', refs: ['five9:engage', 'five9:platform', 'five9:trust'] },
        { text: 'Обзвон для больших команд: предиктивный, прогрессивный и power-режим в Campaign Manager с контролями TCPA, FDCPA и GDPR в процессе.', refs: ['five9:engage'] },
        { text: 'Планирование смен и контроль качества: прогнозирование и расписания, Agentic Quality Management с оценкой 100% взаимодействий, речевая аналитика и аналитика взаимодействий.', refs: ['five9:insights', 'five9:home'] },
        { text: 'Больше каналов и языков у виртуального агента: голос, чат, SMS, почта, WhatsApp, видео и соцсети, совместный просмотр и демонстрация экрана; IVA понимает 130+ языков.', refs: ['five9:engage'] },
        { text: 'Корпоративное соответствие и интеграции: SOC 2 Type II, HIPAA, PCI-DSS, ISO 27001, C5, DORA и GDPR с хранением данных в ЕС; сертифицированные интеграции с Salesforce, ServiceNow, Microsoft Dynamics и Epic.', refs: ['five9:home', 'five9:platform'] },
      ],
    },
    fineguideStronger: {
      heading: 'Где сильнее Fineguide',
      items: [
        { text: 'Голосовые ИИ-агенты на вашей нынешней телефонии. Ассистенты Fineguide принимают и совершают живые звонки через ваш SIP-аккаунт или транк на 14 языках, приветствуют знакомых абонентов по имени из CRM, переводят на команду по просьбе и сохраняют заявки на перезвон как задачи в CRM. Номера и минуты остаются у вашего оператора.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] },
        { text: 'CRM встроена, а не подключена. Контакты, компании, сделки на доске или в таблице, задачи и отчёты по продажам — в той же карточке, что и расшифровка каждого звонка, чат и письмо.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Тот же ассистент в чатах. Он отвечает в виджете на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord и JivoChat, а также внутри amoCRM и Kommo, с общим inbox для чатов и вашей почты.', refs: ['fg:fg-assistants', 'fg:fg-messages'] },
        { text: 'Оценка звонков по отделам. Voice QA оценивает записанные звонки — загруженные, отправленные через API, пришедшие из подключённой АТС или из приложения записи Fineguide для Android — по правилам и весам каждого отдела, с цитатами, рекомендацией по каждому правилу и отчётами на 30 языках.', refs: ['fg:fg-voice-qa'] },
        { text: 'Старт без внедрения. Бесплатный тариф без карты; ассистенты, номера, кампании и правила оценки настраиваются в рабочем пространстве без проекта внедрения.', refs: ['fg:fg-pricing'] },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Five9, если…',
        items: [
          'у вас большой контакт-центр, которому нужны предиктивный обзвон, планирование смен и оценка 100% качества в масштабе;',
          'нужны номера и голосовое покрытие во многих странах от одного поставщика;',
          'вы работаете по HIPAA, PCI-DSS или DORA, нужны хранение данных в ЕС и корпоративные интеграции вроде ServiceNow или Epic.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'у вас небольшая или средняя команда и нужны голосовые ИИ-агенты на уже имеющихся линиях;',
          'CRM, чаты и обзвоны должны быть там же, где звонки;',
          'каждый записанный звонок нужно оценивать по чек-листу каждого отдела без долгого проекта.',
        ],
      },
    },
    switching: {
      heading: 'Перенос звонков с Five9 в Fineguide',
      intro: 'Fineguide отвечает через SIP, поэтому переход можно начать с одной линии или очереди, оставив остальное на месте.',
      steps: [
        { title: 'Начните с бесплатного тарифа', body: 'Создайте аккаунт Fineguide (без карты) и дайте ассистенту ваш сайт, документы и частые вопросы.' },
        { title: 'Подключите линию', body: { text: 'Подключите оператора или АТС стандартным SIP-аккаунтом или транком и добавьте линию как канал; закрепите номер за ассистентом и задайте языки, часы и номер перевода.', refs: ['fg:fg-voice-ai', 'fg:fg-call-center'] } },
        { title: 'Перенесите контакты', body: { text: 'Выгрузите контакты из вашей CRM и импортируйте их в Fineguide (CSV, TSV, XLS или XLSX); каждое слияние дубликатов подтверждает человек.', refs: ['fg:fg-llms'] } },
        { title: 'Запустите первый обзвон', body: { text: 'Соберите кампанию из CSV, контактов или тегов, задайте повторы и часы звонков и сделайте тестовый звонок на свой номер.', refs: ['fg:fg-campaigns'] } },
        { title: 'Оценивайте звонки', body: { text: 'Запишите правила каждого отдела в Voice QA и отправляйте записи загрузкой, через API или из подключённой АТС.', refs: ['fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      { q: 'Какая альтернатива Five9 подойдёт небольшой команде?', a: 'Fineguide подходит небольшим и средним командам, которым нужны голосовые ИИ-агенты на своих линиях, обзвоны, чаты, CRM и оценка звонков на одной платформе с бесплатным стартом. Five9 подходит крупным контакт-центрам, которым нужны его обзвон, планирование смен и глобальная голосовая сеть.', refs: ['fg:fg-call-center', 'five9:engage'] },
      { q: 'Есть ли у Five9 ИИ-агенты?', a: 'Да. Five9 указывает агентных ИИ-агентов и no-code интеллектуальных виртуальных агентов в голосе, чате, SMS и соцсетях, которые подключают живого оператора с контекстом, плюс Agent Assist для операторов.', refs: ['five9:engage'] },
      { q: 'Работает ли Fineguide с моей нынешней АТС?', a: 'Да. Fineguide подключается к оператору или АТС по SIP (UDP, TCP или TLS); несколько линий могут работать через одну АТС, и каждый номер звонит тому ассистенту, за которым закреплён.', refs: ['fg:fg-call-center'] },
      { q: 'Оценивает ли Fineguide 100% звонков?', a: 'Voice QA оценивает каждый записанный звонок, который вы отправляете — загрузкой, через API или из подключённой АТС, — по правилам каждого отдела. Agentic Quality Management у Five9 оценивает 100% взаимодействий в своей платформе.', refs: ['fg:fg-voice-qa', 'five9:insights'] },
      { q: 'Есть ли у Fineguide предиктивный обзвон?', a: 'Fineguide проводит исходящие кампании, которые ведут ИИ-ассистенты, с заданным числом одновременных звонков, повторами и часами звонков. Five9 предлагает предиктивный, прогрессивный и power-обзвон для живых операторов.', refs: ['fg:fg-campaigns', 'five9:engage'] },
    ],
    closing: { heading: 'Поставьте ИИ-агента на одну из ваших линий', body: 'Начните с бесплатного тарифа без карты или запишитесь на 30-минутную демонстрацию с вашей телефонией.' },
    extraLinks: [
      { href: '/ru/call-center/', label: 'Программа для колл-центра' },
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
      { href: '/ru/voice-qa/', label: 'Оценка звонков Voice QA' },
    ],
  },
};
