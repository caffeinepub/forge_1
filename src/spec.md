# Specification

## Summary
**Goal:** Make scrolling feel smoother sitewide (while respecting reduced-motion) and apply a light-touch visual polish pass to the homepage without changing structure or features.

**Planned changes:**
- Add global CSS-based smooth scrolling for normal page scrolling across all pages, with strict `prefers-reduced-motion` support that disables smoothing for reduced-motion users.
- Tune and standardize scroll-to-top and section-jump behaviors to feel smoother and consistent, including clean cancellation mid-animation and reduced-motion instant behavior.
- Apply small homepage refinements (spacing, typography rhythm, glow/gradient subtlety, and consistent hover/focus micro-interactions) using existing Tailwind/global utilities while keeping the same content and layout.

**User-visible outcome:** The site scrolls more smoothly by default, scroll-to-top/section jumps feel more polished and consistent (and remain instant for reduced-motion users), and the homepage looks slightly cleaner and more refined without any new sections or feature changes.
