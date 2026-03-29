# Architecture

**Analysis Date:** 2026-03-25

## Pattern Overview

**Overall:** Single-page React composition around a Figma-derived page orchestrator.

**Key Characteristics:**
- The runtime is a linear composition chain: `index.html` -> `src/main.tsx` -> `app/App.tsx` -> `app/generated/Portfolio2026_1_86.tsx` -> `app/components/sections/*.tsx`.
- Layout is section-driven, not route-driven. The whole site renders as one page with no client-side routing, shared state store, or data fetching layer.
- Responsiveness is implemented with adaptive variants inside the same section component, using desktop/tablet/mobile markup branches plus wrapper-level scaling in `app/App.tsx`.

## Layers

**Document Shell:**
- Purpose: Boot the browser document and mount the React tree.
- Location: `index.html`
- Contains: `#root`, language metadata, viewport metadata, and the module script for `src/main.tsx`.
- Depends on: Browser runtime only.
- Used by: Vite dev server and build output.

**React Entry Layer:**
- Purpose: Create the React root and attach global stylesheet imports.
- Location: `src/main.tsx`
- Contains: `ReactDOM.createRoot(...)`, `App` import, `styles/index.css` import.
- Depends on: `react-dom/client`, `app/App.tsx`, `styles/index.css`.
- Used by: `index.html`.

**Stage and Runtime Wrapper Layer:**
- Purpose: Manage viewport-aware scaling, stage height synchronization, and global intro gating before the page content appears.
- Location: `app/App.tsx`
- Contains: Resize listeners, `ResizeObserver`, scale math for 1024px-1440px, footer scale compensation, `SplashIntro` wrapper, and `.visual-ir-stage` container wiring.
- Depends on: `app/generated/Portfolio2026_1_86.tsx`, `app/components/effects/splash-intro.tsx`, `styles/visual-ir.css`.
- Used by: `src/main.tsx`.

**Page Orchestrator Layer:**
- Purpose: Define page order, page-level spacing, and show/hide rules for each section.
- Location: `app/generated/Portfolio2026_1_86.tsx`
- Contains: Imports for every section component, page container spacing, root breakpoint classes, and a decorative absolute vector asset.
- Depends on: `app/components/sections/*.tsx`.
- Used by: `app/App.tsx`.

**Section Composition Layer:**
- Purpose: Own section markup, copy, local assets, and breakpoint-specific visual variants.
- Location: `app/components/sections/`
- Contains: `BadgeHeader`, `HeroSection`, `AboutSection`, case-study sections, testimonial, highlights, projects, CTA, and footer components.
- Depends on: Tailwind utility classes, assets in `public/visual-ir-assets/`, and effect helpers in `app/components/effects/`.
- Used by: `app/generated/Portfolio2026_1_86.tsx`.

**Effect Layer:**
- Purpose: Isolate motion and canvas-like behavior so sections stay mostly declarative.
- Location: `app/components/effects/`
- Contains: `splash-intro`, `hero-title-reveal`, `reveal-on-mount`, `card-entrance`, `cta-icon-morph`, and `shader-animation`.
- Depends on: `framer-motion`, `three`, React hooks, and section markup that passes children/props.
- Used by: `app/App.tsx` and multiple files in `app/components/sections/`.

**Small Reusable UI Layer:**
- Purpose: Hold tightly scoped repeated Figma-safe fragments.
- Location: `app/components/ui/`
- Contains: `CheckListItem.tsx`.
- Depends on: Static image assets and Tailwind classes.
- Used by: `app/components/sections/CaseStudyIntro.tsx`.

**Styling and Runtime CSS Layer:**
- Purpose: Load fonts, Tailwind, stage layout primitives, and responsive wrapper overrides.
- Location: `styles/index.css`, `styles/visual-ir.css`, `styles/responsive.css`, `styles/theme.css`, `styles/tailwind.css`, `styles/fonts.css`
- Contains: Font-face imports, `.visual-ir-page`, `.visual-ir-stage`, Figma font helper classes, and a mobile override for `.visual-ir-stage`.
- Depends on: Browser CSS runtime and Tailwind Vite plugin from `vite.config.ts`.
- Used by: `src/main.tsx` and `app/App.tsx`.

**Reference and Documentation Layer:**
- Purpose: Keep design specs and internal planning notes out of runtime code.
- Location: `docs/superpowers/`, `.planning/codebase/`
- Contains: Responsive design specs and planning artifacts.
- Depends on: None at runtime.
- Used by: Humans and tooling, not by the shipped app.

**Visual QA Tooling Layer:**
- Purpose: Capture and compare screenshots against the visual baseline.
- Location: `tests/visual-baseline/capture.mjs`, `tests/visual-baseline/compare.mjs`, `output/check-layout.js`
- Contains: Playwright-based capture, `pixelmatch` diffing, and ad hoc layout inspection.
- Depends on: Running local dev server at `http://localhost:5173`, Playwright, `pngjs`, `pixelmatch`.
- Used by: Manual validation workflows.

## Data Flow

**Initial Render Flow:**

1. `index.html` loads `/src/main.tsx`.
2. `src/main.tsx` imports `App` from `app/App.tsx` and global CSS from `styles/index.css`, then mounts React into `#root`.
3. `app/App.tsx` computes stage scale from `window.innerWidth`, measures content height with `ResizeObserver`, and wraps the page with `SplashIntro`.
4. `app/generated/Portfolio2026_1_86.tsx` renders the full page shell and composes the ordered section list.
5. Each file in `app/components/sections/` renders static content, local assets, and breakpoint-specific markup branches.

**Responsive Layout Flow:**

1. `app/App.tsx` keeps desktop markup at the canonical width and applies `transform: scale(...)` between 1024px and 1440px.
2. `styles/responsive.css` overrides `.visual-ir-stage` below 1024px so the mobile/tablet branches can fill width without desktop inline width constraints.
3. Individual sections such as `app/components/sections/HeroSection.tsx` and `app/components/sections/AboutSection.tsx` render separate desktop, tablet, and mobile blocks gated by Tailwind breakpoint utilities.
4. The page orchestrator in `app/generated/Portfolio2026_1_86.tsx` controls higher-level visibility, for example `className="max-lg:hidden"` on desktop-only sections.

**Animation Flow:**

1. `app/App.tsx` renders `SplashIntro` from `app/components/effects/splash-intro.tsx` around the whole page.
2. `SplashIntro` blocks body scroll temporarily, skips itself when `prefers-reduced-motion` is enabled, and reveals children after its timer completes.
3. Section files call motion helpers such as `HeroTitleTextReveal`, `RevealOnMount`, `CardEntrance`, and `CTAIconMorph` to animate local fragments without a shared animation manager.

**State Management:**
- State is local and ephemeral. `app/App.tsx` owns scale and measured height, `app/components/effects/splash-intro.tsx` owns splash phase, and interactive visuals such as `app/components/sections/BadgeHeader.tsx` or `app/components/effects/cta-icon-morph.tsx` use local component state/hooks.
- No global store, reducer, context tree, API cache, or server-state layer is present.

## Key Abstractions

**Page Orchestrator Component:**
- Purpose: Centralize page order and page-level spacing without burying that logic in `App`.
- Examples: `app/generated/Portfolio2026_1_86.tsx`, `app/generated/index.ts`
- Pattern: One generated root component imports section modules and renders them in sequence.

**Section Module:**
- Purpose: Encapsulate a whole visual slice of the page with its own assets and breakpoint variants.
- Examples: `app/components/sections/HeroSection.tsx`, `app/components/sections/AboutSection.tsx`, `app/components/sections/HighlightsSection.tsx`
- Pattern: Default export component, optional `id` and `className` props, desktop/tablet/mobile blocks in one file.

**Effect Helper:**
- Purpose: Reuse motion or rendering logic across multiple sections without extracting layout-heavy markup.
- Examples: `app/components/effects/hero-title-reveal.tsx`, `app/components/effects/reveal-on-mount.tsx`, `app/components/effects/card-entrance.tsx`, `app/components/effects/shader-animation.tsx`
- Pattern: Small component wrapper or helper function consumed from section markup.

**Stage Wrapper:**
- Purpose: Preserve the 1440px design baseline while allowing medium-width viewports to scale the desktop composition predictably.
- Examples: `app/App.tsx`, `styles/visual-ir.css`, `styles/responsive.css`
- Pattern: Central runtime wrapper around the whole page, not per-section layout logic.

**Visual Baseline Script:**
- Purpose: Treat screenshots as the architectural safety net for layout changes.
- Examples: `tests/visual-baseline/capture.mjs`, `tests/visual-baseline/compare.mjs`, `output/check-layout.js`
- Pattern: External scripts hit the running site and compare full-page images instead of asserting DOM structure.

## Entry Points

**HTML Entry Point:**
- Location: `index.html`
- Triggers: Browser loads the Vite app.
- Responsibilities: Set `lang="pt-BR"`, provide `#root`, and load `/src/main.tsx`.

**Application Entry Point:**
- Location: `src/main.tsx`
- Triggers: Module execution in the browser.
- Responsibilities: Import global CSS and render `App` into the root element.

**App Runtime Entry Point:**
- Location: `app/App.tsx`
- Triggers: React root mount.
- Responsibilities: Apply stage sizing/scaling, mount splash experience, and render the generated page tree.

**Page Composition Entry Point:**
- Location: `app/generated/Portfolio2026_1_86.tsx`
- Triggers: `App` render.
- Responsibilities: Assemble sections in order and control page-level breakpoint classes.

**Visual QA Entry Points:**
- Location: `tests/visual-baseline/capture.mjs`, `tests/visual-baseline/compare.mjs`, `output/check-layout.js`
- Triggers: Manual Node execution during verification.
- Responsibilities: Capture screenshots, diff screenshots, and inspect layout state.

## Error Handling

**Strategy:** Minimal runtime guards, relying on deterministic static content and browser APIs rather than domain-level error recovery.

**Patterns:**
- `src/main.tsx` uses a non-null assertion on `document.getElementById("root")!`, assuming the HTML shell is always correct.
- `app/App.tsx` guards DOM-dependent measurements with `if (stageRef.current)` before reading layout values.
- `app/components/effects/splash-intro.tsx` cleans up timers and restores body styles in `useEffect` cleanup instead of exposing a separate error boundary path.
- Visual regressions are expected to be caught outside the UI through `tests/visual-baseline/*.mjs`, not handled inside React components.

## Cross-Cutting Concerns

**Logging:** No application logging framework is present in runtime code. Scripts in `tests/visual-baseline/` and `output/check-layout.js` print to stdout for manual inspection.

**Validation:** There is no form or schema validation layer. The main correctness mechanism is visual validation via `tests/visual-baseline/capture.mjs` and `tests/visual-baseline/compare.mjs`.

**Authentication:** Not applicable. No auth layer, session management, or protected routes are present.

**Asset Delivery:** Static assets are referenced by absolute paths under `public/visual-ir-assets/` directly from section components such as `app/components/sections/HeroSection.tsx` and `app/components/sections/AboutSection.tsx`.

**Design Fidelity:** Figma-derived classes, `data-node-id` attributes, and fixed asset references are preserved in section markup. `app/lib/tokens.ts` exists as reference material and is not the primary styling source.

---

*Architecture analysis: 2026-03-25*
