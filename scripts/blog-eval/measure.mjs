// Measured metrics design_check does not cover. usage: node measure.mjs <base-url> <page-path> <entry-selector> <out.json>
// page weight · reading ease · structure · phone navigation · first screen · line length. Writes raw numbers; score.py
// maps them to 1–10 (the rubric's `how`). <entry-selector> is what a reader must see in the first screen besides the
// headline: the way into the articles on a list, the byline on a post.
// Playwright from PLAYWRIGHT_MODULE (evaluate.sh points it at Tesseract's, whose browser build is installed).
const pw = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const { chromium } = pw.default ?? pw;
import fs from 'node:fs';

const [base, pagePath, entry, out] = process.argv.slice(2);
const url = base + pagePath;
const browser = await chromium.launch();
const result = { page: pagePath };
const consent = () => localStorage.setItem('fg-consent', JSON.stringify({ v: 1, ads: false, at: new Date().toISOString() }));

// --- page weight: what a visitor's browser downloads after scrolling to the end (lazy images load as they come into
// view, as they would for a reader; nothing is forced) ---
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript(consent);
  const p = await ctx.newPage();
  let bytes = 0; const big = [];
  p.on('response', async (r) => { try { const b = await r.body(); bytes += b.length; if (b.length > 250000) big.push(`${r.url().split('/').pop().slice(0, 40)} ${(b.length / 1024) | 0} KB`); } catch {} });
  await p.goto(url, { waitUntil: 'load', timeout: 90000 }); await p.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } });
  await p.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {}); await p.waitForTimeout(1500); await p.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  result.weight = { mb: +(bytes / 1048576).toFixed(2), big };

  // --- reading ease, structure and line length on the same page ---
  const r = await p.evaluate(() => {
    const main = document.querySelector('main') || document.body;
    const shown = (e) => e.offsetParent !== null && getComputedStyle(e).visibility !== 'hidden';
    const text = [...main.querySelectorAll('p, li, h1, h2, h3, figcaption, summary')].filter(shown).map((e) => e.innerText.trim()).filter((t) => t.length > 0).join('\n');
    const sentences = text.split(/[.!?]+\s|\n/).map((s) => s.trim()).filter((s) => s.split(/\s+/).length >= 3);
    const words = text.split(/\s+/).filter((w) => /[a-zA-Z]/.test(w));
    const syl = (w) => { w = w.toLowerCase().replace(/[^a-z]/g, ''); if (w.length <= 3) return 1; w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, ''); const m = w.match(/[aeiouy]{1,2}/g); return m ? m.length : 1; };
    const syllables = words.reduce((a, w) => a + syl(w), 0);
    const flesch = 206.835 - 1.015 * (words.length / Math.max(1, sentences.length)) - 84.6 * (syllables / Math.max(1, words.length));
    const errs = [];
    const h1 = document.querySelectorAll('h1').length; if (h1 !== 1) errs.push(`${h1} h1 elements`);
    let last = 0; for (const h of document.querySelectorAll('h1,h2,h3,h4,h5,h6')) { if (!shown(h)) continue; const lvl = +h.tagName[1]; if (last && lvl > last + 1) errs.push(`heading jumps h${last}→h${lvl}: "${h.innerText.slice(0, 40)}"`); last = lvl; }
    for (const img of document.querySelectorAll('img')) if (!img.hasAttribute('alt')) errs.push(`img without alt: ${img.src.split('/').pop()}`);
    // a link or button that is drawn and has no accessible name (one inside a closed menu is not drawn: not counted)
    for (const a of document.querySelectorAll('a, button')) { const name = [a.textContent, a.getAttribute('aria-label'), a.querySelector('img[alt]')?.alt, a.title].map((v) => (v || '').trim()).find(Boolean) || ''; if (!name && a.getClientRects().length > 0) errs.push(`${a.tagName.toLowerCase()} without a name: ${a.outerHTML.slice(0, 60)}`); }
    if (!document.querySelector('nav')) errs.push('no nav landmark');
    if (!document.querySelector('main')) errs.push('no main landmark');
    if (!document.querySelector('footer')) errs.push('no footer');
    if (!document.documentElement.lang) errs.push('no lang attribute');
    // characters per line of the reading text — the article body and the lede, not the short blurbs inside cards —
    // that wraps (two lines or more): the median, and the share outside 45–80
    const cpl = [];
    for (const el of main.querySelectorAll('.b-prose p, p.b-lede')) {
      if (!shown(el)) continue;
      const t = el.innerText.trim(); if (t.length < 90) continue;
      const lh = parseFloat(getComputedStyle(el).lineHeight) || 24;
      const lines = Math.round(el.getBoundingClientRect().height / lh);
      if (lines >= 2) cpl.push(t.length / lines);
    }
    cpl.sort((a, b) => a - b);
    const median = cpl.length ? cpl[Math.floor(cpl.length / 2)] : null;
    const outside = cpl.filter((c) => c < 45 || c > 80).length;
    return { flesch: +flesch.toFixed(1), words: words.length, sentences: sentences.length, semantics: errs,
      measure: { median: median && +median.toFixed(1), paragraphs: cpl.length, outside } };
  });
  result.reading = { flesch: r.flesch, words: r.words, sentences: r.sentences };
  result.semantics = r.semantics;
  result.measure = r.measure;
  await ctx.close();
}

// --- first screen: the headline fully visible, and the entry point, on desktop and on a phone ---
const first = [];
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 });
  await ctx.addInitScript(consent);
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: 'load', timeout: 90000 }); await p.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  const s = await p.evaluate((sel) => {
    const vis = (el) => { if (!el) return false; const b = el.getBoundingClientRect(); return b.width > 0 && b.top >= 0 && b.bottom <= innerHeight && getComputedStyle(el).visibility !== 'hidden'; };
    return { h1: vis(document.querySelector('h1')), entry: [...document.querySelectorAll(sel)].some(vis) };
  }, entry);
  first.push({ width: w, ...s });
  // --- phone navigation: every destination of the desktop top bar, reachable on a 390 px phone from its menu ---
  if (w < 500) {
    const links = await p.evaluate(() => [...document.querySelectorAll('nav a[href]')].map((a) => a.getAttribute('href')).filter((h) => h && !h.startsWith('#')));
    const want = [...new Set(links)];
    await p.click('#mobile-menu-btn').catch(() => {});
    await p.waitForTimeout(500);
    const after = await p.evaluate(() => [...document.querySelectorAll('nav a, #mobile-menu a')].filter((a) => { const b = a.getBoundingClientRect(); return b.width > 0 && b.height > 0 && b.right > 0 && b.left < innerWidth && getComputedStyle(a).visibility !== 'hidden'; }).map((a) => a.getAttribute('href')));
    const reachable = want.filter((l) => after.includes(l));
    result.phoneNav = { total: want.length, reachable: reachable.length, missing: want.filter((l) => !reachable.includes(l)) };
  }
  await ctx.close();
}
result.firstScreen = first;
await browser.close();
fs.writeFileSync(out, JSON.stringify(result, null, 1));
console.log(JSON.stringify(result));
