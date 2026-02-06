# Specification

## Summary
**Goal:** Refactor the Forge AI homepage into a compact, high-density 3-section conversion layout with improved motion/performance, while preserving semantic structure and accessibility.

**Planned changes:**
- Update `frontend/src/pages/ForgeHomePage.tsx` to render exactly 3 major sections in order: (1) Hero + value + primary CTA (merged), (2) How Forge Works (accordion), (3) Live marketplace preview + final CTA (merged); remove all other existing homepage sections and their imports.
- Rebuild the Hero to match layout/content rules: no `min-h-screen`; use `py-16 md:py-20`, `max-w-5xl`, include Forge brand mark, a single keyword-focused H1, one-line product definition, outcome-driven supporting copy, 2 primary CTAs (“Explore Agents”, “Enter Marketplace”), 2 secondary CTAs (“Build Agent”, “Start Building”), plus a small trust/credibility signal within the hero.
- Implement Section 2 as a compact, accessible accordion (keyboard + ARIA) with exactly three items: Agent Discovery, Workflow Orchestration, Trust + Settlement; use `max-w-4xl` and `py-14 md:py-16`.
- Implement Section 3 as a “Live marketplace” preview using in-file placeholder data (no backend calls) with “live ecosystem” framing and a visually dominant final CTA (label: “Enter Marketplace”, “Start Using Forge”, or “Launch Your Agent”); use `max-w-6xl` and `py-14 md:py-16`.
- Apply global spacing/container rules across the homepage (replace any `py-20 md:py-28` with `py-14 md:py-16` outside the hero), reduce intersection/motion observers to at most 3 (hero, accordion reveal, final CTA emphasis), and ensure behavior respects `prefers-reduced-motion`.
- Ensure SEO/accessibility semantics: `<main>` containing `<section>` elements, exactly one H1 with logical H2/H3 hierarchy, accessible names for CTAs/accordion controls, and WCAG AA contrast; use relative imports in `ForgeHomePage.tsx` where aliases aren’t guaranteed.

**User-visible outcome:** The homepage becomes a short (~2–3 screens) three-section page with a clearer hero and CTAs, an accessible “How Forge Works” accordion, and a marketplace preview plus final dominant CTA, with reduced motion overhead and improved performance.
