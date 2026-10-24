export const WORKSHOP_PROJECTS=[
  {
    id:'aide-sovereign-workbench',
    name:'AIDE Sovereign Workbench',
    lineage:'Historical predecessor / lineage of Covert',
    tagline:'An offline IDE that proves what it did.',
    status:'HISTORICAL ACTIVE SNAPSHOT',
    language:'TypeScript',
    license:'Apache-2.0',
    repo:'https://github.com/AnonymousNomad/aide-sovereign-workbench',
    description:'Offline-first, model-agnostic developer workbench with verified local operators, Git workflows, plugins, Tutor Mode, and reproducible audit artifacts.',
    evidence:'Prior public portfolio snapshot recorded 265 architecture tests and 17 Playwright E2E tests. Current Covert status is tracked separately; this entry preserves the earlier public artifact rather than claiming those counts are the current Covert release state.'
  },
  {
    id:'ghostcode',
    name:'GhostCode',
    lineage:'Concept / verification work',
    tagline:'Time-travel debug production without touching it.',
    status:'CONCEPT DEMO SNAPSHOT',
    language:'TypeScript',
    license:'Apache-2.0',
    repo:'https://github.com/AnonymousNomad/Ghostcode',
    description:'Concept for creating a local, time-traveling clone of production state through a bounded capture and masking workflow.',
    evidence:'The preserved portfolio explicitly labeled the UI as an interactive concept demo and the clone engine as roadmap work. That distinction remains intact.'
  },
  {
    id:'vitalis-core',
    name:'Vitalis Core',
    lineage:'Cognitive-engine research',
    tagline:'Cognitive engine exoskeleton. Sovereign, local-first, runnable.',
    status:'RESEARCH SNAPSHOT',
    language:'Python',
    license:'MIT',
    repo:'https://github.com/AnonymousNomad/Vitalis_core',
    description:'A sovereign cognitive-engine reference with confidence gating, memory-decay concepts, and a lightweight model-wrapper architecture.',
    evidence:'The prior public snapshot recorded an 11/11 test pass and a NumPy-only runnable CLI. This is preserved as historical evidence, not automatically treated as a current release claim.'
  },
  {
    id:'vitalis-devcore',
    name:'Vitalis Devcore',
    lineage:'Cognitive-engine research',
    tagline:'Cognitive exoskeleton with confidence gating + truth ledger.',
    status:'RESEARCH SNAPSHOT',
    language:'Python',
    license:'MIT',
    repo:'https://github.com/AnonymousNomad/Vitalis_Devcore',
    description:'A pluggable inference pipeline combining model calls, retrieval/augmentation, confidence handling, and an append-only truth ledger.',
    evidence:'The prior public snapshot recorded 13/13 tests and four CLI commands. Workshop preserves the snapshot while current repository state remains independently verifiable.'
  },
  {
    id:'cyber-sop-harness',
    name:'Cyber SOP Harness',
    lineage:'Security-governance engineering',
    tagline:'Governance between AI and security tools.',
    status:'DEVELOPMENT PREVIEW SNAPSHOT',
    language:'C# + Node',
    license:'MIT',
    repo:'https://github.com/AnonymousNomad/cyber-sop-harness',
    description:'Portable policy, permit, evidence, and provenance layer designed to sit between models and security tooling.',
    evidence:'The preserved portfolio recorded 48 deterministic offline tests across .NET and Node and labeled the work development preview. Workshop retains that exact evidence boundary.'
  },
  {
    id:'lorein-sovereign-entity',
    name:'LOREIN — Sovereign Entity',
    lineage:'Persistent-intelligence research',
    tagline:'Persistent cognitive entity with dual-process cognition + tamper-evident identity.',
    status:'REFERENCE IMPLEMENTATION SNAPSHOT',
    language:'Python',
    license:'Apache-2.0',
    repo:'https://github.com/AnonymousNomad/LOREIN-Sovereign-Entity',
    description:'Reference implementation combining separated reasoning/talking output with an append-only hash-chained journal and identity continuity.',
    evidence:'The preserved public snapshot recorded 16/16 tests and a working reflect/identity/replay/verify CLI while explicitly labeling Firecracker isolation and active-inference work as roadmap.'
  }
];

export const EVIDENCE_GROUPS=[
  {name:'AIDE / Covert lineage',state:'PRESERVED',summary:'Architecture and E2E evidence from the earlier sovereign-workbench public portfolio remains source history; current Covert release claims stay separate.'},
  {name:'GhostCode',state:'PRESERVED',summary:'Clean/throw frame captures, session-start material, stats, and test-output snapshots exist in the legacy source tree. Public Workshop summarizes them without exposing private workstation material.'},
  {name:'Vitalis Core',state:'PRESERVED',summary:'CLI info/prompt, summary, and test-output snapshots exist in legacy evidence source.'},
  {name:'Vitalis Devcore',state:'PRESERVED',summary:'CLI ask/info/replay/think, summary, and test-output snapshots exist in legacy evidence source.'},
  {name:'LOREIN',state:'PRESERVED',summary:'CLI identity/reflect/replay/verify, journal sample, summary, and test-output snapshots exist in legacy evidence source.'}
];