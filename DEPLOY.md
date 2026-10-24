# Nomadic Labs — Deployment

Canonical domain:

- https://nomadic-labs.dev/

Current Cloudflare Pages project:

- `nomadic-labs-hub`

## Source and configuration

Deployment configuration is source-controlled in `wrangler.toml`.

The site currently uses:
- static HTML/CSS/ES modules
- Cloudflare Pages
- Pages Functions
- Workers AI binding `AI`

Never place Cloudflare credentials or OAuth tokens in the repository.

## Preview-first workflow

From a clean repository checkout:

```powershell
npm run build
wrangler pages deploy --project-name nomadic-labs-hub --branch <preview-branch> --commit-dirty=true
```

`npm run build` creates a curated `dist/` artifact. Cloudflare must publish that artifact, not the repository root. Legacy source, internal docs, screenshots, and superseded components remain outside the public deployment.

Use a non-production branch for design and integration work.

Minimum preview checks:
- root returns 200
- About, Status, Privacy, TV, Nexus, Covert, and Workshop return 200
- representative child routes return 200
- `GET /api/site-registry` returns the expected schema
- `GET /.well-known/nomadic-labs.json` returns the hub contract
- `GET /api/guide` returns health 200
- `POST /api/guide` answers from public knowledge
- private-data and prompt-injection tests are refused
- mobile navigation does not clip
- reduced-motion behavior remains usable
- no stale or private implementation paths appear in public output

## Production gate

Do not promote a preview merely because deployment succeeds.

Production requires:
1. accepted source commit;
2. route verification;
3. guide verification;
4. public status review;
5. privacy/security review;
6. responsive visual review;
7. rollback path.

Current custom domains:
- `nomadic-labs.dev`
- `www.nomadic-labs.dev`

## Product deployments

The hub repository does not absorb application source.

Reserved future product hostnames:
- `tv.nomadic-labs.dev`
- `nexus.nomadic-labs.dev`
- `covert.nomadic-labs.dev`
- `releases.nomadic-labs.dev`

Do not create or advertise a product hostname as live until its independent deployment passes the subdomain promotion gate in `docs/CONSOLIDATION_MAP.md`.

The stable hub routes remain available whether or not a product later receives its own hostname.

## Platform direction

Cloudflare currently recommends Workers as the primary platform for new applications, while Pages remains supported and suitable for the existing hub. New product deployments should choose Workers/Static Assets or Pages based on actual runtime needs rather than forcing one hosting model across every project.
