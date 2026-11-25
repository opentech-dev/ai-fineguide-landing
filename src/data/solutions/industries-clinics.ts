import type { Solution } from './types';

const solution: Solution = {
  slug: 'industries/clinics',
  image: 'voice-desk.jpg',
  imageAlt: {
    en: 'A desk phone and a notepad on a wooden front desk, with an office and colleagues at work behind it',
    ro: 'Un telefon de birou și un carnețel pe un birou de recepție din lemn, cu un birou și colegi la lucru în spate',
    ru: 'Офисный телефон и блокнот на деревянной стойке, за ней офис и сотрудники за работой',
  },
  appName: 'Fineguide for clinics and service businesses',
  checked: '2026-11-25',
  reading: [
    '/blog/ai-assistant-for-clinics-and-service-businesses/',
    '/blog/ai-assistant-actions-call-your-systems/',
    '/blog/ai-phone-assistant-for-small-business/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/session-variables-chat-to-crm-data/',
    '/blog/whatsapp-business-api-ai-assistant/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx "What it answers": Anything / Only what it has learned + reply to other questions (restrictToContext, outOfContextAnswer); "Lead collection" behind canAccessLeadCollection (plan-gated), "When it asks": When the visitor shows interest / In every reply / Before it answers anything; "Fields a lead needs"',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/variables/SessionVariablesPage.tsx (field types Text, Number, Yes or no, One of a list, Several from a list)',
    'ai-backoffice-api apps/backoffice-api/src/modules/crm/lead/lead.service.ts createInternal (capture: contact found or created by email then phone, collected values written onto the contact, conversation linked to the contact, follow-up task due in 24 hours when the conversation showed interest; never a pipeline deal) + contact.service.ts applyCollectedValues / findOrCreate + custom-field.service.ts syncBotVariablesToCustomFields (assistant fields become contact custom fields)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/actions/ActionsPage.tsx ("From a cURL command", "From n8n"), SecretPanel.tsx / ActionFormView.tsx (stored secrets bound to an address), TestPanel.tsx (test before use)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/voice/VoicePage.tsx (answering hours, outside hours: ring / forward / message + callback request; transfer to the team number any time or only in team hours; callback request; greet returning callers by name; "Show the Call button in the chat") + voiceCatalog.ts LANGUAGES (14 languages), verified in landing src/data/solutions/call-center.ts',
    'ai-backoffice-api apps/backoffice-api/src/modules/voice/voice.service.ts lookupCallerIdentity + resolvePersona (first-name greeting), createCallbackTask (task on the default CRM board with phone, name, request)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx (visitor asks for a person; own-words situations; assistant stops) + apps/ai-workspace/src/modules/messages/conversations/components/ChatWidget.tsx (Handoff briefing: summary + key facts on takeover)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/types.ts (WhatsApp, Telegram, Instagram, Facebook "Messenger conversations, comments and lead forms", Slack, Discord, amoCRM, Kommo) + ConnectAppsPage.tsx InstagramPanel ("Respond to Instagram direct messages" on, "Reply to Instagram comments" off by default)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/settings/integrations/CalendarPage.tsx ("Two-way sync", "Tasks with a deadline will appear as calendar events") + ai-backoffice-api src/modules/crm/google-calendar/google-calendar.service.ts syncSingleConnection (syncToken pull) / syncTaskToCalendar',
    'ai-backoffice-api apps/backoffice-api/src/modules/workflow/templates/new-contact-follow-up.template.ts ("Follow up a new contact": task due tomorrow for a new contact with a phone number), after-chat-resolved.template.ts (answered / needs follow-up / complaint), call-summary-on-contact.template.ts (summary on the caller contact + callback task on the promised date); workflows plan-gated per BRIEF.md',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/appearance/AppearancePage.tsx LANGUAGES (24 chat interface languages); "The assistant answers in the visitor\'s language" (knowledge-base.ts sources)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/voiceqa (rules per department, quotes and suggestion per rule), verified in landing src/data/solutions/call-center.ts',
    'ai-backoffice-api apps/backoffice-api/src/pricing/pricing-config.ts VOICE_CREDITS_PER_MIN aiGoogle 10 + voice-billing.service.ts MINIMUM_BILLABLE_SECONDS 60; AI reply 1 credit (landing llms.txt / en.ts, help-desk.ts)',
    'BRIEF.md plan gating (Free lacks lead collection, workflows, context sync); free plan 200 credits, no card (landing call-center.ts / help-desk.ts)',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Receptionist and CRM for Clinics and Salons | Fineguide',
        description:
          'AI receptionist and CRM for clinics, salons and service businesses: answers on chat, WhatsApp and the phone, saves each request and hands over to your staff.',
      },
      hero: {
        eyebrow: 'For clinics and service businesses',
        title: 'Every patient and client,',
        titleAccent: ' answered at any hour.',
        subtitle:
          'An AI assistant answers questions about your services, prices and hours on your website, WhatsApp, Instagram and the phone, saves each request with a name and number in your CRM, and passes the conversation to your staff when a person is needed.',
      },
      definition: {
        heading: 'What is an AI receptionist for a clinic?',
        body:
          "An AI receptionist is an assistant that answers the questions a front desk hears every day, takes down each request with the person's contact details and passes the conversation to staff when a person is needed. Fineguide's AI assistant does this for clinics, salons and other appointment-based businesses on the website chat, WhatsApp, Telegram, Instagram and Messenger, and on your own phone number over SIP in 14 languages, answering only from the services, prices and rules you give it. Each request is saved on a CRM contact with the fields you choose, and the assistant can check free slots or create an appointment in your own booking system through an action.",
      },
      capabilities: {
        eyebrow: 'How clinics use it',
        heading: 'Four everyday workflows, and the tools behind them.',
        body: 'Each one is built from features you switch on for an assistant; nothing has to be programmed.',
        items: [
          {
            term: 'Evening enquiry, request by morning',
            desc: 'A client asks on WhatsApp at 21:00 what a consultation costs, and the assistant answers from your price list. When they want to come in, it asks for a name, a phone number, the service and the day they prefer; on paid plans these are saved on their CRM contact with the conversation, and a follow-up task due the next day waits for your front desk.',
          },
          {
            term: 'Booking in the system you already use',
            desc: "An assistant action calls your booking system's API during the chat to check free slots or create an appointment. Build it from a cURL command in your provider's documentation or from an n8n workflow, keep API keys as stored secrets, and try it in the test panel first.",
          },
          {
            term: 'The front-desk phone',
            desc: 'The same assistant answers your clinic or salon number over SIP. Callers whose number is in your contacts are greeted by first name, a caller who asks for a person is put through to reception, and outside hours the assistant takes a callback request that lands on your CRM task board.',
          },
          {
            term: 'Handover when staff are needed',
            desc: 'Describe in your own words when a chat goes to a person, such as a complaint or a question only a specialist should answer. The client is told someone is coming, the assistant stops, and your team picks the chat up in Messages with a briefing: a summary and the key facts.',
          },
          {
            term: 'Answers only from your information',
            desc: 'Give the assistant your service pages, price list, preparation instructions and exact answers for cancellation rules, then set it to answer only from what it has learned. Anything else gets the reply you write, such as an offer to have someone call back.',
          },
          {
            term: 'Instagram messages and comments',
            desc: 'Salons and studios that win clients on Instagram can let the assistant answer direct messages and, when you switch it on, reply to comments under posts.',
          },
          {
            term: 'Follow-ups on the calendar',
            desc: "CRM tasks with a deadline sync both ways with Google Calendar. On paid plans, workflow templates open a follow-up task for each new contact with a phone number, sort finished chats into answered, needs follow-up or complaint, and write a call summary on the caller's contact.",
          },
          {
            term: 'Review of reception calls',
            desc: 'Send recorded reception calls to Voice QA, and each one is scored against your own rules, such as greeting the caller and confirming the date and time, with quotes from the call and a suggestion for each rule.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your price list to an assistant on the front desk.',
        body: 'Most businesses start with one channel and add the phone once the answers are right.',
        items: [
          'Create an assistant and give it your service pages, price list, opening hours and exact answers to your most common questions.',
          'Set it to answer only from what it has learned, and write the reply it gives to anything else.',
          'Add the fields a request needs, such as service and preferred day, and turn on lead collection.',
          'Connect the website chat, WhatsApp and Instagram, then your phone number over SIP.',
          'Choose when a conversation goes to your staff, and connect your booking system through an action if it has an API.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Channels',
            desc: 'Website chat, WhatsApp, Telegram, Instagram (messages and comments), Facebook Messenger, your phone number over SIP and email in the shared Inbox.',
          },
          {
            term: 'Languages',
            desc: "Chat replies in the language the client writes in. Phone calls in 14 languages, and the chat window's buttons and labels in 24.",
          },
          {
            term: 'Booking',
            desc: 'Through an assistant action to your own booking system, built from a cURL command or an n8n workflow. CRM tasks with a deadline sync both ways with Google Calendar.',
          },
          {
            term: 'Request fields',
            desc: "5 field types: text, number, yes or no, one of a list and several from a list. The answers are saved on the client's CRM contact.",
          },
          {
            term: 'Credits',
            desc: 'An AI chat reply is 1 credit. An AI phone call is 10 credits per answered minute, with a one-minute minimum.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits and no card. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind your front desk',
        links: [
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Assistants that answer on your website, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord.',
          },
          {
            path: '/voice-ai',
            label: 'AI Telephony',
            desc: 'The same assistant on live calls over your own phone number.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, deals, tasks and calendar sync behind every request.',
          },
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Chats from every channel and your email in one team inbox, with handover to a person.',
          },
          {
            path: '/automations',
            label: 'Automations',
            desc: 'Workflow templates for follow-ups, finished chats and call summaries.',
          },
        ],
      },
      faq: {
        heading: 'AI receptionist for clinics: common questions',
        items: [
          {
            q: 'What is an AI receptionist?',
            a: "An AI receptionist is an assistant that answers the questions a front desk gets, takes requests with contact details and passes conversations to staff. Fineguide's assistant does this on the website chat, messaging apps and your own phone number.",
          },
          {
            q: 'Can a chatbot book appointments for my clinic?',
            a: 'Yes, in your own booking system: an assistant action can check free slots and create an appointment when the system has an API. Without one, the assistant takes the request with the service and preferred day and leaves a follow-up task for your team.',
          },
          {
            q: 'Can I stop the chatbot from answering questions it should not?',
            a: 'Yes. Set it to answer only from what it has learned, such as your services, prices and procedures, and write the reply it gives to everything else. Conversations you describe, such as complaints, can go straight to your staff.',
          },
          {
            q: "Can an AI answer my clinic's phone?",
            a: 'Yes. Connect your number over SIP and the assistant answers calls in up to 14 languages, puts callers through to reception on request and takes callback requests as CRM tasks outside your hours.',
          },
          {
            q: 'Do I need a separate CRM for my clinic or salon?',
            a: 'No. The CRM is part of Fineguide: contacts with the answers the assistant collected, deals on boards with your own stages, and tasks that sync with Google Calendar.',
          },
          {
            q: 'Does it work for salons and other service businesses?',
            a: 'Yes. The same setup fits any business that runs on appointments, such as a dental practice, a beauty salon, a physiotherapy studio or a car service.',
          },
          {
            q: 'Is there a free plan?',
            a: 'Yes. You can start on the free plan with 200 credits and no card. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      closing: {
        heading: 'Ask your front desk a question tonight.',
        body: 'Give an assistant your price list, connect WhatsApp and ask it what your clients ask. Or book a 30-minute demo and see chat, phone and CRM working on your own business.',
      },
    },

    ro: {
      meta: {
        title: 'CRM pentru clinică și asistent AI de recepție | Fineguide',
        description:
          'CRM clinică cu asistent AI pentru clinici, saloane și firme de servicii: răspunde în chat, pe WhatsApp și la telefon, salvează cererile și le predă echipei.',
      },
      hero: {
        eyebrow: 'Pentru clinici și firme de servicii',
        title: 'Fiecare pacient și client,',
        titleAccent: ' primește răspuns la orice oră.',
        subtitle:
          'Asistentul AI răspunde la întrebări despre servicii, prețuri și program pe site, pe WhatsApp, pe Instagram și la telefon, salvează fiecare cerere cu nume și număr în CRM și predă conversația echipei când e nevoie de un om.',
      },
      definition: {
        heading: 'Ce este un asistent AI pentru clinică?',
        body:
          'Un asistent AI pentru clinică este un recepționer virtual care răspunde la întrebările pe care recepția le aude zilnic, notează fiecare cerere cu datele de contact ale persoanei și predă conversația unui om când e nevoie. Asistentul AI Fineguide face asta pentru clinici, saloane și alte afaceri cu programări, în chatul de pe site, pe WhatsApp, Telegram, Instagram și Messenger, și la numărul tău de telefon prin SIP, în 14 limbi, răspunzând doar din serviciile, prețurile și regulile pe care i le dai. Fiecare cerere se salvează pe un contact din CRM, cu câmpurile alese de tine, iar printr-o acțiune asistentul poate verifica orele libere sau crea o programare în sistemul tău de programări.',
      },
      capabilities: {
        eyebrow: 'Cum îl folosesc clinicile',
        heading: 'Patru situații de zi cu zi și instrumentele din spatele lor.',
        body: 'Fiecare se construiește din funcții pe care le activezi pentru un asistent, fără programare.',
        items: [
          {
            term: 'Întrebare seara, cerere dimineața',
            desc: 'Un client întreabă pe WhatsApp la 21:00 cât costă o consultație, iar asistentul răspunde din lista ta de prețuri. Când vrea să vină, îi cere numele, telefonul, serviciul și ziua preferată; pe planurile plătite acestea se salvează pe contactul lui din CRM, împreună cu conversația, iar recepția găsește o sarcină de revenire cu termen a doua zi.',
          },
          {
            term: 'Programări în sistemul pe care îl ai deja',
            desc: 'O acțiune a asistentului apelează în timpul chatului API-ul sistemului tău de programări, ca să verifice orele libere sau să creeze o programare. O construiești dintr-o comandă cURL din documentația furnizorului sau dintr-un flux n8n, păstrezi cheile API ca secrete salvate și o încerci întâi în panoul de test.',
          },
          {
            term: 'Telefonul de la recepție',
            desc: 'Același asistent răspunde la numărul clinicii sau al salonului prin SIP. Apelanții al căror număr e în Contacte sunt salutați pe prenume, cine cere un om este transferat la recepție, iar în afara programului asistentul preia o cerere de revenire, care ajunge pe tabla de sarcini din CRM.',
          },
          {
            term: 'Predare către echipă când trebuie',
            desc: 'Descrii cu vorbele tale când un chat trece la un om, de exemplu o reclamație sau o întrebare la care doar un specialist poate răspunde. Clientul află că vine cineva, asistentul se oprește, iar echipa preia chatul în Mesaje, cu un rezumat și faptele principale.',
          },
          {
            term: 'Răspunsuri doar din informațiile tale',
            desc: 'Îi dai asistentului paginile cu servicii, lista de prețuri, instrucțiunile de pregătire și răspunsuri exacte despre regulile de anulare, apoi îl setezi să răspundă doar din ce a învățat. La restul întrebărilor dă răspunsul scris de tine, de exemplu că te va suna cineva.',
          },
          {
            term: 'Mesaje și comentarii pe Instagram',
            desc: 'Saloanele și studiourile care își găsesc clienții pe Instagram pot lăsa asistentul să răspundă la mesajele directe și, dacă activezi opțiunea, la comentariile de sub postări.',
          },
          {
            term: 'Reveniri în calendar',
            desc: 'Sarcinile din CRM cu termen se sincronizează în ambele sensuri cu Google Calendar. Pe planurile plătite, șabloanele de fluxuri deschid o sarcină de revenire pentru fiecare contact nou cu număr de telefon, sortează chaturile încheiate în rezolvate, de urmărit sau reclamații și scriu rezumatul apelului pe contactul apelantului.',
          },
          {
            term: 'Verificarea apelurilor de la recepție',
            desc: 'Trimiți apelurile înregistrate ale recepției în Voice QA, iar fiecare este evaluat după regulile tale, de exemplu salutul și confirmarea datei și orei, cu citate din apel și o sugestie pentru fiecare regulă.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la lista de prețuri la un asistent la recepție.',
        body: 'Majoritatea afacerilor încep cu un singur canal și adaugă telefonul după ce răspunsurile sunt bune.',
        items: [
          'Creezi un asistent și îi dai paginile cu servicii, lista de prețuri, programul și răspunsuri exacte la cele mai frecvente întrebări.',
          'Îl setezi să răspundă doar din ce a învățat și scrii răspunsul pe care îl dă la orice altceva.',
          'Adaugi câmpurile de care are nevoie o cerere, cum ar fi serviciul și ziua preferată, și activezi colectarea de lead-uri.',
          'Conectezi chatul de pe site, WhatsApp și Instagram, apoi numărul de telefon prin SIP.',
          'Alegi când conversația trece la echipă și conectezi sistemul de programări printr-o acțiune, dacă are API.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Canale',
            desc: 'Chatul de pe site, WhatsApp, Telegram, Instagram (mesaje și comentarii), Facebook Messenger, numărul tău de telefon prin SIP și emailul în Inbox-ul comun.',
          },
          {
            term: 'Limbi',
            desc: 'În chat răspunde în limba în care scrie clientul. Apelurile, în 14 limbi, iar butoanele și textele ferestrei de chat, în 24.',
          },
          {
            term: 'Programări',
            desc: 'Printr-o acțiune a asistentului către sistemul tău de programări, construită dintr-o comandă cURL sau un flux n8n. Sarcinile din CRM cu termen se sincronizează în ambele sensuri cu Google Calendar.',
          },
          {
            term: 'Câmpurile cererii',
            desc: '5 tipuri de câmpuri: text, număr, da sau nu, una dintr-o listă și mai multe dintr-o listă. Răspunsurile se salvează pe contactul clientului din CRM.',
          },
          {
            term: 'Credite',
            desc: 'Un răspuns AI în chat costă 1 credit. Un apel AI costă 10 credite pe minut convorbit, cu minimum un minut.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite și fără card. Colectarea de lead-uri și fluxurile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Modulele din spatele recepției',
        links: [
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Asistenți care răspund pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
          },
          {
            path: '/voice-ai',
            label: 'Telefonie AI',
            desc: 'Același asistent în apeluri live, pe numărul tău de telefon.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, oportunități, sarcini și sincronizare cu calendarul în spatele fiecărei cereri.',
          },
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Chaturile din toate canalele și emailul într-un inbox comun, cu predare către un coleg.',
          },
          {
            path: '/automations',
            label: 'Automatizări',
            desc: 'Șabloane de fluxuri pentru reveniri, chaturi încheiate și rezumate de apel.',
          },
        ],
      },
      faq: {
        heading: 'Asistent AI pentru clinică: întrebări frecvente',
        items: [
          {
            q: 'Ce este un asistent AI pentru clinică?',
            a: 'Este un recepționer virtual care răspunde la întrebările primite de recepție, notează cererile cu datele de contact și predă conversațiile echipei. Asistentul Fineguide face asta în chatul de pe site, în aplicațiile de mesagerie și la numărul tău de telefon.',
          },
          {
            q: 'Poate un chatbot să facă programări pentru clinica mea?',
            a: 'Da, în sistemul tău de programări: o acțiune a asistentului poate verifica orele libere și crea o programare, dacă sistemul are API. Fără API, asistentul preia cererea cu serviciul și ziua preferată și lasă echipei o sarcină de revenire.',
          },
          {
            q: 'Pot opri chatbotul să răspundă la ce nu trebuie?',
            a: 'Da. Îl setezi să răspundă doar din ce a învățat, adică servicii, prețuri și proceduri, și scrii răspunsul pe care îl dă la orice altceva. Conversațiile pe care le descrii, de exemplu reclamațiile, pot ajunge direct la echipă.',
          },
          {
            q: 'Poate un asistent AI să răspundă la telefonul clinicii?',
            a: 'Da. Conectezi numărul prin SIP, iar asistentul răspunde la apeluri în până la 14 limbi, transferă apelantul la recepție la cerere și preia cereri de revenire ca sarcini în CRM în afara programului.',
          },
          {
            q: 'Am nevoie de un CRM separat pentru clinică sau salon?',
            a: 'Nu. CRM-ul face parte din Fineguide: contacte cu răspunsurile adunate de asistent, oportunități pe table cu etapele tale și sarcini sincronizate cu Google Calendar.',
          },
          {
            q: 'Funcționează și pentru saloane și alte firme de servicii?',
            a: 'Da. Aceeași configurare se potrivește oricărei afaceri care lucrează cu programări: cabinet stomatologic, salon de înfrumusețare, studio de kinetoterapie sau service auto.',
          },
          {
            q: 'Există un plan gratuit?',
            a: 'Da. Începi pe planul gratuit, cu 200 de credite și fără card. Colectarea de lead-uri și fluxurile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      closing: {
        heading: 'Pune-i recepției tale o întrebare chiar diseară.',
        body: 'Dă-i unui asistent lista de prețuri, conectează WhatsApp și întreabă-l ce te întreabă clienții. Sau programează un demo de 30 de minute și vezi chatul, telefonul și CRM-ul pe afacerea ta.',
      },
    },

    ru: {
      meta: {
        title: 'CRM для клиники и ИИ-администратор | Fineguide',
        description:
          'CRM для клиники с чат-ботом: ИИ-администратор отвечает в чате, WhatsApp и по телефону, сохраняет заявки в CRM и передаёт диалог сотрудникам.',
      },
      hero: {
        eyebrow: 'Для клиник и сферы услуг',
        title: 'Каждый пациент и клиент',
        titleAccent: ' получает ответ в любое время.',
        subtitle:
          'ИИ-ассистент отвечает на вопросы об услугах, ценах и часах работы на сайте, в WhatsApp, Instagram и по телефону, сохраняет каждую заявку с именем и номером в CRM и передаёт диалог сотрудникам, когда нужен человек.',
      },
      definition: {
        heading: 'Что такое ИИ-администратор для клиники?',
        body:
          'ИИ-администратор представляет собой ассистента, который отвечает на вопросы, которые администратор слышит каждый день, записывает каждую заявку с контактами человека и передаёт диалог сотруднику, когда нужен человек. ИИ-ассистент Fineguide делает это для клиник, салонов и других бизнесов, работающих по записи: в чате на сайте, в WhatsApp, Telegram, Instagram и Messenger, а также на вашем номере телефона через SIP на 14 языках, отвечая только по услугам, ценам и правилам, которые вы ему дали. Каждая заявка сохраняется в контакте CRM с выбранными вами полями, а через действие ассистент может проверить свободное время или создать запись в вашей системе онлайн-записи.',
      },
      capabilities: {
        eyebrow: 'Как это используют клиники',
        heading: 'Четыре повседневных сценария и инструменты за ними.',
        body: 'Каждый собирается из функций, которые вы включаете для ассистента, без программирования.',
        items: [
          {
            term: 'Вопрос вечером, заявка к утру',
            desc: 'Клиент в 21:00 спрашивает в WhatsApp, сколько стоит консультация, и ассистент отвечает по вашему прайсу. Когда человек хочет прийти, ассистент спрашивает имя, телефон, услугу и удобный день; на платных тарифах это сохраняется в его контакте в CRM вместе с перепиской, а администратора ждёт задача перезвонить со сроком на следующий день.',
          },
          {
            term: 'Запись в системе, которая у вас уже есть',
            desc: 'Действие ассистента прямо во время чата обращается к API вашей системы записи, чтобы проверить свободное время или создать запись. Его можно собрать из cURL-команды из документации поставщика или из сценария n8n, ключи API хранятся как секреты, а проверить действие можно в тестовой панели.',
          },
          {
            term: 'Телефон администратора',
            desc: 'Тот же ассистент отвечает на номер клиники или салона через SIP. Звонящих, чей номер есть в контактах, он приветствует по имени, по просьбе соединяет с администратором, а в нерабочее время принимает заявку на обратный звонок, которая появляется на доске задач в CRM.',
          },
          {
            term: 'Передача сотрудникам, когда нужно',
            desc: 'Опишите своими словами, когда чат переходит к человеку: например, жалоба или вопрос, на который должен ответить только специалист. Клиент видит, что к нему подключается сотрудник, ассистент замолкает, а команда принимает чат в разделе «Сообщения» с кратким изложением и ключевыми фактами.',
          },
          {
            term: 'Ответы только по вашей информации',
            desc: 'Дайте ассистенту страницы услуг, прайс, инструкции по подготовке и точные ответы о правилах отмены, а затем разрешите ему отвечать только по тому, чему он обучен. На остальные вопросы он даёт ваш ответ, например что вам перезвонят.',
          },
          {
            term: 'Сообщения и комментарии в Instagram',
            desc: 'Салоны и студии, которые находят клиентов в Instagram, могут поручить ассистенту отвечать в директ и, если вы это включите, на комментарии под постами.',
          },
          {
            term: 'Перезвоны в календаре',
            desc: 'Задачи CRM со сроком синхронизируются с Google Calendar в обе стороны. На платных тарифах шаблоны сценариев создают задачу перезвонить каждому новому контакту с номером телефона, разбирают завершённые чаты на «отвечено», «нужно связаться» и «жалоба» и записывают краткое содержание звонка в контакт звонящего.',
          },
          {
            term: 'Проверка звонков администраторов',
            desc: 'Отправьте записи звонков в Voice QA, и каждый будет оценён по вашим правилам, например приветствие и подтверждение даты и времени, с цитатами из разговора и рекомендацией по каждому правилу.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От прайса до ассистента на стойке администратора.',
        body: 'Обычно начинают с одного канала и подключают телефон, когда ответы уже точные.',
        items: [
          'Создайте ассистента и дайте ему страницы услуг, прайс, часы работы и точные ответы на самые частые вопросы.',
          'Разрешите ему отвечать только по тому, чему он обучен, и напишите ответ на всё остальное.',
          'Добавьте поля заявки, например услугу и удобный день, и включите сбор лидов.',
          'Подключите чат на сайте, WhatsApp и Instagram, а затем номер телефона через SIP.',
          'Выберите, когда диалог переходит к сотрудникам, и подключите систему записи через действие, если у неё есть API.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Каналы',
            desc: 'Чат на сайте, WhatsApp, Telegram, Instagram (директ и комментарии), Facebook Messenger, ваш номер телефона через SIP и почта в общем ящике входящих.',
          },
          {
            term: 'Языки',
            desc: 'В чате ассистент отвечает на языке клиента. Звонки на 14 языках, кнопки и надписи окна чата на 24 языках.',
          },
          {
            term: 'Запись',
            desc: 'Через действие ассистента в вашей системе записи, собранное из cURL-команды или сценария n8n. Задачи CRM со сроком синхронизируются с Google Calendar в обе стороны.',
          },
          {
            term: 'Поля заявки',
            desc: '5 типов полей: текст, число, да или нет, один вариант из списка и несколько вариантов из списка. Ответы сохраняются в контакте клиента в CRM.',
          },
          {
            term: 'Кредиты',
            desc: 'ИИ-ответ в чате стоит 1 кредит. ИИ-звонок стоит 10 кредитов за минуту разговора, минимум одна минута.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа: 200 кредитов, без карты. Сбор лидов и сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Модули, на которых работает администратор',
        links: [
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Ассистенты, которые отвечают на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack и Discord.',
          },
          {
            path: '/voice-ai',
            label: 'ИИ-телефония',
            desc: 'Тот же ассистент в живых звонках на вашем номере телефона.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, сделки, задачи и синхронизация с календарём за каждой заявкой.',
          },
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Чаты из всех каналов и почта в общем ящике команды, с передачей диалога сотруднику.',
          },
          {
            path: '/automations',
            label: 'Автоматизации',
            desc: 'Шаблоны сценариев для перезвонов, завершённых чатов и итогов звонков.',
          },
        ],
      },
      faq: {
        heading: 'CRM и чат-бот для клиники: частые вопросы',
        items: [
          {
            q: 'Что такое ИИ-администратор?',
            a: 'ИИ-администратор представляет собой ассистента, который отвечает на вопросы, приходящие на стойку администратора, записывает заявки с контактами и передаёт диалоги сотрудникам. Ассистент Fineguide делает это в чате на сайте, в мессенджерах и на вашем номере телефона.',
          },
          {
            q: 'Может ли чат-бот для клиники записывать на приём?',
            a: 'Да, в вашей системе записи: действие ассистента проверяет свободное время и создаёт запись, если у системы есть API. Без API ассистент принимает заявку с услугой и удобным днём и оставляет команде задачу перезвонить.',
          },
          {
            q: 'Можно ли запретить чат-боту отвечать на лишние вопросы?',
            a: 'Да. Разрешите ему отвечать только по тому, чему он обучен (услуги, цены, порядок приёма), и напишите ответ на всё остальное. Диалоги, которые вы описали, например жалобы, могут сразу уходить сотрудникам.',
          },
          {
            q: 'Может ли ИИ отвечать на звонки в клинику?',
            a: 'Да. Подключите номер через SIP, и ассистент будет отвечать на звонки на 14 языках, по просьбе соединять с администратором, а в нерабочее время принимать заявки на обратный звонок как задачи в CRM.',
          },
          {
            q: 'Нужна ли клинике или салону отдельная CRM?',
            a: 'Нет. CRM входит в Fineguide: контакты с ответами, которые собрал ассистент, сделки на досках с вашими этапами и задачи с синхронизацией в Google Calendar.',
          },
          {
            q: 'Подходит ли это для салонов и других услуг?',
            a: 'Да. Та же настройка подходит любому бизнесу, который работает по записи: стоматологии, салону красоты, студии реабилитации или автосервису.',
          },
          {
            q: 'Есть ли бесплатный тариф?',
            a: 'Да. Начните с бесплатного тарифа: 200 кредитов, без карты. Сбор лидов и сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      closing: {
        heading: 'Задайте своему администратору вопрос сегодня вечером.',
        body: 'Дайте ассистенту прайс, подключите WhatsApp и спросите его то, что спрашивают ваши клиенты. Или запишитесь на 30-минутное демо и посмотрите чат, телефон и CRM на примере вашего бизнеса.',
      },
    },
  },
};

export default solution;
