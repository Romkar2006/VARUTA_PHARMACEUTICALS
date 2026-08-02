# VARUTA PHARMA — PROJECT CONTEXT HANDOFF
Paste this whole document at the start of a new chat to continue where this one left off.

---

## 1. WHO/WHAT THIS IS

**Varuta Pharma Pvt. Ltd.** — a nutraceutical company, ~14–16 months old (founded ~March–May 2025), founded by Omkar's father. Omkar (a B.Tech CSE student, GRIET Hyderabad) is the tech/growth lead building the company's full digital presence — website, from scratch, meant to be handed to an AI coding agent called **Antigravity** to actually build.

Registered office: Flat No. B-120, Sebiyan Apartments, Street No. 2/1/1, Near Indu Lawns, Pune, Maharashtra 411046. Tagline: **"Born for Generations..."**. FSSAI licence (Varuta, as marketer): **13624999000034**. CIN: not yet known (blocking item).

**Critical fact: Varuta is a MARKETER, not a manufacturer.** Products are made by Gencleus Pharma Pvt. Ltd. (Hyderabad) and Peptas Pharma Pvt. Ltd. (Hyderabad, FSSAI 1362399000390 — digit count needs verification, FSSAI numbers should be 14 digits). Any website copy implying "our facility," "our GMP plant," or in-house manufacturing is wrong and must be removed/avoided.

---

## 2. THE MOST IMPORTANT THING TO KNOW: THERE ARE TWO PARALLEL WORKSTREAMS

**Workstream A — this conversation.** Built conversationally, page by page, with UI/UX decisions made live via back-and-forth. Produced a simplified 7-page PRD (see §4).

**Workstream B — a separate, more rigorous specification set Omkar had produced elsewhere** (likely via a different/more elaborate multi-agent process). This consists of:
- `_SHARED-CANONICAL-FACTS.md` — an arbitration document that reconciles contradictions across multiple source docs and is the **highest-priority fact source** for this project
- `README.md` — an index describing a full 12-file spec set (`00-MASTER-BRIEF.md` through `12-VISUAL-ASSET-PIPELINE.md`) plus companion prototype files (`varuta-homepage/index.html` — a working three.js scroll-scrubbed homepage prototype, `varuta-visual-toolkit.html`, `varuta-sitemap.html`, `design-stack.html`, `react-motion-landscape-2026.md`)
- **Only the canonical-facts file and README have actually been read/uploaded so far** — the 11 numbered spec files and companion HTML files have NOT been shared into this conversation yet, even though they're referenced as existing.

**Precedence order when sources conflict (from the canonical-facts file, §8):**
```
1. Statute and regulator guidance (absolute veto)
2. Varuta's own carton/label artwork (authoritative on company facts)
3. _SHARED-CANONICAL-FACTS.md
4. Accepted ADRs (docs/decisions/ADR-###-slug.md)
5. PRD v2.0 (uploads/varuta_prd_01.pdf — not seen in this chat)
6. 13-CLAIMS-TRANSFORMATION.md / 14-ARCHITECTURE-V2.md (not seen in this chat)
7. This conversation's own 7-page PRD (VARUTA_PRD.md, produced here — LOWER priority than the above)
8. Files 00–12 of the numbered spec set (not seen in this chat)
9. Original chatgpt-varuta_site.pdf brief (uploaded early in this conversation)
```
**Practical implication: the canonical-facts file overrides anything built in this conversation when the two conflict.** Several things built earlier in this chat are now known to be wrong — see §5.

---

## 3. CANONICAL FACTS THAT MUST NEVER BE CONTRADICTED

- Legal name: **Varuta Pharma Pvt. Ltd.** — never "Private Limited," never "Vardha Pharmaceuticals" (a wrong name that appears in some source material)
- Marketer, not manufacturer (see §1)
- **9 SKUs**, exact composition per unit (grams/mg matter — don't approximate):

| # | Brand | Form | Actives | Therapeutic area | Status |
|---|---|---|---|---|---|
| 1 | GUANOLACT | Tablet | Lactoferrin 50mg · Disodium guanosine 5-monophosphate 5mg · Ferrous bisglycinate 60mg (=30mg elemental iron) | Iron Deficiency & Immunity | Build FIRST — has pre-existing lawful iron nutrient-function claims, easiest to justify legally |
| 2 | QUICKNAP | Oral disintegrating film, 30 films | Melatonin 5mg · Valerian 25mg · Chamomile 5mg · Vitamin B6 5mg | Sleep & Recovery | Full page — but melatonin has a live regulatory risk (see §6) |
| 3 | CYSTORIN | Capsule | Mangifera indica 60 · Mimosa pudica 60 · Aegle marmelos 60 · Myristica fragrans 60 · Zingiber officinale 20 · Eugenia jambolana 60 · Cyperus rotundus 60 · Symplocos racemosa 60 · Piper nigrum 60mg | Women's Health (PCOS) | Full page — 9-botanical formula, likely triggers AYUSH question |
| 4 | ESTROCLEN | Caplet | Ocimum sanctum 420mg · Vitex agnus-castus 100mg · Resveratrol 5mg · Brassica juncea 100mg | Women's Health (oestrogen metabolism) | Full page — homepage/marketing hero (whitespace argument: no doctor-channel competitor in India for this) |
| 5 | FATEASE-5 | Caplet | Phaseolus vulgaris ext. 400mg · Spirulina platensis 500mg · Garcinia cambogia 50mg · Mangifera indica seed kernel 150mg · Chromium picolinate 200mcg | Weight Management | Full page |
| 6 | TELAGE | Capsule | Silybum marianum ext. 250mg · Withania somnifera 500mg · Astragalus gummifer 60mg · L-Arginine 50mg · L-Carnitine 50mg · N-Acetyl Cysteine 50mg | **Cellular Longevity** (not "Anti-Ageing") | Full page |
| 7 | ERECTER | Caplet | Protodioscin 20% 500mg · Withanolides 5% 500mg | Men's Health / Fertility (cross-lists both, link only, never duplicated content) | Placeholder only |
| 8 | BRESTIL | Roll-on, 50ml | Sida cordifolia, Tinospora cordifolia, Aloe barbadensis, Withania somnifera, 500mg each | Women's Health | **DO NOT PUBLISH** — DMR Act 1954 Schedule item 21 prohibits advertising re: female bust form/structure; also carries a genuine mastitis patient-safety risk |
| 9 | FERTISCOPE | Saliva-ferning mini microscope (device, not supplement) | — | Fertility | **DO NOT PUBLISH** — unlicensed CDSCO medical device, unsupportable "98% accuracy" claim |

- Dosage on oral products: **1 BD** (one unit twice daily). Brestil: massage twice daily, before bath and bed.
- **7 therapeutic areas (settled):** Women's Health, Men's Health, Fertility, **Cellular Longevity**, Weight Management, **Sleep & Recovery**, Iron Deficiency & Immunity
- **Mandatory disclosure block — must render on every product view, verbatim intent:**
  > This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare professional before use. FSSAI Lic. No.: {confirmed}. Mfg: {named_manufacturer}.
  A literal placeholder/TBD reaching production is a launch-blocking defect.
- **Four personas, priority order:** Dr. Priya (gynae/endocrinologist, needs clinical dosing/mechanism/manufacturing credentials before recommending) → Vikram (investor, gated intelligence) → Rajesh (distributor, full catalogue+certs) → Ananya (consumer, navigates by condition not product name, abandons marketing-led sites)
- **Market context (cite, don't round up):** Indian nutraceutical market ₹50,000–66,000 crore, 10–18% CAGR; industry repeat-purchase rate <30% (the core trust-deficit thesis); weight-management segment 20.2% CAGR (fastest-growing Varuta category); Kapiva FY25 revenue ₹342cr; HUL acquired OZiva ₹1,682cr; USV acquired Wellbeing Nutrition ₹1,583cr

---

## 4. NON-NEGOTIABLE ARCHITECTURAL RULES (from canonical facts §6)

1. Claims never live directly in code — render via `<ClaimText id="…" />` resolved from `content/claims-register.json`
2. HCP-tier content gated **server-side**, never CSS-hidden or client-filtered
3. **Disease-education firewall** — condition/education pages carry no product CTA in body copy; product pages name the condition once, factually; one neutral bridge module links them
4. Every product route renders the §3 disclosure block
5. **Real URLs required** for products/sectors: `/products/[sector]/[product]` — client-side-only tabs on one URL are prohibited (this reverses a decision made earlier in this conversation — see §5)
6. No AI-generated human figures anywhere; AI never generates the product or its label itself, only the environment around a real product render (ASCI AI guidelines, May 2026)
7. No claim renders without an evidence grade + citation

---

## 5. WHAT WAS BUILT IN THIS CONVERSATION — AND WHAT'S NOW KNOWN TO BE WRONG

A simplified 7-page PRD was built page-by-page in this chat (file: `VARUTA_PRD.md` in outputs), covering:
1. Home/Landing Page
2. About Us (Company + Global Vision + Leadership)
3. R&D Behind Our Products & Certifications (merged, woven narrative)
4. Resources Hub / Blog
5. Products by Health Sector
6. Future Products & Scope (gated investor page)
7. Contact Us

**Known corrections needed vs. that PRD, now that canonical facts have been read:**
- Products page: was decided as "single scrolling page, sector tabs, one URL" — **canonical facts reverses this**: real routes required (`/products/[sector]/[product]`), tab *feel* can stay via prefetched client-side nav, but addressing must be real routes for SEO/structured-data reasons
- "Anti-Ageing" and "Sleep" sector names should be **"Cellular Longevity"** and **"Sleep & Recovery"**
- R&D & Certifications page copy must not say "our facility" anywhere (marketer-not-manufacturer fact)
- Product roster used in this chat's earlier PRD work did NOT include the DO-NOT-PUBLISH status for Brestil/Fertiscope, or the correct Cystorin/QuickNap compositions above — those need correcting
- Every product view needs the mandatory disclosure block, which wasn't explicitly speced in this chat's PRD
- Design direction (green/blue/Manrope palette used throughout this chat) was never formally confirmed by the founders — canonical facts explicitly says this is **DEFERRED**, with two incompatible options on the table: heritage/apothecary (Playfair Display, Antique Gold #C9A84C — fails WCAG AA for body text, Warm Ivory) vs. clinical journal (Manrope, DNA Blue/Medical Blue, White) — "no agent may pick a palette in the interim"

---

## 6. OPEN REGULATORY / BUSINESS QUESTIONS (from canonical facts §9 — none of these are engineering tasks)

**Blocking (B) — must resolve before launch:**
1. FSSAI licence numbers for all products except the 2 already known
2. CIN
3. Business emails (`info@`, `bd@`, `hr@`, `media@varutapharma.com`) + SPF/DKIM/DMARC
4. Legal page content (Privacy, Terms, Medical Disclaimer, Grievance Officer) — counsel-drafted, required under India's DPDP Act 2023
5. A real, named, consenting medical reviewer — gates all mechanism content sitewide
6. Pre-launch regulatory copy audit (DMR/FSSAI/Rule 170 consultant)
7. Founding year confirmation
8. Brestil — omit/delay/legal advice (recommendation: omit)
9. Fertiscope — CDSCO device licence status
10. Melatonin — possible Schedule H reclassification pending; if reclassified, QuickNap cannot be marketed as a nutraceutical at all — needs written confirmation from Peptas Pharma
11. Rule 170 AYUSH pre-clearance — applies per-SKU to multi-herb Ayurvedic formulations (especially Cystorin's 9 botanicals) — changes the compliance path if applicable
12. `varutapharma.com` domain ownership/control status
13. Design direction decision (heritage vs. clinical) — founders + design agent
14. Gencleus FSSAI licence number; verify Peptas's number (13 vs. 14 digits)
15. Gencleus WHO-GMP certificate on file? (Peptas explicitly must NOT be called WHO-GMP, unconfirmed)

**Page-blocking (P):** product photography for all SKUs; leadership profiles (names/designations/credentials/photos); CE/Kosher/Halal certificate verification.

**Non-blocking (N):** real advisory board members (placeholder-friendly for now, per explicit decision in this chat); ingredient sourcing data for an origin map (future feature); product videos.

---

## 7. TOOLS RESEARCHED IN THIS CONVERSATION (with verdicts)

**AI product photography:** Photoroom, Pebblely, Claid.ai (background/studio enhancement); **Nightjar** (best for cross-SKU consistency via reusable "Photography Styles"); Adobe Firefly (safest commercial licensing for a regulated brand); Pacdora (photorealistic 3D packaging renders from real dielines — structurally accurate, not "reimagined"); Krea 2 (creative exploration).

**AI creative/video tools:**
- **Kittl** — best near-term pick for static creative (ingredient icons, DNA-motif graphics, blog images), multi-model access, free tier
- **Remotion** — React-native video framework, reuses existing site components directly, BUT has a source-available licence that may require a paid company licence past certain thresholds — verify before committing production work
- **HyperFrames** (github.com/heygen-com/hyperframes) — Apache 2.0 (fully free, no commercial threshold), HTML-native, purpose-built with installable Claude Code/Cursor/Codex skills including `/product-launch-video` and `/faceless-explainer` — **best default for the Antigravity-driven workflow**
- **OpenMontage** — autonomous brief-to-finished-video agent, most complete of the five, but currently **private alpha/waitlist** — not available yet, revisit later
- **MuAPI** — API aggregator (200+ models), best for programmatic/recurring content generation (blog images, ad creative variations) once past initial launch, not for one-off creative sessions

**Design/motion resource sites:**
- **motionsites.ai** — premium AI prompts for animated websites
- **originkit.dev** — free animated component library (React/Framer based)
- **text-effects.colorion.co** — pure CSS text animation effects (used "Aurora"/"Kinetic-Type" as tone-appropriate picks for hero tagline; avoid glitch/horror-style effects)
- **kinetics.colorion.co** — spring-physics UI motion (used for magnetic button micro-interactions)
- **shapefactory.co** — logo/gradient/duotone tools (used for hero gradient + consistent duotone photo treatment)
- **valessa.riotters.com** — 3D product visualizer in-browser; upload a model, get a polished pre-rendered video/PNG — **the recommended approach for the "3D medicine card" homepage idea**, since it avoids running live WebGL for every visitor
- **namethatui.com** — names UI patterns from a reference image/screenshot, useful for precise briefing of Antigravity
- **opentui.com** — NOT relevant (terminal UI framework, no bearing on a marketing website)
- **github.com/MengTo/Skills** — installable Claude Code skills directly relevant to this build: `gsap`, `threejs`, `landing-page`, `animation-on-scroll`, `css-alpha-masking`, `progressive-blur`, `css-border-gradient`, `vantajs`, `globe-gl`, `cobejs`, `unicorn-studio`, `tailwindcss`. **`cobejs`** was specifically chosen (over `globe-gl`, which is data-heavy) for the minimalist rotating-globe idea on About Us.

**GSAP licensing correction:** confirmed twice now (once independently in this chat, once in the canonical-facts file) that GSAP — including MorphSVG, SplitText, ScrollTrigger, ScrollSmoother, DrawSVG, Inertia — became **100% free for commercial use on 30 April 2025**. Any earlier assumption of a paid "GSAP Club" requirement is outdated and false.

---

## 8. FRONTEND DESIGN PROMPT

A detailed, copy-paste-ready frontend architecture prompt was built (adapted from a "Nura Health" inspiration prompt the user shared) — file: `Varuta_Frontend_Design_Prompt.md`. Key locked mechanics (kept from the inspiration prompt, content remapped to Varuta's real offerings):
- Floating pill navbar with scroll-morph (transparent→glass)
- Hero: "Born for Generations." split typography, DNA-helix background
- Three interactive "functional artifact" cards: Quality Intelligence (diagnostic shuffler), Research Stream (telemetry typewriter), Dosage Protocol (mock cursor scheduler using real "1 BD" dosage language)
- Philosophy/manifesto section with high-contrast split-text reveal
- Sticky-stacking scroll archive for the process section
- Three-audience-segment cards (Healthcare Professionals / Distributors / Patients) **replacing** a subscription-pricing-tier layout, since Varuta doesn't sell direct-to-consumer subscriptions
- Tech stack specified: React 19, Tailwind, shadcn/ui, Aceternity UI + Magic UI + React Bits, GSAP 3 + ScrollTrigger, Motion (Framer Motion), React Three Fiber, Lucide React
- Explicit compliance note baked into the prompt: no implied diagnostic claims, no fabricated stats, no borrowed medical-device imagery

**Open item on this prompt:** whether to keep the added serif font (Cormorant Garamond) for emotional copy, or stay fully sans-serif — was flagged, not yet confirmed by the user.

---

## 9. HOME PAGE — FINAL LOCKED STATE (most iterated page)

- Hero: **2D animated DNA→Molecule→Leaf→Capsule scroll-morph** (SVG/GSAP MorphSVG + ScrollTrigger — NOT full interactive 3D; reasoning was load-time and calm-clinical tone for doctors on mobile/4G). Note: the separately-referenced companion prototype `varuta-homepage/index.html` (not yet seen in this chat) apparently implements this same idea but as a **three.js scroll-scrubbed 3D thread** — there may be tension between "keep it 2D" (decided in this chat) and the existing 3D prototype (built elsewhere); worth reconciling once that file is shared.
- Products section: **3–4 flagship products only**, Valessa-rendered looping muted autoplay videos as card backgrounds, "View All" link to full Products page
- No hard doctor/patient fork — single unified page, doctor routing via persistent nav + one CTA band (later removed per user's explicit request)
- **Sections removed per user's explicit instruction:** Doctor CTA Band, About Teaser, Latest Blog Posts, Newsletter — page now goes straight from Flagship Products into Footer
- Flagged-but-not-restored: removing the newsletter section means there's currently no passive lead-capture mechanism anywhere on Home; suggested (not yet actioned) that if wanted back, it should live as a compact field inside the Footer rather than its own section

---

## 10. ABOUT US — FINAL LOCKED STATE

Exactly 2 sections (per explicit user instruction — "do not add extra things"), reordered to 3 after a later addition:
1. **The Company** — founding story, formal establishment facts (CIN etc.), 3–5 current-momentum markers (not a sprawling timeline — company is genuinely young, ~14–16 months, and the copy tone should frame that as "the science isn't new, the company is" rather than apologize for it)
2. **Global Vision** (added later, sits between Company and Leadership) — minimalist rotating dot-sphere globe via **cobe.js** (not globe-gl), Dark Forest Green dots on Cream/Charcoal, "Born for Generations" tagline with a subtle cursor-responsive glow. **Honesty constraint:** only India is a confirmed real location right now — copy must stay aspirational ("built with a global vision...") unless/until real international markets are confirmed by Omkar
3. **Leadership & People** — order: past directors → current director → other contributors. Static-hover profile cards, **click-to-expand** reveals a career-experience timeline (this is where the "helix-threaded timeline" idea was moved to, since an individual's career can span decades even though the company can't). Duotone-treated real photos where available, duotone icon placeholders where not.

Explicitly excluded from this page: a separate values grid, a company-history timeline mechanic (moved to R&D page framing instead), and a "generations of family" illustration (belongs on the separate "Our Stories" page concept, not About Us, to avoid duplicating emotional content across pages) — though note **"Our Stories" is not in the final simplified 7-page sitemap** the user settled on later, so that page concept may be dropped entirely; worth confirming.

---

## 11. R&D BEHIND OUR PRODUCTS & CERTIFICATIONS — FINAL LOCKED STATE

Decided as **one woven narrative** (not two separate sections), 4 stages in a GSAP ScrollTrigger sticky-stack (same mechanic reused from Home/About for motion-language consistency):
1. Ingredient Research
2. Advisory & Clinical Review (Medical Advisory Board lives inside this stage as **simple static cards, no click-expand** — advisors, not employees; **placeholder-friendly** since real names/credentials aren't ready — must never fabricate names/credentials)
3. Manufacturing
4. Testing & Certification (badges must be real/confirmed — NOT placeholder-friendly, unlike advisor names)

---

## 12. PRODUCTS PAGE — FINAL LOCKED STATE (NEEDS RECONCILING — SEE §5)

Decided in this chat as: single URL, 7 sector tabs (client-side switch, no route change), full product detail inline per product, no separate pages, no modals. **This is now known to conflict with canonical facts' rule that real routes (`/products/[sector]/[product]`) are required for SEO reasons.** The tab *interaction feel* can likely be preserved while fixing the addressing — this needs to be re-resolved, not just noted.

Sector→product mapping locked:
| Sector | Product(s) |
|---|---|
| Women's Health | Brestil*, Cystorin |
| Men's Health | Estroclen, Erecter |
| Fertility | Fertiscope* |
| Cellular Longevity | Telage |
| Weight Management | Fatease-5 |
| Sleep & Recovery | QuickNap |
| Iron Deficiency & Immunity | Guanolact |

*Brestil and Fertiscope — per canonical facts, **DO NOT PUBLISH**. This mapping needs updating to reflect their removal from public product scope.

Erecter cross-lists Men's Health + Fertility as a link only, never duplicated content (this matches canonical facts).

---

## 13. RESOURCES HUB / BLOG — FINAL LOCKED STATE

Filterable by health sector (not chronological, not by content-type). Mixed content types in one feed — articles, HyperFrames-generated explainer videos, FAQs — with clear visual type distinction per card. Three content templates (article/video/FAQ) specced. Launch plan: at least one item per sector, mixed formats.

---

## 14. FUTURE PRODUCTS & SCOPE (INVESTOR PAGE) — FINAL LOCKED STATE

Gated (simple form: name/email/org/role/reason-for-interest) before any content shows. Content is **general growth themes and market opportunity only** — no specific unlaunched products named. Needs a lightweight backend for form routing (not yet decided: email notification vs. CRM vs. sheet).

---

## 15. CONTACT US — FINAL LOCKED STATE

Form with subject/department dropdown (General, Sales, Media, Distributor). Includes embedded map/address section (not just contact details).

---

## 16. FILES CREATED SO FAR (all in /mnt/user-data/outputs/ of this conversation — re-upload these to a new chat if you want to keep working from them)

- `AGENT_SITEMAP.md` — the original, more detailed 34-page sitemap (now superseded by the simplified 7-page structure in §9–15 above, but may still be useful as a content-detail reference for individual page sections)
- `VARUTA_PRD.md` — the consolidated 7-page PRD reflecting everything in §9–15
- `VARUTA_AI_CREATIVE_TOOLS.md` — full tool-by-tool writeup, see §7
- `Varuta_Frontend_Design_Prompt.md` — the adapted Nura-Health-derived engineering prompt, see §8
- `Varuta_Relume_Wireframe_Prompt.md` — an earlier Relume.ai wireframe prompt from early competitor research (may be stale relative to later decisions)

---

## 17. IMMEDIATE NEXT STEPS (as of end of this conversation)

1. **Business/legal blockers (§6) need to start moving today** — none are things an AI agent can resolve; they need the founders/counsel/regulatory consultants.
2. **Design direction decision** (heritage vs. clinical) needs to happen before any more visual/frontend work proceeds, per canonical facts' explicit hold.
3. **Reconcile the Products-page routing conflict** (§12) — client-side tabs vs. real per-product/per-sector routes.
4. **Get the remaining 11 numbered spec files + companion HTML prototypes** shared into whatever chat continues this work — this conversation has only seen 2 of the ~17 files/prototypes referenced as existing, so a lot of relevant detail (exact homepage spec, exact page templates, the claims register schema, SEO/schema map) is still unseen.
5. **Update the Products roster/PRD** to reflect Brestil and Fertiscope's DO-NOT-PUBLISH status, and correct Cystorin/QuickNap details to match canonical facts.
6. A "what to send to counsel/regulatory today" forwardable checklist was offered but not yet built — still on the table if useful.

---

## 18. STANDING PREAMBLE (paste at the start of every Antigravity/coding-agent session touching this project — from canonical facts §11)

> Varuta Pharma Pvt. Ltd. is a marketer, not a manufacturer — products are made by Gencleus Pharma and Peptas Pharma. Products are nutraceuticals under FSSAI licence 13624999000034, not drugs. Never write copy claiming to diagnose, treat, cure or prevent any disease. Never output claim text directly in JSX or MDX — render `<ClaimText id="…" />` resolved from `content/claims-register.json`. Never hide HCP-tier content with CSS; gate it server-side. Every product view must render the mandatory disclosure block. Brestil and Fertiscope are not published. Consult `AGENT-3-REGULATORY-INTEGRITY.md` before writing any scientific or product sentence, and `_SHARED-CANONICAL-FACTS.md` before asserting any company fact.
