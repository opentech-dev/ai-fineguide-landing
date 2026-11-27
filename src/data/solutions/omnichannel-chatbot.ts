import type { Solution } from './types';

const solution: Solution = {
  slug: 'omnichannel-chatbot',
  image: 'channels-phone.jpg',
  imageAlt: {
    en: 'A hand holding a phone with an Instagram feed open, over a wooden table with a cup of coffee',
    ro: 'O mână ține un telefon cu fluxul Instagram deschis, deasupra unei mese din lemn cu o cană de cafea',
    ru: 'Рука держит телефон с открытой лентой Instagram над деревянным столом с чашкой кофе',
  },
  appName: 'Fineguide Omnichannel AI Chatbot',
  checked: '2026-11-27',
  reading: ['/blog/omnichannel-team-inbox/', '/blog/human-handoff-ai-to-live-agent/', '/blog/whatsapp-business-api-ai-assistant/', '/blog/telegram-bot-for-business/', '/blog/instagram-messenger-comment-and-dm-automation/', '/blog/chatbot-vs-ai-agent/'],
  sources: [
    'ai-fineguide-landing public/llms.txt (channels: website chat widget, WhatsApp, Telegram bot or user account, Instagram, Messenger, Slack, Discord, JivoChat, amoCRM and Kommo; Messages & Inbox: one team inbox for nine chat channels and your own email over IMAP/SMTP, routing queue, rules, departments, handover, collision detection, saved replies, business-hours auto-reply; channel-agnostic identity: one record and history across website, messaging apps, email and phone calls; same assistants on chat and live calls; widget interface in 24 languages; AI calls in 14)',
    'ai-fineguide-landing src/data/solutions/help-desk.ts (verified 2026-11-25: handover when the customer asks for a person in English, Romanian or Russian or a described situation comes up; queue, auto-assign balanced / round-robin, departments, out-of-hours message; support requests become Inbox threads + Ticket tasks; Zendesk / Help Scout)',
    'ai-fineguide-landing src/data/solutions/whatsapp-ai-chatbot.ts, telegram-ai-bot.ts, website-ai-chatbot.ts, ai-email-assistant.ts (verified 2026-11-25: official WhatsApp Business Platform, one assistant per number, first message creates a CRM contact; Telegram bot or real account, groups only when tagged; widget voice and photos, 24 languages; email modes Human only / Assistant drafts / Assistant replies, 2-minute hold, reply limit)',
    'ai-fineguide-landing src/data/solutions/jivochat-ai-bot.ts (assistant answers JivoChat chats and hands over to Jivo operators)',
    'ai-fineguide-landing src/data/solutions/call-center.ts (assistants you run on chat answer inbound calls and call out; transcripts in the conversation history)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/analytics/AnalyticsPage.tsx (satisfaction, sentiment, resolution, intents) + modules/messages/reports/ReportsPage.tsx (conversations, escalation rate, median first response, median resolution)',
    'ai-fineguide-landing src/data/compare.ts (competitor channel facts, read on vendor pages 2026-11-25)',
  ],
  copy: {
    en: {
      meta: {
        title: 'Omnichannel AI Chatbot for Every Channel | Fineguide',
        description:
          'An omnichannel AI chatbot: one assistant on website chat, WhatsApp, Telegram, Instagram, Messenger, email and phone calls, one inbox and one customer record.',
      },
      hero: {
        eyebrow: 'Omnichannel AI chatbot',
        title: 'One assistant,',
        titleAccent: ' every channel.',
        subtitle:
          'The same AI assistant answers on your website, WhatsApp, Telegram, Instagram, Messenger, email and phone calls, and every conversation lands on one customer record your team can pick up.',
      },
      definition: {
        heading: 'What is an omnichannel chatbot?',
        body:
          'An omnichannel chatbot is one AI assistant that answers customers on every channel a business uses and keeps one conversation history per customer, so whoever takes over sees everything said before. Fineguide’s omnichannel AI chatbot answers on website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat, email and live phone calls, from the same knowledge and rules. Every conversation lands in one team inbox and on one CRM contact, and the assistant hands over to a person when the customer asks or one of your rules says so.',
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'Set up once, answering everywhere.',
        body:
          'You give one assistant its knowledge, tone and rules, then connect channels one by one. Each channel adds a door, not another bot to maintain.',
        items: [
          {
            term: 'Nine chat channels',
            desc: 'The website chat widget, WhatsApp (through the official WhatsApp Business Platform), Telegram as a bot or as your own user account, Instagram, Messenger, Slack and Discord, and inside JivoChat, amoCRM and Kommo.',
          },
          {
            term: 'Email, mailbox by mailbox',
            desc: 'Connect your own mailboxes over IMAP and SMTP. Each mailbox starts human-only; switch it to drafts a person approves, or replies the assistant sends after a short hold, and it steps back once a teammate replies.',
          },
          {
            term: 'The same assistant on the phone',
            desc: 'The assistants you run on chat also answer inbound calls and place outbound ones over your own phone system (SIP), in 14 languages, and each call is kept as a transcript in the conversation history.',
          },
          {
            term: 'One customer, one record',
            desc: 'The first message on WhatsApp, Telegram or another channel creates a CRM contact; when the same person writes again, it lands on that contact. Chats, emails and calls sit together on the customer’s record.',
          },
          {
            term: 'Handover to your team',
            desc: 'A conversation goes to a person when the customer asks for one, in English, Romanian or Russian, or when it matches a situation you described in your own words. The assistant stops, and your operator answers in the same channel from Messages.',
          },
          {
            term: 'One team inbox',
            desc: 'A routing queue or automatic assignment, departments with their own assistants and operators, saved replies, collision detection and an out-of-hours message, for chat and email alike.',
          },
          {
            term: 'Answers from your knowledge, in their language',
            desc: 'The assistant answers from your website, documents and FAQ, can be limited to only what it has learned, and replies in the language the customer writes in.',
          },
          {
            term: 'Leads, tickets and analytics',
            desc: 'On paid plans the assistant collects the details you choose into CRM leads, and support requests become tickets in the inbox. Analytics read satisfaction, sentiment, resolution and intent; reports show escalation rate and response times.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it is for',
        heading: 'Businesses whose customers write from everywhere.',
        items: [
          { term: 'Online stores', desc: 'Questions from the website, Instagram and WhatsApp answered by one assistant that knows the catalogue and policies.' },
          { term: 'Service businesses', desc: 'Clinics, agencies and schools that take enquiries on messengers and the phone and want each one on a contact.' },
          { term: 'Support teams', desc: 'One inbox for every channel, AI answering first and a clean handover when a person is needed.' },
          { term: 'Sales teams selling in messengers', desc: 'Leads qualified in the chat on WhatsApp, Telegram or Instagram and written into the CRM.' },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From one channel to all of them.',
        body: 'Start with the channel that brings the most messages; the assistant carries its knowledge and rules to every channel you add.',
        items: [
          'Create an assistant and give it your website, documents and the questions customers ask most.',
          'Install the chat on your website with two lines of code, a link or an iframe.',
          'Connect WhatsApp, Telegram, Instagram, Messenger or your support mailbox, one at a time.',
          'Choose when conversations go to a person, and set up departments, routing and business hours.',
          'Add your phone lines over SIP when you want the same assistant on calls.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          { term: 'Channels', desc: '9 chat channels (website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat, and amoCRM/Kommo), your own email over IMAP and SMTP, and phone calls over SIP.' },
          { term: 'Languages', desc: 'The chat widget’s interface in 24 languages; AI phone calls in 14. The assistant answers in the language the customer writes in.' },
          { term: 'Telegram', desc: '2 ways to connect: a bot, or your own user account, which can answer private messages and, in groups, only when tagged.' },
          { term: 'Email safeguards', desc: 'Human only by default; drafts or automatic replies per mailbox, a hold of 2 minutes before sending by default, and a person takes over after 3 AI replies in one thread by default.' },
          { term: 'Integrations', desc: 'Zendesk and Help Scout for support requests, n8n and workflows for everything else, and webhooks on every message.' },
          { term: 'Plans', desc: 'Start on the free plan with 200 credits and no card. Each AI reply is 1 credit; your team’s replies and reading or sending email use none.' },
        ],
      },
      alternatives: {
        eyebrow: 'How it compares',
        heading: 'Fineguide and the usual alternatives.',
        body:
          'Businesses usually choose between a support suite, a live-chat tool and a messenger-first CRM. Here is how they differ, by capability, with the full sourced comparisons linked.',
        items: [
          {
            term: 'Support suites: Intercom and Zendesk',
            desc: 'Mature help desks whose AI agents answer on chat, email, messaging apps and voice. Fineguide adds a sales CRM, Discord and JivoChat, and AI calls over your own phone system, all on the same record.',
            path: '/compare/intercom',
            label: 'Fineguide vs Intercom',
          },
          {
            term: 'Live-chat tools: Tidio and JivoChat',
            desc: 'Website chat and messaging apps in one inbox, with an AI agent. Fineguide’s assistant also answers live phone calls over your own phone system, with a sales CRM on the same record.',
            path: '/compare/tidio',
            label: 'Fineguide vs Tidio',
          },
          {
            term: 'Messenger-first CRMs: Kommo and amoCRM',
            desc: 'Sales pipelines fed by WhatsApp, Instagram and Telegram, with AI agents that reply to incoming messages. Fineguide’s assistants can also work inside them, and take phone calls.',
            path: '/compare/kommo-amocrm',
            label: 'Fineguide vs Kommo and amoCRM',
          },
          {
            term: 'The whole category, side by side',
            desc: 'Fineguide, Freshdesk, Intercom, JivoChat, Kommo, respond.io, Tidio, Trengo and Zendesk, each with what its own pages say it does.',
            path: '/best/omnichannel-chatbot-platforms',
            label: 'Best omnichannel chatbot platforms',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'Every channel, one page each',
        links: [
          { path: '/messages', label: 'Messages & Inbox', desc: 'One team inbox for nine chat channels and your own email.' },
          { path: '/website-ai-chatbot', label: 'Website AI chatbot', desc: 'The chat on your site: styles, languages, voice and leads.' },
          { path: '/whatsapp-ai-chatbot', label: 'WhatsApp AI chatbot', desc: 'An AI agent on the official WhatsApp Business Platform.' },
          { path: '/telegram-ai-bot', label: 'Telegram AI bot', desc: 'A bot or your own Telegram account, answering with AI.' },
          { path: '/voice-ai', label: 'AI Telephony', desc: 'The same assistant on inbound and outbound phone calls.' },
        ],
      },
      faq: {
        heading: 'Omnichannel chatbots: common questions',
        items: [
          {
            q: 'What is the best omnichannel chatbot platform?',
            a: 'It depends on the team. Large support teams often pick a support suite such as Intercom or Zendesk; small teams centred on website chat pick tools such as Tidio or JivoChat. Fineguide fits when you want one AI assistant on chat, messaging apps, email and phone calls, with the CRM on the same record.',
          },
          {
            q: 'What is the difference between an omnichannel and a multichannel chatbot?',
            a: 'A multichannel chatbot is present on several channels. An omnichannel one also keeps one customer record and one conversation history across them, so the AI and the person who takes over see what was said on every channel.',
          },
          {
            q: 'Can one AI assistant answer on WhatsApp, Telegram and Instagram at once?',
            a: 'Yes. In Fineguide you connect each channel to the same assistant, which answers from the same knowledge and rules, and every conversation arrives in one team inbox.',
          },
          {
            q: 'Can the same chatbot answer phone calls?',
            a: 'Yes. Fineguide’s assistants answer inbound calls and place outbound calls over your own phone system (SIP) in 14 languages, and each call is kept as a transcript on the customer’s record.',
          },
          {
            q: 'How does handover to a human work across channels?',
            a: 'When the customer asks for a person, or the conversation matches a situation you described, the assistant stops and the conversation waits in Messages. Your operator replies from Fineguide, and the answer goes out in the same channel the customer used.',
          },
          {
            q: 'Does it work with our existing help desk or CRM?',
            a: 'Support requests can also be sent to Zendesk or Help Scout, the assistant can work inside amoCRM, Kommo and JivoChat, and webhooks and n8n connect it to your own systems.',
          },
          {
            q: 'Is there a free plan?',
            a: 'Yes. The free plan has 200 credits and no card is needed; each AI reply is 1 credit, and your team’s own replies use none.',
          },
        ],
      },
      closing: {
        heading: 'Connect your first two channels.',
        body: 'Create an assistant on the free plan, put it on your website and WhatsApp, and answer both from one inbox. Or book a 30-minute demo on your own channels.',
      },
    },

    ro: {
      meta: {
        title: 'Chatbot AI omnicanal pentru fiecare canal | Fineguide',
        description:
          'Chatbot AI omnicanal: un singur asistent pe chatul de pe site, WhatsApp, Telegram, Instagram, Messenger, email și telefon, un inbox și o singură fișă de client.',
      },
      hero: {
        eyebrow: 'Chatbot AI omnicanal',
        title: 'Un singur asistent,',
        titleAccent: ' pe fiecare canal.',
        subtitle:
          'Același asistent AI răspunde pe site, pe WhatsApp, Telegram, Instagram, Messenger, pe email și la telefon, iar fiecare conversație ajunge pe o singură fișă de client, de unde echipa o poate prelua.',
      },
      definition: {
        heading: 'Ce este un chatbot omnicanal?',
        body:
          'Un chatbot omnicanal este un singur asistent AI care răspunde clienților pe fiecare canal folosit de firmă și păstrează un singur istoric de conversație pentru fiecare client, astfel încât cine preia vede tot ce s-a spus înainte. Chatbotul AI omnicanal Fineguide răspunde în chatul de pe site, pe WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat, pe email și la apeluri telefonice în direct, din aceleași cunoștințe și după aceleași reguli. Fiecare conversație ajunge într-un singur inbox de echipă și pe un singur contact din CRM, iar asistentul predă conversația unui om când clientul o cere sau când una dintre regulile tale o spune.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Configurat o dată, răspunde peste tot.',
        body:
          'Îi dai unui singur asistent cunoștințele, tonul și regulile, apoi conectezi canalele pe rând. Fiecare canal adaugă o ușă, nu încă un bot de întreținut.',
        items: [
          { term: 'Nouă canale de chat', desc: 'Widgetul de chat de pe site, WhatsApp (prin platforma oficială WhatsApp Business), Telegram ca bot sau ca propriul cont de utilizator, Instagram, Messenger, Slack și Discord, plus direct în JivoChat, amoCRM și Kommo.' },
          { term: 'Email, căsuță cu căsuță', desc: 'Conectezi propriile căsuțe prin IMAP și SMTP. Fiecare căsuță pornește doar cu oameni; o treci pe ciorne aprobate de un om sau pe răspunsuri trimise de asistent după o scurtă așteptare, iar asistentul se retrage când răspunde un coleg.' },
          { term: 'Același asistent la telefon', desc: 'Asistenții pe care îi folosești în chat răspund și la apeluri și sună prin propria ta centrală telefonică (SIP), în 14 limbi, iar fiecare apel rămâne ca transcriere în istoricul conversației.' },
          { term: 'Un client, o singură fișă', desc: 'Primul mesaj pe WhatsApp, Telegram sau alt canal creează un contact în CRM; când aceeași persoană scrie din nou, ajunge la același contact. Chaturile, emailurile și apelurile stau împreună pe fișa clientului.' },
          { term: 'Preluare de către echipă', desc: 'Conversația ajunge la un om când clientul cere asta, în română, rusă sau engleză, ori când se potrivește cu o situație descrisă de tine. Asistentul se oprește, iar operatorul răspunde pe același canal, din Mesaje.' },
          { term: 'Un singur inbox de echipă', desc: 'Coadă de preluare sau atribuire automată, departamente cu asistenții și operatorii lor, răspunsuri salvate, detectarea coliziunilor și mesaj în afara programului, la fel pentru chat și email.' },
          { term: 'Răspunsuri din cunoștințele tale, în limba clientului', desc: 'Asistentul răspunde din site-ul, documentele și întrebările frecvente pe care i le dai, poate fi limitat doar la ce a învățat și răspunde în limba în care scrie clientul.' },
          { term: 'Lead-uri, tichete și analize', desc: 'Pe planurile plătite, asistentul colectează datele alese de tine în lead-uri din CRM, iar cererile de suport devin tichete în inbox. Analizele arată satisfacția, sentimentul, rezolvarea și intenția; rapoartele arată rata de preluare și timpii de răspuns.' },
        ],
      },
      audience: {
        eyebrow: 'Pentru cine este',
        heading: 'Firmele ai căror clienți scriu de peste tot.',
        items: [
          { term: 'Magazine online', desc: 'Întrebările de pe site, Instagram și WhatsApp primesc răspuns de la un singur asistent care știe catalogul și regulile.' },
          { term: 'Firme de servicii', desc: 'Clinici, agenții și școli care primesc solicitări pe mesagerie și la telefon și vor ca fiecare să fie pe un contact.' },
          { term: 'Echipe de suport', desc: 'Un singur inbox pentru toate canalele, AI-ul răspunde primul, iar preluarea de către un om se face curat.' },
          { term: 'Vânzări prin mesagerie', desc: 'Lead-uri calificate în chat pe WhatsApp, Telegram sau Instagram și scrise în CRM.' },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la un canal la toate.',
        body: 'Începe cu canalul care aduce cele mai multe mesaje; asistentul își duce cunoștințele și regulile pe fiecare canal nou.',
        items: [
          'Creează un asistent și dă-i site-ul, documentele și întrebările pe care clienții le pun cel mai des.',
          'Instalează chatul pe site cu două rânduri de cod, un link sau un iframe.',
          'Conectează pe rând WhatsApp, Telegram, Instagram, Messenger sau căsuța de suport.',
          'Alege când conversațiile ajung la un om și configurează departamentele, rutarea și programul.',
          'Adaugă liniile telefonice prin SIP când vrei același asistent și la apeluri.',
        ],
      },
      facts: {
        eyebrow: 'Date',
        heading: 'În cifre și nume.',
        items: [
          { term: 'Canale', desc: '9 canale de chat (chat pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat și amoCRM/Kommo), emailul tău prin IMAP și SMTP și apeluri telefonice prin SIP.' },
          { term: 'Limbi', desc: 'Interfața widgetului de chat în 24 de limbi; apeluri AI în 14. Asistentul răspunde în limba în care scrie clientul.' },
          { term: 'Telegram', desc: '2 moduri de conectare: un bot sau propriul cont de utilizator, care poate răspunde la mesaje private și, în grupuri, doar când e menționat.' },
          { term: 'Protecții pe email', desc: 'Implicit doar oameni; ciorne sau răspunsuri automate pentru fiecare căsuță, o așteptare implicită de 2 minute înainte de trimitere, iar după 3 răspunsuri AI într-o conversație preia un om (implicit).' },
          { term: 'Integrări', desc: 'Zendesk și Help Scout pentru cererile de suport, n8n și fluxuri de lucru pentru rest, plus webhook-uri la fiecare mesaj.' },
          { term: 'Planuri', desc: 'Începi pe planul gratuit cu 200 de credite, fără card. Fiecare răspuns AI costă 1 credit; răspunsurile echipei și citirea sau trimiterea emailurilor nu consumă credite.' },
        ],
      },
      alternatives: {
        eyebrow: 'Cum se compară',
        heading: 'Fineguide și alternativele obișnuite.',
        body:
          'Firmele aleg de obicei între o suită de suport, o unealtă de chat live și un CRM construit în jurul mesageriei. Iată cum diferă, după funcții, cu link spre comparațiile complete, cu surse.',
        items: [
          { term: 'Suite de suport: Intercom și Zendesk', desc: 'Helpdesk-uri mature ai căror agenți AI răspund pe chat, email, mesagerie și voce. Fineguide adaugă un CRM de vânzări, Discord și JivoChat, plus apeluri AI prin propria ta centrală, toate pe aceeași fișă.', path: '/compare/intercom', label: 'Fineguide vs Intercom' },
          { term: 'Unelte de chat live: Tidio și JivoChat', desc: 'Chat pe site și aplicații de mesagerie într-un singur inbox, cu un agent AI. Asistentul Fineguide răspunde și la apeluri în direct prin propria ta centrală, cu un CRM de vânzări pe aceeași fișă.', path: '/compare/tidio', label: 'Fineguide vs Tidio' },
          { term: 'CRM-uri pentru mesagerie: Kommo și amoCRM', desc: 'Pipeline-uri de vânzări alimentate din WhatsApp, Instagram și Telegram, cu agenți AI care răspund la mesajele primite. Asistenții Fineguide pot lucra și în interiorul lor, și preiau apeluri.', path: '/compare/kommo-amocrm', label: 'Fineguide vs Kommo și amoCRM' },
          { term: 'Toată categoria, alături', desc: 'Fineguide, Freshdesk, Intercom, JivoChat, Kommo, respond.io, Tidio, Trengo și Zendesk, fiecare cu ce spun paginile lui oficiale că face.', path: '/best/omnichannel-chatbot-platforms', label: 'Cele mai bune platforme de chatbot omnicanal' },
        ],
      },
      related: {
        eyebrow: 'Legate',
        heading: 'Fiecare canal, pe pagina lui',
        links: [
          { path: '/messages', label: 'Mesaje și Inbox', desc: 'Un singur inbox de echipă pentru nouă canale de chat și emailul tău.' },
          { path: '/website-ai-chatbot', label: 'Chatbot AI pentru site', desc: 'Chatul de pe site: stiluri, limbi, voce și lead-uri.' },
          { path: '/whatsapp-ai-chatbot', label: 'Chatbot AI pentru WhatsApp', desc: 'Un agent AI pe platforma oficială WhatsApp Business.' },
          { path: '/telegram-ai-bot', label: 'Bot AI pentru Telegram', desc: 'Un bot sau propriul cont Telegram, care răspunde cu AI.' },
          { path: '/voice-ai', label: 'Telefonie AI', desc: 'Același asistent la apelurile primite și efectuate.' },
        ],
      },
      faq: {
        heading: 'Chatboți omnicanal: întrebări frecvente',
        items: [
          { q: 'Care este cea mai bună platformă de chatbot omnicanal?', a: 'Depinde de echipă. Echipele mari de suport aleg des o suită ca Intercom sau Zendesk; echipele mici axate pe chatul de pe site aleg unelte ca Tidio sau JivoChat. Fineguide se potrivește când vrei un singur asistent AI pe chat, mesagerie, email și telefon, cu CRM-ul pe aceeași fișă.' },
          { q: 'Care este diferența dintre un chatbot omnicanal și unul multicanal?', a: 'Un chatbot multicanal este prezent pe mai multe canale. Unul omnicanal păstrează în plus o singură fișă de client și un singur istoric pe toate, așa că AI-ul și omul care preia văd ce s-a spus pe fiecare canal.' },
          { q: 'Poate un singur asistent AI să răspundă simultan pe WhatsApp, Telegram și Instagram?', a: 'Da. În Fineguide conectezi fiecare canal la același asistent, care răspunde din aceleași cunoștințe și după aceleași reguli, iar toate conversațiile ajung într-un singur inbox de echipă.' },
          { q: 'Poate același chatbot să răspundă la telefon?', a: 'Da. Asistenții Fineguide răspund la apeluri și sună prin propria ta centrală telefonică (SIP), în 14 limbi, iar fiecare apel rămâne ca transcriere pe fișa clientului.' },
          { q: 'Cum funcționează preluarea de către un om pe diferite canale?', a: 'Când clientul cere un om sau conversația se potrivește cu o situație descrisă de tine, asistentul se oprește, iar conversația așteaptă în Mesaje. Operatorul răspunde din Fineguide, iar mesajul pleacă pe același canal pe care a scris clientul.' },
          { q: 'Funcționează cu helpdesk-ul sau CRM-ul pe care îl avem deja?', a: 'Cererile de suport pot fi trimise și în Zendesk sau Help Scout, asistentul poate lucra în amoCRM, Kommo și JivoChat, iar webhook-urile și n8n îl leagă de sistemele tale.' },
          { q: 'Există un plan gratuit?', a: 'Da. Planul gratuit are 200 de credite și nu cere card; fiecare răspuns AI costă 1 credit, iar răspunsurile echipei nu consumă credite.' },
        ],
      },
      closing: {
        heading: 'Conectează primele două canale.',
        body: 'Creează un asistent pe planul gratuit, pune-l pe site și pe WhatsApp și răspunde la ambele dintr-un singur inbox. Sau programează o demonstrație de 30 de minute pe canalele tale.',
      },
    },

    ru: {
      meta: {
        title: 'Омниканальный ИИ-чат-бот для всех каналов | Fineguide',
        description:
          'Омниканальный ИИ-чат-бот: один ассистент в чате на сайте, WhatsApp, Telegram, Instagram, Messenger, почте и на звонках, один inbox и одна карточка клиента.',
      },
      hero: {
        eyebrow: 'Омниканальный ИИ-чат-бот',
        title: 'Один ассистент —',
        titleAccent: ' во всех каналах.',
        subtitle:
          'Один и тот же ИИ-ассистент отвечает на сайте, в WhatsApp, Telegram, Instagram, Messenger, почте и на звонках, а каждый диалог попадает в одну карточку клиента, откуда его может подхватить команда.',
      },
      definition: {
        heading: 'Что такое омниканальный чат-бот?',
        body:
          'Омниканальный чат-бот — это один ИИ-ассистент, который отвечает клиентам во всех каналах компании и ведёт одну историю диалога на клиента, так что тот, кто подключается, видит всё сказанное раньше. Омниканальный ИИ-чат-бот Fineguide отвечает в чате на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat, почте и на живых звонках — по одним материалам и правилам. Каждый диалог попадает в общий inbox команды и в одну карточку контакта в CRM, а ассистент передаёт разговор человеку, когда клиент просит или срабатывает ваше правило.',
      },
      capabilities: {
        eyebrow: 'Что умеет',
        heading: 'Настроили один раз — отвечает везде.',
        body:
          'Вы задаёте одному ассистенту знания, тон и правила, а потом подключаете каналы по одному. Каждый канал — это новая дверь, а не ещё один бот, которого нужно поддерживать.',
        items: [
          { term: 'Девять чат-каналов', desc: 'Чат-виджет на сайте, WhatsApp (через официальную платформу WhatsApp Business), Telegram — бот или ваш собственный аккаунт, Instagram, Messenger, Slack и Discord, а также внутри JivoChat, amoCRM и Kommo.' },
          { term: 'Почта — по каждому ящику', desc: 'Подключите свои ящики по IMAP и SMTP. Каждый ящик сначала только для людей; переключите его на черновики, которые одобряет сотрудник, или на ответы ассистента после короткой паузы — ассистент отступает, как только отвечает коллега.' },
          { term: 'Тот же ассистент на телефоне', desc: 'Ассистенты, которые работают в чатах, принимают и совершают звонки через вашу телефонию (SIP) на 14 языках, и каждый звонок сохраняется расшифровкой в истории диалога.' },
          { term: 'Один клиент — одна карточка', desc: 'Первое сообщение в WhatsApp, Telegram или другом канале создаёт контакт в CRM; когда человек пишет снова, сообщение попадает к тому же контакту. Чаты, письма и звонки — вместе в карточке клиента.' },
          { term: 'Передача команде', desc: 'Диалог уходит к человеку, когда клиент просит об этом — по-русски, по-румынски или по-английски — или когда разговор подходит под описанную вами ситуацию. Ассистент замолкает, а оператор отвечает в том же канале из раздела «Сообщения».' },
          { term: 'Общий inbox команды', desc: 'Очередь или автоматическое распределение, отделы со своими ассистентами и операторами, шаблоны ответов, предупреждение о том, что диалог уже открыт коллегой, и сообщение в нерабочее время — для чатов и почты одинаково.' },
          { term: 'Ответы по вашим материалам и на языке клиента', desc: 'Ассистент отвечает по вашему сайту, документам и частым вопросам, может отвечать только по тому, чему его научили, и пишет на языке клиента.' },
          { term: 'Лиды, тикеты и аналитика', desc: 'На платных тарифах ассистент собирает нужные вам данные в лиды CRM, а обращения в поддержку становятся тикетами в inbox. Аналитика показывает удовлетворённость, тональность, решённость и намерения; отчёты — долю передач и время ответа.' },
        ],
      },
      audience: {
        eyebrow: 'Для кого',
        heading: 'Для бизнеса, которому клиенты пишут отовсюду.',
        items: [
          { term: 'Интернет-магазины', desc: 'Вопросы с сайта, из Instagram и WhatsApp получают ответ одного ассистента, который знает каталог и правила.' },
          { term: 'Сервисный бизнес', desc: 'Клиники, агентства и школы, которые принимают обращения в мессенджерах и по телефону и хотят видеть каждое в карточке.' },
          { term: 'Службы поддержки', desc: 'Один inbox для всех каналов, ИИ отвечает первым, а передача человеку проходит чисто.' },
          { term: 'Продажи в мессенджерах', desc: 'Лиды квалифицируются в чате WhatsApp, Telegram или Instagram и записываются в CRM.' },
        ],
      },
      steps: {
        eyebrow: 'С чего начать',
        heading: 'От одного канала ко всем.',
        body: 'Начните с канала, откуда приходит больше всего сообщений; ассистент переносит знания и правила в каждый новый канал.',
        items: [
          'Создайте ассистента и дайте ему сайт, документы и самые частые вопросы клиентов.',
          'Установите чат на сайт двумя строками кода, ссылкой или через iframe.',
          'Подключите по очереди WhatsApp, Telegram, Instagram, Messenger или ящик поддержки.',
          'Решите, когда диалоги уходят к человеку, и настройте отделы, маршрутизацию и рабочие часы.',
          'Добавьте телефонные линии по SIP, когда захотите, чтобы тот же ассистент отвечал на звонки.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          { term: 'Каналы', desc: '9 чат-каналов (чат на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, JivoChat и amoCRM/Kommo), ваша почта по IMAP и SMTP и звонки по SIP.' },
          { term: 'Языки', desc: 'Интерфейс чат-виджета на 24 языках; ИИ-звонки на 14. Ассистент отвечает на языке клиента.' },
          { term: 'Telegram', desc: '2 способа подключения: бот или ваш собственный аккаунт, который может отвечать в личных сообщениях, а в группах — только когда его упомянули.' },
          { term: 'Защита в почте', desc: 'По умолчанию только люди; черновики или автоответы для каждого ящика, пауза 2 минуты перед отправкой по умолчанию, а после 3 ответов ИИ в одной переписке подключается человек (по умолчанию).' },
          { term: 'Интеграции', desc: 'Zendesk и Help Scout для обращений в поддержку, n8n и сценарии для всего остального, вебхуки на каждое сообщение.' },
          { term: 'Тарифы', desc: 'Начните с бесплатного тарифа: 200 кредитов, без карты. Каждый ответ ИИ — 1 кредит; ответы команды, чтение и отправка писем кредиты не расходуют.' },
        ],
      },
      alternatives: {
        eyebrow: 'Сравнение',
        heading: 'Fineguide и привычные альтернативы.',
        body:
          'Обычно выбирают между пакетом для поддержки, сервисом онлайн-чата и CRM для продаж в мессенджерах. Вот чем они отличаются по возможностям, со ссылками на полные сравнения с источниками.',
        items: [
          { term: 'Пакеты для поддержки: Intercom и Zendesk', desc: 'Зрелые хелпдески, чьи ИИ-агенты отвечают в чате, почте, мессенджерах и голосом. Fineguide добавляет CRM для продаж, Discord и JivoChat и ИИ-звонки через вашу телефонию — всё в той же карточке.', path: '/compare/intercom', label: 'Fineguide и Intercom' },
          { term: 'Онлайн-чаты: Tidio и JivoChat', desc: 'Чат на сайте и мессенджеры в одном inbox, с ИИ-агентом. Ассистент Fineguide отвечает ещё и на живых звонках через вашу телефонию, а CRM для продаж — в той же карточке.', path: '/compare/tidio', label: 'Fineguide и Tidio' },
          { term: 'CRM для мессенджеров: Kommo и amoCRM', desc: 'Воронки продаж из WhatsApp, Instagram и Telegram с ИИ-агентами, отвечающими на входящие. Ассистенты Fineguide могут работать и внутри них, и принимают звонки.', path: '/compare/kommo-amocrm', label: 'Fineguide и Kommo с amoCRM' },
          { term: 'Вся категория рядом', desc: 'Fineguide, Freshdesk, Intercom, JivoChat, Kommo, respond.io, Tidio, Trengo и Zendesk — у каждого то, что о нём говорят его собственные страницы.', path: '/best/omnichannel-chatbot-platforms', label: 'Лучшие омниканальные платформы чат-ботов' },
        ],
      },
      related: {
        eyebrow: 'По теме',
        heading: 'Каждый канал — на своей странице',
        links: [
          { path: '/messages', label: 'Сообщения и Inbox', desc: 'Общий inbox команды для девяти чат-каналов и вашей почты.' },
          { path: '/website-ai-chatbot', label: 'ИИ-чат-бот для сайта', desc: 'Чат на вашем сайте: стили, языки, голос и лиды.' },
          { path: '/whatsapp-ai-chatbot', label: 'ИИ-чат-бот для WhatsApp', desc: 'ИИ-агент на официальной платформе WhatsApp Business.' },
          { path: '/telegram-ai-bot', label: 'ИИ-бот для Telegram', desc: 'Бот или ваш собственный аккаунт Telegram, отвечающий с помощью ИИ.' },
          { path: '/voice-ai', label: 'ИИ-телефония', desc: 'Тот же ассистент на входящих и исходящих звонках.' },
        ],
      },
      faq: {
        heading: 'Омниканальные чат-боты: частые вопросы',
        items: [
          { q: 'Какая омниканальная платформа чат-ботов лучше?', a: 'Зависит от команды. Крупные службы поддержки часто выбирают пакет вроде Intercom или Zendesk; небольшие команды вокруг чата на сайте — сервисы вроде Tidio или JivoChat. Fineguide подходит, если нужен один ИИ-ассистент в чатах, мессенджерах, почте и на звонках, с CRM в той же карточке.' },
          { q: 'Чем омниканальный чат-бот отличается от мультиканального?', a: 'Мультиканальный чат-бот присутствует в нескольких каналах. Омниканальный ещё и ведёт одну карточку клиента и одну историю во всех каналах, поэтому ИИ и подключившийся сотрудник видят сказанное везде.' },
          { q: 'Может ли один ИИ-ассистент отвечать сразу в WhatsApp, Telegram и Instagram?', a: 'Да. В Fineguide вы подключаете каждый канал к одному ассистенту, который отвечает по тем же материалам и правилам, а все диалоги приходят в общий inbox команды.' },
          { q: 'Может ли тот же чат-бот отвечать на звонки?', a: 'Да. Ассистенты Fineguide принимают и совершают звонки через вашу телефонию (SIP) на 14 языках, и каждый звонок сохраняется расшифровкой в карточке клиента.' },
          { q: 'Как работает передача человеку в разных каналах?', a: 'Когда клиент просит человека или разговор подходит под описанную вами ситуацию, ассистент замолкает, и диалог ждёт в разделе «Сообщения». Оператор отвечает из Fineguide, и ответ уходит в тот же канал, где написал клиент.' },
          { q: 'Работает ли это с нашим хелпдеском или CRM?', a: 'Обращения в поддержку можно отправлять ещё и в Zendesk или Help Scout, ассистент может работать внутри amoCRM, Kommo и JivoChat, а вебхуки и n8n связывают его с вашими системами.' },
          { q: 'Есть ли бесплатный тариф?', a: 'Да. На бесплатном тарифе 200 кредитов, карта не нужна; каждый ответ ИИ — 1 кредит, а ответы вашей команды кредиты не расходуют.' },
        ],
      },
      closing: {
        heading: 'Подключите первые два канала.',
        body: 'Создайте ассистента на бесплатном тарифе, поставьте его на сайт и в WhatsApp и отвечайте в обоих каналах из одного inbox. Или запишитесь на 30-минутное демо на ваших каналах.',
      },
    },
  },
};

export default solution;
