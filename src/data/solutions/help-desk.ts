import type { Solution } from './types';

const solution: Solution = {
  slug: 'help-desk',
  image: 'team-collab.jpg',
  imageAlt: {
    en: 'A support team at a shared table in a bright office, two colleagues talking while another works on a laptop',
    ro: 'O echipă de suport la o masă comună, într-un birou luminos: doi colegi discută, iar un altul lucrează la laptop',
    ru: 'Команда поддержки за общим столом в светлом офисе: двое коллег разговаривают, третий работает за ноутбуком',
  },
  appName: 'Fineguide Help Desk',
  checked: '2026-11-25',
  reading: ['/blog/zendesk-freshdesk-alternative-ai-help-desk/', '/blog/human-handoff-ai-to-live-agent/', '/blog/omnichannel-team-inbox/', '/blog/ai-email-assistant-shared-inbox/', '/blog/ai-alternative-to-intercom-crisp-jivochat/'],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/crm/tickets/TicketsRedirect.tsx (Tickets became the Inbox; old path redirects to /inbox/:org/threads)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx "Support requests" (support request button, requests open in the Inbox, a task on the default board, Send to Zendesk / Send to Help Scout per assistant)',
    'ai-backoffice-api apps/backoffice-api/src/modules/ticket/ticket.consumer.ts handleCreateNewTicketJob (contact findOrCreate by name + email, linked to the chat session, mirrored into an Inbox thread, Ticket task with collected answers unless a TICKET_CREATED workflow is active, ticket_created event, Zendesk then Help Scout push)',
    'ai-backoffice-api prisma/schema.prisma Ticket (customerName, customerEmail, customerMessage, sessionId), TicketTaskSettings, EmailThread (status OPEN | PENDING | SNOOZED | RESOLVED, assignedAgentId, departmentId, aiSuspended, resolutionReason, legacyTicketId), EmailThreadNote (mentionedUserIds), EmailTemplate (merge fields)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/crm/types.ts TaskType TICKET ("a customer\'s request raised from a conversation")',
    'ai-backoffice-api apps/backoffice-api/src/modules/workflow/templates/support-request-task.template.ts ("A task for each support request": board, priority, owner via a workflow)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/handoff/HumanHandoffPage.tsx (hand chats to your team; visitor asks for a person in English, Romanian and Russian; own-words situations; "Connecting you to an operator" in their language; assistant stops; back to the assistant after 20 minutes of silence unless changed)',
    'ai-backoffice-api apps/backoffice-api/src/modules/handoff/handoff.service.ts evaluateHandoffCondition + apps/chat-api/src/_v2/messaging/conversation-orchestrator.ts (semantic handoff check on each message)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/messages/settings/tabs/RoutingTab.tsx (pull queue or auto-assign, Balanced / Round-robin, max concurrent conversations per operator, queue SLA minutes)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/messages/settings/tabs/DepartmentsTab.tsx (assistants, operators, routing per department), BusinessHoursCard.tsx (out-of-hours message after the hand-off notice), CannedResponsesTab.tsx (inserted with "/")',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/messages/conversations/components/ConversationCollisionBanner.tsx, QueuePanel.tsx (accept / decline escalations), ConversationLifecycleActions.tsx (Solved, Customer left, Handed off, Spam, Other)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/AddMailboxPage.tsx (an address we host, or connect a mailbox: Google, Microsoft and any IMAP server) + components/ConnectMailbox.tsx (IMAP / SMTP servers)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/InboxLayout.tsx (Unassigned, Assigned to me, Mentions, Assistant drafts, Snoozed, saved views, Rules, Templates, My signature), RulesPage.tsx (sender / subject / mailbox -> assign, department, tag), SignaturePage.tsx (one signature per teammate), components/ThreadActions.tsx (Open, Pending, snooze, resolve with a reason)',
    'ai-backoffice-api apps/backoffice-api/src/modules/inbox/inbox.controller.ts threads/:id/presence (collision detection on email), threads/:id/notes, suggest-reply',
    'ai-backoffice-api prisma/schema.prisma EmailInbox aiMode OFF | DRAFT | AUTO (default OFF), aiReplyDelaySeconds 120, aiMaxRepliesPerThread 3; EmailThread.aiSuspended once a human replies',
    'ai-backoffice-api apps/backoffice-api/src/modules/inbox/integrations/zendesk/zendesk.service.ts (base URL, username, API key, group) + helpscout/docs/integration.md and UserHelpscoutSettings (app id / secret, OAuth, mailbox); resend-failed-tickets.service.ts',
    'ai-backoffice-api apps/backoffice-api/src/modules/ability/ticketing-integrations-access.guard.ts + module-definitions.ts crm.ticketing (plan-gated ticketing; Free lacks ticketing and workflows per prod modulePolicy, BRIEF.md)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/webhooks/types.ts (TICKET "A support ticket is created", RATE_MESSAGE "A user rates a bot response") + packages/ui/src/components/chat/ChatFeedback.tsx (thumbs up / down on AI replies)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/messages/reports/ReportsPage.tsx (7d / 30d / 90d; conversations, escalation rate, median first response, median resolution; per-operator table)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/analytics/AnalyticsPage.tsx (satisfaction, sentiment, resolution, client intents per conversation)',
    'ai-fineguide-landing public/llms.txt + src/i18n/{en,ro,ru}.ts messagesPage (channels, knowledge base limited to what it learned, credits: AI reply / AI email draft 1 credit, Messages and email use none; RO/RU terms reused)',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Help Desk Software and Ticketing System | Fineguide',
        description:
          'AI help desk software with a ticketing system: an assistant answers from your knowledge base, hands chats to your team and tracks requests in one shared inbox.',
      },
      hero: {
        eyebrow: 'Help desk software',
        title: 'Every support request,',
        titleAccent: ' answered and tracked.',
        subtitle:
          'An AI assistant answers customers from your knowledge base, hands the conversation to your team when a person is needed, and every support request becomes a ticket in one shared inbox for chat and email.',
      },
      definition: {
        heading: 'What is help desk software?',
        body:
          "Help desk software is the system a support team uses to receive customer requests, track each one as a ticket until it is resolved and reply from one shared inbox. Fineguide's AI help desk puts an assistant first on nine chat channels and, mailbox by mailbox, on your own email: it answers from your knowledge base and hands the conversation to a person when the customer asks or one of your rules says so. Support requests raised in the chat become tickets in the Inbox, linked to a CRM contact and a task, and can also be sent to Zendesk or Help Scout.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'Everything a support team works from, in one place.',
        body:
          'Chats, email, tickets and the customer record share one platform, so whoever picks up a request already sees the conversation and the history.',
        items: [
          {
            term: 'AI answers first',
            desc: 'The assistant answers on your website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM and Kommo from the pages, documents and FAQ you give it. It can be limited to only what it has learned.',
          },
          {
            term: 'Handover to a person',
            desc: 'A chat goes to your team when the customer asks for a person, in English, Romanian or Russian, or when it matches situations you describe in your own words, such as a refund request. The customer is told an operator is being connected, the assistant stops replying, and the chat waits in Messages.',
          },
          {
            term: 'Queue, routing and departments',
            desc: 'Escalations wait in one queue for an operator to accept, or go straight to an available operator, by lowest load or in turn. Set a cap on chats per operator and a target wait, give each department its own assistants and operators, and send an out-of-hours message outside business hours.',
          },
          {
            term: 'Support requests as tickets',
            desc: 'Turn on the support request button, and visitors leave their name, email and a description of the problem. Each request opens a thread in the Inbox, is linked to a CRM contact and the chat it came from, and adds a Ticket task to your board with what the assistant already collected.',
          },
          {
            term: 'One inbox for chat and email',
            desc: 'Connect your own mailboxes from Google, Microsoft or any IMAP server, or start with an address Fineguide provides. Threads move through Open, Pending, Snoozed and Resolved, and rules assign, route and tag new email by sender, subject or mailbox.',
          },
          {
            term: 'Tools for the team',
            desc: 'Collision detection shows when a colleague has the same conversation open and when they start typing. Internal notes with @mentions, saved replies inserted with "/", email templates filled in from the contact and deal, and a signature for each teammate.',
          },
          {
            term: 'AI on email, with safeguards',
            desc: 'Every mailbox starts human-only. Turn on drafts a person approves, or replies the assistant sends after a 2-minute pause, up to 3 per thread by default. Once a person replies, the assistant leaves that thread to them.',
          },
          {
            term: 'Zendesk and Help Scout',
            desc: 'If your team already works in Zendesk or Help Scout, each support request can also become a Zendesk ticket in the group you choose, or a Help Scout conversation in your mailbox.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your first channel to a working help desk.',
        body: 'Most of the setup is choices you make once for the assistant and once for the team.',
        items: [
          'Give the assistant your website pages, documents and FAQ, and connect your chat channels.',
          'Connect your support mailbox over IMAP and SMTP, or create an address Fineguide provides.',
          'Choose when chats go to a person, then set up departments, routing and business hours.',
          'Turn on the support request button, and connect Zendesk or Help Scout if your team works there.',
          'Work requests from the queue and the Inbox, and follow ratings and reports as they come in.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Channels',
            desc: '9 chat channels (website chat widget, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM and Kommo) and your own email over IMAP and SMTP.',
          },
          {
            term: 'Statuses',
            desc: 'Email threads: Open, Pending, Snoozed and Resolved. Chats close with a reason: Solved, Customer left, Handed off, Spam or Other.',
          },
          {
            term: 'Routing',
            desc: 'A shared queue or automatic assignment, balanced by load or round-robin, with a cap per operator, a target wait time and departments.',
          },
          {
            term: 'Integrations',
            desc: 'Zendesk, Help Scout and n8n. Assistant webhooks fire when a ticket is created and when a customer rates a reply.',
          },
          {
            term: 'Reports',
            desc: 'Conversations, escalation rate, median first response and median resolution, per operator, over 7, 30 or 90 days. Assistant analytics read satisfaction, sentiment, resolution and intent.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits. Ticketing and workflows come with paid plans, from the Starter plan. Handling conversations and reading or sending email use no credits; an AI reply or an AI email draft is 1 credit.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind your help desk',
        links: [
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Nine chat channels and your own email in one team inbox, with routing and handover to a person.',
          },
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Assistants that answer on your website, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'Knowledge base',
            desc: 'The pages, documents and FAQ your assistant answers from.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, companies, deals and tasks behind every request.',
          },
          {
            path: '/automations',
            label: 'Automations',
            desc: 'Workflows, n8n and webhooks on tickets, ratings and messages.',
          },
        ],
      },
      faq: {
        heading: 'Help desk software: common questions',
        items: [
          {
            q: 'What is help desk software?',
            a: 'Help desk software is what a support team uses to receive customer requests, track each one until it is resolved and reply from one shared inbox. Fineguide adds an AI assistant that answers first and hands over to your team, with the CRM on the same platform.',
          },
          {
            q: 'What is an AI help desk?',
            a: 'An AI help desk answers common questions itself and passes the rest to a person. In Fineguide, the assistant answers from your knowledge base on chat and email and hands the conversation over, with its full history, when the customer asks or a rule says so.',
          },
          {
            q: 'Can a chatbot hand the conversation to a live agent?',
            a: 'Yes. The chat goes to your team when the customer asks for a person or a situation you described comes up; the assistant stops replying and the chat waits in the queue. If nobody writes in it for 20 minutes, the assistant answers again, unless you choose otherwise.',
          },
          {
            q: 'How does the ticketing system work?',
            a: 'A visitor taps the support request button in the chat, leaves their name and email and describes the problem. The request opens a thread in your Inbox, linked to a CRM contact, and adds a Ticket task to your board; you reply by email from the thread.',
          },
          {
            q: 'Does Fineguide integrate with Zendesk and Help Scout?',
            a: 'Yes. Connect Zendesk with your account address, user and API key and choose a group, or connect a Help Scout app and choose a mailbox. Each support request then also becomes a Zendesk ticket or a Help Scout conversation.',
          },
          {
            q: 'Can AI answer customer support emails?',
            a: 'Yes, mailbox by mailbox. The assistant can write drafts a person approves, or send replies itself after a short pause, and it stops after a set number of AI replies in one thread or as soon as a person replies.',
          },
          {
            q: 'Is there a free help desk plan?',
            a: 'You can start on the free plan with 200 credits and no card, with the AI assistant, handover to a person and the shared inbox. Ticketing, Zendesk and Help Scout come with paid plans, from the Starter plan.',
          },
        ],
      },
      closing: {
        heading: 'See your help desk answer.',
        body: 'Connect a channel and a mailbox, ask your assistant a question, then ask it for a person. Or book a 30-minute demo and see the queue, tickets and Inbox on your own support work.',
      },
    },

    ro: {
      meta: {
        title: 'Soft helpdesk cu AI și sistem de tichete | Fineguide',
        description:
          'Soft helpdesk cu AI: asistentul răspunde din baza de cunoștințe, predă conversația echipei, iar cererile de suport devin tichete într-un inbox comun.',
      },
      hero: {
        eyebrow: 'Soft helpdesk',
        title: 'Fiecare cerere de suport,',
        titleAccent: ' preluată și urmărită.',
        subtitle:
          'Asistentul AI răspunde clienților din baza ta de cunoștințe, predă conversația echipei când e nevoie de un om, iar fiecare cerere de suport devine un tichet într-un inbox comun pentru chat și email.',
      },
      definition: {
        heading: 'Ce este un soft de helpdesk?',
        body:
          'Un soft de helpdesk este sistemul prin care echipa de suport primește cererile clienților, urmărește fiecare cerere ca tichet până la rezolvare și răspunde dintr-un inbox comun. Helpdesk-ul cu AI de la Fineguide pune un asistent pe primul loc, în nouă canale de chat și, pentru fiecare căsuță în parte, pe emailul tău: răspunde din baza de cunoștințe și predă conversația unui om când clientul o cere sau când una dintre regulile tale o spune. Cererile de suport din chat devin tichete în Inbox, legate de un contact din CRM și de o sarcină, și pot fi trimise și în Zendesk sau Help Scout.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Tot ce folosește o echipă de suport, într-un singur loc.',
        body:
          'Chatul, emailul, tichetele și fișa clientului stau pe aceeași platformă, așa că oricine preia o cerere vede deja conversația și istoricul.',
        items: [
          {
            term: 'AI-ul răspunde primul',
            desc: 'Asistentul răspunde în chatul de pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM și Kommo, din paginile, documentele și întrebările frecvente pe care i le dai. Îl poți limita doar la ce a învățat.',
          },
          {
            term: 'Preluare de către operator',
            desc: 'Conversația ajunge la echipă când clientul cere un om, în română, rusă sau engleză, ori când se potrivește cu situațiile descrise de tine, de exemplu o cerere de rambursare. Clientul află că este conectat cu un operator, asistentul nu mai răspunde, iar conversația așteaptă în Mesaje.',
          },
          {
            term: 'Coadă, rutare și departamente',
            desc: 'Escaladările așteaptă într-o singură coadă să fie acceptate de un operator sau ajung automat la un operator disponibil, după încărcare sau pe rând. Setezi câte conversații poate avea un operator și un timp-țintă de așteptare, dai fiecărui departament asistenții și operatorii lui și trimiți un mesaj automat în afara programului.',
          },
          {
            term: 'Cereri de suport ca tichete',
            desc: 'Activezi butonul de cerere de suport, iar vizitatorii își lasă numele, emailul și descrierea problemei. Fiecare cerere deschide o conversație în Inbox, legată de un contact din CRM și de chatul din care a venit, și adaugă pe tablă o sarcină de tip Tichet, cu tot ce a aflat deja asistentul.',
          },
          {
            term: 'Un inbox pentru chat și email',
            desc: 'Conectezi propriile căsuțe de la Google, Microsoft sau orice server IMAP ori pornești cu o adresă oferită de Fineguide. Conversațiile trec prin stările Deschis, În așteptare, Amânat și Rezolvat, iar regulile atribuie, direcționează și etichetează emailurile noi după expeditor, subiect sau căsuță.',
          },
          {
            term: 'Unelte pentru echipă',
            desc: 'Detectarea suprapunerilor îți arată când un coleg are deschisă aceeași conversație și când începe să scrie în ea. Note interne cu @mențiuni, răspunsuri salvate inserate cu „/”, șabloane de email completate din contact și oportunitate și o semnătură pentru fiecare coleg.',
          },
          {
            term: 'AI pe email, în siguranță',
            desc: 'Fiecare căsuță pornește doar cu oameni. Activezi ciorne pe care le aprobă un coleg sau răspunsuri trimise de asistent după o pauză de 2 minute, implicit cel mult 3 pe conversație. După ce răspunde un om, asistentul îi lasă lui conversația.',
          },
          {
            term: 'Zendesk și Help Scout',
            desc: 'Dacă echipa ta lucrează deja în Zendesk sau Help Scout, fiecare cerere de suport poate deveni și un tichet Zendesk în grupul ales sau o conversație Help Scout în căsuța ta.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la primul canal la un helpdesk care merge.',
        body: 'Cea mai mare parte a configurării sunt alegeri pe care le faci o dată pentru asistent și o dată pentru echipă.',
        items: [
          'Îi dai asistentului paginile site-ului, documentele și întrebările frecvente și conectezi canalele de chat.',
          'Conectezi căsuța de suport prin IMAP și SMTP sau creezi o adresă oferită de Fineguide.',
          'Alegi când ajung conversațiile la un om, apoi setezi departamentele, rutarea și programul de lucru.',
          'Activezi butonul de cerere de suport și conectezi Zendesk sau Help Scout, dacă echipa lucrează acolo.',
          'Preiei cererile din coadă și din Inbox și urmărești evaluările și rapoartele pe măsură ce apar.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Canale',
            desc: '9 canale de chat (widgetul de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM și Kommo), plus emailul tău, prin IMAP și SMTP.',
          },
          {
            term: 'Stări',
            desc: 'Conversațiile pe email: Deschis, În așteptare, Amânat și Rezolvat. Chaturile se închid cu un motiv: rezolvat, clientul a plecat, predat, spam sau altul.',
          },
          {
            term: 'Rutare',
            desc: 'O coadă comună sau atribuire automată, după încărcare sau pe rând (round-robin), cu o limită pe operator, un timp-țintă de așteptare și departamente.',
          },
          {
            term: 'Integrări',
            desc: 'Zendesk, Help Scout și n8n. Webhook-urile asistentului pornesc când se creează un tichet și când clientul evaluează un răspuns.',
          },
          {
            term: 'Rapoarte',
            desc: 'Conversații, rata de escaladare, timpul median până la primul răspuns și până la rezolvare, pe operator, pentru 7, 30 sau 90 de zile. Analiza asistentului arată satisfacția, sentimentul, rezolvarea și intenția.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite. Tichetele și workflow-urile vin cu planurile plătite, de la planul Starter. Lucrul cu conversațiile și citirea sau trimiterea emailurilor nu consumă credite; un răspuns AI sau o ciornă AI de email costă 1 credit.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Modulele din spatele helpdesk-ului',
        links: [
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Nouă canale de chat și emailul tău într-un inbox comun al echipei, cu rutare și preluare de către operator.',
          },
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Asistenți care răspund pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'Bază de cunoștințe',
            desc: 'Paginile, documentele și întrebările frecvente din care răspunde asistentul.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, companii, oportunități și sarcini în spatele fiecărei cereri.',
          },
          {
            path: '/automations',
            label: 'Automatizări',
            desc: 'Workflow-uri, n8n și webhook-uri pentru tichete, evaluări și mesaje.',
          },
        ],
      },
      faq: {
        heading: 'Soft helpdesk: întrebări frecvente',
        items: [
          {
            q: 'Ce este un soft de helpdesk?',
            a: 'Un soft de helpdesk este programul prin care echipa de suport primește cererile clienților, le urmărește până la rezolvare și răspunde dintr-un inbox comun. Fineguide adaugă un asistent AI care răspunde primul și predă conversația echipei, cu CRM-ul pe aceeași platformă.',
          },
          {
            q: 'Ce este un helpdesk cu AI?',
            a: 'Un helpdesk cu AI răspunde singur la întrebările obișnuite și îi lasă unui om restul. În Fineguide, asistentul răspunde din baza ta de cunoștințe, în chat și pe email, și predă conversația cu tot istoricul când clientul o cere sau când o regulă o spune.',
          },
          {
            q: 'Cum funcționează preluarea conversației de către un operator?',
            a: 'Când clientul cere un om sau apare o situație descrisă de tine, asistentul nu mai răspunde, iar conversația așteaptă echipa în coadă. Dacă nimeni nu scrie în ea 20 de minute, asistentul răspunde din nou, dacă nu alegi altfel.',
          },
          {
            q: 'Cum funcționează sistemul de tichete?',
            a: 'Vizitatorul apasă butonul de cerere de suport din chat, își lasă numele și emailul și descrie problema. Cererea deschide o conversație în Inbox, legată de un contact din CRM, și adaugă pe tablă o sarcină de tip Tichet; răspunzi pe email, direct din conversație.',
          },
          {
            q: 'Există integrare cu Zendesk și Help Scout?',
            a: 'Da. Conectezi Zendesk cu adresa contului, utilizatorul și cheia API și alegi un grup, sau conectezi o aplicație Help Scout și alegi o căsuță. Apoi fiecare cerere de suport devine și tichet Zendesk sau conversație Help Scout.',
          },
          {
            q: 'Poate AI-ul să răspundă la emailurile clienților?',
            a: 'Da, pentru fiecare căsuță în parte. Asistentul poate scrie ciorne pe care le aprobă un om sau poate trimite singur răspunsuri după o scurtă pauză și se oprește după un număr stabilit de răspunsuri AI într-o conversație sau imediat ce răspunde un om.',
          },
          {
            q: 'Există un plan gratuit de helpdesk?',
            a: 'Poți începe pe planul gratuit, cu 200 de credite și fără card, cu asistentul AI, preluarea de către operator și inboxul comun. Tichetele, Zendesk și Help Scout vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      closing: {
        heading: 'Vezi-ți helpdesk-ul la lucru.',
        body: 'Conectează un canal și o căsuță, pune-i asistentului o întrebare, apoi cere-i un om. Sau programează un demo de 30 de minute și vezi coada, tichetele și Inboxul pe suportul tău.',
      },
    },

    ru: {
      meta: {
        title: 'Хелпдеск с ИИ и система тикетов | Fineguide',
        description:
          'Хелпдеск с ИИ: ассистент отвечает по базе знаний, передаёт диалог оператору, а обращения становятся тикетами в общем ящике входящих для чатов и почты.',
      },
      hero: {
        eyebrow: 'Хелпдеск',
        title: 'Каждое обращение',
        titleAccent: ' получает ответ и не теряется.',
        subtitle:
          'ИИ-ассистент отвечает клиентам по вашей базе знаний, передаёт диалог команде, когда нужен человек, а каждая заявка в поддержку становится тикетом в общем ящике входящих для чатов и почты.',
      },
      definition: {
        heading: 'Что такое хелпдеск?',
        body:
          'Хелпдеск (система тикетов) представляет собой программу, через которую служба поддержки принимает обращения клиентов, ведёт каждое как тикет до решения и отвечает из общего ящика входящих. В хелпдеске Fineguide первым отвечает ИИ-ассистент: в девяти каналах чата и, для выбранных почтовых ящиков, в вашей почте. Он отвечает по базе знаний и передаёт диалог оператору, когда клиент просит человека или срабатывает ваше правило. Заявки из чата становятся тикетами во входящих, привязанными к контакту в CRM и задаче, и могут дополнительно уходить в Zendesk или Help Scout.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'Всё, чем работает служба поддержки, в одном месте.',
        body:
          'Чаты, почта, тикеты и карточка клиента работают на одной платформе, поэтому тот, кто берёт обращение, сразу видит переписку и историю.',
        items: [
          {
            term: 'Первым отвечает ИИ',
            desc: 'Ассистент отвечает в чате на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM и Kommo по страницам, документам и FAQ, которые вы ему дали. Его можно ограничить только тем, чему он обучен.',
          },
          {
            term: 'Передача диалога оператору',
            desc: 'Диалог переходит к команде, когда клиент просит человека на русском, румынском или английском или когда разговор подходит под ситуации, которые вы описали своими словами, например просьбу о возврате денег. Клиент видит, что его соединяют с оператором, ассистент перестаёт отвечать, а диалог ждёт в разделе «Сообщения».',
          },
          {
            term: 'Очередь, маршрутизация и отделы',
            desc: 'Эскалации ждут в общей очереди, пока их примет оператор, или сразу уходят свободному оператору: тому, у кого меньше нагрузка, или по очереди. Задайте лимит диалогов на оператора и целевое время ожидания, дайте каждому отделу своих ассистентов и операторов и включите автоответ в нерабочее время.',
          },
          {
            term: 'Заявки в поддержку как тикеты',
            desc: 'Включите кнопку заявки в поддержку, и посетитель оставит имя, email и описание проблемы. Каждая заявка открывает переписку во входящих, привязывается к контакту в CRM и к исходному чату и добавляет на доску задачу типа «Тикет» со всем, что ассистент уже узнал.',
          },
          {
            term: 'Один ящик для чатов и почты',
            desc: 'Подключите свои ящики в Google, Microsoft или на любом IMAP-сервере или начните с адреса, который даёт Fineguide. Переписки проходят статусы «Открыта», «В ожидании», «Отложена» и «Решена», а правила назначают, маршрутизируют и помечают тегами новые письма по отправителю, теме или ящику.',
          },
          {
            term: 'Инструменты команды',
            desc: 'Защита от пересечений показывает, что коллега открыл тот же разговор и начал в нём печатать. Внутренние заметки с @упоминаниями, шаблоны ответов через «/», шаблоны писем с данными из контакта и сделки и своя подпись у каждого сотрудника.',
          },
          {
            term: 'ИИ в почте с мерами защиты',
            desc: 'Каждый ящик начинает работу только с людьми. Включите черновики, которые утверждает сотрудник, или ответы, которые ассистент отправляет сам после 2-минутной паузы, по умолчанию не больше 3 на переписку. Как только ответил человек, ассистент оставляет переписку ему.',
          },
          {
            term: 'Интеграция с Zendesk и Help Scout',
            desc: 'Если команда уже работает в Zendesk или Help Scout, каждая заявка может дополнительно становиться тикетом Zendesk в выбранной группе или разговором Help Scout в вашем ящике.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От первого канала до работающего хелпдеска.',
        body: 'Большая часть настройки делается один раз для ассистента и один раз для команды.',
        items: [
          'Дайте ассистенту страницы сайта, документы и FAQ и подключите каналы чата.',
          'Подключите ящик поддержки по IMAP и SMTP или создайте адрес, который даёт Fineguide.',
          'Выберите, когда диалог переходит к человеку, и настройте отделы, маршрутизацию и часы работы.',
          'Включите кнопку заявки в поддержку и подключите Zendesk или Help Scout, если команда работает там.',
          'Разбирайте обращения из очереди и входящих и следите за оценками и отчётами.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Каналы',
            desc: '9 каналов чата (виджет на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM и Kommo) и ваша почта по IMAP и SMTP.',
          },
          {
            term: 'Статусы',
            desc: 'Переписки в почте: «Открыта», «В ожидании», «Отложена», «Решена». Чаты закрываются с причиной: решено, клиент ушёл, передан, спам или другое.',
          },
          {
            term: 'Маршрутизация',
            desc: 'Общая очередь или автоматическое назначение по нагрузке или по кругу (round-robin), лимит на оператора, целевое время ожидания и отделы.',
          },
          {
            term: 'Интеграции',
            desc: 'Zendesk, Help Scout и n8n. Вебхуки ассистента срабатывают, когда создан тикет и когда клиент оценил ответ.',
          },
          {
            term: 'Отчёты',
            desc: 'Число диалогов, доля эскалаций, медианное время первого ответа и решения, по каждому оператору, за 7, 30 или 90 дней. Аналитика ассистента показывает удовлетворённость, тональность, решённость вопроса и намерения клиентов.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа: 200 кредитов. Тикеты и сценарии входят в платные тарифы, начиная со Starter. Работа с диалогами, чтение и отправка писем кредитов не расходуют; ИИ-ответ или ИИ-черновик письма стоит 1 кредит.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Модули, на которых работает хелпдеск',
        links: [
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Девять каналов чата и ваша почта в общем ящике команды, с маршрутизацией и передачей диалога оператору.',
          },
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Ассистенты, которые отвечают на сайте, в WhatsApp, Telegram, Instagram, Messenger, Slack и Discord.',
          },
          {
            path: '/knowledge-base',
            label: 'База знаний',
            desc: 'Страницы, документы и FAQ, по которым отвечает ассистент.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, компании, сделки и задачи за каждым обращением.',
          },
          {
            path: '/automations',
            label: 'Автоматизации',
            desc: 'Сценарии, n8n и вебхуки на тикеты, оценки и сообщения.',
          },
        ],
      },
      faq: {
        heading: 'Хелпдеск: частые вопросы',
        items: [
          {
            q: 'Что такое хелпдеск?',
            a: 'Хелпдеск представляет собой программу, через которую служба поддержки принимает обращения клиентов, ведёт их до решения и отвечает из общего ящика входящих. Fineguide добавляет ИИ-ассистента, который отвечает первым и передаёт диалог команде, а CRM работает на той же платформе.',
          },
          {
            q: 'Что такое хелпдеск с ИИ?',
            a: 'Это хелпдеск, в котором ИИ сам отвечает на типовые вопросы, а остальное передаёт человеку. В Fineguide ассистент отвечает по вашей базе знаний в чатах и в почте и передаёт диалог со всей историей, когда клиент просит или срабатывает правило.',
          },
          {
            q: 'Как настроить передачу диалога оператору?',
            a: 'Включите передачу команде в настройках ассистента и опишите своими словами, в каких ситуациях звать человека; просьбу позвать оператора ассистент распознаёт всегда. После передачи ассистент молчит, а если в чате 20 минут никто не пишет, он снова отвечает, если вы не выбрали иначе.',
          },
          {
            q: 'Как работает система тикетов?',
            a: 'Посетитель нажимает в чате кнопку заявки в поддержку, оставляет имя и email и описывает проблему. Заявка открывает переписку во входящих, привязанную к контакту в CRM, и добавляет на доску задачу типа «Тикет», а ответ вы отправляете по почте прямо из переписки.',
          },
          {
            q: 'Есть ли интеграция с Zendesk и Help Scout?',
            a: 'Да. Zendesk подключается по адресу аккаунта, пользователю и API-ключу с выбором группы, Help Scout через приложение с выбором ящика. После этого каждая заявка в поддержку дополнительно становится тикетом Zendesk или разговором Help Scout.',
          },
          {
            q: 'Может ли ИИ отвечать на письма клиентов?',
            a: 'Да, для каждого ящика отдельно. Ассистент пишет черновики, которые утверждает сотрудник, или сам отправляет ответы после короткой паузы и останавливается после заданного числа ИИ-ответов в переписке или как только ответил человек.',
          },
          {
            q: 'Есть ли бесплатный хелпдеск?',
            a: 'Начать можно с бесплатного тарифа: 200 кредитов без карты, ИИ-ассистент, передача диалога оператору и общий ящик входящих. Тикеты, Zendesk и Help Scout входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      closing: {
        heading: 'Посмотрите, как отвечает ваш хелпдеск.',
        body: 'Подключите канал и ящик, задайте ассистенту вопрос, а потом попросите позвать человека. Или запишитесь на 30-минутное демо и посмотрите очередь, тикеты и входящие на примере своей поддержки.',
      },
    },
  },
};

export default solution;
