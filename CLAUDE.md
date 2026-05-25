# ai-fineguide-landing

Astro static site for `fineguide.ai` marketing pages, blog, and the platform showcase. Deployed via Jenkins to `fg-prod` ingress.

## Structure

| Path | Purpose |
|---|---|
| `src/` | Astro pages, components, layouts |
| `blog/` | Blog posts (Markdown content) |
| `platform/` | Platform feature pages |
| `public/` | Static assets (images, fonts, favicons) |
| `docs/` | Long-form internal docs (workflows, prompts, business descriptions) |
| `astro.config.mjs` | Astro build config |
| `Dockerfile` | Production container (serves `dist/` over nginx or Node static server) |
| `docker-entrypoint.sh` | Container entrypoint |
| `build.config` | Jenkins / K8s deploy config |
| `_backup/` | Snapshots from previous redesigns (read-only — don't edit) |

## Quickstart

```bash
npm install
npm run dev         # http://localhost:4321 (Astro default)
npm run build       # outputs to dist/
npm run preview     # serve dist/ locally
```

For working on the landing in concert with the rest of the platform, run `../ai-fineguide-project/update.sh` and access the live stack at `https://localhost` — the landing is NOT currently mounted under that gateway (it's a separate domain), so dev iteration is done directly via `npm run dev`.

## Conventions

- **Static-only**. No server runtime; everything builds to static HTML/CSS/JS via Astro.
- **Tailwind v4** via `@tailwindcss/vite`.
- **Multilingual**: pages may have `-ro` / `-en` variants depending on the route; check `src/pages/` for the current scheme.
- **Blog**: posts are Markdown files in `blog/` consumed by Astro's content collections.
- **Internal docs**: `docs/ai-assistant-workflows.md`, `docs/prompt.md`, `docs/goals.md`, `docs/website-description.md` describe content strategy + AI-assistant workflows specific to this site.

## Troubleshooting

### Build fails — Tailwind / PostCSS error

Tailwind v4 changed config syntax (no more `tailwind.config.js`). Check `src/styles/` for `@tailwind` directives and the `vite.config` Tailwind plugin registration.

### `astro dev` HMR not reflecting changes

The Astro dev server occasionally misses changes in nested `src/components/`. `Ctrl+C` and restart; this is a known Astro quirk, not a bug in this repo.

### Deployment to `fineguide.ai` not picking up

Check the build at Jenkins (`https://builds.fineguide.ai/job/ai-fineguide-landing/...`). The deploy maps `master` → `fg-prod`. cert-manager handles TLS at the ingress level.

## See also

- Cross-repo operational docs: [INFRASTRUCTURE](../ai-fineguide-project/docs/INFRASTRUCTURE.md), [PROCEDURES](../ai-fineguide-project/docs/PROCEDURES.md), [PLAYBOOKS](../ai-fineguide-project/docs/PLAYBOOKS.md)
- AI-assistant content workflows: [docs/ai-assistant-workflows.md](docs/ai-assistant-workflows.md)
- Onboarding: [../ai-fineguide-project/ONBOARDING.md](../ai-fineguide-project/ONBOARDING.md)
