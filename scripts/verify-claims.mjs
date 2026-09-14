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
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
