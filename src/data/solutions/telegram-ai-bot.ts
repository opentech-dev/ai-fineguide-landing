import type { Solution } from './types';

const solution: Solution = {
  slug: 'telegram-ai-bot',
  image: 'account-review.jpg',
  imageAlt: {
    en: 'Two colleagues smiling over a notebook at a sunny office desk, a laptop open in front of them',
    ro: 'Doi colegi zâmbesc aplecați peste un caiet, la un birou însorit, cu un laptop deschis în fața lor',
    ru: 'Двое коллег с улыбкой склонились над блокнотом за столом в солнечном офисе, перед ними открытый ноутбук',
  },
  appName: 'Fineguide for Telegram',
  checked: '2026-11-25',
  reading: [
    '/blog/telegram-bot-for-business/',
    '/blog/session-variables-chat-to-crm-data/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/omnichannel-team-inbox/',
    '/blog/chatbot-vs-ai-agent/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/ConnectAppsPage.tsx TelegramPanel (origin/main): connection type "Bot account" / "Real account"; bot: @BotFather /newbot, paste Bot Token, shows bot name and @username; real account: Phone -> Code ("Telegram sent a code ... Check the Telegram app or your SMS") -> 2FA password; "The AI replies as <name> on Telegram"; "Only connect an account you own and have consent to automate"',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/ConnectAppsPage.tsx REPLY_POLICY_ROWS + TelegramUserSettings ("Answer private messages", "Answer in groups and channels", "Only when tagged: Stay quiet unless someone @-mentions this account or replies to it"; saves on change)',
    'ai-backoffice-api apps/backoffice-api/src/modules/integration/helpers/telegram-user.service.ts: DEFAULT_REPLY_POLICY { allowPrivate: true, allowGroups: false, requireMention: true }; startListening routes private chats / groups by policy; isAddressedToUs (@username word-boundary match or reply to one of the account\'s own messages)',
    'ai-backoffice-api apps/backoffice-api/src/modules/integration/helpers/telegram.service.ts (getMe validates the token; setWebhook to {chat}/v2/telegram/webhook/{botId} set automatically)',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/telegram/transformer.ts (text or caption; photo / document / video / voice as attachments; sender first name, last name, @username) + messenger.ts (sendChatAction "typing" on typing_on; sendMessage)',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/telegram-user/transformer.ts (session key = chat id: "a group and a DM from the same person stay distinct sessions"; firstName / lastName / username) + messenger.ts (operator- or socket-published replies relayed to the chat)',
    'ai-backoffice-api apps/chat-api/src/_v2/messaging/channel-identity.ts (telegram / telegram_user: display name from first + last name, @username) + apps/backoffice-api/src/modules/bot/session/session-participant.service.ts CHANNEL_ALIASES (TELEGRAM_USER -> TELEGRAM) + channel-contact.service.ts linkSessionContact (TELEGRAM is an identifying channel; one contact per organization + channel + user id; duplicate rescan queued)',
    'ai-backoffice-frontend apps/ai-workspace/src/components/contact/ContactChannels.tsx (Telegram row "@username", t.me link) + modules/crm/contacts/components/tabs/ConversationsTab.tsx',
    'ai-backoffice-api apps/chat-api/src/_v2/messaging/human-reply-service.ts + conversation-orchestrator.ts (handover; operator replies published to the channel) + ai-backoffice-frontend modules/agents/handoff/HumanHandoffPage.tsx',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx Lead collection (fields, when to ask, saved once required fields are collected; plan-gated crm.lead-collection) + ai-gptcrawler api/gptchat.py allowLeadCollection (channel-independent)',
    'ai-backoffice-api apps/backoffice-api/src/modules/workflow/workflow-trigger.router.ts (ASSISTANT_INFO_COLLECTED, CONTACT_CREATED_FROM_SESSION) + ai-backoffice-frontend modules/agents/webhooks/types.ts (MESSAGE, VARIABLE_UPDATE)',
    'ai-fineguide-landing src/i18n/en.ts pricing (1 credit per AI reply, Messages use none, free plan 200 credits); llms.txt ("Telegram (a bot or a Telegram user account)")',
  ],
  copy: {
    en: {
      meta: {
        title: 'Telegram AI Bot for Business, with CRM | Fineguide',
        description:
          'Telegram AI bot for business: connect a bot or your own Telegram account, answer private messages and groups with AI, and save every customer to the CRM.',
      },
      hero: {
        eyebrow: 'Telegram AI bot',
        title: 'Telegram chats answered,',
        titleAccent: ' as a bot or as you.',
        subtitle:
          'Connect a Telegram bot in a minute, or let an AI assistant answer from a real Telegram account in private messages and groups. Every person who writes becomes a CRM contact, and your team can take over at any time.',
      },
      definition: {
        heading: 'What is a Telegram AI bot for business?',
        body:
          "A Telegram AI bot for business is a Telegram account that answers customers automatically, using AI to understand questions written in their own words instead of fixed commands. Fineguide connects Telegram in two ways: a bot made with @BotFather, set up by pasting its token, or a real Telegram account signed in with its phone number, which can answer private messages, groups and channels, or only when someone tags it. Either way the assistant answers from your knowledge, saves each person as a CRM contact with their Telegram name and @username, and hands the chat to your team in Messages when a person is needed.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'A Telegram chatbot that knows your business.',
        body:
          'Pick the connection that fits: a branded bot for support and sales, or the account your customers already write to.',
        items: [
          {
            term: 'Bot account',
            desc: "Create a bot with @BotFather, paste its token, and Fineguide connects it to Telegram for you. Customers write to the bot's @username, and Telegram shows \"typing…\" while the assistant writes its answer.",
          },
          {
            term: 'AI assistant on a Telegram account',
            desc: 'Sign in an existing Telegram account with its phone number, the code Telegram sends and, if you use one, its two-step verification password. The assistant replies as that account, so customers keep writing to the name they already know.',
          },
          {
            term: 'Private messages, groups and channels',
            desc: 'For a real account you choose where the assistant answers: private messages, the groups and channels the account has joined, or both. Each switch saves the moment you change it.',
          },
          {
            term: 'Only when tagged',
            desc: 'In groups, the account can stay quiet unless someone @-mentions it or replies to one of its messages. A group chat and a private chat with the same person are kept as separate conversations.',
          },
          {
            term: 'Every chat on a CRM contact',
            desc: "The first message creates a contact with the person's Telegram name and @username, linked to the conversation, with a link that opens their Telegram profile. Someone who writes again lands on the same contact.",
          },
          {
            term: 'Leads while the chat runs',
            desc: 'With lead collection on, the assistant asks for the details you choose, such as name, phone, budget or the course or service they want, and saves a lead in the CRM once the required fields are in.',
          },
          {
            term: 'Handover to your team',
            desc: 'When the customer asks for a person, or the chat matches a situation you described in your own words, the assistant stops and the chat waits in Messages. Your operator answers from Fineguide, and the reply arrives in the same Telegram chat.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to connect',
        heading: 'Two ways to start, both in a few minutes.',
        body: 'Use a bot for a new, clearly branded assistant, and a real account when customers already know the number or you answer in community groups.',
        items: [
          'Create an assistant and give it your website pages, documents and FAQ.',
          'Open Connect Apps for that assistant, choose Telegram, then Bot account or Real account.',
          'For a bot, paste the token from @BotFather. For a real account you own, enter its phone number, the code from Telegram and the 2FA password if you use one.',
          'For a real account, choose private messages, groups and channels, and whether it answers only when tagged.',
          'Turn on lead collection and handover, then follow every chat in Messages and on the CRM contact.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Connection types',
            desc: '2: a Bot account (token from @BotFather) or a Real account (phone number, confirmation code, 2FA password if set).',
          },
          {
            term: 'Where a real account answers',
            desc: 'Private messages, groups and channels it has joined, and in groups only when @-mentioned or replied to. Out of the box it answers private messages only.',
          },
          {
            term: 'On the contact',
            desc: "Telegram name and @username with a t.me link, and every conversation on the contact's Conversations tab, next to deals, tasks and calls.",
          },
          {
            term: 'Same assistant elsewhere',
            desc: 'The assistant that answers on Telegram can also answer in your website chat widget, on WhatsApp, Instagram, Messenger, Slack and Discord, from the same knowledge.',
          },
          {
            term: 'Plans and credits',
            desc: "Start on the free plan with 200 credits. Each AI reply is 1 credit; your team's replies in Messages use none. Lead collection and workflows come with paid plans, from the Starter plan.",
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'What works behind your Telegram assistant',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Persona, knowledge, session variables, actions and handover for every channel.',
          },
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Telegram next to your other chat channels and email, in one team inbox.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, deals and tasks, with the Telegram handle on every record.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The pages, documents and FAQ your assistant answers from.',
          },
          {
            path: '/automations',
            label: 'Automations',
            desc: 'Workflows, n8n and webhooks that act on what the assistant collects.',
          },
        ],
      },
      faq: {
        heading: 'Telegram AI bot: common questions',
        items: [
          {
            q: 'How do I make a Telegram AI bot for my business?',
            a: 'Create a bot with @BotFather, copy its token, and paste it into Connect Apps for your Fineguide assistant. Fineguide sets up the connection with Telegram, and the assistant answers from your knowledge from the first message.',
          },
          {
            q: 'Can an AI assistant answer from my own Telegram account?',
            a: 'Yes. Choose Real account, enter the phone number of an account you own, the code Telegram sends and your 2FA password if you use one. The assistant then replies as that account.',
          },
          {
            q: 'Can the Telegram bot answer in groups?',
            a: 'Yes, with a real account. Turn on answers in groups and channels, and keep "Only when tagged" on if it should reply only when someone @-mentions the account or replies to it.',
          },
          {
            q: 'How do I set up an auto-reply in Telegram?',
            a: 'Connect your Telegram bot or account to a Fineguide assistant. Instead of one fixed auto-reply, the assistant answers each question from your pages, documents and FAQ, day and night.',
          },
          {
            q: 'Is there a CRM with Telegram integration?',
            a: "Yes. In Fineguide each person who writes on Telegram becomes a CRM contact with their name and @username, the conversation sits on the contact's record, and leads collected in the chat land in the same CRM.",
          },
          {
            q: 'Can a person take over a Telegram chat from the bot?',
            a: 'Yes. When the customer asks for a person or a situation you described comes up, the assistant stops and the chat waits in Messages; your operator replies from Fineguide into the same Telegram chat.',
          },
          {
            q: 'What is the difference between a bot account and a real account?',
            a: 'A bot account is a separate bot customers write to by its @username. A real account is an existing Telegram profile: the assistant replies as that person, in private messages and, if you allow it, in groups and channels.',
          },
        ],
      },
      closing: {
        heading: 'Put AI on Telegram today.',
        body: 'Create an assistant, connect a bot or your Telegram account, and send it a question from your phone. Or book a 30-minute demo and see Telegram, Messages and the CRM work together.',
      },
    },

    ro: {
      meta: {
        title: 'Bot Telegram AI pentru afaceri, cu CRM | Fineguide',
        description:
          'Bot Telegram AI pentru afaceri: conectezi un bot sau propriul cont Telegram, răspunzi cu AI în mesaje private și în grupuri și salvezi fiecare client în CRM.',
      },
      hero: {
        eyebrow: 'Bot Telegram AI',
        title: 'Răspunsuri pe Telegram,',
        titleAccent: ' ca bot sau în numele tău.',
        subtitle:
          'Conectezi un bot de Telegram într-un minut sau lași asistentul AI să răspundă de pe un cont Telegram real, în mesaje private și în grupuri. Fiecare persoană care scrie devine contact în CRM, iar echipa poate prelua discuția oricând.',
      },
      definition: {
        heading: 'Ce este un bot Telegram AI pentru afaceri?',
        body:
          'Un bot Telegram AI pentru afaceri este un cont de Telegram care răspunde automat clienților și folosește AI ca să înțeleagă întrebările scrise cu cuvintele lor, nu doar comenzi fixe. Fineguide conectează Telegram în două feluri: un bot creat cu @BotFather, adăugat prin lipirea tokenului, sau un cont Telegram real, conectat cu numărul de telefon, care poate răspunde în mesaje private, în grupuri și canale ori doar când e menționat. În ambele cazuri asistentul răspunde din cunoștințele tale, salvează fiecare persoană ca un contact în CRM, cu numele și @username-ul de Telegram, și predă conversația echipei în Mesaje când e nevoie de un om.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Un chatbot de Telegram care îți cunoaște afacerea.',
        body:
          'Alegi conexiunea potrivită: un bot cu numele brandului pentru suport și vânzări sau contul căruia clienții îi scriu deja.',
        items: [
          {
            term: 'Cont de bot',
            desc: 'Creezi un bot cu @BotFather, lipești tokenul, iar Fineguide îl conectează la Telegram în locul tău. Clienții scriu la @username-ul botului, iar Telegram arată „scrie…” cât timp asistentul scrie răspunsul.',
          },
          {
            term: 'Asistent AI pe contul Telegram',
            desc: 'Conectezi un cont Telegram existent cu numărul de telefon, codul trimis de Telegram și, dacă îl folosești, parola de verificare în doi pași. Asistentul răspunde în numele acelui cont, așa că clienții scriu în continuare persoanei pe care o cunosc.',
          },
          {
            term: 'Mesaje private, grupuri și canale',
            desc: 'Pentru un cont real alegi unde răspunde asistentul: în mesaje private, în grupurile și canalele în care e membru contul sau în ambele. Fiecare comutator se salvează imediat.',
          },
          {
            term: 'Doar când e menționat',
            desc: 'În grupuri, contul poate tăcea până când cineva îl menționează cu @ sau răspunde la unul dintre mesajele lui. Un chat de grup și un chat privat cu aceeași persoană rămân conversații separate.',
          },
          {
            term: 'Fiecare conversație pe un contact',
            desc: 'Primul mesaj creează un contact cu numele de Telegram și @username-ul persoanei, legat de conversație, cu un link spre profilul ei de Telegram. Cine scrie din nou ajunge pe același contact.',
          },
          {
            term: 'Lead-uri în timpul conversației',
            desc: 'Cu colectarea lead-urilor pornită, asistentul cere datele pe care le alegi tu, de exemplu numele, telefonul, bugetul sau cursul ori serviciul dorit, și salvează un lead în CRM după ce are câmpurile obligatorii.',
          },
          {
            term: 'Preluare de către echipă',
            desc: 'Când clientul cere un om sau conversația se potrivește cu o situație descrisă de tine, asistentul se oprește, iar chatul așteaptă în Mesaje. Operatorul răspunde din Fineguide, iar mesajul ajunge în același chat de Telegram.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum conectezi',
        heading: 'Două moduri de a începe, ambele în câteva minute.',
        body: 'Alegi un bot pentru un asistent nou, cu numele brandului, și un cont real când clienții știu deja numărul sau când răspunzi în grupuri de comunitate.',
        items: [
          'Creezi un asistent și îi dai paginile site-ului, documentele și întrebările frecvente.',
          'Deschizi Connect Apps pentru acel asistent, alegi Telegram, apoi Bot account sau Real account.',
          'Pentru un bot, lipești tokenul de la @BotFather. Pentru un cont real care îți aparține, introduci numărul de telefon, codul de la Telegram și parola 2FA, dacă o folosești.',
          'Pentru un cont real, alegi mesajele private, grupurile și canalele și dacă răspunde doar când e menționat.',
          'Pornești colectarea lead-urilor și preluarea de către operator, apoi urmărești fiecare conversație în Mesaje și pe contactul din CRM.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Tipuri de conexiune',
            desc: '2: cont de bot (token de la @BotFather) sau cont real (număr de telefon, cod de confirmare, parolă 2FA, dacă e setată).',
          },
          {
            term: 'Unde răspunde un cont real',
            desc: 'În mesaje private, în grupurile și canalele în care e membru, iar în grupuri doar când e menționat sau când i se răspunde. Implicit răspunde doar în mesaje private.',
          },
          {
            term: 'Pe contact',
            desc: 'Numele de Telegram și @username-ul, cu link t.me, plus toate conversațiile în fila Conversații a contactului, lângă oportunități, sarcini și apeluri.',
          },
          {
            term: 'Același asistent și în alte canale',
            desc: 'Asistentul de pe Telegram poate răspunde și în chatul de pe site, pe WhatsApp, Instagram, Messenger, Slack și Discord, din aceleași cunoștințe.',
          },
          {
            term: 'Planuri și credite',
            desc: 'Începi pe planul gratuit, cu 200 de credite. Fiecare răspuns AI costă 1 credit; răspunsurile echipei din Mesaje nu consumă credite. Colectarea lead-urilor și workflow-urile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Ce lucrează în spatele asistentului de pe Telegram',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Personalitate, cunoștințe, variabile de sesiune, acțiuni și predare către un om, pentru fiecare canal.',
          },
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Telegram alături de celelalte canale de chat și de email, într-un inbox comun al echipei.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, oportunități și sarcini, cu contul de Telegram pe fiecare fișă.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile, documentele și întrebările frecvente din care răspunde asistentul.',
          },
          {
            path: '/automations',
            label: 'Automatizări',
            desc: 'Workflow-uri, n8n și webhook-uri care folosesc datele strânse de asistent.',
          },
        ],
      },
      faq: {
        heading: 'Bot Telegram AI: întrebări frecvente',
        items: [
          {
            q: 'Cum fac un bot Telegram AI pentru afacerea mea?',
            a: 'Creezi un bot cu @BotFather, copiezi tokenul și îl lipești în Connect Apps, la asistentul tău din Fineguide. Fineguide face conexiunea cu Telegram, iar asistentul răspunde din cunoștințele tale de la primul mesaj.',
          },
          {
            q: 'Poate un asistent AI să răspundă de pe contul meu de Telegram?',
            a: 'Da. Alegi Real account, introduci numărul unui cont care îți aparține, codul trimis de Telegram și parola 2FA, dacă o folosești. Apoi asistentul răspunde în numele acelui cont.',
          },
          {
            q: 'Poate botul de Telegram să răspundă în grupuri?',
            a: 'Da, cu un cont real. Pornești răspunsurile în grupuri și canale și lași activ „Only when tagged” dacă vrei să răspundă doar când cineva îl menționează cu @ sau îi răspunde la un mesaj.',
          },
          {
            q: 'Cum setez un răspuns automat pe Telegram?',
            a: 'Conectezi botul sau contul de Telegram la un asistent Fineguide. În loc de un singur mesaj automat, asistentul răspunde la fiecare întrebare din paginile, documentele și întrebările tale frecvente, zi și noapte.',
          },
          {
            q: 'Există un CRM cu Telegram?',
            a: 'Da. În Fineguide fiecare persoană care scrie pe Telegram devine contact în CRM, cu numele și @username-ul ei, conversația stă pe fișa contactului, iar lead-urile strânse în chat ajung în același CRM.',
          },
          {
            q: 'Poate un om să preia conversația de la bot?',
            a: 'Da. Când clientul cere un om sau apare o situație descrisă de tine, asistentul se oprește, iar chatul așteaptă în Mesaje; operatorul răspunde din Fineguide în același chat de Telegram.',
          },
          {
            q: 'Care e diferența dintre un cont de bot și un cont real?',
            a: 'Contul de bot este un bot separat, căruia clienții îi scriu la @username. Contul real este un profil Telegram existent: asistentul răspunde în numele acelei persoane, în mesaje private și, dacă permiți, în grupuri și canale.',
          },
        ],
      },
      closing: {
        heading: 'Pune AI pe Telegram de azi.',
        body: 'Creează un asistent, conectează un bot sau contul tău de Telegram și trimite-i o întrebare de pe telefon. Sau programează un demo de 30 de minute și vezi cum lucrează împreună Telegram, Mesajele și CRM-ul.',
      },
    },

    ru: {
      meta: {
        title: 'ИИ-бот для Telegram для бизнеса, с CRM | Fineguide',
        description:
          'ИИ-бот для Telegram: подключите бота или свой аккаунт Telegram, отвечайте с ИИ в личных сообщениях и группах и сохраняйте каждого клиента в CRM.',
      },
      hero: {
        eyebrow: 'ИИ-бот для Telegram',
        title: 'Ответы в Telegram',
        titleAccent: ' от бота или от вашего имени.',
        subtitle:
          'Подключите Telegram-бота за минуту или дайте ИИ-ассистенту отвечать из настоящего аккаунта Telegram в личных сообщениях и группах. Каждый, кто написал, становится контактом в CRM, а команда может подключиться к диалогу в любой момент.',
      },
      definition: {
        heading: 'Что такое ИИ-бот для Telegram?',
        body:
          'ИИ-бот для Telegram представляет собой аккаунт Telegram, который автоматически отвечает клиентам и с помощью ИИ понимает вопросы, написанные своими словами, а не только фиксированные команды. Fineguide подключает Telegram двумя способами: бот, созданный через @BotFather и подключённый по токену, или настоящий аккаунт Telegram, подключённый по номеру телефона, который отвечает в личных сообщениях, в группах и каналах или только когда его упомянули. В обоих случаях ассистент отвечает по вашей базе знаний, сохраняет каждого собеседника как контакт в CRM с именем и @username в Telegram и передаёт диалог команде в разделе «Сообщения», когда нужен человек.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'Чат-бот Telegram для бизнеса, обученный на ваших данных.',
        body:
          'Выберите подходящее подключение: фирменного бота для поддержки и продаж или аккаунт, которому клиенты уже пишут.',
        items: [
          {
            term: 'Аккаунт бота',
            desc: 'Создайте бота в @BotFather, вставьте его токен, и Fineguide сам подключит его к Telegram. Клиенты пишут на @username бота, а Telegram показывает «печатает…», пока ассистент пишет ответ.',
          },
          {
            term: 'ИИ-ассистент в личном аккаунте Telegram',
            desc: 'Подключите существующий аккаунт Telegram по номеру телефона, коду из Telegram и, если он включён, паролю двухэтапной проверки. Ассистент отвечает от имени этого аккаунта, и клиенты продолжают писать человеку, которого знают.',
          },
          {
            term: 'Личные сообщения, группы и каналы',
            desc: 'Для настоящего аккаунта вы выбираете, где отвечает ассистент: в личных сообщениях, в группах и каналах, где состоит аккаунт, или и там и там. Каждый переключатель сохраняется сразу.',
          },
          {
            term: 'Только при упоминании',
            desc: 'В группах аккаунт может молчать, пока его не упомянут через @ или не ответят на его сообщение. Групповой чат и личная переписка с одним и тем же человеком остаются разными диалогами.',
          },
          {
            term: 'Каждый диалог в карточке контакта',
            desc: 'Первое сообщение создаёт контакт с именем и @username собеседника в Telegram, привязанный к диалогу, со ссылкой на его профиль. Кто пишет повторно, попадает в тот же контакт.',
          },
          {
            term: 'Лиды прямо по ходу диалога',
            desc: 'Со включённым сбором лидов ассистент спрашивает данные, которые вы выбрали: имя, телефон, бюджет или нужный курс либо услугу, и сохраняет лид в CRM, как только обязательные поля заполнены.',
          },
          {
            term: 'Передача диалога команде',
            desc: 'Когда клиент просит человека или разговор подходит под ситуацию, которую вы описали своими словами, ассистент замолкает, а чат ждёт в разделе «Сообщения». Оператор отвечает из Fineguide, и ответ приходит в тот же чат Telegram.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как подключить',
        heading: 'Два способа начать, оба за несколько минут.',
        body: 'Бот подходит для нового фирменного ассистента, а настоящий аккаунт пригодится, когда клиенты уже знают номер или вы отвечаете в группах сообщества.',
        items: [
          'Создайте ассистента и дайте ему страницы сайта, документы и FAQ.',
          'Откройте Connect Apps для этого ассистента, выберите Telegram, затем Bot account или Real account.',
          'Для бота вставьте токен из @BotFather. Для своего аккаунта введите номер телефона, код из Telegram и пароль 2FA, если он есть.',
          'Для настоящего аккаунта выберите личные сообщения, группы и каналы и решите, отвечать ли только при упоминании.',
          'Включите сбор лидов и передачу оператору и следите за каждым диалогом в «Сообщениях» и в карточке контакта.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Способы подключения',
            desc: '2: аккаунт бота (токен из @BotFather) или настоящий аккаунт (номер телефона, код подтверждения, пароль 2FA, если включён).',
          },
          {
            term: 'Где отвечает настоящий аккаунт',
            desc: 'В личных сообщениях, в группах и каналах, где он состоит, а в группах только при упоминании или ответе на его сообщение. По умолчанию он отвечает только в личных сообщениях.',
          },
          {
            term: 'В карточке контакта',
            desc: 'Имя и @username в Telegram со ссылкой t.me, а все диалоги на вкладке «Диалоги» контакта, рядом со сделками, задачами и звонками.',
          },
          {
            term: 'Тот же ассистент в других каналах',
            desc: 'Ассистент из Telegram может отвечать и в чате на сайте, в WhatsApp, Instagram, Messenger, Slack и Discord по той же базе знаний.',
          },
          {
            term: 'Тарифы и кредиты',
            desc: 'Начните на бесплатном тарифе с 200 кредитами. Каждый ответ ИИ стоит 1 кредит, ответы команды в «Сообщениях» кредитов не тратят. Сбор лидов и сценарии доступны на платных тарифах, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'См. также',
        heading: 'Что работает за ассистентом в Telegram',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Характер, база знаний, переменные сессии, действия и передача сотруднику для любого канала.',
          },
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Telegram рядом с другими чатами и почтой в общем ящике команды.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, сделки и задачи с аккаунтом Telegram в каждой карточке.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы, документы и FAQ, по которым отвечает ассистент.',
          },
          {
            path: '/automations',
            label: 'Автоматизации',
            desc: 'Сценарии, n8n и вебхуки, которые работают с данными, собранными ассистентом.',
          },
        ],
      },
      faq: {
        heading: 'ИИ-бот для Telegram: частые вопросы',
        items: [
          {
            q: 'Как сделать ИИ-бота для Telegram для бизнеса?',
            a: 'Создайте бота в @BotFather, скопируйте токен и вставьте его в Connect Apps вашего ассистента в Fineguide. Fineguide сам настроит подключение к Telegram, и ассистент начнёт отвечать по вашей базе знаний с первого сообщения.',
          },
          {
            q: 'Может ли ИИ отвечать из моего личного аккаунта Telegram?',
            a: 'Да. Выберите Real account, введите номер своего аккаунта, код из Telegram и пароль 2FA, если он есть. После этого ассистент отвечает от имени этого аккаунта.',
          },
          {
            q: 'Может ли бот отвечать в группах Telegram?',
            a: 'Да, через настоящий аккаунт. Включите ответы в группах и каналах и оставьте «Only when tagged», если он должен отвечать только когда его упомянули через @ или ответили на его сообщение.',
          },
          {
            q: 'Как настроить автоответ в Telegram?',
            a: 'Подключите своего Telegram-бота или аккаунт к ассистенту Fineguide. Вместо одного шаблонного автоответа ассистент отвечает на каждый вопрос по вашим страницам, документам и FAQ, днём и ночью.',
          },
          {
            q: 'Есть ли CRM с Telegram?',
            a: 'Да. В Fineguide каждый, кто написал в Telegram, становится контактом в CRM с именем и @username, диалог хранится в карточке контакта, а лиды, собранные в чате, попадают в ту же CRM.',
          },
          {
            q: 'Может ли менеджер перехватить диалог у бота?',
            a: 'Да. Когда клиент просит человека или возникает описанная вами ситуация, ассистент замолкает, а чат ждёт в разделе «Сообщения»; оператор отвечает из Fineguide в тот же чат Telegram.',
          },
          {
            q: 'Чем аккаунт бота отличается от настоящего аккаунта?',
            a: 'Аккаунт бота — это отдельный бот, которому клиенты пишут по @username. Настоящий аккаунт — это существующий профиль Telegram: ассистент отвечает от имени этого человека в личных сообщениях и, если вы разрешите, в группах и каналах.',
          },
        ],
      },
      closing: {
        heading: 'Подключите ИИ к Telegram уже сегодня.',
        body: 'Создайте ассистента, подключите бота или свой аккаунт Telegram и задайте ему вопрос с телефона. Или запишитесь на 30-минутное демо и посмотрите, как Telegram, «Сообщения» и CRM работают вместе.',
      },
    },
  },
};

export default solution;
