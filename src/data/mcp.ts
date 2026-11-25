// The MCP page (/mcp/, /ro/mcp/, /ru/mcp/): connect ChatGPT, Claude, Cursor, VS Code or any MCP client to a
// Fineguide workspace. Every fact here is the server's (ai-backoffice-api apps/backoffice-api/src/modules/mcp-server):
// the address, the sign-in, the tools listed by default (mcp-core-tools.ts) and the action counts by area
// (mcp-catalog.generated.ts, 312 actions). Kept out of the shared i18n files so the page can change on its own.
import type { Lang } from '../i18n/utils';

export const MCP_ENDPOINT = 'https://fineguide.ai/api/core/mcp';
export const MCP_TOTAL_ACTIONS = 312;

/** The label the navigation and the footer use for this page. */
export const MCP_NAV_LABEL: Record<Lang, string> = {
  en: 'MCP connectors',
  ro: 'Conectori MCP',
  ru: 'MCP-коннекторы',
};

/** What each default tool does: `read` changes nothing, `change` writes to the workspace, `meta` reaches the rest. */
export type ToolKind = 'read' | 'change' | 'meta';

export const MCP_TOOL_GROUPS: Array<{ key: string; tools: Array<[name: string, kind: ToolKind]> }> = [
  {
    key: 'start',
    tools: [
      ['fineguide_search_actions', 'meta'],
      ['fineguide_run_action', 'meta'],
      ['me_get_profile', 'read'],
      ['crm_search_records', 'read'],
    ],
  },
  {
    key: 'contacts',
    tools: [
      ['crm_list_contacts', 'read'],
      ['crm_get_contact', 'read'],
      ['crm_create_contact', 'change'],
      ['crm_update_contact', 'change'],
      ['crm_comment_on_contact', 'change'],
      ['crm_list_companies', 'read'],
      ['crm_create_company', 'change'],
      ['crm_list_tags', 'read'],
    ],
  },
  {
    key: 'deals',
    tools: [
      ['crm_list_deals', 'read'],
      ['crm_get_deal', 'read'],
      ['crm_create_deal', 'change'],
      ['crm_update_deal', 'change'],
      ['crm_move_deal_stage', 'change'],
      ['crm_set_deal_status', 'change'],
      ['crm_comment_on_deal', 'change'],
      ['crm_list_pipelines', 'read'],
      ['crm_list_pipeline_stages', 'read'],
      ['crm_get_dashboard', 'read'],
    ],
  },
  {
    key: 'tasks',
    tools: [
      ['crm_list_tasks', 'read'],
      ['crm_get_task', 'read'],
      ['crm_create_task', 'change'],
      ['crm_update_task', 'change'],
      ['crm_set_task_status', 'change'],
    ],
  },
  {
    key: 'assistants',
    tools: [
      ['agents_list_assistants', 'read'],
      ['agents_get_assistant', 'read'],
      ['agents_add_answer', 'change'],
      ['agents_list_conversations', 'read'],
      ['agents_search_conversations', 'read'],
      ['agents_get_analytics_overview', 'read'],
    ],
  },
  { key: 'inbox', tools: [['inbox_list_threads', 'read'], ['inbox_get_thread', 'read']] },
  { key: 'workflows', tools: [['workflows_list_workflows', 'read'], ['workflows_list_runs', 'read']] },
  { key: 'voiceqa', tools: [['voiceqa_list_calls', 'read'], ['voiceqa_get_call', 'read'], ['voiceqa_get_dashboard', 'read']] },
];

/** Every action the server reaches, by area (312 in all). */
export const MCP_AREA_COUNTS: Array<[key: string, count: number]> = [
  ['crm', 165],
  ['assistants', 41],
  ['workflows', 26],
  ['voiceqa', 26],
  ['campaigns', 17],
  ['inbox', 16],
  ['billing', 12],
  ['team', 7],
  ['profile', 2],
];

export interface McpCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; titleAccent: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
  endpoint: { label: string; note: string; copy: string; copied: string };
  can: { eyebrow: string; heading: string; body: string; items: Array<{ title: string; body: string }> };
  setup: {
    eyebrow: string;
    heading: string;
    body: string;
    clients: Array<{ name: string; steps: string[]; code?: string; codeLabel?: string }>;
  };
  safety: { eyebrow: string; heading: string; body: string; items: Array<{ title: string; body: string }> };
  tools: {
    eyebrow: string;
    heading: string;
    body: string;
    kinds: Record<ToolKind, string>;
    groups: Record<string, string>;
    lines: Record<string, string>;
    allHeading: string;
    allBody: string;
    areas: Record<string, string>;
    total: string;
  };
  faqHeading: string;
  faq: Array<{ q: string; a: string }>;
  contact: { heading: string; body: string; company: string };
  howto: { name: string; steps: string[] };
  finalCta: { heading: string; subtitle: string; primary: string; secondary: string };
}

const en: McpCopy = {
  meta: {
    title: 'MCP server: connect ChatGPT, Claude and Cursor to Fineguide | Fineguide.ai',
    description:
      'Connect ChatGPT, Claude, Cursor, VS Code or any MCP client to your Fineguide workspace. Your AI works in your CRM, assistants, conversations, workflows, inbox and Voice QA, as you and with your permissions.',
  },
  hero: {
    eyebrow: 'MCP server',
    title: 'Your AI assistant, working in',
    titleAccent: 'your Fineguide.',
    subtitle:
      'Connect ChatGPT, Claude, Cursor, VS Code or any MCP client to Fineguide. Ask it to find a deal, log a call, add a task or check how your assistants are doing, and it does it in your workspace, as you, with exactly your permissions.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'How to connect',
  },
  endpoint: {
    label: 'Server address',
    note: 'Streamable HTTP. Sign in with your Fineguide account (OAuth 2.1), or send an API key.',
    copy: 'Copy',
    copied: 'Copied',
  },
  can: {
    eyebrow: 'What it can do',
    heading: '312 actions across the whole workspace.',
    body: 'The same actions the Fineguide app runs, described for an AI model. Your assistant reads, creates and updates records in one conversation, and every answer comes from your live data.',
    items: [
      { title: 'CRM', body: 'Find, create and update contacts, companies, deals and tasks; move deals through stages; mark them won or lost; comment, tag, merge duplicates and read the sales dashboard.' },
      { title: 'AI assistants and knowledge', body: 'Read and change your assistants and their settings, add websites to their knowledge, manage their documents, and teach them questions and answers.' },
      { title: 'Conversations and analytics', body: "Search what customers asked, see which conversations went to a person, and read each assistant's results, satisfaction and sentiment." },
      { title: 'Workflows', body: 'List, build, test, publish and pause workflows, start one from a template, and see every run and why one failed.' },
      { title: 'Inbox', body: 'Read email threads as you see them in the shared inbox, with their messages, notes, status, assignee and tags.' },
      { title: 'Voice QA', body: 'Read scored calls with their transcripts, rule by rule, plus staff, departments, cases and the dashboard.' },
    ],
  },
  setup: {
    eyebrow: 'Connect',
    heading: 'Connect in a minute.',
    body: 'Add the address in your AI app and sign in with Fineguide when it asks. You choose the organization and whether the app may make changes.',
    clients: [
      {
        name: 'ChatGPT',
        steps: [
          'Open Settings and go to the page where you add MCP servers (Plugins, called Apps & Connectors on some accounts).',
          'Add a custom MCP server and paste the address.',
          'Sign in with Fineguide and approve the connection.',
        ],
      },
      {
        name: 'Claude',
        steps: [
          'Open Customize → Connectors, press +, then Add custom connector.',
          'Paste the address and press Connect, then sign in with Fineguide.',
          'On Team and Enterprise plans an owner adds it once under Organization settings → Connectors.',
        ],
      },
      {
        name: 'Claude Code',
        steps: ['Run this once, then type /mcp in Claude Code to sign in.'],
        code: `claude mcp add --transport http fineguide ${MCP_ENDPOINT}`,
        codeLabel: 'Terminal',
      },
      {
        name: 'Cursor',
        steps: ['Add the server to ~/.cursor/mcp.json (or .cursor/mcp.json in a project), then sign in when Cursor asks.'],
        code: `{\n  "mcpServers": {\n    "fineguide": { "url": "${MCP_ENDPOINT}" }\n  }\n}`,
        codeLabel: 'mcp.json',
      },
      {
        name: 'VS Code (GitHub Copilot)',
        steps: ['Add the server to .vscode/mcp.json, or run MCP: Add Server from the Command Palette and choose HTTP. Start it and sign in.'],
        code: `{\n  "servers": {\n    "fineguide": { "type": "http", "url": "${MCP_ENDPOINT}" }\n  }\n}`,
        codeLabel: '.vscode/mcp.json',
      },
      {
        name: 'Windsurf and other clients',
        steps: [
          'Any client that connects to a remote MCP server over Streamable HTTP works the same way: give it the address and sign in.',
          'A client without OAuth sign-in sends one of your API keys instead (the app: Settings → API keys).',
        ],
        code: 'Authorization: Bearer fgk_…',
        codeLabel: 'Header',
      },
    ],
  },
  safety: {
    eyebrow: 'Sign-in and safety',
    heading: 'It acts as you, never more.',
    body: 'A connection is you, in one organization. Fineguide checks every action the way it checks a click in the app.',
    items: [
      { title: 'Your own account', body: 'Sign in with your Fineguide account through OAuth 2.1 with PKCE. The AI app never sees your password.' },
      { title: 'Your permissions, your plan', body: 'Every action runs with your role and module permissions, your plan’s modules and your credits. The app lists only the tools you may use.' },
      { title: 'One organization, read-only if you like', body: 'You pick the organization when you connect, and can turn off changes so the app only reads.' },
      { title: 'Disconnect any time', body: 'Settings → AI connectors in the app lists every connected app; disconnecting ends its access within a minute.' },
    ],
  },
  tools: {
    eyebrow: 'Tools',
    heading: 'The tools your AI sees first.',
    body: 'Forty tools: the actions people use most, plus two that reach everything else. Search finds any of the 312 actions by what it does, and Run action runs it, so your AI app keeps a short tool list.',
    kinds: { read: 'reads', change: 'changes', meta: 'every action' },
    groups: {
      start: 'Start here',
      contacts: 'Contacts and companies',
      deals: 'Deals and pipelines',
      tasks: 'Tasks',
      assistants: 'AI assistants and conversations',
      inbox: 'Inbox',
      workflows: 'Workflows',
      voiceqa: 'Voice QA',
    },
    lines: {
      fineguide_search_actions: 'Finds any Fineguide action by what it does, with its arguments.',
      fineguide_run_action: 'Runs any action by its name, as you.',
      me_get_profile: 'Who you are: name, email and role.',
      crm_search_records: 'Finds tasks and deals by number (TSK-21, DEAL-7) or by words in the title.',
      crm_list_contacts: 'Lists and searches contacts, with phones, tags and company.',
      crm_get_contact: "One contact's details, with their deals.",
      crm_create_contact: 'Creates a contact; a known email updates that contact instead.',
      crm_update_contact: "Changes a contact's details.",
      crm_comment_on_contact: "Adds a comment to a contact's timeline; mentioned teammates are notified.",
      crm_list_companies: 'Lists and searches companies, with how many contacts each has.',
      crm_create_company: 'Creates a company.',
      crm_list_tags: 'The CRM tags, with their colours.',
      crm_list_deals: 'Lists deals with stage, value, status, owner, contact and tasks.',
      crm_get_deal: 'One deal: value, stage, status, owner, contact, company and custom fields.',
      crm_create_deal: 'Creates a deal in a pipeline.',
      crm_update_deal: "Changes a deal's name, value, owner, expected close and custom fields.",
      crm_move_deal_stage: 'Moves a deal to another stage of its pipeline.',
      crm_set_deal_status: 'Marks a deal won, lost or open again.',
      crm_comment_on_deal: "Adds a comment to a deal's timeline.",
      crm_list_pipelines: 'The deal pipelines, and which is the default.',
      crm_list_pipeline_stages: "A pipeline's stages in order, with their probability.",
      crm_get_dashboard: 'The CRM home for a period: won, lost, open pipeline and what needs attention.',
      crm_list_tasks: 'Lists and searches tasks, with status, priority, due date and assignee.',
      crm_get_task: 'One task with everything on it.',
      crm_create_task: 'Creates a task.',
      crm_update_task: "Changes a task's title, details, due date, priority, assignee or status.",
      crm_set_task_status: 'Moves a task to another status, such as done.',
      agents_list_assistants: "Lists the organization's AI assistants.",
      agents_get_assistant: 'One assistant with its role, model and settings.',
      agents_add_answer: 'Teaches an assistant a question and its answer.',
      agents_list_conversations: 'Conversations, newest first, with rating and handoff to a person.',
      agents_search_conversations: 'Finds conversations and messages by what was said.',
      agents_get_analytics_overview: "How an assistant's conversations went: resolution, satisfaction and sentiment.",
      inbox_list_threads: 'Email threads you can see, with status, assignee, mailbox and tags.',
      inbox_get_thread: 'One thread whole: every message, its notes and status.',
      workflows_list_workflows: 'Workflows with their trigger and status.',
      workflows_list_runs: "A workflow's runs, and why one failed.",
      voiceqa_list_calls: 'Scored calls with agent, client, department, score and sentiment.',
      voiceqa_get_call: 'One call whole: transcript, rule-by-rule scores and recommendations.',
      voiceqa_get_dashboard: 'Voice QA statistics for a period, by department and rule category.',
    },
    allHeading: 'Every action, by area',
    allBody: 'Add ?tools=all to the address and your app lists every action as its own tool.',
    areas: {
      crm: 'CRM: contacts, companies, deals, pipelines, tasks, tags, comments, custom fields and duplicates',
      assistants: 'AI assistants, knowledge, conversations and analytics',
      workflows: 'Workflows, runs, tests and templates',
      voiceqa: 'Voice QA: calls, staff, departments, rules and cases',
      campaigns: 'Campaigns and segments',
      inbox: 'Inbox: threads, mailboxes and views',
      billing: 'Plan, usage and invoices',
      team: 'Team and departments',
      profile: 'Your profile',
    },
    total: 'In all',
  },
  faqHeading: 'Questions',
  faq: [
    {
      q: 'What can my AI do in Fineguide through MCP?',
      a: 'It can work across the workspace: find, create and update contacts, companies, deals and tasks, move deals through the pipeline, comment, manage your AI assistants and their knowledge, search conversations and read their analytics, build and test workflows, and read your inbox threads and Voice QA calls. 312 actions in all.',
    },
    {
      q: 'Can the AI see or change more than I can?',
      a: 'No. Every action runs as you, in the organization you chose, with your role, your module permissions and your plan, exactly as in the app. You can make a connection read-only, and disconnect it any time in Settings → AI connectors.',
    },
    {
      q: 'Which AI apps work with it?',
      a: 'Any app that connects to a remote MCP server over Streamable HTTP: ChatGPT, Claude, Claude Code, Cursor, VS Code with GitHub Copilot, Windsurf and others. Apps that sign in with OAuth just need the address; others send one of your Fineguide API keys.',
    },
    {
      q: 'Does it cost anything?',
      a: 'The MCP server is part of every Fineguide plan, Free included. An action uses credits only where the same action in the app does; reading and changing CRM records uses none.',
    },
    {
      q: 'Why does my app show about 40 tools when there are 312 actions?',
      a: 'Many AI apps work best with a short tool list, so the server lists the most used actions plus Search actions and Run action, which reach all the others. Add ?tools=all to the address to list every action as its own tool.',
    },
  ],
  contact: {
    heading: 'Questions about connecting?',
    body: 'Write to ops@fineguide.ai or call +1 408 313 8452.',
    company: 'Fineguide is a product of Eightcell Labs, Inc.',
  },
  howto: {
    name: 'Connect an AI app to Fineguide over MCP',
    steps: [
      `Copy the Fineguide MCP server address: ${MCP_ENDPOINT}`,
      'Add it as a custom MCP server or connector in your AI app (ChatGPT, Claude, Cursor, VS Code or another MCP client).',
      'Sign in with your Fineguide account, pick the organization and choose whether the app may make changes.',
      'Ask your AI to work in Fineguide: find a deal, add a task, or check how your assistants are doing.',
    ],
  },
  finalCta: {
    heading: 'Bring your workspace into every AI conversation.',
    subtitle: 'Create a free Fineguide account, then connect your AI app in a minute.',
    primary: 'Start free',
    secondary: 'Talk to us',
  },
};

const ro: McpCopy = {
  meta: {
    title: 'Server MCP: conectează ChatGPT, Claude și Cursor la Fineguide | Fineguide.ai',
    description:
      'Conectează ChatGPT, Claude, Cursor, VS Code sau orice client MCP la spațiul tău Fineguide. AI-ul tău lucrează în CRM, asistenți, conversații, fluxuri, inbox și Voice QA, în numele tău și cu permisiunile tale.',
  },
  hero: {
    eyebrow: 'Server MCP',
    title: 'Asistentul tău AI, la lucru în',
    titleAccent: 'Fineguide.',
    subtitle:
      'Conectează ChatGPT, Claude, Cursor, VS Code sau orice client MCP la Fineguide. Cere-i să găsească o tranzacție, să noteze un apel, să adauge o sarcină sau să verifice cum merg asistenții tăi, iar el o face în spațiul tău de lucru, în numele tău, exact cu permisiunile tale.',
    ctaPrimary: 'Începe gratuit',
    ctaSecondary: 'Cum te conectezi',
  },
  endpoint: {
    label: 'Adresa serverului',
    note: 'Streamable HTTP. Te autentifici cu contul Fineguide (OAuth 2.1) sau trimiți o cheie API.',
    copy: 'Copiază',
    copied: 'Copiat',
  },
  can: {
    eyebrow: 'Ce poate face',
    heading: '312 acțiuni în tot spațiul de lucru.',
    body: 'Aceleași acțiuni pe care le rulează aplicația Fineguide, descrise pentru un model AI. Asistentul tău citește, creează și actualizează înregistrări într-o singură conversație, iar fiecare răspuns vine din datele tale reale.',
    items: [
      { title: 'CRM', body: 'Găsește, creează și actualizează contacte, companii, tranzacții și sarcini; mută tranzacțiile între etape; le marchează câștigate sau pierdute; comentează, etichetează, unește duplicatele și citește panoul de vânzări.' },
      { title: 'Asistenți AI și cunoștințe', body: 'Citește și modifică asistenții și setările lor, adaugă site-uri la cunoștințele lor, le gestionează documentele și îi învață întrebări și răspunsuri.' },
      { title: 'Conversații și analitică', body: 'Caută ce au întrebat clienții, vezi care conversații au ajuns la un om și citește rezultatele, satisfacția și sentimentul fiecărui asistent.' },
      { title: 'Fluxuri de lucru', body: 'Listează, construiește, testează, publică și oprește fluxuri, pornește unul dintr-un șablon și vezi fiecare rulare și de ce a eșuat.' },
      { title: 'Inbox', body: 'Citește firele de email așa cum le vezi în inboxul comun, cu mesajele, notițele, starea, responsabilul și etichetele lor.' },
      { title: 'Voice QA', body: 'Citește apelurile evaluate cu transcrierile lor, regulă cu regulă, plus personalul, departamentele, cazurile și panoul de bord.' },
    ],
  },
  setup: {
    eyebrow: 'Conectare',
    heading: 'Te conectezi într-un minut.',
    body: 'Adaugă adresa în aplicația ta AI și autentifică-te cu Fineguide când ți se cere. Tu alegi organizația și dacă aplicația poate face modificări.',
    clients: [
      {
        name: 'ChatGPT',
        steps: [
          'Deschide Settings și mergi la pagina unde adaugi servere MCP (Plugins, numită Apps & Connectors pe unele conturi).',
          'Adaugă un server MCP personalizat și lipește adresa.',
          'Autentifică-te cu Fineguide și aprobă conexiunea.',
        ],
      },
      {
        name: 'Claude',
        steps: [
          'Deschide Customize → Connectors, apasă +, apoi Add custom connector.',
          'Lipește adresa, apasă Connect și autentifică-te cu Fineguide.',
          'Pe planurile Team și Enterprise, un proprietar îl adaugă o singură dată în Organization settings → Connectors.',
        ],
      },
      {
        name: 'Claude Code',
        steps: ['Rulează o dată comanda, apoi scrie /mcp în Claude Code ca să te autentifici.'],
        code: `claude mcp add --transport http fineguide ${MCP_ENDPOINT}`,
        codeLabel: 'Terminal',
      },
      {
        name: 'Cursor',
        steps: ['Adaugă serverul în ~/.cursor/mcp.json (sau .cursor/mcp.json într-un proiect), apoi autentifică-te când îți cere Cursor.'],
        code: `{\n  "mcpServers": {\n    "fineguide": { "url": "${MCP_ENDPOINT}" }\n  }\n}`,
        codeLabel: 'mcp.json',
      },
      {
        name: 'VS Code (GitHub Copilot)',
        steps: ['Adaugă serverul în .vscode/mcp.json sau rulează MCP: Add Server din Command Palette și alege HTTP. Pornește-l și autentifică-te.'],
        code: `{\n  "servers": {\n    "fineguide": { "type": "http", "url": "${MCP_ENDPOINT}" }\n  }\n}`,
        codeLabel: '.vscode/mcp.json',
      },
      {
        name: 'Windsurf și alți clienți',
        steps: [
          'Orice client care se conectează la un server MCP la distanță prin Streamable HTTP funcționează la fel: îi dai adresa și te autentifici.',
          'Un client fără autentificare OAuth trimite în schimb una dintre cheile tale API (în aplicație: Settings → API keys).',
        ],
        code: 'Authorization: Bearer fgk_…',
        codeLabel: 'Antet',
      },
    ],
  },
  safety: {
    eyebrow: 'Autentificare și siguranță',
    heading: 'Lucrează în numele tău, niciodată mai mult.',
    body: 'O conexiune ești tu, într-o singură organizație. Fineguide verifică fiecare acțiune la fel cum verifică un clic în aplicație.',
    items: [
      { title: 'Contul tău', body: 'Te autentifici cu contul Fineguide prin OAuth 2.1 cu PKCE. Aplicația AI nu îți vede niciodată parola.' },
      { title: 'Permisiunile și planul tău', body: 'Fiecare acțiune rulează cu rolul și permisiunile tale pe module, cu modulele planului tău și cu creditele tale. Aplicația vede doar instrumentele pe care le poți folosi.' },
      { title: 'O organizație, doar citire dacă vrei', body: 'Alegi organizația când te conectezi și poți opri modificările, ca aplicația doar să citească.' },
      { title: 'Deconectare oricând', body: 'Settings → AI connectors din aplicație listează fiecare aplicație conectată; deconectarea îi oprește accesul în cel mult un minut.' },
    ],
  },
  tools: {
    eyebrow: 'Instrumente',
    heading: 'Instrumentele pe care AI-ul tău le vede primele.',
    body: 'Patruzeci de instrumente: acțiunile folosite cel mai des, plus două care ajung la tot restul. Căutarea găsește oricare dintre cele 312 acțiuni după ce face, iar Run action o rulează, așa că aplicația ta AI păstrează o listă scurtă.',
    kinds: { read: 'citește', change: 'modifică', meta: 'orice acțiune' },
    groups: {
      start: 'Începe aici',
      contacts: 'Contacte și companii',
      deals: 'Tranzacții și pipeline-uri',
      tasks: 'Sarcini',
      assistants: 'Asistenți AI și conversații',
      inbox: 'Inbox',
      workflows: 'Fluxuri de lucru',
      voiceqa: 'Voice QA',
    },
    lines: {
      fineguide_search_actions: 'Găsește orice acțiune Fineguide după ce face, cu argumentele ei.',
      fineguide_run_action: 'Rulează orice acțiune după nume, în numele tău.',
      me_get_profile: 'Cine ești: nume, email și rol.',
      crm_search_records: 'Găsește sarcini și tranzacții după număr (TSK-21, DEAL-7) sau după cuvinte din titlu.',
      crm_list_contacts: 'Listează și caută contacte, cu telefoane, etichete și companie.',
      crm_get_contact: 'Detaliile unui contact, cu tranzacțiile lui.',
      crm_create_contact: 'Creează un contact; un email cunoscut actualizează acel contact.',
      crm_update_contact: 'Modifică detaliile unui contact.',
      crm_comment_on_contact: 'Adaugă un comentariu în istoricul unui contact; colegii menționați sunt anunțați.',
      crm_list_companies: 'Listează și caută companii, cu numărul de contacte al fiecăreia.',
      crm_create_company: 'Creează o companie.',
      crm_list_tags: 'Etichetele din CRM, cu culorile lor.',
      crm_list_deals: 'Listează tranzacțiile cu etapă, valoare, stare, responsabil, contact și sarcini.',
      crm_get_deal: 'O tranzacție: valoare, etapă, stare, responsabil, contact, companie și câmpuri personalizate.',
      crm_create_deal: 'Creează o tranzacție într-un pipeline.',
      crm_update_deal: 'Modifică numele, valoarea, responsabilul, data estimată și câmpurile unei tranzacții.',
      crm_move_deal_stage: 'Mută o tranzacție în altă etapă a pipeline-ului.',
      crm_set_deal_status: 'Marchează o tranzacție câștigată, pierdută sau din nou deschisă.',
      crm_comment_on_deal: 'Adaugă un comentariu în istoricul unei tranzacții.',
      crm_list_pipelines: 'Pipeline-urile de tranzacții și care este cel implicit.',
      crm_list_pipeline_stages: 'Etapele unui pipeline în ordine, cu probabilitatea lor.',
      crm_get_dashboard: 'Pagina principală a CRM pe o perioadă: câștigate, pierdute, pipeline deschis și ce cere atenție.',
      crm_list_tasks: 'Listează și caută sarcini, cu stare, prioritate, termen și responsabil.',
      crm_get_task: 'O sarcină cu tot ce are.',
      crm_create_task: 'Creează o sarcină.',
      crm_update_task: 'Modifică titlul, detaliile, termenul, prioritatea, responsabilul sau starea unei sarcini.',
      crm_set_task_status: 'Mută o sarcină în altă stare, de exemplu finalizată.',
      agents_list_assistants: 'Listează asistenții AI ai organizației.',
      agents_get_assistant: 'Un asistent cu rolul, modelul și setările lui.',
      agents_add_answer: 'Învață un asistent o întrebare și răspunsul ei.',
      agents_list_conversations: 'Conversațiile, cele mai noi primele, cu evaluarea și predarea către un om.',
      agents_search_conversations: 'Găsește conversații și mesaje după ce s-a spus.',
      agents_get_analytics_overview: 'Cum au mers conversațiile unui asistent: rezolvare, satisfacție și sentiment.',
      inbox_list_threads: 'Firele de email pe care le vezi, cu stare, responsabil, căsuță și etichete.',
      inbox_get_thread: 'Un fir întreg: fiecare mesaj, notițele și starea lui.',
      workflows_list_workflows: 'Fluxurile de lucru cu declanșatorul și starea lor.',
      workflows_list_runs: 'Rulările unui flux și de ce a eșuat una.',
      voiceqa_list_calls: 'Apelurile evaluate, cu operator, client, departament, scor și sentiment.',
      voiceqa_get_call: 'Un apel întreg: transcriere, scoruri pe fiecare regulă și recomandări.',
      voiceqa_get_dashboard: 'Statisticile Voice QA pe o perioadă, pe departament și categorie de reguli.',
    },
    allHeading: 'Toate acțiunile, pe domenii',
    allBody: 'Adaugă ?tools=all la adresă și aplicația ta listează fiecare acțiune ca instrument separat.',
    areas: {
      crm: 'CRM: contacte, companii, tranzacții, pipeline-uri, sarcini, etichete, comentarii, câmpuri personalizate și duplicate',
      assistants: 'Asistenți AI, cunoștințe, conversații și analitică',
      workflows: 'Fluxuri de lucru, rulări, teste și șabloane',
      voiceqa: 'Voice QA: apeluri, personal, departamente, reguli și cazuri',
      campaigns: 'Campanii și segmente',
      inbox: 'Inbox: fire, căsuțe și vizualizări',
      billing: 'Plan, consum și facturi',
      team: 'Echipa și departamentele',
      profile: 'Profilul tău',
    },
    total: 'În total',
  },
  faqHeading: 'Întrebări',
  faq: [
    {
      q: 'Ce poate face AI-ul meu în Fineguide prin MCP?',
      a: 'Poate lucra în tot spațiul: găsește, creează și actualizează contacte, companii, tranzacții și sarcini, mută tranzacțiile prin pipeline, comentează, gestionează asistenții AI și cunoștințele lor, caută conversații și le citește analitica, construiește și testează fluxuri și citește firele din inbox și apelurile din Voice QA. 312 acțiuni în total.',
    },
    {
      q: 'Poate AI-ul să vadă sau să modifice mai mult decât mine?',
      a: 'Nu. Fiecare acțiune rulează în numele tău, în organizația aleasă, cu rolul, permisiunile pe module și planul tău, exact ca în aplicație. Poți face conexiunea doar pentru citire și o poți deconecta oricând din Settings → AI connectors.',
    },
    {
      q: 'Cu ce aplicații AI funcționează?',
      a: 'Cu orice aplicație care se conectează la un server MCP la distanță prin Streamable HTTP: ChatGPT, Claude, Claude Code, Cursor, VS Code cu GitHub Copilot, Windsurf și altele. Aplicațiile cu autentificare OAuth au nevoie doar de adresă; celelalte trimit una dintre cheile tale API Fineguide.',
    },
    {
      q: 'Costă ceva?',
      a: 'Serverul MCP face parte din fiecare plan Fineguide, inclusiv Free. O acțiune folosește credite doar acolo unde aceeași acțiune din aplicație folosește; citirea și modificarea înregistrărilor din CRM nu folosesc credite.',
    },
    {
      q: 'De ce aplicația mea arată în jur de 40 de instrumente, deși sunt 312 acțiuni?',
      a: 'Multe aplicații AI lucrează mai bine cu o listă scurtă, așa că serverul listează acțiunile cele mai folosite plus Search actions și Run action, care ajung la toate celelalte. Adaugă ?tools=all la adresă ca să listezi fiecare acțiune ca instrument separat.',
    },
  ],
  contact: {
    heading: 'Întrebări despre conectare?',
    body: 'Scrie la ops@fineguide.ai sau sună la +1 408 313 8452.',
    company: 'Fineguide este un produs al Eightcell Labs, Inc.',
  },
  howto: {
    name: 'Conectează o aplicație AI la Fineguide prin MCP',
    steps: [
      `Copiază adresa serverului MCP Fineguide: ${MCP_ENDPOINT}`,
      'Adaug-o ca server MCP personalizat sau conector în aplicația ta AI (ChatGPT, Claude, Cursor, VS Code sau alt client MCP).',
      'Autentifică-te cu contul Fineguide, alege organizația și dacă aplicația poate face modificări.',
      'Cere-i AI-ului să lucreze în Fineguide: să găsească o tranzacție, să adauge o sarcină sau să verifice cum merg asistenții.',
    ],
  },
  finalCta: {
    heading: 'Adu spațiul tău de lucru în fiecare conversație cu AI.',
    subtitle: 'Creează un cont Fineguide gratuit, apoi conectează aplicația ta AI într-un minut.',
    primary: 'Începe gratuit',
    secondary: 'Vorbește cu noi',
  },
};

const ru: McpCopy = {
  meta: {
    title: 'MCP-сервер: подключите ChatGPT, Claude и Cursor к Fineguide | Fineguide.ai',
    description:
      'Подключите ChatGPT, Claude, Cursor, VS Code или любой MCP-клиент к своему пространству Fineguide. Ваш ИИ работает в CRM, ассистентах, диалогах, сценариях, почте и Voice QA от вашего имени и с вашими правами.',
  },
  hero: {
    eyebrow: 'MCP-сервер',
    title: 'Ваш ИИ-ассистент работает',
    titleAccent: 'в Fineguide.',
    subtitle:
      'Подключите ChatGPT, Claude, Cursor, VS Code или любой MCP-клиент к Fineguide. Попросите найти сделку, записать звонок, добавить задачу или проверить, как работают ваши ассистенты, и он сделает это в вашем пространстве, от вашего имени и ровно с вашими правами.',
    ctaPrimary: 'Начать бесплатно',
    ctaSecondary: 'Как подключить',
  },
  endpoint: {
    label: 'Адрес сервера',
    note: 'Streamable HTTP. Вход через аккаунт Fineguide (OAuth 2.1) или по API-ключу.',
    copy: 'Копировать',
    copied: 'Скопировано',
  },
  can: {
    eyebrow: 'Что он умеет',
    heading: '312 действий во всём пространстве.',
    body: 'Те же действия, что выполняет приложение Fineguide, описанные для ИИ-модели. Ассистент читает, создаёт и обновляет записи в одном диалоге, и каждый ответ основан на ваших живых данных.',
    items: [
      { title: 'CRM', body: 'Находит, создаёт и обновляет контакты, компании, сделки и задачи; переводит сделки по этапам; отмечает их выигранными или проигранными; комментирует, ставит теги, объединяет дубли и читает дашборд продаж.' },
      { title: 'ИИ-ассистенты и знания', body: 'Читает и меняет ассистентов и их настройки, добавляет сайты в их знания, управляет документами и учит их вопросам и ответам.' },
      { title: 'Диалоги и аналитика', body: 'Ищет, о чём спрашивали клиенты, показывает, какие диалоги перешли к человеку, и читает результаты, удовлетворённость и тональность каждого ассистента.' },
      { title: 'Сценарии', body: 'Показывает, создаёт, тестирует, публикует и приостанавливает сценарии, запускает их из шаблона и показывает каждый запуск и причину сбоя.' },
      { title: 'Почта', body: 'Читает почтовые переписки так, как вы видите их в общем ящике: сообщения, заметки, статус, ответственного и теги.' },
      { title: 'Voice QA', body: 'Читает оценённые звонки с расшифровками и оценками по каждому правилу, а также сотрудников, отделы, кейсы и дашборд.' },
    ],
  },
  setup: {
    eyebrow: 'Подключение',
    heading: 'Подключение за минуту.',
    body: 'Добавьте адрес в своё ИИ-приложение и войдите через Fineguide, когда оно попросит. Вы выбираете организацию и разрешаете или нет изменения.',
    clients: [
      {
        name: 'ChatGPT',
        steps: [
          'Откройте Settings и перейдите на страницу, где добавляются MCP-серверы (Plugins, в некоторых аккаунтах Apps & Connectors).',
          'Добавьте свой MCP-сервер и вставьте адрес.',
          'Войдите через Fineguide и подтвердите подключение.',
        ],
      },
      {
        name: 'Claude',
        steps: [
          'Откройте Customize → Connectors, нажмите +, затем Add custom connector.',
          'Вставьте адрес, нажмите Connect и войдите через Fineguide.',
          'В тарифах Team и Enterprise владелец один раз добавляет его в Organization settings → Connectors.',
        ],
      },
      {
        name: 'Claude Code',
        steps: ['Выполните команду один раз, затем введите /mcp в Claude Code, чтобы войти.'],
        code: `claude mcp add --transport http fineguide ${MCP_ENDPOINT}`,
        codeLabel: 'Терминал',
      },
      {
        name: 'Cursor',
        steps: ['Добавьте сервер в ~/.cursor/mcp.json (или .cursor/mcp.json в проекте) и войдите, когда Cursor попросит.'],
        code: `{\n  "mcpServers": {\n    "fineguide": { "url": "${MCP_ENDPOINT}" }\n  }\n}`,
        codeLabel: 'mcp.json',
      },
      {
        name: 'VS Code (GitHub Copilot)',
        steps: ['Добавьте сервер в .vscode/mcp.json или выполните MCP: Add Server в Command Palette и выберите HTTP. Запустите его и войдите.'],
        code: `{\n  "servers": {\n    "fineguide": { "type": "http", "url": "${MCP_ENDPOINT}" }\n  }\n}`,
        codeLabel: '.vscode/mcp.json',
      },
      {
        name: 'Windsurf и другие клиенты',
        steps: [
          'Любой клиент, который подключается к удалённому MCP-серверу по Streamable HTTP, работает так же: укажите адрес и войдите.',
          'Клиент без входа через OAuth отправляет вместо этого один из ваших API-ключей (в приложении: Settings → API keys).',
        ],
        code: 'Authorization: Bearer fgk_…',
        codeLabel: 'Заголовок',
      },
    ],
  },
  safety: {
    eyebrow: 'Вход и безопасность',
    heading: 'Действует от вашего имени — и не больше.',
    body: 'Подключение — это вы в одной организации. Fineguide проверяет каждое действие так же, как клик в приложении.',
    items: [
      { title: 'Ваш собственный аккаунт', body: 'Вход через аккаунт Fineguide по OAuth 2.1 с PKCE. ИИ-приложение никогда не видит ваш пароль.' },
      { title: 'Ваши права и ваш тариф', body: 'Каждое действие выполняется с вашей ролью и правами на модули, модулями вашего тарифа и вашими кредитами. Приложение видит только те инструменты, которые вам доступны.' },
      { title: 'Одна организация, при желании только чтение', body: 'Вы выбираете организацию при подключении и можете запретить изменения, чтобы приложение только читало.' },
      { title: 'Отключение в любой момент', body: 'В приложении Settings → AI connectors показывает все подключённые приложения; после отключения доступ прекращается в течение минуты.' },
    ],
  },
  tools: {
    eyebrow: 'Инструменты',
    heading: 'Инструменты, которые ваш ИИ видит первыми.',
    body: 'Сорок инструментов: самые частые действия и ещё два, которые открывают всё остальное. Поиск находит любое из 312 действий по описанию, а Run action его выполняет, поэтому список инструментов в приложении остаётся коротким.',
    kinds: { read: 'читает', change: 'изменяет', meta: 'любое действие' },
    groups: {
      start: 'С чего начать',
      contacts: 'Контакты и компании',
      deals: 'Сделки и воронки',
      tasks: 'Задачи',
      assistants: 'ИИ-ассистенты и диалоги',
      inbox: 'Почта',
      workflows: 'Сценарии',
      voiceqa: 'Voice QA',
    },
    lines: {
      fineguide_search_actions: 'Находит любое действие Fineguide по тому, что оно делает, с его аргументами.',
      fineguide_run_action: 'Выполняет любое действие по имени от вашего имени.',
      me_get_profile: 'Кто вы: имя, email и роль.',
      crm_search_records: 'Находит задачи и сделки по номеру (TSK-21, DEAL-7) или словам в названии.',
      crm_list_contacts: 'Список и поиск контактов с телефонами, тегами и компанией.',
      crm_get_contact: 'Данные контакта и его сделки.',
      crm_create_contact: 'Создаёт контакт; известный email обновляет этот контакт.',
      crm_update_contact: 'Меняет данные контакта.',
      crm_comment_on_contact: 'Добавляет комментарий в историю контакта; упомянутые коллеги получают уведомление.',
      crm_list_companies: 'Список и поиск компаний с числом контактов в каждой.',
      crm_create_company: 'Создаёт компанию.',
      crm_list_tags: 'Теги CRM и их цвета.',
      crm_list_deals: 'Список сделок: этап, сумма, статус, ответственный, контакт и задачи.',
      crm_get_deal: 'Одна сделка: сумма, этап, статус, ответственный, контакт, компания и поля.',
      crm_create_deal: 'Создаёт сделку в воронке.',
      crm_update_deal: 'Меняет название, сумму, ответственного, ожидаемую дату и поля сделки.',
      crm_move_deal_stage: 'Переводит сделку на другой этап воронки.',
      crm_set_deal_status: 'Отмечает сделку выигранной, проигранной или снова открытой.',
      crm_comment_on_deal: 'Добавляет комментарий в историю сделки.',
      crm_list_pipelines: 'Воронки сделок и какая из них основная.',
      crm_list_pipeline_stages: 'Этапы воронки по порядку и их вероятность.',
      crm_get_dashboard: 'Главная CRM за период: выигранные, проигранные, открытая воронка и что требует внимания.',
      crm_list_tasks: 'Список и поиск задач со статусом, приоритетом, сроком и исполнителем.',
      crm_get_task: 'Одна задача со всеми данными.',
      crm_create_task: 'Создаёт задачу.',
      crm_update_task: 'Меняет название, описание, срок, приоритет, исполнителя или статус задачи.',
      crm_set_task_status: 'Переводит задачу в другой статус, например «готово».',
      agents_list_assistants: 'Список ИИ-ассистентов организации.',
      agents_get_assistant: 'Один ассистент: роль, модель и настройки.',
      agents_add_answer: 'Учит ассистента вопросу и ответу.',
      agents_list_conversations: 'Диалоги, сначала новые, с оценкой и передачей человеку.',
      agents_search_conversations: 'Находит диалоги и сообщения по тому, что было сказано.',
      agents_get_analytics_overview: 'Как прошли диалоги ассистента: решение, удовлетворённость и тональность.',
      inbox_list_threads: 'Доступные вам переписки со статусом, ответственным, ящиком и тегами.',
      inbox_get_thread: 'Переписка целиком: все сообщения, заметки и статус.',
      workflows_list_workflows: 'Сценарии с их триггером и статусом.',
      workflows_list_runs: 'Запуски сценария и причина сбоя.',
      voiceqa_list_calls: 'Оценённые звонки: оператор, клиент, отдел, оценка и тональность.',
      voiceqa_get_call: 'Звонок целиком: расшифровка, оценки по правилам и рекомендации.',
      voiceqa_get_dashboard: 'Статистика Voice QA за период по отделу и категории правил.',
    },
    allHeading: 'Все действия по разделам',
    allBody: 'Добавьте ?tools=all к адресу, и приложение покажет каждое действие отдельным инструментом.',
    areas: {
      crm: 'CRM: контакты, компании, сделки, воронки, задачи, теги, комментарии, поля и дубли',
      assistants: 'ИИ-ассистенты, знания, диалоги и аналитика',
      workflows: 'Сценарии, запуски, тесты и шаблоны',
      voiceqa: 'Voice QA: звонки, сотрудники, отделы, правила и кейсы',
      campaigns: 'Кампании и сегменты',
      inbox: 'Почта: переписки, ящики и представления',
      billing: 'Тариф, расход и счета',
      team: 'Команда и отделы',
      profile: 'Ваш профиль',
    },
    total: 'Всего',
  },
  faqHeading: 'Вопросы',
  faq: [
    {
      q: 'Что мой ИИ может делать в Fineguide через MCP?',
      a: 'Работать во всём пространстве: находить, создавать и обновлять контакты, компании, сделки и задачи, вести сделки по воронке, комментировать, управлять ИИ-ассистентами и их знаниями, искать диалоги и читать их аналитику, создавать и тестировать сценарии, читать переписки из почты и звонки из Voice QA. Всего 312 действий.',
    },
    {
      q: 'Может ли ИИ видеть или менять больше, чем я?',
      a: 'Нет. Каждое действие выполняется от вашего имени, в выбранной организации, с вашей ролью, правами на модули и вашим тарифом — точно как в приложении. Подключение можно сделать только для чтения и отключить в любой момент в Settings → AI connectors.',
    },
    {
      q: 'С какими ИИ-приложениями это работает?',
      a: 'С любым приложением, которое подключается к удалённому MCP-серверу по Streamable HTTP: ChatGPT, Claude, Claude Code, Cursor, VS Code с GitHub Copilot, Windsurf и другими. Приложениям со входом через OAuth нужен только адрес; остальные отправляют один из ваших API-ключей Fineguide.',
    },
    {
      q: 'Это платно?',
      a: 'MCP-сервер входит во все тарифы Fineguide, включая Free. Действие тратит кредиты только там, где их тратит то же действие в приложении; чтение и изменение записей CRM кредитов не тратит.',
    },
    {
      q: 'Почему приложение показывает около 40 инструментов, если действий 312?',
      a: 'Многие ИИ-приложения лучше работают с коротким списком, поэтому сервер показывает самые частые действия плюс Search actions и Run action, которые открывают все остальные. Добавьте ?tools=all к адресу, чтобы показать каждое действие отдельным инструментом.',
    },
  ],
  contact: {
    heading: 'Вопросы о подключении?',
    body: 'Пишите на ops@fineguide.ai или звоните +1 408 313 8452.',
    company: 'Fineguide — продукт Eightcell Labs, Inc.',
  },
  howto: {
    name: 'Подключение ИИ-приложения к Fineguide по MCP',
    steps: [
      `Скопируйте адрес MCP-сервера Fineguide: ${MCP_ENDPOINT}`,
      'Добавьте его как свой MCP-сервер или коннектор в ИИ-приложении (ChatGPT, Claude, Cursor, VS Code или другом MCP-клиенте).',
      'Войдите через аккаунт Fineguide, выберите организацию и решите, может ли приложение вносить изменения.',
      'Попросите ИИ поработать в Fineguide: найти сделку, добавить задачу или проверить, как работают ассистенты.',
    ],
  },
  finalCta: {
    heading: 'Ваше рабочее пространство — в каждом разговоре с ИИ.',
    subtitle: 'Создайте бесплатный аккаунт Fineguide и подключите своё ИИ-приложение за минуту.',
    primary: 'Начать бесплатно',
    secondary: 'Связаться с нами',
  },
};

export const MCP_COPY: Record<Lang, McpCopy> = { en, ro, ru };
