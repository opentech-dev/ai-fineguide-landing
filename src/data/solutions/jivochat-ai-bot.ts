import type { Solution } from './types';

const solution: Solution = {
  slug: 'jivochat-ai-bot',
  image: 'partner-consultant.jpg',
  imageAlt: {
    en: 'A consultant sketching a simple flow on paper for a colleague at a table with a laptop, shelves of folders and plants behind them',
    ro: 'Un consultant schițează pe hârtie un flux simplu pentru o colegă, la o masă cu laptop, cu rafturi de dosare și plante în spate',
    ru: 'Консультант рисует на бумаге простую схему для коллеги за столом с ноутбуком, за ними полки с папками и растения',
  },
  appName: 'Fineguide for JivoChat',
  checked: '2026-11-25',
  reading: [
    '/blog/jivochat-ai-assistant/',
    '/blog/ai-alternative-to-intercom-crisp-jivochat/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/session-variables-chat-to-crm-data/',
    '/blog/chatbot-analytics-metrics/',
  ],
  sources: [
    'ai-backoffice-api apps/chat-api/src/controllers/omni.jivochat.ts (origin/main): Jivo webhook, handles CLIENT_MESSAGE events per bot (router `/jivo/message/:botId`)',
    'ai-backoffice-api apps/chat-api/src/integrations/jivo/jivo.ts: each Jivo chat_id mapped to a Fineguide session (JIVO_CHAT_ID); reply sent as BOT_MESSAGE to bot.jivosite.com/webhooks/{providerId}/{botId} with MARKDOWN content and a plain-text version (links kept as "text: url"); on the first human escalation sends INVITE_AGENT',
    'ai-backoffice-api apps/chat-api/src/@hub/messenger-hub.ts ("Stop bot from answering when Human Escalated")',
    'Not in ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/types.ts / ConnectAppsPage.tsx (no JIVO app): the connection (integration config providerId) is created by the Fineguide team, so the copy says "set up with the Fineguide team" (as BRIEF2.md and llms.txt)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/messages/conversations/components/ChannelBadge.tsx (JIVO: "Jivo" channel label on conversations)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx (hand over when the visitor asks for a person and/or own-words situations)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx Lead collection (fields, when to ask; plan-gated crm.lead-collection) + "Only what it has learned" answer scope + ai-gptcrawler api/gptchat.py allowLeadCollection (channel-independent)',
    'ai-fineguide-landing src/i18n/en.ts aiAssistants.configuration Actions (HTTP action from a pasted cURL command, n8n workflow imported as an action)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/analytics/AnalyticsPage.tsx (satisfaction, sentiment, resolution, intents per conversation)',
    'ai-backoffice-api apps/backoffice-api/src/modules/workflow/workflow-trigger.router.ts (ASSISTANT_INFO_COLLECTED from bot-session-variables.service.ts) — workflows on paid plans per BRIEF.md',
    'fineguide.ai/blog/jivochat-ai-assistant/ (live; setup: Fineguide team links the assistant to the Jivo Bot API and gives the key, the customer adds the bot in Jivo and chooses its channels, per Jivo Bot API docs) + seo/drafts/compare-jivochat.ts header notes',
    'ai-fineguide-landing public/llms.txt ("JivoChat (the assistant answers Jivo chats and hands over to Jivo operators)") + src/i18n/en.ts pricing (1 credit per AI reply; free plan 200 credits)',
  ],
  copy: {
    en: {
      meta: {
        title: 'JivoChat AI Bot: an AI Assistant inside Jivo | Fineguide',
        description:
          'JivoChat AI bot: a Fineguide assistant answers your Jivo chats from your knowledge, saves leads to the CRM and invites a Jivo operator when a person is needed.',
      },
      hero: {
        eyebrow: 'AI chatbot for JivoChat',
        title: 'Keep JivoChat.',
        titleAccent: ' Add an AI assistant.',
        subtitle:
          'A Fineguide assistant answers your JivoChat conversations first, from your own knowledge, and invites one of your Jivo operators into the same chat when a person is needed. Your operators keep the Jivo app they know.',
      },
      definition: {
        heading: 'What is a JivoChat AI bot?',
        body:
          "Fineguide is an AI bot for JivoChat: an AI assistant connected to JivoChat as a bot, so it answers the chats Jivo sends it before an operator does. It connects through Jivo's Bot API: the assistant replies in the same Jivo chat from your website pages, documents and FAQ, collects the customer's details into the Fineguide CRM, and invites a Jivo operator into the chat when the customer asks for a person or one of your handoff rules matches.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'A Jivo AI assistant in front of your operators.',
        body:
          'Customers keep writing where they always did, operators keep their app, and the routine questions are answered before a chat reaches the queue.',
        items: [
          {
            term: 'Answers inside Jivo',
            desc: 'Jivo passes each new customer message to the assistant, and the answer appears in the same Jivo chat a few seconds later, with its links kept.',
          },
          {
            term: 'From your knowledge',
            desc: 'The assistant answers from the pages, documents and FAQ you give it, and can be limited to only what it has learned. Actions let it check your own systems during the chat, such as an order status.',
          },
          {
            term: 'Handover to Jivo operators',
            desc: 'When the customer asks for a person, or the chat matches situations you describe in your own words, such as a complaint or a large order, Fineguide invites a Jivo operator into the chat.',
          },
          {
            term: 'One voice at a time',
            desc: 'Once an operator is invited, the assistant stops answering in that chat, so a customer never gets an AI reply on top of a human one.',
          },
          {
            term: 'Leads in the Fineguide CRM',
            desc: 'With lead collection on, the assistant asks for the details your sales team needs, such as name, phone, product or budget, and saves a lead in the CRM, linked to the conversation it came from.',
          },
          {
            term: 'Every chat saved and measured',
            desc: "Each Jivo chat is kept as a conversation in Fineguide, under the assistant that answered it, and counts in that assistant's analytics: satisfaction, sentiment, resolution and intent.",
          },
          {
            term: 'Workflows after the chat',
            desc: "When the assistant has collected a customer's details, a workflow can create a deal, assign an owner or add a task in the Fineguide CRM.",
          },
        ],
      },
      steps: {
        eyebrow: 'How to connect',
        heading: 'Set up together with the Fineguide team.',
        body: 'A JivoChat bot connection has two sides, Fineguide and your Jivo account. Our team connects it with you.',
        items: [
          'Create the assistant in Fineguide and give it your website pages, documents and FAQ.',
          'Turn on lead collection and choose when chats go to a person.',
          "The Fineguide team links the assistant to Jivo's Bot API and gives you the key for your Jivo account.",
          'In Jivo, add the bot, paste the key and choose the channels it works on.',
          'Send a test question, then ask for a person, and see the operator invitation arrive in Jivo.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Connection',
            desc: "Jivo's Bot API, set up with the Fineguide team. Your Jivo widget, channels and operator app stay as they are.",
          },
          {
            term: 'Handover',
            desc: 'A Jivo operator is invited into the same chat when the customer asks for a person or a handoff rule matches; the assistant then stays quiet in that chat.',
          },
          {
            term: 'Where the data goes',
            desc: 'Conversations under the assistant in Fineguide; leads, contacts, deals and tasks in the Fineguide CRM.',
          },
          {
            term: 'Same assistant elsewhere',
            desc: 'The assistant that answers in Jivo can also answer in the Fineguide website chat widget, on WhatsApp, Telegram, Instagram, Messenger, Slack and Discord, from the same knowledge.',
          },
          {
            term: 'Plans and credits',
            desc: 'Each AI reply in a Jivo chat is 1 credit; the free plan starts with 200. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'More on JivoChat and your assistant',
        links: [
          {
            path: '/compare/jivochat/',
            label: 'Fineguide vs JivoChat',
            desc: 'AI, channels, phone and data side by side, and how Fineguide also works inside Jivo.',
          },
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Persona, knowledge, session variables, actions and handover for every channel.',
          },
          {
            path: '/help-desk',
            label: 'Help desk',
            desc: 'Handover rules, queues and tickets for the requests the assistant cannot close.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Where the leads from your Jivo chats land, with deals and tasks.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The pages, documents and FAQ your assistant answers from.',
          },
        ],
      },
      faq: {
        heading: 'JivoChat AI bot: common questions',
        items: [
          {
            q: 'Can I add an AI chatbot to JivoChat?',
            a: "Yes. Fineguide connects to JivoChat as a bot through Jivo's Bot API, so an AI assistant answers your Jivo chats first and invites an operator when a person is needed.",
          },
          {
            q: 'How does the Jivo AI assistant hand a chat to an operator?',
            a: 'When the customer asks for a person or one of your handoff rules matches, Fineguide sends Jivo an invitation for an operator to join the same chat, and the assistant stops answering there.',
          },
          {
            q: 'Do my operators need to learn a new tool?',
            a: 'No. They keep working in the Jivo app. The assistant answers first and invites them into the chat when a person is needed.',
          },
          {
            q: 'Where do the leads from Jivo chats go?',
            a: 'Into the Fineguide CRM, linked to the conversation that produced them, with the details the assistant collected. Lead collection comes with paid plans.',
          },
          {
            q: 'Does the assistant answer on WhatsApp and other channels connected to Jivo?',
            a: 'When you add the bot in Jivo, you choose the channels it works on; according to Jivo, a connected bot can work on the website chat and on the messengers connected to Jivo.',
          },
          {
            q: 'How do I connect Fineguide to JivoChat?',
            a: 'Prepare the assistant in Fineguide, then ask our team to connect it: we link it to the Jivo Bot API and give you a key, which you paste into the bot settings in Jivo.',
          },
          {
            q: 'How much does a JivoChat AI bot cost?',
            a: 'Each AI reply is 1 credit, and you can start on the free plan with 200 credits. Lead collection and workflows come with paid plans; the pricing page lists them.',
          },
        ],
      },
      closing: {
        heading: 'Put an AI assistant in front of your Jivo queue.',
        body: 'Prepare an assistant on your own knowledge and test it in the preview. Then book a 30-minute call, and our team connects it to your JivoChat account with you.',
      },
    },

    ro: {
      meta: {
        title: 'Chatbot AI pentru JivoChat, în interiorul Jivo | Fineguide',
        description:
          'Chatbot AI pentru JivoChat: asistentul Fineguide răspunde în chaturile Jivo din cunoștințele tale, salvează lead-uri în CRM și invită un operator când e nevoie.',
      },
      hero: {
        eyebrow: 'Chatbot AI pentru JivoChat',
        title: 'Păstrezi JivoChat.',
        titleAccent: ' Adaugi un asistent AI.',
        subtitle:
          'Un asistent Fineguide răspunde primul în conversațiile din JivoChat, din cunoștințele tale, și invită în același chat unul dintre operatorii Jivo când e nevoie de un om. Operatorii lucrează în continuare în aplicația Jivo pe care o cunosc.',
      },
      definition: {
        heading: 'Ce este un chatbot AI pentru JivoChat?',
        body:
          'Fineguide este un chatbot AI pentru JivoChat: un asistent AI conectat la JivoChat ca bot, care răspunde la conversațiile primite de la Jivo înaintea unui operator. Se conectează prin Bot API-ul Jivo: asistentul răspunde în același chat Jivo din paginile site-ului, documentele și întrebările frecvente pe care i le dai, strânge datele clientului în CRM-ul Fineguide și invită un operator Jivo în chat când clientul cere un om sau se potrivește una dintre regulile tale de predare.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Un asistent AI în Jivo, înaintea operatorilor.',
        body:
          'Clienții scriu în continuare acolo unde scriau, operatorii își păstrează aplicația, iar întrebările de rutină primesc răspuns înainte ca chatul să ajungă în coadă.',
        items: [
          {
            term: 'Răspunde în interiorul Jivo',
            desc: 'Jivo îi trimite asistentului fiecare mesaj nou al clientului, iar răspunsul apare în același chat Jivo după câteva secunde, cu linkurile păstrate.',
          },
          {
            term: 'Din cunoștințele tale',
            desc: 'Asistentul răspunde din paginile, documentele și întrebările frecvente pe care i le dai și îl poți limita doar la ce a învățat. Prin acțiuni poate verifica în timpul conversației datele din sistemele tale, de exemplu starea unei comenzi.',
          },
          {
            term: 'Predare către operatorii Jivo',
            desc: 'Când clientul cere un om sau conversația se potrivește cu situațiile descrise de tine, de exemplu o reclamație sau o comandă mare, Fineguide invită un operator Jivo în chat.',
          },
          {
            term: 'O singură voce în chat',
            desc: 'După ce operatorul e invitat, asistentul nu mai răspunde în acel chat, așa că clientul nu primește niciodată un răspuns AI peste unul de la un om.',
          },
          {
            term: 'Lead-uri în CRM-ul Fineguide',
            desc: 'Cu colectarea lead-urilor pornită, asistentul cere datele de care are nevoie echipa de vânzări, de exemplu numele, telefonul, produsul sau bugetul, și salvează un lead în CRM, legat de conversația din care a venit.',
          },
          {
            term: 'Fiecare chat salvat și măsurat',
            desc: 'Fiecare chat Jivo rămâne ca o conversație în Fineguide, la asistentul care a răspuns, și intră în analiza acestuia: satisfacție, sentiment, rezolvare și intenție.',
          },
          {
            term: 'Workflow-uri după chat',
            desc: 'După ce asistentul a strâns datele clientului, un workflow poate crea o oportunitate, poate desemna un responsabil sau poate adăuga o sarcină în CRM-ul Fineguide.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum conectezi',
        heading: 'Configurare împreună cu echipa Fineguide.',
        body: 'O conexiune de bot în JivoChat are două părți, Fineguide și contul tău Jivo. Echipa noastră o face împreună cu tine.',
        items: [
          'Creezi asistentul în Fineguide și îi dai paginile site-ului, documentele și întrebările frecvente.',
          'Pornești colectarea lead-urilor și alegi când ajung conversațiile la un om.',
          'Echipa Fineguide leagă asistentul de Bot API-ul Jivo și îți dă cheia pentru contul tău Jivo.',
          'În Jivo adaugi botul, lipești cheia și alegi canalele în care lucrează.',
          'Trimiți o întrebare de test, apoi ceri un om și vezi cum ajunge invitația pentru operator în Jivo.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Conexiune',
            desc: 'Bot API-ul Jivo, configurat împreună cu echipa Fineguide. Widgetul Jivo, canalele și aplicația operatorilor rămân cum sunt.',
          },
          {
            term: 'Predare',
            desc: 'Un operator Jivo este invitat în același chat când clientul cere un om sau se potrivește o regulă de predare; apoi asistentul nu mai scrie în acel chat.',
          },
          {
            term: 'Unde ajung datele',
            desc: 'Conversațiile, la asistent în Fineguide; lead-urile, contactele, oportunitățile și sarcinile, în CRM-ul Fineguide.',
          },
          {
            term: 'Același asistent și în alte canale',
            desc: 'Asistentul din Jivo poate răspunde și în widgetul de chat Fineguide de pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack și Discord, din aceleași cunoștințe.',
          },
          {
            term: 'Planuri și credite',
            desc: 'Fiecare răspuns AI într-un chat Jivo costă 1 credit; planul gratuit pornește cu 200. Colectarea lead-urilor și workflow-urile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Mai multe despre JivoChat și asistentul tău',
        links: [
          {
            path: '/compare/jivochat/',
            label: 'Fineguide vs JivoChat',
            desc: 'AI, canale, telefonie și date, comparate, și cum lucrează Fineguide și în interiorul Jivo.',
          },
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Personalitate, cunoștințe, variabile de sesiune, acțiuni și predare către un om, pentru fiecare canal.',
          },
          {
            path: '/help-desk',
            label: 'Helpdesk',
            desc: 'Reguli de predare, cozi și tichete pentru cererile pe care asistentul nu le poate închide.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Unde ajung lead-urile din chaturile Jivo, cu oportunități și sarcini.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile, documentele și întrebările frecvente din care răspunde asistentul.',
          },
        ],
      },
      faq: {
        heading: 'Chatbot AI pentru JivoChat: întrebări frecvente',
        items: [
          {
            q: 'Pot adăuga un chatbot AI în JivoChat?',
            a: 'Da. Fineguide se conectează la JivoChat ca bot, prin Bot API-ul Jivo, așa că un asistent AI răspunde primul în chaturile Jivo și invită un operator când e nevoie de un om.',
          },
          {
            q: 'Cum predă asistentul AI conversația unui operator Jivo?',
            a: 'Când clientul cere un om sau se potrivește una dintre regulile tale de predare, Fineguide trimite către Jivo o invitație ca un operator să intre în același chat, iar asistentul nu mai răspunde acolo.',
          },
          {
            q: 'Operatorii trebuie să învețe o aplicație nouă?',
            a: 'Nu. Lucrează în continuare în aplicația Jivo. Asistentul răspunde primul și îi invită în chat când e nevoie de un om.',
          },
          {
            q: 'Unde ajung lead-urile din chaturile Jivo?',
            a: 'În CRM-ul Fineguide, legate de conversația din care au venit, cu datele strânse de asistent. Colectarea lead-urilor vine cu planurile plătite.',
          },
          {
            q: 'Asistentul răspunde și pe WhatsApp sau în alte canale conectate la Jivo?',
            a: 'Când adaugi botul în Jivo, alegi canalele în care lucrează; potrivit Jivo, un bot conectat poate lucra în chatul de pe site și în messengerele conectate la Jivo.',
          },
          {
            q: 'Cum conectez Fineguide la JivoChat?',
            a: 'Pregătești asistentul în Fineguide, apoi ceri echipei noastre să îl conecteze: îl legăm de Bot API-ul Jivo și îți dăm o cheie, pe care o lipești în setările botului din Jivo.',
          },
          {
            q: 'Cât costă un chatbot AI pentru JivoChat?',
            a: 'Fiecare răspuns AI costă 1 credit, iar planul gratuit pornește cu 200 de credite. Colectarea lead-urilor și workflow-urile vin cu planurile plătite, prezentate pe pagina de prețuri.',
          },
        ],
      },
      closing: {
        heading: 'Pune un asistent AI înaintea cozii din Jivo.',
        body: 'Pregătește un asistent pe cunoștințele tale și testează-l în previzualizare. Apoi programează o discuție de 30 de minute, iar echipa noastră îl conectează împreună cu tine la contul tău JivoChat.',
      },
    },

    ru: {
      meta: {
        title: 'ИИ-бот для Jivo: ИИ-ассистент в JivoChat | Fineguide',
        description:
          'ИИ-бот для Jivo: ассистент Fineguide отвечает в чатах Jivo по вашей базе знаний, сохраняет лиды в CRM и приглашает оператора Jivo, когда нужен человек.',
      },
      hero: {
        eyebrow: 'Чат-бот для JivoSite',
        title: 'Оставьте Jivo.',
        titleAccent: ' Добавьте ИИ-ассистента.',
        subtitle:
          'Ассистент Fineguide первым отвечает в чатах JivoChat по вашей базе знаний и приглашает в тот же чат одного из операторов Jivo, когда нужен человек. Операторы продолжают работать в привычном приложении Jivo.',
      },
      definition: {
        heading: 'Что такое ИИ-бот для Jivo?',
        body:
          'Fineguide — это ИИ-бот для Jivo: ИИ-ассистент, подключённый к JivoChat как бот, который отвечает на чаты, переданные ему Jivo, раньше оператора. Он подключается через Bot API Jivo: ассистент отвечает в том же чате Jivo по страницам сайта, документам и FAQ, собирает данные клиента в CRM Fineguide и приглашает оператора Jivo в чат, когда клиент просит человека или срабатывает одно из ваших правил передачи.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'ИИ-ассистент в Jivo, который встречает клиентов раньше операторов.',
        body:
          'Клиенты пишут туда же, куда и раньше, операторы остаются в своём приложении, а типовые вопросы получают ответ до того, как чат попадает в очередь.',
        items: [
          {
            term: 'Отвечает прямо в Jivo',
            desc: 'Jivo передаёт ассистенту каждое новое сообщение клиента, и ответ через несколько секунд появляется в том же чате Jivo, со ссылками.',
          },
          {
            term: 'По вашей базе знаний',
            desc: 'Ассистент отвечает по страницам, документам и FAQ, которые вы ему дали, и его можно ограничить только тем, чему он обучен. Действия позволяют ему проверить данные в ваших системах прямо в диалоге, например статус заказа.',
          },
          {
            term: 'Передача операторам Jivo',
            desc: 'Когда клиент просит человека или разговор подходит под ситуации, которые вы описали своими словами, например жалобу или крупный заказ, Fineguide приглашает оператора Jivo в чат.',
          },
          {
            term: 'Один голос в чате',
            desc: 'Как только оператор приглашён, ассистент перестаёт отвечать в этом чате, и клиент никогда не получает ответ ИИ поверх ответа человека.',
          },
          {
            term: 'Лиды в CRM Fineguide',
            desc: 'Со включённым сбором лидов ассистент спрашивает то, что нужно отделу продаж: имя, телефон, товар или бюджет, и сохраняет лид в CRM с привязкой к диалогу, из которого он пришёл.',
          },
          {
            term: 'Каждый чат сохранён и посчитан',
            desc: 'Каждый чат Jivo хранится как диалог в Fineguide у ассистента, который отвечал, и попадает в его аналитику: удовлетворённость, тональность, решённость и намерение клиента.',
          },
          {
            term: 'Сценарии после чата',
            desc: 'Когда ассистент собрал данные клиента, сценарий (workflow) может создать сделку, назначить ответственного или поставить задачу в CRM Fineguide.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как подключить',
        heading: 'Настраиваем вместе с командой Fineguide.',
        body: 'У подключения бота в JivoChat две стороны: Fineguide и ваш аккаунт Jivo. Наша команда подключает его вместе с вами.',
        items: [
          'Создайте ассистента в Fineguide и дайте ему страницы сайта, документы и FAQ.',
          'Включите сбор лидов и выберите, когда чат переходит к человеку.',
          'Команда Fineguide подключает ассистента к Bot API Jivo и даёт вам ключ для вашего аккаунта Jivo.',
          'В Jivo добавьте бота, вставьте ключ и выберите каналы, в которых он работает.',
          'Задайте тестовый вопрос, затем попросите человека и убедитесь, что приглашение оператору пришло в Jivo.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Подключение',
            desc: 'Bot API Jivo, настраивается вместе с командой Fineguide. Виджет Jivo, каналы и приложение операторов остаются как есть.',
          },
          {
            term: 'Передача',
            desc: 'Оператор Jivo приглашается в тот же чат, когда клиент просит человека или срабатывает правило передачи; после этого ассистент в этом чате молчит.',
          },
          {
            term: 'Куда попадают данные',
            desc: 'Диалоги хранятся у ассистента в Fineguide; лиды, контакты, сделки и задачи в CRM Fineguide.',
          },
          {
            term: 'Тот же ассистент в других каналах',
            desc: 'Ассистент из Jivo может отвечать и в чат-виджете Fineguide на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack и Discord по той же базе знаний.',
          },
          {
            term: 'Тарифы и кредиты',
            desc: 'Каждый ответ ИИ в чате Jivo стоит 1 кредит; на бесплатном тарифе для старта есть 200 кредитов. Сбор лидов и сценарии доступны на платных тарифах, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'См. также',
        heading: 'Ещё о JivoChat и вашем ассистенте',
        links: [
          {
            path: '/compare/jivochat/',
            label: 'Fineguide и JivoChat',
            desc: 'ИИ, каналы, телефония и данные бок о бок, и как Fineguide работает внутри Jivo.',
          },
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Характер, база знаний, переменные сессии, действия и передача сотруднику для любого канала.',
          },
          {
            path: '/help-desk',
            label: 'Хелпдеск',
            desc: 'Правила передачи, очереди и тикеты для обращений, которые ассистент не закрыл сам.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Куда попадают лиды из чатов Jivo, вместе со сделками и задачами.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы, документы и FAQ, по которым отвечает ассистент.',
          },
        ],
      },
      faq: {
        heading: 'ИИ-бот для Jivo: частые вопросы',
        items: [
          {
            q: 'Можно ли подключить ИИ-бота к Jivo?',
            a: 'Да. Fineguide подключается к JivoChat как бот через Bot API Jivo, поэтому ИИ-ассистент первым отвечает в чатах Jivo и приглашает оператора, когда нужен человек.',
          },
          {
            q: 'Как ИИ-ассистент в Jivo передаёт чат оператору?',
            a: 'Когда клиент просит человека или срабатывает одно из ваших правил передачи, Fineguide отправляет в Jivo приглашение оператору присоединиться к тому же чату, и ассистент там больше не отвечает.',
          },
          {
            q: 'Операторам придётся осваивать новую программу?',
            a: 'Нет. Они продолжают работать в приложении Jivo. Ассистент отвечает первым и приглашает их в чат, когда нужен человек.',
          },
          {
            q: 'Куда попадают лиды из чатов Jivo?',
            a: 'В CRM Fineguide, с привязкой к диалогу, из которого они пришли, и с данными, которые собрал ассистент. Сбор лидов доступен на платных тарифах.',
          },
          {
            q: 'Отвечает ли чат-бот для JivoSite в WhatsApp и других каналах Jivo?',
            a: 'Когда вы добавляете бота в Jivo, вы выбираете каналы, в которых он работает; по данным Jivo, подключённый бот может работать в чате на сайте и в мессенджерах, подключённых к Jivo.',
          },
          {
            q: 'Как подключить Fineguide к JivoChat?',
            a: 'Подготовьте ассистента в Fineguide и попросите нашу команду подключить его: мы связываем его с Bot API Jivo и даём вам ключ, который вы вставляете в настройки бота в Jivo.',
          },
          {
            q: 'Сколько стоит ИИ-бот для Jivo?',
            a: 'Каждый ответ ИИ стоит 1 кредит, а на бесплатном тарифе для старта есть 200 кредитов. Сбор лидов и сценарии доступны на платных тарифах, они указаны на странице цен.',
          },
        ],
      },
      closing: {
        heading: 'Поставьте ИИ-ассистента перед очередью Jivo.',
        body: 'Подготовьте ассистента на своей базе знаний и проверьте его в предпросмотре. Затем запишитесь на 30-минутный звонок, и наша команда вместе с вами подключит его к вашему аккаунту JivoChat.',
      },
    },
  },
};

export default solution;
