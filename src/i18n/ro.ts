import type { en } from './en';

export const ro: typeof en = {
  // --- Navbar ---
  nav: {
    overview: 'Acasă',
    platform: 'Platformă',
    assistants: 'Asistenți AI',
    crm: 'CRM',
    voiceQa: 'Voice QA',
    voiceAi: 'Voice AI',
    workspace: 'Workspace',
    pricing: 'Prețuri',
    enterprise: 'Enterprise',
    contact: 'Contact',
    blog: 'Blog',
    signIn: 'Autentificare',
    dashboard: 'Dashboard',
    menuLabel: 'Meniu',
  },

  // --- Footer ---
  footer: {
    tagline: 'Platforma de nouă generație pentru operațiuni de business, conversații, CRM, voce și workspace pe o singură coloană vertebrală nativ AI.',
    product: 'Produs',
    company: 'Companie',
    scheduleDemo: 'Programează un demo',
    enterprise: 'Enterprise',
    contact: 'Contact',
    privacy: 'Confidențialitate',
    terms: 'Termeni',
    copyright: 'Toate drepturile rezervate.',
  },

  // --- Homepage meta ---
  indexMeta: {
    title: 'Fineguide.ai | Simplifică fiecare interacțiune cu clienții tăi.',
    description:
      'Platforma de nouă generație pentru operațiuni de business. Unifică conversațiile, CRM-ul, canalele și fluxurile de lucru, totul construit pe AI din temelii.',
  },

  // --- Hero ---
  hero: {
    title: 'Simplifică fiecare interacțiune cu clienții tăi.',
    subtitle:
      'Unifică conversațiile, CRM-ul, canalele și fluxurile de lucru, totul construit pe AI din temelii.',
    ctaPrimary: 'Începe acum',
    ctaSecondary: 'Programează un demo',
  },

  // --- Overview intro ---
  overview: {
    eyebrow: 'Platforma',
    body:
      'Fineguide reunește într-o singură platformă asistenți AI, CRM, telefonie, canale de chat și workspace-ul echipei - conectând fiecare conversație, fișă de client, interacțiune vocală și document intern într-un sistem integrat.',
    modules: [
      {
        name: 'Asistenți',
        desc: 'AI care răspunde clienților pe web, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
      },
      {
        name: 'CRM',
        desc: 'Conversații, contacte, lead-uri, pipeline-uri, task-uri, tickete, inbox de echipă și coadă de rutare.',
      },
      {
        name: 'Voice',
        desc: 'Quality assurance pe fiecare apel, plus telefonie cu agenți AI.',
      },
      {
        name: 'Workspace',
        desc: 'Documente, decizii și cunoștințe de echipă, alături de fișa clientului.',
      },
      {
        name: 'Automatizări',
        desc: 'Workflow-uri vizuale care conectează Fineguide la restul stack-ului tău.',
      },
    ],
  },

  // --- Assistants spread ---
  assistantsSpread: {
    eyebrow: 'Asistenți',
    title: 'AI care gestionează conversațiile, de fiecare dată.',
    body:
      'Asistenți care citesc cunoștințele tale, urmează regulile tale și captează ce contează. Întâmpină clienții pe fiecare canal unde faci business, și transformă fiecare conversație în date structurate cu care echipa ta poate acționa.',
    features: [
      'Canale: Web · WhatsApp · Telegram · Instagram · Messenger · Slack · Discord',
      'Cunoștințe din URL-uri, documente și PDF-uri',
      'Personalitate, voce și reguli de escaladare configurabile',
      'Extrage intenția și datele clientului direct în lead-urile din CRM',
      'Monitorizare live a conversațiilor, analiză și bucle de feedback',
    ],
    screenshotAlt: 'Dashboard analytics asistenți Fineguide',
  },

  // --- CRM spread ---
  crmSpread: {
    eyebrow: 'CRM',
    title: 'O singură fișă a clientului. Toată echipa. Toate conversațiile.',
    body:
      'Sales vede deal-ul. Suportul vede ticketul. Call center-ul vede coada. Toți văd același client, același istoric de conversație, același context, fără dansul de export și import dintre tool-uri.',
    features: [
      'Pipeline-uri și etape, vizualizări Kanban și tabel',
      'Task-uri, asignări și deadline-uri',
      'Tickete și cazuri de suport',
      'Inbox de echipă și coadă de rutare',
      'Câmpuri custom populate automat de asistenți',
    ],
    screenshotAlt: 'Board CRM Fineguide cu task-uri în coloane Kanban',
  },

  // --- Voice spread (dark) ---
  voiceSpread: {
    eyebrow: 'Voice',
    title: 'Fiecare apel, evaluat și structurat.',
    body:
      'Voice QA evaluează apelurile automat, pe departamente, conform regulilor tale, în limbile pe care le vorbește echipa ta. Voice AI pune aceiași asistenți care gestionează chat-ul la celălalt capăt al telefonului.',
    features: [
      'Transcriere și evaluare automată pe fiecare apel',
      'Criterii de evaluare și ponderi per departament',
      'Feedback pentru agenți și dashboard-uri de tendințe',
      'Integrare telefonie cu operatorii principali',
      'Agenți AI pe apeluri live inbound și outbound',
    ],
    screenshotAlt: 'Dashboard statistici Voice QA Fineguide',
  },

  // --- Workspace + Automations ---
  workspaceAutomations: {
    workspace: {
      eyebrow: 'Workspace',
      title: 'Documente care trăiesc alături de client.',
      body:
        'Un editor bazat pe blocuri pentru playbook-uri, brief-uri și cunoștințe de echipă, conectat la aceleași contacte și clienți cu care echipa ta lucrează deja.',
      features: [
        'Editor cu blocuri și comenzi slash',
        'Ierarhie de foldere cu drag-and-drop',
        'Căutare full-text în întregul workspace',
        'Coș cu ștergere soft și recuperare',
      ],
    },
    automations: {
      eyebrow: 'Automatizări',
      title: 'Conectează Fineguide la restul stack-ului tău.',
      body:
        'O instanță n8n încorporată, găzduită de noi sau adusă de tine, care conectează Fineguide la tool-urile pe care le folosești deja.',
      features: [
        'n8n găzduit pe infrastructura Fineguide',
        'Sau adu-ți propria instanță n8n',
        'Webhook-uri pe conversații, lead-uri și tickete',
        'Sute de integrări pre-construite',
      ],
    },
  },

  // --- Numbers ---
  numbers: {
    eyebrow: 'În cifre',
    items: [
      {
        figure: '24/7',
        prose: 'acoperire AI în sub două secunde, pe fiecare canal pe care l-ai conectat.',
      },
      {
        figure: '30+',
        prose: 'limbi suportate pentru transcriere vocală și conversații cu clienții.',
      },
      {
        figure: 'Una',
        prose: 'platformă care înlocuiește cele șapte tool-uri pe care altfel le-ai uni cu scotch.',
      },
    ],
  },

  // --- Industries ---
  industries: {
    eyebrow: 'Construit pentru',
    body:
      'Echipele de vânzări folosesc Fineguide pentru a califica mai rapid. Centrele de suport îl folosesc pentru a gestiona volume mari fără să crească echipa. Call center-ele îl folosesc pentru a evalua calitatea și a antrena în timp real. Echipele de customer success îl folosesc pentru a păstra conturile coerente pe toate canalele.',
    audiences: 'Vânzări · Suport · Customer success · Operațiuni call center',
  },

  // --- Integrations ribbon ---
  integrationsRibbon: {
    eyebrow: 'Se integrează cu ce folosești deja',
    items: [
      'WhatsApp',
      'Telegram',
      'Instagram',
      'Messenger',
      'Slack',
      'Discord',
      'AmoCRM',
      'Kommo',
      'Zendesk',
      'HelpScout',
      'n8n',
    ],
  },

  // --- Final CTA ---
  finalCta: {
    heading: 'Gata să consolidezi?',
    body:
      'Vezi Fineguide rulând pe operațiunile tale într-un walkthrough de 15 minute.',
    ctaPrimary: 'Începe acum',
    ctaSecondary: 'Discută cu vânzările',
  },

  // --- AI Assistants page ---
  assistantsPage: {
    meta: {
      title: 'Asistenți AI | Automatizează conversațiile pe fiecare canal | Fineguide.ai',
      description:
        'Asistenți AI care citesc cunoștințele tale, urmează regulile tale și captează ce contează, pe web, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
    },
    hero: {
      title: 'Asistenți AI care gestionează',
      titleAccent: ' conversațiile.',
      subtitle:
        'Asistenți care citesc cunoștințele tale, urmează regulile tale și captează ce contează, pe fiecare canal unde faci business.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul Asistenți',
      body:
        'Fiecare asistent este un AI configurabil care întâmpină clienții, răspunde la întrebări, califică lead-uri și scrie date structurate în CRM. Tu definești ce știe, cum sună, când escaladează și ce captează, apoi îl pui pe canalele pe care clienții tăi le folosesc deja.',
      screenshotAlt: 'Analytics asistent Fineguide, sesiuni, satisfacție, sentiment',
    },
    channels: {
      eyebrow: 'Canale',
      heading: 'Un singur asistent. Toate canalele.',
      body:
        'Configurezi o singură dată. Asistentul apare unde apar clienții tăi, widget-uri web, inbox-uri sociale, aplicații de mesagerie și punți CRM care îl pun chiar în interiorul tool-urilor pe care echipa ta le folosește deja.',
      groups: [
        {
          label: 'Direct',
          items: 'Widget web · WhatsApp · Telegram · Instagram · Messenger · Slack · Discord',
        },
        {
          label: 'Punți CRM',
          items: 'AmoCRM · Kommo',
        },
      ],
    },
    configuration: {
      eyebrow: 'Configurare',
      heading: 'Ajustează fiecare dimensiune.',
      body:
        'Setările default funcționează. Profunzimea este acolo când ai nevoie de ea, pentru personalitate, cunoștințe, voce, extragere, acțiuni și escaladare.',
      blocks: [
        {
          title: 'Personalitate',
          body:
            'Prompt de sistem, stil de comunicare și nivel de detaliere. Adaugă tonul brandului sau restricționează asistentul la un rol specific.',
        },
        {
          title: 'Bază de cunoștințe',
          body:
            'Încarcă documente, conectează URL-uri sau atașează PDF-uri. Asistentul își fundamentează fiecare răspuns în ce îi dai tu, fără fapte halucinate.',
        },
        {
          title: 'Voce',
          body:
            'Voci text-to-speech pentru răspunsuri vocale. Alege dintr-un set curat sau folosește propria ta clonă.',
        },
        {
          title: 'Variabile de sesiune',
          body:
            'Definește câmpurile pe care asistentul le extrage din conversație (nume, intenție, buget, problemă) și ele ajung automat în lead-urile din CRM.',
        },
        {
          title: 'Acțiuni',
          body:
            'Declanșează webhook-uri, apeluri API sau workflow-uri din interiorul unei conversații. Programează întâlniri, creează tickete, predă către oameni.',
        },
        {
          title: 'Predare către om',
          body:
            'Escaladare bazată pe reguli atunci când clientul cere sau când asistentul atinge limitele pe care le-ai setat.',
        },
      ],
    },
    extraction: {
      eyebrow: 'De la conversație la CRM',
      heading: 'Fiecare chat devine o fișă structurată.',
      body:
        'Ce înainte cerea ca un agent să copieze notițe din fereastra de chat într-o tabelă acum se întâmplă automat, și corect.',
      steps: [
        'Clientul începe o conversație pe orice canal conectat',
        'Asistentul identifică intenția, extrage câmpurile pe care le-ai definit și își fundamentează răspunsurile în cunoștințele tale',
        'Un lead este creat în CRM, sau fuzionat cu un contact existent, fără introducere manuală',
        'Câmpurile custom populează lead-ul, astfel încât datele să fie căutabile, segmentabile și gata pentru automatizare',
        'Conversațiile live se adună în workspace; analytics-ul se agregă per asistent, canal și interval',
      ],
    },
    leadAnatomy: {
      eyebrow: 'Anatomia unui lead',
      heading: 'Un lead înseamnă mai mult decât un nume și un număr de telefon.',
      body:
        'Asistenții captează câmpurile care contează pentru tine, automat, pe fiecare canal. Identitatea vine built-in. Câmpurile custom precum buget, serviciu solicitat sau dată de mutare sunt cele pe care tu le definești pentru afacerea ta.',
      card: {
        title: 'Lead #4218',
        meta: 'WhatsApp · acum 2 minute',
        fields: [
          { label: 'Nume', value: 'Maria Popescu', ai: false },
          { label: 'Telefon', value: '+40 720 123 456', ai: false },
          { label: 'Email', value: 'maria.p@example.com', ai: false },
          { label: 'Serviciu solicitat', value: 'Voice QA · 5 agenți', ai: true },
          { label: 'Buget', value: '€2.000 – €4.000 / lună', ai: true },
          { label: 'Intenție', value: 'Prețuri & demo', ai: true },
          { label: 'Etapă', value: 'Calificat', ai: false },
          { label: 'Următoarea acțiune', value: 'Programează apel', ai: false },
        ],
        footerLabel: 'AI',
        footerNote:
          'Câmpurile marcate AI sunt populate de asistent pe baza conversației. Definește-le pe ale tale în configurarea asistentului.',
      },
      industries: {
        heading: 'Fiecare afacere, alte câmpuri.',
        body: 'Ce captezi depinde de ce trebuie să știe echipa ta:',
        list: [
          {
            label: 'Imobiliare',
            fields: 'Tip proprietate · Camere · Buget · Dată mutare · Status finanțare',
          },
          {
            label: 'B2B SaaS',
            fields: 'Mărime companie · Caz de utilizare · Orizont de decizie · Tool-uri actuale · Interes pentru pilot',
          },
          {
            label: 'Sănătate',
            fields: 'Serviciu solicitat · Asigurare · Dată preferată · Specialist · Sursa recomandării',
          },
        ],
      },
    },
    finalCta: {
      heading: 'Gata să implementezi?',
      body: 'Vezi un asistent configurat pentru afacerea ta într-un walkthrough de 15 minute.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- CRM page ---
  crmPage: {
    meta: {
      title: 'CRM | Conversații, lead-uri și task-uri pe o singură fișă a clientului | Fineguide.ai',
      description:
        'Un CRM construit în jurul fișei clientului, conversații, contacte, lead-uri, pipeline-uri, task-uri, tickete, inbox de echipă și coadă de rutare, conectate la fiecare canal pe care operează echipa ta.',
    },
    hero: {
      title: 'O singură fișă. Toată echipa.',
      titleAccent: ' Toate conversațiile.',
      subtitle:
        'Sales vede deal-ul. Suportul vede ticketul. Call center-ul vede coada. Toți văd același client, fără dansul de export și import dintre tool-uri.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul CRM',
      body:
        'CRM-ul Fineguide este hub-ul operațional unde asistenții alimentează lead-uri, agenții le închid și managerii văd adevărul. Fiecare conversație, fiecare contact, fiecare task, conectate la aceeași fișă a clientului, pe fiecare canal pe care merge afacerea ta.',
      screenshotAlt: 'Board task-uri CRM Fineguide cu coloanele Todo, În progres și Gata',
    },
    surfaces: {
      eyebrow: 'În interiorul CRM-ului',
      heading: 'Opt suprafețe, o singură fișă a clientului.',
      body:
        'Fiecare suprafață este o altă lentilă peste aceleași date, astfel încât să nu dublezi munca, să nu pierzi contextul și să nu te întrebi niciodată care tool are versiunea cea mai recentă.',
      items: [
        {
          name: 'Conversații',
          desc: 'Chat-uri live și istorice de pe fiecare canal, cu profilul clientului și contextul lead-ului atașate.',
        },
        {
          name: 'Contacte',
          desc: 'Persoanele și companiile cu care faci business, identificate pe numere de telefon, email-uri și nicknames de pe canale.',
        },
        {
          name: 'Lead-uri',
          desc: 'Oportunități calificate cu câmpuri structurate, inclusiv proprietăți custom extrase de asistenții tăi.',
        },
        {
          name: 'Pipeline-uri',
          desc: 'Vizualizări Kanban și tabel pe pipeline. Etape, asignări și SLA-uri care reflectă felul în care echipa ta vinde efectiv.',
        },
        {
          name: 'Task-uri',
          desc: 'Follow-up-uri, callback-uri și to-do-uri cu status, prioritate și deadline, create dintr-o conversație sau dintr-un lead.',
        },
        {
          name: 'Tickete',
          desc: 'Cazuri de suport rutate alături de munca de vânzări, astfel încât același client să nu fie două povești diferite.',
        },
        {
          name: 'Inbox de echipă',
          desc: 'Triere comună a conversațiilor care așteaptă un om, preiei, răspunzi sau escaladezi fără să vă călcați pe picioare.',
        },
        {
          name: 'Coadă',
          desc: 'Rutare pentru conversații și apeluri live, round-robin, deținere sau bazată pe reguli, în funcție de cum operează echipa ta.',
        },
      ],
    },
    customerRecord: {
      eyebrow: 'Fișa clientului',
      heading: 'Identitate care supraviețuiește schimbării de canal.',
      body:
        'Un client care îți scrie pe WhatsApp luni și sună marți este același client. Fineguide îl identifică pe numere de telefon, nicknames de pe canale și email-uri, și atașează fiecare conversație, lead și ticket la aceeași fișă, astfel încât contextul să nu se reseteze niciodată.',
      bullets: [
        'Fuzionare de identitate pe numere de telefon, email-uri și nicknames de pe canale',
        'Câmpuri custom (`props`) populate de asistenți în timpul conversației',
        'Istoric complet de interacțiuni (chat-uri, apeluri, tickete, task-uri) într-un singur timeline',
        'Segmentare la nivel de organizație pe care automatizările și export-urile se pot baza',
      ],
    },
    finalCta: {
      heading: 'Nu mai jongla cu tab-urile.',
      body: 'Vezi cum se compară CRM-ul Fineguide cu stack-ul pe care îl folosești astăzi.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Voice QA page ---
  voiceQaPage: {
    meta: {
      title: 'Voice QA | Evaluează fiecare apel, descoperă fiecare tipar | Fineguide.ai',
      description:
        'Evaluare AI automată pentru fiecare apel telefonic, pe departamente, conform regulilor tale, în 30+ limbi. Descoperă problemele comune și tendințele emergente pe mii de conversații.',
    },
    hero: {
      title: 'Fiecare apel, evaluat',
      titleAccent: ' și structurat.',
      subtitle:
        'Evaluare AI automată pe fiecare apel, pe departamente, conform regulilor tale, în limbile pe care le vorbește echipa ta. Renunță la eșantion. Începe să vezi toată operațiunea.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul Voice QA',
      body:
        'Un manager QA care ascultă zece apeluri pe zi vede unu la sută din ce se întâmplă la telefon. Voice QA le evaluează pe toate, automat, consistent și la timp pentru ca feedback-ul să mai conteze.',
      screenshotAlt: 'Dashboard statistici Voice QA Fineguide, buget, minute și grafic de tendințe',
    },
    process: {
      eyebrow: 'Cum funcționează',
      heading: 'Cinci pași. Fiecare apel.',
      body:
        'Conectezi o sursă de apeluri, definești regulile tale și platforma face ascultatul. Agenții primesc feedback în aceeași zi. Managerii văd tendința înainte să devină problemă.',
      steps: [
        'Conectează o sursă de apeluri, operatorul tău de telefonie, sistemul de înregistrare sau PBX-ul. Apelurile sunt captate automat.',
        'AI transcrie fiecare conversație în 30+ limbi, identificând vorbitorii și structurând dialogul.',
        'Fiecare apel este evaluat conform regulilor tale per departament, scorare fixă sau ponderată, fără eșantionare manuală.',
        'Agentul primește un scor per regulă, dovezi din conversație și sugestii concrete de îmbunătățire.',
        'Managerul vede performanța per departament, agent și client, cu tendințe și puncte slabe evidențiate.',
      ],
    },
    configuration: {
      eyebrow: 'Configurare',
      heading: 'Reguli per departament, modelul tău de scorare.',
      body:
        'Fiecare echipă are propriul standard de calitate. Voice QA te lasă să-l codifici, reguli și ponderi diferite per departament, cu același motor care procesează apeluri de vânzări, tickete de suport și conversații de retenție în paralel.',
      blocks: [
        {
          title: 'Departamente',
          body:
            'Organizează pe echipă, locație sau funcție. Fiecare departament are propriile categorii, criterii și dashboard-uri.',
        },
        {
          title: 'Categorii și reguli',
          body:
            'Definește cum arată un apel bun (deschidere, descoperire, gestionarea obiecțiilor, conformitate) și cum ar trebui scorată fiecare regulă.',
        },
        {
          title: 'Fix sau ponderat',
          body:
            'Tratează toate regulile la fel sau pune greutate pe cele care contează cel mai mult. Matematica urmează politica ta, nu invers.',
        },
        {
          title: 'Feedback pentru agent',
          body:
            'Scoring per regulă cu dovezi din conversație. Sugestiile ajung la agent în aceeași zi, nu la următorul review trimestrial.',
        },
        {
          title: 'Integrare telefonie',
          body:
            'Conectează-te la sistemul existent de telefonie sau de înregistrare. Fără rip-and-replace, fără introducere paralelă de date.',
        },
        {
          title: 'Legătură cu CRM',
          body:
            'Apelurile se atașează la aceeași fișă a clientului ca și chat-urile și ticketele. Clientul este o singură poveste, nu trei.',
        },
      ],
    },
    extraction: {
      eyebrow: 'Insight-uri',
      heading: 'Descoperă probleme și tendințe emergente.',
      body:
        'Voice QA transformă fiecare apel într-un insight structurat, astfel încât problemele și tendințele să devină vizibile în toată operațiunea, nu doar în apelurile pe care un manager le-a auzit din întâmplare.',
      blocks: [
        {
          title: 'Extragere custom',
          body:
            'Spune AI-ului ce să captureze pe fiecare apel: produse menționate, tipuri de reclamații, cauze profunde, nume de competitori.',
        },
        {
          title: 'Probleme comune',
          body:
            'Vezi ce produse generează cele mai multe reclamații și la ce întrebări se chinuie agenții să răspundă, pe mii de apeluri.',
        },
        {
          title: 'Tendințe emergente',
          body:
            'Prinde probleme noi, schimbări de sentiment sau menționări de competitori chiar pe măsură ce apar, nu săptămâni mai târziu.',
        },
      ],
      footer:
        'Configurează per departament și trimite rezultatele în dashboard-uri sau webhook-uri.',
    },
    finalCta: {
      heading: 'Renunță la eșantion. Începe să scorezi.',
      body: 'Vezi Voice QA rulând pe apelurile tale într-un walkthrough de 15 minute.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Workspace page ---
  workspacePage: {
    meta: {
      title: 'Workspace | Un editor de documente care trăiește alături de clienții tăi | Fineguide.ai',
      description:
        'Un editor bazat pe blocuri pentru playbook-uri, brief-uri și cunoștințe de echipă, conectat la aceleași contacte, lead-uri și conversații cu care echipa ta lucrează deja.',
    },
    hero: {
      title: 'Documente care trăiesc',
      titleAccent: ' alături de client.',
      subtitle:
        'Un editor bazat pe blocuri pentru playbook-uri, brief-uri și cunoștințe de echipă, conectat la aceleași contacte și clienți cu care echipa ta lucrează deja.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul Workspace',
      body:
        'Workspace este un editor structurat (blocuri, ierarhie, comenzi slash) integrat în același produs cu CRM-ul și conversațiile tale. Scrii un playbook o dată și oamenii care au nevoie de el îl găsesc unde lucrează deja.',
      screenshotAlt: 'Editor de documente Workspace Fineguide cu meniul de comenzi slash',
    },
    editor: {
      eyebrow: 'Editorul',
      heading: 'Blocuri, nu pagini goale.',
      body:
        'Titluri, liste, citate, cod, callout-uri, tabele, fiecare bloc este componibil. Comenzile slash accelerează scrisul. Scurtăturile de tastatură accelerează restul.',
      blocks: [
        {
          title: 'Structură pe blocuri',
          body:
            'Titluri, paragrafe, liste, citate, cod, tabele, callout-uri. Trage pentru a reordona, indentează pentru a încuiba, transformă între tipuri printr-o singură apăsare de tastă.',
        },
        {
          title: 'Comenzi slash',
          body:
            'Apasă `/` pentru a deschide fiecare tip de bloc, embed și scurtătură. Fără vânătoare prin meniuri, fără întreruperi de formatare.',
        },
        {
          title: 'Actualizări în timp real',
          body:
            'Editările se propagă imediat în echipă. Comentariile și menționările se ataşează la bloc, nu la un fir de email învechit.',
        },
      ],
    },
    structure: {
      eyebrow: 'Organizare',
      heading: 'Ierarhie, căutare și recuperare.',
      body:
        'Workspace se organizează în jurul felului în care echipa ta gândește efectiv, foldere pentru departamente, documente pentru playbook-uri, recente și favorite pentru ce ai atins săptămâna trecută.',
      bullets: [
        'Ierarhie de foldere și documente cu reordonare drag-and-drop',
        'Recente și favorite pentru documentele în care trăiești',
        'Căutare full-text în întregul workspace',
        'Coș cu ștergere soft și recuperare, ștergerea nu este distructivă',
      ],
    },
    connected: {
      eyebrow: 'Conectat la clienții tăi',
      heading: 'Documente care știu despre cine sunt.',
      body:
        'Conectează un document la un contact, un lead sau o fișă de client. Următorul om care deschide acel client în CRM vede playbook-ul, rezumatul apelului sau propunerea care există deja. Nimic nu se pierde în arheologia de Slack.',
    },
    finalCta: {
      heading: 'Gata să consolidezi?',
      body: 'Vezi workspace, CRM și asistenți împreună într-un walkthrough de 15 minute.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Voice AI page ---
  voiceAiPage: {
    meta: {
      title: 'Voice AI | Agenți AI pe apeluri telefonice live | Fineguide.ai',
      description:
        'Aceiași asistenți care gestionează chat-ul web, la celălalt capăt al telefonului. Voice AI răspunde la apeluri inbound, sună outbound și predă către oameni atunci când contează.',
    },
    hero: {
      title: 'AI la celălalt capăt',
      titleAccent: ' al telefonului.',
      subtitle:
        'Aceiași asistenți care gestionează chat-ul web, WhatsApp și Telegram, acum răspund la telefon. Inbound 24/7, outbound la scară, predare către oameni atunci când contează.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul Voice AI',
      body:
        'Voice AI pune asistenții configurabili pe care îi ai deja pe chat în apeluri telefonice live, răspunzând la inbound, calificând outbound și predând către oameni când contează. Telefonul devine un canal integrat, nu un sistem paralel.',
    },
    capabilities: {
      eyebrow: 'Capabilități',
      heading: 'Un strat de voce complet, end-to-end.',
      body:
        'Voice AI se sprijină pe asistenții, CRM-ul și Voice QA-ul pe care le ai deja, astfel încât telefonul să ruleze pe aceeași configurare, aceeași fișă a clientului și aceleași dashboard-uri de calitate ca orice alt canal.',
      blocks: [
        {
          title: 'Automatizare inbound',
          body:
            'Răspunde la apeluri 24/7. Rutează pe intenție, identifică clientul și rezolvă solicitările comune fără să țină pe nimeni la coadă.',
        },
        {
          title: 'Apeluri outbound',
          body:
            'Sună pentru calificare, follow-up sau reamintire, la scară. Predă către om în momentul în care conversația o cere.',
        },
        {
          title: 'Integrare telefonie',
          body:
            'Se conectează la operatorul tău sau la trunk-ul SIP existent. Numerele, înregistrarea și conformitatea urmează configurația ta actuală.',
        },
        {
          title: 'Bucla CRM și Voice QA',
          body:
            'Fiecare apel scrie înapoi în aceeași fișă a clientului, cu transcrieri gata de scorat în Voice QA pe aceleași dashboard-uri.',
        },
      ],
    },
    finalCta: {
      heading: 'Adu AI la telefon.',
      body: 'Walkthrough prin Voice AI, Voice QA și restul platformei într-un singur demo.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Pricing Page ---
  pricingMeta: {
    title: 'Prețuri | Fineguide.ai',
    description: 'Prețuri flexibile bazate pe credite. Alege planul potrivit pentru echipa ta, toate modulele AI incluse de la început.',
  },
  pricingPage: {
    heading: 'Prețuri construite pentru<br />echipe care cresc',
    subtitle: 'Începe gratuit, crește pe măsură ce avansezi. Un singur abonament per organizație, cu acces la toate modulele AI.',
    bullets: ['Fără taxe de setup', 'Anulează oricând', 'Trial gratuit'],
  },

  // --- PricingPlans ---
  pricingPlans: {
    perMonth: '/lună',
    monthlyCredits: 'Credite lunare',
    extraCredits: 'Credite suplimentare: ',
    modulesIncluded: 'Module incluse',
    integrationsLabel: 'Integrări',
    mostPopular: 'Cel mai popular',
    ctaButton: 'Începe acum',
    freeBanner: 'Începe cu 1.000 de credite din partea noastră. Fără card, fără obligații.',
    freeBannerCta: 'Creează cont gratuit',
    freeLabel: 'pentru totdeauna',
    oneTimeCredits: 'Credite inițiale',
    plans: [
      {
        desc: '1.000 de credite gratuite la înregistrare, fără card. Cumperi mai multe doar când ai nevoie.',
        credits: '1.000 de credite pentru a explora platforma',
        features: ['1 membru', 'Module AI incluse (fără n8n)', 'Suport comunitate', 'Reîncărcare pay-as-you-go'],
      },
      {
        desc: 'Pentru echipe mici care vor să automatizeze primele interacțiuni.',
        credits: '≈ 10.000 de conversații text sau 800+ minute VoiceQA',
        features: ['Până la 5 membri', 'Control administrativ de bază', 'Suport pe email', 'Toate modulele AI incluse'],
      },
      {
        desc: 'Pentru companii în creștere care au nevoie de mai multă capacitate.',
        credits: '≈ 23.000 de conversații text sau 1.900+ minute VoiceQA',
        features: ['Până la 10 membri', 'Control administrativ avansat', 'Suport prioritar', 'Analytics avansat'],
      },
      {
        desc: 'Pentru echipe mari cu volum ridicat de interacțiuni.',
        credits: '≈ 65.000 de conversații text sau 5.400+ minute VoiceQA',
        features: ['20 de membri', 'Control administrativ enterprise', 'Suport dedicat', 'Rapoarte custom', 'Acces API & webhook-uri'],
      },
    ],
  },

  // --- PricingCredits ---
  pricingCredits: {
    heading: 'Cum funcționează creditele',
    subtitle: 'Sistemul flexibil de credite îți dă control deplin asupra utilizării AI, pe toate funcționalitățile platformei.',
    categories: [
      {
        name: 'Conversații AI',
        rows: [
          { label: 'Mesaj text', value: '1 credit' },
          { label: 'Mesaj + atașament', value: '2 credite' },
          { label: 'Procesare documente', value: 'Inclus' },
        ],
      },
      {
        name: 'VoiceQA',
        rows: [
          { label: 'Analiză per minut', value: '12 credite' },
          { label: 'Scoring de calitate', value: 'Inclus' },
          { label: 'Insight-uri de performanță', value: 'Inclus' },
        ],
      },
      {
        name: 'Platformă',
        rows: [
          { label: 'Analytics & rapoarte', value: 'Gratuit' },
          { label: 'Colaborare în echipă', value: 'Gratuit' },
          { label: 'Integrări n8n', value: 'Gratuit' },
        ],
      },
    ],
  },

  // --- PricingEnterprise ---
  pricingEnterprise: {
    heading: 'Ai nevoie de un plan Enterprise?',
    subtitle: 'Pentru volum mare, integrări custom sau cerințe specifice de conformitate, oferim soluții personalizate.',
    features: [
      'Pachete de credite custom',
      'Discount-uri pe volum',
      'Suport prioritar & SLA',
      'Account manager dedicat',
    ],
    cta: 'Contactează-ne',
  },

  // --- PricingFaq ---
  pricingFaq: {
    heading: 'Întrebări frecvente',
    subtitle: 'Tot ce trebuie să știi despre sistemul nostru de prețuri.',
    items: [
      { q: 'Cum funcționează creditele?', a: 'Fiecare mesaj text AI costă 1 credit. Mesajele cu atașamente costă 2 credite. Analiza VoiceQA folosește 12 credite per minut. Procesarea documentelor, analytics-ul și integrările sunt incluse fără cost suplimentar.' },
      { q: 'Expiră creditele?', a: 'Creditele din abonamentul lunar se resetează la fiecare ciclu de facturare. Pachetele extra de credite nu expiră niciodată.' },
      { q: 'Pot schimba planul?', a: 'Da, poți upgrada sau downgrada oricând. Modificările intră în vigoare la următorul ciclu de facturare. Poți cumpăra credite suplimentare oricând.' },
      { q: 'Ce se întâmplă dacă rămân fără credite?', a: 'Poți cumpăra credite suplimentare instant. Asistenții AI vor continua să funcționeze și vei fi notificat când creditele sunt aproape de epuizare.' },
      { q: 'Există un trial gratuit?', a: 'Da. Toate conturile noi primesc credite gratuite pentru a testa platforma. Poți explora toate funcționalitățile înainte de a alege un plan plătit.' },
    ],
  },

  // --- Enterprise Page ---
  enterpriseMeta: {
    title: 'Enterprise | On-premise, adaptare și consultanță | Fineguide.ai',
    description:
      'Serviciu dedicat pentru echipe enterprise: planuri custom, deployment on-premise pe infrastructura ta, adaptare a platformei și consultanță care transformă platforma în rezultate.',
  },
  enterprisePage: {
    hero: {
      title: 'Enterprise în termenii',
      titleAccent: ' tăi.',
      subtitle:
        'Serviciu dedicat pentru echipe care operează la scară, planuri custom, deployment on-premise, adaptare a platformei și consultanță care transformă platforma în rezultate.',
      cta: 'Contactează vânzările',
    },
    service: {
      eyebrow: 'Serviciu dedicat',
      heading: 'O echipă care îți cunoaște operațiunile.',
      body:
        'Fiecare deployment enterprise este susținut de o echipă care îți cunoaște stack-ul, contractele și clienții, de la onboarding până la expansiune.',
      items: [
        'Account manager dedicat',
        'Lead de onboarding și asistență la migrare',
        'Suport prioritar cu SLA-uri numite',
        'Review-uri trimestriale și input pe roadmap',
      ],
    },
    onPremise: {
      eyebrow: 'Deployment on-premise',
      heading: 'Rulează Fineguide pe infrastructura ta.',
      body:
        'Pentru echipe din industrii reglementate sau cu cerințe stricte de suveranitate a datelor, Fineguide se instalează în totalitate pe infrastructura ta, rețeaua ta, politicile tale de securitate, regimul tău de conformitate. Nicio dată nu părăsește perimetrul tău.',
      items: [
        {
          title: 'Mediul tău',
          body: 'Self-hosted pe cloud-ul tău, cluster privat sau bare metal. Noi susținem deployment-ul; tu deții infrastructura.',
        },
        {
          title: 'Perimetrul tău',
          body: 'Datele rămân înăuntrul granițelor rețelei tale. Fără trafic outbound către servicii terțe dacă nu permiți tu.',
        },
        {
          title: 'Stratul tău de identitate',
          body: 'Se integrează cu IdP-ul, SSO-ul și politicile tale de acces existente. Autentificarea și auditul urmează standardele tale.',
        },
        {
          title: 'Conformitatea ta',
          body: 'Suport pentru review de conformitate, audituri de securitate și evaluări continue: HIPAA, ISO 27001, reglementări regionale și nu numai.',
        },
      ],
    },
    adaptation: {
      eyebrow: 'Adaptare',
      heading: 'Modelat pe operațiunile tale.',
      body:
        'Niciun deployment enterprise nu arată la fel. Adaptăm Fineguide pe al tău, integrări custom cu sistemele tale interne, deployment-uri white-label și customizare de workflow care se potrivește felului în care echipa ta lucrează cu adevărat.',
      items: [
        'Integrări custom cu sistemele tale interne',
        'Deployment white-label aliniat cu brandul',
        'Workflow-uri și module customizate',
        'Linie directă către echipa de produs',
      ],
    },
    consultancy: {
      eyebrow: 'Consultanță',
      heading: 'Strategie, nu doar software.',
      body:
        'Consultanța Fineguide lucrează alături de echipa ta, proiectând asistenți, mapând conversații și ajustând operațiunea astfel încât platforma să livreze rezultate măsurabile încă din prima zi.',
      items: [
        'Strategie de implementare și deployment',
        'Design de conversație și tuning de asistent',
        'Consultanță operațională pentru vânzări, suport și call center',
        'Training, enablement și certificare de echipă',
      ],
    },
    plans: {
      eyebrow: 'Planuri',
      heading: 'Prețuri pe măsura scării tale.',
      body:
        'Prețuri pe volum, pachete de credite custom și deployment-uri multi-organizație, construite în jurul utilizării tale, nu plafonate de ea.',
      items: [
        'Pachete de credite custom și prețuri pe volum',
        'Deployment multi-organizație pentru unități de business',
        'Contracte anuale cu termeni flexibili de reînnoire',
      ],
    },
    contactBlock: {
      heading: 'Vorbește cu noi.',
      subtitle:
        'Spune-ne despre echipa ta, revenim într-o zi lucrătoare cu o propunere personalizată.',
      emailLabel: 'Email',
      email: 'enterprise@fineguide.ai',
      phoneLabel: 'Telefon',
      ctaLabel: 'Programează o discuție detaliată',
    },
    finalCta: {
      heading: 'Când ești gata, suntem aici.',
      subtitle: 'Începe o conversație și preluăm noi de acolo.',
      ctaLabel: 'Contactează vânzările',
    },
  },

  // --- Contact Page ---
  contactMeta: {
    title: 'Contact | Fineguide.ai',
    description: 'Contactează echipa Fineguide. Suntem aici pentru întrebări, suport tehnic sau să discutăm cum platforma AI poate ajuta afacerea ta.',
  },
  contact: {
    heading: 'Contactează-ne',
    subtitle: 'Vrei să afli cum Fineguide poate transforma interacțiunile tale cu clienții? Scrie-ne și răspundem cât mai curând.',
    talkHeading: 'Hai să vorbim',
    talkText: 'Fie că vrei să automatizezi suportul, să captezi mai multe lead-uri sau să integrezi AI în workflow, suntem aici să te ajutăm.',
    emailLabel: 'Email',
    phoneLabel: 'Telefon',
    demoLabel: 'Programează un demo',
    demoSubtext: 'Walkthrough personalizat al platformei',
    responseNote: 'De obicei răspundem în 2-4 ore în zilele lucrătoare.',
    demoCta: 'Programează demo',
    formHeading: 'Trimite-ne un mesaj',
    nameLabel: 'Nume',
    namePlaceholder: 'Numele tău',
    emailFieldLabel: 'Email',
    emailPlaceholder: 'email@companie.com',
    subjectLabel: 'Subiect',
    subjectDefault: 'Alege un subiect',
    subjectOptions: ['Întrebare vânzări', 'Suport tehnic', 'Parteneriat', 'Întrebare generală', 'Altul'],
    messageLabel: 'Mesaj',
    messagePlaceholder: 'Spune-ne cum te putem ajuta...',
    submitButton: 'Trimite mesaj',
    submitting: 'Se trimite...',
    successMessage: 'Mulțumim! Mesajul tău a fost trimis cu succes. Revenim cât mai curând.',
    errorMessage: 'A apărut o eroare. Te rugăm să încerci din nou.',
    validationName: 'Numele este obligatoriu.',
    validationEmail: 'Te rugăm să introduci o adresă de email validă.',
    validationMessage: 'Mesajul este obligatoriu.',
    faqHeading: 'Întrebări frecvente',
    faqSubheading: 'Despre procesul de contact și suport',
    faq: [
      { q: 'Cât de repede primesc răspuns?', a: 'De obicei răspundem în 2-4 ore în zilele lucrătoare (Luni-Vineri, 9:00-18:00). Pentru urgențe, te rugăm să menționezi acest lucru în mesaj.' },
      { q: 'Pot programa un demo în loc?', a: 'Bineînțeles! Poți <a href="/schedule-demo">programa un demo personalizat</a> pentru a vedea Fineguide în acțiune. Specialiștii noștri vor prezenta platforma pe baza nevoilor tale specifice.' },
      { q: 'Ce informații ar trebui să includ?', a: 'Include numele companiei, provocările actuale cu clienții și ce vrei să obții cu automatizarea AI. Cu cât mai multe detalii oferi, cu atât mai bine putem adapta răspunsul.' },
    ],
  },

  // --- Schedule Demo Page ---
  scheduleDemoMeta: {
    title: 'Programează un demo | Fineguide.ai',
    description: 'Programează un demo personalizat al platformei Fineguide. Află cum te putem ajuta să califici mai multe lead-uri, să oferi suport mai bun și să automatizezi workflow-urile.',
  },
  scheduleDemo: {
    heading: 'Programează un demo<br class="hidden sm:block" /> personalizat',
    subtitle: 'Află cum Fineguide poate transforma interacțiunile tale cu clienții. Primește o demonstrație adaptată nevoilor și industriei tale.',
    stats: [
      { value: '30 min', label: 'Demo personalizat' },
      { value: 'Live', label: 'Walkthrough al platformei' },
      { value: 'Custom', label: 'Adaptat industriei tale' },
      { value: 'Gratuit', label: 'Fără obligații' },
    ],
    bullets: ['Fără presiune de vânzări', 'Exemple specifice industriei', 'Sesiune Q&A inclusă'],
    calendarHeading: 'Alege o dată convenabilă',
    calendarSubtext: 'Folosește calendarul de mai jos pentru a-ți programa demo-ul',
    expectHeading: 'La ce să te aștepți la demo',
    expectSubtext: 'Specialiștii noștri vor prezenta platforma într-o sesiune adaptată nevoilor tale.',
    expectCards: [
      { title: 'Prezentare a platformei', text: 'Walkthrough prin asistenți AI, CRM, workspace, Voice QA, Voice AI și automatizări n8n într-o singură poveste conectată.', duration: '~15 minute' },
      { title: 'Exemple specifice industriei', text: 'Cazuri reale adaptate industriei și modelului tău de business.', duration: '~10 minute' },
      { title: 'Sesiune Q&A', text: 'Întreabă despre implementare, prețuri, integrări și cum se potrivește Fineguide în workflow-ul tău.', duration: '~5 minute' },
    ],
    faqHeading: 'Întrebări frecvente',
    faqSubheading: 'Despre procesul de demo',
    faq: [
      { q: 'Cât durează demo-ul?', a: 'Demo-ul standard este de 30 de minute, dar putem adapta în funcție de nevoile tale. Ne concentrăm pe funcționalitățile cele mai relevante pentru cazul tău de utilizare.' },
      { q: 'Este un apel de vânzări?', a: 'Fără presiune! Este o demonstrație de produs care te ajută să înțelegi dacă Fineguide este potrivit pentru afacerea ta. Scopul nostru este să oferim valoare și să răspundem la întrebări.' },
      { q: 'Pot aduce și echipa?', a: 'Absolut! Te încurajăm să inviți colegii relevanți. Cu cât mai mult context avem despre nevoile tale, cu atât mai bine putem personaliza demo-ul.' },
      { q: 'Ce fac dacă trebuie să reprogramez?', a: 'Nicio problemă! Răspunde la email-ul de confirmare sau contactează-ne direct. Suntem flexibili și bucuroși să găsim un timp care funcționează pentru toți.' },
    ],
  },
};
