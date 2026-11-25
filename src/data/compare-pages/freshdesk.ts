// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Freshdesk facts: freshworks.com and support.freshdesk.com only, read 2026-11-25 (see `sources`). No prices, plan
// prices, trials, free plans, discounts or billing terms; plan NAMES only where a feature sits. callScoring is null:
// no Freshworks page read today lists call scoring for Freshdesk (the voice add-on list names call metrics and
// post-call transcription; the QA page at freshworks.com/customer-service/ai/quality-assurance/ is a generic guide).
// uiLanguages is null: the "Manage languages" article lists 47 supported languages without saying which are
// agent-interface languages.
// Fineguide facts: public/llms.txt plus the code on origin/main (2026-11-25): apps/chat-api/src/_v2/channels/telegram-user/*,
// apps/chat-api/src/controllers/omni.jivochat.ts, prisma EmailInbox aiMode OFF|DRAFT|AUTO (default OFF),
// aiReplyDelaySeconds 120, aiMaxRepliesPerThread 3. There is no Freshdesk connector in the code, so none is claimed.

export const competitors = [
  {
    id: 'freshdesk',
    name: 'Freshdesk',
    url: 'https://www.freshworks.com/freshdesk/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'Freddy AI Agent on Growth, Pro and Enterprise: chat and email AI agents that take actions in backend systems and transfer conversations with full context, in 60+ languages. Freddy AI Copilot (reply drafts, summaries, live translation, sentiment) is an add-on on Pro and Enterprise; Freddy AI Insights is on Enterprise.',
        ro: 'Freddy AI Agent pe Growth, Pro și Enterprise: agenți AI pentru chat și email, care acționează în sistemele din spate și transferă conversația cu tot contextul, în peste 60 de limbi. Freddy AI Copilot (ciorne de răspuns, rezumate, traducere live, sentiment) este add-on pe Pro și Enterprise; Freddy AI Insights este pe Enterprise.',
        ru: 'Freddy AI Agent на Growth, Pro и Enterprise: ИИ-агенты для чата и почты, которые выполняют действия во внутренних системах и передают диалог с полным контекстом, на 60+ языках. Freddy AI Copilot (черновики ответов, саммари, живой перевод, тональность) — дополнение на Pro и Enterprise; Freddy AI Insights — на Enterprise.',
        src: ['plans', 'ai-agent', 'copilot', 'omni'],
      },
      channels: {
        en: 'Freshdesk Omni: email, web chat, WhatsApp, Facebook and Instagram in one inbox, a self-service portal, and a Freshcaller integration for calls. Other messaging channels connect through its APIs (bring your own channel).',
        ro: 'Freshdesk Omni: email, chat web, WhatsApp, Facebook și Instagram într-un singur inbox, un portal de autoservire și o integrare Freshcaller pentru apeluri. Alte canale de mesagerie se conectează prin API-urile sale (bring your own channel).',
        ru: 'Freshdesk Omni: почта, веб-чат, WhatsApp, Facebook и Instagram в одном inbox, портал самообслуживания и интеграция с Freshcaller для звонков. Другие мессенджеры подключаются через API (bring your own channel).',
        src: ['omni', 'plans'],
      },
      phone: {
        en: 'Freshcaller: numbers from 90+ countries, IVR and speech-enabled IVR, bring your own carrier, call recording and AI-powered voice bots. In the Freshdesk voice add-on, IVR (phone trees) is on Pro and Enterprise and post-call transcription (Freddy) on Enterprise.',
        ro: 'Freshcaller: numere din peste 90 de țări, IVR și IVR cu recunoaștere vocală, propriul operator (BYOC), înregistrarea apelurilor și roboți vocali cu AI. În add-on-ul de voce Freshdesk, IVR-ul (meniuri telefonice) este pe Pro și Enterprise, iar transcrierea după apel (Freddy) pe Enterprise.',
        ru: 'Freshcaller: номера из 90+ стран, IVR и голосовое IVR, свой оператор связи (BYOC), запись звонков и голосовые боты с ИИ. В голосовом дополнении Freshdesk IVR (голосовое меню) — на Pro и Enterprise, расшифровка после звонка (Freddy) — на Enterprise.',
        src: ['phone', 'voice-plans'],
      },
      callScoring: null,
      languages: {
        en: '47 supported languages (4 of them in the knowledge base only), Romanian and Russian among them; multilingual support from the Pro plan.',
        ro: '47 de limbi suportate (4 dintre ele doar în baza de cunoștințe), printre care româna și rusa; suportul multilingv este disponibil de la planul Pro.',
        ru: '47 поддерживаемых языков (4 из них только в базе знаний), среди них русский и румынский; мультиязычность доступна начиная с тарифа Pro.',
        src: ['languages'],
      },
      data: {
        en: 'Data centres in the US, the EEA, the UAE, India and Australia; you choose one when you set up the account.',
        ro: 'Centre de date în SUA, SEE, Emiratele Arabe Unite, India și Australia; îl alegi pe unul la crearea contului.',
        ru: 'Дата-центры в США, ЕЭЗ, ОАЭ, Индии и Австралии; нужный выбирается при создании аккаунта.',
        src: ['datacenters', 'plans'],
      },
    },
    uiLanguages: null,
    dataLocation: {
      en: 'Data centres in the US, the EEA, the UAE, India and Australia; you choose one when you set up the account.',
      ro: 'Centre de date în SUA, SEE, Emiratele Arabe Unite, India și Australia; îl alegi pe unul la crearea contului.',
      ru: 'Дата-центры в США, ЕЭЗ, ОАЭ, Индии и Австралии; нужный выбирается при создании аккаунта.',
      src: ['datacenters', 'plans'],
    },
    reviewComplaints: [],
    sources: [
      { id: 'plans', title: 'Freshdesk Omni: plans and features (with FAQ)', url: 'https://www.freshworks.com/freshdesk/omni/pricing/' },
      { id: 'ai-agent', title: 'Freshdesk: Freddy AI Agent', url: 'https://www.freshworks.com/freshdesk/omni/freddy-ai-agent/' },
      { id: 'copilot', title: 'Freshdesk: Freddy AI Copilot', url: 'https://www.freshworks.com/freshdesk/omni/freddy-ai-copilot/' },
      { id: 'insights', title: 'Freshdesk: Freddy AI Insights', url: 'https://www.freshworks.com/freshdesk/omni/freddy-ai-insights/' },
      { id: 'omni', title: 'Freshdesk support: Getting started with Freshdesk Omni', url: 'https://support.freshdesk.com/support/solutions/articles/50000011785-getting-started-with-freshdesk-omni' },
      { id: 'phone', title: 'Freshworks: Freshcaller cloud phone system', url: 'https://www.freshworks.com/freshcaller-cloud-pbx/' },
      { id: 'voice-plans', title: 'Freshdesk support: Voice add-on feature availability', url: 'https://support.freshdesk.com/support/solutions/articles/50000014477-voice-add-on-feature-availability' },
      { id: 'languages', title: 'Freshdesk support: Manage languages', url: 'https://support.freshdesk.com/support/solutions/articles/180033-manage-languages' },
      { id: 'datacenters', title: 'Freshdesk support: Where are your data servers located?', url: 'https://support.freshdesk.com/support/solutions/articles/235810-where-is-your-data-servers-located-' },
      { id: 'integrations', title: 'Freshdesk: Integrations (Freshworks Marketplace)', url: 'https://www.freshworks.com/freshdesk/integrations/' },
      { id: 'export', title: 'Freshdesk support: How do I export my tickets from Freshdesk?', url: 'https://support.freshdesk.com/support/solutions/articles/225158-how-do-i-export-my-tickets-from-freshdesk-' },
    ],
  },
];

export const page = {
  slug: 'freshdesk',
  competitors: ['freshdesk'],
  label: { en: 'Freshdesk', ro: 'Freshdesk', ru: 'Freshdesk' },
  summary: {
    en: 'An established help desk with Freddy AI, a customer portal and its own phone numbers, against AI assistants on chats and live calls, with call scoring and a CRM on one record.',
    ro: 'Un helpdesk consacrat, cu Freddy AI, portal pentru clienți și numere de telefon proprii, față în față cu asistenți AI pe chat și la telefon, cu evaluarea apelurilor și un CRM pe aceeași fișă.',
    ru: 'Известный хелпдеск с Freddy AI, клиентским порталом и своими номерами — против ИИ-ассистентов в чатах и на живых звонках, с оценкой звонков и CRM в одной карточке.',
  },
  langs: ['en', 'ro', 'ru'],
};

export const copy = {
  en: {
    title: 'Fineguide vs Freshdesk: Freshdesk alternative with AI calls',
    description: 'A Freshdesk alternative compared fact by fact: Freddy AI, channels, phone, call scoring, languages and data, checked on Freshworks’ own pages.',
    crumb: 'Freshdesk',
    h1: 'Fineguide vs Freshdesk:',
    h1Accent: 'AI on chats, email and live calls',
    shortAnswer:
      'Freshdesk is the more established help desk: ticketing with a customer portal and knowledge base, Freddy AI agents for chat and email in 60+ languages, its own phone numbers in 90+ countries and more than 1,000 marketplace integrations. Fineguide is a smaller AI-first platform, with AI assistants on nine chat channels and on live calls over your own phone system, Voice QA call scoring and a CRM on one customer record. Choose Freshdesk for help-desk depth and self-service; choose Fineguide for AI on customer conversations and calls.',
    tableHeading: 'Freshdesk Omni vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Freshdesk is stronger',
      items: [
        { text: 'Help desk and self-service. A customer portal and knowledge base on every plan, and a multilingual help desk from Pro, in 47 languages that include Romanian and Russian.', refs: ['freshdesk:plans', 'freshdesk:languages'] },
        { text: 'The Freddy AI family. Chat and email AI agents in 60+ languages, vertical AI agents with 50+ agentic workflows and integrations (Shopify, Stripe, PayPal, FedEx), Copilot for reply drafts, summaries and live translation, and Insights that alert on anomalies in service metrics.', refs: ['freshdesk:ai-agent', 'freshdesk:copilot', 'freshdesk:insights'] },
        { text: 'Phone numbers of its own. Freshcaller sells numbers from 90+ countries, with IVR, speech-enabled IVR, call recording and AI-powered voice bots.', refs: ['freshdesk:phone'] },
        { text: 'Ecosystem: more than 1,000 ready-to-install integrations in the Freshworks Marketplace.', refs: ['freshdesk:integrations'] },
        { text: 'A choice of data centre: the US, the EEA, the UAE, India or Australia, picked when you set up the account.', refs: ['freshdesk:datacenters', 'freshdesk:plans'] },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        { text: 'AI on your own phone system. Assistants answer live inbound and outbound calls over your SIP in 14 languages, transfer callers to a person on request, keep every call as a transcript and run outbound campaigns (outreach, survey, promotion). In Freshdesk’s voice add-on, post-call transcription (Freddy) is on Enterprise.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'fg:fg-llms', 'freshdesk:voice-plans'] },
        { text: 'Call scoring against your own rules. Voice QA scores every recorded call by each department’s rules and weights, with quotes and a suggestion for every rule, agent scorecards and reports in 30 languages. Freshdesk’s voice feature list names call metrics and transcription, not call scoring.', refs: ['fg:fg-voice-qa', 'freshdesk:voice-plans'] },
        { text: 'More messaging places to answer in, ready to connect: the website widget, WhatsApp, Telegram (a bot or a Telegram user account), Instagram, Messenger, Slack, Discord and JivoChat, and inside amoCRM and Kommo.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        { text: 'AI on email with a safety margin. AI is off by default for each mailbox; when on, it can only draft, or reply after a wait so a colleague can take over, and it stops after a set number of AI replies in one thread.', refs: ['fg:fg-messages', 'fg:fg-llms'] },
        { text: 'Sales and support on one record. Contacts, companies, deals on a board or a table, tasks with two-way Google Calendar sync and sales reports sit beside the inbox, with n8n automations hosted for you or on your own instance.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Freshdesk if…',
        items: [
          'you need a mature ticketing system with a customer portal and a multilingual knowledge base;',
          'you want phone numbers, IVR and voice bots from the same vendor;',
          'you plan to use Freddy AI agents with ready workflows for Shopify, Stripe or PayPal;',
          'you must pick a data centre, such as the EEA, the UAE or India.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'you want AI assistants on chat, email and live calls over the phone system you already have;',
          'you run a call centre and want every recorded call scored against your own rules;',
          'your customers write on Telegram, Slack, Discord or JivoChat as well as WhatsApp;',
          'your support and sales teams should work from one customer record.',
        ],
      },
    },
    switching: {
      heading: 'Switching from Freshdesk',
      intro: 'The contacts come over in a spreadsheet, and the channels reconnect one at a time, so you can run both side by side until the team is ready.',
      steps: [
        { title: 'Start on the Free plan', body: 'Create a Fineguide account (no card needed), give an assistant your website, help articles and documents, and test it in the chat widget.' },
        { title: 'Export from Freshdesk', body: { text: 'Export tickets, contacts and companies from Freshdesk; it produces CSV or Excel files.', refs: ['freshdesk:export'] } },
        { title: 'Import into Fineguide', body: { text: 'Import the files (CSV, TSV, XLS or XLSX), map the columns to custom fields, and review duplicates: a person confirms every merge.', refs: ['fg:fg-llms'] } },
        { title: 'Connect channels and email', body: { text: 'Add your own mailboxes over IMAP and SMTP, then WhatsApp, Telegram, Instagram or Messenger, and route them with rules and departments.', refs: ['fg:fg-messages'] } },
        { title: 'Add your phone line', body: { text: 'Connect your phone system over SIP so assistants take and place calls, and send call recordings to Voice QA for scoring.', refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      {
        q: 'Is Fineguide a Freshdesk alternative for small teams?',
        a: 'For teams that mostly answer customers on chat, messaging apps, email and the phone, yes: it covers the AI assistants, the shared inbox, handover to a person and the CRM. A team that depends on a public customer portal should weigh that first.',
      },
      {
        q: 'Does Freddy AI answer phone calls?',
        a: 'Freshworks lists Freddy AI Agent for chat and email, and AI-powered voice bots in its Freshcaller phone system. Fineguide’s assistants answer and place live calls over the phone system you already have (SIP), in 14 languages, and keep every call as a transcript.',
        refs: ['freshdesk:omni', 'freshdesk:phone', 'fg:fg-voice-ai'],
      },
      {
        q: 'Does Freshdesk score calls for quality?',
        a: 'The Freshdesk voice feature list names call metrics, call recording and post-call transcription (Freddy, on Enterprise), and no call scoring. Fineguide’s Voice QA scores each recorded call against your departments’ own rules and weights, with quotes from the call and a suggestion for every rule.',
        refs: ['freshdesk:voice-plans', 'fg:fg-voice-qa'],
      },
      {
        q: 'Is Freshdesk available in Romanian and Russian?',
        a: 'Yes: Freshdesk lists 47 supported languages, Romanian and Russian among them, with multilingual support from the Pro plan. Fineguide’s chat widget interface covers 24 languages and its AI phone calls 14, both including Romanian and Russian.',
        refs: ['freshdesk:languages', 'fg:fg-llms'],
      },
      {
        q: 'Can I move from Freshdesk to Fineguide without losing data?',
        a: 'Export tickets, contacts and companies from Freshdesk as CSV or Excel, then import contacts into the Fineguide CRM, which reads CSV, TSV, XLS and XLSX and asks a person to confirm every duplicate merge.',
        refs: ['freshdesk:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'See Fineguide on your own support conversations',
      body: 'Start on the Free plan, no card needed, or book a 30-minute walkthrough on your operation.',
    },
    extraLinks: [
      { href: '/help-desk/', label: 'AI help desk and ticketing' },
      { href: '/voice-qa/', label: 'Voice QA: every recorded call scored' },
    ],
  },

  ro: {
    title: 'Fineguide vs Freshdesk: alternativă la Freshdesk cu AI',
    description: 'Alternativă la Freshdesk comparată punct cu punct: Freddy AI, canale, telefon, evaluarea apelurilor, limbi și date, verificate pe paginile Freshworks.',
    crumb: 'Freshdesk',
    h1: 'Fineguide vs Freshdesk:',
    h1Accent: 'AI pe chat, email și la telefon',
    shortAnswer:
      'Freshdesk este helpdesk-ul mai consacrat: tichete cu portal pentru clienți și bază de cunoștințe, agenți Freddy AI pentru chat și email în peste 60 de limbi, numere de telefon proprii în peste 90 de țări și peste 1.000 de integrări în marketplace. Fineguide este o platformă mai mică, construită pe AI, cu asistenți AI pe nouă canale de chat și pe apeluri în direct prin propria ta centrală telefonică, evaluarea apelurilor cu Voice QA și un CRM, totul pe o singură fișă de client. Alege Freshdesk pentru un helpdesk complet și autoservire; alege Fineguide pentru AI pe conversațiile și apelurile cu clienții.',
    tableHeading: 'Freshdesk Omni și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Freshdesk este mai puternic',
      items: [
        { text: 'Helpdesk și autoservire. Portal pentru clienți și bază de cunoștințe pe toate planurile și helpdesk multilingv de la Pro, în 47 de limbi, printre care româna și rusa.', refs: ['freshdesk:plans', 'freshdesk:languages'] },
        { text: 'Familia Freddy AI. Agenți AI pentru chat și email în peste 60 de limbi, agenți AI pe domenii cu peste 50 de fluxuri agentice și integrări (Shopify, Stripe, PayPal, FedEx), Copilot pentru ciorne de răspuns, rezumate și traducere live și Insights, care semnalează anomaliile din indicatorii de servire.', refs: ['freshdesk:ai-agent', 'freshdesk:copilot', 'freshdesk:insights'] },
        { text: 'Numere de telefon proprii. Freshcaller oferă numere din peste 90 de țări, cu IVR, IVR cu recunoaștere vocală, înregistrarea apelurilor și roboți vocali cu AI.', refs: ['freshdesk:phone'] },
        { text: 'Ecosistem: peste 1.000 de integrări gata de instalat în Freshworks Marketplace.', refs: ['freshdesk:integrations'] },
        { text: 'Centrul de date la alegere: SUA, SEE, Emiratele Arabe Unite, India sau Australia, ales la crearea contului.', refs: ['freshdesk:datacenters', 'freshdesk:plans'] },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        { text: 'AI pe propria centrală telefonică. Asistenții răspund la apeluri în direct, primite și efectuate, prin SIP-ul tău, în 14 limbi, transferă apelantul la un om când o cere, păstrează fiecare apel ca transcriere și derulează campanii de apeluri (prospectare, sondaj, promoție). În add-on-ul de voce Freshdesk, transcrierea după apel (Freddy) este pe Enterprise.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'fg:fg-llms', 'freshdesk:voice-plans'] },
        { text: 'Evaluarea apelurilor după regulile tale. Voice QA notează fiecare apel înregistrat după regulile și ponderile fiecărui departament, cu citate și o sugestie pentru fiecare regulă, fișe de scor pe operator și rapoarte în 30 de limbi. Lista de funcții de voce Freshdesk numește indicatori ai apelurilor și transcriere, nu evaluarea apelurilor.', refs: ['fg:fg-voice-qa', 'freshdesk:voice-plans'] },
        { text: 'Mai multe locuri de mesagerie, gata de conectat: widgetul de pe site, WhatsApp, Telegram (bot sau cont de utilizator Telegram), Instagram, Messenger, Slack, Discord și JivoChat, plus direct în amoCRM și Kommo.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        { text: 'AI pe email, cu marjă de siguranță. AI-ul este oprit implicit pentru fiecare căsuță; când e pornit, poate doar să scrie ciorne sau să răspundă după o pauză în care un coleg poate prelua, și se oprește după un număr stabilit de răspunsuri AI în aceeași conversație.', refs: ['fg:fg-messages', 'fg:fg-llms'] },
        { text: 'Vânzări și suport pe aceeași fișă. Contactele, companiile, tranzacțiile pe tablă sau în tabel, sarcinile sincronizate în ambele sensuri cu Google Calendar și rapoartele de vânzări stau lângă inbox, cu automatizări n8n găzduite de Fineguide sau pe propriul tău n8n.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege Freshdesk dacă…',
        items: [
          'ai nevoie de un sistem de tichete matur, cu portal pentru clienți și bază de cunoștințe în mai multe limbi;',
          'vrei numere de telefon, IVR și roboți vocali de la același furnizor;',
          'plănuiești să folosești agenți Freddy AI cu fluxuri gata făcute pentru Shopify, Stripe sau PayPal;',
          'trebuie să alegi centrul de date, de exemplu SEE, Emiratele Arabe Unite sau India.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'vrei asistenți AI pe chat, email și apeluri în direct, prin centrala telefonică pe care o ai deja;',
          'ai un call center și vrei ca fiecare apel înregistrat să fie evaluat după regulile tale;',
          'clienții îți scriu pe Telegram, Slack, Discord sau JivoChat, nu doar pe WhatsApp;',
          'echipele de suport și de vânzări trebuie să lucreze pe aceeași fișă de client.',
        ],
      },
    },
    switching: {
      heading: 'Cum treci de la Freshdesk',
      intro: 'Contactele vin într-un fișier tabelar, iar canalele se reconectează pe rând, așa că poți folosi ambele sisteme în paralel până când echipa e pregătită.',
      steps: [
        { title: 'Începe cu planul Free', body: 'Creează un cont Fineguide (fără card), dă-i unui asistent site-ul, articolele de ajutor și documentele tale și testează-l în widgetul de chat.' },
        { title: 'Exportă din Freshdesk', body: { text: 'Exportă tichetele, contactele și companiile din Freshdesk; rezultă fișiere CSV sau Excel.', refs: ['freshdesk:export'] } },
        { title: 'Importă în Fineguide', body: { text: 'Importă fișierele (CSV, TSV, XLS sau XLSX), potrivește coloanele cu câmpurile personalizate și verifică duplicatele: fiecare unire o confirmă un om.', refs: ['fg:fg-llms'] } },
        { title: 'Conectează canalele și emailul', body: { text: 'Adaugă-ți căsuțele de email prin IMAP și SMTP, apoi WhatsApp, Telegram, Instagram sau Messenger, și distribuie conversațiile cu reguli și departamente.', refs: ['fg:fg-messages'] } },
        { title: 'Adaugă linia telefonică', body: { text: 'Conectează centrala telefonică prin SIP, ca asistenții să primească și să facă apeluri, și trimite înregistrările în Voice QA pentru evaluare.', refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      {
        q: 'Este Fineguide o alternativă la Freshdesk pentru echipe mici?',
        a: 'Pentru echipele care răspund clienților mai ales pe chat, în mesagerii, pe email și la telefon, da: acoperă asistenții AI, inboxul comun, preluarea de către un om și CRM-ul. O echipă care depinde de un portal public pentru clienți ar trebui să țină cont de asta.',
      },
      {
        q: 'Freddy AI răspunde la telefon?',
        a: 'Freshworks listează Freddy AI Agent pentru chat și email, iar roboți vocali cu AI în sistemul telefonic Freshcaller. Asistenții Fineguide primesc și fac apeluri în direct prin centrala pe care o ai deja (SIP), în 14 limbi, și păstrează fiecare apel ca transcriere.',
        refs: ['freshdesk:omni', 'freshdesk:phone', 'fg:fg-voice-ai'],
      },
      {
        q: 'Freshdesk evaluează calitatea apelurilor?',
        a: 'Lista de funcții de voce Freshdesk numește indicatori ai apelurilor, înregistrarea apelurilor și transcrierea după apel (Freddy, pe Enterprise), fără evaluarea apelurilor. Voice QA din Fineguide evaluează fiecare apel înregistrat după regulile și ponderile departamentelor tale, cu citate din apel și o sugestie pentru fiecare regulă.',
        refs: ['freshdesk:voice-plans', 'fg:fg-voice-qa'],
      },
      {
        q: 'Freshdesk este disponibil în română?',
        a: 'Da: Freshdesk listează 47 de limbi suportate, printre care româna și rusa, cu suport multilingv de la planul Pro. Interfața widgetului de chat Fineguide acoperă 24 de limbi, iar apelurile AI 14, ambele cu română și rusă.',
        refs: ['freshdesk:languages', 'fg:fg-llms'],
      },
      {
        q: 'Pot trece de la Freshdesk la Fineguide fără să pierd date?',
        a: 'Exportă tichetele, contactele și companiile din Freshdesk în CSV sau Excel, apoi importă contactele în CRM-ul Fineguide, care citește CSV, TSV, XLS și XLSX și cere confirmarea unui om pentru fiecare unire de duplicate.',
        refs: ['freshdesk:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Vezi Fineguide pe conversațiile tale de suport',
      body: 'Începe cu planul Free, fără card, sau programează o prezentare de 30 de minute pe operațiunile tale.',
    },
    extraLinks: [
      { href: '/ro/help-desk/', label: 'Helpdesk cu AI și tichete' },
      { href: '/ro/voice-qa/', label: 'Voice QA: fiecare apel înregistrat, evaluat' },
    ],
  },

  ru: {
    title: 'Fineguide vs Freshdesk: альтернатива Freshdesk с ИИ-звонками',
    description: 'Альтернатива Freshdesk: сравниваем Freddy AI, каналы, телефонию, оценку звонков, языки и хранение данных по официальным страницам Freshworks.',
    crumb: 'Freshdesk',
    h1: 'Fineguide vs Freshdesk:',
    h1Accent: 'ИИ в чатах, почте и звонках',
    shortAnswer:
      'Freshdesk — более известный хелпдеск: тикеты с клиентским порталом и базой знаний, ИИ-агенты Freddy для чата и почты на 60+ языках, собственные номера в 90+ странах и более 1 000 интеграций в маркетплейсе. Fineguide — платформа поменьше, изначально построенная на ИИ: ИИ-ассистенты в девяти каналах чата и на живых звонках через вашу телефонию, оценка звонков в Voice QA и CRM — всё в одной карточке клиента. Выбирайте Freshdesk ради полноценного хелпдеска и самообслуживания; выбирайте Fineguide ради ИИ в диалогах и звонках с клиентами.',
    tableHeading: 'Freshdesk Omni и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Freshdesk',
      items: [
        { text: 'Хелпдеск и самообслуживание. Клиентский портал и база знаний на всех тарифах, мультиязычный хелпдеск с Pro — на 47 языках, включая русский и румынский.', refs: ['freshdesk:plans', 'freshdesk:languages'] },
        { text: 'Семейство Freddy AI. ИИ-агенты для чата и почты на 60+ языках, отраслевые ИИ-агенты с 50+ готовыми сценариями и интеграциями (Shopify, Stripe, PayPal, FedEx), Copilot для черновиков ответов, саммари и живого перевода и Insights, который предупреждает об аномалиях в показателях сервиса.', refs: ['freshdesk:ai-agent', 'freshdesk:copilot', 'freshdesk:insights'] },
        { text: 'Собственные номера. Freshcaller предлагает номера из 90+ стран, IVR, голосовое IVR, запись звонков и голосовых ботов с ИИ.', refs: ['freshdesk:phone'] },
        { text: 'Экосистема: более 1 000 готовых интеграций в Freshworks Marketplace.', refs: ['freshdesk:integrations'] },
        { text: 'Выбор дата-центра: США, ЕЭЗ, ОАЭ, Индия или Австралия — при создании аккаунта.', refs: ['freshdesk:datacenters', 'freshdesk:plans'] },
      ],
    },
    fineguideStronger: {
      heading: 'В чём сильнее Fineguide',
      items: [
        { text: 'ИИ на вашей телефонии. Ассистенты принимают и совершают живые звонки через ваш SIP на 14 языках, переводят звонящего на человека по просьбе, сохраняют каждый звонок как расшифровку и ведут кампании обзвона (привлечение, опрос, промо). В голосовом дополнении Freshdesk расшифровка после звонка (Freddy) — на Enterprise.', refs: ['fg:fg-voice-ai', 'fg:fg-campaigns', 'fg:fg-llms', 'freshdesk:voice-plans'] },
        { text: 'Оценка звонков по вашим правилам. Voice QA оценивает каждый записанный звонок по правилам и весам конкретного отдела, с цитатами и рекомендацией по каждому правилу, карточками оценок сотрудников и отчётами на 30 языках. В списке голосовых функций Freshdesk есть метрики звонков и расшифровка, но нет оценки звонков.', refs: ['fg:fg-voice-qa', 'freshdesk:voice-plans'] },
        { text: 'Больше мессенджеров, готовых к подключению: виджет на сайте, WhatsApp, Telegram (бот или пользовательский аккаунт Telegram), Instagram, Messenger, Slack, Discord и JivoChat, а также работа внутри amoCRM и Kommo.', refs: ['fg:fg-assistants', 'fg:fg-llms'] },
        { text: 'ИИ в почте с запасом прочности. По умолчанию ИИ выключен для каждого ящика; когда включён, он может только готовить черновики или отвечать после паузы, за которую коллега успеет перехватить письмо, и останавливается после заданного числа ИИ-ответов в одной переписке.', refs: ['fg:fg-messages', 'fg:fg-llms'] },
        { text: 'Продажи и поддержка в одной карточке. Контакты, компании, сделки на доске или в таблице, задачи с двусторонней синхронизацией с Google Calendar и отчёты по продажам — рядом с входящими, плюс автоматизации n8n на сервере Fineguide или на вашем n8n.', refs: ['fg:fg-crm', 'fg:fg-llms'] },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Freshdesk, если…',
        items: [
          'вам нужна зрелая система тикетов с клиентским порталом и мультиязычной базой знаний;',
          'вы хотите номера, IVR и голосовых ботов от одного поставщика;',
          'вы планируете ИИ-агентов Freddy с готовыми сценариями для Shopify, Stripe или PayPal;',
          'вам нужно выбрать дата-центр, например ЕЭЗ, ОАЭ или Индию.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'вам нужны ИИ-ассистенты в чатах, почте и на живых звонках через вашу текущую телефонию;',
          'у вас колл-центр и вы хотите оценивать каждый записанный звонок по своим правилам;',
          'клиенты пишут вам в Telegram, Slack, Discord или JivoChat, а не только в WhatsApp;',
          'поддержка и продажи должны работать с одной карточкой клиента.',
        ],
      },
    },
    switching: {
      heading: 'Как перейти с Freshdesk',
      intro: 'Контакты переносятся таблицей, а каналы подключаются по одному, так что обе системы могут работать параллельно, пока команда не будет готова.',
      steps: [
        { title: 'Начните с тарифа Free', body: 'Создайте аккаунт Fineguide (карта не нужна), дайте ассистенту ваш сайт, статьи справки и документы и проверьте его в чат-виджете.' },
        { title: 'Выгрузите данные из Freshdesk', body: { text: 'Экспортируйте тикеты, контакты и компании из Freshdesk; выгрузка — в CSV или Excel.', refs: ['freshdesk:export'] } },
        { title: 'Импортируйте в Fineguide', body: { text: 'Импортируйте файлы (CSV, TSV, XLS или XLSX), сопоставьте столбцы с пользовательскими полями и проверьте дубли: каждое объединение подтверждает человек.', refs: ['fg:fg-llms'] } },
        { title: 'Подключите каналы и почту', body: { text: 'Добавьте свои почтовые ящики по IMAP и SMTP, затем WhatsApp, Telegram, Instagram или Messenger и распределяйте диалоги правилами и отделами.', refs: ['fg:fg-messages'] } },
        { title: 'Подключите телефонную линию', body: { text: 'Подключите телефонию по SIP, чтобы ассистенты принимали и совершали звонки, и отправляйте записи в Voice QA на оценку.', refs: ['fg:fg-voice-ai', 'fg:fg-voice-qa'] } },
      ],
    },
    faq: [
      {
        q: 'Подойдёт ли Fineguide как аналог Freshdesk для небольшой команды?',
        a: 'Для команд, которые в основном отвечают клиентам в чатах, мессенджерах, почте и по телефону, да: Fineguide закрывает ИИ-ассистентов, общий inbox, передачу человеку и CRM. Команде, которой нужен публичный клиентский портал, стоит учесть это заранее.',
      },
      {
        q: 'Отвечает ли Freddy AI на звонки?',
        a: 'Freshworks указывает Freddy AI Agent для чата и почты, а голосовых ботов с ИИ — в телефонии Freshcaller. Ассистенты Fineguide принимают и совершают живые звонки через вашу текущую телефонию (SIP) на 14 языках и сохраняют каждый звонок как расшифровку.',
        refs: ['freshdesk:omni', 'freshdesk:phone', 'fg:fg-voice-ai'],
      },
      {
        q: 'Оценивает ли Freshdesk качество звонков?',
        a: 'В списке голосовых функций Freshdesk есть метрики звонков, запись и расшифровка после звонка (Freddy, на Enterprise), но нет оценки звонков. Voice QA в Fineguide оценивает каждый записанный звонок по правилам и весам ваших отделов, с цитатами из звонка и рекомендацией по каждому правилу.',
        refs: ['freshdesk:voice-plans', 'fg:fg-voice-qa'],
      },
      {
        q: 'Есть ли Freshdesk на русском языке?',
        a: 'Да: Freshdesk указывает 47 поддерживаемых языков, среди них русский и румынский, мультиязычность — с тарифа Pro. Интерфейс чат-виджета Fineguide есть на 24 языках, ИИ-звонки — на 14, в обоих случаях с русским и румынским.',
        refs: ['freshdesk:languages', 'fg:fg-llms'],
      },
      {
        q: 'Можно ли перейти с Freshdesk на Fineguide без потери данных?',
        a: 'Выгрузите тикеты, контакты и компании из Freshdesk в CSV или Excel, затем импортируйте контакты в CRM Fineguide: она читает CSV, TSV, XLS и XLSX и просит человека подтвердить каждое объединение дублей.',
        refs: ['freshdesk:export', 'fg:fg-llms'],
      },
    ],
    closing: {
      heading: 'Посмотрите Fineguide на ваших обращениях в поддержку',
      body: 'Начните с тарифа Free без карты или запишитесь на 30-минутную демонстрацию на ваших процессах.',
    },
    extraLinks: [
      { href: '/ru/help-desk/', label: 'Хелпдеск с ИИ и тикетами' },
      { href: '/ru/voice-qa/', label: 'Voice QA: оценка каждого записанного звонка' },
    ],
  },
};
