# Coding Conventions

**Analysis Date:** 2026-03-25

## Naming Patterns

**Files:**
- Use `PascalCase.tsx` for React sections and UI pieces in `app/components/sections/` and `app/components/ui/`. Examples: `app/components/sections/HeroSection.tsx`, `app/components/sections/ProjectsGrid.tsx`, `app/components/ui/CheckListItem.tsx`.
- Use `kebab-case.tsx` for animation/effect modules in `app/components/effects/`. Examples: `app/components/effects/reveal-on-mount.tsx`, `app/components/effects/splash-intro.tsx`, `app/components/effects/shader-animation.tsx`.
- Use lowercase utility filenames for app entry and generated barrels. Examples: `app/App.tsx`, `app/generated/index.ts`, `src/main.tsx`.
- Use lowercase CSS filenames in `styles/`. Examples: `styles/index.css`, `styles/visual-ir.css`, `styles/responsive.css`.

**Functions:**
- Use `PascalCase` for exported React components. Examples: `App` in `app/App.tsx`, `HeroSection` in `app/components/sections/HeroSection.tsx`, `RevealOnMount` in `app/components/effects/reveal-on-mount.tsx`.
- Use `camelCase` for internal helpers and callbacks. Examples: `updateScale` and `updateHeight` in `app/App.tsx`, `shaderStyle` in `app/components/sections/HeroSection.tsx`, `createFragmentShader` and `resizeRenderer` in `app/components/effects/shader-animation.tsx`.
- Use imperative verb phrases for effect setters and lifecycle helpers. Examples: `setShaderPalette` in `app/components/effects/shader-animation.tsx`, `styleCanvas` in `app/components/effects/shader-animation.tsx`.

**Variables:**
- Use `UPPER_SNAKE_CASE` for tuning constants. Examples: `DESIGN_WIDTH` in `app/App.tsx`, `REVEAL_EASE` in `app/components/effects/reveal-on-mount.tsx`, `SPLASH_DURATION_S` in `app/components/effects/splash-intro.tsx`.
- Use `camelCase` for local runtime state and derived values. Examples: `stageHeight`, `offsetX`, `footerScale` in `app/App.tsx`; `shouldReduceMotion` in `app/components/effects/card-entrance.tsx`.
- Prefix static asset bindings with `img`. Examples: `imgSlideshowImage` in `app/components/sections/HeroSection.tsx`, `imgCursor` in `app/components/sections/AboutSection.tsx`.

**Types:**
- Use `interface` for component props at file scope. Examples: `HeroSectionProps` in `app/components/sections/HeroSection.tsx`, `AboutSectionProps` in `app/components/sections/AboutSection.tsx`.
- Use `type` aliases for effect internals, unions, and data shapes. Examples: `RevealOnMountProps` in `app/components/effects/reveal-on-mount.tsx`, `ShaderPaletteName` in `app/components/effects/shader-animation.tsx`, `AnimationPhase` in `app/components/effects/cta-icon-morph.tsx`.

## Code Style

**Formatting:**
- No formatter config is detected at the repo root. `.prettierrc*`, `eslint.config.*`, `.eslintrc*`, and `biome.json` are not present.
- Existing code uses 2-space indentation, semicolons, and double quotes in TypeScript and TSX. Examples: `src/main.tsx`, `app/App.tsx`, `app/components/effects/reveal-on-mount.tsx`.
- JSX props stay mostly inline until readability breaks, then wrap one prop per line. Examples: the root wrapper in `app/generated/Portfolio2026_1_86.tsx` stays inline; animated wrappers in `app/components/effects/reveal-on-mount.tsx` and `app/components/effects/card-entrance.tsx` wrap.
- Long `className` strings are kept verbatim and not abstracted away when they map closely to Figma output. This is the dominant style in `app/components/sections/*.tsx`.

**Linting:**
- No root lint command or lint configuration is detected in `package.json`.
- TypeScript is lightweight and relies on editor/compiler feedback more than explicit lint rules. Evidence: `package.json` has no `typecheck` or `lint` script, and `tsconfig.json` is not present at the root.

## Import Organization

**Order:**
1. External packages first. Examples: `react`, `framer-motion`, `three` in `app/App.tsx`, `app/components/effects/card-entrance.tsx`, and `app/components/effects/shader-animation.tsx`.
2. Internal relative modules second. Examples: section imports in `app/generated/Portfolio2026_1_86.tsx`, effect imports in `app/components/sections/HeroSection.tsx`.
3. CSS imports last. Examples: `../styles/index.css` in `src/main.tsx`, `../styles/visual-ir.css` in `app/App.tsx`.

**Path Aliases:**
- No path aliases are detected. All app imports use relative paths such as `../components/sections/HeroSection` in `app/generated/Portfolio2026_1_86.tsx`.

## Error Handling

**Patterns:**
- Prefer guard clauses and reduced-motion fallbacks over throwing. Examples: `app/components/effects/reveal-on-mount.tsx` and `app/components/effects/card-entrance.tsx` return plain wrappers when motion is reduced.
- Browser-side side effects clean up after themselves with effect cleanup functions. Examples: resize listeners and `ResizeObserver` cleanup in `app/App.tsx`; timeout and body style restoration in `app/components/effects/splash-intro.tsx`.
- Low-level rendering code uses `try/catch` only around genuinely fragile integration points. Example: WebGL initialization in `app/components/effects/shader-animation.tsx`.
- Visual test scripts fail the process explicitly with `process.exit(1)` rather than throwing custom errors. Examples: `tests/visual-baseline/capture.mjs`, `tests/visual-baseline/compare.mjs`.

## Logging

**Framework:** `console` in scripts only

**Patterns:**
- App runtime components do not log to the console in normal execution. No `console.*` usage is detected under `app/` or `src/`.
- Test and tooling scripts use concise terminal logging for progress and failures. Examples: screenshot progress in `tests/visual-baseline/capture.mjs`, diff results in `tests/visual-baseline/compare.mjs`.

## Comments

**When to Comment:**
- Comments are used sparingly and usually explain visual constraints, motion intent, or breakpoint boundaries rather than obvious code. Examples: scaling and footer notes in `app/App.tsx`, desktop/tablet/mobile section markers in `app/components/sections/AboutSection.tsx`, shader notes in `app/components/sections/HeroSection.tsx`.
- CSS files use banner comments only when a rule protects desktop fidelity. Example: `styles/responsive.css`.

**JSDoc/TSDoc:**
- Short JSDoc-style block comments appear on reusable effect props and exported timing constants. Examples: `app/components/effects/reveal-on-mount.tsx`, `app/components/effects/card-entrance.tsx`, `app/components/effects/splash-intro.tsx`.
- Token documentation lives directly above exported token objects in `app/lib/tokens.ts`.

## Function Design

**Size:** 
- Section components are intentionally large and markup-heavy to preserve Figma fidelity. Keep section markup in-place instead of extracting purely cosmetic subcomponents. Examples: `app/components/sections/HeroSection.tsx`, `app/components/sections/ProjectsGrid.tsx`.
- Effect modules encapsulate behavior into smaller reusable wrappers. Examples: `RevealOnMount`, `CardEntrance`, and `SplashIntro`.

**Parameters:**
- Section components accept a narrow props object with `id?` and `className?` defaults. Examples: `HeroSectionProps`, `AboutSectionProps`, `HighlightsSectionProps`.
- Effect components accept a required `children` prop plus optional timing or styling overrides. Examples: `RevealOnMountProps` in `app/components/effects/reveal-on-mount.tsx`, `CardEntranceProps` in `app/components/effects/card-entrance.tsx`.

**Return Values:**
- Components return plain JSX with early-return fallbacks for reduced motion. Examples: `app/components/effects/reveal-on-mount.tsx`, `app/components/effects/hero-title-reveal.tsx`.
- Utility functions typically return config objects or style objects rather than classes. Examples: `shaderStyle` in `app/components/sections/HeroSection.tsx`, `createUniforms` in `app/components/effects/shader-animation.tsx`.

## Module Design

**Exports:**
- Prefer one default export for each section file. Examples: `app/components/sections/AboutSection.tsx`, `app/components/sections/FooterSection.tsx`.
- Prefer named exports for reusable effects and constants. Examples: `RevealOnMount` in `app/components/effects/reveal-on-mount.tsx`, `CardEntrance` in `app/components/effects/card-entrance.tsx`, `SPLASH_DURATION_S` in `app/components/effects/splash-intro.tsx`.
- Tokens export multiple named constant groups from a single module. Example: `app/lib/tokens.ts`.

**Barrel Files:**
- Barrel usage is minimal. `app/generated/index.ts` re-exports the generated orchestrator default export.
- No shared barrel files are used for `app/components/sections/` or `app/components/effects/`; imports point directly at concrete files.

## JSX and Visual Fidelity Patterns

- Keep Figma traceability attributes in markup. `data-name` and `data-node-id` appear throughout `app/generated/Portfolio2026_1_86.tsx` and `app/components/sections/*.tsx`.
- Preserve breakpoint-specific markup inside the same section component. The recurring pattern is desktop block, tablet block, then mobile block in files such as `app/components/sections/AboutSection.tsx`, `app/components/sections/HeroSection.tsx`, and `app/components/sections/ProjectsGrid.tsx`.
- Build `className` by appending external overrides to a stable base string and trimming. Examples: ``className={`w-full ${className}`.trim()}`` in `app/components/sections/AboutSection.tsx` and `app/components/effects/card-entrance.tsx`.
- Prefer inline `style={{ ... }}` only for dynamic transforms, masks, gradients, and calculated widths that Tailwind classes cannot express cleanly. Examples: `app/App.tsx`, `app/components/sections/AboutSection.tsx`, `app/components/sections/ProjectsGrid.tsx`.

## CSS Conventions

- `styles/index.css` is the CSS entrypoint and composes the stack via `@import`.
- Tailwind v4 is configured in CSS, not JS. `styles/tailwind.css` defines `@import 'tailwindcss' source(none);`, `@source`, and the project breakpoints in `@theme`.
- Hand-authored CSS in `styles/visual-ir.css` provides global stage rules, font utility classes, and generated mask helpers. Keep these utilities stable because TSX markup depends on exact class names like `content-stretch`, `mask-alpha`, and `figma-font-geist`.
- `styles/responsive.css` is reserved for stage-level overrides under `1024px`; desktop should remain unaffected.

## Secondary Codebase

- `figma-cli/` is a separate Node CLI project embedded in the repository, with its own conventions and tests in JavaScript. Its style differs from the React app and should not be treated as the source of truth for app code.
- If editing `figma-cli/`, follow its local package entrypoints in `figma-cli/package.json` and test style in `figma-cli/tests/figma-client.test.js`.

---

*Convention analysis: 2026-03-25*
