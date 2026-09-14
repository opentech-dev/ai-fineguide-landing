import fs from 'node:fs';
const FE='/Users/liviumaftuleac/develop/ai-backoffice-frontend/apps/ai-workspace/src/modules';
const API='/Users/liviumaftuleac/develop/ai-backoffice-api/apps/backoffice-api/src';
const SCHEMA='/Users/liviumaftuleac/develop/ai-backoffice-api/apps/backoffice-api/prisma/schema.prisma';
const html=fs.readFileSync('dist/index.html','utf8');
let pass=0,fail=0;
const ok=(c,m)=>{ (c?pass++:fail++); console.log((c?'PASS  ':'FAIL  ')+m); };

// --- modules claimed on the page must exist as real modules in the product ---
// Scope to the list that is actually the product-module list. Scraping every
// <dt> on the page broke the moment a second <dl> appeared (EditorialRows), and
// reported the three campaign types as unknown modules.
const modulesDl=html.match(/<dl[^>]*\bdata-product-modules\b[\s\S]*?<\/dl>/);
if(!modulesDl){ console.log('FAIL  no <dl data-product-modules> on the homepage'); process.exit(1); }
const dt=[...modulesDl[0].matchAll(/<dt[^>]*>([^<]+)<\/dt>/g)].map(m=>m[1].trim());
const MAP={Assistants:'agents',CRM:'crm',Voice:'telephony',Messages:'messages',
  Inbox:'inbox',Workspace:'workspace',Automations:'n8n','QA &amp; Analytics':'voiceqa'};
console.log('modules on page:', dt.join(', '));
for(const name of dt){
  const dir=MAP[name];
  if(!dir){ ok(false,`${name} -> no known module mapping`); continue; }
  const p=`${FE}/${dir}`;
  const exists=fs.existsSync(p);
  const lines=exists? fs.readdirSync(p,{recursive:true}).filter(f=>/\.tsx?$/.test(f))
      .reduce((n,f)=>{try{return n+fs.readFileSync(`${p}/${f}`,'utf8').split('\n').length}catch{return n}},0):0;
  ok(exists && lines>500, `${name} -> modules/${dir}/ exists, ${lines} lines`);
}
// --- a module must NOT be claimed if it is routed but unbuilt ---
ok(!fs.existsSync(`${FE}/campaigns`) && !dt.includes('Campaigns'),
   'Campaigns routed-but-unbuilt and correctly NOT claimed');

// --- specific factual claims in the new copy ---
const inboxFiles=fs.readdirSync(`${FE}/inbox`,{recursive:true}).filter(f=>/\.tsx?$/.test(f));
const inboxSrc=inboxFiles.map(f=>{try{return fs.readFileSync(`${FE}/inbox/${f}`,'utf8')}catch{return ''}}).join('');
ok(/imap/i.test(inboxSrc), 'Inbox claim "IMAP" is supported by inbox module source');
ok(/smtp/i.test(inboxSrc), 'Inbox claim "SMTP" is supported by inbox module source');
ok(/mailbox/i.test(inboxSrc),'Inbox claim "mailboxes" is supported');
ok(/domain/i.test(inboxSrc), 'Inbox claim "domains" is supported');
ok(fs.existsSync(`${FE}/inbox/RulesPage.tsx`), 'Inbox claim "routing rules" -> RulesPage.tsx exists');
ok(fs.existsSync(`${FE}/messages/reports/ReportsPage.tsx`),'Messages claim "its own reporting" -> ReportsPage.tsx exists');
ok(fs.existsSync(`${FE}/workflows/WorkflowBuilderPage.tsx`),'Automations claim "build workflows visually" -> WorkflowBuilderPage.tsx exists');
ok(fs.existsSync(`${FE}/n8n`), 'Automations claim "connect n8n" -> n8n module exists');

// --- integrations on the page must be real ---
const schema=fs.readFileSync(SCHEMA,'utf8');
const enumBlock=schema.slice(schema.indexOf('enum BotIntegrationType'));
const enumVals=enumBlock.slice(0,enumBlock.indexOf('}')).match(/^\s{2}([A-Z_]+)$/gm).map(s=>s.trim());
const items=[...html.matchAll(/<li class="flex items-center[^"]*"[^>]*>[\s\S]*?<\/li>/g)].map(b=>{
  const s=b[0].match(/<span[^>]*>([^<]+)<\/span>/); const a=b[0].match(/alt="([^"]+)"/);
  return s?s[1].trim():(a?a[1]:'?');});
console.log('integrations on page:', items.join(', '));
const ALIAS={WhatsApp:'WHATSAPP',Telegram:'TELEGRAM',Instagram:'INSTAGRAM',Messenger:'FACEBOOK',
  Slack:'SLACK',Discord:'DISCORD',AmoCRM:'AMOCRM',Kommo:'KOMMO',Notion:'NOTION'};
const CONFIG={Zendesk:'config/zendesk.config.ts',HelpScout:'config/helpscout.config.ts'};
for(const it of items){
  if(ALIAS[it]) ok(enumVals.includes(ALIAS[it]), `${it} -> BotIntegrationType.${ALIAS[it]} in schema`);
  else if(CONFIG[it]) ok(fs.existsSync(`${API}/${CONFIG[it]}`), `${it} -> ${CONFIG[it]} exists in API`);
  else if(it==='n8n') ok(fs.existsSync(`${FE}/n8n`), 'n8n -> n8n module exists');
  else ok(false, `${it} -> UNVERIFIED, no source backing`);
}
// --- JIVO is real but deliberately unlisted ---
ok(enumVals.includes('JIVO') && !items.includes('JivoChat'),
   'JivoChat real in schema and deliberately unlisted (no legitimate mark)');

// --- no page may claim a certification we do not hold ---
// The enterprise page offers SUPPORT for HIPAA / ISO 27001 assessments. That is
// not the same as holding either certification, and the difference is the kind
// a regulated buyer acts on. Guard every built page, not just the homepage.
const CERT=/(iso ?27001|soc ?2|hipaa|pci[- ]?dss|gdpr)[^.<]{0,40}\b(certified|compliant|accredited)\b|\bwe are (certified|compliant)\b|\bfully compliant\b/i;
const pages=fs.readdirSync('dist',{recursive:true}).filter(f=>f.endsWith('.html'));
const offenders=pages.filter(p=>CERT.test(fs.readFileSync(`dist/${p}`,'utf8')));
ok(offenders.length===0,
   `no certification claim on any of ${pages.length} pages${offenders.length?' -> '+offenders.join(', '):''}`);

// --- the security strip must exist in both locales, and must link onward ---
for(const [loc,f] of [['en','dist/index.html'],['ro','dist/ro/index.html']]){
  const h=fs.readFileSync(f,'utf8');
  const has=/Your data, on your terms|Datele tale, în condițiile tale/.test(h);
  const links=new RegExp(`href="${loc==='ro'?'/ro/enterprise':'/enterprise'}"`).test(h);
  ok(has && links, `${loc}: security strip present and links to enterprise`);
}
// --- workflow runs must not be advertised as consuming credits ---------------
// .claude/rules/billing-usage.md in the API repo: "Nothing calls the endpoints
// [...] A workflow run therefore consumes no credits, whatever it does. So copy
// or comments that say activating a workflow starts charging are wrong."
// Rather than trust that note, re-derive it: the credit endpoints exist, so the
// question is whether anything actually posts to them. When a caller appears,
// this check stops demanding silence and the page may price workflow steps.
// A caller is a file that REFERENCES the route without declaring it. The
// controller's own `@Post('preflight-credits')` is the declaration, so skip the
// file that carries the @Controller decorator for these routes — counting it
// silently disarms this whole check.
const scan = (root) => fs.existsSync(root)
  ? fs.readdirSync(root, { recursive: true })
      .filter(f => /\.(ts|js)$/.test(f) && !/\.spec\./.test(f))
      .map(f => { try { return { f, src: fs.readFileSync(`${root}/${f}`, 'utf8') }; } catch { return null; } })
      .filter(Boolean)
  : [];
const dispatcher = '/Users/liviumaftuleac/develop/ai-backoffice-api/apps/dispatcher/src';
const candidates = [...scan(API), ...scan(dispatcher)]
  .filter(({ src }) => /(preflight|consume)-credits/.test(src))
  .filter(({ src }) => !/@Controller\(/.test(src));   // drop the declaring controller
const callsWorkflowCredits = candidates.length > 0;

const creditClaim = /workflow[^.<]{0,40}?(\d+\s*credit|credit[^.<]{0,20}per step)|(\d+\s*credit)[^.<]{0,30}workflow/i;
const wfOffenders = [];
for (const [label, file] of [['en', 'dist/pricing/index.html'], ['ro', 'dist/ro/pricing/index.html'],
                             ['en-home', 'dist/index.html'], ['llms.txt', 'dist/llms.txt']]) {
  if (!fs.existsSync(file)) continue;
  if (creditClaim.test(fs.readFileSync(file, 'utf8'))) wfOffenders.push(label);
}
ok(callsWorkflowCredits ? true : wfOffenders.length === 0,
   callsWorkflowCredits
     ? 'workflow credit endpoints now have a caller — pricing workflow steps is allowed'
     : `workflow runs consume no credits (no caller for the credit endpoints), and no surface claims they do${wfOffenders.length ? ' -> ' + wfOffenders.join(', ') : ''}`);

// --- the workflow builder must only be sold on steps that actually run --------
// engine/registry.ts holds two lists: HANDLERS (steps with a live runtime) and
// PLANNED_STEP_TYPES (steps the builder can author but the engine cannot run —
// it pauses the run for human review instead). A step appearing in the builder
// is therefore NOT evidence it works, and marketing one would promise something
// that silently stops mid-run.
//
// Read both lists from the registry rather than hardcoding them, so when a
// planned step gains a handler it drops out of PLANNED_STEP_TYPES and this check
// stops objecting on its own.
const registryPath = `${API}/modules/workflow/engine/registry.ts`;
if (fs.existsSync(registryPath)) {
  const reg = fs.readFileSync(registryPath, 'utf8');
  const plannedBlock = reg.match(/PLANNED_STEP_TYPES[^=]*=\s*\{([\s\S]*?)\}/);
  const planned = plannedBlock
    ? [...plannedBlock[1].matchAll(/^\s*([a-z_]+)\s*:/gm)].map(m => m[1])
    : [];

  // Phrases that would mean we are selling that step. Deliberately scoped to the
  // automations copy in src/i18n, not the built HTML: "translate" also appears in
  // Tailwind's translate-x-* classes, and n8n genuinely does do webhooks, so a
  // whole-page grep produces false positives on both.
  const SELLS = {
    classify:   /\bclassif(y|ies|ication)\b/i,
    summarize:  /\bsummaris|\bsummariz/i,
    translate:  /\btranslat(e|es|ion)\b/i,
    reply:      /\b(auto[- ]?repl|sends? a repl|replies automatically)/i,
    notify:     /\bnotif(y|ies) the team\b/i,
    send_email: /\bsends? (an )?email\b/i,
    webhook:    null,   // n8n webhooks are real and separately implemented
  };

  const offenders = [];
  for (const locale of ['en', 'ro']) {
    const p = `src/i18n/${locale}.ts`;
    if (!fs.existsSync(p)) continue;
    const src = fs.readFileSync(p, 'utf8');
    // Both the homepage section (`automations:`) and the dedicated page
    // (`automationsPage:`). Scanning only the first left the whole /automations
    // page — the one that actually enumerates steps — unguarded.
    const blocks = [
      ['section', src.match(/\n  automations:\s*\{([\s\S]*?)\n  \},/)],
      ['page', src.match(/\n  automationsPage:\s*\{([\s\S]*?)\n  \},/)],
    ];
    for (const [where, block] of blocks) {
      if (!block) continue;
      for (const step of planned) {
        const rx = SELLS[step];
        if (rx && rx.test(block[1])) offenders.push(`${locale}/${where}:${step}`);
      }
    }
  }
  ok(offenders.length === 0,
     `automations copy sells only runnable steps (${planned.length} planned: ${planned.join(', ')})${offenders.length ? ' -> SELLS PLANNED: ' + offenders.join(', ') : ''}`);
}

// --- campaigns: the three types on the page ARE the CampaignType enum --------
// The section renders one card per campaign type. That is a structural claim,
// not a chosen number: if a fourth type ships the page silently understates the
// product, and if one is removed the page advertises something that no longer
// exists. Both directions are checked against the schema.
const schemaPath = `${API}/../prisma/schema.prisma`;
if (fs.existsSync(schemaPath)) {
  const schema = fs.readFileSync(schemaPath, 'utf8');
  const block = schema.match(/enum CampaignType\s*\{([\s\S]*?)\}/);
  const enumTypes = block
    ? block[1].split('\n').map(l => l.replace(/\/\/.*/, '').trim()).filter(l => /^[A-Z_]+$/.test(l))
    : [];

  // enum value -> the English card name that represents it
  const CARD = { OUTREACH: 'Outreach', SURVEY: 'Survey', PROMOTION: 'Promotion' };

  // The enumeration lives on /campaigns, not the homepage — the homepage block
  // is a teaser now. Check where the claim actually is, and in both locales,
  // since a type dropped from only the Romanian page is the same defect.
  const missing = [];
  for (const [loc, f] of [['en', 'dist/campaigns/index.html'], ['ro', 'dist/ro/campaigns/index.html']]) {
    if (!fs.existsSync(f)) { missing.push(`${loc}:PAGE-MISSING`); continue; }
    const page = fs.readFileSync(f, 'utf8');
    for (const e of enumTypes) {
      const name = CARD[e];
      // Romanian renames Survey/Promotion, so fall back to position: every type
      // must produce a <dt>, and the count must match the enum.
      if (!name) { missing.push(`${loc}:${e}`); continue; }
      if (loc === 'en' && !page.includes(`>${name}<`)) missing.push(`${loc}:${e}`);
    }
    const dtCount = (page.match(/<dt\b/g) || []).length;
    if (dtCount < enumTypes.length) missing.push(`${loc}:only ${dtCount} rows for ${enumTypes.length} types`);
  }
  ok(enumTypes.length > 0 && missing.length === 0,
     `/campaigns covers every CampaignType (${enumTypes.join(', ')})${missing.length ? ' -> ' + missing.join(', ') : ''}`);

  // Every telephony provider named in the copy must exist in TelephonyProvider.
  // Parse the names OUT of the copy rather than checking a fixed list against the
  // enum — a hardcoded map only catches the enum changing under names already
  // known to this script, and silently passes a brand new invented provider,
  // which is the failure that actually matters.
  const provBlock = schema.match(/enum TelephonyProvider\s*\{([\s\S]*?)\}/);
  const providers = provBlock
    ? provBlock[1].split('\n').map(l => l.replace(/\/\/.*/, '').trim()).filter(l => /^[A-Z_0-9]+$/.test(l))
    : [];
  // enum values are not display names, so normalise both sides
  const norm = (s) => s.toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/^3CX$/, 'THREECX');
  const known = new Set(providers.map(norm));

  const bogus = [];
  for (const locale of ['en', 'ro']) {
    const p = `src/i18n/${locale}.ts`;
    if (!fs.existsSync(p)) continue;
    const camp = fs.readFileSync(p, 'utf8').match(/campaigns:\s*\{([\s\S]*?)\n  \},/);
    if (!camp) continue;
    // the provider line: "Twilio, Asterisk, FreePBX, 3CX, or any generic SIP trunk"
    const line = camp[1].split('\n').find(l => /SIP/.test(l));
    if (!line) continue;
    const names = line
      .replace(/^\s*'|',?\s*$/g, '')
      .split(/,| or | sau /)
      .map(x => x.trim())
      .filter(x => x && !/^(any|orice|generic|SIP)/i.test(x) && !/trunk/i.test(x));
    for (const n of names) if (!known.has(norm(n))) bogus.push(`${locale}:${n}`);
  }
  ok(bogus.length === 0,
     `every telephony provider named in the copy exists in TelephonyProvider (${providers.join(', ')})${bogus.length ? ' -> NOT IN ENUM: ' + bogus.join(', ') : ''}`);
}

// --- email AI safety rails: the page sells the brakes, so the brakes must exist
// The Inbox column makes three promises that are the whole reason a cautious
// buyer would let AI near their email: it is off until you turn it on, replies
// pause so a human can get there first, and a thread cannot loop forever.
//
// Each is a schema DEFAULT, which is exactly the kind of thing that gets flipped
// during a later feature push without anyone thinking about the marketing site.
// If aiMode ever defaults to anything but OFF, "a new inbox is human-only"
// silently becomes false. Check the claim and the guarantee together: the check
// only fires when the page actually makes the claim.
{
  const schema = fs.existsSync(schemaPath) ? fs.readFileSync(schemaPath, 'utf8') : '';
  const rails = [
    { claim: /human-only|doar pentru oameni/i,
      field: /aiMode\s+\w+\s+@default\(OFF\)/,
      what: 'AI off by default (aiMode @default(OFF))' },
    { claim: /wait a moment before sending|așteaptă puțin înainte/i,
      field: /aiReplyDelaySeconds\s+Int\s+@default\(\d+\)/,
      what: 'a reply delay (aiReplyDelaySeconds)' },
    { claim: /hard cap on AI replies|limită fermă de răspunsuri/i,
      field: /aiMaxRepliesPerThread\s+Int\s+@default\(\d+\)/,
      what: 'a per-thread reply ceiling (aiMaxRepliesPerThread)' },
  ];

  const pages = ['dist/index.html', 'dist/ro/index.html']
    .filter(p => fs.existsSync(p))
    .map(p => fs.readFileSync(p, 'utf8'))
    .join('\n');

  if (schema && pages) {
    for (const r of rails) {
      if (!r.claim.test(pages)) continue;   // page does not claim it -> nothing to guarantee
      ok(r.field.test(schema),
         `page promises ${r.what} and EmailInbox still provides it`);
    }
    // The "connect your own mailbox" claim rests on a CONNECTED inbox kind.
    if (/IMAP/i.test(pages)) {
      ok(/enum EmailInboxKind\s*\{[^}]*CONNECTED/s.test(schema),
         'page offers connecting your own mailbox and EmailInboxKind still has CONNECTED');
    }
  }
}

// --- the CRM page counts its own surfaces in the heading ---------------------
// "Eight surfaces, one customer record." sits directly above the list. Add a
// ninth item and the heading contradicts the thing beneath it — visible to any
// reader, invisible to every other check here.
//
// Separately: crm/tickets is a 13-line <Navigate> stub ("Tickets became the
// Inbox, which is now its own top-level module"), so naming Tickets as a CRM
// surface points a buyer at a redirect. Guard it against the stub rather than
// against a word list, so that if tickets is ever rebuilt as a real CRM surface
// this stops objecting on its own.
{
  const WORDS = { six:6, seven:7, eight:8, nine:9, ten:10,
                  șase:6, șapte:7, opt:8, nouă:9, zece:10 };
  const ticketsDir = `${FE}/crm/tickets`;
  const ticketsIsStub = fs.existsSync(ticketsDir) && fs.readdirSync(ticketsDir)
    .every(f => /Redirect/.test(f) || /^\./.test(f));

  for (const locale of ['en', 'ro']) {
    const p = `src/i18n/${locale}.ts`;
    if (!fs.existsSync(p)) continue;
    const src = fs.readFileSync(p, 'utf8');
    // the CRM "surfaces" block: heading + its items array
    const block = src.match(/eyebrow: '(?:Inside the CRM|În interiorul CRM[^']*)'[\s\S]*?\n      \],/);
    if (!block) { ok(false, `${locale}: could not find the CRM surfaces block`); continue; }
    const b = block[0];

    const heading = b.match(/heading: '([^']*)'/)?.[1] ?? '';
    const spelled = Object.keys(WORDS).find(w => new RegExp(`\\b${w}\\b`, 'i').test(heading));
    const items = [...b.matchAll(/\n          name: '([^']+)'/g)].map(m => m[1]);

    if (spelled) {
      ok(WORDS[spelled] === items.length,
         `${locale}: CRM heading says "${spelled}" and the list has ${items.length} surfaces`);
    }
    if (ticketsIsStub) {
      const named = items.find(n => /^ticket/i.test(n));
      ok(!named,
         `${locale}: no CRM surface named Tickets while crm/tickets is only a redirect${named ? ` -> FOUND "${named}"` : ''}`);
    }
  }
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
