/**
 * Pixel-perfect comparison between baseline and current screenshots.
 * Usage: node tests/visual-baseline/compare.mjs
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const __dirname = dirname(fileURLToPath(import.meta.url));
const baselineDir = resolve(__dirname, "screenshots");
const currentDir = resolve(__dirname, "screenshots/current");
const diffDir = resolve(__dirname, "screenshots/diff");

if (!existsSync(diffDir)) {
  mkdirSync(diffDir, { recursive: true });
}

const files = readdirSync(currentDir).filter((f) => f.endsWith(".png"));

let hasRegression = false;

for (const file of files) {
  const baselinePath = resolve(baselineDir, file);
  const currentPath = resolve(currentDir, file);

  if (!existsSync(baselinePath)) {
    console.log(`⚠️  ${file}: NEW FILE (no baseline found)`);
    continue;
  }

  const img1 = PNG.sync.read(readFileSync(baselinePath));
  const img2 = PNG.sync.read(readFileSync(currentPath));

  const { width, height } = img1;
  const diff = new PNG({ width, height });

  // Compare pixels
  const numDiffPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  );

  if (numDiffPixels === 0) {
    console.log(`✅ ${file}: IDENTICAL (0 pixels different)`);
  } else {
    hasRegression = true;
    const diffPath = resolve(diffDir, file);
    writeFileSync(diffPath, PNG.sync.write(diff));
    console.error(
      `❌ ${file}: DIFFERENT (${numDiffPixels} pixels mismatch). See diff at ${diffPath}`
    );
  }
}

if (hasRegression) {
  process.exit(1);
}
