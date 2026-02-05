# Production Verification Notes - Forge AI

This document serves as a checklist-style verification record for production deployments.

## Deployment Information

**Deployment Date:** `_____________________`  
**Deployed By:** `_____________________`  
**Version/Commit:** `_____________________`  
**Production Frontend URL:** `_____________________`  
**Backend Canister ID:** `_____________________`

---

## Verification Checklist

### 1. Routing & CTA Verification

Verify all primary navigation links and CTA buttons navigate to the intended routes:

#### Main Navigation
- [ ] **Homepage (/)** - Loads correctly
- [ ] **Explore (/explore)** - Accessible from header and CTAs
- [ ] **Marketplace (/marketplace)** - Accessible from header and CTAs
- [ ] **Build (/build)** - Accessible from header and CTAs
- [ ] **Docs (/docs)** - Accessible from header and CTAs
- [ ] **Demo Lab (/demo-lab)** - Accessible from hero CTAs and marketplace templates
- [ ] **Login (/login)** - Accessible from header

#### Secondary Pages
- [ ] **About (/about)** - Accessible from footer
- [ ] **Vision (/vision)** - Accessible from footer
- [ ] **Roadmap (/roadmap)** - Accessible from footer
- [ ] **Developers (/developers)** - Accessible from footer
- [ ] **Playbooks (/playbooks)** - Accessible from hero and footer
- [ ] **Support (/support)** - Accessible from footer
- [ ] **Agent Self-Onboarding (/agent-onboarding)** - Accessible from footer

#### CTA Buttons
- [ ] Hero "Explore Agents" → `/explore`
- [ ] Hero "Build Your Agent" → `/build`
- [ ] Hero "Try Demo Lab" → `/demo-lab`
- [ ] Hero "View Playbooks" → `/playbooks`
- [ ] Marketplace template cards → `/demo-lab` with prefilled prompts
- [ ] Onboarding survey buttons → `/demo-lab` with prefilled prompts

**Issues Found:** `_____________________` (or "None")

---

### 2. SEO Artifacts Verification

Verify that SEO-related files are accessible and contain correct information:

#### robots.txt
- [ ] **Accessible at:** `/robots.txt`
- [ ] **Contains:** Allow all crawlers, sitemap reference
- [ ] **Sitemap reference:** Uses relative path `/sitemap.xml`

#### sitemap.xml
- [ ] **Accessible at:** `/sitemap.xml`
- [ ] **Contains all major routes:**
  - [ ] / (homepage)
  - [ ] /explore
  - [ ] /marketplace
  - [ ] /build
  - [ ] /docs
  - [ ] /demo-lab
  - [ ] /about
  - [ ] /vision
  - [ ] /roadmap
  - [ ] /developers
  - [ ] /playbooks
  - [ ] /login
  - [ ] /support
  - [ ] /agent-onboarding
  - [ ] Marketplace capability sub-pages

**Issues Found:** `_____________________` (or "None")

---

### 3. Scroll Behavior Verification

Verify scroll-to-top and back/forward restoration work correctly:

#### Forward Navigation (Scroll-to-Top)
- [ ] Clicking internal navigation links scrolls to top of new page
- [ ] Smooth scroll animation works (or instant if prefers-reduced-motion)
- [ ] CTA buttons that navigate to new pages scroll to top

#### Back/Forward Navigation (Scroll Restoration)
- [ ] Navigate to a page and scroll down
- [ ] Navigate to another page
- [ ] Click browser Back button → previous scroll position is restored
- [ ] Click browser Forward button → scroll position is restored

#### Section Jump Scrolling
- [ ] Homepage section index scrolls to correct sections
- [ ] Footer "Jump to Top" button works
- [ ] Smooth scroll respects prefers-reduced-motion preference

**Issues Found:** `_____________________` (or "None")

---

### 4. Internet Identity & Authentication

Verify Internet Identity integration works on production:

#### Login Flow
- [ ] Login button visible in header
- [ ] Clicking login opens Internet Identity modal
- [ ] Can authenticate successfully
- [ ] Profile setup modal appears for first-time users
- [ ] Can save profile name
- [ ] Profile name persists after page refresh

#### Authenticated Actions
- [ ] **Rating Persistence:** Can submit rating on demo execution
- [ ] Rating persists after page refresh
- [ ] **Comments Posting:** Can post comment on /roadmap or /support
- [ ] Comment appears immediately after posting
- [ ] **Comment Upvoting:** Can upvote a comment
- [ ] Upvote count updates correctly
- [ ] Can toggle upvote (remove upvote)

#### Logout
- [ ] Logout button works
- [ ] After logout, authenticated actions require login
- [ ] Cached data is cleared on logout

**Issues Found:** `_____________________` (or "None")

---

### 5. Performance & Loading

Basic performance checks:

- [ ] Initial page load < 3 seconds
- [ ] No visible layout shift (CLS)
- [ ] Images load progressively
- [ ] No console errors on page load
- [ ] Animations are smooth (60fps)

**Issues Found:** `_____________________` (or "None")

---

### 6. Mobile Responsiveness

Quick mobile verification (test on actual device or browser DevTools):

- [ ] Homepage renders correctly on mobile
- [ ] Navigation menu works (hamburger menu)
- [ ] CTAs are tappable and properly sized
- [ ] Text is readable without zooming
- [ ] Demo Lab execution panel works on mobile

**Issues Found:** `_____________________` (or "None")

---

## Summary

**Total Issues Found:** `_____`  
**Critical Issues:** `_____`  
**Non-Critical Issues:** `_____`

**Overall Status:** ☐ Pass ☐ Pass with Minor Issues ☐ Fail

**Additional Notes:**
