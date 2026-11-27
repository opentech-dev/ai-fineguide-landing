import type { Solution } from './types';

const solution: Solution = {
  slug: 'ai-customer-service',
  image: 'voice-desk.jpg',
  imageAlt: {
    en: 'A desk phone and a notepad on a wooden front desk, with an office and colleagues at work behind it',
    ro: 'Un telefon de birou și un carnețel pe un birou de recepție din lemn, cu un birou și colegi la lucru în spate',
    ru: 'Офисный телефон и блокнот на деревянной стойке, за ней офис и сотрудники за работой',
  },
  appName: 'Fineguide AI Customer Service',
  checked: '2026-11-27',
  reading: ['/blog/human-handoff-ai-to-live-agent/', '/blog/train-a-chatbot-on-your-documents/', '/blog/zendesk-freshdesk-alternative-ai-help-desk/', '/blog/ai-email-assistant-shared-inbox/', '/blog/chatbot-analytics-metrics/', '/blog/ai-customer-service-for-telecom-operators/'],
  sources: [
    'ai-fineguide-landing src/data/solutions/help-desk.ts (verified 2026-11-25: AI answers first on the chat channels, limited to what it learned; handover when the customer asks for a person in English, Romanian or Russian or a described situation comes up, back to the assistant after 20 minutes of silence unless changed; queue, routing, departments, out-of-hours message; support request button → Inbox thread + CRM contact + Ticket task; Zendesk / Help Scout; reports: conversations, escalation rate, median first response, median resolution; analytics: satisfaction, sentiment, resolution, intent; ticketing from Starter)',
    'ai-fineguide-landing src/data/solutions/knowledge-base.ts (verified 2026-11-25: websites, documents, questions and answers, web search only when nothing learned answers; only-what-it-has-learned mode with your own reply; answers in the customer’s language)',
    'ai-fineguide-landing src/data/solutions/ai-email-assistant.ts (verified 2026-11-25: Human only / Assistant drafts / Assistant replies per mailbox, 2-minute hold by default, 3 AI replies per thread by default, steps back once a teammate replies)',
    'ai-fineguide-landing src/data/solutions/call-center.ts (verified 2026-11-25: assistants answer inbound calls over SIP in 14 languages, transfer to a team number, callback requests as CRM tasks, transcripts)',
    'ai-backoffice-frontend packages/ui/src/components/chat/ChatFeedback.tsx (thumbs up / down on AI replies) + apps/ai-workspace/src/modules/agents/webhooks/types.ts RATE_MESSAGE',
    'ai-fineguide-landing public/llms.txt (assistant actions: HTTP calls from a pasted cURL command with stored secrets and a test panel; channels; widget interface in 24 languages; credits: AI reply 1, AI email draft 1; CRM, Messages and email use none; Free 200 credits)',
    'ai-fineguide-landing src/data/compare.ts + compare-pages/{intercom,zendesk,freshdesk,tidio,salesforce}.ts (competitor capabilities, read on vendor pages 2026-11-25)',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Customer Service Software and Support Agent | Fineguide',
        description:
          'AI customer service software: an AI support agent answers from your knowledge on chat, email and phone, hands over to your team and tracks every request.',
      },
      hero: {
        eyebrow: 'AI customer service',
        title: 'Customers answered first,',
        titleAccent: ' people where it counts.',
        subtitle:
          'An AI support agent answers from your own knowledge on chat, email and phone calls, passes the conversations that need a person to your team, and keeps every request on the customer’s record.',
      },
      definition: {
        heading: 'What is AI customer service software?',
        body:
          'AI customer service software uses an AI agent to answer customer questions from a company’s own knowledge and passes the rest to people with the full conversation. Fineguide’s AI customer service puts one support assistant on website chat, messaging apps such as WhatsApp and Instagram, your own email and phone calls, answering from your pages, documents and FAQ. It hands the conversation to your team when the customer asks for a person or one of your rules says so, and support requests become tickets in one shared inbox, linked to the CRM contact.',
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'An AI agent in front, your team behind it.',
        body:
          'The assistant takes the questions it can answer well and hands over the rest, so your team spends its time on the conversations that need a person.',
        items: [
          {
            term: 'Answers from your knowledge',
            desc: 'The assistant answers from your website, documents, PDFs and your own questions and answers. Limit it to only what it has learned, with your own reply for anything else, or let it search the web when nothing it learned answers.',
          },
          {
            term: 'Chat, email and phone',
            desc: 'One assistant answers on the website chat, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord, in your support mailboxes and on inbound phone calls over your own phone system, in the customer’s language.',
          },
          {
            term: 'Handover to a person',
            desc: 'A conversation goes to your team when the customer asks for a person, in English, Romanian or Russian, or when it matches situations you describe in your own words, such as a refund request. The customer is told an operator is being connected and the assistant stops.',
          },
          {
            term: 'Tickets and a shared inbox',
            desc: 'A support request button lets visitors leave their name, email and problem; each request opens a thread in the inbox, linked to a CRM contact, and adds a ticket task to your board. Queue, routing, departments and business hours decide who answers.',
          },
          {
            term: 'AI on support email, with safeguards',
            desc: 'Every mailbox starts human-only. Turn on drafts a person approves, or replies the assistant sends after a 2-minute hold, and it hands the thread to a person after a set number of AI replies or as soon as a teammate replies.',
          },
          {
            term: 'Actions in your systems',
            desc: 'Assistant actions call your own systems over HTTP, built from a pasted cURL command with stored secrets and a test panel, so the assistant can look up an order or a booking while it answers.',
          },
          {
            term: 'Zendesk and Help Scout',
            desc: 'If your team already works in Zendesk or Help Scout, each support request can also become a Zendesk ticket or a Help Scout conversation.',
          },
          {
            term: 'Analytics and ratings',
            desc: 'Customers rate AI replies with a thumbs up or down. Assistant analytics read satisfaction, sentiment, resolution and intent per conversation; team reports show escalation rate, first response and resolution times per operator.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it is for',
        heading: 'Support teams of every size.',
        items: [
          { term: 'Small businesses', desc: 'Questions answered at any hour without a support team on shift, and a person called in only when needed.' },
          { term: 'Growing support teams', desc: 'Volume handled without hiring for every new channel, with chat and email in one inbox and routing by department.' },
          { term: 'Online stores and SaaS', desc: 'Order, delivery and how-to questions answered from your docs, with actions that look up the customer’s own data.' },
          { term: 'Companies that also take calls', desc: 'The same assistant on the phone, transfers to your team on request and callback requests saved as tasks.' },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your help pages to an AI support agent.',
        body: 'You teach the assistant once and choose how it works with your team; every channel you connect uses the same setup.',
        items: [
          'Give the assistant your website, help articles, documents and the questions customers ask most.',
          'Choose whether it answers anything or only what it has learned, and what it says otherwise.',
          'Describe when conversations go to a person, then set up departments, routing and business hours.',
          'Connect your chat channels and support mailbox, and turn on the support request button.',
          'Follow ratings, analytics and reports, and add knowledge where the assistant hands over most.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          { term: 'Channels', desc: '9 chat channels (website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat, and amoCRM/Kommo), your own email over IMAP and SMTP, and phone calls over SIP.' },
          { term: 'Languages', desc: 'The assistant answers in the customer’s language; the chat widget’s interface comes in 24 languages and AI phone calls in 14.' },
          { term: 'Knowledge sources', desc: 'Websites, documents (PDF, Word, Excel, CSV, text, HTML, Markdown, JSON), your own questions and answers, and web search as a fallback.' },
          { term: 'Reports', desc: 'Conversations, escalation rate, median first response and median resolution, per operator, over 7, 30 or 90 days; satisfaction, sentiment, resolution and intent per conversation.' },
          { term: 'Integrations', desc: 'Zendesk, Help Scout and n8n; webhooks when a ticket is created and when a customer rates a reply.' },
          { term: 'Plans', desc: 'Start on the free plan with 200 credits and no card. An AI reply or an AI email draft is 1 credit; your team’s replies and reading or sending email use none. Ticketing comes with paid plans, from Starter.' },
        ],
      },
      alternatives: {
        eyebrow: 'How it compares',
        heading: 'Fineguide and the usual alternatives.',
        body:
          'AI customer service usually comes from a help desk suite, an AI agent added to a chat tool, or a large CRM platform. Here is how they differ by capability, with the sourced comparisons linked.',
        items: [
          {
            term: 'Help desk suites: Intercom and Zendesk',
            desc: 'Mature support platforms whose AI agents answer on messaging, email and voice, with ticketing and quality review. Fineguide is smaller and puts a sales CRM, AI calls over your own phone system and call scoring on the same customer record.',
            path: '/compare/zendesk',
            label: 'Fineguide vs Zendesk',
          },
          {
            term: 'AI agents in chat tools: Freshdesk and Tidio',
            desc: 'Freddy and Lyro answer chat and email from your support content and hand off to your team. Fineguide’s assistant also answers live phone calls and works on Telegram, Discord and inside JivoChat, amoCRM and Kommo.',
            path: '/compare/freshdesk',
            label: 'Fineguide vs Freshdesk',
          },
          {
            term: 'CRM platforms: Salesforce',
            desc: 'Agentforce AI agents grounded in Salesforce data, for companies already on Salesforce. Fineguide gives smaller teams AI agents, a CRM and a team inbox in one platform they can start on the free plan.',
            path: '/compare/salesforce',
            label: 'Fineguide vs Salesforce',
          },
          {
            term: 'The whole category, side by side',
            desc: 'Fineguide, Freshdesk, Intercom, Salesforce, Tidio and Zendesk, each with what its own pages say it does.',
            path: '/best/ai-customer-service-software',
            label: 'Best AI customer service software',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind AI customer service',
        links: [
          { path: '/help-desk', label: 'Help desk', desc: 'Tickets, routing, departments and handover in one shared inbox.' },
          { path: '/knowledge-base', label: 'AI knowledge base', desc: 'The pages, documents and FAQ your assistant answers from.' },
          { path: '/ai-email-assistant', label: 'AI email assistant', desc: 'AI on your support mailbox, with a person in charge.' },
          { path: '/omnichannel-chatbot', label: 'Omnichannel AI chatbot', desc: 'One assistant on every channel, one record per customer.' },
          { path: '/voice-ai', label: 'AI Telephony', desc: 'The same assistant answering phone calls.' },
        ],
      },
      faq: {
        heading: 'AI customer service: common questions',
        items: [
          {
            q: 'What is the best AI customer service software?',
            a: 'It depends on your team. Large support organisations often choose a help desk suite such as Zendesk or Intercom; small teams on website chat often start with Tidio. Fineguide fits when you want one AI agent on chat, email and phone calls, with a CRM and a shared inbox on the same customer record.',
          },
          {
            q: 'What is an AI customer support agent?',
            a: 'An AI support agent is an assistant that answers customers on its own from your company’s knowledge, takes simple actions such as looking up an order, and hands the conversation to a person when it cannot help or the customer asks.',
          },
          {
            q: 'Can AI customer service learn from my documentation?',
            a: 'Yes. Fineguide’s assistant learns from your website, uploaded documents and PDFs and your own questions and answers, and can be limited to answer only from them.',
          },
          {
            q: 'How does the AI hand a customer to a human agent?',
            a: 'When the customer asks for a person, or the conversation matches a situation you described, the assistant tells the customer an operator is being connected and stops. Your team picks the conversation up in Messages with its full history; if nobody answers for 20 minutes, the assistant takes over again unless you change that.',
          },
          {
            q: 'Does it work on chat, email and phone?',
            a: 'Yes. The same assistant answers on the website chat and messaging apps, drafts or sends replies in your support mailboxes, and answers inbound phone calls over your own phone system in 14 languages.',
          },
          {
            q: 'Which languages does it support?',
            a: 'The assistant replies in the language the customer writes in. The chat widget’s interface comes in 24 languages, and AI phone calls in 14, including English, Spanish, French, German, Romanian and Russian.',
          },
          {
            q: 'Is there free AI customer service software?',
            a: 'Fineguide has a free plan with 200 credits and no card needed, with the AI assistant, handover to a person and the shared inbox. Ticketing, Zendesk and Help Scout come with paid plans, from Starter.',
          },
        ],
      },
      closing: {
        heading: 'Let the AI answer first.',
        body: 'Give an assistant your help pages on the free plan, ask it what your customers ask, then ask it for a person. Or book a 30-minute demo on your own support work.',
      },
    },

    ro: {
      meta: {
        title: 'Soft AI pentru customer service și suport | Fineguide',
        description:
          'Soft AI pentru customer service: un agent AI de suport răspunde din cunoștințele tale pe chat, email și telefon, predă echipei și urmărește fiecare cerere.',
      },
      hero: {
        eyebrow: 'Customer service cu AI',
        title: 'Clienții primesc răspuns imediat,',
        titleAccent: ' oamenii intervin unde contează.',
        subtitle:
          'Un agent AI de suport răspunde din cunoștințele tale pe chat, email și la telefon, predă echipei conversațiile care au nevoie de un om și păstrează fiecare cerere pe fișa clientului.',
      },
      definition: {
        heading: 'Ce este un soft AI pentru customer service?',
        body:
          'Un soft AI pentru customer service folosește un agent AI care răspunde singur la întrebările clienților, din cunoștințele firmei, și predă restul oamenilor, cu toată conversația. Customer service-ul cu AI de la Fineguide pune un singur asistent de suport în chatul de pe site, pe WhatsApp, Telegram, Instagram, Messenger și alte canale de chat, pe emailul tău și la apeluri telefonice, cu răspunsuri din paginile, documentele și întrebările tale frecvente. Predă conversația echipei când clientul cere un om sau când una dintre regulile tale o spune, iar cererile de suport devin tichete într-un inbox comun, legate de contactul din CRM.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Un agent AI în față, echipa ta în spate.',
        body:
          'Asistentul preia întrebările la care poate răspunde bine și predă restul, așa că echipa își petrece timpul cu conversațiile care chiar au nevoie de un om.',
        items: [
          { term: 'Răspunsuri din cunoștințele tale', desc: 'Asistentul răspunde din site-ul tău, documente, PDF-uri și propriile întrebări și răspunsuri. Îl poți limita doar la ce a învățat, cu un răspuns al tău pentru rest, sau îl lași să caute pe internet când nimic din ce a învățat nu răspunde.' },
          { term: 'Chat, email și telefon', desc: 'Un singur asistent răspunde în chatul de pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack și Discord, în căsuțele de suport și la apelurile primite prin propria ta centrală, în limba clientului.' },
          { term: 'Preluare de către un om', desc: 'Conversația ajunge la echipă când clientul cere un om, în română, rusă sau engleză, ori când se potrivește cu situații descrise de tine, de exemplu o cerere de rambursare. Clientul află că este conectat cu un operator, iar asistentul se oprește.' },
          { term: 'Tichete și inbox comun', desc: 'Butonul de cerere de suport le permite vizitatorilor să lase numele, emailul și problema; fiecare cerere deschide o conversație în inbox, legată de un contact din CRM, și adaugă o sarcină de tip tichet pe tabla ta. Coada, rutarea, departamentele și programul decid cine răspunde.' },
          { term: 'AI pe emailul de suport, cu protecții', desc: 'Fiecare căsuță pornește doar cu oameni. Activezi ciorne aprobate de un om sau răspunsuri trimise de asistent după o așteptare de 2 minute, iar conversația trece la un om după un număr ales de răspunsuri AI sau imediat ce răspunde un coleg.' },
          { term: 'Acțiuni în sistemele tale', desc: 'Acțiunile asistentului apelează sistemele tale prin HTTP, construite dintr-o comandă cURL lipită, cu secrete stocate și un panou de test, așa că asistentul poate verifica o comandă sau o rezervare în timp ce răspunde.' },
          { term: 'Zendesk și Help Scout', desc: 'Dacă echipa lucrează deja în Zendesk sau Help Scout, fiecare cerere de suport poate deveni și un tichet Zendesk sau o conversație Help Scout.' },
          { term: 'Analize și evaluări', desc: 'Clienții evaluează răspunsurile AI cu un deget în sus sau în jos. Analizele asistentului arată satisfacția, sentimentul, rezolvarea și intenția fiecărei conversații; rapoartele echipei arată rata de preluare, timpul primului răspuns și al rezolvării, pe operator.' },
        ],
      },
      audience: {
        eyebrow: 'Pentru cine este',
        heading: 'Echipe de suport de orice mărime.',
        items: [
          { term: 'Firme mici', desc: 'Întrebările primesc răspuns la orice oră, fără o echipă de suport de serviciu, iar un om e chemat doar când e nevoie.' },
          { term: 'Echipe de suport în creștere', desc: 'Volumul e preluat fără angajări pentru fiecare canal nou, cu chatul și emailul într-un singur inbox și rutare pe departamente.' },
          { term: 'Magazine online și SaaS', desc: 'Întrebările despre comenzi, livrări și utilizare primesc răspuns din documentația ta, cu acțiuni care verifică datele clientului.' },
          { term: 'Firme care primesc și apeluri', desc: 'Același asistent la telefon, transfer la echipă la cerere și cereri de revenire salvate ca sarcini.' },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la paginile de ajutor la un agent AI de suport.',
        body: 'Îl înveți pe asistent o singură dată și alegi cum lucrează cu echipa; fiecare canal conectat folosește aceeași configurare.',
        items: [
          'Dă-i asistentului site-ul, articolele de ajutor, documentele și întrebările pe care clienții le pun cel mai des.',
          'Alege dacă răspunde la orice sau doar la ce a învățat și ce spune în rest.',
          'Descrie când conversațiile ajung la un om, apoi configurează departamentele, rutarea și programul.',
          'Conectează canalele de chat și căsuța de suport și activează butonul de cerere de suport.',
          'Urmărește evaluările, analizele și rapoartele și adaugă cunoștințe acolo unde asistentul predă cel mai des.',
        ],
      },
      facts: {
        eyebrow: 'Date',
        heading: 'În cifre și nume.',
        items: [
          { term: 'Canale', desc: '9 canale de chat (chat pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat și amoCRM/Kommo), emailul tău prin IMAP și SMTP și apeluri telefonice prin SIP.' },
          { term: 'Limbi', desc: 'Asistentul răspunde în limba clientului; interfața widgetului de chat este în 24 de limbi, iar apelurile AI în 14.' },
          { term: 'Surse de cunoștințe', desc: 'Site-uri, documente (PDF, Word, Excel, CSV, text, HTML, Markdown, JSON), propriile întrebări și răspunsuri și căutarea pe internet ca rezervă.' },
          { term: 'Rapoarte', desc: 'Conversații, rata de preluare, timpul median al primului răspuns și al rezolvării, pe operator, pe 7, 30 sau 90 de zile; satisfacție, sentiment, rezolvare și intenție pe fiecare conversație.' },
          { term: 'Integrări', desc: 'Zendesk, Help Scout și n8n; webhook-uri la crearea unui tichet și când un client evaluează un răspuns.' },
          { term: 'Planuri', desc: 'Începi pe planul gratuit cu 200 de credite, fără card. Un răspuns AI sau o ciornă de email AI costă 1 credit; răspunsurile echipei și citirea sau trimiterea emailurilor nu consumă credite. Tichetele vin cu planurile plătite, de la Starter.' },
        ],
      },
      alternatives: {
        eyebrow: 'Cum se compară',
        heading: 'Fineguide și alternativele obișnuite.',
        body:
          'Customer service-ul cu AI vine de obicei dintr-o suită de helpdesk, dintr-un agent AI adăugat unei unelte de chat sau dintr-o platformă CRM mare. Iată cum diferă după funcții, cu link spre comparațiile cu surse.',
        items: [
          { term: 'Suite de helpdesk: Intercom și Zendesk', desc: 'Platforme de suport mature ai căror agenți AI răspund pe mesagerie, email și voce, cu tichete și evaluarea calității. Fineguide este mai mică și pune un CRM de vânzări, apeluri AI prin propria ta centrală și evaluarea apelurilor pe aceeași fișă de client.', path: '/compare/zendesk', label: 'Fineguide vs Zendesk' },
          { term: 'Agenți AI în unelte de chat: Freshdesk și Tidio', desc: 'Freddy și Lyro răspund pe chat și email din conținutul tău de suport și predau echipei. Asistentul Fineguide răspunde și la apeluri în direct și lucrează pe Telegram, Discord și în JivoChat, amoCRM și Kommo.', path: '/compare/freshdesk', label: 'Fineguide vs Freshdesk' },
          { term: 'Platforme CRM: Salesforce', desc: 'Agenți AI Agentforce care folosesc datele din Salesforce, pentru firmele care lucrează deja în Salesforce. Fineguide le dă echipelor mai mici agenți AI, un CRM și un inbox de echipă într-o singură platformă, cu care pot începe pe planul gratuit.', path: '/compare/salesforce', label: 'Fineguide vs Salesforce' },
          { term: 'Toată categoria, alături', desc: 'Fineguide, Freshdesk, Intercom, Salesforce, Tidio și Zendesk, fiecare cu ce spun paginile lui oficiale că face.', path: '/best/ai-customer-service-software', label: 'Cele mai bune soft-uri AI pentru customer service' },
        ],
      },
      related: {
        eyebrow: 'Legate',
        heading: 'Modulele din spatele customer service-ului cu AI',
        links: [
          { path: '/help-desk', label: 'Helpdesk', desc: 'Tichete, rutare, departamente și preluare într-un inbox comun.' },
          { path: '/knowledge-base', label: 'Bază de cunoștințe AI', desc: 'Paginile, documentele și întrebările din care răspunde asistentul.' },
          { path: '/ai-email-assistant', label: 'Asistent AI pentru email', desc: 'AI pe căsuța de suport, cu un om care decide.' },
          { path: '/omnichannel-chatbot', label: 'Chatbot AI omnicanal', desc: 'Un singur asistent pe fiecare canal, o singură fișă pentru fiecare client.' },
          { path: '/voice-ai', label: 'Telefonie AI', desc: 'Același asistent răspunde la telefon.' },
        ],
      },
      faq: {
        heading: 'Customer service cu AI: întrebări frecvente',
        items: [
          { q: 'Care este cel mai bun soft AI pentru customer service?', a: 'Depinde de echipă. Organizațiile mari de suport aleg des o suită de helpdesk ca Zendesk sau Intercom; echipele mici axate pe chatul de pe site încep des cu Tidio. Fineguide se potrivește când vrei un singur agent AI pe chat, email și telefon, cu un CRM și un inbox comun pe aceeași fișă de client.' },
          { q: 'Ce este un agent AI de suport pentru clienți?', a: 'Un agent AI de suport este un asistent care răspunde singur clienților din cunoștințele firmei, face acțiuni simple, cum ar fi verificarea unei comenzi, și predă conversația unui om când nu poate ajuta sau când clientul cere.' },
          { q: 'Poate customer service-ul cu AI să învețe din documentația mea?', a: 'Da. Asistentul Fineguide învață din site-ul tău, documentele și PDF-urile încărcate și propriile întrebări și răspunsuri, și poate fi limitat să răspundă doar din ele.' },
          { q: 'Cum predă AI-ul clientul unui operator?', a: 'Când clientul cere un om sau conversația se potrivește cu o situație descrisă de tine, asistentul îi spune clientului că este conectat cu un operator și se oprește. Echipa preia conversația în Mesaje, cu tot istoricul; dacă nimeni nu răspunde 20 de minute, asistentul preia din nou, dacă nu schimbi asta.' },
          { q: 'Funcționează pe chat, email și telefon?', a: 'Da. Același asistent răspunde în chatul de pe site și în aplicațiile de mesagerie, scrie ciorne sau trimite răspunsuri în căsuțele de suport și răspunde la apelurile primite prin propria ta centrală, în 14 limbi.' },
          { q: 'Ce limbi suportă?', a: 'Asistentul răspunde în limba în care scrie clientul. Interfața widgetului de chat este în 24 de limbi, iar apelurile AI în 14, printre care engleza, spaniola, franceza, germana, româna și rusa.' },
          { q: 'Există un soft AI gratuit pentru customer service?', a: 'Fineguide are un plan gratuit cu 200 de credite, fără card, cu asistentul AI, preluarea de către un om și inboxul comun. Tichetele, Zendesk și Help Scout vin cu planurile plătite, de la Starter.' },
        ],
      },
      closing: {
        heading: 'Lasă AI-ul să răspundă primul.',
        body: 'Dă-i unui asistent paginile de ajutor pe planul gratuit, întreabă-l ce întreabă clienții tăi, apoi cere-i un om. Sau programează o demonstrație de 30 de minute pe munca ta de suport.',
      },
    },

    ru: {
      meta: {
        title: 'ИИ для клиентской поддержки и ИИ-агент | Fineguide',
        description:
          'ИИ для клиентской поддержки: ИИ-агент отвечает по вашим материалам в чатах, почте и на звонках, передаёт диалог команде и ведёт каждое обращение.',
      },
      hero: {
        eyebrow: 'ИИ в клиентской поддержке',
        title: 'Клиент получает ответ сразу,',
        titleAccent: ' люди — там, где они нужны.',
        subtitle:
          'ИИ-агент поддержки отвечает по вашим материалам в чатах, почте и на звонках, передаёт команде диалоги, где нужен человек, и хранит каждое обращение в карточке клиента.',
      },
      definition: {
        heading: 'Что такое ИИ для клиентской поддержки?',
        body:
          'ИИ для клиентской поддержки — это программа, где ИИ-агент сам отвечает на вопросы клиентов по материалам компании и передаёт остальное людям вместе со всей перепиской. В Fineguide один ассистент поддержки работает в чате на сайте, WhatsApp, Telegram, Instagram, Messenger и других чат-каналах, в вашей почте и на телефонных звонках и отвечает по вашим страницам, документам и частым вопросам. Он передаёт диалог команде, когда клиент просит человека или срабатывает ваше правило, а обращения становятся тикетами в общем inbox, привязанными к контакту в CRM.',
      },
      capabilities: {
        eyebrow: 'Что умеет',
        heading: 'ИИ-агент впереди, ваша команда за ним.',
        body:
          'Ассистент берёт вопросы, на которые может хорошо ответить, и передаёт остальное, поэтому команда тратит время на диалоги, где действительно нужен человек.',
        items: [
          { term: 'Ответы по вашим материалам', desc: 'Ассистент отвечает по вашему сайту, документам, PDF и вашим вопросам с ответами. Можно ограничить его только тем, чему он научен, с вашим ответом на всё остальное, или разрешить искать в интернете, когда в материалах ответа нет.' },
          { term: 'Чат, почта и телефон', desc: 'Один ассистент отвечает в чате на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack и Discord, в ящиках поддержки и на входящих звонках через вашу телефонию — на языке клиента.' },
          { term: 'Передача человеку', desc: 'Диалог уходит команде, когда клиент просит человека — по-русски, по-румынски или по-английски — или когда разговор подходит под описанные вами ситуации, например запрос возврата. Клиент видит, что подключается оператор, и ассистент замолкает.' },
          { term: 'Тикеты и общий inbox', desc: 'Кнопка обращения в поддержку позволяет посетителю оставить имя, почту и описание проблемы; каждое обращение открывает переписку в inbox, привязанную к контакту в CRM, и добавляет задачу-тикет на доску. Очередь, маршрутизация, отделы и рабочие часы решают, кто ответит.' },
          { term: 'ИИ в почте поддержки — с защитой', desc: 'Каждый ящик сначала только для людей. Включите черновики, которые одобряет сотрудник, или ответы ассистента после паузы в 2 минуты; переписка переходит к человеку после заданного числа ответов ИИ или как только отвечает коллега.' },
          { term: 'Действия в ваших системах', desc: 'Действия ассистента обращаются к вашим системам по HTTP: собираются из вставленной команды cURL, с хранимыми секретами и панелью проверки, — и ассистент может проверить заказ или бронь прямо в разговоре.' },
          { term: 'Zendesk и Help Scout', desc: 'Если команда уже работает в Zendesk или Help Scout, каждое обращение может стать ещё и тикетом Zendesk или перепиской Help Scout.' },
          { term: 'Аналитика и оценки', desc: 'Клиенты оценивают ответы ИИ пальцем вверх или вниз. Аналитика ассистента показывает удовлетворённость, тональность, решённость и намерение по каждому диалогу; отчёты команды — долю передач, время первого ответа и решения по операторам.' },
        ],
      },
      audience: {
        eyebrow: 'Для кого',
        heading: 'Для служб поддержки любого размера.',
        items: [
          { term: 'Малый бизнес', desc: 'Ответы в любое время без дежурной поддержки, а человек подключается, только когда нужен.' },
          { term: 'Растущие службы поддержки', desc: 'Больше обращений без найма под каждый новый канал: чаты и почта в одном inbox, маршрутизация по отделам.' },
          { term: 'Интернет-магазины и SaaS', desc: 'Вопросы о заказах, доставке и работе продукта — по вашей документации, с действиями, которые смотрят данные самого клиента.' },
          { term: 'Компании, которые принимают звонки', desc: 'Тот же ассистент на телефоне, перевод на команду по просьбе и просьбы перезвонить как задачи.' },
        ],
      },
      steps: {
        eyebrow: 'С чего начать',
        heading: 'От страниц помощи к ИИ-агенту поддержки.',
        body: 'Вы обучаете ассистента один раз и решаете, как он работает с командой; каждый подключённый канал использует ту же настройку.',
        items: [
          'Дайте ассистенту сайт, статьи помощи, документы и самые частые вопросы клиентов.',
          'Решите, отвечает ли он на всё или только по своим материалам, и что говорит в остальных случаях.',
          'Опишите, когда диалог уходит к человеку, и настройте отделы, маршрутизацию и рабочие часы.',
          'Подключите чат-каналы и ящик поддержки и включите кнопку обращения в поддержку.',
          'Следите за оценками, аналитикой и отчётами и добавляйте материалы там, где ассистент чаще всего передаёт диалог.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          { term: 'Каналы', desc: '9 чат-каналов (чат на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat и amoCRM/Kommo), ваша почта по IMAP и SMTP и звонки по SIP.' },
          { term: 'Языки', desc: 'Ассистент отвечает на языке клиента; интерфейс чат-виджета — на 24 языках, ИИ-звонки — на 14.' },
          { term: 'Источники знаний', desc: 'Сайты, документы (PDF, Word, Excel, CSV, текст, HTML, Markdown, JSON), ваши вопросы с ответами и поиск в интернете как запасной вариант.' },
          { term: 'Отчёты', desc: 'Диалоги, доля передач, медиана первого ответа и решения по операторам за 7, 30 или 90 дней; удовлетворённость, тональность, решённость и намерение по каждому диалогу.' },
          { term: 'Интеграции', desc: 'Zendesk, Help Scout и n8n; вебхуки при создании тикета и при оценке ответа клиентом.' },
          { term: 'Тарифы', desc: 'Начните с бесплатного тарифа: 200 кредитов, без карты. Ответ ИИ или черновик письма от ИИ — 1 кредит; ответы команды, чтение и отправка писем кредиты не расходуют. Тикеты — на платных тарифах, начиная со Starter.' },
        ],
      },
      alternatives: {
        eyebrow: 'Сравнение',
        heading: 'Fineguide и привычные альтернативы.',
        body:
          'ИИ для поддержки обычно берут из пакета-хелпдеска, из ИИ-агента в сервисе чата или из большой CRM-платформы. Вот чем они отличаются по возможностям, со ссылками на сравнения с источниками.',
        items: [
          { term: 'Хелпдески: Intercom и Zendesk', desc: 'Зрелые платформы поддержки, чьи ИИ-агенты отвечают в мессенджерах, почте и голосом, с тикетами и контролем качества. Fineguide меньше и держит CRM для продаж, ИИ-звонки через вашу телефонию и оценку звонков в той же карточке клиента.', path: '/compare/zendesk', label: 'Fineguide и Zendesk' },
          { term: 'ИИ-агенты в сервисах чата: Freshdesk и Tidio', desc: 'Freddy и Lyro отвечают в чате и почте по вашим материалам поддержки и передают диалог команде. Ассистент Fineguide ещё и принимает живые звонки и работает в Telegram, Discord и внутри JivoChat, amoCRM и Kommo.', path: '/compare/freshdesk', label: 'Fineguide и Freshdesk' },
          { term: 'CRM-платформы: Salesforce', desc: 'ИИ-агенты Agentforce на данных Salesforce — для компаний, которые уже работают в Salesforce. Fineguide даёт небольшим командам ИИ-агентов, CRM и общий inbox на одной платформе, начать можно с бесплатного тарифа.', path: '/compare/salesforce', label: 'Fineguide и Salesforce' },
          { term: 'Вся категория рядом', desc: 'Fineguide, Freshdesk, Intercom, Salesforce, Tidio и Zendesk — у каждого то, что о нём говорят его собственные страницы.', path: '/best/ai-customer-service-software', label: 'Лучшие ИИ-сервисы для клиентской поддержки' },
        ],
      },
      related: {
        eyebrow: 'По теме',
        heading: 'Модули, на которых держится ИИ-поддержка',
        links: [
          { path: '/help-desk', label: 'Хелпдеск', desc: 'Тикеты, маршрутизация, отделы и передача человеку в общем inbox.' },
          { path: '/knowledge-base', label: 'База знаний с ИИ', desc: 'Страницы, документы и вопросы, по которым отвечает ассистент.' },
          { path: '/ai-email-assistant', label: 'ИИ-ассистент для почты', desc: 'ИИ в ящике поддержки, а решает человек.' },
          { path: '/omnichannel-chatbot', label: 'Омниканальный ИИ-чат-бот', desc: 'Один ассистент во всех каналах и одна карточка на клиента.' },
          { path: '/voice-ai', label: 'ИИ-телефония', desc: 'Тот же ассистент отвечает на звонки.' },
        ],
      },
      faq: {
        heading: 'ИИ в клиентской поддержке: частые вопросы',
        items: [
          { q: 'Какой ИИ-сервис для клиентской поддержки лучше?', a: 'Зависит от команды. Крупные службы поддержки часто выбирают хелпдеск вроде Zendesk или Intercom; небольшие команды вокруг чата на сайте часто начинают с Tidio. Fineguide подходит, если нужен один ИИ-агент в чатах, почте и на звонках, с CRM и общим inbox в одной карточке клиента.' },
          { q: 'Что такое ИИ-агент поддержки?', a: 'ИИ-агент поддержки — это ассистент, который сам отвечает клиентам по материалам компании, выполняет простые действия, например проверяет заказ, и передаёт диалог человеку, когда не может помочь или клиент об этом просит.' },
          { q: 'Может ли ИИ-поддержка учиться на нашей документации?', a: 'Да. Ассистент Fineguide учится на вашем сайте, загруженных документах и PDF и ваших вопросах с ответами, и его можно ограничить ответами только по ним.' },
          { q: 'Как ИИ передаёт клиента оператору?', a: 'Когда клиент просит человека или разговор подходит под описанную вами ситуацию, ассистент сообщает клиенту, что подключается оператор, и замолкает. Команда подхватывает диалог в «Сообщениях» со всей историей; если 20 минут никто не отвечает, ассистент снова включается, если вы не изменили это.' },
          { q: 'Работает ли это в чатах, почте и по телефону?', a: 'Да. Один ассистент отвечает в чате на сайте и мессенджерах, пишет черновики или отправляет ответы в ящиках поддержки и принимает входящие звонки через вашу телефонию на 14 языках.' },
          { q: 'Какие языки поддерживаются?', a: 'Ассистент отвечает на языке, на котором пишет клиент. Интерфейс чат-виджета — на 24 языках, ИИ-звонки — на 14, включая английский, испанский, французский, немецкий, румынский и русский.' },
          { q: 'Есть ли бесплатный ИИ для поддержки?', a: 'У Fineguide есть бесплатный тариф: 200 кредитов, без карты, с ИИ-ассистентом, передачей человеку и общим inbox. Тикеты, Zendesk и Help Scout — на платных тарифах, начиная со Starter.' },
        ],
      },
      closing: {
        heading: 'Пусть ИИ отвечает первым.',
        body: 'Дайте ассистенту страницы помощи на бесплатном тарифе, задайте ему вопросы ваших клиентов, а потом попросите позвать человека. Или запишитесь на 30-минутное демо на вашей поддержке.',
      },
    },
  },
};

export default solution;
