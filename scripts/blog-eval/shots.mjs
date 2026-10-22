// Judge screens of one blog page, as a visitor sees it after scrolling: every image loaded, the cookie choice already
// made (a returning visitor; the banner is the site's, not the blog's). Desktop 1440 px cut into 1440×1600 screens at
// actual size; phone 390 px cut into 390×1600 screens (evaluate.sh puts three side by side). Whole page, up to 40,000 px.
// usage: node shots.mjs <url> <outdir>
// Playwright from PLAYWRIGHT_MODULE (evaluate.sh points it at Tesseract's, whose browser build is installed).
const pw = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const { chromium } = pw.default ?? pw;
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const [url, out] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const VIEWS = [{ name: 'desktop', w: 1440, h: 900, mobile: false }, { name: 'phone', w: 390, h: 844, mobile: true }];
for (const v of VIEWS) {
  const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h }, deviceScaleFactor: 1, isMobile: v.mobile, hasTouch: v.mobile });
  await ctx.addInitScript(() => localStorage.setItem('fg-consent', JSON.stringify({ v: 1, ads: false, at: new Date().toISOString() })));
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: 'load', timeout: 90000 }); await p.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  // every shown image loads before the picture is taken (a lazy one a quick scroll skipped would never start)
  await p.evaluate(() => document.querySelectorAll('img[loading="lazy"]').forEach((i) => { if (i.offsetParent !== null) i.loading = 'eager'; }));
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); });
  await p.waitForLoadState('networkidle').catch(() => {});
  await p.evaluate(async () => { await document.fonts.ready; const all = Promise.all([...document.images].filter((i) => i.offsetParent !== null).map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; })))); await Promise.race([all, new Promise((r) => setTimeout(r, 15000))]); });
  // decoded too: a full-page capture can paint an off-screen image that is loaded but not yet decoded as blank
  await p.evaluate(async () => { const shown = [...document.images].filter((i) => i.offsetParent !== null); shown.forEach((i) => { i.decoding = 'sync'; }); await Promise.race([Promise.all(shown.map((i) => i.decode().catch(() => {}))), new Promise((r) => setTimeout(r, 15000))]); });
  await p.waitForTimeout(800);
  const full = `${out}/_full-${v.name}.png`;
  await p.screenshot({ path: full, fullPage: true });
  await ctx.close();
  execFileSync('python3', ['-c', `
from PIL import Image
im = Image.open('${full}').convert('RGB'); H = min(im.height, 40000); n = 0
for y in range(0, H, 1600):
    n += 1; im.crop((0, y, im.width, min(y + 1600, H))).save('${out}/judge-${v.name}-%d.jpg' % n, quality=85)
print(n)`]);
  fs.unlinkSync(full);
}
await browser.close();
