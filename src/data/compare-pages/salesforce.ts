// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Salesforce's help centre (help.salesforce.com) renders only in a browser, so its "supported languages" article
// could not be read: `languages` and `uiLanguages` stay null. No price, edition price, trial, free plan, credit
// allowance or billing term is used; edition NAMES appear only to say where a feature sits.

export const competitors = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    url: 'https://www.salesforce.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'Agentforce: AI agents on the web, on the phone and in apps, grounded in Salesforce CRM and Data 360 data, built in the low-code Agent Builder and handing complex cases to people. In Sales Cloud, Agentforce for Sales is listed with Max; the editions page notes AI can be added to Core and above, and Starter Suite and Pro Suite include a conversational AI assistant.',
        ro: 'Agentforce: agenți AI pe web, la telefon și în aplicații, bazați pe datele din Salesforce CRM și Data 360, construiți în Agent Builder (low-code) și care predau cazurile complexe oamenilor. În Sales Cloud, Agentforce for Sales apare la Max; pagina edițiilor notează că AI se poate adăuga de la Core în sus, iar Starter Suite și Pro Suite includ un asistent AI conversațional.',
        ru: 'Agentforce: ИИ-агенты на сайте, по телефону и в приложениях, опираются на данные Salesforce CRM и Data 360, настраиваются в low-code Agent Builder и передают сложные случаи людям. В Sales Cloud Agentforce for Sales указан в редакции Max; на странице редакций отмечено, что ИИ можно добавить начиная с Core, а в Starter Suite и Pro Suite есть разговорный ИИ-ассистент.',
        src: ['agentforce', 'editions', 'small-business'],
      },
      channels: {
        en: 'Contact Center Digital: web and in-app chat, SMS, WhatsApp, Facebook Messenger, Apple Messages for Business and LINE, plus Bring Your Own Channel for other services. Some editions include these, others add them as products. AI agents can answer on chat, SMS and WhatsApp.',
        ro: 'Contact Center Digital: chat pe web și în aplicație, SMS, WhatsApp, Facebook Messenger, Apple Messages for Business și LINE, plus Bring Your Own Channel pentru alte servicii. Unele ediții le includ, la altele se adaugă ca produse separate. Agenții AI pot răspunde pe chat, SMS și WhatsApp.',
        ru: 'Contact Center Digital: чат на сайте и в приложении, SMS, WhatsApp, Facebook Messenger, Apple Messages for Business и LINE, а также Bring Your Own Channel для других сервисов. В одних редакциях они уже есть, в другие добавляются отдельными продуктами. ИИ-агенты могут отвечать в чате, SMS и WhatsApp.',
        src: ['digital'],
      },
      phone: {
        en: 'Agentforce Voice: AI voice agents on the phone, on click-to-talk on a website and in apps, in English, French, Spanish, Italian, German, Portuguese, Japanese and other languages, transferring to a person with the conversation history. Native voice is listed for the Max edition of the contact center; other telephony connects through partner CCaaS integrations from AgentExchange.',
        ro: 'Agentforce Voice: agenți vocali AI la telefon, prin click-to-talk pe site și în aplicații, în engleză, franceză, spaniolă, italiană, germană, portugheză, japoneză și alte limbi, cu transfer către un om împreună cu istoricul conversației. Vocea nativă apare la ediția Max a contact centerului; altă telefonie se conectează prin integrări CCaaS ale partenerilor din AgentExchange.',
        ru: 'Agentforce Voice: голосовые ИИ-агенты по телефону, через click-to-talk на сайте и в приложениях, на английском, французском, испанском, итальянском, немецком, португальском, японском и других языках, с переводом на человека вместе с историей разговора. Встроенная телефония указана для редакции Max контакт-центра; другая телефония подключается через CCaaS-интеграции партнёров из AgentExchange.',
        src: ['voice', 'contact-center'],
      },
      callScoring: {
        en: 'Conversation Intelligence in every Sales Cloud edition: call insights, custom keywords to track and coaching insights for managers. The contact center automatically reviews 100% of human and AI agent interactions against defined quality standards.',
        ro: 'Conversation Intelligence în toate edițiile Sales Cloud: analiza apelurilor, cuvinte-cheie urmărite la alegere și analize de coaching pentru manageri. Contact centerul verifică automat 100% din interacțiunile agenților umani și AI după standarde de calitate definite.',
        ru: 'Conversation Intelligence во всех редакциях Sales Cloud: аналитика звонков, отслеживание своих ключевых слов и аналитика для коучинга менеджеров. Контакт-центр автоматически проверяет 100% разговоров людей и ИИ-агентов по заданным стандартам качества.',
        src: ['ci', 'contact-center'],
      },
      languages: null,
      data: {
        en: 'Hyperforce regions include the US, UK, Germany, India and Japan; customer data is stored in the country where the org is located, and data can be kept and processed strictly within the EU.',
        ro: 'Regiunile Hyperforce includ SUA, Regatul Unit, Germania, India și Japonia; datele clienților sunt stocate în țara în care se află organizația (org-ul), iar datele pot fi păstrate și prelucrate strict în UE.',
        ru: 'Регионы Hyperforce включают США, Великобританию, Германию, Индию и Японию; данные клиентов хранятся в стране, где размещена организация (org), а данные можно хранить и обрабатывать строго в пределах ЕС.',
        src: ['hyperforce'],
      },
    },
    uiLanguages: null, // help.salesforce.com could not be read (browser-only page)
    dataLocation: {
      en: 'Hyperforce regions include the US, UK, Germany, India and Japan; customer data is stored in the country where the org is located, and data can be kept and processed strictly within the EU.',
      ro: 'Regiunile Hyperforce includ SUA, Regatul Unit, Germania, India și Japonia; datele clienților sunt stocate în țara în care se află organizația (org-ul), iar datele pot fi păstrate și prelucrate strict în UE.',
      ru: 'Регионы Hyperforce включают США, Великобританию, Германию, Индию и Японию; данные клиентов хранятся в стране, где размещена организация (org), а данные можно хранить и обрабатывать строго в пределах ЕС.',
      src: ['hyperforce'],
    },
    reviewComplaints: [],
    sources: [
      { id: 'editions', title: 'Salesforce: Sales Cloud editions and features', url: 'https://www.salesforce.com/sales/pricing/' },
      { id: 'small-business', title: 'Salesforce: Small business (Starter Suite and Pro Suite)', url: 'https://www.salesforce.com/small-business/' },
      { id: 'agentforce', title: 'Salesforce: Agentforce', url: 'https://www.salesforce.com/agentforce/' },
      { id: 'voice', title: 'Salesforce: Agentforce Voice', url: 'https://www.salesforce.com/agentforce/voice/' },
      { id: 'ci', title: 'Salesforce: Conversation intelligence for sales', url: 'https://www.salesforce.com/sales/conversation-intelligence/' },
      { id: 'digital', title: 'Salesforce: Digital customer engagement (messaging channels)', url: 'https://www.salesforce.com/service/digital-customer-engagement-platform/' },
      { id: 'contact-center', title: 'Salesforce: Contact center', url: 'https://www.salesforce.com/service/contact-center/' },
      { id: 'hyperforce', title: 'Salesforce: Hyperforce (data residency)', url: 'https://www.salesforce.com/products/platform/hyperforce/' },
      { id: 'appexchange', title: 'Salesforce AppExchange, now AgentExchange', url: 'https://appexchange.salesforce.com/' },
      { id: 'export', title: 'Salesforce Trailhead: Export your data (Data Export Service and Data Loader)', url: 'https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management/lex_implementation_data_export' },
    ],
  },
];

export const page = {
  slug: 'salesforce',
  competitors: ['salesforce'],
  label: { en: 'Salesforce', ro: 'Salesforce', ru: 'Salesforce' },
  summary: {
    en: 'The broadest CRM platform, with Agentforce, a contact center and a partner ecosystem, against an AI-first CRM a customer-facing team sets up itself.',
    ro: 'Cea mai vastă platformă CRM, cu Agentforce, contact center și un ecosistem de parteneri, față în față cu un CRM construit pe AI, pe care echipa îl pune singură în funcțiune.',
    ru: 'Самая широкая CRM-платформа с Agentforce, контакт-центром и экосистемой партнёров — против CRM, построенной вокруг ИИ, которую команда запускает сама.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Salesforce alternative for small business: Fineguide',
    description: 'A Salesforce alternative compared fact by fact: Agentforce, messaging channels, AI phone calls, call scoring and data, checked on Salesforce’s own pages.',
    crumb: 'Salesforce',
    h1: 'Fineguide vs Salesforce:',
    h1Accent: 'an AI-first CRM your team sets up itself',
    shortAnswer:
      'Salesforce is the broadest CRM platform: Sales Cloud editions from Starter Suite to Max, Agentforce AI agents, a contact center, AgentExchange apps and certified implementation partners. Fineguide is a smaller AI-first CRM for teams that talk to customers, with AI assistants on chat, email and live phone calls and Voice QA call scoring, which a team sets up on its own. Choose Salesforce for depth and customisation; choose Fineguide to put AI on every customer conversation in one product.',
    tableHeading: 'Salesforce vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Salesforce is stronger',
      items: [
        { text: 'Breadth. Salesforce brings sales, service, marketing, commerce and Slack onto one platform, and Sales Cloud Max adds Salesforce Spiff, Sales Planning, Sales Programs and Salesforce Maps.', refs: ['salesforce:small-business', 'salesforce:editions'] },
        { text: 'Customisation. Flow Builder, Flow Orchestration and sandboxes (a Full and a Partial sandbox on Advanced and Max) let admins shape the CRM around complex processes.', refs: ['salesforce:editions'] },
        { text: 'Agentforce. Agents built in the low-code Agent Builder work on the web, on the phone and in apps from CRM and Data 360 data; Conversation Intelligence with coaching insights is in every Sales Cloud edition.', refs: ['salesforce:agentforce', 'salesforce:voice', 'salesforce:ci'] },
        { text: 'Contact-center depth. Messaging covers SMS, WhatsApp, Messenger, Apple Messages for Business and LINE, with Bring Your Own Channel for others; the contact center reviews 100% of human and AI interactions against quality standards and gives supervisors a live view.', refs: ['salesforce:digital', 'salesforce:contact-center'] },
        { text: 'Ecosystem and data residency. AgentExchange (formerly AppExchange), Professional Services and Salesforce Certified Partners, and Hyperforce regions that keep data in the country of the org or within the EU.', refs: ['salesforce:appexchange', 'salesforce:editions', 'salesforce:hyperforce'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'One product for customer conversations. The AI assistants, the team inbox with your own email, the CRM, AI Telephony and Voice QA share one customer record. Salesforce’s messaging channels come with some editions and are added as products to others.', refs: ['fg:fg-llms', 'salesforce:digital'] },
        { text: 'Set up by your own team. Create an account, give an assistant your website and documents, test it in the chat widget, connect channels and import a spreadsheet. Nothing to customise before the first conversation.', refs: ['fg:fg-llms', 'fg:fg-pricing'] },
        { text: 'AI on your own phone system. Assistants answer live inbound and outbound calls over your SIP, greet known callers by first name from the CRM, save callback requests as tasks and run outbound campaigns (outreach, survey, promotion), in 14 languages. Salesforce lists native voice for the Max edition of its contact center, or partner telephony.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'salesforce:contact-center'] },
        { text: 'Call scoring against your own rules. Voice QA scores every recorded call by each department’s rules and weights, with quotes and a suggestion for every rule and reports in 30 languages; recordings arrive by upload, through the API, from a connected phone system or from the Fineguide recording app for Android.', refs: ['fg:fg-voice-qa', 'fg:fg-llms'] },
        { text: 'More chat channels out of the box. Telegram (a bot or a user account), Instagram, Slack and Discord beside WhatsApp and Messenger, and inside amoCRM, Kommo and JivoChat. Salesforce’s messaging page does not name Telegram or Instagram.', refs: ['fg:fg-llms', 'salesforce:digital'] },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Salesforce if…',
        items: [
          'you want sales, service, marketing and commerce on one platform you can customise deeply;',
          'you have admins or a partner to build flows and run sandboxes;',
          'your data must stay in a specific country or within the EU;',
          'you depend on apps from AgentExchange.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'your work is talking to customers on chat, messengers, email and the phone, and you want AI on all of it;',
          'you want every recorded call scored against your own rules;',
          'your own team should set it up, without an implementation project.',
        ],
      },
    },
    switching: {
      heading: 'Switching from Salesforce',
      intro: 'The records come over in a spreadsheet and the channels reconnect one at a time, so you can run both side by side until the team is ready.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed), give an assistant your website and documents, and test it in the chat widget.' },
        { title: 'Export from Salesforce', body: { text: 'Use the Data Export Service in Setup, which builds a zip archive of CSV files, or the Data Loader application.', refs: ['salesforce:export'] } },
        { title: 'Import into Fineguide', body: { text: 'Import the files (CSV, TSV, XLS or XLSX), map the columns to custom fields, and review duplicates: a person confirms every merge.', refs: ['fg:fg-llms'] } },
        { title: 'Connect channels, email and phone', body: { text: 'Add your own mailboxes over IMAP and SMTP, then WhatsApp, Telegram, Instagram or Messenger, and connect your phone system over SIP for AI calls.', refs: ['fg:fg-messages', 'fg:fg-voice-ai'] } },
        { title: 'Rebuild your automations', body: 'Recreate flows in Fineguide’s visual workflow builder (on paid plans; workflow runs use credits) or in n8n, hosted by Fineguide or your own, and give assistants actions built from a pasted cURL command.' },
      ],
    },
    faq: [
      {
        q: 'Is there a Salesforce alternative for small business?',
        a: 'Salesforce itself offers Starter Suite and Pro Suite for small teams. Fineguide is an alternative for small and mid-size teams whose work is talking to customers: one product for the CRM, the team inbox, AI assistants on chat and phone, and call scoring, with a Free plan to start.',
        refs: ['salesforce:small-business', 'fg:fg-llms', 'fg:fg-pricing'],
      },
      {
        q: 'Is Fineguide an Agentforce alternative?',
        a: 'For customer conversations, yes: Fineguide’s assistants answer on the website chat, messaging apps, email and live phone calls from your own knowledge, and hand over to a person. Agentforce is broader, with agents for sales, service and more built in Agent Builder on Salesforce and Data 360 data.',
        refs: ['fg:fg-assistants', 'fg:fg-voice-ai', 'salesforce:agentforce'],
      },
      {
        q: 'Can Salesforce AI answer phone calls?',
        a: 'Yes, with Agentforce Voice, in English, French, Spanish, Italian, German, Portuguese, Japanese and other languages; Salesforce lists native voice for the Max edition of its contact center, or partner telephony. Fineguide’s assistants answer live calls over your own SIP phone system in 14 languages.',
        refs: ['salesforce:voice', 'salesforce:contact-center', 'fg:fg-voice-ai'],
      },
      {
        q: 'Do I need an implementation partner to start with Fineguide?',
        a: 'No. You create the account, give an assistant your website and documents, connect channels and import contacts yourself. Larger rollouts can add platform adaptation, training and consultancy under an Enterprise contract.',
        refs: ['fg:fg-llms', 'fg:fg-enterprise'],
      },
      {
        q: 'Can I move from Salesforce to Fineguide without losing data?',
        a: 'Export your records with Salesforce’s Data Export Service, which produces CSV files, then import them into the Fineguide CRM, which reads CSV, TSV, XLS and XLSX and asks a person to confirm every duplicate merge.',
        refs: ['salesforce:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'See Fineguide on your own conversations',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your operation.',
    },
    extraLinks: [
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
      { href: '/automations/', label: 'Automations: workflows, n8n and assistant actions' },
    ],
  },

  ro: {
    title: 'Alternativă la Salesforce pentru firme mici: Fineguide',
    description: 'Alternativă la Salesforce comparată punct cu punct: Agentforce, mesagerie, apeluri AI, evaluarea apelurilor și date, verificate pe paginile Salesforce.',
    crumb: 'Salesforce',
    h1: 'Fineguide vs Salesforce:',
    h1Accent: 'un CRM construit pe AI, pus în funcțiune de echipa ta',
    shortAnswer:
      'Salesforce este cea mai vastă platformă CRM: ediții Sales Cloud de la Starter Suite la Max, agenți AI Agentforce, contact center, aplicații din AgentExchange și parteneri certificați de implementare. Fineguide este un CRM mai mic, construit pe AI, pentru echipele care vorbesc cu clienții, cu asistenți AI pe chat, email și apeluri în direct și evaluarea apelurilor cu Voice QA, pe care echipa îl pune singură în funcțiune. Alege Salesforce pentru amploare și personalizare; alege Fineguide ca să ai AI pe fiecare conversație cu clienții, într-un singur produs.',
    tableHeading: 'Salesforce și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Salesforce este mai puternic',
      items: [
        { text: 'Amploare. Salesforce aduce vânzările, service-ul, marketingul, comerțul și Slack pe o singură platformă, iar Sales Cloud Max adaugă Salesforce Spiff, Sales Planning, Sales Programs și Salesforce Maps.', refs: ['salesforce:small-business', 'salesforce:editions'] },
        { text: 'Personalizare. Flow Builder, Flow Orchestration și mediile sandbox (un sandbox Full și unul Partial pe Advanced și Max) le permit administratorilor să adapteze CRM-ul la procese complexe.', refs: ['salesforce:editions'] },
        { text: 'Agentforce. Agenții construiți în Agent Builder (low-code) lucrează pe web, la telefon și în aplicații, pe datele din CRM și Data 360; Conversation Intelligence, cu analize de coaching, este în toate edițiile Sales Cloud.', refs: ['salesforce:agentforce', 'salesforce:voice', 'salesforce:ci'] },
        { text: 'Un contact center complet. Mesageria acoperă SMS, WhatsApp, Messenger, Apple Messages for Business și LINE, plus Bring Your Own Channel pentru alte servicii; contact centerul verifică 100% din interacțiunile oamenilor și ale AI după standarde de calitate și le oferă supervizorilor o imagine în timp real.', refs: ['salesforce:digital', 'salesforce:contact-center'] },
        { text: 'Ecosistem și rezidența datelor. AgentExchange (fostul AppExchange), Professional Services și Salesforce Certified Partners, plus regiuni Hyperforce care păstrează datele în țara organizației sau în UE.', refs: ['salesforce:appexchange', 'salesforce:editions', 'salesforce:hyperforce'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'Un singur produs pentru conversațiile cu clienții. Asistenții AI, inboxul de echipă cu emailul tău, CRM-ul, telefonia AI și Voice QA folosesc aceeași fișă de client. Canalele de mesagerie Salesforce vin cu unele ediții, iar la altele se adaugă ca produse separate.', refs: ['fg:fg-llms', 'salesforce:digital'] },
        { text: 'Pus în funcțiune de echipa ta. Creezi un cont, îi dai unui asistent site-ul și documentele, îl testezi în widgetul de chat, conectezi canalele și imporți un fișier tabelar. Nimic de personalizat înainte de prima conversație.', refs: ['fg:fg-llms', 'fg:fg-pricing'] },
        { text: 'AI pe propria centrală telefonică. Asistenții răspund la apeluri în direct, primite și efectuate, prin SIP-ul tău, îi salută pe clienții cunoscuți pe prenume din CRM, salvează cererile de revenire ca sarcini și derulează campanii (prospectare, sondaj, promoție), în 14 limbi. Salesforce listează vocea nativă la ediția Max a contact centerului sau telefonie prin parteneri.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'salesforce:contact-center'] },
        { text: 'Evaluarea apelurilor după regulile tale. Voice QA notează fiecare apel înregistrat după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă și rapoarte în 30 de limbi; înregistrările vin prin încărcare, prin API, de la o centrală telefonică conectată sau din aplicația Fineguide pentru Android.', refs: ['fg:fg-voice-qa', 'fg:fg-llms'] },
        { text: 'Mai multe canale de chat din prima zi. Telegram (bot sau cont de utilizator), Instagram, Slack și Discord lângă WhatsApp și Messenger, plus direct în amoCRM, Kommo și JivoChat. Pagina de mesagerie Salesforce nu numește Telegram sau Instagram.', refs: ['fg:fg-llms', 'salesforce:digital'] },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege Salesforce dacă…',
        items: [
          'vrei vânzări, service, marketing și comerț pe o singură platformă, personalizabilă în profunzime;',
          'ai administratori sau un partener care să construiască fluxuri și să lucreze cu medii sandbox;',
          'datele trebuie să rămână într-o anumită țară sau în UE;',
          'depinzi de aplicații din AgentExchange.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'munca ta înseamnă discuții cu clienții pe chat, mesagerie, email și telefon, iar tu vrei AI pe toate;',
          'vrei ca fiecare apel înregistrat să fie evaluat după regulile tale;',
          'vrei ca echipa ta să-l pună în funcțiune, fără un proiect de implementare.',
        ],
      },
    },
    switching: {
      heading: 'Cum treci de la Salesforce',
      intro: 'Înregistrările vin într-un fișier tabelar, iar canalele se reconectează pe rând, așa că poți folosi ambele sisteme în paralel până când echipa e pregătită.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card), dă-i unui asistent site-ul și documentele tale și testează-l în widgetul de chat.' },
        { title: 'Exportă din Salesforce', body: { text: 'Folosește Data Export Service din Setup, care generează o arhivă zip cu fișiere CSV, sau aplicația Data Loader.', refs: ['salesforce:export'] } },
        { title: 'Importă în Fineguide', body: { text: 'Importă fișierele (CSV, TSV, XLS sau XLSX), potrivește coloanele cu câmpurile personalizate și verifică duplicatele: fiecare unire o confirmă un om.', refs: ['fg:fg-llms'] } },
        { title: 'Conectează canalele, emailul și telefonul', body: { text: 'Adaugă-ți căsuțele de email prin IMAP și SMTP, apoi WhatsApp, Telegram, Instagram sau Messenger, și conectează centrala telefonică prin SIP pentru apeluri AI.', refs: ['fg:fg-messages', 'fg:fg-voice-ai'] } },
        { title: 'Refă automatizările', body: 'Refă fluxurile în constructorul vizual de workflow-uri Fineguide (pe planurile plătite; rulările consumă credite) sau în n8n, găzduit de Fineguide ori propriu, și dă-le asistenților acțiuni create dintr-o comandă cURL lipită.' },
      ],
    },
    faq: [
      {
        q: 'Există o alternativă la Salesforce pentru firme mici?',
        a: 'Salesforce are chiar el Starter Suite și Pro Suite pentru echipe mici. Fineguide este o alternativă pentru echipele mici și medii care lucrează mai ales cu clienții: un singur produs pentru CRM, inboxul de echipă, asistenții AI pe chat și la telefon și evaluarea apelurilor, cu un plan Free pentru început.',
        refs: ['salesforce:small-business', 'fg:fg-llms', 'fg:fg-pricing'],
      },
      {
        q: 'Este Fineguide o alternativă la Agentforce?',
        a: 'Pentru conversațiile cu clienții, da: asistenții Fineguide răspund în widgetul de chat, în aplicațiile de mesagerie, pe email și la apeluri în direct, din cunoștințele tale, și predau conversația unui om. Agentforce este mai larg, cu agenți pentru vânzări, service și altele, construiți în Agent Builder pe datele din Salesforce și Data 360.',
        refs: ['fg:fg-assistants', 'fg:fg-voice-ai', 'salesforce:agentforce'],
      },
      {
        q: 'Poate AI-ul Salesforce să răspundă la telefon?',
        a: 'Da, cu Agentforce Voice, în engleză, franceză, spaniolă, italiană, germană, portugheză, japoneză și alte limbi; Salesforce listează vocea nativă la ediția Max a contact centerului sau telefonie prin parteneri. Asistenții Fineguide răspund la apeluri în direct prin centrala ta SIP, în 14 limbi, inclusiv română.',
        refs: ['salesforce:voice', 'salesforce:contact-center', 'fg:fg-voice-ai'],
      },
      {
        q: 'Am nevoie de un partener de implementare ca să încep cu Fineguide?',
        a: 'Nu. Creezi singur contul, îi dai unui asistent site-ul și documentele, conectezi canalele și imporți contactele. Pentru proiecte mai mari, un contract Enterprise poate adăuga adaptarea platformei, training și consultanță.',
        refs: ['fg:fg-llms', 'fg:fg-enterprise'],
      },
      {
        q: 'Pot trece de la Salesforce la Fineguide fără să pierd date?',
        a: 'Exportă înregistrările cu Data Export Service din Salesforce, care produce fișiere CSV, apoi importă-le în CRM-ul Fineguide, care citește CSV, TSV, XLS și XLSX și cere unui om să confirme fiecare unire de duplicate.',
        refs: ['salesforce:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Vezi Fineguide pe propriile conversații',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe activitatea ta.',
    },
    extraLinks: [
      { href: '/ro/voice-ai/', label: 'Telefonia AI pe propria centrală' },
      { href: '/ro/automations/', label: 'Automatizări: workflow-uri, n8n și acțiuni ale asistenților' },
    ],
  },

  ru: {
    title: 'Альтернатива Salesforce для малого бизнеса — Fineguide',
    description: 'Альтернатива Salesforce и аналог Agentforce: сравниваем ИИ-агентов, мессенджеры, ИИ-звонки, оценку звонков и данные по официальным страницам Salesforce.',
    crumb: 'Salesforce',
    h1: 'Fineguide vs Salesforce:',
    h1Accent: 'CRM с ИИ, которую команда запускает сама',
    shortAnswer:
      'Salesforce — самая широкая CRM-платформа: редакции Sales Cloud от Starter Suite до Max, ИИ-агенты Agentforce, контакт-центр, приложения AgentExchange и сертифицированные партнёры по внедрению. Fineguide — CRM поменьше, построенная вокруг ИИ, для команд, которые общаются с клиентами: ИИ-ассистенты в чатах, почте и на живых звонках и оценка звонков в Voice QA, а запускает её сама команда. Выбирайте Salesforce ради глубины и гибкой настройки, Fineguide — чтобы ИИ работал в каждом разговоре с клиентом в одном продукте.',
    tableHeading: 'Salesforce и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Salesforce',
      items: [
        { text: 'Широта. Salesforce объединяет продажи, сервис, маркетинг, коммерцию и Slack на одной платформе, а Sales Cloud Max добавляет Salesforce Spiff, Sales Planning, Sales Programs и Salesforce Maps.', refs: ['salesforce:small-business', 'salesforce:editions'] },
        { text: 'Настройка. Flow Builder, Flow Orchestration и песочницы (Full и Partial в Advanced и Max) позволяют администраторам подстроить CRM под сложные процессы.', refs: ['salesforce:editions'] },
        { text: 'Agentforce. Агенты из low-code Agent Builder работают на сайте, по телефону и в приложениях на данных CRM и Data 360; Conversation Intelligence с аналитикой для коучинга есть во всех редакциях Sales Cloud.', refs: ['salesforce:agentforce', 'salesforce:voice', 'salesforce:ci'] },
        { text: 'Полноценный контакт-центр. Мессенджеры: SMS, WhatsApp, Messenger, Apple Messages for Business и LINE, плюс Bring Your Own Channel для других сервисов; контакт-центр проверяет 100% разговоров людей и ИИ по стандартам качества и даёт супервайзерам картину в реальном времени.', refs: ['salesforce:digital', 'salesforce:contact-center'] },
        { text: 'Экосистема и размещение данных. AgentExchange (бывший AppExchange), Professional Services и Salesforce Certified Partners, а также регионы Hyperforce, где данные хранятся в стране организации или в пределах ЕС.', refs: ['salesforce:appexchange', 'salesforce:editions', 'salesforce:hyperforce'] },
      ],
    },
    fineguideStronger: {
      heading: 'Почему Fineguide — альтернатива Salesforce',
      items: [
        { text: 'Один продукт для разговоров с клиентами. ИИ-ассистенты, общий inbox с вашей почтой, CRM, ИИ-телефония и Voice QA работают с одной карточкой клиента. Мессенджеры Salesforce входят в одни редакции, а в другие добавляются отдельными продуктами.', refs: ['fg:fg-llms', 'salesforce:digital'] },
        { text: 'Запускает ваша команда. Создайте аккаунт, загрузите в ассистента сайт и документы, проверьте его в чат-виджете, подключите каналы и импортируйте таблицу. До первого разговора ничего настраивать не нужно.', refs: ['fg:fg-llms', 'fg:fg-pricing'] },
        { text: 'ИИ на вашей телефонии. Ассистенты принимают и совершают живые звонки через ваш SIP, приветствуют знакомых клиентов по имени из CRM, сохраняют просьбы перезвонить как задачи и ведут обзвоны (привлечение, опрос, промо) на 14 языках, включая русский. Salesforce указывает встроенную телефонию для редакции Max контакт-центра или телефонию партнёров.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'salesforce:contact-center'] },
        { text: 'Оценка звонков по вашим правилам. Voice QA оценивает каждый записанный звонок по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу; отчёты — на 30 языках. Записи приходят загрузкой, через API, из подключённой АТС или из приложения Fineguide для Android.', refs: ['fg:fg-voice-qa', 'fg:fg-llms'] },
        { text: 'Больше мессенджеров сразу. Telegram (бот или пользовательский аккаунт), Instagram, Slack и Discord рядом с WhatsApp и Messenger, а также работа внутри amoCRM, Kommo и Jivo. На странице мессенджеров Salesforce нет ни Telegram, ни Instagram.', refs: ['fg:fg-llms', 'salesforce:digital'] },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Salesforce, если…',
        items: [
          'нужны продажи, сервис, маркетинг и коммерция на одной глубоко настраиваемой платформе;',
          'у вас есть администраторы или партнёр, чтобы строить потоки и вести песочницы;',
          'данные должны храниться в определённой стране или в пределах ЕС;',
          'вы зависите от приложений из AgentExchange.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'ваша работа — разговоры с клиентами в чатах, мессенджерах, почте и по телефону, и нужен ИИ во всех этих каналах;',
          'нужно оценивать каждый записанный звонок по своим правилам;',
          'запустить систему должна ваша команда, без проекта внедрения.',
        ],
      },
    },
    switching: {
      heading: 'Как перейти с Salesforce',
      intro: 'Записи переносятся таблицей, а каналы подключаются по одному, поэтому обе системы могут работать параллельно, пока команда не будет готова.',
      steps: [
        { title: 'Начните с тарифа Free', body: 'Создайте аккаунт Fineguide (без карты), загрузите в ассистента свой сайт и документы и проверьте его в чат-виджете.' },
        { title: 'Выгрузите данные из Salesforce', body: { text: 'Воспользуйтесь Data Export Service в Setup — он собирает zip-архив с CSV-файлами — или приложением Data Loader.', refs: ['salesforce:export'] } },
        { title: 'Импортируйте в Fineguide', body: { text: 'Загрузите файлы (CSV, TSV, XLS или XLSX), сопоставьте колонки с вашими полями и проверьте дубли: каждое объединение подтверждает человек.', refs: ['fg:fg-llms'] } },
        { title: 'Подключите каналы, почту и телефонию', body: { text: 'Добавьте свои почтовые ящики по IMAP и SMTP, затем WhatsApp, Telegram, Instagram или Messenger, и подключите телефонию по SIP для ИИ-звонков.', refs: ['fg:fg-messages', 'fg:fg-voice-ai'] } },
        { title: 'Перенесите автоматизации', body: 'Соберите потоки заново в визуальном конструкторе сценариев Fineguide (на платных тарифах; запуски расходуют кредиты) или в n8n — размещённом Fineguide или вашем собственном — и дайте ассистентам действия, собранные из вставленной команды cURL.' },
      ],
    },
    faq: [
      {
        q: 'Какая есть альтернатива Salesforce для малого бизнеса?',
        a: 'У самого Salesforce для небольших команд есть Starter Suite и Pro Suite. Fineguide — альтернатива для малых и средних команд, которые в основном общаются с клиентами: один продукт для CRM, общего inbox, ИИ-ассистентов в чатах и на звонках и оценки звонков, с бесплатным тарифом для старта.',
        refs: ['salesforce:small-business', 'fg:fg-llms', 'fg:fg-pricing'],
      },
      {
        q: 'Есть ли аналог Agentforce?',
        a: 'Для разговоров с клиентами — да: ассистенты Fineguide отвечают в чат-виджете, мессенджерах, почте и на живых звонках по вашим материалам и передают разговор человеку. Agentforce шире: агенты для продаж, сервиса и других задач, которые собираются в Agent Builder на данных Salesforce и Data 360.',
        refs: ['fg:fg-assistants', 'fg:fg-voice-ai', 'salesforce:agentforce'],
      },
      {
        q: 'Может ли ИИ Salesforce отвечать на звонки?',
        a: 'Да, через Agentforce Voice — на английском, французском, испанском, итальянском, немецком, португальском, японском и других языках; встроенная телефония указана для редакции Max контакт-центра, иначе — телефония партнёров. Ассистенты Fineguide отвечают на живые звонки через вашу SIP-телефонию на 14 языках, включая русский.',
        refs: ['salesforce:voice', 'salesforce:contact-center', 'fg:fg-voice-ai'],
      },
      {
        q: 'Нужен ли партнёр по внедрению, чтобы начать работать с Fineguide?',
        a: 'Нет. Вы сами создаёте аккаунт, загружаете в ассистента сайт и документы, подключаете каналы и импортируете контакты. Для крупных проектов договор Enterprise может включать адаптацию платформы, обучение и консалтинг.',
        refs: ['fg:fg-llms', 'fg:fg-enterprise'],
      },
      {
        q: 'Можно ли перейти с Salesforce без потери данных?',
        a: 'Выгрузите записи через Data Export Service в Salesforce — он создаёт CSV-файлы, — затем загрузите их в CRM Fineguide: она принимает CSV, TSV, XLS и XLSX и просит человека подтвердить каждое объединение дублей.',
        refs: ['salesforce:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Посмотрите Fineguide на ваших разговорах',
      body: 'Начните с бесплатного тарифа, без карты, или запишитесь на 30-минутную демонстрацию на ваших процессах.',
    },
    extraLinks: [
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
      { href: '/ru/automations/', label: 'Автоматизации: сценарии, n8n и действия ассистентов' },
    ],
  },
};
