export const SITE = {
  name: 'Nomadic Labs',
  domain: 'https://nomadic-labs.dev',
  strapline: 'Power. Water. Signal. Code.',
  doctrine: 'evidence > confidence',
  description: 'The umbrella home for independent software, media, AI systems, engineering work, research, client work, and release evidence built by AnonymousNomad.',
  architecture: 'Shared public control plane with independently deployable product worlds',
  builder: {
    name: 'AnonymousNomad',
    publicSummary: 'Independent developer with an electrical-work background building software, AI systems, media products, and practical technical projects.',
    themes: ['hands-on engineering','verify-first development','local-first systems where appropriate','off-grid independence','outdoors/frontier influence','gaming and original science-fiction influence']
  }
};

export const PROJECTS = [
  {
    id: 'nomadic-tv',
    order: 1,
    name: 'Nomadic TV',
    route: '/tv/',
    futureDomain: 'https://tv.nomadic-labs.dev',
    integrationState: 'HUB_READY_PRODUCT_DEPLOYMENT_PENDING',
    deploymentModel: 'Independent product deployment with a stable Nomadic Labs discovery route',
    sourceOwner: 'Nomadic TV engineering repository',
    publicRepo: null,
    kind: 'Streaming platform',
    status: 'ACTIVE DEVELOPMENT',
    statusClass: 'active',
    tagline: 'Television that feels like television again.',
    summary: 'A streaming/media platform centered on live channels, guide-driven discovery, household media, movies and shows, virtual linear channels, and curated programming.',
    currentTruth: 'Canonical source is at integrated version 0.9.2. Recent device evidence exists through RC9/RC10-era surfaces, but current integrated physical acceptance is not claimed. Public/provider content follows an explicit rights and official-provider boundary.',
    capabilities: ['WATCH / GUIDE / CHANNELS / MOVIES / FIND','virtual linear scheduling','household library and resume state','local-news and weather routes','rights-gated hosted media','provider-neutral gateway work','ToolNeuron capability contract'],
    boundaries: ['No scraping private provider manifests','No re-hosting external provider streams without rights','Personal media remains private','Do not describe a build as accepted without device evidence'],
    design: 'Preserve the Freeze-Up Alaska Broadcast / underground-TV identity. It should not become visually identical to the Nomadic Labs homepage.',
    sourceState: 'Private/local engineering source; public release/source link not advertised from this registry yet.'
  },
  {
    id: 'nexus',
    order: 2,
    name: 'Nexus',
    route: '/nexus/',
    futureDomain: 'https://nexus.nomadic-labs.dev',
    integrationState: 'HUB_READY_PRODUCT_DEPLOYMENT_PENDING',
    deploymentModel: 'Independent product deployment with a stable Nomadic Labs discovery route',
    sourceOwner: 'Nexus product specification + Nexus API repository',
    publicRepo: 'https://github.com/AnonymousNomad/covert-nexus-api',
    kind: 'Ecosystem marketplace',
    status: 'MIGRATION / PLATFORM BUILD',
    statusClass: 'building',
    tagline: 'Enter the network.',
    summary: 'The ecosystem catalog and community surface for ToolNeuron / Covert Edge, Covert Desktop, Covert Engine, models, skills, plugins, workflows, connectors, themes, packages, and release metadata.',
    currentTruth: 'A private reference site and migration handoff exist with real catalog structure and truthful empty states. A separate Nexus API boundary exists. At the preserved reference checkpoint there are 11 first-party catalog records, 0 published packages, 0 published artifacts, 0 model records, and 0 release records. Production accounts, approved publishers, and future published records must remain empty until actually implemented and reviewed.',
    capabilities: ['catalog discovery','package records','product boundaries','developer publishing flow design','release/download contract','community surface design','public API boundary'],
    boundaries: ['No invented downloads or release counts','No fabricated model scores','No unreviewed executable publication','Publisher and reviewer identity must be server-verified'],
    design: 'Preserve the living binary-city/data-realm identity. The finished Nexus should feel like a functioning portal inside a code-built world, not a normal site with Matrix rain.',
    links: [{ label: 'Nexus API source', href: 'https://github.com/AnonymousNomad/covert-nexus-api' }]
  },
  {
    id: 'covert',
    order: 3,
    name: 'Covert',
    route: '/covert/',
    futureDomain: 'https://covert.nomadic-labs.dev',
    integrationState: 'HUB_READY_PUBLIC_SITE_PENDING',
    deploymentModel: 'Independent product deployment with a stable Nomadic Labs discovery route',
    sourceOwner: 'Covert engineering repository',
    publicRepo: 'https://github.com/AnonymousNomad/covert-coder',
    kind: 'Governed AI developer platform',
    status: 'ACTIVE ENGINEERING',
    statusClass: 'active',
    tagline: 'Local-first AI development under operator control.',
    summary: 'A governed developer platform centered on a resident assistant, model/runtime control, context control, workflows, execution authority, verification, and evidence-backed mission results.',
    currentTruth: 'Covert is an active engineering program. Public pages must distinguish accepted slices and verified runtime behavior from planned or incomplete platform capabilities.',
    capabilities: ['Resident assistant','model/runtime management','context control','workflow/orchestration','execution authority','verification harness','local-first development'],
    boundaries: ['No universal-superiority claims','No silent provider/runtime fallback','Planned features are not released features','Release claims require evidence'],
    design: 'Covert keeps its own retro workstation / sovereign developer-platform identity.',
    links: [{ label: 'Covert source', href: 'https://github.com/AnonymousNomad/covert-coder' }]
  },
  {
    id: 'workshop',
    order: 4,
    name: 'Workshop',
    route: '/workshop/',
    futureDomain: null,
    integrationState: 'HUB_NATIVE',
    deploymentModel: 'Native Nomadic Labs surface',
    sourceOwner: 'Nomadic Labs public registry',
    publicRepo: 'https://github.com/AnonymousNomad/anonymousnomad.github.io',
    kind: 'Research + delivered work',
    status: 'GROWING',
    statusClass: 'building',
    tagline: 'The rest of the workbench.',
    summary: 'Research, client work, open-source contributions, prototypes, experiments, verification evidence, and release artifacts that do not belong to a single product world.',
    currentTruth: 'This surface is an index, not a claim that every experiment is a released product.',
    capabilities: ['research notes','client case studies','open-source work','verification evidence','release records'],
    boundaries: ['Keep experiments labeled as experiments','Preserve client and contributor permissions','Do not expose private project material'],
    design: 'Uses the Nomadic Labs umbrella identity while individual projects may link into their own visual worlds.'
  }
];

export const PUBLIC_KNOWLEDGE = [
  {
    id: 'labs',
    title: 'Nomadic Labs',
    tags: ['nomadic labs','website','hub','company','projects','what is this'],
    body: SITE.description + ' The public domain is nomadic-labs.dev. Product sites keep distinct visual identities.'
  },
  {
    id: 'builder',
    title: 'The builder',
    tags: ['builder','anonymousnomad','developer','electrician','about','who built','who are you'],
    body: SITE.builder.publicSummary + ' Public themes include ' + SITE.builder.themes.join(', ') + '.'
  },
  ...PROJECTS.map((project) => ({
    id: project.id,
    title: project.name,
    tags: [project.name.toLowerCase(), project.kind.toLowerCase(), ...project.capabilities.map((value) => value.toLowerCase())],
    body: project.summary + ' Current public status: ' + project.status + '. ' + project.currentTruth + ' Boundaries: ' + project.boundaries.join('; ') + '.'
  })),
  {
    id: 'site-plan',
    title: 'Nomadic Labs site plan',
    tags: ['site plan','migration','subdomain','tv site','nexus site','covert site','consolidation'],
    body: 'Nomadic Labs is the umbrella property and public control plane. Nomadic TV, Nexus, and Covert remain independently deployable product worlds connected through shared navigation, a public project registry, release/evidence conventions, and the site guide. Stable hub routes remain available while product subdomains become canonical only after their independent deployments are accepted.'
  },
  {
    id: 'method',
    title: 'Engineering method',
    tags: ['method','verification','evidence','developer way','build prove ship','philosophy'],
    body: 'Nomadic Labs uses a verify-first loop: observe, diagnose, repair, rerun, verify, continue. Public shorthand: evidence > confidence.'
  },
  {
    id: 'client-work',
    title: 'Client work',
    tags: ['client','website','church','cranes mill','portfolio'],
    body: 'Delivered client work includes the Cranes Mill Baptist Church website project, covering redesign, media and sermon integration, maps, events and giving paths, hosting migration, and production publishing.'
  },
  {
    id: 'privacy',
    title: 'Website assistant privacy',
    tags: ['privacy','private','memory','data','credentials','security'],
    body: 'The public website guide is separated from private workstation data. It may answer from the curated public registry but must not expose credentials, private files, personal records, private model memory, or other non-public information.'
  },
  {
    id: 'design-direction',
    title: 'Nomadic Labs visual direction',
    tags: ['design','look','visual','rain','electric','hologram','off grid','alaska','sci fi'],
    body: 'The Nomadic Labs home will use a restrained professional off-grid frontier direction: northern weather, rain, worn electrical infrastructure, power lines, subtle static discharge, water and signal systems, restrained holographic instrumentation, and original science-fiction influence. Product worlds keep their own identities.'
  }
];

export function projectById(id) {
  return PROJECTS.find((project) => project.id === id) || null;
}
