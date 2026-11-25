import type { Solution } from './types';

const solution: Solution = {
  slug: 'website-ai-chatbot',
  image: 'account-review.jpg',
  imageAlt: {
    en: 'Two colleagues at a bright office table smile over a notebook, with a laptop open in front of them',
    ro: 'Doi colegi la o masă dintr-un birou luminos zâmbesc privind un caiet, cu un laptop deschis în fața lor',
    ru: 'Двое коллег за столом в светлом офисе с улыбкой смотрят в блокнот, перед ними открыт ноутбук',
  },
  appName: 'Fineguide website chat',
  checked: '2026-11-25',
  reading: [
    '/blog/add-ai-chatbot-to-your-website/',
    '/blog/train-a-chatbot-on-your-documents/',
    '/blog/per-user-knowledge-context-id/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/chatbot-analytics-metrics/',
    '/blog/ai-alternative-to-intercom-crisp-jivochat/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/install/InstallPage.tsx ("Publish": website code = 2 script lines, pasted before </body> or in <head>; a link to the chat on a page of its own, for an email, a button or a QR code; "Inside a page" iframe with width and height in px or %)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/appearance/AppearancePage.tsx (4 chat styles from packages/ui/src/lib/chat-styles.ts; brand colour; Light / Dark / matching the visitor\'s device; individual colours; replies in a bubble or plain text; suggested questions as chips, list or grid; header avatar; LANGUAGES = 24 interface languages, "The assistant answers in the visitor\'s language"; close and expand buttons; "Powered by Fineguide" toggle behind canControlBranding; chat button picture, size, 5 ring effects + effect colour, teaser message, 8 positions, preview)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx (Suggested questions; What it answers: Anything / Only what it has learned + fixed reply; Lead collection behind canAccessLeadCollection: fields, when it asks; Visitors can send: Images, Files; Support request button -> Inbox, task on the default board; Chat hours: always or set hours, button hidden outside them)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/persona/AssistantPersonaPage.tsx (Welcome message, shown when a chat opens)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/voice/VoicePage.tsx ("Calls from your chat": "Show the Call button in the chat", visitors talk to the assistant by voice; follows "Answer voice calls") + packages/ui/src/components/chat/MessageTextarea.tsx (Call button and voice-message recorder when voice is on) + ai-backoffice-api apps/chat-api/src/_v2/messaging/voice-memo.ts (a web-chat voice message of up to a minute is turned into words the assistant and operator read)',
    'ai-backoffice-api apps/chat-api/src/_v2/messaging/wordless-turn.ts (a photo from the web chat is given to the model, which can see it)',
    'ai-backoffice-frontend .claude/rules/learning-contexts.md + packages/ui/src/hooks/useParentEvents.ts (context_id by URL query, React config contextId, or FG_PARENT_SET_SESSION_DATA; page can also pass visitor details as meta -> session user props, and send a message)',
    'ai-chat-injector docs/API_DOCUMENTATION.md ($$fineguide.chat.open / close / sendMessage, $$fineguide.bubble.show with buttons)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx (handover on request or own-words situations, "Connecting you to an operator" in the visitor\'s language, assistant stops; reused from help-desk.ts) + modules/messages (operators answer from Messages)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/analytics/LauncherFunnelCard.tsx ("Chat button on your website": label shown, page teasers shown, chat opened, first message; counted by the embed script, ai-chat-injector 1.0.106+) + AnalyticsPage.tsx (Performance, Satisfaction, Sentiment, Resolution, Client Intents) + packages/ui/src/components/chat/ChatFeedback.tsx (thumbs up / down)',
    'ai-backoffice-api apps/backoffice-api/src/modules/bot/session/channel-contact.service.ts (web visitors are anonymous: no contact until they leave details)',
    'llms.txt + en.ts (24 interface languages; voice chats in the website widget count as AI replies; 1 credit per standard AI reply; free plan 200 credits as in help-desk.ts); BRIEF.md plan gating (Free lacks lead collection and custom branding)',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Chatbot for Website: AI Chat Widget | Fineguide',
        description:
          'AI chatbot for your website: an AI chat widget in 24 languages that answers from your content, talks by voice, collects leads and hands chats to your team.',
      },
      hero: {
        eyebrow: 'AI chatbot for website',
        title: 'A chat on your website',
        titleAccent: ' that knows your business.',
        subtitle:
          'Paste two lines of code, and an AI assistant answers your visitors from your pages, documents and FAQ, by text or by voice, collects their details and hands the chat to your team when a person is needed.',
      },
      definition: {
        heading: 'What is an AI chatbot for a website?',
        body:
          "An AI chatbot for a website is a chat window on your site where an AI assistant answers visitors' questions, collects their contact details and passes the conversation to a person when needed. Fineguide's chat widget goes on your site with a two-line script, a link or an iframe; its interface comes in 24 languages, and the assistant answers from the pages, documents and FAQ you give it, in writing or, with voice on, out loud. When your team takes over, they answer from the Messages inbox in the same chat window, and leads go straight into the CRM.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'Everything a website chat needs, with AI answering first.',
        body:
          'One assistant, set up once, answers on every page of your site and shares its knowledge, CRM and team inbox with your other channels.',
        items: [
          {
            term: 'Three ways to publish',
            desc: 'A chat button on every page from two lines of code, the chat on a page of its own behind a link or QR code, or the chat built into a page with an iframe of the size you choose.',
          },
          {
            term: 'Your look',
            desc: 'Four chat styles, your brand colour, light or dark or matching the visitor\'s device, your avatar, and a chat button with its size, moving ring, teaser message and one of eight positions. The "Powered by Fineguide" line can be hidden on paid plans.',
          },
          {
            term: 'Answers from your content',
            desc: 'The assistant answers from your website, documents and FAQ, and can be limited to only what it has learned, with a fixed reply for anything else. Suggested questions under the welcome message let visitors tap instead of typing.',
          },
          {
            term: '24 interface languages',
            desc: 'Buttons, labels and system messages come in 24 languages, from English, Spanish and German to Japanese and Chinese, and the assistant answers in the language the visitor writes in.',
          },
          {
            term: 'Voice, photos and files',
            desc: 'With voice on, a Call button lets visitors talk to the assistant out loud, and a voice message of up to a minute is read as text. Visitors can also add photos, screenshots and PDFs, and the assistant can look at a photo.',
          },
          {
            term: 'Leads and support requests',
            desc: 'With lead collection on (paid plans), the assistant asks for a name, email, phone or the fields you choose, as early or as late as you set, and saves a lead in the CRM. A support request button turns a problem into a thread in your Inbox and a task on your board.',
          },
          {
            term: 'Handover to your team',
            desc: 'When a visitor asks for a person or a situation you described comes up, the visitor sees that an operator is being connected, the assistant stops, and your team answers from Messages in the same chat window. Chat hours can hide the button outside the hours you set.',
          },
          {
            term: 'Per-user answers and a page API',
            desc: 'Pass a context_id and each signed-in user gets answers from their own knowledge plus your shared FAQ. A JavaScript API opens the chat, sends a question from your own button or shows a bubble with buttons.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'On your site in an afternoon.',
        body: 'No developer needed for the basics: the code is the same on every website builder that lets you add a script.',
        items: [
          'Create an assistant and give it your website, documents and FAQ.',
          'In Appearance, pick a chat style, brand colour, language and chat button, and try them in the preview.',
          'In Publish, copy the two lines of code and paste them before the closing body tag of your site.',
          'Choose suggested questions, lead fields and when chats go to your team.',
          'Follow conversations in Messages and see in Analytics how often the chat opens and what visitors ask.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Install',
            desc: 'A two-line script, a link or an iframe. All three show the same assistant with the same settings.',
          },
          {
            term: 'Languages',
            desc: 'The chat interface in 24 languages; the assistant answers in the visitor\'s language.',
          },
          {
            term: 'Look',
            desc: '4 chat styles, light and dark, 8 button positions, 5 button effects and a teaser message.',
          },
          {
            term: 'Analytics',
            desc: 'Chat button shown, teaser shown, chat opened and first message; ratings on replies; satisfaction, sentiment, resolution and intent per conversation.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits; an AI reply is 1 credit and a voice chat counts as AI replies. Lead collection and hiding the Fineguide line come with paid plans, from the Starter plan.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'Around your website chat',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'The same assistant on your website, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The pages, documents and FAQ your chatbot answers from, and a context per user.',
          },
          {
            path: '/help-desk',
            label: 'Help desk',
            desc: 'Handover, routing and support requests for the chats that need a person.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, deals and tasks for every lead your website chat collects.',
          },
          {
            path: '/compare/intercom',
            label: 'Fineguide vs Intercom',
            desc: 'AI chat, channels and handover, side by side.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide vs Tidio',
            desc: 'Two AI chat widgets for websites, compared feature by feature.',
          },
        ],
      },
      faq: {
        heading: 'AI chatbot for website: common questions',
        items: [
          {
            q: 'How do I add an AI chatbot to my website?',
            a: "Create an assistant in Fineguide, give it your website and documents, then copy the two lines of code from Publish into your site's template. The chat button then shows on every page that loads the code.",
          },
          {
            q: 'Which languages does the chat widget support?',
            a: 'The chat interface comes in 24 languages, including English, Spanish, French, German, Polish, Turkish, Japanese and Chinese. The assistant answers in the language the visitor writes in.',
          },
          {
            q: 'Can visitors talk to the chatbot by voice?',
            a: 'Yes. With voice on, a Call button in the chat lets visitors talk to the assistant out loud, and they can also send a voice message of up to a minute, which the assistant reads as text.',
          },
          {
            q: 'Can the AI chatbot hand over to a live agent?',
            a: 'Yes. When the visitor asks for a person or one of your rules matches, the assistant stops and your team answers from Messages, in the same chat window the visitor already has open.',
          },
          {
            q: 'Can the chatbot collect leads from my website?',
            a: 'Yes, on paid plans. The assistant asks for the contact details and fields you choose during the conversation and saves each lead in the CRM, linked to the chat.',
          },
          {
            q: 'Can each logged-in user get answers from their own data?',
            a: 'Yes. Pass a context_id in the chat link, the widget config or a message from your page, and the assistant searches only that user\'s knowledge plus your shared FAQ.',
          },
          {
            q: 'Is there a free AI chatbot for websites?',
            a: 'You can start on the free plan with 200 credits and no card, with the chat widget, the knowledge base and handover to your team. An AI reply costs 1 credit.',
          },
        ],
      },
      closing: {
        heading: 'Put the assistant on your website today.',
        body: 'Teach it your pages and documents, choose its look, paste two lines of code, and let it answer while your team handles what needs a person.',
      },
    },
    ro: {
      meta: {
        title: 'Chatbot AI pentru site și widget de chat | Fineguide',
        description:
          'Chatbot AI pentru site: un widget de chat în 24 de limbi care răspunde din conținutul tău, vorbește cu vocea, colectează lead-uri și predă chatul echipei.',
      },
      hero: {
        eyebrow: 'Chatbot AI pentru site',
        title: 'Un chat pe site-ul tău',
        titleAccent: ' care îți cunoaște afacerea.',
        subtitle:
          'Lipești două rânduri de cod, iar un asistent AI răspunde vizitatorilor din paginile, documentele și întrebările tale frecvente, în scris sau cu vocea, le preia datele și predă chatul echipei când e nevoie de un om.',
      },
      definition: {
        heading: 'Ce este un chatbot AI pentru site?',
        body:
          'Un chatbot AI pentru site este o fereastră de chat pe site-ul tău în care un asistent AI răspunde la întrebările vizitatorilor, le preia datele de contact și predă conversația unui om când e nevoie. Widgetul de chat Fineguide se pune pe site printr-un script de două rânduri, un link sau un iframe; interfața este disponibilă în 24 de limbi, iar asistentul răspunde din paginile, documentele și întrebările frecvente pe care i le dai, în scris sau, cu vocea pornită, cu voce. Când preia echipa, colegii răspund din inboxul Mesaje în aceeași fereastră de chat, iar lead-urile ajung direct în CRM.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Tot ce are nevoie un chat pe site, cu AI-ul care răspunde primul.',
        body:
          'Un singur asistent, configurat o dată, răspunde pe fiecare pagină a site-ului și folosește aceleași cunoștințe, același CRM și același inbox ca restul canalelor.',
        items: [
          {
            term: 'Trei moduri de publicare',
            desc: 'Un buton de chat pe fiecare pagină, din două rânduri de cod, chatul pe o pagină separată, accesibil printr-un link sau un cod QR, ori chatul integrat într-o pagină, printr-un iframe de mărimea dorită.',
          },
          {
            term: 'Aspectul tău',
            desc: 'Patru stiluri de chat, culoarea brandului, temă luminoasă, întunecată sau după dispozitivul vizitatorului, avatarul tău și un buton de chat cu mărime, inel animat, mesaj teaser și una din opt poziții. Mențiunea „Powered by Fineguide” poate fi ascunsă pe planurile plătite.',
          },
          {
            term: 'Răspunsuri din conținutul tău',
            desc: 'Asistentul răspunde din site, documente și întrebări frecvente și poate fi limitat doar la ce a învățat, cu un răspuns fix pentru restul. Întrebările sugerate de sub mesajul de bun venit le permit vizitatorilor să apese în loc să scrie.',
          },
          {
            term: 'Interfață în 24 de limbi',
            desc: 'Butoanele, etichetele și mesajele de sistem sunt disponibile în 24 de limbi, de la română, engleză și spaniolă la japoneză și chineză, iar asistentul răspunde în limba în care scrie vizitatorul.',
          },
          {
            term: 'Voce, fotografii și fișiere',
            desc: 'Cu vocea pornită, butonul Call le permite vizitatorilor să vorbească cu asistentul, iar un mesaj vocal de până la un minut este citit ca text. Vizitatorii pot adăuga și fotografii, capturi de ecran și PDF-uri, iar asistentul poate vedea o fotografie.',
          },
          {
            term: 'Lead-uri și cereri de suport',
            desc: 'Cu colectarea de lead-uri activă (pe planurile plătite), asistentul cere numele, emailul, telefonul sau câmpurile alese de tine, mai devreme sau mai târziu, după cum setezi, și salvează un lead în CRM. Butonul pentru cereri de suport transformă o problemă într-un fir în Inbox și o sarcină pe panoul tău.',
          },
          {
            term: 'Preluare de către operator',
            desc: 'Când vizitatorul cere un om sau apare o situație descrisă de tine, vizitatorul vede că se conectează un operator, asistentul se oprește, iar echipa răspunde din Mesaje în aceeași fereastră de chat. Programul chatului poate ascunde butonul în afara orelor setate.',
          },
          {
            term: 'Răspunsuri pe utilizator și API pentru pagină',
            desc: 'Transmiți un context_id și fiecare utilizator autentificat primește răspunsuri din cunoștințele lui, plus întrebările frecvente comune. Un API JavaScript deschide chatul, trimite o întrebare de pe propriul tău buton sau afișează un balon cu butoane.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'Pe site într-o după-amiază.',
        body: 'Pentru început nu ai nevoie de programator: codul e același în orice constructor de site-uri care permite adăugarea unui script.',
        items: [
          'Creează un asistent și dă-i site-ul, documentele și întrebările frecvente.',
          'În Appearance, alege stilul de chat, culoarea brandului, limba și butonul de chat și încearcă-le în previzualizare.',
          'În Publish, copiază cele două rânduri de cod și lipește-le înainte de eticheta de închidere body a site-ului.',
          'Alege întrebările sugerate, câmpurile pentru lead-uri și când trec chaturile la echipă.',
          'Urmărește conversațiile în Mesaje și vezi în Analytics cât de des se deschide chatul și ce întreabă vizitatorii.',
        ],
      },
      facts: {
        eyebrow: 'Date',
        heading: 'În cifre și denumiri.',
        items: [
          {
            term: 'Instalare',
            desc: 'Un script de două rânduri, un link sau un iframe. Toate trei arată același asistent, cu aceleași setări.',
          },
          {
            term: 'Limbi',
            desc: 'Interfața chatului în 24 de limbi; asistentul răspunde în limba vizitatorului.',
          },
          {
            term: 'Aspect',
            desc: '4 stiluri de chat, temă luminoasă și întunecată, 8 poziții ale butonului, 5 efecte pentru buton și un mesaj teaser.',
          },
          {
            term: 'Analiză',
            desc: 'Buton afișat, teaser afișat, chat deschis și primul mesaj; evaluări ale răspunsurilor; satisfacție, sentiment, rezolvare și intenție pentru fiecare conversație.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite; un răspuns AI costă 1 credit, iar o conversație vocală se numără în răspunsuri AI. Colectarea de lead-uri și ascunderea mențiunii Fineguide vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Legături',
        heading: 'În jurul chatului de pe site',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Același asistent pe site, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile, documentele și întrebările frecvente din care răspunde chatbotul, plus un context pentru fiecare utilizator.',
          },
          {
            path: '/help-desk',
            label: 'Helpdesk',
            desc: 'Preluare, rutare și cereri de suport pentru chaturile care au nevoie de un om.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, oportunități și sarcini pentru fiecare lead adus de chatul de pe site.',
          },
          {
            path: '/compare/intercom',
            label: 'Fineguide vs Intercom',
            desc: 'Chat cu AI, canale și preluare de către operator, comparate.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide vs Tidio',
            desc: 'Două widgeturi de chat cu AI pentru site, comparate funcție cu funcție.',
          },
        ],
      },
      faq: {
        heading: 'Chatbot AI pentru site: întrebări frecvente',
        items: [
          {
            q: 'Cum adaug un chatbot pe site?',
            a: 'Creezi un asistent în Fineguide, îi dai site-ul și documentele, apoi copiezi cele două rânduri de cod din Publish în șablonul site-ului. Butonul de chat apare pe fiecare pagină care încarcă codul.',
          },
          {
            q: 'În ce limbi este disponibil widgetul de chat?',
            a: 'Interfața chatului este disponibilă în 24 de limbi, printre care română, rusă, engleză, spaniolă, franceză, germană, japoneză și chineză. Asistentul răspunde în limba în care scrie vizitatorul.',
          },
          {
            q: 'Pot vizitatorii să vorbească cu chatbotul cu vocea?',
            a: 'Da. Cu vocea pornită, butonul Call din chat le permite vizitatorilor să vorbească cu asistentul, iar ei pot trimite și un mesaj vocal de până la un minut, pe care asistentul îl citește ca text.',
          },
          {
            q: 'Poate chatbotul să predea conversația unui operator?',
            a: 'Da. Când vizitatorul cere un om sau se potrivește una dintre regulile tale, asistentul se oprește, iar echipa răspunde din Mesaje, în aceeași fereastră de chat pe care vizitatorul o are deja deschisă.',
          },
          {
            q: 'Poate chatbotul să colecteze lead-uri de pe site?',
            a: 'Da, pe planurile plătite. Asistentul cere în timpul conversației datele de contact și câmpurile alese de tine și salvează fiecare lead în CRM, legat de chat.',
          },
          {
            q: 'Poate fiecare utilizator autentificat să primească răspunsuri din propriile date?',
            a: 'Da. Transmiți un context_id în linkul chatului, în configurarea widgetului sau printr-un mesaj din pagina ta, iar asistentul caută doar în cunoștințele acelui utilizator și în întrebările frecvente comune.',
          },
          {
            q: 'Există un chatbot AI gratuit pentru site?',
            a: 'Poți începe pe planul gratuit, cu 200 de credite și fără card, cu widgetul de chat, baza de cunoștințe și preluarea de către echipă. Un răspuns AI costă 1 credit.',
          },
        ],
      },
      closing: {
        heading: 'Pune asistentul pe site chiar azi.',
        body: 'Învață-l paginile și documentele tale, alege-i aspectul, lipește două rânduri de cod și lasă-l să răspundă, în timp ce echipa se ocupă de ce are nevoie de un om.',
      },
    },
    ru: {
      meta: {
        title: 'ИИ чат-бот для сайта и онлайн-консультант | Fineguide',
        description:
          'ИИ чат-бот для сайта: онлайн-консультант с ИИ и виджетом на 24 языках отвечает по вашим материалам, говорит голосом, собирает лиды и передаёт чат команде.',
      },
      hero: {
        eyebrow: 'ИИ чат-бот для сайта',
        title: 'Чат на вашем сайте,',
        titleAccent: ' который знает ваш бизнес.',
        subtitle:
          'Вставьте две строки кода, и ИИ-ассистент будет отвечать посетителям по вашим страницам, документам и FAQ, текстом или голосом, собирать их контакты и передавать чат команде, когда нужен человек.',
      },
      definition: {
        heading: 'Что такое ИИ чат-бот для сайта?',
        body:
          'ИИ чат-бот для сайта представляет собой окно чата на вашем сайте, где ИИ-ассистент отвечает на вопросы посетителей, собирает их контакты и передаёт диалог человеку, когда это нужно. Чат-виджет Fineguide ставится на сайт скриптом из двух строк, ссылкой или iframe; его интерфейс доступен на 24 языках, а ассистент отвечает по страницам, документам и FAQ, которые вы ему дали, текстом или, если включён голос, голосом. Когда подключается команда, сотрудники отвечают из раздела «Сообщения» в том же окне чата, а лиды сразу попадают в CRM.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'Всё, что нужно чату на сайте, и первым отвечает ИИ.',
        body:
          'Один ассистент, настроенный один раз, отвечает на каждой странице сайта и пользуется той же базой знаний, CRM и ящиком входящих, что и другие каналы.',
        items: [
          {
            term: 'Три способа разместить чат',
            desc: 'Кнопка чата на каждой странице из двух строк кода, чат на отдельной странице по ссылке или QR-коду или чат внутри страницы через iframe нужного размера.',
          },
          {
            term: 'Ваш внешний вид',
            desc: 'Четыре стиля чата, цвет бренда, светлая или тёмная тема или как на устройстве посетителя, ваш аватар и кнопка чата с размером, анимированным кольцом, приветственной подсказкой и одной из восьми позиций. Строку «Powered by Fineguide» можно скрыть на платных тарифах.',
          },
          {
            term: 'Ответы по вашим материалам',
            desc: 'Ассистент отвечает по сайту, документам и FAQ, и его можно ограничить только тем, чему он обучен, с заданным ответом на всё остальное. Подсказки-вопросы под приветствием позволяют посетителю нажать вместо того, чтобы печатать.',
          },
          {
            term: 'Интерфейс на 24 языках',
            desc: 'Кнопки, подписи и системные сообщения доступны на 24 языках, от русского, английского и испанского до японского и китайского, а ассистент отвечает на языке, на котором пишет посетитель.',
          },
          {
            term: 'Голос, фото и файлы',
            desc: 'Если включён голос, кнопка Call позволяет посетителю поговорить с ассистентом голосом, а голосовое сообщение длиной до минуты он читает как текст. Посетители могут прикладывать фото, скриншоты и PDF, и ассистент видит, что на фото.',
          },
          {
            term: 'Лиды и заявки в поддержку',
            desc: 'Если включён сбор лидов (на платных тарифах), ассистент спрашивает имя, email, телефон или нужные вам поля, раньше или позже, как вы настроите, и сохраняет лид в CRM. Кнопка заявки в поддержку превращает проблему в переписку во входящих и задачу на доске.',
          },
          {
            term: 'Передача диалога оператору',
            desc: 'Когда посетитель просит человека или возникает описанная вами ситуация, он видит, что его соединяют с оператором, ассистент перестаёт отвечать, а команда отвечает из «Сообщений» в том же окне чата. Часы работы чата могут скрывать кнопку вне заданного времени.',
          },
          {
            term: 'Ответы под пользователя и API для страницы',
            desc: 'Передайте context_id, и каждый авторизованный пользователь получает ответы по своим данным и вашему общему FAQ. JavaScript API открывает чат, отправляет вопрос с вашей кнопки или показывает подсказку с кнопками.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'На сайте за полдня.',
        body: 'Для базовой настройки программист не нужен: код одинаковый для любого конструктора сайтов, где можно добавить скрипт.',
        items: [
          'Создайте ассистента и дайте ему сайт, документы и FAQ.',
          'В разделе Appearance выберите стиль чата, цвет бренда, язык и кнопку чата и проверьте их в предпросмотре.',
          'В разделе Publish скопируйте две строки кода и вставьте их перед закрывающим тегом body на сайте.',
          'Выберите подсказки-вопросы, поля для лидов и момент, когда диалог переходит к команде.',
          'Следите за диалогами в «Сообщениях» и смотрите в Analytics, как часто открывают чат и о чём спрашивают.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Установка',
            desc: 'Скрипт из двух строк, ссылка или iframe. Все три варианта показывают одного и того же ассистента с теми же настройками.',
          },
          {
            term: 'Языки',
            desc: 'Интерфейс чата на 24 языках; ассистент отвечает на языке посетителя.',
          },
          {
            term: 'Внешний вид',
            desc: '4 стиля чата, светлая и тёмная тема, 8 позиций кнопки, 5 эффектов кнопки и приветственная подсказка.',
          },
          {
            term: 'Аналитика',
            desc: 'Показы кнопки и подсказки, открытия чата и первые сообщения; оценки ответов; удовлетворённость, тональность, решение вопроса и намерение по каждому диалогу.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа и 200 кредитов; ИИ-ответ стоит 1 кредит, голосовой разговор считается ИИ-ответами. Сбор лидов и скрытие строки Fineguide доступны на платных тарифах, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Ещё по теме',
        heading: 'Вокруг чата на сайте',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Тот же ассистент на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack и Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы, документы и FAQ, по которым отвечает чат-бот, и отдельный контекст для каждого пользователя.',
          },
          {
            path: '/help-desk',
            label: 'Хелпдеск',
            desc: 'Передача оператору, маршрутизация и заявки в поддержку для чатов, где нужен человек.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, сделки и задачи для каждого лида из чата на сайте.',
          },
          {
            path: '/compare/intercom',
            label: 'Fineguide и Intercom',
            desc: 'ИИ-чат, каналы и передача оператору, бок о бок.',
          },
          {
            path: '/compare/tidio',
            label: 'Fineguide и Tidio',
            desc: 'Два ИИ-виджета чата для сайта, сравнение по функциям.',
          },
        ],
      },
      faq: {
        heading: 'ИИ чат-бот для сайта: частые вопросы',
        items: [
          {
            q: 'Как добавить чат-бот на сайт?',
            a: 'Создайте ассистента в Fineguide, дайте ему сайт и документы, затем скопируйте две строки кода из раздела Publish в шаблон сайта. Кнопка чата появится на каждой странице, где загружается код.',
          },
          {
            q: 'На каких языках работает чат-виджет?',
            a: 'Интерфейс чата доступен на 24 языках, среди них русский, украинский, английский, испанский, французский, немецкий, японский и китайский. Ассистент отвечает на языке, на котором пишет посетитель.',
          },
          {
            q: 'Может ли посетитель поговорить с чат-ботом голосом?',
            a: 'Да. Если включён голос, кнопка Call в чате позволяет говорить с ассистентом голосом, а ещё можно отправить голосовое сообщение длиной до минуты, которое ассистент читает как текст.',
          },
          {
            q: 'Может ли онлайн-консультант с ИИ передать диалог оператору?',
            a: 'Да. Когда посетитель просит человека или срабатывает ваше правило, ассистент перестаёт отвечать, а команда отвечает из «Сообщений» в том же окне чата, которое у посетителя уже открыто.',
          },
          {
            q: 'Может ли чат-бот собирать лиды с сайта?',
            a: 'Да, на платных тарифах. Ассистент по ходу разговора спрашивает контакты и нужные вам поля и сохраняет каждый лид в CRM с привязкой к чату.',
          },
          {
            q: 'Может ли каждый авторизованный пользователь получать ответы по своим данным?',
            a: 'Да. Передайте context_id в ссылке на чат, в настройках виджета или сообщением со страницы, и ассистент будет искать только в знаниях этого пользователя и в общем FAQ.',
          },
          {
            q: 'Есть ли бесплатный ИИ чат-бот для сайта?',
            a: 'Можно начать с бесплатного тарифа: 200 кредитов и без карты, с чат-виджетом, базой знаний и передачей диалога команде. ИИ-ответ стоит 1 кредит.',
          },
        ],
      },
      closing: {
        heading: 'Поставьте ассистента на сайт сегодня.',
        body: 'Научите его вашим страницам и документам, выберите внешний вид, вставьте две строки кода, и пусть он отвечает, пока команда занимается тем, где нужен человек.',
      },
    },
  },
};

export default solution;
