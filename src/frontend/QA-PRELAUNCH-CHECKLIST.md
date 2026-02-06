# Pre-Launch QA Checklist - Forge AI

This comprehensive checklist ensures Forge AI is production-ready before launch.

## 1. Routing & Navigation

### Primary Routes
- [ ] `/` - Homepage loads correctly
- [ ] `/explore` - Explore page accessible
- [ ] `/marketplace` - Marketplace page accessible
- [ ] `/build` - Build page accessible
- [ ] `/docs` - Docs page accessible
- [ ] `/demo-lab` - Demo Lab page accessible
- [ ] `/login` - Login page accessible

### Secondary Routes
- [ ] `/about` - About page accessible
- [ ] `/vision` - Vision page accessible
- [ ] `/roadmap` - Roadmap page accessible
- [ ] `/developers` - Developers page accessible
- [ ] `/playbooks` - Playbooks page accessible
- [ ] `/support` - Support page accessible
- [ ] `/agent-onboarding` - Agent self-onboarding page accessible

### Navigation Components
- [ ] Global header navigation works on all pages
- [ ] Footer links navigate correctly
- [ ] Hamburger menu works on mobile
- [ ] All CTA buttons navigate to correct destinations
- [ ] Back button appears when arriving via CTA
- [ ] Back button navigates correctly

---

## 2. Scroll Behavior

### Scroll-to-Top
- [ ] Internal navigation scrolls to top of new page
- [ ] Smooth scroll animation works (when motion not reduced)
- [ ] Instant scroll when prefers-reduced-motion is enabled
- [ ] CTA-driven navigation scrolls to top

### Back/Forward Restoration
- [ ] Browser Back button restores previous scroll position
- [ ] Browser Forward button restores scroll position
- [ ] Scroll restoration works across multiple pages

### Section Jump Scrolling
- [ ] Homepage section index scrolls to correct sections
- [ ] Footer "Jump to Top" button works
- [ ] Section jumps respect prefers-reduced-motion

---

## 3. Responsiveness

### Desktop (1920x1080)
- [ ] All pages render correctly
- [ ] No horizontal scroll
- [ ] Content is centered and readable
- [ ] Navigation is accessible

### Laptop (1366x768)
- [ ] All pages render correctly
- [ ] Content adapts appropriately
- [ ] No layout breaks

### Tablet (768x1024)
- [ ] All pages render correctly
- [ ] Navigation switches to mobile menu
- [ ] Touch targets are appropriately sized
- [ ] Content is readable

### Mobile (375x667)
- [ ] All pages render correctly
- [ ] Hamburger menu works
- [ ] Text is readable without zooming
- [ ] CTAs are tappable
- [ ] Forms are usable
- [ ] Demo Lab execution panel works

### Mobile Homepage Specific (375x667 & 390x844)
- [ ] Hero section loads and is visible
- [ ] "What Is" section (Explore Workflows) loads and is visible (no blank space)
- [ ] Core Capabilities section loads and is visible
- [ ] Use Cases section loads and is visible
- [ ] Ecosystem Flywheel section loads and is visible
- [ ] AI → Human section loads and is visible
- [ ] Final Conversion section loads and is visible
- [ ] All CTAs in each section are tappable and have visible focus states
- [ ] No sections remain permanently hidden (opacity 0)
- [ ] Orientation change (portrait/landscape) does not hide sections
- [ ] No console errors when scrolling through sections

---

## 4. Keyboard Accessibility

### Navigation
- [ ] Tab key navigates through all interactive elements
- [ ] Focus indicators are visible
- [ ] Skip to main content link works
- [ ] Escape key closes modals/overlays

### Interactive Elements
- [ ] All buttons are keyboard accessible
- [ ] All links are keyboard accessible
- [ ] Form inputs are keyboard accessible
- [ ] Dropdown menus work with keyboard
- [ ] Modal dialogs trap focus correctly

---

## 5. Reduced Motion Support

### Animations
- [ ] Smooth scroll becomes instant when prefers-reduced-motion
- [ ] Rotating placeholder input stops rotating
- [ ] Execution panel micro-pauses are shortened
- [ ] Activity feed reveal is faster
- [ ] Section entry animations are disabled (sections appear immediately)
- [ ] Navigation overlay animations are simplified

### Transitions
- [ ] All CSS transitions respect prefers-reduced-motion
- [ ] No jarring motion when reduced motion is enabled

---

## 6. Primary CTAs

### Homepage Hero
- [ ] "Explore Agents" → `/explore`
- [ ] "Build Your Agent" → `/build`
- [ ] "Try Demo Lab" → `/demo-lab`
- [ ] "View Playbooks" → `/playbooks`

### Marketplace Section
- [ ] Template cards navigate to `/demo-lab` with prefilled prompts
- [ ] "Explore All Agents" → `/marketplace`

### Onboarding Survey
- [ ] Workflow buttons navigate to `/demo-lab` with prefilled prompts

### Footer
- [ ] All footer links navigate correctly
- [ ] Social media links open in new tabs
- [ ] Agent self-onboarding CTA → `/agent-onboarding`

---

## 7. SEO & Crawlability

### Meta Tags
- [ ] Each page has unique `<title>`
- [ ] Each page has unique meta description
- [ ] Open Graph tags are present
- [ ] Twitter Card tags are present
- [ ] Canonical URLs are set

### Structured Data
- [ ] robots.txt is accessible at `/robots.txt`
- [ ] sitemap.xml is accessible at `/sitemap.xml`
- [ ] sitemap.xml includes all major routes

### Semantic HTML
- [ ] Each page has exactly one `<h1>`
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Semantic HTML5 elements used (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`)

---

## 8. Console Errors

### Development Build
- [ ] No console errors on homepage
- [ ] No console errors on any primary page
- [ ] No console warnings (or documented as acceptable)

### Production Build
- [ ] No console errors on homepage
- [ ] No console errors on any primary page
- [ ] No console warnings (or documented as acceptable)

---

## 9. WCAG 2.1 AA Compliance

### Color Contrast
- [ ] Text has sufficient contrast (4.5:1 for normal text)
- [ ] Large text has sufficient contrast (3:1)
- [ ] Interactive elements have sufficient contrast

### Focus Indicators
- [ ] All interactive elements have visible focus indicators
- [ ] Focus indicators meet contrast requirements

### Alt Text
- [ ] All images have appropriate alt text
- [ ] Decorative images have empty alt text

### Form Labels
- [ ] All form inputs have associated labels
- [ ] Error messages are descriptive and accessible

### ARIA
- [ ] ARIA labels are used where appropriate
- [ ] ARIA live regions announce dynamic content
- [ ] ARIA roles are used correctly

---

## 10. Performance

### Load Times
- [ ] Initial page load < 3 seconds (on 3G)
- [ ] Time to Interactive < 5 seconds
- [ ] First Contentful Paint < 1.5 seconds

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### Assets
- [ ] Images are optimized
- [ ] Fonts are preloaded
- [ ] Critical CSS is inlined (if applicable)

---

## 11. Internet Identity Integration

### Login Flow
- [ ] Login button is visible
- [ ] Clicking login opens Internet Identity modal
- [ ] Can authenticate successfully
- [ ] Profile setup modal appears for first-time users
- [ ] Can save profile name
- [ ] Profile persists after page refresh

### Authenticated Actions
- [ ] Rating submission works
- [ ] Rating persists after page refresh
- [ ] Comment posting works
- [ ] Comment upvoting works
- [ ] Last forged task is remembered

### Logout
- [ ] Logout button works
- [ ] Cached data is cleared on logout
- [ ] Unauthenticated state is correct after logout

---

## 12. Production Deployment Smoke Test

After deploying to production, verify the following:

### Basic Functionality
- [ ] Production URL loads successfully
- [ ] All static assets load (no 404s)
- [ ] Internet Identity login works on production
- [ ] Authenticated actions work on production

### Critical User Flows
- [ ] Can complete a demo execution in Demo Lab
- [ ] Can submit a rating and it persists
- [ ] Can post a comment and it appears
- [ ] Can upvote a comment and count updates

### SEO Verification
- [ ] `/robots.txt` is accessible on production
- [ ] `/sitemap.xml` is accessible on production
- [ ] Meta tags are present in production page source

**For detailed production verification, see:** `frontend/VERIFICATION-NOTES-PRODUCTION.md`  
**For deployment instructions, see:** `frontend/DEPLOYMENT-PRODUCTION.md`

---

## Sign-Off

**QA Completed By:** `_____________________`  
**Date:** `_____________________`  
**Status:** ☐ Pass ☐ Pass with Minor Issues ☐ Fail

**Notes:**
