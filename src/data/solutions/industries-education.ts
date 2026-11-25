import type { Solution } from './types';

const solution: Solution = {
  slug: 'industries/education',
  image: 'partner-consultant.jpg',
  imageAlt: {
    en: 'A young man explains a plan on a sheet of paper to a woman at a wooden table, with shelves of folders behind them',
    ro: 'Un tânăr îi explică unei femei un plan pe o foaie, la o masă de lemn, cu rafturi de dosare în spate',
    ru: 'Молодой человек объясняет женщине план на листе бумаги за деревянным столом, позади полки с папками',
  },
  appName: 'Fineguide for schools and training',
  checked: '2026-11-25',
  reading: [
    '/blog/ai-assistant-for-education-and-training/',
    '/blog/session-variables-chat-to-crm-data/',
    '/blog/facebook-lead-ads-to-crm/',
    '/blog/ai-outbound-call-campaigns/',
    '/blog/train-a-chatbot-on-your-documents/',
    '/blog/telegram-bot-for-business/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx (Only what it has learned + reply to other questions; Lead collection behind canAccessLeadCollection, "Fields a lead needs": saved once these are collected, or as soon as there is an email or phone number)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/variables/SessionVariablesPage.tsx (Text, Number, Yes or no, One of a list, Several from a list)',
    'ai-backoffice-api apps/backoffice-api/src/modules/crm/lead/lead.service.ts createInternal (contact found or created by email then phone, collected values on the contact, conversation linked, follow-up task due in 24 hours when interested) + contact.service.ts applyCollectedValues + custom-field.service.ts syncBotVariablesToCustomFields',
    'ai-backoffice-api apps/backoffice-api/src/modules/crm/lead/facebook-lead-ads.service.ts (lead form submission: contact found or made by email then phone; becomes a deal with source Facebook Lead Ads, form, ad, campaign and every answer; LEAD_FORM webhooks) + ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/types.ts FACEBOOK "Messenger conversations, comments and lead forms of your Facebook page"',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/crm/pipelines/components/PipelineCreateView.tsx + PipelineBoardSettingsView.tsx (pipelines with your own stages)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/settings/integrations/CalendarPage.tsx + ai-backoffice-api src/modules/crm/google-calendar/google-calendar.service.ts (two-way task sync)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/types.ts CampaignType OUTREACH | SURVEY | PROMOTION, CampaignSchedule.week; ai-backoffice-api src/modules/telephony/segments/segment.dto.ts (CSV, CRM contacts, tags); export providers survey/promotion CSV / PDF (verified in landing call-center.ts)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx + messages/conversations/components/ChatWidget.tsx (Handoff briefing: summary + key facts)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/LearningContextPage.tsx (Documents / Websites / Questions and answers / Web search), DocumentContextSection.tsx (PDF, Word, Excel, CSV …), WebContextSection.tsx Keep in sync (plan-gated context sync), verified in landing knowledge-base.ts',
    'ai-backoffice-api prisma/schema.prisma EmailInbox aiMode OFF | DRAFT | AUTO (default OFF), aiReplyDelaySeconds 120, aiMaxRepliesPerThread 3 (verified in landing help-desk.ts)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/voice/VoicePage.tsx + voiceCatalog.ts (14 languages; transfer, callback request as CRM task) (verified in landing call-center.ts)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/appearance/AppearancePage.tsx LANGUAGES (24 chat interface languages)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/analytics/AnalyticsPage.tsx (satisfaction, sentiment, resolution, client intents) (verified in landing help-desk.ts)',
    'landing public/llms.txt CRM (import from CSV, TSV, XLS or XLSX, CSV export); BRIEF.md plan gating (lead collection, workflows, context sync on paid plans); free plan 200 credits, no card',
  ],
  copy: {
    en: {
      meta: {
        title: 'CRM and AI Chatbot for Schools and Courses | Fineguide',
        description:
          'CRM for schools and training centers with an AI assistant for admissions: answers course questions on chat and WhatsApp and saves each enquiry with its course.',
      },
      hero: {
        eyebrow: 'For schools and training',
        title: 'Every enquiry before the intake,',
        titleAccent: ' answered and in your CRM.',
        subtitle:
          'An AI assistant answers questions about courses, start dates, fees and levels on your website and messaging apps, saves each enquiry with the details your admissions team needs, and hands the conversation to a person when a decision needs one.',
      },
      definition: {
        heading: 'What is a CRM for schools and training centers?',
        body:
          'A CRM for schools and training centers is the system an admissions team uses to keep every enquiry, applicant and follow-up in one place until the person enrolls. Fineguide combines that CRM with an AI assistant that answers future students and parents on the website chat, WhatsApp, Telegram, Instagram and Messenger from your own course pages and documents, saves the course, level and start date they mention on their contact, and hands the conversation to your team when a person is needed. Facebook lead form answers arrive as deals, and outbound call campaigns reach past enquiries before the next intake.',
      },
      capabilities: {
        eyebrow: 'How schools use it',
        heading: 'Four admissions workflows, and the tools behind them.',
        body: 'Language schools, online course providers, training centers and admissions offices build them from the same features.',
        items: [
          {
            term: 'Evening question, qualified enquiry',
            desc: 'A parent asks at 22:00 whether there is an evening group for beginners. The assistant answers from your timetable, picks up the course, level and format from the conversation, asks for an email or phone number and, on paid plans, saves it all on their CRM contact with a follow-up task due the next day.',
          },
          {
            term: 'Course ads straight into the CRM',
            desc: 'Connect your Facebook page, and every lead form submission from your course ads becomes a deal with the form, the ad, the campaign and every answer, on a contact matched by email or phone or created new.',
          },
          {
            term: 'Admissions on your own stages',
            desc: 'Move applicants across a board with your own stages, such as New enquiry, Placement test, Offer sent and Enrolled, and add tasks for placement tests and callbacks. Tasks with a deadline sync both ways with Google Calendar.',
          },
          {
            term: 'Calls before the next intake',
            desc: 'An outreach campaign has an AI voice agent call past enquiries or finishing students during the hours you allow. A survey campaign asks how a course went and returns the answers as a CSV or PDF report.',
          },
          {
            term: 'Answers only from your course material',
            desc: 'Course pages, timetables, fee pages and the catalogue as a PDF or spreadsheet, plus exact answers for refund and certificate questions. Set the assistant to answer only from these, and other questions get the reply you write.',
          },
          {
            term: 'Handover for decisions',
            desc: 'Scholarships, complaints or a company asking to train a whole team: describe these in your own words, and the conversation goes to admissions in Messages with a summary and key facts while the assistant stops replying.',
          },
          {
            term: 'Phone and email too',
            desc: "The same assistant answers your school's number over SIP in 14 languages, puts callers through to admissions and takes callback requests as tasks. In your admissions mailbox it writes drafts a person approves, or replies on its own if you choose.",
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your course pages to a full admissions pipeline.',
        body: 'Start with the channel most of your enquiries come from, then add the rest.',
        items: [
          'Give the assistant your course pages, timetable and fees, and exact answers for refund and certificate questions.',
          'Add the fields an enquiry needs, such as course, level, format and start date, and turn on lead collection.',
          'Connect the website chat, WhatsApp, Instagram, Messenger and Telegram, and your Facebook page for lead forms.',
          'Set up a board with your admissions stages, and choose when a conversation goes to a person.',
          "Before each intake, call last term's enquiries with an outreach campaign.",
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Channels',
            desc: 'Website chat, WhatsApp, Telegram, Instagram, Facebook Messenger and lead forms, email in the shared Inbox, and your phone number over SIP.',
          },
          {
            term: 'Enquiry fields',
            desc: "5 field types: text, number, yes or no, one of a list and several from a list. The answers are saved on the person's CRM contact.",
          },
          {
            term: 'Languages',
            desc: "Chat replies in the language the student writes in. Phone calls in 14 languages, and the chat window's buttons and labels in 24.",
          },
          {
            term: 'Campaigns',
            desc: '3 types: outreach, survey and promotion, for audiences from a CSV, CRM contacts or tags, with calling hours for each day of the week.',
          },
          {
            term: 'CRM',
            desc: 'Contacts, deals on boards with your own stages, tasks with two-way Google Calendar sync, import from CSV or Excel and CSV export.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits and no card. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind your admissions',
        links: [
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, deals on your own stages, tasks and calendar sync.',
          },
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Assistants that answer on your website, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The course pages, documents and exact answers your assistant answers from.',
          },
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Chats from every channel and your email in one team inbox, with handover to a person.',
          },
          {
            path: '/campaigns',
            label: 'Campaigns',
            desc: 'Outbound call campaigns of three kinds: outreach, survey and promotion.',
          },
        ],
      },
      faq: {
        heading: 'CRM for schools and courses: common questions',
        items: [
          {
            q: 'What is a CRM for schools?',
            a: 'A CRM for schools keeps every enquiry, applicant and follow-up in one place until the person enrolls. In Fineguide, an AI assistant fills it from your website chat and messaging apps as people ask about courses.',
          },
          {
            q: 'Can a chatbot answer admissions questions?',
            a: 'Yes. It answers from your course pages, timetable, fees and documents, and can be limited to only that material. Questions that need a decision, such as scholarships, go to your admissions team.',
          },
          {
            q: 'How do I get enquiries from Instagram and WhatsApp into a CRM?',
            a: 'Connect both channels to one assistant and turn on lead collection. When a person leaves an email or phone number, the details they gave, such as course and level, are saved on their contact with the conversation.',
          },
          {
            q: 'Can Facebook lead ads go straight into the CRM?',
            a: 'Yes. Connect your Facebook page, and each lead form submission becomes a deal with the form, ad, campaign and every answer, on a contact matched by email or phone.',
          },
          {
            q: 'Will the chatbot give wrong dates or fees?',
            a: 'Set it to answer only from what it has learned, and it answers from the timetable and fee pages you gave it. On paid plans it reads your website again in the background, so changed dates reach it on their own.',
          },
          {
            q: 'Can an AI call students before a new intake?',
            a: 'Yes. An outreach campaign has an AI voice agent call a list from a CSV, CRM contacts or tags during the hours you set, and record the outcome for each person.',
          },
          {
            q: 'Is there a free plan?',
            a: 'Yes. You can start on the free plan with 200 credits and no card. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      closing: {
        heading: 'Be ready before the next intake.',
        body: 'Give an assistant your course pages, connect the channel most enquiries come from and ask it what applicants ask. Or book a 30-minute demo and see admissions in the CRM on your own courses.',
      },
    },

    ro: {
      meta: {
        title: 'CRM pentru școli și cursuri, cu asistent AI | Fineguide',
        description:
          'CRM pentru școli, cursuri și centre de formare, cu asistent AI la admitere: răspunde despre cursuri în chat și pe WhatsApp și salvează fiecare cerere în CRM.',
      },
      hero: {
        eyebrow: 'Pentru școli și cursuri',
        title: 'Fiecare cerere înainte de înscrieri,',
        titleAccent: ' cu răspuns și în CRM.',
        subtitle:
          'Asistentul AI răspunde la întrebări despre cursuri, date de început, taxe și niveluri pe site și în aplicațiile de mesagerie, salvează fiecare cerere cu detaliile de care are nevoie echipa de admitere și predă conversația unui om când trebuie luată o decizie.',
      },
      definition: {
        heading: 'Ce este un CRM pentru școli și cursuri?',
        body:
          'Un CRM pentru școli și cursuri este sistemul în care echipa de admitere ține fiecare cerere, candidat și revenire până la înscriere. Fineguide unește acest CRM cu un asistent AI care răspunde viitorilor cursanți și părinților în chatul de pe site, pe WhatsApp, Telegram, Instagram și Messenger, din paginile și documentele tale despre cursuri, salvează pe contactul lor cursul, nivelul și data de început pe care le menționează și predă conversația echipei când e nevoie de un om. Răspunsurile din formularele de lead-uri Facebook ajung ca oportunități, iar campaniile de apeluri îi contactează pe cei care au întrebat înainte de următoarea grupă.',
      },
      capabilities: {
        eyebrow: 'Cum îl folosesc școlile',
        heading: 'Patru fluxuri de admitere și instrumentele din spatele lor.',
        body: 'Școlile de limbi străine, platformele de cursuri online, centrele de formare și birourile de admitere le construiesc din aceleași funcții.',
        items: [
          {
            term: 'Întrebare seara, cerere calificată',
            desc: 'Un părinte întreabă la 22:00 dacă există o grupă de seară pentru începători. Asistentul răspunde din orar, reține din conversație cursul, nivelul și formatul, cere un email sau un telefon și, pe planurile plătite, salvează totul pe contactul din CRM, cu o sarcină de revenire cu termen a doua zi.',
          },
          {
            term: 'Reclamele pentru cursuri, direct în CRM',
            desc: 'Conectezi pagina de Facebook, iar fiecare formular de lead-uri completat din reclamele tale devine o oportunitate cu formularul, reclama, campania și toate răspunsurile, pe un contact găsit după email sau telefon ori creat nou.',
          },
          {
            term: 'Admitere pe etapele tale',
            desc: 'Muți candidații pe o tablă cu etapele tale, de exemplu Cerere nouă, Test de nivel, Ofertă trimisă și Înscris, și adaugi sarcini pentru teste și reveniri. Sarcinile cu termen se sincronizează în ambele sensuri cu Google Calendar.',
          },
          {
            term: 'Apeluri înainte de următoarea grupă',
            desc: 'Într-o campanie de prospectare, un agent vocal AI îi sună pe cei care au întrebat anterior sau pe cursanții care termină un nivel, în orele permise de tine. O campanie de sondaj întreabă cum a fost cursul și dă răspunsurile într-un raport CSV sau PDF.',
          },
          {
            term: 'Răspunsuri doar din materialele tale',
            desc: 'Paginile cursurilor, orarul, taxele și catalogul ca PDF sau tabel, plus răspunsuri exacte despre rambursări și certificate. Setezi asistentul să răspundă doar din acestea, iar la alte întrebări dă răspunsul scris de tine.',
          },
          {
            term: 'Predare pentru decizii',
            desc: 'Burse, reclamații sau o firmă care vrea să instruiască o echipă întreagă: le descrii cu vorbele tale, iar conversația ajunge la admitere în Mesaje, cu un rezumat și faptele principale, în timp ce asistentul nu mai răspunde.',
          },
          {
            term: 'Și telefonul, și emailul',
            desc: 'Același asistent răspunde la numărul școlii prin SIP, în 14 limbi, transferă apelanții la admitere și preia cereri de revenire ca sarcini. În căsuța de email a admiterii scrie ciorne pe care le aprobă un om sau, dacă alegi, răspunde singur.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la paginile cursurilor la un proces complet de admitere.',
        body: 'Începi cu canalul din care vin cele mai multe cereri, apoi le adaugi pe celelalte.',
        items: [
          'Îi dai asistentului paginile cursurilor, orarul și taxele, plus răspunsuri exacte despre rambursări și certificate.',
          'Adaugi câmpurile de care are nevoie o cerere, cum ar fi cursul, nivelul, formatul și data de început, și activezi colectarea de lead-uri.',
          'Conectezi chatul de pe site, WhatsApp, Instagram, Messenger și Telegram, plus pagina de Facebook pentru formularele de lead-uri.',
          'Creezi o tablă cu etapele de admitere și alegi când conversația trece la un om.',
          'Înainte de fiecare grupă nouă, îi suni pe cei care au întrebat cu o campanie de prospectare.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Canale',
            desc: 'Chatul de pe site, WhatsApp, Telegram, Instagram, Facebook Messenger și formularele de lead-uri, emailul în Inbox-ul comun și numărul tău de telefon prin SIP.',
          },
          {
            term: 'Câmpurile cererii',
            desc: '5 tipuri de câmpuri: text, număr, da sau nu, una dintr-o listă și mai multe dintr-o listă. Răspunsurile se salvează pe contactul persoanei din CRM.',
          },
          {
            term: 'Limbi',
            desc: 'În chat răspunde în limba în care scrie cursantul. Apelurile, în 14 limbi, iar butoanele și textele ferestrei de chat, în 24.',
          },
          {
            term: 'Campanii',
            desc: '3 tipuri: prospectare, sondaj și promoție, pe audiențe din CSV, contacte CRM sau etichete, cu ore de apel pentru fiecare zi a săptămânii.',
          },
          {
            term: 'CRM',
            desc: 'Contacte, oportunități pe table cu etapele tale, sarcini sincronizate în ambele sensuri cu Google Calendar, import din CSV sau Excel și export CSV.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite și fără card. Colectarea de lead-uri și fluxurile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Modulele din spatele admiterii',
        links: [
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, oportunități pe etapele tale, sarcini și sincronizare cu calendarul.',
          },
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Asistenți care răspund pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile cursurilor, documentele și răspunsurile exacte din care răspunde asistentul.',
          },
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Chaturile din toate canalele și emailul într-un inbox comun, cu predare către un coleg.',
          },
          {
            path: '/campaigns',
            label: 'Campanii',
            desc: 'Campanii de apeluri de trei tipuri: prospectare, sondaj și promoție.',
          },
        ],
      },
      faq: {
        heading: 'CRM pentru școli și cursuri: întrebări frecvente',
        items: [
          {
            q: 'Ce este un CRM pentru școli și cursuri?',
            a: 'Un CRM pentru școli ține într-un singur loc fiecare cerere, candidat și revenire, până la înscriere. În Fineguide îl completează un asistent AI, din chatul de pe site și din aplicațiile de mesagerie, pe măsură ce oamenii întreabă despre cursuri.',
          },
          {
            q: 'Poate un chatbot să răspundă la întrebările de admitere?',
            a: 'Da. Răspunde din paginile cursurilor, orar, taxe și documente și poate fi limitat doar la aceste materiale. Întrebările care cer o decizie, de exemplu despre burse, ajung la echipa de admitere.',
          },
          {
            q: 'Cum aduc cererile de pe Instagram și WhatsApp în CRM?',
            a: 'Conectezi ambele canale la un asistent și activezi colectarea de lead-uri. Când persoana lasă un email sau un telefon, detaliile pe care le-a dat, cum ar fi cursul și nivelul, se salvează pe contactul ei, împreună cu conversația.',
          },
          {
            q: 'Pot ajunge lead-urile din reclamele Facebook direct în CRM?',
            a: 'Da. Conectezi pagina de Facebook, iar fiecare formular completat devine o oportunitate cu formularul, reclama, campania și toate răspunsurile, pe un contact găsit după email sau telefon.',
          },
          {
            q: 'Va da chatbotul date sau taxe greșite?',
            a: 'Îl setezi să răspundă doar din ce a învățat, iar el răspunde din orarul și paginile cu taxe pe care i le-ai dat. Pe planurile plătite citește din nou site-ul în fundal, așa că datele schimbate ajung singure la el.',
          },
          {
            q: 'Poate un AI să-i sune pe cursanți înainte de o grupă nouă?',
            a: 'Da. Într-o campanie de prospectare, un agent vocal AI sună o listă din CSV, contacte CRM sau etichete, în orele setate de tine, și notează rezultatul pentru fiecare persoană.',
          },
          {
            q: 'Există un plan gratuit?',
            a: 'Da. Începi pe planul gratuit, cu 200 de credite și fără card. Colectarea de lead-uri și fluxurile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      closing: {
        heading: 'Fii gata înainte de următoarea grupă.',
        body: 'Dă-i unui asistent paginile cursurilor, conectează canalul din care vin cele mai multe cereri și întreabă-l ce întreabă candidații. Sau programează un demo de 30 de minute și vezi admiterea în CRM pe cursurile tale.',
      },
    },

    ru: {
      meta: {
        title: 'CRM для онлайн-школы и учебного центра | Fineguide',
        description:
          'CRM для онлайн-школы и учебного центра с чат-ботом: ИИ-ассистент отвечает о курсах в чате и WhatsApp и сохраняет каждую заявку с курсом и уровнем в CRM.',
      },
      hero: {
        eyebrow: 'Для школ и учебных центров',
        title: 'Каждая заявка перед набором',
        titleAccent: ' получает ответ и попадает в CRM.',
        subtitle:
          'ИИ-ассистент отвечает на вопросы о курсах, датах старта, стоимости и уровнях на сайте и в мессенджерах, сохраняет каждую заявку с данными, которые нужны приёмной комиссии, и передаёт диалог человеку, когда нужно принять решение.',
      },
      definition: {
        heading: 'Что такое CRM для онлайн-школы и учебного центра?',
        body:
          'CRM для онлайн-школы и учебного центра представляет собой систему, в которой отдел набора хранит каждую заявку, абитуриента и следующий шаг до момента зачисления. Fineguide объединяет такую CRM с ИИ-ассистентом, который отвечает будущим ученикам и родителям в чате на сайте, в WhatsApp, Telegram, Instagram и Messenger по вашим страницам курсов и документам, сохраняет в их контакте курс, уровень и дату старта, о которых они говорят, и передаёт диалог команде, когда нужен человек. Ответы из лид-форм Facebook приходят как сделки, а обзвон напоминает о курсах тем, кто уже интересовался, перед следующим набором.',
      },
      capabilities: {
        eyebrow: 'Как это используют школы',
        heading: 'Четыре сценария набора и инструменты за ними.',
        body: 'Языковые школы, онлайн-школы, учебные центры и приёмные комиссии собирают их из одних и тех же функций.',
        items: [
          {
            term: 'Вопрос вечером, готовая заявка',
            desc: 'Родитель в 22:00 спрашивает, есть ли вечерняя группа для начинающих. Ассистент отвечает по расписанию, берёт из разговора курс, уровень и формат, просит email или телефон и на платных тарифах сохраняет всё это в контакте CRM вместе с задачей связаться на следующий день.',
          },
          {
            term: 'Реклама курсов прямо в CRM',
            desc: 'Подключите страницу Facebook, и каждая заполненная лид-форма из вашей рекламы станет сделкой с формой, объявлением, кампанией и всеми ответами, в контакте, найденном по email или телефону или созданном заново.',
          },
          {
            term: 'Набор по вашим этапам',
            desc: 'Ведите абитуриентов по доске с вашими этапами, например «Новая заявка», «Тестирование», «Предложение отправлено» и «Зачислен», и ставьте задачи на тестирование и перезвоны. Задачи со сроком синхронизируются с Google Calendar в обе стороны.',
          },
          {
            term: 'Обзвон перед новым набором',
            desc: 'В кампании обзвона ИИ-агент звонит тем, кто уже интересовался, или ученикам, заканчивающим уровень, в разрешённые вами часы. Кампания-опрос спрашивает, как прошёл курс, и выдаёт ответы отчётом в CSV или PDF.',
          },
          {
            term: 'Ответы только по вашим материалам',
            desc: 'Страницы курсов, расписание, стоимость и каталог в PDF или таблице, а также точные ответы о возвратах и сертификатах. Разрешите ассистенту отвечать только по ним, и на другие вопросы он даст ваш ответ.',
          },
          {
            term: 'Передача диалога для решений',
            desc: 'Скидки и гранты, жалобы или компания, которая хочет обучить целую команду: опишите такие случаи своими словами, и диалог уйдёт отделу набора в раздел «Сообщения» с кратким изложением и ключевыми фактами, а ассистент перестанет отвечать.',
          },
          {
            term: 'Телефон и почта тоже',
            desc: 'Тот же ассистент отвечает на номер школы через SIP на 14 языках, соединяет звонящих с отделом набора и принимает заявки на обратный звонок как задачи. В почтовом ящике набора он пишет черновики, которые утверждает сотрудник, или, если вы выберете, отвечает сам.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От страниц курсов до полной воронки набора.',
        body: 'Начните с канала, из которого приходит больше всего заявок, затем подключите остальные.',
        items: [
          'Дайте ассистенту страницы курсов, расписание и стоимость, а также точные ответы о возвратах и сертификатах.',
          'Добавьте поля заявки, например курс, уровень, формат и дату старта, и включите сбор лидов.',
          'Подключите чат на сайте, WhatsApp, Instagram, Messenger и Telegram, а также страницу Facebook для лид-форм.',
          'Создайте доску с этапами набора и выберите, когда диалог переходит к человеку.',
          'Перед каждым набором запустите обзвон тех, кто интересовался в прошлый раз.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Каналы',
            desc: 'Чат на сайте, WhatsApp, Telegram, Instagram, Facebook Messenger и лид-формы, почта в общем ящике входящих и ваш номер телефона через SIP.',
          },
          {
            term: 'Поля заявки',
            desc: '5 типов полей: текст, число, да или нет, один вариант из списка и несколько вариантов из списка. Ответы сохраняются в контакте человека в CRM.',
          },
          {
            term: 'Языки',
            desc: 'В чате ассистент отвечает на языке ученика. Звонки на 14 языках, кнопки и надписи окна чата на 24 языках.',
          },
          {
            term: 'Кампании',
            desc: '3 типа: обзвон, опрос и промо, по спискам из CSV, контактов CRM или тегов, с часами звонков на каждый день недели.',
          },
          {
            term: 'CRM',
            desc: 'Контакты, сделки на досках с вашими этапами, задачи с двусторонней синхронизацией Google Calendar, импорт из CSV или Excel и экспорт в CSV.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа: 200 кредитов, без карты. Сбор лидов и сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Модули, на которых работает набор',
        links: [
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, сделки по вашим этапам, задачи и синхронизация с календарём.',
          },
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Ассистенты, которые отвечают на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack и Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы курсов, документы и точные ответы, по которым отвечает ассистент.',
          },
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Чаты из всех каналов и почта в общем ящике команды, с передачей диалога сотруднику.',
          },
          {
            path: '/campaigns',
            label: 'Кампании',
            desc: 'Исходящий обзвон трёх видов: обзвон, опрос и промо.',
          },
        ],
      },
      faq: {
        heading: 'CRM для онлайн-школы: частые вопросы',
        items: [
          {
            q: 'Что такое CRM для онлайн-школы?',
            a: 'CRM для онлайн-школы хранит в одном месте каждую заявку, ученика и следующий шаг до оплаты или зачисления. В Fineguide её заполняет ИИ-ассистент из чата на сайте и мессенджеров, пока люди спрашивают о курсах.',
          },
          {
            q: 'Может ли чат-бот для учебного центра отвечать на вопросы о поступлении?',
            a: 'Да. Он отвечает по страницам курсов, расписанию, стоимости и документам, и его можно ограничить только этими материалами. Вопросы, требующие решения, например о скидках, уходят отделу набора.',
          },
          {
            q: 'Как собрать заявки из Instagram и WhatsApp в CRM?',
            a: 'Подключите оба канала к одному ассистенту и включите сбор лидов. Когда человек оставляет email или телефон, данные, которые он назвал, например курс и уровень, сохраняются в его контакте вместе с перепиской.',
          },
          {
            q: 'Можно ли передавать лиды из рекламы Facebook сразу в CRM?',
            a: 'Да. Подключите страницу Facebook, и каждая заполненная лид-форма станет сделкой с формой, объявлением, кампанией и всеми ответами, в контакте, найденном по email или телефону.',
          },
          {
            q: 'Не назовёт ли чат-бот неверные даты или цены?',
            a: 'Разрешите ему отвечать только по тому, чему он обучен, и он будет отвечать по расписанию и страницам цен, которые вы дали. На платных тарифах он перечитывает сайт в фоне, поэтому изменённые даты доходят до него сами.',
          },
          {
            q: 'Может ли ИИ обзвонить учеников перед новым набором?',
            a: 'Да. В кампании обзвона ИИ-агент звонит по списку из CSV, контактов CRM или тегов в часы, которые вы задали, и фиксирует результат по каждому человеку.',
          },
          {
            q: 'Есть ли бесплатный тариф?',
            a: 'Да. Начните с бесплатного тарифа: 200 кредитов, без карты. Сбор лидов и сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      closing: {
        heading: 'Подготовьтесь к следующему набору заранее.',
        body: 'Дайте ассистенту страницы курсов, подключите канал, из которого приходит больше всего заявок, и спросите его то, что спрашивают абитуриенты. Или запишитесь на 30-минутное демо и посмотрите набор в CRM на примере ваших курсов.',
      },
    },
  },
};

export default solution;
