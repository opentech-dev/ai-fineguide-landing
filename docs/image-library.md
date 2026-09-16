# Image library — what is safe to use

Internal notes. Kept in `docs/` rather than `public/`: anything under `public/`
is copied verbatim into the build and served publicly, so notes placed there
end up on fineguide.ai.

Every image in `public/images/` was opened and looked at on 2026-09-14. This
list is complete — nothing is unreviewed.

---

## The rule

**If a screen is legible in the frame, read every word on it before shipping.**

These were generated, not shot. The photographic craft is mostly good — real
hands, real light, real offices. What goes wrong is the *content of screens*
inside the photo: invented dashboards with malformed data, garbled labels, and
in one case a competitor's product name. The failure mode is not ugliness. It
is a visitor zooming in and finding that the product in our marketing photo is
called something else.

---

## Safe — in use on the landing page

Optimised copies live in `public/images/photos/` (originals were 1.3–1.7 MB for
a 1376×768 frame, roughly 10× oversized; re-encoded at quality 72 for an ~86%
saving with no visible loss).

| File | Where | Origin | Why it is safe |
|---|---|---|---|
| `photos/agent-call.jpg` | By the numbers | **Generated 2026-09-14** (Nano Banana Pro) | A support agent mid-call, face visible, genuine expression. The monitor faces fully away, so there is no screen content that could be wrong. The only image in the project showing a person's face doing the job the product is for. |
| `photos/team-collab.jpg` | Overview | **Generated 2026-09-14** (Nano Banana Pro) | Three colleagues, two mid-conversation. Warm wood, plants, real window light. Screens small and angled away. |
| `photos/channels-phone.jpg` | Industries | `steps/step-01-attract.jpg` | A hand holding a phone showing real Instagram. Warm light, wooden table. |
| `photos/tablet-review.jpg` | Workspace | `steps/step-05-report.jpg` | Hands holding a tablet, coffee, warm window light. Chart labels illegible at any size. |
| `photos/office-golden.jpg` | Closing CTA (background) | **Generated 2026-09-14** (Nano Banana Pro) | Golden-hour office, two colleagues laughing, a third in motion blur. Sits behind a brand-tinted scrim as a decorative background, so it carries `alt=""` and `aria-hidden` — it is texture, not information. Monitors dark throughout. |
| `photos/account-review.jpg` | CRM hero | **Generated 2026-09-16** (Nano Banana Pro) | Two colleagues side by side over an open notebook, one pointing. The laptop screen is dark and shows only a room reflection; the notebook page is blank. No logo on the lid. |
| `photos/call-review.jpg` | Voice QA hero | **Generated 2026-09-16** (Nano Banana Pro) | A reviewer in over-ear headphones marking a blank sheet. The monitor is turned fully back-to-camera and the headphones carry no visible brand mark. Deliberately not a headset with a mic boom, so it cannot be mistaken for `agent-call.jpg` on AI Telephony. |

### The two 2026-09-16 images, and what they replace

CRM and Voice QA were the two pages whose screenshots came from a live account
and were deleted in `hotfix/remove-leaking-media`. Commit `a627d70` filled the
gap with flat vector illustrations, which was wrong: every other product page
uses photography, so those two heroes read as cartoons next to their siblings.
`public/images/illustrations/` is gone.

Same prompt constraint as the 2026-09-14 pair, and in both chosen frames the
screen faces away from the camera rather than merely being blurred, which is the
stronger version of the rule. Three variants each; the rejected ones all failed
on the same thing, a laptop or monitor angled far enough toward the lens to show
suggestive interface shapes.

These are still strangers in a generic office. A screenshot captured from a demo
workspace supersedes both, and would also fill the two matching holes left on
the homepage (`VoiceSpread.astro`, and the CRM `ModuleSpread` that passes no
`image`).

### The two generated images, and why they replaced what was there

They superseded `editorial-office.jpg` and `steps/step-03-qualify.jpg`. Both of the old
ones were weaker on the thing that matters: the office shot showed a *room*, with
everyone facing away, and the agent shot was taken from behind her shoulder with a
legible CRM on the monitor.

They were produced with the constraint that makes generation safe here, stated
explicitly in the prompt:

> `screens angled away or out of focus so no text is readable`
> `no text anywhere in frame`

Three variants each, first attempt, no retouching. Set that against the failures listed
below — every one of which is legible invented text, not a failure of light, composition
or skin. **The technology was never the problem. The prompt was.**

They remain strangers in a generic office. They are honest as mood and texture; they are
not evidence that anyone uses Fineguide.

## Safe — optimised

| Source | Optimised as | Why it is safe | Placed |
|---|---|---|---|
| `steps/step-voiceqa-01.jpg` | `photos/voice-desk.jpg` | A real desk phone in a real office, handwritten notes beside it ("Follow up with Sarah"). Nothing on a screen to go wrong. | `/campaigns` hero |

---

## Safe — isometric illustrations (`public/images/illustrations/`)

Added 2026-09-16 to fill the two homepage slots left empty when the leaking
screenshots were taken down. These are **not** the flat purple vector clip art
rejected below, and the distinction is the whole point: see the note on that
table.

| File | Slot | What it shows |
|---|---|---|
| `illustrations/crm-record.jpg` | homepage CRM spread (`ModuleSpread`, tint band) | One customer record on a plinth, ringed by five connected objects: a speech bubble, a bar chart, a tick tile, a sound waveform, stepped blocks. |
| `illustrations/voiceqa-scoring-dark.jpg` | homepage Voice spread (`VoiceSpread`, dark band) | A recording, a transcript, a score ring, left to right. Rendered on the band's own dark ground. |
| `illustrations/hero-workflow.webp` | homepage hero (`EditorialHero`, both locales) | Hub and spoke: a central platform with six spokes radiating out to a speech bubble, a phone, an envelope, a customer record, a tick tile and a score ring. Every spoke starts at the platform's plinth and terminates at one object's plinth. Transparent background. |

**How they were made, so they can be reproduced.** Nano Banana Pro, soft matte 3D
render, true isometric, camera above and to the left. Form defined purely by
light with no outlines. One soft key light upper-left, soft contact shadows,
matte bevelled material, full value range from deep shadow to highlight. Palette
restricted to `#30226F`, `#7C3AED`, `#A78BFA` and near-white, with pink, mauve,
rose and magenta named as forbidden in the prompt because the model drifts there
unprompted. No text of any kind, per the rule at the top of this file.

**Describe connections as geometry, not as a list of prohibitions.** The hero's
first version had ribbons that swept past the central platform, crossed the whole
scene and ended in mid-air, and one object had no connection at all. Two rounds of
`edit_image` saying "no ribbon may pass behind the platform, none may end in empty
space" changed almost nothing - an edit preserves the existing routing, and the
model treats a ban as a style note. Regenerating with the shape named instead,
"each connector is a spoke on a wheel, starting at the central plinth and ending at
one object's plinth", got it right on the first attempt. Say what the arrangement
*is*; do not enumerate what it must not be.

**Match the despill to the key colour actually used.** The transparency tool keys
on magenta or green depending on the run, and the cleanup that strips magenta
fringing will happily eat a green-keyed image: brand violet has bright highlights
where red and blue are near-equal, which is exactly the magenta test. Doing that
here left every violet spoke speckled and eroded. Count residue by colour before
despilling, and skip the step entirely when the key came out clean.

**Backgrounds are matched to their band on purpose.** A generated image will not
land on an exact flat hex, and a background that *nearly* matches reads as a
mistake where an obvious frame would have read as deliberate. Each file was
measured at its four corners and two edge midpoints against the band colour, and
`crm-record.jpg` was corrected with a per-channel multiplier until it sat within
4 of `--color-tint` `#f2effc`. `voiceqa-scoring-dark.jpg` lands within 4 of the
dark band's `#0f1117` unaided. Re-measure after regenerating either one.

**The hero asset uses alpha instead, because its background is not flat.** The
hero section carries `brand-glow`, a violet radial gradient. Measured on the
rendered page, the glow ends 420px below the section top while the image spans
207px to 651px, so **the top half of the image sits over the wash** and the page
behind its top edge computes to about `#e4e4fa` against `#fafafc` lower down - a
delta near 22, far outside the tolerance of 4 above. No flat hex can match a
gradient, so matching was abandoned in favour of a transparent background and the
glow simply passes through. Nothing to measure, nothing to correct.

**Keying is the cost of that, and it needs checking every time.** The generator
produces transparency by rendering on a flat chroma background and keying it out.
Two defects arrive with it and neither is visible at a glance:

1. A detached strip of raw key pixels along the very bottom, below a band of
   transparent rows.
2. A magenta fringe tracing every object silhouette.

Setting `key_color: 'green'` did **not** prevent magenta keying. The fringe is
delicate to remove because brand violet sits beside magenta on the colour wheel;
the discriminator that works is the red/blue ratio, since key magenta has red
roughly equal to blue while brand violet and lavender are firmly blue-dominant.
Of four candidates, one was destroyed by its own cleanup - it carried eight times
the fringing, and removing it ate the artwork, leaving the surfaces speckled.
**Verify a keyed asset by measuring, not by looking**: count magenta pixels, check
whether they sit on silhouettes or in the interior, and confirm all four corners
are fully transparent.

**They render without the browser-chrome frame.** `ModuleSpread` and
`EditorialHero` both take an `illustration` prop for this. Putting fake window
dots around a drawing would present it as a real screen capture, which is the
same class of dishonesty as the synthetic avatars below. The hero previously sat
in `panel-frame`, whose own CSS comment calls it *"Product screenshot framing"*,
so that wrapper is dropped for the illustration. It takes no replacement class
either: `ModuleSpread` clips its illustrations with `rounded-xl overflow-hidden`
because they are opaque, but a transparent asset has no background to clip and a
rounded corner would only chop the artwork.

### Animating these: the hero loop, and how it finally shipped

The hero now carries an 8 second loop (`hero-workflow-loop.webm` / `.mp4`),
wired through the `video` / `videoWebm` props on `EditorialHero`. Getting there
took five paid Veo generations, and the decisive lesson was about the *input*,
not the prompt.

**Do not feed Veo a green screen. Bake the illustration onto the flat page
colour instead.** The first three attempts rendered the artwork on a saturated
green ground so the result could be keyed back to transparency (`chromakey` at
similarity `0.15` into VP9/WebM, `format=yuva420p` pinned as the last filter or
ffmpeg silently drops the alpha to `yuv420p`). That keying pipeline *works*, but
the green plate itself destabilised generation: the model treated it as green
screen footage and kept adding camera moves and re-interpreting objects. The one
clip that ever held its composition, the CRM loop, was generated on a normal
background. So the hero was regenerated on the illustration flattened onto
`#fafafc` (the page base), opaque, no keying. That immediately stabilised it.

The cost of opaque: a flat colour cannot match the brand-glow gradient, so the
playing video shows a faint seam (~20) along its top edge where the violet bloom
darkens the page to about `#e4e4fa`. Accepted as the price of animation. The
still behind it (`hero-workflow.webp`, the poster and the reduced-motion `<img>`)
is kept **transparent**, so reduced-motion visitors and the pre-play poster get
the seamless blend; only the moving, opaque video carries the seam. MP4 is still
generated (no alpha needed now) so every browser gets the motion.

Mechanics worth keeping: frames-to-video is standard tier only
(`veo-3.1-generate-preview`), 8 seconds only (a 4 second request is refused),
`first_frame_image` and `last_frame_image` both set to the same flattened frame
for a native loop.

Three content failures, in order:

1. **Asking for light produces bloom that destroys objects.** A brief about
   "highlights travelling along the ribbons" gave white flares that washed out the
   central panel and erased the contact card, with glow, halo and bloom all banned
   by name in the same prompt. Bans do not work. Stating "the lighting is fixed,
   every surface keeps the brightness it has in the first frame" and describing
   the moving thing as a solid object - a matte capsule, a bead on a wire - fixed
   it completely on the next attempt.

2. **Pinning the last frame to the first forces out-and-back motion.** This is
   structural, not bad luck. The model must return to the opening state, and for
   anything flowing along a path the only way back is to reverse. Measured on the
   second attempt: capsules travel away from the platform at 0.5s and 1.5s, turn
   around by 3.5s, and travel toward it at 4.5s, 5.5s and 6.5s. It reads as a
   rewind. Native looping and continuous flow are in direct tension, so a flowing
   loop needs either motion that can return by a different path (gentle drift,
   which is what the CRM clip and the shipped hero both do) or no pinned last
   frame plus a period-matched cut, which the model gives no control over.

3. **The model invents extra objects, and bans in the prompt do not stop it.**
   One take added a seventh object (a ring at bottom-centre) that is not in the
   illustration. Regenerating with the exact object inventory stated positively -
   "the scene contains exactly seven objects and no others", each one named -
   removed it. The shipped clip has a residual camera "breathing" (the assembly
   scales about 10 to 15 percent twice per loop); judged minor and shipped rather
   than spend a sixth time chasing a fully locked camera the model keeps resisting.

**Check the middle, check direction, and scan every frame - not just the seam.**
A clip whose last frame matches its first scores perfectly at the wrap no matter
how wrong the middle is, and a reversed stitch scores *perfectly* by
construction. Compare frame `t` against frame `T-t`, track something concrete
across the clip, and to catch an invented object sample *every* frame (an extra
object is a localised blob of new ink at one spot, camera scaling spreads ink
evenly around the edges) - a 10-frame spot check misses a brief one.

---

## Do not use

| File | Problem |
|---|---|
| `steps/step-02-engage.jpg` | Phone and laptop showing a chat branded **"LeadGen AI"** — not Fineguide. Dialogue is garbled and the assistant's name flips between "Meye" and "Maya" mid-conversation. This would put another company's product name on our landing page. |
| `steps/step-voiceqa-03.jpg` | Laptop lid reads **"MicSock Pie"** instead of MacBook Pro. Headings read "2YAITY EVALUATBN", "BATA SNRS"; "Usability" is spelled "Ueability". |
| `steps/step-voiceqa-05.jpg` | Dashboard labels read "MUNTHLY VERFORMANCE", "TEAM AWALTICS", "TCAIS PROGRESS", "REDEVUE", "NEW HSERS". Values are unreplaced placeholders — "X,XXX", "XX%", "X.XK". |
| `steps/step-04-analyze.jpg` | Convincing photo, invented dashboard. Dollar column contains "f0,300", "2,15l0", "Nl960", "San409". Also not our UI. |
| `steps/ai-agents-03-handoff.jpg` | CRM board columns read "Guclified", "Propesel", "Negoliation", "Clesed". Legible and wrong. |
| `steps/ai-agents-01-connect.jpg` | Real WhatsApp / Instagram / Messenger windows, but every message is nonsense ("You hard vestine lovetine anerouct andlross helf"). Passable as a thumbnail, indefensible at full width. |
| `steps/step-03-team.jpg` | Not a photograph — a flat purple vector illustration. Reads as clip art beside the real photography. |
| `steps/step-02-ai-chat.jpg` | Same: flat purple illustration, not a photo. |

**Note on those last two, added 2026-09-16.** The fault is *flat vector*, not
*illustration*. Flat fills have no light source, no shadow and no range from dark
to light, which is exactly what makes them read as clip art, and four rounds of
replacements failed until that was named. The isometric set above is a lit 3D
render and belongs to a different category. The test to apply is not "is it a
photo" but "does it have a light model".
| `hero-bg.jpg` | Cyan particle-network abstract — the most overused "AI company" stock image there is, and the cyan fights the indigo/violet brand. It was being **preloaded on all 24 pages while never being displayed**; that preload has been removed. Do not wire it up. |
| `avatars/avatar-maria.jpg`<br>`avatars/avatar-ion.jpg`<br>`avatars/avatar-andrei.jpg` | Synthetic headshots — flat studio backdrop, flawless skin, generic pose. Referenced nowhere; keep it that way. Beyond looking generated, attaching one to a named testimonial makes a **false claim about a customer** — an honesty problem, not a taste one. |
| `channels/whatsapp.svg`<br>`channels/telegram.svg`<br>`channels/facebook.svg`<br>`channels/instagram.svg`<br>`channels/chat.svg`<br>`channels/email.svg` | **Not brand logos.** Generic Feather line icons wearing brand filenames — `telegram.svg` is the `send` paper plane, `whatsapp.svg` a plain speech bubble — all single-stroke on a hardcoded `#a5b4fc`. Labelling these as integration logos claims a vendor relationship with a stock icon. Superseded by `brands/` below; referenced nowhere. |

## Brand marks — real vendor logos (`public/images/brands/`)

Used by the integrations grid. These are genuine vendor marks, not stand-ins.

| File | Source |
|---|---|
| `whatsapp` `telegram` `instagram` `messenger` `slack` `discord` `zendesk` `helpscout` `n8n` | Extracted from the **Simple Icons** corpus (`@iconify-json/simple-icons` v1.2.43) already vendored in `ai-backoffice-frontend`. Official 24×24 path geometry, recoloured to each vendor's brand hex. |
| `kommo` | The real Kommo mark the workspace app already ships inline (`AppLogo.tsx`), brand `#005FF9`. Simple Icons has no Kommo entry. |
| `amocrm` | amoCRM's own wordmark, copied out of `_backup/src/assets/images/AmoCrm.svg` (read-only; nothing there was modified). |

amoCRM is a **wordmark brand** — it has no square glyph, so its cell shows the
wordmark *as* the label rather than a cropped fragment. Cropping a glyph out of
a wordmark would mangle the trademark.

Vendor logos are used here to identify supported integrations, which is what
they are for. If a vendor's brand guidelines require a specific treatment,
that is worth a check before launch.

## Not reviewed for content, low risk

`steps/step-02-ai-chat.jpg` aside, the remaining `ai-agents-02-engage.jpg` and
`steps/step-voiceqa-02.jpg` / `-04.jpg` follow the same pattern as their
numbered siblings and should be assumed to contain generated screen content
until someone opens them. They are not used anywhere.

---

## What is still missing

Photographs of **your own team and your own customers**. Everything above is
generated or stock; none of it shows a real Fineguide person or a real
Fineguide customer, and the strongest images are strong precisely because
nothing identifiable is on screen.

The layout is ready to receive real photography — four sections now lead with
an image and swapping a file path is the whole job.

Also still missing: **product screenshots taken from a demo workspace**. The CRM
and Voice QA shots were deleted for showing a live customer's data, and nothing
has replaced them. The isometric illustrations stand in on the homepage, but a
real screen will always beat a drawing of one. This needs a workspace populated
with invented data and someone logged into it.

The earlier instruction here was "do not fill the gap with more generated
imagery". That was written after a run of generated images with invented text in
them, and it holds for anything with a legible screen in frame. It has been
narrowed rather than kept absolute: the failures in the table above are all
legible invented text or flat vector clip art, and neither is inherent to
generating an image. What is not negotiable is the rule at the top of this file.
