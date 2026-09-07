/**
 * GhostCode section — concept demo with the user journey terminal
 * The cyan island. Verbatim terminal from the user's own Hero.tsx.
 */

import { repoById } from '../../data/repos.js';

const GC = repoById['ghostcode'];

const STEPS = [
  {
    n: '01', name: 'Target',
    desc: 'Point at any running service — Kubernetes pod, EC2, container, VM. Choose environment: prod, staging, or canary.',
  },
  {
    n: '02', name: 'Authenticate',
    desc: 'Bearer, basic, mTLS, IAM, or API key. Credentials live in the daemon, never in the browser, never in logs.',
  },
  {
    n: '03', name: 'Capture',
    desc: 'Full or shallow snapshot. Include or exclude env vars. Sanitize PII. Mock downstream APIs to prevent real mutations.',
  },
  {
    n: '04', name: 'Clone',
    desc: 'One click. A local sandbox clone on your chosen port. Shield Matrix enforces read-only operation.',
  },
  {
    n: '05', name: 'Replay',
    desc: 'Step forward, step backward. Inspect heap state, call stack, request log, env at any captured moment.',
  },
];

export function mountGhostcode(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="gc-bg" aria-hidden="true">
      <div class="gc-glow"></div>
    </div>

    <div class="container">
      <header class="section-header" data-reveal>
        <div class="section-eyebrow gc-eyebrow">// concept demo</div>
        <h2 class="section-title">${GC.name}</h2>
        <p class="section-lede">${GC.tagline}</p>
        <p class="section-body">${GC.description}</p>
        <div class="gc-badges">
          <span class="badge">Apache-2.0</span>
          <span class="badge">Self-Hosted</span>
          <span class="badge">Zero Telemetry</span>
          <span class="badge badge-cyan">Concept Demo</span>
        </div>
      </header>

      <div class="gc-journey" data-reveal>
        <h3 class="block-title">The user journey</h3>
        <p class="block-lede">This is exactly what the visitor sees in the live UI. Verbatim from the Hero.</p>

        <div class="terminal gc-terminal">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
            </div>
            <span class="terminal-title">
              <span class="terminal-bolt">⚡</span>
              ghostcode attach --target prod-payment-svc
            </span>
          </div>
          <pre class="terminal-body"><span class="terminal-cyan">❯ ghostcode clone k8s://prod-cluster/payments-api</span>
<span class="terminal-muted">  Establishing ephemeral mTLS tunnel...</span>
<span class="terminal-muted">  Synchronizing heap snapshot... [100%]</span>
<span class="terminal-success">  ✔ Zero-pause copy complete (142ms)</span>
<span class="terminal-cyan">  Mounting local ghost instance...</span>
<span class="terminal-muted">  Port 3001 mapped to Ghost ID #8294</span>
<span class="terminal-warning">  ! PII Shield Active: Credit Cards masked</span>
<span class="terminal-cyan">❯ Ready for local debug replay.</span><span class="cursor cursor-cyan"></span></pre>
        </div>
      </div>

      <div class="gc-steps" data-reveal>
        <h3 class="block-title">Five steps. One click.</h3>
        <ol class="gc-step-list">
          ${STEPS.map(
            (s) => `
            <li class="gc-step">
              <div class="gc-step-num">${s.n}</div>
              <div class="gc-step-body">
                <h4 class="gc-step-name">${s.name}</h4>
                <p class="gc-step-desc">${s.desc}</p>
              </div>
            </li>
          `
          ).join('')}
        </ol>
      </div>

      <div class="gc-cta" data-reveal>
        <a class="btn btn-cyan" href="${GC.repoUrl}" target="_blank" rel="noopener noreferrer">
          <span>View on GitHub</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
        <a class="btn btn-secondary" href="#projects">
          <span>Other projects</span>
        </a>
      </div>

      <p class="gc-status-note">
        <strong>Status:</strong> ${GC.demoCopy.status}
      </p>
    </div>
  `;
}

const STYLES = `
.ghostcode {
  position: relative;
  background: linear-gradient(180deg, var(--bg-page) 0%, rgba(34, 211, 238, 0.02) 50%, var(--bg-page) 100%);
}
.gc-bg { position: absolute; inset: 0; pointer-events: none; }
.gc-glow {
  position: absolute;
  top: 40%; right: -10%;
  width: 50vw; height: 50vw;
  border-radius: 50%;
  background: var(--cyan-ghostcode);
  opacity: 0.08;
  filter: blur(160px);
}
.gc-eyebrow { color: var(--cyan-ghostcode); }
.gc-badges { display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-4); }
.badge-cyan {
  background: rgba(34, 211, 238, 0.1);
  border-color: rgba(34, 211, 238, 0.3);
  color: var(--cyan-ghostcode-bright);
}

.gc-journey { margin: var(--space-12) 0; }
.gc-terminal {
  max-width: 800px;
  border-color: rgba(34, 211, 238, 0.2);
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.08), var(--shadow-2xl);
}
.terminal-cyan { color: var(--cyan-ghostcode-bright); }
.cursor-cyan { background: var(--cyan-ghostcode); }
.terminal-bolt { color: var(--cyan-ghostcode); }

.gc-steps { margin: var(--space-16) 0; }
.gc-step-list {
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 800px;
}
.gc-step {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  transition: all var(--duration-normal) var(--ease-out);
}
.gc-step:hover {
  border-color: var(--cyan-ghostcode);
  transform: translateX(4px);
}
.gc-step-num {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  color: var(--cyan-ghostcode);
  min-width: 3rem;
  line-height: 1;
}
.gc-step-name {
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}
.gc-step-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.gc-cta {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-12);
}
.btn-cyan {
  background: var(--cyan-ghostcode);
  color: var(--black-deep);
  font-weight: var(--weight-bold);
  box-shadow: 0 0 20px var(--cyan-ghostcode-glow);
}
.btn-cyan:hover {
  background: var(--cyan-ghostcode-bright);
  transform: translateY(-2px);
  box-shadow: 0 0 40px var(--cyan-ghostcode-glow);
}

.gc-status-note {
  margin-top: var(--space-8);
  padding: var(--space-4) var(--space-5);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  max-width: 800px;
}
.gc-status-note strong { color: var(--text-primary); }
`;

// Inject once
if (!document.getElementById('ghostcode-styles')) {
  const style = document.createElement('style');
  style.id = 'ghostcode-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}