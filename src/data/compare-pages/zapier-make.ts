// Facts checked on 2026-11-25 on the vendors' own pages. (No imports; plain data matching compare.ts / types.ts shapes.)
//
// Page: /compare/zapier-make/ (EN), /ro/compare/zapier-make/, /ru/compare/zapier-make/.
// Competitor ids to add to CompetitorId in src/data/compare.ts: 'zapier' | 'make'.
//
// Fineguide refs used below that are NOT yet in FINEGUIDE_SOURCES: 'fg-automations' (see `newFineguideSources`).
// Before this page goes live, /automations/ (en.ts / ro.ts / ru.ts) and public/llms.txt must describe the visual
// workflow builder: today they still say it is not sold (en.ts comment above the Automations page), although the
// Workflows menu opened to every organization with the `workflows` module on 2026-10-26.
//
// Fineguide facts were checked in the code (origin/main, 2026-11-25):
// - ai-backoffice-frontend apps/ai-workspace/src/modules/workflows/ (elements/defs/*.ts: 12 live triggers + 1
//   deprecated; 26 steps in five groups; help/content.ts: tests write nothing, drafts and publish, secrets bound
//   to addresses, retries, runs history, every step costs at least one credit, templates)
// - routes.tsx: /workflows/:orgId/* and /n8n/:orgId/* both behind ModuleGuard moduleKey="workflows" (paid plans)
// - ai-backoffice-api apps/backoffice-api/src/modules/workflow/templates/index.ts (12 templates),
//   workflow.module.ts + usage/workflow-node-credits.ts (every step charged, default 1 credit)
// - ai-backoffice-frontend apps/ai-workspace/src/modules/n8n/ (ProvisionInstanceForm = hosted, ExistingConnectionForm = own)

export const competitors = [
  {
    id: 'zapier',
    name: 'Zapier',
    url: 'https://zapier.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'Zapier Agents: built with help from Zapier Copilot, given company knowledge, and working across 9,000+ apps, on the web and in chat. AI by Zapier steps in Zaps are listed from Professional; Zapier MCP gives AI tools access to thousands of apps.',
        ro: 'Zapier Agents: se construiesc cu ajutorul Zapier Copilot, primesc cunoștințele companiei și lucrează în peste 9.000 de aplicații, pe web și în chat. Pașii AI by Zapier în Zap-uri apar de la planul Professional; Zapier MCP dă uneltelor AI acces la mii de aplicații.',
        ru: 'Zapier Agents: создаются с помощью Zapier Copilot, получают знания компании и работают в 9 000+ приложений, в вебе и в чате. Шаги AI by Zapier в Zap указаны начиная с Professional; Zapier MCP даёт ИИ-инструментам доступ к тысячам приложений.',
        src: ['agents', 'plans'],
      },
      channels: {
        en: 'Zapier Chatbots answer customer questions from FAQs, docs and public links, collect leads and can be shared; the chatbot page names no messaging apps. The Support Email Agent drafts customer replies from your knowledge base.',
        ro: 'Zapier Chatbots răspund la întrebările clienților din FAQ-uri, documente și linkuri publice, colectează lead-uri și pot fi distribuiți; pagina chatboților nu numește nicio aplicație de mesagerie. Support Email Agent scrie ciorne de răspuns pentru clienți din baza ta de cunoștințe.',
        ru: 'Zapier Chatbots отвечают на вопросы клиентов по FAQ, документам и публичным ссылкам, собирают лиды, ими можно делиться; на странице чат-ботов мессенджеры не названы. Support Email Agent готовит черновики ответов клиентам по вашей базе знаний.',
        src: ['chatbots', 'agents'],
      },
      phone: null,
      callScoring: null,
      languages: null,
      data: {
        en: 'Zapier hosts data on AWS servers in the United States; asked whether data can be stored only in the EU, it answers that it does not support this option.',
        ro: 'Zapier găzduiește datele pe servere AWS din Statele Unite; la întrebarea dacă datele pot fi stocate doar în UE, răspunde că nu oferă această opțiune.',
        ru: 'Zapier хранит данные на серверах AWS в США; на вопрос, можно ли хранить данные только в ЕС, отвечает, что такой возможности нет.',
        src: ['privacy'],
      },
    },
    uiLanguages: null,
    dataLocation: {
      en: 'Zapier hosts data on AWS servers in the United States; asked whether data can be stored only in the EU, it answers that it does not support this option.',
      ro: 'Zapier găzduiește datele pe servere AWS din Statele Unite; la întrebarea dacă datele pot fi stocate doar în UE, răspunde că nu oferă această opțiune.',
      ru: 'Zapier хранит данные на серверах AWS в США; на вопрос, можно ли хранить данные только в ЕС, отвечает, что такой возможности нет.',
      src: ['privacy'],
    },
    reviewComplaints: [],
    sources: [
      { id: 'agents', title: 'Zapier: Agents', url: 'https://zapier.com/agents' },
      { id: 'plans', title: 'Zapier: Plans and features', url: 'https://zapier.com/pricing' },
      { id: 'chatbots', title: 'Zapier: Chatbots', url: 'https://zapier.com/ai/chatbot' },
      { id: 'how-it-works', title: 'Zapier: How it works (Zaps, paths, filters, webhooks, AI steps)', url: 'https://zapier.com/how-it-works' },
      { id: 'privacy', title: 'Zapier: Data privacy (where data is hosted)', url: 'https://zapier.com/legal/data-privacy' },
    ],
  },
  {
    id: 'make',
    name: 'Make',
    url: 'https://www.make.com/',
    checked: '2026-11-25',
    facts: {
      ai: {
        en: 'Make AI Agents (the new app is in open beta) are built in the same visual canvas as scenarios, show each decision in a reasoning panel, and use modules, scenarios, MCP server tools and other agents as tools. They run on Make’s AI provider on all plans, or on your own OpenAI, Gemini or Claude connection on paid plans.',
        ro: 'Make AI Agents (aplicația nouă este în beta deschis) se construiesc în același canvas vizual ca scenariile, arată fiecare decizie într-un panou de raționament și folosesc ca unelte module, scenarii, unelte de pe servere MCP și alți agenți. Rulează pe furnizorul AI al Make pe toate planurile sau, pe planurile plătite, pe propria conexiune OpenAI, Gemini ori Claude.',
        ru: 'Make AI Agents (новое приложение — в открытой бете) создаются в том же визуальном холсте, что и сценарии, показывают каждое решение в панели рассуждений и используют как инструменты модули, сценарии, инструменты MCP-серверов и других агентов. Работают на ИИ-провайдере Make на всех тарифах или, на платных тарифах, на вашем подключении OpenAI, Gemini или Claude.',
        src: ['ai-agents', 'agent-intro'],
      },
      channels: {
        en: 'Agent scenarios can start from Slack or Telegram messages, email, forms, webhooks and mailhooks; 3,000+ native apps connect to scenarios.',
        ro: 'Scenariile cu agenți pot porni de la mesaje Slack sau Telegram, email, formulare, webhook-uri și mailhook-uri; peste 3.000 de aplicații native se conectează la scenarii.',
        ru: 'Сценарии с агентами могут запускаться сообщениями Slack или Telegram, письмами, формами, вебхуками и mailhook; к сценариям подключается 3 000+ нативных приложений.',
        src: ['agent-triggers', 'home'],
      },
      phone: null,
      callScoring: null,
      languages: null,
      data: {
        en: 'Each organization chooses a data region, the United States or the European Union. Make notes that a few AI features and models route to the US, or to the UK, even on an EU zone.',
        ro: 'Fiecare organizație își alege regiunea de date: Statele Unite sau Uniunea Europeană. Make precizează că unele funcții și modele AI trimit datele în SUA sau în Regatul Unit chiar și pe o zonă UE.',
        ru: 'Каждая организация выбирает регион данных: США или Европейский союз. Make уточняет, что часть ИИ-функций и моделей обрабатывает данные в США или Великобритании даже в зоне ЕС.',
        src: ['regions', 'ai-zones'],
      },
    },
    uiLanguages: null,
    dataLocation: {
      en: 'Each organization chooses a data region, the United States or the European Union. Make notes that a few AI features and models route to the US, or to the UK, even on an EU zone.',
      ro: 'Fiecare organizație își alege regiunea de date: Statele Unite sau Uniunea Europeană. Make precizează că unele funcții și modele AI trimit datele în SUA sau în Regatul Unit chiar și pe o zonă UE.',
      ru: 'Каждая организация выбирает регион данных: США или Европейский союз. Make уточняет, что часть ИИ-функций и моделей обрабатывает данные в США или Великобритании даже в зоне ЕС.',
      src: ['regions', 'ai-zones'],
    },
    reviewComplaints: [],
    sources: [
      { id: 'home', title: 'Make: Platform overview', url: 'https://www.make.com/en' },
      { id: 'ai-agents', title: 'Make: AI Agents', url: 'https://www.make.com/en/ai-agents' },
      { id: 'agent-intro', title: 'Make Help Center: Introduction to Make AI Agent (New)', url: 'https://help.make.com/introduction-to-make-ai-agent-new' },
      { id: 'agent-triggers', title: 'Make Help Center: Create AI agents for different triggers', url: 'https://help.make.com/create-ai-agents-for-different-triggers' },
      { id: 'regions', title: 'Make Help Center: Organizations (data centre region)', url: 'https://help.make.com/organizations' },
      { id: 'ai-zones', title: 'Make Help Center: AI providers and data zones in Make', url: 'https://help.make.com/ai-providers-and-data-zones-in-make' },
      { id: 'security', title: 'Make: Security (certifications)', url: 'https://www.make.com/en/security' },
    ],
  },
];

export const page = {
  slug: 'zapier-make',
  competitors: ['zapier', 'make'],
  label: { en: 'Zapier and Make', ro: 'Zapier și Make', ru: 'Zapier и Make' },
  summary: {
    en: 'Automation platforms that connect thousands of apps, against workflows that start from your chats, emails, calls and CRM records, with AI assistants and n8n beside them.',
    ro: 'Platforme de automatizare care leagă mii de aplicații, față în față cu workflow-uri care pornesc de la chaturile, emailurile, apelurile și fișele tale din CRM, cu asistenți AI și n8n alături.',
    ru: 'Платформы автоматизации, которые связывают тысячи приложений, — против сценариев, которые запускаются вашими чатами, письмами, звонками и записями CRM, с ИИ-ассистентами и n8n рядом.',
  },
  langs: ['en', 'ro', 'ru'],
};

/** Add to FINEGUIDE_SOURCES in src/data/compare.ts (the page cites it as 'fg:fg-automations'). */
export const newFineguideSources = [{ id: 'fg-automations', title: 'Fineguide: Automations', url: '/automations/' }];

export const copy = {
  en: {
    title: 'Fineguide vs Zapier and Make: Zapier alternative with AI',
    description: 'A Zapier and Make.com alternative, compared on vendor pages: visual workflows, AI agents, triggers from chats, calls and CRM, n8n and data location.',
    crumb: 'Zapier and Make',
    h1: 'Fineguide vs Zapier and Make:',
    h1Accent: 'workflows beside your AI assistants and CRM',
    shortAnswer:
      'Zapier and Make are general automation platforms that connect thousands of apps: Zapier lists more than 9,000, Make more than 3,000. Fineguide is a CRM and AI-assistant platform with its own visual workflow builder, whose triggers are your chats, emails, calls and CRM records, plus n8n (hosted by Fineguide or your own) for the apps it does not reach directly. Choose Zapier or Make to connect many apps; choose Fineguide when your automations are about customers’ conversations and records.',
    tableHeading: 'Zapier vs Make vs Fineguide at a glance',
    competitorStronger: {
      heading: 'Where Zapier and Make are stronger',
      items: [
        {
          text: 'App coverage. Zapier lists more than 9,000 apps and Make more than 3,000 native apps, and Make adds custom integrations to anything with an API. Fineguide’s builder works on its own records and calls other systems with an HTTP request step; for ready-made app connectors it relies on n8n.',
          refs: ['zapier:agents', 'make:home', 'fg:fg-automations'],
        },
        {
          text: 'General-purpose AI agents. Zapier Agents work across those apps, on the web and in chat. Make AI Agents are built in the same canvas as scenarios, show their reasoning step by step and use modules, scenarios, MCP tools and other agents as tools.',
          refs: ['zapier:agents', 'make:ai-agents', 'make:agent-intro'],
        },
        {
          text: 'More building blocks around the workflows: Zapier Tables, Forms, Canvas and Zapier MCP; Make Grid and Make’s MCP server, which builds and runs automations from Claude, ChatGPT or Gemini.',
          refs: ['zapier:plans', 'make:home'],
        },
        {
          text: 'Team and enterprise controls. Zapier’s Team and Enterprise plans list SAML SSO, SCIM user provisioning, custom data retention and an Observability API. Make lists SOC 2 Type II and SOC 3 audits and an ISO 27001-certified security programme.',
          refs: ['zapier:plans', 'make:security'],
        },
        {
          text: 'A choice of data region at Make: each organization picks the United States or the European Union.',
          refs: ['make:regions'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'Where Fineguide is stronger',
      items: [
        {
          text: 'Triggers that come from the customer. A Fineguide workflow starts when a chat with one of your assistants opens or is resolved, when the assistant collects a customer’s details or receives a support request; when an email opens a thread; when a call is received, transcribed or scored in Voice QA; when a contact, deal, company or task changes; on a schedule; or when another system posts to it. These events happen inside Fineguide, so no connector sits between them and the workflow.',
          refs: ['fg:fg-automations', 'fg:fg-voice-qa'],
        },
        {
          text: 'AI steps that read the run’s own text. Classify, Summarize and Extract read the call transcript, the email’s latest message or the chat by default. Extract returns each value as the type you declare (text, number, yes or no, date or one of a fixed set of choices), so a later rule or a task’s due date can use it.',
          refs: ['fg:fg-automations'],
        },
        {
          text: 'The CRM is the same product. Steps create, update and remove contacts, deals and companies, find records with filters, add tags and comments, move a deal to another stage, raise tasks, route an email thread, send email and notify a teammate, all on the record your assistants and team already use.',
          refs: ['fg:fg-crm', 'fg:fg-automations'],
        },
        {
          text: 'Tests that write nothing. A test runs the workflow on one of your real chats, calls, email threads or records and lists what it would have done, without sending or saving anything. Edits to a live workflow stay unpublished until you publish them.',
          refs: ['fg:fg-automations'],
        },
        {
          text: 'n8n included, hosted or your own. Fineguide can host an n8n instance for you or connect the one you run, and an n8n workflow that starts with a webhook becomes an action your assistant calls in the middle of a conversation.',
          refs: ['fg:fg-automations', 'fg:fg-llms'],
        },
      ],
    },
    choose: {
      heading: 'Who should choose which',
      competitor: {
        label: 'Choose Zapier or Make if…',
        items: [
          'you connect many SaaS apps to each other and want a ready-made connector for each;',
          'you want general-purpose AI agents that work across all those apps;',
          'you need your automation data in an EU region (Make) or identity controls such as SCIM (Zapier Enterprise);',
          'your automations have little to do with customer conversations or calls.',
        ],
      },
      fineguide: {
        label: 'Choose Fineguide if…',
        items: [
          'your automations start from chats, emails, calls or changes in the CRM;',
          'you want AI assistants, the CRM, the team inbox and the workflows on one customer record;',
          'you want to test on real records before anything runs, and keep n8n for the long tail of apps.',
        ],
      },
    },
    switching: {
      heading: 'Moving automations from Zapier or Make',
      intro:
        'You do not have to move every Zap or scenario. Move the ones that act on customers and their records, and leave the rest where they are or rebuild them in n8n.',
      steps: [
        {
          title: 'List what touches customers',
          body: 'Go through your Zaps and scenarios and mark the ones that start from a form, a chat, an email, a call or a CRM change. Those gain most from running next to the customer record.',
        },
        {
          title: 'Start from a template',
          body: {
            text: 'Workflows are on Fineguide’s paid plans. Open Workflows, pick a ready-made template (route a new email, a website form, a quote request from a chat, coaching after a low-scoring call, stale deals on weekday mornings and more), and change what its notes on the canvas point out: an address, an assignee, a board, the wording.',
            refs: ['fg:fg-automations', 'fg:fg-pricing'],
          },
        },
        {
          title: 'Connect what stays outside',
          body: {
            text: 'Save API keys once under Secrets, each tied to the addresses it may be sent to, and call other systems with the HTTP request step. A Zap or scenario you keep can post to a Fineguide workflow’s own webhook address.',
            refs: ['fg:fg-automations'],
          },
        },
        {
          title: 'Keep the long tail in n8n',
          body: {
            text: 'Let Fineguide host n8n for you, or connect your own instance, for the apps the builder does not reach directly.',
            refs: ['fg:fg-automations', 'fg:fg-llms'],
          },
        },
        {
          title: 'Test, then turn it on',
          body: {
            text: 'Run a test on a real chat, call or record, read what it would do, then turn the workflow on. Every step that runs uses credits from your plan, and the run history shows each step with what it cost.',
            refs: ['fg:fg-pricing', 'fg:fg-automations'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Is Fineguide a Zapier alternative with AI agents?',
        a: 'For automations around customers, yes: Fineguide’s AI assistants answer chats and phone calls, and its visual workflow builder acts on what they do, in the same CRM. For connecting thousands of unrelated apps, Zapier and Make cover far more ground; Fineguide reaches those apps through n8n.',
        refs: ['zapier:agents', 'make:home', 'fg:fg-automations'],
      },
      {
        q: 'Can Fineguide replace Make or Zapier?',
        a: 'It can replace the automations that run on your chats, emails, calls and CRM records. Automations between other apps can stay in Zapier or Make and post to a Fineguide workflow’s webhook address, or move to n8n hosted by Fineguide.',
        refs: ['fg:fg-automations'],
      },
      {
        q: 'Do Fineguide workflows use credits?',
        a: 'Yes. Every step that runs uses at least one credit, once per record inside a loop. A test writes nothing, and only its AI steps (Classify, Summarize and Extract) use credits.',
        refs: ['fg:fg-pricing', 'fg:fg-automations'],
      },
      {
        q: 'Where do Zapier and Make keep my data?',
        a: 'Zapier says it hosts data on AWS servers in the United States and does not offer EU-only storage. Make lets each organization choose a US or EU data region, and notes that some AI features process data in the US or the UK even on an EU zone.',
        refs: ['zapier:privacy', 'make:regions', 'make:ai-zones'],
      },
      {
        q: 'Does Fineguide work with n8n?',
        a: 'Yes. Fineguide can host an n8n instance for you or connect your own, and an n8n workflow that starts with a webhook can be imported as an assistant action.',
        refs: ['fg:fg-automations', 'fg:fg-llms'],
      },
      {
        q: 'Can I test a workflow before it runs for real?',
        a: 'Yes. The Tests tab runs a Fineguide workflow on a real chat, call, email thread or record, writes nothing and lists what it would have done. You can change values for another case and save the test to run again after an edit.',
        refs: ['fg:fg-automations'],
      },
    ],
    closing: {
      heading: 'Put your automations next to your customers',
      body: 'Start with an AI assistant on the Free plan, no card needed, then add workflows on a paid plan, or book a 30-minute walkthrough.',
    },
    extraLinks: [
      { href: '/automations/', label: 'Automations: workflows, n8n, assistant actions and webhooks' },
      { href: '/messages/', label: 'Messages & Inbox: chat channels and your own email' },
    ],
  },

  ro: {
    title: 'Fineguide vs Zapier și Make: alternativă la Zapier cu AI',
    description: 'Alternativă la Zapier și Make, comparată pe paginile oficiale: workflow-uri vizuale, agenți AI, declanșatori din chat, apeluri și CRM, n8n și datele.',
    crumb: 'Zapier și Make',
    h1: 'Fineguide vs Zapier și Make:',
    h1Accent: 'workflow-uri lângă asistenții AI și CRM',
    shortAnswer:
      'Zapier și Make sunt platforme generale de automatizare care leagă mii de aplicații: Zapier listează peste 9.000, Make peste 3.000. Fineguide este o platformă de CRM și asistenți AI, cu propriul editor vizual de workflow-uri, pornit de chaturile, emailurile, apelurile și fișele tale din CRM, plus n8n (găzduit de Fineguide sau propriul tău) pentru aplicațiile la care nu ajunge direct. Alege Zapier sau Make ca să legi multe aplicații; alege Fineguide când automatizările țin de conversațiile și fișele clienților.',
    tableHeading: 'Zapier, Make și Fineguide, rând cu rând',
    competitorStronger: {
      heading: 'Unde Zapier și Make sunt mai puternice',
      items: [
        {
          text: 'Acoperirea aplicațiilor. Zapier listează peste 9.000 de aplicații, Make peste 3.000 de aplicații native, iar Make adaugă integrări proprii cu orice serviciu care are un API. Editorul Fineguide lucrează pe propriile fișe și apelează alte sisteme printr-un pas HTTP; pentru conectori gata făcuți se sprijină pe n8n.',
          refs: ['zapier:agents', 'make:home', 'fg:fg-automations'],
        },
        {
          text: 'Agenți AI de uz general. Zapier Agents lucrează în toate aceste aplicații, pe web și în chat. Make AI Agents se construiesc în același canvas ca scenariile, își arată raționamentul pas cu pas și folosesc ca unelte module, scenarii, unelte MCP și alți agenți.',
          refs: ['zapier:agents', 'make:ai-agents', 'make:agent-intro'],
        },
        {
          text: 'Mai multe piese în jurul workflow-urilor: Zapier Tables, Forms, Canvas și Zapier MCP; Make Grid și serverul MCP al Make, care construiește și rulează automatizări din Claude, ChatGPT sau Gemini.',
          refs: ['zapier:plans', 'make:home'],
        },
        {
          text: 'Controale pentru echipe și companii mari. Planurile Team și Enterprise ale Zapier includ SAML SSO, provizionare de utilizatori prin SCIM, retenție personalizată a datelor și un Observability API. Make listează audituri SOC 2 Type II și SOC 3 și un program de securitate certificat ISO 27001.',
          refs: ['zapier:plans', 'make:security'],
        },
        {
          text: 'Regiunea datelor la alegere în Make: fiecare organizație alege Statele Unite sau Uniunea Europeană.',
          refs: ['make:regions'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'Unde Fineguide este mai puternic',
      items: [
        {
          text: 'Declanșatori care vin de la client. Un workflow Fineguide pornește când se deschide sau se rezolvă un chat cu unul dintre asistenți, când asistentul colectează datele clientului ori primește o cerere de suport; când un email deschide un fir; când un apel este primit, transcris sau evaluat în Voice QA; când se schimbă un contact, o tranzacție, o companie sau o sarcină; după un program; sau când alt sistem îi trimite date. Evenimentele au loc chiar în Fineguide, deci între ele și workflow nu stă niciun conector.',
          refs: ['fg:fg-automations', 'fg:fg-voice-qa'],
        },
        {
          text: 'Pași AI care citesc textul rulării. Classify, Summarize și Extract citesc implicit transcrierea apelului, ultimul mesaj din email sau conversația din chat. Extract întoarce fiecare valoare în tipul ales de tine (text, număr, da sau nu, dată ori o opțiune dintr-o listă fixă), așa că o regulă de mai târziu sau termenul unei sarcini o pot folosi.',
          refs: ['fg:fg-automations'],
        },
        {
          text: 'CRM-ul este același produs. Pașii creează, actualizează și șterg contacte, tranzacții și companii, caută înregistrări după filtre, adaugă etichete și comentarii, mută o tranzacție în altă etapă, creează sarcini, distribuie un fir de email, trimit emailuri și anunță un coleg, toate pe fișa pe care asistenții și echipa o folosesc deja.',
          refs: ['fg:fg-crm', 'fg:fg-automations'],
        },
        {
          text: 'Teste care nu scriu nimic. Un test rulează workflow-ul pe un chat, apel, fir de email sau înregistrare reală și arată ce ar fi făcut, fără să trimită sau să salveze ceva. Modificările unui workflow pornit rămân nepublicate până le publici.',
          refs: ['fg:fg-automations'],
        },
        {
          text: 'n8n inclus, găzduit sau propriu. Fineguide îți poate găzdui o instanță n8n sau o conectează pe cea pe care o ai, iar un workflow n8n care pornește de la un webhook devine o acțiune pe care asistentul o apelează în timpul conversației.',
          refs: ['fg:fg-automations', 'fg:fg-llms'],
        },
      ],
    },
    choose: {
      heading: 'Pe cine alegi',
      competitor: {
        label: 'Alege Zapier sau Make dacă…',
        items: [
          'legi între ele multe aplicații SaaS și vrei un conector gata făcut pentru fiecare;',
          'vrei agenți AI de uz general care lucrează în toate acele aplicații;',
          'ai nevoie ca datele automatizărilor să stea într-o regiune UE (Make) sau de controale de identitate precum SCIM (Zapier Enterprise);',
          'automatizările tale au puțin de-a face cu conversațiile sau apelurile clienților.',
        ],
      },
      fineguide: {
        label: 'Alege Fineguide dacă…',
        items: [
          'automatizările pornesc de la chaturi, emailuri, apeluri sau schimbări în CRM;',
          'vrei asistenții AI, CRM-ul, inboxul echipei și workflow-urile pe aceeași fișă de client;',
          'vrei să testezi pe înregistrări reale înainte să ruleze ceva și să păstrezi n8n pentru restul aplicațiilor.',
        ],
      },
    },
    switching: {
      heading: 'Cum muți automatizările din Zapier sau Make',
      intro:
        'Nu trebuie să muți fiecare Zap sau scenariu. Mută-le pe cele care lucrează cu clienții și fișele lor, iar restul lasă-le unde sunt sau refă-le în n8n.',
      steps: [
        {
          title: 'Notează ce atinge clienții',
          body: 'Treci prin Zap-uri și scenarii și marchează-le pe cele care pornesc de la un formular, un chat, un email, un apel sau o schimbare în CRM. Acestea câștigă cel mai mult dacă rulează lângă fișa clientului.',
        },
        {
          title: 'Pornește de la un șablon',
          body: {
            text: 'Workflow-urile sunt pe planurile plătite Fineguide. Deschide Workflows, alege un șablon gata făcut (distribuirea unui email nou, un formular de pe site, o cerere de ofertă din chat, coaching după un apel cu scor mic, tranzacții stagnante în dimineți lucrătoare și altele) și schimbă ce îți arată notele de pe canvas: o adresă, un responsabil, un panou, formularea.',
            refs: ['fg:fg-automations', 'fg:fg-pricing'],
          },
        },
        {
          title: 'Conectează ce rămâne în afară',
          body: {
            text: 'Salvează cheile API o singură dată în Secrets, fiecare legată de adresele către care poate fi trimisă, și apelează alte sisteme cu pasul HTTP request. Un Zap sau un scenariu pe care îl păstrezi poate trimite date la adresa webhook a unui workflow Fineguide.',
            refs: ['fg:fg-automations'],
          },
        },
        {
          title: 'Păstrează restul în n8n',
          body: {
            text: 'Lasă Fineguide să-ți găzduiască n8n sau conectează propria instanță, pentru aplicațiile la care editorul nu ajunge direct.',
            refs: ['fg:fg-automations', 'fg:fg-llms'],
          },
        },
        {
          title: 'Testează, apoi pornește',
          body: {
            text: 'Rulează un test pe un chat, apel sau înregistrare reală, citește ce ar face, apoi pornește workflow-ul. Fiecare pas care rulează folosește credite din planul tău, iar istoricul rulărilor arată fiecare pas și cât a costat.',
            refs: ['fg:fg-pricing', 'fg:fg-automations'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Există o alternativă la Zapier cu agenți AI?',
        a: 'Pentru automatizările din jurul clienților, Fineguide este una: asistenții AI răspund în chat și la telefon, iar editorul vizual de workflow-uri lucrează cu ce fac ei, în același CRM. Pentru a lega mii de aplicații fără legătură între ele, Zapier și Make acoperă mult mai mult; Fineguide ajunge la acele aplicații prin n8n.',
        refs: ['zapier:agents', 'make:home', 'fg:fg-automations'],
      },
      {
        q: 'Poate Fineguide să înlocuiască Make sau Zapier?',
        a: 'Poate înlocui automatizările care rulează pe chaturile, emailurile, apelurile și fișele tale din CRM. Automatizările dintre alte aplicații pot rămâne în Zapier sau Make și pot trimite date la adresa webhook a unui workflow Fineguide, sau se pot muta în n8n găzduit de Fineguide.',
        refs: ['fg:fg-automations'],
      },
      {
        q: 'Workflow-urile Fineguide consumă credite?',
        a: 'Da. Fiecare pas care rulează folosește cel puțin un credit, o dată pentru fiecare înregistrare dintr-o buclă. Un test nu scrie nimic și doar pașii lui AI (Classify, Summarize și Extract) folosesc credite.',
        refs: ['fg:fg-pricing', 'fg:fg-automations'],
      },
      {
        q: 'Unde își țin Zapier și Make datele?',
        a: 'Zapier spune că găzduiește datele pe servere AWS din Statele Unite și nu oferă stocare doar în UE. Make lasă fiecare organizație să aleagă regiunea de date, SUA sau UE, și precizează că unele funcții AI prelucrează datele în SUA sau în Regatul Unit chiar și pe o zonă UE.',
        refs: ['zapier:privacy', 'make:regions', 'make:ai-zones'],
      },
      {
        q: 'Fineguide funcționează cu n8n?',
        a: 'Da. Fineguide îți poate găzdui o instanță n8n sau o conectează pe a ta, iar un workflow n8n care pornește de la un webhook poate fi importat ca acțiune a asistentului.',
        refs: ['fg:fg-automations', 'fg:fg-llms'],
      },
      {
        q: 'Pot testa un workflow înainte să ruleze pe bune?',
        a: 'Da. Fila Tests rulează workflow-ul Fineguide pe un chat, apel, fir de email sau înregistrare reală, nu scrie nimic și arată ce ar fi făcut. Poți schimba valorile pentru alt caz și poți salva testul ca să-l rulezi din nou după o modificare.',
        refs: ['fg:fg-automations'],
      },
    ],
    closing: {
      heading: 'Mută automatizările lângă clienți',
      body: 'Începe cu un asistent AI pe planul Free, fără card, apoi adaugă workflow-uri pe un plan plătit, sau programează o prezentare de 30 de minute.',
    },
    extraLinks: [
      { href: '/ro/automations/', label: 'Automatizări: workflow-uri, n8n, acțiuni și webhook-uri' },
      { href: '/ro/messages/', label: 'Mesaje și Inbox: canale de chat și emailul tău' },
    ],
  },

  ru: {
    title: 'Fineguide vs Zapier и Make: альтернатива Zapier с ИИ',
    description: 'Альтернатива Zapier и аналог Make: сравниваем визуальные сценарии, ИИ-агентов, триггеры из чатов, звонков и CRM, n8n и хранение данных по сайтам вендоров.',
    crumb: 'Zapier и Make',
    h1: 'Fineguide vs Zapier и Make:',
    h1Accent: 'автоматизации рядом с ИИ-ассистентами и CRM',
    shortAnswer:
      'Zapier и Make — универсальные платформы автоматизации, которые связывают тысячи приложений: у Zapier их больше 9 000, у Make больше 3 000. Fineguide — платформа CRM и ИИ-ассистентов со своим визуальным конструктором сценариев, который запускается вашими чатами, письмами, звонками и записями CRM, плюс n8n (на стороне Fineguide или ваш собственный) для приложений, до которых конструктор не дотягивается напрямую. Выбирайте Zapier или Make, чтобы связать много приложений; выбирайте Fineguide, когда автоматизации касаются диалогов и карточек клиентов.',
    tableHeading: 'Zapier, Make и Fineguide: сравнение по пунктам',
    competitorStronger: {
      heading: 'В чём сильнее Zapier и Make',
      items: [
        {
          text: 'Охват приложений. Zapier указывает больше 9 000 приложений, Make — больше 3 000 нативных, а ещё в Make можно сделать собственную интеграцию с любым сервисом, у которого есть API. Конструктор Fineguide работает со своими записями и вызывает другие системы шагом HTTP-запроса; готовые коннекторы к приложениям он берёт из n8n.',
          refs: ['zapier:agents', 'make:home', 'fg:fg-automations'],
        },
        {
          text: 'Универсальные ИИ-агенты. Zapier Agents работают во всех этих приложениях, в вебе и в чате. Make AI Agents создаются в том же холсте, что и сценарии, показывают рассуждения шаг за шагом и используют как инструменты модули, сценарии, MCP-инструменты и других агентов.',
          refs: ['zapier:agents', 'make:ai-agents', 'make:agent-intro'],
        },
        {
          text: 'Больше инструментов вокруг сценариев: Zapier Tables, Forms, Canvas и Zapier MCP; Make Grid и MCP-сервер Make, который создаёт и запускает автоматизации из Claude, ChatGPT или Gemini.',
          refs: ['zapier:plans', 'make:home'],
        },
        {
          text: 'Инструменты для команд и крупных компаний. В тарифах Team и Enterprise у Zapier есть SAML SSO, провижининг пользователей через SCIM, настраиваемый срок хранения данных и Observability API. Make указывает аудиты SOC 2 Type II и SOC 3 и программу безопасности с сертификатом ISO 27001.',
          refs: ['zapier:plans', 'make:security'],
        },
        {
          text: 'Выбор региона данных в Make: каждая организация выбирает США или Европейский союз.',
          refs: ['make:regions'],
        },
      ],
    },
    fineguideStronger: {
      heading: 'В чём сильнее Fineguide',
      items: [
        {
          text: 'Триггеры от клиента. Сценарий Fineguide запускается, когда открывается или решается чат с одним из ваших ассистентов, когда ассистент собирает данные клиента или получает обращение в поддержку; когда письмо открывает переписку; когда звонок поступает, расшифровывается или получает оценку в Voice QA; когда меняется контакт, сделка, компания или задача; по расписанию; или когда другая система присылает ему данные. Всё это происходит внутри Fineguide, поэтому между событием и сценарием нет коннектора.',
          refs: ['fg:fg-automations', 'fg:fg-voice-qa'],
        },
        {
          text: 'ИИ-шаги, которые читают текст самого запуска. Classify, Summarize и Extract по умолчанию читают расшифровку звонка, последнее письмо в переписке или диалог в чате. Extract возвращает каждое значение в заданном вами типе (текст, число, да или нет, дата или вариант из списка), так что следующее правило или срок задачи могут его использовать.',
          refs: ['fg:fg-automations'],
        },
        {
          text: 'CRM — это тот же продукт. Шаги создают, меняют и удаляют контакты, сделки и компании, ищут записи по фильтрам, добавляют теги и комментарии, переводят сделку на другой этап, ставят задачи, распределяют переписку, отправляют письма и уведомляют коллегу — всё в той карточке, с которой уже работают ассистенты и команда.',
          refs: ['fg:fg-crm', 'fg:fg-automations'],
        },
        {
          text: 'Тесты, которые ничего не записывают. Тест запускает сценарий на реальном чате, звонке, переписке или записи и показывает, что он сделал бы, ничего не отправляя и не сохраняя. Правки включённого сценария остаются неопубликованными, пока вы их не опубликуете.',
          refs: ['fg:fg-automations'],
        },
        {
          text: 'n8n в комплекте: на стороне Fineguide или ваш. Fineguide может развернуть для вас экземпляр n8n или подключить ваш, а сценарий n8n, который запускается вебхуком, становится действием, которое ассистент вызывает прямо в разговоре.',
          refs: ['fg:fg-automations', 'fg:fg-llms'],
        },
      ],
    },
    choose: {
      heading: 'Кому что выбрать',
      competitor: {
        label: 'Выбирайте Zapier или Make, если…',
        items: [
          'вы связываете между собой много SaaS-приложений и хотите готовый коннектор для каждого;',
          'вам нужны универсальные ИИ-агенты, которые работают во всех этих приложениях;',
          'данные автоматизаций должны храниться в регионе ЕС (Make) или нужны средства управления доступом вроде SCIM (Zapier Enterprise);',
          'ваши автоматизации почти не связаны с диалогами и звонками клиентов.',
        ],
      },
      fineguide: {
        label: 'Выбирайте Fineguide, если…',
        items: [
          'автоматизации запускаются чатами, письмами, звонками или изменениями в CRM;',
          'вы хотите, чтобы ИИ-ассистенты, CRM, общий inbox и сценарии работали с одной карточкой клиента;',
          'вы хотите проверять сценарий на реальных записях до запуска, а для остальных приложений оставить n8n.',
        ],
      },
    },
    switching: {
      heading: 'Как перенести автоматизации из Zapier или Make',
      intro:
        'Переносить каждый Zap или сценарий не нужно. Перенесите те, что работают с клиентами и их карточками, а остальные оставьте на месте или пересоберите в n8n.',
      steps: [
        {
          title: 'Отметьте, что касается клиентов',
          body: 'Пройдитесь по своим Zap и сценариям и отметьте те, что запускаются формой, чатом, письмом, звонком или изменением в CRM. Им больше всего выгодно работать рядом с карточкой клиента.',
        },
        {
          title: 'Начните с шаблона',
          body: {
            text: 'Сценарии доступны на платных тарифах Fineguide. Откройте Workflows, выберите готовый шаблон (распределение нового письма, форма с сайта, запрос цены из чата, коучинг после звонка с низкой оценкой, зависшие сделки по утрам в будни и другие) и поменяйте то, на что указывают заметки на холсте: адрес, ответственного, доску, текст.',
            refs: ['fg:fg-automations', 'fg:fg-pricing'],
          },
        },
        {
          title: 'Подключите то, что остаётся снаружи',
          body: {
            text: 'Сохраните API-ключи один раз в Secrets, каждый с адресами, на которые его можно отправлять, и вызывайте другие системы шагом HTTP request. Zap или сценарий Make, который вы оставляете, может отправлять данные на вебхук-адрес сценария Fineguide.',
            refs: ['fg:fg-automations'],
          },
        },
        {
          title: 'Остальное — в n8n',
          body: {
            text: 'Пусть Fineguide развернёт для вас n8n, или подключите свой экземпляр, для приложений, до которых конструктор не дотягивается напрямую.',
            refs: ['fg:fg-automations', 'fg:fg-llms'],
          },
        },
        {
          title: 'Проверьте и включите',
          body: {
            text: 'Запустите тест на реальном чате, звонке или записи, посмотрите, что сценарий сделал бы, и включите его. Каждый выполненный шаг расходует кредиты вашего тарифа, а история запусков показывает каждый шаг и его стоимость.',
            refs: ['fg:fg-pricing', 'fg:fg-automations'],
          },
        },
      ],
    },
    faq: [
      {
        q: 'Есть ли аналог Zapier с ИИ-агентами?',
        a: 'Для автоматизаций вокруг клиентов — да, Fineguide: его ИИ-ассистенты отвечают в чатах и на звонки, а визуальный конструктор сценариев работает с тем, что они делают, в той же CRM. Чтобы связать тысячи не связанных между собой приложений, у Zapier и Make охват гораздо шире; Fineguide подключает такие приложения через n8n.',
        refs: ['zapier:agents', 'make:home', 'fg:fg-automations'],
      },
      {
        q: 'Может ли Fineguide заменить Make или Zapier?',
        a: 'Он может заменить автоматизации, которые работают с вашими чатами, письмами, звонками и записями CRM. Автоматизации между другими приложениями могут остаться в Zapier или Make и отправлять данные на вебхук-адрес сценария Fineguide либо переехать в n8n на стороне Fineguide.',
        refs: ['fg:fg-automations'],
      },
      {
        q: 'Сценарии Fineguide расходуют кредиты?',
        a: 'Да. Каждый выполненный шаг расходует как минимум один кредит, в цикле — по разу на каждую запись. Тест ничего не записывает, и кредиты в нём тратят только ИИ-шаги (Classify, Summarize и Extract).',
        refs: ['fg:fg-pricing', 'fg:fg-automations'],
      },
      {
        q: 'Где Zapier и Make хранят данные?',
        a: 'Zapier сообщает, что хранит данные на серверах AWS в США и не предлагает хранение только в ЕС. В Make каждая организация выбирает регион данных, США или ЕС, при этом часть ИИ-функций обрабатывает данные в США или Великобритании даже в зоне ЕС.',
        refs: ['zapier:privacy', 'make:regions', 'make:ai-zones'],
      },
      {
        q: 'Fineguide работает с n8n?',
        a: 'Да. Fineguide может развернуть для вас экземпляр n8n или подключить ваш собственный, а сценарий n8n, который запускается вебхуком, можно импортировать как действие ассистента.',
        refs: ['fg:fg-automations', 'fg:fg-llms'],
      },
      {
        q: 'Можно ли проверить сценарий до настоящего запуска?',
        a: 'Да. Вкладка Tests запускает сценарий Fineguide на реальном чате, звонке, переписке или записи, ничего не записывает и показывает, что он сделал бы. Можно поменять значения для другого случая и сохранить тест, чтобы повторить его после правки.',
        refs: ['fg:fg-automations'],
      },
    ],
    closing: {
      heading: 'Автоматизации — рядом с клиентами',
      body: 'Начните с ИИ-ассистента на тарифе Free, без карты, затем добавьте сценарии на платном тарифе или запишитесь на 30-минутную демонстрацию.',
    },
    extraLinks: [
      { href: '/ru/automations/', label: 'Автоматизации: сценарии, n8n, действия и вебхуки' },
      { href: '/ru/messages/', label: 'Сообщения и Inbox: чаты и ваша почта' },
    ],
  },
};
