# Nomadic Labs — Cloudflare Deployment Contract

Canonical domain: `nomadic-labs.dev`

## Source truth
- GitHub source: `AnonymousNomad/anonymousnomad.github.io`
- Production branch remains `main` until the Nomadic Labs preview is explicitly accepted.
- Preview branch: `feat/nomadic-labs-hub`
- Do not merge or repoint production merely to make deployment convenient.

## Cloudflare Pages
Create one Pages project from the GitHub repository above.

Preview configuration:
- branch: `feat/nomadic-labs-hub`
- framework preset: None
- build command: none
- output directory: repository root

After visual/functional acceptance:
- production branch may be changed to the accepted release branch or merged into `main`
- attach `nomadic-labs.dev` and `www.nomadic-labs.dev`

## Planned product surfaces
- `nomadic-labs.dev` — developer/company hub
- `tv.nomadic-labs.dev` — Nomadic TV
- `nexus.nomadic-labs.dev` — ToolNeuron/Nexus
- `covert.nomadic-labs.dev` — Covert
- `releases.nomadic-labs.dev` — public release/artifact surface

These may point to independent projects while sharing the same Cloudflare account and DNS zone.

## R2
R2 is artifact/media storage, not source-control truth.

Never place plaintext credentials, provider keys, personal documents, or unrestricted workstation backups in public buckets.

See `R2_LAYOUT.md`.
