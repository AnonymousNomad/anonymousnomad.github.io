import { projectById } from './data/site-registry.js';
import { sectionByFamily, sectionsForFamily } from './data/section-registry.js';

const family = document.body.dataset.family;
const sectionId = document.body.dataset.section;
const projectId = family === 'tv' ? 'nomadic-tv' : family;
const project = projectById(projectId);
const section = sectionByFamily(family, sectionId);

if (!project || !section) {
  document.body.innerHTML = '<main class="missing"><h1>Section not found.</h1><a href="/">Return to Nomadic Labs</a></main>';
} else {
  document.title = `${section.title} — ${project.name} — Nomadic Labs`;
  document.querySelector('[data-parent-link]').href = project.route;
  document.querySelector('[data-parent-name]').textContent = project.name;
  document.querySelector('[data-section-title]').textContent = section.title;
  document.querySelector('[data-section-summary]').textContent = section.summary;
  document.querySelector('[data-section-truth]').textContent = section.truth;
  document.querySelector('[data-project-status]').textContent = project.status;

  const nav = document.querySelector('[data-section-nav]');
  for (const item of sectionsForFamily(family)) {
    const link = document.createElement('a');
    link.href = item.route;
    link.textContent = item.label;
    if (item.id === section.id) link.setAttribute('aria-current', 'page');
    nav.appendChild(link);
  }
}
