import type { Solution } from './types';

const solution: Solution = {
  slug: 'instagram-ai-chatbot',
  image: 'channels-phone.jpg',
  imageAlt: {
    en: 'A hand holding a phone with an Instagram feed open, over a wooden table with a cup of coffee',
    ro: 'O mână ține un telefon cu fluxul Instagram deschis, deasupra unei mese din lemn cu o cană de cafea',
    ru: 'Рука держит телефон с открытой лентой Instagram над деревянным столом с чашкой кофе',
  },
  appName: 'Fineguide for Instagram',
  checked: '2026-11-25',
  reading: [
    '/blog/instagram-messenger-comment-and-dm-automation/',
    '/blog/connect-your-ai-assistant-to-instagram/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/omnichannel-team-inbox/',
    '/blog/ai-chatbot-for-online-store/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/ConnectAppsPage.tsx InstagramPanel (Connect with Instagram popup; toggles "Respond to Instagram direct messages" default on, "Reply to Instagram comments" default off; connected account shown as @username; "already connected to another assistant" conflict = one account per assistant) + apps/types.ts ("Engage with customers on Instagram DMs and comments")',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/AgentDetailLayout.tsx (assistant menu: Connect Apps, Publish, Appearance)',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/instagram/setup.ts (Instagram login: api.instagram.com/oauth/access_token, long-lived token, graph.instagram.com/me)',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/instagram/transformer.ts (allowInstagramDm / allowInstagramComments; DMs with photos, voice messages and reels kept even with no text; comments: one conversation per post + comment thread + person, own comments filtered, replyToInstagramComments off = kept without an answer, commentReplyMode private; echo of a reply sent from the Instagram app = operator message)',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/meta-attachments.ts (image, sticker, audio, video, reel / ig_reel, file; link shares, shared posts and story mentions kept with their url)',
    'ai-backoffice-api apps/chat-api/src/_v2/channels/comment-replies.ts (private mode: full answer as Meta private reply, short public reply under the comment, [IGNORE] for spam / off-topic; Instagram has no like through the API) + instagram/messenger.ts (recipient comment_id private reply, /{comment}/replies public reply). Not in the workspace UI: integration props set by the Fineguide team',
    'ai-backoffice-api apps/chat-api/src/_v2/messaging/inbound-processor.ts isHumanOverride / handleHumanOverride (a message written from the account\'s own inbox is kept as an operator turn and the session is escalated: the assistant stops) + takeover.ts (back to the assistant by the assistant\'s rules)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx (handover on request or own-words situations; 20 minutes of silence back to the assistant unless changed; reused from help-desk.ts)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/messages/conversations/components/ChannelBadge.tsx (Instagram badge in Messages), CustomerProfile.tsx (Instagram name on the profile)',
    'ai-backoffice-api apps/backoffice-api/src/modules/bot/session/channel-contact.service.ts (Telegram, WhatsApp, Instagram, Facebook senders become CRM contacts keyed on channel id, same contact next time; offered to duplicate detection) + prisma ContactChannel (one contact, several channel identities)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx (What it answers: Anything / Only what it has learned + fixed reply; Lead collection behind canAccessLeadCollection: fields you choose, when it asks)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/workflows/elements/defs/triggers.ts ("On collected info updated" and "On contact created from chat" with "On these channels": Website widget, Facebook, Instagram, WhatsApp, Telegram; Facebook and Instagram separate)',
    'BRIEF.md plan gating (Free lacks lead collection and workflows); llms.txt credits (1 credit per standard AI reply, free plan 200 credits as in help-desk.ts)',
  ],
  copy: {
    en: {
      meta: {
        title: 'Instagram AI Chatbot and DM Automation | Fineguide',
        description:
          'Instagram AI chatbot: an assistant answers your DMs and auto-replies to Instagram comments from your knowledge base, and each person becomes a CRM contact.',
      },
      hero: {
        eyebrow: 'Instagram AI chatbot',
        title: 'Instagram DMs and comments,',
        titleAccent: ' answered by your assistant.',
        subtitle:
          'Connect your Instagram business account once. The assistant answers direct messages and, when you switch it on, comments under your posts, while your team steps in from one inbox and every person lands in your CRM.',
      },
      definition: {
        heading: 'What is an Instagram AI chatbot?',
        body:
          "An Instagram AI chatbot is software that answers the direct messages and comments an Instagram business account receives, without a person typing each reply. Fineguide's Instagram assistant connects through Instagram's own sign-in, answers DMs and, when you switch it on, replies to comments under your posts, using the pages, documents and FAQ you gave it. Every conversation appears in the Messages inbox next to your other channels, and every person who writes becomes a contact in the CRM.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'From the first DM to a contact in your CRM.',
        body:
          'Two switches decide where the assistant answers on Instagram. Everything it does lands on the same platform as your CRM and your team inbox.',
        items: [
          {
            term: 'Instagram DM automation',
            desc: 'With "Respond to Instagram direct messages" on, the assistant answers everyone who writes to your account. Photos, voice messages, reels and shared posts a customer sends stay in the conversation for your team to see.',
          },
          {
            term: 'Auto-replies to comments',
            desc: 'Switch on "Reply to Instagram comments" and the assistant answers under your posts, in the comment thread. A follow-up in the same thread stays in the same conversation, and comments from your own account are never answered.',
          },
          {
            term: 'Private answers to public comments',
            desc: 'The Fineguide team can set your account to answer comments in private: the full answer goes to the person as a direct message, a short public reply goes under the comment, and spam or off-topic comments are left alone.',
          },
          {
            term: 'Your team steps in',
            desc: 'When a customer asks for a person, or a situation you described comes up, the chat waits for your team in Messages with an Instagram badge, and your reply goes back to Instagram. If a colleague answers from the Instagram app instead, the assistant steps back from that chat and the reply is kept in its history.',
          },
          {
            term: 'Contacts and leads in the CRM',
            desc: 'Each person who writes becomes a CRM contact under their Instagram name and is recognised when they write again. With lead collection on, the assistant asks for a phone number or email and saves a lead with the fields you choose.',
          },
          {
            term: 'One person across channels',
            desc: 'Someone who wrote on WhatsApp or Telegram before keeps one record: the CRM holds several channel identities per contact and flags possible duplicates for you to merge.',
          },
          {
            term: 'Workflows for Instagram chats',
            desc: 'A workflow can start when a contact is created from a chat or when the assistant collects new details, limited to Instagram, so a DM lead gets a task, a tag or a notification for the right person.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'Connected in a few minutes.',
        body: 'You sign in with Instagram itself; no code and no Meta developer account.',
        items: [
          'Create an assistant and give it your website, price list, documents and FAQ.',
          'In the assistant\'s Connect Apps, click Connect with Instagram and sign in to your business account.',
          'Leave direct messages on, and switch on comment replies once you are happy with the answers.',
          'Choose when chats go to your team, and turn on lead collection to save leads in the CRM.',
          'Answer handed-over chats from Messages and follow new contacts and leads in the CRM.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Connection',
            desc: "Instagram's own sign-in for a business or creator account. One Instagram account per assistant.",
          },
          {
            term: 'Where it answers',
            desc: 'Direct messages, on by default, and comments under your posts, off until you switch them on.',
          },
          {
            term: 'What it receives',
            desc: 'Text, photos, voice messages, videos and reels, files, shared posts and story mentions.',
          },
          {
            term: 'Other channels',
            desc: 'The same assistant can also answer on your website chat, WhatsApp, Telegram, Messenger, Slack and Discord.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits; an AI reply is 1 credit. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'Around your Instagram assistant',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'One assistant for your website, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord.',
          },
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Instagram next to your other channels in one team inbox, with handover to a person.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, deals and tasks for every person who writes to you.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The pages, documents and FAQ your assistant answers from.',
          },
          {
            path: '/automations',
            label: 'Automations',
            desc: 'Workflows that start from Instagram chats, plus n8n and webhooks.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide vs Tidio',
            desc: 'Two ways to run AI chat on your website and social channels, side by side.',
          },
        ],
      },
      faq: {
        heading: 'Instagram AI chatbot: common questions',
        items: [
          {
            q: 'How do I automate Instagram DMs?',
            a: 'Connect your Instagram business account to an assistant with Instagram\'s own sign-in and leave "Respond to Instagram direct messages" on. The assistant then answers everyone who writes to you from the knowledge you gave it, and hands the chat to your team when needed.',
          },
          {
            q: 'Can AI reply to Instagram comments automatically?',
            a: 'Yes. Switch on "Reply to Instagram comments" and the assistant answers comments under your posts in the thread. Replies in the same thread stay in one conversation, and your own comments are skipped.',
          },
          {
            q: 'Can the chatbot answer a comment with a private message?',
            a: 'Yes. The Fineguide team can set your account to answer comments in private: the person gets the full answer as a direct message and a short public reply under the comment, while spam is left unanswered.',
          },
          {
            q: 'What happens when a customer wants to talk to a person?',
            a: 'The chat goes to your team in Messages and the assistant stops replying. Your colleague answers from Fineguide or from the Instagram app; either way the reply reaches the customer on Instagram and stays in the history.',
          },
          {
            q: 'Do people who message me on Instagram go into my CRM?',
            a: 'Yes. Each person becomes a contact under their Instagram name, linked to the conversation, and the same contact is used when they write again. With lead collection on, their phone number or email is saved as a lead.',
          },
          {
            q: 'Do I need a business account for an Instagram chatbot?',
            a: 'Yes. Fineguide connects Instagram business and creator accounts through Instagram\'s own sign-in, and one account is connected to one assistant.',
          },
          {
            q: 'Is there a free Instagram AI chatbot?',
            a: 'You can start on the free plan with 200 credits and no card, and an AI reply costs 1 credit. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      closing: {
        heading: 'Let the assistant take the first reply.',
        body: 'Connect your Instagram account, teach the assistant your products and prices, and keep every DM and comment in one inbox with your CRM.',
      },
    },
    ro: {
      meta: {
        title: 'Chatbot Instagram cu AI și răspunsuri automate | Fineguide',
        description:
          'Chatbot Instagram cu AI: asistentul dă răspunsuri automate la mesajele directe și la comentarii din baza ta de cunoștințe, iar fiecare persoană ajunge în CRM.',
      },
      hero: {
        eyebrow: 'Chatbot Instagram',
        title: 'Mesajele și comentariile de pe Instagram,',
        titleAccent: ' preluate de asistentul tău.',
        subtitle:
          'Conectezi o singură dată contul de business de Instagram. Asistentul răspunde la mesajele directe și, dacă vrei, la comentariile de sub postări, echipa intervine dintr-un singur inbox, iar fiecare persoană ajunge în CRM.',
      },
      definition: {
        heading: 'Ce este un chatbot Instagram cu AI?',
        body:
          'Un chatbot Instagram cu AI este un program care răspunde la mesajele directe și la comentariile primite de un cont de business de Instagram, fără ca cineva să scrie fiecare răspuns. Asistentul Fineguide pentru Instagram se conectează prin autentificarea Instagram, răspunde la mesajele directe și, când activezi opțiunea, la comentariile de sub postări, din paginile, documentele și întrebările frecvente pe care i le-ai dat. Fiecare conversație apare în inboxul Mesaje lângă celelalte canale, iar fiecare persoană care scrie devine contact în CRM.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'De la primul mesaj direct la un contact în CRM.',
        body:
          'Două comutatoare decid unde răspunde asistentul pe Instagram. Tot ce face ajunge pe aceeași platformă cu CRM-ul și inboxul echipei.',
        items: [
          {
            term: 'Răspunsuri automate în Direct',
            desc: 'Cu răspunsurile la mesajele directe pornite, asistentul răspunde oricui scrie contului tău. Fotografiile, mesajele vocale, reelurile și postările distribuite de client rămân în conversație, ca echipa să le vadă.',
          },
          {
            term: 'Răspunsuri automate la comentarii',
            desc: 'Pornești răspunsurile la comentarii și asistentul răspunde sub postări, în firul comentariului. O întrebare de continuare din același fir rămâne în aceeași conversație, iar comentariile propriului cont nu primesc răspuns.',
          },
          {
            term: 'Răspuns în privat la comentarii publice',
            desc: 'Echipa Fineguide poate seta contul să răspundă la comentarii în privat: răspunsul complet ajunge la persoană ca mesaj direct, sub comentariu apare un răspuns public scurt, iar spamul și comentariile fără legătură sunt lăsate deoparte.',
          },
          {
            term: 'Echipa preia conversația',
            desc: 'Când clientul cere un om sau apare o situație descrisă de tine, chatul așteaptă echipa în Mesaje, cu insigna Instagram, iar răspunsul tău ajunge înapoi pe Instagram. Dacă un coleg răspunde direct din aplicația Instagram, asistentul se retrage din acel chat, iar răspunsul rămâne în istoric.',
          },
          {
            term: 'Contacte și lead-uri în CRM',
            desc: 'Fiecare persoană care scrie devine contact în CRM, cu numele de pe Instagram, și este recunoscută când revine. Cu colectarea de lead-uri activă, asistentul cere un număr de telefon sau un email și salvează un lead cu câmpurile alese de tine.',
          },
          {
            term: 'O singură persoană pe toate canalele',
            desc: 'Cine a scris înainte pe WhatsApp sau Telegram rămâne o singură fișă: CRM-ul păstrează mai multe identități de canal pentru un contact și îți semnalează posibilele dubluri, ca să le unești.',
          },
          {
            term: 'Fluxuri pentru chaturile de pe Instagram',
            desc: 'Un flux de lucru poate porni când din chat se creează un contact sau când asistentul colectează date noi, doar pentru Instagram, astfel încât un lead din Direct primește o sarcină, o etichetă sau o notificare pentru omul potrivit.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'Conectat în câteva minute.',
        body: 'Te autentifici chiar cu Instagram, fără cod și fără cont de dezvoltator Meta.',
        items: [
          'Creează un asistent și dă-i site-ul, lista de prețuri, documentele și întrebările frecvente.',
          'În secțiunea Connect Apps a asistentului, apasă Connect with Instagram și intră în contul de business.',
          'Lasă activă opțiunea pentru mesaje directe și pornește răspunsurile la comentarii când ești mulțumit de răspunsuri.',
          'Alege când trec chaturile la echipă și activează colectarea de lead-uri, ca să le salvezi în CRM.',
          'Răspunde la chaturile preluate din Mesaje și urmărește contactele și lead-urile noi în CRM.',
        ],
      },
      facts: {
        eyebrow: 'Date',
        heading: 'În cifre și denumiri.',
        items: [
          {
            term: 'Conectare',
            desc: 'Autentificarea Instagram, pentru conturi de business sau de creator. Un cont de Instagram pentru fiecare asistent.',
          },
          {
            term: 'Unde răspunde',
            desc: 'La mesajele directe, active implicit, și la comentariile de sub postări, oprite până le activezi.',
          },
          {
            term: 'Ce primește',
            desc: 'Text, fotografii, mesaje vocale, clipuri video și reeluri, fișiere, postări distribuite și mențiuni în story.',
          },
          {
            term: 'Alte canale',
            desc: 'Același asistent poate răspunde și în chatul de pe site, pe WhatsApp, Telegram, Messenger, Slack și Discord.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite; un răspuns AI costă 1 credit. Colectarea de lead-uri și fluxurile de lucru vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Legături',
        heading: 'În jurul asistentului de Instagram',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Un singur asistent pentru site, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
          },
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Instagram lângă celelalte canale, într-un inbox comun al echipei, cu preluare de către operator.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, oportunități și sarcini pentru fiecare persoană care îți scrie.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile, documentele și întrebările frecvente din care răspunde asistentul.',
          },
          {
            path: '/automations',
            label: 'Automatizări',
            desc: 'Fluxuri care pornesc din chaturile de pe Instagram, plus n8n și webhookuri.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide vs Tidio',
            desc: 'Două moduri de a avea chat cu AI pe site și pe rețelele sociale, comparate.',
          },
        ],
      },
      faq: {
        heading: 'Chatbot Instagram: întrebări frecvente',
        items: [
          {
            q: 'Cum setez răspunsuri automate pe Instagram?',
            a: 'Conectezi contul de business de Instagram la un asistent, prin autentificarea Instagram, și lași activă opțiunea pentru mesaje directe. Asistentul răspunde apoi oricui îți scrie, din cunoștințele pe care i le-ai dat, și predă chatul echipei când e nevoie.',
          },
          {
            q: 'Poate AI-ul să răspundă singur la comentariile de pe Instagram?',
            a: 'Da. Activezi răspunsurile la comentarii și asistentul răspunde sub postări, în firul comentariului. Răspunsurile din același fir rămân într-o singură conversație, iar comentariile tale sunt ignorate.',
          },
          {
            q: 'Poate chatbotul să răspundă la un comentariu printr-un mesaj privat?',
            a: 'Da. Echipa Fineguide poate seta contul să răspundă la comentarii în privat: persoana primește răspunsul complet ca mesaj direct și un răspuns public scurt sub comentariu, iar spamul rămâne fără răspuns.',
          },
          {
            q: 'Ce se întâmplă când clientul vrea să vorbească cu un om?',
            a: 'Chatul trece la echipa ta în Mesaje, iar asistentul nu mai răspunde. Colegul tău scrie din Fineguide sau din aplicația Instagram; în ambele cazuri, răspunsul ajunge la client pe Instagram și rămâne în istoric.',
          },
          {
            q: 'Cei care îmi scriu pe Instagram ajung în CRM?',
            a: 'Da. Fiecare persoană devine contact cu numele de pe Instagram, legat de conversație, iar când scrie din nou se folosește același contact. Cu colectarea de lead-uri activă, telefonul sau emailul se salvează ca lead.',
          },
          {
            q: 'Am nevoie de cont de business pentru un chatbot de Instagram?',
            a: 'Da. Fineguide conectează conturi de business și de creator prin autentificarea Instagram, iar un cont se conectează la un singur asistent.',
          },
          {
            q: 'Există un chatbot de Instagram gratuit?',
            a: 'Poți începe pe planul gratuit, cu 200 de credite și fără card, iar un răspuns AI costă 1 credit. Colectarea de lead-uri și fluxurile de lucru vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      closing: {
        heading: 'Lasă asistentul să dea primul răspuns.',
        body: 'Conectează contul de Instagram, învață asistentul produsele și prețurile tale și păstrează fiecare mesaj direct și comentariu într-un singur inbox, împreună cu CRM-ul.',
      },
    },
    ru: {
      meta: {
        title: 'Чат-бот для Instagram с ИИ и автоответы | Fineguide',
        description:
          'Чат-бот для Instagram с ИИ: автоответы в Instagram Direct и на комментарии по вашей базе знаний, а каждый, кто написал, становится контактом в CRM.',
      },
      hero: {
        eyebrow: 'Чат-бот для Instagram',
        title: 'Сообщения в Direct и комментарии',
        titleAccent: ' получают ответ от ассистента.',
        subtitle:
          'Подключите бизнес-аккаунт Instagram один раз. Ассистент отвечает в Direct и, если включить, на комментарии под постами, команда подключается из одного ящика входящих, а каждый клиент попадает в CRM.',
      },
      definition: {
        heading: 'Что такое чат-бот для Instagram?',
        body:
          'Чат-бот для Instagram с ИИ представляет собой программу, которая отвечает на сообщения в Direct и комментарии бизнес-аккаунта Instagram, чтобы сотруднику не приходилось писать каждый ответ вручную. Ассистент Fineguide подключается через вход в Instagram, отвечает в Direct и, если включить, на комментарии под постами, опираясь на страницы, документы и FAQ, которые вы ему дали. Каждый диалог виден в разделе «Сообщения» рядом с другими каналами, а каждый, кто написал, становится контактом в CRM.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'От первого сообщения в Direct до контакта в CRM.',
        body:
          'Два переключателя решают, где ассистент отвечает в Instagram. Всё, что он делает, попадает на ту же платформу, где работают CRM и общий ящик входящих.',
        items: [
          {
            term: 'Автоответы в Instagram Direct',
            desc: 'Когда включены ответы в Direct, ассистент отвечает всем, кто пишет вашему аккаунту. Фото, голосовые, рилсы и пересланные посты клиента остаются в диалоге, и команда их видит.',
          },
          {
            term: 'Автоответы на комментарии',
            desc: 'Включите ответы на комментарии, и ассистент будет отвечать под постами, в ветке комментария. Уточняющий вопрос в той же ветке остаётся в том же диалоге, а на комментарии вашего аккаунта ассистент не отвечает.',
          },
          {
            term: 'Ответ в личку на публичный комментарий',
            desc: 'Команда Fineguide может настроить ответы на комментарии в личных сообщениях: полный ответ уходит человеку в Direct, под комментарием появляется короткий публичный ответ, а спам и комментарии не по теме остаются без ответа.',
          },
          {
            term: 'Подключается команда',
            desc: 'Когда клиент просит человека или возникает описанная вами ситуация, диалог ждёт команду в «Сообщениях» со значком Instagram, а ваш ответ уходит обратно в Instagram. Если коллега ответит прямо из приложения Instagram, ассистент отходит от этого диалога, а ответ сохраняется в истории.',
          },
          {
            term: 'Контакты и лиды в CRM',
            desc: 'Каждый, кто написал, становится контактом в CRM с именем из Instagram и узнаётся при следующем обращении. Если включён сбор лидов, ассистент спрашивает телефон или email и сохраняет лид с нужными вам полями.',
          },
          {
            term: 'Один человек во всех каналах',
            desc: 'Если клиент раньше писал в WhatsApp или Telegram, у него остаётся одна карточка: CRM хранит несколько идентификаторов каналов для одного контакта и подсвечивает возможные дубли, чтобы вы их объединили.',
          },
          {
            term: 'Сценарии для чатов из Instagram',
            desc: 'Сценарий может запускаться, когда из чата создаётся контакт или ассистент собирает новые данные, только для Instagram: лид из Direct получает задачу, тег или уведомление для нужного сотрудника.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'Подключение за несколько минут.',
        body: 'Вы входите через сам Instagram: без кода и без аккаунта разработчика Meta.',
        items: [
          'Создайте ассистента и дайте ему сайт, прайс-лист, документы и FAQ.',
          'В разделе ассистента Connect Apps нажмите Connect with Instagram и войдите в бизнес-аккаунт.',
          'Оставьте ответы в Direct включёнными, а ответы на комментарии включите, когда ответы вас устроят.',
          'Выберите, когда диалог переходит к команде, и включите сбор лидов, чтобы они сохранялись в CRM.',
          'Отвечайте на переданные диалоги из «Сообщений» и следите за новыми контактами и лидами в CRM.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Подключение',
            desc: 'Через вход в Instagram, для бизнес-аккаунта или аккаунта автора. Один аккаунт Instagram на одного ассистента.',
          },
          {
            term: 'Где отвечает',
            desc: 'В Direct (включено по умолчанию) и в комментариях под постами (выключено, пока вы не включите).',
          },
          {
            term: 'Что принимает',
            desc: 'Текст, фото, голосовые, видео и рилсы, файлы, пересланные посты и упоминания в сторис.',
          },
          {
            term: 'Другие каналы',
            desc: 'Тот же ассистент может отвечать в чате на сайте, в WhatsApp, Telegram, Messenger, Slack и Discord.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа и 200 кредитов; ИИ-ответ стоит 1 кредит. Сбор лидов и сценарии доступны на платных тарифах, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Ещё по теме',
        heading: 'Вокруг ассистента в Instagram',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Один ассистент для сайта, WhatsApp, Telegram, Instagram, Messenger, Slack и Discord.',
          },
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Instagram рядом с другими каналами в общем ящике входящих, с передачей диалога оператору.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, сделки и задачи для каждого, кто вам написал.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы, документы и FAQ, по которым отвечает ассистент.',
          },
          {
            path: '/automations',
            label: 'Автоматизации',
            desc: 'Сценарии, которые запускаются из чатов Instagram, а также n8n и вебхуки.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide и Tidio',
            desc: 'Два подхода к ИИ-чату на сайте и в соцсетях, бок о бок.',
          },
        ],
      },
      faq: {
        heading: 'Чат-бот для Instagram: частые вопросы',
        items: [
          {
            q: 'Как настроить автоответы в Instagram Direct?',
            a: 'Подключите бизнес-аккаунт Instagram к ассистенту через вход в Instagram и оставьте включёнными ответы в Direct. Ассистент будет отвечать всем, кто вам пишет, по знаниям, которые вы ему дали, и передавать диалог команде, когда нужно.',
          },
          {
            q: 'Может ли ИИ сам отвечать на комментарии в Instagram?',
            a: 'Да. Включите ответы на комментарии, и ассистент будет отвечать под постами, в ветке комментария. Ответы в одной ветке остаются в одном диалоге, а ваши собственные комментарии он пропускает.',
          },
          {
            q: 'Может ли бот ответить на комментарий в личные сообщения?',
            a: 'Да. Команда Fineguide может настроить ответы на комментарии в личку: человек получает полный ответ в Direct и короткий публичный ответ под комментарием, а спам остаётся без ответа.',
          },
          {
            q: 'Что будет, если клиент захочет поговорить с человеком?',
            a: 'Диалог переходит к вашей команде в «Сообщения», и ассистент перестаёт отвечать. Коллега пишет из Fineguide или из приложения Instagram; в обоих случаях ответ приходит клиенту в Instagram и остаётся в истории.',
          },
          {
            q: 'Попадают ли те, кто пишет в Instagram, в CRM?',
            a: 'Да. Каждый становится контактом с именем из Instagram, привязанным к диалогу, а при новом сообщении используется тот же контакт. Если включён сбор лидов, телефон или email сохраняются как лид.',
          },
          {
            q: 'Нужен ли бизнес-аккаунт для чат-бота в Instagram?',
            a: 'Да. Fineguide подключает бизнес-аккаунты и аккаунты авторов через вход в Instagram, и один аккаунт подключается к одному ассистенту.',
          },
          {
            q: 'Есть ли бесплатный чат-бот для Instagram?',
            a: 'Можно начать с бесплатного тарифа: 200 кредитов и без карты, ИИ-ответ стоит 1 кредит. Сбор лидов и сценарии доступны на платных тарифах, начиная со Starter.',
          },
        ],
      },
      closing: {
        heading: 'Пусть первым отвечает ассистент.',
        body: 'Подключите аккаунт Instagram, расскажите ассистенту о товарах и ценах и держите каждое сообщение в Direct и каждый комментарий в одном ящике вместе с CRM.',
      },
    },
  },
};

export default solution;
