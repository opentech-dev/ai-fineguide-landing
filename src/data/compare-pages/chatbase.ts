// Facts checked on 2026-11-27 on Chatbase's own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Page: /compare/chatbase/ (EN), /ro/compare/chatbase/, /ru/compare/chatbase/.
// Competitor id to add to compare.ts (MORE + CATEGORY 'live-chat'): 'chatbase'.
//
// Every Chatbase fact below was read on 2026-11-27 on chatbase.co or its docs (chatbase.co/docs) and is linked in
// `sources`. Capabilities only: no prices, plans' prices, trials, free plans, message limits or billing terms. Plan
// names appear only to say where a feature sits.
// Fineguide refs ('fg:…') use the ids in FINEGUIDE_SOURCES (src/data/compare.ts); Fineguide's knowledge-base claims
// are the ones on /knowledge-base/ (src/data/solutions/knowledge-base.ts, checked 2026-11-25).

const chatbaseData = {
  en: 'The security page says the database and application run in one AWS region in the United States (us-east-1). SOC 2 Type II, GDPR support and HIPAA-eligible Enterprise workspaces; data is not used to train models.',
  ro: 'Pagina de securitate spune că baza de date și aplicația rulează într-o singură regiune AWS din Statele Unite (us-east-1). SOC 2 Type II, conformitate GDPR și workspace-uri Enterprise eligibile HIPAA; datele nu sunt folosite la antrenarea modelelor.',
  ru: 'На странице безопасности сказано, что база данных и приложение работают в одном регионе AWS в США (us-east-1). SOC 2 Type II, поддержка GDPR и Enterprise-пространства, допустимые для HIPAA; данные не используются для обучения моделей.',
  src: ['security', 'home'],
};

export const competitors = [
  {
    id: 'chatbase',
    name: 'Chatbase',
    url: 'https://www.chatbase.co/',
    checked: '2026-11-27',
    facts: {
      ai: {
        en: 'AI agents for support, sales and product guidance, trained on website pages (crawl, sitemap or single links), files (PDF, TXT, DOC, DOCX), text, Q&A pairs, Notion pages and closed Salesforce or Zendesk tickets; websites, Notion and tickets re-read weekly on Basic, Business and Enterprise. Actions look up orders, update records, create tickets and trigger workflows; escalations hand the conversation to a person with its context. A choice of models from several AI providers.',
        ro: 'Agenți AI pentru suport, vânzări și ghidarea în produs, antrenați pe pagini de site (crawl, sitemap sau linkuri individuale), fișiere (PDF, TXT, DOC, DOCX), text, perechi întrebare-răspuns, pagini Notion și tichete închise din Salesforce sau Zendesk; site-urile, Notion și tichetele sunt recitite săptămânal pe Basic, Business și Enterprise. Acțiunile caută comenzi, actualizează înregistrări, creează tichete și pornesc fluxuri; escaladarea predă conversația unui om, cu context. Modele la alegere de la mai mulți furnizori de AI.',
        ru: 'ИИ-агенты для поддержки, продаж и помощи по продукту, обученные на страницах сайта (обход, sitemap или отдельные ссылки), файлах (PDF, TXT, DOC, DOCX), тексте, парах «вопрос-ответ», страницах Notion и закрытых тикетах Salesforce или Zendesk; сайты, Notion и тикеты перечитываются раз в неделю на Basic, Business и Enterprise. Действия ищут заказы, обновляют записи, создают тикеты и запускают процессы; эскалация передаёт диалог человеку с контекстом. Выбор моделей от нескольких ИИ-провайдеров.',
        src: ['home', 'data-sources'],
      },
      channels: {
        en: 'Website chat bubble and help page, email on your own domain, WhatsApp, Messenger, Instagram and Slack; Shopify and Stripe; Zendesk, Salesforce, Freshdesk, Intercom, HubSpot, Help Scout and other help desks to answer in or escalate to; Zapier for other apps.',
        ro: 'Bula de chat și pagina de ajutor de pe site, email pe propriul domeniu, WhatsApp, Messenger, Instagram și Slack; Shopify și Stripe; Zendesk, Salesforce, Freshdesk, Intercom, HubSpot, Help Scout și alte helpdesk-uri în care răspunde sau spre care escaladează; Zapier pentru alte aplicații.',
        ru: 'Чат-кнопка и справочная страница на сайте, почта на вашем домене, WhatsApp, Messenger, Instagram и Slack; Shopify и Stripe; Zendesk, Salesforce, Freshdesk, Intercom, HubSpot, Help Scout и другие хелпдески, где агент отвечает или куда передаёт обращение; Zapier для других приложений.',
        src: ['integrations'],
      },
      phone: {
        en: 'A voice agent on numbers from your Twilio account or a SIP trunk from your PBX or provider. Chatbase’s voice page says voice is built for inbound calls: the agent answers, it does not dial out. Recordings are attached to the conversation.',
        ro: 'Un agent vocal pe numere din contul tău Twilio sau printr-un trunchi SIP de la centrala ori furnizorul tău. Pagina de voce Chatbase spune că vocea este făcută pentru apeluri primite: agentul răspunde, nu sună el. Înregistrările se atașează conversației.',
        ru: 'Голосовой агент на номерах из вашего аккаунта Twilio или через SIP-транк от вашей АТС или провайдера. На странице голоса Chatbase сказано, что голос рассчитан на входящие: агент отвечает, но сам не звонит. Записи прикрепляются к диалогу.',
        src: ['voice', 'voice-docs', 'integrations'],
      },
      callScoring: {
        en: 'Sentiment, topics and the resolution rate across conversations, thumbs up or down on AI messages and CSAT on help-desk tickets; voice sessions appear in the same chat logs. The pages we read describe no scoring of calls against your own checklist.',
        ro: 'Sentiment, subiecte și rata de rezolvare pe conversații, aprecieri pe mesajele AI și CSAT pe tichetele de helpdesk; sesiunile vocale apar în aceleași jurnale de chat. Paginile citite nu descriu evaluarea apelurilor după propria ta listă de criterii.',
        ru: 'Тональность, темы и доля решённых обращений, оценки «нравится / не нравится» на ответах ИИ и CSAT по тикетам; голосовые сессии видны в тех же журналах чатов. Оценки звонков по вашему собственному чек-листу на прочитанных страницах не описано.',
        src: ['analytics', 'voice'],
      },
      languages: {
        en: 'The agent replies in the language the customer writes in; Chatbase cites 95+ languages. On calls, live voice covers English, Portuguese, French, German, Japanese, Hindi and Korean, and classic voice 100+.',
        ro: 'Agentul răspunde în limba în care scrie clientul; Chatbase indică peste 95 de limbi. La apeluri, vocea live acoperă engleza, portugheza, franceza, germana, japoneza, hindi și coreeana, iar vocea clasică peste 100.',
        ru: 'Агент отвечает на языке, на котором пишет клиент; Chatbase называет 95+ языков. На звонках live-голос поддерживает английский, португальский, французский, немецкий, японский, хинди и корейский, а классический — 100+.',
        src: ['home', 'voice', 'voice-docs'],
      },
      data: chatbaseData,
    },
    uiLanguages: null,
    dataLocation: chatbaseData,
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'Chatbase: AI agents for customer service (channels, actions, security)', url: 'https://www.chatbase.co/' },
      { id: 'data-sources', title: 'Chatbase docs: Data sources', url: 'https://www.chatbase.co/docs/user-guides/chatbot/data-sources' },
      { id: 'integrations', title: 'Chatbase docs: Integrations overview', url: 'https://www.chatbase.co/docs/user-guides/integrations/integrations-overview' },
      { id: 'voice', title: 'Chatbase: Voice', url: 'https://www.chatbase.co/voice' },
      { id: 'voice-docs', title: 'Chatbase docs: Voice', url: 'https://www.chatbase.co/docs/user-guides/chatbot/voice' },
      { id: 'analytics', title: 'Chatbase docs: Analytics', url: 'https://www.chatbase.co/docs/user-guides/chatbot/analytics' },
      { id: 'activity', title: 'Chatbase docs: Activity (conversations and leads export)', url: 'https://www.chatbase.co/docs/user-guides/chatbot/activity' },
      { id: 'security', title: 'Chatbase: Security', url: 'https://www.chatbase.co/security' },
    ],
  },
];

export const page = {
  slug: 'chatbase',
  competitors: ['chatbase'],
  label: { en: 'Chatbase', ro: 'Chatbase', ru: 'Chatbase' },
  summary: {
    en: 'An AI agent trained on your website and documents, against assistants trained the same way that also take live calls both ways and work inside a CRM with a team inbox.',
    ro: 'Un agent AI antrenat pe site-ul și documentele tale, față în față cu asistenți antrenați la fel care preiau și fac apeluri în direct și lucrează într-un CRM cu inbox de echipă.',
    ru: 'ИИ-агент, обученный на вашем сайте и документах, — против ассистентов, обученных так же, которые ещё принимают и совершают звонки и работают внутри CRM с общим inbox.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Chatbase alternative: Fineguide vs Chatbase',
    description: 'A Chatbase alternative compared on its own pages: training sources, channels, AI phone calls, call scoring, languages and data, checked 27 November 2026.',
    crumb: 'Chatbase',
    h1: 'Fineguide vs Chatbase:',
    h1Accent: 'a chatbot trained on your content, and what sits around it',
    shortAnswer:
      'Chatbase builds AI agents trained on your website, files, Notion pages and past tickets, and deploys them on website chat, email, WhatsApp, Messenger, Instagram, Slack and inbound phone calls, with many help-desk integrations. Fineguide trains assistants on websites, documents and your own Q&A as well, and adds what Chatbase leaves to other tools: a CRM, a team inbox with your own email, AI calls both inbound and outbound over your phone system, call campaigns and Voice QA scoring. Choose Chatbase for a focused support agent beside your help desk; choose Fineguide when the agent should sit on the customer record with sales and calls.',
    tableHeading: 'Chatbase vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Chatbase is stronger',
      items: [
        { text: 'More training sources out of the box. Besides websites, files, text and Q&A, Chatbase learns from Notion pages and from closed tickets in Salesforce or Zendesk, and imports Zendesk macros.', refs: ['chatbase:data-sources'] },
        { text: 'Works inside many help desks. It answers or escalates in Zendesk, Zendesk Messaging, Salesforce, Freshdesk, Intercom, HubSpot, Help Scout, Gorgias, Zoho Desk and Odoo, and adds commerce actions for Shopify and Stripe.', refs: ['chatbase:integrations'] },
        { text: 'More chat languages and a model choice. Chatbase cites 95+ languages and lets you test models from several AI providers in its playground.', refs: ['chatbase:home'] },
        { text: 'Optimisation tools for the agent: sentiment, topic and resolution analytics, and Backstage to query customer issues and trends.', refs: ['chatbase:analytics', 'chatbase:home'] },
        { text: 'Compliance programmes: SOC 2 Type II, GDPR support and HIPAA-eligible Enterprise workspaces.', refs: ['chatbase:security'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'AI calls both ways. Fineguide’s assistants answer and place live calls over your own phone system (SIP) in 14 languages, greet known callers by first name from the CRM, transfer to a person on request and save callback requests as CRM tasks. Chatbase’s voice page says its voice agent answers inbound calls and does not dial out.', refs: ['fg:fg-voice-ai', 'chatbase:voice'] },
        { text: 'Outbound call campaigns. Outreach, survey and promotion campaigns with audiences from a CSV, CRM contacts or tags, retries, calling hours per weekday and a test call first.', refs: ['fg:fg-campaigns'] },
        { text: 'A CRM on the same record. Contacts, companies, deals on a board or a table, tasks with two-way Google Calendar sync and sales reports; on paid plans assistants write the fields you define, such as intent or budget, into CRM leads.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'More chat channels: Telegram (a bot or a user account), Discord and JivoChat, and inside amoCRM and Kommo, beside the website widget, WhatsApp, Instagram, Messenger and Slack. A team inbox for all of them and your own email.', refs: ['fg:fg-assistants', 'fg:fg-messages'] },
        { text: 'Scoring your team’s calls. Voice QA transcribes recorded calls and scores them against each department’s own rules and weights, with quotes and a suggestion for every rule, agent scorecards and reports in 30 languages.', refs: ['fg:fg-voice-qa'] },
        { text: 'A knowledge base per end user. Through the REST API each of your own users gets a learning context under the id you already use, and one assistant answers each of them from their own content plus your shared answers.', refs: ['fg:fg-knowledge-base'] },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Chatbase if…',
        items: [
          'you want an AI support agent that lives inside the help desk you already run, such as Zendesk, Salesforce or Intercom;',
          'your knowledge is in Notion or in years of closed support tickets;',
          'you need chat in many languages or a HIPAA-eligible workspace.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'the same assistant should answer chats and take or place phone calls on your own numbers;',
          'you want the CRM, deals and a team inbox with your email next to the AI;',
          'your customers write on Telegram, Discord or JivoChat, or your sales team works in amoCRM or Kommo;',
          'you run a call center and want every recorded call scored against your own rules.',
        ],
      },
    },
    switching: {
      heading: 'Switching from Chatbase',
      intro: 'The knowledge an agent learned from is yours already (your site and your files), so most of a move is pointing Fineguide at the same sources.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed) and an assistant.' },
        { title: 'Give it the same sources', body: { text: 'Add your website address, upload the same documents (PDF, Word, Excel, CSV, text, HTML, Markdown or JSON) and write your most-asked questions as Q&A.', refs: ['fg:fg-knowledge-base'] } },
        { title: 'Export conversations and leads', body: { text: 'In Chatbase, export conversations as JSON, PDF or CSV and leads as CSV or PDF.', refs: ['chatbase:activity'] } },
        { title: 'Import the leads', body: { text: 'Import the lead file into the Fineguide CRM (CSV, TSV, XLS or XLSX), map columns to custom fields and review duplicates: a person confirms every merge.', refs: ['fg:fg-llms'] } },
        { title: 'Rebuild actions and connect channels', body: { text: 'Turn each action’s API call into an assistant action from a pasted cURL command, then connect the website widget, WhatsApp, Instagram, Messenger and your phone line.', refs: ['fg:fg-llms', 'fg:fg-assistants'] } },
      ],
    },
    faq: [
      { q: 'What is a good Chatbase alternative?', a: 'If you want a support agent beside an existing help desk, Chatbase does that well. If you also want the agent on live phone calls both ways, a CRM, a team inbox and call scoring on one customer record, Fineguide is an alternative built that way.', refs: ['chatbase:integrations', 'fg:fg-llms'] },
      { q: 'Can Chatbase make outbound phone calls?', a: 'Chatbase’s voice page says its voice agent is built for inbound calls: it answers but does not dial out, and suggests email and messaging actions for outbound work. Fineguide’s assistants answer and place calls and run outbound call campaigns.', refs: ['chatbase:voice', 'fg:fg-voice-ai', 'fg:fg-campaigns'] },
      { q: 'Can I train Fineguide on my website and PDFs like Chatbase?', a: 'Yes. Fineguide assistants learn from whole websites, uploaded files (PDF, Word, Excel, CSV, text, HTML, Markdown and JSON) and your own Q&A, keep websites in sync on paid plans and can be limited to answer only from what they have learned.', refs: ['fg:fg-knowledge-base'] },
      { q: 'Does Chatbase have a CRM?', a: 'Chatbase collects leads, which you can filter and export, and connects to CRMs and help desks. Fineguide is itself a CRM, with contacts, companies, deals, tasks and sales reports on the same record as every chat and call.', refs: ['chatbase:activity', 'chatbase:integrations', 'fg:fg-crm'] },
      { q: 'Which one supports Telegram?', a: 'Chatbase’s integrations page does not list Telegram. Fineguide answers on Telegram as a bot or from a Telegram user account.', refs: ['chatbase:integrations', 'fg:fg-assistants'] },
    ],
    closing: { heading: 'Train an assistant on your site in an afternoon', body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your own content.' },
    extraLinks: [
      { href: '/knowledge-base/', label: 'AI knowledge base' },
      { href: '/website-ai-chatbot/', label: 'AI chatbot for your website' },
      { href: '/voice-ai/', label: 'AI Telephony on your own phone system' },
    ],
  },

  ro: {
    title: 'Alternativă la Chatbase: Fineguide vs Chatbase',
    description: 'Alternativă la Chatbase comparată pe paginile lui: surse de antrenare, canale, apeluri AI, evaluarea apelurilor, limbi și date, verificate la 27.11.2026.',
    crumb: 'Chatbase',
    h1: 'Fineguide vs Chatbase:',
    h1Accent: 'un chatbot antrenat pe conținutul tău și ce stă în jurul lui',
    shortAnswer:
      'Chatbase construiește agenți AI antrenați pe site-ul, fișierele, paginile Notion și tichetele tale vechi și îi pune pe chatul de pe site, email, WhatsApp, Messenger, Instagram, Slack și pe apelurile primite, cu multe integrări de helpdesk. Fineguide antrenează și el asistenți pe site-uri, documente și întrebările-răspunsurile tale și adaugă ce Chatbase lasă altor unelte: un CRM, un inbox de echipă cu emailul tău, apeluri AI primite și efectuate prin propria centrală, campanii de apeluri și evaluarea cu Voice QA. Alege Chatbase pentru un agent de suport lângă helpdesk-ul tău; alege Fineguide când agentul trebuie să stea pe fișa clientului, alături de vânzări și apeluri.',
    tableHeading: 'Chatbase și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Chatbase este mai puternic',
      items: [
        { text: 'Mai multe surse de antrenare direct. Pe lângă site-uri, fișiere, text și întrebări-răspunsuri, Chatbase învață din pagini Notion și din tichete închise din Salesforce sau Zendesk și importă macro-uri Zendesk.', refs: ['chatbase:data-sources'] },
        { text: 'Lucrează în multe helpdesk-uri. Răspunde sau escaladează în Zendesk, Zendesk Messaging, Salesforce, Freshdesk, Intercom, HubSpot, Help Scout, Gorgias, Zoho Desk și Odoo și are acțiuni de comerț pentru Shopify și Stripe.', refs: ['chatbase:integrations'] },
        { text: 'Mai multe limbi pe chat și modele la alegere. Chatbase indică peste 95 de limbi și te lasă să testezi modele de la mai mulți furnizori de AI.', refs: ['chatbase:home'] },
        { text: 'Unelte de optimizare a agentului: analiza sentimentului, a subiectelor și a ratei de rezolvare, plus Backstage pentru a interoga problemele și tendințele clienților.', refs: ['chatbase:analytics', 'chatbase:home'] },
        { text: 'Programe de conformitate: SOC 2 Type II, conformitate GDPR și workspace-uri Enterprise eligibile HIPAA.', refs: ['chatbase:security'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'Apeluri AI în ambele sensuri. Asistenții Fineguide răspund și sună în direct prin propria ta centrală (SIP), în 14 limbi, salută pe nume apelanții cunoscuți din CRM, transferă la un om la cerere și salvează cererile de revenire ca sarcini în CRM. Pagina de voce Chatbase spune că agentul vocal răspunde la apelurile primite și nu sună el.', refs: ['fg:fg-voice-ai', 'chatbase:voice'] },
        { text: 'Campanii de apeluri. Campanii de prospectare, sondaj și promoție, cu audiențe din CSV, contacte din CRM sau etichete, reîncercări, ore de apel pe fiecare zi a săptămânii și un apel de test înainte.', refs: ['fg:fg-campaigns'] },
        { text: 'Un CRM pe aceeași fișă. Contacte, companii, oferte pe tablă sau în tabel, sarcini sincronizate în ambele sensuri cu Google Calendar și rapoarte de vânzări; pe planurile plătite, asistenții scriu în lead-uri câmpurile alese de tine, cum ar fi intenția sau bugetul.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Mai multe canale de chat: Telegram (bot sau cont de utilizator), Discord și JivoChat, plus direct în amoCRM și Kommo, pe lângă widgetul de pe site, WhatsApp, Instagram, Messenger și Slack. Un inbox de echipă pentru toate și pentru emailul tău.', refs: ['fg:fg-assistants', 'fg:fg-messages'] },
        { text: 'Evaluarea apelurilor echipei. Voice QA transcrie apelurile înregistrate și le evaluează după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă, fișe de scor pe operator și rapoarte în 30 de limbi.', refs: ['fg:fg-voice-qa'] },
        { text: 'O bază de cunoștințe pentru fiecare utilizator. Prin REST API, fiecare utilizator al tău primește un context de învățare sub id-ul pe care îl folosești deja, iar un singur asistent îi răspunde fiecăruia din conținutul lui plus răspunsurile comune.', refs: ['fg:fg-knowledge-base'] },
      ],
    },
    choose: {
      heading: 'Cine ce ar trebui să aleagă',
      competitor: {
        label: 'Alege Chatbase dacă…',
        items: [
          'vrei un agent AI de suport care trăiește în helpdesk-ul pe care îl ai deja, cum ar fi Zendesk, Salesforce sau Intercom;',
          'cunoștințele tale sunt în Notion sau în ani de tichete de suport închise;',
          'ai nevoie de chat în multe limbi sau de un workspace eligibil HIPAA.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'același asistent trebuie să răspundă la chat și să preia sau să facă apeluri pe numerele tale;',
          'vrei CRM-ul, ofertele și un inbox de echipă cu emailul tău lângă AI;',
          'clienții îți scriu pe Telegram, Discord sau JivoChat ori echipa de vânzări lucrează în amoCRM sau Kommo;',
          'ai un call center și vrei fiecare apel înregistrat evaluat după regulile tale.',
        ],
      },
    },
    switching: {
      heading: 'Trecerea de la Chatbase',
      intro: 'Sursele din care a învățat agentul sunt deja ale tale (site-ul și fișierele), așa că mutarea înseamnă mai ales să îndrepți Fineguide spre aceleași surse.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card) și un asistent.' },
        { title: 'Dă-i aceleași surse', body: { text: 'Adaugă adresa site-ului, încarcă aceleași documente (PDF, Word, Excel, CSV, text, HTML, Markdown sau JSON) și scrie întrebările frecvente ca întrebări-răspunsuri.', refs: ['fg:fg-knowledge-base'] } },
        { title: 'Exportă conversațiile și lead-urile', body: { text: 'În Chatbase, exportă conversațiile ca JSON, PDF sau CSV și lead-urile ca CSV sau PDF.', refs: ['chatbase:activity'] } },
        { title: 'Importă lead-urile', body: { text: 'Importă fișierul de lead-uri în CRM-ul Fineguide (CSV, TSV, XLS sau XLSX), potrivește coloanele cu câmpurile personalizate și verifică duplicatele: un om confirmă fiecare unire.', refs: ['fg:fg-llms'] } },
        { title: 'Refă acțiunile și conectează canalele', body: { text: 'Transformă apelul API al fiecărei acțiuni într-o acțiune de asistent dintr-o comandă cURL lipită, apoi conectează widgetul de pe site, WhatsApp, Instagram, Messenger și linia telefonică.', refs: ['fg:fg-llms', 'fg:fg-assistants'] } },
      ],
    },
    faq: [
      { q: 'Care este o alternativă bună la Chatbase?', a: 'Dacă vrei un agent de suport lângă un helpdesk existent, Chatbase face asta bine. Dacă vrei ca agentul să fie și pe apeluri în ambele sensuri, cu CRM, inbox de echipă și evaluarea apelurilor pe aceeași fișă de client, Fineguide este o alternativă construită așa.', refs: ['chatbase:integrations', 'fg:fg-llms'] },
      { q: 'Poate Chatbase să facă apeluri către clienți?', a: 'Pagina de voce Chatbase spune că agentul vocal este făcut pentru apeluri primite: răspunde, dar nu sună, și recomandă acțiuni prin email și mesaje pentru contactarea clienților. Asistenții Fineguide răspund și sună și rulează campanii de apeluri.', refs: ['chatbase:voice', 'fg:fg-voice-ai', 'fg:fg-campaigns'] },
      { q: 'Pot antrena Fineguide pe site-ul și PDF-urile mele, ca în Chatbase?', a: 'Da. Asistenții Fineguide învață din site-uri întregi, fișiere încărcate (PDF, Word, Excel, CSV, text, HTML, Markdown și JSON) și întrebările-răspunsurile tale, țin site-urile sincronizate pe planurile plătite și pot răspunde doar din ce au învățat.', refs: ['fg:fg-knowledge-base'] },
      { q: 'Are Chatbase un CRM?', a: 'Chatbase colectează lead-uri, pe care le poți filtra și exporta, și se conectează la CRM-uri și helpdesk-uri. Fineguide este el însuși un CRM, cu contacte, companii, oferte, sarcini și rapoarte de vânzări pe aceeași fișă cu fiecare chat și apel.', refs: ['chatbase:activity', 'chatbase:integrations', 'fg:fg-crm'] },
      { q: 'Care dintre ele funcționează pe Telegram?', a: 'Pagina de integrări Chatbase nu listează Telegram. Fineguide răspunde pe Telegram ca bot sau dintr-un cont de utilizator Telegram.', refs: ['chatbase:integrations', 'fg:fg-assistants'] },
    ],
    closing: { heading: 'Antrenează un asistent pe site-ul tău într-o după-amiază', body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe propriul conținut.' },
    extraLinks: [
      { href: '/ro/knowledge-base/', label: 'Bază de cunoștințe AI' },
      { href: '/ro/website-ai-chatbot/', label: 'Chatbot AI pentru site' },
      { href: '/ro/voice-ai/', label: 'Telefonie AI pe propria centrală' },
    ],
  },

  ru: {
    title: 'Альтернатива Chatbase: Fineguide и Chatbase',
    description: 'Альтернатива Chatbase, сравнение по его страницам: источники обучения, каналы, ИИ-звонки, оценка звонков, языки и данные. Проверено 27 ноября 2026 года.',
    crumb: 'Chatbase',
    h1: 'Fineguide и Chatbase:',
    h1Accent: 'чат-бот на вашем контенте и то, что вокруг него',
    shortAnswer:
      'Chatbase создаёт ИИ-агентов, обученных на вашем сайте, файлах, страницах Notion и старых тикетах, и подключает их к чату на сайте, почте, WhatsApp, Messenger, Instagram, Slack и входящим звонкам, с множеством интеграций с хелпдесками. Fineguide тоже обучает ассистентов на сайтах, документах и ваших вопросах-ответах и добавляет то, что Chatbase оставляет другим инструментам: CRM, общий inbox с вашей почтой, ИИ-звонки — входящие и исходящие — через вашу телефонию, обзвоны и оценку звонков Voice QA. Выбирайте Chatbase для агента поддержки рядом с вашим хелпдеском; Fineguide — когда агент должен работать в карточке клиента вместе с продажами и звонками.',
    tableHeading: 'Chatbase и Fineguide: коротко',
    competitorStronger: {
      heading: 'Где сильнее Chatbase',
      items: [
        { text: 'Больше источников обучения сразу. Кроме сайтов, файлов, текста и вопросов-ответов, Chatbase учится на страницах Notion и закрытых тикетах Salesforce или Zendesk и импортирует макросы Zendesk.', refs: ['chatbase:data-sources'] },
        { text: 'Работает внутри многих хелпдесков. Отвечает или передаёт обращения в Zendesk, Zendesk Messaging, Salesforce, Freshdesk, Intercom, HubSpot, Help Scout, Gorgias, Zoho Desk и Odoo, есть действия для Shopify и Stripe.', refs: ['chatbase:integrations'] },
        { text: 'Больше языков в чате и выбор моделей. Chatbase называет 95+ языков и даёт протестировать модели нескольких ИИ-провайдеров.', refs: ['chatbase:home'] },
        { text: 'Инструменты для улучшения агента: аналитика тональности, тем и доли решённых обращений, плюс Backstage для запросов о проблемах и трендах клиентов.', refs: ['chatbase:analytics', 'chatbase:home'] },
        { text: 'Программы соответствия: SOC 2 Type II, поддержка GDPR и Enterprise-пространства, допустимые для HIPAA.', refs: ['chatbase:security'] },
      ],
    },
    fineguideStronger: {
      heading: 'Где сильнее Fineguide',
      items: [
        { text: 'ИИ-звонки в обе стороны. Ассистенты Fineguide принимают и совершают живые звонки через вашу телефонию (SIP) на 14 языках, приветствуют знакомых абонентов по имени из CRM, переводят на человека по просьбе и сохраняют заявки на перезвон как задачи в CRM. На странице голоса Chatbase сказано, что его голосовой агент отвечает на входящие и сам не звонит.', refs: ['fg:fg-voice-ai', 'chatbase:voice'] },
        { text: 'Исходящие обзвоны. Кампании привлечения, опроса и промо: аудитория из CSV, контактов CRM или тегов, повторные попытки, часы звонков по дням недели и тестовый звонок перед запуском.', refs: ['fg:fg-campaigns'] },
        { text: 'CRM в той же карточке. Контакты, компании, сделки на доске или в таблице, задачи с двусторонней синхронизацией Google Calendar и отчёты по продажам; на платных тарифах ассистенты записывают в лиды нужные поля, например намерение или бюджет.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
        { text: 'Больше чат-каналов: Telegram (бот или пользовательский аккаунт), Discord и JivoChat, а также внутри amoCRM и Kommo — кроме виджета на сайте, WhatsApp, Instagram, Messenger и Slack. Общий inbox для всех и для вашей почты.', refs: ['fg:fg-assistants', 'fg:fg-messages'] },
        { text: 'Оценка звонков вашей команды. Voice QA расшифровывает записанные звонки и оценивает их по правилам и весам каждого отдела, с цитатами и рекомендацией по каждому правилу, карточками сотрудников и отчётами на 30 языках.', refs: ['fg:fg-voice-qa'] },
        { text: 'Своя база знаний для каждого пользователя. Через REST API каждый ваш пользователь получает контекст обучения под уже используемым id, и один ассистент отвечает каждому по его материалам плюс общим ответам.', refs: ['fg:fg-knowledge-base'] },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Chatbase, если…',
        items: [
          'нужен ИИ-агент поддержки внутри хелпдеска, который у вас уже есть, например Zendesk, Salesforce или Intercom;',
          'ваши знания лежат в Notion или в годах закрытых тикетов;',
          'нужен чат на многих языках или пространство, допустимое для HIPAA.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'один и тот же ассистент должен отвечать в чатах и принимать или совершать звонки на ваших номерах;',
          'рядом с ИИ нужны CRM, сделки и общий inbox с вашей почтой;',
          'клиенты пишут в Telegram, Discord или JivoChat, либо отдел продаж работает в amoCRM или Kommo;',
          'у вас колл-центр и каждый записанный звонок нужно оценивать по вашим правилам.',
        ],
      },
    },
    switching: {
      heading: 'Переход с Chatbase',
      intro: 'Источники, на которых учился агент, и так ваши (сайт и файлы), поэтому переход — это в основном подключение Fineguide к тем же источникам.',
      steps: [
        { title: 'Начните с бесплатного тарифа', body: 'Создайте аккаунт Fineguide (без карты) и ассистента.' },
        { title: 'Дайте ему те же источники', body: { text: 'Добавьте адрес сайта, загрузите те же документы (PDF, Word, Excel, CSV, текст, HTML, Markdown или JSON) и запишите частые вопросы как вопросы-ответы.', refs: ['fg:fg-knowledge-base'] } },
        { title: 'Выгрузите диалоги и лиды', body: { text: 'В Chatbase диалоги выгружаются в JSON, PDF или CSV, лиды — в CSV или PDF.', refs: ['chatbase:activity'] } },
        { title: 'Импортируйте лиды', body: { text: 'Импортируйте файл лидов в CRM Fineguide (CSV, TSV, XLS или XLSX), сопоставьте столбцы с полями и проверьте дубликаты: каждое слияние подтверждает человек.', refs: ['fg:fg-llms'] } },
        { title: 'Перенесите действия и подключите каналы', body: { text: 'Превратите API-вызов каждого действия в действие ассистента из вставленной команды cURL, затем подключите виджет на сайте, WhatsApp, Instagram, Messenger и телефонную линию.', refs: ['fg:fg-llms', 'fg:fg-assistants'] } },
      ],
    },
    faq: [
      { q: 'Какая есть хорошая альтернатива Chatbase?', a: 'Если нужен агент поддержки рядом с существующим хелпдеском, Chatbase с этим справляется. Если агент должен ещё и вести звонки в обе стороны, а CRM, общий inbox и оценка звонков — быть в одной карточке клиента, Fineguide — альтернатива, устроенная именно так.', refs: ['chatbase:integrations', 'fg:fg-llms'] },
      { q: 'Может ли Chatbase звонить клиентам?', a: 'На странице голоса Chatbase сказано, что голосовой агент рассчитан на входящие: он отвечает, но не звонит, а для исходящих задач предлагаются действия через почту и сообщения. Ассистенты Fineguide и принимают, и совершают звонки, и проводят обзвоны.', refs: ['chatbase:voice', 'fg:fg-voice-ai', 'fg:fg-campaigns'] },
      { q: 'Можно обучить Fineguide на моём сайте и PDF, как в Chatbase?', a: 'Да. Ассистенты Fineguide учатся на целых сайтах, загруженных файлах (PDF, Word, Excel, CSV, текст, HTML, Markdown и JSON) и ваших вопросах-ответах, на платных тарифах держат сайты в актуальном виде и могут отвечать только по изученному.', refs: ['fg:fg-knowledge-base'] },
      { q: 'Есть ли у Chatbase CRM?', a: 'Chatbase собирает лиды, которые можно фильтровать и выгружать, и подключается к CRM и хелпдескам. Fineguide сам является CRM: контакты, компании, сделки, задачи и отчёты по продажам в той же карточке, что и каждый чат и звонок.', refs: ['chatbase:activity', 'chatbase:integrations', 'fg:fg-crm'] },
      { q: 'Кто из них работает в Telegram?', a: 'На странице интеграций Chatbase Telegram не указан. Fineguide отвечает в Telegram как бот или из пользовательского аккаунта Telegram.', refs: ['chatbase:integrations', 'fg:fg-assistants'] },
    ],
    closing: { heading: 'Обучите ассистента на своём сайте за полдня', body: 'Начните с бесплатного тарифа без карты или запишитесь на 30-минутную демонстрацию на вашем контенте.' },
    extraLinks: [
      { href: '/ru/knowledge-base/', label: 'База знаний с ИИ' },
      { href: '/ru/website-ai-chatbot/', label: 'ИИ-чат-бот для сайта' },
      { href: '/ru/voice-ai/', label: 'ИИ-телефония на вашей АТС' },
    ],
  },
};
