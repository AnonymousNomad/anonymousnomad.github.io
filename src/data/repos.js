/**
 * Neuro_Nomad Portfolio — Repository metadata
 * Source of truth for all repo cards and section content.
 * Edit here to update across the whole site.
 *
 * Schema:
 *   id        : kebab-case slug, matches GitHub repo name
 *   name      : display name
 *   tagline   : one-line description (max 80 chars)
 *   description : 2-3 sentence description
 *   role      : "flagship" | "concept-demo" | "cognitive-engine" | "security" | "architecture"
 *   accent    : CSS var name (--accent-aide, --accent-ghostcode, etc.)
 *   repoUrl   : full GitHub URL
 *   liveUrl   : optional live demo URL
 *   docsUrl   : optional docs URL
 *   stars     : GitHub stars (snapshot)
 *   language  : primary language
 *   license   : SPDX license id
 *   status    : "active" | "development-preview" | "concept-demo" | "research"
 *   tags      : array of topic strings
 *   features  : array of { title, description } — top 3-5 features
 *   demoCopy  : { problem, solution, status } — for section copy
 */

export const repos = [
  {
    id: 'aide-sovereign-workbench',
    name: 'AIDE Sovereign Workbench',
    tagline: 'An offline IDE that proves what it did.',
    description:
      'Offline-first, model-agnostic developer workbench with verified local operators, Git workflows, plugins, Tutor Mode, and reproducible audit artifacts. Runs without internet. 265 architecture tests, 17 Playwright E2E tests.',
    role: 'flagship',
    accent: '--accent-aide',
    repoUrl: 'https://github.com/AnonymousNomad/aide-sovereign-workbench',
    liveUrl: null,
    stars: 20,
    language: 'TypeScript',
    license: 'Apache-2.0',
    status: 'active',
    tags: ['offline-ide', 'model-agnostic', 'veritas', 'plugins', 'lsp', 'dap'],
    features: [
      {
        title: 'Verified operators',
        description:
          'Every operation produces evidence. Every change is a diff you approve. Nothing ships untraced.',
      },
      {
        title: 'Closed-loop development',
        description:
          'guard → retrieve → plan → propose → verify → revise → test → review → learn. The whole loop in one harness.',
      },
      {
        title: 'Offline-first',
        description:
          'No cloud. No telemetry. 3 model packs (SmolLM2, Qwen2.5-Coder 0.5B/1.5B) bundle locally.',
      },
      {
        title: 'Reproducible capsules',
        description:
          'Sealed workspace bundles: exact model, runtime, Git revision, evidence hashes, tools, Veritas results.',
      },
    ],
    demoCopy: {
      problem: 'Cloud IDEs that lock you in. AI assistants that lie. Tests that pass once and never again.',
      solution:
        'AIDE runs offline, proves every operation with evidence, and ships sealed capsules you can replay anywhere.',
      status: 'Active development. 265 tests, 17 E2E, green CI on every push.',
    },
  },

  {
    id: 'ghostcode',
    name: 'GhostCode',
    tagline: 'Time-travel debug production without touching it.',
    description:
      'Turn any running production service into a local, time-traveling clone in one click. Establish an ephemeral mTLS tunnel, freeze a heap-and-call-stack snapshot, mask PII, spin up a sandboxed local replica on your port. The original production service is never paused, never modified.',
    role: 'concept-demo',
    accent: '--accent-ghostcode',
    repoUrl: 'https://github.com/AnonymousNomad/Ghostcode',
    liveUrl: null,
    stars: 0,
    language: 'TypeScript',
    license: 'Apache-2.0',
    status: 'concept-demo',
    tags: ['time-travel-debugging', 'mTLS', 'eBPF', 'heap-snapshot', 'PII-shield'],
    features: [
      {
        title: 'Ephemeral mTLS tunnel',
        description:
          'Establish a read-only, encrypted channel to the production service. Zero-pause, zero-modification.',
      },
      {
        title: 'Zero-copy heap snapshot',
        description:
          'Freeze the heap and call stack in 142ms. Full or shallow capture. Include or exclude env vars.',
      },
      {
        title: 'PII Shield active',
        description:
          'Credit cards, tokens, PII — masked before they ever leave the prod boundary. Card-mask rules applied by default.',
      },
      {
        title: 'Local ghost on your port',
        description:
          'Map to any local port. Scrub the timeline forward and backward. The clone dies when you close the tab.',
      },
    ],
    demoCopy: {
      problem:
        'Production bugs are the only bugs that matter — and the only ones you can\'t reproduce locally. The current workflow: ask Sentry, scroll through events, try to recreate the conditions, give up, add a console.log, redeploy, wait, repeat.',
      solution:
        'Point GhostCode at any service. Get a local time-traveling clone. Step through the bug as if you were there when it happened.',
      status:
        'Concept demo. The UI is complete and interactive (Hero, Dashboard, Replay). The clone engine is the roadmap. Apache 2.0, self-hosted, zero telemetry.',
    },
  },

  {
    id: 'vitalis-core',
    name: 'Vitalis Core',
    tagline: 'Cognitive engine exoskeleton. Sovereign, local-first, runnable.',
    description:
      'A sovereign cognitive engine with Bayesian confidence gating, Ebbinghaus memory decay, and a working NumPy reference implementation. Wraps any model you bring — the architecture is the value, the model is yours. 11/11 tests pass, single `fsi-chat` command runs end-to-end.',
    role: 'cognitive-engine',
    accent: '--accent-vitalis',
    repoUrl: 'https://github.com/AnonymousNomad/Vitalis_core',
    liveUrl: null,
    stars: 3,
    language: 'Python',
    license: 'MIT',
    status: 'active',
    tags: ['sovereign-ai', 'exoskeleton', 'ebbinghaus-memory', 'numpy', 'cli'],
    features: [
      {
        title: 'Confidence gating',
        description:
          'Every response passes through a Bayesian confidence gate. Low-confidence answers are filtered or labeled. The architecture decides, not the model.',
      },
      {
        title: 'Ebbinghaus memory',
        description:
          'Memories strengthen with use, decay without. The biological forgetting curve, made computational.',
      },
      {
        title: 'Exoskeleton pattern',
        description:
          'Drop in any model function (text → (answer, confidence)) and you get the full Vitalis pipeline. The reference impl ships a stub; replace it with your own.',
      },
      {
        title: 'NumPy reference implementation',
        description:
          'No torch, no transformers, no cloud. Runs on a laptop. The `vitalis.cli` package is the only entry point; everything else is archived.',
      },
      {
        title: 'Consolidated, runnable',
        description:
          'One canonical entry (vitalis.cli:main), one console script (fsi-chat), 11/11 tests. Previously five competing module trees; now one.',
      },
    ],
    demoCopy: {
      problem:
        'Every AI today runs on someone else\'s hardware, under someone else\'s rules, with someone else\'s training data. Sovereignty is a myth.',
      solution:
        'Vitalis Core is a sovereign cognitive engine with a working CLI (fsi-chat), Bayesian confidence gating, and a reference NumPy implementation. The architecture is the value, the model is yours.',
      status: 'Active. 11/11 tests pass. fsi-chat --info / --prompt / REPL. NumPy-only. 5 old impls archived.',
    },
  },

  {
    id: 'vitalis-devcore',
    name: 'Vitalis Devcore',
    tagline: 'Cognitive exoskeleton with confidence gating + truth ledger.',
    description:
      'A pluggable cognitive pipeline: InferenceEngine + RAG + ConfidenceBridge + TruthManager. Wraps any callable model with confidence-tagged answers, augmentation when uncertain, and a persistent truth ledger. 4 CLI commands (info, ask, think, replay), 13/13 tests pass.',
    role: 'cognitive-engine',
    accent: '--accent-vitalis-dev',
    repoUrl: 'https://github.com/AnonymousNomad/Vitalis_Devcore',
    liveUrl: null,
    stars: 2,
    language: 'Python',
    license: 'MIT',
    status: 'active',
    tags: ['exoskeleton', 'inference-engine', 'rag', 'truth-ledger', 'cli'],
    features: [
      {
        title: 'InferenceEngine',
        description:
          'The pipeline: model_fn → bridge augmentation (if uncertain) → safe_response (confidence filter) → ledger entry. Plug in any model_fn that returns (str, float).',
      },
      {
        title: 'ConfidenceBridge',
        description:
          'When the model\'s confidence is low, the bridge augments the prompt with retrieved context and re-asks. Autonomous, no human in the loop.',
      },
      {
        title: 'TruthManager',
        description:
          'safe_response(answer, confidence) classifies into low/uncertain/confident. Low-confidence responses are filtered, not hallucinated.',
      },
      {
        title: 'Truth ledger',
        description:
          'Every run is recorded to ~/.vitalis_workspace/truth_ledger.json. The `replay` command prints history. Auditable, append-only.',
      },
      {
        title: 'Consolidated, runnable',
        description:
          'One canonical entry (devcore_cli:main), one console script (devcore), 13/13 tests. Pure-NumPy hdc_engine stub replaces the broken Cython. 6 old impls archived.',
      },
    ],
    demoCopy: {
      problem:
        'AI coding tools that work in a demo and break in production. No memory between sessions. No recovery from their own mistakes.',
      solution:
        'Vitalis Devcore is a cognitive exoskeleton you wrap around any model. Confidence gating, bridge augmentation, truth ledger — the pipeline that makes the model trustworthy.',
      status: 'Active. 13/13 tests pass. devcore info/ask/think/replay. NumPy-only. 6 old impls archived.',
    },
  },

  {
    id: 'cyber-sop-harness',
    name: 'Cyber SOP Harness',
    tagline: 'Governance between AI and security tools.',
    description:
      'A portable governance and execution framework that puts a policy, evidence, and verification layer between any model and any security tool. PolicyEngine, PermitIssuer (cryptographically signed one-use permits), ToolBroker, EvidenceLedger, ProvenanceAuthority. 48 deterministic offline tests (11 .NET test projects + 14 Node MJS tests). Three provider adapters (llama.cpp, loopback, external API).',
    role: 'security',
    accent: '--accent-cyber',
    repoUrl: 'https://github.com/AnonymousNomad/cyber-sop-harness',
    liveUrl: null,
    stars: 2,
    language: 'C#',
    license: 'MIT',
    status: 'development-preview',
    tags: ['policy-engine', 'permit-issuer', 'evidence-ledger', 'provenance', 'mTLS', 'mcp'],
    features: [
      {
        title: 'Policy → Permit → Tool → Evidence',
        description:
          'Five-step governance loop. Every action is evaluated, signed, dispatched, journaled, and verified.',
      },
      {
        title: 'Cryptographic one-use permits',
        description:
          'Every permit is signed, single-use, scope-bounded. Replay-protected. Tamper-evident.',
      },
      {
        title: 'Append-only evidence journal',
        description:
          'Every action, every output, every credential use is journaled. Tamper detection built in. Offline-verifiable.',
      },
      {
        title: 'Model-agnostic provider adapters',
        description:
          'Local GGUF via llama.cpp, loopback HTTP, or external API with consent gating. The operator picks. The system enforces.',
      },
      {
        title: '48 tests, honestly labeled',
        description:
          '11 .NET test projects (PolicyEngine, EvidenceChain, ScopeEvaluator, etc.) + 14 Node MJS tests. Permit lifecycle, evidence integrity, redirect chain scope, provenance rotation. We tell you exactly what we don\'t cover.',
      },
    ],
    demoCopy: {
      problem:
        'LLMs drafting security actions go straight to terminals with no durable authorization, no permits, no evidence chain, no independent verification. Unsafe for authorized work because there\'s no audit trail.',
      solution:
        'Wrap any model + any tool with policy, permits, evidence, and provenance. Cryptographically signed permits. Append-only evidence journal. The guard rail, not the leash.',
      status: 'Development preview. 48 tests, all green. Container and mobile control plane are roadmap.',
    },
  },

  {
    id: 'lorein-sovereign-entity',
    name: 'LOREIN — Sovereign Entity',
    tagline: 'Persistent cognitive entity with dual-process cognition + tamper-evident identity.',
    description:
      'A Persistent Synthetic Cognitive Entity. The MIRROR Framework (dual-process: Reasoning vs Talking with per-step confidence) and a Cryptographic Journal (append-only, content-hash chained, tamper-evident, identity derives from chain tip). The Room (Firecracker) and Active Inference (FEP) are documented in the white papers but explicitly NOT in the reference impl. 16/16 tests pass, `lorein reflect` works end-to-end.',
    role: 'architecture',
    accent: '--accent-lorein',
    repoUrl: 'https://github.com/AnonymousNomad/LOREIN-Sovereign-Entity',
    liveUrl: null,
    stars: 0,
    language: 'Python',
    license: 'Apache-2.0',
    status: 'reference-impl',
    tags: ['persistent-intelligence', 'mirror-framework', 'dual-process', 'journaling', 'tamper-evident', 'identity-continuity'],
    features: [
      {
        title: 'MIRROR Framework',
        description:
          'Dual-process engine: every reflection produces a separate `Reasoning` trace (with explicit per-step confidence + reconsiders flag) and a committed `Talking` output. The two are distinct fields, not a prompt trick.',
      },
      {
        title: 'Cryptographic Journal',
        description:
          'Append-only JSONL ledger where each entry\'s hash includes the previous entry\'s hash. `verify()` walks the chain and detects any tampering. `identity()` returns the chain-tip hash. Forks create forks.',
      },
      {
        title: 'Identity Continuity',
        description:
          'LOREIN\'s identity is the hash of its journal chain. Add a reflection, identity changes. Tamper with an entry, identity becomes invalid. The entity is its history, not a snapshot.',
      },
      {
        title: 'Pure stdlib, no dependencies',
        description:
          'The reference implementation ships with zero external deps. The model is a stub that produces plausible-looking dual-process output — swap it for a real LLM and the architecture stays the same.',
      },
      {
        title: 'The Room + Active Inference (roadmap)',
        description:
          'The Firecracker-isolated execution environment and the Free-Energy-Principle growth model are documented in the white papers on the repo. The reference impl ships the smallest runnable slice of the full design.',
      },
    ],
    demoCopy: {
      problem:
        'Stateless AI has no memory, no identity, no continuity. Every conversation starts from zero. Every session is amnesia.',
      solution:
        'LOREIN persists. Remembers. Reasons and talks as separate processes. The journal is the memory; the chain-tip is the identity; the dual-process is the mind. A small, real reference implementation ships today.',
      status:
        'Reference implementation. 16/16 tests pass. 4 CLI commands: reflect, identity, replay, verify. The Room (Firecracker) and Active Inference (FEP) are documented in the white papers but not in the code. The vision is now both documented AND runnable.',
    },
  },
];

/** Featured projects shown on the hero (subset of repos) */
export const featuredRepos = ['aide-sovereign-workbench', 'ghostcode'];

/** Quick lookup by id */
export const repoById = Object.fromEntries(repos.map((r) => [r.id, r]));