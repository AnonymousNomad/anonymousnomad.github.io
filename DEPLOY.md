# Deploy — AnonymousNomad portfolio to GitHub Pages

The site is at `E:\portfolio-research\portfolio-v2\`. It is a static site (no build step) with a GitHub Actions workflow that deploys to Pages on push to `main`.

## One-time setup (do this once)

1. **Create the GitHub repo** (or use the existing one):
   - `https://github.com/AnonymousNomad/anonymousnomad.github.io`
   - The repo name MUST be `anonymousnomad.github.io` for it to serve at the root domain.

2. **Enable GitHub Pages** in the repo settings:
   - Settings → Pages → Source = **GitHub Actions** (not "Deploy from a branch").
   - The included `.github/workflows/pages.yml` handles the rest.

3. **Confirm `.nojekyll` is present** (it is). This tells Pages to skip Jekyll processing — important because our `src/main.js` and `src/styles/` paths need to be served as-is, not transformed.

## Deploy (every time)

```powershell
cd E:\portfolio-research\portfolio-v2

# Stage everything
git add .

# Commit
git commit -m "Deploy portfolio v2 — 8 sections, 25 evidence files, 54 passing tests"

# Set the remote (one-time only — if you've done this before, skip)
git remote add origin https://github.com/AnonymousNomad/anonymousnomad.github.io.git

# Push
git branch -M main
git push -u origin main
```

The GitHub Actions workflow fires automatically. Watch it at:
`https://github.com/AnonymousNomad/anonymousnomad.github.io/actions`

When it's done, the site is live at:
`https://anonymousnomad.github.io/`

## Verify the deploy

```powershell
Invoke-WebRequest -Uri "https://anonymousnomad.github.io/" -UseBasicParsing
Invoke-WebRequest -Uri "https://anonymousnomad.github.io/src/data/evidence/lorein-sample-journal.jsonl" -UseBasicParsing
```

Both should return 200. If you see 404 on the evidence files, the most common cause is that GitHub Pages is serving the site from a subpath (e.g. `/portfolio-v2/`) instead of the root. To fix: **Settings → Pages → Source = GitHub Actions** and **don't set a custom domain until the path is right**.

## CSP caveat

The site has a strict Content-Security-Policy in `<meta>`:
- `default-src 'self'`
- `script-src 'self'`
- `style-src 'self' 'unsafe-inline'`
- `connect-src 'self' https://api.github.com` (for the GitHub stars badge)

If you ever add analytics or external scripts, update the CSP.

## What gets deployed

The full site is 12 files at the top level + 20+ source files:

```
portfolio-v2/
├── .github/workflows/pages.yml       ← auto-deploy
├── .nojekyll                          ← skip Jekyll
├── .gitignore
├── index.html                         ← entry
├── llms.txt                           ← AI-agent readable summary
├── README.md
├── SECURITY.md
├── LICENSE
├── src/
│   ├── main.js                        ← mounts all 8 sections
│   ├── data/
│   │   ├── repos.js                   ← repo metadata (source of truth)
│   │   ├── bio.js
│   │   └── evidence/                  ← 25 evidence files (proof gallery)
│   ├── components/
│   │   ├── header.js, footer.js
│   │   ├── proof/
│   │   │   ├── proof-panel.js
│   │   │   └── proof-gallery.js
│   │   └── sections/
│   │       ├── hero.js
│   │       ├── about.js
│   │       ├── aide.js
│   │       ├── ghostcode.js
│   │       ├── vitalis.js
│   │       ├── cyber.js
│   │       └── lorein.js
│   └── styles/
│       ├── tokens.css
│       └── global.css
```

No build step. No bundler. Just static files served by GitHub Pages.

## What to do if the deploy fails

| Symptom | Fix |
|---|---|
| Workflow says "pages build and deployment failed" | Check the Actions log; usually a YAML syntax issue in `.github/workflows/pages.yml` |
| Site loads but CSS is missing | The `src/styles/*.css` links must use relative paths — already done |
| Evidence files 404 | Confirm `.nojekyll` is committed (not gitignored) |
| Stars badge broken | `connect-src` CSP must include `https://api.github.com` — already does |
| Test page shown instead of index.html | Repo name is wrong — must be `anonymousnomad.github.io` exactly |

## After deploy

- **Pin the repo** so it's the first thing visitors see on your profile
- **Update the repo description** to: "Sovereign software portfolio — 6 repos, 54 passing tests, all with verified evidence."
- **Add topics**: `portfolio`, `sovereign-ai`, `offline-first`, `ghostcode`, `vitalis`, `lorein`, `static-site`
- **Enable Discussions** if you want feedback
