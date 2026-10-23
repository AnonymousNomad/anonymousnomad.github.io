import { PROJECTS } from './data/site-registry.js';

const list = document.querySelector('[data-project-list]');

if (list) {
  for (const project of PROJECTS) {
    const article = document.createElement('article');
    article.className = 'project-row';

    const identity = document.createElement('div');
    const index = document.createElement('span');
    index.className = 'index';
    index.textContent = String(project.order).padStart(2, '0');
    const title = document.createElement('h3');
    const link = document.createElement('a');
    link.href = project.route;
    link.textContent = project.name;
    title.appendChild(link);
    identity.append(index, title);

    const summary = document.createElement('p');
    summary.textContent = project.summary;

    const status = document.createElement('a');
    status.className = 'status';
    status.href = project.route;
    status.textContent = project.status;

    article.append(identity, summary, status);
    list.appendChild(article);
  }
}
