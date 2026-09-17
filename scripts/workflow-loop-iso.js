const C = Math.cos(Math.PI/6), S = 0.5;           // 30deg isometric
const P = (x,y,z=0) => [ (x-y)*C, (x+y)*S - z ];  // world -> screen

const COL = {
  baseTop:'#30226F', baseR:'#261a56', baseF:'#1d1442',
  blkTop:'#ffffff',  blkR:'#e9e5f5',  blkF:'#dcd6ee',
  ink:'#1d1b33', mut:'#6b7194', vio:'#7c3aed',
  onBase:'#b9acea', arrowBase:'#7d6cc9',
};

const pts = [];
const track = p => { pts.push(p); return p; };
const poly = (arr, fill, extra='') =>
  `<polygon points="${arr.map(p=>{track(p);return p[0].toFixed(1)+','+p[1].toFixed(1)}).join(' ')}" fill="${fill}" ${extra}/>`;

// a solid block: top face + the two faces that face the viewer
function block(x0,y0,x1,y1,zb,zt,c){
  const t=(x,y)=>P(x,y,zt), b=(x,y)=>P(x,y,zb);
  return [
    poly([t(x1,y0),t(x1,y1),b(x1,y1),b(x1,y0)], c.r),   // right face (+x)
    poly([t(x0,y1),t(x1,y1),b(x1,y1),b(x0,y1)], c.f),   // front face (+y)
    poly([t(x0,y0),t(x1,y0),t(x1,y1),t(x0,y1)], c.t),   // top face
  ].join('\n');
}
// text lying flat on a horizontal plane at height z, origin at world (x,y)
function isoText(x,y,z,cls,lines,lh=26){
  const [sx,sy]=P(x,y,z); track([sx,sy]);
  const m=`matrix(${C.toFixed(4)},${S},${(-C).toFixed(4)},${S},${sx.toFixed(1)},${sy.toFixed(1)})`;
  return `<g transform="${m}">`+lines.map((t,i)=>
    `<text class="${cls}" x="0" y="${i*lh}">${t}</text>`).join('')+`</g>`;
}
// a path drawn on the base surface
function isoPath(coords,z,stroke,extra=''){
  const d=coords.map((c,i)=>{const p=P(c[0],c[1],z);track(p);
    return (i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}).join(' ');
  return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="2.4" ${extra}/>`;
}

const BX0=-70, BY0=-170, BX1=1754, BY1=770, BH=30, KH=56;              // base w/d/thickness, block height
const row1=[
  ['01  ARRIVES','Assistants',      ['Answers on every channel.','Captures the lead.']],
  ['02  HANDS OFF','Inbox',         ['A person takes over with','the full history.']],
  ['03  CALLS','Voice &amp; Campaigns', ['Callbacks, and outbound','runs that dial themselves.']],
  ['04  SCORED','Voice QA',         ['Every call scored and','checked for compliance.']],
  ['05  LEARNS','QA &amp; Analytics',   ['Shows what to fix next.']],
];
const CW=300, CD=250, GAP=36, X0=40, Y1=40;
const svg=[];

// base slab
svg.push(block(BX0,BY0,BX1,BY1,-BH,0,{t:COL.baseTop,r:COL.baseR,f:COL.baseF}));
svg.push(isoText(40,660,0,'bt',['ONE CUSTOMER RECORD']));
svg.push(isoText(40,706,0,'bd',['Lead #4218  ·  intent  ·  stage  ·  next action  ·  the same object in every module']));

// flow arrows between the journey blocks, drawn on the slab
for(let i=0;i<4;i++){
  const xs=X0+(i+1)*CW+i*GAP+8, xe=xs+GAP-16, ym=Y1+CD/2;
  svg.push(isoPath([[xs,ym],[xe,ym]],0,COL.arrowBase,'marker-end="url(#ab)"'));
}
// the feedback loop, around the front of the slab
svg.push(isoPath([[X0+4*(CW+GAP)+CW/2, Y1-16],[X0+4*(CW+GAP)+CW/2, -46],[X0+CW/2, -46],[X0+CW/2, Y1-14]],
  0, COL.arrowBase, 'marker-end="url(#ab)" stroke-dasharray="9 7"'));
svg.push(isoText(520,-120,0,'bl',['what it learns tunes the assistant']));

// journey blocks
row1.forEach((r,i)=>{
  const x=X0+i*(CW+GAP);
  svg.push(block(x,Y1,x+CW,Y1+CD,0,KH,{t:COL.blkTop,r:COL.blkR,f:COL.blkF}));
  svg.push(isoText(x+24,Y1+42,KH,'eb',[r[0]]));
  svg.push(isoText(x+24,Y1+86,KH,'ct',[r[1]]));
  svg.push(isoText(x+24,Y1+132,KH,'cb',r[2],26));
});
// blocks that sit on the record
[[X0+(CW+GAP),'Workspace',['Documents live on the','customer, not a mailbox.']],
 [X0+3*(CW+GAP),'Automations',['Updates the record with','no one touching it.']]].forEach(([x,t,b])=>{
  svg.push(block(x,400,x+CW,400+230,0,34,{t:COL.blkTop,r:COL.blkR,f:COL.blkF}));
  svg.push(isoText(x+24,400+52,34,'ct',[t]));
  svg.push(isoText(x+24,400+96,34,'cb',b,26));
});

const xs=pts.map(p=>p[0]), ys=pts.map(p=>p[1]);
const pad=40, HDR=118;
const minX=Math.min(...xs)-pad, maxX=Math.max(...xs)+pad;
const minY=Math.min(...ys)-pad, maxY=Math.max(...ys)+pad;
const W=maxX-minX, H=maxY-minY+HDR;

process.stdout.write(`<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0}html,body{background:#fbfafd}
body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
svg{display:block}
.h1{font-size:30px;font-weight:680;fill:#1d1b33;letter-spacing:-.4px}
.h2{font-size:16px;fill:#6b7194}
.eb{font-size:16px;font-weight:700;fill:${COL.vio};letter-spacing:1.4px}
.ct{font-size:29px;font-weight:650;fill:${COL.ink}}
.cb{font-size:19px;fill:${COL.mut}}
.bt{font-size:30px;font-weight:700;fill:#fff;letter-spacing:2px}
.bd{font-size:20px;fill:${COL.onBase}}
.bl{font-size:18px;fill:${COL.onBase};font-weight:600}
</style></head><body>
<svg width="${W.toFixed(0)}" height="${H.toFixed(0)}" viewBox="${minX.toFixed(1)} ${(minY-HDR).toFixed(1)} ${W.toFixed(1)} ${H.toFixed(1)}" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="ab" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
<path d="M0 1 L7 4.5 L0 8 z" fill="${COL.arrowBase}"/></marker></defs>
<text class="h1" x="${(minX+14).toFixed(0)}" y="${(minY-HDR+52).toFixed(0)}">How one conversation moves through Fineguide</text>
<text class="h2" x="${(minX+14).toFixed(0)}" y="${(minY-HDR+82).toFixed(0)}">Every module stands on the same customer record. That is the platform.</text>
${svg.join('\n')}
</svg></body></html>`);
