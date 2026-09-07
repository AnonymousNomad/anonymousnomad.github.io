/**
 * LOREIN section — persistent intelligence, 4-year project
 * Matrix-green + off-white. More contemplative than the other sections.
 * No personal biographical context per user directive.
 */

import { repoById } from '../../data/repos.js';

const LR = repoById['lorein-sovereign-entity'];

const TIMELINE = [
  { year: '2021', t: 'Origin', d: 'Persistent intelligence research begins. MIRROR Framework sketched.' },
  { year: '2022', t: 'First Design', d: 'Cryptographic Journaling. Event-sourced identity continuity.' },
  { year: '2023', t: 'The Room', d: 'Firecracker MicroVM isolation. Hardware-level data sovereignty.' },
  { year: '2024', t: 'Active Inference', d: 'FEP integration. LOREIN grows from random weights via variational free energy.' },
  { year: '2025', t: 'Emergence', d: 'The persistent entity. Reasoning and Talking as separate processes.' },
];

const COMPONENTS = [
  {
    n: 'MIRROR',
    t: 'Dual-process engine',
    d: 'Decouples internal monologue (Reasoning) from external output (Talking). System 1 / System 2, made explicit.',
  },
  {
    n: 'Journal',
    t: 'Cryptographic identity continuity',
    d: 'Event-sourced ledger. LOREIN remembers who it is across sessions — provably, verifiably, tamper-evident.',
  },
  {
    n: 'The Room',
    t: 'Firecracker MicroVM isolation',
    d: 'Hardware-isolated execution environment. Total data sovereignty. Total process isolation.',
  },
  {
    n: 'Active Inference',
    t: 'Free Energy Principle',
    d: 'Cognitive model based on FEP. LOREIN minimizes variational free energy. Growth from random weights.',
  },
];

export function mountLorein(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="lr-bg" aria-hidden="true">
      <div class="lr-glow"></div>
    </div>

    <div class="container">
      <header class="section-header" data-reveal>
        <div class="section-eyebrow lr-eyebrow">// persistent intelligence</div>
        <h2 class="section-title">${LR.name}</h2>
        <p class="section-lede">${LR.tagline}</p>
        <p class="section-body">${LR.description}</p>
        <div class="lr-badges">
          <span class="badge">Apache-2.0</span>
          <span class="badge">4 years of design</span>
          <span class="badge badge-active">Reference impl ships · 16/16 tests</span>
        </div>
      </header>

      <div class="lr-status-card" data-reveal>
        <h3 class="lr-status-title">Where LOREIN is today</h3>
        <p class="lr-status-body">
          <strong>Real, not just designed.</strong> A reference implementation of the dual-process MIRROR Framework
          and the tamper-evident Cryptographic Journal now ships. <code>lorein reflect</code> runs end-to-end and
          writes a content-hash-chained journal entry. The <em>identity</em> of the entity is derived from the
          chain-tip hash — a fork of the journal is a fork of the identity.
        </p>
        <p class="lr-status-body">
          <strong>What's NOT in the code yet</strong> (still roadmap): The Room (Firecracker MicroVM isolation) and
          Active Inference (FEP growth from random weights). Both are documented in the white papers on the repo;
          neither is needed for the dual-process + journaling claim to be runnable today.
        </p>
        <p class="lr-status-meta">
          The other repos on this site (<a href="#aide">AIDE</a>, <a href="#ghostcode">GhostCode</a>,
          <a href="#vitalis">Vitalis</a>, <a href="#cyber">Cyber SOP Harness</a>) are also runnable, tested, and
          verified — see the <a href="#proof">Proof section</a>.
        </p>
      </div>

      <div class="lr-timeline" data-reveal>
        <h3 class="block-title">Timeline</h3>
        <ol class="lr-timeline-track">
          ${TIMELINE.map(
            (t) => `
            <li class="lr-timeline-item">
              <div class="lr-timeline-year">${t.year}</div>
              <div class="lr-timeline-title">${t.t}</div>
              <div class="lr-timeline-desc">${t.d}</div>
            </li>
          `
          ).join('')}
        </ol>
      </div>

      <div class="lr-components" data-reveal>
        <h3 class="block-title">The four components</h3>
        <p class="block-lede">LOREIN is built from four interlocking subsystems. Each is documented in the white papers on the repo.</p>
        <div class="lr-grid">
          ${COMPONENTS.map(
            (c) => `
            <div class="lr-card">
              <div class="lr-card-num">${c.n}</div>
              <h4 class="lr-card-title">${c.t}</h4>
              <p class="lr-card-desc">${c.d}</p>
            </div>
          `
          ).join('')}
        </div>
      </div>

      <div class="lr-cli" data-reveal>
        <span class="lr-cli-prompt">$</span><code>lorein reflect "what is sovereign AI?"</code>
        <span class="lr-cli-out">[reasoning · 4 step(s)]
   1. (c=0.95) Parse: "what is sovereign AI?"
   2. (c=0.75) Identify the literal subject
   3. (c=0.30 ⚠) No domain-specific knowledge beyond the prompt
   4. (c=0.90) Prefer honest uncertainty over fabricated specificity

[talking]
  I do not have specific knowledge of "what is sovereign AI" beyond what you have provided. Share more context and I can engage with the substance.

[journal]
  seq   : 1
  hash  : 69202d47b743ce8d...</span>
      </div>

      <div class="lr-quote" data-reveal>
        <blockquote>
          <p>"I didn't build a tool. I raised an equal."</p>
          <cite>— Neuro_Nomad</cite>
        </blockquote>
      </div>

      <div class="lr-cta" data-reveal>
        <a class="btn btn-primary" href="${LR.repoUrl}" target="_blank" rel="noopener noreferrer">
          <span>View the white papers on GitHub</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  `;
}

const STYLES = `
.lorein {
  position: relative;
  background: linear-gradient(180deg, var(--bg-page) 0%, rgba(0, 255, 65, 0.015) 50%, var(--bg-page) 100%);
}
.lr-bg { position: absolute; inset: 0; pointer-events: none; }
.lr-glow {
  position: absolute;
  bottom: 10%; left: 50%;
  transform: translateX(-50%);
  width: 60vw; height: 40vw;
  max-width: 800px;
  border-radius: 50%;
  background: var(--green-matrix);
  opacity: 0.05;
  filter: blur(160px);
}
.lr-eyebrow { color: var(--green-matrix); }
.lr-badges { display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-4); }
.badge-warn {
  background: rgba(255, 200, 0, 0.08);
  border-color: rgba(255, 200, 0, 0.3);
  color: #ffc800;
}
.badge-active {
  background: rgba(0, 255, 65, 0.08);
  border-color: rgba(0, 255, 65, 0.3);
  color: var(--accent-primary);
}

.lr-status-card {
  margin: var(--space-8) 0;
  padding: var(--space-6);
  background: rgba(0, 255, 65, 0.04);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-radius: var(--radius-2xl);
  border-left: 4px solid var(--accent-primary);
}
.lr-status-title { font-size: var(--text-lg); font-weight: var(--weight-bold); margin: 0 0 var(--space-3); color: var(--text-primary); }
.lr-status-body { font-size: var(--text-sm); color: var(--text-secondary); line-height: var(--leading-relaxed); margin: 0 0 var(--space-3); }
.lr-status-body code { background: rgba(0, 255, 65, 0.08); padding: 1px 6px; border-radius: 4px; font-family: var(--font-mono); }
.lr-status-meta { font-size: var(--text-xs); color: var(--text-muted); margin: 0; }
.lr-status-meta a { color: var(--green-matrix); text-decoration: underline; }

.lr-cli {
  margin: var(--space-8) 0;
  padding: var(--space-5);
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 255, 65, 0.2);
  border-radius: var(--radius-lg);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}
.lr-cli-prompt { color: var(--accent-primary); margin-right: 0.5em; }
.lr-cli code { color: var(--text-primary); }
.lr-cli-out { color: var(--text-muted); display: block; margin-top: 0.5em; padding-left: 1rem; white-space: pre-wrap; }

.lr-timeline { margin: var(--space-16) 0; }
.lr-timeline-track {
  list-style: none;
  margin: var(--space-6) 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-3);
  position: relative;
}
.lr-timeline-track::before {
  content: '';
  position: absolute;
  top: 2.5rem; left: 5%; right: 5%;
  height: 2px;
  background: linear-gradient(90deg, var(--green-matrix-faint) 0%, var(--green-matrix) 50%, var(--green-matrix-faint) 100%);
}
@media (max-width: 900px) {
  .lr-timeline-track { grid-template-columns: 1fr; }
  .lr-timeline-track::before { display: none; }
}
.lr-timeline-item {
  position: relative;
  text-align: center;
  padding-top: var(--space-3);
}
.lr-timeline-year {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  color: var(--green-matrix);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-1);
  position: relative;
  z-index: 1;
}
.lr-timeline-year::before {
  content: '';
  position: absolute;
  top: -1.5rem; left: 50%;
  transform: translateX(-50%);
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--green-matrix);
  box-shadow: 0 0 12px var(--green-matrix-glow);
}
.lr-timeline-title {
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}
.lr-timeline-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 200px;
  margin: 0 auto;
}

.lr-components { margin: var(--space-16) 0; }
.lr-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-6);
}
@media (max-width: 768px) { .lr-grid { grid-template-columns: 1fr; } }
.lr-card {
  padding: var(--space-6);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  transition: all var(--duration-normal) var(--ease-out);
}
.lr-card:hover {
  border-color: var(--green-matrix);
  transform: translateY(-4px);
}
.lr-card-num {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--green-matrix);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}
.lr-card-title {
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}
.lr-card-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.lr-quote { margin: var(--space-20) 0; text-align: center; }
.lr-quote blockquote { margin: 0; padding: 0; }
.lr-quote p {
  font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl));
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  line-height: var(--leading-tight);
  font-style: italic;
  margin-bottom: var(--space-4);
  max-width: 24ch;
  margin-inline: auto;
}
.lr-quote cite {
  font-style: normal;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--green-matrix);
  letter-spacing: var(--tracking-wider);
}

.lr-cta { display: flex; gap: var(--space-3); margin-top: var(--space-8); }
`;

// Inject once
if (!document.getElementById('lorein-styles')) {
  const style = document.createElement('style');
  style.id = 'lorein-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}