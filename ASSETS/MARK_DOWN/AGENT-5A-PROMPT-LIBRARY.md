# AGENT-5A — PROMPT LIBRARY
### AI product photography for Varuta Pharma, on a Google AI Pro subscription

| | |
|---|---|
| **Version** | 1.0 — 1 August 2026 |
| **Companion to** | `AGENT-5-VISUAL-PRODUCTION.md` (the pipeline). This file is the prompts. |
| **Assumes** | Google AI Pro, active. Nothing else purchased. |
| **Vetoed by** | AGENT-3 |
| **Brand colours below** | Read off the actual product literature in `uploads/varuta_products_01.pdf`. Verify against the **physical carton** before use — literature lockups and carton print sometimes differ. |

---

## 0 · Read these three things first

**1. Your subscription is enough. It is not the bottleneck.**
₹1,950/mo Google AI Pro gives you Nano Banana Pro (the strongest model available for product photography and the only one that renders text near-reliably), 1,000 Flow credits/month, free 1080p video upscale, 2K image upscale, and commercial-use rights. You do not need to buy anything else to produce this entire photo shoot.

**2. The bottleneck is the photo you feed it.** A model cannot invent detail that was never captured. Ninety percent of "the AI ruined my label" is actually "the input was a 900px WhatsApp screenshot." §2 is twenty minutes of work that raises the ceiling on every prompt in this file. Do it before you paste a single prompt.

**3. The Gemini app cannot mask.** This is the one structural limitation and it shapes everything below. Photoshop can protect your product pixels under a mask and let AI touch only the background. A chat interface cannot — it regenerates the whole frame every time. So there are **two lanes** (§3), and only one of them is safe for a product page.

### 0.1 Never paste your product literature into a prompt

Your leaflets contain, verbatim: *"Prophylaxis and treatment of iron deficiency anaemia"*, *"Adjuvant therapy in the treatment of cancer"*, *"increases sperm count and motility"*, *"Changes back to Normal from PCOD"*, *"Best Breast Massage Oil"*, *"increase Sperm count concentration by 167%"*.

Every one of those is a claim prohibited under the Drugs & Magic Remedies Act 1954 for an FSSAI nutraceutical. If any of it reaches an image — as prompt text, as a leaflet lying in a flat-lay, as a caption the model volunteered — you have published a prohibited claim in a form that is screenshot-able and dated.

**Rules:** never copy leaflet sentences into a prompt. Never photograph or generate the leaflet as a marketing asset. Never let the model write words. All approved copy is resolved from `content/claims-register.json` and set in the page, not baked into a picture.

---

## 1 · What to click

| Task | Where | Notes |
|---|---|---|
| Product scenes, plates, compositing | **Gemini app → Create image** (Nano Banana Pro) | Attach up to **14 reference images**. Attach 3–4, not 14 — variety beats volume. |
| Same, with more control + reuse | **Flow → Nano Banana Pro** | Keeps your assets as project "ingredients" you can reuse across generations |
| Set aspect ratio | In the prompt: `Output 1:1` / `4:5` / `16:9` | 1:1 for PDP gallery, 4:5 for Instagram, 16:9 for hero banners |
| Upscale a still | 2K upscale in Flow | Free on Pro |
| Video (later) | Flow → **Veo 3.1 Lite** | 10 credits/gen. 1,000 credits = 100 clips. Don't touch Quality (100 credits) until a look is locked. |
| Iterate | Keep replying in the same chat | "Same image, but…" preserves far more than starting over |

**Every output carries a SynthID watermark that cannot be removed.** That is fine — ASCI's draft guidelines actually ask for embedded provenance. Do not try to strip it.

---

## 2 · The twenty-minute phone shoot — do this today

You will get the proper 360° capture later (spec in `AGENT-5 §2`). This is what you shoot **now**, with a phone, so you can start working tonight.

```
WHERE     Next to a window. North-facing if you have one. Middle of the day.
          NO overhead lights on. NO flash. Never the phone flash.
SURFACE   Two sheets of A3 white paper: one flat on a table, one curved up
          behind it against a book — that curve is your "sweep", it removes
          the horizon line. A white bedsheet works.
BOUNCE    A third sheet of white paper (or a book wrapped in paper) on the
          shadow side, angled to bounce light back. This one thing separates
          an amateur photo from a usable one.
PHONE     Rear main camera. Highest resolution / "Pro" / RAW if offered.
          Tap the product, then LOCK exposure and focus (long-press).
          Do NOT use portrait mode. Do NOT use 0.5x wide — it distorts the box.
          Stand back and use 2x if you have it: the carton must read as a
          rectangle, not a trapezoid.
CLEAN     Wipe the carton. Fingerprints and dust survive into every asset.

SHOOT, PER SKU — 8 frames:
  1  Front face, dead-on, filling ~80% of frame        ← most important frame
  2  Back face, dead-on, ingredient panel fully legible ← regulatory reference
  3  Three-quarter from the left, slightly above
  4  Three-quarter from the right, slightly above
  5  Pure side profile (proves the pack has thickness)
  6  Top-down
  7  Macro of the brand mark only
  8  Macro of the strip / blister / film / batch panel

CHECK BEFORE MOVING ON
  Zoom to 100% on frame 1. Can you read the smallest print, including the
  FSSAI number? If not, reshoot. Everything downstream inherits this.

FILE        VARUTA_<SKU>_<01-08>.jpg   →  assets/master/<SKU>/ref/
TRANSFER    AirDrop, cable, or Google Drive set to "Original quality".
            NEVER WhatsApp. WhatsApp will destroy the label and you cannot
            get it back.
```

Do **GUANOLACT** first, all the way through this document, before touching a second SKU. And do not shoot **Brestil** or **Fertiscope** at all — they are not publishable.

---

## 3 · The two lanes

| | **Lane A — PLATE** | **Lane B — DIRECT** |
|---|---|---|
| What you prompt for | An **empty scene**. No product in it at all. | Your product photo + a scene description |
| What comes back | A background plate | A finished-looking image |
| Product pixels | **100% yours** — you composite the real cutout in afterwards | Redrawn by the model, including the label |
| Effort | 10 min in Photoshop / Photopea (free) / Canva per image | 30 seconds |
| Label risk | **Zero** | Real, and it hides well |
| **Use for** | **Everything on a product page. Anything a doctor or regulator will see.** | Exploration, mood, social posts, internal decks — after passing the overlay test |

**The rule: if it ships to `/products/[slug]`, it came from Lane A.**

Lane B is not banned — it is genuinely fast and often beautiful, and it is the right way to decide what a scene should look like before you build it properly. It is banned from being the *final* asset on a regulated product page, because "the label looks right" is not the standard. The standard is "the label is right."

### 3.1 The overlay test — 60 seconds, non-negotiable for Lane B

1. Open your real front-face photo and the AI output in any layer editor (Photopea is free, in-browser).
2. Put the AI output on top, scale it so the pack aligns, set opacity to 50%.
3. Look **only** at the text.

Any letter that shifts, thickens, blurs, changes spacing, or changes a digit = **reject the image**. Do not fix it. Do not accept "close enough". Regenerate, or fall back to Lane A. A pack that says `550 mg` in reality and `500 mg` in your hero image, shown to a prescriber, is a patient-safety event.

---

## 4 · Prompt anatomy

Every prompt in this file uses the same six blocks, in this order. The order matters — models weight early tokens more, and the closing FORBID block is what stops the failure modes.

```
1 SUBJECT   what is in frame (or, for Lane A, that nothing is)
2 PRESERVE  what must not change  ← Lane B only, and it must be aggressive
3 SCENE     surface, environment, props, mood
4 LIGHT     direction, quality, colour temperature, shadow behaviour
5 CAMERA    focal length, aperture, height, framing, aspect ratio
6 FORBID    the explicit blocklist
```

### 4.1 The FORBID block — paste this into every single prompt

This is not padding. Image models volunteer fake certification seals, award roundels, "100% Natural" starbursts, hands, and lab coats onto pharmaceutical packaging **unprompted**. A fabricated "GMP Certified" badge on a Varuta pack is a regulatory incident, and Varuta is a marketer with no facility to certify.

```
DO NOT ADD: people, any person, hands, fingers, lab coats, doctors, scientists,
nurses, laboratories, clinics, hospitals, medical equipment, stethoscopes,
microscopes, pills scattered loose, additional or duplicate products, mirrored
ghost copies, badges, seals, roundels, ribbons, award medals, certification
marks, "certified" or "natural" or "clinically proven" stamps, starbursts,
percentage figures, arrows, before-and-after panels, anatomical diagrams,
organs, body parts, text overlays, captions, watermarks, logos other than the
one already printed on the product, or any writing the product does not have.
```

Keep it in your clipboard manager. Append it to everything.

---

## 5 · LANE A — plate prompts

Generate these empty, then composite your real cutout in. **No product is described in any of them**, which is exactly why they are safe. Each one is deliberately generous with empty space.

### PLATE-01 · Clinical sweep (the workhorse — use for 4 of the 8 PDP images)
```
An empty photography studio surface, completely bare. Seamless matte off-white
sweep in #F7F9FB, the horizon between floor and back wall softly blurred away.
Soft cool north-facing daylight entering from the upper left at 45 degrees,
large-softbox quality, gentle falloff to the right. A subtle long soft shadow
lies across the surface toward the lower right, indicating a light source upper
left. Pharmaceutical product photography lighting: clean, even, no drama.
Shot on a 100mm macro lens at f/8, camera at product eye level, the centre of
the frame left completely empty for a product to be placed later.
Photorealistic, high detail in the surface texture, neutral colour balance.
Output 1:1.
NO OBJECTS. NO PRODUCT. NO PACKAGING. NO BOTTLE. NO BOX. The frame must be empty.
DO NOT ADD: people, any person, hands, fingers, lab coats, doctors, scientists,
laboratories, medical equipment, pills, badges, seals, certification marks,
starbursts, text, captions, watermarks, logos, or any writing.
```

### PLATE-02 · Dark editorial (hero, premium, one per SKU)
```
An empty dark charcoal micro-textured stone surface, completely bare, extending
into near-black shadow at the edges of frame. A single hard raking light from
camera right skims across the stone, revealing its texture, then falls off
steeply into darkness. A faint warm rim highlight along the far top edge
separates surface from background. Museum-object lighting. The upper two thirds
of the frame is empty negative space in deep shadow.
Shot on an 85mm lens at f/5.6, camera slightly below product eye level,
centre-left of the frame left completely empty.
Photorealistic, cinematic, restrained, expensive.
Output 4:5.
NO OBJECTS. NO PRODUCT. The frame must be empty.
[+ FORBID BLOCK]
```

### PLATE-03 · Overhead flat-lay base
```
A top-down view of an empty warm ivory linen surface, completely bare, with a
subtle visible woven texture and one soft natural fold running diagonally
through the lower third. Even diffuse overhead daylight, very soft contact
shadows, no hotspot. Editorial, calm, minimal. The centre of the frame is
entirely empty, generous space for a product to be placed later.
Shot from directly above on a 50mm lens at f/6.3.
Photorealistic, natural fibre detail, warm neutral colour balance.
Output 1:1.
NO OBJECTS. NO PRODUCT. NO PROPS. The frame must be empty.
[+ FORBID BLOCK]
```

### PLATE-04 · Cool water / hydration base (for the with-a-glass shots)
```
An empty pale grey-blue seamless surface with a very faint cool gradient,
completely bare. Soft diffuse daylight from directly above and slightly behind,
producing a delicate soft shadow forward toward the camera. Clean, hygienic,
clinical but not cold. A whisper of surface reflection, as on polished
laboratory laminate.
Shot on a 100mm lens at f/9, camera at product eye level.
The frame is empty.
Output 1:1.
NO OBJECTS. NO PRODUCT. NO GLASS. NO WATER. The frame must be empty.
[+ FORBID BLOCK]
```

### PLATE-05 · Warm stone / apothecary base (use if the heritage design direction wins)
```
An empty warm travertine stone slab surface, completely bare, honed matte
finish with fine natural pitting. Late-afternoon directional sunlight from
camera left at a low angle, warm 4200K, producing a long soft-edged shadow to
the right and a gentle warm gradient across the stone. Quiet, timeless,
apothecary. Right two thirds of the frame empty.
Shot on a 105mm lens at f/8, camera at product eye level.
Photorealistic, tactile stone detail.
Output 16:9.
NO OBJECTS. NO PRODUCT. The frame must be empty.
[+ FORBID BLOCK]
```

### PLATE-06 · Gradient backdrop, brand-tinted (swap the hex per SKU from §7)
```
An empty seamless studio backdrop, completely bare, a smooth vertical gradient
from {BRAND_HEX} at the top edge fading to pure white #FFFFFF at the bottom.
No visible banding. A soft pool of light in the lower centre where a product
would stand, with a delicate soft contact shadow. Modern, clean, e-commerce
premium.
Shot on a 100mm lens at f/10, camera at product eye level, frame empty.
Output 1:1.
NO OBJECTS. NO PRODUCT. The frame must be empty.
[+ FORBID BLOCK]
```

### PLATE-07 · Soft shadow-play backdrop
```
An empty warm white plaster wall and matching floor, completely bare, with the
soft dappled shadow of unseen window blinds and a single unseen leafy plant
falling across the lower half in gentle diagonal bands. Warm morning daylight,
5000K. Calm, domestic, quiet, aspirational but plain. Centre of frame empty.
Shot on an 85mm lens at f/4, camera at product eye level, shallow depth of field.
Output 4:5.
NO OBJECTS. NO PRODUCT. NO PLANT VISIBLE IN FRAME — only its shadow.
[+ FORBID BLOCK]
```

### PLATE-08 · Plinth / pedestal (for the range shot)
```
An empty low cylindrical plinth of matte off-white plaster, standing on a
seamless off-white surface, against a seamless off-white background. Nothing on
the plinth. Soft cool daylight from upper left, a clean soft shadow to the
right, subtle occlusion where plinth meets floor. Gallery display lighting.
Shot on a 100mm lens at f/11, camera at plinth-top height.
Output 1:1.
NOTHING IS ON THE PLINTH. NO PRODUCT. NO OBJECTS.
[+ FORBID BLOCK]
```

### PLATE-09 · Seven-position range surface (for the whole catalogue in one frame)
```
An empty long matte off-white surface running left to right across frame,
completely bare, against a soft seamless off-white background falling gently
out of focus. Even cool daylight from above and slightly front, producing seven
evenly spaced faint soft shadows across the surface as if objects will stand
there. Wide format, generous headroom.
Shot on a 70mm lens at f/8, camera at eye level, dead centre.
Output 16:9.
NO OBJECTS. NO PRODUCTS. NO BOXES. The surface is empty.
[+ FORBID BLOCK]
```

### PLATE-10 · Macro texture plate (for section backgrounds and cards)
```
An extreme macro of an empty surface only: fine matte-coated paperboard fibre,
raking light from the left revealing the tooth of the stock, in a very subtle
{BRAND_HEX} tint fading to white. Abstract, tactile, no subject.
Output 16:9.
NO OBJECTS. NO PRODUCT. NO TEXT.
[+ FORBID BLOCK]
```

---

## 6 · LANE B — direct scene prompts

Attach 3–4 of your §2 reference frames (front, both three-quarters, side). Then use these. **Every one must pass the §3.1 overlay test before it goes anywhere near the website.**

### 6.1 The universal preamble — put this at the top of every Lane B prompt

```
Use the attached photographs as the absolute source of truth for the product.
The product is a LOCKED, UNMODIFIABLE ASSET.
PRESERVE EXACTLY, PIXEL FOR PIXEL: the carton artwork, every printed word,
every numeral, the brand mark, all colours, the exact proportions and the exact
dimensions of the pack. Do not redraw, restyle, re-letter, re-space, translate,
correct, sharpen or "improve" any text or graphic on the product. Do not change
the pack's aspect ratio or thickness. Do not rotate the artwork.
GENERATE ONLY the environment around the product, plus the contact shadow, the
surface reflection and the ambient light falling on it.
If you cannot render the printed text exactly as photographed, render the
product smaller in frame rather than approximating the text.
```

That last sentence does real work. Given permission to shrink the pack, the model will — and a small correct pack beats a large wrong one.

### 6.2 The eight PDP images

**SCENE-01 · Pure white e-commerce packshot**
```
[PREAMBLE]
Place the product from the attached photographs centred on a pure white #FFFFFF
seamless background, standing upright, front face square to camera.
Even soft light from both sides plus a soft overhead, no hotspot on the label,
one delicate soft contact shadow directly beneath the pack.
100mm lens, f/11, camera at exactly half the pack's height, product filling
about 75% of the frame height with even margins.
Clean marketplace-standard packshot.
Output 1:1.
[+ FORBID BLOCK]
```

**SCENE-02 · Clinical still-life** *(pair with PLATE-01 for the Lane A version)*
```
[PREAMBLE]
Place the product upright on a matte off-white #F7F9FB seamless studio surface,
turned about 20 degrees so the front face and the right side are both visible.
Soft cool north-facing daylight from the upper left at 45 degrees, gentle
falloff, a long soft shadow to the lower right. Generous empty negative space
above and to the right of the pack.
100mm macro lens, f/8, camera at product eye level, pack occupying the left
third of the frame.
Pharmaceutical product photography: clean, evidential, understated. No styling.
Output 1:1.
[+ FORBID BLOCK]
```

**SCENE-03 · Dark editorial hero**
```
[PREAMBLE]
Place the product upright on a dark charcoal micro-textured stone surface, deep
shadow falling away behind it. Turned 30 degrees to camera left.
A single hard raking light from camera right skims the pack, a faint warm rim
highlight defines its left edge against the near-black background. The label
face remains fully legible — no part of the printed text falls into shadow or
into a specular hotspot.
85mm lens, f/5.6, camera slightly below eye level looking very slightly up.
Cinematic, museum-object, expensive, restrained.
Output 4:5.
[+ FORBID BLOCK]
```

**SCENE-04 · Overhead flat-lay**
```
[PREAMBLE]
Place the product lying flat, front face up, on a warm ivory linen surface,
positioned in the upper left of the frame at a 15 degree angle to the frame
edge. The rest of the frame is empty linen.
Even diffuse overhead daylight, very soft contact shadow, no hotspot.
50mm lens, f/6.3, shot from directly above, perfectly perpendicular.
Editorial flat-lay, calm, minimal, one object only.
Output 1:1.
[+ FORBID BLOCK]
```

**SCENE-05 · Brand-tinted gradient**  *(swap `{BRAND_HEX}` from §7)*
```
[PREAMBLE]
Place the product upright, front face square to camera, on a seamless studio
backdrop that graduates smoothly from {BRAND_HEX} at the top to pure white at
the bottom. A soft pool of light in the lower centre, a delicate soft contact
shadow beneath the pack.
100mm lens, f/10, camera at half the pack's height, pack centred, filling 70%
of frame height.
Modern premium e-commerce.
Output 1:1.
[+ FORBID BLOCK]
```

**SCENE-06 · Soft shadow-play lifestyle**
```
[PREAMBLE]
Place the product upright on a warm white plaster surface against a matching
plaster wall. The soft dappled shadow of unseen window blinds and an unseen
leafy plant falls diagonally across the wall and the lower frame. The product
itself sits in clean light, fully legible, not in shadow.
Warm morning daylight, 5000K.
85mm lens, f/4, camera at product eye level, shallow depth of field so the wall
falls softly out of focus behind.
Quiet, domestic, aspirational, plain.
Output 4:5.
NO PLANT VISIBLE IN FRAME — only its shadow.
[+ FORBID BLOCK]
```

**SCENE-07 · Pack with its real dosage form**  ⚠️ read the caution
```
[PREAMBLE]
Place the product upright and slightly turned on a matte off-white surface. In
front of it, place ONE {DOSAGE_FORM} lying flat on the surface, exactly as it
appears in the attached macro photograph — same shape, same colour, same
size relative to the pack, same surface finish, no debossing or scoring added.
Soft cool daylight from upper left, soft shadows to the right.
100mm macro, f/9, camera at product eye level, shallow depth of field so the
{DOSAGE_FORM} is sharp and the background falls away.
Clinical, factual, documentary.
Output 1:1.
DO NOT ADD more than one {DOSAGE_FORM}. No scattered pills, no pile, no spill.
[+ FORBID BLOCK]
```
> **Caution.** You must attach a real macro photo of the actual tablet / caplet / capsule / film (frame 8 of your §2 shoot). Without it the model invents a dosage form, and an invented tablet next to a real pack is a misrepresentation of the product. If you don't have the macro yet, skip this scene.

**SCENE-08 · The range shot, all seven SKUs**
```
[PREAMBLE — applies to ALL attached products]
Arrange the seven products from the attached photographs standing upright in a
single row across a long matte off-white surface, evenly spaced, all front faces
square to camera, tallest in the centre descending outward.
Each product must be exactly as supplied in its own reference photograph. Do not
harmonise, restyle or unify their artwork. Do not invent an eighth product.
Even cool daylight from above and slightly front, soft shadows falling back and
right, seamless off-white background falling gently out of focus.
70mm lens, f/8, camera at mid-pack height, dead centre, generous headroom.
Clean corporate range photograph.
Output 16:9.
DO NOT ADD any product not in the attached photographs. Exactly seven products.
[+ FORBID BLOCK]
```
> This is the hardest prompt in the file and the most likely to fail. Seven distinct labels is beyond what any current model holds simultaneously. **Expect to build this one in Lane A** — PLATE-09 plus seven real cutouts composited in. Try Lane B twice; if the overlay test fails on any of the seven, stop and composite.

---

## 7 · Per-SKU cards

Brand colours read off the product literature. **Verify against the physical carton.** `{BRAND_HEX}` and `{DOSAGE_FORM}` in §5–6 come from here.

### GUANOLACT — Tablet · Iron Deficiency & Immunity
```
BRAND_HEX     #63BDF9   (sky-cyan wordmark)
SECONDARY     #041B36   (deep navy, the DNA field on the literature)
DOSAGE_FORM   tablet
PLATE PAIRING PLATE-01 · PLATE-06 · PLATE-04
REGISTER      Clinical, evidential, bright. This is the credibility SKU — it is
              the only product with lawful pre-existing nutrient-function claims
              and the first page being built. The imagery should look like a
              medical journal, not a wellness brand.
```
Hero prompt:
```
[PREAMBLE]
Place the product upright, turned 20 degrees to camera right, on a matte
off-white #F7F9FB surface against a seamless backdrop graduating from a pale
sky-cyan #63BDF9 wash at the top to pure white at the bottom.
Cool crisp north daylight from the upper left, clean soft shadow to the lower
right, no specular hotspot anywhere on the label.
100mm macro, f/8, eye level, pack in the left third, generous empty space right
for typography to be added later.
Bright, clinical, precise, trustworthy. Medical-journal restraint.
Output 16:9.
[+ FORBID BLOCK]
```
> ⚠️ Guanolact's literature carries an `Rx` symbol and a cancer-adjuvant claim. Neither may appear in any image or prompt. It is an FSSAI nutraceutical, not a prescription drug.

### ESTROCLEN — Caplet · Women's Health (oestrogen metabolism) · PRD hero
```
BRAND_HEX     #C94982   (deep rose-magenta pill lockup)
SECONDARY     #AE5782
DOSAGE_FORM   caplet
PLATE PAIRING PLATE-02 · PLATE-07 · PLATE-03
REGISTER      The marketing hero. Warmest and most premium of the set, but never
              "pink wellness". Editorial, adult, calm, considered.
```
Hero prompt:
```
[PREAMBLE]
Place the product upright, turned 30 degrees to camera left, on a dark charcoal
micro-textured stone surface with deep shadow behind.
A single soft raking light from camera right skims the pack; a faint warm rose
rim highlight defines its left edge against the near-black background. The
printed label face stays fully legible in clean light.
85mm, f/5.6, camera very slightly below eye level, pack centre-right, deep
empty shadow filling the upper left for typography.
Cinematic, editorial, expensive, quiet confidence.
Output 4:5.
[+ FORBID BLOCK]
```
> ⚠️ Never depict oestrogen, hormones, menopause, PMS, ovaries or any body part. No abstract "hormone balance" scales or seesaws — that is a mechanism claim in visual form.

### CYSTORIN — Capsule · Women's Health (nine classical botanicals)
```
BRAND_HEX     #283071   (deep indigo pill lockup)
DOSAGE_FORM   capsule
PLATE PAIRING PLATE-05 · PLATE-03 · PLATE-01
REGISTER      Botanical provenance. This is the one SKU where real ingredient
              photography carries the most weight — nine named classical
              botanicals is a genuine story, told with real photographs.
```
Hero prompt:
```
[PREAMBLE]
Place the product upright, turned 20 degrees to camera right, on a honed warm
travertine stone slab. Late-afternoon directional sunlight from camera left at a
low angle, 4200K, casting a long soft-edged shadow to the right and a warm
gradient across the stone. Seamless warm off-white background.
105mm, f/8, eye level, pack in the right third, empty stone filling the left.
Apothecary, timeless, botanical, quiet. Tactile stone detail.
Output 16:9.
[+ FORBID BLOCK]
```
> ⚠️ **PCOS/PCOD must never appear in an image or a prompt.** Also: Cystorin may be AYUSH-classified rather than FSSAI-licensed, which would require advertising pre-clearance. Unresolved — check before publishing any Cystorin asset.

### QUICKNAP — Oral disintegrating film, 30 films · Sleep & Recovery
```
BRAND_HEX     #1B2E68   (deep navy carton)
SECONDARY     #5DCEF0   (cyan) + a teal-green leaf mark
DOSAGE_FORM   oral disintegrating film strip
PLATE PAIRING PLATE-02 · PLATE-07 · PLATE-06
REGISTER      Night, calm, low-light. The only SKU whose natural register is
              dark — lean into it. It is also the hardest to photograph: a
              glossy navy laminate carton flares badly.
```
Hero prompt:
```
[PREAMBLE]
Place the product upright, turned 25 degrees to camera left, on a smooth matte
deep-navy surface. Low-key lighting: one large soft source from the upper left
at low intensity, a cool cyan #5DCEF0 rim light grazing the right edge, the
background falling to near-black. The printed label stays fully legible — no
specular flare across the glossy laminate, no blown highlights.
85mm, f/4, camera at eye level, pack centre-left, deep empty shadow to the right.
Calm, nocturnal, restful, premium. Not gloomy.
Output 4:5.
[+ FORBID BLOCK]
```
> ⚠️ No sleeping people, no beds, no bedrooms, no moons-and-stars illustration, no clocks. **And no melatonin references:** melatonin's reclassification to Schedule H is pending, and if it happens QuickNap cannot be advertised as a nutraceutical at all. Treat all QuickNap assets as provisional until that is confirmed in writing.

### FATEASE-5 — Caplet · Weight Management
```
BRAND_HEX     #673871   (aubergine / deep purple pill lockup)
DOSAGE_FORM   caplet
PLATE PAIRING PLATE-01 · PLATE-06 · PLATE-04
REGISTER      The highest-risk SKU visually. Keep it austere and product-only.
              Every instinct the category has — scales, tape measures, silhouettes,
              "before" bodies — is prohibited here.
```
Hero prompt:
```
[PREAMBLE]
Place the product upright, front face square to camera, centred on a matte
off-white #F7F9FB seamless surface with a very subtle aubergine #673871 wash in
the upper background.
Even, clean, cool daylight from both sides, a single soft contact shadow
beneath. No drama, no styling, no props whatsoever.
100mm, f/10, eye level, pack centred at 70% of frame height.
Austere, factual, clinical. A document, not an advertisement.
Output 1:1.
[+ FORBID BLOCK]
DO NOT ADD: weighing scales, bathroom scales, tape measures, measuring tapes,
body silhouettes, waistlines, before-and-after imagery, fruit, vegetables, gym
equipment, dumbbells, running shoes, water bottles, salads, or any food.
```
> ⚠️ Its literature shows before/after body photographs and a fist graphic. **None of that may ever be reproduced.** No weight-loss imagery of any kind, no food, no bodies.

### TELAGE — Capsule · Cellular Longevity
```
BRAND_HEX     #000000   (black pill lockup, white type)
SECONDARY     #2457A5   (royal blue) + a warm solar amber accent
DOSAGE_FORM   capsule
PLATE PAIRING PLATE-02 · PLATE-10 · PLATE-01
REGISTER      The most abstract-friendly SKU. Black-and-blue, scientific,
              cool. Good candidate for the Zone C abstract plates in §9.
```
Hero prompt:
```
[PREAMBLE]
Place the product upright, turned 30 degrees to camera right, on a black matte
surface with a faint royal-blue #2457A5 gradient in the background falling to
black at the edges. One soft top-left key light, one cool blue rim light on the
right edge, one faint warm amber accent catching the far top edge only.
The printed label stays fully legible in the key light.
100mm, f/6.3, eye level, pack centre, deep empty black above.
Scientific, cool, precise, high-end. Laboratory-adjacent without any laboratory.
Output 16:9.
[+ FORBID BLOCK]
DO NOT ADD: suns, stars, solar flares, cells, telomeres, chromosomes, DNA
strands touching the product, clocks, hourglasses, or ageing imagery.
```
> ⚠️ Its literature uses a sun/nuclear-reaction metaphor and cites cardiovascular disease. Do not reproduce either. No anti-ageing or longevity claim may be visualised.

### ERECTER — Caplet · Men's Health / Fertility  ·  **placeholder page only**
```
BRAND_HEX     #C24F3F   (brick red-orange wordmark)
SECONDARY     #722962   (aubergine)
DOSAGE_FORM   caplet
PLATE PAIRING PLATE-01 only
REGISTER      Minimum viable. Plain white packshot, nothing else, until AGENT-3
              and counsel clear the product for a full page.
```
Only produce **SCENE-01** for this SKU. Nothing else.
> ⚠️ **The highest-risk SKU in the catalogue.** Its literature claims erectile function, testosterone, sperm counts and a "167% increase" — all prohibited, and DMR 1954 Schedule specifically covers sexual-performance claims. Produce the white packshot for the placeholder and stop. No lifestyle imagery, no couples, no silhouettes, no suggestive composition, no metaphor of any kind.

### BRESTIL · FERTISCOPE — ❌ do not shoot, do not prompt, do not generate
Brestil cannot lawfully be advertised in India at all. Fertiscope is an unlicensed CDSCO medical device. **Zero assets. Do not include them in the range shot.** If someone asks why the range shot has seven products and the catalogue has nine, that is the answer.

