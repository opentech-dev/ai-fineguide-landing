# Blog evaluation — the improve-results loop for fineguide.ai/blog/

The frozen test the blog's design was improved against (Tesseract's `improve-results` skill). Run it on the built
site, then let `loop.py` decide whether a change is kept.

- `eval/rubric.json` — 21 metrics: 11 **measured** (design_check faults for contrast, layout, tap targets, images and
  runtime; page weight, reading ease, structure basics, phone navigation, first screen and line length —
  `measure.mjs`) and 10 **judged** (purpose, hierarchy, typography, colour, finding the right article, imagery,
  consistency, credibility, next step, "beautiful, organic and distinctive"), each with anchors. Strict: 10 is
  best-in-class (Stripe, Linear, Vercel blogs), `min_gain` 0.2 on the total. Frozen: change it only by starting a
  new ledger.
- `cases.json` — iterated: the index and a long tutorial post; held out: a topic page and an integration guide.
- `eval/ledger.json`, `eval/report.md` — the run of 2026-10-21/22 (below). `eval/pairwise-first-vs-best.json` — the
  final check by a judge the loop never used.

## One round

```bash
npx astro build                                    # from the repo root → dist/
cd scripts/blog-eval && ./evaluate.sh round-7 index post
python3 mkprompts.py round-7 index post
# for each case: a FRESH helper (same model every round; this run: Sonnet) runs rounds/round-7/<case>/judge-prompt.txt
python3 score.py round-7 index post > eval/scores-round-7.json
python3 ../../../tesseract/apps/desktop/resources/builtin-skills/improve-results/scripts/loop.py record \
  --ledger eval/ledger.json --scores eval/scores-round-7.json --label round-7 --change "…" --hypothesis "…"
```

Needs the Tesseract checkout beside this repo (`TESSERACT=…` otherwise): canvas-design's `design_check.mjs` and
Tesseract's Playwright (whose browser build is installed; `PLAYWRIGHT_MODULE` points at it), and PIL for python3.
Judges see `shots.mjs` screens: every image loaded and decoded, the cookie choice already made. `rounds/` (the
screenshots) is not committed. The final check: `python3 pairwise.py <openai key file> rounds <first> <best> out.json`
— gpt-5.5 compares the first and the best version, in both orders.

## The run of 2026-10-21/22

Four ledgers, each started because the test proved wrong (the skill's rule: fix it, start a new ledger, re-score the
baseline, say so — never to make a number go up):

- **v1** — the judges' screens showed most covers blank: a full-page capture paints off-screen images that are
  loaded but not yet decoded as empty. `shots.mjs` now decodes every shown image first. The baseline was re-judged.
- **v2** — two tool artefacts scored as faults: the closed Platform menu (`<details>`, nothing drawn at rest, but
  design_check counted its links over the headline and the name check read them as empty), and the cookie banner
  design_check sees as a first-time visitor. Filtered in `score.py` (documented in the rubric). `ledger-v1.json`.
- **v3** — the fixed link-name check stopped at the logo link's whitespace text instead of its image's alt: a
  measurement bug that cost round 1 two points. Fixed (each candidate name trimmed). `ledger-v2.json`.
- **v4** — round 1 (cards load an 800 px WebP copy of each cover: the index 14.4 → 4.1 MB) gained +0.155, under the
  0.2 bar. It was kept anyway, for page speed (search ranking, phone readers), and decided outside the visual loop:
  the loop restarted with that version as its baseline, so no later round is credited with it. `ledger-v3.json`.

Ledger v4 (baseline 7.69 / 7.81, noise 0.12):

| Round | Change | Total | Verdict |
|---|---|---|---|
| 2 | cover system: light covers on a dark rounded tile, soft-lit placeholders, lead crop | 7.83 | rejected (+0.02) |
| 3 | six latest cards, everything older as a year-grouped editorial archive | 7.90 | rejected (+0.09) |
| 4 | chat on demand (a quiet launcher, no bubble over the text); the CORS-refused signed-in check removed | **8.235** | **kept** |
| 5 | rounds 2 and 3 together on round 4 | 8.19 | rejected |
| 6 | a night footer on the blog; the footer separator readable | 8.21 | rejected |

Round 4 moved runtime health 6 → 10, page weight 5 → 9.5, hierarchy 7.25 → 7.75, organic 6 → 6.5. Rounds 2, 3, 5
and 6 each lifted some judged metrics by a quarter to half a point and lost as much elsewhere: under this test one
judging per round swings a judged metric by about half a point, which hides changes smaller than the 0.2 bar.
Rejected code is kept outside the repo, not shipped. Final check (`eval/pairwise-first-vs-best.json`): gpt-5.5 preferred
the best version over the first in both orders (confidence 4 and 5) — on beauty and organic feel, hierarchy,
credibility and the phone; typography a tie.

After the loop, the posts themselves had an editorial pass (titles, descriptions, heading levels, alt texts, three
duplicates retired with 301s) — content, applied for search, not scored here.

Open in the best version (the judges' and the tools' issues): the archive of 2024 posts dilutes the message; the grid
below the hero has no rhythm and the page is flat navy after the hero; the white footer; stock and logo covers; small
tap targets in the footer and on "RSS feed"; one post jumps from h1 to h3.
