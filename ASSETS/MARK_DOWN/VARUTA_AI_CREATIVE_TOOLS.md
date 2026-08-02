# VARUTA_AI_CREATIVE_TOOLS.md
### Analysis of Researched AI Tools & How to Use Them on the Varuta Pharma Website

---

## 1. Kittl (kittl.com)

**What it is:** An AI-first design platform (not a coding tool) — one canvas that gives you access to most of the leading image-generation models at once (Nano Banana / Nano Banana Pro, Seedream 4/4.5, GPT-Image-1/Alpha, Flux 1.1 Pro/Kontext, Ideogram 3, DALL-E 3) plus a full design editor: background remover, image upscaler, vectorizer, mockup generator, and templates.

**Pricing:** Free tier (5 projects, 200 one-time AI tokens). Pro $19/mo (or $14/mo billed yearly), Expert $45/mo (or $34/mo yearly) for higher AI credit allowances and storage.

**Where it fits on Varuta's site:**
- **Ingredients Library page** — generate clean, consistent illustrative icons/graphics for each hero ingredient (Protodioscin, Withanolides, Lactoferrin, etc.) in one style using its vector generator, so the whole grid looks like one designed set rather than mismatched stock icons.
- **Homepage hero background / DNA motif graphics** — generate the recurring DNA-helix visual thread discussed in DESIGN.md as a clean vector/illustration asset rather than needing a 3D artist for every instance of it.
- **Blog featured images** — one AI image per article, kept consistent via the same style/prompt across all 7 therapeutic-area articles.
- **Mockups for internal use** — brochure/PDF mockups for the Healthcare Professional Portal downloads (product catalogue cover, brochure previews) before final print-ready versions exist.
- **Background remover + upscaler** — useful as a secondary cleanup pass on your real product photos (from the previous product-photography research) before they go into Photoshop/Firefly for final retouching.

**Not the right tool for:** actual product photo generation from your real bottles/packaging (Kittl generates/edits creative graphics, it doesn't specialize in preserving a real product's exact geometry the way Pacdora or Nightjar do) — keep Kittl for illustrative/graphic assets, not product photography.

---

## 2. Remotion (github.com/remotion-dev/remotion)

**What it is:** An open-source framework for creating videos **programmatically in React** — you write React components (JSX/TSX), and Remotion renders them frame-by-frame into an MP4 using headless Chrome + FFmpeg. Since your entire frontend stack is already React + Tailwind, this is the most natural fit of any tool on your list — the same component library, animation values, and design tokens you use on the website can drive a video.

**Important caution:** Remotion has a **source-available license, not a permissive open-source one** — the README explicitly states a company license is required in some cases (typically once a company crosses a revenue/team-size threshold). Confirm Varuta's usage tier against Remotion's current license terms before committing production video work to it.

**Where it fits on Varuta's site:**
- **Homepage hero animation** — since you're already planning a DNA-ribbon motion sequence (Hero → DNA animation → morphs into product → morphs into leaf, per DESIGN.md), Remotion lets you build that exact sequence as a React component and export it as a background video (or looped animated asset) using the same Motion/GSAP/Three.js code you're already writing for the live site — no separate video tool or timeline software needed.
- **Manufacturing & Certifications page** — a short "production flow" explainer video (raw material → formulation → testing → dispatch) built from the same step-diagram component used on the live page.
- **Data-driven animations** — e.g., an animated timeline video for the About Us company milestones, built directly from your existing data structures.

**Best-fit summary:** Use Remotion when a Varuta developer wants to author a video the same way they author a webpage — as React code — and reuse existing components/animations 1:1.

---

## 3. HyperFrames (github.com/heygen-com/hyperframes)

**What it is:** An open-source (Apache 2.0, genuinely permissive — no per-render fees, no commercial-use threshold) video-rendering framework similar in spirit to Remotion, but HTML/CSS-native instead of React-native, and explicitly **built for AI coding agents** (Claude Code, Cursor, Codex, etc.) via a system of installable "skills." You (or your agent) write plain HTML with timing attributes, use GSAP/CSS/Three.js/Lottie/Anime.js for animation, and it renders a deterministic MP4.

**Why this is genuinely useful for your workflow specifically:** it ships pre-built agent workflows that map almost exactly onto what you need:
- `/product-launch-video` — built for exactly your case: turning a website/product/brief into a launch or showcase video.
- `/faceless-explainer` — for explaining a concept (e.g., "what is PCOS" or "how telomeres relate to ageing") with no product footage, all LLM-invented visuals (diagrams, typography, data-viz) — directly useful for your 7 therapeutic-area educational content.
- `/motion-graphics` — short, unnarrated, design-led motion (kinetic type, stat callouts, logo stings) — good for short homepage loop animations or Instagram/LinkedIn teasers once your social accounts launch.
- `/slideshow` — could produce an internal investor/pitch deck as a navigable interactive deck rather than a video, useful for the Polaris Fellowship / investor materials you've worked on before.

**Where it fits on Varuta's site:**
- Since you (or Antigravity) can install its Claude Code / Codex skills directly, this is the tool best suited to **agent-driven video generation as part of your build process** — e.g., telling your coding agent "using HyperFrames, make a 30-second product launch video for Erecter using its brochure copy and DNA brand kit" and getting a rendered MP4 without leaving your dev environment.
- Its **frame.md** concept (a video-specific counterpart to your existing DESIGN.md) is directly applicable — you already have DESIGN.md; HyperFrames can translate it into a video-specific spec so any generated video automatically follows your brand's palette, typography, and motion rules.

**HyperFrames vs Remotion — practical choice for Varuta:**
| | Remotion | HyperFrames |
|---|---|---|
| Authoring | React components | Plain HTML |
| License | Source-available, may require a paid company license | Apache 2.0, free commercial use, no thresholds |
| Best fit | Your own developers building video from existing React components | An AI agent (Antigravity) generating videos from a brief with no manual coding |

Given you're leaning heavily on AI coding agents for the build (Antigravity, Claude), **HyperFrames is the safer and more agent-native default** for anything Antigravity generates on its own; reserve Remotion for cases where a human developer wants to hand-build a video reusing specific existing React components.

---

## 4. OpenMontage (openmontage.video)

**What it is:** An open-source **agentic video production system** — not a rendering library you code against, but an AI agent you hand a brief and raw materials to (brand kit, product screenshots, a script or key messages), and it independently researches, writes a script, storyboards, sources or generates B-roll, narrates, scores with music, composes, and renders a finished, *editable* video — with a cost-approval "gate" before any paid generation happens. It runs inside Claude Code, Codex, or OpenCode as a plugin, or through its own "Studio" desktop app (currently private alpha, joining via waitlist).

**Where it fits on Varuta's site:**
- **Homepage hero video / company overview video** — hand it your brand kit, the "Born for Generations" narrative, and product photos, and get a full launch-style video without hiring a video agency.
- **Per-therapeutic-area explainer videos** — one video per category (Fertility, Sleep, PCOS, etc.) for the Blog or Therapeutic Area pages, generated from your existing written content.
- **Doctor-facing pitch/overview video** for the Healthcare Professional Portal, explaining Varuta's research and quality process in under 90 seconds.

**Caveat:** it's in **private alpha** — you'd need to join the waitlist, and it's not guaranteed to be available in time for your build. Treat this as a "watch and revisit" tool rather than something to plan the current build around. If it becomes available, it's the best fit of the five for "I want a finished video, not a rendering framework."

---

## 5. MuAPI (dev.muapi.ai)

**What it is:** An **aggregator API and playground** giving programmatic access to 200+ generative image, video, and audio models (Flux, Midjourney V7, Kling, Veo 3, Seedream, GPT-4o Image, Runway, Suno, and more) through one unified API/key, plus ready-made tools: AI Product Shot, Background Remover, Face Swap, Image Upscaler, and no-code "Workflows"/"Agents" builders.

**Where it fits on Varuta's site:**
- **Backend/CMS automation** — since it's an API (not just a UI tool), this is the one option on your list that your developers could wire directly into the website or an internal content pipeline — e.g., auto-generating a draft featured image whenever a new blog article is published, or batch-generating ad creative variations for performance marketing tests across Google/Meta.
- **"AI Product Shot" tool specifically** — a direct, no-code way to turn your real product photos into clean studio-style shots, comparable to the Photoroom/Pebblely tools from the earlier product-photography research, but bundled alongside the same platform you'd use for other generation needs.
- **Scale/cost efficiency** — because it's "one API for all models" at what it advertises as lowest cost, this is worth considering if Varuta ends up needing dozens of ad creative variations for Google/Meta campaigns (from the performance marketing plan) rather than manually prompting five different tools.

**Caution:** an aggregator that gives "unrestricted" access to 200+ models is a **regulatory and brand-safety risk surface** for a pharma company specifically — any image/video generated through it for public-facing healthcare content should go through the same manual review process as everything else (no invented claims, no misleading before/after style content, accurate ingredient/product representation).

---

## 6. Recommended Mapping — Website Need → Tool

| Website Need | Recommended Tool | Why |
|---|---|---|
| Ingredient icons/illustrations (Ingredients Library) | Kittl | Consistent vector-style generation across many small assets |
| DNA-motif hero graphic / brand illustrations | Kittl | Best general-purpose creative image/vector generator of the five |
| Homepage hero animation (DNA → product → leaf sequence) | Remotion | Reuses your existing React/Motion/Three.js components directly |
| Manufacturing process explainer video | Remotion or HyperFrames | Data/step-driven animation from existing site components |
| Agent-generated product launch videos (per product) | HyperFrames | Purpose-built `/product-launch-video` skill, free Apache 2.0 license, agent-native |
| Educational explainer videos (per therapeutic area) | HyperFrames | Purpose-built `/faceless-explainer` skill |
| Full autonomous "brief-to-finished-video" (company overview, doctor pitch video) | OpenMontage | End-to-end agent, but currently private alpha — revisit availability |
| Blog featured images at scale / ad creative variations | MuAPI | API-level automation for recurring content needs |
| Cleaning up real product photos into studio shots | Kittl (background remover/upscaler) or MuAPI (AI Product Shot) | Both viable; pick whichever your team is already using for photo editing |

---

## 7. Suggested Adoption Order

1. **Kittl** first — lowest friction (free tier, browser-based), covers your most immediate need: ingredient graphics and homepage visual assets while the product photography (from earlier research) is still being finalized.
2. **HyperFrames** second — since your team is already committed to an AI-coding-agent workflow (Antigravity), this integrates directly into that process with no separate video software to learn, and has no licensing risk.
3. **Remotion** as a parallel option specifically for any video that needs to precisely reuse a component already built for the live website (e.g., an exact copy of the homepage DNA animation as a standalone video asset) — confirm licensing terms for Varuta's situation before relying on it for production work.
4. **MuAPI** once you're past initial launch and into steady-state content production (blog cadence, recurring ad creative) — it's the only one of the five built for programmatic, recurring use rather than one-off creative sessions.
5. **OpenMontage** — join the waitlist now so you have access if/when it exits private alpha, but don't plan your current launch timeline around it.

---

## 8. One Standing Caution Across All Five Tools

Every one of these tools can generate visuals that look convincing but don't accurately reflect Varuta's real products, ingredients, or claims. For a doctor-facing pharmaceutical/nutraceutical brand specifically:
- Never let AI-generated imagery imply a claim your product doesn't support (e.g., a generated "clinical trial" graphic, a fabricated before/after result, an invented statistic).
- Keep a human review step before anything AI-generated (image or video) goes live on a product page, therapeutic-area page, or ad campaign — the same review discipline your compliance/regulatory process already requires for written claims should apply to visuals.
