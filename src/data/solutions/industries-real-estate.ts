import type { Solution } from './types';

const solution: Solution = {
  slug: 'industries/real-estate',
  image: 'partner-consultant.jpg',
  imageAlt: {
    en: 'An agent sketches a plan on paper for a client at a wooden table, a laptop open beside them',
    ro: 'Un agent schițează un plan pe hârtie pentru o clientă, la o masă de lemn, cu un laptop deschis alături',
    ru: 'Агент рисует план на листе бумаги для клиентки за деревянным столом, рядом открыт ноутбук',
  },
  appName: 'Fineguide for real estate',
  checked: '2026-11-25',
  reading: [
    '/blog/ai-crm-for-real-estate-agencies/',
    '/blog/session-variables-chat-to-crm-data/',
    '/blog/whatsapp-business-api-ai-assistant/',
    '/blog/facebook-lead-ads-to-crm/',
    '/blog/ai-phone-assistant-for-small-business/',
  ],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/features/FeaturesPage.tsx "Lead collection" (asks visitors for contact details and saves them as leads in your CRM; When it asks: before it answers anything / when the visitor shows interest / in every reply; "Fields a lead needs" = session variables, "A lead is saved once these are collected. Leave all unticked to save it as soon as there is an email or phone number"); lead collection plan-gated (canAccessLeadCollection; Free lacks it per BRIEF.md)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/variables/SessionVariablesPage.tsx (types Text, Number, Yes or no, One of a list, Several from a list; description tells the assistant what to look for)',
    'ai-backoffice-api apps/backoffice-api/src/modules/crm/lead/lead.service.ts createInternal (find-or-create contact by email / phone, collected values applied to the contact, conversation linked to the contact, follow-up Task when the conversation showed interest; a captured lead is a Contact + Task, not a Deal)',
    'ai-backoffice-api apps/backoffice-api/src/modules/crm/contact/contact.service.ts applyCollectedValues ("a collected budget lands in the Budget field a person sees on the contact"; CustomFieldService.syncBotVariablesToCustomFields) + task.service.ts createCaptureFollowUpTask (default board)',
    'ai-backoffice-api apps/backoffice-api/prisma/schema.prisma Contact.channels ("A person reached on two channels is one contact with two rows here") + ContactChannel',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/workflows/help/reference.ts ASSISTANT_INFO_COLLECTED, EMAIL_RECEIVED, create_task (board, type, assignee from the run, relative due date, linked deal), move_pipeline, notify; elements/defs/crm.ts create / update for contact, deal (create_lead), company; workflows plan-gated',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/crm/types.ts TaskType (TODO, CALL, EMAIL, MEETING, FOLLOW_UP, TICKET) + TaskTypeDefinition (organization\'s own task types) + crm/settings/tabs/TaskTypesTab.tsx; multi-pipeline boards (crm-module rules, stores/pipelines.ts)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/settings/integrations/CalendarPage.tsx ("Sync tasks with your Google Calendar. Two-way sync") + ai-backoffice-api src/modules/crm/google-calendar/*',
    'ai-backoffice-api apps/backoffice-api/src/modules/crm/lead/facebook-lead-ads.service.ts (lead form submission -> contact found or made by email then phone, a deal with every answer, LEAD_FORM webhooks) + ai-workspace modules/agents/apps/ConnectAppsPage.tsx "Lead forms" toggle',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/apps/ConnectAppsPage.tsx ("Reply to Instagram comments", "Reply to Facebook comments") + ai-backoffice-api apps/chat-api/src/_v2/channels/instagram/messenger.ts (comment replies, public or private)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/context/DocumentContextSection.tsx (.pdf .doc .docx .txt .csv .xlsx .xls …), WebContextSection.tsx (include pages under these addresses; keep in sync plan-gated), CustomAnswersSection.tsx (exact answers), FeaturesPage "What it answers: Only what it has learned"',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/voice/VoicePage.tsx + voiceCatalog.ts (14 languages; greet returning callers by name; transfer to your team; callback requests) and ai-backoffice-api voice.service.ts createCallbackTask, resolvePersona (first name); telephony campaigns OUTREACH | SURVEY | PROMOTION (as verified in call-center.ts)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/inbox/RulesPage.tsx (sender / subject / mailbox -> assign, department, tag)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/actions/ActionsPage.tsx + CurlForm.tsx (assistant actions: HTTP calls built from a cURL command, secrets)',
    'Known channel facts (BRIEF2.md, checked 2026-11-25): website widget, WhatsApp, Telegram (bot or user account), Instagram, Messenger, Slack, Discord, inside amoCRM and Kommo; phone over SIP in 14 languages',
    'ai-fineguide-landing public/llms.txt (CRM: custom fields, import from CSV / TSV / XLS / XLSX, duplicate review where a person confirms every merge, two-way Google Calendar sync; credits: AI reply 1 credit, CRM uses none, AI phone calls 10 credits a minute; free plan 200 credits) + src/i18n/{ro,ru}.ts terms (lead-uri, oportunitate, sarcină; лиды, сделка, задача)',
  ],
  copy: {
    en: {
      meta: {
        title: 'CRM for Real Estate Agencies with an AI Chatbot | Fineguide',
        description:
          'CRM for real estate agencies with an AI assistant for realtors that answers enquiries on WhatsApp, Instagram and your site, asks budget and area, saves leads.',
      },
      hero: {
        eyebrow: 'Fineguide for real estate',
        title: 'Every property enquiry,',
        titleAccent: ' answered and in your CRM.',
        subtitle:
          'An AI assistant answers buyers and tenants on your website, WhatsApp, Instagram, Messenger and the phone, asks the questions an agent would ask, and puts the answers on the contact in your CRM with a follow-up task for the agent.',
      },
      definition: {
        heading: 'What is a CRM for real estate agencies?',
        body:
          "A CRM for real estate agencies is the system an agency uses to keep every buyer, seller and tenant enquiry, follow each deal from the first message to the signed contract, and plan its agents' viewings and calls. Fineguide's real estate CRM comes with an AI assistant that answers enquiries on the website chat, WhatsApp, Telegram, Instagram, Messenger and the phone, asks for the details you define, such as budget, area and timing, and writes them into fields on the CRM contact. Deals move through your own pipeline stages, and tasks such as viewings sync both ways with Google Calendar.",
      },
      capabilities: {
        eyebrow: 'How agencies use it',
        heading: 'How real estate teams use Fineguide.',
        body:
          'Four everyday workflows, then the parts of the platform behind them. Lead collection, keeping your listings in sync and workflows come with paid plans.',
        items: [
          {
            term: 'A late WhatsApp enquiry becomes a viewing',
            desc: 'A buyer writes at 22:00 about a two-room flat. The assistant answers from your listings, asks for deal type, budget, area and a phone number, and saves the contact with those fields filled in and a follow-up task on your board. On paid plans, a workflow then opens a deal and a Viewing task for the agent, due the next day.',
          },
          {
            term: 'Ad leads land in the pipeline',
            desc: 'Every Facebook Lead Ads form sent from your page becomes a CRM deal with all the answers, and the person becomes a contact. The same assistant replies to Messenger and Instagram messages and to comments under your posts, so people who click an ad get an answer, not a wait.',
          },
          {
            term: 'Calls to the office are answered',
            desc: 'An AI voice agent answers your agency number over SIP in 14 languages, greets returning callers by first name, transfers the caller to the office on request and saves callback requests as CRM tasks. An outbound campaign can call back buyers who went quiet.',
          },
          {
            term: 'Listing-site emails reach the right agent',
            desc: 'Connect the agency mailbox to the shared inbox, and rules assign, route and tag new email by sender or subject, for example every enquiry from a listing site to the lettings team. Each sender becomes a contact, and an agent opens a follow-up task from the thread.',
          },
          {
            term: 'Answers from your listings',
            desc: 'Add your listings pages, area guides and fee pages, upload a spreadsheet of current listings or a PDF, and write exact answers for commission or deposits. The assistant can stay strictly on what it has learned and reply in the visitor’s language.',
          },
          {
            term: 'Your qualifying questions, as fields',
            desc: 'Define the details a lead needs (deal type, budget, area, rooms, move-in date) as text, numbers, yes or no, or choices from a list. You choose how early the assistant asks, and each answer fills the field of the same name on the CRM contact.',
          },
          {
            term: 'Pipelines and viewings for agencies',
            desc: 'Run separate pipelines for sales and lettings with your own stages, and add your own task types such as Viewing or Valuation. Tasks are assigned to agents, shown on a board or a calendar, and sync both ways with Google Calendar.',
          },
          {
            term: 'One buyer, one record',
            desc: 'A buyer who writes on Instagram and later on WhatsApp is one contact with both channels and one history. Duplicate review suggests merges, and a person confirms each one.',
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your listings to a working pipeline.',
        body: 'An agency can be answering enquiries the same day and add automation as it goes.',
        items: [
          'Create an assistant and give it your listings pages, area guides, fee pages and a listings spreadsheet.',
          'Add your qualifying questions as fields and turn on lead collection.',
          'Connect your website chat, WhatsApp, Instagram and Facebook page, and your agency phone number if you want calls answered.',
          'Set up your pipelines, a Viewing task type and Google Calendar sync for each agent.',
          'Add a workflow that turns each qualified lead into a deal and a viewing task, and read the results in analytics.',
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Channels',
            desc: 'Website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, inside amoCRM and Kommo, email over IMAP and SMTP, and phone calls over SIP.',
          },
          {
            term: 'Languages',
            desc: 'The chat assistant answers in the visitor’s language. AI phone calls run in 14 languages.',
          },
          {
            term: 'CRM',
            desc: 'Contacts, companies, deals in pipelines, tasks with your own types, custom fields, tags, import from CSV or Excel, and two-way Google Calendar sync.',
          },
          {
            term: 'Integrations',
            desc: 'Facebook Lead Ads, Google Calendar, amoCRM, Kommo, n8n, and assistant actions that call your own systems over HTTP.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits. Lead collection, workflows and keeping your listings pages in sync come with paid plans, from the Starter plan.',
          },
          {
            term: 'Credits',
            desc: 'An AI reply is 1 credit and an AI phone call 10 credits a minute. The CRM, tasks and reading or sending email use none.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind an agency’s pipeline',
        links: [
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, deals, pipelines and tasks behind every enquiry.',
          },
          {
            path: '/ai-assistants',
            label: 'AI Assistants',
            desc: 'Assistants that answer on your website, WhatsApp, Instagram and Messenger.',
          },
          {
            path: '/voice-ai',
            label: 'Voice AI',
            desc: 'An AI voice agent on your agency number, in 14 languages.',
          },
          {
            path: '/automations',
            label: 'Automations',
            desc: 'Workflows that turn a qualified lead into a deal and a viewing task.',
          },
          {
            path: '/compare/kommo-amocrm/',
            label: 'Fineguide vs Kommo / amoCRM',
            desc: 'An AI-first CRM next to the messenger CRM many agencies use.',
          },
          {
            path: '/compare/hubspot/',
            label: 'Fineguide vs HubSpot',
            desc: 'CRM with built-in AI assistants, side by side with HubSpot.',
          },
        ],
      },
      faq: {
        heading: 'Real estate CRM and chatbot: common questions',
        items: [
          {
            q: 'What is the best CRM for a small real estate agency?',
            a: 'One that captures every enquiry from every channel, keeps buyers and their deals in one place and reminds agents of viewings. Fineguide does this with an AI assistant built in, and you can start on the free plan.',
          },
          {
            q: 'Can a real estate chatbot qualify leads?',
            a: 'Yes. You list the details a lead needs, such as budget, area and timing, and the assistant asks for them in the conversation. Once it has them and a phone or email, it saves the contact with those fields filled in, on paid plans.',
          },
          {
            q: 'Can an AI assistant answer property enquiries on WhatsApp?',
            a: 'Yes. Connect your WhatsApp number and the same assistant answers there as on your website, from your listings and pages, at any hour. A buyer who also writes on Instagram stays one contact.',
          },
          {
            q: 'Can it book property viewings?',
            a: 'The assistant collects the request, and a workflow creates a Viewing task for the agent that syncs to Google Calendar. To book straight into your own booking system, an assistant action can call that system’s API.',
          },
          {
            q: 'Does it work with amoCRM or Kommo?',
            a: 'Yes. The assistant can answer chats inside amoCRM and Kommo, so an agency that already works there keeps its CRM and adds AI answers.',
          },
          {
            q: 'Can an AI answer calls to our agency number?',
            a: 'Yes. Connect your number over SIP and an AI voice agent answers in 14 languages, transfers the caller to your office when they ask for a person and saves callback requests as tasks.',
          },
          {
            q: 'Is there a free plan for real estate agencies?',
            a: 'Yes. Start on the free plan with 200 credits and no card, with the AI assistant, the CRM and the shared inbox. Lead collection and workflows come with paid plans, from the Starter plan.',
          },
        ],
      },
      closing: {
        heading: 'Answer tonight’s enquiries tonight.',
        body: 'Give the assistant your listings pages, connect WhatsApp and ask it about a flat as a buyer would. Or book a 30-minute demo and see an enquiry become a viewing in your own pipeline.',
      },
    },

    ro: {
      meta: {
        title: 'CRM imobiliare cu asistent AI pentru agenții | Fineguide',
        description:
          'CRM imobiliare cu asistent AI: răspunde la cereri pe WhatsApp, Instagram și pe site, întreabă de buget și zonă și salvează lead-ul cu sarcina pentru agent.',
      },
      hero: {
        eyebrow: 'Fineguide pentru imobiliare',
        title: 'Fiecare cerere pentru o proprietate,',
        titleAccent: ' preluată și pusă în CRM.',
        subtitle:
          'Asistentul AI răspunde cumpărătorilor și chiriașilor pe site, pe WhatsApp, Instagram, Messenger și la telefon, pune întrebările pe care le-ar pune un agent și scrie răspunsurile pe contactul din CRM, cu o sarcină de follow-up pentru agent.',
      },
      definition: {
        heading: 'Ce este un CRM pentru imobiliare?',
        body:
          'Un CRM pentru imobiliare este sistemul în care o agenție păstrează fiecare cerere de la cumpărători, vânzători și chiriași, urmărește fiecare tranzacție de la primul mesaj până la contract și planifică vizionările și apelurile agenților. CRM-ul imobiliar de la Fineguide vine cu un asistent AI care răspunde la cereri în chatul de pe site, pe WhatsApp, Telegram, Instagram, Messenger și la telefon, întreabă de detaliile alese de tine, cum ar fi bugetul, zona și termenul, și le scrie în câmpurile contactului din CRM. Oportunitățile trec prin etapele propriei tale pâlnii de vânzări, iar sarcini precum vizionările se sincronizează în ambele sensuri cu Google Calendar.',
      },
      capabilities: {
        eyebrow: 'Cum îl folosesc agențiile',
        heading: 'Cum lucrează echipele imobiliare cu Fineguide.',
        body:
          'Patru situații de zi cu zi, apoi părțile platformei din spatele lor. Colectarea de lead-uri, sincronizarea anunțurilor și workflow-urile vin cu planurile plătite.',
        items: [
          {
            term: 'O cerere târzie pe WhatsApp devine vizionare',
            desc: 'Un cumpărător scrie la 22:00 despre un apartament cu două camere. Asistentul răspunde din anunțurile tale, întreabă de tipul tranzacției, buget, zonă și un număr de telefon și salvează contactul cu aceste câmpuri completate, plus o sarcină de follow-up pe tablă. Pe planurile plătite, un workflow deschide apoi o oportunitate și o sarcină de tip Vizionare pentru agent, cu termen a doua zi.',
          },
          {
            term: 'Lead-urile din reclame ajung în pâlnie',
            desc: 'Fiecare formular Facebook Lead Ads trimis de pe pagina ta devine o oportunitate în CRM, cu toate răspunsurile, iar persoana devine contact. Același asistent răspunde la mesajele din Messenger și Instagram și la comentariile de sub postări, așa că cine dă clic pe o reclamă primește un răspuns, nu o așteptare.',
          },
          {
            term: 'Apelurile către birou primesc răspuns',
            desc: 'Un agent vocal AI răspunde la numărul agenției prin SIP, în 14 limbi, îi salută pe prenume pe cei care revin, transferă apelul la birou la cerere și salvează cererile de revenire ca sarcini în CRM. O campanie de apeluri poate suna cumpărătorii care nu au mai scris.',
          },
          {
            term: 'Emailurile de pe site-urile de anunțuri ajung la agentul potrivit',
            desc: 'Conectezi căsuța agenției la inboxul comun, iar regulile atribuie, direcționează și etichetează emailurile noi după expeditor sau subiect, de exemplu toate cererile de pe un site de anunțuri către echipa de închirieri. Fiecare expeditor devine contact, iar agentul deschide din conversație o sarcină de follow-up.',
          },
          {
            term: 'Răspunsuri din anunțurile tale',
            desc: 'Adaugi paginile cu anunțuri, ghidurile de cartier și paginile cu comisioane, încarci un tabel cu ofertele actuale sau un PDF și scrii răspunsuri exacte despre comision sau avans. Asistentul poate rămâne strict la ce a învățat și răspunde în limba vizitatorului.',
          },
          {
            term: 'Întrebările de calificare, ca câmpuri',
            desc: 'Definești detaliile de care are nevoie un lead (tipul tranzacției, bugetul, zona, numărul de camere, data mutării) ca text, număr, da sau nu ori opțiuni dintr-o listă. Alegi cât de devreme întreabă asistentul, iar fiecare răspuns completează câmpul cu același nume pe contactul din CRM.',
          },
          {
            term: 'Pâlnii și vizionări pentru agenții',
            desc: 'Ții pâlnii separate pentru vânzări și închirieri, cu etapele tale, și adaugi propriile tipuri de sarcini, cum ar fi Vizionare sau Evaluare. Sarcinile se atribuie agenților, apar pe tablă sau în calendar și se sincronizează în ambele sensuri cu Google Calendar.',
          },
          {
            term: 'Un cumpărător, o singură fișă',
            desc: 'Cine scrie pe Instagram și mai târziu pe WhatsApp rămâne un singur contact, cu ambele canale și un singur istoric. Verificarea duplicatelor propune unificări, iar un om confirmă fiecare unificare.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la anunțuri la o pâlnie de vânzări care merge.',
        body: 'O agenție poate răspunde la cereri chiar din prima zi și adaugă automatizări pe parcurs.',
        items: [
          'Creezi un asistent și îi dai paginile cu anunțuri, ghidurile de cartier, paginile cu comisioane și un tabel cu ofertele.',
          'Adaugi întrebările de calificare ca câmpuri și activezi colectarea de lead-uri.',
          'Conectezi chatul de pe site, WhatsApp, Instagram și pagina de Facebook, plus numărul de telefon al agenției, dacă vrei să primească răspuns și apelurile.',
          'Setezi pâlniile, un tip de sarcină Vizionare și sincronizarea cu Google Calendar pentru fiecare agent.',
          'Adaugi un workflow care transformă fiecare lead calificat într-o oportunitate și o sarcină de vizionare și urmărești rezultatele în analize.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Canale',
            desc: 'Chatul de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, în amoCRM și Kommo, emailul prin IMAP și SMTP și apelurile telefonice prin SIP.',
          },
          {
            term: 'Limbi',
            desc: 'Asistentul din chat răspunde în limba vizitatorului. Apelurile AI se fac în 14 limbi.',
          },
          {
            term: 'CRM',
            desc: 'Contacte, companii, oportunități în pâlnii, sarcini cu tipurile tale, câmpuri personalizate, etichete, import din CSV sau Excel și sincronizare în ambele sensuri cu Google Calendar.',
          },
          {
            term: 'Integrări',
            desc: 'Facebook Lead Ads, Google Calendar, amoCRM, Kommo, n8n și acțiuni ale asistentului care apelează propriile tale sisteme prin HTTP.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite. Colectarea de lead-uri, workflow-urile și sincronizarea paginilor cu anunțuri vin cu planurile plătite, de la planul Starter.',
          },
          {
            term: 'Credite',
            desc: 'Un răspuns AI costă 1 credit, iar un apel AI 10 credite pe minut. CRM-ul, sarcinile și citirea sau trimiterea emailurilor nu consumă credite.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Modulele din spatele pâlniei unei agenții',
        links: [
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, oportunități, pâlnii și sarcini în spatele fiecărei cereri.',
          },
          {
            path: '/ai-assistants',
            label: 'Asistenți AI',
            desc: 'Asistenți care răspund pe site, pe WhatsApp, Instagram și Messenger.',
          },
          {
            path: '/voice-ai',
            label: 'Voice AI',
            desc: 'Un agent vocal AI pe numărul agenției, în 14 limbi.',
          },
          {
            path: '/automations',
            label: 'Automatizări',
            desc: 'Workflow-uri care transformă un lead calificat într-o oportunitate și o sarcină de vizionare.',
          },
          {
            path: '/compare/kommo-amocrm/',
            label: 'Fineguide vs Kommo / amoCRM',
            desc: 'Un CRM cu AI, alături de CRM-ul pentru mesagerie folosit de multe agenții.',
          },
          {
            path: '/compare/hubspot/',
            label: 'Fineguide vs HubSpot',
            desc: 'CRM cu asistenți AI integrați, comparat cu HubSpot.',
          },
        ],
      },
      faq: {
        heading: 'CRM imobiliare și chatbot: întrebări frecvente',
        items: [
          {
            q: 'Ce CRM imobiliare să aleg pentru o agenție mică?',
            a: 'Unul care preia fiecare cerere din fiecare canal, ține cumpărătorii și tranzacțiile lor într-un singur loc și le amintește agenților de vizionări. Fineguide face asta cu un asistent AI inclus, iar tu poți începe pe planul gratuit.',
          },
          {
            q: 'Poate un chatbot imobiliar să califice lead-uri?',
            a: 'Da. Alegi detaliile de care ai nevoie, cum ar fi bugetul, zona și termenul, iar asistentul le cere în conversație. Când le are, plus un telefon sau un email, salvează contactul cu aceste câmpuri completate, pe planurile plătite.',
          },
          {
            q: 'Poate un asistent AI să răspundă la cereri imobiliare pe WhatsApp?',
            a: 'Da. Conectezi numărul de WhatsApp, iar același asistent răspunde acolo ca pe site, din anunțurile și paginile tale, la orice oră. Un cumpărător care scrie și pe Instagram rămâne un singur contact.',
          },
          {
            q: 'Poate programa vizionări?',
            a: 'Asistentul preia cererea, iar un workflow creează pentru agent o sarcină de tip Vizionare, sincronizată cu Google Calendar. Pentru programări direct în sistemul tău de rezervări, o acțiune a asistentului poate apela API-ul acelui sistem.',
          },
          {
            q: 'Funcționează cu amoCRM sau Kommo?',
            a: 'Da. Asistentul poate răspunde la conversații direct în amoCRM și Kommo, așa că o agenție care lucrează deja acolo își păstrează CRM-ul și adaugă răspunsuri AI.',
          },
          {
            q: 'Poate AI-ul să răspundă la apelurile către agenție?',
            a: 'Da. Conectezi numărul prin SIP, iar un agent vocal AI răspunde în 14 limbi, transferă apelul la birou când cineva cere un om și salvează cererile de revenire ca sarcini.',
          },
          {
            q: 'Există un plan gratuit pentru agenții imobiliare?',
            a: 'Da. Începi pe planul gratuit, cu 200 de credite și fără card, cu asistentul AI, CRM-ul și inboxul comun. Colectarea de lead-uri și workflow-urile vin cu planurile plătite, de la planul Starter.',
          },
        ],
      },
      closing: {
        heading: 'Răspunde chiar în seara asta la cererile din seara asta.',
        body: 'Dă-i asistentului paginile cu anunțuri, conectează WhatsApp și întreabă-l despre un apartament, ca un cumpărător. Sau programează un demo de 30 de minute și vezi cum o cerere devine vizionare în propria ta pâlnie.',
      },
    },

    ru: {
      meta: {
        title: 'CRM для агентства недвижимости с ИИ-ассистентом | Fineguide',
        description:
          'CRM для агентства недвижимости с ИИ-ассистентом: отвечает на заявки в WhatsApp, Instagram и на сайте, спрашивает бюджет и район и сохраняет лид в CRM.',
      },
      hero: {
        eyebrow: 'Fineguide для недвижимости',
        title: 'Каждая заявка по объекту',
        titleAccent: ' получает ответ и попадает в CRM.',
        subtitle:
          'ИИ-ассистент отвечает покупателям и арендаторам на сайте, в WhatsApp, Instagram, Messenger и по телефону, задаёт те же вопросы, что задал бы агент, и записывает ответы в карточку контакта в CRM вместе с задачей для агента.',
      },
      definition: {
        heading: 'Что такое CRM для агентства недвижимости?',
        body:
          'CRM для агентства недвижимости представляет собой систему, в которой агентство хранит все заявки покупателей, продавцов и арендаторов, ведёт каждую сделку от первого сообщения до договора и планирует показы и звонки агентов. CRM для недвижимости от Fineguide включает ИИ-ассистента, который отвечает на заявки в чате на сайте, в WhatsApp, Telegram, Instagram, Messenger и по телефону, спрашивает то, что вы задали, например бюджет, район и сроки, и записывает ответы в поля контакта в CRM. Сделки проходят по этапам вашей собственной воронки, а задачи, например показы, синхронизируются с Google Календарём в обе стороны.',
      },
      capabilities: {
        eyebrow: 'Как работают агентства',
        heading: 'Как агентства недвижимости работают с Fineguide.',
        body:
          'Четыре типичных сценария, а затем то, на чём они построены. Сбор лидов, синхронизация страниц с объектами и сценарии автоматизации входят в платные тарифы.',
        items: [
          {
            term: 'Поздняя заявка в WhatsApp становится показом',
            desc: 'Покупатель пишет в 22:00 о двухкомнатной квартире. Ассистент отвечает по вашим объектам, спрашивает тип сделки, бюджет, район и телефон и сохраняет контакт с заполненными полями и задачей на повторный контакт на доске. На платных тарифах сценарий затем создаёт сделку и задачу «Показ» для агента на следующий день.',
          },
          {
            term: 'Лиды из рекламы сразу в воронке',
            desc: 'Каждая заявка из формы Facebook Lead Ads с вашей страницы становится сделкой в CRM со всеми ответами, а человек становится контактом. Тот же ассистент отвечает на сообщения в Messenger и Instagram и на комментарии под постами, поэтому тот, кто кликнул по рекламе, сразу получает ответ.',
          },
          {
            term: 'Звонки в офис не остаются без ответа',
            desc: 'Голосовой ИИ-агент отвечает на номер агентства по SIP на 14 языках, обращается к постоянным клиентам по имени, по просьбе переводит звонок в офис и сохраняет просьбы перезвонить как задачи в CRM. Исходящая кампания может перезвонить покупателям, которые пропали.',
          },
          {
            term: 'Письма с сайтов объявлений попадают к нужному агенту',
            desc: 'Подключите почту агентства к общему ящику входящих, и правила будут назначать, направлять и помечать новые письма по отправителю или теме, например все заявки с сайта объявлений отделу аренды. Каждый отправитель становится контактом, а агент создаёт задачу прямо из переписки.',
          },
          {
            term: 'Ответы по вашим объектам',
            desc: 'Добавьте страницы с объектами, описания районов и страницы с условиями, загрузите таблицу актуальных объектов или PDF и задайте точные ответы о комиссии и задатке. Ассистент может отвечать только по тому, чему обучен, и отвечает на языке посетителя.',
          },
          {
            term: 'Ваши вопросы для квалификации как поля',
            desc: 'Задайте, что нужно знать о лиде (тип сделки, бюджет, район, число комнат, дата заезда): текст, число, да или нет или варианты из списка. Вы выбираете, как рано ассистент спрашивает, а каждый ответ заполняет одноимённое поле в карточке контакта.',
          },
          {
            term: 'Воронки и показы для агентства',
            desc: 'Ведите отдельные воронки для продажи и аренды со своими этапами и добавьте свои типы задач, например «Показ» или «Оценка». Задачи назначаются агентам, видны на доске или в календаре и синхронизируются с Google Календарём в обе стороны.',
          },
          {
            term: 'Один покупатель, одна карточка',
            desc: 'Покупатель, который написал в Instagram, а потом в WhatsApp, остаётся одним контактом с обоими каналами и общей историей. Проверка дублей предлагает объединения, а человек подтверждает каждое.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От объектов к работающей воронке.',
        body: 'Агентство может отвечать на заявки уже в первый день и добавлять автоматизацию постепенно.',
        items: [
          'Создайте ассистента и дайте ему страницы с объектами, описания районов, условия и таблицу объектов.',
          'Добавьте вопросы для квалификации как поля и включите сбор лидов.',
          'Подключите чат на сайте, WhatsApp, Instagram и страницу Facebook, а также номер агентства, если нужно отвечать на звонки.',
          'Настройте воронки, тип задачи «Показ» и синхронизацию с Google Календарём для каждого агента.',
          'Добавьте сценарий, который превращает каждый квалифицированный лид в сделку и задачу на показ, и следите за результатами в аналитике.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Каналы',
            desc: 'Чат на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, внутри amoCRM и Kommo, почта по IMAP и SMTP и телефонные звонки по SIP.',
          },
          {
            term: 'Языки',
            desc: 'Ассистент в чате отвечает на языке посетителя. ИИ-звонки работают на 14 языках.',
          },
          {
            term: 'CRM',
            desc: 'Контакты, компании, сделки в воронках, задачи с вашими типами, дополнительные поля, теги, импорт из CSV или Excel и двусторонняя синхронизация с Google Календарём.',
          },
          {
            term: 'Интеграции',
            desc: 'Facebook Lead Ads, Google Календарь, amoCRM, Kommo, n8n и действия ассистента, которые обращаются к вашим системам по HTTP.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа: 200 кредитов. Сбор лидов, сценарии и синхронизация страниц с объектами входят в платные тарифы, начиная со Starter.',
          },
          {
            term: 'Кредиты',
            desc: 'ИИ-ответ стоит 1 кредит, ИИ-звонок 10 кредитов в минуту. CRM, задачи, чтение и отправка писем кредитов не расходуют.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Модули, на которых работает воронка агентства',
        links: [
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, сделки, воронки и задачи за каждой заявкой.',
          },
          {
            path: '/ai-assistants',
            label: 'ИИ-ассистенты',
            desc: 'Ассистенты, которые отвечают на сайте, в WhatsApp, Instagram и Messenger.',
          },
          {
            path: '/voice-ai',
            label: 'Голосовой ИИ',
            desc: 'Голосовой ИИ-агент на номере агентства, на 14 языках.',
          },
          {
            path: '/automations',
            label: 'Автоматизации',
            desc: 'Сценарии, которые превращают квалифицированный лид в сделку и задачу на показ.',
          },
          {
            path: '/compare/kommo-amocrm/',
            label: 'Fineguide или Kommo / amoCRM',
            desc: 'CRM с ИИ рядом с CRM для мессенджеров, которой пользуются многие агентства.',
          },
          {
            path: '/compare/hubspot/',
            label: 'Fineguide или HubSpot',
            desc: 'CRM со встроенными ИИ-ассистентами в сравнении с HubSpot.',
          },
        ],
      },
      faq: {
        heading: 'CRM и чат-бот для недвижимости: частые вопросы',
        items: [
          {
            q: 'Какую CRM выбрать для небольшого агентства недвижимости?',
            a: 'Такую, которая принимает заявки из всех каналов, хранит покупателей и их сделки в одном месте и напоминает агентам о показах. Fineguide делает это со встроенным ИИ-ассистентом, а начать можно с бесплатного тарифа.',
          },
          {
            q: 'Может ли чат-бот для недвижимости квалифицировать лиды?',
            a: 'Да. Вы перечисляете, что нужно знать, например бюджет, район и сроки, и ассистент спрашивает это в разговоре. Когда ответы и телефон или email получены, он сохраняет контакт с заполненными полями (на платных тарифах).',
          },
          {
            q: 'Может ли ИИ-ассистент отвечать на заявки по недвижимости в WhatsApp?',
            a: 'Да. Подключите номер WhatsApp, и тот же ассистент будет отвечать там так же, как на сайте, по вашим объектам и страницам, в любое время. Покупатель, который пишет и в Instagram, остаётся одним контактом.',
          },
          {
            q: 'Может ли он записывать на показ?',
            a: 'Ассистент принимает запрос, а сценарий создаёт для агента задачу «Показ», которая синхронизируется с Google Календарём. Чтобы записывать сразу в вашу систему бронирования, действие ассистента может обратиться к её API.',
          },
          {
            q: 'Работает ли это с amoCRM или Kommo?',
            a: 'Да. Ассистент может отвечать в чатах прямо внутри amoCRM и Kommo, поэтому агентство, которое уже работает там, сохраняет свою CRM и добавляет ИИ-ответы.',
          },
          {
            q: 'Может ли ИИ отвечать на звонки на номер агентства?',
            a: 'Да. Подключите номер по SIP, и голосовой ИИ-агент ответит на 14 языках, переведёт звонок в офис, если клиент попросит человека, и сохранит просьбы перезвонить как задачи.',
          },
          {
            q: 'Есть ли бесплатный тариф для агентств недвижимости?',
            a: 'Да. Начните с бесплатного тарифа: 200 кредитов, карта не нужна, с ИИ-ассистентом, CRM и общим ящиком входящих. Сбор лидов и сценарии входят в платные тарифы, начиная со Starter.',
          },
        ],
      },
      closing: {
        heading: 'Отвечайте на вечерние заявки в тот же вечер.',
        body: 'Дайте ассистенту страницы с объектами, подключите WhatsApp и спросите его о квартире, как спросил бы покупатель. Или запишитесь на 30-минутное демо и посмотрите, как заявка становится показом в вашей воронке.',
      },
    },
  },
};

export default solution;
