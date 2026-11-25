import type { Solution } from './types';

const solution: Solution = {
  slug: 'whatsapp-ai-chatbot',
  image: 'channels-phone.jpg',
  imageAlt: {
    en: 'A hand holding a smartphone with a messaging app open over a wooden table, a mug of coffee beside it',
    ro: 'O mână ține un telefon cu o aplicație de mesagerie deschisă, deasupra unei mese de lemn, lângă o cană de cafea',
    ru: 'Рука держит смартфон с открытым мессенджером над деревянным столом, рядом чашка кофе',
  },
  appName: 'Fineguide for WhatsApp',
  checked: '2026-11-25',
  reading: [
    '/blog/whatsapp-business-api-ai-assistant/',
    '/blog/session-variables-chat-to-crm-data/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/omnichannel-team-inbox/',
    '/blog/fineguide-crm-with-built-in-ai-assistants-for-automated-lead-capture/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/ConnectAppsPage.tsx WhatsappPanel (origin/main): "Connect WhatsApp" opens Meta login (Embedded Signup, scopes business_management, whatsapp_business_management, whatsapp_business_messaging); then "Select a phone number to activate your assistant" -> Register -> "Active phone number ... Live"; "Make sure your WhatsApp Business account has phone numbers configured in Meta Business Suite"',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/types.ts (WhatsApp: "Talk to customers on WhatsApp Business.")',
    'ai-backoffice-api apps/backoffice-api/src/modules/integration/helpers/whatsapp.service.ts (code exchange, phone numbers, register)',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/whatsapp/transformer.ts: getBotByWabaId(wabaId, phoneNumberId) ("The number the customer wrote to decides which bot answers"); extractText reads text, interactive button_reply / list_reply titles, template button text, image / video / document / audio captions and location name / address; contactName from the WhatsApp profile',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/whatsapp/messenger.ts: sends text via graph.facebook.com/v21.0/{phoneNumberId}/messages; chunkText splits answers over 4000 characters at paragraph / line breaks; fallback phone_number_id for operator-initiated sends',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/whatsapp/envelope.ts (every message of a batched webhook is processed) + routes.ts / controller.ts (Meta webhook, signature check)',
    'ai-backoffice-api apps/chat-api/src/_v2/messaging/human-reply-service.ts (operator replies published to the channel)',
    'ai-backoffice-api apps/chat-api/src/_v2/messaging/channel-identity.ts (whatsapp: displayName from contactName; the number is the channel id) + apps/backoffice-api/src/modules/bot/session/session-intern.controller.ts upsertParticipant -> channel-contact.service.ts linkSessionContact (WHATSAPP is an identifying channel; contact keyed on organization + channel + channel user id; ContactChannel row; duplicate rescan queued; session linked to the contact)',
    'ai-backoffice-frontend apps/ai-workspace/src/components/contact/ContactChannels.tsx (WhatsApp row on the contact, wa.me link) + modules/crm/contacts/components/tabs/ConversationsTab.tsx',
    'ai-fineguide-landing src/i18n/en.ts crm identity copy ("Duplicates are found ... such as a WhatsApp number you already have on file, then confirmed by a person, never merged behind your back")',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx Lead collection (name, email, phone or chosen fields; when the visitor shows interest / in every reply / before it answers anything; "A lead is saved once these are collected ... as soon as there is an email or phone number"); gated by canAccessLeadCollection (crm.lead-collection, not on Free per BRIEF.md)',
    'ai-gptcrawler api/gptchat.py allowLeadCollection (channel-independent lead collection)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx + ai-backoffice-api apps/chat-api/src/_v2/messaging/conversation-orchestrator.ts (handover when the customer asks or own-words situations match; assistant stops)',
    'ai-backoffice-api apps/backoffice-api/src/modules/workflow/workflow-trigger.router.ts (info_collected -> ASSISTANT_INFO_COLLECTED, session_started, contact_created) emitted by bot-session-variables.service.ts / bot-session.service.ts; workflows on paid plans per BRIEF.md',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/webhooks/types.ts (MESSAGE, SESSION_OPEN, SESSION_CLOSED, VARIABLE_UPDATE)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/messages/conversations/components/ChannelBadge.tsx (WhatsApp badge in Messages)',
    'ai-fineguide-landing src/i18n/en.ts pricing (1 credit per AI reply; Messages use no credits; free plan 200 credits) and src/data/solutions/help-desk.ts (free plan, no card)',
  ],
  copy: {
    en: {
      meta: {
        title: 'WhatsApp AI Chatbot and CRM for Business | Fineguide',
        description:
          'WhatsApp AI chatbot on the official WhatsApp Business API: an AI agent answers from your knowledge, saves each customer to the CRM and hands chats to your team.',
      },
      hero: {
        eyebrow: 'WhatsApp AI chatbot',
        title: 'Your WhatsApp number,',
        titleAccent: ' answered by AI.',
        subtitle:
          'Connect your WhatsApp Business number with a Meta sign-in. An AI assistant answers customers from your knowledge, every chat lands on a CRM contact, and your team takes over in the same chat when a person is needed.',
      },
      definition: {
        heading: 'What is a WhatsApp AI chatbot?',
        body:
          "A WhatsApp AI chatbot is software that answers customers on a business's WhatsApp number automatically, using AI to understand questions written in the customer's own words instead of fixed menus. Fineguide connects your number through Meta's official WhatsApp Business Platform, the WhatsApp Business API, with a Meta sign-in and one click to register the number. Its AI agent answers from your website pages, documents and FAQ, saves each person who writes as a CRM contact with their WhatsApp name and number, and hands the chat to your team in Messages when a person is needed.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'A WhatsApp AI agent with a CRM behind it.',
        body:
          'The assistant answers, the CRM remembers, and your team steps in when it matters, all on the number your customers already have.',
        items: [
          {
            term: 'Official WhatsApp Business API',
            desc: "Fineguide connects through Meta's WhatsApp Business Platform, the official way for software to send and receive WhatsApp messages. There is no phone to keep online and no QR code to rescan.",
          },
          {
            term: 'Answers from your knowledge',
            desc: 'The assistant answers from the pages, documents and FAQ you give it, in the tone you set, and can be limited to only what it has learned. A long answer arrives as several WhatsApp messages, split at paragraph breaks.',
          },
          {
            term: 'Buttons, lists and captions',
            desc: "Button taps, list choices, captions on photos, videos and documents, and shared locations all reach the assistant as the customer's words.",
          },
          {
            term: 'Every chat on a CRM contact',
            desc: "The first message creates a contact with the customer's WhatsApp profile name and number, linked to the conversation, with a link that opens the chat in WhatsApp. When the same person writes again, it lands on the same contact.",
          },
          {
            term: 'Leads while the chat runs',
            desc: 'With lead collection on, the assistant asks for the details you choose, such as name, email, budget or the service needed, and saves a lead in the CRM once the required fields are in.',
          },
          {
            term: 'Handover on the same number',
            desc: 'When the customer asks for a person, or the chat matches a situation you described in your own words, the assistant stops and the chat waits in Messages. Your operator replies from Fineguide, and the answer goes out on the same WhatsApp number.',
          },
          {
            term: 'One assistant per number',
            desc: 'The number a customer writes to decides which assistant answers, so a sales line and a support line can each have their own knowledge and rules.',
          },
          {
            term: 'Workflows and webhooks',
            desc: "When the assistant has collected a customer's details, a workflow can create a deal, assign an owner or add a task. Webhooks send each message and each collected field to n8n or your own system.",
          },
        ],
      },
      steps: {
        eyebrow: 'How to connect',
        heading: 'From Meta sign-in to live answers.',
        body: 'You need a WhatsApp Business account with a phone number set up in Meta Business Suite, and admin access to that business.',
        items: [
          'Create an assistant and give it your website pages, documents and FAQ.',
          'Open Connect Apps for that assistant, choose WhatsApp and click Connect WhatsApp.',
          "Sign in with Meta in Meta's own window, choose your business and WhatsApp Business account, and approve the access.",
          'Pick the phone number and click Register: the assistant now answers on that number.',
          'Turn on lead collection and handover, then follow every chat in Messages and on the CRM contact.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Connection',
            desc: "Meta's WhatsApp Business Platform (WhatsApp Business API), through Meta's sign-in window. One registered number per assistant.",
          },
          {
            term: 'What the assistant reads',
            desc: 'Text, button replies, list replies, captions on photos, videos and documents, and shared locations.',
          },
          {
            term: 'On the contact',
            desc: "WhatsApp profile name and number with a wa.me link, and every conversation on the contact's Conversations tab. Possible duplicates are matched by the number and confirmed by a person.",
          },
          {
            term: 'Same assistant elsewhere',
            desc: 'The assistant that answers on WhatsApp can also answer in your website chat widget, on Telegram, Instagram, Messenger, Slack and Discord, from the same knowledge.',
          },
          {
            term: 'Plans and credits',
            desc: "Start on the free plan with 200 credits. Each AI reply is 1 credit; your team's replies in Messages use none. Lead collection and workflows come with paid plans, from the Starter plan.",
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'What works behind your WhatsApp assistant',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Persona, knowledge, session variables, actions and handover for every channel.',
          },
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'WhatsApp next to your other chat channels and email, in one team inbox.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, deals and tasks, with the WhatsApp number on every record.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The pages, documents and FAQ your assistant answers from.',
          },
          {
            path: '/compare/kommo-amocrm/',
            label: 'Fineguide vs Kommo and amoCRM',
            desc: 'Two CRMs built around messengers, side by side, and how Fineguide also works inside them.',
          },
        ],
      },
      faq: {
        heading: 'WhatsApp AI chatbot: common questions',
        items: [
          {
            q: 'What is a WhatsApp AI chatbot?',
            a: 'A WhatsApp AI chatbot answers customers on your business WhatsApp number automatically and understands questions in their own words. In Fineguide it answers from your knowledge, saves each customer to the CRM and hands the chat to a person when needed.',
          },
          {
            q: 'How do I connect the WhatsApp Business API to an AI chatbot?',
            a: "In Fineguide, open Connect Apps for your assistant, click Connect WhatsApp, sign in with Meta and approve access to your WhatsApp Business account. Then pick the phone number and click Register; the assistant answers on it from then on.",
          },
          {
            q: 'What do I need to connect WhatsApp?',
            a: 'A Meta business with a WhatsApp Business account, at least one phone number set up for it in Meta Business Suite, and admin access to approve the connection.',
          },
          {
            q: 'Is there a CRM with WhatsApp integration?',
            a: "Yes. Fineguide is a CRM with WhatsApp built in: each person who writes becomes a contact with their WhatsApp name and number, the conversation is on the contact's record, and leads collected in the chat land in the same CRM.",
          },
          {
            q: 'Can a WhatsApp AI agent hand the chat to a person?',
            a: 'Yes. When the customer asks for a person, or a situation you described comes up, the assistant stops and the chat waits in Messages. Your operator replies from Fineguide on the same WhatsApp number.',
          },
          {
            q: 'Can the WhatsApp chatbot collect leads?',
            a: 'Yes, on paid plans. You choose the fields, such as name, email, phone or budget, and when the assistant asks for them; a lead is saved in the CRM once the required fields are collected.',
          },
          {
            q: 'How much does a WhatsApp AI chatbot cost?',
            a: 'You can start on the free plan with 200 credits and no card. Each AI reply is 1 credit, and replies your team writes in Messages use none; the pricing page lists the plans.',
          },
        ],
      },
      closing: {
        heading: 'Put AI on your WhatsApp number today.',
        body: 'Create an assistant, connect your WhatsApp Business number and send it a question from your own phone. Or book a 30-minute demo and see WhatsApp, Messages and the CRM work together.',
      },
    },

    ro: {
      meta: {
        title: 'Chatbot WhatsApp AI pentru afaceri, cu CRM | Fineguide',
        description:
          'Chatbot WhatsApp AI pe WhatsApp Business API oficial: asistentul răspunde din cunoștințele tale, salvează fiecare client în CRM și predă conversația echipei.',
      },
      hero: {
        eyebrow: 'Chatbot WhatsApp AI',
        title: 'Numărul tău de WhatsApp,',
        titleAccent: ' cu răspunsuri de la AI.',
        subtitle:
          'Conectezi numărul de WhatsApp Business printr-o autentificare Meta. Asistentul AI răspunde clienților din cunoștințele tale, fiecare conversație ajunge pe un contact din CRM, iar echipa preia discuția în același chat când e nevoie de un om.',
      },
      definition: {
        heading: 'Ce este un chatbot WhatsApp AI?',
        body:
          'Un chatbot WhatsApp AI este un program care răspunde automat clienților pe numărul de WhatsApp al firmei și folosește AI ca să înțeleagă întrebările scrise cu cuvintele clientului, nu doar butoane și meniuri fixe. Fineguide conectează numărul prin WhatsApp Business Platform, platforma oficială Meta (WhatsApp Business API), cu o autentificare Meta și un clic pentru înregistrarea numărului. Asistentul răspunde din paginile site-ului, documentele și întrebările frecvente pe care i le dai, salvează fiecare persoană care scrie ca un contact în CRM, cu numele și numărul de WhatsApp, și predă conversația echipei în Mesaje când e nevoie de un om.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Un bot WhatsApp pentru afaceri, cu CRM în spate.',
        body:
          'Asistentul răspunde, CRM-ul ține minte, iar echipa intervine când contează, pe numărul pe care clienții tăi îl au deja.',
        items: [
          {
            term: 'WhatsApp Business API oficial',
            desc: 'Fineguide se conectează prin WhatsApp Business Platform de la Meta, calea oficială prin care un program trimite și primește mesaje pe WhatsApp. Nu ai un telefon care trebuie ținut online și nici un cod QR de scanat din nou.',
          },
          {
            term: 'Răspunde din cunoștințele tale',
            desc: 'Asistentul răspunde din paginile, documentele și întrebările frecvente pe care i le dai, pe tonul ales de tine, și îl poți limita doar la ce a învățat. Un răspuns lung ajunge în mai multe mesaje WhatsApp, împărțit la capăt de paragraf.',
          },
          {
            term: 'Butoane, liste și descrieri',
            desc: 'Apăsările pe butoane, alegerile din liste, textul de sub fotografii, clipuri și documente, precum și locațiile trimise ajung la asistent ca mesaje ale clientului.',
          },
          {
            term: 'Fiecare conversație pe un contact',
            desc: 'Primul mesaj creează un contact cu numele din profilul de WhatsApp și numărul clientului, legat de conversație, cu un link care deschide chatul în WhatsApp. Când aceeași persoană scrie din nou, mesajul ajunge pe același contact.',
          },
          {
            term: 'Lead-uri în timpul conversației',
            desc: 'Cu colectarea de lead-uri pornită, asistentul cere datele pe care le alegi tu, de exemplu numele, emailul, bugetul sau serviciul dorit, și salvează un lead în CRM după ce are câmpurile obligatorii.',
          },
          {
            term: 'Preluare pe același număr',
            desc: 'Când clientul cere un om sau conversația se potrivește cu o situație descrisă de tine, asistentul se oprește, iar chatul așteaptă în Mesaje. Operatorul răspunde din Fineguide, iar mesajul pleacă de pe același număr de WhatsApp.',
          },
          {
            term: 'Un asistent pentru fiecare număr',
            desc: 'Numărul la care scrie clientul decide ce asistent răspunde, așa că linia de vânzări și cea de suport pot avea fiecare cunoștințele și regulile lor.',
          },
          {
            term: 'Workflow-uri și webhook-uri',
            desc: 'După ce asistentul a strâns datele clientului, un workflow poate crea o oportunitate, poate desemna un responsabil sau poate adăuga o sarcină. Webhook-urile trimit fiecare mesaj și fiecare câmp completat în n8n sau în sistemul tău.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum conectezi',
        heading: 'De la autentificarea Meta la primele răspunsuri.',
        body: 'Ai nevoie de un cont WhatsApp Business cu un număr de telefon configurat în Meta Business Suite și de acces de administrator la acea firmă.',
        items: [
          'Creezi un asistent și îi dai paginile site-ului, documentele și întrebările frecvente.',
          'Deschizi Connect Apps pentru acel asistent, alegi WhatsApp și apeși Connect WhatsApp.',
          'Te autentifici în fereastra Meta, alegi firma și contul WhatsApp Business și aprobi accesul.',
          'Alegi numărul de telefon și apeși Register: de acum asistentul răspunde pe acel număr.',
          'Pornești colectarea lead-urilor și preluarea de către operator, apoi urmărești fiecare conversație în Mesaje și pe contactul din CRM.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Conexiune',
            desc: 'WhatsApp Business Platform de la Meta (WhatsApp Business API), prin fereastra de autentificare Meta. Un număr înregistrat pentru fiecare asistent.',
          },
          {
            term: 'Ce citește asistentul',
            desc: 'Text, răspunsuri din butoane și liste, textul de sub fotografii, clipuri și documente, plus locațiile trimise.',
          },
          {
            term: 'Pe contact',
            desc: 'Numele din profilul de WhatsApp și numărul, cu link wa.me, plus toate conversațiile în fila Conversații a contactului. Posibilele dubluri sunt găsite după număr și confirmate de un om.',
          },
          {
            term: 'Același asistent și în alte canale',
            desc: 'Asistentul de pe WhatsApp poate răspunde și în chatul de pe site, pe Telegram, Instagram, Messenger, Slack și Discord, din aceleași cunoștințe.',
          },
          {
            term: 'Planuri și credite',
            desc: 'Începi pe planul gratuit, cu 200 de credite. Fiecare răspuns AI costă 1 credit; răspunsurile echipei din Mesaje nu consumă credite. Colectarea de lead-uri și workflow-urile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Ce lucrează în spatele asistentului de pe WhatsApp',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Personalitate, cunoștințe, variabile de sesiune, acțiuni și predare către un om, pentru fiecare canal.',
          },
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'WhatsApp alături de celelalte canale de chat și de email, într-un inbox comun al echipei.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, oportunități și sarcini, cu numărul de WhatsApp pe fiecare fișă.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile, documentele și întrebările frecvente din care răspunde asistentul.',
          },
          {
            path: '/compare/kommo-amocrm/',
            label: 'Fineguide vs Kommo și amoCRM',
            desc: 'Două CRM-uri construite în jurul mesageriei, comparate, și cum lucrează Fineguide și în interiorul lor.',
          },
        ],
      },
      faq: {
        heading: 'Chatbot WhatsApp AI: întrebări frecvente',
        items: [
          {
            q: 'Ce este un chatbot WhatsApp AI?',
            a: 'Un chatbot WhatsApp AI răspunde automat clienților pe numărul de WhatsApp al firmei și înțelege întrebările scrise cu cuvintele lor. În Fineguide, răspunde din cunoștințele tale, salvează fiecare client în CRM și predă conversația unui om când e nevoie.',
          },
          {
            q: 'Cum conectez WhatsApp Business API la un chatbot AI?',
            a: 'În Fineguide deschizi Connect Apps pentru asistent, apeși Connect WhatsApp, te autentifici cu Meta și aprobi accesul la contul WhatsApp Business. Apoi alegi numărul și apeși Register; din acel moment asistentul răspunde pe el.',
          },
          {
            q: 'De ce am nevoie ca să conectez WhatsApp?',
            a: 'De o firmă în Meta cu un cont WhatsApp Business, de cel puțin un număr de telefon configurat pentru el în Meta Business Suite și de acces de administrator ca să aprobi conexiunea.',
          },
          {
            q: 'Există un CRM cu WhatsApp?',
            a: 'Da. Fineguide este un CRM cu WhatsApp integrat: fiecare persoană care scrie devine contact, cu numele și numărul de WhatsApp, conversația stă pe fișa ei, iar lead-urile strânse în chat ajung în același CRM.',
          },
          {
            q: 'Poate botul de WhatsApp să predea conversația unui om?',
            a: 'Da. Când clientul cere un om sau apare o situație descrisă de tine, asistentul se oprește, iar chatul așteaptă în Mesaje. Operatorul răspunde din Fineguide, de pe același număr de WhatsApp.',
          },
          {
            q: 'Poate chatbotul de WhatsApp să colecteze lead-uri?',
            a: 'Da, pe planurile plătite. Alegi câmpurile, de exemplu numele, emailul, telefonul sau bugetul, și momentul în care asistentul le cere; lead-ul se salvează în CRM după ce are câmpurile obligatorii.',
          },
          {
            q: 'Cât costă un bot WhatsApp pentru afaceri?',
            a: 'Poți începe pe planul gratuit, cu 200 de credite și fără card. Fiecare răspuns AI costă 1 credit, iar răspunsurile scrise de echipă în Mesaje nu consumă credite; planurile sunt pe pagina de prețuri.',
          },
        ],
      },
      closing: {
        heading: 'Pune AI pe numărul tău de WhatsApp de azi.',
        body: 'Creează un asistent, conectează numărul de WhatsApp Business și trimite-i o întrebare de pe telefonul tău. Sau programează un demo de 30 de minute și vezi cum lucrează împreună WhatsApp, Mesajele și CRM-ul.',
      },
    },

    ru: {
      meta: {
        title: 'Чат-бот для WhatsApp с ИИ и CRM | Fineguide',
        description:
          'Чат-бот для WhatsApp на официальном WhatsApp Business API: ИИ-бот отвечает по вашей базе знаний, сохраняет клиентов в CRM и передаёт диалог менеджеру.',
      },
      hero: {
        eyebrow: 'Чат-бот для WhatsApp',
        title: 'Ваш номер WhatsApp',
        titleAccent: ' отвечает с помощью ИИ.',
        subtitle:
          'Подключите номер WhatsApp Business через вход в Meta. ИИ-ассистент отвечает клиентам по вашей базе знаний, каждый диалог попадает в карточку контакта в CRM, а команда подключается в тот же чат, когда нужен человек.',
      },
      definition: {
        heading: 'Что такое чат-бот для WhatsApp с ИИ?',
        body:
          'Чат-бот для WhatsApp с ИИ представляет собой программу, которая автоматически отвечает клиентам на WhatsApp-номер компании и с помощью ИИ понимает вопросы, написанные своими словами, а не только кнопки и меню. Fineguide подключает номер через WhatsApp Business Platform, официальную платформу Meta (WhatsApp Business API): нужен вход в Meta и один клик, чтобы зарегистрировать номер. ИИ-бот отвечает по страницам сайта, документам и FAQ, сохраняет каждого, кто написал, как контакт в CRM с именем и номером WhatsApp и передаёт диалог команде в разделе «Сообщения», когда нужен человек.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'ИИ-бот WhatsApp, за которым стоит CRM.',
        body:
          'Ассистент отвечает, CRM запоминает, а команда подключается, когда это важно. И всё на том номере, который клиенты уже знают.',
        items: [
          {
            term: 'Официальный WhatsApp Business API',
            desc: 'Fineguide подключается через WhatsApp Business Platform от Meta, официальный способ для программ отправлять и получать сообщения WhatsApp. Не нужно держать телефон онлайн и заново сканировать QR-код.',
          },
          {
            term: 'Отвечает по вашей базе знаний',
            desc: 'Ассистент отвечает по страницам, документам и FAQ, которые вы ему дали, в заданном вами тоне, и его можно ограничить только тем, чему он обучен. Длинный ответ приходит несколькими сообщениями WhatsApp, разбитыми по абзацам.',
          },
          {
            term: 'Кнопки, списки и подписи',
            desc: 'Нажатия на кнопки, выбор из списков, подписи к фото, видео и документам, а также отправленные геолокации доходят до ассистента как слова клиента.',
          },
          {
            term: 'Каждый диалог в карточке контакта',
            desc: 'Первое сообщение создаёт контакт с именем из профиля WhatsApp и номером клиента, привязанный к диалогу, со ссылкой, которая открывает чат в WhatsApp. Когда тот же человек пишет снова, сообщение попадает в тот же контакт.',
          },
          {
            term: 'Лиды прямо по ходу диалога',
            desc: 'Со включённым сбором лидов ассистент спрашивает данные, которые вы выбрали: имя, email, бюджет или нужную услугу, и сохраняет лид в CRM, как только обязательные поля заполнены.',
          },
          {
            term: 'Передача диалога на том же номере',
            desc: 'Когда клиент просит человека или разговор подходит под ситуацию, которую вы описали своими словами, ассистент замолкает, а чат ждёт в разделе «Сообщения». Оператор отвечает из Fineguide, и ответ уходит с того же номера WhatsApp.',
          },
          {
            term: 'Свой ассистент на каждый номер',
            desc: 'Какой ассистент ответит, зависит от номера, на который написал клиент, поэтому у линии продаж и линии поддержки могут быть свои знания и правила.',
          },
          {
            term: 'Сценарии и вебхуки',
            desc: 'Когда ассистент собрал данные клиента, сценарий (workflow) может создать сделку, назначить ответственного или поставить задачу. Вебхуки отправляют каждое сообщение и каждое собранное поле в n8n или вашу систему.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как подключить',
        heading: 'От входа в Meta до первых ответов.',
        body: 'Нужен аккаунт WhatsApp Business с номером телефона, настроенным в Meta Business Suite, и права администратора в этой компании.',
        items: [
          'Создайте ассистента и дайте ему страницы сайта, документы и FAQ.',
          'Откройте Connect Apps для этого ассистента, выберите WhatsApp и нажмите Connect WhatsApp.',
          'Войдите в Meta в её собственном окне, выберите компанию и аккаунт WhatsApp Business и подтвердите доступ.',
          'Выберите номер телефона и нажмите Register: с этого момента ассистент отвечает на этот номер.',
          'Включите сбор лидов и передачу оператору и следите за каждым диалогом в «Сообщениях» и в карточке контакта.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Подключение',
            desc: 'WhatsApp Business Platform от Meta (WhatsApp Business API), через окно входа Meta. Один зарегистрированный номер на ассистента.',
          },
          {
            term: 'Что читает ассистент',
            desc: 'Текст, ответы кнопками и из списков, подписи к фото, видео и документам и отправленные геолокации.',
          },
          {
            term: 'В карточке контакта',
            desc: 'Имя из профиля WhatsApp и номер со ссылкой wa.me, а все диалоги на вкладке «Диалоги» контакта. Возможные дубли находятся по номеру и подтверждаются человеком.',
          },
          {
            term: 'Тот же ассистент в других каналах',
            desc: 'Ассистент из WhatsApp может отвечать и в чате на сайте, в Telegram, Instagram, Messenger, Slack и Discord по той же базе знаний.',
          },
          {
            term: 'Тарифы и кредиты',
            desc: 'Начните на бесплатном тарифе с 200 кредитами. Каждый ответ ИИ стоит 1 кредит, ответы команды в «Сообщениях» кредитов не тратят. Сбор лидов и сценарии доступны на платных тарифах, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'См. также',
        heading: 'Что работает за ассистентом в WhatsApp',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Характер, база знаний, переменные сессии, действия и передача сотруднику для любого канала.',
          },
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'WhatsApp рядом с другими чатами и почтой в общем ящике команды.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, сделки и задачи с номером WhatsApp в каждой карточке.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы, документы и FAQ, по которым отвечает ассистент.',
          },
          {
            path: '/compare/kommo-amocrm/',
            label: 'Fineguide и Kommo / amoCRM',
            desc: 'Две CRM, построенные вокруг мессенджеров, бок о бок, и как Fineguide работает внутри них.',
          },
        ],
      },
      faq: {
        heading: 'Чат-бот для WhatsApp: частые вопросы',
        items: [
          {
            q: 'Что такое чат-бот для WhatsApp с ИИ?',
            a: 'Это бот, который автоматически отвечает клиентам на WhatsApp-номер компании и понимает вопросы, написанные своими словами. В Fineguide он отвечает по вашей базе знаний, сохраняет каждого клиента в CRM и передаёт диалог человеку, когда это нужно.',
          },
          {
            q: 'Как подключить WhatsApp Business API к чат-боту?',
            a: 'В Fineguide откройте Connect Apps для ассистента, нажмите Connect WhatsApp, войдите в Meta и подтвердите доступ к аккаунту WhatsApp Business. Затем выберите номер и нажмите Register: с этого момента ассистент отвечает на него.',
          },
          {
            q: 'Что нужно, чтобы подключить WhatsApp?',
            a: 'Компания в Meta с аккаунтом WhatsApp Business, хотя бы один номер телефона, настроенный для него в Meta Business Suite, и права администратора, чтобы подтвердить подключение.',
          },
          {
            q: 'Как подключить WhatsApp к CRM?',
            a: 'В Fineguide WhatsApp уже встроен в CRM: каждый, кто написал, становится контактом с именем и номером WhatsApp, диалог хранится в его карточке, а лиды, собранные в чате, попадают в ту же CRM.',
          },
          {
            q: 'Может ли ИИ-бот WhatsApp передать диалог человеку?',
            a: 'Да. Когда клиент просит человека или возникает описанная вами ситуация, ассистент замолкает, а чат ждёт в разделе «Сообщения». Оператор отвечает из Fineguide с того же номера WhatsApp.',
          },
          {
            q: 'Может ли чат-бот в WhatsApp собирать лиды?',
            a: 'Да, на платных тарифах. Вы выбираете поля (имя, email, телефон, бюджет) и момент, когда ассистент их спрашивает; лид сохраняется в CRM, как только обязательные поля собраны.',
          },
          {
            q: 'Сколько стоит чат-бот для WhatsApp?',
            a: 'Можно начать на бесплатном тарифе с 200 кредитами и без карты. Каждый ответ ИИ стоит 1 кредит, а ответы команды в «Сообщениях» кредитов не тратят; тарифы указаны на странице цен.',
          },
        ],
      },
      closing: {
        heading: 'Подключите ИИ к своему WhatsApp уже сегодня.',
        body: 'Создайте ассистента, подключите номер WhatsApp Business и задайте ему вопрос со своего телефона. Или запишитесь на 30-минутное демо и посмотрите, как WhatsApp, «Сообщения» и CRM работают вместе.',
      },
    },
  },
};

export default solution;
