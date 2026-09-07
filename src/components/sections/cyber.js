/**
 * Cyber SOP Harness section — the 5-step governance loop
 * Neon blue accent. The most production-ready project.
 */

import { repoById } from '../../data/repos.js';

const CSH = repoById['cyber-sop-harness'];

const STEPS = [
  { n: '01', name: 'Policy', desc: 'PolicyEngine evaluates the action against capabilities, scope, and authorization.' },
  { n: '02', name: 'Permit', desc: 'PermitIssuer creates a cryptographically signed one-use permit. Scoped. Replay-protected.' },
  { n: '03', name: 'Tool', desc: 'ToolBroker dispatches the permit to typed tool adapters. Evidence captured at every step.' },
  { n: '04', name: 'Evidence', desc: 'DurableEvidenceJournal appends every action, every output, every credential use.' },
  { n: '05', name: 'Verified', desc: 'ProvenanceAuthority signs the evidence chain. Offline-verifiable. Tamper-evident.' },
];

const KEY_TYPES = [
  { n: 'PolicyEngine', d: 'Evaluates actions against capabilities, scope, authorization' },
  { n: 'PermitIssuer', d: 'Cryptographically signed one-use permits' },
  { n: 'ToolBroker', d: 'Dispatches permits to typed tool adapters' },
  { n: 'EvidenceLedger', d: 'Append-only evidence storage' },
  { n: 'ProvenanceAuthority', d: 'Signs and verifies evidence chains' },
  { n: 'IModelProviderAdapter', d: 'Extension point for new model providers' },
];

export function mountCyber(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="cy-bg" aria-hidden="true">
      <div class="cy-glow"></div>
    </div>

    <div class="container">
      <header class="section-header" data-reveal>
        <div class="section-eyebrow cy-eyebrow">// security & governance</div>
        <h2 class="section-title">${CSH.name}</h2>
        <p class="section-lede">${CSH.tagline}</p>
        <p class="section-body">${CSH.description}</p>
        <div class="cy-badges">
          <span class="badge">MIT</span>
          <span class="badge">C# / .NET</span>
          <span class="badge badge-blue">44 tests, all green</span>
          <span class="badge badge-blue">Development Preview</span>
        </div>
      </header>

      <div class="cy-loop" data-reveal>
        <h3 class="block-title">The five-step governance loop</h3>
        <p class="block-lede">Every action an AI takes against a security tool goes through these five stages. Policy, permit, tool, evidence, verified.</p>
        <ol class="cy-steps">
          ${STEPS.map(
            (s, i) => `
            <li class="cy-step" style="--i:${i}">
              <div class="cy-step-num">${s.n}</div>
              <div class="cy-step-arrow" aria-hidden="true">${i < STEPS.length - 1 ? '→' : '↻'}</div>
              <div class="cy-step-body">
                <h4 class="cy-step-name">${s.name}</h4>
                <p class="cy-step-desc">${s.desc}</p>
              </div>
            </li>
          `
          ).join('')}
        </ol>
      </div>

      <div class="cy-types" data-reveal>
        <h3 class="block-title">Key types</h3>
        <p class="block-lede">The contracts you embed. Extend any of them. The policy engine, permit system, and evidence chain are stable.</p>
        <div class="cy-types-grid">
          ${KEY_TYPES.map(
            (t) => `
            <div class="cy-type">
              <code class="cy-type-name">${t.n}</code>
              <p class="cy-type-desc">${t.d}</p>
            </div>
          `
          ).join('')}
        </div>
      </div>

      <div class="cy-testimonial" data-reveal>
        <h3 class="block-title">Test coverage, honestly labeled</h3>
        <p class="block-lede">"The gap between '44 tests pass' and 'production-ready' is real. The tests prove the contracts work under deterministic conditions."</p>
        <div class="cy-test-grid">
          <div class="cy-test"><span class="cy-test-bullet">✓</span> Policy engine decisions</div>
          <div class="cy-test"><span class="cy-test-bullet">✓</span> Permit lifecycle</div>
          <div class="cy-test"><span class="cy-test-bullet">✓</span> Redirect chain scope</div>
          <div class="cy-test"><span class="cy-test-bullet">✓</span> Evidence journal integrity</div>
          <div class="cy-test"><span class="cy-test-bullet">✓</span> Provenance key rotation</div>
          <div class="cy-test"><span class="cy-test-bullet">✓</span> DNS pinning</div>
          <div class="cy-test"><span class="cy-test-bullet">✓</span> Header redaction</div>
          <div class="cy-test"><span class="cy-test-bullet">✓</span> Engagement manifest validation</div>
        </div>
      </div>

      <div class="cy-cta" data-reveal>
        <a class="btn btn-blue" href="${CSH.repoUrl}" target="_blank" rel="noopener noreferrer">
          <span>View on GitHub</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  `;
}

const STYLES = `
.cyber {
  position: relative;
  background: linear-gradient(180deg, var(--bg-page) 0%, rgba(59, 130, 246, 0.02) 50%, var(--bg-page) 100%);
}
.cy-bg { position: absolute; inset: 0; pointer-events: none; }
.cy-glow {
  position: absolute;
  top: 30%; left: -10%;
  width: 60vw; height: 60vw;
  border-radius: 50%;
  background: var(--blue-neon);
  opacity: 0.08;
  filter: blur(160px);
}
.cy-eyebrow { color: var(--blue-neon-bright); }
.cy-badges { display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-4); }
.badge-blue {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
  color: var(--blue-neon-bright);
}

.cy-loop { margin: var(--space-16) 0; }
.cy-steps {
  list-style: none;
  margin: var(--space-8) 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
}
.cy-step {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  transition: all var(--duration-normal) var(--ease-out);
}
.cy-step:hover {
  border-color: var(--blue-neon);
  transform: translateX(4px);
}
.cy-step-num {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  color: var(--blue-neon-bright);
  min-width: 3rem;
  line-height: 1;
}
.cy-step-arrow {
  font-size: var(--text-2xl);
  color: var(--blue-neon);
  font-weight: var(--weight-bold);
}
.cy-step-name {
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}
.cy-step-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.cy-types { margin: var(--space-16) 0; }
.cy-types-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  margin-top: var(--space-6);
}
@media (max-width: 600px) { .cy-types-grid { grid-template-columns: 1fr; } }
.cy-type {
  padding: var(--space-4) var(--space-5);
  background: var(--black-elevated);
  border: 1px solid var(--black-border-bright);
  border-radius: var(--radius-xl);
}
.cy-type-name {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--blue-neon-bright);
  font-weight: var(--weight-bold);
  display: block;
  margin-bottom: var(--space-2);
}
.cy-type-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.cy-testimonial { margin: var(--space-16) 0; }
.cy-test-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-2);
  margin-top: var(--space-6);
  max-width: 800px;
}
@media (max-width: 600px) { .cy-test-grid { grid-template-columns: 1fr; } }
.cy-test {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  color: var(--text-primary);
}
.cy-test-bullet {
  color: var(--blue-neon-bright);
  font-weight: var(--weight-bold);
}

.cy-cta {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-12);
}
.btn-blue {
  background: var(--blue-neon);
  color: var(--white-pure);
  font-weight: var(--weight-bold);
  box-shadow: 0 0 20px var(--blue-neon-glow);
}
.btn-blue:hover {
  background: var(--blue-neon-bright);
  transform: translateY(-2px);
  box-shadow: 0 0 40px var(--blue-neon-glow);
}
`;

// Inject once
if (!document.getElementById('cyber-styles')) {
  const style = document.createElement('style');
  style.id = 'cyber-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}