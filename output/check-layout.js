const { chromium } = require('playwright');

async function inspect(width, height) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  const data = await page.evaluate(() => {
    const pick = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return { display: style.display, top: rect.top, height: rect.height };
    };
    return {
      pageHeight: document.documentElement.scrollHeight,
      heroDesktop: pick('[data-name="Container"][data-node-id="1:89"]'),
      heroTablet: pick('[data-name="HeroSection-tablet"]'),
      heroMobile: pick('[data-name="HeroSection-mobile"]'),
      footerDesktop: pick('[data-name="Container"][data-node-id="1:1095"]'),
      footerTablet: pick('[data-name="FooterSection-tablet"]'),
      footerMobile: pick('[data-name="FooterSection-mobile"]')
    };
  });
  await browser.close();
  return data;
}

(async () => {
  const mobile = await inspect(320, 900);
  const tablet = await inspect(768, 1200);
  const desktop = await inspect(1440, 1200);
  console.log(JSON.stringify({ mobile, tablet, desktop }, null, 2));
})();
