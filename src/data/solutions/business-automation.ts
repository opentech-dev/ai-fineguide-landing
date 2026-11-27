import type { Solution } from './types';

const solution: Solution = {
  slug: 'business-automation',
  image: 'tablet-review.jpg',
  imageAlt: {
    en: 'Hands holding a tablet with sales and support dashboards of bar, line and donut charts, over a wooden desk with a cup of coffee and a plant',
    ro: 'Mâini care țin o tabletă cu panouri de vânzări și suport, cu grafice cu bare, linii și cercuri, deasupra unui birou din lemn cu o cană de cafea și o plantă',
    ru: 'Руки держат планшет с панелями продаж и поддержки — столбчатые, линейные и круговые графики — над деревянным столом с чашкой кофе и растением',
  },
  appName: 'Fineguide AI Business Automation Platform',
  checked: '2026-11-27',
  reading: ['/blog/zapier-make-n8n-alternative-ai-workflows/', '/blog/workflow-automation-templates-sales-support/', '/blog/what-is-an-ai-crm/', '/blog/ai-assistant-actions-call-your-systems/', '/blog/facebook-lead-ads-to-crm/', '/blog/call-center-automation-with-ai/'],
  sources: [
    'ai-fineguide-landing public/llms.txt (platform modules: AI Assistants channels, CRM, Messages & Inbox, AI Telephony 14 languages, Campaigns, Voice QA 30 report languages, Workspace, Automations: visual workflow builder on paid plans with triggers from chats, email, calls, Voice QA scores, CRM changes, schedules and incoming webhooks, steps for conditions, CRM records, email, notifications, AI classify/summarize/extract and HTTP requests, 12 templates, tests that write nothing, every run kept, each step uses credits; n8n hosted or your own; assistant actions from a cURL command; assistant webhooks on message, session opened/closed, ticket, rating, collected-information update and Facebook Lead Ads)',
    'ai-fineguide-landing public/llms.txt "What makes Fineguide different" (one customer record across website, messaging apps, email and phone calls; same assistants on chat and on live calls) and Pricing (Free 200 credits once, no card; 1 credit per standard AI reply; AI calls 10 credits per answered minute; call scoring 12 credits per minute; CRM, Messages, reports, integrations and email use no credits)',
    'ai-fineguide-landing src/data/solutions/call-center.ts, help-desk.ts, whatsapp-ai-chatbot.ts (verified 2026-11-25: lead collection on paid plans writes a CRM lead; callbacks as CRM tasks; support requests become Inbox threads + Ticket tasks; workflows from the Starter plan)',
    'ai-fineguide-landing src/pages/mcp.astro + src/data/mcp.ts (MCP server: connect ChatGPT, Claude, Cursor and other MCP clients to the workspace)',
    'ai-fineguide-landing src/data/compare.ts + src/data/compare-pages/zapier-make.ts (Zapier and Make capabilities, read on their own pages 2026-11-25)',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Business Automation Platform with CRM | Fineguide',
        description:
          'An AI business automation platform: AI assistants on chat, email and phone, a CRM, workflows and call scoring on one customer record. Start free, no card.',
      },
      hero: {
        eyebrow: 'Business automation platform',
        title: 'Automate the work',
        titleAccent: ' around every customer.',
        subtitle:
          'AI assistants answer and qualify customers on every channel, workflows move the record forward, and your team steps in only where a person matters, all on one platform.',
      },
      definition: {
        heading: 'What is an AI business automation platform?',
        body:
          'An AI business automation platform is software that lets AI handle repeated customer-facing work, such as answering, qualifying, following up and filing records, and connects those steps without manual copying. Fineguide is an AI-first business automation platform: AI assistants on website chat, messaging apps, email and phone calls, a CRM, workflow automation and call scoring share one customer record. A lead who writes on WhatsApp, calls your number and then emails is one contact with one history, and the workflows you build run on that same record.',
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'One platform instead of a stack of tools.',
        body:
          'The parts a growing business usually buys separately (a chatbot, a CRM, a phone tool, a shared inbox, an automation tool) are modules of one platform here, so nothing has to be copied from one tool to another.',
        items: [
          {
            term: 'AI assistants on every channel',
            desc: 'One assistant answers on your website chat, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord, inside amoCRM, Kommo and JivoChat, on your email and on live phone calls, from the knowledge you give it.',
          },
          {
            term: 'Leads written into the CRM',
            desc: 'On paid plans the assistant asks for the details you choose, such as name, email, budget or the service needed, and saves a lead in the CRM. Contacts, companies, deals on a board or a table, tasks and sales reports sit on the same record.',
          },
          {
            term: 'A visual workflow builder',
            desc: 'Workflows start from chats, email, calls, Voice QA scores, CRM changes, a schedule or an incoming webhook, and run steps for conditions, CRM records, email, notifications, AI classify, summarize and extract, and HTTP requests. 12 templates to start from; a test run writes nothing.',
          },
          {
            term: 'AI on phone calls',
            desc: 'The same assistants answer inbound calls and place outbound ones over your own phone system (SIP), in 14 languages. Callback requests land as CRM tasks, and outbound campaigns run outreach, survey and promotion calls.',
          },
          {
            term: 'A team inbox with handover',
            desc: 'Nine chat channels and your own email land in one team inbox with routing, departments and saved replies. When a customer asks for a person, or a rule says so, the assistant stops and your team answers from the same conversation.',
          },
          {
            term: 'Your own systems, called from the chat',
            desc: 'Assistant actions are HTTP calls built from a pasted cURL command, with stored secrets and a test panel, so an assistant can check an order or book a slot in your system. Webhooks send messages, tickets, ratings and collected fields to your own tools.',
          },
          {
            term: 'n8n, hosted or your own',
            desc: 'Run n8n workflows on an instance Fineguide hosts for you, or connect your own n8n. A workflow that starts with a webhook can be imported as an assistant action.',
          },
          {
            term: 'Every call scored',
            desc: 'Voice QA transcribes recorded calls and scores each one against your department’s own rules, with quotes from the call, so quality review is automated too.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it is for',
        heading: 'Teams that talk to customers every day.',
        items: [
          { term: 'Small and mid-size businesses', desc: 'Every enquiry answered on every channel, including outside office hours, without hiring for each new channel.' },
          { term: 'Sales teams', desc: 'Leads qualified in the chat or on the phone and written into the CRM, with follow-up tasks and deals created by workflows.' },
          { term: 'Support teams', desc: 'AI answers first from your knowledge base; people take the conversations that need them, with the whole history on screen.' },
          { term: 'Call centers and service companies', desc: 'AI on inbound and outbound calls, campaigns, callbacks as tasks and every recorded call scored against your rules.' },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From one assistant to an automated operation.',
        body: 'Start with the channel your customers use most and add the rest when you are ready.',
        items: [
          'Create an assistant and give it your website, documents and the questions customers ask most.',
          'Connect your first channels: the website chat, WhatsApp, Instagram, Telegram or your support mailbox.',
          'Choose the details the assistant collects as a lead, and when it hands a conversation to your team.',
          'Pick a workflow template, such as a task for each new lead, test it, and turn it on.',
          'Add your phone lines over SIP, outbound campaigns and Voice QA when calls are part of the work.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          { term: 'Channels', desc: 'Website chat, WhatsApp, Telegram (a bot or a user account), Instagram, Messenger, Slack, Discord, JivoChat, amoCRM and Kommo, your own email over IMAP and SMTP, and phone calls over SIP.' },
          { term: 'Languages', desc: 'AI phone calls in 14 languages; the chat widget’s interface in 24; Voice QA reports in 30. Assistants answer in the language the customer writes in.' },
          { term: 'Workflows', desc: '12 templates; triggers from chats, email, calls, Voice QA scores, CRM changes, schedules and webhooks; every run kept. On paid plans, from Starter; each step that runs uses credits.' },
          { term: 'Integrations', desc: 'n8n (hosted or your own), Zendesk, Help Scout, Google Calendar (two-way task sync), Facebook Lead Ads, a REST API and an MCP server for ChatGPT, Claude and other AI tools.' },
          { term: 'Credits', desc: 'A standard AI reply is 1 credit, an AI phone call 10 credits per answered minute and call scoring 12 credits per minute. The CRM, the inbox, reports and email use none.' },
          { term: 'Plans', desc: 'Start on the free plan with 200 credits and no card; paid plans add monthly credits, seats and knowledge base space.' },
        ],
      },
      alternatives: {
        eyebrow: 'How it compares',
        heading: 'Fineguide and the usual alternatives.',
        body:
          'Most businesses automate customer work by joining several tools. These are the usual choices, described by what they do, with the full, sourced comparisons one click away.',
        items: [
          {
            term: 'Automation tools such as Zapier and Make',
            desc: 'They connect thousands of apps and now build AI agents, but the chatbot, the CRM and the phone system stay separate products you connect yourself. Fineguide keeps the assistants, the CRM, calls and workflows on one record, and runs n8n for apps it does not cover.',
            path: '/compare/zapier-make',
            label: 'Fineguide vs Zapier and Make',
          },
          {
            term: 'CRM suites such as HubSpot and Salesforce',
            desc: 'Large suites with AI agents and deep sales and marketing tools. Fineguide is a smaller AI-first platform where the same assistants answer on messaging apps and on live calls over your own phone system, and every recorded call can be scored.',
            path: '/compare/hubspot',
            label: 'Fineguide vs HubSpot',
          },
          {
            term: 'A chatbot plus a separate CRM',
            desc: 'A website or WhatsApp chatbot sends leads into a CRM through an integration. In Fineguide the assistant writes the lead into its own CRM, and your team takes over in the same conversation.',
            path: '/best/ai-chatbots-for-websites',
            label: 'Best AI chatbots for websites',
          },
          {
            term: 'The whole category, side by side',
            desc: 'Fineguide, HubSpot, Make, Salesforce, Zapier and Zoho CRM, each with what its own pages say it does.',
            path: '/best/ai-business-automation-platforms',
            label: 'Best AI business automation platforms',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind the automation',
        links: [
          { path: '/automations', label: 'Automations', desc: 'The visual workflow builder, n8n, assistant actions and webhooks.' },
          { path: '/ai-assistants', label: 'AI Assistants', desc: 'Assistants that answer on your website, messaging apps and email.' },
          { path: '/crm', label: 'CRM', desc: 'Contacts, companies, deals, tasks and sales reports on one record.' },
          { path: '/voice-ai', label: 'AI Telephony', desc: 'AI on inbound and outbound calls over your own phone system.' },
          { path: '/omnichannel-chatbot', label: 'Omnichannel AI chatbot', desc: 'One assistant on every channel, with one conversation history per customer.' },
        ],
      },
      faq: {
        heading: 'Business automation: common questions',
        items: [
          {
            q: 'What is the best AI business automation platform for a small business?',
            a: 'It depends on what you automate. If it is connecting many apps, an automation tool such as Zapier or Make fits; if it is the work around customers (answering, qualifying, following up, calls), Fineguide fits, because the AI assistants, the CRM, phone calls and workflows share one record.',
          },
          {
            q: 'What is business process automation with AI?',
            a: 'It means AI does steps a person used to do by hand, such as replying to a customer, sorting an email or filling in a CRM record, and workflows pass the result to the next step. In Fineguide a workflow can, for example, classify an incoming email with AI and open a task for the right person.',
          },
          {
            q: 'Can one platform replace a chatbot, a CRM and Zapier?',
            a: 'For customer-facing work, yes: Fineguide has AI assistants on chat, email and phone, a CRM and a workflow builder on one platform. For apps it does not connect natively, it runs n8n, hosted by Fineguide or your own.',
          },
          {
            q: 'Can AI capture leads from my website chat and WhatsApp into a CRM?',
            a: 'Yes. On paid plans the assistant asks for the details you choose while it answers, and saves a lead in the Fineguide CRM once the required fields are in; a workflow can then create a deal, assign an owner or add a task.',
          },
          {
            q: 'Do I need to know how to code?',
            a: 'No. Assistants are set up in forms, and workflows are built from templates in a visual builder. Code is only needed if you want to call your own systems, and even then an assistant action can be made from a pasted cURL command.',
          },
          {
            q: 'Does the automation also work on phone calls?',
            a: 'Yes. The same assistants answer and place calls over your own phone system in 14 languages, save callback requests as CRM tasks, and calls can start workflows. Voice QA scores recorded calls against your rules.',
          },
          {
            q: 'Is there a free plan?',
            a: 'Yes: the free plan has 200 credits, no card needed, with AI assistants, the CRM and the team inbox. The workflow builder and lead collection come with paid plans, from Starter.',
          },
        ],
      },
      closing: {
        heading: 'Automate the first conversation today.',
        body: 'Create an assistant on the free plan, connect one channel and watch a lead land in the CRM. Or book a 30-minute demo on your own processes.',
      },
    },

    ro: {
      meta: {
        title: 'Platformă AI de automatizare a afacerii | Fineguide',
        description:
          'Platformă AI de automatizare a afacerii: asistenți AI pe chat, email și telefon, CRM, fluxuri de lucru și evaluarea apelurilor pe aceeași fișă de client.',
      },
      hero: {
        eyebrow: 'Platformă de automatizare a afacerii',
        title: 'Automatizează munca',
        titleAccent: ' din jurul fiecărui client.',
        subtitle:
          'Asistenții AI răspund și califică clienții pe fiecare canal, fluxurile de lucru duc fișa mai departe, iar echipa intervine doar acolo unde e nevoie de un om, totul pe o singură platformă.',
      },
      definition: {
        heading: 'Ce este o platformă AI de automatizare a afacerii?',
        body:
          'O platformă AI de automatizare a afacerii este un software care lasă AI-ul să preia munca repetitivă cu clienții, cum ar fi răspunsurile, calificarea, revenirile și completarea fișelor, și leagă acești pași fără copiere manuală. Fineguide este o platformă de automatizare construită pe AI: asistenți AI pe chatul de pe site, aplicații de mesagerie, email și apeluri telefonice, un CRM, fluxuri de lucru automate și evaluarea apelurilor folosesc aceeași fișă de client. Un lead care scrie pe WhatsApp, sună și apoi trimite un email este un singur contact cu un singur istoric, iar fluxurile pe care le construiești rulează pe aceeași fișă.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'O singură platformă în loc de mai multe unelte.',
        body:
          'Ce cumpără de obicei separat o firmă în creștere (un chatbot, un CRM, o soluție de telefonie, un inbox comun, un instrument de automatizare) sunt aici module ale aceleiași platforme, așa că nimic nu se copiază dintr-o unealtă în alta.',
        items: [
          { term: 'Asistenți AI pe fiecare canal', desc: 'Un singur asistent răspunde în chatul de pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack și Discord, în amoCRM, Kommo și JivoChat, pe email și la apeluri telefonice în direct, din cunoștințele pe care i le dai.' },
          { term: 'Lead-uri scrise în CRM', desc: 'Pe planurile plătite, asistentul cere datele pe care le alegi, cum ar fi numele, emailul, bugetul sau serviciul dorit, și salvează un lead în CRM. Contactele, companiile, dealurile pe tablă sau în tabel, sarcinile și rapoartele de vânzări sunt pe aceeași fișă.' },
          { term: 'Constructor vizual de fluxuri', desc: 'Fluxurile pornesc din chaturi, email, apeluri, scoruri Voice QA, modificări în CRM, un program sau un webhook primit și rulează pași pentru condiții, înregistrări CRM, email, notificări, clasificare, rezumare și extragere cu AI, și cereri HTTP. 12 șabloane de pornire; un test nu scrie nimic.' },
          { term: 'AI pe apeluri telefonice', desc: 'Aceiași asistenți răspund la apeluri și sună prin propria ta centrală telefonică (SIP), în 14 limbi. Cererile de revenire ajung ca sarcini în CRM, iar campaniile de apeluri fac apeluri de prospectare, sondaj și promoție.' },
          { term: 'Inbox de echipă cu preluare', desc: 'Nouă canale de chat și emailul tău ajung într-un singur inbox de echipă, cu rutare, departamente și răspunsuri salvate. Când clientul cere un om sau o regulă o spune, asistentul se oprește și echipa răspunde din aceeași conversație.' },
          { term: 'Sistemele tale, apelate din chat', desc: 'Acțiunile asistentului sunt apeluri HTTP construite dintr-o comandă cURL lipită, cu secrete stocate și un panou de test, așa că asistentul poate verifica o comandă sau rezerva un interval în sistemul tău. Webhook-urile trimit mesaje, tichete, evaluări și câmpuri colectate către uneltele tale.' },
          { term: 'n8n, găzduit sau al tău', desc: 'Rulează fluxuri n8n pe o instanță găzduită de Fineguide sau conectează propriul n8n. Un flux care începe cu un webhook poate fi importat ca acțiune a asistentului.' },
          { term: 'Fiecare apel evaluat', desc: 'Voice QA transcrie apelurile înregistrate și evaluează fiecare apel după regulile departamentului tău, cu citate din apel, așa că și controlul calității este automatizat.' },
        ],
      },
      audience: {
        eyebrow: 'Pentru cine este',
        heading: 'Echipele care vorbesc zilnic cu clienții.',
        items: [
          { term: 'Firme mici și mijlocii', desc: 'Fiecare solicitare primește răspuns pe fiecare canal, inclusiv în afara programului, fără să angajezi pentru fiecare canal nou.' },
          { term: 'Echipe de vânzări', desc: 'Lead-uri calificate în chat sau la telefon și scrise în CRM, cu sarcini de revenire și dealuri create de fluxuri.' },
          { term: 'Echipe de suport', desc: 'AI-ul răspunde primul din baza ta de cunoștințe; oamenii preiau conversațiile care au nevoie de ei, cu tot istoricul pe ecran.' },
          { term: 'Call centere și firme de servicii', desc: 'AI pe apelurile primite și efectuate, campanii, reveniri ca sarcini și fiecare apel înregistrat evaluat după regulile tale.' },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la un asistent la o activitate automatizată.',
        body: 'Începe cu canalul pe care clienții îl folosesc cel mai des și adaugă restul când ești pregătit.',
        items: [
          'Creează un asistent și dă-i site-ul, documentele și întrebările pe care clienții le pun cel mai des.',
          'Conectează primele canale: chatul de pe site, WhatsApp, Instagram, Telegram sau căsuța de suport.',
          'Alege datele pe care asistentul le colectează ca lead și când predă conversația echipei.',
          'Alege un șablon de flux, de exemplu o sarcină pentru fiecare lead nou, testează-l și pornește-l.',
          'Adaugă liniile telefonice prin SIP, campaniile de apeluri și Voice QA când apelurile fac parte din muncă.',
        ],
      },
      facts: {
        eyebrow: 'Date',
        heading: 'În cifre și nume.',
        items: [
          { term: 'Canale', desc: 'Chat pe site, WhatsApp, Telegram (bot sau cont de utilizator), Instagram, Messenger, Slack, Discord, JivoChat, amoCRM și Kommo, emailul tău prin IMAP și SMTP și apeluri telefonice prin SIP.' },
          { term: 'Limbi', desc: 'Apeluri AI în 14 limbi; interfața widgetului de chat în 24; rapoarte Voice QA în 30. Asistenții răspund în limba în care scrie clientul.' },
          { term: 'Fluxuri de lucru', desc: '12 șabloane; declanșatori din chaturi, email, apeluri, scoruri Voice QA, modificări în CRM, programe și webhook-uri; fiecare rulare păstrată. Pe planurile plătite, de la Starter; fiecare pas rulat consumă credite.' },
          { term: 'Integrări', desc: 'n8n (găzduit sau al tău), Zendesk, Help Scout, Google Calendar (sincronizare în ambele sensuri a sarcinilor), Facebook Lead Ads, un API REST și un server MCP pentru ChatGPT, Claude și alte unelte AI.' },
          { term: 'Credite', desc: 'Un răspuns AI standard costă 1 credit, un apel AI 10 credite pe minut cu răspuns, iar evaluarea apelurilor 12 credite pe minut. CRM-ul, inboxul, rapoartele și emailul nu consumă credite.' },
          { term: 'Planuri', desc: 'Începi pe planul gratuit cu 200 de credite, fără card; planurile plătite adaugă credite lunare, locuri în echipă și spațiu pentru baza de cunoștințe.' },
        ],
      },
      alternatives: {
        eyebrow: 'Cum se compară',
        heading: 'Fineguide și alternativele obișnuite.',
        body:
          'Cele mai multe firme automatizează munca cu clienții legând mai multe unelte. Acestea sunt alegerile obișnuite, descrise după ce fac, cu comparațiile complete, cu surse, la un clic distanță.',
        items: [
          { term: 'Unelte de automatizare ca Zapier și Make', desc: 'Leagă mii de aplicații și construiesc acum agenți AI, dar chatbotul, CRM-ul și telefonia rămân produse separate pe care le conectezi singur. Fineguide ține asistenții, CRM-ul, apelurile și fluxurile pe aceeași fișă și rulează n8n pentru aplicațiile pe care nu le acoperă.', path: '/compare/zapier-make', label: 'Fineguide vs Zapier și Make' },
          { term: 'Suite CRM ca HubSpot și Salesforce', desc: 'Suite mari, cu agenți AI și unelte ample de vânzări și marketing. Fineguide este o platformă mai mică, construită pe AI, în care aceiași asistenți răspund în aplicațiile de mesagerie și la apeluri în direct prin propria ta centrală, iar fiecare apel înregistrat poate fi evaluat.', path: '/compare/hubspot', label: 'Fineguide vs HubSpot' },
          { term: 'Un chatbot plus un CRM separat', desc: 'Un chatbot pe site sau pe WhatsApp trimite lead-urile într-un CRM printr-o integrare. În Fineguide asistentul scrie lead-ul în propriul CRM, iar echipa preia în aceeași conversație.', path: '/best/ai-chatbots-for-websites', label: 'Cei mai buni chatboți AI pentru site-uri' },
          { term: 'Toată categoria, alături', desc: 'Fineguide, HubSpot, Make, Salesforce, Zapier și Zoho CRM, fiecare cu ce spun paginile lui oficiale că face.', path: '/best/ai-business-automation-platforms', label: 'Cele mai bune platforme AI de automatizare' },
        ],
      },
      related: {
        eyebrow: 'Legate',
        heading: 'Modulele din spatele automatizării',
        links: [
          { path: '/automations', label: 'Automatizări', desc: 'Constructorul vizual de fluxuri, n8n, acțiunile asistentului și webhook-urile.' },
          { path: '/ai-assistants', label: 'Asistenți AI', desc: 'Asistenți care răspund pe site, în aplicațiile de mesagerie și pe email.' },
          { path: '/crm', label: 'CRM', desc: 'Contacte, companii, dealuri, sarcini și rapoarte de vânzări pe aceeași fișă.' },
          { path: '/voice-ai', label: 'Telefonie AI', desc: 'AI pe apelurile primite și efectuate, prin propria ta centrală telefonică.' },
          { path: '/omnichannel-chatbot', label: 'Chatbot AI omnicanal', desc: 'Un singur asistent pe fiecare canal, cu un singur istoric pentru fiecare client.' },
        ],
      },
      faq: {
        heading: 'Automatizarea afacerii: întrebări frecvente',
        items: [
          { q: 'Care este cea mai bună platformă AI de automatizare pentru o firmă mică?', a: 'Depinde ce automatizezi. Dacă e vorba de legarea multor aplicații, se potrivește o unealtă ca Zapier sau Make; dacă e munca din jurul clienților (răspunsuri, calificare, reveniri, apeluri), se potrivește Fineguide, pentru că asistenții AI, CRM-ul, apelurile și fluxurile folosesc aceeași fișă.' },
          { q: 'Ce înseamnă automatizarea proceselor de afaceri cu AI?', a: 'Înseamnă că AI-ul face pași pe care un om îi făcea de mână, cum ar fi răspunsul către un client, sortarea unui email sau completarea unei fișe în CRM, iar fluxurile duc rezultatul mai departe. În Fineguide un flux poate, de exemplu, să clasifice cu AI un email primit și să deschidă o sarcină pentru persoana potrivită.' },
          { q: 'Poate o singură platformă să înlocuiască un chatbot, un CRM și Zapier?', a: 'Pentru munca cu clienții, da: Fineguide are asistenți AI pe chat, email și telefon, un CRM și un constructor de fluxuri pe aceeași platformă. Pentru aplicațiile pe care nu le conectează direct, rulează n8n, găzduit de Fineguide sau al tău.' },
          { q: 'Poate AI-ul să ducă lead-urile din chatul de pe site și din WhatsApp în CRM?', a: 'Da. Pe planurile plătite, asistentul cere datele pe care le alegi în timp ce răspunde și salvează un lead în CRM-ul Fineguide când câmpurile obligatorii sunt completate; apoi un flux poate crea un deal, atribui un responsabil sau adăuga o sarcină.' },
          { q: 'Trebuie să știu să programez?', a: 'Nu. Asistenții se configurează din formulare, iar fluxurile se construiesc din șabloane într-un constructor vizual. Codul e necesar doar dacă vrei să apelezi propriile sisteme, și chiar atunci o acțiune a asistentului se poate face dintr-o comandă cURL lipită.' },
          { q: 'Automatizarea funcționează și la telefon?', a: 'Da. Aceiași asistenți răspund și sună prin propria ta centrală telefonică în 14 limbi, salvează cererile de revenire ca sarcini în CRM, iar apelurile pot porni fluxuri. Voice QA evaluează apelurile înregistrate după regulile tale.' },
          { q: 'Există un plan gratuit?', a: 'Da: planul gratuit are 200 de credite, fără card, cu asistenți AI, CRM și inboxul de echipă. Constructorul de fluxuri și colectarea lead-urilor vin cu planurile plătite, de la Starter.' },
        ],
      },
      closing: {
        heading: 'Automatizează prima conversație azi.',
        body: 'Creează un asistent pe planul gratuit, conectează un canal și vezi cum ajunge un lead în CRM. Sau programează o demonstrație de 30 de minute pe procesele tale.',
      },
    },

    ru: {
      meta: {
        title: 'ИИ-платформа автоматизации бизнеса | Fineguide',
        description:
          'ИИ-платформа автоматизации бизнеса: ИИ-ассистенты в чатах, почте и на звонках, CRM, автоматизация процессов и оценка звонков в одной карточке клиента.',
      },
      hero: {
        eyebrow: 'Платформа автоматизации бизнеса',
        title: 'Автоматизируйте работу',
        titleAccent: ' вокруг каждого клиента.',
        subtitle:
          'ИИ-ассистенты отвечают и квалифицируют клиентов во всех каналах, сценарии двигают карточку дальше, а команда подключается только там, где нужен человек — всё на одной платформе.',
      },
      definition: {
        heading: 'Что такое ИИ-платформа автоматизации бизнеса?',
        body:
          'ИИ-платформа автоматизации бизнеса — это программа, которая передаёт ИИ повторяющуюся работу с клиентами: ответы, квалификацию, повторные касания и заполнение карточек — и связывает эти шаги без ручного копирования. Fineguide — платформа автоматизации, построенная вокруг ИИ: ИИ-ассистенты в чате на сайте, мессенджерах, почте и на звонках, CRM, автоматизация процессов и оценка звонков работают с одной карточкой клиента. Лид, который написал в WhatsApp, позвонил, а потом прислал письмо, — это один контакт с одной историей, и ваши сценарии работают с той же карточкой.',
      },
      capabilities: {
        eyebrow: 'Что умеет',
        heading: 'Одна платформа вместо набора сервисов.',
        body:
          'То, что растущая компания обычно покупает по отдельности — чат-бот, CRM, телефонию, общий inbox, сервис автоматизации, — здесь модули одной платформы, и ничего не нужно переносить из сервиса в сервис.',
        items: [
          { term: 'ИИ-ассистенты во всех каналах', desc: 'Один ассистент отвечает в чате на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack и Discord, внутри amoCRM, Kommo и JivoChat, в почте и на живых звонках — по материалам, которые вы ему дали.' },
          { term: 'Лиды сразу в CRM', desc: 'На платных тарифах ассистент спрашивает нужные вам данные — имя, почту, бюджет, интересующую услугу — и сохраняет лид в CRM. Контакты, компании, сделки на доске или в таблице, задачи и отчёты по продажам — в той же карточке.' },
          { term: 'Визуальный конструктор сценариев', desc: 'Сценарии запускаются из чатов, почты, звонков, оценок Voice QA, изменений в CRM, по расписанию или входящему вебхуку и выполняют шаги: условия, записи CRM, письма, уведомления, классификацию, резюме и извлечение данных с ИИ, HTTP-запросы. 12 готовых шаблонов; тестовый запуск ничего не записывает.' },
          { term: 'ИИ на телефонных звонках', desc: 'Те же ассистенты принимают и совершают звонки через вашу телефонию (SIP) на 14 языках. Просьбы перезвонить становятся задачами в CRM, а исходящие кампании проводят обзвоны: привлечение, опросы, промо.' },
          { term: 'Общий inbox с передачей человеку', desc: 'Девять чат-каналов и ваша почта приходят в один inbox команды с маршрутизацией, отделами и шаблонами ответов. Когда клиент просит человека или срабатывает правило, ассистент замолкает, и команда отвечает в том же диалоге.' },
          { term: 'Ваши системы прямо из чата', desc: 'Действия ассистента — это HTTP-запросы, собранные из вставленной команды cURL, с хранимыми секретами и панелью проверки: ассистент может проверить заказ или записать клиента в вашей системе. Вебхуки отправляют сообщения, тикеты, оценки и собранные поля в ваши сервисы.' },
          { term: 'n8n — наш или ваш', desc: 'Запускайте сценарии n8n на экземпляре, который размещает Fineguide, или подключите свой n8n. Сценарий, начинающийся с вебхука, можно импортировать как действие ассистента.' },
          { term: 'Оценка каждого звонка', desc: 'Voice QA расшифровывает записанные звонки и оценивает каждый по правилам вашего отдела, с цитатами из разговора, — контроль качества тоже автоматизирован.' },
        ],
      },
      audience: {
        eyebrow: 'Для кого',
        heading: 'Для команд, которые каждый день общаются с клиентами.',
        items: [
          { term: 'Малый и средний бизнес', desc: 'Ответ на каждое обращение в каждом канале, в том числе в нерабочее время, без найма под каждый новый канал.' },
          { term: 'Отделы продаж', desc: 'Лиды квалифицируются в чате или по телефону и попадают в CRM, а сценарии создают задачи и сделки.' },
          { term: 'Службы поддержки', desc: 'ИИ отвечает первым по базе знаний; люди берут диалоги, где они нужны, и видят всю историю.' },
          { term: 'Колл-центры и сервисные компании', desc: 'ИИ на входящих и исходящих звонках, обзвоны, перезвоны как задачи и оценка каждого записанного звонка по вашим правилам.' },
        ],
      },
      steps: {
        eyebrow: 'С чего начать',
        heading: 'От одного ассистента к автоматизированной работе.',
        body: 'Начните с канала, которым клиенты пользуются чаще всего, и добавляйте остальные, когда будете готовы.',
        items: [
          'Создайте ассистента и дайте ему сайт, документы и самые частые вопросы клиентов.',
          'Подключите первые каналы: чат на сайте, WhatsApp, Instagram, Telegram или ящик поддержки.',
          'Выберите, какие данные ассистент собирает в лид и когда передаёт диалог команде.',
          'Возьмите шаблон сценария — например, задача на каждый новый лид, — проверьте его и включите.',
          'Добавьте телефонные линии по SIP, исходящие кампании и Voice QA, когда в работе есть звонки.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          { term: 'Каналы', desc: 'Чат на сайте, WhatsApp, Telegram (бот или пользовательский аккаунт), Instagram, Messenger, Slack, Discord, JivoChat, amoCRM и Kommo, ваша почта по IMAP и SMTP и звонки по SIP.' },
          { term: 'Языки', desc: 'ИИ-звонки на 14 языках; интерфейс чат-виджета на 24; отчёты Voice QA на 30. Ассистенты отвечают на языке клиента.' },
          { term: 'Сценарии', desc: '12 шаблонов; запуск из чатов, почты, звонков, оценок Voice QA, изменений в CRM, по расписанию и вебхукам; каждый запуск сохраняется. На платных тарифах, начиная со Starter; каждый выполненный шаг расходует кредиты.' },
          { term: 'Интеграции', desc: 'n8n (наш или ваш), Zendesk, Help Scout, Google Календарь (двусторонняя синхронизация задач), Facebook Lead Ads, REST API и MCP-сервер для ChatGPT, Claude и других ИИ-инструментов.' },
          { term: 'Кредиты', desc: 'Стандартный ответ ИИ — 1 кредит, ИИ-звонок — 10 кредитов за минуту разговора, оценка звонков — 12 кредитов за минуту. CRM, inbox, отчёты и почта кредиты не расходуют.' },
          { term: 'Тарифы', desc: 'Начните с бесплатного тарифа: 200 кредитов, без карты; платные тарифы добавляют ежемесячные кредиты, места в команде и объём базы знаний.' },
        ],
      },
      alternatives: {
        eyebrow: 'Сравнение',
        heading: 'Fineguide и привычные альтернативы.',
        body:
          'Чаще всего работу с клиентами автоматизируют, связывая несколько сервисов. Вот привычные варианты — по тому, что они делают, — а полные сравнения с источниками в одном клике.',
        items: [
          { term: 'Сервисы автоматизации: Zapier и Make', desc: 'Связывают тысячи приложений и теперь строят ИИ-агентов, но чат-бот, CRM и телефония остаются отдельными продуктами, которые вы связываете сами. В Fineguide ассистенты, CRM, звонки и сценарии работают с одной карточкой, а для остальных приложений есть n8n.', path: '/compare/zapier-make', label: 'Fineguide и Zapier с Make' },
          { term: 'CRM-пакеты: HubSpot и Salesforce', desc: 'Большие пакеты с ИИ-агентами и широкими инструментами продаж и маркетинга. Fineguide — платформа поменьше, построенная вокруг ИИ: одни и те же ассистенты отвечают в мессенджерах и на живых звонках через вашу телефонию, и каждый записанный звонок можно оценить.', path: '/compare/hubspot', label: 'Fineguide и HubSpot' },
          { term: 'Чат-бот плюс отдельная CRM', desc: 'Чат-бот на сайте или в WhatsApp передаёт лиды в CRM через интеграцию. В Fineguide ассистент записывает лид в собственную CRM, а команда подключается в том же диалоге.', path: '/best/ai-chatbots-for-websites', label: 'Лучшие ИИ-чат-боты для сайта' },
          { term: 'Вся категория рядом', desc: 'Fineguide, HubSpot, Make, Salesforce, Zapier и Zoho CRM — у каждого то, что о нём говорят его собственные страницы.', path: '/best/ai-business-automation-platforms', label: 'Лучшие ИИ-платформы автоматизации бизнеса' },
        ],
      },
      related: {
        eyebrow: 'По теме',
        heading: 'Модули, на которых держится автоматизация',
        links: [
          { path: '/automations', label: 'Автоматизация', desc: 'Визуальный конструктор сценариев, n8n, действия ассистента и вебхуки.' },
          { path: '/ai-assistants', label: 'ИИ-ассистенты', desc: 'Ассистенты, которые отвечают на сайте, в мессенджерах и в почте.' },
          { path: '/crm', label: 'CRM', desc: 'Контакты, компании, сделки, задачи и отчёты по продажам в одной карточке.' },
          { path: '/voice-ai', label: 'ИИ-телефония', desc: 'ИИ на входящих и исходящих звонках через вашу телефонию.' },
          { path: '/omnichannel-chatbot', label: 'Омниканальный ИИ-чат-бот', desc: 'Один ассистент во всех каналах и одна история на клиента.' },
        ],
      },
      faq: {
        heading: 'Автоматизация бизнеса: частые вопросы',
        items: [
          { q: 'Какая ИИ-платформа автоматизации лучше для малого бизнеса?', a: 'Зависит от того, что автоматизировать. Если нужно связать много приложений — подойдёт Zapier или Make; если работу вокруг клиентов (ответы, квалификацию, повторные касания, звонки) — Fineguide, потому что ИИ-ассистенты, CRM, звонки и сценарии работают с одной карточкой.' },
          { q: 'Что такое автоматизация бизнес-процессов с ИИ?', a: 'Это когда ИИ делает шаги, которые раньше человек делал вручную: отвечает клиенту, разбирает письмо, заполняет карточку в CRM, — а сценарии передают результат дальше. В Fineguide сценарий может, например, классифицировать входящее письмо с помощью ИИ и поставить задачу нужному сотруднику.' },
          { q: 'Может ли одна платформа заменить чат-бот, CRM и Zapier?', a: 'Для работы с клиентами — да: в Fineguide есть ИИ-ассистенты в чатах, почте и на звонках, CRM и конструктор сценариев на одной платформе. Для приложений без прямой интеграции есть n8n — наш или ваш.' },
          { q: 'Может ли ИИ собирать лиды из чата на сайте и WhatsApp в CRM?', a: 'Да. На платных тарифах ассистент по ходу разговора спрашивает нужные вам данные и сохраняет лид в CRM Fineguide, когда обязательные поля заполнены; затем сценарий может создать сделку, назначить ответственного или поставить задачу.' },
          { q: 'Нужно ли уметь программировать?', a: 'Нет. Ассистенты настраиваются в формах, а сценарии собираются из шаблонов в визуальном конструкторе. Код нужен, только если вы хотите обращаться к своим системам, и даже тогда действие ассистента можно сделать из вставленной команды cURL.' },
          { q: 'Работает ли автоматизация на звонках?', a: 'Да. Те же ассистенты принимают и совершают звонки через вашу телефонию на 14 языках, сохраняют просьбы перезвонить как задачи в CRM, а звонки могут запускать сценарии. Voice QA оценивает записанные звонки по вашим правилам.' },
          { q: 'Есть ли бесплатный тариф?', a: 'Да: на бесплатном тарифе 200 кредитов, без карты, с ИИ-ассистентами, CRM и общим inbox. Конструктор сценариев и сбор лидов — на платных тарифах, начиная со Starter.' },
        ],
      },
      closing: {
        heading: 'Автоматизируйте первый диалог уже сегодня.',
        body: 'Создайте ассистента на бесплатном тарифе, подключите один канал и посмотрите, как лид появится в CRM. Или запишитесь на 30-минутное демо на ваших процессах.',
      },
    },
  },
};

export default solution;
