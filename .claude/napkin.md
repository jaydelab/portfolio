# Napkin Runbook

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-03-23] Figma is the absolute source of truth**
   Do instead: Always pull specs/images/effects from Figma before making changes. Never guess.

2. **[2026-03-23] Don't break existing layout when fixing issues**
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

2. **[2026-03-23] Use Playwright CLI for screenshots, not MCP Playwright**
   Do instead: `npx playwright screenshot` from terminal, not browser MCP tools.
