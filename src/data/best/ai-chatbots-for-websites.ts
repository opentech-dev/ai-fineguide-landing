import type { BestGuide } from './types';

// Facts per tool come from src/data/compare.ts (vendor pages, dated per tool). This file only says who each tool suits.
const guide: BestGuide = {
  slug: 'ai-chatbots-for-websites',
  updated: '2026-11-27',
  rows: ['ai', 'channels', 'languages'],
  picks: [
    {
      id: 'fineguide',
      bestFor: {
        en: 'Businesses that want a website chat answering from their own pages and documents, saving leads into a CRM and handing chats to their team, with the same assistant on messaging apps and phone calls.',
        ro: 'Firmele care vor un chat pe site care răspunde din propriile pagini și documente, salvează lead-urile în CRM și predă chaturile echipei, cu același asistent în aplicațiile de mesagerie și la telefon.',
        ru: 'Компаниям, которым нужен чат на сайте, который отвечает по их страницам и документам, сохраняет лиды в CRM и передаёт диалоги команде, — и тот же ассистент в мессенджерах и на звонках.',
      },
    },
    {
      id: 'chatbase',
      compare: 'chatbase',
      bestFor: {
        en: 'Teams that want an AI agent trained on their website, files, Notion pages and past tickets, placed on the site and in messaging apps, or inside the help desk they already use.',
        ro: 'Echipele care vor un agent AI antrenat pe site-ul lor, pe fișiere, pagini Notion și tichete vechi, pus pe site și în aplicațiile de mesagerie sau în helpdesk-ul pe care îl folosesc deja.',
        ru: 'Командам, которым нужен ИИ-агент, обученный на их сайте, файлах, страницах Notion и прошлых тикетах, — на сайте, в мессенджерах или внутри уже используемого хелпдеска.',
      },
    },
    {
      id: 'freshdesk',
      compare: 'freshdesk',
      bestFor: {
        en: 'Support teams that want web chat inside a ticketing help desk, with Freddy AI agents on chat and email that transfer with full context.',
        ro: 'Echipele de suport care vor chatul web într-un helpdesk cu tichete, cu agenți AI Freddy pe chat și email care predau conversația cu tot contextul.',
        ru: 'Командам поддержки, которым нужен веб-чат внутри хелпдеска с тикетами и ИИ-агентами Freddy в чате и почте, передающими диалог с полным контекстом.',
      },
    },
    {
      id: 'intercom',
      compare: 'intercom',
      bestFor: {
        en: 'Larger support teams that want the Fin AI agent in the website Messenger, answering from help articles and connected sources, inside a full help desk.',
        ro: 'Echipele de suport mai mari care vor agentul AI Fin în Messengerul de pe site, care răspunde din articolele de ajutor și sursele conectate, într-un helpdesk complet.',
        ru: 'Крупным командам поддержки, которым нужен ИИ-агент Fin в Messenger на сайте, отвечающий по статьям справки и подключённым источникам, внутри полноценного хелпдеска.',
      },
    },
    {
      id: 'jivo',
      compare: 'jivochat',
      bestFor: {
        en: 'Small teams that want classic website live chat with operators, an AI Agent module that answers from the site and a few files, and messaging apps in the same app.',
        ro: 'Echipele mici care vor chatul live clasic pe site, cu operatori, un modul AI Agent care răspunde din site și din câteva fișiere și aplicațiile de mesagerie în aceeași aplicație.',
        ru: 'Небольшим командам, которым нужен классический онлайн-чат на сайте с операторами, модуль AI Agent, отвечающий по сайту и нескольким файлам, и мессенджеры в том же приложении.',
      },
    },
    {
      id: 'tidio',
      compare: 'tidio',
      bestFor: {
        en: 'Online stores and small businesses that want live chat with the Lyro AI agent, handing off by their rules and running Smart Actions such as order updates and lead qualification.',
        ro: 'Magazinele online și firmele mici care vor chat live cu agentul AI Lyro, care predă conversația după regulile lor și rulează Smart Actions precum starea comenzii și calificarea lead-urilor.',
        ru: 'Интернет-магазинам и малому бизнесу, которым нужен онлайн-чат с ИИ-агентом Lyro, передающим диалог по их правилам и выполняющим Smart Actions вроде статуса заказа и квалификации лидов.',
      },
    },
    {
      id: 'zendesk',
      compare: 'zendesk',
      bestFor: {
        en: 'Established support organisations that want the web widget as one channel of a support suite, with AI agents on messaging, email and voice.',
        ro: 'Organizațiile de suport consacrate care vor widgetul web ca un canal dintr-o suită de suport, cu agenți AI pe mesagerie, email și voce.',
        ru: 'Зрелым службам поддержки, которым нужен веб-виджет как один из каналов пакета для поддержки, с ИИ-агентами в мессенджерах, почте и голосе.',
      },
    },
  ],
  related: [
    { path: '/website-ai-chatbot', label: { en: 'AI chatbot for your website: the Fineguide chat widget', ro: 'Chatbot AI pentru site: widgetul de chat Fineguide', ru: 'ИИ-чат-бот для сайта: чат-виджет Fineguide' } },
    { path: '/knowledge-base', label: { en: 'AI knowledge base: what the assistant learns from', ro: 'Baza de cunoștințe AI: din ce învață asistentul', ru: 'База знаний с ИИ: на чём учится ассистент' } },
    { path: '/omnichannel-chatbot', label: { en: 'Omnichannel AI chatbot', ro: 'Chatbot AI omnicanal', ru: 'Омниканальный ИИ-чат-бот' } },
    { path: '/crm', label: { en: 'CRM with AI', ro: 'CRM cu AI', ru: 'CRM с ИИ' } },
    { path: '/help-desk', label: { en: 'AI help desk and ticketing', ro: 'Helpdesk cu AI și tichete', ru: 'Хелпдеск с ИИ и тикетами' } },
  ],
  summary: {
    en: 'Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio and Zendesk: what each website chatbot’s AI does, which other channels come with it and the languages it states.',
    ro: 'Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio și Zendesk: ce face AI-ul fiecărui chatbot de site, ce alte canale vin cu el și ce limbi declară.',
    ru: 'Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio и Zendesk: что делает ИИ каждого чат-бота для сайта, какие ещё каналы есть и какие языки заявлены.',
  },
  copy: {
    en: {
      meta: {
        title: 'Best AI chatbots for websites (2026) | Fineguide',
        description: 'AI chatbots for business websites compared for 2026: Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio and Zendesk, with sourced facts.',
      },
      crumb: 'Best AI chatbots for websites',
      h1: 'The best AI chatbots for business websites',
      h1Accent: ' in 2026',
      shortAnswer:
        'The AI website chatbots businesses compare most in 2026 are Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio and Zendesk. Intercom, Zendesk and Freshdesk put the chat inside a support suite; Tidio and JivoChat are live-chat tools for small teams; Chatbase trains an agent on your content. Fineguide answers visitors from your own pages and documents, saves leads into its CRM and hands chats to your team, with the same assistant on messaging apps and phone calls.',
      definition: {
        heading: 'What is an AI chatbot for a website?',
        body:
          'An AI chatbot for a website is a chat window on your site where an AI assistant answers visitors from your own content, collects their details and passes the conversation to a person when needed. The better ones learn from your pages and documents rather than scripted answers, and keep the conversation in the same place your team replies from.',
      },
      method: {
        heading: 'How we chose and compared',
        items: [
          { term: 'Who is in it', desc: 'Tools buyers weigh when they want AI answering on their own website: live-chat tools with AI agents, support suites with a web widget, and a CRM-led platform.' },
          { term: 'What we compared', desc: 'Three things from each vendor’s own pages: what the AI agent does, which other channels come with the website chat, and the languages it states. Nothing from review sites, forums or press releases.' },
          { term: 'What we left out', desc: 'Prices, plans’ prices and trials, which change often. Plan names appear only where a vendor ties a feature to one.' },
          { term: 'How current it is', desc: 'Each tool shows the date its facts were read. When a vendor changes its product, write to contact@fineguide.ai and we correct the page.' },
        ],
      },
      listHeading: 'The chatbots, one by one',
      glanceHeading: 'Which chatbot suits whom',
      faq: [
        { q: 'What is the best AI chatbot for a business website?', a: 'It depends on what the chat has to do. Inside a large support suite, Intercom, Zendesk or Freshdesk; for a small online store, Tidio; for classic live chat with operators, JivoChat; for an agent trained on your content that can also sit inside your help desk, Chatbase; for a chat that answers from your content, saves leads into a CRM and shares one assistant with messaging apps and phone calls, Fineguide.' },
        { q: 'Which AI website chatbot can hand the conversation to a human?', a: 'All seven in this guide can; Chatbase’s escalations, for example, hand the conversation to a person with its context. In Fineguide, when a visitor asks for a person or a situation you described comes up, the visitor sees that an operator is being connected, the assistant stops, and your team answers in the same chat window.' },
        { q: 'Which website chatbot captures leads and sends them to my CRM?', a: 'With lead collection on (paid plans), Fineguide’s assistant asks for a name, email, phone or the fields you choose and saves a lead in its CRM. JivoChat’s AI Agent saves contacts, tags and an AI summary; Tidio’s Lyro runs Smart Actions that include lead qualification.' },
        { q: 'What is the best multilingual AI chatbot for a website?', a: 'Chatbase cites 95+ languages, Zendesk lists 80 fully supported languages for its AI agents, Intercom 65 for Fin, Freshdesk 60+ for Freddy, Tidio 51 for Lyro and JivoChat more than 50 for its AI Agent. Fineguide’s chat widget interface comes in 24 languages, and the assistant answers in the language the visitor writes in.' },
        { q: 'Are there good Tidio or Intercom Fin alternatives?', a: 'Yes. Chatbase, JivoChat, Freshdesk and Zendesk are often weighed against them. Fineguide is an alternative when the chat should also reach WhatsApp, Telegram and phone calls and write leads into a CRM; the Tidio and Intercom comparisons go row by row.' },
        { q: 'How do I add an AI chatbot to my website with Fineguide?', a: 'Create an assistant, give it your website, documents and FAQ, then paste the two lines of code before the closing body tag of your site, or use a link or an iframe. The Free plan has 200 credits and needs no card.' },
      ],
      closing: { heading: 'A website chat that knows your business', body: 'Start Fineguide on the Free plan, no card needed, or book a 30-minute walkthrough on your own website.' },
    },
    ro: {
      meta: {
        title: 'Cei mai buni chatboți AI pentru site-uri (2026)',
        description: 'Chatboți AI pentru site-urile firmelor în 2026: Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio și Zendesk, cu surse despre AI și canale.',
      },
      crumb: 'Cei mai buni chatboți AI pentru site-uri',
      h1: 'Cei mai buni chatboți AI pentru site-ul firmei',
      h1Accent: ' în 2026',
      shortAnswer:
        'Chatboții AI pentru site pe care le compară cel mai des firmele în 2026 sunt Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio și Zendesk. Intercom, Zendesk și Freshdesk pun chatul într-o suită de suport; Tidio și JivoChat sunt instrumente de chat live pentru echipe mici; Chatbase antrenează un agent pe conținutul tău. Fineguide răspunde vizitatorilor din propriile pagini și documente, salvează lead-urile în CRM-ul său și predă chaturile echipei, cu același asistent în aplicațiile de mesagerie și la telefon.',
      definition: {
        heading: 'Ce este un chatbot AI pentru site?',
        body:
          'Un chatbot AI pentru site este o fereastră de chat pe site-ul tău în care un asistent AI răspunde vizitatorilor din conținutul tău, le ia datele de contact și predă conversația unui om când e nevoie. Cei mai buni învață din paginile și documentele tale, nu din răspunsuri scrise dinainte, și păstrează conversația în locul din care răspunde echipa.',
      },
      method: {
        heading: 'Cum am ales și comparat',
        items: [
          { term: 'Cine este inclus', desc: 'Instrumentele pe care le cântăresc cumpărătorii când vor AI care răspunde pe propriul site: instrumente de chat live cu agenți AI, suite de suport cu widget web și o platformă construită în jurul CRM-ului.' },
          { term: 'Ce am comparat', desc: 'Trei lucruri, de pe paginile oficiale ale fiecărui furnizor: ce face agentul AI, ce alte canale vin cu chatul de pe site și ce limbi declară. Nimic de pe site-uri de recenzii, forumuri sau comunicate de presă.' },
          { term: 'Ce am lăsat deoparte', desc: 'Prețurile, prețurile planurilor și perioadele de probă, care se schimbă des. Numele planurilor apar doar acolo unde furnizorul leagă o funcție de un plan.' },
          { term: 'Cât de actual este', desc: 'La fiecare instrument apare data la care au fost citite informațiile. Dacă un furnizor își schimbă produsul, scrie la contact@fineguide.ai și corectăm pagina.' },
        ],
      },
      listHeading: 'Chatboții, pe rând',
      glanceHeading: 'Cui i se potrivește fiecare chatbot',
      faq: [
        { q: 'Care este cel mai bun chatbot AI pentru site-ul unei firme?', a: 'Depinde ce trebuie să facă chatul. Într-o suită mare de suport, Intercom, Zendesk sau Freshdesk; pentru un magazin online mic, Tidio; pentru chat live clasic cu operatori, JivoChat; pentru un agent antrenat pe conținutul tău, care poate sta și în helpdesk, Chatbase; pentru un chat care răspunde din conținutul tău, salvează lead-urile în CRM și împarte același asistent cu mesageria și telefonul, Fineguide.' },
        { q: 'Ce chatbot AI de site poate preda conversația unui om?', a: 'Toate cele șapte din acest ghid; escaladările Chatbase, de exemplu, predau conversația unui om cu tot contextul. În Fineguide, când vizitatorul cere un om sau apare o situație descrisă de tine, vizitatorul vede că se conectează un operator, asistentul se oprește, iar echipa răspunde în aceeași fereastră de chat.' },
        { q: 'Ce chatbot de site colectează lead-uri și le trimite în CRM?', a: 'Cu colectarea de lead-uri pornită (planuri plătite), asistentul Fineguide cere nume, email, telefon sau câmpurile alese de tine și salvează un lead în CRM. AI Agent de la JivoChat salvează contacte, etichete și un rezumat AI; Lyro de la Tidio rulează Smart Actions care includ calificarea lead-urilor.' },
        { q: 'Care este cel mai bun chatbot AI multilingv pentru site?', a: 'Chatbase indică peste 95 de limbi, Zendesk listează 80 de limbi complet suportate pentru agenții săi AI, Intercom 65 pentru Fin, Freshdesk peste 60 pentru Freddy, Tidio 51 pentru Lyro, iar JivoChat peste 50 pentru AI Agent. Interfața widgetului de chat Fineguide este în 24 de limbi, iar asistentul răspunde în limba în care scrie vizitatorul.' },
        { q: 'Există alternative bune la Tidio sau Intercom Fin?', a: 'Da. Chatbase, JivoChat, Freshdesk și Zendesk sunt adesea comparate cu ele. Fineguide este o alternativă când chatul trebuie să ajungă și pe WhatsApp, Telegram și la telefon și să scrie lead-urile în CRM; comparațiile cu Tidio și Intercom merg rând cu rând.' },
        { q: 'Cum adaug un chatbot AI pe site cu Fineguide?', a: 'Creezi un asistent, îi dai site-ul, documentele și întrebările frecvente, apoi lipești cele două linii de cod înainte de eticheta de închidere body a site-ului sau folosești un link ori un iframe. Planul Free are 200 de credite și nu cere card.' },
      ],
      closing: { heading: 'Un chat pe site care îți cunoaște afacerea', body: 'Începe cu Fineguide pe planul Free, fără card, sau programează o prezentare de 30 de minute pe site-ul tău.' },
    },
    ru: {
      meta: {
        title: 'Лучшие ИИ-чат-боты для сайта (2026)',
        description: 'ИИ-чат-боты для сайта компании в 2026 году: Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio и Zendesk — факты об ИИ и каналах с источниками.',
      },
      crumb: 'Лучшие ИИ-чат-боты для сайта',
      h1: 'Лучшие ИИ-чат-боты для сайта компании',
      h1Accent: ' в 2026 году',
      shortAnswer:
        'Чаще всего в 2026 году сравнивают такие ИИ-чат-боты для сайта: Chatbase, Fineguide, Freshdesk, Intercom, JivoChat, Tidio и Zendesk. Intercom, Zendesk и Freshdesk встраивают чат в пакет для поддержки; Tidio и JivoChat — сервисы онлайн-чата для небольших команд; Chatbase обучает агента на ваших материалах. Fineguide отвечает посетителям по вашим страницам и документам, сохраняет лиды в свою CRM и передаёт диалоги команде, а тот же ассистент работает в мессенджерах и на звонках.',
      definition: {
        heading: 'Что такое ИИ-чат-бот для сайта?',
        body:
          'ИИ-чат-бот для сайта — это окно чата на вашем сайте, где ИИ-ассистент отвечает посетителям по вашим материалам, собирает их контакты и передаёт разговор человеку, когда это нужно. Лучшие из них учатся на ваших страницах и документах, а не на заготовленных ответах, и держат диалог там же, откуда отвечает команда.',
      },
      method: {
        heading: 'Как мы выбирали и сравнивали',
        items: [
          { term: 'Кто вошёл в обзор', desc: 'Сервисы, которые сравнивают, когда хотят, чтобы на сайте отвечал ИИ: онлайн-чаты с ИИ-агентами, пакеты для поддержки с веб-виджетом и платформа на основе CRM.' },
          { term: 'Что сравнивали', desc: 'Три вещи с официальных страниц каждого производителя: что делает ИИ-агент, какие ещё каналы идут вместе с чатом на сайте и какие языки заявлены. Ничего с сайтов отзывов, форумов и пресс-релизов.' },
          { term: 'Что не включали', desc: 'Цены, стоимость тарифов и пробные периоды — они часто меняются. Названия тарифов упоминаются только там, где производитель привязывает к ним функцию.' },
          { term: 'Насколько свежие данные', desc: 'У каждого инструмента указана дата, когда прочитаны факты. Если производитель изменил продукт, напишите на contact@fineguide.ai — мы исправим страницу.' },
        ],
      },
      listHeading: 'Чат-боты по порядку',
      glanceHeading: 'Кому подходит каждый чат-бот',
      faq: [
        { q: 'Какой ИИ-чат-бот лучше для сайта компании?', a: 'Зависит от задач чата. Внутри крупного пакета поддержки — Intercom, Zendesk или Freshdesk; для небольшого интернет-магазина — Tidio; для классического онлайн-чата с операторами — JivoChat; для агента, обученного на ваших материалах и работающего в том числе внутри хелпдеска, — Chatbase; для чата, который отвечает по вашим материалам, сохраняет лиды в CRM и делит одного ассистента с мессенджерами и звонками, — Fineguide.' },
        { q: 'Какой ИИ-чат-бот для сайта умеет передавать диалог человеку?', a: 'Все семь из обзора; у Chatbase, например, эскалация передаёт диалог человеку вместе с контекстом. В Fineguide, когда посетитель просит человека или возникает описанная вами ситуация, посетитель видит, что подключается оператор, ассистент замолкает, а команда отвечает в том же окне чата.' },
        { q: 'Какой чат-бот для сайта собирает лиды и передаёт их в CRM?', a: 'При включённом сборе лидов (платные тарифы) ассистент Fineguide спрашивает имя, почту, телефон или нужные вам поля и сохраняет лид в CRM. AI Agent от JivoChat сохраняет контакты, теги и ИИ-резюме; Lyro от Tidio выполняет Smart Actions, включая квалификацию лидов.' },
        { q: 'Какой мультиязычный ИИ-чат-бот для сайта лучше?', a: 'Chatbase называет 95+ языков, Zendesk указывает 80 полностью поддерживаемых языков для своих ИИ-агентов, Intercom — 65 для Fin, Freshdesk — 60+ для Freddy, Tidio — 51 для Lyro, JivoChat — больше 50 для AI Agent. Интерфейс чат-виджета Fineguide — на 24 языках, а ассистент отвечает на языке, на котором пишет посетитель.' },
        { q: 'Есть ли хорошие альтернативы Tidio или Intercom Fin?', a: 'Да. С ними часто сравнивают Chatbase, JivoChat, Freshdesk и Zendesk. Fineguide — альтернатива, когда чат должен работать ещё и в WhatsApp, Telegram и на звонках и записывать лиды в CRM; сравнения с Tidio и Intercom идут строка за строкой.' },
        { q: 'Как добавить ИИ-чат-бот на сайт с Fineguide?', a: 'Создайте ассистента, дайте ему сайт, документы и частые вопросы, затем вставьте две строки кода перед закрывающим тегом body или используйте ссылку либо iframe. На бесплатном тарифе 200 кредитов, карта не нужна.' },
      ],
      closing: { heading: 'Чат на сайте, который знает ваш бизнес', body: 'Начните с Fineguide на бесплатном тарифе без карты или запишитесь на 30-минутную демонстрацию на вашем сайте.' },
    },
  },
};

export default guide;
