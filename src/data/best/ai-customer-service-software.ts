import type { BestGuide } from './types';

// Facts per tool come from src/data/compare.ts (vendor pages, dated per tool). This file only says who each tool suits.
const guide: BestGuide = {
  slug: 'ai-customer-service-software',
  updated: '2026-11-27',
  rows: ['ai', 'channels', 'phone', 'languages'],
  picks: [
    {
      id: 'fineguide',
      bestFor: {
        en: 'Small and mid-size teams that want AI answering on chat, messaging apps, email and live phone calls, with hand-over to a person, a CRM and call scoring on one customer record.',
        ro: 'Echipele mici și mijlocii care vor AI care răspunde pe chat, în aplicațiile de mesagerie, pe email și la apeluri în direct, cu predare către un om, un CRM și evaluarea apelurilor pe aceeași fișă de client.',
        ru: 'Малым и средним командам, которым нужен ИИ в чатах, мессенджерах, почте и на живых звонках, с передачей человеку, CRM и оценкой звонков в одной карточке клиента.',
      },
    },
    {
      id: 'freshdesk',
      compare: 'freshdesk',
      bestFor: {
        en: 'Support teams that want a ticketing help desk with Freddy AI agents on chat and email that take actions in backend systems and transfer with full context.',
        ro: 'Echipele de suport care vor un helpdesk cu tichete și agenți AI Freddy pe chat și email, care execută acțiuni în sistemele interne și predau conversația cu tot contextul.',
        ru: 'Командам поддержки, которым нужен хелпдеск с тикетами и ИИ-агентами Freddy в чате и почте, которые выполняют действия во внутренних системах и передают диалог с полным контекстом.',
      },
    },
    {
      id: 'intercom',
      compare: 'intercom',
      bestFor: {
        en: 'Larger support teams that want the Fin AI agent across chat, email, messaging and phone, inside a full help desk, or inside Salesforce, HubSpot or Freshdesk.',
        ro: 'Echipele de suport mai mari care vor agentul AI Fin pe chat, email, mesagerie și telefon, într-un helpdesk complet sau în Salesforce, HubSpot ori Freshdesk.',
        ru: 'Крупным командам поддержки, которым нужен ИИ-агент Fin в чате, почте, мессенджерах и телефоне — в полноценном хелпдеске или внутри Salesforce, HubSpot или Freshdesk.',
      },
    },
    {
      id: 'salesforce',
      compare: 'salesforce',
      bestFor: {
        en: 'Enterprises already on Salesforce that want Agentforce AI agents on the web, the phone and in apps, grounded in their CRM data and handing complex cases to people.',
        ro: 'Companiile mari care lucrează deja în Salesforce și vor agenți AI Agentforce pe web, la telefon și în aplicații, bazați pe datele din CRM, care predau oamenilor cazurile complexe.',
        ru: 'Крупным компаниям, которые уже работают в Salesforce и хотят ИИ-агентов Agentforce на сайте, по телефону и в приложениях, на данных своей CRM, со сложными случаями для людей.',
      },
    },
    {
      id: 'tidio',
      compare: 'tidio',
      bestFor: {
        en: 'Online stores and small businesses that want the Lyro AI agent on live chat and messaging apps, with Smart Actions such as order updates and lead qualification.',
        ro: 'Magazinele online și firmele mici care vor agentul AI Lyro pe chatul live și în aplicațiile de mesagerie, cu Smart Actions precum starea comenzii și calificarea lead-urilor.',
        ru: 'Интернет-магазинам и малому бизнесу, которым нужен ИИ-агент Lyro в онлайн-чате и мессенджерах, со Smart Actions вроде статуса заказа и квалификации лидов.',
      },
    },
    {
      id: 'zendesk',
      compare: 'zendesk',
      bestFor: {
        en: 'Established support organisations that want AI agents across messaging, email and voice in one suite, with a QA add-on and agent interfaces in many languages.',
        ro: 'Organizațiile de suport consacrate care vor agenți AI pe mesagerie, email și voce într-o singură suită, cu un add-on de evaluare a calității și interfață în multe limbi.',
        ru: 'Зрелым службам поддержки, которым нужны ИИ-агенты в мессенджерах, почте и голосе в одном пакете, с дополнением для контроля качества и интерфейсом на многих языках.',
      },
    },
  ],
  related: [
    { path: '/ai-customer-service', label: { en: 'AI customer service: how Fineguide answers your customers', ro: 'Customer service cu AI: cum răspunde Fineguide clienților tăi', ru: 'ИИ для обслуживания клиентов: как Fineguide отвечает вашим клиентам' } },
    { path: '/help-desk', label: { en: 'AI help desk and ticketing', ro: 'Helpdesk cu AI și tichete', ru: 'Хелпдеск с ИИ и тикетами' } },
    { path: '/ai-assistants', label: { en: 'AI Assistants', ro: 'Asistenți AI', ru: 'ИИ-ассистенты' } },
    { path: '/knowledge-base', label: { en: 'AI knowledge base', ro: 'Bază de cunoștințe AI', ru: 'База знаний с ИИ' } },
    { path: '/voice-ai', label: { en: 'AI Telephony on your own phone system', ro: 'Telefonie AI pe propria centrală', ru: 'ИИ-телефония на вашей АТС' } },
  ],
  summary: {
    en: 'Fineguide, Freshdesk, Intercom, Salesforce, Tidio and Zendesk: what each AI agent does, on which channels, whether it answers calls and in how many languages.',
    ro: 'Fineguide, Freshdesk, Intercom, Salesforce, Tidio și Zendesk: ce face fiecare agent AI, pe ce canale, dacă răspunde la apeluri și în câte limbi.',
    ru: 'Fineguide, Freshdesk, Intercom, Salesforce, Tidio и Zendesk: что делает каждый ИИ-агент, в каких каналах, отвечает ли на звонки и на скольких языках.',
  },
  copy: {
    en: {
      meta: {
        title: 'Best AI customer service software (2026) | Fineguide',
        description: 'AI customer service software compared for 2026: Fineguide, Freshdesk, Intercom, Salesforce, Tidio and Zendesk, with sourced facts on AI, channels and calls.',
      },
      crumb: 'Best AI customer service software',
      h1: 'The best AI customer service software',
      h1Accent: ' in 2026',
      shortAnswer:
        'The AI customer service software teams compare most in 2026 is Fineguide, Freshdesk, Intercom, Salesforce, Tidio and Zendesk. Intercom, Zendesk and Salesforce suit large support operations; Freshdesk suits ticket-centred teams; Tidio suits small online stores. Fineguide suits teams that want one AI assistant on chat, messaging apps, email and live phone calls, handing over to a person, with the CRM on the same customer record.',
      definition: {
        heading: 'What is AI customer service software?',
        body:
          'AI customer service software lets an AI agent answer customers’ questions on the channels they use, from the business’s own knowledge, take simple actions such as looking up an order, and pass the conversation to a person when it cannot help or the customer asks. The person who takes over sees the whole conversation, so the customer does not repeat themselves.',
      },
      method: {
        heading: 'How we chose and compared',
        items: [
          { term: 'Who is in it', desc: 'Platforms buyers put side by side when they look for an AI agent that resolves questions and escalates the rest: support suites, a CRM-led platform and live-chat tools with AI.' },
          { term: 'What we compared', desc: 'Four things from each vendor’s own pages: what the AI agent does, which channels it covers, whether it handles phone calls, and the languages it states. Nothing from review sites, forums or press releases.' },
          { term: 'What we left out', desc: 'Prices, plans’ prices and trials, which change often. Plan names appear only where a vendor ties a feature to one.' },
          { term: 'How current it is', desc: 'Each tool shows the date its facts were read. When a vendor changes its product, write to contact@fineguide.ai and we correct the page.' },
        ],
      },
      listHeading: 'The software, one by one',
      glanceHeading: 'Which software suits whom',
      faq: [
        { q: 'What is the best AI customer service software in 2026?', a: 'It depends on the team. For large support operations, Intercom, Zendesk or Salesforce; for a ticket-centred help desk, Freshdesk; for a small online store, Tidio; for one AI assistant on chat, messaging apps, email and phone calls with a CRM on the same record, Fineguide.' },
        { q: 'Which AI customer service tools work on chat, email and phone?', a: 'Fineguide’s assistants answer chat, messaging apps and email and take live calls over your own phone system (SIP). Intercom’s Fin covers chat, email and phone through Fin Voice; Zendesk’s AI agents cover messaging, email and voice (voice needs Zendesk voice); Salesforce’s Agentforce works on the web, the phone and in apps.' },
        { q: 'Which tools resolve questions automatically and escalate the rest to people?', a: 'All six in this guide hand conversations to people. In Fineguide the assistant hands over when the customer asks or one of your rules says so, and the person sees the whole history on the customer’s record.' },
        { q: 'Can the AI answer from my own documentation?', a: 'Yes. Fineguide’s assistants answer from the URLs, documents and PDFs you give them and can be limited to only what they have learned. Intercom’s Fin answers from help articles, documents and connected sources; Tidio’s Lyro from your support content.' },
        { q: 'What is the best AI customer support agent for a small business?', a: 'Small teams usually want something they can set up themselves and grow into. Tidio suits small online stores centred on live chat; Fineguide suits small teams that also take phone calls or sell, and it has a Free plan with 200 credits and no card needed.' },
        { q: 'Does Fineguide work with Zendesk or Help Scout?', a: 'Yes. Zendesk and Help Scout are among Fineguide’s integrations, so a team can keep its help desk and let Fineguide’s assistants answer first.' },
      ],
      closing: { heading: 'AI that answers first, people who take over', body: 'Start Fineguide on the Free plan, no card needed, or book a 30-minute walkthrough on your own support conversations.' },
    },
    ro: {
      meta: {
        title: 'Cele mai bune soluții de customer service cu AI (2026)',
        description: 'Software de customer service cu AI comparat pentru 2026: Fineguide, Freshdesk, Intercom, Salesforce, Tidio și Zendesk, cu surse despre AI, canale și apeluri.',
      },
      crumb: 'Cele mai bune soluții de customer service cu AI',
      h1: 'Cele mai bune soluții de customer service cu AI',
      h1Accent: ' în 2026',
      shortAnswer:
        'Soluțiile de customer service cu AI pe care le compară cel mai des echipele în 2026 sunt Fineguide, Freshdesk, Intercom, Salesforce, Tidio și Zendesk. Intercom, Zendesk și Salesforce se potrivesc operațiunilor mari de suport; Freshdesk, echipelor care lucrează pe tichete; Tidio, magazinelor online mici. Fineguide se potrivește echipelor care vor un singur asistent AI pe chat, mesagerie, email și apeluri în direct, care predă conversația unui om, cu CRM-ul pe aceeași fișă de client.',
      definition: {
        heading: 'Ce este software-ul de customer service cu AI?',
        body:
          'Software-ul de customer service cu AI lasă un agent AI să răspundă la întrebările clienților pe canalele pe care le folosesc, din cunoștințele firmei, să facă acțiuni simple, cum ar fi verificarea unei comenzi, și să predea conversația unui om când nu poate ajuta sau când clientul cere. Omul care preia vede toată conversația, așa că clientul nu repetă nimic.',
      },
      method: {
        heading: 'Cum am ales și comparat',
        items: [
          { term: 'Cine este inclus', desc: 'Platformele pe care cumpărătorii le pun alături când caută un agent AI care rezolvă întrebările și trimite restul la oameni: suite de suport, o platformă construită în jurul CRM-ului și instrumente de chat live cu AI.' },
          { term: 'Ce am comparat', desc: 'Patru lucruri, de pe paginile oficiale ale fiecărui furnizor: ce face agentul AI, ce canale acoperă, dacă preia apeluri telefonice și ce limbi declară. Nimic de pe site-uri de recenzii, forumuri sau comunicate de presă.' },
          { term: 'Ce am lăsat deoparte', desc: 'Prețurile, prețurile planurilor și perioadele de probă, care se schimbă des. Numele planurilor apar doar acolo unde furnizorul leagă o funcție de un plan.' },
          { term: 'Cât de actual este', desc: 'La fiecare instrument apare data la care au fost citite informațiile. Dacă un furnizor își schimbă produsul, scrie la contact@fineguide.ai și corectăm pagina.' },
        ],
      },
      listHeading: 'Soluțiile, pe rând',
      glanceHeading: 'Cui i se potrivește fiecare soluție',
      faq: [
        { q: 'Care este cel mai bun software de customer service cu AI în 2026?', a: 'Depinde de echipă. Pentru operațiuni mari de suport, Intercom, Zendesk sau Salesforce; pentru un helpdesk axat pe tichete, Freshdesk; pentru un magazin online mic, Tidio; pentru un singur asistent AI pe chat, mesagerie, email și telefon, cu un CRM pe aceeași fișă, Fineguide.' },
        { q: 'Ce soluții de customer service cu AI lucrează pe chat, email și telefon?', a: 'Asistenții Fineguide răspund pe chat, în aplicațiile de mesagerie și pe email și preiau apeluri în direct prin propria ta centrală (SIP). Fin de la Intercom acoperă chatul, emailul și telefonul prin Fin Voice; agenții AI Zendesk acoperă mesageria, emailul și vocea (vocea cere Zendesk voice); Agentforce de la Salesforce lucrează pe web, la telefon și în aplicații.' },
        { q: 'Ce soluții rezolvă singure întrebările și trimit restul la oameni?', a: 'Toate cele șase din acest ghid predau conversațiile unor oameni. În Fineguide asistentul predă când clientul cere sau când o regulă de-a ta o spune, iar omul vede tot istoricul pe fișa clientului.' },
        { q: 'Poate AI-ul să răspundă din documentația mea?', a: 'Da. Asistenții Fineguide răspund din URL-urile, documentele și PDF-urile pe care le dai și pot fi limitați doar la ce au învățat. Fin de la Intercom răspunde din articolele de ajutor, documente și surse conectate; Lyro de la Tidio, din conținutul tău de suport.' },
        { q: 'Care este cel mai bun agent AI de suport pentru o firmă mică?', a: 'Echipele mici vor de obicei ceva ce pot configura singure și care crește odată cu ele. Tidio se potrivește magazinelor online mici axate pe chat live; Fineguide, echipelor mici care preiau și apeluri sau vând, și are un plan Free cu 200 de credite, fără card.' },
        { q: 'Funcționează Fineguide cu Zendesk sau Help Scout?', a: 'Da. Zendesk și Help Scout sunt printre integrările Fineguide, așa că o echipă își poate păstra helpdesk-ul și îi lasă pe asistenții Fineguide să răspundă primii.' },
      ],
      closing: { heading: 'AI care răspunde primul, oameni care preiau', body: 'Începe cu Fineguide pe planul Free, fără card, sau programează o prezentare de 30 de minute pe conversațiile tale de suport.' },
    },
    ru: {
      meta: {
        title: 'Лучшие программы для поддержки клиентов с ИИ (2026)',
        description: 'Программы поддержки клиентов с ИИ в 2026 году: Fineguide, Freshdesk, Intercom, Salesforce, Tidio и Zendesk — факты об ИИ, каналах и звонках с источниками.',
      },
      crumb: 'Лучшие программы для поддержки клиентов с ИИ',
      h1: 'Лучшие программы для поддержки клиентов с ИИ',
      h1Accent: ' в 2026 году',
      shortAnswer:
        'Чаще всего в 2026 году сравнивают такие программы поддержки клиентов с ИИ: Fineguide, Freshdesk, Intercom, Salesforce, Tidio и Zendesk. Intercom, Zendesk и Salesforce подходят крупным службам поддержки; Freshdesk — командам, работающим с тикетами; Tidio — небольшим интернет-магазинам. Fineguide подходит командам, которым нужен один ИИ-ассистент в чатах, мессенджерах, почте и на живых звонках, с передачей человеку и CRM в той же карточке клиента.',
      definition: {
        heading: 'Что такое программа поддержки клиентов с ИИ?',
        body:
          'Программа поддержки клиентов с ИИ позволяет ИИ-агенту отвечать на вопросы клиентов в привычных им каналах по знаниям компании, выполнять простые действия — например, проверять заказ — и передавать диалог человеку, когда помочь не может или клиент просит. Подключившийся сотрудник видит весь разговор, и клиенту не приходится повторяться.',
      },
      method: {
        heading: 'Как мы выбирали и сравнивали',
        items: [
          { term: 'Кто вошёл в обзор', desc: 'Платформы, которые сравнивают, когда ищут ИИ-агента, решающего вопросы и передающего остальные людям: пакеты для поддержки, платформа на основе CRM и сервисы онлайн-чата с ИИ.' },
          { term: 'Что сравнивали', desc: 'Четыре вещи с официальных страниц каждого производителя: что делает ИИ-агент, какие каналы охватывает, есть ли звонки и какие языки заявлены. Ничего с сайтов отзывов, форумов и пресс-релизов.' },
          { term: 'Что не включали', desc: 'Цены, стоимость тарифов и пробные периоды — они часто меняются. Названия тарифов упоминаются только там, где производитель привязывает к ним функцию.' },
          { term: 'Насколько свежие данные', desc: 'У каждого инструмента указана дата, когда прочитаны факты. Если производитель изменил продукт, напишите на contact@fineguide.ai — мы исправим страницу.' },
        ],
      },
      listHeading: 'Программы по порядку',
      glanceHeading: 'Кому подходит каждая программа',
      faq: [
        { q: 'Какая программа поддержки клиентов с ИИ лучше в 2026 году?', a: 'Зависит от команды. Для крупной поддержки — Intercom, Zendesk или Salesforce; для хелпдеска вокруг тикетов — Freshdesk; для небольшого интернет-магазина — Tidio; для одного ИИ-ассистента в чатах, мессенджерах, почте и звонках с CRM в той же карточке — Fineguide.' },
        { q: 'Какие ИИ-сервисы поддержки работают в чате, почте и по телефону?', a: 'Ассистенты Fineguide отвечают в чатах, мессенджерах и почте и принимают живые звонки через вашу телефонию (SIP). Fin от Intercom работает в чате, почте и по телефону через Fin Voice; ИИ-агенты Zendesk — в мессенджерах, почте и голосе (для голоса нужен Zendesk voice); Agentforce от Salesforce — на сайте, по телефону и в приложениях.' },
        { q: 'Какие сервисы сами решают вопросы, а остальные передают людям?', a: 'Все шесть из обзора передают диалоги людям. В Fineguide ассистент передаёт разговор, когда клиент просит или срабатывает ваше правило, и сотрудник видит всю историю в карточке клиента.' },
        { q: 'Может ли ИИ отвечать по моей документации?', a: 'Да. Ассистенты Fineguide отвечают по ссылкам, документам и PDF, которые вы им даёте, и их можно ограничить только изученным. Fin от Intercom отвечает по статьям справки, документам и подключённым источникам; Lyro от Tidio — по вашим материалам поддержки.' },
        { q: 'Какой ИИ-агент поддержки лучше для малого бизнеса?', a: 'Небольшим командам обычно нужно то, что можно настроить самим и на чём можно расти. Tidio подходит небольшим интернет-магазинам вокруг онлайн-чата; Fineguide — небольшим командам, которые ещё принимают звонки или продают; у него есть бесплатный тариф: 200 кредитов, без карты.' },
        { q: 'Работает ли Fineguide с Zendesk или Help Scout?', a: 'Да. Zendesk и Help Scout есть среди интеграций Fineguide, так что команда может оставить свой хелпдеск, а первыми будут отвечать ассистенты Fineguide.' },
      ],
      closing: { heading: 'ИИ отвечает первым, люди подключаются', body: 'Начните с Fineguide на бесплатном тарифе без карты или запишитесь на 30-минутную демонстрацию на ваших обращениях в поддержку.' },
    },
  },
};

export default guide;
