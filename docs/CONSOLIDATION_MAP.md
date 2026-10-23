# Nomadic Labs — Consolidation Map

Status: hub foundation and outpost work in progress.

## Purpose

Nomadic Labs is the public control plane for a family of independently deployable projects. Consolidation means one professional public identity, one navigation and support contract, one truthful status/evidence model, and clear handoffs between projects. It does **not** mean copying every application into one repository or forcing every product to share one visual design.

## Shared public control plane

Canonical domain:

- https://nomadic-labs.dev/

Shared surfaces:

- `/` — Nomadic Labs outpost / umbrella
- `/about/` — builder and operating philosophy
- `/status/` — truthful project and integration status
- `/privacy/` — public website and Ask Nomadic boundary
- `/api/site-registry` — machine-readable public project registry
- `/api/guide` — Ask Nomadic site guide
- `/.well-known/nomadic-labs.json` — compact hub contract
- `/llms.txt` — AI-readable public context

The source-controlled public registry owns shared names, summaries, statuses, routes, boundaries, and deployment states.

## Product worlds

### Nomadic TV

Current hub route:

- `/tv/`

Reserved future product hostname:

- `tv.nomadic-labs.dev`

State:

- hub ready
- product deployment pending
- active engineering continues separately

Source ownership:

- independent Nomadic TV engineering repository

Public boundary:

- public/hosted media requires explicit rights
- provider content uses official/authorized routes
- household/private media is not public website data
- device acceptance remains evidence-gated

Design boundary:

- preserve the Freeze-Up Alaska Broadcast / underground-TV identity

### Nexus

Current hub route:

- `/nexus/`

Reserved future product hostname:

- `nexus.nomadic-labs.dev`

State:

- hub ready
- product deployment pending
- reference catalog/migration contract preserved
- public API boundary exists

Public API source:

- https://github.com/AnonymousNomad/covert-nexus-api

Public boundary:

- no fabricated publishers, downloads, model scores, releases, or community counts
- executable publication requires real identity/review/integrity controls

Design boundary:

- preserve the living binary-city / data-realm identity

### Covert

Current hub route:

- `/covert/`

Reserved future product hostname:

- `covert.nomadic-labs.dev`

State:

- hub ready
- public product-site deployment pending
- active engineering continues separately

Public source:

- https://github.com/AnonymousNomad/covert-coder

Public boundary:

- distinguish accepted/verified behavior from planned architecture
- no universal-superiority claims
- no silent fallback claims
- releases require evidence

Design boundary:

- preserve Covert's retro workstation / sovereign developer-platform identity

### Workshop

Current route:

- `/workshop/`

State:

- native Nomadic Labs surface

Purpose:

- research
- client work
- open-source contribution
- prototypes
- verification evidence
- release records

An experiment or evidence artifact is not automatically a released product.

## Shared foundations vs product identity

Shared across the ecosystem:

- route and product identity schema
- accessible navigation conventions
- public status semantics
- evidence/release vocabulary
- privacy and security boundary
- Ask Nomadic support handoff
- machine-readable discovery
- common quality gates

Owned by each product:

- visual design system
- application runtime
- product-specific navigation
- authentication
- data model
- tests
- deployment pipeline
- release acceptance

## Subdomain promotion gate

A reserved product hostname does not become canonical until all of these are true:

1. independent deployment exists;
2. custom domain is active and TLS is valid;
3. product navigation includes a clear route back to Nomadic Labs;
4. product status and canonical URL are reflected in the public registry;
5. no private APIs or workstation paths are exposed;
6. sitemap/canonical tags are correct;
7. mobile and accessibility checks pass;
8. public claims match current evidence;
9. rollback path is known;
10. the hub route remains a stable discovery surface.

## Deployment direction

The existing Nomadic Labs umbrella remains on Cloudflare Pages while it is working well.

For new product deployments, choose per product:
- Cloudflare Workers / Static Assets when a new app needs a broader dynamic runtime;
- Cloudflare Pages when a product is intentionally static or the existing Pages workflow is the simpler fit.

Do not migrate a working surface merely for fashion. Migration must buy a concrete capability or reduce operational risk.

## Non-goals

Do not:
- absorb Android/native application source into the public website repo;
- publish private household media through the hub;
- turn internal worktree paths into public metadata;
- clone one visual theme across every product;
- create DNS/subdomain records before a real deployment exists;
- use redirects to hide unfinished product surfaces;
- promote preview builds as production.
