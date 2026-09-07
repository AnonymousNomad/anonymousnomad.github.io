/**
 * Vitalis section — both cognitive engines (Vitalis_core + Vitalis_Devcore)
 * Updated to match the consolidated 2026-09-07 state.
 */

import { repoById } from '../../data/repos.js';

const CORE = repoById['vitalis-core'];
const DEV = repoById['vitalis-devcore'];

// Vitalis_core: the confidence-gating / Ebbinghaus / exoskeleton concept
const CORE_PILLARS = [
  { n: '01', t: 'Confidence Gating', d: 'Every response passes a Bayesian gate. Low-confidence answers are filtered or labeled.' },
  { n: '02', t: 'Ebbinghaus Memory', d: 'Memories strengthen with use, decay without. The biological forgetting curve, made computational.' },
  { n: '03', t: 'Exoskeleton Pattern', d: 'Drop in any model_fn (text → (answer, confidence)) and you get the full pipeline.' },
  { n: '04', t: 'NumPy Reference Impl', d: 'No torch, no transformers, no cloud. Runs on a laptop. fsi-chat command works end-to-end.' },
  { n: '05', t: 'Single Entry Point', d: 'vitalis.cli:main → fsi-chat. 11/11 tests pass. 5 old impls archived to _archive/.' },
  { n: '06', t: 'Sovereign', d: 'No external services, no telemetry. Your data, your model, your rules.' },
];

// Vitalis_Devcore: the pipeline components
const DEV_SUBSYSTEMS = [
  { n: '01', t: 'InferenceEngine', d: 'The pipeline: model_fn → bridge → safe_response → ledger. Plug in any model_fn.' },
  { n: '02', t: 'ConfidenceBridge', d: 'When confidence is low, augment the prompt with retrieved context and re-ask. Autonomous.' },
  { n: '03', t: 'TruthManager', d: 'safe_response(answer, confidence) classifies into low/uncertain/confident.' },
  { n: '04', t: 'Truth Ledger', d: 'Every run recorded to ~/.vitalis_workspace/truth_ledger.json. The replay command prints history.' },
  { n: '05', t: 'CLI: 4 commands', d: 'devcore info, ask, think, replay. All non-interactive one-shot mode for CI.' },
  { n: '06', t: 'Pure-NumPy Kernel', d: 'hdc_engine stub (bind, bundle, similarity, permute). 10000-dim bipolar vectors.' },
];

const STATUS = {
  core: { tests: '11/11', entry: 'fsi-chat', archived: '5' },
  dev: { tests: '13/13', entry: 'devcore', archived: '6' },
};

export function mountVitalis(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="vi-bg" aria-hidden="true">
      <div class="vi-glow"></div>
    </div>

    <div class="container">
      <header class="section-header" data-reveal>
        <div class="section-eyebrow vi-eyebrow">// cognitive engines · consolidated</div>
        <h2 class="section-title">Vitalis</h2>
        <p class="section-lede">Two cognitive engines, one architecture. The exoskeleton that wraps any model.</p>
      </header>

      <div class="vi-grid">

        <!-- Vitalis_core -->
        <article class="vi-card" data-reveal>
          <div class="vi-card-head">
            <div>
              <h3 class="vi-card-title">${CORE.name}</h3>
              <p class="vi-card-tag">${CORE.tagline}</p>
            </div>
            <div class="vi-stats">
              <div class="vi-stat"><div class="vi-stat-value">${STATUS.core.tests}</div><div class="vi-stat-label">Tests</div></div>
              <div class="vi-stat"><div class="vi-stat-value">${STATUS.core.entry}</div><div class="vi-stat-label">Entry</div></div>
              <div class="vi-stat"><div class="vi-stat-value">${STATUS.core.archived}</div><div class="vi-stat-label">Archived</div></div>
            </div>
          </div>
          <p class="vi-card-body">${CORE.description}</p>

          <ol class="vi-chapter-list">
            ${CORE_PILLARS.map((c) => `
              <li class="vi-chapter">
                <div class="vi-chapter-num">${c.n}</div>
                <div class="vi-chapter-body">
                  <h4 class="vi-chapter-title">${c.t}</h4>
                  <p class="vi-chapter-desc">${c.d}</p>
                </div>
              </li>
            `).join('')}
          </ol>

          <div class="vi-cli">
            <span class="vi-cli-prompt">$</span>
            <code>${STATUS.core.entry} --prompt "hello world"</code>
            <span class="vi-cli-out">→ Internal state updated.</span>
          </div>

          <div class="vi-cta">
            <a class="btn btn-primary" href="${CORE.repoUrl}" target="_blank" rel="noopener noreferrer">
              <span>View on GitHub</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
          <p class="vi-status-note"><strong>Status:</strong> ${CORE.demoCopy.status}</p>
        </article>

        <!-- Vitalis_Devcore -->
        <article class="vi-card" data-reveal>
          <div class="vi-card-head">
            <div>
              <h3 class="vi-card-title">${DEV.name}</h3>
              <p class="vi-card-tag">${DEV.tagline}</p>
            </div>
            <div class="vi-stats">
              <div class="vi-stat"><div class="vi-stat-value">${STATUS.dev.tests}</div><div class="vi-stat-label">Tests</div></div>
              <div class="vi-stat"><div class="vi-stat-value">${STATUS.dev.entry}</div><div class="vi-stat-label">Entry</div></div>
              <div class="vi-stat"><div class="vi-stat-value">${STATUS.dev.archived}</div><div class="vi-stat-label">Archived</div></div>
            </div>
          </div>
          <p class="vi-card-body">${DEV.description}</p>

          <ol class="vi-chapter-list">
            ${DEV_SUBSYSTEMS.map((c) => `
              <li class="vi-chapter">
                <div class="vi-chapter-num">${c.n}</div>
                <div class="vi-chapter-body">
                  <h4 class="vi-chapter-title">${c.t}</h4>
                  <p class="vi-chapter-desc">${c.d}</p>
                </div>
              </li>
            `).join('')}
          </ol>

          <div class="vi-cli">
            <span class="vi-cli-prompt">$</span>
            <code>${STATUS.dev.entry} ask "what is sovereign AI?"</code>
            <span class="vi-cli-out">→ { "answer": "...", "confidence": 0.7, ... }</span>
          </div>

          <div class="vi-cta">
            <a class="btn btn-primary" href="${DEV.repoUrl}" target="_blank" rel="noopener noreferrer">
              <span>View on GitHub</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
          <p class="vi-status-note"><strong>Status:</strong> ${DEV.demoCopy.status}</p>
        </article>

      </div>
    </div>
  `;
}

const STYLES = `
.vitalis {
  position: relative;
  background: linear-gradient(180deg, var(--bg-page) 0%, rgba(168, 85, 247, 0.02) 50%, var(--bg-page) 100%);
}
.vi-bg { position: absolute; inset: 0; pointer-events: none; }
.vi-glow {
  position: absolute;
  top: 30%; left: -10%;
  width: 50vw; height: 50vw;
  border-radius: 50%;
  background: var(--accent-vitalis, var(--neon-purple));
  opacity: 0.06;
  filter: blur(160px);
}
.vi-eyebrow { color: var(--accent-vitalis, var(--neon-purple)); }

.vi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin-top: var(--space-12);
}
@media (max-width: 980px) {
  .vi-grid { grid-template-columns: 1fr; }
}

.vi-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  backdrop-filter: blur(12px);
  display: flex; flex-direction: column;
}
.vi-card-head {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: var(--space-4); margin-bottom: var(--space-4);
  flex-wrap: wrap;
}
.vi-card-title { font-size: var(--text-2xl); font-weight: var(--weight-bold); margin: 0 0 var(--space-1); }
.vi-card-tag { color: var(--text-secondary); font-size: var(--text-sm); margin: 0; }
.vi-card-body { color: var(--text-secondary); line-height: var(--leading-relaxed); margin-bottom: var(--space-5); font-size: var(--text-sm); }

.vi-stats { display: flex; gap: var(--space-3); }
.vi-stat {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
  text-align: center;
  min-width: 70px;
}
.vi-stat-value { font-family: var(--font-mono); font-size: var(--text-base); font-weight: var(--weight-bold); color: var(--accent-primary); }
.vi-stat-label { font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

.vi-chapter-list {
  list-style: none; margin: 0 0 var(--space-5); padding: 0;
  display: flex; flex-direction: column; gap: var(--space-2);
}
.vi-chapter {
  display: flex; align-items: flex-start; gap: var(--space-3);
  padding: var(--space-3);
  background: rgba(168, 85, 247, 0.04);
  border: 1px solid rgba(168, 85, 247, 0.1);
  border-radius: var(--radius-lg);
}
.vi-chapter-num {
  font-family: var(--font-mono); font-size: var(--text-base);
  color: var(--accent-vitalis, var(--neon-purple)); font-weight: var(--weight-bold);
  min-width: 2rem;
}
.vi-chapter-title { font-size: var(--text-sm); font-weight: var(--weight-bold); margin: 0 0 2px; color: var(--text-primary); }
.vi-chapter-desc { font-size: var(--text-xs); color: var(--text-secondary); margin: 0; line-height: 1.5; }

.vi-cli {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: var(--radius-md);
  padding: var(--space-3);
  margin-bottom: var(--space-4);
  display: flex; flex-direction: column; gap: 4px;
}
.vi-cli-prompt { color: var(--accent-primary); font-weight: bold; }
.vi-cli code { color: var(--text-primary); }
.vi-cli-out { color: var(--text-muted); padding-left: 1rem; }

.vi-cta { margin-top: auto; }
.vi-status-note {
  margin-top: var(--space-4);
  padding: var(--space-3);
  font-size: var(--text-xs);
  color: var(--text-muted);
  line-height: 1.5;
}
.vi-status-note strong { color: var(--text-secondary); }
`;

if (!document.getElementById('vitalis-styles')) {
  const style = document.createElement('style');
  style.id = 'vitalis-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}
