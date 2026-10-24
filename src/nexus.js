const PRODUCTS=[
  {slug:'toolneuron',name:'ToolNeuron / Covert Edge',scope:'ANDROID + EDGE',symbol:'[::]',summary:'The Android and edge-device app and workspace.',detail:'The portable product surface in the Covert ecosystem. Nexus is prepared to serve its future Discover / Apps experience through the same logical catalog used by the desktop and engine surfaces.',audience:'Builders and local-AI users working from Android and edge devices.',ecosystem:'Discovers product-compatible apps, tools, workflows, model profiles, and capability packs.'},
  {slug:'covert-desktop',name:'Covert Desktop',scope:'DESKTOP PLATFORM',symbol:'[>_]',summary:'The desktop platform and developer-workstation direction.',detail:'The desktop product in the Covert ecosystem. It has its own product identity, release boundary, and workstation scope. Nexus provides a shared place to discover future apps, plugins, workflows, themes, and extensions.',audience:'Developers and operators working in a desktop environment.',ecosystem:'Uses the shared catalog for desktop-compatible packages and developer capabilities.'},
  {slug:'covert-engine',name:'Covert Engine',scope:'RUNTIME INFRASTRUCTURE',symbol:'{01}',summary:'Runtime and local-model infrastructure.',detail:'The runtime engine surface in the Covert ecosystem. Nexus holds Engine adapters, extensions, model profiles, compatibility evidence, and releases without treating the runtime as the entire desktop product.',audience:'Runtime developers, adapter authors, and local-AI infrastructure builders.',ecosystem:'Shares package identity and evidence fields with the edge and desktop ecosystem.'}
];

async function catalog(){
  const r=await fetch('/nexus/data/catalog.json',{cache:'no-store'});
  if(!r.ok)throw new Error('Catalog unavailable');
  return r.json();
}
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n}
function statusLabel(v){return String(v||'NOT_YET_PUBLISHED').replaceAll('_',' ')}
function packageHref(p){return '/nexus/package/?slug='+encodeURIComponent(p.slug)}

const productGrid=document.querySelector('[data-product-grid]');
if(productGrid){
  for(const p of PRODUCTS){
    const a=el('a','product-node');a.href='/nexus/product/?id='+encodeURIComponent(p.slug);
    const top=el('div','node-top');top.append(el('span','',p.scope),el('span','node-symbol',p.symbol));
    a.append(top,el('h3','',p.name),el('p','',p.summary),el('div','node-link','Inspect product surface ↗'));productGrid.append(a)
  }
}

const catalogList=document.querySelector('[data-catalog-list]');
if(catalogList){
  const search=document.querySelector('[data-catalog-search]');
  const type=document.querySelector('[data-type-filter]');
  const status=document.querySelector('[data-status-filter]');
  const count=document.querySelector('[data-result-count]');
  let packages=[];
  function draw(){
    const q=(search?.value||'').trim().toLowerCase(),tv=type?.value||'',sv=status?.value||'';
    const filtered=packages.filter(p=>(!q||[p.name,p.summary,p.description,p.package_type,...(p.target_products||[])].join(' ').toLowerCase().includes(q))&&(!tv||p.package_type===tv)&&(!sv||p.status===sv));
    catalogList.replaceChildren();
    if(count)count.textContent=filtered.length+' / '+packages.length+' records';
    for(const p of filtered){
      const row=el('article','package-row');
      const main=el('div');const a=el('a','',p.name);a.href=packageHref(p);main.append(a,el('p','',p.summary));
      row.append(main,el('span','package-meta',p.package_type.replaceAll('_',' ')),el('span','package-meta',(p.target_products||[]).join(' / ')),el('span','status-tag',statusLabel(p.status)));
      catalogList.append(row)
    }
    if(!filtered.length)catalogList.append(el('div','empty-state','No catalog records match this filter.'))
  }
  catalog().then(data=>{
    packages=data.packages||[];
    const types=[...new Set(packages.map(p=>p.package_type))].sort();
    for(const v of types){const o=el('option','',v.replaceAll('_',' '));o.value=v;type?.append(o)}
    const statuses=[...new Set(packages.map(p=>p.status))].sort();
    for(const v of statuses){const o=el('option','',statusLabel(v));o.value=v;status?.append(o)}
    draw();
    [search,type,status].forEach(n=>n?.addEventListener(n===search?'input':'change',draw));
  }).catch(e=>catalogList.append(el('div','empty-state',e.message)));
}

const packageRoot=document.querySelector('[data-package-detail]');
if(packageRoot){
  const slug=new URLSearchParams(location.search).get('slug');
  catalog().then(data=>{
    const p=(data.packages||[]).find(x=>x.slug===slug);
    if(!p){packageRoot.innerHTML='<div class="empty-state"><strong>PACKAGE NOT FOUND</strong><p>No preserved Nexus record matches this slug.</p></div>';return}
    document.title=p.name+' — Nexus — Nomadic Labs';
    document.querySelector('[data-package-name]').textContent=p.name;
    document.querySelector('[data-package-summary]').textContent=p.summary;
    document.querySelector('[data-package-description]').textContent=p.description;
    document.querySelector('[data-package-status]').textContent=statusLabel(p.status);
    const dl=document.querySelector('[data-package-meta]');
    const rows=[
      ['Package ID',p.package_id],['Type',p.package_type],['Publisher',p.publisher],
      ['Targets',(p.target_products||[]).join(', ')||'UNSPECIFIED'],['Trust tier',p.trust_tier],
      ['Version',p.version||'NOT YET PUBLISHED'],['Release channel',p.release_channel||'NOT YET PUBLISHED'],
      ['Artifact SHA-256',p.sha256||'NOT YET PUBLISHED'],['Compatibility','NOT TESTED'],['Record created',p.created_at+' UTC']
    ];
    for(const [k,v] of rows){dl.append(el('dt','',k),el('dd','',String(v)))}
  });
}

const productRoot=document.querySelector('[data-product-detail]');
if(productRoot){
  const id=new URLSearchParams(location.search).get('id');
  const p=PRODUCTS.find(x=>x.slug===id);
  if(!p){productRoot.innerHTML='<div class="empty-state"><strong>PRODUCT NOT FOUND</strong><p>No preserved Nexus product matches this identity.</p></div>'}
  else{
    document.title=p.name+' — Nexus — Nomadic Labs';
    document.querySelector('[data-product-name]').textContent=p.name;
    document.querySelector('[data-product-summary]').textContent=p.summary;
    document.querySelector('[data-product-detail-copy]').textContent=p.detail;
    document.querySelector('[data-product-audience]').textContent=p.audience;
    document.querySelector('[data-product-ecosystem]').textContent=p.ecosystem;
  }
}