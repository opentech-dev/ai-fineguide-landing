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

## Safe — optimised, not yet placed

| Source | Optimised as | Why it is safe |
|---|---|---|
| `steps/step-voiceqa-01.jpg` | `photos/voice-desk.jpg` | A real desk phone in a real office, handwritten notes beside it ("Follow up with Sarah"). Nothing on a screen to go wrong. |

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
| `hero-bg.jpg` | Cyan particle-network abstract — the most overused "AI company" stock image there is, and the cyan fights the indigo/violet brand. It was being **preloaded on all 24 pages while never being displayed**; that preload has been removed. Do not wire it up. |
| `avatars/avatar-maria.jpg`<br>`avatars/avatar-ion.jpg`<br>`avatars/avatar-andrei.jpg` | Synthetic headshots — flat studio backdrop, flawless skin, generic pose. Referenced nowhere; keep it that way. Beyond looking generated, attaching one to a named testimonial makes a **false claim about a customer** — an honesty problem, not a taste one. |

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
an image and swapping a file path is the whole job. Until then, do not fill
the gap with more generated imagery: the failures catalogued above are what
that produces.
