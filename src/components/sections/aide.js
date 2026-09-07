/**
 * AIDE Sovereign Workbench section — flagship detail
 * The 9-step closed loop expanded, the 3 model pack badges,
 * the capsule concept, the reproduce command
 */

import { repoById } from '../../data/repos.js';

const AIDE = repoById['aide-sovereign-workbench'];

const LOOP_DETAIL = [
  {
    num: '01', name: 'guard',
    desc: 'Inputs are validated against zod-strict contracts before they reach the kernel. Fail closed.',
    ev: 'Veritas evidence gate',
  },
  {
    num: '02', name: 'retrieve',
    desc: 'Workspace context, model state, and prior patterns are loaded from local capsules.',
    ev: 'Local-only retrieval',
  },
  {
    num: '03', name: 'plan',
    desc: 'The SovereignKernel maps the approach using the active model and its operator contracts.',
    ev: 'Operator-typed plan',
  },
  {
    num: '04', name: 'propose',
    desc: 'A candidate patch is produced. The diff is shown — never auto-applied.',
    ev: 'Diff-only proposal',
  },
  {
    num: '05', name: 'verify',
    desc: 'Calibrated Veritas evidence gates run. The patch is judged on evidence, not on confidence.',
    ev: 'Veritas gate',
  },
  {
    num: '06', name: 'revise',
    desc: 'If verification fails, the kernel iterates. Patterns from prior successes are reused.',
    ev: 'Reuse successful patterns',
  },
  {
    num: '07', name: 'test',
    desc: 'The full test suite runs. E2E tests against the real daemon. Arch tests against contracts.',
    ev: '265 arch + 17 E2E',
  },
  {
    num: '08', name: 'review',
    desc: 'You, the operator, review the diff. Nothing ships without explicit approval.',
    ev: 'Operator gate',
  },
  {
    num: '09', name: 'learn',
    desc: 'Successful patterns are stored. The kernel gets sharper with every accepted change.',
    ev: 'Persistent pattern store',
  },
];

const MODEL_PACKS = [
  { name: 'SmolLM2 360M', role: 'chat · planning', size: '360M' },
  { name: 'Qwen2.5-Coder 0.5B', role: 'autocomplete', size: '0.5B' },
  { name: 'Qwen2.5-Coder 1.5B', role: 'primary coding', size: '1.5B' },
];

export function mountAide(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="aide-bg" aria-hidden="true">
      <div class="aide-glow"></div>
    </div>

    <div class="container">
      <header class="section-header" data-reveal>
        <div class="section-eyebrow">// flagship</div>
        <h2 class="section-title">${AIDE.name}</h2>
        <p class="section-lede">${AIDE.tagline}</p>
        <p class="section-body">${AIDE.description}</p>
      </header>

      <div class="aide-quickstart glass" data-reveal>
        <div class="qs-header">
          <span class="qs-label">Quickstart</span>
          <span class="qs-time">~ 60 seconds</span>
        </div>
        <div class="terminal qs-terminal">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
            </div>
            <span class="terminal-title">~/projects/anything — bash</span>
          </div>
          <pre class="terminal-body"><span class="terminal-muted">$</span> <span class="terminal-prompt">npm install</span>
<span class="terminal-muted">$</span> <span class="terminal-prompt">npm run doctor</span>
<span class="terminal-success">✔ llama-server found at ./bin/llama-server</span>
<span class="terminal-success">✔ Qwen2.5-Coder 1.5B GGUF verified</span>
<span class="terminal-muted">$</span> <span class="terminal-prompt">npm start</span>
<span class="terminal-info">  VITE v5.2.0  ready in 412 ms</span>
<span class="terminal-info">  ➜  Local:   http://127.0.0.1:4173/</span>
<span class="terminal-success">✔ AIDE Sovereign Workbench is online</span><span class="cursor"></span></pre>
        </div>
      </div>

      <div class="aide-models" data-reveal>
        <h3 class="block-title">3 model packs. Local. Yours.</h3>
        <div class="model-grid">
          ${MODEL_PACKS.map(
            (m) => `
            <div class="model-card">
              <div class="model-marker" aria-hidden="true"></div>
              <div class="model-name">${m.name}</div>
              <div class="model-role">${m.role}</div>
              <div class="model-meta">
                <span class="badge">${m.size}</span>
                <span class="badge">Apache-2.0</span>
              </div>
            </div>
          `
          ).join('')}
        </div>
      </div>

      <div class="aide-loop" data-reveal>
        <h3 class="block-title">The closed loop, expanded</h3>
        <p class="block-lede">Every change goes through these nine stages. Evidence at every gate. Nothing ships untraced.</p>
        <ol class="loop-grid">
          ${LOOP_DETAIL.map(
            (s) => `
            <li class="loop-card">
              <div class="loop-card-num">${s.num}</div>
              <div class="loop-card-name">${s.name}</div>
              <div class="loop-card-desc">${s.desc}</div>
              <div class="loop-card-ev">${s.ev}</div>
            </li>
          `
          ).join('')}
        </ol>
      </div>

      <div class="aide-cta" data-reveal>
        <a class="btn btn-primary" href="${AIDE.repoUrl}" target="_blank" rel="noopener noreferrer">
          <span>View on GitHub</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
        <a class="btn btn-secondary" href="#projects">
          <span>Other projects</span>
        </a>
      </div>
    </div>
  `;
}

const STYLES = `
.aide {
  position: relative;
  background: linear-gradient(180deg, var(--bg-page) 0%, rgba(0, 255, 65, 0.02) 50%, var(--bg-page) 100%);
}
.aide-bg { position: absolute; inset: 0; pointer-events: none; }
.aide-glow {
  position: absolute;
  top: 30%; left: 50%;
  transform: translateX(-50%);
  width: 80vw; height: 60vw;
  max-width: 1000px;
  border-radius: 50%;
  background: var(--green-matrix);
  opacity: 0.06;
  filter: blur(160px);
}

.aide .section-eyebrow { color: var(--green-matrix); }
.aide .section-body {
  max-width: 70ch;
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-top: var(--space-4);
}

.aide-quickstart {
  padding: var(--space-5);
  margin: var(--space-12) 0;
  max-width: 800px;
}
.qs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
}
.qs-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
}
.qs-time {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--green-matrix);
}
.terminal-title {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-tertiary);
}

.aide-models { margin: var(--space-16) 0; }
.block-title {
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-3);
  color: var(--text-primary);
}
.block-lede {
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
  max-width: 60ch;
}
.model-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
@media (max-width: 768px) { .model-grid { grid-template-columns: 1fr; } }
.model-card {
  padding: var(--space-6);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  transition: all var(--duration-normal) var(--ease-out);
}
.model-card:hover {
  border-color: var(--green-matrix);
  transform: translateY(-2px);
}
.model-marker {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--green-matrix);
  box-shadow: 0 0 8px var(--green-matrix-glow);
  margin-bottom: var(--space-3);
}
.model-name {
  font-family: var(--font-mono);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}
.model-role {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-3);
}
.model-meta {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.aide-loop { margin: var(--space-16) 0; }
.loop-grid {
  list-style: none;
  margin: 0; padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}
@media (max-width: 900px) { .loop-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .loop-grid { grid-template-columns: 1fr; } }
.loop-card {
  padding: var(--space-5);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  display: flex; flex-direction: column;
  gap: var(--space-2);
  transition: all var(--duration-normal) var(--ease-out);
}
.loop-card:hover {
  border-color: var(--green-matrix);
  transform: translateY(-2px);
}
.loop-card-num {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--green-matrix);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-wide);
}
.loop-card-name {
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
}
.loop-card-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  flex: 1;
}
.loop-card-ev {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--green-matrix);
  padding-top: var(--space-2);
  border-top: 1px solid var(--black-border);
  margin-top: var(--space-2);
}

.aide-cta {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-12);
}
`;

// Inject once
if (!document.getElementById('aide-styles')) {
  const style = document.createElement('style');
  style.id = 'aide-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}