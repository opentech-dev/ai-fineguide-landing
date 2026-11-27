import type { BestGuide } from './types';

// Facts per tool come from src/data/compare.ts (vendor pages, dated per tool). This file only says who each tool suits.
const guide: BestGuide = {
  slug: 'ai-voice-agents',
  updated: '2026-11-27',
  rows: ['ai', 'phone', 'languages'],
  picks: [
    {
      id: 'fineguide',
      bestFor: {
        en: 'Businesses that want an AI agent on their own phone numbers over SIP, for inbound calls and outbound campaigns, with callers recognised from the CRM and callbacks saved as tasks.',
        ro: 'Firmele care vor un agent AI pe propriile numere de telefon, prin SIP, pentru apeluri primite și campanii de apeluri, cu apelanții recunoscuți din CRM și cererile de revenire salvate ca sarcini.',
        ru: 'Компаниям, которым нужен ИИ-агент на своих номерах через SIP — для входящих звонков и исходящих обзвонов, с узнаванием звонящих по CRM и обратными звонками в виде задач.',
      },
    },
    {
      id: 'aircall',
      compare: 'aircall-talkdesk',
      bestFor: {
        en: 'Sales and support teams that want a cloud business phone system with numbers in many countries, plus AI voice agents that answer, call out and hand off to a rep.',
        ro: 'Echipele de vânzări și suport care vor un sistem telefonic în cloud, cu numere în multe țări, plus agenți vocali AI care răspund, sună și predau apelul unui coleg.',
        ru: 'Отделам продаж и поддержки, которым нужна облачная телефония с номерами во многих странах и голосовые ИИ-агенты, которые отвечают, звонят сами и передают звонок сотруднику.',
      },
    },
    {
      id: 'intercom',
      compare: 'intercom',
      bestFor: {
        en: 'Support teams already on Intercom that want the same Fin AI agent on phone calls, on an Intercom number, forwarded calls or a contact-center platform over SIP.',
        ro: 'Echipele de suport care lucrează deja în Intercom și vor același agent AI Fin pe apeluri, pe un număr Intercom, pe apeluri redirecționate sau pe o platformă de contact center prin SIP.',
        ru: 'Командам поддержки на Intercom, которым нужен тот же ИИ-агент Fin на звонках: на номере Intercom, с переадресацией или через контакт-центр по SIP.',
      },
    },
    {
      id: 'retell',
      compare: 'vapi-retell',
      bestFor: {
        en: 'Teams that want to build voice agents from a prompt or a no-code conversation flow, on Retell numbers or their own SIP trunk, with a dialer for outbound campaigns.',
        ro: 'Echipele care vor să construiască agenți vocali dintr-un prompt sau dintr-un flux de conversație fără cod, pe numere Retell sau pe propriul trunchi SIP, cu un dialer pentru campanii.',
        ru: 'Командам, которые хотят собирать голосовых агентов из промпта или визуального сценария без кода, на номерах Retell или своём SIP-транке, с дозвоном для исходящих кампаний.',
      },
    },
    {
      id: 'synthflow',
      compare: 'synthflow',
      bestFor: {
        en: 'Businesses that want a no-code builder for phone agents, with a flow or prompt builder, knowledge bases from their documents and website, and actions such as booking meetings or transferring calls.',
        ro: 'Firmele care vor un constructor fără cod pentru agenți telefonici, cu editor de flux sau de prompt, baze de cunoștințe din documentele și site-ul lor și acțiuni precum programarea întâlnirilor sau transferul apelurilor.',
        ru: 'Компаниям, которым нужен конструктор телефонных агентов без кода: визуальный сценарий или промпт, базы знаний из их документов и сайта и действия вроде записи на встречу или перевода звонка.',
      },
    },
    {
      id: 'talkdesk',
      compare: 'aircall-talkdesk',
      bestFor: {
        en: 'Mid-size and large contact centers that want a full cloud contact center with AI agents on voice and digital channels and quality management built in.',
        ro: 'Contact centerele mijlocii și mari care vor un contact center complet în cloud, cu agenți AI pe voce și canale digitale și managementul calității inclus.',
        ru: 'Средним и крупным контакт-центрам, которым нужен полноценный облачный контакт-центр с ИИ-агентами в голосе и цифровых каналах и встроенным контролем качества.',
      },
    },
    {
      id: 'vapi',
      compare: 'vapi-retell',
      bestFor: {
        en: 'Developers who want to assemble their own voice agents, choosing the speech recognition, the language model and the voice, and connect their own numbers or SIP trunk.',
        ro: 'Dezvoltatorii care vor să își asambleze singuri agenții vocali, alegând recunoașterea vocii, modelul de limbaj și vocea, și să își conecteze numerele sau trunchiul SIP.',
        ru: 'Разработчикам, которые хотят собрать голосового агента сами — выбрать распознавание речи, языковую модель и голос — и подключить свои номера или SIP-транк.',
      },
    },
  ],
  related: [
    { path: '/voice-ai', label: { en: 'AI Telephony: AI calls on your own phone system', ro: 'AI Telephony: apeluri AI pe propria centrală', ru: 'AI Telephony: ИИ-звонки через вашу телефонию' } },
    { path: '/campaigns', label: { en: 'Outbound call campaigns with AI', ro: 'Campanii de apeluri cu AI', ru: 'Исходящие обзвоны с ИИ' } },
    { path: '/call-center', label: { en: 'Call center software with AI voice agents', ro: 'Soft pentru call center cu agenți vocali AI', ru: 'Программа для колл-центра с голосовыми ИИ-агентами' } },
    { path: '/voice-qa', label: { en: 'Voice QA: every recorded call scored', ro: 'Voice QA: fiecare apel înregistrat evaluat', ru: 'Voice QA: оценка каждого записанного звонка' } },
  ],
  summary: {
    en: 'Fineguide, Aircall, Intercom, Retell AI, Synthflow, Talkdesk and Vapi: what each AI voice agent does on calls, how it connects to phone lines and which languages it speaks.',
    ro: 'Fineguide, Aircall, Intercom, Retell AI, Synthflow, Talkdesk și Vapi: ce face fiecare agent vocal AI la apeluri, cum se conectează la linii și ce limbi vorbește.',
    ru: 'Fineguide, Aircall, Intercom, Retell AI, Synthflow, Talkdesk и Vapi: что делает каждый голосовой ИИ-агент на звонках, как подключается к линиям и на каких языках говорит.',
  },
  copy: {
    en: {
      meta: {
        title: 'Best AI voice agents for business calls (2026) | Fineguide',
        description: 'AI voice agents and receptionists compared for 2026: Fineguide, Aircall, Intercom, Retell AI, Synthflow, Talkdesk and Vapi, on calls, phone lines and languages.',
      },
      crumb: 'Best AI voice agents',
      h1: 'The best AI voice agents for business calls',
      h1Accent: ' in 2026',
      shortAnswer:
        'The AI voice agents businesses compare most are Fineguide, Aircall, Intercom (Fin Voice), Retell AI, Synthflow, Talkdesk and Vapi. Vapi, Retell and Synthflow suit teams that build their own agents; Aircall and Talkdesk come with a full cloud phone system; Intercom suits support teams already on it. Fineguide puts the same AI assistant you run on chat on your own numbers over SIP, for inbound calls and outbound campaigns, with the CRM on the same record.',
      definition: {
        heading: 'What is an AI voice agent?',
        body:
          'An AI voice agent is software that answers or places phone calls and talks with the caller in natural speech: it understands what is said, answers from your information, takes actions such as booking or creating a task, and transfers the call to a person when needed. Used to answer a business line, it is often called an AI receptionist or AI phone answering service.',
      },
      method: {
        heading: 'How we chose and compared',
        items: [
          { term: 'Who is in it', desc: 'The voice-agent platforms and phone systems with AI agents that buyers put side by side: developer platforms, cloud phone systems and support suites with voice.' },
          { term: 'What we compared', desc: 'Three things from each vendor’s own pages: what the AI agent does, how it connects to phone numbers (bought numbers, your own carrier or SIP), and which languages it speaks. Nothing from review sites or forums.' },
          { term: 'What we left out', desc: 'Prices and per-minute rates of other vendors, which change often. Fineguide’s own rate is on its pricing page.' },
          { term: 'How current it is', desc: 'Each tool shows the date its facts were read. If a vendor has changed its product, write to contact@fineguide.ai and we correct the page.' },
        ],
      },
      listHeading: 'The voice agents, one by one',
      glanceHeading: 'Which voice agent suits whom',
      faq: [
        { q: 'What is the best AI voice agent for business phone calls?', a: 'It depends on what you already have. To build your own agent from parts, Vapi or Retell AI; for a new cloud phone system with AI agents, Aircall or Talkdesk; for support teams on Intercom, Fin Voice; for an AI assistant on your existing numbers that also handles outbound campaigns and writes into a CRM, Fineguide.' },
        { q: 'What is the best AI receptionist for a small business?', a: 'One that answers on the number you already use, knows your business and passes callers to a person when they ask. Fineguide answers over your own carrier or office phone system (SIP), greets known callers by first name from the CRM, handles answering hours and saves callback requests as CRM tasks.' },
        { q: 'Which AI voice agent connects to my existing phone system over SIP?', a: 'Fineguide connects to your own carrier or PBX over a standard SIP account or trunk (UDP, TCP or TLS), so your numbers and carrier stay as they are. Retell AI and Vapi also connect your own SIP trunk, Synthflow connects a carrier or PBX over SIP on its Enterprise plan and also works with Twilio numbers and platforms such as Five9, Genesys Cloud, Zoom and RingCentral, Intercom’s Fin Voice can connect over SIP with contact-center platforms, and Aircall’s AI agents work with or without an Aircall phone system.' },
        { q: 'Which AI voice agents handle both inbound and outbound calls?', a: 'Fineguide (inbound calls and outbound campaigns of three kinds: outreach, survey and promotion), Retell AI (its Dialer runs outbound campaigns), Vapi (outbound campaigns from the dashboard), Synthflow (outbound campaigns through its Platform API) and Aircall (agents call out when a lead arrives or an appointment approaches).' },
        { q: 'What are good Vapi and Retell AI alternatives?', a: 'For a ready-made agent instead of a developer platform, Fineguide runs the same assistants on chat and calls with a CRM, campaigns and call scoring, and Synthflow offers a no-code builder for phone agents; Aircall and Talkdesk add AI agents to a full phone system.' },
        { q: 'Which languages do AI voice agents speak?', a: 'It varies: Aircall lists 38 languages for its AI Voice Agents, Talkdesk 59+ for Autopilot, Retell AI 57 for voices, Synthflow 33 for single-language agents and up to 60 for multilingual ones, and Vapi depends on the providers you choose. Fineguide’s AI calls run in 14 languages, including Spanish, German, Romanian and Russian.' },
      ],
      closing: { heading: 'Put an AI assistant on your own phone lines', body: 'Start Fineguide on the Free plan, no card needed, place a test call to your own number, or book a 30-minute walkthrough.' },
    },
    ro: {
      meta: {
        title: 'Cei mai buni agenți vocali AI pentru afaceri (2026)',
        description: 'Agenți vocali AI și recepționeri AI comparați pentru 2026: Fineguide, Aircall, Intercom, Retell AI, Synthflow, Talkdesk și Vapi, după apeluri, linii și limbi.',
      },
      crumb: 'Cei mai buni agenți vocali AI',
      h1: 'Cei mai buni agenți vocali AI pentru apelurile firmei',
      h1Accent: ' în 2026',
      shortAnswer:
        'Agenții vocali AI pe care firmele îi compară cel mai des sunt Fineguide, Aircall, Intercom (Fin Voice), Retell AI, Synthflow, Talkdesk și Vapi. Vapi, Retell și Synthflow se potrivesc echipelor care își construiesc singure agenții; Aircall și Talkdesk vin cu un sistem telefonic complet în cloud; Intercom, echipelor de suport care îl folosesc deja. Fineguide pune același asistent AI de pe chat pe propriile tale numere, prin SIP, pentru apeluri primite și campanii, cu CRM-ul pe aceeași fișă.',
      definition: {
        heading: 'Ce este un agent vocal AI?',
        body:
          'Un agent vocal AI este un program care răspunde la apeluri sau sună și vorbește cu omul în limbaj natural: înțelege ce se spune, răspunde din informațiile tale, face acțiuni precum o programare sau o sarcină și transferă apelul unui om când e nevoie. Când răspunde la linia firmei, i se spune adesea recepționer AI sau robot telefonic.',
      },
      method: {
        heading: 'Cum am ales și comparat',
        items: [
          { term: 'Cine este inclus', desc: 'Platformele de agenți vocali și sistemele telefonice cu agenți AI pe care cumpărătorii le pun alături: platforme pentru dezvoltatori, telefonie în cloud și suite de suport cu voce.' },
          { term: 'Ce am comparat', desc: 'Trei lucruri, de pe paginile oficiale ale fiecărui furnizor: ce face agentul AI, cum se conectează la numere (numere cumpărate, operatorul tău sau SIP) și ce limbi vorbește. Nimic de pe site-uri de recenzii sau forumuri.' },
          { term: 'Ce am lăsat deoparte', desc: 'Prețurile și tarifele pe minut ale altor furnizori, care se schimbă des. Tariful Fineguide este pe pagina de prețuri.' },
          { term: 'Cât de actual este', desc: 'La fiecare instrument apare data la care au fost citite informațiile. Dacă un furnizor și-a schimbat produsul, scrie la contact@fineguide.ai și corectăm pagina.' },
        ],
      },
      listHeading: 'Agenții vocali, pe rând',
      glanceHeading: 'Cui i se potrivește fiecare agent vocal',
      faq: [
        { q: 'Care este cel mai bun agent vocal AI pentru apelurile firmei?', a: 'Depinde de ce ai deja. Ca să îți construiești agentul din componente, Vapi sau Retell AI; pentru un sistem telefonic nou în cloud cu agenți AI, Aircall sau Talkdesk; pentru echipele de suport din Intercom, Fin Voice; pentru un asistent AI pe numerele pe care le ai, care face și campanii și scrie în CRM, Fineguide.' },
        { q: 'Care este cel mai bun recepționer AI pentru o firmă mică?', a: 'Unul care răspunde pe numărul pe care îl folosești deja, îți cunoaște afacerea și dă apelul unui om când clientul cere. Fineguide răspunde prin operatorul sau centrala ta (SIP), salută pe nume apelanții cunoscuți din CRM, ține cont de programul de lucru și salvează cererile de revenire ca sarcini în CRM.' },
        { q: 'Ce agent vocal AI se conectează la centrala mea prin SIP?', a: 'Fineguide se conectează la operatorul sau centrala ta printr-un cont sau trunchi SIP standard (UDP, TCP sau TLS), așa că numerele și operatorul rămân cum sunt. Retell AI și Vapi conectează și ele propriul trunchi SIP, Synthflow conectează un operator sau o centrală prin SIP pe planul Enterprise și lucrează și cu numere Twilio și platforme ca Five9, Genesys Cloud, Zoom și RingCentral, Fin Voice de la Intercom se poate conecta prin SIP la platforme de contact center, iar agenții AI Aircall funcționează cu sau fără sistemul telefonic Aircall.' },
        { q: 'Ce agenți vocali AI preiau și apeluri primite, și apeluri efectuate?', a: 'Fineguide (apeluri primite și trei tipuri de campanii: prospectare, sondaj și promoție), Retell AI (Dialer-ul rulează campanii), Vapi (campanii din panou), Synthflow (campanii prin Platform API) și Aircall (agenții sună când apare un lead sau se apropie o programare).' },
        { q: 'Care sunt alternative bune la Vapi și Retell AI?', a: 'Pentru un agent gata făcut în locul unei platforme pentru dezvoltatori, Fineguide rulează aceiași asistenți pe chat și pe apeluri, cu CRM, campanii și evaluarea apelurilor, iar Synthflow oferă un constructor fără cod pentru agenți telefonici; Aircall și Talkdesk adaugă agenți AI la un sistem telefonic complet.' },
        { q: 'Ce limbi vorbesc agenții vocali AI?', a: 'Diferă: Aircall listează 38 de limbi pentru AI Voice Agents, Talkdesk peste 59 pentru Autopilot, Retell AI 57 pentru voci, Synthflow 33 pentru agenții într-o singură limbă și până la 60 pentru cei multilingvi, iar la Vapi depinde de furnizorii aleși. Apelurile AI Fineguide sunt în 14 limbi, între ele româna, rusa, spaniola și germana.' },
      ],
      closing: { heading: 'Pune un asistent AI pe propriile tale linii', body: 'Începe cu Fineguide pe planul Free, fără card, fă un apel de test pe numărul tău sau programează o prezentare de 30 de minute.' },
    },
    ru: {
      meta: {
        title: 'Лучшие голосовые ИИ-агенты для бизнеса (2026)',
        description: 'Голосовые ИИ-агенты и ИИ-секретари в сравнении на 2026 год: Fineguide, Aircall, Intercom, Retell AI, Synthflow, Talkdesk и Vapi — звонки, линии и языки.',
      },
      crumb: 'Лучшие голосовые ИИ-агенты',
      h1: 'Лучшие голосовые ИИ-агенты для звонков бизнеса',
      h1Accent: ' в 2026 году',
      shortAnswer:
        'Чаще всего сравнивают таких голосовых ИИ-агентов: Fineguide, Aircall, Intercom (Fin Voice), Retell AI, Synthflow, Talkdesk и Vapi. Vapi, Retell и Synthflow подходят тем, кто собирает агента сам; Aircall и Talkdesk идут вместе с полноценной облачной телефонией; Intercom — командам поддержки, которые уже в нём работают. Fineguide ставит того же ИИ-ассистента, что отвечает в чатах, на ваши номера через SIP — для входящих и исходящих обзвонов, с CRM в той же карточке.',
      definition: {
        heading: 'Что такое голосовой ИИ-агент?',
        body:
          'Голосовой ИИ-агент — это программа, которая принимает или совершает звонки и говорит с человеком живой речью: понимает сказанное, отвечает по вашим данным, выполняет действия вроде записи или создания задачи и переводит звонок на сотрудника, когда нужно. Если он отвечает на номер компании, его часто называют ИИ-секретарём или виртуальным оператором.',
      },
      method: {
        heading: 'Как мы выбирали и сравнивали',
        items: [
          { term: 'Кто вошёл в обзор', desc: 'Платформы голосовых агентов и телефония с ИИ-агентами, которые сравнивают покупатели: платформы для разработчиков, облачная телефония и пакеты для поддержки с голосом.' },
          { term: 'Что сравнивали', desc: 'Три вещи с официальных страниц каждого производителя: что делает ИИ-агент, как он подключается к номерам (купленные номера, свой оператор или SIP) и на каких языках говорит. Ничего с сайтов отзывов и форумов.' },
          { term: 'Что не включали', desc: 'Цены и поминутные тарифы других производителей — они часто меняются. Тариф Fineguide указан на странице цен.' },
          { term: 'Насколько свежие данные', desc: 'У каждого инструмента указана дата, когда прочитаны факты. Если производитель изменил продукт, напишите на contact@fineguide.ai — мы исправим страницу.' },
        ],
      },
      listHeading: 'Голосовые агенты по порядку',
      glanceHeading: 'Кому подходит каждый голосовой агент',
      faq: [
        { q: 'Какой голосовой ИИ-агент лучше для звонков бизнеса?', a: 'Зависит от того, что у вас уже есть. Чтобы собрать агента из компонентов — Vapi или Retell AI; для новой облачной телефонии с ИИ-агентами — Aircall или Talkdesk; командам поддержки на Intercom — Fin Voice; для ИИ-ассистента на ваших номерах, который ещё и обзванивает и пишет в CRM, — Fineguide.' },
        { q: 'Какой ИИ-секретарь лучше для малого бизнеса?', a: 'Тот, что отвечает на уже привычный номер, знает ваш бизнес и переводит звонок на человека по просьбе клиента. Fineguide работает через вашего оператора или офисную АТС (SIP), приветствует знакомых клиентов по имени из CRM, учитывает часы работы и сохраняет просьбы перезвонить как задачи в CRM.' },
        { q: 'Какой голосовой ИИ-агент подключается к моей АТС по SIP?', a: 'Fineguide подключается к вашему оператору или АТС через стандартную SIP-учётку или транк (UDP, TCP или TLS), так что номера и оператор остаются прежними. Retell AI и Vapi тоже подключают ваш SIP-транк, Synthflow подключает оператора или АТС по SIP на тарифе Enterprise и работает с номерами Twilio и платформами вроде Five9, Genesys Cloud, Zoom и RingCentral, Fin Voice от Intercom может подключаться по SIP к контакт-центрам, а ИИ-агенты Aircall работают с телефонией Aircall или без неё.' },
        { q: 'Какие голосовые ИИ-агенты принимают и совершают звонки?', a: 'Fineguide (входящие и три типа обзвонов: привлечение, опрос и промо), Retell AI (Dialer запускает исходящие кампании), Vapi (кампании из панели), Synthflow (кампании через Platform API) и Aircall (агенты звонят, когда приходит лид или приближается встреча).' },
        { q: 'Какие есть альтернативы Vapi и Retell AI?', a: 'Если нужен готовый агент, а не платформа для разработчиков: Fineguide запускает одних и тех же ассистентов в чатах и на звонках, с CRM, обзвонами и оценкой звонков, а Synthflow даёт конструктор телефонных агентов без кода; Aircall и Talkdesk добавляют ИИ-агентов к полноценной телефонии.' },
        { q: 'На каких языках говорят голосовые ИИ-агенты?', a: 'По-разному: у Aircall для AI Voice Agents указано 38 языков, у Talkdesk для Autopilot — 59+, у Retell AI — 57 для голосов, у Synthflow — 33 для одноязычных агентов и до 60 для многоязычных, у Vapi зависит от выбранных провайдеров. ИИ-звонки Fineguide идут на 14 языках, среди них русский, румынский, испанский и немецкий.' },
      ],
      closing: { heading: 'Поставьте ИИ-ассистента на свои линии', body: 'Начните с Fineguide на бесплатном тарифе без карты, сделайте тестовый звонок на свой номер или запишитесь на 30-минутную демонстрацию.' },
    },
  },
};

export default guide;
