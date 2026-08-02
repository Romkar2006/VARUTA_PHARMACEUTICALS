# Varuta Pharma — Agent System

Four specialist agents for building the Varuta Pharma website, designed to be loaded into Antigravity (or Claude Code, Cursor, or any agentic IDE that supports persona/rule files).

**Status: 3 of 4 ready. AGENT-2 is deliberately held pending the design discussion.**

---

## Files

| File | Load | Status |
|---|---|---|
| `_SHARED-CANONICAL-FACTS.md` | **Always, first, by every agent** | ✅ Ready |
| `AGENT-1-PRD-CUSTODIAN.md` | Spec, scope, requirements, conflict arbitration, gates | ✅ Ready |
| `AGENT-2-DESIGN-UX.md` | UI/UX, tokens, components, motion | ⛔ **HELD — stub only** |
| `AGENT-3-REGULATORY-INTEGRITY.md` | Every claim, every scientific sentence, DPDP, gate security | ✅ Ready |
| `AGENT-4-GROWTH-SEO-AEO.md` | Marketing, SEO, answer-engine optimisation | ✅ Ready |

`_SHARED-CANONICAL-FACTS.md` is not optional context — it is the arbitrated truth. Three source documents describe this company differently; that file is the resolution. An agent that has not loaded it will assert wrong company facts, because the source material contains wrong company facts.

---

## Using these in Antigravity

**1. Put them in the repo** so they version with the code:

```
docs/agents/
  _SHARED-CANONICAL-FACTS.md
  AGENT-1-PRD-CUSTODIAN.md
  AGENT-3-REGULATORY-INTEGRITY.md
  AGENT-4-GROWTH-SEO-AEO.md
  AGENT-2-DESIGN-UX.md        ← do not load yet
```

**2. Invoke one agent per task.** Do not merge them into a single mega-prompt. Their value is that they disagree with each other in defined ways — AGENT-3 vetoing AGENT-4 is the system working, and it cannot happen if they share one context.

```
Load docs/agents/_SHARED-CANONICAL-FACTS.md and
     docs/agents/AGENT-3-REGULATORY-INTEGRITY.md.
Act as AGENT-3. Review the Guanolact dossier copy in
content/products/guanolact.mdx and rule on every claim.
```

**3. Add the standing preamble** (`_SHARED §11`) to any session that touches product content, whichever agent is active.

**4. For a global rules file** (Antigravity rules, `CLAUDE.md`, `.cursorrules`), use the §11 preamble plus this:

```
Before asserting any Varuta company fact, consult _SHARED-CANONICAL-FACTS.md.
If the fact is not there, it is an open question — surface it, never invent it.
Before writing any scientific or product sentence, consult
AGENT-3-REGULATORY-INTEGRITY.md. AGENT-3 has absolute veto.
```

---

## Precedence — who wins

```
1. Statute and regulator guidance        ← AGENT-3 has absolute veto here
2. Varuta's own carton / label artwork    ← authoritative on company facts
3. _SHARED-CANONICAL-FACTS.md
4. Accepted ADRs in docs/decisions/, newest first
5. PRD v2.0            uploads/varuta_prd_01.pdf   (40 pp)
6. 13-CLAIMS-TRANSFORMATION.md · 14-ARCHITECTURE-V2.md
7. varuta_prd.md       (7-page PRD)
8. Spec set files 00–12
9. chatgpt-varuta_site.pdf   (original brief)
```

**AGENT-3's veto at level 1 is absolute.** No commercial argument, design preference or launch date overrides it. A veto is recorded, not negotiated. This is the single most important property of the system: without it, deadline pressure quietly reintroduces the claims that create criminal liability.

---

## How the agents interact

```
                    AGENT-1  PRD Custodian
                    owns the spec, arbitrates conflicts
                    specifies slots, never fills them
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   AGENT-2 (held)       AGENT-3              AGENT-4
   Design/UX            Regulatory           Growth/SEO/AEO
   how it looks         what may be said     who finds it
        │                    │                    │
        └──────── VETO ──────┴────── VETO ────────┘
                 AGENT-3 can stop either
```

Concretely:
- AGENT-1 specifies *"the product dossier has a mechanism section"*.
- AGENT-3 decides *what that section may say*, and signs it.
- AGENT-2 decides *how it looks*.
- AGENT-4 decides *which query it answers and how it is structured for citation*.

None of them writes another's output. AGENT-1 requesting claim copy from AGENT-3 rather than writing it is the intended behaviour, not friction.

---

## Why AGENT-2 is held

Two fully-specified, mutually incompatible design systems exist in the source material:

| | PRD v2.0 | Earlier system |
|---|---|---|
| Canvas | Warm Ivory `#FFFDF4` | White |
| Accent | Antique Gold `#C9A84C` | DNA Blue `#1F3C88` |
| Display | **Playfair Display** (serif) | **Manrope** (sans) |
| Register | Heritage / apothecary | Clinical journal |
| Serves first | Ananya (consumer) | Dr. Priya (clinician) |

They cannot be blended — a hybrid reads as indecision, which in this category reads as untrustworthy. And the choice is strategic rather than aesthetic: it decides whose expectations the site meets first, which is in tension with the stated persona priority (Dr. Priya first) versus PRD v2.0's own tokens (which serve Ananya).

Writing AGENT-2 now would mean picking one silently, and every token, component and animation decision inherits from that pick. `AGENT-2-DESIGN-UX.md` therefore contains the conflict, the constraints that survive either choice, an inventory of existing assets, and **15 questions for the design discussion**. Answer those and the file gets written properly.

---

## The eleven arbitrated conflicts

Full reasoning in `_SHARED-CANONICAL-FACTS.md §7`. Summary of what changed against PRD v2.0:

| Conflict | Ruling |
|---|---|
| Brestil "compliant" rewrite | **Rejected.** DMR Schedule 21 names the body part; "breast wellness" is still inside it. Do not publish |
| Lead product | Estroclen = marketing hero (whitespace argument is sound); **Guanolact = first page built** (only SKU with pre-existing permitted claims) |
| Fertiscope | **Hold.** It is a CDSCO medical device, not an FSSAI nutraceutical |
| Products routing | **Real routes**, tab UX preserved. Hash-synced tabs on one URL is one search result for nine products |
| **GSAP Club membership** | **Factually wrong — deleted.** GSAP has been 100% free including MorphSVG, SplitText and ScrollTrigger since 30 Apr 2025. PRD v2.0 has this as a P0 blocking gate with a finance owner. Cost: ₹0 |
| Design system | **Deferred** to AGENT-2 |
| Next.js 14 → 15 | 15 |
| Sanity CMS | **Accepted** — the approval workflow and audit trail genuinely help the claims register |
| Sector count 4 vs 7 | **Seven.** PRD v2.0 contradicts itself internally |
| Melatonin | Schedule H reclassification pending — confirm in writing before QuickNap copy freeze |
| Rule 170 AYUSH | Determine per SKU. Cystorin is nine classical botanicals; if AYUSH-licensed, advertising needs pre-clearance |

---

## Before any code is written

`_SHARED-CANONICAL-FACTS.md §9` lists **21 open questions, 14 of them launch-blocking.** Almost none are engineering tasks. The five to chase on day one:

1. **FSSAI licence numbers for every product** — a literal `[number]` reaching production is a P0 defect, and only two numbers are known
2. **CIN** — required in the footer of every page
3. **Named medical reviewer** — a real, registered, consenting practitioner. Blocks *all* mechanism content sitewide
4. **Legal page content** — Privacy, Terms, Medical Disclaimer, Grievance Officer. DPDP Act 2023
5. **Business email + SPF/DKIM/DMARC** — without DMARC the contact form's enquiries land in spam, which is a silent total conversion failure

Phase 0 is compliance, not design. Expect 2–3 weeks and ₹40,000–₹1,00,000 for competent FSSAI/DMR advisory. Any plan that opens with visual design is wrong.

---

## Related documents

| Path | What |
|---|---|
| `../varuta-pharma-website/13-CLAIMS-TRANSFORMATION.md` | Product-by-product legal register, all 9 SKUs. AGENT-3's source material |
| `../varuta-pharma-website/14-ARCHITECTURE-V2.md` | Route map, stack, perf budget, build phases. AGENT-1's source material |
| `../varuta-pharma-website/12-VISUAL-ASSET-PIPELINE.md` | Imagery: 3 zones, ASCI AI risk tiers, dieline→3D render pipeline, budget |
| `../varuta-strategy.html` | Visual overview of the compliance findings and build plan |
| `../varuta-homepage/index.html` | Working, browser-verified hero prototype |
| `uploads/varuta_prd_01.pdf` | PRD v2.0, 40 pp — primary engineering input |
