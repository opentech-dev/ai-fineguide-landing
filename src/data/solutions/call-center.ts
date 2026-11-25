import type { Solution } from './types';

const solution: Solution = {
  slug: 'call-center',
  image: 'agent-call.jpg',
  imageAlt: {
    en: 'A call center agent in a headset laughing with a caller, colleagues working at their desks behind her',
    ro: 'O operatoare de call center cu căști râde în timpul unui apel, iar colegii lucrează la birourile din spate',
    ru: 'Оператор колл-центра в гарнитуре смеётся во время разговора, за ней работают коллеги',
  },
  appName: 'Fineguide Call Center',
  checked: '2026-11-25',
  reading: ['/blog/call-center-automation-with-ai/', '/blog/five9-talkdesk-callminer-alternative/', '/blog/connect-ai-voice-agent-sip-pbx/', '/blog/ai-outbound-call-campaigns/', '/blog/call-center-qa-checklist/', '/blog/coach-call-center-agents-with-voice-qa/'],
  sources: [
    'ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/index.tsx (campaigns, segments, channels, inbound number routing, integrations)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/integrations/pages/IntegrationNewPage.tsx (SIP host, username, password, transport UDP/TCP/TLS)',
    'ai-backoffice-api apps/backoffice-api/src/modules/voice/voice.service.ts listVoiceAccounts (every provider becomes a plain SIP account; per-channel SIP credentials, several lines on one PBX)',
    'ai-gptcrawler voice_ai_go/trunkplane.go (provider is identity only, no signalling effect) and sip.go (udp/tcp/tls transports)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/inbound/pages/NumberRoutingPage.tsx (one number rings one assistant)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/voice/VoicePage.tsx (greet returning callers by name, answering hours: message + callback / let it ring / forward, transfer to team number any time or only during team hours, take a callback request)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/agents/voice/voiceCatalog.ts LANGUAGES (14 languages)',
    'ai-backoffice-api apps/backoffice-api/src/modules/voice/voice.service.ts lookupCallerIdentity + resolvePersona (first-name greeting from CRM contact phones), applyWorkingHours, createCallbackTask (task on the default CRM board with phone, name, request)',
    'ai-gptcrawler voice_ai_go/handoff.go (transfer_to_human on inbound calls, optional team hours; request_callback)',
    'ai-backoffice-api apps/backoffice-api/src/modules/voice/voice.service.ts dispatchTranscript + call.ended turns (transcript saved in conversation history)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/types.ts CampaignType OUTREACH | SURVEY | PROMOTION, CampaignRetryConfig, CampaignSchedule.week',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/campaigns/components/wizard/Step6Concurrency.tsx (calls at once, capped by the line)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/campaigns/components/page/TestCallForm.tsx (test call)',
    'ai-backoffice-api apps/backoffice-api/src/modules/telephony/segments/segment.dto.ts (segments from CSV, CRM contacts, tags)',
    'ai-backoffice-api apps/backoffice-api/src/modules/campaigns/campaign-import.service.ts (CSV rows matched to CRM contacts by phone or email, new ones created)',
    'ai-backoffice-api apps/backoffice-api/src/modules/campaigns/campaign-dispatcher.service.ts (each campaign contact linked to its call transcript)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/telephony/campaigns/components/ReportExportMenu.tsx + ai-backoffice-api src/modules/export/providers/{survey,promotion}-export.provider.ts (CSV / PDF)',
    'ai-backoffice-api apps/backoffice-api/src/pricing/pricing-config.ts VOICE_CREDITS_PER_MIN (qa 12, aiGoogle 10) + voice-billing.service.ts (answeredAt, MINIMUM_BILLABLE_SECONDS 60)',
    'ai-backoffice-api apps/backoffice-api/src/modules/voice-qa/services/voice-qa-evaluation.service.ts (transcribe-only = half)',
    'ai-backoffice-api apps/backoffice-api/src/modules/voice-qa/controllers/evaluation.controller.ts (upload limit 50 MB)',
    'ai-backoffice-api prisma/schema.prisma VoiceQaIntegrationType MOLDCELL | ANDROID | CUSTOM (connected PBX and Android recorder)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/voiceqa/utils/available-languages.ts (30 report languages)',
    'ai-backoffice-frontend apps/ai-workspace/src/modules/voiceqa (departments, rules, reports by department / agent / rule)',
    'ai-fineguide-landing src/i18n/en.ts voiceAiPage, campaignsPage, voiceQaPage (verified site wording reused)',
  ],
  copy: {
    en: {
      meta: {
        title: 'Call Center Software with AI Voice Agents | Fineguide',
        description:
          'Call center software with AI voice agents on your own numbers: inbound calls, outbound campaigns, transfer to a person, callbacks as CRM tasks and call scoring.',
      },
      hero: {
        eyebrow: 'Call center software',
        title: 'Your call center,',
        titleAccent: ' on one platform.',
        subtitle:
          'AI voice agents answer and place calls on your own numbers, your team takes over when a caller asks for a person, and every call leaves a transcript, a task or a score.',
      },
      definition: {
        heading: 'What is call center software?',
        body:
          "Call center software is the system a business uses to answer and place customer phone calls, pass them to a person and review what was said. Fineguide's AI call center software puts voice agents on your own phone numbers over SIP for inbound calls and outbound call campaigns in 14 languages, transfers callers to your team on request, saves callback requests as CRM tasks and keeps every AI call as a transcript. Voice QA then scores recorded calls against each department's own rules, with reports in 30 languages.",
      },
      capabilities: {
        eyebrow: 'What it does',
        heading: 'Everything a call center runs on, in one place.',
        body:
          'Inbound lines, outbound campaigns, the customer record and quality review share one platform, so nothing is copied from one tool to another.',
        items: [
          {
            term: 'Your own numbers over SIP',
            desc: 'Connect your carrier or office PBX with a standard SIP account or SIP trunk and add each line as a channel. Several lines can share one PBX, and each number rings the assistant you give it to.',
          },
          {
            term: 'AI voice agents',
            desc: 'The assistants you run on chat answer inbound calls and call out in campaigns, in 14 languages, replying in the language the caller speaks. They use your knowledge base and custom actions during the call, and callers can interrupt them as they would a person.',
          },
          {
            term: 'Callers recognised from the CRM',
            desc: 'Turn on greeting by name, and a caller whose number is saved in Contacts is welcomed by their first name.',
          },
          {
            term: 'Hours and transfer to a person',
            desc: 'Outside your answering hours a call can ring out, be forwarded to another number, or hear a message that takes a callback request. A caller who asks for a human is put through to your team number, at any time or only during team hours.',
          },
          {
            term: 'Callbacks as CRM tasks',
            desc: "Callback requests land on your CRM task board with the caller's number, their name and a note of what they need.",
          },
          {
            term: 'Outbound call campaigns',
            desc: 'Outreach, survey and promotion campaigns over audiences from a CSV, CRM contacts or tags, saved as segments. Set how many calls run at once, retries on no answer or busy, and calling hours for each day of the week, then place a test call to your own number first.',
          },
          {
            term: 'Transcripts and campaign reports',
            desc: "Every AI call is saved as a transcript in the conversation history, and each campaign contact links to its call's transcript. Survey and promotion reports download as CSV or PDF.",
          },
          {
            term: 'Call scoring with Voice QA',
            desc: "Recordings you upload, post through the API or receive from a connected PBX are transcribed and scored against the department's rules, with quotes from the call and a suggestion for each rule. Dashboards by department, agent and rule.",
          },
        ],
      },
      steps: {
        eyebrow: 'How to start',
        heading: 'From your first number to a running call center.',
        body: 'Most of the setup is choices you make once per number and once per campaign.',
        items: [
          'Connect your carrier or PBX with a standard SIP account and add each line as a channel.',
          'Give each number to an assistant and set its languages, answering hours, transfer and callback options.',
          'Build an audience from a CSV, CRM contacts or tags, save it as a segment and place a test call to your own number.',
          'Launch the campaign and follow transcripts, callback tasks and reports as calls end.',
          "Send recorded calls to Voice QA to score them against each department's rules.",
        ],
      },
      facts: {
        eyebrow: 'Facts',
        heading: 'In numbers and names.',
        items: [
          {
            term: 'Languages',
            desc: '14 on AI calls: English, Romanian, Russian, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Arabic, Japanese, Korean and Chinese. Voice QA reports in 30.',
          },
          {
            term: 'Phone systems',
            desc: 'Your carrier or PBX over SIP, on UDP, TCP or TLS. Your numbers and carrier minutes stay with your carrier.',
          },
          {
            term: 'Campaign types',
            desc: '3: outreach, survey and promotion. Survey and promotion reports export to CSV or PDF.',
          },
          {
            term: 'AI calls',
            desc: '10 credits per answered minute, counted from the moment the call is answered, with a one-minute minimum.',
          },
          {
            term: 'Call scoring',
            desc: '12 credits per minute of audio; transcription alone costs half. Recordings arrive by upload (up to 50 MB each), the API, the Fineguide call-recording app for Android or a connected PBX.',
          },
          {
            term: 'Plans',
            desc: 'Start on the free plan with 200 credits and no card. The same credits pay for AI calls, call scoring and chat replies.',
          },
        ],
      },
      related: {
        eyebrow: 'Related',
        heading: 'The modules behind your call center',
        links: [
          {
            path: '/voice-ai',
            label: 'AI Telephony',
            desc: 'AI voice agents on live inbound and outbound calls over your own phone system.',
          },
          {
            path: '/campaigns',
            label: 'Campaigns',
            desc: 'Outbound call campaigns of three kinds: outreach, survey and promotion.',
          },
          {
            path: '/voice-qa',
            label: 'Voice QA',
            desc: 'Transcription and scoring of recorded calls against per-department rules.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacts, companies, deals and tasks behind every caller.',
          },
          {
            path: '/messages',
            label: 'Messages & Inbox',
            desc: 'Chat and email in one team inbox, with routing and handover to a person.',
          },
        ],
      },
      faq: {
        heading: 'Call center software: common questions',
        items: [
          {
            q: 'What is call center software?',
            a: 'Call center software is what a team uses to answer and place customer calls, pass them to a person and review them afterwards. Fineguide adds AI voice agents that take calls themselves, with a CRM and call scoring on the same platform.',
          },
          {
            q: 'Can an AI answer my phone calls in more than one language?',
            a: 'Yes. Fineguide voice agents speak 14 languages, including English, Spanish, French, German and Arabic, and one assistant can reply in whichever of its languages the caller speaks.',
          },
          {
            q: 'Do I need new phone numbers for an AI call center?',
            a: 'No. You connect the carrier or PBX you already use with a standard SIP account, and your numbers stay where they are.',
          },
          {
            q: 'Can the AI transfer a call to a human operator?',
            a: 'Yes, on inbound calls. When a caller asks for a person, the assistant puts them through to your team number; outside team hours it takes a callback request as a CRM task instead.',
          },
          {
            q: 'How does call center automation work for outbound calls?',
            a: 'You create a campaign (outreach, survey or promotion), choose an audience from a CSV, CRM contacts or tags, set calling hours and retries, and place a test call to your own number. The AI agents then dial the list and track the outcome for each contact.',
          },
          {
            q: 'How do I monitor call quality in a call center?',
            a: "With Voice QA, every recording you send is transcribed and scored against your department's rules, with quotes from the call and a suggestion for each rule. Managers see scores by department, agent and rule.",
          },
          {
            q: 'How much does an AI phone call cost?',
            a: 'AI calls use 10 credits per answered minute, with a one-minute minimum, and nothing while the phone rings. Plan and credit prices are on the pricing page.',
          },
        ],
      },
      closing: {
        heading: 'Hear your call center answer.',
        body: 'Connect a number, give it an assistant and call it yourself. Or book a 30-minute demo and see calls, campaigns and Voice QA on your own operation.',
      },
    },

    ro: {
      meta: {
        title: 'Soft call center cu agenți vocali AI | Fineguide',
        description:
          'Program de call center cu agenți vocali AI pe numerele tale: apeluri primite, campanii, transfer la operator, reveniri ca sarcini CRM și evaluarea apelurilor.',
      },
      hero: {
        eyebrow: 'Soft call center',
        title: 'Call center-ul tău,',
        titleAccent: ' pe o singură platformă.',
        subtitle:
          'Agenții vocali AI răspund și sună de pe numerele tale, echipa preia apelul când clientul cere un om, iar fiecare apel lasă în urmă o transcriere, o sarcină sau un scor.',
      },
      definition: {
        heading: 'Ce este un soft de call center?',
        body:
          'Un soft de call center este sistemul prin care o firmă primește și efectuează apeluri cu clienții, le transferă unui om și verifică ce s-a vorbit. Programul de call center Fineguide pune agenți vocali AI pe numerele tale, prin SIP, pentru apeluri primite și campanii de apeluri în 14 limbi, transferă apelanții la echipă la cerere, salvează cererile de revenire ca sarcini în CRM și păstrează fiecare apel AI ca transcriere. Apoi Voice QA evaluează apelurile înregistrate după regulile fiecărui departament, cu rapoarte în 30 de limbi.',
      },
      capabilities: {
        eyebrow: 'Ce face',
        heading: 'Tot ce folosește un call center, într-un singur loc.',
        body:
          'Liniile pentru apeluri primite, campaniile, fișa clientului și controlul calității stau pe aceeași platformă, așa că nimic nu se copiază dintr-un program în altul.',
        items: [
          {
            term: 'Numerele tale, prin SIP',
            desc: 'Conectezi operatorul sau centrala telefonică a biroului printr-un cont SIP standard sau un trunk SIP și adaugi fiecare linie drept canal. Mai multe linii pot folosi aceeași centrală, iar fiecare număr sună la asistentul căruia i l-ai alocat.',
          },
          {
            term: 'Agenți vocali AI',
            desc: 'Asistenții pe care îi ai în chat răspund la apelurile primite și sună în campanii, în 14 limbi, în limba în care vorbește apelantul. În timpul apelului folosesc baza de cunoștințe și acțiunile personalizate, iar apelantul îi poate întrerupe ca pe un om.',
          },
          {
            term: 'Apelanți recunoscuți din CRM',
            desc: 'Activezi salutul pe nume, iar un apelant al cărui număr e salvat în Contacte este întâmpinat pe prenume.',
          },
          {
            term: 'Program și transfer la un om',
            desc: 'În afara programului, apelul poate suna în continuare, poate fi redirecționat către alt număr sau primește un mesaj care preia o cerere de revenire. Un apelant care cere un om este transferat la numărul echipei, oricând sau doar în orele echipei.',
          },
          {
            term: 'Reveniri ca sarcini în CRM',
            desc: 'Cererile de revenire ajung pe tabla de sarcini din CRM, cu numărul apelantului, numele lui și o notă despre ce are nevoie.',
          },
          {
            term: 'Campanii de apeluri',
            desc: 'Campanii de prospectare, sondaj și promoție, pe audiențe din CSV, contacte CRM sau etichete, salvate ca segmente. Alegi câte apeluri rulează simultan, reapelările când nu se răspunde sau e ocupat și orele de apel pentru fiecare zi, apoi faci întâi un apel de test pe numărul tău.',
          },
          {
            term: 'Transcrieri și rapoarte de campanie',
            desc: 'Fiecare apel AI se salvează ca transcriere în istoricul conversațiilor, iar fiecare contact din campanie are legătură spre transcrierea apelului său. Rapoartele de sondaj și promoție se descarcă în CSV sau PDF.',
          },
          {
            term: 'Evaluarea apelurilor cu Voice QA',
            desc: 'Înregistrările încărcate, trimise prin API sau venite de la o centrală conectată sunt transcrise și evaluate după regulile departamentului, cu citate din apel și o sugestie pentru fiecare regulă. Rapoarte pe departament, operator și regulă.',
          },
        ],
      },
      steps: {
        eyebrow: 'Cum începi',
        heading: 'De la primul număr la un call center care merge.',
        body: 'Cea mai mare parte a configurării sunt alegeri pe care le faci o dată pentru fiecare număr și o dată pentru fiecare campanie.',
        items: [
          'Conectezi operatorul sau centrala printr-un cont SIP standard și adaugi fiecare linie drept canal.',
          'Aloci fiecare număr unui asistent și îi setezi limbile, programul, transferul și cererile de revenire.',
          'Construiești o audiență din CSV, contacte CRM sau etichete, o salvezi ca segment și faci un apel de test pe numărul tău.',
          'Pornești campania și urmărești transcrierile, sarcinile de revenire și rapoartele pe măsură ce apelurile se încheie.',
          'Trimiți apelurile înregistrate în Voice QA, ca să fie evaluate după regulile fiecărui departament.',
        ],
      },
      facts: {
        eyebrow: 'Date concrete',
        heading: 'În cifre și nume.',
        items: [
          {
            term: 'Limbi',
            desc: '14 pentru apelurile AI: engleză, română, rusă, spaniolă, franceză, germană, italiană, portugheză, poloneză, turcă, arabă, japoneză, coreeană și chineză. Rapoartele Voice QA, în 30.',
          },
          {
            term: 'Telefonie',
            desc: 'Operatorul sau centrala ta, prin SIP, pe UDP, TCP sau TLS. Numerele și minutele de convorbire rămân la operatorul tău.',
          },
          {
            term: 'Tipuri de campanii',
            desc: '3: prospectare, sondaj și promoție. Rapoartele de sondaj și promoție se exportă în CSV sau PDF.',
          },
          {
            term: 'Apeluri AI',
            desc: '10 credite pe minut convorbit, socotite din momentul în care se răspunde, cu minimum un minut.',
          },
          {
            term: 'Evaluarea apelurilor',
            desc: '12 credite pe minut de înregistrare; doar transcrierea costă jumătate. Înregistrările vin prin încărcare (până la 50 MB fiecare), prin API, din aplicația Fineguide de înregistrare a apelurilor pentru Android sau de la o centrală conectată.',
          },
          {
            term: 'Planuri',
            desc: 'Începi pe planul gratuit, cu 200 de credite și fără card. Aceleași credite acoperă apelurile AI, evaluarea apelurilor și răspunsurile din chat.',
          },
        ],
      },
      related: {
        eyebrow: 'Vezi și',
        heading: 'Modulele din spatele call center-ului',
        links: [
          {
            path: '/voice-ai',
            label: 'Telefonie AI',
            desc: 'Agenți vocali AI în apeluri live, primite și efectuate, prin sistemul tău telefonic.',
          },
          {
            path: '/campaigns',
            label: 'Campanii',
            desc: 'Campanii de apeluri de trei tipuri: prospectare, sondaj și promoție.',
          },
          {
            path: '/voice-qa',
            label: 'Voice QA',
            desc: 'Transcrierea și evaluarea apelurilor înregistrate, după regulile fiecărui departament.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Contacte, companii, oportunități și sarcini în spatele fiecărui apelant.',
          },
          {
            path: '/messages',
            label: 'Mesaje și Inbox',
            desc: 'Chat și email într-un inbox comun al echipei, cu rutare și predare către un coleg.',
          },
        ],
      },
      faq: {
        heading: 'Soft call center: întrebări frecvente',
        items: [
          {
            q: 'Ce este un soft de call center?',
            a: 'Un soft de call center este programul prin care o echipă primește și face apeluri cu clienții, le transferă unui om și le verifică după aceea. Fineguide adaugă agenți vocali AI care preiau singuri apelurile, plus CRM și evaluarea apelurilor pe aceeași platformă.',
          },
          {
            q: 'Poate un asistent AI să răspundă la telefon în limba română?',
            a: 'Da. Agenții vocali Fineguide vorbesc 14 limbi, printre care româna, rusa și engleza, iar un asistent răspunde în limba în care vorbește apelantul, dintre cele pe care i le-ai dat.',
          },
          {
            q: 'Trebuie să schimb numerele de telefon ca să folosesc un call center cu AI?',
            a: 'Nu. Conectezi operatorul sau centrala pe care le folosești deja, printr-un cont SIP standard, iar numerele rămân unde sunt.',
          },
          {
            q: 'Poate asistentul AI să transfere apelul la un operator?',
            a: 'Da, la apelurile primite. Când apelantul cere un om, asistentul îl transferă la numărul echipei; în afara orelor echipei preia în schimb o cerere de revenire, ca sarcină în CRM.',
          },
          {
            q: 'Cum se face automatizarea call center-ului pentru apelurile către clienți?',
            a: 'Creezi o campanie (prospectare, sondaj sau promoție), alegi audiența din CSV, contacte CRM sau etichete, setezi orele de apel și reapelările și faci un apel de test pe numărul tău. Apoi agenții AI sună lista și urmăresc rezultatul pentru fiecare contact.',
          },
          {
            q: 'Cum se face controlul calității apelurilor într-un call center?',
            a: 'Cu Voice QA, fiecare înregistrare trimisă este transcrisă și evaluată după regulile departamentului, cu citate din apel și o sugestie pentru fiecare regulă. Managerii văd scorurile pe departament, operator și regulă.',
          },
          {
            q: 'Cât costă un apel făcut de AI?',
            a: 'Apelurile AI consumă 10 credite pe minut convorbit, cu minimum un minut, și nimic cât timp telefonul sună. Prețurile planurilor și ale creditelor sunt pe pagina de prețuri.',
          },
        ],
      },
      closing: {
        heading: 'Ascultă-ți call center-ul răspunzând.',
        body: 'Conectează un număr, dă-i un asistent și sună-l chiar tu. Sau programează un demo de 30 de minute și vezi apelurile, campaniile și Voice QA pe operațiunile tale.',
      },
    },

    ru: {
      meta: {
        title: 'Программа для колл-центра с голосовым ИИ | Fineguide',
        description:
          'Облачный колл-центр с ИИ-агентами на ваших номерах: входящие звонки, обзвон клиентов, перевод на оператора, обратные звонки как задачи в CRM и оценка звонков.',
      },
      hero: {
        eyebrow: 'Программа для колл-центра',
        title: 'Ваш колл-центр',
        titleAccent: ' на одной платформе.',
        subtitle:
          'Голосовые ИИ-агенты принимают и совершают звонки с ваших номеров, сотрудник подключается, когда клиент просит человека, а после каждого звонка остаётся расшифровка, задача или оценка.',
      },
      definition: {
        heading: 'Что такое программа для колл-центра?',
        body:
          'Программа для колл-центра (ПО для контакт-центра) представляет собой систему, через которую компания принимает и совершает звонки клиентам, передаёт их сотрудникам и проверяет, о чём шла речь. В Fineguide голосовые ИИ-агенты работают на ваших номерах через SIP: принимают входящие звонки и обзванивают списки на 14 языках, по просьбе переводят звонящего на сотрудника, сохраняют заявки на обратный звонок как задачи в CRM, а каждый ИИ-звонок остаётся в виде расшифровки. Затем Voice QA оценивает записи звонков по правилам каждого отдела, с отчётами на 30 языках.',
      },
      capabilities: {
        eyebrow: 'Возможности',
        heading: 'Всё, на чём работает колл-центр, в одном месте.',
        body:
          'Входящие линии, кампании обзвона, карточка клиента и контроль качества работают на одной платформе, поэтому ничего не приходится переносить из одной программы в другую.',
        items: [
          {
            term: 'Ваши номера через SIP',
            desc: 'Подключите своего оператора связи или офисную АТС через стандартную SIP-учётную запись или SIP-транк и добавьте каждую линию как канал. Несколько линий могут работать через одну АТС, а каждый номер закрепляется за ассистентом, который на него отвечает.',
          },
          {
            term: 'Голосовые ИИ-агенты',
            desc: 'Ассистенты, которые уже работают у вас в чате, принимают входящие звонки и звонят в кампаниях на 14 языках, отвечая на языке звонящего. Во время звонка они пользуются базой знаний и собственными действиями, а звонящий может перебить их, как живого человека.',
          },
          {
            term: 'Узнаёт звонящих по CRM',
            desc: 'Включите приветствие по имени, и ассистент встретит по имени звонящего, чей номер сохранён в контактах.',
          },
          {
            term: 'Рабочие часы и перевод на оператора',
            desc: 'Вне рабочих часов звонок может остаться без ответа, уйти на другой номер или получить сообщение, после которого ассистент примет заявку на обратный звонок. Того, кто просит человека, ассистент переводит на номер команды: в любое время или только в её рабочие часы.',
          },
          {
            term: 'Обратные звонки как задачи в CRM',
            desc: 'Заявки на обратный звонок попадают на доску задач CRM с номером и именем звонящего и пометкой о том, что ему нужно.',
          },
          {
            term: 'Кампании обзвона',
            desc: 'Кампании трёх типов (привлечение, опрос и промо) по аудиториям из CSV, контактов CRM или тегов, сохранённым как сегменты. Вы задаёте число одновременных звонков, повторы при «нет ответа» и «занято», часы звонков по дням недели и сначала делаете тестовый звонок на свой номер.',
          },
          {
            term: 'Расшифровки и отчёты по кампаниям',
            desc: 'Каждый ИИ-звонок сохраняется как расшифровка в истории диалогов, а у каждого контакта кампании есть ссылка на расшифровку его звонка. Отчёты по опросам и промо выгружаются в CSV или PDF.',
          },
          {
            term: 'Оценка звонков в Voice QA',
            desc: 'Записи, загруженные вручную, переданные через API или пришедшие из подключённой АТС, расшифровываются и оцениваются по правилам отдела, с цитатами из звонка и советом по каждому правилу. Дашборды по отделам, операторам и правилам.',
          },
        ],
      },
      steps: {
        eyebrow: 'Как начать',
        heading: 'От первого номера до работающего колл-центра.',
        body: 'Большая часть настройки делается один раз для каждого номера и один раз для каждой кампании.',
        items: [
          'Подключите оператора связи или АТС через стандартную SIP-учётную запись и добавьте каждую линию как канал.',
          'Закрепите каждый номер за ассистентом и настройте языки, рабочие часы, перевод на оператора и обратные звонки.',
          'Соберите аудиторию из CSV, контактов CRM или тегов, сохраните её как сегмент и сделайте тестовый звонок на свой номер.',
          'Запустите кампанию и следите за расшифровками, задачами на обратный звонок и отчётами по мере завершения звонков.',
          'Отправьте записи звонков в Voice QA, чтобы оценить их по правилам каждого отдела.',
        ],
      },
      facts: {
        eyebrow: 'Факты',
        heading: 'В цифрах и названиях.',
        items: [
          {
            term: 'Языки',
            desc: '14 для ИИ-звонков: английский, румынский, русский, испанский, французский, немецкий, итальянский, португальский, польский, турецкий, арабский, японский, корейский и китайский. Отчёты Voice QA на 30 языках.',
          },
          {
            term: 'Телефония',
            desc: 'Ваш оператор связи или АТС через SIP, по UDP, TCP или TLS. Номера и минуты связи остаются у вашего оператора.',
          },
          {
            term: 'Типы кампаний',
            desc: '3: привлечение, опрос и промо. Отчёты по опросам и промо выгружаются в CSV или PDF.',
          },
          {
            term: 'ИИ-звонки',
            desc: '10 кредитов за минуту разговора, считая с момента ответа, минимум одна минута.',
          },
          {
            term: 'Оценка звонков',
            desc: '12 кредитов за минуту записи, только расшифровка стоит вдвое меньше. Записи попадают через загрузку (до 50 МБ каждая), API, приложение Fineguide для записи звонков на Android или подключённую АТС.',
          },
          {
            term: 'Тарифы',
            desc: 'Начните с бесплатного тарифа: 200 кредитов, без карты. Одни и те же кредиты идут на ИИ-звонки, оценку звонков и ответы в чате.',
          },
        ],
      },
      related: {
        eyebrow: 'Смотрите также',
        heading: 'Модули, на которых работает колл-центр',
        links: [
          {
            path: '/voice-ai',
            label: 'ИИ-телефония',
            desc: 'Голосовые ИИ-агенты на живых входящих и исходящих звонках через вашу телефонию.',
          },
          {
            path: '/campaigns',
            label: 'Кампании',
            desc: 'Кампании обзвона трёх типов: привлечение, опрос и промо.',
          },
          {
            path: '/voice-qa',
            label: 'Voice QA',
            desc: 'Расшифровка и оценка записей звонков по правилам каждого отдела.',
          },
          {
            path: '/crm',
            label: 'CRM',
            desc: 'Контакты, компании, сделки и задачи за каждым звонящим.',
          },
          {
            path: '/messages',
            label: 'Сообщения и входящие',
            desc: 'Чаты и почта в общем ящике команды, с маршрутизацией и передачей сотруднику.',
          },
        ],
      },
      faq: {
        heading: 'Программа для колл-центра: частые вопросы',
        items: [
          {
            q: 'Что такое программа для колл-центра?',
            a: 'Это программа, через которую команда принимает и совершает звонки клиентам, передаёт их сотрудникам и потом проверяет разговоры. Fineguide добавляет голосовых ИИ-агентов, которые сами ведут звонки, а также CRM и оценку звонков на той же платформе.',
          },
          {
            q: 'Может ли ИИ отвечать на звонки на русском и румынском?',
            a: 'Да. Голосовые агенты Fineguide говорят на 14 языках, в том числе на русском, румынском и английском, и один ассистент отвечает на том из своих языков, на котором говорит звонящий.',
          },
          {
            q: 'Нужно ли менять номера, чтобы подключить ИИ колл-центр?',
            a: 'Нет. Вы подключаете оператора связи или АТС, которыми уже пользуетесь, через стандартную SIP-учётную запись, и номера остаются там же.',
          },
          {
            q: 'Может ли ИИ перевести звонок на оператора?',
            a: 'Да, на входящих звонках. Если звонящий просит человека, ассистент переводит его на номер команды, а вне рабочих часов команды принимает заявку на обратный звонок как задачу в CRM.',
          },
          {
            q: 'Как автоматизировать колл-центр и обзвон клиентов?',
            a: 'Создайте кампанию (привлечение, опрос или промо), выберите аудиторию из CSV, контактов CRM или тегов, задайте часы звонков и повторы и сделайте тестовый звонок на свой номер. Дальше ИИ-агенты обзванивают список и фиксируют результат по каждому контакту.',
          },
          {
            q: 'Как контролировать качество звонков в колл-центре?',
            a: 'В Voice QA каждая отправленная запись расшифровывается и оценивается по правилам отдела, с цитатами из звонка и советом по каждому правилу. Руководители видят оценки по отделам, операторам и правилам.',
          },
          {
            q: 'Сколько стоит минута ИИ-звонка?',
            a: 'ИИ-звонки расходуют 10 кредитов за минуту разговора, минимум одна минута, а пока телефон звонит, кредиты не списываются. Цены тарифов и кредитов указаны на странице цен.',
          },
        ],
      },
      closing: {
        heading: 'Услышьте, как отвечает ваш колл-центр.',
        body: 'Подключите номер, назначьте ему ассистента и позвоните сами. Или запишитесь на 30-минутное демо и посмотрите звонки, кампании и Voice QA на примере своей работы.',
      },
    },
  },
};

export default solution;
