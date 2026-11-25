import type { Solution } from './types';

const solution: Solution = {
  slug: 'knowledge-base',
  image: 'office-golden.jpg',
  imageAlt: {
    en: 'Two colleagues laughing over a desk in a sunlit office with tall arched windows and wooden cabinets, while a third walks past',
    ro: 'Doi colegi râd aplecați deasupra unui birou, într-un spațiu luminat de soare, cu ferestre înalte arcuite și dulapuri din lemn, iar un al treilea trece pe lângă ei',
    ru: 'Двое коллег смеются, склонившись над столом в залитом солнцем офисе с высокими арочными окнами и деревянными шкафами, мимо проходит третий',
  },
  appName: 'Fineguide Knowledge Base',
  checked: '2026-11-25',
  reading: ['/blog/train-a-chatbot-on-your-documents/', '/blog/per-user-knowledge-context-id/', '/blog/how-to-add-knowledge-to-your-ai-assistant-answer-real-business-questions/', '/blog/add-ai-chatbot-to-your-website/'],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/LearningContextPage.tsx (tabs Documents / Websites / Questions and answers / Web search; "It answers from these, and only from what is turned on")',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/WebContextSection.tsx (several addresses per website, "Include pages under these addresses" default on = includeSubpaths + followLinks, Keep in sync gated by canSynchronizeContexts, read again by hand, turn a source on/off)',
    'ai-backoffice-frontend apps/ai-workspace/src/hooks/useAbilities.ts canSynchronizeContexts = agents/context-sync submodule (plan-gated) + ai-backoffice-api src/modules/ability/context-synchronization.guard.ts; manual resync not gated (bot-controller.service.ts)',
    'ai-backoffice-api docs/LEARNING-CONTEXTS.md "Adaptive auto-sync" (BotContextSyncSchedulerService: incremental re-crawls, interval halves when pages change a lot, grows when they do not; unchanged pages skipped)',
    'ai-gptcrawler worker/spider.py run_browse_request (every page opened in headless Chromium, waits for network idle + SPA content; sitemap.xml added when following links)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/DocumentContextSection.tsx (ACCEPT .pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,.json,.html,.md; drag and drop; search files; filters Turned on / Ready / Being read / Waiting / Failed; preview, download, read again, turn off without deleting)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/CustomAnswersSection.tsx ("Exact answers the assistant gives when a visitor asks one of these, in their own words")',
    'ai-backoffice-api src/modules/q-and-a/questions/questions.service.ts + docs/LEARNING-CONTEXTS.md section 3 (Q&A = SHARED context, always searched, also in per-user scope)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx "What it answers": Anything / Only what it has learned + "Reply to other questions" (restrictToContext, outOfContextAnswer); ai-gptcrawler api/gptchat.py restrict_to_context',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/WebSearchSection.tsx (allowWebSearch, "Used only when nothing it has learned answers the question", Only these sites / Never these sites, choice of search service)',
    'ai-backoffice-api src/modules/rest-api/bot/context/context.controller.ts (REST: list, read, create with client-supplied id, update, upload document 50 MB, delete, resync; x-api-key) + ai-backoffice-frontend apps/ai-workspace/src/modules/settings/api-keys/ApiKeysPage.tsx (API keys in settings, not plan-gated)',
    'ai-backoffice-frontend packages/ui/src/components/EmbeddableChatWidget/EmbeddableChatWidget.tsx config.contextId, packages/ui/src/hooks/useParentEvents.ts (postMessage contextId), apps/ai-bot-client providers.tsx (?context_id= in the chat URL); ai-backoffice-api apps/chat-api/src/_v2/socket/features/customer-socket-feature.ts (join refresh + setContext)',
    'ai-gptcrawler common/backoffice.py + api/gptchat.py (scoped retrieval: WHERE id = :context_id OR scope = SHARED; unscoped = all contexts of the bot)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/wizard/CreationSteps.tsx (new assistant: Websites "Subpages are included" + Documents steps)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/appearance/AppearancePage.tsx ("The assistant answers in the visitor\'s language"); ai-gptcrawler api/gptchat.py (reply in the language of the user); vector-search text-embedding-3-large (multilingual retrieval)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/MailboxDetailPage.tsx (mailbox answered by a chosen assistant: drafts or replies on its own)',
    'ai-fineguide-landing src/i18n/en.ts voiceAiPage ("Your knowledge base, web search and the custom actions … all work on the call"), channels list, pricing plans knowledge (about 200 / 1,000 / 2,000 / 4,000 documents; 1M / 5M / 10M / 20M characters), Context Packs, 85% warning; RO/RU terms reused from ro.ts / ru.ts',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/AssistantContextStrip.tsx (characters this assistant uses, organization meter, Context Pack link) + ai-backoffice-api src/modules/usage/usage.service.ts CONTEXT_LIMIT_WARN_THRESHOLD 0.85',
    'ai-fineguide-landing public/llms.txt (knowledge base space per plan, Context Packs +5,000,000 characters about 1,000 documents on any plan)',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Knowledge Base Chatbot Trained on Your Docs | Fineguide',
        description:
          'Train an AI chatbot on your website, PDFs, documents and FAQ. A knowledge base chatbot that answers customers from your content on chat, email and calls.',
      },
      hero: {
        eyebrow: 'AI knowledge base',
        title: 'Your knowledge,',
        titleAccent: ' in every answer.',
        subtitle:
          'Train an AI chatbot on your website, documents, PDFs and FAQ. It answers customers from what you gave it, on chat, email and phone calls, and can stay strictly within it.',
      },
      definition: {
        heading: 'What is an AI knowledge base?',
        body:
          "An AI knowledge base is the set of web pages, documents and prepared answers an AI assistant searches before it replies, so its answers come from your business and not from guesswork. Fineguide's knowledge base lets an assistant learn from whole websites, uploaded files (PDF, Word, Excel, CSV, text, HTML, Markdown and JSON) and your own questions and answers, keeps website content in sync on paid plans, and can be limited to answer only from what it has learned. The same knowledge answers customers on your website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, email and phone calls, and a platform can give each of its own users a separate knowledge base behind one assistant.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'Everything your assistant knows, in one place.',
        body:
          'Each assistant has its own learning context: the websites, files and answers it uses, each one turned on or off with a switch.',
        items: [
          {
            term: 'Whole websites',
            desc: 'Add one or more addresses and the assistant reads every page under them. Each page is opened in a real browser, so content that loads with JavaScript is read too.',
          },
          {
            term: 'Documents and PDFs',
            desc: 'Drop in price lists, policies, manuals and catalogues as PDF, Word, Excel, CSV, text, HTML, Markdown or JSON. Search your files by name, see which are ready, preview or download any of them, and turn one off without deleting it.',
          },
          {
            term: 'Questions and answers',
            desc: 'Write the exact answer for the questions customers ask most. The assistant gives it when a visitor asks the same thing in their own words.',
          },
          {
            term: 'Keep in sync',
            desc: 'On paid plans, the assistant reads your pages again in the background: more often for pages that change a lot, less often for pages that stay the same, and only changed pages are processed again. On any plan you can read a site or a file again with one click.',
          },
          {
            term: 'Only what it has learned',
            desc: 'Choose whether the assistant also answers general questions or stays within its knowledge base. In the strict mode, other questions get a reply you write, such as a pointer to your team.',
          },
          {
            term: 'Web search when nothing matches',
            desc: 'Turn on web search and the assistant looks online only when nothing it has learned answers the question. Limit it to the sites you name, or leave chosen sites out.',
          },
          {
            term: 'A separate knowledge base for each user',
            desc: 'Built for platforms: through the REST API you create a learning context for each of your own users, under the id you already use for them, and open the chat with that id. The assistant then answers that user only from their own content plus your shared questions and answers, so one assistant serves everyone.',
          },
          {
            term: 'One knowledge base, every channel',
            desc: 'The same knowledge answers on the website chat, messaging apps, email and live phone calls, and the assistant replies in the language the customer writes or speaks in.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your website to answers in one afternoon.',
        body: 'You add sources once; the assistant keeps using them on every channel you connect.',
        items: [
          'Create an assistant and enter your website address; every page under it is read.',
          'Upload the documents that are not on your site, such as price lists, policies and manuals.',
          'Add the questions customers ask most, each with the exact answer you want given.',
          'Choose whether it answers anything or only what it has learned, and whether it may search the web.',
          'Install the chat on your site or connect a channel, and ask it what your customers ask.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Sources',
            desc: '4 kinds: websites, uploaded documents, questions and answers, and web search as a fallback.',
          },
          {
            term: 'File types',
            desc: 'PDF, Word (DOC, DOCX), Excel (XLS, XLSX), CSV, plain text, HTML, Markdown and JSON.',
          },
          {
            term: 'Knowledge base space',
            desc: 'From about 200 documents (1M characters) on the free plan to about 4,000 documents (20M characters) on Premium, shared by everyone in your organization. Each assistant shows how much of it it uses.',
          },
          {
            term: 'Context Packs',
            desc: 'Each pack adds 5M characters, about 1,000 documents, on any plan. You get a warning when your space is 85% full.',
          },
          {
            term: 'Channels',
            desc: 'Website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, email and phone calls all answer from the same knowledge base.',
          },
          {
            term: 'API',
            desc: 'Create, update, upload to (up to 50 MB per file), re-read and delete learning contexts with an API key. Pass a user\'s context id in the chat link, the widget settings or a message to the chat window.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'Where your knowledge base works',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Assistants that answer from your knowledge base on your website and in messaging apps.',
          },
          {
            path: '/help-desk',
            label: 'Help desk',
            desc: 'An AI help desk that answers first and hands the rest to your team as tickets.',
          },
          {
            path: '/pricing',
            label: 'Pricing',
            desc: 'Knowledge base space, credits and seats on each plan, and Context Packs.',
          },
          {
            path: '/blog/how-to-add-knowledge-to-your-ai-assistant-answer-real-business-questions/',
            label: 'Guide: add knowledge to your assistant',
            desc: 'Which pages and documents to add first, and how to set the reply for questions outside them.',
          },
        ],
      },
      faq: {
        heading: 'AI knowledge base: common questions',
        items: [
          {
            q: 'What is an AI knowledge base?',
            a: 'An AI knowledge base is the content an AI assistant searches before it answers: your web pages, documents and prepared answers. In Fineguide, every assistant has one, and you can limit the assistant to answer only from it.',
          },
          {
            q: 'How do I train a chatbot on my own documents and PDFs?',
            a: "Open the assistant's learning context and drop in your files: PDF, Word, Excel, CSV, text, HTML, Markdown or JSON. Fineguide reads each file, shows when it is ready, and the assistant starts answering from it.",
          },
          {
            q: 'Can a chatbot learn from my website and stay up to date?',
            a: "Yes. Add your site's address and the assistant reads every page under it. On paid plans, Keep in sync reads the pages again in the background as they change, and on any plan you can read them again with one click.",
          },
          {
            q: 'What is a RAG chatbot?',
            a: 'A RAG (retrieval-augmented generation) chatbot first searches your own content for the passages that match a question, then writes its answer from them. Every Fineguide assistant works this way over its knowledge base, so answers rest on your pages, files and Q&A.',
          },
          {
            q: 'How do I stop an AI chatbot from making up answers?',
            a: 'Set the assistant to answer only from what it has learned. Questions outside its knowledge base then get a fixed reply that you write, for example an offer to pass the question to your team.',
          },
          {
            q: 'Can one chatbot have a separate knowledge base for each of my customers?',
            a: 'Yes. Through the REST API you create a learning context for each of your users under your own id for them, then open the chat with that id. The assistant answers each user only from their own content plus your shared questions and answers.',
          },
          {
            q: 'How do I make a custom ChatGPT for my business?',
            a: 'Create a Fineguide assistant, add your website, documents and most common questions, and set its persona and rules. It then answers customers from your content on your website, in messaging apps, by email and on the phone, with no code.',
          },
        ],
      },
      closing: {
        heading: 'Give your assistant something to know.',
        body: 'Start on the free plan: add your website and a few documents, then ask the assistant what your customers ask. Or book a 30-minute demo and see it answer from your own content.',
      },
    },

    ro: {
      meta: {
        title: 'Bază de cunoștințe AI pentru chatbotul tău | Fineguide',
        description:
          'Chatbot antrenat pe documente, PDF-uri, site și întrebări frecvente: o bază de cunoștințe AI din care asistentul răspunde clienților în chat, email și telefon.',
      },
      hero: {
        eyebrow: 'Bază de cunoștințe AI',
        title: 'Ce știe firma ta,',
        titleAccent: ' în fiecare răspuns.',
        subtitle:
          'Antrenează un chatbot pe site-ul tău, pe documente, PDF-uri și întrebări frecvente. Răspunde clienților din ce i-ai dat, în chat, pe email și la telefon, și poate rămâne strict în aceste limite.',
      },
      definition: {
        heading: 'Ce este o bază de cunoștințe AI?',
        body:
          'O bază de cunoștințe AI este ansamblul de pagini web, documente și răspunsuri pregătite în care un asistent AI caută înainte să răspundă, astfel încât răspunsurile vin din datele firmei tale, nu din presupuneri. Baza de cunoștințe Fineguide permite unui asistent să învețe din site-uri întregi, din fișiere încărcate (PDF, Word, Excel, CSV, text, HTML, Markdown și JSON) și din propriile tale întrebări și răspunsuri, ține conținutul site-urilor sincronizat pe planurile plătite și poate fi limitată ca asistentul să răspundă doar din ce a învățat. Aceleași cunoștințe răspund clienților în chatul de pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, pe email și la telefon, iar o platformă poate oferi fiecărui utilizator al ei o bază de cunoștințe separată, cu un singur asistent.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Tot ce știe asistentul, într-un singur loc.',
        body:
          'Fiecare asistent are propriul context de învățare: site-urile, fișierele și răspunsurile pe care le folosește, fiecare pornit sau oprit dintr-un comutator.',
        items: [
          {
            term: 'Site-uri întregi',
            desc: 'Adaugi una sau mai multe adrese, iar asistentul citește fiecare pagină de sub ele. Fiecare pagină se deschide într-un browser real, așa că se citește și conținutul încărcat prin JavaScript.',
          },
          {
            term: 'Documente și PDF-uri',
            desc: 'Încarci liste de prețuri, politici, manuale și cataloage în format PDF, Word, Excel, CSV, text, HTML, Markdown sau JSON. Cauți fișierele după nume, vezi care sunt gata, le previzualizezi sau le descarci și oprești unul fără să-l ștergi.',
          },
          {
            term: 'Întrebări și răspunsuri',
            desc: 'Scrii răspunsul exact pentru întrebările pe care clienții le pun cel mai des. Asistentul îl dă atunci când cineva întreabă același lucru cu propriile cuvinte.',
          },
          {
            term: 'Sincronizare automată',
            desc: 'Pe planurile plătite, asistentul recitește paginile în fundal: mai des pe cele care se schimbă mult, mai rar pe cele care rămân la fel, și reprocesează doar paginile modificate. Pe orice plan poți reciti un site sau un fișier cu un singur clic.',
          },
          {
            term: 'Doar ce a învățat',
            desc: 'Alegi dacă asistentul răspunde și la întrebări generale sau rămâne în limitele bazei de cunoștințe. În modul strict, la celelalte întrebări dă un răspuns scris de tine, de exemplu o trimitere către echipă.',
          },
          {
            term: 'Căutare pe web când nu găsește răspunsul',
            desc: 'Activezi căutarea pe web, iar asistentul caută online doar când nimic din ce a învățat nu răspunde la întrebare. O poți limita la site-urile alese sau poți exclude anumite site-uri.',
          },
          {
            term: 'O bază de cunoștințe separată pentru fiecare utilizator',
            desc: 'Gândită pentru platforme: prin REST API creezi un context de învățare pentru fiecare utilizator al tău, cu id-ul pe care îl folosești deja pentru el, și deschizi chatul cu acel id. Asistentul îi răspunde atunci doar din conținutul lui, plus întrebările și răspunsurile comune, așa că un singur asistent îi servește pe toți.',
          },
          {
            term: 'O singură bază, pe toate canalele',
            desc: 'Aceleași cunoștințe răspund în chatul de pe site, în aplicațiile de mesagerie, pe email și în apelurile telefonice, iar asistentul răspunde în limba în care scrie sau vorbește clientul.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la site-ul tău la răspunsuri într-o după-amiază.',
        body: 'Adaugi sursele o singură dată; asistentul le folosește pe fiecare canal pe care îl conectezi.',
        items: [
          'Creezi un asistent și introduci adresa site-ului; fiecare pagină de sub ea este citită.',
          'Încarci documentele care nu sunt pe site, cum ar fi liste de prețuri, politici și manuale.',
          'Adaugi întrebările pe care clienții le pun cel mai des, fiecare cu răspunsul exact pe care îl vrei.',
          'Alegi dacă răspunde la orice sau doar din ce a învățat și dacă are voie să caute pe web.',
          'Instalezi chatul pe site sau conectezi un canal și îl întrebi ce te întreabă clienții.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Surse',
            desc: '4 tipuri: site-uri, documente încărcate, întrebări și răspunsuri și căutarea pe web ca rezervă.',
          },
          {
            term: 'Tipuri de fișiere',
            desc: 'PDF, Word (DOC, DOCX), Excel (XLS, XLSX), CSV, text simplu, HTML, Markdown și JSON.',
          },
          {
            term: 'Spațiu pentru cunoștințe',
            desc: 'De la aproximativ 200 de documente (1M caractere) pe planul gratuit până la aproximativ 4.000 de documente (20M caractere) pe Premium, comun pentru toată organizația. Fiecare asistent arată cât spațiu folosește.',
          },
          {
            term: 'Context Packs',
            desc: 'Fiecare pachet adaugă 5M caractere, aproximativ 1.000 de documente, pe orice plan. Primești o avertizare când spațiul este plin în proporție de 85%.',
          },
          {
            term: 'Canale',
            desc: 'Chatul de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, emailul și apelurile telefonice răspund toate din aceeași bază de cunoștințe.',
          },
          {
            term: 'API',
            desc: 'Creezi, actualizezi, încarci fișiere (până la 50 MB fiecare), recitești și ștergi contexte de învățare cu o cheie API. Id-ul contextului unui utilizator se transmite în linkul chatului, în setările widgetului sau printr-un mesaj către fereastra de chat.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Unde lucrează baza de cunoștințe',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Asistenți care răspund din baza de cunoștințe pe site și în aplicațiile de mesagerie.',
          },
          {
            path: '/help-desk',
            label: 'Help desk',
            desc: 'Un help desk cu AI care răspunde primul și transmite restul echipei ca tichete.',
          },
          {
            path: '/pricing',
            label: 'Prețuri',
            desc: 'Spațiul pentru cunoștințe, creditele și locurile din fiecare plan, plus Context Packs.',
          },
          {
            path: '/blog/how-to-add-knowledge-to-your-ai-assistant-answer-real-business-questions/',
            label: 'Ghid: cum adaugi cunoștințe asistentului',
            desc: 'Ce pagini și documente adaugi întâi și cum setezi răspunsul pentru întrebările din afara lor (în engleză).',
          },
        ],
      },
      faq: {
        heading: 'Bază de cunoștințe AI: întrebări frecvente',
        items: [
          {
            q: 'Ce este o bază de cunoștințe AI?',
            a: 'O bază de cunoștințe AI este conținutul în care un asistent AI caută înainte să răspundă: paginile tale web, documentele și răspunsurile pregătite. În Fineguide, fiecare asistent are una, iar tu îl poți limita să răspundă doar din ea.',
          },
          {
            q: 'Cum antrenez un chatbot pe documentele mele?',
            a: 'Deschizi contextul de învățare al asistentului și încarci fișierele: PDF, Word, Excel, CSV, text, HTML, Markdown sau JSON. Fineguide citește fiecare fișier, îți arată când este gata, iar asistentul începe să răspundă din el.',
          },
          {
            q: 'Poate un chatbot să învețe de pe site-ul meu și să rămână la zi?',
            a: 'Da. Adaugi adresa site-ului, iar asistentul citește fiecare pagină de sub ea. Pe planurile plătite, sincronizarea automată recitește paginile în fundal pe măsură ce se schimbă, iar pe orice plan le poți reciti cu un singur clic.',
          },
          {
            q: 'Ce este un chatbot RAG?',
            a: 'Un chatbot RAG (retrieval-augmented generation, generare augmentată prin căutare) caută întâi în conținutul tău fragmentele potrivite pentru întrebare, apoi scrie răspunsul pe baza lor. Fiecare asistent Fineguide funcționează așa peste baza lui de cunoștințe, deci răspunsurile se sprijină pe paginile, fișierele și întrebările tale.',
          },
          {
            q: 'Cum opresc un chatbot AI să inventeze răspunsuri?',
            a: 'Setezi asistentul să răspundă doar din ce a învățat. La întrebările din afara bazei de cunoștințe dă atunci un răspuns fix, scris de tine, de exemplu propunerea de a transmite întrebarea echipei.',
          },
          {
            q: 'Poate un singur chatbot să aibă o bază de cunoștințe separată pentru fiecare client?',
            a: 'Da. Prin REST API creezi un context de învățare pentru fiecare utilizator, cu id-ul tău pentru el, apoi deschizi chatul cu acel id. Asistentul îi răspunde fiecăruia doar din conținutul lui, plus întrebările și răspunsurile comune.',
          },
          {
            q: 'Cum îmi fac un ChatGPT personalizat pentru firmă?',
            a: 'Creezi un asistent Fineguide, adaugi site-ul, documentele și întrebările frecvente și îi setezi personalitatea și regulile. Apoi răspunde clienților din conținutul tău pe site, în aplicațiile de mesagerie, pe email și la telefon, fără cod.',
          },
        ],
      },
      closing: {
        heading: 'Dă-i asistentului ceva de știut.',
        body: 'Începe pe planul gratuit: adaugă site-ul și câteva documente, apoi întreabă asistentul ce te întreabă clienții. Sau programează un demo de 30 de minute și vezi-l răspunzând din conținutul tău.',
      },
    },

    ru: {
      meta: {
        title: 'База знаний с ИИ: чат-бот по вашим документам | Fineguide',
        description:
          'Обучите чат-бот на документах, PDF, сайте и FAQ. Чат-бот по базе знаний отвечает клиентам по вашим материалам в чате, по почте и по телефону.',
      },
      hero: {
        eyebrow: 'База знаний с ИИ',
        title: 'Ваши знания',
        titleAccent: ' в каждом ответе.',
        subtitle:
          'Обучите чат-бот на своём сайте, документах, PDF и частых вопросах. Он отвечает клиентам из того, что вы ему дали, в чате, по почте и по телефону, и может не выходить за эти рамки.',
      },
      definition: {
        heading: 'Что такое база знаний с ИИ?',
        body:
          'База знаний с ИИ представляет собой набор веб-страниц, документов и готовых ответов, в которых ИИ-ассистент ищет информацию перед ответом, чтобы отвечать по данным вашей компании, а не наугад. В Fineguide ассистент учится на целых сайтах, загруженных файлах (PDF, Word, Excel, CSV, текст, HTML, Markdown и JSON) и ваших вопросах и ответах; на платных тарифах содержимое сайтов синхронизируется автоматически, а ассистента можно ограничить ответами только по тому, чему он научился. Эта же база знаний отвечает клиентам в чате на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, по почте и в телефонных звонках, а платформа может дать каждому своему пользователю отдельную базу знаний при одном ассистенте.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'Всё, что знает ассистент, в одном месте.',
        body:
          'У каждого ассистента свой контекст обучения: сайты, файлы и ответы, которыми он пользуется, и каждый источник включается и выключается одним переключателем.',
        items: [
          {
            term: 'Целые сайты',
            desc: 'Добавьте один или несколько адресов, и ассистент прочитает все страницы под ними. Каждая страница открывается в настоящем браузере, поэтому читается и содержимое, которое подгружается через JavaScript.',
          },
          {
            term: 'Документы и PDF',
            desc: 'Загрузите прайс-листы, регламенты, инструкции и каталоги в PDF, Word, Excel, CSV, тексте, HTML, Markdown или JSON. Ищите файлы по названию, смотрите, какие уже готовы, открывайте предпросмотр или скачивайте их и отключайте файл, не удаляя его.',
          },
          {
            term: 'Вопросы и ответы',
            desc: 'Напишите точный ответ на вопросы, которые клиенты задают чаще всего. Ассистент даст его, когда посетитель спросит то же самое своими словами.',
          },
          {
            term: 'Автосинхронизация',
            desc: 'На платных тарифах ассистент перечитывает страницы в фоне: чаще те, что часто меняются, реже те, что остаются прежними, и заново обрабатывает только изменённые. На любом тарифе сайт или файл можно перечитать одним щелчком.',
          },
          {
            term: 'Только то, чему научился',
            desc: 'Выберите, отвечает ли ассистент и на общие вопросы или держится в рамках базы знаний. В строгом режиме на остальные вопросы он даёт ответ, который вы напишете, например предложение связаться с командой.',
          },
          {
            term: 'Поиск в интернете, когда ответа нет',
            desc: 'Включите поиск в интернете, и ассистент будет искать в сети только тогда, когда ничто из изученного не отвечает на вопрос. Его можно ограничить выбранными сайтами или исключить отдельные сайты.',
          },
          {
            term: 'Отдельная база знаний для каждого пользователя',
            desc: 'Для платформ: через REST API вы создаёте контекст обучения для каждого своего пользователя под тем id, который уже у него есть, и открываете чат с этим id. Ассистент отвечает такому пользователю только по его материалам и вашим общим вопросам и ответам, так что один ассистент обслуживает всех.',
          },
          {
            term: 'Одна база знаний для всех каналов',
            desc: 'Одни и те же знания работают в чате на сайте, в мессенджерах, в почте и в живых телефонных звонках, а ассистент отвечает на том языке, на котором пишет или говорит клиент.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От сайта до готовых ответов за один день.',
        body: 'Источники добавляются один раз, а ассистент пользуется ими в каждом подключённом канале.',
        items: [
          'Создайте ассистента и укажите адрес сайта: все страницы под ним будут прочитаны.',
          'Загрузите документы, которых нет на сайте: прайс-листы, регламенты, инструкции.',
          'Добавьте самые частые вопросы клиентов, каждый с точным ответом, который нужно давать.',
          'Выберите, отвечает ли ассистент на любые вопросы или только по изученному, и может ли он искать в интернете.',
          'Установите чат на сайт или подключите канал и задайте ассистенту вопросы, которые задают ваши клиенты.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Источники',
            desc: '4 вида: сайты, загруженные документы, вопросы и ответы, а также поиск в интернете как запасной вариант.',
          },
          {
            term: 'Форматы файлов',
            desc: 'PDF, Word (DOC, DOCX), Excel (XLS, XLSX), CSV, обычный текст, HTML, Markdown и JSON.',
          },
          {
            term: 'Объём базы знаний',
            desc: 'От примерно 200 документов (1 млн символов) на бесплатном тарифе до примерно 4 000 документов (20 млн символов) на Premium, общий для всей организации. У каждого ассистента видно, сколько места он занимает.',
          },
          {
            term: 'Context Packs',
            desc: 'Каждый пакет добавляет 5 млн символов, примерно 1 000 документов, на любом тарифе. При заполнении на 85% приходит предупреждение.',
          },
          {
            term: 'Каналы',
            desc: 'Чат на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, почта и телефонные звонки отвечают по одной и той же базе знаний.',
          },
          {
            term: 'API',
            desc: 'Создание, изменение, загрузка файлов (до 50 МБ каждый), повторное чтение и удаление контекстов обучения по API-ключу. Id контекста пользователя передаётся в ссылке на чат, в настройках виджета или сообщением окну чата.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Где работает база знаний',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Ассистенты, которые отвечают по базе знаний на сайте и в мессенджерах.',
          },
          {
            path: '/help-desk',
            label: 'Хелпдеск',
            desc: 'Хелпдеск с ИИ, который отвечает первым, а остальное передаёт команде в виде тикетов.',
          },
          {
            path: '/pricing',
            label: 'Цены',
            desc: 'Объём базы знаний, кредиты и места на каждом тарифе, а также Context Packs.',
          },
          {
            path: '/blog/how-to-add-knowledge-to-your-ai-assistant-answer-real-business-questions/',
            label: 'Руководство: как наполнить базу знаний ассистента',
            desc: 'Какие страницы и документы добавить в первую очередь и как настроить ответ на вопросы вне базы (на английском).',
          },
        ],
      },
      faq: {
        heading: 'База знаний с ИИ: частые вопросы',
        items: [
          {
            q: 'Что такое база знаний с ИИ?',
            a: 'Это материалы, в которых ИИ-ассистент ищет ответ, прежде чем ответить: ваши веб-страницы, документы и готовые ответы. В Fineguide база знаний есть у каждого ассистента, и его можно ограничить ответами только по ней.',
          },
          {
            q: 'Как обучить чат-бот на своих документах?',
            a: 'Откройте контекст обучения ассистента и загрузите файлы: PDF, Word, Excel, CSV, текст, HTML, Markdown или JSON. Fineguide прочитает каждый файл, покажет, когда он готов, и ассистент начнёт отвечать по нему.',
          },
          {
            q: 'Может ли чат-бот учиться на моём сайте и обновляться сам?',
            a: 'Да. Добавьте адрес сайта, и ассистент прочитает все страницы под ним. На платных тарифах автосинхронизация перечитывает страницы в фоне по мере их изменения, а на любом тарифе их можно перечитать одним щелчком.',
          },
          {
            q: 'Что такое RAG чат-бот?',
            a: 'RAG чат-бот (retrieval-augmented generation, генерация с поиском) сначала находит в ваших материалах фрагменты, подходящие к вопросу, а потом пишет ответ на их основе. Так работает каждый ассистент Fineguide со своей базой знаний, поэтому ответы опираются на ваши страницы, файлы и вопросы-ответы.',
          },
          {
            q: 'Как сделать, чтобы ИИ-бот не выдумывал ответы?',
            a: 'Настройте ассистента отвечать только по тому, чему он научился. Тогда на вопросы вне базы знаний он даёт фиксированный ответ, который вы напишете, например предложение передать вопрос команде.',
          },
          {
            q: 'Можно ли сделать у одного чат-бота отдельную базу знаний для каждого клиента?',
            a: 'Да. Через REST API вы создаёте контекст обучения для каждого пользователя под своим id для него и открываете чат с этим id. Ассистент отвечает каждому только по его материалам и вашим общим вопросам и ответам.',
          },
          {
            q: 'Как сделать свой ChatGPT для бизнеса?',
            a: 'Создайте ассистента в Fineguide, добавьте сайт, документы и частые вопросы и задайте ему характер и правила. Дальше он отвечает клиентам по вашим материалам на сайте, в мессенджерах, по почте и по телефону, без программирования.',
          },
        ],
      },
      closing: {
        heading: 'Дайте ассистенту то, что нужно знать.',
        body: 'Начните с бесплатного тарифа: добавьте сайт и несколько документов и задайте ассистенту вопросы, которые задают ваши клиенты. Или запишитесь на 30-минутное демо и посмотрите, как он отвечает по вашим материалам.',
      },
    },
  },
};

export default solution;
