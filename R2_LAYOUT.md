# Nomadic Labs — R2 Layout

## Buckets

### nomad-public-releases
Public, verified release artifacts only.

Object convention:
`<product>/<version>/<platform>/<artifact>`

Each published release should record:
- product
- version
- platform / architecture
- release date
- source repository
- source commit SHA
- SHA-256
- byte size
- release notes
- provenance / verification status

### nomad-site-media
Public screenshots, demos, product artwork, documentation media.

### nomadic-tv-media
Only material that Nomadic Labs owns or is explicitly permitted to host.
Provider-hosted/licensed HLS feeds stay provider-hosted unless the contract authorizes replication.

### nomad-project-archive
Private retained release/evidence bundles and project archives.

### nomad-private-workspace
Private selected working artifacts. This is not a password vault and not a substitute for Git.

## Access policy
Workers receive scoped credentials:
- public release publisher: write only to release/media buckets needed for the mission
- project worker: no account-wide Cloudflare token
- private archive access: only when mission-authorized
- destructive bucket administration remains operator-controlled

Never share the Cloudflare account password with an AI worker.
