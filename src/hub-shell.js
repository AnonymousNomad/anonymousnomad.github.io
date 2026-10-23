import { PROJECTS } from './data/site-registry.js';

export function mountHubSwitcher() {
  const header = document.querySelector('header');
  if (!header || header.querySelector('[data-hub-switcher]')) return;

  const nav = document.createElement('nav');
  nav.className = 'hub-switcher';
  nav.dataset.hubSwitcher = '';

  const home = document.createElement('a');
  home.href = '/';
  home.textContent = 'Labs';
  nav.appendChild(home);

  for (const project of PROJECTS) {
    const link = document.createElement('a');
    link.href = project.route;
    link.textContent = project.name;
    if (location.pathname.startsWith(project.route)) link.setAttribute('aria-current', 'page');
    nav.appendChild(link);
  }

  const status = document.createElement('a');
  status.href = '/status/';
  status.textContent = 'Status';
  if (location.pathname.startsWith('/status/')) status.setAttribute('aria-current', 'page');
  nav.appendChild(status);

  header.appendChild(nav);
}
