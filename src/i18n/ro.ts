import type { Translations } from './types';

export const ro: Translations = {
  // --- Navbar ---
  nav: {
    overview: 'Acasă',
    platform: 'Platformă',
    assistants: 'Asistenți AI',
    crm: 'CRM',
    voiceQa: 'Voice QA',
    voiceAi: 'Voice AI',
    workspace: 'Workspace',
    // Secțiuni pe pagina principală, nu pagini separate. Legate din footer ca
    // modulele din spatele lor să fie accesibile altfel decât prin derulare.
    messages: 'Mesaje și Inbox',
    campaigns: 'Campanii',
    automations: 'Automatizări',
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
    title: 'Fineguide.ai | Platformă AI pentru relația cu clienții',
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

  // --- Customer logo strip ---
  customerLogos: {
    eyebrow: 'Echipe care construiesc deja pe Fineguide',
  },

  // --- Photography alt text ---
  photos: {
    teamOffice: 'Colegi discutând la un birou comun într-un spațiu open-space',
    channelsPhone: 'Un client care scrie unei companii de pe telefon',
    agentHeadset: 'Un agent de suport în timpul unui apel, la biroul său',
    tabletReview: 'Analiza rapoartelor pe tabletă',
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
        desc: 'Conversații, contacte, companii, lead-uri, pipeline-uri, task-uri, inbox de echipă și coadă de rutare.',
      },
      {
        name: 'Voice',
        desc: 'Quality assurance pe fiecare apel, plus telefonie cu agenți AI.',
      },
      {
        name: 'Mesaje',
        desc: 'Un spațiu dedicat pentru fiecare conversație gestionată de asistenți, cu rapoarte proprii.',
      },
      {
        name: 'Inbox',
        desc: 'Email adevărat: conectează-ți propriile căsuțe și domenii prin IMAP și SMTP, cu reguli de rutare.',
      },
      {
        name: 'Workspace',
        desc: 'Documente, decizii și cunoștințe de echipă, alături de fișa clientului.',
      },
      {
        name: 'Automatizări',
        desc: 'Construiește workflow-uri vizual direct în Fineguide sau conectează n8n pentru restul stack-ului tău.',
      },
      {
        name: 'QA & Analytics',
        desc: 'Evaluează fiecare interacțiune, urmărește performanța echipelor și scoate la suprafață informațiile care aduc îmbunătățiri.',
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
      'Fișe de companie cu email și istoric propriu',
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
      'Se conectează la sistemul tău de telefonie prin SIP',
      'Agenți AI pe apeluri live inbound și outbound',
    ],
    screenshotAlt: 'Dashboard statistici Voice QA Fineguide',
  },

  // --- Mesaje și Inbox ---
  conversations: {
    eyebrow: 'Mesaje și Inbox',
    title: 'Fiecare conversație ajunge undeva unde un om poate prelua.',
    body:
      'Chatul și emailul ajung în același spațiu de lucru, cu o coadă, reguli de rutare și departamente în spate. Asistentul rezolvă ce poate; în momentul în care nu mai poate, un coleg are deja conversația și fișa clientului în față.',
    linkLabel: 'Descoperă Mesaje și Inbox',
  },
  // --- Campanii (telefonie outbound) ---
  campaigns: {
    eyebrow: 'Campanii',
    title: 'Apeluri outbound care se desfășoară singure.',
    body:
      'Construiește o audiență, alege scopul apelului și lasă asistenții să lucreze lista. Testează întâi pe numărul tău, urmărește campania rulând și pune-o pe pauză oricând.',
    linkLabel: 'Descoperă campaniile',
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
      title: 'Citește conversația. Actualizează fișa. Nimeni nu intervine.',
      body:
        'Un constructor vizual de workflow-uri chiar în Fineguide: trage pașii pe canvas, lasă AI-ul să extragă câmpurile din conversație și să le scrie direct în CRM. Plus o instanță n8n încorporată, găzduită de noi sau adusă de tine, pentru tot ce e dincolo.',
      linkLabel: 'Descoperă automatizările',
      features: [
        'AI-ul extrage câmpuri tipizate din conversația care a declanșat execuția',
        'Creează, actualizează și găsește contacte, lead-uri și companii',
        'Mută lead-uri între etapele pipeline-ului, adaugă etichete, deschide sarcini',
        'Ramifică pe condiții și parcurge în buclă înregistrările găsite',
        'n8n găzduit pe infrastructura Fineguide sau propria ta instanță',
        'Webhook-uri și sute de integrări pre-construite prin n8n',
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
  security: {
    eyebrow: 'Securitate',
    title: 'Datele tale, în condițiile tale.',
    body:
      'Rulează Fineguide pe propria infrastructură atunci când ai nevoie: cloud-ul tău, cluster privat sau bare metal. Datele rămân în interiorul rețelei tale, iar noi sprijinim evaluările de conformitate și auditurile de securitate.',
    linkLabel: 'Vezi implementarea enterprise',
  },

  moduleLinks: {
    assistants: 'Descoperă Asistenții',
    crm: 'Descoperă CRM-ul',
  },

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
      'Notion',
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
      title: 'Asistenți AI pentru WhatsApp, Telegram și web | Fineguide',
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
            'Voci text-to-speech pentru răspunsuri vocale. Alege o voce, sau doar o voce masculină ori feminină, și ascult-o înainte să intre live.',
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
      title: 'CRM construit pe fișa clientului | Fineguide.ai',
      description:
        'Un CRM organizat în jurul fișei clientului: contacte, companii, lead-uri, pipeline-uri și task-uri, cu fiecare conversație atașată aceleiași persoane.',
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
          desc: 'Persoanele cu care faci business, identificate pe numere de telefon, email-uri și nicknames de pe canale.',
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
          name: 'Companii',
          desc: 'Fișe de cont cu adresa lor de email, așa că mesajele către info@ sau billing@ se atașează înainte să știi cine le-a trimis. O persoană poate aparține mai multor companii.',
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
      title: 'Voice QA: evaluează automat fiecare apel | Fineguide',
      description:
        'Evaluare AI automată pe fiecare apel telefonic, pe departamente și după regulile tale. Renunță la eșantionare și vezi problemele din toată operațiunea.',
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
        {
          title: 'Cazuri, nu doar apeluri',
          body:
            'Grupează apelurile din spatele unei probleme, pentru un singur client. Sentimentul citit de-a lungul lor transformă o relație în declin într-o tendință vizibilă, nu într-un șir de zile proaste separate.',
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
      title: 'Workspace: documente lângă clienții tăi | Fineguide.ai',
      description:
        'Editor pe blocuri pentru playbook-uri, brief-uri și cunoștințele echipei, conectat la aceleași contacte, lead-uri și conversații cu care lucrezi deja.',
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
      title: 'Voice AI: agenți AI pe apeluri live | Fineguide.ai',
      description:
        'Aceiași asistenți care gestionează chat-ul web, la telefon. Voice AI preia apeluri inbound, sună outbound și predă către oameni atunci când contează.',
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
        'Voice AI se sprijină pe asistenții și CRM-ul pe care le ai deja, astfel încât telefonul să ruleze pe aceeași configurare și aceeași fișă a clientului ca orice alt canal.',
      blocks: [
        {
          title: 'Automatizare inbound',
          body:
            'Răspunde la apeluri pe numerele tale, zi și noapte. Recunoaște apelanții din CRM și rezolvă solicitările comune fără coadă.',
        },
        {
          title: 'Apeluri outbound',
          body:
            'Sună o listă întreagă cu o campanie de outreach, sondaj sau promoție și ascult-o pe propriul telefon înainte să pornească.',
        },
        {
          title: 'Integrare telefonie',
          body:
            'Se conectează prin SIP la operatorul sau centrala pe care le folosești deja, așa că numerele rămân ale tale.',
        },
        {
          title: 'Conectat la CRM',
          body:
            'Fiecare apel se salvează în istoricul conversației ca transcriere. Un apelant inbound care cere un om e transferat către echipa ta sau lasă o cerere de revenire care devine sarcină în CRM.',
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

  // --- Pagina Automatizări (motor de workflow + n8n) ---
  automationsPage: {
    meta: {
      title: 'Constructor vizual de workflow-uri | Fineguide',
      description:
        'Citește conversația, extrage câmpurile din ea, ramifică după ce găsești și actualizează CRM-ul — douăsprezece declanșatoare și optsprezece acțiuni, fără cod.',
    },
    hero: {
      title: 'Citește conversația.',
      titleAccent: ' Actualizează fișa. Nimeni nu se atinge de ea.',
      subtitle:
        'Un constructor vizual în care un workflow pornește de la ceva ce s-a întâmplat cu adevărat — un apel trecut prin Voice QA, un lead care apare, un formular care sosește — și se termină cu CRM-ul deja corect.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Automatizări',
      screenshotAlt: 'Analiza rapoartelor pe tabletă, la birou',
    },
    triggers: {
      eyebrow: 'Douăsprezece declanșatoare',
      heading: 'Un workflow pornește de la ceva ce s-a întâmplat.',
      body:
        'Nu de la un program despre care speri că se aliniază cu realitatea. Evenimentele pe care platforma ta le emite deja sunt evenimentele de la care poate porni un workflow.',
      items: [
        {
          name: 'Activitatea asistentului',
          desc: 'O sesiune care începe sau se încheie, un răspuns evaluat, sau asistentul care termină de colectat informațiile cerute.',
        },
        {
          name: 'Fișe care apar',
          desc: 'Un contact creat dintr-o conversație sau un lead creat oriunde în CRM.',
        },
        {
          name: 'Apeluri și tichete',
          desc: 'Un apel finalizat în Voice QA, transcris sau evaluat, sau un tichet deschis.',
        },
        {
          name: 'Din exterior și la cerere',
          desc: 'Trimiterea unui formular, un webhook primit, un program sau o persoană care apasă „rulează”.',
        },
      ],
    },
    actions: {
      eyebrow: 'Optsprezece acțiuni',
      heading: 'Ce poate face efectiv un workflow astăzi.',
      body:
        'Fiecare acțiune listată aici are un runtime și se execută. Constructorul oferă câteva blocuri aflate încă în lucru, iar acelea sunt marcate în produs, nu vândute aici.',
      items: [
        {
          term: 'Citește și extrage',
          desc: 'Scoate câmpuri structurate dintr-o conversație sau o transcriere cu AI și poartă-le mai departe ca variabile tipizate pe care pasul următor le poate folosi.',
        },
        {
          term: 'Ramifică',
          desc: 'Condiții pe orice se află în context, inclusiv câmpurile tocmai extrase, ca un singur workflow să acopere toate direcțiile în care poate merge o conversație.',
        },
        {
          term: 'Buclează',
          desc: 'Parcurge o listă și rulează aceiași pași pentru fiecare element. Motorul ține câte un cadru per iterație, așa că buclele se imbrică corect, nu se aplatizează.',
        },
        {
          term: 'Caută',
          desc: 'Găsește un contact după orice identificator ai, sau interoghează mai multe fișe deodată și acționează asupra întregului set.',
        },
        {
          term: 'Creează, actualizează, șterge',
          desc: 'Acces complet de scriere la contacte, lead-uri și companii — nouă acțiuni pe cele trei, ca un workflow să termine treaba, nu să lase o notă pentru altcineva.',
        },
        {
          term: 'Mută și etichetează',
          desc: 'Avansează un lead la altă etapă din pipeline și aplică etichete, așa se termină majoritatea acestor workflow-uri.',
        },
        {
          term: 'Repartizează munca',
          desc: 'Creează un task, ca o persoană să preia exact partea care are nevoie de o persoană.',
        },
      ],
    },
    n8n: {
      eyebrow: 'Dincolo de platformă',
      heading: 'Iar când munca iese din Fineguide.',
      body:
        'Constructorul integrat acoperă CRM-ul. Pentru tot ce urmează după — sistemul tău de facturare, depozitul, un API intern — puntea n8n preia de unde se oprește el.',
      bullets: [
        'Folosește instanța n8n găzduită de noi sau arată-ne una pe care o rulezi deja',
        'Sute de integrări pe partea de n8n, pe care nu trebuie să le construim noi',
        'Webhook-uri pe conversații, lead-uri și tichete, pentru orice are un endpoint HTTP',
        'Rulările de workflow fac parte din planul tău — nu consumă credite',
        'Fiecare rulare poate fi inspectată pas cu pas, așa că o eroare îți spune la ce pas și de ce',
      ],
    },
    finalCta: {
      heading: 'Construiește unul și urmărește-l rulând.',
      body:
        'Pornește de la un declanșator pe care îl ai deja, adaugă cei doi-trei pași care urmează și nu mai face partea aia manual.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Pagina Mesaje și Inbox ---
  messagesPage: {
    meta: {
      title: 'Inbox comun pentru chat și email | Fineguide',
      description:
        'Nouă canale de chat și emailul tău într-o singură coadă, cu rutare, departamente și o predare care îi dă omului toată conversația.',
    },
    hero: {
      title: 'Fiecare conversație ajunge',
      titleAccent: ' undeva unde un om poate prelua.',
      subtitle:
        'Asistentul rezolvă ce poate. În momentul în care nu mai poate, un coleg are deja conversația, fișa clientului și istoricul în față.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Mesaje și Inbox',
      screenshotAlt: 'Un client care scrie unei companii de pe telefon',
    },
    channels: {
      eyebrow: 'O singură coadă',
      heading: 'Nouă canale și niciunul nu este un inbox separat.',
      body:
        'Un client care scrie azi pe WhatsApp și săptămâna viitoare pe Instagram este o singură persoană cu un singur istoric. Canalul este un detaliu despre cum a ajuns mesajul, nu un sistem de arhivare.',
      items: [
        {
          name: 'Aplicații de mesagerie',
          desc: 'WhatsApp, Telegram, Instagram și Messenger, conectate o dată și apoi imposibil de deosebit de restul cozii.',
        },
        {
          name: 'Chat de echipă',
          desc: 'Slack și Discord, pentru comunitățile și canalele interne unde clienții tăi sunt deja.',
        },
        {
          name: 'Web și widget-uri',
          desc: 'Site-ul tău, plus JivoChat pentru echipele care îl folosesc deja.',
        },
        {
          name: 'Chat nativ în CRM',
          desc: 'Conversațiile din amoCRM și Kommo ajung în aceeași coadă ca toate celelalte.',
        },
      ],
    },
    handover: {
      eyebrow: 'Predarea',
      heading: 'Partea pe care majoritatea uneltelor o greșesc.',
      body:
        'Escaladarea nu este o notificare. Este o coadă cu reguli, o urmă despre cine a acceptat și o garanție că doi oameni nu răspund niciodată aceluiași client în același timp.',
      items: [
        {
          term: 'O singură coadă',
          desc: 'Conversațiile neatribuite și escaladările care așteaptă să fie acceptate sau refuzate stau într-o singură coadă, ca nimic să nu aștepte într-un loc unde nu se uită nimeni.',
        },
        {
          term: 'Predare între departamente',
          desc: 'Mută o conversație la alt departament și se șterge responsabilul curent, rerutând către echipa aceea, în loc să rămână la cineva care a încetat să o citească.',
        },
        {
          term: 'Detectarea coliziunilor',
          desc: 'Ești anunțat când un coleg are aceeași conversație deschisă — și din nou când începe să scrie în ea.',
        },
        {
          term: 'Răspunsuri salvate',
          desc: 'Răspunsuri partajate de toată echipa, inserate direct cu „/”, nu copiate dintr-un document pe care nu îl mai actualizează nimeni.',
        },
        {
          term: 'Program de lucru',
          desc: 'Un răspuns automat în afara orelor pentru toată echipa, ținut separat de programul personal al fiecărui agent, ca cele două să nu se contrazică.',
        },
      ],
    },
    email: {
      eyebrow: 'Inbox',
      heading: 'Email adevărat, nu un formular de contact.',
      body:
        'Conectează căsuța de pe care trimiți deja, prin IMAP și SMTP. Pentru că mesajele pleacă de pe serverul tău, nu al nostru, livrabilitatea și reputația de expeditor rămân ale tale.',
      bullets: [
        'Conectează-ți propriile căsuțe și propriile domenii prin IMAP și SMTP',
        'Regulile de rutare decid cărei căsuțe îi aparține un mesaj și cine îl preia',
        'Semnături per căsuță, ca răspunsurile să pară trimise de persoana care le trimite',
        'Rapoarte per căsuță, alături de rapoartele de chat, nu într-o unealtă separată',
        'Conversațiile se atașează aceleiași fișe de client ca fiecare chat și apel',
      ],
    },
    safety: {
      eyebrow: 'AI pe email, în siguranță',
      heading: 'Trei limite care vin deja pornite.',
      body:
        'Momentul în care lași AI-ul să răspundă la email este cel în care majoritatea echipelor devin nervoase, pe bună dreptate. Acestea sunt valori implicite, nu setări pe care trebuie să le descoperi.',
      items: [
        {
          term: 'Oprit implicit',
          desc: 'O căsuță nouă este doar pentru oameni. Răspunsurile AI le pornești deliberat, per căsuță, după ce ai citit ce ar fi spus.',
        },
        {
          term: 'O pauză înainte de trimitere',
          desc: 'Răspunsurile așteaptă înainte să plece, ca un coleg care citește deja conversația să o poată prelua, iar clientul să nu primească două răspunsuri.',
        },
        {
          term: 'O limită fermă per conversație',
          desc: 'După un număr stabilit de răspunsuri AI într-o conversație, se oprește și predă unui om — schema numește asta asigurare împotriva buclelor, și exact asta este.',
        },
      ],
    },
    finalCta: {
      heading: 'Pune fiecare canal într-o singură coadă.',
      body:
        'Conectează un canal, urmărește asistentul lucrând și preia oricând vrei. Predarea este partea pe care am construit-o prima.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Pagina Campanii (telefonie outbound) ---
  campaignsPage: {
    meta: {
      title: 'Apeluri outbound care se desfășoară singure | Fineguide',
      description:
        'Construiește o audiență, alege scopul apelului și lasă asistenții AI să lucreze lista. Testează întâi pe numărul tău, apoi urmărește campania rulând.',
    },
    hero: {
      title: 'Apeluri outbound',
      titleAccent: ' care se desfășoară singure.',
      subtitle:
        'Îndreaptă o campanie către o listă și asistenții o sună — pe rând, în ritmul tău, cu fiecare rezultat scris înapoi în fișa clientului.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Campanii',
      screenshotAlt: 'Un telefon de birou într-un spațiu open-space, cu notițe alături',
    },
    types: {
      eyebrow: 'Trei tipuri de campanie',
      heading: 'Scopul apelului schimbă ce se întâmplă după el.',
      body:
        'O campanie nu este doar un dialer. Fiecare tip se termină altfel — unul lasă o conversație, unul lasă un set de date, unul lasă o pâlnie — iar raportarea urmează de acolo.',
      items: [
        {
          name: 'Outreach',
          desc: 'Outbound liber. Asistentul deschide conversația și o duce unde trebuie, iar tot schimbul rămâne salvat ca transcriere.',
        },
        {
          name: 'Sondaj',
          desc: 'Un chestionar structurat. Răspunsurile sunt extrase la finalul fiecărui apel și agregate pe toată campania, ca să citești un rezultat, nu un teanc de înregistrări.',
        },
        {
          name: 'Promoție',
          desc: 'O ofertă limitată în timp. Fiecare rezultat — acceptat, refuzat, revenire cerută — devine o etapă, așa că raportul se citește ca o pâlnie de conversie, nu ca un jurnal de apeluri.',
        },
      ],
    },
    audience: {
      eyebrow: 'Construirea listei',
      heading: 'Cine este sunat și ce se întâmplă când nu răspunde.',
      body:
        'Audiențele vin de unde sunt deja contactele tale. Comportamentul la reapelare îl stabilești tu, iar singura regulă neconfigurabilă este cea care contează: un refuz nu este niciodată reapelat.',
      items: [
        {
          term: 'Audiențe',
          desc: 'Încarcă un CSV, trage din contactele existente, selectează după etichetă sau combină-le pe toate trei într-o singură listă.',
        },
        {
          term: 'Segmente',
          desc: 'Salvează un filtru ca segment reutilizabil și îndreaptă campaniile viitoare către el, în loc să reconstruiești aceeași listă de fiecare dată.',
        },
        {
          term: 'Reapelări',
          desc: 'Reapelează la lipsă de răspuns sau ocupat, cu propria întârziere per rezultat. Un contact care refuză nu mai este sunat de acea campanie.',
        },
        {
          term: 'Apeluri de test',
          desc: 'Rulează campania pe numărul tău și ascultă exact ce ar auzi un client, înainte ca vreun contact real să fie sunat.',
        },
        {
          term: 'Control în timp real',
          desc: 'Pune pe pauză o campanie activă, reia-o sau oprește-o definitiv. Progresul și statusul fiecărui contact rămân vizibile tot timpul.',
        },
      ],
    },
    telephony: {
      eyebrow: 'Sistemul tău telefonic',
      heading: 'Folosește numerele pe care le ai deja.',
      body:
        'Campaniile rulează peste telefonia ta existentă, nu peste un număr închiriat de noi, așa că numerele, identificarea apelantului și costurile de carrier rămân unde sunt azi.',
      bullets: [
        'Conectează operatorul sau centrala ta printr-un cont SIP standard',
        'Alocă fiecare număr inbound asistentului care trebuie să răspundă',
        'La apelurile inbound, transferă apelantul către echipa ta sau preia o cerere de revenire ca sarcină în CRM',
        'Fiecare apel se atașează aceleiași fișe de client ca și chat-urile și emailurile',
        'Taxare pe minut răspuns, cu un minim de un minut',
      ],
    },
    finalCta: {
      heading: 'Rulează prima campanie pe propriul tău număr.',
      body:
        'Construiește o listă, dă un apel de test și ascultă ce ar auzi clienții tăi. Nimic nu ajunge la un contact real până nu spui tu.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Pricing Page ---
  pricingMeta: {
    title: 'Prețuri | Fineguide.ai',
    description: 'Prețuri bazate pe credite, cu toate modulele AI incluse din primul plan. Compară creditele, locurile și limitele de cunoștințe și adaugi capacitate oricând.',
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
    freeBanner: 'Începe cu 200 de credite din partea noastră. Fără card, fără obligații.',
    freeBannerCta: 'Creează cont gratuit',
    freeLabel: 'pentru totdeauna',
    oneTimeCredits: 'Credite inițiale',
    plans: [
      {
        desc: '200 de credite gratuite la înregistrare, fără card. Cumperi mai multe doar când ai nevoie.',
        credits: '200 de credite pentru a explora platforma',
        features: ['1 membru', '1M caractere bază de cunoștințe', 'Suport comunitate', 'Reîncărcare pay-as-you-go'],
      },
      {
        desc: 'Pentru echipe mici care vor să automatizeze primele interacțiuni.',
        credits: '≈ 3.000 de conversații text sau 250 de minute Voice QA',
        features: ['3 locuri incluse, €20 pentru fiecare loc în plus', '5M caractere bază de cunoștințe', 'Suport pe email', 'Toate modulele AI incluse'],
      },
      {
        desc: 'Pentru companii în creștere care au nevoie de mai multă capacitate.',
        credits: '≈ 8.000 de conversații text sau 660 de minute Voice QA',
        features: ['5 locuri incluse, €18 pentru fiecare loc în plus', '10M caractere bază de cunoștințe', 'Suport prioritar', 'Analytics avansat'],
      },
      {
        desc: 'Pentru echipe mari cu volum ridicat de interacțiuni.',
        credits: '≈ 25.000 de conversații text sau 2.000 de minute Voice QA',
        features: ['10 locuri incluse, €15 pentru fiecare loc în plus', '20M caractere bază de cunoștințe', 'Suport dedicat', 'Acces API & webhook-uri'],
      },
    ],
  },

  // --- PricingAddons ---
  pricingAddons: {
    eyebrow: 'Extra',
    heading: 'Extinde exact partea de care ai nevoie',
    subtitle:
      'Locurile, creditele și capacitatea bazei de cunoștințe se plătesc separat, așa că extinzi doar ce ți se termină, fără să sari un plan întreg.',
    items: [
      {
        icon: 'seat',
        title: 'Locuri suplimentare',
        body: 'Planurile plătite nu îți limitează echipa. Locurile din plan sunt cele acoperite de preț; fiecare persoană peste acest număr se facturează per loc, lunar.',
        rates: [
          { label: 'Starter', value: '€20 / loc' },
          { label: 'Business', value: '€18 / loc' },
          { label: 'Premium', value: '€15 / loc' },
        ],
      },
      {
        icon: 'credit',
        title: 'Credite suplimentare',
        body: 'Reîncarci oricând ai nevoie. Creditele cumpărate se adaugă peste alocarea lunară și nu expiră niciodată, deci nu pierzi nimic la finalul ciclului.',
        rates: [
          { label: 'Starter', value: '€40 / 1.000' },
          { label: 'Business', value: '€30 / 1.000' },
          { label: 'Premium', value: '€24 / 1.000' },
        ],
      },
      {
        icon: 'context',
        title: 'Pachete de context',
        body: 'Mai mult spațiu pentru documentele, paginile și PDF-urile pe care le citesc asistenții tăi. Fiecare pachet adaugă 5 milioane de caractere, aproximativ o mie de documente.',
        rates: [
          { label: 'Per pachet, lunar', value: '€20' },
          { label: 'Capacitate adăugată', value: '+5M caractere' },
          { label: 'Pachete per cont', value: 'Nelimitat' },
        ],
      },
    ],
    footnote:
      'Fiecare extra se facturează lunar, alături de planul tău, și poate fi adăugat sau eliminat oricând. Singura excepție sunt creditele suplimentare: odată cumpărate rămân ale tale, fără termen de expirare.',
  },

  // --- PricingCredits ---
  pricingCredits: {
    heading: 'Cum funcționează creditele',
    subtitle: 'Sistemul flexibil de credite îți dă control deplin asupra utilizării AI, pe toate funcționalitățile platformei.',
    categories: [
      {
        title: 'Conversații AI',
        icon: 'message',
        rows: [
          { label: 'Mesaj text', value: '1 credit' },
          { label: 'Mesaj + atașament', value: '2 credite' },
          { label: 'Procesare documente', value: 'Inclus' },
        ],
      },
      {
        title: 'Voice',
        icon: 'mic',
        rows: [
          { label: 'Voice QA, per minut', value: '12 credite' },
          { label: 'Voice AI, per minut', value: '10 credite' },
          { label: 'Voci premium, per minut', value: '30 credite' },
        ],
      },
      {
        title: 'Platformă',
        icon: 'grid',
        rows: [
          { label: 'CRM, Inbox și Mesaje', value: 'Gratuit' },
          { label: 'Workflow-uri și integrări', value: 'Gratuit' },
          { label: 'Analytics și rapoarte', value: 'Gratuit' },
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
      { q: 'Cum funcționează creditele?', a: 'Fiecare mesaj text AI costă 1 credit, sau 2 cu atașament. Voice QA folosește 12 credite per minut, Voice AI 10 per minut, iar vocile premium 30 per minut. Restul — CRM, Inbox, Mesaje, workflow-uri, analytics și integrări — este inclus fără cost suplimentar și nu consumă credite.' },
      { q: 'Expiră creditele?', a: 'Creditele din abonamentul lunar se resetează la fiecare ciclu de facturare. Pachetele extra de credite nu expiră niciodată.' },
      { q: 'Pot schimba planul?', a: 'Da, poți upgrada sau downgrada oricând. Modificările intră în vigoare la următorul ciclu de facturare. Poți cumpăra credite suplimentare oricând.' },
      { q: 'Ce se întâmplă dacă rămân fără credite?', a: 'Poți cumpăra credite suplimentare instant. Asistenții AI vor continua să funcționeze și vei fi notificat când creditele sunt aproape de epuizare.' },
      { q: 'Există un trial gratuit?', a: 'Da. Toate conturile noi primesc credite gratuite pentru a testa platforma. Poți explora toate funcționalitățile înainte de a alege un plan plătit.' },
    ],
  },

  // --- Enterprise Page ---
  enterpriseMeta: {
    title: 'Enterprise: on-premise și consultanță | Fineguide.ai',
    description:
      'Planuri custom, deployment on-premise pe infrastructura ta, adaptarea platformei și consultanță pentru echipe cu cerințe de securitate sau scalare.',
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
    // Must differ from the English title — two URLs with the same <title> make
    // Google pick one and drop the other from the index.
    title: 'Contactează echipa Fineguide.ai',
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
    description: 'Programează un demo personalizat al platformei Fineguide și află cum califici mai multe lead-uri, oferi suport mai bun și automatizezi munca repetitivă.',
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
