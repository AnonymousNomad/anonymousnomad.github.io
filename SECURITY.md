# Nomadic Labs — Security Policy

## Public-site boundary

Nomadic Labs is a public website. It must never become a bridge into private workstation state.

Public website data may include:
- approved project descriptions and status
- public repository links
- public release/evidence metadata
- public client case-study material
- public documentation

The website must not expose:
- credentials or provider keys
- private workstation files
- private model memory
- personal records
- private client material
- unrestricted backups
- unpublished secrets embedded in build artifacts

## Embedded site guide

The Ask Nomadic guide runs through a Cloudflare Pages Function and Workers AI.

Security requirements:
- inference occurs server-side through the Cloudflare AI binding
- no Cloudflare token is shipped to the browser
- the guide is grounded in the source-controlled public registry
- visitor instructions cannot override the guide's private-data boundary
- unknown information must not be invented
- project status must distinguish active engineering, verification, and released work
- responses are not a privileged control channel into the developer workstation

## Browser policy

The current site:
- loads scripts and styles from self
- does not load third-party analytics
- does not load third-party advertising
- does not require geolocation, camera, microphone, or payment permissions
- uses restrictive response headers in _headers
- uses page-level Content-Security-Policy declarations

If external media, analytics, advertising, authentication, or payments are added later, update the threat model and CSP intentionally.

## Product boundaries

Nomadic TV, Nexus, and Covert have separate security and trust models.

The umbrella site must not imply that:
- a Nexus submission is approved because it is visible to an owner
- a package is safe because metadata exists
- a Nomadic TV provider route grants redistribution rights
- a Covert capability is released because it appears in architecture documents

## Reporting

Report vulnerabilities through the relevant public GitHub repository when one exists. Do not post credentials, private tokens, or sensitive exploit material into a public issue.
