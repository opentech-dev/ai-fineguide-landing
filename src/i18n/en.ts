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
    partners: 'Partners',
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
    about: 'About',
    scheduleDemo: 'Schedule a demo',
    enterprise: 'Enterprise',
    partners: 'Partners',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    copyright: 'All rights reserved.',
  },

  // --- Homepage meta ---
  indexMeta: {
    title: 'Fineguide | AI-first CRM and business automation platform',
    description:
      'An AI-first CRM: AI assistants on your website and messaging apps, deals and tasks, a shared inbox, AI phone calls and call scoring. Start free.',
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
        desc: 'Contacts, companies, deals and pipelines, tasks, duplicate review, and sales reports.',
      },
      {
        name: 'Voice',
        desc: 'Quality assurance on every call, plus AI-driven inbound and outbound telephony.',
      },
      {
        name: 'Messages',
        desc: 'Every conversation your assistants handle, in a team inbox with a routing queue, handover to a person, and its own reporting.',
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
        desc: 'n8n automations, on an instance Fineguide hosts for you or your own, plus assistant actions and webhooks that connect Fineguide to the rest of your tools.',
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
      'Duplicate review, with a person confirming every merge',
      'Custom fields auto-filled by assistants',
    ],
    screenshotAlt: 'Illustration of one customer record linked to a conversation, a chart, a task, a call recording and a company',
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
    screenshotAlt: 'Illustration of a call recording becoming a transcript and then a score',
  },

  // --- Messages & Inbox ---
  conversations: {
    eyebrow: 'Messages & Inbox',
    title: 'Every conversation lands somewhere a person can take over.',
    body:
      'Chat and email arrive in one team inbox, with a routing queue, rules and departments behind it. The assistant handles what it can; the moment it cannot, a colleague already has the thread and the customer record in front of them.',
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
        'Search by document title',
        'Trash with recovery',
      ],
    },
    automations: {
      eyebrow: 'Automations',
      title: 'Connect Fineguide to the rest of your tools.',
      body:
        'Run n8n automations on an instance Fineguide hosts for you, or connect the one you already run. Give your assistants actions that call your own systems, and send what happens in a conversation to any address that accepts a webhook.',
      linkLabel: 'Explore automations',
      features: [
        'An n8n instance hosted for you by Fineguide, or your own connected to it',
        'Import an n8n workflow that starts with a webhook as an assistant action',
        'Custom actions built from a pasted cURL command, with stored secrets and a test panel',
        'Webhooks on messages, sessions, tickets, ratings and collected information',
        'Facebook Lead Ads form submissions passed on as a webhook event',
        'Hundreds of ready-made integrations through n8n',
      ],
    },
  },

  // --- Numbers (inline editorial figures) ---
  numbers: {
    eyebrow: 'By the numbers',
    items: [
      {
        figure: '24/7',
        prose: 'assistants answering on every channel you have connected, nights and weekends included.',
      },
      {
        figure: '30',
        prose: 'languages for call-quality reports. AI phone calls speak 14, and the website chat widget comes in 24.',
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
      'Sales teams use Fineguide to qualify faster. Support centers use it to handle volume without growing headcount. Call centers use it to score every call and coach agents with the evidence behind each mark. Customer success teams use it to keep accounts coherent across channels.',
    audiences: 'Sales · Support · Customer success · Call center operations',
  },

  // --- Integrations ribbon ---
  // Security strip. docs/goals.md lists "Security & compliance (high level)"
  // under what belongs on the website. On-premise deployment is a contracted
  // enterprise service, and the copy says so. Note it says we SUPPORT
  // compliance reviews - it does not claim certification, and must not start
  // to. Never name where the hosted service runs or what it runs on.
  security: {
    eyebrow: 'Security',
    title: 'Your data, on your terms.',
    body:
      'When you need it, Fineguide can be deployed on your own infrastructure under an enterprise contract, so you decide what leaves your network. We also support your compliance reviews and security audits.',
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
      'n8n',
    ],
  },

  // --- Final CTA ---
  finalCta: {
    heading: 'Ready to consolidate?',
    body:
      'See Fineguide running on your operation in a 30-minute walkthrough.',
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
            'Upload documents, link URLs, or attach PDFs. The assistant answers from the knowledge you give it, and you can limit it to only what it has learned from you.',
        },
        {
          title: 'Voice',
          body:
            'The voice the assistant speaks with on phone calls and in the voice conversation mode of your website widget. Pick a voice, or just a male or female one, and preview it before it goes live.',
        },
        {
          title: 'Session Variables',
          body:
            'Define the fields the assistant extracts mid-conversation, such as name, intent, budget, and pain point, and they flow into CRM leads automatically.',
        },
        {
          title: 'Actions',
          body:
            'Call your own systems from inside a conversation: an HTTP action built from a pasted cURL command, or an n8n workflow imported as an action. Book meetings through your own booking system, open tickets, hand off to a person.',
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
        'What used to require a rep copying notes from a chat window into a spreadsheet now happens automatically, while the conversation is still going.',
      steps: [
        'Customer starts a conversation on any connected channel',
        'Assistant identifies intent, extracts the fields you defined, and answers from your knowledge',
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
      body: 'See an assistant configured for your business in a 30-minute walkthrough.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- CRM page (custom layout) ---
  crmPage: {
    meta: {
      title: 'CRM Built on One Customer Record | Fineguide.ai',
      description:
        'A CRM organised around the customer record: contacts, companies, deals, tasks and duplicate review, with assistants capturing the person mid-conversation.',
    },
    hero: {
      title: 'One customer record. Every team.',
      titleAccent: ' Every conversation.',
      subtitle:
        'Your assistant captures the person and books the follow-up. Your team works the deal. Everyone reads the same record, without the export-and-import dance between tools.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'The CRM module',
      screenshotAlt: 'Two colleagues at a desk, going through a client together over a notebook',
    },
    surfaces: {
      eyebrow: 'Inside the CRM',
      heading: 'Six screens, one customer record.',
      body:
        'Each screen is a different view of the same data, so you never duplicate work, never lose context, and never wonder which tool has the latest version.',
      items: [
        {
          name: 'Contacts',
          desc: 'The people you do business with, each holding as many phone numbers as they have, their email, and their handle on every messaging app they wrote from.',
        },
        {
          name: 'Companies',
          desc: 'Account records with their own email address, so mail from billing@ files under the company even when nobody there is a contact yet. A person can belong to more than one.',
        },
        {
          name: 'Deals',
          desc: 'Your pipeline as a board or a table, with value, currency, probability, expected close date and an owner. Save a view and share it with the team.',
        },
        {
          name: 'Tasks',
          desc: 'Follow-ups and callbacks on boards you name yourself, or as a table or a calendar. Every task knows whether a person, an assistant or a conversation created it.',
        },
        {
          name: 'Duplicates',
          desc: 'Fineguide looks for the same person twice in the background and puts the pairs here, with the evidence, for someone to confirm or dismiss.',
        },
        {
          name: 'Reports',
          desc: 'Open pipeline, weighted forecast, win rate, average days to win, deals by stage, and a leaderboard by owner.',
        },
      ],
    },
    customerRecord: {
      eyebrow: 'The customer record',
      heading: 'Identity that survives the channel switch.',
      body:
        'A customer who writes on WhatsApp on Monday and calls on Tuesday is the same customer. Fineguide links them by email address, by phone number, and by the identity they carry on each messaging app, and keeps the record whole from there.',
      bullets: [
        'Someone who writes from Telegram, WhatsApp, Instagram or Facebook becomes a contact automatically, with that handle stored alongside the others',
        'Inbound email files the thread under every external person on it, creating the contacts it needs',
        'Duplicates are found by name similarity and by hard signals, such as a WhatsApp number you already have on file, then confirmed by a person, never merged behind your back',
        'A merge moves every deal, task, conversation, tag and file across in one go, and keeps the record it replaced rather than deleting it',
        'One page per customer: what happened, their conversations, email, deals, tasks, files and your team comments',
      ],
    },
    work: {
      eyebrow: 'Working the pipeline',
      heading: 'Structure your team will actually keep to.',
      body:
        'A pipeline is only useful if the fields match the way you sell. Stages, reasons, task types and custom fields are yours to define, and the reporting follows whatever you set.',
      blocks: [
        {
          title: 'Stages and forecast',
          body:
            'Each stage carries a probability, and the forecast weights every open deal by the stage it sits in.',
        },
        {
          title: 'Why deals close',
          body:
            'Winning or losing a deal asks for a reason, from lists your organisation defines, so the report says more than how many.',
        },
        {
          title: 'Deals going stale',
          body:
            'Set how long a deal may sit in a stage. Past that, the board flags it as untouched rather than leaving it to rot quietly.',
        },
        {
          title: 'Your own fields',
          body:
            'Add fields to contacts, companies, deals and tasks: text, number, date, checkbox, or a list to pick from. Filter and search on them. Fields your assistant collects appear here on their own, marked as its work.',
        },
        {
          title: 'Task types',
          body:
            'Define the kinds of work your team does, each with its own fields and its own defaults for priority, duration, due date, assignee and department.',
        },
        {
          title: 'Calendar',
          body:
            'Tasks sync both ways with Google Calendar, so a callback booked in the CRM is in the diary and the other way round.',
        },
      ],
    },
    dataFlow: {
      eyebrow: 'Getting data in and out',
      heading: 'No copy and paste between systems.',
      body:
        'Records arrive from the conversations you are already having, from the files you already hold, and from the systems you already run.',
      bullets: [
        'Assistants capture the person mid-conversation and book a follow-up task, rather than leaving a note nobody reads',
        'Import contacts from CSV, TSV, XLS or XLSX, map the columns yourself, and let it run in the background',
        'Export the contacts you have selected to CSV, choosing which fields and in what order, custom fields included',
        'Assistant webhooks send each message, ticket and collected field to your own systems or to n8n as it happens',
        'A REST API with your own keys covers contacts, companies, deals, tasks, tags, comments and custom fields',
        'Contacts and companies carry an external id, so a sync from your ERP or shop can run again without making copies',
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
    // Since 2026-10-17 there is one realtime voice engine and no engine or
    // model picker. Never name the vendors behind it.
    voice: {
      eyebrow: 'On the call',
      heading: 'Choose the voice and the languages.',
      body:
        'The same assistant configuration you use for chat, with the choices a phone call adds. Everything here is set per assistant.',
      items: [
        {
          term: 'Built for live calls',
          desc: 'Every call runs on one realtime voice engine that listens and answers while the caller speaks. There is no engine or model to choose: you pick the voice and the languages.',
        },
        {
          term: 'Voices',
          desc: 'Pick a specific voice, or just a male or female one, and listen to it before the assistant goes live.',
        },
        {
          term: 'Languages',
          desc: 'Fourteen: English, Romanian, Russian, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Arabic, Japanese, Korean and Chinese. Give one assistant several, and it replies in the language the caller is speaking.',
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
        'Calling hours for each day of the week, so a campaign only dials when you allow it',
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
          desc: '10 credits a minute, whichever voice and language the assistant uses, unless your plan sets its own rates.',
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
        'A block-based editor for playbooks, briefs and team knowledge, with folders, favourites, links between documents and case files tied to your contacts.',
    },
    hero: {
      title: 'Documents that live',
      titleAccent: ' with the customer.',
      subtitle:
        'A block-based editor for playbooks, briefs, and team knowledge, in the same product as the contacts and customers your team is already working with.',
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
        'Headings, lists, checklists, quotes, code, tables, images and files. Every block is composable. Slash commands speed up writing. Keyboard shortcuts speed up everything else.',
      blocks: [
        {
          title: 'Block-based structure',
          body:
            'Headings, paragraphs, lists, checklists, quotes, code and tables. Drag to reorder, indent to nest, and drop images and files straight into the page.',
        },
        {
          title: 'Slash commands',
          body:
            'Type a slash to pull up every block type and shortcut. No menu hunting, no formatting interruptions.',
        },
        {
          title: 'Links between documents',
          body:
            'Point to another document from inside the text. One click opens it, so a playbook can lead straight to the brief or the checklist it depends on.',
        },
      ],
    },
    structure: {
      eyebrow: 'Organization',
      heading: 'Hierarchy, favourites, and recovery.',
      body:
        'Workspace organizes itself around the way your team actually thinks, with folders for departments, documents for playbooks, recents and favourites for what you touched last week.',
      bullets: [
        'Folder and document hierarchy with drag-and-drop reorder',
        'Recents and favourites for the docs you live in',
        'Search by document title across the workspace',
        'Trash with recovery, so deleting is not destructive',
      ],
    },
    connected: {
      eyebrow: 'Connected to your customers',
      heading: 'Case documents that know who they are about.',
      body:
        'A case document carries the contacts it concerns, along with its own properties. Whoever opens the case sees who it is about, and the notes, files and decisions stay together in one place instead of scattered across chat threads.',
    },
    finalCta: {
      heading: 'Ready to consolidate?',
      body: 'See workspace, CRM, and assistants together in a 30-minute walkthrough.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- Voice QA page (custom layout) ---
  voiceQaPage: {
    meta: {
      title: 'Voice QA: Score Every Call Automatically | Fineguide',
      description:
        'AI scoring on every recorded call, against your own rules, per department. Quotes from the call behind every mark, and dashboards by agent, rule and department.',
    },
    hero: {
      title: 'Every call, scored',
      titleAccent: ' and structured.',
      subtitle:
        'Every recording that reaches Fineguide is transcribed and scored against your rules, with the lines from the call that justify each mark. Stop sampling ten calls a week.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'The Voice QA module',
      screenshotAlt: 'A quality manager in headphones, listening back to a call and marking a sheet',
    },
    process: {
      eyebrow: 'How it works',
      heading: 'Five steps. Every call.',
      body:
        'A QA manager who listens to ten calls a day sees a fraction of what happens on the phone. Voice QA listens to all of them, applies the same rules every time, and has the feedback ready while the call still matters.',
      steps: [
        'Calls arrive by upload, through the API, or automatically from a connected carrier.',
        'The AI transcribes the call and separates the two sides, so you read a dialogue between agent and customer rather than a wall of text. It detects the spoken language itself, even when the call switches language halfway through.',
        'The call is scored against the rules of its department. The AI first works out which categories of rule the call is even about, so a billing question is not marked down for missing a sales rule.',
        'Each rule comes back with a score, the reasoning behind it, three to five direct quotes from the call, and a suggestion for the agent.',
        'Managers see the score by department and by agent, which rules pass and which fail, and how all of it moves week to week.',
      ],
    },
    sources: {
      eyebrow: 'Getting calls in',
      heading: 'Upload them, post them, or let them arrive.',
      body:
        'Voice QA scores recordings. How they reach the platform is up to you, and nothing is processed, or charged, until you ask for it.',
      items: [
        {
          name: 'Upload',
          desc: 'Drop in one recording or a batch, up to 50 MB each. Storing, transcribing and scoring are three separate choices, so a stray click cannot spend credits.',
        },
        {
          name: 'API',
          desc: 'Post a recording, a link to one, or a transcript you already have. Read back scores, transcripts and dashboard figures the same way.',
        },
        {
          name: 'Connected carriers',
          desc: 'Moldcell, Orange Moldova and the Fineguide call recording app for Android deliver new calls on their own, checked every minute.',
        },
        {
          name: 'Automatic scoring',
          desc: 'Turn it on per department and every arriving call is scored without anyone opening it. The department needs at least one rule before anything is scored.',
        },
        {
          name: 'Numbers you exclude',
          desc: 'Exclude a number, an internal one for example, and its calls are never processed and never appear in the views.',
        },
      ],
    },
    configuration: {
      eyebrow: 'Configuration',
      heading: 'Per-department rules, your scoring model.',
      body:
        'Every team has its own quality bar. Voice QA lets you write it down, with different rules and weights per department, and one engine handling sales calls, support calls and retention calls side by side.',
      blocks: [
        {
          title: 'Departments',
          body:
            'Organise by team, location or function. Each department has its own rules, its own settings and its own dashboards.',
        },
        {
          title: 'Categories and rules',
          body:
            'Write what good sounds like, such as the opening, discovery, objection handling and compliance, grouped into categories. Up to 50 rules per department.',
        },
        {
          title: 'Fixed or weighted',
          body:
            'Score every rule out of the same number, or give each rule its own weight. The final percentage follows your weights, not ours.',
        },
        {
          title: 'Rules that do not apply',
          body:
            'A rule the call never had the chance to trigger is marked not applicable and left out of the total, instead of scored zero. Rules can also apply to incoming calls only, outgoing only, or both.',
        },
        {
          title: 'Agent scorecards',
          body:
            'The scorecard is ready as soon as the call is scored, with the quotes behind every mark and a suggestion per rule, and it can be emailed to the agent automatically.',
        },
        {
          title: 'The customer record',
          body:
            'Calls match to a contact by phone number and land on the same customer timeline as chats and tickets. The customer is one story, not three.',
        },
      ],
    },
    callResult: {
      eyebrow: 'On every call',
      heading: 'The score, and the reason for it.',
      body:
        'A number on its own starts an argument. Every mark Voice QA gives is backed by the words that earned it, so a coaching conversation begins with evidence instead of opinion.',
      blocks: [
        {
          title: 'The transcript',
          body:
            'Both sides of the call, separated, with the automated IVR introduction stripped out.',
        },
        {
          title: 'Rule by rule',
          body:
            'A score, the reasoning, three to five direct quotes, and one concrete suggestion. Quotes stay in the language the customer used, even when the report is written in another.',
        },
        {
          title: 'How the customer felt',
          body:
            'Their mood tracked across the call rather than summed up at the end, a satisfaction reading, and what they called about.',
        },
        {
          title: 'Fields you define',
          body:
            'Tell the AI what else to capture on every call, such as the product mentioned, the complaint type or a competitor named, as text, a number, yes or no, or a pick list. Caller name, company, phone and email come as standard.',
        },
        {
          title: 'The recording',
          body:
            'Playable next to the score, so you can hear the moment yourself.',
        },
        {
          title: 'The report language',
          body:
            'Conclusions, reasoning and suggestions come back in the language you choose, from 30, whatever language the call was in.',
        },
      ],
    },
    reporting: {
      eyebrow: 'Cases and dashboards',
      heading: 'One call is an incident. Ten is a pattern.',
      body:
        'Individual scores tell an agent how they did. The views above them tell you where the operation is losing customers.',
      blocks: [
        {
          title: 'Cases',
          body:
            'Group up to ten calls about the same problem for the same customer and score the case as a whole: whether it was resolved, how long it took, how many people the customer had to deal with, and how their mood moved from the first call to the last.',
        },
        {
          title: 'By department and agent',
          body:
            'Average score, how it compares with last month, and who is furthest ahead and furthest behind.',
        },
        {
          title: 'By rule',
          body:
            'Which rules your team passes and which they keep failing, so training goes where it is needed.',
        },
        {
          title: 'Over time',
          body:
            'Score, minutes processed and call volume, day by day.',
        },
        {
          title: 'Out to your systems',
          body:
            'Every finished call can be pushed to your own webhook, or to AmoCRM or Kommo.',
        },
      ],
      footer:
        'Scoring is charged per minute of audio, with a one-minute minimum per call. Transcribing without scoring costs half.',
    },
    finalCta: {
      heading: 'Stop sampling. Start scoring.',
      body: 'See Voice QA running on your own recordings in a 30-minute walkthrough.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
  },

  // --- Automations Page (n8n, assistant actions, webhooks) ---
  // The visual workflow builder is admin-only in the product and is NOT sold
  // here. This page covers what customers have today: n8n (hosted by Fineguide
  // or their own), assistant actions (HTTP calls from a pasted cURL command,
  // stored secrets, a test panel; n8n workflows that start with a webhook,
  // imported as actions) and assistant webhooks. Webhook events are the ones
  // the platform actually sends (EVENT_META in agents/webhooks/types.ts):
  // CREATE_LEAD is offered but never sent, so leads are not listed.
  // scripts/verify-claims.mjs still scans this block for the builder's
  // planned step types (classify, summarize, translate, reply, notify,
  // send_email); none may appear here.
  automationsPage: {
    meta: {
      title: 'Automations with n8n, Actions and Webhooks | Fineguide',
      description:
        'n8n automations hosted for you or on your own instance, assistant actions built from a cURL command, and webhooks on conversations, tickets and lead forms.',
    },
    hero: {
      title: 'Connect the conversation',
      titleAccent: ' to the rest of your business.',
      subtitle:
        'Run n8n automations on an instance Fineguide hosts for you, give your assistants actions that call your own systems, and send what happens in a conversation wherever it needs to go.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'Schedule a demo',
    },
    intro: {
      eyebrow: 'Automations',
      screenshotAlt: 'Reviewing reports on a tablet at a desk',
    },
    n8n: {
      eyebrow: 'n8n automations',
      heading: 'Hosted for you, or your own.',
      body:
        'n8n is where the work that leaves Fineguide gets done: your billing system, your warehouse, an internal API, or any of the hundreds of services n8n already connects to.',
      items: [
        {
          name: 'Hosted by Fineguide',
          desc: 'Let Fineguide set up an n8n instance for you and connect it to your account, with nothing to install or look after.',
        },
        {
          name: 'Your own instance',
          desc: 'Already run n8n? Connect it with its address and an API token, and keep the workflows you have.',
        },
        {
          name: 'Workflows as actions',
          desc: 'Import an n8n workflow that starts with a webhook, and it becomes an action your assistant can call in the middle of a conversation.',
        },
        {
          name: 'Hundreds of integrations',
          desc: 'Everything n8n connects to is within reach, without waiting for us to build an integration of our own.',
        },
      ],
    },
    actions: {
      eyebrow: 'Assistant actions',
      heading: 'Let the assistant call your systems.',
      body:
        'An action is an HTTP request the assistant can make while it talks to a customer, such as checking an order, looking up availability or booking a slot in the system you already use.',
      items: [
        {
          term: 'From a cURL command',
          desc: 'Paste a cURL command and the action is built from it: the address, the method, the headers and the body.',
        },
        {
          term: 'Stored secrets',
          desc: 'Keep API keys and tokens as stored secrets and use them in your actions, instead of writing them into each request.',
        },
        {
          term: 'Test before it goes live',
          desc: 'Run the action from the test panel and see what your system sends back, before the assistant uses it with a customer.',
        },
        {
          term: 'In the conversation',
          desc: 'The assistant calls the action when the customer’s request needs it, and answers with what your system returned.',
        },
        {
          term: 'What it costs',
          desc: 'A reply that needs 2 to 4 actions costs 2 credits, and 5 to 7 actions cost 3, instead of the usual 1.',
        },
      ],
    },
    webhooks: {
      eyebrow: 'Webhooks',
      heading: 'Send each event where it needs to go.',
      body:
        'Give an assistant a webhook address and choose the events it should report. Each one arrives as it happens, ready for n8n or any system with an HTTP endpoint.',
      bullets: [
        'A message sent or received',
        'A session opened, or a session closed',
        'A ticket created',
        'A reply rated by the customer',
        'An update to the information the assistant collects',
        'A lead form submitted on your Facebook page, through Facebook Lead Ads',
        'An optional header on every call, so your endpoint can check where it came from',
      ],
    },
    finalCta: {
      heading: 'Connect your first automation.',
      body:
        'Connect n8n, give your assistant one action it can call, and stop doing that part by hand.',
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
          name: 'Your website',
          desc: 'The chat widget on your own site, with its interface in 24 languages and a voice conversation mode for visitors who would rather talk.',
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
        'Connect the mailbox you already send from over IMAP and SMTP. Because replies go out through your own mailbox, your deliverability and sender reputation stay yours.',
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
          term: 'Calling hours',
          desc: 'Set the hours a campaign may call on each day of the week. Outside those hours, nobody on the list is dialled.',
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
    title: 'Pricing | Fineguide AI CRM: plans from €0 a month',
    description:
      'Plans from €0 to €500 a month, or 20% less paid yearly. See what each plan includes: credits, team seats, knowledge base space and support.',
  },
  pricingPage: {
    heading: 'Pay for what your AI does.<br /><span class="text-[var(--color-primary)]">Everything else is included.</span>',
    subtitle:
      'Every plan runs on credits. AI replies, AI email drafts and voice minutes use them. Your CRM, Messages, reports and the email you read and send never do.',
    bullets: ['Free plan, no card needed', 'No setup fees', 'Cancel anytime'],
  },

  // What a credit buys: shown above the plans so their numbers mean something.
  // Rates: VOICE_CREDITS_PER_MIN in the API's pricing-config.ts. AI phone calls
  // are one rate (10 a minute) since the voice engine picker was removed on
  // 2026-10-17. Workflows are not in the "included" lists: they can use credits.
  pricingExplainer: {
    eyebrow: 'What a credit buys',
    items: [
      { value: '1 credit', term: 'AI reply', desc: 'A standard reply from an assistant, in any channel. An AI draft of an email reply is 1 credit too.' },
      { value: '12 credits', term: 'A minute of call scoring', desc: 'Voice QA transcribes a call and scores it against your criteria.' },
      { value: '10 credits', term: 'A minute of AI phone call', desc: 'AI Telephony answering or making a call, counted from the moment it is answered.' },
      { value: '0 credits', term: 'Included in your plan', desc: 'The CRM, Messages, reports, and reading and sending email.' },
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
  // new calls. The CRM, Messages, reports and reading and sending email have
  // no credit check; AI drafts and AI replies in the Inbox do use credits.
  // Auto top-up is opt-in (isAutoRefillEnabled), capped, and never runs on Free.
  pricingRunOut: {
    eyebrow: 'When credits run out',
    heading: 'Your AI pauses. Your team keeps working.',
    subtitle:
      'Buy more credits at any time and the AI picks up again straight away. On a paid plan you can also turn on automatic top-up, so credits are added before it pauses, up to a monthly limit you set.',
    pausesLabel: 'Pauses',
    pauses: [
      'AI replies in every channel, and AI drafts in the Inbox',
      'Call scoring',
      'New AI phone calls. A call already under way finishes.',
    ],
    keepsLabel: 'Keeps working',
    keeps: ['CRM and contacts', 'Messages, answered by your team', 'Reading and sending email', 'Your data and settings'],
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
        desc: 'Counted from the moment the call is answered, not while it rings, with a one-minute minimum: 10 credits a minute, unless your plan sets its own rates. Voice chats in your website widget count as AI replies.',
      },
      {
        term: 'Email in the Inbox',
        desc: 'Reading and sending email is free. An AI draft of a reply, from the Draft reply button, costs 1 credit, and replies the AI writes in the Inbox’s AI modes count as AI replies.',
      },
      {
        term: 'Always free',
        desc: 'The CRM, Messages, reports and integrations never use credits.',
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
    currency: { q: 'Which currency am I charged in?', a: 'Customers in Europe pay in euros. Everywhere else pays in US dollars, at the dollar prices on this page. The country on your billing details decides which.' },
    items: [
      { q: 'What is a credit?', a: 'Credits pay for the work the AI does. A standard AI reply is 1 credit, a minute of call scoring is 12, a minute of AI phone call is 10, and an AI draft of an email reply is 1. The CRM, Messages, reports, and reading and sending email are included in your plan.' },
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
      'Custom plans, on-premise deployment, platform adaptation, SLAs and consultancy, agreed in a contract, for teams with security or scale requirements.',
  },
  // Everything on this page is a contracted service: on-premise deployment,
  // platform adaptation, SLAs, a dedicated account manager and training are
  // agreed per customer. There is no SSO or identity-provider integration in
  // the product, so none is offered here.
  enterprisePage: {
    hero: {
      title: 'Enterprise on your',
      titleAccent: ' terms.',
      subtitle:
        'Dedicated service for teams that operate at scale: custom plans, on-premise deployment, platform adaptation and consultancy, each agreed in your contract.',
      cta: 'Contact sales',
    },
    service: {
      eyebrow: 'Dedicated service',
      heading: 'A team that knows your operation.',
      body:
        'Enterprise service is set out in a contract and delivered by a team that learns your processes, your systems and your customers, from onboarding through expansion.',
      items: [
        'Dedicated account manager',
        'Onboarding lead and migration assistance',
        'Priority support, with SLAs written into the contract',
        'Quarterly reviews and roadmap input',
      ],
    },
    onPremise: {
      eyebrow: 'On-premise deployment',
      heading: 'Run Fineguide on your infrastructure.',
      body:
        'For teams in regulated industries or with strict data sovereignty requirements, we can deploy Fineguide on your own infrastructure as a contracted service, inside your network and under your security policies and compliance regime. You decide what, if anything, leaves your perimeter.',
      items: [
        {
          title: 'Your environment',
          body: 'Deployed on infrastructure you own or choose. We carry out and support the deployment under the contract; the infrastructure stays yours.',
        },
        {
          title: 'Your perimeter',
          body: 'Data stays inside your network boundary. No outbound traffic to third-party services unless you allow it.',
        },
        {
          title: 'Your service terms',
          body: 'Service levels, support hours, training and a dedicated account manager, agreed in the contract rather than promised on a web page.',
        },
        {
          title: 'Your compliance',
          body: 'Support for compliance review, security audits, and ongoing assessments against the frameworks you work under, such as HIPAA, ISO 27001 or regional regulations.',
        },
      ],
    },
    adaptation: {
      eyebrow: 'Adaptation',
      heading: 'Shaped to your operation.',
      body:
        'No two enterprise operations look the same. Under the contract, we adapt Fineguide to yours, with custom integrations with your internal systems, white-labeled deployments, and customization that matches the way your team actually works.',
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
        'Training and enablement for your team',
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

  // --- Partners Page ---
  // Every claim here is backed by the partner module in ai-backoffice-api
  // (modules/payment/partner). The 20% is the partner's margin: it is the
  // default stamped on a newly approved partner (PARTNER_COMMISSION_DEFAULT_PERCENT)
  // and can be edited per partner, so keep the copy at the default. A
  // client discount comes out of that margin and commission is taken on list
  // price (splitMargin / splitInvoice), which is what the discount table shows.
  // Discounts only reach the client while PARTNER_CLIENT_DISCOUNTS_ENABLED is on.
  partnersMeta: {
    title: 'Partner Program: Earn 20% Commission | Fineguide.ai',
    description:
      'Become a Fineguide partner. Earn 20% of every invoice the customers you bring pay, and pass part of it on to them as a discount if you choose.',
  },
  partnersPage: {
    hero: {
      title: 'Grow with',
      titleAccent: ' Fineguide.',
      subtitle:
        'For agencies, integrators and consultants who bring Fineguide to their clients. Earn 20% of every invoice they pay, and share part of it with them as a discount if you choose.',
      cta: 'Become a partner',
    },
    intro: {
      eyebrow: 'The partner program',
      heading: 'Your expertise, our platform, shared revenue.',
      paragraphs: [
        'Fineguide is an AI platform for customer operations: AI assistants on every channel, a shared CRM, AI phone agents and quality checks on every call. Businesses get the most out of it with someone who already knows their systems and their customers. That is where partners come in.',
        'We work with integrators and service providers who connect Fineguide to their clients\' CRM, phone lines and messaging channels, and help them improve how they engage their customers. You keep the client relationship and the services you build around it. We run the platform, and share the revenue with you for as long as the client stays.',
      ],
      points: [
        { title: 'You', body: 'Bring the client, set Fineguide up around their systems, and charge for your own services.' },
        { title: 'We', body: 'Run the platform and keep it improving, so what you set up keeps getting better.' },
        { title: 'Together', body: '20% of what each client pays Fineguide goes to you, month after month.' },
      ],
    },
    commission: {
      eyebrow: 'Partner commission',
      figure: '20%',
      heading: 'Of every invoice your customers pay.',
      body:
        'Not a one-off referral fee. Every month a customer you brought pays Fineguide, 20% of that invoice is yours, for as long as they stay.',
    },
    discounts: {
      eyebrow: 'Discounts for your clients',
      heading: 'Keep all 20%, or share it.',
      body:
        'Your 20% is yours to split. Keep all of it, or give the clients you bring a discount out of it to help close the deal. You choose the discount for each client, and your share is always worked out on the list price.',
      discountLabel: 'Client discount',
      keepLabel: 'You keep',
      rows: [
        { discount: '0%', keep: '20%' },
        { discount: '5%', keep: '15%' },
        { discount: '10%', keep: '10%' },
      ],
      example: 'For every $100 of list price with a 10% discount, your client pays $90 and $10 is yours.',
    },
    whyBuy: {
      eyebrow: 'Why your clients will buy',
      heading: 'Easy to start, with a whole platform to grow into.',
      body:
        'You are not selling a single tool. Fineguide brings AI assistants, a shared CRM, voice and team knowledge onto one platform, and your clients can start on the Free plan with 200 credits and no card, then upgrade when it pays for itself.',
      items: [
        { title: 'AI Assistants', body: 'Answer customers on the web, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord.', href: '/ai-assistants', image: '/images/photos/channels-phone.jpg' },
        { title: 'CRM', body: 'Conversations, leads and tasks on one shared customer record.', href: '/crm', image: '/images/photos/account-review.jpg' },
        { title: 'Voice QA', body: 'Every call transcribed and scored against the criteria each department sets.', href: '/voice-qa', image: '/images/photos/call-review.jpg' },
        { title: 'AI Telephony', body: 'AI agents on live inbound and outbound phone calls.', href: '/voice-ai', image: '/images/photos/agent-call.jpg' },
      ],
      linkLabel: 'See the platform',
    },
    earnings: {
      eyebrow: 'How you earn',
      heading: 'Commission you can check, invoice by invoice.',
      body:
        'Every paid invoice from a customer you introduced adds to your balance. The rate is recorded on each payment when it is earned, so a later change to your rate never rewrites what you already made.',
      items: [
        {
          title: 'No cut-off date',
          body: 'Commission is earned on every invoice your customer pays, month after month, not only on the first one.',
        },
        {
          title: 'Customers stay yours',
          body: 'You get a referral code. Once an account is linked to you it stays linked, and it is never moved to another partner.',
        },
        {
          title: 'Cash or credits',
          body: 'Withdraw your balance in US dollars once it reaches $200, or turn any part of it into Fineguide credits for your own account.',
        },
        {
          title: 'A portal of your own',
          body: 'partners.fineguide.ai shows your clients, every commission and every payout, and exports your commission ledger whenever you need it.',
        },
      ],
      imageAlt: 'A consultant in a café smiling at his phone',
    },
    audience: {
      eyebrow: 'Who it is for',
      heading: 'Made for people who already advise businesses.',
      body:
        'Partners are usually close to the customer long before we are. If your clients ask you about support, sales or call-center operations, Fineguide gives you something concrete to put in front of them.',
      items: [
        'Digital and marketing agencies',
        'Software integrators and IT consultancies',
        'Call-center and customer-support consultants',
        'CRM and automation specialists',
      ],
      imageAlt: 'A consultant walking a business owner through a plan sketched on paper',
    },
    steps: {
      eyebrow: 'How to become a partner',
      imageAlt: 'An agency owner on a phone call by her office window',
      heading: 'Three steps to become a partner.',
      items: [
        {
          title: 'Sign up to Fineguide',
          body: 'Create your Fineguide account. It is free and needs no card. If you already have one, go straight to step 2.',
          link: { label: 'Sign up', href: 'https://app.fineguide.ai/register' },
        },
        {
          title: 'Go to the partner portal',
          body: 'Open partners.fineguide.ai and sign in with your Fineguide account.',
          link: { label: 'Open the partner portal', href: 'https://partners.fineguide.ai' },
        },
        {
          title: 'Complete the partner form',
          body: 'Tell us about your company, your website and the clients you work with. We review every application and come back to you within one business day. Once approved, the portal gives you your referral link and you can start bringing clients.',
        },
      ],
    },
    faq: {
      heading: 'Questions partners ask',
      items: [
        { q: 'Who can become a partner?', a: 'Integrators, IT consultancies, CRM and automation specialists, customer-support and call-center consultants, and agencies that advise businesses on sales, support or customer operations. If your clients come to you for these, you are a good fit.' },
        { q: 'Do I need to be a Fineguide customer?', a: 'You need a Fineguide account to apply, and the Free plan is enough. You do not need a paid plan to become a partner.' },
        { q: 'How are clients linked to me?', a: 'Through your referral link. When a client creates their account from it, that account is linked to you from day one. The first partner an account is linked to is the one that counts, and it is never moved to another partner.' },
        { q: 'What if a client signs up without my link?', a: 'Write to us at contact@fineguide.ai with the client\'s details. We will check it and link the new account to you.' },
        { q: 'Can I charge my clients for my own services?', a: 'Yes. Setup, integration, training and ongoing support are your services, priced and invoiced by you. Your 20% commission comes on top.' },
        { q: 'How long do I earn commission?', a: 'For as long as the customer keeps paying. There is no cut-off date, so you earn month after month, not only in the first year.' },
        { q: 'How do discounts for my clients work?', a: 'You set a discount for each client in the partner portal, up to your 20%. It comes out of your share: give a client 10% off and you keep 10% of the list price.' },
        { q: 'Can I see what my clients pay?', a: 'Yes. The portal lists your clients, their payments and the commission each one earned you, and you can export your commission ledger at any time.' },
        { q: 'How and when do I get paid?', a: 'Your balance grows as your customers pay. Once it reaches $200 you can withdraw it by bank transfer, to an IBAN, a US bank account or by SWIFT. You can also turn any part of it into Fineguide credits whenever you like.' },
        { q: 'What happens if a client cancels?', a: 'Commission stops when their payments stop. Everything you earned before that stays in your balance.' },
        { q: 'Is there a fee to join?', a: 'No. Becoming a partner costs nothing.' },
      ],
    },
    contactBlock: {
      heading: 'Become a partner.',
      subtitle: 'Three steps, a few minutes.',
      questions: 'Questions first?',
      emailLabel: 'Email',
      email: 'contact@fineguide.ai',
      emailSubject: 'Partnership',
      callLabel: 'Prefer to talk first?',
      ctaLabel: 'Schedule a call',
    },
    finalCta: {
      heading: 'Bring Fineguide to your clients.',
      subtitle: 'Sign up, open the partner portal and complete the form. It takes a few minutes.',
      ctaLabel: 'Go to the partner portal',
      ctaHref: 'https://partners.fineguide.ai',
    },
  },

  // --- About Page ---
  // Ownership facts, stated as the owner gave them: Liviu Maftuleac is the sole
  // founder, owner and holder of Fineguide.AI, Eightcell Labs and Tesseract.
  // Corneliu Maftuleac is an advisor only, with no ownership or attribution;
  // never describe him as a founder, owner, holder, author or team lead.
  // Everything here is shown to visitors as normal page text.
  aboutMeta: {
    title: 'About Fineguide.AI | Company, Founder and Contact',
    description:
      'Fineguide.AI is an AI-first CRM and automation platform built in Chișinău, Moldova. Meet the company, its founder Liviu Maftuleac, and how to reach us.',
  },
  aboutPage: {
    hero: {
      eyebrow: 'About',
      title: 'The company behind',
      titleAccent: ' Fineguide.AI.',
      subtitle:
        'Fineguide.AI is an AI-first CRM and business-automation platform, built in Chișinău, Moldova, for the teams that talk to customers every day.',
    },
    company: {
      eyebrow: 'What Fineguide is',
      heading: 'One platform for the work around your customers.',
      body:
        'Fineguide brings AI assistants, a CRM, a shared inbox, AI phone calls and call-quality scoring onto one platform, so a business can answer every customer, keep one record of each of them, and see how every call went. The AI takes the repetitive part; your team keeps the relationships.',
      audienceLabel: 'Who it is for',
      audience: [
        'Business owners who want every enquiry answered, including outside office hours',
        'Sales teams qualifying leads and working a pipeline',
        'Support teams sharing one inbox for chat and email',
        'Call-centre teams scoring calls and running outbound call campaigns',
      ],
    },
    platform: {
      eyebrow: 'The platform',
      heading: 'What Fineguide does.',
      items: [
        {
          name: 'AI Assistants',
          desc: 'Answer customers on your website, WhatsApp, Telegram, Instagram, Messenger, Slack and Discord, from the knowledge you give them, and write what they learn into the CRM.',
        },
        {
          name: 'CRM',
          desc: 'Contacts, companies, deals and pipelines, tasks, duplicate review and sales reports, all on one customer record.',
        },
        {
          name: 'Messages and Inbox',
          desc: 'A team inbox for every chat channel and your own email, with a routing queue, departments and handover to a person.',
        },
        {
          name: 'AI Telephony and Campaigns',
          desc: 'AI phone calls on your own numbers over SIP, inbound and outbound, plus outreach, survey and promotion call campaigns.',
        },
        {
          name: 'Voice QA',
          desc: 'Every recorded call transcribed and scored against your own rules, per department, with the quotes behind each mark.',
        },
        {
          name: 'Workspace',
          desc: 'Block-based documents for playbooks, briefs and case files linked to your contacts.',
        },
        {
          name: 'Automations',
          desc: 'n8n automations on an instance Fineguide hosts for you or on your own, plus assistant actions and webhooks.',
        },
      ],
    },
    origin: {
      eyebrow: 'Where we are',
      heading: 'Built in Chișinău, Moldova.',
      body:
        'Fineguide.AI is designed and built in Chișinău, in the Republic of Moldova. This site is available in English and Romanian.',
    },
    founder: {
      eyebrow: 'Company and founder',
      heading: 'Who owns Fineguide.AI.',
      name: 'Liviu Maftuleac',
      role: 'Founder, owner and holder',
      body:
        'Liviu Maftuleac is the sole founder, owner and holder of Fineguide.AI. He is also the sole founder, owner and holder of Eightcell Labs and of Tesseract.',
    },
    advisors: {
      eyebrow: 'Advisors',
      body:
        'Corneliu Maftuleac is an advisor. He holds no ownership in, and has no attribution to, Fineguide.AI, Eightcell Labs or Tesseract.',
    },
    contact: {
      heading: 'Get in touch.',
      body: 'For questions about the company, the platform or working together, write to us.',
      emailLabel: 'Email',
      email: 'contact@fineguide.ai',
      linkLabel: 'Go to the contact page',
    },
  },

  // --- Contact Page ---
  contactMeta: {
    title: 'Contact Fineguide | AI CRM built in Chișinău, Moldova',
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
