# Nomadic Labs

Nomadic Labs is the public umbrella for AnonymousNomad's independent software, media, AI systems, engineering work, research, client work, and release evidence.

Production: https://nomadic-labs.dev/

## Current architecture

The public site is intentionally split into a shared umbrella and distinct product worlds:

- `/` — Nomadic Labs
- `/tv/` — Nomadic TV
- `/nexus/` — Nexus
- `/covert/` — Covert
- `/workshop/` — research, client work, open source, and release evidence

Nomadic TV, Nexus, and Covert keep their own product identities. The main site connects them; it does not flatten them into one generic theme.

## Public source of truth

Shared public project metadata lives in:

- `src/data/site-registry.js`
- `src/data/section-registry.js`

These registries feed:
- homepage project navigation
- product/section foundation pages
- the embedded site guide
- the public registry API

Public registry API:

`GET /api/site-registry`

## Ask Nomadic

The website includes a small public support assistant at:

`POST /api/guide`

The Pages Function uses Cloudflare Workers AI through the `AI` binding.

The guide is grounded in the source-controlled public registry. It must not expose credentials, workstation files, private memory, personal records, or private client material.

## Stack

- static HTML/CSS/ES modules
- Cloudflare Pages
- Cloudflare Pages Functions
- Cloudflare Workers AI
- no frontend framework required for the foundation
- no third-party analytics or advertising scripts in the current foundation

The final immersive homepage design is intentionally deferred until the content architecture and project boundaries are stable.

## Product provenance

### Nomadic TV

Canonical engineering source currently lives separately from this site repository. The public site consumes a bounded status summary rather than copying the Android/gateway repository into the website.

### Nexus

The preserved Nexus migration specification remains separate. The public site carries its route/purpose/status contract and links to the separate Nexus API source where appropriate.

### Covert

Covert remains an independently developed product with its own repository and evidence trail.

## Consolidation contract

See:

`docs/CONSOLIDATION_MAP.md`

The rule is simple: consolidate public identity, navigation, release/evidence metadata, support knowledge, and handoff links here; keep application source/runtime ownership in the application repositories.

## Engineering doctrine

`OBSERVE -> DIAGNOSE -> REPAIR -> RERUN -> VERIFY -> CONTINUE`

Public shorthand:

`evidence > confidence`

## Deployment

See `DEPLOY.md`.

## Security

See `SECURITY.md`.
