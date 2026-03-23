/**
 * Visual baseline capture script.
 * Usage: node tests/visual-baseline/capture.mjs [--update]
 *
 * Captures full-page screenshots at desktop (1440px) and mobile (390px).
 * Without --update, saves to screenshots/ as baseline.
 * With --update, saves to screenshots/current/ for comparison.
 */
import { chromium } from "playwright";
import { existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isUpdate = process.argv.includes("--update");
const outDir = resolve(
  __dirname,
  isUpdate ? "screenshots/current" : "screenshots"
);

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "mobile-390", width: 390, height: 844 },
];

const DEV_URL = process.env.DEV_URL || "http://localhost:5173";

async function capture() {
  mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();

  for (const vp of viewports) {
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(DEV_URL, { waitUntil: "networkidle" });

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);
    // Extra settle time for images and layout
    await page.waitForTimeout(500);

    const path = resolve(outDir, `${vp.name}-full.png`);
    await page.screenshot({ path, fullPage: true });
    console.log(`✓ ${vp.name} → ${path}`);
    await page.close();
  }

  await browser.close();
  console.log(`\nBaseline saved to: ${outDir}`);
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
