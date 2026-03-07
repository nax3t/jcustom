import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const ORIGINAL_URL = 'http://localhost:8000';
const ASTRO_URL = 'http://localhost:4321';
const OUT_DIR = join(import.meta.dirname, 'screenshots');

const SECTIONS = [
  { name: 'hero', selector: '#home' },
  { name: 'profile', selector: '#profile' },
  { name: 'services', selector: '#services' },
  { name: 'showcase', selector: '#showcase' },
  { name: 'process', selector: '#process' },
  { name: 'testimonials', selector: '#testimonials, #testimonial' },
  { name: 'contact', selector: '#contact' },
  { name: 'footer', selector: 'footer' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

async function scrollThroughPage(page) {
  // Scroll slowly through the entire page to trigger all intersection observers
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = await page.evaluate(() => window.innerHeight);
  let scrolled = 0;

  while (scrolled < totalHeight) {
    scrolled += viewportHeight * 0.6;
    await page.evaluate((y) => window.scrollTo(0, y), scrolled);
    await page.waitForTimeout(300);
  }

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}

async function captureSection(page, site, section, viewport) {
  const dir = join(OUT_DIR, viewport.name, section.name);
  mkdirSync(dir, { recursive: true });

  const el = await page.$(section.selector);
  if (!el) {
    console.log(`  [SKIP] ${site} — ${section.name} not found`);
    return;
  }

  // Scroll to the element to ensure it's in view
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);

  await el.screenshot({
    path: join(dir, `${site}.png`),
    animations: 'disabled',
  });
  console.log(`  [OK] ${site} — ${section.name} @ ${viewport.name}`);
}

async function run() {
  mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();

  for (const vp of VIEWPORTS) {
    console.log(`\n=== ${vp.name} (${vp.width}x${vp.height}) ===`);

    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });

    // Original site
    const origPage = await context.newPage();
    await origPage.goto(ORIGINAL_URL, { waitUntil: 'networkidle' });
    await origPage.waitForTimeout(1000);
    await scrollThroughPage(origPage);

    // Astro site
    const astroPage = await context.newPage();
    await astroPage.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    await astroPage.waitForTimeout(1000);
    await scrollThroughPage(astroPage);

    for (const section of SECTIONS) {
      await captureSection(origPage, 'original', section, vp);
      await captureSection(astroPage, 'astro', section, vp);
    }

    // Full-page screenshots
    const fpDir = join(OUT_DIR, vp.name, 'full-page');
    mkdirSync(fpDir, { recursive: true });
    await origPage.evaluate(() => window.scrollTo(0, 0));
    await astroPage.evaluate(() => window.scrollTo(0, 0));
    await origPage.waitForTimeout(300);
    await astroPage.waitForTimeout(300);
    await origPage.screenshot({ path: join(fpDir, 'original.png'), fullPage: true, animations: 'disabled' });
    await astroPage.screenshot({ path: join(fpDir, 'astro.png'), fullPage: true, animations: 'disabled' });
    console.log(`  [OK] Full page screenshots @ ${vp.name}`);

    await context.close();
  }

  await browser.close();
  console.log(`\nScreenshots saved to: ${OUT_DIR}`);
}

run().catch(console.error);
