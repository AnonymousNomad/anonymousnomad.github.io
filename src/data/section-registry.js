export const TV_SECTIONS = [
  {
    id: 'watch',
    label: 'Watch',
    route: '/tv/watch/',
    title: 'Watch',
    summary: 'The viewer-facing home for live stations, household channels, featured programming, and what is on now.',
    truth: 'The Android app and private household gateway implement Watch behavior. The public Nomadic Labs site does not currently expose private household playback or pretend the Cloudflare page is the streaming backend.'
  },
  {
    id: 'guide',
    label: 'Guide',
    route: '/tv/guide/',
    title: 'Guide',
    summary: 'Channel-first television discovery with time-based programming instead of an endless thumbnail wall.',
    truth: 'Nomadic TV has implemented guide surfaces and virtual-linear schedules. External channels only receive schedule data when an official or authorized EPG exists.'
  },
  {
    id: 'channels',
    label: 'Channels',
    route: '/tv/channels/',
    title: 'Channels',
    summary: 'Household stations, local television, rights-cleared hosted channels, and official-provider routes under one catalog.',
    truth: 'Hosted channels require explicit rights. External providers remain official handoffs unless an authorized in-app route exists. No provider stream is scraped or silently re-hosted.'
  },
  {
    id: 'movies',
    label: 'Movies',
    route: '/tv/movies/',
    title: 'Movies & Shows',
    summary: 'One discovery surface for private household media, rights-cleared catalog content, and legitimate provider availability.',
    truth: 'Private media never becomes public merely because Nomadic TV can play it. Copyrighted provider titles remain external/provider-routed unless explicit streaming rights are obtained.'
  },
  {
    id: 'app',
    label: 'App',
    route: '/tv/app/',
    title: 'Nomadic TV App',
    summary: 'Android/OTT application, release state, compatibility, and future install surface.',
    truth: 'Integrated source is observed at 0.9.2-integrated / versionCode 11. Current integrated physical acceptance is not claimed without a completed device acceptance battery.'
  },
  {
    id: 'about',
    label: 'About',
    route: '/tv/about/',
    title: 'About Nomadic TV',
    summary: 'Why the project exists: television rituals, family use, local information, simple discovery, and an AI-operable but human-first interface.',
    truth: 'Nomadic TV is an active project, not a finished commercial service. Content partnerships and licensing remain separate from technical capability.'
  }
];

export const NEXUS_SECTIONS = [
  {
    id: 'discover',
    label: 'Discover',
    route: '/nexus/discover/',
    title: 'Discover',
    summary: 'Search and browse the shared ecosystem catalog across package types and target products.',
    truth: 'The preserved reference has real catalog structure and eleven first-party seed records. Unpublished records must remain clearly labeled; no package is invented to fill an empty category.'
  },
  {
    id: 'models',
    label: 'Models',
    route: '/nexus/models/',
    title: 'Models',
    summary: 'Evidence-led model compatibility and qualification registry.',
    truth: 'The preserved reference intentionally contains no named qualified model results. Editorial qualification lanes are not model scores or benchmark claims.'
  },
  {
    id: 'products',
    label: 'Products',
    route: '/nexus/products/',
    title: 'Products',
    summary: 'Explicit product boundaries for ToolNeuron / Covert Edge, Covert Desktop, and Covert Engine.',
    truth: 'These remain distinct product surfaces connected by one ecosystem catalog. Shared branding must not collapse their technical identities.'
  },
  {
    id: 'developers',
    label: 'Developers',
    route: '/nexus/developers/',
    title: 'Developers',
    summary: 'Publishing contracts, package identity, manifests, submission workflow, and contribution guidance.',
    truth: 'The reference demonstrates metadata intake and pending review. Production identity, reviewer authorization, artifact quarantine, signing, and publication controls must be real before executable distribution.'
  },
  {
    id: 'community',
    label: 'Community',
    route: '/nexus/community/',
    title: 'Community',
    summary: 'The future social surface for contributors, showcases, feedback, and ecosystem discussion.',
    truth: 'No contributor counts, profiles, Discord availability, beta status, or showcase records should be fabricated.'
  },
  {
    id: 'downloads',
    label: 'Downloads',
    route: '/nexus/downloads/',
    title: 'Downloads',
    summary: 'A truthful distribution surface for approved product and package artifacts.',
    truth: 'The preserved reference has zero published artifacts. No disabled fake installer or unverified download should imply availability.'
  },
  {
    id: 'releases',
    label: 'Releases',
    route: '/nexus/releases/',
    title: 'Releases',
    summary: 'Release ledger for versioned, attributable, review-approved artifacts.',
    truth: 'Website design milestones are not product releases. The preserved reference has no seeded product release record.'
  }
];

export const WORKSHOP_SECTIONS = [
  {
    id: 'projects',
    label: 'Projects',
    route: '/workshop/projects/',
    title: 'Project History',
    summary: 'Preserved engineering projects and earlier product lines from the previous Nomadic Labs portfolio.',
    truth: 'Historical portfolio entries retain their original status/evidence boundary and are not silently rewritten as current releases.'
  },
  {
    id: 'evidence',
    label: 'Evidence',
    route: '/workshop/evidence/',
    title: 'Evidence Map',
    summary: 'Public map of preserved verification snapshots from prior Nomadic Labs work.',
    truth: 'Legacy evidence remains in source history; the public site summarizes it without exposing private workstation state or internal paths.'
  },
  {
    id: 'research',
    label: 'Research',
    route: '/workshop/research/',
    title: 'Research',
    summary: 'Architecture notes, technical analysis, benchmarks, experiments, and design evidence.',
    truth: 'Research findings must retain source quality, conditions, limitations, and uncertainty.'
  },
  {
    id: 'client-work',
    label: 'Client Work',
    route: '/workshop/client-work/',
    title: 'Client Work',
    summary: 'Delivered production work and case-study evidence.',
    truth: 'Client-facing material must stay within permissions and avoid exposing private client information.'
  },
  {
    id: 'releases',
    label: 'Releases',
    route: '/workshop/releases/',
    title: 'Release Evidence',
    summary: 'Hashes, source revisions, release notes, build receipts, and public artifact identities.',
    truth: 'A release entry must identify the artifact actually shipped; evidence and artifact identity cannot diverge.'
  },
  {
    id: 'open-source',
    label: 'Open Source',
    route: '/workshop/open-source/',
    title: 'Open Source',
    summary: 'Public repositories, upstream contributions, and independently verifiable engineering work.',
    truth: 'Contribution status must distinguish proposed, open, merged, accepted, and released states.'
  }
];

export function sectionByFamily(family, id) {
  const groups = {
    tv: TV_SECTIONS,
    nexus: NEXUS_SECTIONS,
    workshop: WORKSHOP_SECTIONS
  };
  return groups[family]?.find((section) => section.id === id) || null;
}

export function sectionsForFamily(family) {
  return {
    tv: TV_SECTIONS,
    nexus: NEXUS_SECTIONS,
    workshop: WORKSHOP_SECTIONS
  }[family] || [];
}
