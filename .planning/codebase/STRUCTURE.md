# Codebase Structure

**Analysis Date:** 2026-03-25

## Directory Layout

```text
portfolio2026/
├── app/                    # React application code outside `src/`
│   ├── components/         # Section modules, motion helpers, and tiny UI fragments
│   ├── generated/          # Figma-derived page orchestrator entry
│   └── lib/                # Design token reference files
├── public/                 # Static assets served by Vite
│   └── visual-ir-assets/   # Images and SVGs referenced by components
├── src/                    # Browser bootstrap entry
├── styles/                 # Global CSS, Tailwind wiring, font helpers, and stage CSS
├── tests/                  # Visual regression tooling
├── output/                 # Local inspection/debug scripts and generated QA output
├── docs/                   # Product and responsive planning docs
├── .planning/codebase/     # Generated codebase mapping docs
├── index.html              # HTML shell
├── package.json            # Scripts and dependencies
└── vite.config.ts          # Vite + React + Tailwind plugin config
```

## Directory Purposes

**`app/`:**
- Purpose: Hold the real application tree and keep page composition separate from the `src/` bootstrap.
- Contains: `App.tsx`, generated page entry, section components, effect helpers, and token references.
- Key files: `app/App.tsx`, `app/generated/Portfolio2026_1_86.tsx`, `app/components/sections/HeroSection.tsx`, `app/lib/tokens.ts`

**`app/components/sections/`:**
- Purpose: One file per major page section.
- Contains: Full section markup, section-local assets, and desktop/tablet/mobile variants in the same component file.
- Key files: `app/components/sections/BadgeHeader.tsx`, `app/components/sections/HeroSection.tsx`, `app/components/sections/AboutSection.tsx`, `app/components/sections/FooterSection.tsx`

**`app/components/effects/`:**
- Purpose: Isolate animation and rendering helpers so section files can stay focused on page composition.
- Contains: Framer Motion wrappers, CTA icon morph logic, splash screen logic, and a Three.js shader.
- Key files: `app/components/effects/splash-intro.tsx`, `app/components/effects/hero-title-reveal.tsx`, `app/components/effects/shader-animation.tsx`

**`app/components/ui/`:**
- Purpose: Hold very small repeated fragments that are safe to reuse without changing the Figma-derived structure.
- Contains: Tiny presentational helpers only.
- Key files: `app/components/ui/CheckListItem.tsx`

**`app/generated/`:**
- Purpose: Keep the generated page composition boundary explicit.
- Contains: The root page orchestrator and a small re-export.
- Key files: `app/generated/Portfolio2026_1_86.tsx`, `app/generated/index.ts`

**`app/lib/`:**
- Purpose: Store reference-only values that document the current design system.
- Contains: Token objects for colors, spacing, radius, shadow, and typography.
- Key files: `app/lib/tokens.ts`

**`src/`:**
- Purpose: Keep browser entry minimal.
- Contains: React root bootstrapping only.
- Key files: `src/main.tsx`

**`styles/`:**
- Purpose: Centralize CSS that applies across the whole page.
- Contains: CSS imports, Tailwind entry CSS, font imports, theme helpers, stage layout rules, and responsive wrapper overrides.
- Key files: `styles/index.css`, `styles/visual-ir.css`, `styles/responsive.css`, `styles/fonts.css`

**`public/visual-ir-assets/`:**
- Purpose: Serve all static raster/vector art referenced by the React tree.
- Contains: WebP files, SVGs, and nested folders such as dock and CTA art assets.
- Key files: asset paths are consumed directly from section files like `app/components/sections/HeroSection.tsx` and `app/components/sections/AboutSection.tsx`

**`tests/visual-baseline/`:**
- Purpose: Hold the visual-regression workflow.
- Contains: Screenshot capture and pixel-diff scripts.
- Key files: `tests/visual-baseline/capture.mjs`, `tests/visual-baseline/compare.mjs`

**`output/`:**
- Purpose: Store local QA helpers and generated Playwright output.
- Contains: Layout inspection scripts and Playwright artifact folders.
- Key files: `output/check-layout.js`

**`docs/superpowers/`:**
- Purpose: Store internal design and implementation notes that describe responsive strategy.
- Contains: Human-readable spec and plan markdown files.
- Key files: `docs/superpowers/specs/2026-03-23-responsive-design.md`, `docs/superpowers/plans/2026-03-23-responsive-implementation.md`

**Ancillary tooling directories:**
- Purpose: Support local AI/automation workflows outside the shipped portfolio app.
- Contains: `.agent/`, `.claude/`, `.playwright-cli/`, `.playwright-mcp/`, `.superpowers/`, `figma-cli/`
- Key files: Treat these as tooling/workflow support, not as application runtime locations.

## Key File Locations

**Entry Points:**
- `index.html`: Browser document shell and root mount node.
- `src/main.tsx`: React bootstrap and global CSS import boundary.
- `app/App.tsx`: Runtime wrapper that applies stage scaling and mounts the splash intro.
- `app/generated/Portfolio2026_1_86.tsx`: Top-level page composition entry.

**Configuration:**
- `package.json`: Defines `dev` and `build` scripts and all direct dependencies.
- `vite.config.ts`: Registers React and Tailwind Vite plugins.

**Core Logic:**
- `app/components/sections/*.tsx`: Main section implementations.
- `app/components/effects/*.tsx`: Motion and shader behavior.
- `styles/visual-ir.css`: Stage primitives and Figma font utility classes.
- `styles/responsive.css`: Wrapper override below 1024px.

**Testing:**
- `tests/visual-baseline/capture.mjs`: Captures screenshots across canonical viewports.
- `tests/visual-baseline/compare.mjs`: Pixel-diffs current screenshots against baseline.
- `output/check-layout.js`: Inspects key section visibility/layout by viewport.

## Naming Conventions

**Files:**
- React component files use PascalCase filenames in `app/components/sections/` and `app/components/ui/`: `HeroSection.tsx`, `CheckListItem.tsx`.
- Effect helper files use kebab-case filenames in `app/components/effects/`: `splash-intro.tsx`, `hero-title-reveal.tsx`, `shader-animation.tsx`.
- Generated entry files preserve the Figma/export naming scheme: `app/generated/Portfolio2026_1_86.tsx`.
- CSS files use lowercase kebab-case names: `styles/visual-ir.css`, `styles/responsive.css`.
- Utility/test scripts use lowercase filenames with `.mjs` or `.js`: `tests/visual-baseline/capture.mjs`, `output/check-layout.js`.

**Directories:**
- Application directories are short, role-based nouns: `app/components`, `app/generated`, `app/lib`, `styles`, `tests`.
- Section grouping uses domain nouns rather than feature folders because the app is a single page: `app/components/sections/`.

## Where to Add New Code

**New Feature:**
- Primary code: If the work is a new visible page slice, add a new section file in `app/components/sections/` and wire it into `app/generated/Portfolio2026_1_86.tsx`.
- Tests: Add or extend visual capture/diff coverage in `tests/visual-baseline/` and, if needed, add a targeted debug script under `output/`.

**New Component/Module:**
- Implementation: Put reusable animation/render helpers in `app/components/effects/` only when they encapsulate behavior rather than layout.
- Implementation: Put tiny repeated presentational fragments in `app/components/ui/` only when the extracted markup stays Figma-faithful.
- Implementation: Keep desktop/tablet/mobile variants inside the same section file instead of creating `Mobile*` or `Desktop*` sibling files.

**Utilities:**
- Shared helpers: Use `app/lib/` for reference-style constants such as design tokens. Do not create a generic utility dump folder unless the helper is genuinely cross-section and non-visual.

**Global Styling:**
- Add application-wide CSS imports to `styles/index.css`.
- Add stage/layout primitives to `styles/visual-ir.css`.
- Add wrapper-only responsive overrides to `styles/responsive.css`.

**Static Assets:**
- Put new shipped assets under `public/visual-ir-assets/` and reference them with absolute paths like `"/visual-ir-assets/..."` from section components.

## Special Directories

**`public/visual-ir-assets/`:**
- Purpose: Source of truth for shipped static media.
- Generated: No.
- Committed: Yes.

**`app/generated/`:**
- Purpose: Preserve the generated-orchestrator boundary from the Figma extraction flow.
- Generated: Yes, at least in origin and naming.
- Committed: Yes.

**`tests/visual-baseline/`:**
- Purpose: Visual regression tooling for the mandatory screenshot workflow.
- Generated: No.
- Committed: Yes.

**`output/playwright/`:**
- Purpose: Local artifact storage for Playwright audit output.
- Generated: Yes.
- Committed: Mixed; treat as runtime artifacts unless the repo explicitly tracks a file there.

**`.planning/codebase/`:**
- Purpose: Machine- and human-readable repository mapping used by planning commands.
- Generated: Yes.
- Committed: Yes, when refreshing codebase docs.

**`docs/superpowers/`:**
- Purpose: Working notes about responsive design decisions and implementation plans.
- Generated: No.
- Committed: Yes.

**Tooling-only directories such as `.agent/`, `.claude/`, `.playwright-cli/`, `.playwright-mcp/`, `.superpowers/`, `figma-cli/`:**
- Purpose: Local automation, AI workflow, and extraction tooling.
- Generated: Mixed.
- Committed: Mixed; keep application code out of these paths unless the task is explicitly about tooling.

---

*Structure analysis: 2026-03-25*
