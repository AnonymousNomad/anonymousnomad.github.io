const current=location.pathname;
const links=[
  ['/nexus/','Gateway'],['/nexus/discover/','Discover'],['/nexus/models/','Models'],
  ['/nexus/products/','Products'],['/nexus/developers/','Developers'],
  ['/nexus/community/','Community'],['/nexus/downloads/','Downloads'],['/nexus/releases/','Releases']
];

const backdrop=document.createElement('div');
backdrop.className='nexus-world';
backdrop.dataset.nexusWorld='';
const a=document.createElement('img');a.dataset.worldCurrent='';a.alt='';a.setAttribute('aria-hidden','true');
const b=document.createElement('img');b.dataset.worldNext='';b.className='next';b.alt='';b.setAttribute('aria-hidden','true');
backdrop.append(a,b);
document.body.prepend(backdrop);
const code=document.createElement('div');code.className='nexus-code';code.setAttribute('aria-hidden','true');document.body.prepend(code);

const header=document.querySelector('[data-nexus-header]');
if(header){
  const brand=document.createElement('a');brand.className='nexus-brand';brand.href='/nexus/';brand.innerHTML='NEXUS <small>BY NOMADIC LABS</small>';
  const nav=document.createElement('nav');nav.className='nexus-nav';nav.setAttribute('aria-label','Nexus');
  for(const [href,label] of links){const x=document.createElement('a');x.href=href;x.textContent=label;if(current===href||current.startsWith(href)&&href!=='/nexus/')x.setAttribute('aria-current','page');nav.append(x)}
  const labs=document.createElement('a');labs.className='labs-link';labs.href='/';labs.textContent='↙ Nomadic Labs';nav.append(labs);
  header.append(brand,nav);
}

const footer=document.querySelector('[data-nexus-footer]');
if(footer){footer.innerHTML='<span>NEXUS / CATALOG + COMMUNITY LAYER</span><span>PUBLIC MIGRATION / TRUTHFUL EMPTY STATES</span><a href="/">NOMADIC LABS ↗</a>'}

const motion=document.createElement('button');motion.className='world-control';motion.dataset.worldControl='';motion.type='button';motion.textContent='PAUSE WORLD';document.body.append(motion);
