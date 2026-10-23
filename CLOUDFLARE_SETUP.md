# Nomadic Labs — Cloudflare Deployment Contract

Canonical domain: nomadic-labs.dev

## Verified Cloudflare state — 2026-10-23

Cloudflare Pages project:
- nomadic-labs-hub

Custom domains:
- nomadic-labs.dev — Active
- www.nomadic-labs.dev — Active

DNS:
- apex and www are routed through Cloudflare to nomadic-labs-hub.pages.dev
- do not create duplicate records

## Source truth

GitHub source:
- AnonymousNomad/anonymousnomad.github.io

Current consolidation work:
- branch: feat/labs-guide-foundation-20261023
- production custom domain remains unchanged until the preview branch is explicitly accepted

## Pages Functions

The site uses Pages Functions for:
- /api/guide
- /api/site-registry

Workers AI binding:
- AI

The AI binding is server-side. No account token belongs in browser code or repository content.

## Route architecture

Current umbrella routes:
- / — Nomadic Labs
- /tv/ — Nomadic TV
- /nexus/ — Nexus
- /covert/ — Covert
- /workshop/ — research/client/open-source/release index

Product-specific subdomains may be introduced later without invalidating these stable umbrella routes:
- tv.nomadic-labs.dev
- nexus.nomadic-labs.dev
- covert.nomadic-labs.dev
- releases.nomadic-labs.dev

## R2

R2 is artifact/media storage, not source-control truth.

Never place plaintext credentials, provider keys, personal documents, or unrestricted workstation backups in public buckets.

See R2_LAYOUT.md.

## Promotion gate

Do not point production at a new branch until:
- preview routes pass
- public registry passes
- Ask Nomadic passes grounded-answer tests
- private-data/prompt-injection tests pass
- product status claims match canonical sources
- no private app/gateway API is accidentally exposed
- design changes preserve the product boundaries
