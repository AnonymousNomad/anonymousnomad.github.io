/**
 * Public Resident boundary.
 *
 * GitHub Pages is a static host and this site has no deployed public Resident
 * backend. The component therefore exposes a truthful unavailable state and a
 * useful local public-doc guide; it never sends a prompt to the workstation.
 */

const PUBLIC_GUIDE = [
  {
    title: 'What is Covert?',
    text: 'Covert is a local-first developer workbench intended to keep project context, workflow, authority, execution, and evidence connected while workers change.',
    terms: 'covert project context workflow authority execution evidence worker',
  },
  {
    title: 'Where is the source?',
    text: 'The public source repository is github.com/AnonymousNomad/aide-sovereign-workbench. Release status and limitations belong to the repository evidence, not to this static page alone.',
    terms: 'source github repository release status evidence',
  },
  {
    title: 'Does this page control a workstation?',
    text: 'No. This website has no access to a private filesystem, project memory, terminal, Harness, Authority, provider credentials, or operator Resident.',
    terms: 'security private filesystem memory terminal harness authority credentials',
  },
  {
    title: 'How can I participate?',
    text: 'Use the public repository for source, issues, pull requests, and durable technical discussion. A community server is a separate operator-owned surface and is not a substitute for GitHub records.',
    terms: 'community github issues pull requests discussion contribute',
  },
];

export function mountPublicResident(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="container">
      <header class="section-header" data-reveal>
        <div class="section-eyebrow">// public resident</div>
        <h2 class="section-title">Ask Covert, without touching the workstation.</h2>
        <p class="section-lede">This is a public, read-only guide surface. It is deliberately separate from the operator Resident and has zero execution authority.</p>
      </header>

      <div class="public-resident-grid">
        <section class="public-resident-panel glass" aria-labelledby="public-resident-status">
          <div class="public-resident-badge">READ-ONLY / NO WORKSTATION ACCESS</div>
          <h3 id="public-resident-status">Public Resident backend: not deployed</h3>
          <p>The secure backend required for a real public model interaction is not connected to this GitHub Pages site. No prompt is sent anywhere, and no fake response is generated.</p>
          <div class="public-resident-status" role="status" aria-live="polite">
            <span class="public-resident-status-dot" aria-hidden="true"></span>
            <span>PUBLIC DEMO: COMING SOON</span>
          </div>
          <button class="btn btn-secondary public-resident-disabled" type="button" disabled aria-disabled="true">Ask the public Resident</button>
          <p class="public-resident-note">Until a separately secured backend exists, use the public guide on this page or the repository documentation.</p>
        </section>

        <section class="public-guide glass" aria-labelledby="public-guide-title">
          <div class="public-guide-heading">
            <div>
              <div class="section-eyebrow">// public guide</div>
              <h3 id="public-guide-title">Find an answer in the public docs</h3>
            </div>
            <label class="sr-only" for="public-guide-search">Search the public guide</label>
            <input id="public-guide-search" class="public-guide-search" type="search" placeholder="Search public guide" autocomplete="off" />
          </div>
          <div class="public-guide-results" aria-live="polite"></div>
        </section>
      </div>
    </div>
  `;

  const results = root.querySelector('.public-guide-results');
  const search = root.querySelector('#public-guide-search');
  const render = () => {
    const query = search.value.trim().toLowerCase();
    const matches = PUBLIC_GUIDE.filter(item => !query || `${item.title} ${item.text} ${item.terms}`.toLowerCase().includes(query));
    results.innerHTML = matches.length
      ? matches.map(item => `<article class="public-guide-card"><h4>${item.title}</h4><p>${item.text}</p></article>`).join('')
      : '<p class="public-guide-empty">No public guide entry matches that search.</p>';
  };
  search.addEventListener('input', render);
  render();
}

const STYLES = `
.public-resident { position: relative; }
.public-resident-grid { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); gap: var(--space-5); }
.public-resident-panel, .public-guide { padding: var(--space-7); }
.public-resident-badge { color: var(--green-matrix); font: var(--weight-bold) var(--text-xs) var(--font-mono); letter-spacing: var(--tracking-widest); margin-bottom: var(--space-5); }
.public-resident-panel h3, .public-guide-heading h3 { color: var(--text-primary); font-size: var(--text-2xl); margin-bottom: var(--space-3); }
.public-resident-panel > p { color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed); }
.public-resident-status { display: flex; align-items: center; gap: var(--space-2); margin: var(--space-6) 0; color: var(--accent-warning); font: var(--weight-bold) var(--text-xs) var(--font-mono); letter-spacing: var(--tracking-wide); }
.public-resident-status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-warning); }
.public-resident-disabled { width: 100%; cursor: not-allowed; opacity: 0.6; }
.public-resident-note { margin-top: var(--space-4); color: var(--text-tertiary) !important; font-size: var(--text-xs) !important; }
.public-guide-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: var(--space-4); margin-bottom: var(--space-5); }
.public-guide-heading .section-eyebrow { margin-bottom: var(--space-2); }
.public-guide-search { width: min(240px, 100%); padding: var(--space-3) var(--space-4); border: 1px solid var(--glass-border-bright); border-radius: var(--radius-pill); background: var(--black-elevated); color: var(--text-primary); }
.public-guide-search::placeholder { color: var(--text-tertiary); }
.public-guide-results { display: grid; gap: var(--space-3); }
.public-guide-card { padding: var(--space-4); border: 1px solid var(--black-border-bright); border-radius: var(--radius-xl); background: var(--black-elevated); }
.public-guide-card h4 { color: var(--text-primary); font-size: var(--text-base); margin-bottom: var(--space-2); }
.public-guide-card p, .public-guide-empty { color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed); }
@media (max-width: 820px) { .public-resident-grid { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .public-resident-panel, .public-guide { padding: var(--space-5); } .public-guide-heading { align-items: stretch; flex-direction: column; } .public-guide-search { width: 100%; } }
`;

if (!document.getElementById('public-resident-styles')) {
  const style = document.createElement('style');
  style.id = 'public-resident-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}
