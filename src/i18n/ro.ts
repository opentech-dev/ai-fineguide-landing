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
    tagline: 'Platforma de nouă generație care reunește conversațiile, CRM-ul, apelurile și workspace-ul pe o singură fundație, construită nativ pe AI.',
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
      'Platforma de nouă generație pentru relația cu clienții. Reunește conversațiile, CRM-ul, canalele și fluxurile de lucru, construită pe AI de la bun început.',
  },

  // --- Hero ---
  hero: {
    title: 'Transformă felul în care afacerea ta comunică cu clienții.',
    subtitle:
      'Conversațiile, CRM-ul, canalele și fluxurile de lucru, reunite într-o singură platformă construită pe AI de la bun început.',
    ctaPrimary: 'Începe acum',
    ctaSecondary: 'Programează un demo',
  },

  // --- Customer logo strip ---
  customerLogos: {
    eyebrow: 'Echipe care lucrează deja cu Fineguide',
  },

  // --- Photography alt text ---
  photos: {
    teamOffice: 'Colegi care discută la o masă comună, într-un birou open space',
    channelsPhone: 'Un client care scrie unei companii de pe telefon',
    agentHeadset: 'Un agent de suport în timpul unui apel, la biroul său',
    tabletReview: 'Analiza rapoartelor pe tabletă',
  },

  // --- Overview intro ---
  overview: {
    eyebrow: 'Platforma',
    body:
      'Fineguide reunește într-o singură platformă asistenții AI, CRM-ul, telefonia, canalele de chat și workspace-ul echipei. Fiecare conversație, fișă de client, apel și document intern sunt conectate în același sistem.',
    modules: [
      {
        name: 'Asistenți',
        desc: 'AI care răspunde clienților pe web, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
      },
      {
        name: 'CRM',
        desc: 'Conversații, contacte, companii, lead-uri, pipeline-uri, sarcini, inbox de echipă și coadă de rutare.',
      },
      {
        name: 'Voice',
        desc: 'Controlul calității pe fiecare apel, plus agenți AI pentru apeluri primite și efectuate.',
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
        desc: 'Construiește vizual workflow-uri direct în Fineguide sau conectează n8n la restul aplicațiilor tale.',
      },
      {
        name: 'QA & Analytics',
        desc: 'Evaluează fiecare interacțiune, urmărește performanța echipelor și descoperă ce merită îmbunătățit.',
      },
    ],
  },

  // --- Assistants spread ---
  assistantsSpread: {
    eyebrow: 'Asistenți',
    title: 'AI care gestionează fiecare conversație.',
    body:
      'Pune la lucru asistenți care învață din documentele tale, respectă regulile tale și notează ce contează. Îi întâmpină pe clienți pe toate canalele pe care ești prezent și transformă fiecare conversație în date structurate, gata de folosit de echipa ta.',
    features: [
      'Canale: Web · WhatsApp · Telegram · Instagram · Messenger · Slack · Discord',
      'Cunoștințe din URL-uri, documente și PDF-uri',
      'Personalitate, voce și reguli de escaladare configurabile',
      'Extrage intenția și datele clientului direct în lead-urile din CRM',
      'Monitorizarea conversațiilor în timp real, rapoarte și feedback continuu',
    ],
    screenshotAlt: 'Dashboard analytics asistenți Fineguide',
  },

  // --- CRM spread ---
  crmSpread: {
    eyebrow: 'CRM',
    title: 'O singură fișă a clientului. Toată echipa. Toate conversațiile.',
    body:
      'Vânzările văd tranzacția. Suportul vede tichetul. Call center-ul vede coada. Toată lumea vede același client, același istoric și același context, fără exporturi și importuri între aplicații.',
    features: [
      'Pipeline-uri și etape, vizualizări Kanban și tabel',
      'Sarcini, responsabili și termene',
      'Fișe de companie cu email și istoric propriu',
      'Inbox de echipă și coadă de rutare',
      'Câmpuri personalizate completate automat de asistenți',
    ],
    screenshotAlt: 'Panou CRM Fineguide cu sarcini în coloane Kanban',
  },

  // --- Voice spread (dark) ---
  voiceSpread: {
    eyebrow: 'Voice',
    title: 'Fiecare apel, evaluat și structurat.',
    body:
      'Voice QA evaluează apelurile automat, pe departamente, după regulile tale și în limbile pe care le vorbește echipa ta. Voice AI îi pune la telefon pe aceiași asistenți care îți gestionează chatul.',
    features: [
      'Transcriere și evaluare automată pe fiecare apel',
      'Criterii de evaluare și ponderi pentru fiecare departament',
      'Feedback pentru agenți și dashboard-uri cu evoluția în timp',
      'Se conectează la sistemul tău de telefonie prin SIP',
      'Agenți AI în apeluri reale, primite și efectuate',
    ],
    screenshotAlt: 'Dashboard statistici Voice QA Fineguide',
  },

  // --- Mesaje și Inbox ---
  conversations: {
    eyebrow: 'Mesaje și Inbox',
    title: 'Fiecare conversație ajunge acolo unde un om o poate prelua.',
    body:
      'Chatul și emailul ajung în același spațiu de lucru, organizate pe coadă, reguli de rutare și departamente. Asistentul rezolvă ce poate; când nu mai poate, un coleg are deja în față conversația și fișa clientului.',
    linkLabel: 'Descoperă Mesaje și Inbox',
  },
  // --- Campanii (telefonie outbound) ---
  campaigns: {
    eyebrow: 'Campanii',
    title: 'Campanii de apeluri care se derulează singure.',
    body:
      'Creează o audiență, alege scopul apelului și lasă asistenții să parcurgă lista. Testează mai întâi pe numărul tău, urmărește campania în timp real și pune-o pe pauză oricând.',
    linkLabel: 'Descoperă campaniile',
  },

  // --- Workspace + Automations ---
  workspaceAutomations: {
    workspace: {
      eyebrow: 'Workspace',
      title: 'Documentele echipei, lângă fișa clientului.',
      body:
        'Un editor bazat pe blocuri pentru playbook-uri, brief-uri și cunoștințe de echipă, conectat la aceleași contacte și clienți cu care echipa ta lucrează deja.',
      features: [
        'Editor cu blocuri și comenzi slash',
        'Foldere ierarhice, reorganizate prin drag-and-drop',
        'Căutare full-text în întregul workspace',
        'Coș de gunoi cu recuperare',
      ],
    },
    automations: {
      eyebrow: 'Automatizări',
      title: 'Citește conversația. Actualizează fișa. Nimeni nu intervine.',
      body:
        'Un editor vizual de workflow-uri direct în Fineguide: tragi pașii pe canvas, lași AI-ul să extragă câmpurile din conversație și să le scrie direct în CRM. Pentru tot restul ai n8n integrat, găzduit de noi sau pe propria ta instanță.',
      linkLabel: 'Descoperă automatizările',
      features: [
        'AI-ul extrage câmpuri cu tip definit din conversația care a pornit workflow-ul',
        'Creează, actualizează și găsește contacte, lead-uri și companii',
        'Mută lead-uri între etapele pipeline-ului, adaugă etichete, creează sarcini',
        'Ramificații pe condiții și bucle peste fișele găsite',
        'n8n găzduit pe infrastructura Fineguide sau propria ta instanță',
        'Webhook-uri și sute de integrări gata făcute prin n8n',
      ],
    },
  },

  // --- Numbers ---
  numbers: {
    eyebrow: 'În cifre',
    items: [
      {
        figure: '24/7',
        prose: 'răspuns AI în mai puțin de două secunde, pe fiecare canal conectat.',
      },
      {
        figure: '30+',
        prose: 'limbi disponibile pentru transcrierea apelurilor și conversațiile cu clienții.',
      },
      {
        figure: 'O singură',
        prose: 'platformă în locul celor șapte aplicații pe care altfel le-ai lega cu sârmă.',
      },
    ],
  },

  // --- Industries ---
  industries: {
    eyebrow: 'Gândit pentru',
    body:
      'Cu Fineguide, echipele de vânzări califică lead-urile mai repede. Echipele de suport fac față volumelor mari fără să angajeze mai mulți oameni. Call center-ele evaluează calitatea și îndrumă agenții în timp real. Echipele de customer success păstrează o imagine unitară a fiecărui cont, pe toate canalele.',
    audiences: 'Vânzări · Suport · Customer success · Operațiuni call center',
  },

  // --- Integrations ribbon ---
  security: {
    eyebrow: 'Securitate',
    title: 'Datele tale, în condițiile tale.',
    body:
      'Rulează Fineguide pe propria infrastructură atunci când ai nevoie: în cloud-ul tău, pe un cluster privat sau pe bare metal. Datele nu ies din rețeaua ta, iar noi te sprijinim la evaluările de conformitate și auditurile de securitate.',
    linkLabel: 'Vezi opțiunile Enterprise',
  },

  moduleLinks: {
    assistants: 'Descoperă Asistenții',
    crm: 'Descoperă CRM-ul',
  },

  integrationsRibbon: {
    eyebrow: 'Se integrează cu aplicațiile pe care le folosești deja',
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
    heading: 'Gata să aduci totul într-un singur loc?',
    body:
      'Vezi în 15 minute cum ar funcționa Fineguide în afacerea ta.',
    ctaPrimary: 'Începe acum',
    ctaSecondary: 'Vorbește cu echipa de vânzări',
  },

  // --- AI Assistants page ---
  assistantsPage: {
    meta: {
      title: 'Asistenți AI pentru WhatsApp, Telegram și web | Fineguide',
      description:
        'Asistenți AI care învață din documentele tale, respectă regulile tale și rețin ce contează, pe web, WhatsApp, Telegram, Instagram, Messenger, Slack și Discord.',
    },
    hero: {
      title: 'Asistenți AI care gestionează',
      titleAccent: ' conversațiile.',
      subtitle:
        'Asistenți care învață din documentele tale, respectă regulile tale și notează ce contează, pe toate canalele pe care ești prezent.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul Asistenți',
      body:
        'Fiecare asistent este un AI configurabil care întâmpină clienții, răspunde la întrebări, califică lead-uri și scrie date structurate în CRM. Tu decizi ce știe, cum vorbește, când predă conversația unui om și ce informații reține, apoi îl activezi pe canalele pe care clienții tăi le folosesc deja.',
      screenshotAlt: 'Analytics asistent Fineguide, sesiuni, satisfacție, sentiment',
    },
    channels: {
      eyebrow: 'Canale',
      heading: 'Un singur asistent. Toate canalele.',
      body:
        'Îl configurezi o singură dată. Asistentul apare acolo unde sunt clienții tăi: în widgetul de pe site, în inboxurile rețelelor sociale, în aplicațiile de mesagerie și, prin integrările CRM, chiar în aplicațiile pe care echipa ta le folosește deja.',
      groups: [
        {
          label: 'Direct',
          items: 'Widget web · WhatsApp · Telegram · Instagram · Messenger · Slack · Discord',
        },
        {
          label: 'Integrări CRM',
          items: 'AmoCRM · Kommo',
        },
      ],
    },
    configuration: {
      eyebrow: 'Configurare',
      heading: 'Ajustează fiecare detaliu.',
      body:
        'Setările implicite funcționează din prima. Când ai nevoie de mai mult, poți ajusta personalitatea, cunoștințele, vocea, extragerea datelor, acțiunile și predarea către un om.',
      blocks: [
        {
          title: 'Personalitate',
          body:
            'Prompt de sistem, stil de comunicare și nivel de detaliu. Adaugă tonul brandului tău sau limitează asistentul la un anumit rol.',
        },
        {
          title: 'Bază de cunoștințe',
          body:
            'Încarcă documente, adaugă URL-uri sau atașează PDF-uri. Asistentul își bazează fiecare răspuns pe informațiile primite de la tine, fără să inventeze.',
        },
        {
          title: 'Voce',
          body:
            'Voci sintetizate pentru răspunsurile vorbite. Alege o voce anume sau doar genul vocii, masculină ori feminină, și ascultă cum sună înainte de lansare.',
        },
        {
          title: 'Variabile de sesiune',
          body:
            'Definește câmpurile pe care asistentul le extrage din conversație (nume, intenție, buget, problemă) și ele ajung automat în lead-urile din CRM.',
        },
        {
          title: 'Acțiuni',
          body:
            'Declanșează webhook-uri, apeluri API sau workflow-uri direct din conversație. Programează întâlniri, deschide tichete, transferă conversația unui coleg.',
        },
        {
          title: 'Predare către un coleg',
          body:
            'Conversația trece la un om, după reguli clare, când clientul cere asta sau când asistentul ajunge la limitele stabilite de tine.',
        },
      ],
    },
    extraction: {
      eyebrow: 'De la conversație la CRM',
      heading: 'Fiecare chat devine o fișă structurată.',
      body:
        'Ce făcea înainte un agent, copiind notițe din chat într-un tabel, se întâmplă acum automat și fără greșeli.',
      steps: [
        'Clientul începe o conversație pe orice canal conectat',
        'Asistentul identifică intenția, extrage câmpurile pe care le-ai definit și răspunde pe baza informațiilor tale',
        'Un lead este creat în CRM, sau fuzionat cu un contact existent, fără introducere manuală',
        'Câmpurile personalizate completează lead-ul, așa că datele pot fi căutate, segmentate și folosite în automatizări',
        'Conversațiile în desfășurare se adună într-un singur loc, iar rapoartele se grupează pe asistent, canal și perioadă',
      ],
    },
    leadAnatomy: {
      eyebrow: 'Anatomia unui lead',
      heading: 'Un lead înseamnă mai mult decât un nume și un număr de telefon.',
      body:
        'Asistenții rețin automat informațiile care contează pentru tine, pe fiecare canal. Datele de identificare sunt incluse. Câmpurile personalizate, precum bugetul, serviciul solicitat sau data mutării, le definești tu, pentru afacerea ta.',
      card: {
        title: 'Lead #4218',
        meta: 'WhatsApp · acum 2 minute',
        fields: [
          { label: 'Nume', value: 'Maria Popescu', ai: false },
          { label: 'Telefon', value: '+40 720 123 456', ai: false },
          { label: 'Email', value: 'maria.p@example.com', ai: false },
          { label: 'Serviciu solicitat', value: 'Voice QA · 5 agenți', ai: true },
          { label: 'Buget', value: '€2.000 - €4.000 / lună', ai: true },
          { label: 'Intenție', value: 'Prețuri și demo', ai: true },
          { label: 'Etapă', value: 'Calificat', ai: false },
          { label: 'Următoarea acțiune', value: 'Programare apel', ai: false },
        ],
        footerLabel: 'AI',
        footerNote:
          'Câmpurile marcate AI sunt completate de asistent pe baza conversației. Le poți defini pe ale tale în configurarea asistentului.',
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
            fields: 'Mărimea companiei · Caz de utilizare · Termen de decizie · Instrumente actuale · Interes pentru un pilot',
          },
          {
            label: 'Sănătate',
            fields: 'Serviciu solicitat · Asigurare · Dată preferată · Specialist · Sursa recomandării',
          },
        ],
      },
    },
    finalCta: {
      heading: 'Gata să-ți pui asistentul la treabă?',
      body: 'Vezi în 15 minute un asistent configurat pentru afacerea ta.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- CRM page ---
  crmPage: {
    meta: {
      title: 'CRM construit pe fișa clientului | Fineguide.ai',
      description:
        'Un CRM organizat în jurul fișei clientului: contacte, companii, lead-uri, pipeline-uri și sarcini, cu fiecare conversație atașată aceleiași persoane.',
    },
    hero: {
      title: 'O singură fișă. Toată echipa.',
      titleAccent: ' Toate conversațiile.',
      subtitle:
        'Vânzările văd tranzacția. Suportul vede tichetul. Call center-ul vede coada. Toată lumea vede același client, fără exporturi și importuri între aplicații.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul CRM',
      body:
        'CRM-ul Fineguide este centrul operațional în care asistenții aduc lead-uri, agenții le transformă în clienți, iar managerii văd imaginea reală. Fiecare conversație, contact și sarcină este legată de aceeași fișă a clientului, pe toate canalele pe care lucrează afacerea ta.',
      screenshotAlt: 'Panoul de sarcini din CRM-ul Fineguide, cu coloanele Todo, În progres și Gata',
    },
    surfaces: {
      eyebrow: 'În interiorul CRM-ului',
      heading: 'Opt secțiuni, o singură fișă a clientului.',
      body:
        'Fiecare secțiune îți arată aceleași date dintr-un alt unghi, așa că nu dublezi munca, nu pierzi contextul și nu te mai întrebi unde e versiunea cea mai recentă.',
      items: [
        {
          name: 'Conversații',
          desc: 'Conversațiile în curs și cele încheiate, de pe toate canalele, cu profilul clientului și contextul lead-ului atașate.',
        },
        {
          name: 'Contacte',
          desc: 'Persoanele cu care lucrezi, recunoscute după numărul de telefon, adresa de email și numele de utilizator de pe fiecare canal.',
        },
        {
          name: 'Lead-uri',
          desc: 'Oportunități calificate, cu câmpuri structurate, inclusiv câmpuri personalizate extrase de asistenții tăi.',
        },
        {
          name: 'Pipeline-uri',
          desc: 'Vizualizare Kanban sau tabel pentru fiecare pipeline. Etape, responsabili și SLA-uri care reflectă felul în care vinde, de fapt, echipa ta.',
        },
        {
          name: 'Sarcini',
          desc: 'Reveniri, apeluri de urmărire și lucruri de făcut, cu status, prioritate și termen, create din orice conversație sau lead.',
        },
        {
          name: 'Companii',
          desc: 'Fișe de companie cu propria adresă de email, așa că mesajele trimise la info@ sau billing@ ajung la locul lor chiar înainte să știi cine le-a scris. O persoană poate face parte din mai multe companii.',
        },
        {
          name: 'Inbox de echipă',
          desc: 'Un loc comun pentru conversațiile care așteaptă un om: le preiei, răspunzi sau le transmiți mai departe, fără să vă încurcați unii pe alții.',
        },
        {
          name: 'Coadă',
          desc: 'Distribuirea conversațiilor și apelurilor în timp real: prin rotație (round-robin), către responsabilul clientului sau după reguli, în funcție de cum lucrează echipa ta.',
        },
      ],
    },
    customerRecord: {
      eyebrow: 'Fișa clientului',
      heading: 'Clientul rămâne același, oricare ar fi canalul.',
      body:
        'Un client care îți scrie luni pe WhatsApp și te sună marți este același client. Fineguide îl recunoaște după numărul de telefon, adresa de email și numele de utilizator de pe canale și atașează fiecare conversație, lead și tichet aceleiași fișe, ca să nu pierzi niciodată contextul.',
      bullets: [
        'Profiluri unificate automat după numărul de telefon, email și numele de pe canale',
        'Câmpuri personalizate completate de asistenți în timpul conversației',
        'Tot istoricul (chat-uri, apeluri, tichete, sarcini) pe o singură cronologie',
        'Segmentare la nivelul întregii organizații, pe care se pot baza automatizările și exporturile',
      ],
    },
    finalCta: {
      heading: 'Nu mai jongla între aplicații.',
      body: 'Vezi cum se compară CRM-ul Fineguide cu instrumentele pe care le folosești azi.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Voice QA page ---
  voiceQaPage: {
    meta: {
      title: 'Voice QA: evaluează automat fiecare apel | Fineguide',
      description:
        'Evaluare AI automată pentru fiecare apel telefonic, pe departamente și după regulile tale. Renunță la eșantioane și vezi problemele din toată activitatea.',
    },
    hero: {
      title: 'Fiecare apel, evaluat',
      titleAccent: ' și structurat.',
      subtitle:
        'Evaluare AI automată pentru fiecare apel, pe departamente, după regulile tale și în limbile pe care le vorbește echipa ta. Renunță la eșantioane. Vezi tot ce se întâmplă.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul Voice QA',
      body:
        'Un manager de calitate care ascultă zece apeluri pe zi vede doar unu la sută din ce se întâmplă la telefon. Voice QA le evaluează pe toate, automat, după aceleași criterii și suficient de repede încât feedback-ul să conteze.',
      screenshotAlt: 'Dashboard statistici Voice QA Fineguide, buget, minute și grafic de tendințe',
    },
    process: {
      eyebrow: 'Cum funcționează',
      heading: 'Cinci pași. Fiecare apel.',
      body:
        'Conectezi o sursă de apeluri, îți definești regulile, iar platforma ascultă în locul tău. Agenții primesc feedback în aceeași zi. Managerii văd tendința înainte să devină o problemă.',
      steps: [
        'Conectează o sursă de apeluri: operatorul de telefonie, sistemul de înregistrare sau centrala telefonică (PBX). Apelurile sunt preluate automat.',
        'AI-ul transcrie fiecare conversație în peste 30 de limbi, identifică vorbitorii și structurează dialogul.',
        'Fiecare apel este evaluat după regulile fiecărui departament, cu punctaj fix sau ponderat, fără eșantionare manuală.',
        'Agentul primește un punctaj pentru fiecare regulă, fragmentele relevante din conversație și sugestii concrete de îmbunătățire.',
        'Managerul vede performanța pe departamente, agenți și clienți, cu tendințele și punctele slabe scoase în evidență.',
      ],
    },
    configuration: {
      eyebrow: 'Configurare',
      heading: 'Reguli pe departamente, după propriul tău sistem de punctare.',
      body:
        'Fiecare echipă are propriul standard de calitate. Voice QA îți permite să-l transpui în reguli și ponderi diferite pentru fiecare departament, iar același motor evaluează în paralel apeluri de vânzări, tichete de suport și conversații de retenție.',
      blocks: [
        {
          title: 'Departamente',
          body:
            'Organizează pe echipă, locație sau funcție. Fiecare departament are propriile categorii, criterii și dashboard-uri.',
        },
        {
          title: 'Categorii și reguli',
          body:
            'Definește cum arată un apel bun (deschiderea, identificarea nevoilor, gestionarea obiecțiilor, conformitatea) și cum se punctează fiecare regulă.',
        },
        {
          title: 'Fix sau ponderat',
          body:
            'Tratează toate regulile la fel sau dă o pondere mai mare celor care contează cel mai mult. Calculul urmează politica ta, nu invers.',
        },
        {
          title: 'Feedback pentru agent',
          body:
            'Punctaj pe fiecare regulă, cu fragmente din conversație. Sugestiile ajung la agent în aceeași zi, nu la următoarea evaluare trimestrială.',
        },
        {
          title: 'Integrare telefonie',
          body:
            'Se conectează la sistemul de telefonie sau de înregistrare pe care îl ai deja. Nu înlocuiești nimic și nu introduci datele de două ori.',
        },
        {
          title: 'Legătură cu CRM',
          body:
            'Apelurile se atașează aceleiași fișe a clientului ca și chat-urile și tichetele. Clientul este o singură poveste, nu trei.',
        },
      ],
    },
    extraction: {
      eyebrow: 'Informații utile',
      heading: 'Descoperă problemele și tendințele noi.',
      body:
        'Voice QA transformă fiecare apel în informații structurate, ca problemele și tendințele să devină vizibile în toată activitatea, nu doar în apelurile pe care un manager le aude din întâmplare.',
      blocks: [
        {
          title: 'Extragere personalizată',
          body:
            'Spune-i AI-ului ce să rețină din fiecare apel: produsele menționate, tipurile de reclamații, cauzele reale, numele concurenților.',
        },
        {
          title: 'Probleme frecvente',
          body:
            'Vezi ce produse generează cele mai multe reclamații și la ce întrebări le e greu agenților să răspundă, din mii de apeluri.',
        },
        {
          title: 'Tendințe noi',
          body:
            'Observă problemele noi, schimbările de atitudine ale clienților sau mențiunile despre concurenți imediat ce apar, nu după câteva săptămâni.',
        },
        {
          title: 'Cazuri, nu doar apeluri',
          body:
            'Grupează apelurile legate de aceeași problemă a unui client. Tonul urmărit de la un apel la altul arată o relație care se degradează ca pe o tendință clară, nu ca pe un șir de zile proaste fără legătură.',
        },
      ],
      footer:
        'Configurezi totul pe departamente și trimiți rezultatele în dashboard-uri sau prin webhook-uri.',
    },
    finalCta: {
      heading: 'Renunță la eșantioane. Evaluează fiecare apel.',
      body: 'Vezi în 15 minute cum evaluează Voice QA apelurile tale.',
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
      title: 'Documentele echipei,',
      titleAccent: ' lângă fișa clientului.',
      subtitle:
        'Un editor bazat pe blocuri pentru playbook-uri, brief-uri și cunoștințe de echipă, conectat la aceleași contacte și clienți cu care echipa ta lucrează deja.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Modulul Workspace',
      body:
        'Workspace este un editor structurat (blocuri, ierarhie, comenzi slash) integrat în același produs cu CRM-ul și conversațiile tale. Scrii un playbook o singură dată, iar cei care au nevoie de el îl găsesc acolo unde lucrează deja.',
      screenshotAlt: 'Editor de documente Workspace Fineguide cu meniul de comenzi slash',
    },
    editor: {
      eyebrow: 'Editorul',
      heading: 'Blocuri, nu pagini goale.',
      body:
        'Titluri, liste, citate, cod, casete evidențiate și tabele. Blocurile se combină liber între ele. Comenzile slash grăbesc scrisul, iar scurtăturile de tastatură, tot restul.',
      blocks: [
        {
          title: 'Structură pe blocuri',
          body:
            'Titluri, paragrafe, liste, citate, cod, tabele, casete evidențiate. Tragi ca să reordonezi, indentezi ca să imbrici și schimbi tipul blocului dintr-o singură tastă.',
        },
        {
          title: 'Comenzi slash',
          body:
            'Tastezi „/” și ai la îndemână toate tipurile de blocuri, elementele încorporate și scurtăturile. Fără căutat prin meniuri, fără pauze de formatare.',
        },
        {
          title: 'Actualizări în timp real',
          body:
            'Modificările ajung imediat la toată echipa. Comentariile și mențiunile rămân atașate blocului, nu unui fir de email vechi.',
        },
      ],
    },
    structure: {
      eyebrow: 'Organizare',
      heading: 'Ierarhie, căutare și recuperare.',
      body:
        'Workspace se organizează după felul în care gândește echipa ta: foldere pentru departamente, documente pentru playbook-uri, recente și favorite pentru ce ai deschis săptămâna trecută.',
      bullets: [
        'Ierarhie de foldere și documente cu reordonare drag-and-drop',
        'Recente și favorite pentru documentele pe care le folosești zilnic',
        'Căutare full-text în întregul workspace',
        'Coș de gunoi cu recuperare, așa că nimic nu se pierde definitiv la ștergere',
      ],
    },
    connected: {
      eyebrow: 'Conectat la clienții tăi',
      heading: 'Documente care știu despre cine vorbesc.',
      body:
        'Leagă un document de un contact, un lead sau o fișă de client. Următorul coleg care deschide clientul în CRM vede imediat playbook-ul, rezumatul apelului sau oferta deja existentă. Nimic nu se mai pierde prin istoricul din Slack.',
    },
    finalCta: {
      heading: 'Gata să aduci totul într-un singur loc?',
      body: 'Vezi în 15 minute workspace-ul, CRM-ul și asistenții lucrând împreună.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Voice AI page ---
  voiceAiPage: {
    // Aceleași afirmații ca în en.ts, verificate în cod; lista a ce produsul NU
    // face este impusă de scripts/verify-claims.mjs.
    meta: {
      title: 'Voice AI: agenți AI care răspund la telefon | Fineguide',
      description:
        'Agenți AI pe numerele tale, prin SIP. Recunosc apelanții din CRM, fac legătura cu echipa la cerere și sună liste întregi. Plătești doar minutele convorbite.',
    },
    hero: {
      title: 'Asistentul care',
      titleAccent: ' răspunde la telefon.',
      subtitle:
        'Asistenții pe care îi folosești deja în chat, acum pe numerele tale de telefon. Recunosc cine sună, fac legătura cu un coleg când li se cere și sună liste întregi când ai nevoie.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Voice AI',
      screenshotAlt: 'O operatoare de call center cu căști, în mijlocul unei convorbiri',
    },
    inbound: {
      eyebrow: 'Apeluri primite',
      heading: 'La numerele tale răspunde asistentul pe care îl alegi.',
      body:
        'Nu trebuie să treci pe un număr închiriat de la noi. Conectezi sistemul telefonic pe care îl ai, alegi ce asistent răspunde la fiecare număr și ce se întâmplă când biroul e închis.',
      items: [
        {
          name: 'Numerele tale',
          desc: 'Conectează operatorul sau centrala printr-un cont SIP standard, apoi alocă fiecare număr asistentului care trebuie să răspundă.',
        },
        {
          name: 'Apelanți recunoscuți',
          desc: 'Activează salutul pe nume: un apelant al cărui număr e în CRM este salutat pe prenume, iar asistentul vede deja compania din care sună.',
        },
        {
          name: 'Program de lucru',
          desc: 'În afara programului stabilit, lasă apelul să sune în continuare, redirecționează-l către alt număr sau răspunde cu un mesaj care preia o cerere de revenire.',
        },
        {
          name: 'Un om când contează',
          desc: 'Un apelant care cere să vorbească cu un om este transferat la numărul call center-ului, doar în programul acestuia, dacă l-ai setat. Altfel, lasă o cerere de revenire care ajunge în CRM ca sarcină.',
        },
      ],
    },
    voice: {
      eyebrow: 'În timpul apelului',
      heading: 'Alege motorul, vocea și limbile.',
      body:
        'Aceeași configurare a asistentului pe care o folosești în chat, cu alegerile pe care le adaugă un apel. Totul se setează separat pentru fiecare asistent.',
      items: [
        {
          term: 'Patru motoare',
          desc: 'OpenAI Realtime, Google Gemini Live, ElevenLabs Agents sau Gemini împreună cu o voce separată de la ElevenLabs, Google Chirp 3 HD, Gemini ori OpenAI.',
        },
        {
          term: 'Voci',
          desc: 'Alege o voce anume sau doar genul vocii, masculină ori feminină, și ascultă cum sună înainte ca asistentul să intre în funcțiune.',
        },
        {
          term: 'Limbi',
          desc: 'Un asistent poate vorbi mai multe limbi, de la română, engleză și rusă până la arabă, japoneză și chineză. Răspunde în limba în care vorbește apelantul.',
        },
        {
          term: 'Întreruperi',
          desc: 'Apelantul poate vorbi peste asistent, iar acesta se oprește să asculte, ca un om. Un detector de voce face ca zgomotul de pe linie să nu-l întrerupă.',
        },
        {
          term: 'Ce știe',
          desc: 'Baza de cunoștințe, căutarea web și acțiunile personalizate configurate pentru chat funcționează și la telefon, iar asistentul așteaptă rezultatul real înainte să răspundă.',
        },
      ],
    },
    outbound: {
      eyebrow: 'Apeluri efectuate',
      heading: 'Sună o listă întreagă, nu număr cu număr.',
      body:
        'Apelurile către clienți pornesc ca o campanie: o audiență, un script și un program, parcurse de asistenți în ritmul ales de tine.',
      bullets: [
        'Campanii de prospectare, sondaj și promoție, fiecare cu raportul potrivit tipului ei',
        'Răspunsuri la sondaje și rezultate ale promoțiilor extrase din fiecare apel încheiat',
        'Un apel de test pe propriul telefon înainte să fie sunat vreun contact real',
        'Reîncercări când nu se răspunde sau e ocupat, cu intervalul ales de tine',
      ],
      linkLabel: 'Vezi campaniile',
    },
    afterCall: {
      eyebrow: 'După apel',
      heading: 'Ce rămâne și cât costă.',
      body:
        'Fiecare apel lasă o transcriere pe care echipa o poate citi și un cost pe care îl poți estima dinainte.',
      items: [
        {
          term: 'Transcriere',
          desc: 'Fiecare apel telefonic se salvează ca transcriere în istoricul conversațiilor, în același loc cu conversațiile de chat.',
        },
        {
          term: 'Sarcini de revenire',
          desc: 'Cererile de revenire ajung pe panoul de sarcini cu numărul apelantului și o notă scurtă despre ce a vrut.',
        },
        {
          term: 'Pe minut, de la preluare',
          desc: 'Apelurile consumă din portofelul comun de credite din momentul în care sunt preluate, nu cât timp sună, cu rotunjire la secundă și minimum un minut.',
        },
        {
          term: 'Tarife',
          desc: '10 credite pe minut pe OpenAI, Gemini sau motorul Gemini cu voce separată și 30 pe ElevenLabs Agents, dacă planul tău nu are tarife proprii.',
        },
        {
          term: 'Fără facturi surpriză',
          desc: 'Un apel pornește doar dacă portofelul acoperă primul minut, așa că un sold epuizat oprește apelurile, fără să se acumuleze datorii.',
        },
      ],
    },
    finalCta: {
      heading: 'Ascultă-l chiar pe telefonul tău.',
      body: 'Conectează un număr, alege o voce și sună-l chiar tu. Sau vezi Voice AI, campaniile și restul platformei într-un singur demo.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Pagina Automatizări (motor de workflow + n8n) ---
  automationsPage: {
    meta: {
      title: 'Editor vizual de workflow-uri pentru CRM | Fineguide',
      description:
        'Citește conversația, extrage câmpurile, alege ramura potrivită și actualizează CRM-ul. Douăsprezece declanșatoare și optsprezece acțiuni, fără cod.',
    },
    hero: {
      title: 'Citește conversația.',
      titleAccent: ' Actualizează fișa. Nimeni nu intervine.',
      subtitle:
        'Un editor vizual în care fiecare workflow pornește de la un eveniment real (un apel trecut prin Voice QA, un lead nou, un formular trimis) și se încheie cu CRM-ul deja actualizat.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Automatizări',
      screenshotAlt: 'Analiza rapoartelor pe tabletă, la birou',
    },
    triggers: {
      eyebrow: 'Douăsprezece declanșatoare',
      heading: 'Un workflow pornește de la un eveniment real.',
      body:
        'Nu de la o oră fixă despre care speri că se potrivește cu realitatea. Orice eveniment pe care platforma îl generează deja poate porni un workflow.',
      items: [
        {
          name: 'Activitatea asistentului',
          desc: 'O sesiune care începe sau se încheie, un răspuns evaluat sau momentul în care asistentul a strâns toate informațiile cerute.',
        },
        {
          name: 'Fișe noi',
          desc: 'Un contact creat dintr-o conversație sau un lead creat oriunde în CRM.',
        },
        {
          name: 'Apeluri și tichete',
          desc: 'Un apel finalizat în Voice QA, transcris sau evaluat, sau un tichet deschis.',
        },
        {
          name: 'Din exterior și la cerere',
          desc: 'Un formular trimis, un webhook primit, o programare orară sau un clic pe „Rulează”.',
        },
      ],
    },
    actions: {
      eyebrow: 'Optsprezece acțiuni',
      heading: 'Ce poate face un workflow, deja de azi.',
      body:
        'Toate acțiunile de mai jos funcționează deja. Editorul afișează și câteva blocuri aflate încă în dezvoltare; sunt marcate ca atare în produs și nu le promovăm aici.',
      items: [
        {
          term: 'Citește și extrage',
          desc: 'Extrage cu AI câmpuri structurate dintr-o conversație sau dintr-o transcriere și transmite-le mai departe ca variabile cu tip definit, gata de folosit în pasul următor.',
        },
        {
          term: 'Ramifică',
          desc: 'Condiții pe orice se află în context, inclusiv pe câmpurile tocmai extrase, ca un singur workflow să acopere toate variantele în care poate evolua o conversație.',
        },
        {
          term: 'Repetă',
          desc: 'Parcurge o listă și rulează aceiași pași pentru fiecare element. Buclele pot fi imbricate, iar fiecare își urmărește propriul element.',
        },
        {
          term: 'Caută',
          desc: 'Găsește un contact după orice identificator ai, sau interoghează mai multe fișe deodată și acționează asupra întregului set.',
        },
        {
          term: 'Creează, actualizează, șterge',
          desc: 'Acces complet de scriere la contacte, lead-uri și companii: nouă acțiuni pentru cele trei tipuri de fișe, ca workflow-ul să ducă treaba la capăt, nu să lase o notiță pentru altcineva.',
        },
        {
          term: 'Mută și etichetează',
          desc: 'Mută un lead în altă etapă a pipeline-ului și adaugă etichete. Așa se încheie majoritatea workflow-urilor.',
        },
        {
          term: 'Repartizează munca',
          desc: 'Creează o sarcină, ca un om să preia exact partea care are nevoie de un om.',
        },
      ],
    },
    n8n: {
      eyebrow: 'Dincolo de platformă',
      heading: 'Și când treaba continuă în afara Fineguide.',
      body:
        'Editorul integrat acoperă CRM-ul. Pentru tot ce vine după, cum ar fi sistemul de facturare, depozitul sau un API intern, integrarea cu n8n preia de unde se oprește acesta.',
      bullets: [
        'Folosește instanța n8n găzduită de noi sau conectează-ți propria instanță',
        'Sute de integrări disponibile deja în n8n',
        'Webhook-uri pe conversații, lead-uri și tichete, pentru orice are un endpoint HTTP',
        'Rulările de workflow sunt incluse în plan și nu consumă credite',
        'Fiecare rulare poate fi verificată pas cu pas, așa că la o eroare vezi exact unde a apărut și de ce',
      ],
    },
    finalCta: {
      heading: 'Creează un workflow și urmărește-l cum rulează.',
      body:
        'Pornește de la un declanșator pe care îl ai deja, adaugă cei doi-trei pași care urmează și renunță la munca manuală.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Pagina Mesaje și Inbox ---
  messagesPage: {
    meta: {
      title: 'Inbox comun pentru chat și email | Fineguide',
      description:
        'Nouă canale de chat și emailul tău într-o singură coadă, cu rutare, departamente și o predare prin care colegul primește toată conversația.',
    },
    hero: {
      title: 'Fiecare conversație.',
      titleAccent: ' Un singur inbox.',
      subtitle:
        'Asistentul rezolvă ce poate. Când nu mai poate, un coleg are deja în față conversația, fișa clientului și tot istoricul.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
    intro: {
      eyebrow: 'Mesaje și Inbox',
      screenshotAlt: 'Un client care scrie unei companii de pe telefon',
    },
    channels: {
      eyebrow: 'O singură coadă',
      heading: 'Nouă canale, fără niciun inbox separat.',
      body:
        'Un client care scrie azi pe WhatsApp și săptămâna viitoare pe Instagram este o singură persoană cu un singur istoric. Canalul arată doar pe unde a venit mesajul; nu este un criteriu de arhivare.',
      items: [
        {
          name: 'Aplicații de mesagerie',
          desc: 'WhatsApp, Telegram, Instagram și Messenger, conectate o singură dată și gestionate apoi exact ca restul cozii.',
        },
        {
          name: 'Chat de echipă',
          desc: 'Slack și Discord, pentru comunitățile și canalele interne unde se află deja clienții tăi.',
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
      heading: 'Partea la care greșesc cele mai multe aplicații.',
      body:
        'Escaladarea nu este o notificare. Este o coadă cu reguli, o evidență a celui care a preluat conversația și garanția că doi oameni nu răspund niciodată aceluiași client în același timp.',
      items: [
        {
          term: 'O singură coadă',
          desc: 'Conversațiile neatribuite și escaladările care așteaptă să fie acceptate sau refuzate stau într-o singură coadă, ca nimic să nu aștepte într-un loc unde nu se uită nimeni.',
        },
        {
          term: 'Predare între departamente',
          desc: 'Când muți o conversație la alt departament, responsabilul actual este eliminat și conversația este redistribuită în echipa respectivă, în loc să rămână la cineva care nu o mai urmărește.',
        },
        {
          term: 'Detectarea suprapunerilor',
          desc: 'Afli când un coleg are deschisă aceeași conversație și din nou când începe să scrie în ea.',
        },
        {
          term: 'Răspunsuri salvate',
          desc: 'Răspunsuri partajate de toată echipa, inserate direct cu „/”, nu copiate dintr-un document pe care nu îl mai actualizează nimeni.',
        },
        {
          term: 'Program de lucru',
          desc: 'Un răspuns automat în afara programului, valabil pentru toată echipa și separat de programul personal al fiecărui agent, ca cele două să nu se contrazică.',
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
        'Semnături pentru fiecare căsuță, ca răspunsurile să poarte numele celui care le trimite',
        'Rapoarte pentru fiecare căsuță, alături de cele de chat, nu într-o aplicație separată',
        'Conversațiile se atașează fișei clientului din CRM',
      ],
    },
    safety: {
      eyebrow: 'AI pe email, în siguranță',
      heading: 'Trei măsuri de siguranță, active din start.',
      body:
        'Când lasă AI-ul să răspundă la email-uri, cele mai multe echipe devin precaute, pe bună dreptate. De aceea, aceste protecții sunt active implicit, nu setări pe care trebuie să le descoperi singur.',
      items: [
        {
          term: 'Oprit implicit',
          desc: 'O căsuță nouă este doar pentru oameni. Răspunsurile AI le activezi intenționat, pentru fiecare căsuță, după ce ai văzut ce ar fi răspuns.',
        },
        {
          term: 'O pauză înainte de trimitere',
          desc: 'Răspunsurile așteaptă înainte să plece, ca un coleg care citește deja conversația să o poată prelua, iar clientul să nu primească două răspunsuri.',
        },
        {
          term: 'O limită fermă pe conversație',
          desc: 'După un număr stabilit de răspunsuri AI într-o conversație, AI-ul se oprește și predă conversația unui om, ca două sisteme automate să nu-și răspundă la nesfârșit.',
        },
      ],
    },
    finalCta: {
      heading: 'Adu toate canalele într-o singură coadă.',
      body:
        'Conectează un canal, urmărește cum lucrează asistentul și preia conversația oricând vrei. Predarea către un om este prima parte pe care am construit-o.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Pagina Campanii (telefonie outbound) ---
  campaignsPage: {
    meta: {
      title: 'Campanii de apeluri care se derulează singure | Fineguide',
      description:
        'Creează o audiență, alege scopul apelului și lasă asistenții AI să parcurgă lista. Testează mai întâi pe numărul tău, apoi urmărește campania în timp real.',
    },
    hero: {
      title: 'Campanii de apeluri',
      titleAccent: ' care se derulează singure.',
      subtitle:
        'Alegi lista, iar asistenții sună contactele unul câte unul, în ritmul tău, cu rezultatul urmărit pentru fiecare.',
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
        'O campanie nu înseamnă doar formarea automată a numerelor. Fiecare tip se încheie altfel: unul cu o conversație, altul cu un set de date, altul cu o pâlnie de conversie. Rapoartele urmează această logică.',
      items: [
        {
          name: 'Prospectare',
          desc: 'Apeluri fără un format fix. Asistentul deschide conversația și o duce unde trebuie, iar tot dialogul rămâne salvat ca transcriere.',
        },
        {
          name: 'Sondaj',
          desc: 'Un chestionar structurat. Răspunsurile sunt extrase la finalul fiecărui apel și agregate pe toată campania, ca să citești un rezultat, nu un teanc de înregistrări.',
        },
        {
          name: 'Promoție',
          desc: 'O ofertă limitată în timp. Fiecare rezultat (acceptat, refuzat, revenire cerută) devine o etapă, așa că raportul se citește ca o pâlnie de conversie, nu ca un jurnal de apeluri.',
        },
      ],
    },
    audience: {
      eyebrow: 'Construirea listei',
      heading: 'Cine este sunat și ce se întâmplă când nu răspunde.',
      body:
        'Audiențele pornesc de la contactele pe care le ai deja. Tu decizi când se reîncearcă un apel, iar singura regulă fixă este cea care contează: cine refuză nu mai este sunat.',
      items: [
        {
          term: 'Audiențe',
          desc: 'Încarcă un fișier CSV, alege din contactele existente, filtrează după etichetă sau combină toate trei variantele într-o singură listă.',
        },
        {
          term: 'Segmente',
          desc: 'Salvează un filtru ca segment reutilizabil și folosește-l în campaniile viitoare, în loc să refaci aceeași listă de fiecare dată.',
        },
        {
          term: 'Reapelări',
          desc: 'Contactul este sunat din nou dacă nu răspunde sau are ocupat, după intervalul setat pentru fiecare situație. Un contact care refuză nu mai este sunat în acea campanie.',
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
        'Campaniile folosesc telefonia pe care o ai deja, nu un număr închiriat de la noi, așa că numerele, ID-ul de apelant și costurile cu operatorul rămân cele de azi.',
      bullets: [
        'Conectează operatorul sau centrala ta printr-un cont SIP standard',
        'Alocă fiecare număr pentru apeluri primite asistentului care trebuie să răspundă',
        'La apelurile primite, transferă apelantul către echipa ta sau preia o cerere de revenire ca sarcină în CRM',
        'Fiecare apel rămâne ca transcriere alături de conversațiile de chat',
        'Taxare pe minut, de la preluarea apelului, cu minimum un minut',
      ],
    },
    finalCta: {
      heading: 'Testează prima campanie pe numărul tău.',
      body:
        'Creează o listă, dă un apel de test și ascultă ce ar auzi clienții tăi. Niciun contact real nu este sunat până nu decizi tu.',
      ctaPrimary: 'Începe acum',
      ctaSecondary: 'Programează un demo',
    },
  },

  // --- Pricing Page ---
  pricingMeta: {
    title: 'Prețuri | Fineguide.ai',
    description:
      'Planuri de la €0 la €500 pe lună sau cu 20% mai puțin plătite anual. Vezi ce include fiecare: credite, locuri în echipă, cunoștințe și suport.',
  },
  pricingPage: {
    heading: 'Plătești pentru ce face AI-ul.<br /><span class="text-[var(--color-primary)]">Restul este inclus.</span>',
    subtitle:
      'Fiecare plan funcționează pe bază de credite. Le consumă doar răspunsurile AI și minutele de apel. CRM-ul, inboxul, mesajele și workflow-urile nu consumă niciodată credite.',
    bullets: ['Plan gratuit, fără card', 'Fără taxe de instalare', 'Anulezi oricând'],
  },

  pricingExplainer: {
    eyebrow: 'Ce cumpără un credit',
    items: [
      { value: '1 credit', term: 'Un răspuns AI', desc: 'Un răspuns obișnuit al unui asistent, pe orice canal.' },
      { value: '12 credite', term: 'Un minut de evaluare a apelurilor', desc: 'Voice QA transcrie apelul și îl evaluează după criteriile tale.' },
      { value: '10 credite', term: 'Un minut de apel telefonic AI', desc: 'Voice AI răspunde sau sună. 30 pe minut cu agenții vocali ElevenLabs.' },
      { value: '0 credite', term: 'Tot restul', desc: 'CRM, Inbox, Mesaje, workflow-uri și rapoarte.' },
    ],
  },

  pricingPlans: {
    perMonth: '/lună',
    freeLabel: 'pentru totdeauna',
    periodLabel: 'Perioada de facturare',
    monthly: 'Lunar',
    yearly: 'Anual',
    yearlySave: 'economisești 20%',
    currencyLabel: 'Monedă',
    billedMonthly: 'Facturat lunar',
    billedYearly: 'Facturat {yearTotal} pe an. Economisești {yearSaving}.',
    freeBilling: 'Fără card',
    yearlyTopupNote: '15% reducere pe planurile anuale',
    mostPopular: 'Cel mai popular',
    ctaFree: 'Începe gratuit',
    ctaPaid: 'Începe acum',
    labels: {
      credits: 'Credite',
      team: 'Echipă',
      knowledge: 'Bază de cunoștințe',
      extraCredits: 'Credite suplimentare',
      support: 'Suport',
    },
    footnote: 'Creditele și spațiul pentru cunoștințe sunt comune pentru toată organizația ta.',
    yearlyNote:
      'Planurile anuale se plătesc o dată pe an. Creditele vin în continuare în fiecare lună, iar locurile suplimentare se facturează lunar.',
    usdNote: 'Prețuri afișate în dolari americani. Deocamdată cardul este debitat cu aceeași sumă în euro.',
    plans: [
      {
        name: 'Free',
        desc: 'Încearcă platforma cu propriul tău conținut.',
        credits: '200, o singură dată',
        creditsNote: 'Aproximativ 200 de răspunsuri AI. Nu se reînnoiesc.',
        team: 'Tu + 1 coleg',
        teamNote: 'Fără locuri suplimentare pe Free',
        knowledge: 'Aproximativ 200 de documente',
        knowledgeNote: '1M caractere',
        extraCredits: '{topup0} pentru 1.000',
        support: 'Comunitate',
      },
      {
        name: 'Starter',
        desc: 'O echipă mică ce pune la treabă primul asistent.',
        credits: '3.000 în fiecare lună',
        creditsNote: 'Aproximativ 3.000 de răspunsuri AI sau 250 de minute de evaluare a apelurilor',
        team: 'Tu + 3 colegi',
        teamNote: 'Apoi {seat1} de persoană pe lună',
        knowledge: 'Aproximativ 1.000 de documente',
        knowledgeNote: '5M caractere',
        extraCredits: '{topup1} pentru 1.000',
        support: 'Email',
      },
      {
        name: 'Business',
        desc: 'O echipă în creștere, cu volum zilnic constant.',
        credits: '8.000 în fiecare lună',
        creditsNote: 'Aproximativ 8.000 de răspunsuri AI sau 660 de minute de evaluare a apelurilor',
        team: 'Tu + 5 colegi',
        teamNote: 'Apoi {seat2} de persoană pe lună',
        knowledge: 'Aproximativ 2.000 de documente',
        knowledgeNote: '10M caractere',
        extraCredits: '{topup2} pentru 1.000',
        support: 'Prioritar',
      },
      {
        name: 'Premium',
        desc: 'Mai multe echipe sau un volum mare de apeluri și conversații.',
        credits: '25.000 în fiecare lună',
        creditsNote: 'Aproximativ 25.000 de răspunsuri AI sau 2.080 de minute de evaluare a apelurilor',
        team: 'Tu + 10 colegi',
        teamNote: 'Apoi {seat3} de persoană pe lună',
        knowledge: 'Aproximativ 4.000 de documente',
        knowledgeNote: '20M caractere',
        extraCredits: '{topup3} pentru 1.000',
        support: 'Dedicat',
      },
    ],
  },

  pricingRunOut: {
    eyebrow: 'Când se termină creditele',
    heading: 'AI-ul se oprește. Echipa ta lucrează în continuare.',
    subtitle:
      'Cumperi credite oricând și AI-ul pornește din nou imediat. Pe un plan plătit poți activa și reîncărcarea automată, ca să primești credite înainte de oprire, până la o limită lunară pe care o alegi.',
    pausesLabel: 'Se oprește',
    pauses: [
      'Răspunsurile AI, pe toate canalele',
      'Evaluarea apelurilor',
      'Apelurile telefonice AI noi. Un apel deja început se termină normal.',
    ],
    keepsLabel: 'Funcționează în continuare',
    keeps: ['CRM și contacte', 'Inbox și Mesaje', 'Workflow-uri', 'Datele și setările tale'],
  },

  pricingAddons: {
    eyebrow: 'Opțiuni suplimentare',
    heading: 'Ai nevoie de mai mult? Adaugi doar ce îți lipsește.',
    subtitle:
      'Locurile, creditele și spațiul pentru cunoștințe se vând separat, ca să nu schimbi planul doar pentru că ai nevoie de mai mult dintr-unul.',
    items: [
      {
        icon: 'seat',
        title: 'Locuri suplimentare',
        body: 'Inviți mai multe persoane decât acoperă planul, oricând. Fiecare persoană în plus se facturează lunar, împreună cu planul. Free nu are locuri suplimentare.',
        rates: [
          { label: 'Starter', value: '{seat1} / persoană' },
          { label: 'Business', value: '{seat2} / persoană' },
          { label: 'Premium', value: '{seat3} / persoană' },
        ],
      },
      {
        icon: 'credit',
        title: 'Credite suplimentare',
        body: 'Cumperi credite când ai nevoie, pe orice plan, inclusiv Free. Se adaugă la sold și rămân acolo cât timp păstrezi același plan. Pe un plan anual costă cu 15% mai puțin.',
        rates: [
          { label: 'Free', value: '{topup0} / 1.000' },
          { label: 'Starter', value: '{topup1} / 1.000' },
          { label: 'Business', value: '{topup2} / 1.000' },
          { label: 'Premium', value: '{topup3} / 1.000' },
        ],
      },
      {
        icon: 'context',
        title: 'Context Packs',
        body: 'Mai mult loc pentru documentele, paginile și PDF-urile pe care le citesc asistenții, pe orice plan. Fiecare pachet este o plată lunară separată, la care poți renunța oricând.',
        rates: [
          { label: 'Per pachet, pe lună', value: '{pack}' },
          { label: 'Spațiu adăugat', value: '+5M caractere' },
          { label: 'Aproximativ', value: '1.000 de documente' },
        ],
      },
    ],
    footnote:
      'Un Context Pack poate fi eliminat doar dacă tot conținutul încape fără el. Dacă nu încape, șterge mai întâi o parte din conținut.',
  },

  pricingCredits: {
    eyebrow: 'Detaliile',
    heading: 'Cum se numără creditele',
    items: [
      {
        term: 'Răspunsuri AI',
        desc: 'Un răspuns obișnuit costă 1 credit. Când asistentul trebuie să facă mai multe acțiuni ca să răspundă, de exemplu să caute o informație sau să actualizeze CRM-ul, răspunsul costă mai mult: 2 credite pentru 2 până la 4 acțiuni, 3 pentru 5 până la 7. Fișierele și imaginile din chat nu costă nimic în plus.',
      },
      {
        term: 'Evaluarea apelurilor',
        desc: 'Voice QA folosește 12 credite pentru fiecare minut de apel, cu minimum un minut pe apel.',
      },
      {
        term: 'Apeluri telefonice AI',
        desc: 'Se numără din momentul în care se răspunde, nu cât timp sună, cu minimum un minut. 10 credite pe minut sau 30 cu agenții vocali ElevenLabs. Conversațiile vocale din widgetul site-ului se numără ca răspunsuri AI.',
      },
      {
        term: 'Mereu gratuit',
        desc: 'CRM-ul, Inboxul, Mesajele, workflow-urile, rapoartele și integrările nu folosesc niciodată credite.',
      },
    ],
  },

  pricingEnterprise: {
    heading: 'Ai nevoie de un plan Enterprise?',
    subtitle: 'Pentru volume mari, integrări personalizate sau cerințe speciale de conformitate, oferim soluții adaptate.',
    features: [
      'Pachete de credite personalizate',
      'Reduceri de volum',
      'Suport prioritar și SLA',
      'Account manager dedicat',
    ],
    cta: 'Contactează-ne',
  },

  pricingFaq: {
    heading: 'Întrebări despre prețuri',
    subtitle: 'Regulile, pe înțelesul tuturor.',
    currency: { q: 'În ce monedă plătesc?', a: 'În euro. Dacă vezi prețurile în dolari americani, cardul este debitat cu aceeași sumă în euro.' },
    items: [
      { q: 'Ce este un credit?', a: 'Creditele plătesc munca făcută de AI. Un răspuns AI obișnuit costă 1 credit, un minut de evaluare a apelurilor 12, iar un minut de apel telefonic AI 10, sau 30 cu agenții vocali ElevenLabs. Tot restul platformei este inclus în plan.' },
      { q: 'Creditele nefolosite se reportează?', a: 'Nu. Pe un plan plătit creditele se reîncarcă la fiecare dată de facturare, iar ce nu ai folosit nu se reportează. Cele 200 de credite de pe Free se primesc o singură dată și nu se reîncarcă.' },
      { q: 'Ce se întâmplă cu creditele cumpărate?', a: 'Se adaugă la sold și nu au dată de expirare, dar aparțin planului tău actual. Dacă schimbi planul sau anulezi, creditele cumpărate și nefolosite nu se mută cu tine.' },
      { q: 'Pot schimba planul?', a: 'Da, oricând. Trecerea de la Free la un plan plătit începe imediat. Trecerea între planuri plătite, în sus sau în jos, se aplică de la următoarea dată de facturare.' },
      { q: 'Cum anulez?', a: 'Anulezi din setările de facturare. Planul rămâne activ până la finalul lunii pe care ai plătit-o, apoi contul trece pe planul Free.' },
      { q: 'Cine ocupă un loc?', a: 'Toți cei pe care îi inviți, inclusiv invitațiile încă neacceptate. Tu, ca proprietar al contului, nu ești numărat, așa că Starter te acoperă pe tine și pe 3 colegi.' },
      { q: 'Ce se întâmplă când baza de cunoștințe e plină?', a: 'Primești o avertizare la 85%. Când e plină, documentele și paginile noi nu se mai adaugă până nu ștergi conținut, adaugi un Context Pack sau treci pe un plan mai mare.' },
      { q: 'Cum funcționează facturarea anuală?', a: 'Plătești 12 luni odată și economisești 20%. Creditele vin în continuare în fiecare lună, creditele suplimentare costă cu 15% mai puțin, iar locurile suplimentare se facturează lunar. Alegi lunar sau anual când te abonezi; ca să schimbi mai târziu, anulezi și te abonezi din nou cu cealaltă opțiune. Free nu are opțiune anuală.' },
      { q: 'Pot încerca înainte să plătesc?', a: 'Da. Planul Free rămâne al tău, cu 200 de credite și loc pentru tine și un coleg. Nu ai nevoie de card.' },
    ],
  },

  // --- Enterprise Page ---
  enterpriseMeta: {
    title: 'Enterprise: on-premise și consultanță | Fineguide.ai',
    description:
      'Planuri personalizate, instalare on-premise pe infrastructura ta, adaptarea platformei și consultanță pentru echipe cu cerințe mari de securitate sau scalare.',
  },
  enterprisePage: {
    hero: {
      title: 'Enterprise, în condițiile',
      titleAccent: ' tale.',
      subtitle:
        'Servicii dedicate pentru echipele care lucrează la scară mare: planuri personalizate, instalare on-premise, adaptarea platformei și consultanță care transformă tehnologia în rezultate.',
      cta: 'Contactează echipa de vânzări',
    },
    service: {
      eyebrow: 'Serviciu dedicat',
      heading: 'O echipă care îți cunoaște afacerea.',
      body:
        'Fiecare implementare enterprise are în spate o echipă care îți cunoaște infrastructura, contractele și clienții, de la onboarding până la extindere.',
      items: [
        'Account manager dedicat',
        'Responsabil de onboarding și asistență la migrare',
        'Suport prioritar cu SLA-uri stabilite prin contract',
        'Evaluări trimestriale și contribuții la roadmap',
      ],
    },
    onPremise: {
      eyebrow: 'Instalare on-premise',
      heading: 'Rulează Fineguide pe infrastructura ta.',
      body:
        'Pentru echipele din industrii reglementate sau cu cerințe stricte privind suveranitatea datelor, Fineguide se instalează integral pe infrastructura ta, cu rețeaua, politicile de securitate și regulile de conformitate proprii. Datele nu ies niciodată din perimetrul tău.',
      items: [
        {
          title: 'Mediul tău',
          body: 'Găzduit în cloud-ul tău, pe un cluster privat sau pe bare metal. Noi te sprijinim la instalare; infrastructura rămâne a ta.',
        },
        {
          title: 'Perimetrul tău',
          body: 'Datele rămân în interiorul rețelei tale. Nu există trafic către servicii terțe decât dacă îl permiți tu.',
        },
        {
          title: 'Autentificarea ta',
          body: 'Se integrează cu IdP-ul, SSO-ul și politicile tale de acces existente. Autentificarea și auditul urmează standardele tale.',
        },
        {
          title: 'Conformitatea ta',
          body: 'Sprijin pentru evaluări de conformitate, audituri de securitate și verificări periodice, inclusiv HIPAA, ISO 27001, reglementări regionale și altele.',
        },
      ],
    },
    adaptation: {
      eyebrow: 'Adaptare',
      heading: 'Adaptat felului în care lucrezi.',
      body:
        'Nu există două organizații mari care să funcționeze la fel. Adaptăm Fineguide la a ta, cu integrări personalizate cu sistemele interne, instalări white-label și workflow-uri configurate după felul în care lucrează efectiv echipa ta.',
      items: [
        'Integrări personalizate cu sistemele tale interne',
        'Instalare white-label, cu identitatea brandului tău',
        'Workflow-uri și module personalizate',
        'Linie directă către echipa de produs',
      ],
    },
    consultancy: {
      eyebrow: 'Consultanță',
      heading: 'Strategie, nu doar software.',
      body:
        'Consultanții Fineguide lucrează alături de echipa ta: proiectează asistenții, analizează fluxul conversațiilor și ajustează procesele, astfel încât platforma să aducă rezultate măsurabile din prima zi.',
      items: [
        'Strategie de implementare și lansare',
        'Designul conversațiilor și optimizarea asistenților',
        'Consultanță operațională pentru vânzări, suport și call center',
        'Instruire, sprijin pentru adoptare și certificarea echipei',
      ],
    },
    plans: {
      eyebrow: 'Planuri',
      heading: 'Prețuri pe măsura volumului tău.',
      body:
        'Prețuri în funcție de volum, pachete de credite personalizate și instalări pentru mai multe organizații, construite în jurul consumului tău, nu limitate de el.',
      items: [
        'Pachete de credite personalizate și prețuri în funcție de volum',
        'Instalare pentru mai multe organizații, pe unități de business',
        'Contracte anuale cu termeni flexibili de reînnoire',
      ],
    },
    contactBlock: {
      heading: 'Vorbește cu noi.',
      subtitle:
        'Spune-ne despre echipa ta și revenim în cel mult o zi lucrătoare cu o propunere personalizată.',
      emailLabel: 'Email',
      email: 'enterprise@fineguide.ai',
      phoneLabel: 'Telefon',
      ctaLabel: 'Programează o discuție detaliată',
    },
    finalCta: {
      heading: 'Când ești gata, suntem aici.',
      subtitle: 'Scrie-ne, iar noi ne ocupăm de rest.',
      ctaLabel: 'Contactează echipa de vânzări',
    },
  },

  // --- Contact Page ---
  contactMeta: {
    // Must differ from the English title - two URLs with the same <title> make
    // Google pick one and drop the other from the index.
    title: 'Contactează echipa Fineguide.ai',
    description: 'Contactează echipa Fineguide pentru întrebări, suport tehnic sau ca să discutăm cum te poate ajuta platforma noastră AI în afacerea ta.',
  },
  contact: {
    heading: 'Contactează-ne',
    subtitle: 'Vrei să afli cum poate Fineguide să schimbe felul în care comunici cu clienții? Scrie-ne și îți răspundem cât mai repede.',
    talkHeading: 'Hai să vorbim',
    talkText: 'Fie că vrei să automatizezi suportul, să atragi mai multe lead-uri sau să integrezi AI în procesele tale, suntem aici să te ajutăm.',
    emailLabel: 'Email',
    phoneLabel: 'Telefon',
    demoLabel: 'Programează un demo',
    demoSubtext: 'Prezentare personalizată a platformei',
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
    successMessage: 'Mulțumim! Mesajul tău a fost trimis. Îți răspundem cât mai curând.',
    errorMessage: 'A apărut o eroare. Te rugăm să încerci din nou.',
    validationName: 'Numele este obligatoriu.',
    validationEmail: 'Te rugăm să introduci o adresă de email validă.',
    validationMessage: 'Mesajul este obligatoriu.',
    faqHeading: 'Întrebări frecvente',
    faqSubheading: 'Despre procesul de contact și suport',
    faq: [
      { q: 'Cât de repede primesc răspuns?', a: 'De obicei răspundem în 2-4 ore în zilele lucrătoare (luni-vineri, 9:00-18:00). Pentru urgențe, te rugăm să menționezi acest lucru în mesaj.' },
      { q: 'Pot programa un demo în loc?', a: 'Bineînțeles! Poți <a href="/schedule-demo">programa un demo personalizat</a> pentru a vedea Fineguide în acțiune. Specialiștii noștri îți vor prezenta platforma în funcție de nevoile tale.' },
      { q: 'Ce informații ar trebui să includ?', a: 'Include numele companiei, provocările actuale cu clienții și ce vrei să obții cu automatizarea AI. Cu cât ne dai mai multe detalii, cu atât răspunsul nostru va fi mai util.' },
    ],
  },

  // --- Schedule Demo Page ---
  scheduleDemoMeta: {
    title: 'Programează un demo | Fineguide.ai',
    description: 'Programează un demo personalizat al platformei Fineguide și află cum califici mai multe lead-uri, oferi suport mai bun și automatizezi munca repetitivă.',
  },
  scheduleDemo: {
    heading: 'Programează un demo<br class="hidden sm:block" /> personalizat',
    subtitle: 'Află cum poate Fineguide să schimbe felul în care comunici cu clienții, într-o demonstrație adaptată nevoilor și domeniului tău.',
    stats: [
      { value: '30 min', label: 'Demo personalizat' },
      { value: 'Live', label: 'Prezentare a platformei' },
      { value: 'Pe măsură', label: 'Adaptat domeniului tău' },
      { value: 'Gratuit', label: 'Fără obligații' },
    ],
    bullets: ['Fără presiune de vânzări', 'Exemple din domeniul tău', 'Sesiune de întrebări și răspunsuri'],
    calendarHeading: 'Alege o dată convenabilă',
    calendarSubtext: 'Folosește calendarul de mai jos pentru a-ți programa demo-ul',
    expectHeading: 'Ce include demo-ul',
    expectSubtext: 'Specialiștii noștri vor prezenta platforma într-o sesiune adaptată nevoilor tale.',
    expectCards: [
      { title: 'Prezentare a platformei', text: 'Parcurgem asistenții AI, CRM-ul, workspace-ul, Voice QA, Voice AI și automatizările n8n, ca un tot unitar.', duration: '~15 minute' },
      { title: 'Exemple din domeniul tău', text: 'Cazuri reale, adaptate domeniului și modelului tău de afaceri.', duration: '~10 minute' },
      { title: 'Întrebări și răspunsuri', text: 'Întreabă despre implementare, prețuri, integrări și cum se potrivește Fineguide în workflow-ul tău.', duration: '~5 minute' },
    ],
    faqHeading: 'Întrebări frecvente',
    faqSubheading: 'Despre procesul de demo',
    faq: [
      { q: 'Cât durează demo-ul?', a: 'Demo-ul standard durează 30 de minute, dar îl putem adapta nevoilor tale. Ne concentrăm pe funcționalitățile cele mai relevante pentru tine.' },
      { q: 'Este un apel de vânzări?', a: 'Nu te presăm în niciun fel. Este o demonstrație de produs care te ajută să decizi dacă Fineguide se potrivește afacerii tale. Vrem să-ți fim de folos și să-ți răspundem la întrebări.' },
      { q: 'Pot aduce și echipa?', a: 'Absolut! Te încurajăm să inviți colegii relevanți. Cu cât mai mult context avem despre nevoile tale, cu atât mai bine putem personaliza demo-ul.' },
      { q: 'Ce fac dacă trebuie să reprogramez?', a: 'Nicio problemă! Răspunde la email-ul de confirmare sau contactează-ne direct. Suntem flexibili și găsim cu plăcere un moment potrivit pentru toată lumea.' },
    ],
  },
};
