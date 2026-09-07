/**
 * Site footer — links, attribution, llms.txt pointer
 */

import { bio } from '../data/bio.js';

export function mountFooter(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-brand">
        <div class="footer-name">${bio.name}</div>
        <p class="footer-tagline">${bio.tagline}</p>
        <p class="footer-mantra">Built offline. Served offline. Verified offline.</p>
      </div>

      <nav class="footer-nav" aria-label="Footer">
        <div class="footer-col">
          <h4 class="footer-col-title">Projects</h4>
          <ul class="footer-list">
            <li><a href="#aide">AIDE Workbench</a></li>
            <li><a href="#ghostcode">GhostCode</a></li>
            <li><a href="#vitalis">Vitalis Engines</a></li>
            <li><a href="#cyber">Cyber SOP Harness</a></li>
            <li><a href="#lorein">LOREIN</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Links</h4>
          <ul class="footer-list">
            <li><a href="https://github.com/AnonymousNomad" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://github.com/sponsors/AnonymousNomad" target="_blank" rel="noopener noreferrer">Sponsors</a></li>
            <li><a href="./llms.txt">llms.txt</a></li>
            <li><a href="./SECURITY.md">Security</a></li>
            <li><a href="./LICENSE">License</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Build</h4>
          <ul class="footer-list">
            <li>Apache-2.0 license</li>
            <li>No analytics. No cookies.</li>
            <li>No CDN. No web fonts.</li>
            <li>System font stack only</li>
            <li>Plain HTML + ES modules</li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="container footer-bottom">
      <div class="footer-status">
        <span class="footer-status-dot" aria-hidden="true"></span>
        <span>All systems sovereign. No telemetry.</span>
      </div>
      <div class="footer-meta">
        &copy; 2021–2026 Neuro_Nomad (${bio.handle})
      </div>
    </div>
  `;
}

const STYLES = `
.site-footer {
  position: relative;
  padding: var(--space-20) 0 var(--space-8);
  border-top: 1px solid var(--black-border);
  margin-top: var(--space-20);
  background: linear-gradient(180deg, var(--bg-page) 0%, var(--black-deep) 100%);
}
.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}
@media (max-width: 768px) {
  .footer-inner { grid-template-columns: 1fr; gap: var(--space-8); }
}
.footer-name {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}
.footer-tagline {
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}
.footer-mantra {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--green-matrix);
  letter-spacing: var(--tracking-wider);
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}
@media (max-width: 600px) { .footer-nav { grid-template-columns: 1fr 1fr; } }
.footer-col-title {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--purple-neon);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-3);
}
.footer-list {
  list-style: none;
  margin: 0; padding: 0;
  display: flex; flex-direction: column;
  gap: var(--space-2);
}
.footer-list li { font-size: var(--text-sm); color: var(--text-secondary); }
.footer-list a { color: var(--text-secondary); }
.footer-list a:hover { color: var(--text-primary); }

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid var(--black-border);
}
.footer-status {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--text-tertiary);
}
.footer-status-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--green-matrix);
  box-shadow: 0 0 8px var(--green-matrix-glow);
  animation: pulse 2s ease-in-out infinite;
}
.footer-meta {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--text-tertiary);
}
`;

// Inject once
if (!document.getElementById('footer-styles')) {
  const style = document.createElement('style');
  style.id = 'footer-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}
