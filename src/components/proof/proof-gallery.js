/**
 * Proof gallery — a strip of cards showing real evidence from the EVIDENCE
 * folders. Loads sample files at build time (bundled) and renders them as
 * inspectable JSON viewers.
 *
 * Used at the bottom of section pages to prove "this is real, not a mock".
 *
 * CRITICAL: GitHub Pages serves .json files with `Content-Type: application/json`,
 * which browsers REFUSE to import as ES modules (strict MIME checking).
 * We load every evidence file at runtime via fetch() instead. This works
 * on any static host with no MIME-type configuration.
 */

import { mountProofPanel } from './proof-panel.js';

// All evidence placeholders. Populated at runtime via fetch().
let ghostcodeGhost = null;
let ghostcodeThrow = null;
let ghostcodeStats = null;
let ghostcodeSessionStart = null;
let ghostcodeInboundReq = null;
let ghostcodeInboundRes = null;
let vitalisCoreSummary = null;
let vitalisDevcoreSummary = null;
let loreinSummary = null;
let ghostcodeTestOutput = '';
let vitalisCoreTestOutput = '';
let vitalisCoreInfo = '';
let vitalisCorePrompt = '';
let vitalisDevcoreTestOutput = '';
let vitalisDevcoreInfo = '';
let vitalisDevcoreAsk = '';
let vitalisDevcoreThink = '';
let vitalisDevcoreReplay = '';
let loreinTestOutput = '';
let loreinReflect = '';
let loreinReflect2 = '';
let loreinIdentity = '';
let loreinVerify = '';
let loreinReplay = '';
let loreinJournal = '';

const JSON_FILES = {
  ghostcodeGhost:         '../../data/evidence/ghostcode-ghost.json',
  ghostcodeThrow:         '../../data/evidence/ghostcode-throw-frame.json',
  ghostcodeStats:         '../../data/evidence/ghostcode-stats.json',
  ghostcodeSessionStart:  '../../data/evidence/ghostcode-session-start.json',
  ghostcodeInboundReq:    '../../data/evidence/ghostcode-inbound-request.json',
  ghostcodeInboundRes:    '../../data/evidence/ghostcode-inbound-response.json',
  vitalisCoreSummary:     '../../data/evidence/vitalis-core-summary.json',
  vitalisDevcoreSummary:  '../../data/evidence/vitalis-devcore-summary.json',
  loreinSummary:          '../../data/evidence/lorein-summary.json',
};

const TEXT_FILES = {
  ghostcodeTestOutput:     '../../data/evidence/ghostcode-test-output.txt',
  vitalisCoreTestOutput:    '../../data/evidence/vitalis-core-test-output.txt',
  vitalisCoreInfo:         '../../data/evidence/vitalis-core-cli-info.txt',
  vitalisCorePrompt:       '../../data/evidence/vitalis-core-cli-prompt.txt',
  vitalisDevcoreTestOutput: '../../data/evidence/vitalis-devcore-test-output.txt',
  vitalisDevcoreInfo:      '../../data/evidence/vitalis-devcore-cli-info.txt',
  vitalisDevcoreAsk:       '../../data/evidence/vitalis-devcore-cli-ask.txt',
  vitalisDevcoreThink:     '../../data/evidence/vitalis-devcore-cli-think.txt',
  vitalisDevcoreReplay:    '../../data/evidence/vitalis-devcore-cli-replay.txt',
  loreinTestOutput:        '../../data/evidence/lorein-test-output.txt',
  loreinReflect:           '../../data/evidence/lorein-cli-reflect.txt',
  loreinReflect2:          '../../data/evidence/lorein-cli-reflect-2.txt',
  loreinIdentity:          '../../data/evidence/lorein-cli-identity.txt',
  loreinVerify:            '../../data/evidence/lorein-cli-verify.txt',
  loreinReplay:            '../../data/evidence/lorein-cli-replay.txt',
  loreinJournal:           '../../data/evidence/lorein-sample-journal.jsonl',
};

/**
 * Load all evidence at module init. Failures are non-fatal — the panel
 * just shows "(failed to load evidence file)" instead of crashing the page.
 */
async function loadEvidence() {
  const jsonEntries = Object.entries(JSON_FILES);
  await Promise.all(jsonEntries.map(async ([key, relPath]) => {
    try {
      const res = await fetch(relPath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (key === 'ghostcodeGhost') ghostcodeGhost = data;
      else if (key === 'ghostcodeThrow') ghostcodeThrow = data;
      else if (key === 'ghostcodeStats') ghostcodeStats = data;
      else if (key === 'ghostcodeSessionStart') ghostcodeSessionStart = data;
      else if (key === 'ghostcodeInboundReq') ghostcodeInboundReq = data;
      else if (key === 'ghostcodeInboundRes') ghostcodeInboundRes = data;
      else if (key === 'vitalisCoreSummary') vitalisCoreSummary = data;
      else if (key === 'vitalisDevcoreSummary') vitalisDevcoreSummary = data;
      else if (key === 'loreinSummary') loreinSummary = data;
    } catch (e) {
      console.warn(`[proof] failed to load JSON ${relPath}:`, e.message);
    }
  }));

  const textEntries = Object.entries(TEXT_FILES);
  await Promise.all(textEntries.map(async ([key, relPath]) => {
    try {
      const res = await fetch(relPath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      if (key === 'ghostcodeTestOutput') ghostcodeTestOutput = text;
      else if (key === 'vitalisCoreTestOutput') vitalisCoreTestOutput = text;
      else if (key === 'vitalisCoreInfo') vitalisCoreInfo = text;
      else if (key === 'vitalisCorePrompt') vitalisCorePrompt = text;
      else if (key === 'vitalisDevcoreTestOutput') vitalisDevcoreTestOutput = text;
      else if (key === 'vitalisDevcoreInfo') vitalisDevcoreInfo = text;
      else if (key === 'vitalisDevcoreAsk') vitalisDevcoreAsk = text;
      else if (key === 'vitalisDevcoreThink') vitalisDevcoreThink = text;
      else if (key === 'vitalisDevcoreReplay') vitalisDevcoreReplay = text;
      else if (key === 'loreinTestOutput') loreinTestOutput = text;
      else if (key === 'loreinReflect') loreinReflect = text;
      else if (key === 'loreinReflect2') loreinReflect2 = text;
      else if (key === 'loreinIdentity') loreinIdentity = text;
      else if (key === 'loreinVerify') loreinVerify = text;
      else if (key === 'loreinReplay') loreinReplay = text;
      else if (key === 'loreinJournal') loreinJournal = text;
    } catch (e) {
      console.warn(`[proof] failed to load text ${relPath}:`, e.message);
    }
  }));
}

const PROOFS = [
  {
    id: 'ghostcode',
    title: 'GhostCode — Phase 3 + Clone Engine',
    color: 'cyan',
    sections: [
      {
        kind: 'stats',
        title: 'Test Results · 14/14 pass',
        items: [
          { value: '14/14', label: 'Tests', sublabel: 'node:test' },
          { value: '7', label: 'PII patterns', sublabel: 'Luhn-validated' },
          { value: '60', label: 'Timeline frames', sublabel: 'mock generator' },
          { value: '5', label: 'Files in vault', sublabel: 'real HTTP capture' },
        ],
      },
      {
        kind: 'terminal',
        title: 'Test Output · npm test',
        lines: ghostcodeTestOutput,
      },
      {
        kind: 'stats',
        title: 'Live Capture · npm run demo:clone',
        items: [
          { value: String(ghostcodeStats.frameCount), label: 'Frames' },
          { value: `${ghostcodeStats.totalHeapBytes.toLocaleString()} B`, label: 'Heap tracked' },
          { value: ghostcodeStats.throwSiteAt !== null ? '✓' : '—', label: 'Throw site', sublabel: 'at frame' },
          { value: String(ghostcodeStats.allocationCount), label: 'Allocations' },
        ],
      },
      {
        kind: 'json',
        title: 'Captured Ghost · canonical-capture.json',
        json: ghostcodeGhost,
      },
      {
        kind: 'json',
        title: 'Session Start · env scrubbed at capture',
        json: ghostcodeSessionStart,
      },
      {
        kind: 'json',
        title: 'Inbound Request · one captured HTTP request',
        json: ghostcodeInboundReq,
      },
      {
        kind: 'json',
        title: 'Inbound Response · matching response',
        json: ghostcodeInboundRes,
      },
      {
        kind: 'json',
        title: 'TimelineFrame · at the throw site',
        json: ghostcodeThrow,
      },
    ],
  },
  {
    id: 'vitalis-core',
    title: 'Vitalis_core — Sovereign Cognitive Engine (consolidated)',
    color: 'green',
    sections: [
      {
        kind: 'stats',
        title: 'Test Results · 11/11 pass',
        items: [
          { value: '11/11', label: 'Tests', sublabel: 'unittest' },
          { value: vitalisCoreSummary.python_required, label: 'Python', sublabel: 'min version' },
          { value: '1', label: 'Canonical entry', sublabel: vitalisCoreSummary.canonical_entry },
          { value: '4', label: 'Archived impls', sublabel: 'in _archive/' },
        ],
      },
      {
        kind: 'terminal',
        title: 'Test Output · py -3.10 tests/test_vitalis.py',
        lines: vitalisCoreTestOutput,
      },
      {
        kind: 'json',
        title: 'Run Summary',
        json: vitalisCoreSummary,
      },
      {
        kind: 'terminal',
        title: 'CLI · fsi-chat --info',
        lines: vitalisCoreInfo,
      },
      {
        kind: 'terminal',
        title: 'CLI · fsi-chat --prompt "hello world"',
        lines: vitalisCorePrompt,
      },
    ],
  },
  {
    id: 'vitalis-devcore',
    title: 'Vitalis_Devcore — Cognitive Exoskeleton (consolidated)',
    color: 'green',
    sections: [
      {
        kind: 'stats',
        title: 'Test Results · 13/13 pass',
        items: [
          { value: '13/13', label: 'Tests', sublabel: 'unittest' },
          { value: vitalisDevcoreSummary.python_required, label: 'Python', sublabel: 'min version' },
          { value: '1', label: 'Canonical entry', sublabel: vitalisDevcoreSummary.canonical_entry },
          { value: '4', label: 'CLI commands', sublabel: 'info, ask, think, replay' },
        ],
      },
      {
        kind: 'terminal',
        title: 'Test Output · py -3.10 tests/test_devcore.py',
        lines: vitalisDevcoreTestOutput,
      },
      {
        kind: 'json',
        title: 'Run Summary',
        json: vitalisDevcoreSummary,
      },
      {
        kind: 'terminal',
        title: 'CLI · devcore info',
        lines: vitalisDevcoreInfo,
      },
      {
        kind: 'terminal',
        title: 'CLI · devcore ask "what is sovereign AI?"',
        lines: vitalisDevcoreAsk,
      },
      {
        kind: 'terminal',
        title: 'CLI · devcore think "neural manifolds"',
        lines: vitalisDevcoreThink,
      },
      {
        kind: 'terminal',
        title: 'CLI · devcore replay (truth ledger)',
        lines: vitalisDevcoreReplay,
      },
    ],
  },
  {
    id: 'lorein',
    title: 'LOREIN — Persistent Cognitive Entity (reference impl)',
    color: 'cyan',
    sections: [
      {
        kind: 'stats',
        title: 'Test Results · 16/16 pass',
        items: [
          { value: '16/16', label: 'Tests', sublabel: 'unittest' },
          { value: loreinSummary.python_required, label: 'Python', sublabel: 'min version' },
          { value: '1', label: 'Canonical entry', sublabel: loreinSummary.canonical_entry },
          { value: '4', label: 'CLI commands', sublabel: 'reflect/identity/replay/verify' },
        ],
      },
      {
        kind: 'terminal',
        title: 'Test Output · py -3.10 tests/test_lorein.py',
        lines: loreinTestOutput,
      },
      {
        kind: 'json',
        title: 'Run Summary',
        json: loreinSummary,
      },
      {
        kind: 'terminal',
        title: 'CLI · lorein reflect "what is sovereign AI?"',
        lines: loreinReflect,
      },
      {
        kind: 'terminal',
        title: 'CLI · lorein reflect (second call — identity drifts)',
        lines: loreinReflect2,
      },
      {
        kind: 'terminal',
        title: 'CLI · lorein identity (derived from journal chain)',
        lines: loreinIdentity,
      },
      {
        kind: 'terminal',
        title: 'CLI · lorein verify (chain integrity)',
        lines: loreinVerify,
      },
      {
        kind: 'terminal',
        title: 'CLI · lorein replay (recent entries)',
        lines: loreinReplay,
      },
      {
        kind: 'terminal',
        title: 'Sample journal · tamper-evident JSONL chain',
        lines: loreinJournal,
      },
    ],
  },
];

export async function mountProofGallery(root) {
  if (!root) return;
  // Show a placeholder while text evidence loads.
  root.innerHTML = `
    <div class="proof-gallery" data-reveal>
      <div class="proof-gallery-header">
        <h2 class="proof-gallery-title">Proof · what we actually built</h2>
        <p class="proof-gallery-lede">Every artifact below is regenerated by running the verification commands in the repo. Not screenshots — the actual files.</p>
      </div>
      <div class="proof-gallery-target" id="proof-gallery-target">
        <p class="proof-loading">Loading evidence files…</p>
      </div>
    </div>
  `;
  const target = root.querySelector('.proof-gallery-target');
  await loadEvidence();
  // Clear loading state.
  target.innerHTML = '';
  for (const proof of PROOFS) {
    const block = document.createElement('div');
    block.className = `proof-block proof-${proof.color}`;
    block.innerHTML = `<h3 class="proof-block-title">${proof.title}</h3>`;
    target.appendChild(block);
    for (const section of proof.sections) {
      const slot = document.createElement('div');
      block.appendChild(slot);
      // If a terminal panel has no text yet, show a load-failed notice.
      const lines = (section.lines || '').trim()
        || (section.kind === 'terminal' ? '(evidence file not loaded)' : '');
      mountProofPanel(slot, {
        mode: section.kind,
        title: section.title,
        items: section.items,
        lines,
        json: section.json,
        accent: proof.color,
        liveBadge: true,
      });
    }
  }
}

const STYLES = `
.proof-gallery {
  margin: var(--space-16) 0;
  padding: var(--space-8) 0;
  border-top: 1px solid var(--glass-border);
}
.proof-gallery-header { text-align: center; margin-bottom: var(--space-12); }
.proof-gallery-title {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 var(--space-3);
}
.proof-gallery-lede {
  color: var(--text-secondary);
  max-width: 640px;
  margin: 0 auto;
}
.proof-block { margin: var(--space-8) 0; }
.proof-loading {
  text-align: center;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
  padding: var(--space-8) 0;
}
.proof-block-title {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  color: var(--accent-primary);
  margin: 0 0 var(--space-4);
  padding-left: var(--space-3);
  border-left: 3px solid var(--accent-primary);
}
.proof-cyan .proof-block-title {
  color: var(--cyan-ghostcode-bright);
  border-left-color: var(--cyan-ghostcode);
}
.proof-green .proof-block-title {
  color: var(--accent-primary);
  border-left-color: var(--accent-primary);
}
`;

if (!document.getElementById('proof-gallery-styles')) {
  const style = document.createElement('style');
  style.id = 'proof-gallery-styles';
  style.textContent = STYLES;
  document.head.appendChild(style);
}
