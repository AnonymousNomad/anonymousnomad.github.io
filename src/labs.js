import { PROJECTS } from './data/site-registry.js';

const list = document.querySelector('[data-project-list]');

const LABELS = {
  'nomadic-tv': 'MEDIA / BROADCAST',
  'nexus': 'ECOSYSTEM / DISTRIBUTION',
  'covert': 'AI / DEVELOPMENT',
  'workshop': 'RESEARCH / FIELD WORK'
};

const STATES = {
  HUB_READY_PRODUCT_DEPLOYMENT_PENDING: 'HUB READY / DEPLOYMENT PENDING',
  HUB_READY_PUBLIC_SITE_PENDING: 'HUB READY / PUBLIC SITE PENDING',
  HUB_NATIVE: 'HUB NATIVE'
};

if (list) {
  for (const project of PROJECTS) {
    const article = document.createElement('article');
    article.className = 'project-node';
    article.dataset.project = project.id;

    const rail = document.createElement('div');
    rail.className = 'project-rail';
    const node = document.createElement('span');
    node.className = 'project-node-dot';
    node.setAttribute('aria-hidden', 'true');
    const index = document.createElement('span');
    index.className = 'project-index';
    index.textContent = String(project.order).padStart(2, '0');
    rail.append(node, index);

    const body = document.createElement('div');
    body.className = 'project-body';

    const meta = document.createElement('div');
    meta.className = 'project-meta';
    const type = document.createElement('span');
    type.textContent = LABELS[project.id] || project.kind.toUpperCase();
    const state = document.createElement('span');
    state.textContent = STATES[project.integrationState] || project.status;
    meta.append(type, state);

    const title = document.createElement('h3');
    const link = document.createElement('a');
    link.href = project.route;
    const titleText = document.createElement('span');
    titleText.textContent = project.name;
    const arrow = document.createElement('span');
    arrow.className = 'project-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(titleText, arrow);
    title.appendChild(link);

    const summary = document.createElement('p');
    summary.textContent = project.summary;

    const footer = document.createElement('div');
    footer.className = 'project-node-footer';
    const route = document.createElement('span');
    route.textContent = 'ROUTE ' + project.route;
    const action = document.createElement('a');
    action.href = project.route;
    action.textContent = 'ENTER SYSTEM';
    footer.append(route, action);

    body.append(meta, title, summary, footer);
    article.append(rail, body);
    list.appendChild(article);
  }
}
