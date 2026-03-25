# Napkin Runbook

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-03-23] Figma is the absolute source of truth**
   Do instead: Always pull specs/images/effects from Figma before making changes. Never guess.

2. **[2026-03-25] 1440px desktop is approved and must be treated as immutable**
   Do instead: Fix mobile/tablet with isolated variants and regression-check `1440px` after every change. Never let responsive work influence desktop layout.

3. **[2026-03-25] Tailwind v4: `max-[1023px]:hidden` does NOT reliably override base display utilities**
   Do instead: Use named breakpoint variants (`max-lg:hidden`) instead of arbitrary value variants (`max-[1023px]:hidden`). This is a CSS source-order issue in Tailwind v4 where arbitrary variants don't always win specificity battles.

4. **[2026-03-25] CSS `100%` in padding resolves to containing block width, not element width**
   Do instead: Don't use `px-[max(42px,calc((100%-684px)/2))]` for centering. Use `max-w-[684px] mx-auto` instead — it's simpler and mathematically correct.

5. **[2026-03-25] Breakpoint swap alone is not enough in this repo**
   Do instead: Validate the continuous stretch from `320` to `1023` and map image distortion, overflow, mask bugs, collisions, and padding drift before changing code.

6. **[2026-03-23] Don't break existing layout when fixing issues**
   Do instead: Make surgical edits, verify each change doesn't shift surrounding elements.

## Responsive Patterns
1. **[2026-03-25] Tablet content-rail pattern: `max-w-[684px] mx-auto`**
   Do instead: For tablet sections (768-1023), don't use breakout + padding tricks. Use `w-full max-w-[684px] mx-auto` to center content and let extra width go to gutters.

2. **[2026-03-25] Mobile proportional images: use `aspect-ratio` not fixed heights**
   Do instead: Replace fixed `h-[Xpx]` with `aspect-[W/H]` on mobile images so they scale proportionally as viewport widens.

3. **[2026-03-25] Mobile absolute-positioned overlays: use percentage positions**
   Do instead: Convert fixed px positions (`left-[58.7px] top-[78px]`) to percentages (`left-[21.6%] top-[39.4%]`) so overlays track their parent during fluid scaling.

4. **[2026-03-25] No `scale()` below 1024px**
   Do instead: Desktop uses `transform: scale()` between 1024-1440px only. Below 1024px, all fluidity comes from native CSS (clamp, %, aspect-ratio).

## Project Architecture
1. **[2026-03-23] Figma-extracted React project (visual-ir)**
   Do instead: Main component at `app/generated/Portfolio2026_1_86.tsx` (1889 lines). Styles in `styles/visual-ir.css`. Assets in `public/visual-ir-assets/`.

2. **[2026-03-25] Adaptive show/hide pattern: desktop/tablet/mobile variants in same components**
   Do instead: Each section has desktop (`max-lg:hidden`), tablet (`hidden min-[768px]:flex min-[1024px]:hidden`), and mobile (`hidden max-md:flex`) blocks. Edit only the target variant.

3. **[2026-03-23] Fonts: Halant PTBR → use Google Fonts Halant; 510 → identify from Figma**
   Do instead: Only Halant PTBR used in hero "funcionários" and "mas". Rest of serif titles are Georgia/Newsreader.

## User Directives
1. **[2026-03-23] User wants speed, not explanations**
   Do instead: Go straight to executing. Minimize commentary. Deliver results fast.

2. **[2026-03-25] User rejects desktop edits while working on responsive fixes**
   Do instead: Keep desktop/web variants untouched and isolate any mobile/tablet correction inside the adaptive blocks only.

3. **[2026-03-23] Use Playwright CLI for screenshots, not MCP Playwright**
   Do instead: `npx playwright screenshot` from terminal, not browser MCP tools.
