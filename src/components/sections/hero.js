/**
 * Hero section — AIDE flagship, 9-step closed-loop, animated terminal
 * Matrix-green accent. Full-bleed.
 */

import { bio } from '../../data/bio.js';
import { repoById } from '../../data/repos.js';

const AIDE = repoById['aide-sovereign-workbench'];

const LOOP_STEPS = [
  { id: 'guard', label: 'guard', desc: 'verify inputs' },
  { id: 'retrieve', label: 'retrieve', desc: 'load context' },
  { id: 'plan', label: 'plan', desc: 'map approach' },
  { id: 'propose', label: 'propose', desc: 'candidate patch' },
  { id: 'verify', label: 'verify', desc: 'run evidence gate' },
  { id: 'revise', label: 'revise', desc: 'iterate if needed' },
  { id: 'test', label: 'test', desc: 'run test suite' },
  { id: 'review', label: 'review', desc: 'operator diff review' },
  { id: 'learn', label: 'learn', desc: 'store pattern' },
];

export function mountHero(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-grid"></div>
      <div class="hero-glow hero-glow-green"></div>
      <div class="hero-glow hero-glow-purple"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-eyebrow">
        <span class="hero-status-dot" aria-hidden="true"></span>
        <span class="hero-eyebrow-text">Sovereign systems. Local-first. Forever offline.</span>
      </div>

      <h1 class="hero-title">
        <span class="hero-line">Built by an</span>
        <span class="hero-line hero-accent">electrician.</span>
        <span class="hero-line">Runs on a</span>
        <span class="hero-line hero-accent-2">laptop.</span>
      </h1>

      <p class="hero-sub">
        ${bio.summary} ${AIDE.tagline} —
        <strong>${AIDE.demoCopy.status}</strong>
      </p>

      <div class="hero-ctas">
        <a class="btn btn-primary" href="#aide">
          <span>Explore the workbench</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
        <a class="btn btn-secondary" href="#projects">
          <span>All projects</span>
        </a>
        <a class="btn btn-ghost" href="https://github.com/AnonymousNomad" target="_blank" rel="noopener noreferrer">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>

      <div class="hero-stats">
        <div class="stat">
          <div class="stat-value">265</div>
          <div class="stat-label">architecture tests</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <div class="stat-value">17</div>
          <div class="stat-label">Playwright E2E</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <div class="stat-value">0</div>
          <div class="stat-label">cloud required</div>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat">
          <div class="stat-value">3</div>
          <div class="stat-label">local model packs</div>
        </div>
      </div>

      <div class="hero-loop" aria-label="The 9-step closed loop">
        <div class="hero-loop-label">The closed loop</div>
        <ol class="hero-loop-track">
          ${LOOP_STEPS.map(
            (s, i) => `
            <li class="hero-loop-step" style="--i:${i}">
              <span class="hero-loop-num">0${i + 1}</span>
              <span class="hero-loop-name">${s.label}</span>
              <span class="hero-loop-desc">${s.desc}</span>
            </li>
          `
          ).join('')}
        </ol>
      </div>
    </div>
  `;

  // Stagger reveal of the loop steps via the main.js reveal observer
  for (const el of root.querySelectorAll('.hero-loop-step')) {
    el.setAttribute('data-reveal', '');
  }
  for (const el of root.querySelectorAll('.stat, .hero-ctas, .hero-stats')) {
    el.setAttribute('data-reveal', '');
  }
}

const STYLES = `
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: calc(var(--header-height) + var(--space-12));
  padding-bottom: var(--space-16);
  overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 50%, transparent 100%);
}
.hero-glow {
  position: absolute;
  width: 60vw; height: 60vw;
  max-width: 800px; max-height: 800px;
  border-radius: 50%;
  filter: blur(120px);
  mix-blend-mode: screen;
}
.hero-glow-green { top: -10%; left: -10%; background: var(--green-matrix); opacity: 0.15; }
.hero-glow-purple { bottom: -20%; right: -10%; background: var(--purple-neon); opacity: 0.18; }
.hero-content { position: relative; z-index: 1; }

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-sm));
  -webkit-backdrop-filter: blur(var(--blur-sm));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}
.hero-status-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--green-matrix);
  box-shadow: 0 0 10px var(--green-matrix-glow);
  animation: pulse 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(var(--text-5xl), 9vw, var(--text-8xl));
  font-weight: var(--weight-black);
  line-height: 0.95;
  letter-spacing: var(--tracking-tighter);
  margin-bottom: var(--space-6);
  max-width: 16ch;
}
.hero-line { display: block; color: var(--text-primary); }
.hero-accent { color: var(--green-matrix); }
.hero-accent-2 {
  background: linear-gradient(135deg, var(--green-matrix) 0%, var(--blue-neon) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.hero-sub {
  max-width: 60ch;
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}
.hero-sub strong { color: var(--green-matrix); font-weight: var(--weight-semibold); }

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-12);
}
.btn-arrow { transition: transform var(--duration-fast) var(--ease-out); }
.btn-primary:hover .btn-arrow { transform: translateX(4px); }

.hero-stats {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-md));
  -webkit-backdrop-filter: blur(var(--blur-md));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  margin-bottom: var(--space-16);
  max-width: max-content;
}
.stat { display: flex; flex-direction: column; }
.stat-value {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  color: var(--green-matrix);
  line-height: 1;
}
.stat-label {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  margin-top: 0.25rem;
}
.stat-divider { width: 1px; height: 24px; background: var(--black-border-bright); }

.hero-loop { width: 100%; }
.hero-loop-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-4);
}
.hero-loop-track {
  list-style: none;
  margin: 0; padding: 0;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: var(--space-2);
}
@media (max-width: 1024px) { .hero-loop-track { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px) { .hero-loop-track { grid-template-columns: repeat(2, 1fr); } }

.hero-loop-step {
  position: relative;
  padding: var(--space-3);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  display: flex; flex-direction: column;
  gap: 0.125rem;
  opacity: 0;
  transform: translateY(8px);
  transition: all var(--duration-slow) var(--ease-out);
  transition-delay: calc(var(--i, 0) * 60ms);
}
.hero-loop-step.is-visible { opacity: 1; transform: translateY(0); }
.hero-loop-step:hover {
  border-color: var(--green-matrix);
  background: rgba(0, 255, 65, 0.04);
  transform: translateY(-2px);
}
.hero-loop-num {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--green-matrix);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-wide);
}
.hero-loop-name {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
}
.hero-loop-desc {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  font-family: var(--font-mono);
}
`;

// Inject once
if (!document.getElementById('hero-styles')) {
  const style = document.createElement('style');
  style.id = 'hero-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}