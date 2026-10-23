# Nomadic Labs — Consolidation Map

Status: working foundation on branch `feat/labs-guide-foundation-20261023`

Purpose: keep one public umbrella site while preserving distinct product identities, canonical engineering sources, evidence boundaries, and release truth.

## Public umbrella

- Domain: `https://nomadic-labs.dev/`
- Cloudflare Pages project: `nomadic-labs-hub`
- Website source: this repository
- Public registry: `src/data/site-registry.js`
- Website guide endpoint: `functions/api/guide.js`
- Machine-readable summary: `llms.txt`

The registry is the public-site source of truth for names, summaries, current public status, boundaries, product routes, and design-preservation rules.

## Nomadic TV

- Public route: `/tv/`
- Canonical engineering source: `E:\nomadic-tv`
- Branch observed 2026-10-23: `feat/nomadic-tv-cabin-local-ui`
- HEAD observed 2026-10-23: `adfb101954ad2d2baae14204b58475a6f62973b2`
- Integrated version observed: `0.9.2-integrated`, versionCode 11
- Important canonical contracts:
  - `docs/NOMADIC_TV_PRODUCT_BLUEPRINT.md`
  - `docs/NOMADIC_TV_ECOSYSTEM_CONTRACT.md`
  - `docs/NOMADIC_TV_RIGHTS_MODEL.md`
  - `docs/NOMADIC_TV_PROVIDER_MATRIX.md`
  - `AGENT_NOTES.md`
- Public truth:
  - active development
  - virtual linear scheduling and household TV surfaces exist
  - external providers remain official-route/handoff integrations unless rights permit hosting
  - personal media remains private
  - current integrated physical acceptance must not be claimed without device evidence
- Design preservation:
  - retain Nomadic TV's own Freeze-Up Alaska Broadcast / underground-TV identity
  - do not make it visually identical to the Nomadic Labs umbrella

## Nexus

- Public route: `/nexus/`
- Preserved migration package: `E:\COVERT_NEXUS_FLOOT_MIGRATION_HANDOFF.zip`
- Reference version: 3
- Reference source commit: `cab2cfc2b6669d9f6528e13192ffb3bba5df8e9b`
- API source: `E:\covert-nexus-api`
- API HEAD observed 2026-10-23: `948a8924f6bdd197d3ca0c5465f54f4a8d5ee1dd`
- Public API repository: `https://github.com/AnonymousNomad/covert-nexus-api`
- Public truth:
  - private reference site + migration handoff exist
  - catalog structure, package identities, publishing flow design, and API boundary exist
  - no production publisher/account claims
  - no fabricated published packages, model results, release artifacts, or community counts
- Design preservation:
  - retain the living binary-city / data-realm visual identity
  - do not reduce it to a generic site with green code rain

## Covert

- Public route: `/covert/`
- Public source: `https://github.com/AnonymousNomad/covert-coder`
- Public truth:
  - active governed/local-first AI developer-platform engineering
  - publish only accepted/verified capability claims
  - planned architecture must remain distinguishable from released behavior
- Design preservation:
  - retain Covert's retro workstation / sovereign developer-platform identity

## Workshop

- Public route: `/workshop/`
- Purpose:
  - research
  - client work
  - open-source contributions
  - prototypes
  - verification evidence
  - release records
- Rule: an experiment or evidence artifact is not automatically a released product.

## Shared public-assistant boundary

The website assistant may use:
- the public registry
- public website copy
- approved public release/evidence metadata

The website assistant must not use or expose:
- credentials
- private workstation files
- private model memory
- personal records
- private client material
- unreviewed internal claims

## Migration rule

Do not copy whole application repositories into this website repository.

The umbrella site should consolidate:
1. identity
2. navigation
3. public-safe project truth
4. release/evidence metadata
5. support/search knowledge
6. product handoff links

Each application remains independently buildable and retains its own repository, runtime, tests, and visual system.

## Current route plan

- `/` — Nomadic Labs umbrella
- `/tv/` — Nomadic TV
- `/nexus/` — Nexus
- `/covert/` — Covert
- `/workshop/` — research/client/open-source/release index
- future product-specific subdomains may point to independent deployments without changing the public registry contract.

## Visual-design gate

Do not begin final homepage art direction until:
- project routes resolve
- registry renders correctly
- website guide is grounded in the registry
- stale public copy is removed
- product boundaries are preserved
- preview verification passes

The final homepage design can then change radically without destabilizing the content architecture.
