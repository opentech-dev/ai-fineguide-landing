import type { Solution } from './types';

const solution: Solution = {
  slug: 'industries/hotels-travel',
  image: 'channels-phone.jpg',
  imageAlt: {
    en: 'A hand holding a smartphone with an Instagram feed open, above a wooden table with a mug by a window',
    ro: 'O mână ține un telefon cu Instagram deschis, deasupra unei mese de lemn cu o cană, lângă fereastră',
    ru: 'Рука держит смартфон с открытой лентой Instagram над деревянным столом с кружкой у окна',
  },
  appName: 'Fineguide for hotels and travel',
  checked: '2026-11-25',
  reading: [
    '/blog/ai-customer-service-for-hotels-and-travel/',
    '/blog/ai-assistant-actions-call-your-systems/',
    '/blog/whatsapp-business-api-ai-assistant/',
    '/blog/instagram-messenger-comment-and-dm-automation/',
    '/blog/ai-email-assistant-shared-inbox/',
    '/blog/connect-ai-voice-agent-sip-pbx/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/actions/ActionsPage.tsx ("From a cURL command", "From n8n"), ActionFormView.tsx + SecretPanel.tsx (stored secrets sent only to their address), TestPanel.tsx',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx (Only what it has learned + reply to other questions; Lead collection behind canAccessLeadCollection; Fields a lead needs)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/variables/SessionVariablesPage.tsx (Text, Number, Yes or no, One of a list, Several from a list; example "How many guests")',
    'ai-backoffice-api apps/backoffice-api/src/modules/crm/lead/lead.service.ts createInternal (contact found or created by email then phone, collected values on the contact, conversation linked, follow-up task due in 24 hours when interested) + contact.service.ts findOrCreate / applyCollectedValues',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/voice/VoicePage.tsx (answering hours; outside hours ring / forward to another number / message + callback request; transfer to the team number any time or only in team hours; greet returning callers by name) + voiceCatalog.ts (14 languages), verified in landing call-center.ts; ai-backoffice-api voice.service.ts createCallbackTask',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx + messages/conversations/components/ChatWidget.tsx (Handoff briefing: summary + key facts)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/appearance/AppearancePage.tsx LANGUAGES (24 chat interface languages); assistant answers in the visitor\'s language (landing knowledge-base.ts sources)',
    'ai-backoffice-api prisma/schema.prisma EmailInbox aiMode OFF | DRAFT | AUTO (default OFF), aiReplyDelaySeconds 120, aiMaxRepliesPerThread 3; ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/AddMailboxPage.tsx (address Fineguide provides, or connect Google, Microsoft or any IMAP server)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/types.ts (WhatsApp, Telegram, Instagram, Facebook "Messenger conversations, comments and lead forms") + ConnectAppsPage.tsx InstagramPanel (direct messages on, "Reply to Instagram comments" off by default)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/LearningContextPage.tsx, DocumentContextSection.tsx, CustomAnswersSection.tsx, WebContextSection.tsx Keep in sync (plan-gated), verified in landing knowledge-base.ts',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/crm/pipelines/components/PipelineCreateView.tsx (own stages) + settings/integrations/CalendarPage.tsx (two-way Google Calendar task sync)',
    'ai-backoffice-api apps/backoffice-api/src/modules/workflow/templates/quote-request-from-chat.template.ts ("Quote request from a chat": task due in 2 hours, visitor emailed that the quote is on its way)',
    'ai-backoffice-api apps/backoffice-api/src/pricing/pricing-config.ts VOICE_CREDITS_PER_MIN aiGoogle 10 + MINIMUM_BILLABLE_SECONDS 60; AI reply 1 credit (landing help-desk.ts); BRIEF.md plan gating; free plan 200 credits, no card',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Chatbot for Hotels and Travel Agencies | Fineguide',
        description:
          'AI chatbot and concierge for hotels and travel agencies: answers guests in their language, checks availability in your booking system and saves group requests.',
      },
      hero: {
        eyebrow: 'For hotels and travel',
        title: 'Guests write at 2 a.m.',
        titleAccent: ' Your assistant answers.',
        subtitle:
          'An AI concierge answers guests and travellers on your website, WhatsApp, Instagram and the phone in their own language, checks availability in your booking system, and saves group and event requests in your CRM for your team.',
      },
      definition: {
        heading: 'What is an AI chatbot for hotels?',
        body:
          "An AI chatbot for hotels is an assistant that answers guests' questions about rooms, prices, transfers and policies at any hour and passes requests that need a person to staff. Fineguide's AI concierge answers guests of hotels, tour operators and travel agencies on the website chat, WhatsApp, Telegram, Instagram and Messenger, and on your own phone number over SIP in 14 languages, from your room pages, price lists and itineraries. Through an action it checks availability in your booking system, and requests with dates and group size are saved on CRM contacts for your sales team.",
      },
      capabilities: {
        eyebrow: 'How hotels and travel teams use it',
        heading: 'Four guest workflows, and the tools behind them.',
        body: 'A city hotel, a guesthouse, a tour operator and a travel agency build them from the same features.',
        items: [
          {
            term: 'Availability in the middle of the night',
            desc: "A guest asks at 02:10 for a twin room this weekend. An assistant action sends the dates and number of guests to your booking system's or channel manager's API and answers with what is free; where the system allows it, the action can create the booking too.",
          },
          {
            term: 'Group and event requests for sales',
            desc: 'A group of 14 asks about a conference package. The assistant collects the request type, dates, number of guests, budget and special requests and, on paid plans, saves them on the contact with the conversation and a follow-up task for the next day.',
          },
          {
            term: 'The night phone',
            desc: "The assistant answers your number over SIP and greets returning guests by first name. During reception hours it puts callers through to the desk; outside them it takes a callback request as a CRM task or forwards the call to the duty manager's number.",
          },
          {
            term: 'Changes and complaints to a person',
            desc: 'A cancelled flight, a complaint about a room or a change to an existing booking: describe these in your own words, and the conversation goes to your team in Messages with a summary and key facts while the assistant stops replying.',
          },
          {
            term: "In the guest's language",
            desc: "The assistant replies in the language the guest writes in, the chat window's buttons and labels can be shown in 24 languages, and phone calls run in 14.",
          },
          {
            term: 'The reservations mailbox',
            desc: 'Connect reservations@ and info@ to the shared Inbox. For each mailbox the AI stays off, writes drafts a person approves, or answers on its own after a 2-minute hold, up to 3 replies in one thread.',
          },
          {
            term: 'Answers from your own material',
            desc: 'Room and tour pages, season price lists, itineraries and house rules as documents, and exact answers for cancellation, deposit and check-in rules. On paid plans, your website is read again in the background, so a new season reaches the assistant on its own.',
          },
          {
            term: 'Instagram and Messenger',
            desc: 'Photos and offers bring people to your Instagram and Facebook page. The assistant answers their direct messages and Messenger chats and, when you switch it on, replies to comments under your posts.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your room pages to a concierge that never sleeps.',
        body: 'Get the common questions right first, then add availability.',
        items: [
          'Give the assistant your room or tour pages, price lists, itineraries and policies, with exact answers for cancellation and deposit rules.',
          'Connect the channels guests use: website chat, WhatsApp, Instagram, Messenger and your reservations mailbox.',
          'Add an action that checks availability in your booking system, and try it in the test panel.',
          'Add the fields a group request needs, such as dates and number of guests, and turn on lead collection.',
          'Connect your number over SIP and set reception hours, transfer and after-hours callbacks.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Channels',
            desc: 'Website chat, WhatsApp, Telegram, Instagram (messages and comments), Facebook Messenger, email in the shared Inbox and your phone number over SIP.',
          },
          {
            term: 'Languages',
            desc: "Chat replies in the guest's language. Phone calls in 14 languages, and the chat window's buttons and labels in 24.",
          },
          {
            term: 'Availability and booking',
            desc: 'Through an assistant action to your booking system or channel manager, built from a cURL command or an n8n workflow, with API keys kept as stored secrets.',
          },
          {
            term: 'Email',
            desc: 'Each mailbox starts with the AI off. Choose drafts a person approves, or replies after a 2-minute hold, up to 3 per thread.',
          },
          {
            term: 'Credits',
            desc: 'An AI chat reply is 1 credit. An AI phone call is 10 credits per answered minute, with a one-minute minimum.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits and no card. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind your concierge',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Assistants that answer on your website, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord.',
          },
          {
            path: '/voice-ai',
            label: 'AI Telephony',
            desc: 'The same assistant on live calls over your own phone number.',
          },
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Chats from every channel and your reservations email in one team inbox.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, deals on your own stages and tasks behind every booking request.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The room pages, price lists and itineraries your assistant answers from.',
          },
        ],
      },
      faq: {
        heading: 'AI chatbot for hotels and travel: common questions',
        items: [
          {
            q: 'What is an AI concierge for hotels?',
            a: "An AI concierge is an assistant that answers guests' questions about rooms, services and the area at any hour and passes requests that need staff to a person. Fineguide's concierge does this on the website chat, messaging apps, email and your phone number.",
          },
          {
            q: 'Can a hotel chatbot check room availability?',
            a: 'Yes. An assistant action sends the dates and number of guests to your booking system or channel manager and answers with what is free. It works with any system that has an API.',
          },
          {
            q: 'Can the chatbot take bookings?',
            a: 'Yes, if your booking system allows bookings through its API: the same kind of action can create one. Otherwise the assistant saves the request with dates and guests on a CRM contact, and your team confirms it.',
          },
          {
            q: 'Can an AI answer the hotel phone at night?',
            a: "Yes. Connect your number over SIP and the assistant answers in up to 14 languages. Outside reception hours it takes a callback request as a CRM task or forwards the call to the duty manager's number.",
          },
          {
            q: 'Is there a CRM for travel agencies?',
            a: 'Yes. Fineguide includes the CRM: contacts with what travellers told the assistant, deals on boards with your own stages, and tasks that sync both ways with Google Calendar.',
          },
          {
            q: "Does the chatbot speak my guests' languages?",
            a: "It replies in the language the guest writes in, from the material you gave it. The chat window's buttons and labels can be shown in 24 languages, and phone calls run in 14.",
          },
          {
            q: 'Do we need to change our booking software or phone system?',
            a: 'No. The assistant works with your booking system through an action and with your existing number over SIP.',
          },
        ],
      },
      closing: {
        heading: 'Answer the next guest who writes at night.',
        body: 'Give an assistant your room pages and policies, connect WhatsApp and ask it what guests ask. Or book a 30-minute demo and see chat, phone and availability on your own property.',
      },
    },

    ro: {
      meta: {
        title: 'Chatbot pentru hotel și CRM agenție de turism | Fineguide',
        description:
          'Chatbot pentru hotel și CRM pentru agenția de turism: asistentul AI răspunde oaspeților în limba lor, verifică disponibilitatea și salvează cererile de grup.',
      },
      hero: {
        eyebrow: 'Pentru hoteluri și turism',
        title: 'Oaspeții scriu la 2 noaptea.',
        titleAccent: ' Asistentul tău răspunde.',
        subtitle:
          'Un concierge AI răspunde oaspeților și turiștilor pe site, pe WhatsApp, pe Instagram și la telefon, în limba lor, verifică disponibilitatea în sistemul tău de rezervări și salvează cererile de grup și de evenimente în CRM, pentru echipă.',
      },
      definition: {
        heading: 'Ce este un chatbot pentru hotel?',
        body:
          'Un chatbot pentru hotel este un asistent care răspunde la orice oră la întrebările oaspeților despre camere, prețuri, transferuri și reguli și predă personalului cererile care au nevoie de un om. Concierge-ul AI Fineguide răspunde oaspeților hotelurilor, turoperatorilor și agențiilor de turism în chatul de pe site, pe WhatsApp, Telegram, Instagram și Messenger, și la numărul tău de telefon prin SIP, în 14 limbi, din paginile camerelor, listele de prețuri și programele circuitelor. Printr-o acțiune verifică disponibilitatea în sistemul tău de rezervări, iar cererile cu date și mărimea grupului se salvează pe contacte în CRM, pentru echipa de vânzări.',
      },
      capabilities: {
        eyebrow: 'Cum îl folosesc hotelurile și agențiile',
        heading: 'Patru situații cu oaspeții și instrumentele din spatele lor.',
        body: 'Un hotel de oraș, o pensiune, un turoperator și o agenție de turism le construiesc din aceleași funcții.',
        items: [
          {
            term: 'Disponibilitate în miez de noapte',
            desc: 'Un oaspete întreabă la 02:10 de o cameră twin pentru weekend. O acțiune a asistentului trimite datele și numărul de oaspeți către API-ul sistemului de rezervări sau al channel managerului și răspunde cu ce e liber; dacă sistemul permite, acțiunea poate face și rezervarea.',
          },
          {
            term: 'Cereri de grup și evenimente pentru vânzări',
            desc: 'Un grup de 14 persoane întreabă de un pachet pentru conferință. Asistentul adună tipul cererii, datele, numărul de persoane, bugetul și cerințele speciale și, pe planurile plătite, le salvează pe contact, cu conversația și o sarcină de revenire pentru a doua zi.',
          },
          {
            term: 'Telefonul de noapte',
            desc: 'Asistentul răspunde la numărul tău prin SIP și îi salută pe prenume pe oaspeții care revin. În orele recepției transferă apelul la recepție; în afara lor preia o cerere de revenire ca sarcină în CRM sau redirecționează apelul către numărul managerului de serviciu.',
          },
          {
            term: 'Modificări și reclamații, la un om',
            desc: 'Un zbor anulat, o reclamație despre cameră sau o modificare a unei rezervări: le descrii cu vorbele tale, iar conversația ajunge la echipă în Mesaje, cu un rezumat și faptele principale, în timp ce asistentul nu mai răspunde.',
          },
          {
            term: 'În limba oaspetelui',
            desc: 'Asistentul răspunde în limba în care scrie oaspetele, butoanele și textele ferestrei de chat pot fi afișate în 24 de limbi, iar apelurile merg în 14.',
          },
          {
            term: 'Căsuța de rezervări',
            desc: 'Conectezi reservations@ și info@ la Inbox-ul comun. Pentru fiecare căsuță, AI-ul rămâne oprit, scrie ciorne pe care le aprobă un om sau răspunde singur după o pauză de 2 minute, cel mult 3 răspunsuri într-un fir.',
          },
          {
            term: 'Răspunsuri din materialele tale',
            desc: 'Paginile camerelor și ale circuitelor, listele de prețuri de sezon, programele și regulile casei ca documente, plus răspunsuri exacte despre anulare, avans și check-in. Pe planurile plătite, site-ul se citește din nou în fundal, așa că noul sezon ajunge singur la asistent.',
          },
          {
            term: 'Instagram și Messenger',
            desc: 'Fotografiile și ofertele aduc oameni pe Instagram și pe pagina de Facebook. Asistentul răspunde la mesajele lor directe și în Messenger și, dacă activezi opțiunea, la comentariile de sub postări.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la paginile camerelor la un concierge care nu doarme.',
        body: 'Mai întâi întrebările frecvente, apoi disponibilitatea.',
        items: [
          'Îi dai asistentului paginile camerelor sau ale circuitelor, listele de prețuri, programele și regulile, cu răspunsuri exacte despre anulare și avans.',
          'Conectezi canalele pe care le folosesc oaspeții: chatul de pe site, WhatsApp, Instagram, Messenger și căsuța de rezervări.',
          'Adaugi o acțiune care verifică disponibilitatea în sistemul de rezervări și o încerci în panoul de test.',
          'Adaugi câmpurile unei cereri de grup, cum ar fi datele și numărul de persoane, și activezi colectarea de lead-uri.',
          'Conectezi numărul prin SIP și setezi orele recepției, transferul și cererile de revenire în afara programului.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Canale',
            desc: 'Chatul de pe site, WhatsApp, Telegram, Instagram (mesaje și comentarii), Facebook Messenger, emailul în Inbox-ul comun și numărul tău de telefon prin SIP.',
          },
          {
            term: 'Limbi',
            desc: 'În chat răspunde în limba oaspetelui. Apelurile, în 14 limbi, iar butoanele și textele ferestrei de chat, în 24.',
          },
          {
            term: 'Disponibilitate și rezervări',
            desc: 'Printr-o acțiune a asistentului către sistemul de rezervări sau channel manager, construită dintr-o comandă cURL sau un flux n8n, cu cheile API păstrate ca secrete salvate.',
          },
          {
            term: 'Email',
            desc: 'Fiecare căsuță pornește cu AI-ul oprit. Alegi ciorne aprobate de un om sau răspunsuri după o pauză de 2 minute, cel mult 3 într-un fir.',
          },
          {
            term: 'Credite',
            desc: 'Un răspuns AI în chat costă 1 credit. Un apel AI costă 10 credite pe minut convorbit, cu minimum un minut.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite și fără card. Colectarea de lead-uri și fluxurile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Modulele din spatele concierge-ului',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Asistenți care răspund pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
          },
          {
            path: '/voice-ai',
            label: 'Telefonie AI',
            desc: 'Același asistent în apeluri live, pe numărul tău de telefon.',
          },
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Chaturile din toate canalele și emailul de rezervări într-un inbox comun al echipei.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, oportunități pe etapele tale și sarcini în spatele fiecărei cereri de rezervare.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile camerelor, listele de prețuri și programele din care răspunde asistentul.',
          },
        ],
      },
      faq: {
        heading: 'Chatbot pentru hotel și turism: întrebări frecvente',
        items: [
          {
            q: 'Ce este un concierge AI pentru hotel?',
            a: 'Un concierge AI este un asistent care răspunde la orice oră la întrebările oaspeților despre camere, servicii și împrejurimi și predă unui om cererile care au nevoie de personal. Concierge-ul Fineguide face asta în chatul de pe site, în aplicațiile de mesagerie, pe email și la numărul tău de telefon.',
          },
          {
            q: 'Poate un chatbot pentru hotel să verifice camerele libere?',
            a: 'Da. O acțiune a asistentului trimite datele și numărul de oaspeți către sistemul de rezervări sau channel manager și răspunde cu ce e liber. Funcționează cu orice sistem care are API.',
          },
          {
            q: 'Poate chatbotul să facă rezervări?',
            a: 'Da, dacă sistemul tău de rezervări permite rezervări prin API: același tip de acțiune poate crea una. Altfel, asistentul salvează cererea cu datele și numărul de oaspeți pe un contact din CRM, iar echipa o confirmă.',
          },
          {
            q: 'Poate un asistent AI să răspundă noaptea la telefonul hotelului?',
            a: 'Da. Conectezi numărul prin SIP, iar asistentul răspunde în până la 14 limbi. În afara orelor recepției preia o cerere de revenire ca sarcină în CRM sau redirecționează apelul către managerul de serviciu.',
          },
          {
            q: 'Există un CRM pentru agenții de turism?',
            a: 'Da. Fineguide include CRM-ul: contacte cu ce i-au spus turiștii asistentului, oportunități pe table cu etapele tale și sarcini sincronizate în ambele sensuri cu Google Calendar.',
          },
          {
            q: 'Vorbește chatbotul limbile oaspeților mei?',
            a: 'Răspunde în limba în care scrie oaspetele, din materialele pe care i le-ai dat. Butoanele și textele ferestrei de chat pot fi afișate în 24 de limbi, iar apelurile merg în 14.',
          },
          {
            q: 'Trebuie să schimbăm sistemul de rezervări sau telefonia?',
            a: 'Nu. Asistentul lucrează cu sistemul tău de rezervări printr-o acțiune și cu numărul tău actual prin SIP.',
          },
        ],
      },
      closing: {
        heading: 'Răspunde următorului oaspete care scrie noaptea.',
        body: 'Dă-i unui asistent paginile camerelor și regulile, conectează WhatsApp și întreabă-l ce întreabă oaspeții. Sau programează un demo de 30 de minute și vezi chatul, telefonul și disponibilitatea pe hotelul tău.',
      },
    },

    ru: {
      meta: {
        title: 'Чат-бот для отеля и CRM для турагентства | Fineguide',
        description:
          'Чат-бот для отеля и CRM для турагентства: ИИ-ассистент отвечает гостям на их языке, проверяет свободные номера в вашей системе и сохраняет групповые заявки.',
      },
      hero: {
        eyebrow: 'Для отелей и туризма',
        title: 'Гости пишут в 2 часа ночи.',
        titleAccent: ' Ваш ассистент отвечает.',
        subtitle:
          'ИИ-консьерж отвечает гостям и туристам на сайте, в WhatsApp, Instagram и по телефону на их языке, проверяет свободные номера в вашей системе бронирования и сохраняет групповые запросы и заявки на мероприятия в CRM для вашей команды.',
      },
      definition: {
        heading: 'Что такое чат-бот для отеля?',
        body:
          'Чат-бот для отеля представляет собой ассистента, который в любое время отвечает на вопросы гостей о номерах, ценах, трансферах и правилах и передаёт сотрудникам запросы, где нужен человек. ИИ-консьерж Fineguide отвечает гостям отелей, туроператоров и турагентств в чате на сайте, в WhatsApp, Telegram, Instagram и Messenger, а также на вашем номере телефона через SIP на 14 языках, по страницам номеров, прайсам и программам туров. Через действие он проверяет наличие мест в вашей системе бронирования, а запросы с датами и размером группы сохраняются в контактах CRM для отдела продаж.',
      },
      capabilities: {
        eyebrow: 'Как это используют отели и турагентства',
        heading: 'Четыре сценария работы с гостями и инструменты за ними.',
        body: 'Городской отель, гостевой дом, туроператор и турагентство собирают их из одних и тех же функций.',
        items: [
          {
            term: 'Свободные номера среди ночи',
            desc: 'Гость в 02:10 спрашивает о номере твин на выходные. Действие ассистента отправляет даты и число гостей в API вашей системы бронирования или channel manager и отвечает, что свободно; если система позволяет, действие может и забронировать номер.',
          },
          {
            term: 'Групповые запросы и мероприятия для продаж',
            desc: 'Группа из 14 человек спрашивает о пакете для конференции. Ассистент собирает тип запроса, даты, число гостей, бюджет и особые пожелания и на платных тарифах сохраняет их в контакте вместе с перепиской и задачей связаться на следующий день.',
          },
          {
            term: 'Ночной телефон',
            desc: 'Ассистент отвечает на ваш номер через SIP и приветствует вернувшихся гостей по имени. В часы работы ресепшена он соединяет звонящего со стойкой, а в остальное время принимает заявку на обратный звонок как задачу в CRM или переводит звонок на номер дежурного менеджера.',
          },
          {
            term: 'Изменения и жалобы передаются человеку',
            desc: 'Отменённый рейс, жалоба на номер или изменение брони: опишите такие случаи своими словами, и диалог уйдёт команде в раздел «Сообщения» с кратким изложением и ключевыми фактами, а ассистент перестанет отвечать.',
          },
          {
            term: 'На языке гостя',
            desc: 'Ассистент отвечает на том языке, на котором пишет гость, кнопки и надписи окна чата можно показать на 24 языках, а звонки идут на 14.',
          },
          {
            term: 'Почта бронирования',
            desc: 'Подключите reservations@ и info@ к общему ящику входящих. Для каждого ящика ИИ выключен, пишет черновики, которые утверждает сотрудник, или отвечает сам после 2-минутной паузы, не больше 3 ответов в одной переписке.',
          },
          {
            term: 'Ответы по вашим материалам',
            desc: 'Страницы номеров и туров, сезонные прайсы, программы и правила проживания в виде документов, а также точные ответы об отмене, предоплате и заезде. На платных тарифах сайт перечитывается в фоне, и новый сезон доходит до ассистента сам.',
          },
          {
            term: 'Instagram и Messenger',
            desc: 'Фото и предложения приводят людей в ваш Instagram и на страницу Facebook. Ассистент отвечает им в директ и в Messenger, а если вы это включите, и на комментарии под постами.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От страниц номеров до консьержа, который не спит.',
        body: 'Сначала точные ответы на частые вопросы, затем проверка свободных мест.',
        items: [
          'Дайте ассистенту страницы номеров или туров, прайсы, программы и правила, с точными ответами об отмене и предоплате.',
          'Подключите каналы, которыми пользуются гости: чат на сайте, WhatsApp, Instagram, Messenger и почту бронирования.',
          'Добавьте действие, которое проверяет свободные места в системе бронирования, и проверьте его в тестовой панели.',
          'Добавьте поля группового запроса, например даты и число гостей, и включите сбор лидов.',
          'Подключите номер через SIP и задайте часы ресепшена, перевод звонка и обратные звонки в нерабочее время.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Каналы',
            desc: 'Чат на сайте, WhatsApp, Telegram, Instagram (директ и комментарии), Facebook Messenger, почта в общем ящике входящих и ваш номер телефона через SIP.',
          },
          {
            term: 'Языки',
            desc: 'В чате ассистент отвечает на языке гостя. Звонки на 14 языках, кнопки и надписи окна чата на 24 языках.',
          },
          {
            term: 'Наличие мест и бронирование',
            desc: 'Через действие ассистента в вашей системе бронирования или channel manager, собранное из cURL-команды или сценария n8n, ключи API хранятся как секреты.',
          },
          {
            term: 'Почта',
            desc: 'Каждый ящик начинает работу с выключенным ИИ. Выберите черновики, которые утверждает сотрудник, или ответы после 2-минутной паузы, не больше 3 на переписку.',
          },
          {
            term: 'Кредиты',
            desc: 'ИИ-ответ в чате стоит 1 кредит. ИИ-звонок стоит 10 кредитов за минуту разговора, минимум одна минута.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа: 200 кредитов, без карты. Сбор лидов и сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Модули, на которых работает консьерж',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Ассистенты, которые отвечают на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack и Discord.',
          },
          {
            path: '/voice-ai',
            label: 'ИИ-телефония',
            desc: 'Тот же ассистент в живых звонках на вашем номере телефона.',
          },
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Чаты из всех каналов и почта бронирования в общем ящике команды.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, сделки по вашим этапам и задачи за каждым запросом на бронирование.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы номеров, прайсы и программы туров, по которым отвечает ассистент.',
          },
        ],
      },
      faq: {
        heading: 'Чат-бот для отеля и турагентства: частые вопросы',
        items: [
          {
            q: 'Что такое ИИ-консьерж для отеля?',
            a: 'ИИ-консьерж представляет собой ассистента, который в любое время отвечает на вопросы гостей о номерах, услугах и окрестностях и передаёт человеку запросы, где нужен сотрудник. Консьерж Fineguide делает это в чате на сайте, в мессенджерах, в почте и на вашем номере телефона.',
          },
          {
            q: 'Может ли чат-бот для отеля проверять свободные номера?',
            a: 'Да. Действие ассистента отправляет даты и число гостей в вашу систему бронирования или channel manager и отвечает, что свободно. Подходит любая система с API.',
          },
          {
            q: 'Может ли чат-бот принимать бронирования?',
            a: 'Да, если ваша система бронирования принимает брони через API: такое же действие может создать бронь. Иначе ассистент сохраняет запрос с датами и числом гостей в контакте CRM, а команда подтверждает его.',
          },
          {
            q: 'Может ли ИИ отвечать на звонки в отель ночью?',
            a: 'Да. Подключите номер через SIP, и ассистент будет отвечать на 14 языках. Вне часов ресепшена он принимает заявку на обратный звонок как задачу в CRM или переводит звонок на дежурного менеджера.',
          },
          {
            q: 'Есть ли CRM для турагентства?',
            a: 'Да. CRM входит в Fineguide: контакты с тем, что туристы рассказали ассистенту, сделки на досках с вашими этапами и задачи с двусторонней синхронизацией Google Calendar.',
          },
          {
            q: 'Говорит ли чат-бот на языках моих гостей?',
            a: 'Он отвечает на языке, на котором пишет гость, по материалам, которые вы ему дали. Кнопки и надписи окна чата можно показать на 24 языках, а звонки идут на 14.',
          },
          {
            q: 'Нужно ли менять систему бронирования или телефонию?',
            a: 'Нет. Ассистент работает с вашей системой бронирования через действие и с вашим текущим номером через SIP.',
          },
        ],
      },
      closing: {
        heading: 'Ответьте следующему гостю, который напишет ночью.',
        body: 'Дайте ассистенту страницы номеров и правила, подключите WhatsApp и спросите его то, что спрашивают гости. Или запишитесь на 30-минутное демо и посмотрите чат, телефон и проверку мест на примере вашего отеля.',
      },
    },
  },
};

export default solution;
