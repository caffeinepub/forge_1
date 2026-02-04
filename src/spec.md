# Specification

## Summary
**Goal:** Permanently enforce text-only “Forge AI” branding across the entire UI by removing the Forge icon mark from all user-visible surfaces.

**Planned changes:**
- Update the reusable branding component(s) (including `frontend/src/components/ForgeBrandMark.tsx`) to render text-only “Forge AI” and remove any icon `<img>` usage or icon-based variants.
- Update all callers (e.g., global header and homepage/hero areas) to use the text-only branding and prevent regressions to icon+text lockups during navigation.
- Remove the Forge icon favicon reference from `frontend/index.html` so the app no longer points to `/assets/generated/forge-icon-v2.dim_256x256.png`, ensuring no broken asset references remain.

**User-visible outcome:** Everywhere branding appears, users only see the exact text “Forge AI” (with no icon mark), including headers, hero areas, and loading/empty states; the browser tab no longer uses the Forge icon as a favicon.
