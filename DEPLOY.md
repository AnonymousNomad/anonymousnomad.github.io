# Nomadic Labs — Cloudflare Pages Deployment

Canonical domain: https://nomadic-labs.dev/

Cloudflare Pages project: nomadic-labs-hub

## Working copy

Current repository checkout:

E:\\nomadic-labs-cloudflare-preview

## Configuration

wrangler.toml is source-controlled and defines:
- project name
- build output directory
- compatibility date
- Workers AI binding AI

Do not place credentials or OAuth tokens in the repository.

## Preview deployment

Use a non-production branch for verification.

From E:\\nomadic-labs-cloudflare-preview, run Wrangler Pages deploy against project nomadic-labs-hub and pass a non-production --branch value.

Verify the exact preview deployment before promoting anything.

Minimum checks:
- root returns 200
- /tv/, /nexus/, /covert/, /workshop/ return 200
- representative child routes return 200
- GET /api/site-registry returns the expected registry
- GET /api/guide returns health 200
- POST /api/guide returns a grounded answer
- private-data and prompt-injection checks are refused
- no stale route claims or broken product links

## Production

Do not overwrite production merely because preview deployment succeeds.

Promote only an accepted commit/branch after verification.

Current custom domains:
- nomadic-labs.dev
- www.nomadic-labs.dev

Both domains were verified Active in Cloudflare Pages on 2026-10-23.

## Product deployments

The umbrella repository does not absorb application source.

Future product-specific deployments may be connected through:
- tv.nomadic-labs.dev
- nexus.nomadic-labs.dev
- covert.nomadic-labs.dev
- releases.nomadic-labs.dev

Those may remain independent Cloudflare projects while the umbrella routes continue to provide stable discovery/navigation.

## Recovery

Before a major visual rewrite:
1. commit the current accepted content architecture;
2. create a new design branch;
3. preserve src/data/site-registry.js, src/data/section-registry.js, Pages Functions, and route contracts unless the migration itself requires changes;
4. verify the public registry and guide after every major restructuring.
