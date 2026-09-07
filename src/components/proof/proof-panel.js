/**
 * Proof panel — displays verification artifacts (test output, sample data,
 * captured frames) inline on the portfolio site. Renders JSON, terminal
 * output, or stat cards.
 *
 * Three render modes:
 *   - "stats":     grid of stat cards
 *   - "terminal":  pre-formatted text (test output, transcript)
 *   - "json":      syntax-highlighted JSON viewer (click to expand)
 */

export function mountProofPanel(root, opts) {
  if (!root) return;
  const { mode, title, items, lines, json, accent = 'green', liveBadge = false } = opts;
  root.innerHTML = `
    <div class="proof-panel proof-${accent}" data-reveal>
      <div class="proof-header">
        <h3 class="proof-title">${escapeHtml(title)}</h3>
        ${liveBadge ? '<span class="proof-badge">live from disk</span>' : ''}
      </div>
      <div class="proof-body">
        ${mode === 'stats' ? renderStats(items) : ''}
        ${mode === 'terminal' ? renderTerminal(lines) : ''}
        ${mode === 'json' ? renderJson(json) : ''}
      </div>
    </div>
  `;
}

function renderStats(items) {
  return `
    <div class="proof-stats">
      ${items.map((it) => `
        <div class="proof-stat">
          <div class="proof-stat-value">${escapeHtml(it.value)}</div>
          <div class="proof-stat-label">${escapeHtml(it.label)}</div>
          ${it.sublabel ? `<div class="proof-stat-sub">${escapeHtml(it.sublabel)}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderTerminal(lines) {
  return `
    <pre class="proof-terminal">${escapeHtml(lines)}</pre>
  `;
}

function renderJson(obj) {
  const text = typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2);
  return `
    <details class="proof-json" open>
      <summary>click to collapse</summary>
      <pre>${escapeHtml(text)}</pre>
    </details>
  `;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

const STYLES = `
.proof-panel {
  margin: var(--space-8) 0;
  padding: var(--space-6);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  backdrop-filter: blur(12px);
}
.proof-cyan { border-color: rgba(34, 211, 238, 0.3); }
.proof-green { border-color: rgba(0, 255, 65, 0.3); }
.proof-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
}
.proof-title {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-primary);
  margin: 0;
}
.proof-cyan .proof-title { color: var(--cyan-ghostcode-bright); }
.proof-green .proof-title { color: var(--accent-primary); }
.proof-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(0, 255, 65, 0.1);
  color: var(--accent-primary);
  border: 1px solid rgba(0, 255, 65, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.proof-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: var(--space-3);
}
.proof-stat {
  padding: var(--space-4);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  text-align: center;
}
.proof-stat-value {
  font-family: var(--font-mono);
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  line-height: 1.1;
}
.proof-cyan .proof-stat-value { color: var(--cyan-ghostcode-bright); }
.proof-green .proof-stat-value { color: var(--accent-primary); }
.proof-stat-label {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: var(--space-1);
}
.proof-stat-sub {
  font-size: 10px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin-top: 2px;
}
.proof-terminal {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: 1.6;
  color: var(--text-secondary);
  background: rgba(0, 0, 0, 0.5);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  max-height: 400px;
  overflow: auto;
  white-space: pre-wrap;
  margin: 0;
}
.proof-terminal .check { color: var(--accent-primary); }
.proof-terminal .cross { color: #ff5c5c; }
.proof-json {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
.proof-json summary {
  cursor: pointer;
  color: var(--text-muted);
  font-size: 10px;
  margin-bottom: var(--space-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.proof-json pre {
  background: rgba(0, 0, 0, 0.5);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  color: var(--cyan-ghostcode);
  max-height: 500px;
  overflow: auto;
  margin: 0;
  line-height: 1.5;
}
`;

if (!document.getElementById('proof-panel-styles')) {
  const style = document.createElement('style');
  style.id = 'proof-panel-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}
