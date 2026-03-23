/**
 * Simple pixel comparison between baseline and current screenshots.
 * Usage: node tests/visual-baseline/compare.mjs
 */
import { readFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const baselineDir = resolve(__dirname, "screenshots");
const currentDir = resolve(__dirname, "screenshots/current");

const files = readdirSync(currentDir).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const baseline = readFileSync(resolve(baselineDir, file));
  const current = readFileSync(resolve(currentDir, file));

  if (baseline.equals(current)) {
    console.log(`✅ ${file}: IDENTICAL (0 bytes different)`);
  } else {
    const sizeDiff = Math.abs(baseline.length - current.length);
    console.log(
      `⚠️  ${file}: DIFFERENT (baseline: ${baseline.length}B, current: ${current.length}B, size diff: ${sizeDiff}B)`
    );
  }
}
