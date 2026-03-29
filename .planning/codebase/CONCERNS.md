# Codebase Concerns

**Analysis Date:** 2026-03-25

## Tech Debt

**Large Figma-derived sections and effects:**
- Issue: Several files concentrate full section markup, animation logic, and breakpoint variants in single modules, which makes small visual changes expensive and high-risk.
- Files: `app/components/sections/HeroSection.tsx`, `app/components/sections/ProjectsGrid.tsx`, `app/components/sections/TestimonialSection.tsx`, `app/components/effects/cta-icon-morph.tsx`, `app/components/effects/shader-animation.tsx`
- Impact: Minor edits require touching 250-455 line files with dense absolute positioning, duplicated desktop/tablet/mobile trees, and fragile utility strings.
- Fix approach: Keep the Figma DOM intact, but isolate stable data/config from markup where possible and add viewport-level screenshot coverage before further structural edits.

**Generated utility CSS frozen into one-off classes:**
- Issue: `styles/visual-ir.css` contains a large inventory of one-off mask, blend, and font helper selectors that mirror extracted Figma output.
- Files: `styles/visual-ir.css`
- Impact: The file is hard to audit manually, browser-specific masking behavior is scattered, and deleting “unused-looking” rules is risky without broad visual diff coverage.
- Fix approach: Treat the file as generated surface area, map which selectors are still referenced, and document safe-to-touch regions before cleanup.

**Asset-heavy manual maintenance surface:**
- Issue: The runtime depends on a large static asset set with direct string references across sections.
- Files: `public/visual-ir-assets/*`, `app/components/sections/*.tsx`, `app/components/effects/cta-icon-morph.tsx`
- Impact: Renaming or removing assets is error-prone because references are literal strings and there is no manifest validation.
- Fix approach: Add an asset reference audit script and fail CI when referenced files are missing.

**Visual validation is present but not operationalized:**
- Issue: Visual regression tooling exists only as standalone scripts, with no `npm` command, no CI hook, and no committed baseline screenshots directory.
- Files: `package.json`, `tests/visual-baseline/capture.mjs`, `tests/visual-baseline/compare.mjs`
- Impact: The project’s core quality rule is “zero regressão visual”, but the enforcement path is manual and easy to skip.
- Fix approach: Add `test:visual:capture` and `test:visual:compare` scripts, decide whether baselines live in git or artifact storage, and wire them into CI.

## Known Bugs

**`ONovoMercadoSection` disappears below `lg`:**
- Symptoms: The section is hidden on tablet and mobile instead of degrading to an adaptive variant.
- Files: `app/generated/Portfolio2026_1_86.tsx`, `app/components/sections/ONovoMercadoSection.tsx`
- Trigger: Viewports below `1280px`, because the orchestrator passes `className="max-lg:hidden"` and `ONovoMercadoSection` does not render a tablet or mobile replacement.
- Workaround: None in runtime. The section is simply absent outside desktop.

**Primary CTA looks clickable but is not interactive:**
- Symptoms: “Contato” renders as a visual button, but it is a `div`, not a link or button.
- Files: `app/components/sections/CTASection.tsx`
- Trigger: Any user trying to contact through the CTA area on desktop, tablet, or mobile.
- Workaround: Use the badge menu anchor links or manually scroll to `#contato`.

**Footer social icons and contact details are decorative only:**
- Symptoms: LinkedIn/WhatsApp icons and visible contact info are not actionable anchors or accessible controls.
- Files: `app/components/sections/FooterSection.tsx`
- Trigger: Any user trying to tap/click footer contact affordances.
- Workaround: Copy the visible email/phone manually.

**Visual compare script cannot run from a fresh clone:**
- Symptoms: `compare.mjs` expects `tests/visual-baseline/screenshots/current` and baseline images, but the repository currently contains only the scripts.
- Files: `tests/visual-baseline/compare.mjs`, `tests/visual-baseline/capture.mjs`
- Trigger: Running comparison before manually generating and organizing screenshots.
- Workaround: Manually create the baseline/current directories and capture images first.

## Security Considerations

**Missing browser hardening headers in the document shell:**
- Risk: `index.html` does not define a Content Security Policy or related hardening meta tags.
- Files: `index.html`
- Current mitigation: The app is static and no dynamic HTML injection path was detected in `app/` or `src/`.
- Recommendations: Add CSP and other deployment-level headers before introducing forms, third-party scripts, analytics, or external embeds.

**No secret-handling surface detected, but no automated guardrails either:**
- Risk: The current app is low-risk because it is static, but there is no repo-level check preventing future accidental secret exposure in client code.
- Files: `package.json`, `src/main.tsx`, `app/**/*.tsx`
- Current mitigation: No runtime API keys or credential reads were detected in the analyzed source files.
- Recommendations: Add secret scanning in CI and keep future integrations server-side.

## Performance Bottlenecks

**Large client bundle for a single-page portfolio:**
- Problem: Production build currently emits a `482.79 kB` JS bundle before gzip, with `122.59 kB` gzip.
- Files: `package.json`, `app/App.tsx`, `app/components/effects/*.tsx`
- Cause: `framer-motion` is used across multiple reveal effects and `three` is imported through `app/components/effects/shader-animation.tsx`.
- Improvement path: Split optional effects, lazy-load non-critical animation code, and keep inactive experiments out of the main graph.

**`three` is bundled even with the shader disabled:**
- Problem: The Hero section imports `ShaderAnimation`, but `shader.enabled` is `false`.
- Files: `app/components/sections/HeroSection.tsx`, `app/components/effects/shader-animation.tsx`
- Cause: Static import keeps the dependency reachable even when runtime rendering is gated off.
- Improvement path: Remove the import until the shader is live again, or lazy-load it behind the flag.

**Scroll interception in CTA animation can hurt interaction smoothness:**
- Problem: The CTA orbit hijacks wheel and touch movement with `preventDefault()` and `[touch-action:none]`.
- Files: `app/components/effects/cta-icon-morph.tsx`
- Cause: The component uses virtual scroll for the morph effect instead of passive observation of natural page scroll.
- Improvement path: Prefer scroll-linked animation derived from page position, or restrict interception to a narrower interaction mode.

**Splash intro blocks the page on first load:**
- Problem: The intro locks body scrolling and delays content until the animation completes.
- Files: `app/components/effects/splash-intro.tsx`, `app/App.tsx`
- Cause: The effect sets `document.body.style.overflow = "hidden"` and withholds children until `phase === "done"`.
- Improvement path: Measure real user impact and keep the intro optional if it harms perceived performance.

## Fragile Areas

**Scaling layout in `App.tsx`:**
- Files: `app/App.tsx`
- Why fragile: Desktop scaling depends on coordinated constants, `window.innerWidth`, `ResizeObserver`, computed stage height, and a separate footer scale override.
- Safe modification: Change one dimension rule at a time and always validate `1024px`, `1280px`, and `1440px` screenshots after edits.
- Test coverage: No automated layout assertions cover this logic.

**Breakpoint orchestration depends on className injection:**
- Files: `app/generated/Portfolio2026_1_86.tsx`, `app/components/sections/*.tsx`
- Why fragile: Visibility rules are split between the orchestrator and each section’s internal desktop/mobile variants. A wrong `className` can remove entire content blocks.
- Safe modification: Verify every section at `320px`, `390px`, `768px`, `1024px`, and `1440px` after changing visibility classes.
- Test coverage: Only manual or ad hoc Playwright screenshot flows exist.

**Absolute-positioned project/showcase sections:**
- Files: `app/components/sections/ProjectsGrid.tsx`, `app/components/sections/HighlightsSection.tsx`, `app/components/sections/TestimonialSection.tsx`, `app/components/sections/ONovoMercadoSection.tsx`
- Why fragile: These sections combine overflow clipping, hardcoded aspect ratios, masks, and many absolute children, so content or asset changes can crop unexpectedly.
- Safe modification: Prefer asset swaps over layout edits, and capture section-level screenshots in all supported breakpoints.
- Test coverage: No section-scoped regression suite is committed.

## Scaling Limits

**Visual QA process does not scale with feature count:**
- Current capacity: Manual screenshots plus local comparison scripts.
- Limit: As more sections, breakpoints, and motion states are added, manual review becomes too slow to guarantee “zero regressão visual”.
- Scaling path: Automate viewport capture in CI, store known-good baselines, and add targeted section snapshots for the most fragile areas.

## Dependencies at Risk

**`three`:**
- Risk: Heavy dependency for an effect that is currently turned off in runtime.
- Impact: Extra client weight without current user value.
- Migration plan: Remove from the main bundle until the shader is re-enabled, or load it only when the effect is active.

## Missing Critical Features

**Interactive contact path is incomplete:**
- Problem: The portfolio visually invites contact, but the main CTA and footer affordances do not actually initiate contact.
- Blocks: Smooth conversion from portfolio visit to message/call/social click.

**Operational visual baseline is incomplete:**
- Problem: The repo has capture/compare code but no packaged workflow, no baseline artifacts, and no CI enforcement.
- Blocks: Safe refactors and reliable responsive work under the project’s visual-fidelity rules.

## Test Coverage Gaps

**Responsive visibility rules:**
- What's not tested: Section presence/absence across `320px`, `390px`, `768px`, `1024px`, and `1440px`.
- Files: `app/generated/Portfolio2026_1_86.tsx`, `app/components/sections/*.tsx`
- Risk: Entire sections can silently vanish on specific breakpoints, as already happens with `ONovoMercadoSection`.
- Priority: High

**Animation behavior and interaction safety:**
- What's not tested: Splash timing, CTA wheel/touch interception, and motion fallback behavior.
- Files: `app/components/effects/splash-intro.tsx`, `app/components/effects/cta-icon-morph.tsx`, `app/components/effects/hero-title-reveal.tsx`
- Risk: Jank, blocked scrolling, or accessibility regressions can ship unnoticed.
- Priority: Medium

**Asset integrity and missing-file detection:**
- What's not tested: That every literal asset path in `app/` resolves to an existing file in `public/visual-ir-assets/`.
- Files: `app/components/sections/*.tsx`, `app/components/effects/cta-icon-morph.tsx`, `public/visual-ir-assets/*`
- Risk: Broken images or partial sections after asset cleanup/rename.
- Priority: Medium

---

*Concerns audit: 2026-03-25*
