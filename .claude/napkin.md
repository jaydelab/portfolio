# Napkin Runbook

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-03-25] 1440px desktop is approved and must stay intact**
   Do instead: isolate responsive fixes to tablet/mobile variants and always regression-check `1440px` before calling a UI change done.

2. **[2026-03-28] Validate with real screenshots, not DevTools guesses**
   Do instead: use Playwright CLI captures at `320`, `390`, and `1440`; add `768` or `820` whenever the work touches tablet behavior.

3. **[2026-03-28] Section screenshots can capture title reveals mid-animation**
   Do instead: after `scrollIntoViewIfNeeded()`, wait about `2500ms` before capturing sections that use `HeroTitleTextReveal`.

4. **[2026-03-23] Make surgical edits and re-check nearby layout**
   Do instead: read the target section first, patch only the necessary block, then verify the changed section plus the surrounding composition.

## Shell & Command Reliability
1. **[2026-03-23] Playwright MCP is forbidden in this repo**
   Do instead: use terminal Playwright only, via `node` scripts with `playwright` or `npx playwright screenshot`.

2. **[2026-03-28] Start codebase lookup from stable roots**
   Do instead: search with `rg` in `app/components`, `app/generated`, and confirm final references with `nl -ba` before reporting file lines.

## Domain Behavior Guardrails
1. **[2026-03-23] Figma and the approved runtime are both guardrails**
   Do instead: treat the current visual runtime as the live baseline, and check Figma before making structural UI decisions.

2. **[2026-03-25] This repo uses adaptive variants, not one responsive layout stretched everywhere**
   Do instead: treat mobile and tablet as intentionally different compositions when the section demands it; edit only the active breakpoint block inside the same section component.

3. **[2026-03-28] Active breakpoints are runtime-controlled**
   Do instead: treat `<768` as mobile, `768-1023` as tablet, and `>=1024` as desktop; validate and debug using those real cutoffs.

4. **[2026-03-28] Hidden breakpoint variants may not be mounted**
   Do instead: remember many sections now depend on `useActiveBreakpoint`; in tests and selectors, target only the variant for the current viewport.

5. **[2026-03-25] Tablet sections center best with a content rail**
   Do instead: prefer `w-full max-w-[684px] mx-auto` style wrappers over calc-heavy padding math for tablet centering.

6. **[2026-03-25] Below 1024px, fluidity comes from CSS, not `scale()`**
   Do instead: use `clamp`, percentages, `aspect-ratio`, and centered rails for tablet/mobile behavior.

7. **[2026-03-25] Named Tailwind breakpoint patterns are safer here**
   Do instead: use the repo’s established `max-md`, `max-lg`, and `min-[768px]:... min-[1024px]:...` patterns instead of arbitrary display overrides.

## User Directives
1. **[2026-03-28] Keep communication short, structured, and in PT-BR**
   Do instead: answer first, use compact headings/bullets, and skip filler or long theory unless explicitly asked.

2. **[2026-03-28] Do not redesign unless explicitly requested**
   Do instead: preserve the current visual baseline and make behavioral/layout fixes surgically.

3. **[2026-03-28] Performance work cannot cost layout fidelity**
   Do instead: optimize render cost or interaction logic, then validate screenshots across breakpoints before saying it is ready.
