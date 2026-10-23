import { SITE, projectById } from './data/site-registry.js';
import { sectionsForFamily } from './data/section-registry.js';
import { mountHubSwitcher } from './hub-shell.js';

mountHubSwitcher();

const id = document.body.dataset.project;
const project = projectById(id);

if (!project) {
  document.body.innerHTML = '<main class="missing"><h1>Project not found.</h1><a href="/">Return to Nomadic Labs</a></main>';
} else {
  document.title = `${project.name} — Nomadic Labs`;
  document.querySelector('[data-project-name]').textContent = project.name;
  document.querySelector('[data-project-kind]').textContent = project.kind;
  document.querySelector('[data-project-tagline]').textContent = project.tagline;
  document.querySelector('[data-project-summary]').textContent = project.summary;
  document.querySelector('[data-project-status]').textContent = project.status;
  document.querySelector('[data-project-status]').dataset.state = project.statusClass;
  document.querySelector('[data-project-truth]').textContent = project.currentTruth;
  document.querySelector('[data-project-design]').textContent = project.design;
  document.querySelector('[data-site-doctrine]').textContent = SITE.doctrine;

  const capabilities = document.querySelector('[data-project-capabilities]');
  for (const value of project.capabilities) {
    const li = document.createElement('li');
    li.textContent = value;
    capabilities.appendChild(li);
  }

  const boundaries = document.querySelector('[data-project-boundaries]');
  for (const value of project.boundaries) {
    const li = document.createElement('li');
    li.textContent = value;
    boundaries.appendChild(li);
  }

  const family = id === 'nomadic-tv' ? 'tv' : id;
  const nav = document.querySelector('[data-product-nav]');
  const sections = sectionsForFamily(family);
  if (nav && sections.length) {
    for (const item of sections) {
      const a = document.createElement('a');
      a.href = item.route;
      a.textContent = item.label;
      nav.appendChild(a);
    }
  } else if (nav) {
    nav.hidden = true;
  }

  const links = document.querySelector('[data-project-links]');
  if (project.links?.length) {
    for (const item of project.links) {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      a.rel = 'noreferrer';
      links.appendChild(a);
    }
  } else {
    links.hidden = true;
  }
}