import type { Solution } from './types';

const solution: Solution = {
  slug: 'messenger-ai-chatbot',
  image: 'office-golden.jpg',
  imageAlt: {
    en: 'A small team in a warm, sunlit office: two colleagues talk at a desk while a third walks past with a backpack',
    ro: 'O echipă mică într-un birou cald, luminat de soare: doi colegi discută lângă un birou, iar un al treilea trece cu rucsacul în spate',
    ru: 'Небольшая команда в тёплом, залитом солнцем офисе: двое коллег разговаривают у стола, третий проходит мимо с рюкзаком',
  },
  appName: 'Fineguide for Facebook Messenger',
  checked: '2026-11-25',
  reading: [
    '/blog/instagram-messenger-comment-and-dm-automation/',
    '/blog/facebook-lead-ads-to-crm/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/session-variables-chat-to-crm-data/',
    '/blog/omnichannel-team-inbox/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/ConnectAppsPage.tsx FacebookPanel ("Connect your Facebook Page for Messenger conversations, comments and lead forms"; toggles "Respond to Messenger conversations" default on, "Reply to Facebook comments" default off; connected page name shown; "already connected to another assistant" conflict = one page per assistant; Lead forms section: "Connect lead forms" asks the extra permissions once, then "Receive lead form submissions" on / off; leadFormsDenied note: Meta App Review pending, "contact support to connect them")',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/facebook/transformer.ts (allowMessenger / allowComments; Messenger text, attachments via meta-attachments.ts, like sticker kept as a thumbs-up and not answered; customer and page reactions; comments: one conversation per post + comment thread + person, page-authored comments filtered, removed comments ignored, replyToComments off = kept without answer, commentReplyMode private)',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/comment-replies.ts (private mode: full answer as Meta private reply, the comment gets a like and a short public reply; a thanks or casual remark gets only a like; spam nothing). Integration props set by the Fineguide team, not in the workspace UI',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/facebook/lead-ads.ts (leadgen webhook, answers read with leads_retrieval, each lead stored once) + apps/backoffice-api/src/modules/crm/lead/facebook-lead-ads.service.ts (contact found or created by email, then phone; deal with source "Facebook Lead Ads", form, ad, ad set, campaign, platform and every answer in props + description; LEAD_FORM webhook)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/webhooks/types.ts (LEAD_FORM "Someone submits a lead form of your Facebook page", MESSAGE, SESSION_OPEN, SESSION_CLOSED)',
    'ai-backoffice-api apps/chat-api/src/_v2/messaging/inbound-processor.ts handleHumanOverride (a message written from the page\'s own inbox, phone or Business Suite, is kept as an operator turn and the assistant stops) + tryHandleAdminReactionDeescalation (facebook only: a page reaction of ✅ or ☑ hands the chat back to the assistant)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx (handover on request or own-words situations; reused from help-desk.ts) + modules/messages/conversations/components/ChannelBadge.tsx (Facebook badge in Messages)',
    'ai-backoffice-api apps/backoffice-api/src/modules/bot/session/channel-contact.service.ts (Facebook senders become CRM contacts keyed on the page-scoped id, same contact next time; duplicate detection) + prisma ContactChannel',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx (Lead collection behind canAccessLeadCollection: fields you choose, when it asks)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/workflows/elements/defs/triggers.ts ("On these channels" filter; Facebook and Instagram separate)',
    'BRIEF.md plan gating (Free lacks lead collection and workflows); llms.txt (Facebook Lead Ads integration, webhook events, 1 credit per AI reply; free plan 200 credits as in help-desk.ts)',
  ],
  copy: {
    en: {
      meta: {
        title: 'Facebook Messenger Chatbot with AI | Fineguide',
        description:
          'Facebook Messenger chatbot with AI: answer messages and comments on your Facebook page from your knowledge base, and send Facebook Lead Ads to your CRM.',
      },
      hero: {
        eyebrow: 'Messenger chatbot',
        title: 'Your Facebook page answers,',
        titleAccent: ' and every lead reaches the CRM.',
        subtitle:
          'Connect your Facebook page once. An AI assistant answers Messenger conversations and, if you want, comments under your posts, and every Facebook Lead Ads form submission becomes a deal in your CRM.',
      },
      definition: {
        heading: 'What is a Facebook Messenger chatbot?',
        body:
          "A Facebook Messenger chatbot is software that answers the messages people send to a Facebook page, without a person typing each reply. Fineguide's Messenger assistant connects your page through Facebook's own sign-in, answers Messenger conversations and, when you switch it on, comments under your posts, using the pages, documents and FAQ you gave it. The same connection can turn every Facebook Lead Ads submission into a CRM deal with all its answers, and every person who writes becomes a CRM contact.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'Messages, comments and lead forms from one connection.',
        body:
          'One Facebook connection covers the three ways people reach your page. Conversations go to your team inbox, people and leads go to the CRM.',
        items: [
          {
            term: 'Messenger conversations',
            desc: 'With "Respond to Messenger conversations" on, the assistant answers everyone who writes to your page, from its knowledge base. Photos, voice messages, videos, files and shared links stay in the conversation, and a thumbs-up is kept as a like without a reply.',
          },
          {
            term: 'Replies to page comments',
            desc: 'Switch on "Reply to Facebook comments" and the assistant answers under your posts, in the comment thread. Follow-ups in the same thread stay in one conversation, and comments posted by your page are never answered.',
          },
          {
            term: 'Private answers with a like',
            desc: 'The Fineguide team can set your page to answer comments in private: a question gets the full answer by Messenger and a like with a short public reply under the comment, a thank-you gets only a like, and spam gets nothing.',
          },
          {
            term: 'Facebook Lead Ads to CRM',
            desc: 'Connect lead forms on the same Facebook connection. Each submission becomes a CRM deal with the source "Facebook Lead Ads", the form, ad and campaign names and every answer, linked to a contact found by email or phone, or a new one.',
          },
          {
            term: 'Your team in Messages or Business Suite',
            desc: 'When a customer asks for a person, the chat waits in Messages with a Facebook badge and your reply goes back to Messenger. If a colleague answers from the page inbox or Meta Business Suite, the assistant steps back; a ✅ reaction from the page hands the chat back to it.',
          },
          {
            term: 'Contacts and leads',
            desc: 'Each person who writes becomes a CRM contact under their Facebook name and is recognised next time. With lead collection on, the assistant asks for a phone number or email in the chat and saves a lead with the fields you choose.',
          },
          {
            term: 'Webhooks and workflows',
            desc: 'Your own systems or n8n can receive each lead form submission and each message by webhook. Workflows can be limited to Facebook chats, separately from Instagram.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your page to a working assistant.',
        body: "You sign in with Facebook and choose the page; Fineguide handles the rest of Meta's setup.",
        items: [
          'Create an assistant and give it your website, documents and FAQ.',
          "In the assistant's Connect Apps, click Connect Facebook, sign in and choose your page.",
          'Leave Messenger on, and switch on comment replies when you are happy with the answers.',
          'Click Connect lead forms so every Lead Ads submission becomes a CRM deal.',
          'Choose when chats go to your team, and turn on lead collection for leads from Messenger.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Connection',
            desc: "Facebook's own sign-in. One Facebook page per assistant.",
          },
          {
            term: 'Three touchpoints',
            desc: 'Messenger conversations (on by default), comments under your posts (off until you switch them on) and lead form submissions.',
          },
          {
            term: 'Lead Ads data',
            desc: 'Name, email and phone picked out of each submission; every answer, the form, ad, ad set and campaign kept on the deal.',
          },
          {
            term: 'Integrations',
            desc: 'Assistant webhooks for messages, sessions and lead forms; n8n; Instagram, WhatsApp, Telegram and your website chat on the same assistant.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits; an AI reply is 1 credit. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'Around your Messenger assistant',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'One assistant for your website, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord.',
          },
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Messenger next to your other channels in one team inbox, with handover to a person.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts and deals for every person who writes or fills in a lead form.',
          },
          {
            path: '/automations',
            label: 'Automations',
            desc: 'Workflows, n8n and webhooks on messages and lead forms.',
          },
          {
            path: '/help-desk',
            label: 'Help desk',
            desc: 'Handover, routing and support requests for the conversations that need a person.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide vs Tidio',
            desc: 'Two ways to run AI chat on your website and Messenger, side by side.',
          },
        ],
      },
      faq: {
        heading: 'Messenger chatbot: common questions',
        items: [
          {
            q: 'How do I add a chatbot to my Facebook page?',
            a: 'Create an assistant in Fineguide, open Connect Apps, click Connect Facebook and choose your page. The assistant then answers Messenger conversations from the knowledge you gave it.',
          },
          {
            q: 'Can a Messenger bot reply to comments on my Facebook posts?',
            a: 'Yes. Switch on "Reply to Facebook comments" and the assistant answers in the comment thread. The Fineguide team can also set it to answer in private, with a like and a short reply under the comment.',
          },
          {
            q: 'How do I get Facebook Lead Ads into my CRM?',
            a: 'Connect your page, then click Connect lead forms, or ask the Fineguide team to connect them with you. Every submission then becomes a CRM deal with all its answers and the ad and campaign it came from.',
          },
          {
            q: 'Can my team still answer in Meta Business Suite?',
            a: 'Yes. A reply from the page inbox or Business Suite reaches the customer as usual, is kept in the conversation, and the assistant stops answering that chat. React ✅ to a message to give the chat back to the assistant.',
          },
          {
            q: 'What happens when a customer asks for a person?',
            a: 'The assistant stops replying and the chat waits for your team in Messages. Your colleague answers from Fineguide and the reply reaches the customer in Messenger.',
          },
          {
            q: 'Is there a free Messenger chatbot?',
            a: 'You can start on the free plan with 200 credits and no card, and an AI reply costs 1 credit. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      closing: {
        heading: 'Put your Facebook page to work.',
        body: 'Connect your page, teach the assistant your answers, and send every message, comment and lead form to the same CRM.',
      },
    },
    ro: {
      meta: {
        title: 'Chatbot Messenger, bot pentru pagina de Facebook | Fineguide',
        description:
          'Chatbot Messenger cu AI, un bot pentru pagina de Facebook: răspunde la mesaje și comentarii din baza ta de cunoștințe și trimite Facebook Lead Ads în CRM.',
      },
      hero: {
        eyebrow: 'Chatbot Messenger',
        title: 'Pagina ta de Facebook răspunde,',
        titleAccent: ' iar fiecare lead ajunge în CRM.',
        subtitle:
          'Conectezi o singură dată pagina de Facebook. Asistentul AI răspunde în Messenger și, dacă vrei, la comentariile de sub postări, iar fiecare formular Facebook Lead Ads completat devine o oportunitate în CRM.',
      },
      definition: {
        heading: 'Ce este un chatbot Messenger?',
        body:
          'Un chatbot Messenger este un program care răspunde la mesajele trimise unei pagini de Facebook, fără ca cineva să scrie fiecare răspuns. Asistentul Fineguide pentru Messenger conectează pagina prin autentificarea Facebook, răspunde la conversațiile din Messenger și, când activezi opțiunea, la comentariile de sub postări, din paginile, documentele și întrebările frecvente pe care i le-ai dat. Aceeași conexiune poate transforma fiecare formular Facebook Lead Ads completat într-o oportunitate în CRM, cu toate răspunsurile, iar fiecare persoană care scrie devine contact în CRM.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Mesaje, comentarii și formulare de lead-uri dintr-o singură conexiune.',
        body:
          'O singură conexiune Facebook acoperă cele trei căi prin care oamenii ajung la pagina ta. Conversațiile merg în inboxul echipei, persoanele și lead-urile în CRM.',
        items: [
          {
            term: 'Conversații în Messenger',
            desc: 'Cu răspunsurile din Messenger pornite, asistentul răspunde oricui scrie paginii tale, din baza de cunoștințe. Fotografiile, mesajele vocale, clipurile video, fișierele și linkurile rămân în conversație, iar un „like” se păstrează ca atare, fără răspuns.',
          },
          {
            term: 'Răspunsuri la comentariile paginii',
            desc: 'Pornești răspunsurile la comentarii și asistentul răspunde sub postări, în firul comentariului. Întrebările de continuare din același fir rămân într-o singură conversație, iar comentariile publicate de pagina ta nu primesc răspuns.',
          },
          {
            term: 'Răspuns în privat, cu like',
            desc: 'Echipa Fineguide poate seta pagina să răspundă la comentarii în privat: o întrebare primește răspunsul complet în Messenger, iar comentariul primește un like și un răspuns public scurt; un mulțumesc primește doar like, iar spamul nimic.',
          },
          {
            term: 'Facebook Lead Ads în CRM',
            desc: 'Conectezi formularele de lead-uri din aceeași conexiune Facebook. Fiecare formular completat devine o oportunitate în CRM, cu sursa „Facebook Lead Ads”, numele formularului, al reclamei și al campaniei și toate răspunsurile, legată de un contact găsit după email sau telefon ori de unul nou.',
          },
          {
            term: 'Echipa în Mesaje sau în Business Suite',
            desc: 'Când clientul cere un om, chatul așteaptă în Mesaje, cu insigna Facebook, iar răspunsul tău ajunge înapoi în Messenger. Dacă un coleg răspunde din inboxul paginii sau din Meta Business Suite, asistentul se retrage; o reacție ✅ din partea paginii îi dă chatul înapoi.',
          },
          {
            term: 'Contacte și lead-uri',
            desc: 'Fiecare persoană care scrie devine contact în CRM, cu numele de pe Facebook, și este recunoscută data viitoare. Cu colectarea de lead-uri activă, asistentul cere în chat un telefon sau un email și salvează un lead cu câmpurile alese de tine.',
          },
          {
            term: 'Webhookuri și fluxuri de lucru',
            desc: 'Sistemele tale sau n8n pot primi prin webhook fiecare formular completat și fiecare mesaj. Fluxurile de lucru pot fi limitate la chaturile de pe Facebook, separat de Instagram.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la pagina ta la un asistent care lucrează.',
        body: 'Te autentifici cu Facebook și alegi pagina; restul configurării Meta îl face Fineguide.',
        items: [
          'Creează un asistent și dă-i site-ul, documentele și întrebările frecvente.',
          'În secțiunea Connect Apps a asistentului, apasă Connect Facebook, autentifică-te și alege pagina.',
          'Lasă Messenger pornit și activează răspunsurile la comentarii când ești mulțumit de răspunsuri.',
          'Apasă Connect lead forms, ca fiecare formular Lead Ads completat să devină o oportunitate în CRM.',
          'Alege când trec chaturile la echipă și activează colectarea de lead-uri pentru cei care scriu în Messenger.',
        ],
      },
      facts: {
        eyebrow: 'Date',
        heading: 'În cifre și denumiri.',
        items: [
          {
            term: 'Conectare',
            desc: 'Autentificarea Facebook. O pagină de Facebook pentru fiecare asistent.',
          },
          {
            term: 'Trei puncte de contact',
            desc: 'Conversațiile din Messenger (pornite implicit), comentariile de sub postări (oprite până le activezi) și formularele de lead-uri.',
          },
          {
            term: 'Datele din Lead Ads',
            desc: 'Numele, emailul și telefonul extrase din fiecare formular; toate răspunsurile, formularul, reclama, setul de reclame și campania păstrate pe oportunitate.',
          },
          {
            term: 'Integrări',
            desc: 'Webhookurile asistentului pentru mesaje, sesiuni și formulare de lead-uri; n8n; Instagram, WhatsApp, Telegram și chatul de pe site pe același asistent.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite; un răspuns AI costă 1 credit. Colectarea de lead-uri și fluxurile de lucru vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Legături',
        heading: 'În jurul asistentului de Messenger',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Un singur asistent pentru site, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
          },
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Messenger lângă celelalte canale, într-un inbox comun al echipei, cu preluare de către operator.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte și oportunități pentru fiecare persoană care scrie sau completează un formular.',
          },
          {
            path: '/automations',
            label: 'Automatizări',
            desc: 'Fluxuri de lucru, n8n și webhookuri pe mesaje și formulare de lead-uri.',
          },
          {
            path: '/help-desk',
            label: 'Helpdesk',
            desc: 'Preluare, rutare și cereri de suport pentru conversațiile care au nevoie de un om.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide vs Tidio',
            desc: 'Două moduri de a avea chat cu AI pe site și în Messenger, comparate.',
          },
        ],
      },
      faq: {
        heading: 'Chatbot Messenger: întrebări frecvente',
        items: [
          {
            q: 'Cum pun un bot pe pagina de Facebook?',
            a: 'Creezi un asistent în Fineguide, deschizi Connect Apps, apeși Connect Facebook și alegi pagina. Asistentul răspunde apoi în Messenger din cunoștințele pe care i le-ai dat.',
          },
          {
            q: 'Poate un bot de Messenger să răspundă la comentariile de pe Facebook?',
            a: 'Da. Pornești răspunsurile la comentarii și asistentul răspunde în firul comentariului. Echipa Fineguide îl poate seta și să răspundă în privat, cu un like și un răspuns scurt sub comentariu.',
          },
          {
            q: 'Cum aduc lead-urile din Facebook Lead Ads în CRM?',
            a: 'Conectezi pagina, apoi apeși Connect lead forms sau ceri echipei Fineguide să le conecteze împreună cu tine. Fiecare formular completat devine o oportunitate în CRM, cu toate răspunsurile, reclama și campania din care a venit.',
          },
          {
            q: 'Echipa mea mai poate răspunde din Meta Business Suite?',
            a: 'Da. Un răspuns din inboxul paginii sau din Business Suite ajunge la client ca de obicei, rămâne în conversație, iar asistentul nu mai răspunde în acel chat. Pui o reacție ✅ la un mesaj ca să-i dai chatul înapoi asistentului.',
          },
          {
            q: 'Ce se întâmplă când clientul cere un om?',
            a: 'Asistentul nu mai răspunde, iar chatul așteaptă echipa în Mesaje. Colegul tău răspunde din Fineguide, iar mesajul ajunge la client în Messenger.',
          },
          {
            q: 'Există un chatbot Messenger gratuit?',
            a: 'Poți începe pe planul gratuit, cu 200 de credite și fără card, iar un răspuns AI costă 1 credit. Colectarea de lead-uri și fluxurile de lucru vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      closing: {
        heading: 'Pune pagina de Facebook la treabă.',
        body: 'Conectează pagina, învață asistentul răspunsurile tale și trimite fiecare mesaj, comentariu și formular de lead-uri în același CRM.',
      },
    },
    ru: {
      meta: {
        title: 'Чат-бот для Messenger и страницы Facebook | Fineguide',
        description:
          'Чат-бот для Messenger с ИИ, бот для страницы Facebook: отвечает на сообщения и комментарии по вашей базе знаний и передаёт заявки из Facebook Lead Ads в CRM.',
      },
      hero: {
        eyebrow: 'Чат-бот для Messenger',
        title: 'Ваша страница в Facebook отвечает,',
        titleAccent: ' а каждая заявка попадает в CRM.',
        subtitle:
          'Подключите страницу Facebook один раз. ИИ-ассистент отвечает в Messenger и, если нужно, на комментарии под постами, а каждая заполненная форма Facebook Lead Ads становится сделкой в CRM.',
      },
      definition: {
        heading: 'Что такое чат-бот для Messenger?',
        body:
          'Чат-бот для Messenger представляет собой программу, которая отвечает на сообщения, отправленные странице Facebook, чтобы сотруднику не приходилось писать каждый ответ вручную. Ассистент Fineguide подключает страницу через вход в Facebook, отвечает в Messenger и, если включить, на комментарии под постами, опираясь на страницы, документы и FAQ, которые вы ему дали. То же подключение превращает каждую заявку из Facebook Lead Ads в сделку в CRM со всеми ответами, а каждый, кто написал, становится контактом в CRM.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'Сообщения, комментарии и лид-формы через одно подключение.',
        body:
          'Одно подключение Facebook охватывает три пути, которыми люди приходят на вашу страницу. Диалоги попадают в общий ящик входящих, люди и заявки попадают в CRM.',
        items: [
          {
            term: 'Диалоги в Messenger',
            desc: 'Когда включены ответы в Messenger, ассистент отвечает всем, кто пишет вашей странице, по базе знаний. Фото, голосовые, видео, файлы и ссылки остаются в диалоге, а «лайк» сохраняется как лайк и не требует ответа.',
          },
          {
            term: 'Ответы на комментарии страницы',
            desc: 'Включите ответы на комментарии, и ассистент будет отвечать под постами, в ветке комментария. Уточнения в той же ветке остаются в одном диалоге, а на комментарии от имени страницы он не отвечает.',
          },
          {
            term: 'Ответ в личку и лайк',
            desc: 'Команда Fineguide может настроить ответы на комментарии в личных сообщениях: на вопрос человек получает полный ответ в Messenger, а комментарий получает лайк и короткий публичный ответ; на благодарность ставится только лайк, спам остаётся без ответа.',
          },
          {
            term: 'Facebook Lead Ads в CRM',
            desc: 'Подключите лид-формы в том же подключении Facebook. Каждая заявка становится сделкой в CRM с источником «Facebook Lead Ads», названиями формы, объявления и кампании и всеми ответами и привязывается к контакту, найденному по email или телефону, или к новому.',
          },
          {
            term: 'Команда в «Сообщениях» или в Business Suite',
            desc: 'Когда клиент просит человека, диалог ждёт в «Сообщениях» со значком Facebook, а ваш ответ уходит обратно в Messenger. Если коллега отвечает из входящих страницы или из Meta Business Suite, ассистент отходит; реакция ✅ от страницы возвращает ему диалог.',
          },
          {
            term: 'Контакты и лиды',
            desc: 'Каждый, кто написал, становится контактом в CRM с именем из Facebook и узнаётся при следующем обращении. Если включён сбор лидов, ассистент спрашивает в чате телефон или email и сохраняет лид с нужными вам полями.',
          },
          {
            term: 'Вебхуки и сценарии',
            desc: 'Ваши системы или n8n могут получать по вебхуку каждую заявку из лид-формы и каждое сообщение. Сценарии можно ограничить чатами из Facebook, отдельно от Instagram.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От страницы до работающего ассистента.',
        body: 'Вы входите через Facebook и выбираете страницу; остальную настройку на стороне Meta делает Fineguide.',
        items: [
          'Создайте ассистента и дайте ему сайт, документы и FAQ.',
          'В разделе ассистента Connect Apps нажмите Connect Facebook, войдите и выберите страницу.',
          'Оставьте Messenger включённым, а ответы на комментарии включите, когда ответы вас устроят.',
          'Нажмите Connect lead forms, чтобы каждая заявка из Lead Ads становилась сделкой в CRM.',
          'Выберите, когда диалог переходит к команде, и включите сбор лидов для тех, кто пишет в Messenger.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Подключение',
            desc: 'Через вход в Facebook. Одна страница Facebook на одного ассистента.',
          },
          {
            term: 'Три точки контакта',
            desc: 'Диалоги в Messenger (включены по умолчанию), комментарии под постами (выключены, пока вы не включите) и заявки из лид-форм.',
          },
          {
            term: 'Данные из Lead Ads',
            desc: 'Имя, email и телефон из каждой заявки; все ответы, форма, объявление, группа объявлений и кампания сохраняются в сделке.',
          },
          {
            term: 'Интеграции',
            desc: 'Вебхуки ассистента для сообщений, сессий и лид-форм; n8n; Instagram, WhatsApp, Telegram и чат на сайте на том же ассистенте.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа и 200 кредитов; ИИ-ответ стоит 1 кредит. Сбор лидов и сценарии доступны на платных тарифах, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Ещё по теме',
        heading: 'Вокруг ассистента в Messenger',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Один ассистент для сайта, WhatsApp, Telegram, Instagram, Messenger, Slack и Discord.',
          },
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Messenger рядом с другими каналами в общем ящике входящих, с передачей диалога оператору.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты и сделки для каждого, кто написал или заполнил лид-форму.',
          },
          {
            path: '/automations',
            label: 'Автоматизации',
            desc: 'Сценарии, n8n и вебхуки на сообщения и лид-формы.',
          },
          {
            path: '/help-desk',
            label: 'Хелпдеск',
            desc: 'Передача оператору, маршрутизация и заявки в поддержку для диалогов, где нужен человек.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide и Tidio',
            desc: 'Два подхода к ИИ-чату на сайте и в Messenger, бок о бок.',
          },
        ],
      },
      faq: {
        heading: 'Чат-бот для Messenger: частые вопросы',
        items: [
          {
            q: 'Как подключить бота к странице Facebook?',
            a: 'Создайте ассистента в Fineguide, откройте Connect Apps, нажмите Connect Facebook и выберите страницу. После этого ассистент отвечает в Messenger по знаниям, которые вы ему дали.',
          },
          {
            q: 'Может ли бот в Messenger отвечать на комментарии к постам?',
            a: 'Да. Включите ответы на комментарии, и ассистент будет отвечать в ветке комментария. Команда Fineguide может также настроить ответ в личку с лайком и коротким ответом под комментарием.',
          },
          {
            q: 'Как передавать заявки из Facebook Lead Ads в CRM?',
            a: 'Подключите страницу и нажмите Connect lead forms или попросите команду Fineguide подключить формы вместе с вами. Каждая заявка станет сделкой в CRM со всеми ответами, объявлением и кампанией, откуда она пришла.',
          },
          {
            q: 'Может ли команда отвечать из Meta Business Suite?',
            a: 'Да. Ответ из входящих страницы или из Business Suite приходит клиенту как обычно, сохраняется в диалоге, и ассистент перестаёт отвечать в этом чате. Поставьте реакцию ✅ на сообщение, чтобы вернуть диалог ассистенту.',
          },
          {
            q: 'Что будет, если клиент попросит оператора?',
            a: 'Ассистент перестаёт отвечать, а диалог ждёт команду в «Сообщениях». Коллега отвечает из Fineguide, и ответ приходит клиенту в Messenger.',
          },
          {
            q: 'Есть ли бесплатный чат-бот для Messenger?',
            a: 'Можно начать с бесплатного тарифа: 200 кредитов и без карты, ИИ-ответ стоит 1 кредит. Сбор лидов и сценарии доступны на платных тарифах, начиная со Starter.',
          },
        ],
      },
      closing: {
        heading: 'Пусть страница в Facebook работает на вас.',
        body: 'Подключите страницу, научите ассистента вашим ответам и отправляйте каждое сообщение, комментарий и заявку из лид-формы в одну CRM.',
      },
    },
  },
};

export default solution;
