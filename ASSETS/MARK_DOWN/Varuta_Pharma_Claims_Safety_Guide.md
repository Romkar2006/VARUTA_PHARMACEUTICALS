# Varuta Pharma — Product Claims & Content Safety Guide

*Companion reference to Varuta Pharma Website PRD v2.0*
*Not legal advice — a working framework. Have qualified regulatory counsel sign off before launch (see Section 8).*

---

## 1. The one fact that governs everything

Varuta Pharma sells **nutraceuticals / health supplements**, not drugs — regardless of the "Pharma" in the name. In India this puts you under:

- **FSSAI** — Food Safety and Standards (Health Supplements, Nutraceuticals, Food for Special Dietary Use, Food for Special Medical Purpose, Functional Food, and Novel Food) Regulations, 2016. This is the primary rulebook for what you're allowed to say about a supplement.
- **Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 (DMR Act)** — bans advertising *any* product as a cure/treatment/prevention for a specific list of diseases (cancer, diabetes, heart disease, sexual performance, etc.). This applies whether or not you're a "drug" company — it applies to the *claim*, not the license category.
- **ASCI Code** (Advertising Standards Council of India) — self-regulatory, but ASCI complaints get real websites, ads, and social pages taken down and generate press.
- **Consumer Protection Act, 2019 / CCPA** — general misleading-advertisement liability, including influencer/testimonial rules.

The single biggest legal exposure for Varuta isn't UI/UX or architecture — it's **any sentence that implies a supplement diagnoses, treats, cures, or prevents a disease.** That one line separates "safe FSSAI-compliant nutraceutical marketing" from "prosecutable under the DMR Act."

---

## 2. Know which type of claim you're making

| Claim type | Example | Status |
|---|---|---|
| **Nutrient content claim** | "Contains 500mg Omega-3 per serving" | Safe — factual, verifiable, no interpretation |
| **Structure/function claim** | "Supports joint comfort and mobility" | Permitted, if substantiated by ingredient research |
| **General wellness claim** | "Supports overall energy levels" | Permitted, kept vague/non-disease |
| **Disease/treatment claim** | "Cures arthritis," "Reverses diabetes," "Treats hypertension" | **Prohibited** — this is the line |
| **Risk-reduction claim** | "Reduces risk of heart attack" | Prohibited without FSSAI-approved health claim backing — treat as off-limits by default |

Rule of thumb for every SKU description: you can talk about **supporting a normal, already-healthy body function**. You cannot talk about **fixing, curing, or preventing an abnormal/diseased state.**

---

## 3. Red-flag words — flag these in every review pass

Avoid or heavily scrutinize:

- cure, treat, heal, remedy, cures/heals [disease name]
- prevent, reverse, eliminate, permanent solution
- replace / substitute for medication, insulin, prescription
- "clinically proven" (unless you have an actual trial on file for *that specific formulation*, not just the ingredient in general)
- "doctor recommended" / "doctor approved" (only if literally, verifiably true — see Section 6)
- "FDA approved" (never say this — you're FSSAI-regulated in India; conflating regulatory bodies is its own violation)
- "100% safe," "no side effects," "guaranteed results"
- disease names used as the subject of a benefit sentence ("Diabetes Support Formula" as a product *name* is far riskier than "Blood Sugar Wellness Support" as a *description*)

A useful internal test before publishing: **could this sentence be read aloud in front of a doctor without them wincing?**

---

## 4. Page-by-page guidance (mapped to your locked PRD structure)

**Home**
Brand positioning ("science-driven, doctor-first") is fine — it's not a medical claim, it's a brand claim. Keep all homepage copy at the structure/function or general-wellness level; don't let hero copy or category tiles drop a disease name as the headline promise.

**Product pages (highest risk — 7-tab structure, 6 datasets)**
- Every SKU's core benefit statement should be structure/function language, not disease language.
- Attach ingredient-level substantiation (published research citation, not just "studies show") somewhere accessible — even a linked reference, not necessarily in the hero copy.
- No disease name in the product title or above-the-fold headline.
- A disclaimer block (Section 5) should appear on every product page, not just buried in a footer link.

**About Us**
Leadership credibility is fine as-is (real people, real credentials — already locked, good). Just don't let copy imply certifications (GMP, ISO, "clinically certified") unless you can produce the actual certificate/number. Fabricated-sounding certification language is an easy, needless liability.

**Resources / educational content**
Educational articles about a therapeutic area (e.g., "Understanding Vitamin D Deficiency") are fine when factual and cited. The violation risk shows up when the article pivots from education to an implicit product claim — "...and that's why our formula cures deficiency" collapses the article into a disease claim, even in blog form.

**Investors page**
Your PRD already locks this down correctly — no unlaunched product names, no revenue figures, no valuations on the gated investor content. Keep growth language in "vision/opportunity" framing, not projected numbers, unless those numbers are audited and you're prepared to stand behind them to an actual investor.

---

## 5. Disclaimer — put a version of this near every claim block

> *These statements have not been evaluated by [regulatory body — confirm correct FSSAI-equivalent phrasing with counsel]. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before use, particularly if pregnant, nursing, on medication, or managing a medical condition.*

Note: India doesn't have a single mandated disclaimer sentence the way the US FDA does — the exact wording and FSSAI license number placement should be confirmed with counsel, but the *substance* above (not a diagnosis/treatment/cure, consult a doctor) is standard, defensible practice across the category.

---

## 6. Testimonials & doctor endorsements

- Only use real, consenting customers; don't imply "typical" results without a basis.
- If featuring any doctor/expert, they must be a real, consenting, credentialed person who actually said what's quoted — never a composite or invented quote attributed to a real professional.
- Standard "individual results may vary" language should sit next to any testimonial.

---

## 7. Comparative claims

Avoid "#1," "best," or "better than [competitor/category]" language unless you have data on file you'd defend in an ASCI complaint. These are among the most commonly challenged ad claims in India and are easy to avoid without weakening the copy.

---

## 8. Pre-publish checklist

- [ ] No disease name appears as something the product cures/treats/prevents
- [ ] Every efficacy claim ties back to an ingredient study or in-house data you could produce on request
- [ ] Disclaimer block present on every product page
- [ ] No fabricated certifications, doctor quotes, or testimonials
- [ ] No revenue/valuation/unlaunched product info outside the gated investor flow
- [ ] Final legal/regulatory review by qualified counsel before go-live — this guide is a working framework, not a substitute for that review

---

*This document reflects general, publicly known regulatory frameworks (FSSAI Health Supplements Regulations 2016, DMR Act 1954, ASCI Code, Consumer Protection Act 2019) as a practical content-writing framework. It is not a legal opinion. Given the investor-facing nature of the site and the health-category product claims, a one-time review by an Indian regulatory/FMCG lawyer before launch is worth the cost.*
