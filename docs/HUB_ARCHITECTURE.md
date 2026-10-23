# Nomadic Labs — Public Hub Architecture

## Decision

Nomadic Labs uses an endorsed multi-product architecture:

- one umbrella identity;
- one shared public control plane;
- independently deployable product worlds;
- shared standards underneath;
- distinct product design above them.

This mirrors the useful part of mature multi-brand systems: common structure and governance without erasing brand identity.

## Why this model

A single giant site/repository would create the wrong coupling:
- Nomadic TV is an Android/OTT/media system;
- Nexus is a catalog/community/distribution platform;
- Covert is a governed AI developer platform;
- Workshop is a public evidence and portfolio surface.

Those products have different runtimes, threat models, release cycles, and interface needs.

The hub should own the things that benefit from being common:
- public identity
- discovery
- project status
- support routing
- release/evidence conventions
- privacy boundary
- machine-readable metadata

## URL model

Stable hub routes:

- `nomadic-labs.dev/tv/`
- `nomadic-labs.dev/nexus/`
- `nomadic-labs.dev/covert/`
- `nomadic-labs.dev/workshop/`

Reserved product hostnames:

- `tv.nomadic-labs.dev`
- `nexus.nomadic-labs.dev`
- `covert.nomadic-labs.dev`
- `releases.nomadic-labs.dev`

The stable hub route is always useful as an overview and handoff. A product hostname becomes canonical only after the product actually has an independent public deployment.

## Shared contract

The hub exposes:

- `/api/site-registry`
- `/.well-known/nomadic-labs.json`
- `/llms.txt`
- `/status/`
- `/api/guide`

These are the public interoperability surfaces future sites and assistants can use.

## Shared shell

Every product public site should provide a small, accessible path back to Nomadic Labs and the other project worlds.

The shared shell should stay intentionally thin:
- Labs
- Nomadic TV
- Nexus
- Covert
- Workshop
- Status

Do not share the entire Nomadic Labs visual design system with product worlds.

## Design-system rule

Share **semantics**, not appearance.

Shared:
- focus visibility
- keyboard behavior
- breakpoint expectations
- status vocabulary
- loading/error truthfulness
- security/privacy language
- release/evidence semantics

Product-owned:
- color
- typography
- motion
- scene design
- component styling
- content hierarchy specific to that product

## Cloudflare strategy

Existing umbrella:
- keep on Pages while stable.

New dynamic products:
- prefer Workers/Static Assets when broader runtime features are useful.

Static product/reference surfaces:
- Pages remains acceptable.

Custom subdomains are attached only after the destination project exists and is verified. DNS is an activation step, not a placeholder mechanism.

## Search and canonical behavior

- every public surface gets one canonical URL;
- preview `pages.dev` URLs are not promoted as canonical;
- hub overview pages and product apps should not duplicate identical full content;
- sitemaps list only public intended routes;
- if a route later becomes a redirect, use a deliberate permanent/temporary status based on migration intent.

## Release architecture

Release artifacts belong outside application repositories when appropriate.

Public release records should bind:
- product
- version
- platform/architecture
- release date
- source repository
- source commit
- SHA-256
- byte size
- notes
- verification/provenance status

R2 layout is documented separately.

## Acceptance statement

The public hub is considered consolidation-ready when:
- all project identities exist in one registry;
- hub navigation reaches every product;
- product pages preserve independent identity contracts;
- Ask Nomadic can route visitors correctly;
- status is truthful;
- privacy boundary is explicit;
- no private workstation details are published;
- future subdomains are reserved in architecture but not falsely presented as live.
