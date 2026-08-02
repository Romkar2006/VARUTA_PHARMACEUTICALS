---
id: AGENT-2
name: Design & Website Architecture
role: UI/UX system, visual language, component design, interaction architecture
loads: [_SHARED-CANONICAL-FACTS.md, AGENT-3-REGULATORY-INTEGRITY.md]
status: HELD — NOT READY FOR USE
version: 0.1-stub
---

# AGENT 2 — DESIGN & WEBSITE ARCHITECTURE

> ## ⛔ THIS AGENT IS DELIBERATELY INCOMPLETE
>
> **Do not load this file into Antigravity as a working agent.** It is a scaffold, held at the user's explicit instruction pending a design discussion.
>
> Writing it now would mean inventing a visual direction — and there is an unresolved, genuinely consequential conflict between two incompatible design systems in the source material (§2). Choosing one silently would be the worst possible outcome, because every component, token and animation decision inherits from it.
>
> **Next step: the design conversation with the user, then this file gets written properly.**

---

## 1. What this agent will own, once written

- The design token system — colour, type, spacing, radius, elevation, motion
- Typography scale and pairing
- The 12 global components' visual and interaction specification
- Layout grid, breakpoints, responsive behaviour
- Motion language: what moves, how fast, with what easing, and what happens under `prefers-reduced-motion`
- The hero treatment — the single most technically risky element in the build
- Accessibility as a design property, not a retrofit: contrast, focus states, keyboard paths, target sizes
- Page-level composition and vertical rhythm for all 7 page types
- The Evidence Ledger, evidence chips, and "what we don't know" panel — how honesty is made to look like confidence rather than weakness
- The HCP unlock as a designed moment rather than a wall
- Degradation states: no JS, no CMS, slow connection, reduced motion, print

### What it will not own
| Not AGENT-2 | Whose |
|---|---|
| Requirements and acceptance gates | AGENT-1 |
| Any claim, scientific sentence, or product copy | **AGENT-3 (veto)** |
| Keyword targeting, schema, content plan | AGENT-4 |

---

## 2. THE OPEN CONFLICT — this is what we need to resolve

Two fully-specified, mutually incompatible design systems exist in the source material.

| | **Option A — PRD v2.0 "Heritage"** | **Option B — earlier system "Clinical"** |
|---|---|---|
| Canvas | Warm Ivory `#FFFDF4` | White `#FFFFFF` / surface `#F7F9FB` |
| Primary | Deep Moss Green `#1B3A2D` | Green `#2E7D32` / Forest `#1B5E20` |
| Secondary | Charcoal `#2C2C2C` | Charcoal `#263238` | also add navy blue combination to it 
| Accent | **Antique Gold `#C9A84C`** | **DNA Blue `#1F3C88`** / Medical Blue `#2563EB` |
| Alt surface | Warm Cream `#F5F0E8` | Cream `#FAF7F2` as band only |
| Display face | **Playfair Display** (serif) | **Manrope** (geometric sans) |
| Body | Inter | Inter |
| Mono | JetBrains Mono | JetBrains Mono |
| Hero | 2D DNA Helix Canvas, GSAP MorphSVG | three.js scroll-scrubbed particle thread (**built and verified**) |
| Register | Heritage · apothecary · premium wellness | Clinical journal · evidence · restraint |
| Serves first | Ananya (consumer) | Dr. Priya (clinician) |

**These cannot be blended.** Playfair + Antique Gold + Warm Ivory reads as a heritage wellness brand. Manrope + white + DNA Blue reads as a clinical evidence platform. A hybrid reads as indecision, which in this category reads as untrustworthy.

**The choice is strategic, not aesthetic.** It answers: *when Dr. Priya and Ananya both land on the same page, whose expectations does the visual language meet first?* Note that the stated persona priority is Dr. Priya first — which argues for Option B — while PRD v2.0's own tokens argue for Option A. That tension is real and unresolved.

### Constraints that survive either choice

1. **`#C9A84C` fails WCAG AA for body text at 3.8:1.** PRD v2.0's own audit caught this. Permitted for UI elements, borders, underlines, focus rings (3:1 non-text threshold) — **never** as body text colour. If Option A is chosen, this constrains it heavily.
2. **150 kB initial JS budget**, measured on Snapdragon-680-class over 4G. This is the binding constraint on every animation decision and it is not negotiable.
3. **WCAG 2.1 AA**, axe-core zero critical, full keyboard path.
4. **`prefers-reduced-motion`**: no canvas inserted into the DOM, no GSAP timeline created — not merely a paused animation.
5. **GSAP including MorphSVG, SplitText and ScrollTrigger is free** for commercial use (30 Apr 2025). Any budget line for GSAP Club is deleted — `_SHARED §7.5`.
6. **No AI-generated human figures** anywhere; no AI generation of the product or its label.
7. The hero must degrade to a static gradient on reduced-motion or absent Canvas/WebGL, and throttle on battery-saver.
8. Every product view must accommodate the **mandatory disclosure block** — it is a designed element, not a footnote to be minimised. Designing it to be visually dismissible is a compliance failure.
9. The **"what we don't know" panel** must be designed to read as confidence. If it looks like a disclaimer, it will be deleted by someone eventually, and that is a compliance regression.

---

## 3. Assets that already exist

| Asset | State |
|---|---|
| `outputs/varuta-homepage/index.html` | **Working, browser-verified prototype.** Single file, no build step. three.js scroll-scrubbed morph DNA → molecule → C₆H₈O₆ → capsule; Lenis smooth scroll; bloom; `prefers-reduced-motion` static fallback. Two defects found and fixed. Measured: 2400 atoms, 217 bonds, page height 8641 px, zero console errors |
| `02-DESIGN-SYSTEM.md` | Full Option B token set |
| PRD v2.0 pp. 21–24 | Full Option A token set, component contracts, degradation matrix |
| `03-COMPONENT-REGISTRY.md` | Component whitelist + motion library rationale |
| `12-VISUAL-ASSET-PIPELINE.md` | Imagery pipeline: 3 zones, ASCI risk tiers, dieline→3D render route, shot list, budget |
| `outputs/design-stack.html` | Five reference sites analysed as four stack layers, with conflict warnings |
| `outputs/react-motion-landscape-2026.md` | Motion/3D library landscape |

**The prototype is a real option, not a sketch.** It is verified working. If Option B wins, it is the hero. If Option A wins, it is discarded — which is a genuine cost worth weighing in the discussion.

---

## 4. Questions for the design discussion

Bring answers to these and this file can be written properly.

**Positioning**
1. Heritage/apothecary or clinical/evidence? (§2)
2. Persona priority in the *visual* language — Dr. Priya or Ananya first? Does it differ from the stated business priority?
3. Reference sites the user actually admires, and specifically *why* — which layer: layout, type, motion, or colour?

**Visual**
4. If Option A: how is the Antique Gold contrast failure handled — restrict to UI only, or darken the token?
5. Serif or sans display face? This single choice carries most of the register.
6. Photography vs illustration vs 3D render for product presentation? (`12` recommends dieline→Blender renders over AI or photography)
7. How much colour? Rationed accent, or a broader palette?

**Motion**
8. Keep the verified three.js hero, adopt the 2D SVG morph, or the capability-gated dual path?
9. Motion budget — where is spectacle permitted, and where must the site be still? (Recommendation: one moment of spectacle, everything else quiet)
10. Is the R&D sticky-stack scroll animation worth its complexity? (PRD v2.0 makes it P1, desktop-only)

**Structure**
11. Does the product dossier read as one long scroll, or progressive disclosure by section?
12. How prominent is the HCP unlock — discoverable, or foregrounded?
13. Mobile: does the 7-tab sector navigation become a scroller, a dropdown, or an accordion?

**Brand**
14. Logo usage rules — the green V with DNA helix and world map. Clear space, minimum size, on-dark treatment?
15. Is "Born for Generations…" used in the interface, or held for packaging only?

---

## 5. Skeleton — to be filled after the discussion

```
1.  Role, authority, boundaries
2.  Design thesis — one paragraph the whole system derives from
3.  Token system            colour · type · space · radius · elevation · motion
4.  Accessibility contract  contrast matrix · focus · keyboard · targets · motion
5.  Grid and breakpoints
6.  Typography scale and pairing rules
7.  Motion language         durations · easings · what may move · reduced-motion
8.  The hero                chosen approach · degradation ladder · perf gates
9.  Component specifications — 12 global components:
      SiteHeader · SiteFooter · DNAHelixCanvas/ThreadStage · ProductCard
      SectorTabBar · StickyScrollStack · InvestorGateForm · ContactForm
      TrustBadgeBar · TherapeuticAreaNav · ProfileCard · ResourceCard
    plus compliance components:
      ClaimText · EvidenceChip · CitationExpand · LimitationsPanel
      HcpBoundary · MandatoryDisclosure · ManufacturerCard
      ConditionProductBridge
10. Page compositions       7 page types
11. Degradation matrix      no JS · no CMS · slow · reduced-motion · print
12. Imagery direction       per 12-VISUAL-ASSET-PIPELINE.md
13. Handoff contract        what an engineer receives
14. Failure modes
```

---

## 6. Reminder for whoever writes this file

Three things that will otherwise go wrong:

1. **Design the compliance elements as first-class.** The disclosure block, the evidence chips, the limitations panel and the citation expansion are not legal furniture bolted onto a pretty page — they are the brand's actual argument. If they are designed as small grey text at the bottom, the entire strategy collapses into the thing every competitor does. Make honesty look expensive.

2. **The 150 kB budget is the design brief, not a constraint on it.** An animation that cannot ship within it does not exist. Decide the motion language *inside* the budget rather than designing first and cutting later.

3. **Dr. Priya is a professional reading on a mid-range Android in a clinic between patients.** Not a design director on a 5K display. Every decision gets tested against that context.
