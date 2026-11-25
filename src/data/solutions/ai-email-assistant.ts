import type { Solution } from './types';

const solution: Solution = {
  slug: 'ai-email-assistant',
  image: 'account-review.jpg',
  imageAlt: {
    en: 'Two colleagues at a shared desk smiling over a notebook, a laptop open in front of them in a bright office',
    ro: 'Doi colegi la un birou comun zâmbesc aplecați peste un carnet, cu un laptop deschis în fața lor, într-un birou luminos',
    ru: 'Двое коллег за общим столом улыбаются, склонившись над блокнотом, перед ними открытый ноутбук, светлый офис',
  },
  appName: 'Fineguide AI email',
  checked: '2026-11-25',
  reading: [
    '/blog/ai-email-assistant-shared-inbox/',
    '/blog/omnichannel-team-inbox/',
    '/blog/human-handoff-ai-to-live-agent/',
    '/blog/zendesk-freshdesk-alternative-ai-help-desk/',
    '/blog/workflow-automation-templates-sales-support/',
  ],
  sources: [
    'ai-backoffice-api apps/backoffice-api/prisma/schema.prisma EmailInbox: aiMode OFF | DRAFT | AUTO (default OFF, "a newly created inbox is always human-only"), aiBotId, aiReplyDelaySeconds default 120, aiMaxRepliesPerThread default 3 ("past this the thread escalates to a human"), aiReplyScope ALL | DIRECT | CC, isDefault, departmentId, connectionEmail / imapHost / smtpHost',
    'ai-backoffice-api apps/backoffice-api/prisma/schema.prisma EmailThread: status, assignedAgentId, departmentId, contactId, dealId, companyId, aiSuspended ("Once a human replies or claims the thread, the assistant never answers it again, even on an AUTO inbox"), snoozedUntil, resolutionReason, notes, tags, tasks',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/MailboxDetailPage.tsx (Who answers: Human only / Assistant drafts, a person sends / Assistant replies on its own; Assistant picker; Hold before sending: Immediately, 1, 2, 5, 15 minutes; Reply limit 1, 2, 3, 5, 10 "Then it escalates to a person"; Answers: anything / only mail written to this address / only mail it is copied on; Department per mailbox; Send new email from this address = default mailbox)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/AddMailboxPage.tsx ("Connect a mailbox you already use": keep your own address and provider, replies land in your Sent folder as usual, works with Google, Microsoft and any IMAP server) + components/ConnectMailbox.tsx (address, password, login name, IMAP and SMTP servers, "Testing the connection…")',
    'ai-backoffice-api apps/backoffice-api/src/modules/inbox/assistant-reply.service.ts (DRAFT writes a reply and stops, AUTO sends it after the hold; one waiting draft per thread; re-checks before sending; prompt: answer in the language the customer wrote in, do not invent facts, prices, dates or commitments, otherwise say a colleague will follow up)',
    'ai-backoffice-api apps/backoffice-api/src/modules/inbox/reply-suggestion.service.ts (Draft reply on any thread: reply to the last email received, in its language and tone, greeting with the sender\'s first name, placeholders such as [date], optional instructions in the person\'s own words; 1 credit, charged only when a reply is written) + usage.service.ts DRAFT_REPLY_CREDITS = 1',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/components/ReplyComposer.tsx ("Write a reply to the last email received, for you to read over" / "Write the reply … saying what you have written"; notes "Only your team sees notes"; forward; unsent draft "Kept for you on any computer until it is sent")',
    'ai-backoffice-api apps/backoffice-api/src/modules/inbox/inbound-mail.service.ts (machine mail refused before a thread exists; routing rules on new conversations; everybody on the mail, Cc included, gets a CRM record and the thread is filed under the sender; email_received event for workflows; attachments stored)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/InboxLayout.tsx (All email, Unassigned, Assigned to me, Assigned to others, Mentions, Assistant drafts "Replies the assistant wrote, waiting for a person to send or discard them", Snoozed, Sent, saved views, tags, Rules, Templates, My signature)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/RulesPage.tsx (When new email arrives: sender / subject / mailbox -> assign to, route to department, tag with)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/components/ThreadActions.tsx (Open, Pending, snooze 3 hours / tomorrow / 3 days / next week, resolve with a reason: Answered, No reply needed, Handled elsewhere, Duplicate, Spam or unrelated), BulkActionBar.tsx (assign, tag, mark read / unread, resolve), CreateTaskButton.tsx (follow-up task), ThreadLinks.tsx (link the deal), ThreadContactPanel.tsx',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/lib/template-values.ts + data/emailTemplates.ts (templates with merge fields such as {{contact.firstName}} and deal fields)',
    'ai-backoffice-api apps/backoffice-api/src/modules/inbox/inbox.controller.ts threads/:id/presence (collision detection), threads/:id/notes, suggest-reply',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/workflows/help/reference.ts EMAIL_RECEIVED ("Starts when mail arrives on one of your mailboxes", machine mail never reaches it), send_email, classify, create_task; workflows plan-gated (BRIEF.md modulePolicy)',
    'ai-backoffice-api apps/backoffice-api/src/modules/inbox/integrations/zendesk + helpscout (support requests also sent to Zendesk / Help Scout; ticketing on paid plans)',
    'ai-fineguide-landing public/llms.txt (credits: reading and sending email use no credits, AI draft 1 credit, replies the AI writes in the Inbox AI modes count as AI replies; free plan 200 credits) + src/data/solutions/help-desk.ts (verified wording and RO/RU terms reused)',
  ],
  copy: {
    en: {
      meta: {
        title: 'AI Email Assistant for Customer Support | Fineguide',
        description:
          'AI email assistant for customer support: AI that answers customer emails or drafts replies for your team, in a shared inbox linked to every CRM contact.',
      },
      hero: {
        eyebrow: 'AI email assistant',
        title: 'Customer emails,',
        titleAccent: ' answered from one shared inbox.',
        subtitle:
          'Connect the support mailbox you already use. An AI assistant drafts replies for your team to send, or answers customers itself after a short hold, and every email lands on the right contact in your CRM.',
      },
      definition: {
        heading: 'What is an AI email assistant?',
        body:
          "An AI email assistant is software that reads incoming customer emails and writes the replies, either as drafts a person approves or as answers it sends itself. Fineguide's AI email assistant works in a shared inbox connected to your own mailbox over IMAP and SMTP: each mailbox is set to Human only, Assistant drafts or Assistant replies on its own, with a hold of up to 15 minutes before a reply goes out and a limit of 1 to 10 AI replies per conversation. Every sender becomes a CRM contact, and the assistant stops on a thread the moment a person replies.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'AI on your support email, with a person in charge.',
        body:
          'You decide, mailbox by mailbox, how much the assistant does. Your team keeps one shared inbox, and every thread sits on the customer record.',
        items: [
          {
            term: 'Three modes for each mailbox',
            desc: 'Every mailbox starts as Human only. Switch it to Assistant drafts, where a person reads and sends each reply, or to Assistant replies on its own. You pick which assistant answers which mailbox.',
          },
          {
            term: 'A hold before anything goes out',
            desc: 'In automatic mode a reply waits 2 minutes by default, or anything from no wait to 15 minutes, so a colleague can take the thread first. After 3 AI replies in one conversation, or the limit you set, the thread goes to a person.',
          },
          {
            term: 'It steps back when your team steps in',
            desc: 'Once a teammate replies or takes a thread, the assistant never answers it again. You also choose what it answers: all mail, only mail written to the address, or only mail it is copied on.',
          },
          {
            term: 'Draft reply on any thread',
            desc: 'In any conversation, one click writes a reply to the last email received, in the customer’s language and tone, greeting them by first name. Type the gist first and it writes the reply from your words; where a fact is missing, it leaves a placeholder such as [date] for you to fill in.',
          },
          {
            term: 'The mailbox you already use',
            desc: 'Connect any mailbox over IMAP and SMTP, from Google, Microsoft or your own mail server. Replies go out from your address and appear in your Sent folder as usual. Connect several mailboxes and choose the one new email is sent from.',
          },
          {
            term: 'Every email on the CRM record',
            desc: 'Everyone on an email, people in Cc included, gets a CRM contact, and the thread is filed under the sender. Link the thread to a deal, open a follow-up task from it, and fill email templates with the contact’s and the deal’s details.',
          },
          {
            term: 'A shared inbox for the team',
            desc: 'Unassigned, Assigned to me, Mentions, Assistant drafts and Snoozed folders, plus saved views. Threads move through Open, Pending, Snoozed and Resolved; internal notes take @mentions, collision detection shows who else is on a thread, and each teammate has a signature.',
          },
          {
            term: 'Rules and workflows on new mail',
            desc: 'Rules assign, route to a department and tag new email by sender, subject or mailbox. On paid plans, a workflow starts when an email arrives and can sort it with AI, open a task or reply. Auto-replies, bounces and mailing-list mail never open a thread.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your support mailbox to AI replies.',
        body: 'Start with drafts, read what the assistant writes, and let it answer on its own when you are happy with it.',
        items: [
          'Connect your support mailbox with its address and password; Fineguide tests the connection before it saves it.',
          'Choose who answers the mailbox (Human only, Assistant drafts or Assistant replies on its own) and pick the assistant.',
          'Set the hold before sending, the reply limit and which mail the assistant answers.',
          'Add rules, email templates and signatures, and give the mailbox a department if one team owns it.',
          'Review the Assistant drafts folder, send or discard each draft, and switch to automatic replies when you are ready.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'AI modes',
            desc: 'Human only (the default for every new mailbox), Assistant drafts, or Assistant replies on its own. Set per mailbox.',
          },
          {
            term: 'Safeguards',
            desc: 'Hold before sending: no wait, 1, 2, 5 or 15 minutes (2 by default). Reply limit: 1, 2, 3, 5 or 10 AI replies per conversation (3 by default), then a person takes over.',
          },
          {
            term: 'Mailboxes',
            desc: 'Any mailbox over IMAP and SMTP, Google and Microsoft included. Several mailboxes per workspace, each with its own assistant, department and AI mode.',
          },
          {
            term: 'Thread statuses',
            desc: 'Open, Pending, Snoozed and Resolved. Snooze for 3 hours, until tomorrow, for 3 days or until next week; resolve with a reason such as Answered or Handled elsewhere.',
          },
          {
            term: 'Integrations',
            desc: 'Workflows with an Email received trigger, n8n, Zendesk and Help Scout. Support requests from the chat open in the same inbox.',
          },
          {
            term: 'Credits',
            desc: 'Reading and sending email use no credits. A Draft reply is 1 credit, and replies the assistant writes in a mailbox’s AI modes count as AI replies. Start on the free plan with 200 credits.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'More on email, inbox and support',
        links: [
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Nine chat channels and your own email in one team inbox, with routing and handover to a person.',
          },
          {
            path: '/help-desk',
            label: 'Help desk',
            desc: 'AI answers first, support requests become tickets, and your team works them from one inbox.',
          },
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'The assistants that answer on your website, WhatsApp, Instagram and other channels.',
          },
          {
            path: '/automations',
            label: 'Automations',
            desc: 'Workflows that start when an email arrives, sort it with AI and open tasks.',
          },
          {
            path: '/compare/zendesk/',
            label: 'Fineguide vs Zendesk',
            desc: 'How an AI-first help desk with a CRM compares with Zendesk.',
          },
          {
            path: '/compare/intercom/',
            label: 'Fineguide vs Intercom',
            desc: 'AI answers on chat and email, side by side with Intercom.',
          },
        ],
      },
      faq: {
        heading: 'AI email assistant: common questions',
        items: [
          {
            q: 'Can AI answer customer emails automatically?',
            a: 'Yes. Set a mailbox to Assistant replies on its own, and the assistant answers new mail after a hold you choose, 2 minutes by default. It stops after a set number of AI replies in one conversation, or as soon as a person replies.',
          },
          {
            q: 'Can the AI write drafts instead of sending emails?',
            a: 'Yes. In Assistant drafts mode, its replies wait in the Assistant drafts folder until a person sends or discards them. On any thread, the Draft reply button also writes a reply for you to read over, for 1 credit.',
          },
          {
            q: 'Which email providers work with Fineguide?',
            a: 'Any mailbox that works over IMAP and SMTP, including Google and Microsoft accounts and your own mail server. Replies go out from your own address and appear in your Sent folder.',
          },
          {
            q: 'Does the AI reply in the customer’s language?',
            a: 'Yes. The assistant writes in the language the customer wrote in, and a Draft reply also follows the tone of their email and greets them by first name.',
          },
          {
            q: 'Will the AI make up prices or promises?',
            a: 'The assistant is instructed not to invent facts, prices, dates or commitments. When it cannot answer from the conversation, it says a colleague will follow up, and a draft leaves a placeholder such as [date] for you to complete.',
          },
          {
            q: 'What is a shared inbox with AI?',
            a: 'A shared inbox is one place where a team reads and answers the mail sent to addresses like support@. In Fineguide, the team assigns, tags, snoozes and resolves threads together, and an AI assistant drafts or sends replies on the mailboxes where you turn it on.',
          },
          {
            q: 'Is there a free plan?',
            a: 'Yes. Start on the free plan with 200 credits and no card: connect a mailbox, work the shared inbox and try AI drafts. Reading and sending email use no credits; workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      closing: {
        heading: 'Let the assistant draft your next reply.',
        body: 'Connect a mailbox, set it to Assistant drafts and read what it writes for a day. Or book a 30-minute demo and see the shared inbox on your own support email.',
      },
    },

    ro: {
      meta: {
        title: 'Asistent AI pentru email în suportul clienți | Fineguide',
        description:
          'Asistent AI pentru email: răspunsuri automate la email sau ciorne pe care le trimite echipa, dintr-un inbox comun legat de fiecare contact din CRM.',
      },
      hero: {
        eyebrow: 'Asistent AI pentru email',
        title: 'Emailurile clienților,',
        titleAccent: ' preluate dintr-un singur inbox comun.',
        subtitle:
          'Conectezi căsuța de suport pe care o folosești deja. Asistentul AI scrie ciorne pe care echipa le trimite sau le răspunde singur clienților după o scurtă pauză, iar fiecare email ajunge la contactul potrivit din CRM.',
      },
      definition: {
        heading: 'Ce este un asistent AI pentru email?',
        body:
          'Un asistent AI pentru email este un program care citește emailurile primite de la clienți și scrie răspunsurile, fie ca ciorne pe care le aprobă un om, fie ca răspunsuri trimise de el însuși. Asistentul AI pentru email de la Fineguide lucrează într-un inbox comun conectat la propria ta căsuță prin IMAP și SMTP: fiecare căsuță poate fi setată „Doar oameni”, „Asistentul scrie ciorne” sau „Asistentul răspunde singur”, cu o pauză de până la 15 minute înainte de trimitere și cel mult 1–10 răspunsuri AI pe conversație. Fiecare expeditor devine contact în CRM, iar asistentul se oprește într-o conversație imediat ce răspunde un om.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'AI pe emailul de suport, cu un om la control.',
        body:
          'Tu decizi, pentru fiecare căsuță, cât face asistentul. Echipa lucrează dintr-un singur inbox comun, iar fiecare conversație stă pe fișa clientului.',
        items: [
          {
            term: 'Trei moduri pentru fiecare căsuță',
            desc: 'Fiecare căsuță pornește cu „Doar oameni”. O poți trece pe „Asistentul scrie ciorne”, unde un coleg citește și trimite fiecare răspuns, sau pe „Asistentul răspunde singur”. Alegi ce asistent răspunde în ce căsuță.',
          },
          {
            term: 'O pauză înainte de trimitere',
            desc: 'În modul automat, răspunsul așteaptă implicit 2 minute sau cât alegi tu, de la zero la 15 minute, ca un coleg să poată prelua conversația. După 3 răspunsuri AI într-o conversație sau după limita setată de tine, conversația trece la un om.',
          },
          {
            term: 'Se retrage când intervine echipa',
            desc: 'După ce un coleg răspunde sau preia conversația, asistentul nu mai răspunde în ea. Alegi și la ce răspunde: la orice email, doar la emailurile scrise direct pe adresă sau doar la cele în care este pus în copie.',
          },
          {
            term: 'Ciornă de răspuns în orice conversație',
            desc: 'În orice conversație, un clic scrie răspunsul la ultimul email primit, în limba și pe tonul clientului, cu salut pe prenume. Scrii mai întâi ideea, iar AI-ul formulează răspunsul din cuvintele tale; unde lipsește o informație, lasă un loc de completat, de exemplu [data].',
          },
          {
            term: 'Căsuța pe care o folosești deja',
            desc: 'Conectezi orice căsuță prin IMAP și SMTP, de la Google, Microsoft sau propriul server de email. Răspunsurile pleacă de pe adresa ta și apar, ca de obicei, în dosarul Trimise. Poți conecta mai multe căsuțe și alegi de pe care pleacă emailurile noi.',
          },
          {
            term: 'Fiecare email pe fișa din CRM',
            desc: 'Toți cei de pe un email, inclusiv cei din Cc, primesc un contact în CRM, iar conversația se leagă de expeditor. O legi de o oportunitate, deschizi din ea o sarcină de follow-up și completezi șabloanele de email cu datele contactului și ale oportunității.',
          },
          {
            term: 'Un inbox comun pentru echipă',
            desc: 'Dosarele Neatribuite, Atribuite mie, Mențiuni, Ciornele asistentului și Amânate, plus vizualizări salvate. Conversațiile trec prin Deschis, În așteptare, Amânat și Rezolvat; notele interne au @mențiuni, detectarea suprapunerilor arată cine mai lucrează pe conversație, iar fiecare coleg are semnătura lui.',
          },
          {
            term: 'Reguli și workflow-uri pe emailurile noi',
            desc: 'Regulile atribuie, direcționează spre un departament și etichetează emailurile noi după expeditor, subiect sau căsuță. Pe planurile plătite, un workflow pornește la fiecare email nou și îl poate sorta cu AI, poate deschide o sarcină sau poate răspunde. Răspunsurile automate, mesajele returnate și listele de distribuție nu deschid conversații.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la căsuța de suport la răspunsuri AI.',
        body: 'Începi cu ciorne, citești ce scrie asistentul și îl lași să răspundă singur când ești mulțumit.',
        items: [
          'Conectezi căsuța de suport cu adresa și parola ei; Fineguide verifică conexiunea înainte s-o salveze.',
          'Alegi cine răspunde în căsuță („Doar oameni”, „Asistentul scrie ciorne” sau „Asistentul răspunde singur”) și alegi asistentul.',
          'Setezi pauza dinainte de trimitere, limita de răspunsuri și la ce emailuri răspunde asistentul.',
          'Adaugi reguli, șabloane de email și semnături și dai căsuței un departament, dacă o folosește o singură echipă.',
          'Verifici dosarul cu ciornele asistentului, trimiți sau ștergi fiecare ciornă și treci pe răspunsuri automate când ești gata.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Moduri AI',
            desc: '„Doar oameni” (implicit pentru orice căsuță nouă), „Asistentul scrie ciorne” sau „Asistentul răspunde singur”. Se setează pentru fiecare căsuță.',
          },
          {
            term: 'Siguranță',
            desc: 'Pauză înainte de trimitere: fără, 1, 2, 5 sau 15 minute (implicit 2). Limită: 1, 2, 3, 5 sau 10 răspunsuri AI pe conversație (implicit 3), apoi preia un om.',
          },
          {
            term: 'Căsuțe',
            desc: 'Orice căsuță cu IMAP și SMTP, inclusiv Google și Microsoft. Mai multe căsuțe în același spațiu de lucru, fiecare cu asistentul, departamentul și modul AI al ei.',
          },
          {
            term: 'Stări',
            desc: 'Deschis, În așteptare, Amânat și Rezolvat. Amâni cu 3 ore, până mâine, cu 3 zile sau până săptămâna viitoare; rezolvi cu un motiv, de exemplu „Răspuns dat” sau „Rezolvat în altă parte”.',
          },
          {
            term: 'Integrări',
            desc: 'Workflow-uri cu declanșatorul „Email primit”, n8n, Zendesk și Help Scout. Cererile de suport din chat se deschid în același inbox.',
          },
          {
            term: 'Credite',
            desc: 'Citirea și trimiterea emailurilor nu consumă credite. O ciornă de răspuns costă 1 credit, iar răspunsurile scrise de asistent în modurile AI ale unei căsuțe se numără ca răspunsuri AI. Începi pe planul gratuit, cu 200 de credite.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Mai multe despre email, inbox și suport',
        links: [
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Nouă canale de chat și emailul tău într-un inbox comun al echipei, cu rutare și preluare de către operator.',
          },
          {
            path: '/help-desk',
            label: 'Helpdesk',
            desc: 'AI-ul răspunde primul, cererile de suport devin tichete, iar echipa le preia dintr-un singur inbox.',
          },
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Asistenții care răspund pe site, pe WhatsApp, Instagram și în alte canale.',
          },
          {
            path: '/automations',
            label: 'Automatizări',
            desc: 'Workflow-uri care pornesc la un email nou, îl sortează cu AI și deschid sarcini.',
          },
          {
            path: '/compare/zendesk/',
            label: 'Fineguide vs Zendesk',
            desc: 'Cum se compară un helpdesk cu AI și CRM inclus cu Zendesk.',
          },
          {
            path: '/compare/intercom/',
            label: 'Fineguide vs Intercom',
            desc: 'Răspunsuri AI în chat și pe email, alături de Intercom.',
          },
        ],
      },
      faq: {
        heading: 'Asistent AI pentru email: întrebări frecvente',
        items: [
          {
            q: 'Cum setez răspunsuri automate la email cu AI?',
            a: 'Treci căsuța pe „Asistentul răspunde singur”, iar asistentul răspunde la emailurile noi după pauza aleasă, implicit 2 minute. Se oprește după un număr stabilit de răspunsuri AI într-o conversație sau imediat ce răspunde un om.',
          },
          {
            q: 'Poate AI-ul să scrie doar ciorne, fără să trimită?',
            a: 'Da. În modul „Asistentul scrie ciorne”, răspunsurile lui așteaptă în dosarul de ciorne până când un om le trimite sau le șterge. În orice conversație, butonul de ciornă scrie și un răspuns pe care îl citești înainte de trimitere, pentru 1 credit.',
          },
          {
            q: 'Ce furnizori de email funcționează cu Fineguide?',
            a: 'Orice căsuță care funcționează prin IMAP și SMTP, inclusiv conturile Google și Microsoft și propriul server de email. Răspunsurile pleacă de pe adresa ta și apar în dosarul Trimise.',
          },
          {
            q: 'Răspunde AI-ul în limba clientului?',
            a: 'Da. Asistentul scrie în limba în care a scris clientul, iar o ciornă de răspuns urmează și tonul emailului și îl salută pe client pe prenume.',
          },
          {
            q: 'Poate AI-ul să inventeze prețuri sau promisiuni?',
            a: 'Asistentul are instrucțiuni să nu inventeze fapte, prețuri, date sau angajamente. Când nu poate răspunde din conversație, spune că un coleg va reveni, iar o ciornă lasă un loc de completat, de exemplu [data].',
          },
          {
            q: 'Ce este un inbox comun cu AI?',
            a: 'Un inbox comun este locul în care o echipă citește și răspunde la emailurile trimise pe adrese ca support@. În Fineguide, echipa atribuie, etichetează, amână și rezolvă conversațiile împreună, iar asistentul AI scrie ciorne sau trimite răspunsuri în căsuțele unde îl activezi.',
          },
          {
            q: 'Există un plan gratuit?',
            a: 'Da. Începi pe planul gratuit, cu 200 de credite și fără card: conectezi o căsuță, lucrezi în inboxul comun și încerci ciornele AI. Citirea și trimiterea emailurilor nu consumă credite; workflow-urile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      closing: {
        heading: 'Lasă asistentul să-ți scrie următorul răspuns.',
        body: 'Conectează o căsuță, pune-o pe „Asistentul scrie ciorne” și citește o zi ce scrie. Sau programează un demo de 30 de minute și vezi inboxul comun pe propriul tău email de suport.',
      },
    },

    ru: {
      meta: {
        title: 'ИИ-ассистент для почты службы поддержки | Fineguide',
        description:
          'ИИ-ассистент для почты: автоответы на письма клиентов или черновики, которые отправляет команда, в общем ящике входящих, связанном с контактами в CRM.',
      },
      hero: {
        eyebrow: 'ИИ-ассистент для почты',
        title: 'Письма клиентов',
        titleAccent: ' получают ответ из одного общего ящика.',
        subtitle:
          'Подключите ящик поддержки, которым уже пользуетесь. ИИ-ассистент пишет черновики, которые отправляет команда, или сам отвечает клиентам после короткой паузы, а каждое письмо попадает к нужному контакту в CRM.',
      },
      definition: {
        heading: 'Что такое ИИ-ассистент для почты?',
        body:
          'ИИ-ассистент для почты представляет собой программу, которая читает входящие письма клиентов и пишет ответы: черновики, которые утверждает сотрудник, или ответы, которые отправляет сам. ИИ-ассистент для почты Fineguide работает в общем ящике входящих, подключённом к вашему ящику по IMAP и SMTP: для каждого ящика выбирается режим «Только люди», «Ассистент пишет черновики» или «Ассистент отвечает сам», пауза перед отправкой до 15 минут и лимит от 1 до 10 ИИ-ответов на переписку. Каждый отправитель становится контактом в CRM, а ассистент прекращает отвечать в переписке, как только ответил человек.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'ИИ в почте поддержки, а решает человек.',
        body:
          'Вы сами решаете для каждого ящика, что делает ассистент. Команда работает в одном общем ящике, и каждая переписка привязана к карточке клиента.',
        items: [
          {
            term: 'Три режима для каждого ящика',
            desc: 'Каждый ящик начинает работу в режиме «Только люди». Переключите его на «Ассистент пишет черновики», где сотрудник читает и отправляет каждый ответ, или на «Ассистент отвечает сам». Вы выбираете, какой ассистент отвечает в каком ящике.',
          },
          {
            term: 'Пауза перед отправкой',
            desc: 'В автоматическом режиме ответ по умолчанию ждёт 2 минуты, а можно выбрать от нуля до 15 минут, чтобы коллега успел взять переписку. После 3 ИИ-ответов в одной переписке или после вашего лимита переписка переходит к человеку.',
          },
          {
            term: 'Отходит в сторону, когда подключается команда',
            desc: 'Как только сотрудник ответил или взял переписку, ассистент больше в ней не отвечает. Можно выбрать, на что он отвечает: на все письма, только на письма, адресованные этому ящику, или только на те, где ящик стоит в копии.',
          },
          {
            term: 'Черновик ответа в любой переписке',
            desc: 'В любой переписке один клик пишет ответ на последнее полученное письмо на языке и в тоне клиента, с обращением по имени. Напишите суть своими словами, и ИИ сформулирует ответ; если не хватает факта, он оставит место для заполнения, например [дата].',
          },
          {
            term: 'Ваш собственный почтовый ящик',
            desc: 'Подключите любой ящик по IMAP и SMTP: Google, Microsoft или ваш почтовый сервер. Ответы уходят с вашего адреса и, как обычно, появляются в папке «Отправленные». Можно подключить несколько ящиков и выбрать, с какого уходят новые письма.',
          },
          {
            term: 'Каждое письмо в карточке CRM',
            desc: 'Все участники письма, включая тех, кто в копии, получают контакт в CRM, а переписка привязывается к отправителю. Свяжите её со сделкой, создайте из неё задачу на повторный контакт и заполняйте шаблоны писем данными контакта и сделки.',
          },
          {
            term: 'Общий ящик для команды',
            desc: 'Папки «Не назначены», «Мои», «Упоминания», «Черновики ассистента» и «Отложенные», а также сохранённые представления. Переписки проходят статусы «Открыта», «В ожидании», «Отложена» и «Решена»; во внутренних заметках есть @упоминания, защита от пересечений показывает, кто ещё работает с перепиской, а у каждого сотрудника своя подпись.',
          },
          {
            term: 'Правила и сценарии для новых писем',
            desc: 'Правила назначают ответственного, направляют в отдел и ставят теги на новые письма по отправителю, теме или ящику. На платных тарифах сценарий запускается при получении письма и может разобрать его с помощью ИИ, создать задачу или ответить. Автоответы, недоставленные письма и рассылки переписок не открывают.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От ящика поддержки до ИИ-ответов.',
        body: 'Начните с черновиков, почитайте, что пишет ассистент, и включите автоответы, когда будете довольны.',
        items: [
          'Подключите ящик поддержки по адресу и паролю; Fineguide проверит соединение перед сохранением.',
          'Выберите, кто отвечает в ящике («Только люди», «Ассистент пишет черновики» или «Ассистент отвечает сам»), и укажите ассистента.',
          'Задайте паузу перед отправкой, лимит ответов и то, на какие письма отвечает ассистент.',
          'Добавьте правила, шаблоны писем и подписи и назначьте ящику отдел, если с ним работает одна команда.',
          'Просматривайте папку черновиков ассистента, отправляйте или удаляйте каждый и включите автоответы, когда будете готовы.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Режимы ИИ',
            desc: '«Только люди» (по умолчанию для каждого нового ящика), «Ассистент пишет черновики» или «Ассистент отвечает сам». Настраивается для каждого ящика.',
          },
          {
            term: 'Меры защиты',
            desc: 'Пауза перед отправкой: без паузы, 1, 2, 5 или 15 минут (по умолчанию 2). Лимит: 1, 2, 3, 5 или 10 ИИ-ответов на переписку (по умолчанию 3), затем подключается человек.',
          },
          {
            term: 'Почтовые ящики',
            desc: 'Любой ящик с IMAP и SMTP, включая Google и Microsoft. Несколько ящиков в одном рабочем пространстве, у каждого свой ассистент, отдел и режим ИИ.',
          },
          {
            term: 'Статусы',
            desc: '«Открыта», «В ожидании», «Отложена» и «Решена». Отложить на 3 часа, до завтра, на 3 дня или до следующей недели; закрыть с причиной, например «Ответ дан» или «Решено в другом месте».',
          },
          {
            term: 'Интеграции',
            desc: 'Сценарии с триггером «Получено письмо», n8n, Zendesk и Help Scout. Заявки в поддержку из чата открываются в том же ящике.',
          },
          {
            term: 'Кредиты',
            desc: 'Чтение и отправка писем кредитов не расходуют. Черновик ответа стоит 1 кредит, а ответы ассистента в режимах ИИ считаются ИИ-ответами. Начните с бесплатного тарифа: 200 кредитов.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Ещё о почте, входящих и поддержке',
        links: [
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Девять каналов чата и ваша почта в общем ящике команды, с маршрутизацией и передачей диалога оператору.',
          },
          {
            path: '/help-desk',
            label: 'Хелпдеск',
            desc: 'Первым отвечает ИИ, заявки становятся тикетами, а команда разбирает их в одном ящике.',
          },
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Ассистенты, которые отвечают на сайте, в WhatsApp, Instagram и других каналах.',
          },
          {
            path: '/automations',
            label: 'Автоматизации',
            desc: 'Сценарии, которые запускаются при получении письма, разбирают его с помощью ИИ и создают задачи.',
          },
          {
            path: '/compare/zendesk/',
            label: 'Fineguide или Zendesk',
            desc: 'Чем хелпдеск с ИИ и встроенной CRM отличается от Zendesk.',
          },
          {
            path: '/compare/intercom/',
            label: 'Fineguide или Intercom',
            desc: 'ИИ-ответы в чате и почте в сравнении с Intercom.',
          },
        ],
      },
      faq: {
        heading: 'ИИ-ассистент для почты: частые вопросы',
        items: [
          {
            q: 'Как настроить автоответы на письма клиентов с помощью ИИ?',
            a: 'Переключите ящик в режим «Ассистент отвечает сам», и ассистент будет отвечать на новые письма после выбранной паузы, по умолчанию 2 минуты. Он останавливается после заданного числа ИИ-ответов в переписке или как только ответил человек.',
          },
          {
            q: 'Может ли ИИ писать только черновики, не отправляя письма?',
            a: 'Да. В режиме «Ассистент пишет черновики» ответы ждут в папке черновиков, пока сотрудник их не отправит или не удалит. В любой переписке кнопка черновика тоже пишет ответ, который вы прочитаете перед отправкой, за 1 кредит.',
          },
          {
            q: 'Какие почтовые сервисы работают с Fineguide?',
            a: 'Любой ящик с доступом по IMAP и SMTP, включая аккаунты Google и Microsoft и ваш собственный почтовый сервер. Ответы уходят с вашего адреса и появляются в папке «Отправленные».',
          },
          {
            q: 'Отвечает ли ИИ на языке клиента?',
            a: 'Да. Ассистент пишет на том языке, на котором написал клиент, а черновик ответа ещё и повторяет тон письма и обращается к клиенту по имени.',
          },
          {
            q: 'Не придумает ли ИИ цены или обещания?',
            a: 'У ассистента есть инструкция не придумывать факты, цены, даты и обязательства. Если ответа нет в переписке, он сообщает, что с клиентом свяжется коллега, а в черновике оставляет место для заполнения, например [дата].',
          },
          {
            q: 'Что такое общий ящик входящих с ИИ?',
            a: 'Общий ящик входящих представляет собой одно место, где команда читает письма на адреса вроде support@ и отвечает на них. В Fineguide команда вместе назначает, помечает тегами, откладывает и закрывает переписки, а ИИ-ассистент пишет черновики или отправляет ответы в тех ящиках, где вы его включили.',
          },
          {
            q: 'Есть ли бесплатный тариф?',
            a: 'Да, начните с бесплатного тарифа: 200 кредитов, карта не нужна, можно подключить ящик, работать в общем ящике и пробовать ИИ-черновики. Чтение и отправка писем кредитов не расходуют; сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      closing: {
        heading: 'Пусть ассистент напишет ваш следующий ответ.',
        body: 'Подключите ящик, включите режим «Ассистент пишет черновики» и день почитайте, что он пишет. Или запишитесь на 30-минутное демо и посмотрите общий ящик на вашей почте поддержки.',
      },
    },
  },
};

export default solution;
