/**
 * Site header — sticky, glassy, with smooth-scroll nav
 */

const NAV = [
  { id: 'aide', label: 'AIDE' },
  { id: 'ghostcode', label: 'GhostCode' },
  { id: 'vitalis', label: 'Vitalis' },
  { id: 'cyber', label: 'Cyber' },
  { id: 'lorein', label: 'LOREIN' },
  { id: 'about', label: 'About' },
];

export function mountHeader(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="header-inner glass">
      <a href="#hero" class="brand" aria-label="Neuro_Nomad home">
        <span class="brand-dot" aria-hidden="true"></span>
        <span class="brand-name">Neuro_Nomad</span>
      </a>

      <nav class="nav-primary" aria-label="Primary">
        <ul class="nav-list">
          ${NAV.map(
            (n) => `
            <li><a class="nav-link" href="#${n.id}">${n.label}</a></li>
          `
          ).join('')}
        </ul>
      </nav>

      <div class="header-actions">
        <a class="btn btn-ghost btn-sm" href="https://github.com/AnonymousNomad" target="_blank" rel="noopener noreferrer">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  `;

  // Sticky behavior: add shadow after scroll
  const inner = root.querySelector('.header-inner');
  const onScroll = () => {
    if (window.scrollY > 16) inner.classList.add('is-scrolled');
    else inner.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Inject header styles (one-off, lives in component)
const STYLES = `
.site-header { padding: 0.75rem 1rem; }
.header-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0.75rem 1.25rem;
  transition: all var(--duration-normal) var(--ease-out);
}
.header-inner.is-scrolled { box-shadow: var(--shadow-md); }
.brand {
  display: inline-flex; align-items: center; gap: 0.625rem;
  font-weight: var(--weight-bold); color: var(--text-primary);
  font-size: var(--text-base);
  letter-spacing: var(--tracking-tight);
}
.brand:hover { color: var(--text-primary); }
.brand-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--green-matrix);
  box-shadow: 0 0 12px var(--green-matrix-glow);
  animation: pulse 2s ease-in-out infinite;
}
.brand-name { font-family: var(--font-mono); }

.nav-list {
  display: flex; align-items: center; gap: 0.25rem;
  list-style: none; margin: 0; padding: 0;
}
.nav-link {
  display: inline-block;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-pill);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  transition: all var(--duration-fast) var(--ease-out);
}
.nav-link:hover {
  color: var(--text-primary);
  background: var(--glass-bg);
}
.header-actions { display: flex; align-items: center; gap: 0.5rem; }
.btn-sm { padding: 0.4rem 0.875rem; font-size: var(--text-sm); }
.icon { width: 16px; height: 16px; }

@media (max-width: 768px) {
  .nav-primary { display: none; }
}
`;

// Inject once
if (!document.getElementById('site-header-styles')) {
  const style = document.createElement('style');
  style.id = 'site-header-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}
