# Responsive Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the portfolio responsive from 320px to 1920px while keeping desktop (≥1280px) pixel-identical.

**Architecture:** Fluid + breakpoints cirúrgicos. Custom Tailwind v4 breakpoints (480/768/1280), responsive Tailwind classes on components, CSS overrides for stage wrapper and complex behaviors. Desktop code untouched — all responsive is additive via `max-lg:`, `max-md:`, `max-sm:` prefixes.

**Tech Stack:** Tailwind CSS 4, React 18, Playwright CLI for visual validation.

**Spec:** `docs/superpowers/specs/2026-03-23-responsive-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `styles/tailwind.css` | Modify | Add custom breakpoints via `@theme` |
| `styles/responsive.css` | Create | Stage wrapper overrides, complex responsive CSS |
| `styles/index.css` | Modify | Import responsive.css |
| `app/App.tsx` | Modify | Remove inline style dimensions (CSS handles it) |
| `app/generated/Portfolio2026_1_86.tsx` | Modify | Responsive gaps, vector hide, padding |
| `app/components/sections/BadgeHeader.tsx` | Modify | Mini-nav mobile behavior |
| `app/components/sections/HeroSection.tsx` | Modify | Stack layout, fluid type, code block sizing |
| `app/components/sections/AboutSection.tsx` | Modify | Stack, reorder, fluid widths |
| `app/components/sections/CaseStudyIntro.tsx` | Modify | Stack, fluid widths |
| `app/components/sections/CaseStudyWAP.tsx` | Modify | Stack, fluid widths |
| `app/components/sections/CaseStudyCoolhunting.tsx` | Modify | Cover scale, bento reorganize |
| `app/components/sections/CaseStudyConnectHunt.tsx` | Modify | Cover scale, text reposition |
| `app/components/sections/CaseStudyPortal.tsx` | Modify | Stack, fluid widths |
| `app/components/sections/TestimonialSection.tsx` | Modify | Reorganize, hide decorative blocks |
| `app/components/sections/ONovoMercadoSection.tsx` | Modify | Stack, image grid adapt |
| `app/components/sections/HighlightsSection.tsx` | Modify | Auto height, dock scroll |
| `app/components/sections/ProjectsGrid.tsx` | Modify | Cards stack, auto height |
| `app/components/sections/CTASection.tsx` | Modify | Stack, icon resize |
| `app/components/sections/FooterSection.tsx` | Modify | Grid to flex, stack contact |
| `tests/visual-baseline/capture.mjs` | Modify | Add all validation viewports |

---

## Phase 1: Infrastructure

### Task 1: Expand Playwright capture to cover all validation viewports

**Files:**
- Modify: `tests/visual-baseline/capture.mjs`

- [ ] **Step 1: Update viewports array**

Replace the viewports array in `capture.mjs` with all validation sizes:

```js
const viewports = [
  { name: "mobile-320", width: 320, height: 844 },
  { name: "mobile-375", width: 375, height: 812 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-430", width: 430, height: 932 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "tablet-1024", width: 1024, height: 768 },
  { name: "desktop-1280", width: 1280, height: 800 },
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "desktop-1920", width: 1920, height: 1080 },
];
```

- [ ] **Step 2: Run and verify it captures all viewports**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs
```

Expected: 9 screenshots saved to `tests/visual-baseline/screenshots/`.

- [ ] **Step 3: Commit**

```bash
git add tests/visual-baseline/capture.mjs
git commit -m "chore: expand visual baseline to 9 viewports (320-1920px)"
```

---

### Task 2: Capture desktop baseline for regression testing

Before ANY responsive changes, lock the current desktop state.

- [ ] **Step 1: Capture fresh baseline at all viewports**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs
```

- [ ] **Step 2: Verify desktop screenshots exist and look correct**

Visually inspect `desktop-1440-full.png` and `desktop-1280-full.png`. These are the immutable baselines.

- [ ] **Step 3: Commit baselines**

```bash
git add tests/visual-baseline/screenshots/
git commit -m "chore: capture baseline screenshots for all 9 viewports"
```

---

## Phase 2: Responsive Foundation

### Task 3: Tailwind breakpoints + responsive CSS + stage wrapper

**Files:**
- Modify: `styles/tailwind.css`
- Create: `styles/responsive.css`
- Modify: `styles/index.css`
- Modify: `app/App.tsx`

- [ ] **Step 1: Define custom breakpoints in Tailwind**

In `styles/tailwind.css`, add `@theme` block after the imports:

```css
@import 'tailwindcss' source(none);
@source '../**/*.{js,ts,jsx,tsx}';

@theme {
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1280px;
  --breakpoint-xl: 1440px;
  --breakpoint-2xl: 1920px;
}
```

This gives us `max-lg:` (<1280), `max-md:` (<768), `max-sm:` (<480).

- [ ] **Step 2: Create responsive.css**

Create `styles/responsive.css`:

```css
/* ==========================================================================
   Responsive overrides — only applies below 1280px.
   Desktop (≥1280px) is NEVER affected by this file.
   ========================================================================== */

/* Stage wrapper: override inline styles on mobile */
@media (width < 1280px) {
  .visual-ir-stage {
    width: 100% !important;
    max-width: 1440px;
    height: auto !important;
  }
}
```

The `!important` is necessary and justified: it overrides inline `style={{ width, height }}` from React only on mobile. Desktop keeps inline styles.

- [ ] **Step 3: Import responsive.css in index.css**

Add at the end of `styles/index.css`:

```css
@import './responsive.css';
```

- [ ] **Step 4: Remove inline dimensions from App.tsx**

Replace `App.tsx` to remove the hardcoded inline styles. The CSS `.visual-ir-stage` already has `width: 1440px` and on mobile the responsive.css overrides it:

```tsx
import Portfolio2026_1_86 from "./generated/Portfolio2026_1_86";
import "../styles/visual-ir.css";

export default function App() {
  return (
    <div className="visual-ir-page">
      <div className="visual-ir-stage">
        <Portfolio2026_1_86 />
      </div>
    </div>
  );
}
```

**CRITICAL:** The CSS class `.visual-ir-stage` in `visual-ir.css` already has `width: 1440px; max-width: 100%;`. Verify this before removing inline styles. The desktop rendering must not change.

- [ ] **Step 5: Add desktop height preservation in visual-ir.css**

Since the inline `height: 12550px` is being removed, add it to the CSS class so desktop keeps the fixed height (needed for Vector background positioning):

In `styles/visual-ir.css`, find the `.visual-ir-stage` rule and add `height: 12550px`:

```css
.visual-ir-stage {
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-x: clip;
  width: 1440px;
  max-width: 100%;
  height: 12550px; /* ADD: from inline style, needed for Vector positioning */
}
```

The `responsive.css` already overrides this to `height: auto !important` below 1280px.

- [ ] **Step 6: Validate desktop unchanged**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update
node tests/visual-baseline/compare.mjs
```

Expected: `desktop-1440-full.png` IDENTICAL. Mobile screenshots will show changes (wider content).

- [ ] **Step 7: Commit**

```bash
git add styles/tailwind.css styles/responsive.css styles/index.css styles/visual-ir.css app/App.tsx
git commit -m "feat(responsive): add breakpoints, stage wrapper, responsive CSS foundation"
```

---

### Task 4: Orchestrator responsive gaps and padding

**Files:**
- Modify: `app/generated/Portfolio2026_1_86.tsx`

- [ ] **Step 1: Add responsive classes to root container**

In `Portfolio2026_1_86.tsx`, the root div has:
```
className="bg-[#f7f7f7] content-stretch flex flex-col gap-[150px] items-center p-[24px] relative size-full"
```

Add responsive modifiers:
```
className="bg-[#f7f7f7] content-stretch flex flex-col gap-[150px] max-lg:gap-[clamp(48px,12.5vw,150px)] items-center p-[24px] max-lg:p-[clamp(16px,2.5vw,24px)] relative size-full"
```

- [ ] **Step 2: Add responsive classes to section wrapper**

The inner wrapper div has:
```
className="content-stretch flex flex-col gap-[180px] items-center relative shrink-0 w-full"
```

Add responsive modifier:
```
className="content-stretch flex flex-col gap-[180px] max-lg:gap-[clamp(56px,15vw,180px)] items-center relative shrink-0 w-full"
```

- [ ] **Step 3: Add responsive hide to Vector background**

The Vector div:
```
className="absolute inset-[36.2%_36.33%_62.5%_43.78%]"
```

Add `max-md:hidden`:
```
className="absolute inset-[36.2%_36.33%_62.5%_43.78%] max-md:hidden"
```

- [ ] **Step 4: Validate desktop unchanged**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update
node tests/visual-baseline/compare.mjs
```

Expected: `desktop-1440-full.png` IDENTICAL.

- [ ] **Step 5: Capture mobile state and visually inspect**

```bash
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task4.png
```

Visually verify gaps are reduced and Vector is hidden on mobile.

- [ ] **Step 6: Commit**

```bash
git add app/generated/Portfolio2026_1_86.tsx
git commit -m "feat(responsive): orchestrator fluid gaps and vector hide on mobile"
```

---

## Phase 3: Section-by-Section Responsive

### Common Pattern Reference

Most 2-column sections follow this pattern. The exact classes differ per section.

**Container:** Add `max-md:flex-col` (or `max-md:flex-col-reverse` if visual should come first on mobile).
**Fixed-width children:** Add `max-md:w-full`.
**Fixed heights:** Add `max-md:h-auto` where content should flow.
**Large headings:** Add `max-lg:text-[clamp(min,vw,max)]` and matching `max-lg:leading-[clamp(...)]`.

After EACH section task:
1. Validate desktop: `DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs`
2. Capture mobile: `npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-taskN.png`
3. Visual inspection of mobile screenshot.

---

### Task 5: HeroSection responsive

**Files:**
- Modify: `app/components/sections/HeroSection.tsx`

This is the most impactful section. The hero has a complex layout: large title text, description, slideshow image (floating), and a code block.

- [ ] **Step 1: Make hero container fluid**

The root div has `w-[996px]`. Add:
```
w-[996px] max-lg:w-full
```

- [ ] **Step 2: Make hero title fluid**

Find the heading with `text-[70px] leading-[90px] tracking-[-3.5px]`. Add:
```
text-[70px] max-lg:text-[clamp(36px,8vw,70px)] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)] tracking-[-3.5px]
```

- [ ] **Step 3: Make description fluid and full-width**

Find the description container with `w-[792px]`. Add:
```
w-[792px] max-lg:w-full
```

The `text-[20px] leading-[32px]` becomes:
```
text-[20px] max-lg:text-[clamp(16px,2.2vw,20px)] leading-[32px] max-lg:leading-[clamp(24px,3.2vw,32px)]
```

- [ ] **Step 4: Adapt code block for mobile**

The code block container has `h-[383px] w-[792px]` (or `w-[793px]`) and absolute positioning:
```
-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-0
```

On mobile, change from absolute to relative, full-width, reduced height:
```
-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-0 max-md:relative max-md:translate-x-0 max-md:left-auto max-md:top-auto
```

Width and height:
```
h-[383px] → h-[383px] max-md:h-[240px]
w-[793px] → w-[793px] max-md:w-full
```

- [ ] **Step 5: Adapt slideshow image for mobile**

The floating slideshow image has fixed `ml-[366.83px]` and `w-[139.466px]`. On mobile:
```
ml-[366.83px] → ml-[366.83px] max-md:ml-0
```

Consider also adding `max-md:w-[100px]` to reduce the image size on small screens.

- [ ] **Step 6: Adapt code text for mobile**

The code text uses `text-[14px]`. On mobile, reduce:
```
text-[14px] → text-[14px] max-md:text-[12px]
```

- [ ] **Step 7: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task5.png
npx playwright screenshot --viewport-size="320x844" --full-page http://localhost:5173 screenshots/reference/progress-320-task5.png
```

Verify: desktop-1440 IDENTICAL. Mobile: hero title readable, code block below, no overflow.

```bash
git add app/components/sections/HeroSection.tsx
git commit -m "feat(responsive): hero section fluid type, stacked code block"
```

---

### Task 6: AboutSection responsive

**Files:**
- Modify: `app/components/sections/AboutSection.tsx`

- [ ] **Step 1: Stack and reorder on mobile**

The root flex container: add `max-md:flex-col-reverse` (image top, text bottom on mobile). Also make both children full-width:

Root: `flex gap-[24px]` → add `max-md:flex-col-reverse max-md:gap-[clamp(16px,2.5vw,24px)]`

Info container: `w-[486px]` → add `max-md:w-full`

Image container: `w-[690px] h-[604px]` → add `max-md:w-full max-md:h-[350px]`

- [ ] **Step 2: Fluid heading**

`text-[48px] leading-[64px] tracking-[-1.44px]` → add:
```
max-lg:text-[clamp(28px,4.8vw,48px)] max-lg:leading-[clamp(36px,6.4vw,64px)]
```

- [ ] **Step 3: Fluid body text**

`text-[18px] leading-[27px]` → add:
```
max-lg:text-[clamp(15px,2vw,18px)] max-lg:leading-[clamp(23px,2.8vw,27px)]
```

- [ ] **Step 4: Nametag positioning on mobile**

The nametag has `left-[78px] top-[175px]`. On mobile with reduced height, reposition:
```
left-[78px] max-md:left-[20px] top-[175px] max-md:top-[100px]
```

- [ ] **Step 5: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task6.png
git add app/components/sections/AboutSection.tsx
git commit -m "feat(responsive): about section stacks, image-first on mobile"
```

---

### Task 7: CaseStudyIntro + CaseStudyWAP + CaseStudyPortal responsive

**Files:**
- Modify: `app/components/sections/CaseStudyIntro.tsx`
- Modify: `app/components/sections/CaseStudyWAP.tsx`
- Modify: `app/components/sections/CaseStudyPortal.tsx`

These three follow the same 2-col → stack pattern.

- [ ] **Step 1: CaseStudyIntro**

Container: `w-[1200px]` → add `max-lg:w-full`

Flex wrapper with image + text: add `max-md:flex-col` (text first, image below)

Image: `w-[690px] h-[843px]` → add `max-md:w-full max-md:h-[400px]`

Text: `w-[486px]` → add `max-md:w-full`

Heading: `text-[56px] leading-[68px] tracking-[-2.8px]` → add `max-lg:text-[clamp(30px,5.5vw,56px)] max-lg:leading-[clamp(38px,6.8vw,68px)]`

Internal gap: `gap-[52px]` → add `max-md:gap-[24px]`

- [ ] **Step 2: CaseStudyWAP**

Container: `w-[1200px]` or the flex with `gap-[42px]` wrapping both cols.

Left: `w-[588px]` → add `max-md:w-full`
Right: `w-[612px]` → add `max-md:w-full`

Flex wrapper: add `max-md:flex-col`

Heading: `text-[56px] leading-[68px]` → same clamp as Intro.

Image container: `h-[757px] w-[612px]` → add `max-md:w-full max-md:h-[400px]`

Internal image: `w-[741px] left-[-134px]` → add `max-md:w-full max-md:left-0` (remove offset on mobile).

- [ ] **Step 3: CaseStudyPortal**

Container gap: `gap-[24px]` → add `max-md:flex-col max-md:gap-[16px]`

Image: `w-[792px]` → add `max-md:w-full`

Text: `w-[384px]` → add `max-md:w-full`

Heading: `text-[32px]` → add `max-lg:text-[clamp(22px,3.5vw,32px)]`

- [ ] **Step 4: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task7.png
git add app/components/sections/CaseStudyIntro.tsx app/components/sections/CaseStudyWAP.tsx app/components/sections/CaseStudyPortal.tsx
git commit -m "feat(responsive): case study intro, WAP, portal stack on mobile"
```

---

### Task 8: CaseStudyCoolhunting responsive

**Files:**
- Modify: `app/components/sections/CaseStudyCoolhunting.tsx`
- Modify: `styles/responsive.css`

This is the most complex section: cover with masks + bento grid below.

- [ ] **Step 1: Make main container fluid**

`w-[1200px]` → add `max-lg:w-full`

- [ ] **Step 2: Cover container responsive**

`h-[580px]` → add `max-md:h-auto max-md:min-h-[300px]`

The mask background uses fixed dimensions. Add to `responsive.css`:

```css
@media (width < 768px) {
  /* Coolhunting cover: scale mask to container */
  [data-node-id="1:233"] .absolute[style*="mask-size"] {
    mask-size: contain !important;
  }
}
```

If data-node-id selectors are unreliable, target via a wrapper class added to the component.

- [ ] **Step 3: Text block in cover**

`w-[460px]` → add `max-md:w-full`

Title: `text-[32px]` → add `max-lg:text-[clamp(22px,3.5vw,32px)]`

- [ ] **Step 4: Bento grid below cover**

The bento uses a flex row with items. Add `max-md:flex-col` to make them stack.

Helper card: `w-[486px] h-[348px]` → add `max-md:w-full max-md:h-auto`

Thermometer + rating row: make these 2-col on mobile. They're `w-[384px] h-[163px]` each. Add:
```
max-md:w-full max-md:h-auto
```

If they're in a flex row, keep them as `max-md:flex-row max-md:gap-[12px]` with each child at `max-md:flex-1`.

Graph: `h-[348px] w-[282px]` → add `max-md:w-full max-md:h-[280px]`

- [ ] **Step 5: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task8.png
git add app/components/sections/CaseStudyCoolhunting.tsx styles/responsive.css
git commit -m "feat(responsive): coolhunting cover scales, bento stacks on mobile"
```

---

### Task 9: CaseStudyConnectHunt responsive

**Files:**
- Modify: `app/components/sections/CaseStudyConnectHunt.tsx`

- [ ] **Step 1: Make container fluid**

`h-[580px] w-[1200px]` → add `max-lg:w-full max-md:h-auto max-md:min-h-[300px]`

- [ ] **Step 2: Text overlay positioning**

`absolute w-[435px] left-[50px] top-[50px]` → add:
```
max-md:relative max-md:w-full max-md:left-auto max-md:top-auto max-md:p-[20px]
```

This switches from absolute to relative on mobile so text flows naturally.

- [ ] **Step 3: Phone mockup scaling**

The phone container has fixed dimensions. On mobile, let it scale within the container. The key is the parent has `overflow-clip` which will naturally handle overflow.

`left-[588px] w-[612px]` → add `max-md:left-0 max-md:w-full`

- [ ] **Step 4: Title fluid**

`text-[32px]` → add `max-lg:text-[clamp(22px,3.5vw,32px)]`

- [ ] **Step 5: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task9.png
git add app/components/sections/CaseStudyConnectHunt.tsx
git commit -m "feat(responsive): connecthunt cover scales, text flows on mobile"
```

---

### Task 10: TestimonialSection responsive

**Files:**
- Modify: `app/components/sections/TestimonialSection.tsx`

- [ ] **Step 1: Make container fluid**

`h-[455.5px] w-[1200px]` → add `max-lg:w-full max-md:h-auto`

- [ ] **Step 2: Hide decorative avatar blocks on mobile**

The avatar background container (`h-[406px] w-[384px]`) is purely decorative. Add:
```
max-md:hidden
```

Also hide the border lines and decorative grid elements on mobile.

- [ ] **Step 3: Reposition testimonial text**

Review container: `absolute w-[680px] left-[452px] top-[121px]` → add:
```
max-md:relative max-md:w-full max-md:left-auto max-md:top-auto
```

- [ ] **Step 4: Fluid testimonial text**

`text-[18px] leading-[27px]` → add:
```
max-lg:text-[clamp(15px,2vw,18px)] max-lg:leading-[clamp(23px,2.8vw,27px)]
```

Fixed height on text `h-[143px]` → add `max-md:h-auto`.

- [ ] **Step 5: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task10.png
git add app/components/sections/TestimonialSection.tsx
git commit -m "feat(responsive): testimonial section flows, decorative blocks hide on mobile"
```

---

### Task 11: ONovoMercadoSection responsive

**Files:**
- Modify: `app/components/sections/ONovoMercadoSection.tsx`

- [ ] **Step 1: Make container fluid**

`w-[1200px]` → add `max-lg:w-full`

- [ ] **Step 2: Stack main 2-column layout**

The flex wrapper with left (510px) and right (588px): add `max-md:flex-col`

Left: `w-[510px]` → add `max-md:w-full`
Right: `w-[588px]` → add `max-md:w-full`

- [ ] **Step 3: Fluid heading**

`text-[56px] tracking-[-2.8px]` → add `max-lg:text-[clamp(30px,5.5vw,56px)]`

Internal gap: `gap-[102px]` → add `max-md:gap-[32px]`

- [ ] **Step 4: Image containers responsive**

Top image: `h-[468px] w-[572px]` with mask → add `max-md:w-full max-md:h-auto`

The mask-size needs CSS override. Add to `responsive.css` if needed, or let aspect ratio handle it.

Bottom mobile mockups: `w-[282px]` each, keep 2-col on mobile:
```
max-md:w-[calc(50%-8px)]
```

Or keep the flex row and let them be `max-md:flex-1`.

- [ ] **Step 5: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task11.png
git add app/components/sections/ONovoMercadoSection.tsx
git commit -m "feat(responsive): o novo mercado stacks, mockups stay 2-col on mobile"
```

---

### Task 12: HighlightsSection responsive

**Files:**
- Modify: `app/components/sections/HighlightsSection.tsx`
- Modify: `styles/responsive.css`

- [ ] **Step 1: Make container fluid, auto height**

`w-[1200px] h-[1274px]` → add `max-lg:w-full max-md:h-auto`

Internal gap: `gap-[843px]` → add `max-md:gap-[clamp(120px,30vw,843px)]`

- [ ] **Step 2: Fluid heading**

`text-[48px]` → add `max-lg:text-[clamp(28px,4.8vw,48px)]`

- [ ] **Step 3: Description fluid width**

`w-[792px]` → add `max-md:w-full`

- [ ] **Step 4: Dock horizontal scroll**

The dock container with 17 icons: add `max-md:overflow-x-auto max-md:flex-nowrap`. Each icon keeps `size-[50px]` with `max-md:shrink-0` to prevent squishing.

Add to `responsive.css` for smooth scrolling:

```css
@media (width < 768px) {
  /* Dock: horizontal scroll on mobile */
  .visual-ir-stage [data-name="dock"] {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .visual-ir-stage [data-name="dock"]::-webkit-scrollbar {
    display: none;
  }
}
```

If `data-name` isn't on the dock, add a class to the dock container in the component.

- [ ] **Step 5: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task12.png
git add app/components/sections/HighlightsSection.tsx styles/responsive.css
git commit -m "feat(responsive): highlights auto-height, dock scrolls horizontally on mobile"
```

---

### Task 13: ProjectsGrid responsive

**Files:**
- Modify: `app/components/sections/ProjectsGrid.tsx`

- [ ] **Step 1: Make container fluid**

`w-[1200px]` → add `max-lg:w-full`

- [ ] **Step 2: Fluid heading**

`text-[56px] leading-[68px] tracking-[-1.68px]` → add:
```
max-lg:text-[clamp(30px,5.5vw,56px)] max-lg:leading-[clamp(38px,6.8vw,68px)]
```

- [ ] **Step 3: Stack card rows on mobile**

Each row is a flex row with 2 cards (690+486 or 486+690). Add `max-md:flex-col` to each row.

Each card: `w-[690px] h-[399px]` or `w-[486px] h-[399px]` → add `max-md:w-full max-md:h-auto`

- [ ] **Step 4: Image masks need responsive treatment**

Card images use fixed `mask-size` and `mask-position`. On mobile with full-width cards, these need to scale.

Option A: Let overflow-clip handle it (images may be cut differently).
Option B: Add responsive mask-size overrides.

Start with Option A. If visual result is poor, add CSS overrides in `responsive.css`.

- [ ] **Step 5: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task13.png
git add app/components/sections/ProjectsGrid.tsx
git commit -m "feat(responsive): project cards stack full-width on mobile"
```

---

### Task 14: CTASection + FooterSection responsive

**Files:**
- Modify: `app/components/sections/CTASection.tsx`
- Modify: `app/components/sections/FooterSection.tsx`

- [ ] **Step 1: CTA — container fluid**

`w-[1200px]` → add `max-lg:w-full`

Header: `w-[997px]` → add `max-md:w-full`

Description: `w-[791px]` → add `max-md:w-full`

Heading: `text-[56px] tracking-[-1.68px] leading-[68px]` → add:
```
max-lg:text-[clamp(30px,5.5vw,56px)] max-lg:leading-[clamp(38px,6.8vw,68px)]
```

- [ ] **Step 2: CTA — 3-col images stack**

The 3-image row: add `max-md:flex-col`

Each image container: `w-[384px]` → add `max-md:w-full`

Center image: `size-[384px]` → add `max-md:w-full max-md:h-[300px]`

Icons: `size-[82px]` → add `max-sm:size-[60px]`. Keep 4-col.

Button: ensure touch target ≥44px (current `h-[44px]` is exactly 44px — good).

- [ ] **Step 3: Footer — grid to flex**

`inline-grid grid-cols-[max-content] grid-rows-[max-content]` → add:
```
max-md:flex max-md:flex-col max-md:w-full
```

Keyboard image: `w-[1392px] h-[774px]` → add `max-md:w-full max-md:h-auto`

- [ ] **Step 4: Footer — text and contact responsive**

Heading: `ml-[300px] mt-[472px] w-[792px]` → add:
```
max-md:ml-0 max-md:mt-[200px] max-md:w-full max-md:px-[16px]
```

`text-[40px]` → add `max-lg:text-[clamp(24px,4.5vw,40px)]`

Contact info: `ml-[470px] mt-[715px]` → add:
```
max-md:ml-0 max-md:mt-[20px] max-md:flex-col max-md:items-center
```

Social buttons: `ml-[1244px] mt-[688px]` → add:
```
max-md:ml-0 max-md:mt-[16px] max-md:justify-center
```

- [ ] **Step 5: Validate and commit**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/progress-390-task14.png
git add app/components/sections/CTASection.tsx app/components/sections/FooterSection.tsx
git commit -m "feat(responsive): CTA stacks, footer adapts to mobile"
```

---

## Phase 4: Interactive + Validation

### Task 15: BadgeHeader mini-nav on mobile

**Files:**
- Modify: `app/components/sections/BadgeHeader.tsx`

This is the only task that adds new JS behavior.

- [ ] **Step 1: Add state and toggle**

```tsx
import { useState, useRef, useEffect } from "react";

export default function BadgeHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!navOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setNavOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [navOpen]);
```

- [ ] **Step 2: Update badge markup**

The badge container stays sticky. Wrap content in a relative container. Add nav dropdown:

```tsx
  return (
    <div ref={ref} className="sticky top-[24px] z-50 flex flex-col items-center">
      <div
        className="backdrop-blur-[25px] bg-[rgba(0,0,0,0.55)] content-stretch flex flex-col h-[34px] items-center justify-center px-[20px] rounded-[18px] cursor-pointer md:cursor-default"
        onClick={() => setNavOpen((v) => !v)}
      >
        <div className="flex gap-[7px] items-center justify-center">
          <div className="bg-[#80f571] rounded-[50px] size-[8px]" />
          <span className="text-[13px] text-white font-medium whitespace-nowrap">
            <span className="max-md:hidden">Disponível para projetos</span>
            <span className="hidden max-md:inline">Disponível ▾</span>
          </span>
        </div>
      </div>
      {navOpen && (
        <nav className="hidden max-md:flex flex-col mt-[8px] bg-[rgba(0,0,0,0.75)] backdrop-blur-[20px] rounded-[12px] px-[16px] py-[12px] gap-[12px] min-w-[160px]">
          <a href="#cases" className="text-white text-[14px] opacity-70 no-underline min-h-[44px] flex items-center" onClick={() => setNavOpen(false)}>Cases</a>
          <a href="#sobre" className="text-white text-[14px] opacity-70 no-underline min-h-[44px] flex items-center" onClick={() => setNavOpen(false)}>Sobre</a>
          <a href="#contato" className="text-white text-[14px] opacity-70 no-underline min-h-[44px] flex items-center" onClick={() => setNavOpen(false)}>Contato</a>
        </nav>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Add anchor IDs to target sections**

In `Portfolio2026_1_86.tsx`, add `id` attributes to the relevant section wrappers or within the section components themselves:

- `AboutSection` → add `id="sobre"` to its root
- `CaseStudyIntro` → add `id="cases"` to its root
- `FooterSection` → add `id="contato"` to its root

- [ ] **Step 4: Validate — desktop badge must not change visually**

On desktop, "Disponível para projetos" shows. Dropdown is hidden (only shows via `max-md:`). Click does nothing visible on desktop.

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update && node tests/visual-baseline/compare.mjs
```

Expected: desktop-1440 IDENTICAL.

- [ ] **Step 5: Test mobile — tap opens nav**

```bash
npx playwright screenshot --viewport-size="390x844" --full-page http://localhost:5173 screenshots/reference/badge-mobile-390.png
```

Manually test or write a small Playwright interaction test to verify the dropdown behavior.

- [ ] **Step 6: Commit**

```bash
git add app/components/sections/BadgeHeader.tsx app/generated/Portfolio2026_1_86.tsx
git commit -m "feat(responsive): badge mini-nav with anchor links on mobile"
```

---

### Task 16: Final validation sweep — all viewports

- [ ] **Step 1: Capture ALL viewports**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update
```

- [ ] **Step 2: Compare desktop baselines**

```bash
node tests/visual-baseline/compare.mjs
```

Expected: `desktop-1440-full.png` IDENTICAL. `desktop-1280-full.png` should also be checked.

- [ ] **Step 3: Visual inspection of every mobile viewport**

Inspect each screenshot manually:
- `mobile-320-full.png` — verify nothing overflows, text readable, touch targets adequate
- `mobile-375-full.png` — verify layout
- `mobile-390-full.png` — primary mobile reference
- `mobile-430-full.png` — verify no extra whitespace
- `tablet-768-full.png` — verify tablet layout (some 2-cols may persist)
- `tablet-1024-full.png` — verify intermediate state
- `desktop-1920-full.png` — verify ultrawide (content stays centered, no stretch)

- [ ] **Step 4: Fix any issues found**

For each issue, make targeted fixes and re-run validation. Do NOT change desktop.

- [ ] **Step 5: Update baselines with final state**

```bash
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs
```

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat(responsive): final validation pass, baselines updated for all viewports"
```

---

## Dependency Graph

```
Task 1 (Playwright) → Task 2 (Baseline) → Task 3 (Foundation) → Task 4 (Orchestrator)
                                                                        ↓
                                              ┌─────────────────────────┤
                                              ↓                         ↓
                               Tasks 5-14 (Sections, parallelizable)  Task 15 (Badge nav)
                                              ↓                         ↓
                                              └──────────┬──────────────┘
                                                         ↓
                                                  Task 16 (Final)
```

Tasks 5-14 can be executed in parallel by independent subagents since each section is a separate file. Task 15 depends on Task 4 (orchestrator IDs). Task 16 runs after ALL other tasks complete.

---

## Implementation Notes

- **Tailwind v4 `max-*` prefixes:** `max-lg:` generates `@media (width < 1280px)`. This is CSS Level 4 syntax supported by all modern browsers.
- **clamp() in Tailwind:** `text-[clamp(36px,8vw,70px)]` works as an arbitrary value in Tailwind v4.
- **!important in responsive.css:** Only used for stage wrapper to override inline React styles. Justified and scoped to mobile only.
- **Mask sizing:** Some mask-size/mask-position values may need per-viewport tuning. Start with the responsive classes, then add CSS overrides if masks don't scale well.
- **Font loading:** No changes to font strategy in this plan. Font loading optimization is a separate phase.
- **Testing tip:** After each task, always run the desktop comparison FIRST. If desktop regresses, revert immediately.
