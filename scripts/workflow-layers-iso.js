const C=Math.cos(Math.PI/6), S=0.5;
const P=(x,y,z=0)=>[(x-y)*C,(x+y)*S-z];
const pts=[]; const T=p=>{pts.push(p);return p};

const K={ ink:'#1d1b33', mut:'#6b7194', vio:'#7c3aed', vioSoft:'#c4b5fd',
  slabT:'#2e2068', slabR:'#241a54', slabF:'#1a1240',
  plT:'#ffffff', plR:'#e7e2f4', plF:'#d7d0ec', edge:'#efecf8' };

const poly=(a,f,x='')=>`<polygon points="${a.map(p=>{T(p);return p[0].toFixed(1)+','+p[1].toFixed(1)}).join(' ')}" fill="${f}" ${x}/>`;
function solid(x0,y0,x1,y1,zb,zt,c){
  const t=(x,y)=>P(x,y,zt), b=(x,y)=>P(x,y,zb);
  return poly([t(x1,y0),t(x1,y1),b(x1,y1),b(x1,y0)],c.r)
       + poly([t(x0,y1),t(x1,y1),b(x1,y1),b(x0,y1)],c.f)
       + poly([t(x0,y0),t(x1,y0),t(x1,y1),t(x0,y1)],c.t,'stroke="'+(c.e||'none')+'" stroke-width="1.5"');
}
// open a drawing surface lying on the plane z, with its origin at world (x,y)
function surf(x,y,z){ const [sx,sy]=P(x,y,z); T([sx,sy]);
  return `<g transform="matrix(${C.toFixed(4)},${S},${(-C).toFixed(4)},${S},${sx.toFixed(1)},${sy.toFixed(1)})">`; }

const PW=660, PD=270, PT=15, DX=125, DZ=215;
const LAYER=[
 {n:'Assistants',  l:'Answers on web, WhatsApp, Telegram,|email and voice. Nobody is on.',
  c:`<rect x="104" y="26" width="250" height="46" rx="17" fill="${K.vio}"/>
     <rect x="128" y="42" width="150" height="8" rx="4" fill="#ffffff" opacity=".5"/>
     <rect x="300" y="92" width="290" height="46" rx="17" fill="#edeaf7"/>
     <rect x="324" y="108" width="190" height="8" rx="4" fill="#b9b3cc"/>
     <circle cx="116" cy="170" r="7" fill="${K.vioSoft}"/><circle cx="140" cy="170" r="7" fill="${K.vioSoft}"/><circle cx="164" cy="170" r="7" fill="${K.vioSoft}"/>`},
 {n:'Inbox',       l:'A person takes over, with the whole|history and a reply already drafted.',
  c:[0,1,2].map(i=>`<circle cx="128" cy="${42+i*54}" r="18" fill="#ddd7f0"/>
     <rect x="166" y="${30+i*54}" width="${220-i*36}" height="13" rx="6" fill="#3a3560"/>
     <rect x="166" y="${52+i*54}" width="${330-i*52}" height="10" rx="5" fill="#c3bed6"/>`).join('')},
 {n:'Voice & Campaigns', l:'Callbacks, and outbound runs that|dial through a list on their own.',
  c:Array.from({length:32},(_,i)=>{const h=18+Math.abs(Math.sin(i*0.9))*74;
     return `<rect x="${110+i*17}" y="${100-h/2}" width="8" height="${h}" rx="4.5" fill="${i<19?K.vio:'#d9d3ee'}"/>`}).join('')},
 {n:'Voice QA',    l:'Every call transcribed, scored and|checked for compliance. No listening.',
  c:`<text x="158" y="98" font-size="66" font-weight="700" fill="${K.vio}">94</text>
     <text x="160" y="132" font-size="18" fill="#9a94b4" letter-spacing="2">SCORE</text>`
     +[0,1,2,3].map(i=>`<rect x="300" y="${28+i*36}" width="320" height="12" rx="6" fill="#e6e2f2"/>
     <rect x="300" y="${28+i*36}" width="${[305,262,301,190][i]}" height="12" rx="6" fill="${K.vio}" opacity="${.9-i*.14}"/>`).join('')},
 {n:'Automations', l:'Reads the finished conversation and|updates the record. No one touches it.',
  c:[0,1,2].map(i=>`<path d="M116 ${44+i*52} l12 13 l24 -27" stroke="${K.vio}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
     <rect x="176" y="${34+i*52}" width="${350-i*62}" height="13" rx="6" fill="#4a4470"/>`).join('')},
];

const SX0=-130, SY0=-140, SX1=4*DX+PW+140, SY1=PD+300;
const body=[]; const anchors=[];

// the record: one solid foundation
body.push(solid(SX0,SY0,SX1,SY1,-78,0,{t:K.slabT,r:K.slabR,f:K.slabF}));
body.push(surf(SX0,SY0,0)
  + `<line x1="392" y1="490" x2="1028" y2="490" stroke="#6d5cb8" stroke-width="3.5"/>`
  + `<text x="132" y="452" font-size="26" font-weight="700" fill="#b9acea" letter-spacing="2">LEAD #4218</text>`
  + [0,1,2,3].map(i=>
    `<rect x="132" y="${548+i*38}" width="${[126,96,150,112][i]}" height="13" rx="6" fill="#7b6cc4"/>
     <rect x="310" y="${548+i*38}" width="${[236,300,196,264][i]}" height="13" rx="6" fill="#d3caf2" opacity=".5"/>`).join('')
  + [0,1,2].map(i=>
    `<rect x="${770+i*152}" y="548" width="120" height="146" rx="10" fill="#3d2f7e" stroke="#5a49a6" stroke-width="2"/>
     <rect x="${793+i*152}" y="578" width="74" height="9" rx="4" fill="#8878cc"/>
     <rect x="${793+i*152}" y="598" width="58" height="9" rx="4" fill="#6d5cb8"/>`).join('')
  + '</g>');
anchors.push({p:P(SX1,SY0,0), n:'ONE CUSTOMER RECORD',
  l:'Intent, stage, next action, and the documents|in Workspace. The same object in all of them.', big:true});

// the layers, drawn far to near
LAYER.forEach((L,i)=>{
  const x=i*DX, z=150+(4-i)*DZ;
  body.push(solid(x,0,x+PW,PD,z,z+PT,{t:K.plT,r:K.plR,f:K.plF,e:K.edge}));
  body.push(surf(x,0,z+PT)+L.c+'</g>');
  anchors.push({p:P(x+PW,0,z+PT), n:L.n, l:L.l});
});

// one thread per layer, dropping straight down through everything into the record
LAYER.forEach((L,i)=>{
  const x=i*DX+330, z=150+(4-i)*DZ;
  const a=P(x,250,z+PT), b=P(x,350,0); T(a); T(b);
  body.push(`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}"
    stroke="${K.vio}" stroke-width="2.6" stroke-dasharray="7 8" opacity=".62"/>
    <circle cx="${b[0].toFixed(1)}" cy="${b[1].toFixed(1)}" r="8" fill="${K.vio}" stroke="#ffffff" stroke-width="2"/>`);
});

const LX = Math.max(...anchors.map(a=>a.p[0])) + 96;
const lead = anchors.map(a=>
  `<line x1="${a.p[0].toFixed(1)}" y1="${a.p[1].toFixed(1)}" x2="${(LX-14).toFixed(1)}" y2="${a.p[1].toFixed(1)}"
     stroke="#cfc8e4" stroke-width="1.6"/>
   <circle cx="${a.p[0].toFixed(1)}" cy="${a.p[1].toFixed(1)}" r="4.5" fill="#cfc8e4"/>
   <text class="${a.big?'ln big':'ln'}" x="${LX}" y="${(a.p[1]-8).toFixed(1)}">${a.n}</text>`
  + a.l.split('|').map((t,j)=>`<text class="ld" x="${LX}" y="${(a.p[1]+20+j*25).toFixed(1)}">${t}</text>`).join('')
).join('\n');

const xs=pts.map(p=>p[0]), ys=pts.map(p=>p[1]);
const pad=46, HDR=130, LBLW=470;
const x0=Math.min(...xs)-pad, x1=LX+LBLW, y0=Math.min(...ys)-pad-HDR, y1=Math.max(...ys)+pad;
const W=x1-x0, H=y1-y0;

process.stdout.write(`<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0}html,body{background:#fbfafd}
body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
svg{display:block}
.h1{font-size:40px;font-weight:680;fill:${K.ink};letter-spacing:-.5px}
.h2{font-size:21px;fill:${K.mut}}
.ln{font-size:30px;font-weight:650;fill:${K.ink}}
.big{font-size:34px;fill:#30226F;letter-spacing:.4px}
.ld{font-size:19px;fill:${K.mut}}
</style></head><body>
<svg width="${W.toFixed(0)}" height="${H.toFixed(0)}" viewBox="${x0.toFixed(1)} ${y0.toFixed(1)} ${W.toFixed(1)} ${H.toFixed(1)}" xmlns="http://www.w3.org/2000/svg">
<text class="h1" x="${(x0+18).toFixed(0)}" y="${(y0+58).toFixed(0)}">Five layers. One record underneath.</text>
<text class="h2" x="${(x0+18).toFixed(0)}" y="${(y0+94).toFixed(0)}">A conversation enters at the top and falls through every layer into the same customer record.</text>
${body.join('\n')}
${lead}
</svg></body></html>`);
