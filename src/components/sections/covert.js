/**
 * Covert Coder public product surface.
 *
 * This section intentionally describes the product boundary and current
 * release truth. It does not connect to a workstation, execute work, or
 * imply that the public site is an operational Resident surface.
 */

const FLOW = [
  ['01', 'Operator', 'states the objective'],
  ['02', 'Resident', 'keeps the project legible'],
  ['03', 'Workflow', 'makes the next stage explicit'],
  ['04', 'Authority', 'bounds mutations'],
  ['05', 'Harness', 'performs the governed work'],
  ['06', 'Veritas', 'checks machine evidence'],
];

const PRINCIPLES = [
  {
    title: 'One project truth',
    text: 'The worker is replaceable. Project identity, workflow state, constraints, evidence, and next step belong to Covert.',
  },
  {
    title: 'Local by default',
    text: 'Covert is being built around local models and local tools. External providers are optional surfaces, not the public product baseline.',
  },
  {
    title: 'Proof over confidence',
    text: 'A worker response is not verification. The product must keep claims, execution, and deterministic evidence distinguishable.',
  },
];

export function mountCovert(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="covert-bg" aria-hidden="true"><div class="covert-glow"></div></div>
    <div class="container">
      <header class="section-header" data-reveal>
        <div class="section-eyebrow">// covert coder</div>
        <h2 class="section-title">One workbench. One project truth.</h2>
        <p class="section-lede">Covert is a local-first developer workbench built to keep context, authority, execution, and evidence connected while workers change.</p>
      </header>

      <div class="covert-status glass" data-reveal role="status">
        <span class="covert-status-dot" aria-hidden="true"></span>
        <div>
          <strong>Public release certification: in progress</strong>
          <p>The source and evidence are public. The full outside-user release path is not represented as certified until a candidate passes the independent examination.</p>
        </div>
      </div>

      <div class="covert-principles" data-reveal>
        ${PRINCIPLES.map((item, index) => `
          <article class="covert-card">
            <div class="covert-card-num">0${index + 1}</div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join('')}
      </div>

      <div class="covert-loop glass" data-reveal>
        <div class="covert-loop-heading">
          <div class="section-eyebrow">// system boundary</div>
          <h3>Many workers. One governed loop.</h3>
          <p>Remote surfaces may observe or request work; they do not create a second Resident, authority system, or project database.</p>
        </div>
        <ol class="covert-flow" aria-label="Covert governed workflow">
          ${FLOW.map(([number, name, detail]) => `
            <li class="covert-flow-step">
              <span class="covert-flow-num">${number}</span>
              <strong>${name}</strong>
              <span>${detail}</span>
            </li>
          `).join('')}
        </ol>
      </div>

      <div class="covert-cta" data-reveal>
        <a class="btn btn-primary" href="https://github.com/AnonymousNomad/aide-sovereign-workbench" target="_blank" rel="noopener noreferrer">View Covert on GitHub <span aria-hidden="true">→</span></a>
        <a class="btn btn-secondary" href="#public-resident">Public read-only guide</a>
      </div>
    </div>
  `;
}

const STYLES = `
.covert { position: relative; overflow: hidden; }
.covert-bg { position: absolute; inset: 0; pointer-events: none; }
.covert-glow {
  position: absolute; width: 70vw; height: 45vw; max-width: 900px;
  top: 15%; left: 45%; transform: translateX(-50%);
  border-radius: 50%; background: var(--blue-neon); opacity: 0.08; filter: blur(150px);
}
.covert > .container { position: relative; z-index: 1; }
.covert .section-eyebrow { color: var(--blue-neon-bright); }
.covert-status {
  display: flex; align-items: flex-start; gap: var(--space-4);
  max-width: 820px; padding: var(--space-5); margin-bottom: var(--space-8);
}
.covert-status-dot { flex: 0 0 auto; width: 10px; height: 10px; margin-top: 0.45rem; border-radius: 50%; background: var(--accent-warning); box-shadow: 0 0 10px rgba(245, 158, 11, 0.45); }
.covert-status strong { color: var(--text-primary); font-size: var(--text-base); }
.covert-status p { margin-top: var(--space-2); color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed); }
.covert-principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); margin: var(--space-12) 0; }
.covert-card { padding: var(--space-6); border: 1px solid var(--glass-border); border-radius: var(--radius-2xl); background: var(--glass-bg); }
.covert-card-num { color: var(--blue-neon-bright); font: var(--weight-bold) var(--text-xs) var(--font-mono); letter-spacing: var(--tracking-widest); margin-bottom: var(--space-4); }
.covert-card h3 { color: var(--text-primary); font-size: var(--text-xl); margin-bottom: var(--space-3); }
.covert-card p { color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed); }
.covert-loop { padding: var(--space-8); }
.covert-loop-heading { max-width: 62ch; margin-bottom: var(--space-8); }
.covert-loop-heading h3 { font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl)); margin-bottom: var(--space-3); }
.covert-loop-heading p { color: var(--text-secondary); line-height: var(--leading-relaxed); }
.covert-flow { list-style: none; display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-2); margin: 0; padding: 0; }
.covert-flow-step { display: flex; flex-direction: column; gap: var(--space-2); min-height: 120px; padding: var(--space-4); border: 1px solid var(--black-border-bright); border-radius: var(--radius-xl); background: var(--black-elevated); }
.covert-flow-num { color: var(--blue-neon-bright); font: var(--weight-bold) var(--text-xs) var(--font-mono); }
.covert-flow-step strong { color: var(--text-primary); }
.covert-flow-step span:last-child { color: var(--text-tertiary); font-size: var(--text-xs); line-height: var(--leading-relaxed); }
.covert-cta { display: flex; flex-wrap: wrap; gap: var(--space-3); margin-top: var(--space-8); }
@media (max-width: 900px) { .covert-principles { grid-template-columns: 1fr; } .covert-flow { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px) { .covert-status { padding: var(--space-4); } .covert-loop { padding: var(--space-5); } .covert-flow { grid-template-columns: repeat(2, 1fr); } }
`;

if (!document.getElementById('covert-styles')) {
  const style = document.createElement('style');
  style.id = 'covert-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}
