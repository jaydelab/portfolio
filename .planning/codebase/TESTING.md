# Testing Patterns

**Analysis Date:** 2026-03-25

## Test Framework

**Runner:**
- Main app: no unit-test runner config is detected at the repo root. `vitest.config.*`, `jest.config.*`, and `playwright.config.*` are not present.
- Visual regression workflow: ad hoc Node scripts using Playwright and Pixelmatch in `tests/visual-baseline/capture.mjs` and `tests/visual-baseline/compare.mjs`.
- Auxiliary subproject: `figma-cli/` uses the built-in Node test runner via `node --test` in `figma-cli/package.json`.

**Assertion Library:**
- Main app visual checks assert by process exit status and pixel counts, not an assertion library. `tests/visual-baseline/compare.mjs` exits nonzero when diffs exist.
- Auxiliary `figma-cli/` tests use `node:assert` in `figma-cli/tests/figma-client.test.js`.

**Run Commands:**
```bash
pnpm dev                                               # Start the app on Vite for manual and visual validation
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update
node tests/visual-baseline/compare.mjs
cd figma-cli && npm test                               # Run tests for the embedded CLI only
```

## Test File Organization

**Location:**
- App visual validation lives in `tests/visual-baseline/`.
- Baseline outputs live beside the scripts in `tests/visual-baseline/screenshots/`, with current captures under `tests/visual-baseline/screenshots/current/` and diffs under `tests/visual-baseline/screenshots/diff/`.
- Auxiliary CLI tests are colocated under `figma-cli/tests/`.

**Naming:**
- Visual helper scripts use task-style names: `capture.mjs` and `compare.mjs`.
- CLI tests use the `*.test.js` naming pattern. Example: `figma-cli/tests/figma-client.test.js`.

**Structure:**
```text
tests/
└── visual-baseline/
    ├── capture.mjs
    ├── compare.mjs
    └── screenshots/
        ├── *.png
        ├── current/*.png
        └── diff/*.png

figma-cli/
└── tests/
    └── figma-client.test.js
```

## Test Structure

**Suite Organization:**
```javascript
describe('URL pattern matching', () => {
  it('should match design URLs', () => {
    assert.strictEqual(isDesignPage('https://www.figma.com/design/abc123/My-File'), true);
  });
});
```

**Patterns:**
- For the main app, validation is workflow-driven rather than spec-driven:
  1. run the app with `pnpm dev`
  2. capture baseline or current screenshots with `tests/visual-baseline/capture.mjs`
  3. compare screenshots with `tests/visual-baseline/compare.mjs`
- `tests/visual-baseline/capture.mjs` loops through a fixed viewport matrix and captures full-page screenshots after waiting for `document.fonts.ready` and an extra 500ms settle time.
- `tests/visual-baseline/compare.mjs` compares matching files from baseline and current directories and writes diff PNGs only when mismatches exist.
- The only explicit test suite structure in the repo is the embedded CLI project under `figma-cli/tests/figma-client.test.js`.

## Mocking

**Framework:** Not used in the main app

**Patterns:**
```javascript
const DEV_URL = process.env.DEV_URL || "http://localhost:5173";
await page.goto(DEV_URL, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);
```

**What to Mock:**
- Nothing is mocked in the current app validation flow. The Playwright capture script exercises the real built app in a browser against a live local server.
- In `figma-cli/tests/figma-client.test.js`, pure helpers are tested inline without network setup; that project also avoids mocks in the current suite.

**What NOT to Mock:**
- Do not mock layout, fonts, or image loading for portfolio visual checks. The current scripts intentionally wait for real rendering before capturing screenshots in `tests/visual-baseline/capture.mjs`.
- Do not replace pixel diff with DOM-only assertions when checking fidelity-sensitive sections in `app/components/sections/*.tsx`.

## Fixtures and Factories

**Test Data:**
```javascript
const viewports = [
  { name: "mobile-320", width: 320, height: 844 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "desktop-1440", width: 1440, height: 900 },
];
```

**Location:**
- The viewport matrix is hardcoded inside `tests/visual-baseline/capture.mjs`.
- Screenshot fixtures are file-based PNG baselines under `tests/visual-baseline/screenshots/`.
- The CLI test project uses inline data samples inside `figma-cli/tests/figma-client.test.js`; no shared factories or fixture builders are present.

## Coverage

**Requirements:** None enforced

**View Coverage:**
```bash
Not applicable at the repo root
```

- No coverage tooling or thresholds are configured in `package.json`.
- Current confidence comes from pixel-perfect image comparison plus manual viewport inspection, not statement or branch coverage.

## Test Types

**Unit Tests:**
- Not used for the main React portfolio app.
- Used only in the embedded `figma-cli/` package, where `figma-cli/tests/figma-client.test.js` verifies URL parsing and object initialization with `node:test`.

**Integration Tests:**
- The main app effectively uses browser-level rendering checks by loading the local Vite app and capturing complete pages through Playwright in `tests/visual-baseline/capture.mjs`.
- These checks validate CSS, images, typography loading, responsive layout, and rendering together.

**E2E Tests:**
- No click-flow or user-journey E2E suite is configured.
- Playwright is used as a screenshot automation tool, not as a structured E2E runner with `test()` files.

## Common Patterns

**Async Testing:**
```javascript
for (const vp of viewports) {
  const page = await context.newPage();
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(DEV_URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  await page.screenshot({ path, fullPage: true });
  await page.close();
}
```

**Error Testing:**
```javascript
if (numDiffPixels === 0) {
  console.log(`✅ ${file}: IDENTICAL (0 pixels different)`);
} else {
  hasRegression = true;
  writeFileSync(diffPath, PNG.sync.write(diff));
  process.exit(1);
}
```

## Viewport Matrix

- The maintained capture matrix currently includes `320`, `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, and `1920` widths in `tests/visual-baseline/capture.mjs`.
- `AGENTS.md` marks `320px`, `390px`, and `1440px` as mandatory acceptance viewports for changes to the portfolio app.
- Because desktop fidelity is treated as baseline-critical, `desktop-1440` is the anchor screenshot for regression checks.

## Expected Workflow For New Changes

- For changes under `app/`, `src/`, or `styles/`, validate visually against the existing baseline before considering the work done.
- Capture a new baseline only when the intended visual truth changes and the new output has already been reviewed. The script behavior is:
  - without `--update`, write baseline images
  - with `--update`, write comparison images under `current/`
- Run `node tests/visual-baseline/compare.mjs` after an update capture; any nonzero diff is treated as a regression until explicitly accepted.
- If adding test automation for the React app, place it under `tests/` rather than inside `app/components/`, because current app testing is repository-level and browser-driven.

## Gaps In Current Testing Strategy

- No root script in `package.json` standardizes validation. All current testing commands are manual.
- No component-level assertions protect animation wrappers such as `app/components/effects/reveal-on-mount.tsx`, `app/components/effects/card-entrance.tsx`, or `app/components/effects/splash-intro.tsx`.
- No CI hook or pre-commit validation is detected for the screenshot workflow.
- Baseline artifacts are image files, so failures are easy to inspect visually but harder to scope to a precise DOM node without manual investigation.

## Prescriptive Guidance

- Use `tests/visual-baseline/capture.mjs` and `tests/visual-baseline/compare.mjs` as the primary acceptance path for UI work in `app/components/sections/*.tsx`, `app/App.tsx`, and `styles/*.css`.
- Keep screenshot naming tied to viewport names; the compare script assumes the same filename exists in both baseline and current directories.
- If you introduce a formal runner later, preserve the current viewport coverage and baseline image workflow rather than replacing it with DOM snapshots.
- Treat `figma-cli/tests/figma-client.test.js` as a separate standard for the embedded CLI, not as the model for the React portfolio app.

---

*Testing analysis: 2026-03-25*
