# Verification scripts

This project has no test suite. These four scripts are what stands in for one.
Run them after `npm run build` — three of them read `dist/`, not `src/`, so they
check what actually ships.

```bash
npm run build
node scripts/verify-claims.mjs                        # 30 checks
node scripts/verify-pricing.mjs                       # 18 checks
node scripts/verify-brand-marks.mjs
node --experimental-strip-types scripts/verify-locale-parity.mjs
```

Each exits non-zero on failure, so they chain with `&&`.

| Script | What it protects |
|---|---|
| `verify-claims.mjs` | Every module and integration named on the landing page is backed by real source in `ai-backoffice-api` / `ai-backoffice-frontend`. Catches marketing a product that does not exist — including the specific trap that `/campaigns` is a live route with no module behind it. |
| `verify-pricing.mjs` | Every price, credit allowance, seat count and top-up rate in the built HTML matches the plan catalogue in the backoffice. |
| `verify-brand-marks.mjs` | Every integration named in either locale resolves to a logo file that exists. Without it a renamed item silently renders a cell with no mark. |
| `verify-locale-parity.mjs` | `en` and `ro` stay structurally identical — same keys, same array lengths, same types. A Romanian module list once ran one entry short in production. |

**They depend on the sibling repos** being checked out next to this one
(`../ai-backoffice-api`, `../ai-backoffice-frontend`). `verify-claims` reads the
Prisma schema and module directories; it cannot run without them.

## Why these exist

Every one of them was written after something shipped wrong: seat counts
overstated against the product, an entire module missing from the Romanian
site, a logo grid where one cell quietly lost its mark, a price table checked
against the wrong ladder. The build was green each time.
