# Security Policy

## Overview

The Neuro_Nomad portfolio site is a static site served via GitHub Pages. It collects no data, runs no analytics, sets no cookies, embeds no third-party scripts, and loads no external fonts. The Content-Security-Policy meta tag in `index.html` enforces this at the browser level.

## Reporting a vulnerability

If you find a security issue in this site or any of the showcased repos, please open a GitHub issue on the affected repo with the `security` label, or contact the maintainer via GitHub.

## Threat model

The site is intentionally hostile to:

- **Third-party trackers** — none loaded
- **External CDNs** — none referenced
- **Web fonts** — system stack only
- **Cookies** — none set
- **Form submissions** — none accepted
- **localStorage writes from external origins** — sandboxed iframe policy enforced

## Repo-specific security

Each showcased repo has its own security model. See their SECURITY.md files:

- [AIDE Sovereign Workbench](https://github.com/AnonymousNomad/aide-sovereign-workbench/blob/main/SECURITY.md)
- [Cyber SOP Harness](https://github.com/AnonymousNomad/cyber-sop-harness/blob/main/SECURITY.md)
- [Vitalis Core](https://github.com/AnonymousNomad/Vitalis_core)
- [Vitalis Devcore](https://github.com/AnonymousNomad/Vitalis_Devcore)
- [GhostCode](https://github.com/AnonymousNomad/Ghostcode)
- [LOREIN](https://github.com/AnonymousNomad/LOREIN-Sovereign-Entity)
