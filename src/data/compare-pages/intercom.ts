// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Every Intercom fact below was read on 2026-11-25 on intercom.com or fin.ai (Intercom's own site for Fin) and is
// linked in `sources`. Capabilities only: no prices, plans' prices, trials, free plans, discounts or billing terms.
// Plan NAMES appear only to say where a feature sits, as in src/data/compare.ts.
// Fineguide refs ('fg:…') use the ids already in FINEGUIDE_SOURCES (src/data/compare.ts).

const intercomData = {
  en: 'Hosted in the United States, the EU or Australia; a regional workspace is offered to new workspaces on Advanced and Expert.',
  ro: 'Găzduire în Statele Unite, UE sau Australia; un workspace regional se oferă pentru workspace-urile noi pe Advanced și Expert.',
  ru: 'Размещение в США, ЕС или Австралии; региональное рабочее пространство доступно для новых пространств на Advanced и Expert.',
  src: ['hosting'],
};

export const competitors = [
  {
    id: 'intercom',
    name: 'Intercom',
    url: 'https://www.intercom.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'Fin AI Agent on every plan (Essential, Advanced, Expert). It answers from help articles, documents, snippets, public URLs and connected sources (Zendesk, Salesforce, Guru, Confluence, Notion, Box), calls your systems through data connectors and hands off to your team. Fin also works inside Salesforce, HubSpot and Freshdesk. Copilot for agents is an add-on.',
        ro: 'Fin AI Agent pe toate planurile (Essential, Advanced, Expert). Răspunde din articolele de ajutor, documente, fragmente, URL-uri publice și surse conectate (Zendesk, Salesforce, Guru, Confluence, Notion, Box), apelează sistemele tale prin data connectors și predă conversația echipei. Fin funcționează și în Salesforce, HubSpot și Freshdesk. Copilot pentru operatori este un add-on.',
        ru: 'Fin AI Agent на всех тарифах (Essential, Advanced, Expert). Отвечает по статьям справки, документам, сниппетам, публичным ссылкам и подключённым источникам (Zendesk, Salesforce, Guru, Confluence, Notion, Box), обращается к вашим системам через data connectors и передаёт диалог команде. Fin работает и внутри Salesforce, HubSpot и Freshdesk. Copilot для операторов — отдельное дополнение.',
        src: ['plans', 'fin', 'fin-faq', 'data-connectors'],
      },
      channels: {
        en: 'Messenger (web, iOS, Android), email, phone, WhatsApp, SMS, Slack, Facebook Messenger and Instagram, and Fin can answer on each; the channels page also lists Telegram. A shared inbox and ticketing on every plan.',
        ro: 'Messenger (web, iOS, Android), email, telefon, WhatsApp, SMS, Slack, Facebook Messenger și Instagram, iar Fin poate răspunde pe fiecare; pagina canalelor listează și Telegram. Inbox comun și tichete pe toate planurile.',
        ru: 'Messenger (веб, iOS, Android), почта, телефон, WhatsApp, SMS, Slack, Facebook Messenger и Instagram, и Fin может отвечать в каждом; на странице каналов указан и Telegram. Общий inbox и тикеты на всех тарифах.',
        src: ['channels', 'fin-channels', 'plans'],
      },
      phone: {
        en: 'Intercom Phone, and Fin Voice on calls: buy an Intercom number, forward calls from your current provider, or connect over SIP with platforms such as Aircall, Amazon Connect, Five9, Genesys, NICE CXone, Talkdesk, Twilio Flex, Zendesk Talk and Zoom.',
        ro: 'Intercom Phone, iar Fin Voice la apeluri: cumperi un număr Intercom, redirecționezi apelurile de la furnizorul actual sau conectezi prin SIP platforme ca Aircall, Amazon Connect, Five9, Genesys, NICE CXone, Talkdesk, Twilio Flex, Zendesk Talk și Zoom.',
        ru: 'Intercom Phone и Fin Voice на звонках: можно купить номер Intercom, переадресовать звонки от текущего провайдера или подключить по SIP платформы вроде Aircall, Amazon Connect, Five9, Genesys, NICE CXone, Talkdesk, Twilio Flex, Zendesk Talk и Zoom.',
        src: ['fin-voice', 'channels'],
      },
      callScoring: {
        en: 'Monitors with Custom Scorecards review Fin and teammate conversations, with AI- or human-scored criteria, weights and a pass threshold, on the Pro add-on. The pages do not say whether phone calls are scored.',
        ro: 'Monitors, cu Custom Scorecards, verifică conversațiile lui Fin și ale colegilor, cu criterii notate de AI sau de un om, ponderi și un prag de promovare, în add-on-ul Pro. Paginile nu spun dacă sunt evaluate și apelurile telefonice.',
        ru: 'Monitors с Custom Scorecards проверяют диалоги Fin и сотрудников: критерии оценивает ИИ или человек, есть веса и проходной порог; это дополнение Pro. Оцениваются ли телефонные звонки, на страницах не сказано.',
        src: ['monitors', 'scorecards'],
      },
      languages: {
        en: 'Fin answers in 65 languages and regional variants, Romanian and Russian among them; a few (such as Bengali, Persian and Thai) are not on voice yet. The Intercom app is in seven languages: English, French, German, Italian, Japanese, Portuguese (Brazil) and Spanish.',
        ro: 'Fin răspunde în 65 de limbi și variante regionale, printre ele româna și rusa; câteva (de exemplu bengaleza, persana și thailandeza) nu sunt încă disponibile la voce. Aplicația Intercom este în șapte limbi: engleză, franceză, germană, italiană, japoneză, portugheză (Brazilia) și spaniolă.',
        ru: 'Fin отвечает на 65 языках и региональных вариантах, включая румынский и русский; несколько языков (например, бенгальский, персидский и тайский) пока недоступны для голоса. Интерфейс Intercom — на семи языках: английском, французском, немецком, итальянском, японском, португальском (Бразилия) и испанском.',
        src: ['fin-languages', 'languages'],
      },
      data: intercomData,
    },
    uiLanguages: {
      list: ['English', 'French', 'German', 'Italian', 'Japanese', 'Portuguese (Brazil)', 'Spanish'],
      romanian: false,
      russian: false,
    },
    dataLocation: intercomData,
    reviewComplaints: [],
    sources: [
      { id: 'plans', title: 'Intercom: Plans and features (Essential, Advanced, Expert, add-ons)', url: 'https://www.intercom.com/pricing' },
      { id: 'fin', title: 'Fin: The AI agent for customer service (channels, helpdesks, testing and QA)', url: 'https://fin.ai/' },
      { id: 'fin-faq', title: 'Intercom Help: Fin AI Agent FAQs (knowledge sources, handoff)', url: 'https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs' },
      { id: 'data-connectors', title: 'Intercom Help: How to set up Data connectors', url: 'https://www.intercom.com/help/en/articles/9916497-how-to-set-up-data-connectors' },
      { id: 'channels', title: 'Intercom Help: Channels explained', url: 'https://www.intercom.com/help/en/articles/9955432-channels-explained' },
      { id: 'fin-channels', title: 'Intercom Help: Choose channels to deploy Fin AI Agent', url: 'https://www.intercom.com/help/en/articles/13377077-choose-channels-to-deploy-fin-ai-agent' },
      { id: 'fin-voice', title: 'Intercom Help: Deploy Fin Voice', url: 'https://www.intercom.com/help/en/articles/10697275-deploy-fin-voice' },
      { id: 'monitors', title: 'Intercom Help: Monitors explained', url: 'https://www.intercom.com/help/en/articles/13584513-monitors-explained' },
      { id: 'scorecards', title: 'Intercom Help: Getting started with human teammate QA in Monitors', url: 'https://www.intercom.com/help/en/articles/14840301-getting-started-with-human-teammate-qa-in-monitors' },
      { id: 'fin-languages', title: 'Intercom Help: Set up Fin AI Agent’s multilingual support', url: 'https://www.intercom.com/help/en/articles/8322387-set-up-fin-ai-agent-s-multilingual-support' },
      { id: 'languages', title: 'Intercom Help: Use Intercom in your preferred language', url: 'https://www.intercom.com/help/en/articles/7035581-use-intercom-in-your-preferred-language' },
      { id: 'hosting', title: 'Intercom Help: Regional Data Hosting', url: 'https://www.intercom.com/help/en/articles/6124430-regional-data-hosting' },
      { id: 'export', title: 'Intercom Help: How to export your Intercom data for GDPR', url: 'https://www.intercom.com/help/en/articles/1636975-how-to-export-your-intercom-data-for-gdpr' },
    ],
  },
];

export const page = {
  slug: 'intercom',
  competitors: ['intercom'],
  label: { en: 'Intercom (Fin)', ro: 'Intercom (Fin)', ru: 'Intercom (Fin)' },
  summary: {
    en: 'A mature AI customer-service platform with Fin on chat, email and voice, against one platform where AI assistants, the CRM, AI calls on your own phone system and call scoring share one customer record.',
    ro: 'O platformă matură de customer service cu AI, cu Fin pe chat, email și voce, față în față cu o platformă unde asistenții AI, CRM-ul, apelurile AI pe propria centrală și evaluarea apelurilor au aceeași fișă de client.',
    ru: 'Зрелая платформа поддержки с ИИ-агентом Fin в чате, почте и голосе — против платформы, где ИИ-ассистенты, CRM, ИИ-звонки через вашу телефонию и оценка звонков работают с одной карточкой клиента.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Intercom alternative: Fineguide vs Intercom and Fin',
    description: 'An Intercom alternative compared fact by fact: the Fin AI agent, channels, AI phone calls, call scoring, languages and data, checked on Intercom’s pages.',
    crumb: 'Intercom',
    h1: 'Fineguide vs Intercom:',
    h1Accent: 'AI on chat, email and your own phone lines',
    shortAnswer:
      'Intercom is the larger, more mature customer-service platform: Fin answers on chat, email, phone, WhatsApp, SMS, social channels and Slack in 65 languages and regional variants, and also works inside Salesforce, HubSpot and Freshdesk. Fineguide is a smaller AI-first platform where AI assistants, a sales CRM, a team inbox with your own email, AI phone calls over your own phone system and Voice QA call scoring share one customer record. Choose Intercom for a support help desk at scale; choose Fineguide when sales, support and calls belong together.',
    tableHeading: 'Intercom (with Fin) vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Intercom is stronger',
      items: [
        { text: 'Fin’s reach. Fin answers in 65 languages and regional variants, on Messenger (web, iOS and Android), email, phone, WhatsApp, Facebook Messenger, Instagram, SMS and Slack.', refs: ['intercom:fin-languages', 'intercom:fin-channels'] },
        { text: 'Fin in the help desk you already have. Fin is native to Intercom and also supported on Salesforce, HubSpot and Freshdesk, and it learns from content in Zendesk, Salesforce, Guru, Confluence, Notion and Box.', refs: ['intercom:fin', 'intercom:fin-faq'] },
        { text: 'More ways onto the phone. Fin Voice runs on a number bought from Intercom, on calls forwarded from your provider, or over SIP with contact-center platforms such as Amazon Connect, Five9, Genesys, NICE CXone, Talkdesk and Zoom.', refs: ['intercom:fin-voice'] },
        { text: 'Quality review of Fin and of people. Monitors with Custom Scorecards review both Fin’s and teammates’ conversations, with criteria scored by AI or by a person, weights and a pass threshold (Pro add-on).', refs: ['intercom:monitors', 'intercom:scorecards'] },
        { text: 'A full support suite around the AI: ticketing on every plan, a private and multilingual Help Center and Workflows on Advanced, multibrand Messenger and Help Center with SSO and HIPAA support on Expert, and product tours, checklists and surveys as an add-on.', refs: ['intercom:plans'] },
        { text: 'A choice of hosting region (the United States, the EU or Australia), and an app in seven interface languages.', refs: ['intercom:hosting', 'intercom:languages'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'AI calls both ways on your own phone system. Assistants answer live inbound calls and make outbound ones over your SIP, in 14 call languages. They greet known callers by first name from the CRM, transfer to a person on request and save callback requests as CRM tasks; outbound campaigns (outreach, survey, promotion) run on the same assistants.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns'] },
        { text: 'Every recorded phone call scored. Voice QA transcribes each call and scores it against each department’s own rules and weights, with quotes and a suggestion for every rule, agent scorecards and reports in 30 languages. Recordings arrive from a connected phone system, the Fineguide recording app for Android, an upload or the API. Intercom’s Monitors pages describe reviewing conversations and do not mention phone calls.', refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'intercom:monitors'] },
        { text: 'A sales CRM on the same record. Contacts, companies, deals on a board or a table (value, probability, expected close date), tasks with two-way Google Calendar sync, and sales reports with a weighted forecast and win rate. On paid plans, assistants write the fields you define, such as intent or budget, into CRM leads.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'More places to meet customers. Besides the website widget, WhatsApp, Instagram, Messenger and Slack, Fineguide assistants answer on Telegram (a bot or a Telegram user account) and Discord, inside JivoChat with handover to Jivo operators, and inside amoCRM and Kommo.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        'A knowledge base per customer. Through the REST API, each of your own users gets a learning context under the id you already use for them; one assistant then answers each user only from their own content plus your shared answers.',
        { text: 'Automations next to the AI: n8n hosted by Fineguide or your own instance, assistant actions built from a pasted cURL command, webhooks on conversation events, and a visual workflow builder on paid plans (workflow runs use credits).', refs: ['fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Intercom if…',
        items: [
          'you run a large support team and want a full help desk with ticketing, a multilingual help center and workflows;',
          'you want an AI agent inside the help desk you already use, such as Salesforce, HubSpot or Freshdesk;',
          'you want Fin on phone numbers bought from Intercom or on a contact-center platform such as Five9, Genesys or Talkdesk;',
          'you need to choose a hosting region, or need SSO and HIPAA support.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'sales and support serve the same customers, and you want chats, email, calls and deals on one record;',
          'you want AI on live calls over the phone system you already have, outbound campaigns included;',
          'you run a call center and want every recorded call scored against your own rules;',
          'your customers write on Telegram, Discord or JivoChat, or your team works in amoCRM or Kommo.',
        ],
      },
    },
    switching: {
      heading: 'Switching from Intercom',
      intro: 'Contacts come over in a spreadsheet and channels reconnect one at a time, so Intercom and Fineguide can run side by side until the team is ready.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed), give an assistant your website, help articles and documents, and test it in the chat widget.' },
        { title: 'Export from Intercom', body: { text: 'Export users and leads as CSV from the Intercom app; conversations come out as JSON through Intercom’s API or its data export.', refs: ['intercom:export'] } },
        { title: 'Import into Fineguide', body: { text: 'Import the files (CSV, TSV, XLS or XLSX), map the columns to custom fields, and review duplicates: a person confirms every merge.', refs: ['fg:fg-llms'] } },
        { title: 'Connect channels and email', body: { text: 'Add your own mailboxes over IMAP and SMTP, then WhatsApp, Telegram, Instagram or Messenger, and route them with rules and departments.', refs: ['fg:fg-messages'] } },
        { title: 'Rebuild your automations', body: { text: 'Turn the API calls behind your Fin data connectors into assistant actions from a cURL command, and move the rest into n8n or Fineguide workflows on paid plans.', refs: ['fg:fg-llms'] } },
      ],
    },
    faq: [
      {
        q: 'What is a good Intercom alternative?',
        a: 'It depends on what you use Intercom for. For a support help desk at scale, Intercom is hard to replace; for teams that also sell and take phone calls, Fineguide puts AI assistants, a CRM, AI phone calls and call scoring on one customer record.',
        refs: ['fg:fg-llms'],
      },
      {
        q: 'Is there an Intercom Fin alternative that also answers phone calls?',
        a: 'Fineguide is one, and Fin itself answers calls through Fin Voice. Fineguide’s assistants answer and make live calls over your own phone system (SIP) in 14 languages, run outbound call campaigns and keep every call as a transcript on the customer record.',
        refs: ['intercom:fin-voice', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
      },
      {
        q: 'How many languages does Intercom Fin speak?',
        a: 'Intercom’s help center lists 65 languages and regional variants for Fin over chat; a few, such as Bengali, Persian and Thai, are not available on voice yet. Fineguide’s AI phone calls run in 14 languages and its chat widget interface comes in 24.',
        refs: ['intercom:fin-languages', 'fg:fg-llms'],
      },
      {
        q: 'Can I move from Intercom to Fineguide without losing data?',
        a: 'Yes. Export users and leads from Intercom as CSV (conversations come out as JSON through its API), then import them into the Fineguide CRM, which reads CSV, TSV, XLS and XLSX and asks a person to confirm every duplicate merge.',
        refs: ['intercom:export', 'fg:fg-llms'],
      },
      {
        q: 'Does Fineguide work with Zendesk or Help Scout?',
        a: 'Yes. Zendesk and Help Scout are among Fineguide’s integrations: on paid plans, tickets an assistant opens can go to either, so the support team keeps working where it is.',
        refs: ['fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'See Fineguide on your own conversations',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your operation.',
    },
    extraLinks: [
      { href: '/help-desk/', label: 'AI help desk and ticketing' },
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
    ],
  },

  ro: {
    title: 'Alternativă la Intercom: Fineguide vs Intercom și Fin',
    description: 'Alternativă la Intercom comparată punct cu punct: agentul AI Fin, canale, apeluri AI, evaluarea apelurilor, limbi și date, verificate pe paginile Intercom.',
    crumb: 'Intercom',
    h1: 'Fineguide vs Intercom:',
    h1Accent: 'AI pe chat, email și pe propriile linii telefonice',
    shortAnswer:
      'Intercom este platforma de customer service mai mare și mai matură: Fin răspunde pe chat, email, telefon, WhatsApp, SMS, rețele sociale și Slack, în 65 de limbi și variante regionale, și funcționează și în Salesforce, HubSpot și Freshdesk. Fineguide este o platformă mai mică, construită pe AI, în care asistenții AI, un CRM de vânzări, un inbox de echipă cu emailul tău, apelurile AI prin propria centrală și evaluarea apelurilor cu Voice QA folosesc aceeași fișă de client. Alege Intercom pentru un help desk de suport la scară mare; alege Fineguide când vânzările, suportul și apelurile trebuie să stea împreună.',
    tableHeading: 'Intercom (cu Fin) și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Intercom este mai puternic',
      items: [
        { text: 'Acoperirea lui Fin. Fin răspunde în 65 de limbi și variante regionale, în Messenger (web, iOS și Android), pe email, telefon, WhatsApp, Facebook Messenger, Instagram, SMS și Slack.', refs: ['intercom:fin-languages', 'intercom:fin-channels'] },
        { text: 'Fin în help desk-ul pe care îl ai deja. Fin este nativ în Intercom și funcționează și pe Salesforce, HubSpot și Freshdesk, iar conținutul îl poate lua din Zendesk, Salesforce, Guru, Confluence, Notion și Box.', refs: ['intercom:fin', 'intercom:fin-faq'] },
        { text: 'Mai multe căi spre telefon. Fin Voice merge pe un număr cumpărat de la Intercom, pe apeluri redirecționate de la furnizorul tău sau prin SIP, cu platforme de contact center ca Amazon Connect, Five9, Genesys, NICE CXone, Talkdesk și Zoom.', refs: ['intercom:fin-voice'] },
        { text: 'Controlul calității pentru Fin și pentru oameni. Monitors, cu Custom Scorecards, verifică atât conversațiile lui Fin, cât și pe ale colegilor, cu criterii notate de AI sau de un om, ponderi și un prag de promovare (add-on-ul Pro).', refs: ['intercom:monitors', 'intercom:scorecards'] },
        { text: 'O suită completă de suport în jurul AI-ului: tichete pe toate planurile, Help Center privat și multilingv și Workflows pe Advanced, Messenger și Help Center pentru mai multe branduri, cu SSO și suport HIPAA, pe Expert, plus tururi de produs, checklisturi și sondaje ca add-on.', refs: ['intercom:plans'] },
        { text: 'Regiunea de găzduire la alegere (Statele Unite, UE sau Australia) și o aplicație în șapte limbi de interfață.', refs: ['intercom:hosting', 'intercom:languages'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'Apeluri AI în ambele sensuri, pe propria centrală. Asistenții răspund la apelurile primite și sună ei înșiși prin SIP-ul tău, în 14 limbi. Îi salută pe clienții cunoscuți după prenume, din CRM, transferă apelul unui om la cerere și salvează cererile de revenire ca sarcini în CRM; campaniile de apeluri (prospectare, sondaj, promoție) le fac aceiași asistenți.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns'] },
        { text: 'Fiecare apel înregistrat, evaluat. Voice QA transcrie fiecare apel și îl notează după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă, fișe de scor pe operator și rapoarte în 30 de limbi. Înregistrările vin de la o centrală conectată, din aplicația Fineguide pentru Android, prin încărcare sau prin API. Paginile Intercom despre Monitors vorbesc de conversații și nu menționează apelurile telefonice.', refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'intercom:monitors'] },
        { text: 'Un CRM de vânzări pe aceeași fișă. Contacte, companii, oportunități pe tablă sau în tabel (valoare, probabilitate, data estimată de închidere), sarcini sincronizate în ambele sensuri cu Google Calendar și rapoarte de vânzări cu prognoză ponderată și rată de câștig. Pe planurile plătite, asistenții scriu în lead-urile din CRM câmpurile alese de tine, de exemplu intenția sau bugetul.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Mai multe locuri în care îți găsești clienții. Pe lângă widgetul de pe site, WhatsApp, Instagram, Messenger și Slack, asistenții Fineguide răspund pe Telegram (bot sau cont de utilizator Telegram) și Discord, în JivoChat, cu predare către operatorii Jivo, și direct în amoCRM și Kommo.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        'O bază de cunoștințe pentru fiecare client. Prin REST API, fiecare utilizator al tău primește un context de învățare sub id-ul pe care îl folosești deja pentru el; un singur asistent îi răspunde apoi fiecăruia doar din conținutul lui și din răspunsurile comune.',
        { text: 'Automatizări lângă AI: n8n găzduit de Fineguide sau propriul tău n8n, acțiuni ale asistentului construite dintr-o comandă cURL, webhook-uri la evenimentele conversației și un constructor vizual de workflow-uri pe planurile plătite (rulările consumă credite).', refs: ['fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege Intercom dacă…',
        items: [
          'ai o echipă mare de suport și vrei un help desk complet, cu tichete, centru de ajutor multilingv și workflow-uri;',
          'vrei un agent AI în help desk-ul pe care îl folosești deja, de exemplu Salesforce, HubSpot sau Freshdesk;',
          'vrei Fin pe numere cumpărate de la Intercom sau pe o platformă de contact center ca Five9, Genesys sau Talkdesk;',
          'trebuie să alegi regiunea de găzduire sau ai nevoie de SSO și suport HIPAA.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'vânzările și suportul lucrează cu aceiași clienți și vrei chaturile, emailul, apelurile și oportunitățile pe o singură fișă;',
          'vrei AI pe apeluri în direct prin centrala pe care o ai deja, inclusiv campanii de apeluri;',
          'ai un call center și vrei ca fiecare apel înregistrat să fie evaluat după regulile tale;',
          'clienții îți scriu pe Telegram, Discord sau JivoChat ori echipa lucrează în amoCRM sau Kommo.',
        ],
      },
    },
    switching: {
      heading: 'Cum treci de la Intercom',
      intro: 'Contactele vin într-un fișier tabelar, iar canalele se reconectează pe rând, așa că Intercom și Fineguide pot merge în paralel până când echipa e pregătită.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card), dă-i unui asistent site-ul, articolele de ajutor și documentele tale și testează-l în widgetul de chat.' },
        { title: 'Exportă din Intercom', body: { text: 'Exportă utilizatorii și lead-urile în CSV din aplicația Intercom; conversațiile ies în format JSON prin API-ul Intercom sau prin exportul de date.', refs: ['intercom:export'] } },
        { title: 'Importă în Fineguide', body: { text: 'Importă fișierele (CSV, TSV, XLS sau XLSX), potrivește coloanele cu câmpurile personalizate și verifică duplicatele: fiecare unire o confirmă un om.', refs: ['fg:fg-llms'] } },
        { title: 'Conectează canalele și emailul', body: { text: 'Adaugă-ți căsuțele de email prin IMAP și SMTP, apoi WhatsApp, Telegram, Instagram sau Messenger, și distribuie conversațiile cu reguli și departamente.', refs: ['fg:fg-messages'] } },
        { title: 'Refă automatizările', body: { text: 'Transformă apelurile API din spatele data connectors ale lui Fin în acțiuni ale asistentului dintr-o comandă cURL, iar restul mută-l în n8n sau în workflow-urile Fineguide de pe planurile plătite.', refs: ['fg:fg-llms'] } },
      ],
    },
    faq: [
      {
        q: 'Care este o alternativă bună la Intercom?',
        a: 'Depinde pentru ce folosești Intercom. Pentru un help desk de suport la scară mare, Intercom e greu de înlocuit; pentru echipele care și vând, și răspund la telefon, Fineguide pune asistenții AI, CRM-ul, apelurile AI și evaluarea apelurilor pe aceeași fișă de client.',
        refs: ['fg:fg-llms'],
      },
      {
        q: 'Există o alternativă la Intercom Fin care răspunde și la telefon?',
        a: 'Fineguide este una, iar Fin însuși răspunde la apeluri prin Fin Voice. Asistenții Fineguide răspund și sună în direct prin propria ta centrală (SIP), în 14 limbi, derulează campanii de apeluri și păstrează fiecare apel ca transcriere în fișa clientului.',
        refs: ['intercom:fin-voice', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
      },
      {
        q: 'Intercom Fin vorbește română?',
        a: 'Da, pe chat: centrul de ajutor Intercom listează pentru Fin 65 de limbi și variante regionale, printre ele româna și rusa; interfața aplicației Intercom este însă în șapte limbi, fără română. Apelurile AI Fineguide merg în 14 limbi, inclusiv româna, iar interfața widgetului de chat este în 24.',
        refs: ['intercom:fin-languages', 'intercom:languages', 'fg:fg-llms'],
      },
      {
        q: 'Pot trece de la Intercom la Fineguide fără să pierd date?',
        a: 'Da. Exportă utilizatorii și lead-urile din Intercom în CSV (conversațiile ies în JSON prin API), apoi importă-le în CRM-ul Fineguide, care citește CSV, TSV, XLS și XLSX și cere confirmarea unui om pentru fiecare unire de duplicate.',
        refs: ['intercom:export', 'fg:fg-llms'],
      },
      {
        q: 'Fineguide funcționează cu Zendesk sau Help Scout?',
        a: 'Da. Zendesk și Help Scout sunt printre integrările Fineguide: pe planurile plătite, tichetele deschise de asistent pot ajunge în oricare dintre ele, iar echipa de suport lucrează mai departe acolo unde e obișnuită.',
        refs: ['fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Vezi Fineguide pe conversațiile tale',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe operațiunile tale.',
    },
    extraLinks: [
      { href: '/ro/help-desk/', label: 'Help desk cu AI și tichete' },
      { href: '/ro/voice-ai/', label: 'Telefonia AI pe propria centrală' },
    ],
  },

  ru: {
    title: 'Альтернатива Intercom: Fineguide vs Intercom и Fin',
    description: 'Альтернатива и аналог Intercom: сравниваем ИИ-агента Fin, каналы, ИИ-звонки, оценку звонков, языки и данные по официальным страницам Intercom.',
    crumb: 'Intercom',
    h1: 'Fineguide vs Intercom:',
    h1Accent: 'ИИ в чатах, почте и на ваших телефонных линиях',
    shortAnswer:
      'Intercom — более крупная и зрелая платформа поддержки клиентов: Fin отвечает в чате, почте, по телефону, в WhatsApp, SMS, соцсетях и Slack на 65 языках и региональных вариантах и работает также внутри Salesforce, HubSpot и Freshdesk. Fineguide — платформа поменьше, изначально построенная на ИИ: ИИ-ассистенты, CRM для продаж, общий inbox с вашей почтой, ИИ-звонки через вашу телефонию и оценка звонков в Voice QA работают с одной карточкой клиента. Выбирайте Intercom ради службы поддержки большого масштаба; выбирайте Fineguide, когда продажи, поддержка и звонки должны быть вместе.',
    tableHeading: 'Intercom (с Fin) и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Intercom',
      items: [
        { text: 'Охват Fin. Fin отвечает на 65 языках и региональных вариантах — в Messenger (веб, iOS и Android), почте, по телефону, в WhatsApp, Facebook Messenger, Instagram, SMS и Slack.', refs: ['intercom:fin-languages', 'intercom:fin-channels'] },
        { text: 'Fin в вашем текущем хелпдеске. Fin встроен в Intercom и поддерживается в Salesforce, HubSpot и Freshdesk, а знания может брать из Zendesk, Salesforce, Guru, Confluence, Notion и Box.', refs: ['intercom:fin', 'intercom:fin-faq'] },
        { text: 'Больше способов подключить телефон. Fin Voice работает на номере, купленном у Intercom, на звонках с переадресацией от вашего провайдера или по SIP с платформами контакт-центров: Amazon Connect, Five9, Genesys, NICE CXone, Talkdesk, Zoom.', refs: ['intercom:fin-voice'] },
        { text: 'Контроль качества и для Fin, и для людей. Monitors с Custom Scorecards проверяют диалоги и Fin, и сотрудников: критерии оценивает ИИ или человек, есть веса и проходной порог (дополнение Pro).', refs: ['intercom:monitors', 'intercom:scorecards'] },
        { text: 'Полный набор для поддержки вокруг ИИ: тикеты на всех тарифах, закрытый и многоязычный Help Center и Workflows на Advanced, Messenger и Help Center для нескольких брендов с SSO и поддержкой HIPAA на Expert, а также туры по продукту, чек-листы и опросы как дополнение.', refs: ['intercom:plans'] },
        { text: 'Выбор региона размещения (США, ЕС или Австралия) и интерфейс на семи языках.', refs: ['intercom:hosting', 'intercom:languages'] },
      ],
    },
    fineguideStronger: {
      heading: 'В чём сильнее Fineguide',
      items: [
        { text: 'ИИ-звонки в обе стороны через вашу телефонию. Ассистенты принимают входящие и совершают исходящие звонки через ваш SIP на 14 языках. Они здороваются со знакомыми клиентами по имени из CRM, переводят звонок на человека по просьбе и сохраняют запросы на перезвон как задачи в CRM; кампании обзвона (привлечение, опрос, промо) ведут те же ассистенты.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns'] },
        { text: 'Оценка каждого записанного звонка. Voice QA расшифровывает каждый звонок и оценивает его по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу, карточками сотрудников и отчётами на 30 языках. Записи приходят из подключённой телефонии, из приложения Fineguide для записи звонков на Android, загрузкой или через API. Страницы Intercom о Monitors говорят о диалогах и не упоминают телефонные звонки.', refs: ['fg:fg-voice-qa', 'fg:fg-llms', 'intercom:monitors'] },
        { text: 'CRM для продаж в той же карточке. Контакты, компании, сделки на доске или в таблице (сумма, вероятность, ожидаемая дата закрытия), задачи с двусторонней синхронизацией с Google Calendar и отчёты по продажам с взвешенным прогнозом и конверсией в выигрыш. На платных тарифах ассистенты записывают в лиды CRM нужные вам поля, например намерение или бюджет.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Больше мест, где вас находят клиенты. Кроме виджета на сайте, WhatsApp, Instagram, Messenger и Slack, ассистенты Fineguide отвечают в Telegram (бот или пользовательский аккаунт Telegram) и Discord, внутри JivoChat с передачей операторам Jivo, а также внутри amoCRM и Kommo.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        'База знаний для каждого клиента. Через REST API каждый ваш пользователь получает свой контекст обучения под тем id, который вы уже для него используете; один ассистент отвечает каждому только по его материалам и вашим общим ответам.',
        { text: 'Автоматизации рядом с ИИ: n8n, размещённый у Fineguide, или ваш собственный, действия ассистента из вставленной команды cURL, вебхуки на события диалога и визуальный конструктор сценариев на платных тарифах (запуски расходуют кредиты).', refs: ['fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Intercom, если…',
        items: [
          'у вас большая служба поддержки и нужен полноценный хелпдеск с тикетами, многоязычным центром помощи и сценариями;',
          'вам нужен ИИ-агент внутри уже используемого хелпдеска, например Salesforce, HubSpot или Freshdesk;',
          'вам нужен Fin на номерах, купленных у Intercom, или на платформе контакт-центра вроде Five9, Genesys или Talkdesk;',
          'нужно выбрать регион размещения или нужны SSO и поддержка HIPAA.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'продажи и поддержка работают с одними и теми же клиентами, и вы хотите видеть чаты, почту, звонки и сделки в одной карточке;',
          'вам нужен ИИ на живых звонках через уже имеющуюся телефонию, включая исходящие обзвоны;',
          'у вас колл-центр и нужна оценка каждого записанного звонка по вашим правилам;',
          'клиенты пишут вам в Telegram, Discord или JivoChat, или команда работает в amoCRM или Kommo.',
        ],
      },
    },
    switching: {
      heading: 'Как перейти с Intercom',
      intro: 'Контакты переносятся в таблице, а каналы подключаются по одному, поэтому Intercom и Fineguide могут работать параллельно, пока команда не будет готова.',
      steps: [
        { title: 'Начните с тарифа Free', body: 'Создайте аккаунт Fineguide (без карты), загрузите в ассистента свой сайт, статьи справки и документы и проверьте его в чат-виджете.' },
        { title: 'Выгрузите данные из Intercom', body: { text: 'Выгрузите пользователей и лидов в CSV из интерфейса Intercom; диалоги выгружаются в JSON через API Intercom или его экспорт данных.', refs: ['intercom:export'] } },
        { title: 'Импортируйте в Fineguide', body: { text: 'Загрузите файлы (CSV, TSV, XLS или XLSX), сопоставьте колонки с вашими полями и проверьте дубли: каждое объединение подтверждает человек.', refs: ['fg:fg-llms'] } },
        { title: 'Подключите каналы и почту', body: { text: 'Добавьте свои почтовые ящики по IMAP и SMTP, затем WhatsApp, Telegram, Instagram или Messenger и распределяйте диалоги по правилам и отделам.', refs: ['fg:fg-messages'] } },
        { title: 'Перенесите автоматизации', body: { text: 'Превратите API-вызовы из data connectors Fin в действия ассистента из команды cURL, а остальное перенесите в n8n или в сценарии Fineguide на платных тарифах.', refs: ['fg:fg-llms'] } },
      ],
    },
    faq: [
      {
        q: 'Какой аналог Intercom выбрать?',
        a: 'Зависит от того, для чего вы используете Intercom. Для службы поддержки большого масштаба Intercom сложно заменить; для команд, которые ещё и продают, и принимают звонки, Fineguide объединяет ИИ-ассистентов, CRM, ИИ-звонки и оценку звонков в одной карточке клиента.',
        refs: ['fg:fg-llms'],
      },
      {
        q: 'Есть ли альтернатива Intercom Fin, которая отвечает и на звонки?',
        a: 'Fineguide — одна из них, а сам Fin отвечает на звонки через Fin Voice. Ассистенты Fineguide принимают и совершают живые звонки через вашу телефонию (SIP) на 14 языках, ведут исходящие обзвоны и сохраняют каждый звонок как расшифровку в карточке клиента.',
        refs: ['intercom:fin-voice', 'fg:fg-voice-ai', 'fg:fg-campaigns'],
      },
      {
        q: 'Есть ли Intercom на русском?',
        a: 'Fin отвечает на русском: справка Intercom указывает для чата 65 языков и региональных вариантов, включая русский. Интерфейс самого Intercom — на семи языках, русского среди них нет. ИИ-звонки Fineguide работают на 14 языках, включая русский, а интерфейс чат-виджета — на 24.',
        refs: ['intercom:fin-languages', 'intercom:languages', 'fg:fg-llms'],
      },
      {
        q: 'Можно ли перейти с Intercom на Fineguide без потери данных?',
        a: 'Да. Выгрузите пользователей и лидов из Intercom в CSV (диалоги выгружаются в JSON через API), затем импортируйте их в CRM Fineguide: она читает CSV, TSV, XLS и XLSX и просит человека подтвердить каждое объединение дублей.',
        refs: ['intercom:export', 'fg:fg-llms'],
      },
      {
        q: 'Работает ли Fineguide с Zendesk или Help Scout?',
        a: 'Да. Zendesk и Help Scout входят в интеграции Fineguide: на платных тарифах тикеты, созданные ассистентом, могут уходить в любой из них, и поддержка продолжает работать там, где привыкла.',
        refs: ['fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Посмотрите Fineguide на ваших диалогах',
      body: 'Начните с тарифа Free без карты или запишитесь на 30-минутную демонстрацию на ваших задачах.',
    },
    extraLinks: [
      { href: '/ru/help-desk/', label: 'Хелпдеск с ИИ и тикетами' },
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
    ],
  },
};
