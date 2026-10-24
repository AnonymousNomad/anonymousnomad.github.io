import { WORKSHOP_PROJECTS, EVIDENCE_GROUPS } from './data/workshop-projects.js';
import { mountHubSwitcher } from './hub-shell.js';

mountHubSwitcher();

const projects=document.querySelector('[data-workshop-projects]');
if(projects){
  for(const p of WORKSHOP_PROJECTS){
    const a=document.createElement('article');a.className='workshop-record';
    const top=document.createElement('div');top.className='workshop-record-top';
    const ident=document.createElement('div');
    const label=document.createElement('p');label.className='mini-label';label.textContent=p.lineage;
    const h=document.createElement('h2');const link=document.createElement('a');link.href=p.repo;link.textContent=p.name;h.append(link);ident.append(label,h);
    const st=document.createElement('span');st.className='integration-state';st.textContent=p.status;
    top.append(ident,st);
    const tag=document.createElement('p');tag.className='workshop-tagline';tag.textContent=p.tagline;
    const d=document.createElement('p');d.className='status-copy';d.textContent=p.description;
    const ev=document.createElement('p');ev.className='workshop-evidence';ev.textContent=p.evidence;
    const meta=document.createElement('div');meta.className='workshop-meta';meta.textContent=p.language+' / '+p.license;
    a.append(top,tag,d,ev,meta);projects.append(a)
  }
}
const evidence=document.querySelector('[data-evidence-groups]');
if(evidence){
  for(const e of EVIDENCE_GROUPS){
    const a=document.createElement('article');a.className='evidence-row';
    const n=document.createElement('strong');n.textContent=e.name;
    const s=document.createElement('span');s.textContent=e.state;
    const p=document.createElement('p');p.textContent=e.summary;
    a.append(n,s,p);evidence.append(a)
  }
}