import fs from 'node:fs';
const FE='/Users/liviumaftuleac/develop/ai-backoffice-frontend/apps/ai-workspace/src/modules';
const API='/Users/liviumaftuleac/develop/ai-backoffice-api/apps/backoffice-api/src';
const SCHEMA='/Users/liviumaftuleac/develop/ai-backoffice-api/apps/backoffice-api/prisma/schema.prisma';
const html=fs.readFileSync('dist/index.html','utf8');
let pass=0,fail=0;
const ok=(c,m)=>{ (c?pass++:fail++); console.log((c?'PASS  ':'FAIL  ')+m); };

// --- modules claimed on the page must exist as real modules in the product ---
const dt=[...html.matchAll(/<dt[^>]*>([^<]+)<\/dt>/g)].map(m=>m[1].trim());
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

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
