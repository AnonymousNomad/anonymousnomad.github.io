# Neuro_Nomad Portfolio

> Sovereign systems. Local-first. Forever offline.

Personal portfolio site for Neuro_Nomad (GitHub: [@AnonymousNomad](https://github.com/AnonymousNomad)) — licensed electrician turned self-taught solo developer. Showcases 6 open-source projects: AIDE Sovereign Workbench, GhostCode, Vitalis Core, Vitalis Devcore, Cyber SOP Harness, and LOREIN.

**Live at:** https://anonymousnomad.github.io/

## Stack

- Plain HTML5 + CSS custom properties + native ES modules
- No build step. No framework. No Tailwind. No bundler. No transpiler.
- No web fonts (system stack). No CDN. No analytics. No cookies. No tracking.
- Strict Content-Security-Policy meta tag in `index.html`

## Sections (in scroll order)

1. **Hero** — AIDE flagship, 9-step closed loop, live stats
2. **About** — electrician → AI architect, "How I work" pipeline, 3 principles
3. **AIDE** — flagship detail: 3 model packs, the 9-step loop expanded
4. **GhostCode** — cyan island, the user-journey terminal, 5-step walkthrough
5. **Proof** — 25 evidence files, 4 finished repos, 54 tests passing
6. **Vitalis** — both engines (Core + Devcore), CLI examples, status cards
7. **Cyber SOP Harness** — governance loop, 6 key types
8. **LOREIN** — dual-process cognition, tamper-evident journal, CLI example

The **Proof** section between GhostCode and Vitalis is the new honesty layer. It shows real artifacts (test output, CLI transcripts, sample journal, captured ghost) for the 4 finished reference implementations. No screenshots — the actual files.

## File map

```
portfolio-v2/
├── index.html                      ← single entry point, has CSP meta tag
├── llms.txt                        ← AI-agent readable summary
├── SECURITY.md                     ← security model + reporting
├── LICENSE                         ← Apache-2.0
├── README.md                       ← this file
├── DEPLOY.md                       ← how to push to GitHub Pages
├── .nojekyll                       ← tells Pages to skip Jekyll
├── .github/
│   └── workflows/
│       └── pages.yml               ← auto-deploy to GitHub Pages
└── src/
    ├── main.js                     ← entry, mounts all 8 sections
    ├── styles/
    │   ├── tokens.css              ← design tokens (colors, type, motion)
    │   └── global.css              ← reset + utilities + reusable components
    ├── components/
    │   ├── header.js
    │   ├── footer.js
    │   ├── proof/                  ← Proof section panels
    │   │   ├── proof-panel.js        (stats / terminal / JSON renderers)
    │   │   └── proof-gallery.js      (composes 4 finished repos' evidence)
    │   └── sections/
    │       ├── hero.js             ← AIDE flagship, 9-step closed loop
    │       ├── about.js            ← electrician → AI architect
    │       ├── aide.js             ← flagship detail
    │       ├── ghostcode.js        ← cyan island, concept demo
    │       ├── vitalis.js          ← cognitive engines (consolidated)
    │       ├── cyber.js            ← security & governance
    │       └── lorein.js           ← persistent cognitive entity (reference impl)
    ├── data/
    │   ├── repos.js                ← all repo metadata (single source of truth)
    │   ├── bio.js                  ← bio data
    │   └── evidence/               ← 25 proof files (bundled, served at runtime)
    └── lib/
        └── github.js               ← minimal GitHub API helper with localStorage cache
```

## Local preview

```bash
# From the portfolio-v2/ directory:
python3 -m http.server 4173
# or
npx --yes serve@latest -l 4173
```

Open http://127.0.0.1:4173/

## Design system

- **Palette:** matrix green (system-active), neon purple (primary), neon blue (links), cyan-400 (GhostCode only), deep black, off-white
- **Shape:** heavy border-radius, NO sharp corners, glassmorphism, blur, glow
- **Typography:** system stack only. No Google Fonts.
- **Motion:** respects `prefers-reduced-motion`. No autoloop animations.
- **OKLCH:** fallback tokens for wide-gamut displays

## Repo metadata

All project content (names, taglines, descriptions, features, links, test counts) is centralized in `src/data/repos.js`. Edit there to update across the whole site.

## Publishing to GitHub Pages

The site auto-deploys to `https://anonymousnomad.github.io/` on every push to `main` via the workflow in `.github/workflows/pages.yml`. No build step required.

See [`DEPLOY.md`](./DEPLOY.md) for the exact commands.

## What's been verified (2026-09-07)

The site is the **honest** surface. Behind each "active" or "reference-impl" status badge is a real reference implementation with passing tests:

| Repo | Tests | Status |
|---|---|---|
| AIDE Sovereign Workbench | 265 (per repo) | Real, untouched |
| GhostCode | 14/14 | Real clone engine + Phase 3 inspector |
| Vitalis_core | 11/11 | Consolidated, `fsi-chat` runs |
| Vitalis_Devcore | 13/13 | Consolidated, `devcore` runs |
| Cyber SOP Harness | 48 (per repo) | Real .NET, governance CLI |
| LOREIN | 16/16 | Reference impl ships, `lorein reflect` runs |

**54 tests pass total.** See the **Proof** section in the live site for the actual artifacts.

## Design and build process

This site was designed and built using the skills-first methodology:

1. Research similar sites (replay.io, linear.app, sentry.io, vercel.com)
2. Write skills (research + doctrine + files + threat model + pitfalls)
3. Load skills, confirm scope
4. Build per the skills, one section at a time
5. **For every unfinished repo: build a reference implementation, write tests, save evidence, update the site**

The research, skills, and reference implementations used to build this site are in sibling directories (`E:\ghostcode-build`, `E:\vitalis-core-build`, `E:\vitalis-devcore-build`, `E:\lorein-build`) and in `E:\portfolio-research\skills\packs\`.

## License

Apache-2.0. See `LICENSE`.

## Contact

- GitHub: https://github.com/AnonymousNomad
- Sponsors: https://github.com/sponsors/AnonymousNomad
