# fineguide.ai/blog/ looks and reads like a mature, premium editorial blog for a professional AI-first CRM and business-automation company: beautiful, organic and cozy rather than template-like, effortless to read on desktop and phone, easy to find the right article, and technically clean. Owner's words (2026-10-21): 'nice and modern, cozy looking, polished and clean', 'beautiful and organic', the hero was 'boring and simplistic'.

Best version: **round-4** — total 8.235 (baseline 7.687, noise 0.119). Still running.

| Metric | Baseline | Best | Change |
|---|---|---|---|
| Text contrast | 9.0 | 9.0 | +0.00 |
| Layout integrity | 10.0 | 10.0 | +0.00 |
| Tap targets | 8.0 | 8.0 | +0.00 |
| Image quality | 9.5 | 9.5 | +0.00 |
| Runtime health | 6.0 | 10.0 | +4.00 |
| Page weight | 5.0 | 9.5 | +4.50 |
| Reading ease | 8.375 | 8.375 | +0.00 |
| Structure and accessibility basics | 9.0 | 9.0 | +0.00 |
| Phone navigation | 10.0 | 10.0 | +0.00 |
| First screen | 10.0 | 10.0 | +0.00 |
| Line length | 7.55 | 7.55 | +0.00 |
| Purpose clarity | 7.75 | 8.0 | +0.25 |
| Visual hierarchy | 7.25 | 7.75 | +0.50 |
| Typography and readability | 7.5 | 7.75 | +0.25 |
| Colour and atmosphere | 7.25 | 7.25 | +0.00 |
| Finding the right article | 6.75 | 7.0 | +0.25 |
| Imagery and covers | 5.75 | 6.0 | +0.25 |
| Consistency | 7.25 | 7.5 | +0.25 |
| Credibility and premium feel | 6.5 | 6.75 | +0.25 |
| Next step | 7.25 | 7.5 | +0.25 |
| Beautiful, organic and distinctive | 5.75 | 6.5 | +0.75 |

| Round | Change | Total | Verdict |
|---|---|---|---|
| round-2 | cover system: light covers (logos, white screenshots) are set by the build on a dark rounded tile under the violet light; coverless posts get one of four soft-lit organic placeholders with the topic in italic Fraunces; the lead card crops its screenshot from the top-left | 7.83 | rejected — total 7.83 is not more than 0.2 above the best (7.806, gain 0.024) |
| round-3 | index: the six newest posts as cards, everything older as a quiet editorial archive grouped by year (a large italic year beside dated rows of title, topic and reading time, no images) | 7.9 | rejected — total 7.9 is not more than 0.2 above the best (7.806, gain 0.094) |
| round-4 | the blog makes no background calls until the reader asks: a quiet 'Ask Fineguide' launcher loads and opens the chat on click (no greeting bubble over the text, no widget bundles on load); the navbar's signed-in check, refused by CORS on every page view, removed site-wide | 8.235 | kept |
| round-5 | rounds 2 and 3 together on the round-4 page: the cover system (light covers on a dark rounded tile, four soft-lit placeholders, the lead crop from the top-left) plus the year-grouped archive below six latest cards | 8.186 | rejected — total 8.186 is not more than 0.2 above the best (8.235, gain -0.049) |
| round-6 | the blog's footer is a night footer (the blog's ink, lines and violet light, the white logo) instead of the site's white block; the footer separator gets readable contrast | 8.211 | rejected — total 8.211 is not more than 0.2 above the best (8.235, gain -0.024) |

Open issues in the best version:
- Text contrast: [index] desktop-light: contrast on <span.text-[var(--color-border)]> "|" 1.2:1 needs 4.5
- Text contrast: [post] desktop-light: contrast on <span.text-[var(--color-border)]> "|" 1.2:1 needs 4.5
- Tap targets: [index] phone-light: tap-target on <a.sr-only.focus:not-sr-only> "Skip to content" 1×1
- Tap targets: [index] phone-light: tap-target on <a> "RSS feed" 62×22
- Tap targets: [index] phone-light: tap-target on <a.text-sm.text-[var(--color-muted)]> "Home" 121×20
- Image quality: [index] desktop-light: image-low-res on <img> "" /blog/media/6d373972d8d46662eae3179b-800.webp
- Page weight: [index] heavy files: d674e928012ba2dfc3452c2e.png 317 KB
- Reading ease: [index] reading ease 47 is below 60: shorter sentences and words
- Structure and accessibility basics: [post] heading jumps h1→h3: "Why knowledge matters"
- Line length: [index] median line length 42.7 is outside 45–80
- Line length: [index] 1 paragraphs set outside 45–80 characters a line
- Line length: [post] 2 paragraphs set outside 45–80 characters a line
- Purpose clarity: [index] desktop-1: headline is poetic; 'conversations' does not say CRM or automation until the lede is read
- Purpose clarity: [index] desktop-1: no line saying who the blog is for or why to read it beyond 'practical guides'
- Purpose clarity: [index] desktop-4/5: the archive of 2024 posts (Gemini, GPT-4o, Claude 3.5) dilutes the premium-company message
- Visual hierarchy: [index] desktop-2 to 5: Latest articles is a flat grid of about 20 equal cards; nothing leads or varies rhythm
- Visual hierarchy: [index] desktop-1: the lead Featured card's screenshot is cropped awkwardly and competes with the headline text
- Visual hierarchy: [index] desktop-5: Explore by topic repeats the filter bar and dead-ends in an orphaned fifth card
- Typography and readability: [index] desktop-2/3: excerpts in the same serif at nearly the same weight as titles make cards dense and text-heavy
- Typography and readability: [index] desktop-1: tiny grey meta ('Tutorials . 3 min read', dates) is low contrast and small
- Typography and readability: [index] desktop-2: Cyrillic card title falls back to a heavier, differently shaped face
- Colour and atmosphere: [index] desktop-1 to 5: below the hero the page is a flat deep navy with identical navy cards; the warm light of the hero is gone
- Colour and atmosphere: [index] desktop-5: footer switches abruptly to a near-white block, a hard break from the dark page
- Colour and atmosphere: [index] desktop-2/4: bright white and pastel covers (ElevenLabs, amoCRM, OpenAI, Gemini, HelpScout) punch holes in the dark atmosphere
- Finding the right article: [index] desktop-2 to 5: Latest articles is about 20 cards on one endless page with no pagination, year grouping or load-more
- Finding the right article: [index] desktop-5: Explore by topic duplicates the filter bar, and its tiles use cropped, faded cover images that are hard to read
- Finding the right article: [index] desktop-4/5: duplicate titles ('Ai Assistant with Math formulas support' twice, AppSumo twice, amoCRM/Kommo twice) confuse choosing
- Imagery and covers: [index] desktop-3: the 'The Week in AI' card has no image, only the word 'News' on a gradient: an empty frame
- Imagery and covers: [index] desktop-2/3/4: white logo-on-white covers (ElevenLabs, amoCRM, OpenAI, HelpScout) feel unfinished and clash with the dark page
- Imagery and covers: [index] desktop-1: lead Featured cover is a cropped screenshot with cut-off headline text ('ssages into sales.')
- Consistency: [index] desktop-1: the featured cards use a different layout (horizontal lead, larger text) and differ from the grid, with the chip tint changing across covers
- Consistency: [index] desktop-2 to 4: category chip is grey-translucent on light covers and dark on dark covers
- Consistency: [index] desktop-5: footer is a light, differently styled block with different link styling from the dark page
- Credibility and premium feel: [index] desktop-3/4: duplicated posts (two 'Ai Assistant with Math formulas support', two AppSumo launches) look careless
- Credibility and premium feel: [index] desktop-4: dated 2024 posts (GPT-4o, Claude 3.5 Sonnet) and the E=mc2 chalkboard stock photo read cheap
- Credibility and premium feel: [index] desktop-2: a Russian-language post appears unlabelled among English posts
- Next step: [index] desktop-5: the only product CTA sits at the very bottom after about 20 cards; nothing mid-page
- Next step: [index] desktop-2: RSS feed is a small grey text link, an easy-to-miss way to follow
- Next step: [index] no newsletter or email subscribe, so following the blog depends on RSS
- Beautiful, organic and distinctive: [index] desktop-2 to 5: the grid is a strict three-column set of identical boxes with no organic rhythm, overlaps or varied sizes
- Beautiful, organic and distinctive: [index] desktop-2 to 5: flat navy background with no texture, light or illustration; the atmosphere stops after the hero
- Beautiful, organic and distinctive: [index] desktop-5: Explore by topic tiles and the lone fifth tile are generic and boxy, leaving a dead empty area

Sources consulted:
- judges' baseline issues: white logo tiles glare, empty 'News' cover, lead screenshot cut mid-word
- round-2 judges: uniform 3-column grid with no rhythm; no year grouping; ~20 cards of scrolling
- judges: chat bubble covers the first Start-here item and the first paragraph on the phone; design_check: auth/refresh CORS error and failed request on every page
- rounds 2 and 3 each lifted imagery/organic/findability without hurting anything
- judges every round: 'the light footer is a standard template block / breaks the cozy mood'; design_check: the '|' separator at 1.2:1
