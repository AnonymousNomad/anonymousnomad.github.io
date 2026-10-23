import { SITE, PROJECTS } from './data/site-registry.js';
import { mountHubSwitcher } from './hub-shell.js';

mountHubSwitcher();

const grid = document.querySelector('[data-status-grid]');
const stamp = document.querySelector('[data-status-summary]');

if (stamp) {
  stamp.textContent = `${PROJECTS.length} project worlds registered · ${SITE.doctrine}`;
}

if (grid) {
  for (const project of PROJECTS) {
    const article = document.createElement('article');
    article.className = 'status-card';

    const top = document.createElement('div');
    top.className = 'status-card-top';

    const identity = document.createElement('div');
    const kind = document.createElement('p');
    kind.className = 'mini-label';
    kind.textContent = project.kind;
    const title = document.createElement('h2');
    const link = document.createElement('a');
    link.href = project.route;
    link.textContent = project.name;
    title.appendChild(link);
    identity.append(kind, title);

    const state = document.createElement('span');
    state.className = 'integration-state';
    state.textContent = project.integrationState.replaceAll('_', ' ');

    top.append(identity, state);

    const summary = document.createElement('p');
    summary.className = 'status-copy';
    summary.textContent = project.currentTruth;

    const facts = document.createElement('dl');
    const rows = [
      ['Hub route', project.route],
      ['Deployment', project.deploymentModel],
      ['Source owner', project.sourceOwner],
      ['Future domain', project.futureDomain || 'Remains inside Nomadic Labs']
    ];
    for (const [term, value] of rows) {
      const dt = document.createElement('dt');
      dt.textContent = term;
      const dd = document.createElement('dd');
      dd.textContent = value;
      facts.append(dt, dd);
    }

    article.append(top, summary, facts);
    grid.appendChild(article);
  }
}
