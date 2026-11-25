import type { Solution } from './types';

const solution: Solution = {
  slug: 'industries/ecommerce',
  image: 'channels-phone.jpg',
  imageAlt: {
    en: 'A hand holding a phone with an Instagram feed open, a mug of coffee on the wooden table beside it',
    ro: 'O mână ține un telefon cu fluxul de Instagram deschis, lângă o cană de cafea pe o masă de lemn',
    ru: 'Рука держит телефон с открытой лентой Instagram, рядом на деревянном столе чашка кофе',
  },
  appName: 'Fineguide for online stores',
  checked: '2026-11-25',
  reading: [
    '/blog/ai-chatbot-for-online-store/',
    '/blog/ai-assistant-actions-call-your-systems/',
    '/blog/instagram-messenger-comment-and-dm-automation/',
    '/blog/train-a-chatbot-on-your-documents/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/add-ai-chatbot-to-your-website/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/wizard/templates.ts id ecommerce "E-commerce Assistant" ("Help customers find products, answer order questions, and provide support"; steps Identity, Instructions, Knowledge "Add your product catalog URLs or upload documents", Theme "brand color and widget position", Install "embed code … or share a direct link", Review; defaults: suggested questions "What products do you have?", "How can I track my order?", "What is your return policy?", canUserCreateTickets true, restrictToContext true)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/WebContextSection.tsx (include pages under these addresses; Keep in sync plan-gated), DocumentContextSection.tsx (.pdf .doc .docx .txt .csv .xlsx .xls .json .html .md), CustomAnswersSection.tsx (exact answers), FeaturesPage "What it answers: Only what it has learned" + reply to other questions',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/actions/ActionsPage.tsx + CurlForm.tsx (assistant actions = HTTP calls, built from a pasted cURL command, using stored secrets from workflows/secrets) + public/llms.txt (actions with a test panel; n8n webhook workflow importable as an action; secrets bound to the addresses they may be sent to)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx (Lead collection: name, email, phone or whatever fields you choose, when it asks; Support request button: requests open in your Inbox, Send to Zendesk / Help Scout; Visitors can send Images "Photos and screenshots" and Files; Suggested questions; Chat hours)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/variables/SessionVariablesPage.tsx (examples: Why they came = Order status / Product question / Return; Products they asked about, Several from a list)',
    'ai-backoffice-api apps/backoffice-api/src/modules/crm/lead/lead.service.ts createInternal (contact found or made by email / phone, collected values on the contact, follow-up task when interested) + contact.service.ts applyCollectedValues',
    'ai-backoffice-api apps/backoffice-api/src/modules/ticket/ticket.consumer.ts (support request -> contact, Inbox thread, Ticket task, Zendesk / Help Scout) as verified in help-desk.ts; ticketing plan-gated',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx (hand chats to your team when the visitor asks for a person or on situations described in your own words)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/ConnectAppsPage.tsx ("Reply to Instagram comments", Instagram DMs, Facebook Messenger, "Reply to Facebook comments", lead forms) + ai-backoffice-api apps/chat-api/src/_v2/channels/instagram/messenger.ts (comment replies)',
    'ai-backoffice-api apps/backoffice-api/prisma/schema.prisma Contact.channels ("A person reached on two channels is one contact with two rows here")',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/RulesPage.tsx (sender / subject / mailbox -> assign, department, tag), MailboxDetailPage.tsx (Human only / Assistant drafts / Assistant replies on its own) + ai-backoffice-api inbox/reply-suggestion.service.ts (Draft reply, 1 credit)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/analytics/AnalyticsPage.tsx (Satisfaction, Sentiment, Resolution, Client Intents, Unhandled, Suggestions, Weekly Email Report) + packages/ui/src/components/chat/ChatFeedback.tsx (thumbs up / down)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/workflows/help/reference.ts (ASSISTANT_INFO_COLLECTED, EMAIL_RECEIVED, classify, create_task, add_tags, send_email); workflows plan-gated',
    'product-search repo + ai-gptcrawler common/tool_registry.py: catalogue product search is wired per client (one customer\'s bespoke tools), not a self-serve assistant feature, so the page does NOT claim catalogue search; product answers come from the knowledge base (pages, spreadsheets) only',
    'Known channel facts (BRIEF2.md, checked 2026-11-25): website widget, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat, inside amoCRM and Kommo',
    'ai-fineguide-landing public/llms.txt (CRM: custom fields, tags, import from CSV / TSV / XLS / XLSX; credits: AI reply 1 credit, 2 to 4 actions 2 credits; free plan 200 credits) + src/i18n/{ro,ru}.ts terms',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Chatbot for Online Stores and E-commerce CRM | Fineguide',
        description:
          'AI chatbot for your online store: answers product, delivery and returns questions, can check order status in your system and keeps every shopper in one CRM.',
      },
      hero: {
        eyebrow: 'Fineguide for online stores',
        title: 'Shoppers get answers,',
        titleAccent: ' your team gets the customers.',
        subtitle:
          'An AI assistant answers questions about products, delivery and returns on your store, WhatsApp, Instagram and Messenger, looks up orders in your own system, and hands damaged parcels and refunds to your team with the whole conversation.',
      },
      definition: {
        heading: 'What is an AI chatbot for an online store?',
        body:
          "An AI chatbot for an online store is an assistant that answers shoppers' questions about products, delivery, payment and returns at any hour, and passes the rest to the shop's team. Fineguide's e-commerce assistant answers from your catalogue pages, product spreadsheets and policies on your website chat, WhatsApp, Instagram, Messenger and Telegram, can check an order's status in your own system through an action, and saves shoppers as contacts in the CRM that comes with it. When a parcel arrives damaged or someone wants a refund, the conversation goes to a person.",
      },
      capabilities: {
        eyebrow: 'How stores use it',
        heading: 'How online stores use Fineguide.',
        body:
          'Four everyday workflows, then the parts of the platform behind them. Lead collection, support requests, keeping your catalogue pages in sync and workflows come with paid plans.',
        items: [
          {
            term: 'Product and policy questions, answered',
            desc: 'Start from the E-commerce Assistant template. Give it your category and product pages (every page under an address is read), a spreadsheet of specifications and your delivery and returns pages, and write exact answers where wording matters. It stays on what it has learned and replies in the shopper’s language.',
          },
          {
            term: '“Where is my order?”, looked up',
            desc: 'The assistant asks for the order number and email, then calls your store’s system through an action you build from a cURL command or an n8n workflow. API keys are stored as secrets, and a test panel shows what your system answers before a shopper sees it.',
          },
          {
            term: 'Damaged parcels and refunds go to your team',
            desc: 'Describe in plain words when a person should take over, for example a damaged item or a refund request, and the chat waits for your team with its whole history. Shoppers can send a photo of the problem, or leave a support request that opens in your Inbox as a ticket.',
          },
          {
            term: 'Undecided shoppers become contacts',
            desc: 'With lead collection on, the assistant asks for an email or phone when a shopper shows interest, along with the fields you choose, such as the product they want or their delivery city. The contact is saved with those fields, and a follow-up task lands on your board.',
          },
          {
            term: 'Instagram and Messenger, messages and comments',
            desc: 'The same assistant answers direct messages on Instagram and Messenger and replies to comments under your posts. A shopper who asks on Instagram and orders on WhatsApp is one contact with one history.',
          },
          {
            term: 'Order emails in one inbox',
            desc: 'Connect the shop’s mailbox to the shared inbox. Rules tag and route new email by sender or subject, for example everything with “return” in the subject, and the assistant drafts replies your team sends, or answers on its own after a hold.',
          },
          {
            term: 'A CRM for your customers',
            desc: 'Contacts with their channels, tags and custom fields, deals for wholesale or business orders, and import from CSV or Excel. On paid plans, workflows tag shoppers by what they asked, open tasks and send follow-up emails.',
          },
          {
            term: 'See what shoppers ask',
            desc: 'Analytics show intents, satisfaction, sentiment and resolution for every conversation, list the questions the assistant could not answer and send a weekly email report. Shoppers rate replies with a thumbs up or down.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your catalogue to a store assistant.',
        body: 'Most stores answer their first shoppers on the same day.',
        items: [
          'Create an assistant from the E-commerce Assistant template and give it your catalogue, delivery and returns pages.',
          'Choose your brand colour and widget position, then add the embed code to your store or share a direct link.',
          'Connect WhatsApp, Instagram and your Facebook page, and your order-status action if your store has an API.',
          'Decide when a person takes over, and turn on the support request button and lead collection.',
          'Read the unanswered questions in analytics each week and add what is missing to the knowledge.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Channels',
            desc: 'Website chat, WhatsApp, Telegram, Instagram (messages and comments), Messenger (messages and comments), Slack, Discord, JivoChat, inside amoCRM and Kommo, and email over IMAP and SMTP.',
          },
          {
            term: 'Knowledge',
            desc: 'Website pages, with every page under an address; PDF, Word, CSV, Excel, JSON, HTML, Markdown and text files; exact answers for set questions.',
          },
          {
            term: 'Order lookups',
            desc: 'Assistant actions call your own systems over HTTP, built from a cURL command or imported from an n8n workflow, with secrets and a test panel.',
          },
          {
            term: 'Integrations',
            desc: 'Zendesk and Help Scout for support requests, n8n, webhooks, and Facebook Lead Ads into the CRM.',
          },
          {
            term: 'Analytics',
            desc: 'Intents, satisfaction, sentiment and resolution per conversation, unanswered questions, reply ratings and a weekly email report.',
          },
          {
            term: 'Plans and credits',
            desc: 'Start on the free plan with 200 credits. A standard AI reply is 1 credit, and a reply that runs 2 to 4 actions is 2. Lead collection, support requests and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind a store assistant',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Assistants that answer on your store, WhatsApp, Instagram and Messenger.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The catalogue pages, spreadsheets and policies your assistant answers from.',
          },
          {
            path: '/help-desk',
            label: 'Help desk',
            desc: 'Support requests as tickets, handover to your team and one shared inbox.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Every shopper as one contact, with tags, fields and tasks.',
          },
          {
            path: '/compare/tidio/',
            label: 'Fineguide vs Tidio',
            desc: 'An AI store assistant with a CRM, side by side with Tidio.',
          },
          {
            path: '/compare/jivochat/',
            label: 'Fineguide vs JivoChat',
            desc: 'AI answers first, with JivoChat operators taking over when needed.',
          },
        ],
      },
      faq: {
        heading: 'AI chatbot for online stores: common questions',
        items: [
          {
            q: 'What can an AI chatbot do for an online store?',
            a: 'It answers questions about products, delivery, payment and returns at any hour, can look up an order in your system, collects contact details from undecided shoppers and hands complaints to your team. In Fineguide it does this on your website, WhatsApp, Instagram and Messenger.',
          },
          {
            q: 'Can the chatbot tell customers where their order is?',
            a: 'Yes, through an action. The assistant asks for the order number and email, calls your store’s system over HTTP and answers with the status it gets back.',
          },
          {
            q: 'How do I train a chatbot on my product catalogue?',
            a: 'Add the address of your catalogue and every page under it is read, then upload spreadsheets or PDFs with specifications and size guides. On paid plans the pages are kept in sync, so new products and price changes reach the assistant.',
          },
          {
            q: 'Can it answer Instagram comments and DMs for my shop?',
            a: 'Yes. Connect your Instagram business account and turn on direct messages and comment replies; the same works for your Facebook page and Messenger.',
          },
          {
            q: 'What happens when a customer complains?',
            a: 'You describe the situations that need a person, such as a damaged item or a refund, and the assistant hands the chat to your team with the full conversation. Customers can also leave a support request that opens in your Inbox.',
          },
          {
            q: 'Is there a CRM for online shops included?',
            a: 'Yes. Every shopper who leaves an email or phone becomes a contact in the built-in CRM, with their channels, tags, custom fields, tasks and conversation history. You can also import your existing customer list from CSV or Excel.',
          },
          {
            q: 'Is there a free plan for online stores?',
            a: 'Yes. Start on the free plan with 200 credits and no card, with the assistant, the website chat and the CRM. Lead collection, support requests and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      closing: {
        heading: 'Ask your store assistant a question.',
        body: 'Create an assistant from the E-commerce template, give it your catalogue and returns pages and ask it what a shopper would. Or book a 30-minute demo and see it answer on your own store.',
      },
    },

    ro: {
      meta: {
        title: 'Chatbot pentru magazin online, cu CRM inclus | Fineguide',
        description:
          'Chatbot pentru magazin online: răspunde la întrebări despre produse, livrare și retur, verifică statusul comenzii în sistemul tău și păstrează clienții în CRM.',
      },
      hero: {
        eyebrow: 'Fineguide pentru magazine online',
        title: 'Cumpărătorii primesc răspunsuri,',
        titleAccent: ' iar echipa ta primește clienții.',
        subtitle:
          'Asistentul AI răspunde la întrebări despre produse, livrare și retur în magazin, pe WhatsApp, Instagram și Messenger, verifică comenzile în propriul tău sistem și predă echipei coletele deteriorate și rambursările, cu toată conversația.',
      },
      definition: {
        heading: 'Ce este un chatbot pentru magazin online?',
        body:
          'Un chatbot pentru magazin online este un asistent care răspunde la orice oră la întrebările cumpărătorilor despre produse, livrare, plată și retur și le lasă restul oamenilor din echipă. Asistentul pentru comerț online de la Fineguide răspunde din paginile catalogului, din tabelele cu produse și din politicile magazinului, în chatul de pe site, pe WhatsApp, Instagram, Messenger și Telegram, poate verifica statusul unei comenzi în sistemul tău printr-o acțiune și salvează cumpărătorii ca contacte în CRM-ul inclus. Când un colet ajunge deteriorat sau cineva cere banii înapoi, conversația trece la un om.',
      },
      capabilities: {
        eyebrow: 'Cum îl folosesc magazinele',
        heading: 'Cum lucrează magazinele online cu Fineguide.',
        body:
          'Patru situații de zi cu zi, apoi părțile platformei din spatele lor. Colectarea de lead-uri, cererile de suport, sincronizarea paginilor de catalog și workflow-urile vin cu planurile plătite.',
        items: [
          {
            term: 'Întrebări despre produse și politici, cu răspuns',
            desc: 'Pornești de la șablonul „E-commerce Assistant”. Îi dai paginile de categorii și de produse (se citesc toate paginile de sub o adresă), un tabel cu specificații și paginile de livrare și retur și scrii răspunsuri exacte acolo unde contează formularea. Rămâne la ce a învățat și răspunde în limba cumpărătorului.',
          },
          {
            term: '„Unde e comanda mea?”, verificat',
            desc: 'Asistentul cere numărul comenzii și emailul, apoi apelează sistemul magazinului printr-o acțiune pe care o construiești dintr-o comandă cURL sau dintr-un workflow n8n. Cheile API se păstrează ca secrete, iar un panou de test îți arată ce răspunde sistemul înainte să vadă cumpărătorul.',
          },
          {
            term: 'Coletele deteriorate și rambursările ajung la echipă',
            desc: 'Descrii în cuvinte simple când trebuie să preia un om, de exemplu un produs deteriorat sau o cerere de rambursare, iar conversația așteaptă echipa cu tot istoricul. Cumpărătorii pot trimite o fotografie a problemei sau pot lăsa o cerere de suport care se deschide ca tichet în Inbox.',
          },
          {
            term: 'Cumpărătorii nehotărâți devin contacte',
            desc: 'Cu colectarea de lead-uri activă, asistentul cere un email sau un telefon când cumpărătorul arată interes, plus câmpurile alese de tine, cum ar fi produsul dorit sau orașul de livrare. Contactul se salvează cu aceste câmpuri, iar pe tablă apare o sarcină de follow-up.',
          },
          {
            term: 'Instagram și Messenger: mesaje și comentarii',
            desc: 'Același asistent răspunde la mesajele directe pe Instagram și Messenger și la comentariile de sub postări. Cine întreabă pe Instagram și comandă pe WhatsApp rămâne un singur contact, cu un singur istoric.',
          },
          {
            term: 'Emailurile despre comenzi, într-un singur inbox',
            desc: 'Conectezi căsuța magazinului la inboxul comun. Regulile etichetează și direcționează emailurile noi după expeditor sau subiect, de exemplu tot ce are „retur” în subiect, iar asistentul scrie ciorne pe care le trimite echipa sau răspunde singur după o pauză.',
          },
          {
            term: 'Un CRM pentru clienții tăi',
            desc: 'Contacte cu canalele lor, etichete și câmpuri personalizate, oportunități pentru comenzi en-gros sau de la firme și import din CSV sau Excel. Pe planurile plătite, workflow-urile etichetează cumpărătorii după ce au întrebat, deschid sarcini și trimit emailuri de follow-up.',
          },
          {
            term: 'Vezi ce întreabă cumpărătorii',
            desc: 'Analizele arată intențiile, satisfacția, sentimentul și rezolvarea pentru fiecare conversație, listează întrebările la care asistentul n-a avut răspuns și trimit un raport săptămânal pe email. Cumpărătorii evaluează răspunsurile cu un deget în sus sau în jos.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la catalog la un asistent pentru magazin.',
        body: 'Cele mai multe magazine răspund primilor cumpărători chiar în aceeași zi.',
        items: [
          'Creezi un asistent din șablonul „E-commerce Assistant” și îi dai paginile de catalog, livrare și retur.',
          'Alegi culoarea brandului și poziția widgetului, apoi pui codul în magazin sau trimiți un link direct.',
          'Conectezi WhatsApp, Instagram și pagina de Facebook, plus acțiunea pentru statusul comenzii, dacă magazinul are API.',
          'Decizi când preia un om și activezi butonul de cerere de suport și colectarea de lead-uri.',
          'Citești săptămânal întrebările fără răspuns din analize și adaugi ce lipsește în baza de cunoștințe.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Canale',
            desc: 'Chatul de pe site, WhatsApp, Telegram, Instagram (mesaje și comentarii), Messenger (mesaje și comentarii), Slack, Discord, JivoChat, în amoCRM și Kommo, plus emailul prin IMAP și SMTP.',
          },
          {
            term: 'Cunoștințe',
            desc: 'Pagini de site, cu toate paginile de sub o adresă; fișiere PDF, Word, CSV, Excel, JSON, HTML, Markdown și text; răspunsuri exacte pentru întrebări stabilite.',
          },
          {
            term: 'Verificarea comenzilor',
            desc: 'Acțiunile asistentului apelează propriile tale sisteme prin HTTP, construite dintr-o comandă cURL sau importate dintr-un workflow n8n, cu secrete și un panou de test.',
          },
          {
            term: 'Integrări',
            desc: 'Zendesk și Help Scout pentru cererile de suport, n8n, webhook-uri și Facebook Lead Ads direct în CRM.',
          },
          {
            term: 'Analize',
            desc: 'Intenții, satisfacție, sentiment și rezolvare pe conversație, întrebări fără răspuns, evaluarea răspunsurilor și un raport săptămânal pe email.',
          },
          {
            term: 'Planuri și credite',
            desc: 'Începi pe planul gratuit, cu 200 de credite. Un răspuns AI obișnuit costă 1 credit, iar unul care rulează 2–4 acțiuni costă 2. Colectarea de lead-uri, cererile de suport și workflow-urile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Modulele din spatele asistentului de magazin',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Asistenți care răspund în magazin, pe WhatsApp, Instagram și Messenger.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile de catalog, tabelele și politicile din care răspunde asistentul.',
          },
          {
            path: '/help-desk',
            label: 'Helpdesk',
            desc: 'Cereri de suport ca tichete, preluare de către echipă și un inbox comun.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Fiecare cumpărător ca un singur contact, cu etichete, câmpuri și sarcini.',
          },
          {
            path: '/compare/tidio/',
            label: 'Fineguide vs Tidio',
            desc: 'Un asistent AI pentru magazin cu CRM, comparat cu Tidio.',
          },
          {
            path: '/compare/jivochat/',
            label: 'Fineguide vs JivoChat',
            desc: 'AI-ul răspunde primul, iar operatorii JivoChat preiau când e nevoie.',
          },
        ],
      },
      faq: {
        heading: 'Chatbot pentru magazin online: întrebări frecvente',
        items: [
          {
            q: 'Ce poate face un chatbot pentru un magazin online?',
            a: 'Răspunde la orice oră la întrebări despre produse, livrare, plată și retur, poate verifica o comandă în sistemul tău, cere datele de contact ale cumpărătorilor nehotărâți și predă reclamațiile echipei. În Fineguide face asta pe site, pe WhatsApp, Instagram și Messenger.',
          },
          {
            q: 'Poate chatbotul să le spună clienților unde e comanda?',
            a: 'Da, printr-o acțiune. Asistentul cere numărul comenzii și emailul, apelează prin HTTP sistemul magazinului și răspunde cu statusul primit.',
          },
          {
            q: 'Cum învăț chatbotul catalogul de produse?',
            a: 'Adaugi adresa catalogului și se citesc toate paginile de sub ea, apoi încarci tabele sau PDF-uri cu specificații și ghiduri de mărimi. Pe planurile plătite, paginile rămân sincronizate, așa că produsele noi și prețurile schimbate ajung la asistent.',
          },
          {
            q: 'Poate răspunde la comentarii și mesaje pe Instagram pentru magazinul meu?',
            a: 'Da. Conectezi contul business de Instagram și activezi mesajele directe și răspunsurile la comentarii; la fel funcționează pentru pagina de Facebook și Messenger.',
          },
          {
            q: 'Ce se întâmplă când un client face o reclamație?',
            a: 'Descrii situațiile în care e nevoie de un om, cum ar fi un produs deteriorat sau o rambursare, iar asistentul predă conversația echipei, cu tot istoricul. Clienții pot lăsa și o cerere de suport care se deschide în Inbox.',
          },
          {
            q: 'Are inclus un CRM pentru magazin online?',
            a: 'Da. Fiecare cumpărător care lasă un email sau un telefon devine contact în CRM-ul inclus, cu canalele, etichetele, câmpurile personalizate, sarcinile și istoricul conversațiilor. Poți importa și lista de clienți existentă din CSV sau Excel.',
          },
          {
            q: 'Există un plan gratuit pentru magazine online?',
            a: 'Da. Începi pe planul gratuit, cu 200 de credite și fără card, cu asistentul, chatul de pe site și CRM-ul. Colectarea de lead-uri, cererile de suport și workflow-urile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      closing: {
        heading: 'Pune-i o întrebare asistentului tău de magazin.',
        body: 'Creează un asistent din șablonul pentru comerț online, dă-i paginile de catalog și de retur și întreabă-l ce ar întreba un cumpărător. Sau programează un demo de 30 de minute și vezi-l răspunzând în propriul tău magazin.',
      },
    },

    ru: {
      meta: {
        title: 'Чат-бот для интернет-магазина и CRM | Fineguide',
        description:
          'Чат-бот для интернет-магазина: отвечает о товарах, доставке и возврате, проверяет статус заказа в вашей системе, а покупатели сохраняются в CRM для магазина.',
      },
      hero: {
        eyebrow: 'Fineguide для интернет-магазинов',
        title: 'Покупатели получают ответы,',
        titleAccent: ' а ваша команда получает клиентов.',
        subtitle:
          'ИИ-ассистент отвечает на вопросы о товарах, доставке и возврате в магазине, в WhatsApp, Instagram и Messenger, проверяет заказы в вашей системе и передаёт команде повреждённые посылки и возвраты денег вместе со всей перепиской.',
      },
      definition: {
        heading: 'Что такое чат-бот для интернет-магазина?',
        body:
          'Чат-бот для интернет-магазина представляет собой ассистента, который в любое время отвечает покупателям на вопросы о товарах, доставке, оплате и возврате, а остальное передаёт команде магазина. Ассистент Fineguide для электронной коммерции отвечает по страницам каталога, таблицам товаров и правилам магазина в чате на сайте, в WhatsApp, Instagram, Messenger и Telegram, может проверить статус заказа в вашей системе через действие и сохраняет покупателей как контакты во встроенной CRM. Если посылка пришла повреждённой или клиент просит вернуть деньги, разговор переходит к человеку.',
      },
      capabilities: {
        eyebrow: 'Как работают магазины',
        heading: 'Как интернет-магазины работают с Fineguide.',
        body:
          'Четыре типичных сценария, а затем то, на чём они построены. Сбор лидов, заявки в поддержку, синхронизация страниц каталога и сценарии автоматизации входят в платные тарифы.',
        items: [
          {
            term: 'Вопросы о товарах и условиях получают ответ',
            desc: 'Начните с шаблона «E-commerce Assistant». Дайте ему страницы категорий и товаров (читаются все страницы под адресом), таблицу характеристик и страницы о доставке и возврате и задайте точные ответы там, где важна формулировка. Ассистент отвечает только по тому, чему обучен, и на языке покупателя.',
          },
          {
            term: '«Где мой заказ?» проверяется в вашей системе',
            desc: 'Ассистент спрашивает номер заказа и email, а затем обращается к системе магазина через действие, которое вы собираете из команды cURL или сценария n8n. Ключи API хранятся как секреты, а тестовая панель показывает ответ вашей системы до того, как его увидит покупатель.',
          },
          {
            term: 'Повреждённые посылки и возвраты уходят команде',
            desc: 'Опишите простыми словами, когда нужен человек, например повреждённый товар или просьба вернуть деньги, и диалог будет ждать команду со всей историей. Покупатель может прислать фото проблемы или оставить заявку в поддержку, которая откроется тикетом во входящих.',
          },
          {
            term: 'Сомневающиеся покупатели становятся контактами',
            desc: 'Со сбором лидов ассистент просит email или телефон, когда покупатель проявил интерес, и спрашивает выбранные вами поля, например нужный товар или город доставки. Контакт сохраняется с этими полями, а на доске появляется задача на повторный контакт.',
          },
          {
            term: 'Instagram и Messenger: сообщения и комментарии',
            desc: 'Тот же ассистент отвечает на личные сообщения в Instagram и Messenger и на комментарии под постами. Покупатель, который спросил в Instagram, а заказал через WhatsApp, остаётся одним контактом с общей историей.',
          },
          {
            term: 'Письма о заказах в одном ящике',
            desc: 'Подключите почту магазина к общему ящику входящих. Правила помечают и направляют новые письма по отправителю или теме, например всё со словом «возврат» в теме, а ассистент пишет черновики, которые отправляет команда, или отвечает сам после паузы.',
          },
          {
            term: 'CRM для интернет-магазина',
            desc: 'Контакты с их каналами, теги и дополнительные поля, сделки для оптовых и корпоративных заказов и импорт из CSV или Excel. На платных тарифах сценарии ставят покупателям теги по теме вопроса, создают задачи и отправляют письма.',
          },
          {
            term: 'Видно, о чём спрашивают покупатели',
            desc: 'Аналитика показывает намерения, удовлетворённость, тональность и решённость по каждому разговору, перечисляет вопросы, на которые ассистент не ответил, и присылает еженедельный отчёт на почту. Покупатели оценивают ответы пальцем вверх или вниз.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От каталога до ассистента магазина.',
        body: 'Большинство магазинов отвечают первым покупателям в тот же день.',
        items: [
          'Создайте ассистента из шаблона «E-commerce Assistant» и дайте ему страницы каталога, доставки и возврата.',
          'Выберите цвет бренда и положение виджета, затем вставьте код на сайт магазина или поделитесь прямой ссылкой.',
          'Подключите WhatsApp, Instagram и страницу Facebook, а также действие для статуса заказа, если у магазина есть API.',
          'Решите, когда подключается человек, и включите кнопку заявки в поддержку и сбор лидов.',
          'Раз в неделю читайте в аналитике вопросы без ответа и добавляйте недостающее в базу знаний.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Каналы',
            desc: 'Чат на сайте, WhatsApp, Telegram, Instagram (сообщения и комментарии), Messenger (сообщения и комментарии), Slack, Discord, JivoChat, внутри amoCRM и Kommo, а также почта по IMAP и SMTP.',
          },
          {
            term: 'База знаний',
            desc: 'Страницы сайта, включая все страницы под адресом; файлы PDF, Word, CSV, Excel, JSON, HTML, Markdown и текст; точные ответы на заданные вопросы.',
          },
          {
            term: 'Проверка заказов',
            desc: 'Действия ассистента обращаются к вашим системам по HTTP; их собирают из команды cURL или импортируют из сценария n8n, с секретами и тестовой панелью.',
          },
          {
            term: 'Интеграции',
            desc: 'Zendesk и Help Scout для заявок в поддержку, n8n, вебхуки и Facebook Lead Ads прямо в CRM.',
          },
          {
            term: 'Аналитика',
            desc: 'Намерения, удовлетворённость, тональность и решённость по каждому разговору, вопросы без ответа, оценки ответов и еженедельный отчёт на почту.',
          },
          {
            term: 'Тарифы и кредиты',
            desc: 'Начните с бесплатного тарифа: 200 кредитов. Обычный ИИ-ответ стоит 1 кредит, ответ с 2–4 действиями стоит 2. Сбор лидов, заявки в поддержку и сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Модули, на которых работает ассистент магазина',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Ассистенты, которые отвечают в магазине, в WhatsApp, Instagram и Messenger.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы каталога, таблицы и правила, по которым отвечает ассистент.',
          },
          {
            path: '/help-desk',
            label: 'Хелпдеск',
            desc: 'Заявки в поддержку как тикеты, передача диалога команде и общий ящик входящих.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Каждый покупатель как один контакт, с тегами, полями и задачами.',
          },
          {
            path: '/compare/tidio/',
            label: 'Fineguide или Tidio',
            desc: 'ИИ-ассистент для магазина со встроенной CRM в сравнении с Tidio.',
          },
          {
            path: '/compare/jivochat/',
            label: 'Fineguide или JivoChat',
            desc: 'Первым отвечает ИИ, а операторы JivoChat подключаются, когда нужно.',
          },
        ],
      },
      faq: {
        heading: 'Чат-бот для интернет-магазина: частые вопросы',
        items: [
          {
            q: 'Что умеет чат-бот для интернет-магазина?',
            a: 'Он в любое время отвечает на вопросы о товарах, доставке, оплате и возврате, может проверить заказ в вашей системе, берёт контакты сомневающихся покупателей и передаёт жалобы команде. В Fineguide он делает это на сайте, в WhatsApp, Instagram и Messenger.',
          },
          {
            q: 'Может ли чат-бот сказать клиенту, где его заказ?',
            a: 'Да, через действие. Ассистент спрашивает номер заказа и email, обращается к системе магазина по HTTP и отвечает полученным статусом.',
          },
          {
            q: 'Как обучить чат-бота каталогу товаров?',
            a: 'Добавьте адрес каталога, и прочитаются все страницы под ним, затем загрузите таблицы или PDF с характеристиками и таблицами размеров. На платных тарифах страницы синхронизируются, поэтому новые товары и изменения цен доходят до ассистента.',
          },
          {
            q: 'Может ли бот отвечать на комментарии и сообщения в Instagram магазина?',
            a: 'Да. Подключите бизнес-аккаунт Instagram и включите личные сообщения и ответы на комментарии; так же работает страница Facebook и Messenger.',
          },
          {
            q: 'Что происходит, когда клиент жалуется?',
            a: 'Вы описываете ситуации, где нужен человек, например повреждённый товар или возврат денег, и ассистент передаёт диалог команде со всей перепиской. Клиент также может оставить заявку в поддержку, которая откроется во входящих.',
          },
          {
            q: 'Есть ли встроенная CRM для интернет-магазина?',
            a: 'Да. Каждый покупатель, оставивший email или телефон, становится контактом во встроенной CRM с каналами, тегами, дополнительными полями, задачами и историей разговоров. Существующую базу клиентов можно импортировать из CSV или Excel.',
          },
          {
            q: 'Есть ли бесплатный тариф для интернет-магазинов?',
            a: 'Да. Начните с бесплатного тарифа: 200 кредитов, карта не нужна, с ассистентом, чатом на сайте и CRM. Сбор лидов, заявки в поддержку и сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      closing: {
        heading: 'Задайте вопрос ассистенту своего магазина.',
        body: 'Создайте ассистента из шаблона для интернет-магазина, дайте ему страницы каталога и возврата и спросите то, что спросил бы покупатель. Или запишитесь на 30-минутное демо и посмотрите, как он отвечает в вашем магазине.',
      },
    },
  },
};

export default solution;
