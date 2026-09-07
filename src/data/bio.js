/**
 * Neuro_Nomad Portfolio — Bio data
 * Pulled from the AnonymousNomad profile README.
 */

export const bio = {
  name: 'Neuro_Nomad',
  handle: 'AnonymousNomad',
  tagline: 'Licensed electrician turned self-taught solo developer.',
  summary:
    'I build offline-first systems where failure is expensive: AI runtimes, training pipelines, low-level OS integration, and security controls that must prove what they did.',

  origin: {
    role: 'Licensed Electrician → Self-Taught AI Architect',
    description:
      'Field experience as a licensed electrician informs how I treat power, isolation, sequencing, and failure paths. That same discipline applies to AI systems and security tooling.',
  },

  evidenceAreas: [
    {
      id: 'systems-runtime',
      title: 'Systems & Runtime Engineering',
      description:
        'Process lifecycle, resource gates, service shutdown, loopback-only model serving, deterministic manifests, privileged-boundary design across Windows and Linux.',
    },
    {
      id: 'ai-training',
      title: 'AI Training Pipelines',
      description:
        'Corpus curation, tokenizer and data packing, pretraining and supervised fine-tuning, evaluation gates, quantization, GGUF export, benchmarking, edge deployment. Every stage needs reproducible inputs and measurable exit criteria.',
    },
    {
      id: 'security-ops',
      title: 'Security Operations Engineering',
      description:
        'Threat modeling, least privilege, fail-closed defaults, signed engagement manifests, policy evaluation, one-use permits, durable evidence journals, provenance signing, controlled network-tool adapters.',
    },
  ],

  howIWork: [
    'Research',
    'Architecture',
    'Implementation',
    'Adversarial Review',
    'Automated Tests',
    'Honest Documentation',
    'Release',
  ],

  howIWorkNote:
    'I optimize for systems that remain inspectable after something goes wrong — not demos that only work before anyone looks closely.',

  principles: [
    {
      title: 'Offline-first, online opt-in',
      description:
        'Everything (runtimes, models, fonts, docs) bundles and runs locally. No cloud, no telemetry, no remote fetches by default.',
    },
    {
      title: 'Evidence over confidence',
      description:
        'Every operation produces evidence. Every claim is verifiable. Every test that passes can be re-run and is.',
    },
    {
      title: 'Honest about what doesn\'t work',
      description:
        'The Cyber SOP Harness runs 44 tests and is clearly labeled development preview. The Vitalis engines are research. GhostCode is a concept demo. I say so.',
    },
  ],

  contact: {
    github: 'https://github.com/AnonymousNomad',
    sponsors: 'https://github.com/sponsors/AnonymousNomad',
    primaryRepo: 'https://github.com/AnonymousNomad/aide-sovereign-workbench',
  },

  // No personal biographical context. The work is the work.
};
