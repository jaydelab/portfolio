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

3. **[2026-03-25] Breakpoint swap alone is not enough in this repo**
   Do instead: Validate the continuous stretch from `320` to `1023` and map image distortion, overflow, mask bugs, collisions, and padding drift before changing code.

4. **[2026-03-25] Tailwind `max-[768px]` does not include 768 in this repo**
   Do instead: For tablet cuts that must include `768px`, use `max-[768.99px]` and pair it with `min-[769px]` for desktop-only behavior.

5. **[2026-03-23] Don't break existing layout when fixing issues**
   Do instead: Make surgical edits, verify each change doesn't shift surrounding elements.

## Project Architecture
1. **[2026-03-23] Figma-extracted React project (visual-ir)**
   Do instead: Main component at `app/generated/Portfolio2026_1_86.tsx` (1889 lines). Styles in `styles/visual-ir.css`. Assets in `public/visual-ir-assets/`.

2. **[2026-03-23] Fonts: Halant PTBR → use Google Fonts Halant; 510 → identify from Figma**
   Do instead: Only Halant PTBR used in hero "funcionários" and "mas". Rest of serif titles are Georgia/Newsreader.

3. **[2026-03-23] Page is 1440px fixed width, responsive comes later**
   Do instead: Focus on pixel-perfect 1440px first. Don't add responsive behavior yet.

## User Directives
1. **[2026-03-23] User wants speed, not explanations**
   Do instead: Go straight to executing. Minimize commentary. Deliver results fast.

2. **[2026-03-25] User rejects desktop edits while working on responsive fixes**
   Do instead: Keep desktop/web variants untouched and isolate any mobile/tablet correction inside the adaptive blocks only.

3. **[2026-03-23] Use Playwright CLI for screenshots, not MCP Playwright**
   Do instead: `npx playwright screenshot` from terminal, not browser MCP tools.
