/**
 * Proof gallery — a strip of cards showing real evidence from the EVIDENCE
 * folders. Loads sample files at build time (bundled) and renders them as
 * inspectable JSON viewers.
 *
 * Used at the bottom of section pages to prove "this is real, not a mock".
 */

import { mountProofPanel } from './proof-panel.js';
import ghostcodeGhost from '../../data/evidence/ghostcode-ghost.json';
import ghostcodeThrow from '../../data/evidence/ghostcode-throw-frame.json';
import ghostcodeStats from '../../data/evidence/ghostcode-stats.json';
import ghostcodeSessionStart from '../../data/evidence/ghostcode-session-start.json';
import ghostcodeInboundReq from '../../data/evidence/ghostcode-inbound-request.json';
import ghostcodeInboundRes from '../../data/evidence/ghostcode-inbound-response.json';
import ghostcodeTestOutput from '../../data/evidence/ghostcode-test-output.txt?raw';

import vitalisCoreSummary from '../../data/evidence/vitalis-core-summary.json';
import vitalisCoreTestOutput from '../../data/evidence/vitalis-core-test-output.txt?raw';
import vitalisCoreInfo from '../../data/evidence/vitalis-core-cli-info.txt?raw';
import vitalisCorePrompt from '../../data/evidence/vitalis-core-cli-prompt.txt?raw';

import vitalisDevcoreSummary from '../../data/evidence/vitalis-devcore-summary.json';
import vitalisDevcoreTestOutput from '../../data/evidence/vitalis-devcore-test-output.txt?raw';
import vitalisDevcoreInfo from '../../data/evidence/vitalis-devcore-cli-info.txt?raw';
import vitalisDevcoreAsk from '../../data/evidence/vitalis-devcore-cli-ask.txt?raw';
import vitalisDevcoreThink from '../../data/evidence/vitalis-devcore-cli-think.txt?raw';
import vitalisDevcoreReplay from '../../data/evidence/vitalis-devcore-cli-replay.txt?raw';

import loreinSummary from '../../data/evidence/lorein-summary.json';
import loreinTestOutput from '../../data/evidence/lorein-test-output.txt?raw';
import loreinReflect from '../../data/evidence/lorein-cli-reflect.txt?raw';
import loreinReflect2 from '../../data/evidence/lorein-cli-reflect-2.txt?raw';
import loreinIdentity from '../../data/evidence/lorein-cli-identity.txt?raw';
import loreinVerify from '../../data/evidence/lorein-cli-verify.txt?raw';
import loreinReplay from '../../data/evidence/lorein-cli-replay.txt?raw';
import loreinJournal from '../../data/evidence/lorein-sample-journal.jsonl?raw';

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

export function mountProofGallery(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="proof-gallery" data-reveal>
      <div class="proof-gallery-header">
        <h2 class="proof-gallery-title">Proof · what we actually built</h2>
        <p class="proof-gallery-lede">Every artifact below is regenerated by running the verification commands in the repo. Not screenshots — the actual files.</p>
      </div>
      <div class="proof-gallery-target"></div>
    </div>
  `;
  const target = root.querySelector('.proof-gallery-target');
  for (const proof of PROOFS) {
    const block = document.createElement('div');
    block.className = `proof-block proof-${proof.color}`;
    block.innerHTML = `<h3 class="proof-block-title">${proof.title}</h3>`;
    target.appendChild(block);
    for (const section of proof.sections) {
      const slot = document.createElement('div');
      block.appendChild(slot);
      mountProofPanel(slot, {
        mode: section.kind,
        title: section.title,
        items: section.items,
        lines: section.lines,
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
