# Verification scripts

This project has no test suite. These eight scripts are what stands in for one.
Run them after `npm run build` - most read `dist/`, not `src/`, so they check
what actually ships.

```bash
npm run build
node scripts/verify-claims.mjs                        # 45 checks
node scripts/verify-pricing.mjs                       # 288 checks
node scripts/verify-brand-marks.mjs
node scripts/verify-css-tokens.mjs
node scripts/verify-seo.mjs
node scripts/verify-rendered-pages.mjs
node scripts/verify-sitemap.mjs
node --experimental-strip-types scripts/verify-locale-parity.mjs
```

Each exits non-zero on failure, so they chain with `&&`.

| Script | What it protects |
|---|---|
| `verify-claims.mjs` | Every module and integration named on the landing page is backed by real source in `ai-backoffice-api` / `ai-backoffice-frontend`. Catches marketing a product that does not exist - including the specific trap that `/campaigns` is a live route with no module behind it, and that workflow steps are not priced while nothing charges for them. |
| `verify-pricing.mjs` | Every price, credit allowance, seat count, knowledge base size, top-up rate, voice rate and add-on on `/pricing/` and `/ro/pricing/` matches the backoffice config (`NEW_LADDER_2026`, `ANNUAL_DISCOUNT`, `ANNUAL_TOPUP_DISCOUNT`, `VOICE_CREDITS_PER_MIN`, `STORAGE_PACKS`), checked in every view a visitor can switch to (monthly or yearly; euro or, on English, dollars), each in its own number format. Dollar figures are checked against the conversion rule in `src/data/pricing.ts` (`USD_RATE`), and must not repeat the euro number. No amount may have cents. Warns while `USD_BILLING_LIVE` in `src/data/pricing.ts` is false. Also fails if the page or llms.txt repeats a statement the billing code contradicts: a free trial, "text conversations", an attachment surcharge, assistants working at zero credits, credits that never expire, per-plan analytics or API access. |
| `verify-brand-marks.mjs` | Every integration named in either locale resolves to a logo file that exists. Without it a renamed item silently renders a cell with no mark. |
| `verify-locale-parity.mjs` | `en` and `ro` stay structurally identical - same keys, same array lengths, same types. A Romanian module list once ran one entry short in production. |
| `verify-css-tokens.mjs` | Every `var(--*)` resolves to a defined token. An undefined custom property does not error - it silently inherits, which once flattened a section's type hierarchy with every other check green. |
| `verify-rendered-pages.mjs` | Every built page has exactly one `<h1>`, no empty headings, no `undefined` in the output, **no link with a valid href but a blank label**, and **every same-site `#fragment` resolving to a real element on the page it targets**. Catches the class of bug that looks broken to a person and passes every build. The blank-label check exists because a key present in `en.ts` and missing from `ro.ts` renders as *nothing* - not as `undefined` - so it slips past every other check here; the dead-anchor check found the skip-to-content link pointing at a non-existent `#main-content` on 10 pages. |
| `verify-sitemap.mjs` | `public/sitemap.xml` is hand-maintained, so it drifts: pages added and never listed, entries left behind. Also forces any off-origin URL to be vetted by reading the rendered body - it once carried a `/docs` link at priority 0.8 that returned HTTP 200 while displaying "Page not found". |
| `verify-seo.mjs` | A unique `<title>` of at most 60 chars and a unique meta description of 120-160 on every page - Google truncates past those, and where two URLs share either it indexes one and drops the other. Plus a canonical matching the route exactly, the `en`/`ro`/`x-default` hreflang triple with `x-default` equal to `en`, an `og:image` whose file actually exists in `dist`, a `twitter:card`, and JSON-LD that parses and carries `@type`. |

**They depend on the sibling repos** being checked out next to this one
(`../ai-backoffice-api`, `../ai-backoffice-frontend`). `verify-claims` reads the
Prisma schema and module directories; it cannot run without them.

## Why these exist

Every one of them was written after something shipped wrong: seat counts
overstated against the product, an entire module missing from the Romanian
site, a logo grid where one cell quietly lost its mark, a price table checked
against the wrong ladder. The build was green each time.

Every one of them was proved to fail on the defect that prompted it before
being trusted - a guard that has never been seen to go red is not a guard.
