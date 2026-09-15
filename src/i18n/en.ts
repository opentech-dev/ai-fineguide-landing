export const en = {
  // --- Navbar ---
  nav: {
    overview: 'Home',
    platform: 'Platform',
    assistants: 'AI Assistants',
    crm: 'CRM',
    voiceQa: 'Voice QA',
    voiceAi: 'AI Telephony',
    workspace: 'Workspace',
    // Sections on the homepage, not pages of their own. Linked from the footer
    // so the modules behind them are reachable by something other than scrolling.
    messages: 'Messages & Inbox',
    campaigns: 'Campaigns',
    automations: 'Automations',
    pricing: 'Pricing',
    enterprise: 'Enterprise',
    contact: 'Contact',
    blog: 'Blog',
    signIn: 'Sign in',
    dashboard: 'Dashboard',
    menuLabel: 'Menu',
  },

  // --- Footer ---
  footer: {
    tagline: 'The next-generation platform for business operations, bringing conversations, CRM, voice, and workspace onto one AI-native spine.',
    product: 'Product',
    company: 'Company',
    scheduleDemo: 'Schedule a demo',
    enterprise: 'Enterprise',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    copyright: 'All rights reserved.',
  },

  // --- Homepage meta ---
  indexMeta: {
    title: 'Fineguide.ai | AI Platform for Customer Operations',
    description:
      'The next-generation platform for business operations. Unify conversations, CRM, channels, and workflows, powered by AI from the ground up.',
  },

  // --- Hero ---
  hero: {
    title: 'Transform how your business interacts with customers.',
    subtitle:
      'Unify conversations, CRM, channels, and workflows, powered by AI from the ground up.',
    ctaPrimary: 'Get started',
    ctaSecondary: 'Schedule a demo',
  },

  // --- Photography alt text ---
  photos: {
    teamOffice: 'Colleagues talking at a shared desk in an open-plan office',
    channelsPhone: 'A customer messaging a business from their phone',
    agentHeadset: 'A support agent mid-call at her desk',
    tabletReview: 'Reviewing reports on a tablet',
  },

  // --- Overview intro (what Fineguide is) ---
  overview: {
    eyebrow: 'The platform',
    body:
      "Fineguide is a unified system that contains everything your team needs to manage customer relationships: AI Assistants → Leads → CRM → Voice Automations → Analytics. Every conversation across every channel is connected, every customer record, every voice interaction, and every internal document, connected on one platform.",
    modules: [
      {
        name: 'Assistants',
        desc: 'AI that answers customers on web, WhatsApp, Telegram, Instagram, Messenger, Slack, and Discord.',
      },
      {
        name: 'CRM',
        desc: 'Conversations, contacts, companies, leads, pipelines, tasks, team inbox, and routing queue.',
      },
      {
        name: 'Voice',
        desc: 'Quality assurance on every call, plus AI-driven inbound and outbound telephony.',
      },
      {
        name: 'Messages',
        desc: 'A dedicated home for every conversation your assistants handle, with its own reporting.',
      },
      {
        name: 'Inbox',
        desc: 'Email proper: connect your own mailboxes and domains over IMAP and SMTP, with routing rules.',
      },
      {
        name: 'Workspace',
        desc: 'Documents, decisions, and team knowledge alongside the customer record.',
      },
      {
        name: 'Automations',
        desc: 'Build workflows visually inside Fineguide, or connect n8n to wire it into the rest of your stack.',
      },
      {
        name: 'QA & Analytics',
        desc: 'Score every interaction, track performance across teams, and surface insights that drive improvement.',
      },
    ],
  },

  // --- Assistants spread ---
  assistantsSpread: {
    eyebrow: 'Assistants',
    title: 'AI that handles conversations, every time.',
    body:
      'Deploy assistants that read your knowledge, follow your rules, and capture what matters. They greet customers on every channel where you do business, and turn each conversation into structured records your team can act on.',
    features: [
      'Channels: Web · WhatsApp · Telegram · Instagram · Messenger · Slack · Discord',
      'Knowledge from URLs, documents, and PDFs',
      'Configurable persona, voice, and escalation rules',
      'Extracts intent and customer data directly into CRM leads',
      'Live conversation monitoring, analytics, and feedback loops',
    ],
    screenshotAlt: 'Fineguide Assistants analytics dashboard',
  },

  // --- CRM spread ---
  crmSpread: {
    eyebrow: 'CRM',
    title: 'One customer record. Every team. Every conversation.',
    body:
      "Sales sees the deal. Support sees the ticket. The call center sees the queue. Everyone sees the same customer, the same conversation history, the same context, without the export and import dance between tools.",
    features: [
      'Pipelines and stages, Kanban and table views',
      'Tasks, assignments, and due dates',
      'Company records with their own email and history',
      'Team inbox and routing queue',
      'Custom fields auto-filled by assistants',
    ],
    screenshotAlt: 'Fineguide CRM tasks Kanban board',
  },

  // --- Voice spread (dark editorial break) ---
  voiceSpread: {
    eyebrow: 'Voice',
    title: 'Every call, scored and structured.',
    body:
      "Voice QA evaluates calls automatically, across departments, against your rules, in the languages your team speaks. AI Telephony puts the same assistants that handle chat on the other end of the phone.",
    features: [
      'Automatic transcription and scoring on every call',
      'Per-department evaluation criteria and weights',
      'Agent feedback and trend dashboards',
      'Connects to your phone system over SIP',
      'AI agents on live inbound and outbound calls',
    ],
    screenshotAlt: 'Fineguide Voice QA statistics dashboard',
  },

  // --- Messages & Inbox ---
  conversations: {
    eyebrow: 'Messages & Inbox',
    title: 'Every conversation lands somewhere a person can take over.',
    body:
      'Chat and email arrive in the same workspace, with a queue, routing rules and departments behind them. The assistant handles what it can; the moment it cannot, a colleague already has the thread and the customer record in front of them.',
    linkLabel: 'Explore Messages & Inbox',
  },
  // --- Campaigns (outbound telephony) ---
  campaigns: {
    eyebrow: 'Campaigns',
    title: 'Outbound calling that runs itself.',
    body:
      'Build an audience, choose what the call is for, and let your assistants work the list. Test against your own number first, watch it run, and pause it whenever you want.',
    linkLabel: 'Explore campaigns',
  },

  // --- Workspace + Automations two-up ---
  workspaceAutomations: {
    workspace: {
      eyebrow: 'Workspace',
      title: 'Documents that live with the customer.',
      body:
        'A block-based editor for playbooks, briefs, and team knowledge, connected to the same contacts and customers your team is already working with.',
      features: [
        'Block editor with slash commands',
        'Folder hierarchy and drag-drop',
        'Full-text search across the workspace',
        'Soft-delete trash with recovery',
      ],
    },
    automations: {
      eyebrow: 'Automations',
      title: 'Read the conversation. Update the record. No one touches it.',
      body:
        'A visual workflow builder inside Fineguide: drag steps onto a canvas, let AI pull the fields out of a conversation, and write them straight into the CRM. Plus an embedded n8n instance, hosted or bring-your-own, for everything beyond it.',
      linkLabel: 'Explore automations',
      features: [
        'AI extracts typed fields from the conversation that triggered the run',
        'Create, update, and find contacts, leads, and companies',
        'Move leads between pipeline stages, add tags, open tasks',
        'Branch on conditions and loop over matching records',
        'Hosted n8n on Fineguide infrastructure, or bring your own',
        'Webhooks and hundreds of pre-built integrations through n8n',
      ],
    },
  },

  // --- Numbers (inline editorial figures) ---
  numbers: {
    eyebrow: 'By the numbers',
    items: [
      {
        figure: '24/7',
        prose: 'AI coverage in under two seconds, on every channel you have connected.',
      },
      {
        figure: '30+',
        prose: 'languages supported across voice transcription and customer conversations.',
      },
      {
        figure: 'One',
        prose: 'platform replacing the seven tools you would otherwise duct-tape together.',
      },
    ],
  },

  // --- Industries / Who builds on it ---
  industries: {
    eyebrow: 'Built for',
    body:
      'Sales teams use Fineguide to qualify faster. Support centers use it to handle volume without growing headcount. Call centers use it to evaluate quality and coach in real time. Customer success teams use it to keep accounts coherent across channels.',
    audiences: 'Sales · Support · Customer success · Call center operations',
  },

  // --- Integrations ribbon ---
  // Security strip. docs/goals.md lists "Security & compliance (high level)"
  // under what belongs on the website, and the landing page had no mention of
  // it at all. Every claim here is the enterprise page's own wording, which is
  // backed by the self-hosted Docker stack in ai-fineguide-project. Note it
  // says we SUPPORT compliance reviews - it does not claim certification, and
  // must not start to.
  security: {
    eyebrow: 'Security',
    title: 'Your data, on your terms.',
    body:
      'Run Fineguide on your own infrastructure when you need to: your cloud, your private cluster, or bare metal. Data stays inside your network boundary, and we support your compliance reviews and security audits.',
    linkLabel: 'See enterprise deployment',
  },

  // Link labels under the module spreads. These lived as hardcoded English
  // props in both index.astro files, so the Romanian page rendered them in
  // English.
  moduleLinks: {
    assistants: 'Explore Assistants',
    crm: 'Explore CRM',
  },

  integrationsRibbon: {
    eyebrow: 'Integrates with what you already use',
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
    heading: 'Ready to consolidate?',
    body:
      'See Fineguide running on your operation in a 15-minute walkthrough.',
    ctaPrimary: 'Get started',
    ctaSecondary: 'Talk to sales',
  },

  // --- AI Assistants page (custom layout) ---
  assistantsPage: {
    meta: {
      title: 'AI Assistants for WhatsApp, Telegram & Web | Fineguide',
      description:
        'AI assistants that read your knowledge base, follow your rules and capture what matters, on web chat, WhatsApp, Telegram, Instagram, Slack and Discord.',
    },
    hero: {
      title: 'AI assistants that handle',
      titleAccent: ' conversations.',
      subtitle:
        'Deploy assistants that read your knowledge, follow your rules, and capture what matters, across every channel where you do business.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'The Assistants module',
      body:
        'Each assistant is a configurable AI that greets customers, answers questions, qualifies leads, and writes structured records into CRM. You define what it knows, how it sounds, when to escalate, and what to capture, then deploy it on the channels your customers actually use.',
      screenshotAlt: 'Fineguide assistant analytics, sessions, satisfaction, sentiment',
    },
    channels: {
      eyebrow: 'Channels',
      heading: 'One assistant. Every channel.',
      body:
        'Configure once. The assistant shows up where your customers do, including web widgets, social inboxes, messaging apps, and CRM bridges that put it inside the tools your team already uses.',
      groups: [
        {
          label: 'Direct',
          items: 'Web widget · WhatsApp · Telegram · Instagram · Messenger · Slack · Discord',
        },
        {
          label: 'CRM bridges',
          items: 'AmoCRM · Kommo',
        },
      ],
    },
    configuration: {
      eyebrow: 'Configuration',
      heading: 'Tune every dimension.',
      body:
        'The defaults work. The depth is there when you need it, across persona, knowledge, voice, extraction, actions, and handoff.',
      blocks: [
        {
          title: 'Persona',
          body:
            'System prompt, communication style, and verbosity. Add brand voice or restrict the assistant to a specific role.',
        },
        {
          title: 'Learning Context',
          body:
            'Upload documents, link URLs, or attach PDFs. The assistant grounds every answer in what you give it, with no hallucinated facts.',
        },
        {
          title: 'Voice',
          body:
            'Text-to-speech voices for spoken responses. Pick a voice, or just a male or female one, and preview it before it goes live.',
        },
        {
          title: 'Session Variables',
          body:
            'Define the fields the assistant extracts mid-conversation, such as name, intent, budget, and pain point, and they flow into CRM leads automatically.',
        },
        {
          title: 'Actions',
          body:
            'Trigger webhooks, API calls, or workflows from within a conversation. Book meetings, create tickets, hand off to humans.',
        },
        {
          title: 'Human Handoff',
          body:
            'Rule-based escalation when the customer asks for it or when the assistant hits the limits you have set.',
        },
      ],
    },
    extraction: {
      eyebrow: 'From conversation to CRM',
      heading: 'Every chat becomes a structured record.',
      body:
        'What used to require a rep copying notes from a chat window into a spreadsheet now happens automatically, and accurately.',
      steps: [
        'Customer starts a conversation on any connected channel',
        'Assistant identifies intent, extracts the fields you defined, and grounds answers in your knowledge',
        'A CRM lead is created, or merged with an existing contact, without manual entry',
        'Custom fields populate the lead so the data is searchable, segmentable, and automation-ready',
        'Live conversations roll up in the workspace; analytics aggregate by assistant, channel, and time',
      ],
    },
    leadAnatomy: {
      eyebrow: 'Anatomy of a lead',
      heading: 'A lead is more than a name and a phone number.',
      body:
        'Assistants capture the fields you care about, automatically, on every channel. Identity comes built in. Custom fields like budget, required service, or move-in date are the ones you define for your business.',
      card: {
        title: 'Lead #4218',
        meta: 'WhatsApp · 2 minutes ago',
        fields: [
          { label: 'Name', value: 'Maria Popescu', ai: false },
          { label: 'Phone', value: '+40 720 123 456', ai: false },
          { label: 'Email', value: 'maria.p@example.com', ai: false },
          { label: 'Required service', value: 'Voice QA · 5 agents', ai: true },
          { label: 'Budget', value: '€2,000 - €4,000 / month', ai: true },
          { label: 'Intent', value: 'Pricing & demo', ai: true },
          { label: 'Stage', value: 'Qualified', ai: false },
          { label: 'Next action', value: 'Schedule call', ai: false },
        ],
        footerLabel: 'AI',
        footerNote:
          'Fields tagged AI are populated by the assistant based on the conversation. Define your own in the assistant configuration.',
      },
      industries: {
        heading: 'Different business, different fields.',
        body: 'The fields you capture depend on what your team needs to know:',
        list: [
          {
            label: 'Real estate',
            fields: 'Property type · Bedrooms · Budget · Move-in date · Financing status',
          },
          {
            label: 'B2B SaaS',
            fields: 'Company size · Use case · Decision timeline · Current tools · Pilot interest',
          },
          {
            label: 'Healthcare',
            fields: 'Service requested · Insurance · Preferred date · Specialist · Referral source',
          },
        ],
      },
    },
    finalCta: {
      heading: 'Ready to deploy?',
      body: 'See an assistant configured for your business in a 15-minute walkthrough.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- CRM page (custom layout) ---
  crmPage: {
    meta: {
      title: 'CRM Built on One Customer Record | Fineguide.ai',
      description:
        'A CRM organised around the customer record: contacts, companies, leads, pipelines and tasks, with every conversation attached to the same person.',
    },
    hero: {
      title: 'One customer record. Every team.',
      titleAccent: ' Every conversation.',
      subtitle:
        'Sales sees the deal. Support sees the ticket. The call center sees the queue. Everyone sees the same customer, without the export-and-import dance between tools.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'The CRM module',
      body:
        'Fineguide CRM is the operational hub where assistants feed leads, agents close them, and managers see the truth. Every conversation, every contact, every task, connected to the same customer record, on every channel your business runs.',
      screenshotAlt: 'Fineguide CRM tasks board with Todo, In Progress, and Done columns',
    },
    surfaces: {
      eyebrow: 'Inside the CRM',
      heading: 'Eight surfaces, one customer record.',
      body:
        'Each surface is a different lens on the same underlying data, so you never duplicate work, never lose context, and never wonder which tool has the latest version.',
      items: [
        {
          name: 'Conversations',
          desc: 'Live and historical chats from every channel, with the customer profile and lead context attached.',
        },
        {
          name: 'Contacts',
          desc: 'The people you do business with, identified across phone numbers, emails, and channel handles.',
        },
        {
          name: 'Leads',
          desc: 'Qualified opportunities with structured fields, including custom props extracted by your assistants.',
        },
        {
          name: 'Pipelines',
          desc: 'Kanban and table views per pipeline. Stages, ownership, and SLAs that reflect how your team actually sells.',
        },
        {
          name: 'Tasks',
          desc: 'Follow-ups, callbacks, and to-dos with status, priority, and due dates, created from any conversation or lead.',
        },
        {
          name: 'Companies',
          desc: 'Account records with their own email, so mail to info@ or billing@ attaches before you know who sent it. A person can belong to more than one.',
        },
        {
          name: 'Team Inbox',
          desc: 'Shared triage of conversations waiting for a human, where you can claim, reply, or escalate without stepping on each other.',
        },
        {
          name: 'Queue',
          desc: 'Routing for live conversations and calls, supporting round-robin, ownership, or rule-based, depending on how your team operates.',
        },
      ],
    },
    customerRecord: {
      eyebrow: 'The customer record',
      heading: 'Identity that survives the channel switch.',
      body:
        'A customer who messages on WhatsApp Monday and calls on Tuesday is the same customer. Fineguide identifies them across phone numbers, channel handles, and email, and attaches every conversation, lead, and ticket to the same record so context never resets.',
      bullets: [
        'Identity merging across phone numbers, emails, and channel handles',
        'Custom fields filled in by assistants during the conversation',
        'Complete interaction history, including chats, calls, tickets, and tasks, in one timeline',
        'Org-wide segmentation that downstream automations and exports can rely on',
      ],
    },
    finalCta: {
      heading: 'Stop juggling tabs.',
      body: 'See how Fineguide CRM compares to whatever stack you are running today.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- AI Telephony page (custom layout) ---
  voiceAiPage: {
    // Every claim below was checked against the voice bridge
    // (ai-gptcrawler/voice_ai_go) and the API before it went in. The list of
    // what the product does NOT do (voicemail detection, recordings in the app,
    // call summaries, warm or outbound transfer, routing to teams, click-to-call,
    // voice cloning) is enforced in scripts/verify-claims.mjs.
    meta: {
      title: 'AI Telephony: AI Agents That Answer Your Phone | Fineguide',
      description:
        'AI agents on your own numbers over SIP. They recognise callers from the CRM, transfer to your team on request, and call whole lists. Billed per answered minute.',
    },
    hero: {
      title: 'The assistant that',
      titleAccent: ' answers your phone.',
      subtitle:
        'The assistants you already run on chat, on your own phone numbers. They recognise who is calling, put a person on the line when asked, and call whole lists when you need them to.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'AI Telephony',
      screenshotAlt: 'A call-centre agent on a headset, mid-conversation with a caller',
    },
    inbound: {
      eyebrow: 'Inbound calls',
      heading: 'Your numbers, answered by the assistant you choose.',
      body:
        'Nothing moves to a number we rent you. Connect the phone system you already have, decide which assistant owns each number, and decide what happens when the office is closed.',
      items: [
        {
          name: 'Your own numbers',
          desc: 'Connect your carrier or PBX with a standard SIP account, then give each number to the assistant that should answer it.',
        },
        {
          name: 'Callers it recognises',
          desc: 'Turn on greeting by name, and a caller whose number is in the CRM is welcomed by their first name, with their company already in front of the assistant.',
        },
        {
          name: 'Business hours',
          desc: 'Outside the hours you set, let the call ring out, forward it to another number, or answer with an after-hours message that takes a callback request.',
        },
        {
          name: 'A person when it matters',
          desc: 'A caller who asks for a human is transferred to your call-centre number, only during its hours if you set them. Otherwise they leave a callback request that lands in the CRM as a task.',
        },
      ],
    },
    voice: {
      eyebrow: 'On the call',
      heading: 'Choose the engine, the voice and the languages.',
      body:
        'The same assistant configuration you use for chat, with the choices a phone call adds. Everything here is set per assistant.',
      items: [
        {
          term: 'Four engines',
          desc: 'OpenAI Realtime, Google Gemini Live, ElevenLabs Agents, or Gemini paired with a separate voice from ElevenLabs, Google Chirp 3 HD, Gemini or OpenAI.',
        },
        {
          term: 'Voices',
          desc: 'Pick a specific voice, or just a male or female one, and listen to it before the assistant goes live.',
        },
        {
          term: 'Languages',
          desc: 'Give one assistant several languages, from English, Romanian and Russian to Arabic, Japanese and Chinese. It replies in the language the caller is speaking.',
        },
        {
          term: 'Interruptions',
          desc: 'Callers can talk over the assistant and it stops to listen, the way a person would. A speech detector keeps line noise from cutting it off.',
        },
        {
          term: 'What it knows',
          desc: 'Your knowledge base, web search and the custom actions you gave the assistant for chat all work on the call, and it waits for the real result before answering.',
        },
      ],
    },
    outbound: {
      eyebrow: 'Outbound calls',
      heading: 'Call a list, not one number at a time.',
      body:
        'Outbound runs as a campaign: an audience, a script, and a schedule the assistants dial through at your pace.',
      bullets: [
        'Outreach, survey and promotion campaigns, each reported the way its type needs',
        'Survey answers and promotion outcomes extracted from every completed call',
        'A test call to your own phone before any real contact is dialled',
        'Retries on no answer or busy, with the delay you choose',
      ],
      linkLabel: 'See Campaigns',
    },
    afterCall: {
      eyebrow: 'After the call',
      heading: 'What stays behind, and what it costs.',
      body:
        'A call leaves a record your team can read, and a charge you can predict before the first one is placed.',
      items: [
        {
          term: 'Transcript',
          desc: 'Every phone call is saved as a transcript in the conversation history, in the same place as your chat conversations.',
        },
        {
          term: 'Callback tasks',
          desc: 'Callback requests arrive on your task board with the caller’s number and a short note of what they wanted.',
        },
        {
          term: 'Per answered minute',
          desc: 'Calls draw on the shared credit wallet from the moment they are answered, never while ringing, rounded up to the second with a one-minute minimum.',
        },
        {
          term: 'Rates',
          desc: '10 credits a minute on OpenAI, Gemini or the Gemini-plus-voice engine, and 30 on ElevenLabs Agents, unless your plan sets its own rates.',
        },
        {
          term: 'No surprise bills',
          desc: 'A call only starts when the wallet can cover its first minute, so an empty balance stops calls rather than running up a debt.',
        },
      ],
    },
    finalCta: {
      heading: 'Hear it on your own phone.',
      body: 'Connect a number, pick a voice, and call it yourself. Or see AI Telephony, Campaigns and the rest of the platform in one demo.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- Workspace page (custom layout) ---
  workspacePage: {
    meta: {
      title: 'Workspace: Documents Beside Your Customers | Fineguide',
      description:
        'A block-based editor for playbooks, briefs, and team knowledge, connected to the same contacts, leads, and conversations your team is already working with.',
    },
    hero: {
      title: 'Documents that live',
      titleAccent: ' with the customer.',
      subtitle:
        'A block-based editor for playbooks, briefs, and team knowledge, connected to the same contacts and customers your team is already working with.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'The Workspace module',
      body:
        'Workspace is a structured editor with blocks, hierarchy, and slash commands, built into the same product as your CRM and conversations. Write a playbook once and the people who need it find it where they already work.',
      screenshotAlt: 'Fineguide Workspace document editor with slash-command menu',
    },
    editor: {
      eyebrow: 'The editor',
      heading: 'Blocks, not blank pages.',
      body:
        'Headings, lists, quotes, code, callouts, and tables. Every block is composable. Slash commands speed up writing. Keyboard shortcuts speed up everything else.',
      blocks: [
        {
          title: 'Block-based structure',
          body:
            'Headings, paragraphs, lists, quotes, code, tables, callouts. Drag to reorder, indent to nest, transform between types with a keystroke.',
        },
        {
          title: 'Slash commands',
          body:
            'Type a slash to pull up every block type, embed, and shortcut. No menu hunting, no formatting interruptions.',
        },
        {
          title: 'Real-time updates',
          body:
            'Edits propagate immediately across the team. Comments and mentions attach to the block, not a stale email thread.',
        },
      ],
    },
    structure: {
      eyebrow: 'Organization',
      heading: 'Hierarchy, search, and recovery.',
      body:
        'Workspace organizes itself around the way your team actually thinks, with folders for departments, documents for playbooks, recents and favorites for what you touched last week.',
      bullets: [
        'Folder and document hierarchy with drag-and-drop reorder',
        'Recents and favorites for the docs you live in',
        'Full-text search across the entire workspace',
        'Soft-delete trash with recovery, so deleting is not destructive',
      ],
    },
    connected: {
      eyebrow: 'Connected to your customers',
      heading: 'Documents that know who they are about.',
      body:
        'Link a document to a contact, a lead, or a customer record. The next person who opens that customer in CRM sees the playbook, the call summary, or the proposal that already exists. Nothing gets lost in Slack archaeology.',
    },
    finalCta: {
      heading: 'Ready to consolidate?',
      body: 'See workspace, CRM, and assistants together in a 15-minute walkthrough.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- Voice QA page (custom layout) ---
  voiceQaPage: {
    meta: {
      title: 'Voice QA: Score Every Call Automatically | Fineguide',
      description:
        'Automatic AI scoring on every phone call, per department and against your own rules. Stop sampling and see issues and trends across the whole operation.',
    },
    hero: {
      title: 'Every call, scored',
      titleAccent: ' and structured.',
      subtitle:
        'Automatic AI evaluation on every call, per department, against your rules, in the languages your team speaks. Stop sampling. Start seeing the whole operation.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'The Voice QA module',
      body:
        'A QA manager who listens to ten calls a day sees one percent of what is happening on the phone. Voice QA scores all of them, automatically, consistently, and in time for feedback to matter.',
      screenshotAlt: 'Fineguide Voice QA statistics dashboard, budget, minutes, and trend chart',
    },
    process: {
      eyebrow: 'How it works',
      heading: 'Five steps. Every call.',
      body:
        'Connect a call source, define your rules, and let the platform do the listening. Agents get feedback the same day. Managers see the trend before it becomes a problem.',
      steps: [
        'Connect a call source, such as your telecom operator, recording system, or PBX. Calls are captured automatically.',
        'AI transcribes every conversation in 30+ languages, identifying speakers and structuring the dialogue.',
        'Each call is evaluated against your per-department rules, with fixed or weighted scoring, no manual sampling.',
        'The agent receives a score per rule, conversation evidence, and concrete improvement suggestions.',
        'The manager sees performance by department, agent, and client, with trends and weak points called out.',
      ],
    },
    configuration: {
      eyebrow: 'Configuration',
      heading: 'Per-department rules, your scoring model.',
      body:
        'Every team has its own quality bar. Voice QA lets you encode it, with different rules and weights per department, with the same engine handling sales calls, support tickets, and retention conversations side by side.',
      blocks: [
        {
          title: 'Departments',
          body:
            'Organize by team, location, or function. Each department has its own categories, criteria, and dashboards.',
        },
        {
          title: 'Categories and rules',
          body:
            'Define what good looks like, such as opening, discovery, objection handling, and compliance, and how each rule should be scored.',
        },
        {
          title: 'Fixed or weighted',
          body:
            'Treat all rules equally or weight the ones that matter most. The math follows your policy, not the other way around.',
        },
        {
          title: 'Agent feedback',
          body:
            'Per-rule scoring with conversation evidence. Suggestions reach the agent the same day, not the next quarterly review.',
        },
        {
          title: 'Telephony integration',
          body:
            'Connect to your existing phone system or recording infrastructure. No rip-and-replace, no parallel data entry.',
        },
        {
          title: 'CRM linkage',
          body:
            'Calls attach to the same customer record as chats and tickets. The customer is one story, not three.',
        },
      ],
    },
    extraction: {
      eyebrow: 'Insights',
      heading: 'Surface issues and emerging trends.',
      body:
        'Voice QA turns every call into structured insight, so issues and trends become visible across your whole operation, not just the calls a manager happens to hear.',
      blocks: [
        {
          title: 'Custom extraction',
          body:
            'Tell the AI what to capture on every call, such as products mentioned, complaint types, root causes, competitor names.',
        },
        {
          title: 'Common issues',
          body:
            'See which products generate the most complaints and which questions agents struggle to answer, across thousands of calls.',
        },
        {
          title: 'Emerging trends',
          body:
            'Catch new issues, sentiment shifts, or competitor mentions as they appear, not weeks later.',
        },
        {
          title: 'Cases, not just calls',
          body:
            'Group the calls behind one issue for one customer. Sentiment read across them turns a declining relationship into a visible trend, not a run of separate bad days.',
        },
      ],
      footer:
        'Configure per department and feed results into dashboards or webhooks.',
    },
    finalCta: {
      heading: 'Stop sampling. Start scoring.',
      body: 'See Voice QA running on your calls in a 15-minute walkthrough.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- Automations Page (workflow engine + n8n) ---
  // Hard constraint, enforced by scripts/verify-claims.mjs: the seven step
  // types in PLANNED_STEP_TYPES (classify, summarize, translate, reply, notify,
  // send_email, webhook) can be authored in the builder but have NO runtime -
  // the engine pauses the run when it reaches one. None may appear here. Nor
  // may any per-step credit price: workflow runs do not consume credits.
  automationsPage: {
    meta: {
      title: 'Visual Workflow Builder for CRM | Fineguide',
      description:
        'Read a conversation, pull the fields out of it, branch on what you find, and update the CRM. Twelve triggers and eighteen actions, no code.',
    },
    hero: {
      title: 'Read the conversation.',
      titleAccent: ' Update the record. No one touches it.',
      subtitle:
        'A visual builder where a workflow starts from something that actually happened (a call going through Voice QA, a lead landing, a form arriving) and finishes with your CRM already correct.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'Automations',
      screenshotAlt: 'Reviewing reports on a tablet at a desk',
    },
    triggers: {
      eyebrow: 'Twelve triggers',
      heading: 'A workflow starts from something that happened.',
      body:
        'Not a schedule you hope lines up with reality. The events your platform already emits are the events a workflow can start from.',
      items: [
        {
          name: 'Assistant activity',
          desc: 'A session starting or ending, a reply being rated, or the assistant finishing collecting the information you asked it for.',
        },
        {
          name: 'Records appearing',
          desc: 'A contact created from a conversation, or a lead created anywhere in the CRM.',
        },
        {
          name: 'Calls and tickets',
          desc: 'A call finishing in Voice QA, transcribed or scored, or a ticket being opened.',
        },
        {
          name: 'Outside and on demand',
          desc: 'A form submission, an inbound webhook, a schedule, or a person pressing run.',
        },
      ],
    },
    actions: {
      eyebrow: 'Eighteen actions',
      heading: 'What a workflow can actually do today.',
      body:
        'Every action listed here runs today. The builder also shows a few blocks that are still being built; the product marks those, and they are not sold here.',
      items: [
        {
          term: 'Read and extract',
          desc: 'Pull structured fields out of a conversation or a transcript with AI, and carry them forward as typed variables the next step can use.',
        },
        {
          term: 'Branch',
          desc: 'Conditions on anything in scope, including the fields you just extracted, so one workflow covers the several ways a conversation can go.',
        },
        {
          term: 'Loop',
          desc: 'Iterate over a list and run the same steps for each element. Loops can sit inside other loops, and each one keeps track of its own item.',
        },
        {
          term: 'Find',
          desc: 'Look up a contact by whatever identifier you have, or query for many records at once and act on the set.',
        },
        {
          term: 'Create, update, remove',
          desc: 'Full write access to contacts, leads and companies: nine actions across the three, so a workflow can finish the job rather than filing a note for someone.',
        },
        {
          term: 'Move and tag',
          desc: 'Advance a lead to another pipeline stage and apply tags, which is how most of these workflows end.',
        },
        {
          term: 'Assign work',
          desc: 'Create a task so a person picks up exactly the part that needs a person.',
        },
      ],
    },
    n8n: {
      eyebrow: 'Beyond the platform',
      heading: 'And when the work leaves Fineguide.',
      body:
        'The built-in builder covers the CRM. For everything past it, such as your billing system, your warehouse or an internal API, the n8n bridge picks up where it stops.',
      bullets: [
        'Use the hosted n8n instance, or point us at one you already run',
        'Hundreds of integrations on the n8n side, none of which we have to build',
        'Webhooks on conversations, leads and tickets for anything with an HTTP endpoint',
        'Workflow runs are part of your plan, so they do not consume credits',
        'Every run is inspectable step by step, so a failure tells you which step and why',
      ],
    },
    finalCta: {
      heading: 'Build one and watch it run.',
      body:
        'Start from a trigger you already have, add the two or three steps that follow, and stop doing that part by hand.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- Messages & Inbox Page ---
  // The nine channels are BotIntegrationType in the Prisma schema. Email is
  // IMAP/SMTP only - there is no OAuth path in the codebase, so nothing here
  // may imply one-click Gmail or Outlook. The three AI limits are schema
  // defaults (aiMode OFF, aiReplyDelaySeconds 120, aiMaxRepliesPerThread 3)
  // and scripts/verify-claims.mjs fails if any of them changes under us.
  messagesPage: {
    meta: {
      title: 'Shared Inbox for Chat and Email | Fineguide',
      description:
        'Nine chat channels and your own email in one queue, with routing, departments and a handover that gives the human the whole conversation.',
    },
    hero: {
      title: 'Every conversation.',
      titleAccent: ' One inbox.',
      subtitle:
        'The assistant handles what it can. The moment it cannot, a colleague already has the thread, the customer record and the history in front of them.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'Messages & Inbox',
      screenshotAlt: 'A customer messaging a business from their phone',
    },
    channels: {
      eyebrow: 'One queue',
      heading: 'Nine channels, and none of them is a separate inbox.',
      body:
        'A customer who writes on WhatsApp today and Instagram next week is one person with one history. The channel is a detail of how the message arrived, not a filing system.',
      items: [
        {
          name: 'Messaging apps',
          desc: 'WhatsApp, Telegram, Instagram and Messenger, each connected once and then indistinguishable from the rest of the queue.',
        },
        {
          name: 'Team chat',
          desc: 'Slack and Discord, for the communities and internal channels where your customers already are.',
        },
        {
          name: 'Web and widgets',
          desc: 'Your own site, plus JivoChat for teams already running it.',
        },
        {
          name: 'CRM-native chat',
          desc: 'amoCRM and Kommo conversations flow into the same queue as everything else.',
        },
      ],
    },
    handover: {
      eyebrow: 'The handover',
      heading: 'The part most tools get wrong.',
      body:
        'Escalation is not a notification. It is a queue with rules, a record of who accepted, and a guarantee that two people never answer the same customer at once.',
      items: [
        {
          term: 'A single queue',
          desc: 'Unassigned conversations and escalations waiting to be accepted or declined sit in one pull queue, so nothing is waiting in a place nobody looks.',
        },
        {
          term: 'Department handover',
          desc: 'Move a thread to another department and it drops the current assignee and re-routes against that team, rather than sitting with someone who has stopped reading it.',
        },
        {
          term: 'Collision detection',
          desc: 'You are told when a colleague has the same conversation open, and again when they start typing in it.',
        },
        {
          term: 'Saved replies',
          desc: 'Team-shared canned responses, inserted inline with a "/" rather than pasted from a document nobody keeps current.',
        },
        {
          term: 'Business hours',
          desc: 'An out-of-hours auto-reply for the whole team, kept separate from each agent’s personal working hours so the two never contradict each other.',
        },
      ],
    },
    email: {
      eyebrow: 'Inbox',
      heading: 'Real email, not a contact form.',
      body:
        'Connect the mailbox you already send from over IMAP and SMTP. Because the mail leaves your server rather than ours, your deliverability and sender reputation stay yours.',
      bullets: [
        'Connect your own mailboxes and your own domains over IMAP and SMTP',
        'Routing rules decide which mailbox a message belongs to and who picks it up',
        'Per-mailbox signatures, so replies look like they came from the person sending them',
        'Reporting per mailbox alongside the chat reporting, not in a separate tool',
        'Threads attach to the customer record in the CRM',
      ],
    },
    safety: {
      eyebrow: 'AI on email, safely',
      heading: 'Three safeguards you do not have to find.',
      body:
        'Letting AI answer email is the point at which most teams get nervous, and reasonably so. These are defaults, not settings you have to discover.',
      items: [
        {
          term: 'Off by default',
          desc: 'A new mailbox is human-only. AI replies are something you turn on deliberately, per mailbox, once you have read what it would have said.',
        },
        {
          term: 'A pause before sending',
          desc: 'Replies wait before they go out, so a colleague who is already reading the thread can claim it and the customer never gets two answers.',
        },
        {
          term: 'A hard cap per thread',
          desc: 'After a set number of AI replies in one conversation, it stops and hands to a human, so two automated systems can never reply to each other forever.',
        },
      ],
    },
    finalCta: {
      heading: 'Put every channel in one queue.',
      body:
        'Connect a channel, watch the assistant work, and take over whenever you want to. The handover is the part we built first.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- Campaigns Page (outbound telephony) ---
  // Every claim here is checked against the backoffice by
  // scripts/verify-claims.mjs: the three types are the CampaignType enum and
  // the five providers are the TelephonyProvider enum. Adding a fourth type or
  // a sixth provider to the copy without it existing in the schema fails.
  campaignsPage: {
    meta: {
      title: 'Outbound Calling That Runs Itself | Fineguide',
      description:
        'Build an audience, choose what the call is for, and let AI assistants work the list. Test on your own number first, then watch the campaign run.',
    },
    hero: {
      title: 'Outbound calling',
      titleAccent: ' that runs itself.',
      subtitle:
        'Point a campaign at a list and the assistants dial it one at a time, at your pace, with every outcome tracked per contact.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'Campaigns',
      screenshotAlt: 'A desk phone in an open-plan office, notes beside it',
    },
    types: {
      eyebrow: 'Three kinds of campaign',
      heading: 'What the call is for changes what happens after it.',
      body:
        'A campaign is not just a dialler. Each type ends differently: one leaves a conversation, one a dataset, one a funnel. The reporting follows from that.',
      items: [
        {
          name: 'Outreach',
          desc: 'Free-form outbound. The assistant opens the conversation and takes it where it needs to go, and the whole exchange is kept as a transcript.',
        },
        {
          name: 'Survey',
          desc: 'A structured questionnaire. Answers are extracted from each call as it ends and aggregated across the whole run, so you read a result rather than a stack of recordings.',
        },
        {
          name: 'Promotion',
          desc: 'A time-boxed offer. Every outcome (accepted, declined, callback requested) is captured as a stage, so the campaign reads as a conversion funnel rather than a call log.',
        },
      ],
    },
    audience: {
      eyebrow: 'Building the list',
      heading: 'Who gets called, and what happens when they do not answer.',
      body:
        'Audiences come from wherever your contacts already are. Retry behaviour is yours to set, and the one rule that is not configurable is the one that matters: a rejection is never retried.',
      items: [
        {
          term: 'Audiences',
          desc: 'Upload a CSV, pull from existing contacts, select by tag, or combine all three in one list.',
        },
        {
          term: 'Segments',
          desc: 'Save a filter as a reusable segment and point future campaigns at it, instead of rebuilding the same list each time.',
        },
        {
          term: 'Retries',
          desc: 'Retry on no answer or busy, with your own delay per outcome. A contact who declines is never dialled again by that campaign.',
        },
        {
          term: 'Test calls',
          desc: 'Place the campaign against your own number and hear exactly what a customer would, before a single real contact is dialled.',
        },
        {
          term: 'Live control',
          desc: 'Pause a running campaign, resume it, or stop it outright. Progress and per-contact status stay visible throughout.',
        },
      ],
    },
    telephony: {
      eyebrow: 'Your phone system',
      heading: 'Bring the numbers you already own.',
      body:
        'Campaigns run over your existing telephony rather than a number we rent you, so your numbers, caller ID and carrier costs stay where they are today.',
      bullets: [
        'Connect your carrier or PBX with a standard SIP account',
        'Give each inbound number to the assistant that should answer it',
        'On inbound calls, transfer the caller to your team, or take a callback request as a CRM task',
        'Every call is kept as a transcript alongside your chat conversations',
        'Billed per answered minute, with a one-minute minimum',
      ],
    },
    finalCta: {
      heading: 'Run your first campaign against your own number.',
      body:
        'Build a list, place a test call, and listen to what your customers would hear. Nothing reaches a real contact until you say so.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- Pricing Page ---
  pricingMeta: {
    title: 'Pricing | Fineguide.ai',
    description:
      'Plans from €0 to €500 a month, or 20% less paid yearly. See what each plan includes: credits, team seats, knowledge base space and support.',
  },
  pricingPage: {
    heading: 'Pay for what your AI does.<br /><span class="text-[var(--color-primary)]">Everything else is included.</span>',
    subtitle:
      'Every plan runs on credits. AI replies and voice minutes use them. Your CRM, inbox, messages and workflows never do.',
    bullets: ['Free plan, no card needed', 'No setup fees', 'Cancel anytime'],
  },

  // What a credit buys: shown above the plans so their numbers mean something.
  // Rates: VOICE_CREDITS_PER_MIN in the API's pricing-config.ts.
  pricingExplainer: {
    eyebrow: 'What a credit buys',
    items: [
      { value: '1 credit', term: 'AI reply', desc: 'A standard reply from an assistant, in any channel.' },
      { value: '12 credits', term: 'A minute of call scoring', desc: 'Voice QA transcribes a call and scores it against your criteria.' },
      { value: '10 credits', term: 'A minute of AI phone call', desc: 'AI Telephony answering or making a call. 30 a minute with ElevenLabs voice agents.' },
      { value: '0 credits', term: 'Everything else', desc: 'CRM, Inbox, Messages, workflows and reports.' },
    ],
  },

  // Every plan shows the same rows in the same order, so comparing plans is
  // reading across one line. Figures come from NEW_LADDER_2026 and
  // STORAGE_PACKS in the API; scripts/verify-pricing.mjs checks them.
  // Seats: the account owner is not counted (ability.service.ts checks
  // organizationMember rows only), so "3 included" means you plus 3.
  pricingPlans: {
    perMonth: '/month',
    freeLabel: 'forever',
    periodLabel: 'Billing period',
    monthly: 'Monthly',
    yearly: 'Yearly',
    yearlySave: 'save 20%',
    currencyLabel: 'Currency',
    billedMonthly: 'Billed monthly',
    billedYearly: 'Billed {yearTotal} a year. You save {yearSaving}.',
    freeBilling: 'No card needed',
    yearlyTopupNote: '15% off on yearly plans',
    mostPopular: 'Most popular',
    ctaFree: 'Start free',
    ctaPaid: 'Get started',
    labels: {
      credits: 'Credits',
      team: 'Team',
      knowledge: 'Knowledge base',
      extraCredits: 'Extra credits',
      support: 'Support',
    },
    footnote: 'Credits and knowledge base space are shared by everyone in your organization.',
    yearlyNote:
      'Yearly plans are paid once a year. Credits still arrive every month, and extra seats are billed monthly.',
    usdNote: 'Dollar prices are shown for reference. For now you are billed in euro, at the euro price.',
    plans: [
      {
        name: 'Free',
        desc: 'Try the platform with your own content.',
        credits: '200, one time',
        creditsNote: 'About 200 AI replies. They do not renew.',
        team: 'You + 1 teammate',
        teamNote: 'No extra seats on Free',
        knowledge: 'About 200 documents',
        knowledgeNote: '1M characters',
        extraCredits: '{topup0} per 1,000',
        support: 'Community',
      },
      {
        name: 'Starter',
        desc: 'A small team putting its first assistant to work.',
        credits: '3,000 every month',
        creditsNote: 'About 3,000 AI replies, or 250 minutes of call scoring',
        team: 'You + 3 teammates',
        teamNote: 'Then {seat1} per person a month',
        knowledge: 'About 1,000 documents',
        knowledgeNote: '5M characters',
        extraCredits: '{topup1} per 1,000',
        support: 'Email',
      },
      {
        name: 'Business',
        desc: 'A growing team with steady daily volume.',
        credits: '8,000 every month',
        creditsNote: 'About 8,000 AI replies, or 660 minutes of call scoring',
        team: 'You + 5 teammates',
        teamNote: 'Then {seat2} per person a month',
        knowledge: 'About 2,000 documents',
        knowledgeNote: '10M characters',
        extraCredits: '{topup2} per 1,000',
        support: 'Priority',
      },
      {
        name: 'Premium',
        desc: 'Several teams, or a high volume of calls and chats.',
        credits: '25,000 every month',
        creditsNote: 'About 25,000 AI replies, or 2,080 minutes of call scoring',
        team: 'You + 10 teammates',
        teamNote: 'Then {seat3} per person a month',
        knowledge: 'About 4,000 documents',
        knowledgeNote: '20M characters',
        extraCredits: '{topup3} per 1,000',
        support: 'Dedicated',
      },
    ],
  },

  // At zero credits: bot-availability.service.ts stops replies,
  // voice-qa-credit.service.ts stops scoring, voice-billing.service.ts refuses
  // new calls. CRM, Inbox, Messages and workflows have no credit check.
  // Auto top-up is opt-in (isAutoRefillEnabled), capped, and never runs on Free.
  pricingRunOut: {
    eyebrow: 'When credits run out',
    heading: 'Your AI pauses. Your team keeps working.',
    subtitle:
      'Buy more credits at any time and the AI picks up again straight away. On a paid plan you can also turn on automatic top-up, so credits are added before it pauses, up to a monthly limit you set.',
    pausesLabel: 'Pauses',
    pauses: [
      'AI replies in every channel',
      'Call scoring',
      'New AI phone calls. A call already under way finishes.',
    ],
    keepsLabel: 'Keeps working',
    keeps: ['CRM and contacts', 'Inbox and Messages', 'Workflows', 'Your data and settings'],
  },

  pricingAddons: {
    eyebrow: 'Add-ons',
    heading: 'Need more of one thing? Add just that.',
    subtitle:
      'Seats, credits and knowledge base space are sold separately, so you do not have to change plan to get more of one.',
    items: [
      {
        icon: 'seat',
        title: 'Extra seats',
        body: 'Invite more people than your plan covers, at any time. Each extra person is billed monthly with your plan. Free has no extra seats.',
        rates: [
          { label: 'Starter', value: '{seat1} / person' },
          { label: 'Business', value: '{seat2} / person' },
          { label: 'Premium', value: '{seat3} / person' },
        ],
      },
      {
        icon: 'credit',
        title: 'Extra credits',
        body: 'Buy credits whenever you need them, on any plan, Free included. They add to your balance and stay there for as long as you keep the same plan. On a yearly plan they cost 15% less.',
        rates: [
          { label: 'Free', value: '{topup0} / 1,000' },
          { label: 'Starter', value: '{topup1} / 1,000' },
          { label: 'Business', value: '{topup2} / 1,000' },
          { label: 'Premium', value: '{topup3} / 1,000' },
        ],
      },
      {
        icon: 'context',
        title: 'Context Packs',
        body: 'More room for the documents, pages and PDFs your assistants read, on any plan. Each pack is its own monthly charge that you can remove when you no longer need it.',
        rates: [
          { label: 'Per pack, per month', value: '{pack}' },
          { label: 'Space added', value: '+5M characters' },
          { label: 'Roughly', value: '1,000 documents' },
        ],
      },
    ],
    footnote:
      'A Context Pack can only be removed if your content still fits without it. Delete some content first if it does not.',
  },

  // Message cost: computeMessageCreditUnit in the API's credit-unit.ts,
  // max(1, round(1 + toolCalls / 3)). Attachments are stored, not charged.
  // AI Telephony: billed from answer, rounded up to the second, 60 s minimum.
  pricingCredits: {
    eyebrow: 'The details',
    heading: 'How credits are counted',
    items: [
      {
        term: 'AI replies',
        desc: 'A standard reply costs 1 credit. When the assistant has to take several actions to answer, such as looking something up or updating the CRM, the reply costs more: 2 credits for 2 to 4 actions, 3 for 5 to 7. Files and images in the chat cost nothing extra.',
      },
      {
        term: 'Call scoring',
        desc: 'Voice QA uses 12 credits for each minute of a call, with a one-minute minimum per call.',
      },
      {
        term: 'AI phone calls',
        desc: 'Counted from the moment the call is answered, not while it rings, with a one-minute minimum. 10 credits a minute, or 30 with ElevenLabs voice agents. Voice chats in your website widget count as AI replies.',
      },
      {
        term: 'Always free',
        desc: 'CRM, Inbox, Messages, workflows, reports and integrations never use credits.',
      },
    ],
  },

  pricingEnterprise: {
    heading: 'Need an Enterprise plan?',
    subtitle: 'For high volume, custom integrations or specific compliance requirements, we offer tailored solutions.',
    features: [
      'Custom credit packages',
      'Volume discounts',
      'Priority support & SLA',
      'Dedicated account manager',
    ],
    cta: 'Contact us',
  },

  // Plan changes: subscription.service.ts swaps the price now and applies the
  // new plan at the next renewal, for upgrades and downgrades alike. Bought
  // credits are tied to the subscription record, so a plan change or
  // cancellation leaves them behind.
  pricingFaq: {
    heading: 'Questions about pricing',
    subtitle: 'The rules, in plain words.',
    currency: { q: 'Which currency am I charged in?', a: 'Euro, for now. Dollar prices are the euro prices converted and rounded, shown for reference. If you subscribe, you pay the euro price.' },
    items: [
      { q: 'What is a credit?', a: 'Credits pay for the work the AI does. A standard AI reply is 1 credit, a minute of call scoring is 12, and a minute of AI phone call is 10, or 30 with ElevenLabs voice agents. Everything else on the platform is included in your plan.' },
      { q: 'Do unused credits carry over?', a: 'No. On a paid plan your credits refresh on each billing date, and anything unused does not carry over. The 200 credits on Free are given once and do not refresh.' },
      { q: 'What happens to credits I buy?', a: 'They add to your balance and have no expiry date, but they belong to your current plan. If you change plan or cancel, unused credits you bought do not move with you.' },
      { q: 'Can I change plan?', a: 'Yes, at any time. Moving from Free to a paid plan starts straight away. Moving between paid plans, up or down, takes effect on your next billing date.' },
      { q: 'How do I cancel?', a: 'Cancel from your billing settings. Your plan keeps running until the end of the month you have paid for, then your account moves to the Free plan.' },
      { q: 'Who counts as a seat?', a: 'Everyone you invite, including invitations that have not been accepted yet. You, as the account owner, are not counted, so Starter covers you plus 3 teammates.' },
      { q: 'What if my knowledge base is full?', a: 'You get a warning at 85%. When it is full, new documents and pages are not added until you remove some content, add a Context Pack or move to a bigger plan.' },
      { q: 'How does yearly billing work?', a: 'You pay for 12 months at once and save 20%. Credits still arrive every month, extra credits cost 15% less, and extra seats are billed monthly. You choose monthly or yearly when you subscribe; to switch later, cancel and subscribe again with the other option. Free has no yearly option.' },
      { q: 'Can I try it before paying?', a: 'Yes. The Free plan is yours to keep, with 200 credits and room for you and one teammate. No card needed.' },
    ],
  },

  // --- Enterprise Page ---
  enterpriseMeta: {
    title: 'Enterprise: On-Premise & Consultancy | Fineguide.ai',
    description:
      'Custom plans, on-premise deployment on your own infrastructure, platform adaptation and consultancy for teams with security or scale requirements.',
  },
  enterprisePage: {
    hero: {
      title: 'Enterprise on your',
      titleAccent: ' terms.',
      subtitle:
        'Dedicated service for teams that operate at scale, with custom plans, on-premise deployment, platform adaptation, and consultancy that turns the platform into outcomes.',
      cta: 'Contact sales',
    },
    service: {
      eyebrow: 'Dedicated service',
      heading: 'A team that knows your operation.',
      body:
        'Every enterprise deployment is supported by a team that knows your stack, your contracts, and your customers, from onboarding through expansion.',
      items: [
        'Dedicated account manager',
        'Onboarding lead and migration assistance',
        'Priority support with named SLAs',
        'Quarterly reviews and roadmap input',
      ],
    },
    onPremise: {
      eyebrow: 'On-premise deployment',
      heading: 'Run Fineguide on your infrastructure.',
      body:
        'For teams in regulated industries or with strict data sovereignty requirements, Fineguide deploys entirely on your own infrastructure, with your network, your security policies, and your compliance regime. No data leaves your perimeter.',
      items: [
        {
          title: 'Your environment',
          body: 'Self-hosted on your cloud, private cluster, or bare metal. We support the deployment; you own the infrastructure.',
        },
        {
          title: 'Your perimeter',
          body: 'Data stays inside your network boundary. No outbound traffic to third-party services unless you allow it.',
        },
        {
          title: 'Your identity layer',
          body: 'Integrates with your IdP, SSO, and existing access policies. Authentication and audit follow your standards.',
        },
        {
          title: 'Your compliance',
          body: 'Support for compliance review, security audits, and ongoing assessments, including HIPAA, ISO 27001, regional regulations, and beyond.',
        },
      ],
    },
    adaptation: {
      eyebrow: 'Adaptation',
      heading: 'Shaped to your operation.',
      body:
        'No two enterprise operations look the same. We adapt Fineguide to yours, with custom integrations with your internal systems, white-labeled deployments, and workflow customization that matches the way your team actually works.',
      items: [
        'Custom integrations with your internal systems',
        'White-label and brand-aligned deployment',
        'Bespoke workflows and module customization',
        'Direct line to product engineering',
      ],
    },
    consultancy: {
      eyebrow: 'Consultancy',
      heading: 'Strategy, not just software.',
      body:
        'Fineguide consulting works alongside your team, designing assistants, mapping conversations, and tuning the operation so the platform delivers measurable outcomes from day one.',
      items: [
        'Implementation and deployment strategy',
        'Conversation design and assistant tuning',
        'Operations consulting for sales, support, and call centers',
        'Training, enablement, and team certification',
      ],
    },
    plans: {
      eyebrow: 'Plans',
      heading: 'Pricing that matches your scale.',
      body:
        'Volume-based pricing, custom credit packages, and multi-organization deployments, built around your usage, not capped by it.',
      items: [
        'Custom credit packages and volume pricing',
        'Multi-organization deployment across business units',
        'Annual contracts with flexible renewal terms',
      ],
    },
    contactBlock: {
      heading: 'Talk to us.',
      subtitle:
        'Tell us about your team, and we will come back within one business day with a tailored proposal.',
      emailLabel: 'Email',
      email: 'enterprise@fineguide.ai',
      phoneLabel: 'Phone',
      ctaLabel: 'Schedule a deeper call',
    },
    finalCta: {
      heading: 'Ready when you are.',
      subtitle: 'Start a conversation and we will take it from there.',
      ctaLabel: 'Contact sales',
    },
  },

  // --- Contact Page ---
  contactMeta: {
    title: 'Contact | Fineguide.ai',
    description: 'Contact the Fineguide team. We\'re here for questions, technical support, or to discuss how the AI platform can help your business.',
  },
  contact: {
    heading: 'Contact us',
    subtitle: 'Want to learn how Fineguide can transform your customer interactions? Write to us and we\'ll respond as soon as possible.',
    talkHeading: 'Let\'s talk',
    talkText: 'Whether you want to automate support, capture more leads, or integrate AI into your workflow, we\'re here to help.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    demoLabel: 'Schedule a demo',
    demoSubtext: 'Personalized platform walkthrough',
    responseNote: 'We typically respond within 2-4 hours on business days.',
    demoCta: 'Schedule demo',
    formHeading: 'Send us a message',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailFieldLabel: 'Email',
    emailPlaceholder: 'email@company.com',
    subjectLabel: 'Subject',
    subjectDefault: 'Choose a subject',
    subjectOptions: ['Sales inquiry', 'Technical support', 'Partnership', 'General question', 'Other'],
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us how we can help...',
    submitButton: 'Send message',
    submitting: 'Sending...',
    successMessage: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
    errorMessage: 'An error occurred. Please try again.',
    validationName: 'Name is required.',
    validationEmail: 'Please enter a valid email address.',
    validationMessage: 'Message is required.',
    faqHeading: 'Frequently asked questions',
    faqSubheading: 'About the contact and support process',
    faq: [
      { q: 'How quickly will I get a response?', a: 'We typically respond within 2-4 hours on business days (Monday-Friday, 9:00-18:00). For urgent matters, please mention it in your message.' },
      { q: 'Can I schedule a demo instead?', a: 'Of course! You can <a href="/schedule-demo">schedule a personalized demo</a> to see Fineguide in action. Our specialists will present the platform based on your specific needs.' },
      { q: 'What information should I include?', a: 'Include your company name, current customer challenges and what you want to achieve with AI automation. The more details you provide, the better we can tailor our response.' },
    ],
  },

  // --- Schedule Demo Page ---
  scheduleDemoMeta: {
    title: 'Schedule a Demo | Fineguide.ai',
    description: 'Schedule a personalized demo of the Fineguide platform. Discover how we can help you qualify more leads, provide better support and automate workflows.',
  },
  scheduleDemo: {
    heading: 'Schedule a personalized<br class="hidden sm:block" /> demo',
    subtitle: 'Discover how Fineguide can transform your customer interactions. Get a demonstration tailored to your needs and industry.',
    stats: [
      { value: '30 min', label: 'Personalized demo' },
      { value: 'Live', label: 'Platform walkthrough' },
      { value: 'Custom', label: 'Tailored to your industry' },
      { value: 'Free', label: 'No obligations' },
    ],
    bullets: ['No sales pressure', 'Industry-specific examples', 'Q&A session included'],
    calendarHeading: 'Choose a convenient date',
    calendarSubtext: 'Use the calendar below to schedule your demo',
    expectHeading: 'What to expect at your demo',
    expectSubtext: 'Our specialists will present the platform in a session tailored to your needs.',
    expectCards: [
      { title: 'Platform overview', text: 'Walkthrough of AI assistants, CRM, workspace, Voice QA, AI Telephony, and n8n automations in one connected story.', duration: '~15 minutes' },
      { title: 'Industry-specific examples', text: 'Real use cases tailored to your industry and business model.', duration: '~10 minutes' },
      { title: 'Q&A session', text: 'Ask about implementation, pricing, integrations and how Fineguide fits your workflow.', duration: '~5 minutes' },
    ],
    faqHeading: 'Frequently asked questions',
    faqSubheading: 'About the demo process',
    faq: [
      { q: 'How long is the demo?', a: 'The standard demo is 30 minutes, but we can adjust based on your needs. We focus on the most relevant features for your use case.' },
      { q: 'Is this a sales call?', a: 'No pressure! This is a product demonstration to help you understand if Fineguide is right for your business. Our goal is to provide value and answer your questions.' },
      { q: 'Can I bring my team?', a: 'Absolutely! We encourage you to invite relevant colleagues. The more context we have about your needs, the better we can customize the demo.' },
      { q: 'What if I need to reschedule?', a: 'No problem! Reply to the confirmation email or contact us directly. We\'re flexible and happy to find a time that works for everyone.' },
    ],
  },
} as const;
