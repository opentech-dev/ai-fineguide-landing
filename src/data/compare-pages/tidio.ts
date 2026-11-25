// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Every Tidio fact below was read on 2026-11-25 on tidio.com or help.tidio.com and is linked in `sources`.
// Capabilities only: no prices, plans' prices, trials, free plans, discounts or billing terms. Plan NAMES appear
// only to say where a feature sits, as in src/data/compare.ts.
// Fineguide refs ('fg:…') use the ids already in FINEGUIDE_SOURCES (src/data/compare.ts).

const tidioData = {
  en: 'Tidio says all its data is stored on servers in EEA member countries; billing details go to its US subsidiary.',
  ro: 'Tidio spune că toate datele sunt stocate pe servere din țări membre ale SEE; datele de facturare ajung la filiala sa din SUA.',
  ru: 'Tidio сообщает, что все данные хранятся на серверах в странах ЕЭЗ; платёжные реквизиты передаются её дочерней компании в США.',
  src: ['privacy'],
};

export const competitors = [
  {
    id: 'tidio',
    name: 'Tidio',
    url: 'https://www.tidio.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'Lyro AI agent for chat and email from Starter. It answers from your support content, hands off to your team by your rules, and runs Smart Actions (order updates, lead qualification, ticket routing, now with MCP). Lyro analytics from Growth; Lyro Connect, which adds Lyro to Zendesk, Intercom, Salesforce and 20+ other platforms, on Plus and Premium.',
        ro: 'Agentul AI Lyro, pentru chat și email, de la Starter. Răspunde din conținutul tău de suport, predă conversația echipei după regulile tale și rulează Smart Actions (stadiul comenzilor, calificarea lead-urilor, direcționarea tichetelor, acum și cu MCP). Analitica Lyro de la Growth; Lyro Connect, care aduce Lyro în Zendesk, Intercom, Salesforce și peste 20 de alte platforme, pe Plus și Premium.',
        ru: 'ИИ-агент Lyro для чата и почты — начиная со Starter. Отвечает по вашим материалам поддержки, передаёт диалог команде по вашим правилам и выполняет Smart Actions (статусы заказов, квалификация лидов, маршрутизация тикетов, теперь и с MCP). Аналитика Lyro — с Growth; Lyro Connect, который встраивает Lyro в Zendesk, Intercom, Salesforce и ещё 20+ платформ, — на Plus и Premium.',
        src: ['plans', 'lyro'],
      },
      channels: {
        en: 'Live chat, email, Instagram, Messenger and WhatsApp in one shared inbox, with ticketing; Lyro answers on live chat, WhatsApp, Instagram and Messenger.',
        ro: 'Chat live, email, Instagram, Messenger și WhatsApp într-un singur inbox comun, cu tichete; Lyro răspunde pe chatul live, WhatsApp, Instagram și Messenger.',
        ru: 'Онлайн-чат, почта, Instagram, Messenger и WhatsApp в одном общем inbox, с тикетами; Lyro отвечает в онлайн-чате, WhatsApp, Instagram и Messenger.',
        src: ['features'],
      },
      phone: {
        en: 'Phone calls come through the Voice add-on, into the Tidio inbox, in the US, Canada, Australia and the UK. Neither the plans page nor the add-ons article lists Lyro on calls.',
        ro: 'Apelurile telefonice vin prin add-on-ul Voice, în inboxul Tidio, în SUA, Canada, Australia și Marea Britanie. Nici pagina planurilor, nici articolul despre add-on-uri nu menționează Lyro la apeluri.',
        ru: 'Телефонные звонки идут через дополнение Voice в inbox Tidio — в США, Канаде, Австралии и Великобритании. Ни на странице тарифов, ни в статье о дополнениях Lyro на звонках не указан.',
        src: ['plans', 'addons'],
      },
      callScoring: null,
      languages: {
        en: 'Lyro answers in 51 languages, including Romanian and Russian. The Tidio panel is in six: English, German, Spanish, French, Italian and Portuguese.',
        ro: 'Lyro răspunde în 51 de limbi, inclusiv română și rusă. Panoul Tidio este în șase: engleză, germană, spaniolă, franceză, italiană și portugheză.',
        ru: 'Lyro отвечает на 51 языке, включая русский и румынский. Панель Tidio — на шести: английском, немецком, испанском, французском, итальянском и португальском.',
        src: ['lyro-languages', 'languages'],
      },
      data: tidioData,
    },
    uiLanguages: {
      list: ['English', 'German', 'Spanish', 'French', 'Italian', 'Portuguese'],
      romanian: false,
      russian: false,
    },
    dataLocation: tidioData,
    reviewComplaints: [],
    sources: [
      { id: 'plans', title: 'Tidio: Plans and features (Starter, Growth, Plus, Premium)', url: 'https://www.tidio.com/pricing/' },
      { id: 'lyro', title: 'Tidio: Lyro AI agent (Smart Actions, handoff, Lyro Connect FAQ)', url: 'https://www.tidio.com/ai-agent/' },
      { id: 'home', title: 'Tidio: Home (e-commerce features, Flows, 120+ integrations)', url: 'https://www.tidio.com/' },
      { id: 'features', title: 'Tidio: Features (channels, ticketing, integrations, apps, analytics)', url: 'https://www.tidio.com/features/' },
      { id: 'addons', title: 'Tidio Help Center: plans and add-ons (Voice, Inbox AI, Help Center)', url: 'https://help.tidio.com/articles/pricing/' },
      { id: 'lyro-languages', title: 'Tidio Help Center: Lyro multilanguage support', url: 'https://help.tidio.com/articles/lyro-multilanguage-support/' },
      { id: 'languages', title: 'Tidio Help Center: Panel language', url: 'https://help.tidio.com/articles/panel-language/' },
      { id: 'privacy', title: 'Tidio Help Center: Privacy and GDPR (where data is stored)', url: 'https://help.tidio.com/articles/privacy-gdpr/' },
      { id: 'export', title: 'Tidio Help Center: Contacts list (export to CSV)', url: 'https://help.tidio.com/articles/contacts-list/' },
    ],
  },
];

export const page = {
  slug: 'tidio',
  competitors: ['tidio'],
  label: { en: 'Tidio (Lyro)', ro: 'Tidio (Lyro)', ru: 'Tidio (Lyro)' },
  summary: {
    en: 'A live chat and help desk built for online stores, with Lyro on chat and messaging, against AI assistants that also answer phone calls, a sales CRM and call scoring on one customer record.',
    ro: 'Un chat live și help desk construit pentru magazinele online, cu Lyro pe chat și mesagerie, față în față cu asistenți AI care răspund și la telefon, un CRM de vânzări și evaluarea apelurilor pe aceeași fișă de client.',
    ru: 'Онлайн-чат и хелпдеск для интернет-магазинов с Lyro в чате и мессенджерах — против ИИ-ассистентов, которые отвечают и на звонки, CRM для продаж и оценки звонков в одной карточке клиента.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Tidio alternative: Fineguide vs Tidio and Lyro AI',
    description: 'A Tidio alternative compared fact by fact: the Lyro AI agent, live chat and messaging, phone calls, call scoring, languages and data, from Tidio’s pages.',
    crumb: 'Tidio',
    h1: 'Fineguide vs Tidio:',
    h1Accent: 'from website chat to AI phone calls',
    shortAnswer:
      'Tidio is a polished live chat and help desk built for online stores: Lyro answers in 51 languages on chat, email, WhatsApp, Instagram and Messenger, Flows automate the website, and Tidio connects to Shopify, WordPress, Wix and 120+ other tools. Fineguide is an AI-first platform where AI assistants, a sales CRM, a team inbox with your own email, AI phone calls over your own phone system and Voice QA call scoring share one customer record. Choose Tidio for an e-commerce storefront; choose Fineguide when chats, calls and the sales pipeline belong together.',
    tableHeading: 'Tidio (with Lyro) vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Tidio is stronger',
      items: [
        { text: 'Built for online stores. Lyro answers from your store data, recommends products and recovers carts, and Flows come with 40+ e-commerce templates for cart nudges and exit-intent messages.', refs: ['tidio:home'] },
        { text: 'Integrations. Tidio lists 120+ integrations, among them Shopify, WooCommerce, WordPress, Wix, Klaviyo, Mailchimp, HubSpot, Zoho CRM and Pipedrive, plus an OpenAPI and hundreds of apps through Zapier.', refs: ['tidio:home', 'tidio:features'] },
        { text: 'Lyro inside another help desk. Lyro Connect adds Lyro to Zendesk, Intercom, Salesforce and 20+ other platforms without a migration, on Plus and Premium.', refs: ['tidio:lyro'] },
        { text: 'Lyro in 51 languages, on chat, email, WhatsApp, Instagram and Messenger, with Smart Actions for order updates, lead qualification and ticket routing, now with MCP.', refs: ['tidio:lyro-languages', 'tidio:plans', 'tidio:features', 'tidio:lyro'] },
        { text: 'Apps on every device: browser, macOS, Windows, iOS and Android.', refs: ['tidio:features'] },
        { text: 'A panel in six languages (English, German, Spanish, French, Italian and Portuguese), and data stored on servers in the EEA.', refs: ['tidio:languages', 'tidio:privacy'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'AI on live phone calls. Fineguide assistants answer inbound calls and make outbound ones over your own phone system (SIP), in 14 languages, and run outbound call campaigns (outreach, survey, promotion). Tidio’s Voice add-on brings phone calls into the Tidio inbox in the US, Canada, Australia and the UK, and its plans and add-ons pages do not list Lyro on calls.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'tidio:addons'] },
        { text: 'Every recorded phone call scored. Voice QA transcribes each call and scores it against each department’s own rules and weights, with quotes and a suggestion for every rule, agent scorecards and reports in 30 languages. Recordings arrive from a connected phone system, the Fineguide recording app for Android, an upload or the API.', refs: ['fg:fg-voice-qa', 'fg:fg-llms'] },
        { text: 'A sales CRM on the same record. Contacts, companies, deals on a board or a table (value, probability, expected close date), tasks with two-way Google Calendar sync, and sales reports with a weighted forecast and win rate. On paid plans, assistants write the fields you define, such as intent or budget, into CRM leads.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'More channels for the same assistant. Besides the website widget, WhatsApp, Instagram and Messenger, Fineguide assistants answer on Telegram (a bot or a Telegram user account), Slack and Discord, inside JivoChat, and inside amoCRM and Kommo. Tidio’s inbox lists live chat, email, Instagram, Messenger and WhatsApp.', refs: ['fg:fg-assistants', 'fg:fg-llms', 'tidio:features'] },
        { text: 'Email from your own mailboxes, with AI that waits. Your own mailboxes and domains connect over IMAP and SMTP; AI on email is off by default for each mailbox, waits before sending so a colleague can take over, and stops after a set number of AI replies in one thread.', refs: ['fg:fg-messages', 'fg:fg-llms'] },
        'A knowledge base per customer. Through the REST API, each of your own users gets a learning context under the id you already use for them; one assistant then answers each user only from their own content plus your shared answers.',
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Tidio if…',
        items: [
          'you run an online store on Shopify, WooCommerce, WordPress or Wix and want product recommendations and cart recovery in the chat;',
          'you rely on many ready-made integrations or on Zapier;',
          'you want to add an AI agent to the Zendesk, Intercom or Salesforce help desk you already use;',
          'your team wants mobile and desktop apps, or a panel in German, Spanish, French, Italian or Portuguese.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'your customers call you as well as write, and you want AI on the phone too;',
          'you run a call center and want every recorded call scored;',
          'you sell through a pipeline and want chats, email and calls on the same customer record;',
          'your customers use Telegram, Slack, Discord or JivoChat, or your team works in amoCRM or Kommo.',
        ],
      },
    },
    switching: {
      heading: 'Switching from Tidio',
      intro: 'Contacts come over in a spreadsheet and channels reconnect one at a time, so Tidio and Fineguide can run side by side until the team is ready.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed), give an assistant your website, FAQ and documents, and test it in the chat widget.' },
        { title: 'Export from Tidio', body: { text: 'In Contacts, select the contacts, pick the columns with Customize and click Export; Tidio produces a CSV file with the contacts and their properties.', refs: ['tidio:export'] } },
        { title: 'Import into Fineguide', body: { text: 'Import the file (CSV, TSV, XLS or XLSX), map the columns to custom fields, and review duplicates: a person confirms every merge.', refs: ['fg:fg-llms'] } },
        { title: 'Connect channels and email', body: { text: 'Add your own mailboxes over IMAP and SMTP, then WhatsApp, Telegram, Instagram or Messenger, and route them with rules and departments.', refs: ['fg:fg-messages'] } },
        { title: 'Rebuild your Flows', body: { text: 'Recreate the steps your Flows and Smart Actions take as assistant actions built from a cURL command, n8n workflows, or Fineguide workflows on paid plans.', refs: ['fg:fg-llms'] } },
      ],
    },
    faq: [
      {
        q: 'What is a good Tidio alternative for a business that also takes phone calls?',
        a: 'Fineguide is one: its AI assistants answer the website chat, WhatsApp, Instagram, Messenger and Telegram, and also live phone calls over your own phone system, with every recorded call scored in Voice QA. For a store that only needs website chat with product recommendations, Tidio remains a strong fit.',
        refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa', 'tidio:home'],
      },
      {
        q: 'Can Tidio Lyro answer phone calls?',
        a: 'Tidio’s pages put phone calls in the Voice add-on, which brings calls into the Tidio inbox in the US, Canada, Australia and the UK; they do not list Lyro answering calls. Fineguide’s assistants answer and make live calls over your own phone system (SIP) in 14 languages.',
        refs: ['tidio:plans', 'tidio:addons', 'fg:fg-voice-ai'],
      },
      {
        q: 'How many languages does Tidio Lyro support?',
        a: 'Tidio’s help center lists 51 languages for Lyro, and the Tidio panel itself comes in six. Fineguide’s AI phone calls run in 14 languages and its chat widget interface comes in 24.',
        refs: ['tidio:lyro-languages', 'tidio:languages', 'fg:fg-llms'],
      },
      {
        q: 'Can I move from Tidio to Fineguide without losing contacts?',
        a: 'Yes. Export your contacts from Tidio as a CSV file, then import it into the Fineguide CRM, which reads CSV, TSV, XLS and XLSX and asks a person to confirm every duplicate merge.',
        refs: ['tidio:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'See Fineguide on your own conversations',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your operation.',
    },
    extraLinks: [
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
      { href: '/knowledge-base/', label: 'AI knowledge base and learning contexts' },
    ],
  },

  ro: {
    title: 'Alternativă la Tidio: Fineguide vs Tidio și Lyro AI',
    description: 'Alternativă la Tidio comparată punct cu punct: agentul AI Lyro, chat live și mesagerie, apeluri, evaluarea apelurilor, limbi și date, după paginile Tidio.',
    crumb: 'Tidio',
    h1: 'Fineguide vs Tidio:',
    h1Accent: 'de la chatul de pe site la apeluri AI',
    shortAnswer:
      'Tidio este un chat live și help desk bine finisat, construit pentru magazinele online: Lyro răspunde în 51 de limbi pe chat, email, WhatsApp, Instagram și Messenger, Flows automatizează site-ul, iar Tidio se conectează la Shopify, WordPress, Wix și peste 120 de alte unelte. Fineguide este o platformă construită pe AI, în care asistenții AI, un CRM de vânzări, un inbox de echipă cu emailul tău, apelurile AI prin propria centrală și evaluarea apelurilor cu Voice QA folosesc aceeași fișă de client. Alege Tidio pentru un magazin online; alege Fineguide când chaturile, apelurile și pâlnia de vânzări trebuie să stea împreună.',
    tableHeading: 'Tidio (cu Lyro) și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Tidio este mai puternic',
      items: [
        { text: 'Construit pentru magazine online. Lyro răspunde din datele magazinului, recomandă produse și recuperează coșurile abandonate, iar Flows vin cu peste 40 de șabloane pentru e-commerce, pentru coșuri abandonate și mesaje la ieșirea de pe pagină.', refs: ['tidio:home'] },
        { text: 'Integrări. Tidio listează peste 120 de integrări, printre ele Shopify, WooCommerce, WordPress, Wix, Klaviyo, Mailchimp, HubSpot, Zoho CRM și Pipedrive, plus un OpenAPI și sute de aplicații prin Zapier.', refs: ['tidio:home', 'tidio:features'] },
        { text: 'Lyro în alt help desk. Lyro Connect aduce Lyro în Zendesk, Intercom, Salesforce și peste 20 de alte platforme, fără migrare, pe Plus și Premium.', refs: ['tidio:lyro'] },
        { text: 'Lyro în 51 de limbi, pe chat, email, WhatsApp, Instagram și Messenger, cu Smart Actions pentru stadiul comenzilor, calificarea lead-urilor și direcționarea tichetelor, acum și cu MCP.', refs: ['tidio:lyro-languages', 'tidio:plans', 'tidio:features', 'tidio:lyro'] },
        { text: 'Aplicații pentru orice dispozitiv: browser, macOS, Windows, iOS și Android.', refs: ['tidio:features'] },
        { text: 'Un panou în șase limbi (engleză, germană, spaniolă, franceză, italiană și portugheză) și date stocate pe servere din SEE.', refs: ['tidio:languages', 'tidio:privacy'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'AI pe apeluri telefonice în direct. Asistenții Fineguide răspund la apelurile primite și sună ei înșiși prin propria ta centrală (SIP), în 14 limbi, și derulează campanii de apeluri (prospectare, sondaj, promoție). Add-on-ul Voice de la Tidio aduce apelurile în inboxul Tidio în SUA, Canada, Australia și Marea Britanie, iar paginile despre planuri și add-on-uri nu menționează Lyro la apeluri.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'tidio:addons'] },
        { text: 'Fiecare apel înregistrat, evaluat. Voice QA transcrie fiecare apel și îl notează după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă, fișe de scor pe operator și rapoarte în 30 de limbi. Înregistrările vin de la o centrală conectată, din aplicația Fineguide pentru Android, prin încărcare sau prin API.', refs: ['fg:fg-voice-qa', 'fg:fg-llms'] },
        { text: 'Un CRM de vânzări pe aceeași fișă. Contacte, companii, oportunități pe tablă sau în tabel (valoare, probabilitate, data estimată de închidere), sarcini sincronizate în ambele sensuri cu Google Calendar și rapoarte de vânzări cu prognoză ponderată și rată de câștig. Pe planurile plătite, asistenții scriu în lead-urile din CRM câmpurile alese de tine, de exemplu intenția sau bugetul.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Mai multe canale pentru același asistent. Pe lângă widgetul de pe site, WhatsApp, Instagram și Messenger, asistenții Fineguide răspund pe Telegram (bot sau cont de utilizator Telegram), Slack și Discord, în JivoChat și direct în amoCRM și Kommo. Inboxul Tidio listează chat live, email, Instagram, Messenger și WhatsApp.', refs: ['fg:fg-assistants', 'fg:fg-llms', 'tidio:features'] },
        { text: 'Email din propriile căsuțe, cu un AI care așteaptă. Căsuțele și domeniile tale se conectează prin IMAP și SMTP; AI-ul pe email este oprit implicit pentru fiecare căsuță, așteaptă înainte să trimită, ca un coleg să poată prelua, și se oprește după un număr stabilit de răspunsuri AI într-un fir.', refs: ['fg:fg-messages', 'fg:fg-llms'] },
        'O bază de cunoștințe pentru fiecare client. Prin REST API, fiecare utilizator al tău primește un context de învățare sub id-ul pe care îl folosești deja pentru el; un singur asistent îi răspunde apoi fiecăruia doar din conținutul lui și din răspunsurile comune.',
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege Tidio dacă…',
        items: [
          'ai un magazin online pe Shopify, WooCommerce, WordPress sau Wix și vrei recomandări de produse și recuperarea coșurilor direct în chat;',
          'te bazezi pe multe integrări gata făcute sau pe Zapier;',
          'vrei să adaugi un agent AI în help desk-ul Zendesk, Intercom sau Salesforce pe care îl folosești deja;',
          'echipa vrea aplicații pentru mobil și desktop sau un panou în germană, spaniolă, franceză, italiană ori portugheză.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'clienții te și sună, nu doar îți scriu, și vrei AI și la telefon;',
          'ai un call center și vrei ca fiecare apel înregistrat să fie evaluat;',
          'vinzi printr-o pâlnie de vânzări și vrei chaturile, emailul și apelurile pe aceeași fișă de client;',
          'clienții folosesc Telegram, Slack, Discord sau JivoChat ori echipa lucrează în amoCRM sau Kommo.',
        ],
      },
    },
    switching: {
      heading: 'Cum treci de la Tidio',
      intro: 'Contactele vin într-un fișier tabelar, iar canalele se reconectează pe rând, așa că Tidio și Fineguide pot merge în paralel până când echipa e pregătită.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card), dă-i unui asistent site-ul, întrebările frecvente și documentele tale și testează-l în widgetul de chat.' },
        { title: 'Exportă din Tidio', body: { text: 'În Contacts, selectează contactele, alege coloanele cu Customize și apasă Export; Tidio generează un fișier CSV cu contactele și proprietățile lor.', refs: ['tidio:export'] } },
        { title: 'Importă în Fineguide', body: { text: 'Importă fișierul (CSV, TSV, XLS sau XLSX), potrivește coloanele cu câmpurile personalizate și verifică duplicatele: fiecare unire o confirmă un om.', refs: ['fg:fg-llms'] } },
        { title: 'Conectează canalele și emailul', body: { text: 'Adaugă-ți căsuțele de email prin IMAP și SMTP, apoi WhatsApp, Telegram, Instagram sau Messenger, și distribuie conversațiile cu reguli și departamente.', refs: ['fg:fg-messages'] } },
        { title: 'Refă Flows', body: { text: 'Recreează pașii din Flows și Smart Actions ca acțiuni ale asistentului dintr-o comandă cURL, ca workflow-uri n8n sau ca workflow-uri Fineguide pe planurile plătite.', refs: ['fg:fg-llms'] } },
      ],
    },
    faq: [
      {
        q: 'Care este o alternativă la Tidio pentru o firmă care primește și apeluri?',
        a: 'Fineguide este una: asistenții AI răspund în chatul de pe site, pe WhatsApp, Instagram, Messenger și Telegram, dar și la apeluri în direct prin propria ta centrală, iar fiecare apel înregistrat este evaluat în Voice QA. Pentru un magazin care are nevoie doar de chat pe site cu recomandări de produse, Tidio rămâne o alegere bună.',
        refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa', 'tidio:home'],
      },
      {
        q: 'Poate Lyro de la Tidio să răspundă la telefon?',
        a: 'Paginile Tidio pun apelurile în add-on-ul Voice, care aduce apelurile în inboxul Tidio în SUA, Canada, Australia și Marea Britanie; ele nu menționează Lyro la apeluri. Asistenții Fineguide răspund și sună în direct prin propria ta centrală (SIP), în 14 limbi, inclusiv româna.',
        refs: ['tidio:plans', 'tidio:addons', 'fg:fg-voice-ai'],
      },
      {
        q: 'Tidio este disponibil în română?',
        a: 'Lyro răspunde și în română: centrul de ajutor Tidio listează 51 de limbi, printre ele româna. Panoul Tidio, în schimb, este în șase limbi, fără română. Apelurile AI Fineguide merg în 14 limbi, inclusiv româna, iar interfața widgetului de chat este în 24.',
        refs: ['tidio:lyro-languages', 'tidio:languages', 'fg:fg-llms'],
      },
      {
        q: 'Pot trece de la Tidio la Fineguide fără să pierd contactele?',
        a: 'Da. Exportă contactele din Tidio într-un fișier CSV, apoi importă-l în CRM-ul Fineguide, care citește CSV, TSV, XLS și XLSX și cere confirmarea unui om pentru fiecare unire de duplicate.',
        refs: ['tidio:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Vezi Fineguide pe conversațiile tale',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe operațiunile tale.',
    },
    extraLinks: [
      { href: '/ro/voice-ai/', label: 'Telefonia AI pe propria centrală' },
      { href: '/ro/knowledge-base/', label: 'Baza de cunoștințe AI și contextele de învățare' },
    ],
  },

  ru: {
    title: 'Альтернатива Tidio: Fineguide vs Tidio и Lyro AI',
    description: 'Альтернатива Tidio: сравниваем ИИ-агента Lyro, онлайн-чат и мессенджеры, звонки, оценку звонков, языки и данные по официальным страницам Tidio.',
    crumb: 'Tidio',
    h1: 'Fineguide vs Tidio:',
    h1Accent: 'от чата на сайте до ИИ-звонков',
    shortAnswer:
      'Tidio — аккуратный онлайн-чат и хелпдеск для интернет-магазинов: Lyro отвечает на 51 языке в чате, почте, WhatsApp, Instagram и Messenger, Flows автоматизируют сайт, а сам Tidio подключается к Shopify, WordPress, Wix и ещё 120+ сервисам. Fineguide — платформа, изначально построенная на ИИ: ИИ-ассистенты, CRM для продаж, общий inbox с вашей почтой, ИИ-звонки через вашу телефонию и оценка звонков в Voice QA работают с одной карточкой клиента. Выбирайте Tidio для интернет-магазина; выбирайте Fineguide, когда чаты, звонки и воронка продаж должны быть вместе.',
    tableHeading: 'Tidio (с Lyro) и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Tidio',
      items: [
        { text: 'Создан для интернет-магазинов. Lyro отвечает по данным магазина, рекомендует товары и возвращает брошенные корзины, а для Flows есть 40+ шаблонов для e-commerce: напоминания о корзине и сообщения при уходе со страницы.', refs: ['tidio:home'] },
        { text: 'Интеграции. Tidio указывает 120+ интеграций, среди них Shopify, WooCommerce, WordPress, Wix, Klaviyo, Mailchimp, HubSpot, Zoho CRM и Pipedrive, а также OpenAPI и сотни приложений через Zapier.', refs: ['tidio:home', 'tidio:features'] },
        { text: 'Lyro внутри другого хелпдеска. Lyro Connect встраивает Lyro в Zendesk, Intercom, Salesforce и ещё 20+ платформ без миграции — на Plus и Premium.', refs: ['tidio:lyro'] },
        { text: 'Lyro на 51 языке — в чате, почте, WhatsApp, Instagram и Messenger, со Smart Actions для статусов заказов, квалификации лидов и маршрутизации тикетов, теперь и с MCP.', refs: ['tidio:lyro-languages', 'tidio:plans', 'tidio:features', 'tidio:lyro'] },
        { text: 'Приложения для всех устройств: браузер, macOS, Windows, iOS и Android.', refs: ['tidio:features'] },
        { text: 'Панель на шести языках (английский, немецкий, испанский, французский, итальянский и португальский) и хранение данных на серверах в ЕЭЗ.', refs: ['tidio:languages', 'tidio:privacy'] },
      ],
    },
    fineguideStronger: {
      heading: 'В чём сильнее Fineguide',
      items: [
        { text: 'ИИ на живых звонках. Ассистенты Fineguide принимают входящие и совершают исходящие звонки через вашу телефонию (SIP) на 14 языках и ведут кампании обзвона (привлечение, опрос, промо). Дополнение Voice от Tidio приводит звонки в inbox Tidio в США, Канаде, Австралии и Великобритании, а на страницах тарифов и дополнений Lyro на звонках не указан.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'tidio:addons'] },
        { text: 'Оценка каждого записанного звонка. Voice QA расшифровывает каждый звонок и оценивает его по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу, карточками сотрудников и отчётами на 30 языках. Записи приходят из подключённой телефонии, из приложения Fineguide для записи звонков на Android, загрузкой или через API.', refs: ['fg:fg-voice-qa', 'fg:fg-llms'] },
        { text: 'CRM для продаж в той же карточке. Контакты, компании, сделки на доске или в таблице (сумма, вероятность, ожидаемая дата закрытия), задачи с двусторонней синхронизацией с Google Calendar и отчёты по продажам с взвешенным прогнозом и конверсией в выигрыш. На платных тарифах ассистенты записывают в лиды CRM нужные вам поля, например намерение или бюджет.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Больше каналов для одного ассистента. Кроме виджета на сайте, WhatsApp, Instagram и Messenger, ассистенты Fineguide отвечают в Telegram (бот или пользовательский аккаунт Telegram), Slack и Discord, внутри JivoChat, а также внутри amoCRM и Kommo. В inbox Tidio указаны онлайн-чат, почта, Instagram, Messenger и WhatsApp.', refs: ['fg:fg-assistants', 'fg:fg-llms', 'tidio:features'] },
        { text: 'Почта из ваших собственных ящиков и ИИ, который не спешит. Ваши ящики и домены подключаются по IMAP и SMTP; ИИ на почте по умолчанию выключен для каждого ящика, ждёт перед отправкой, чтобы коллега мог перехватить ответ, и останавливается после заданного числа ИИ-ответов в одной переписке.', refs: ['fg:fg-messages', 'fg:fg-llms'] },
        'База знаний для каждого клиента. Через REST API каждый ваш пользователь получает свой контекст обучения под тем id, который вы уже для него используете; один ассистент отвечает каждому только по его материалам и вашим общим ответам.',
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Tidio, если…',
        items: [
          'у вас интернет-магазин на Shopify, WooCommerce, WordPress или Wix и нужны рекомендации товаров и возврат брошенных корзин прямо в чате;',
          'вы опираетесь на множество готовых интеграций или на Zapier;',
          'вы хотите добавить ИИ-агента в уже используемый хелпдеск Zendesk, Intercom или Salesforce;',
          'команде нужны мобильные и десктопные приложения или панель на немецком, испанском, французском, итальянском или португальском.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'клиенты не только пишут, но и звонят, и вам нужен ИИ и на телефоне;',
          'у вас колл-центр и нужна оценка каждого записанного звонка;',
          'вы продаёте через воронку и хотите видеть чаты, почту и звонки в одной карточке клиента;',
          'клиенты пишут в Telegram, Slack, Discord или JivoChat, или команда работает в amoCRM или Kommo.',
        ],
      },
    },
    switching: {
      heading: 'Как перейти с Tidio',
      intro: 'Контакты переносятся в таблице, а каналы подключаются по одному, поэтому Tidio и Fineguide могут работать параллельно, пока команда не будет готова.',
      steps: [
        { title: 'Начните с тарифа Free', body: 'Создайте аккаунт Fineguide (без карты), загрузите в ассистента свой сайт, FAQ и документы и проверьте его в чат-виджете.' },
        { title: 'Выгрузите контакты из Tidio', body: { text: 'В Contacts выберите контакты, настройте колонки через Customize и нажмите Export; Tidio выгрузит CSV-файл с контактами и их свойствами.', refs: ['tidio:export'] } },
        { title: 'Импортируйте в Fineguide', body: { text: 'Загрузите файл (CSV, TSV, XLS или XLSX), сопоставьте колонки с вашими полями и проверьте дубли: каждое объединение подтверждает человек.', refs: ['fg:fg-llms'] } },
        { title: 'Подключите каналы и почту', body: { text: 'Добавьте свои почтовые ящики по IMAP и SMTP, затем WhatsApp, Telegram, Instagram или Messenger и распределяйте диалоги по правилам и отделам.', refs: ['fg:fg-messages'] } },
        { title: 'Перенесите Flows', body: { text: 'Воссоздайте шаги ваших Flows и Smart Actions как действия ассистента из команды cURL, сценарии n8n или сценарии Fineguide на платных тарифах.', refs: ['fg:fg-llms'] } },
      ],
    },
    faq: [
      {
        q: 'Какая альтернатива Tidio подойдёт бизнесу, который принимает и звонки?',
        a: 'Fineguide — одна из них: ИИ-ассистенты отвечают в чате на сайте, в WhatsApp, Instagram, Messenger и Telegram, а также на живых звонках через вашу телефонию, и каждый записанный звонок оценивается в Voice QA. Магазину, которому нужен только чат на сайте с рекомендациями товаров, Tidio по-прежнему хорошо подходит.',
        refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa', 'tidio:home'],
      },
      {
        q: 'Может ли Lyro от Tidio отвечать на звонки?',
        a: 'На страницах Tidio звонки относятся к дополнению Voice, которое приводит звонки в inbox Tidio в США, Канаде, Австралии и Великобритании; Lyro на звонках там не указан. Ассистенты Fineguide принимают и совершают живые звонки через вашу телефонию (SIP) на 14 языках, включая русский.',
        refs: ['tidio:plans', 'tidio:addons', 'fg:fg-voice-ai'],
      },
      {
        q: 'Есть ли Tidio на русском?',
        a: 'Lyro отвечает на русском: справка Tidio указывает 51 язык, включая русский. Панель Tidio — на шести языках, русского среди них нет. ИИ-звонки Fineguide работают на 14 языках, включая русский, а интерфейс чат-виджета — на 24.',
        refs: ['tidio:lyro-languages', 'tidio:languages', 'fg:fg-llms'],
      },
      {
        q: 'Можно ли перейти с Tidio на Fineguide без потери контактов?',
        a: 'Да. Выгрузите контакты из Tidio в CSV-файл, затем импортируйте его в CRM Fineguide: она читает CSV, TSV, XLS и XLSX и просит человека подтвердить каждое объединение дублей.',
        refs: ['tidio:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Посмотрите Fineguide на ваших диалогах',
      body: 'Начните с тарифа Free без карты или запишитесь на 30-минутную демонстрацию на ваших задачах.',
    },
    extraLinks: [
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
      { href: '/ru/knowledge-base/', label: 'База знаний для ИИ и контексты обучения' },
    ],
  },
};
