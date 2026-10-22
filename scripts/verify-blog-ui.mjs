/** Run against a local dev/preview server: node scripts/verify-blog-ui.mjs http://127.0.0.1:4322 */
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.argv[2] ?? 'http://127.0.0.1:4322';
assert(['localhost', '127.0.0.1', '[::1]'].includes(new URL(base).hostname), 'Use a local server');
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL ?? 'chrome' });
let checks = 0;
const check = (condition, message) => { assert(condition, message); checks++; };

try {
  const context = await browser.newContext();
  await context.addInitScript(() => localStorage.setItem('fg-consent', JSON.stringify({ v: 1, ads: false, at: new Date().toISOString() })));
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const visit = async path => {
    const response = await page.goto(new URL(path, base).href);
    check(response?.ok(), `${path} must load`);
    await page.evaluate(() => document.fonts.ready);
  };
  const layout = async name => {
    for (const width of [360, 390, 768, 1024, 1280, 1440]) {
      await page.setViewportSize({ width, height: 844 });
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        h1s: document.querySelectorAll('main h1').length,
        headingWidth: document.querySelector('main h1').getBoundingClientRect().right,
      }));
      check(!result.overflow, `${name}: no horizontal overflow at ${width}px`);
      check(result.h1s === 1, `${name}: one main heading at ${width}px`);
      check(result.headingWidth <= width, `${name}: heading fits at ${width}px`);
    }
    const contrastFaults = await page.evaluate(() => {
      const rgba = value => (value.match(/[\d.]+/g) ?? []).map(Number);
      const luminance = color => color.slice(0, 3).map(c => {
        const s = c / 255;
        return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
      }).reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
      const faults = [];
      const walker = document.createTreeWalker(document.querySelector('main'), NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        const el = node.parentElement;
        if (!node.textContent.trim() || !el.checkVisibility()) continue;
        const style = getComputedStyle(el);
        let background = [255, 255, 255];
        for (let parent = el; parent; parent = parent.parentElement) {
          const color = rgba(getComputedStyle(parent).backgroundColor);
          if (color.length === 3 || color[3] === 1) { background = color; break; }
        }
        const a = luminance(rgba(style.color));
        const b = luminance(background);
        const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
        const large = parseFloat(style.fontSize) >= 24 || (parseFloat(style.fontSize) >= 18.66 && parseInt(style.fontWeight) >= 700);
        if (ratio < (large ? 3 : 4.5)) faults.push({ text: node.textContent.trim().slice(0, 70), ratio: ratio.toFixed(2) });
      }
      return faults;
    });
    check(contrastFaults.length === 0, `${name}: text contrast meets AA: ${JSON.stringify(contrastFaults.slice(0, 5))}`);
  };

  await visit('/blog/');
  await layout('Index');
  const allPosts = await page.locator('#b-sections .b-card').count();
  check(allPosts > 0, 'The blog has articles');
  check(await page.locator('#b-results .b-card').count() === allPosts, 'Browsing and search contain the same posts');

  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: 844 });
    const firstTitle = await page.locator('#b-sections .b-card h3').first().boundingBox();
    check(firstTitle && firstTitle.y + firstTitle.height <= 844, `First article title visible on first screen at ${width}px`);
    const input = page.getByRole('searchbox', { name: 'Search articles' });
    await input.fill('knowledge');
    check(await page.locator('#b-sections').isHidden(), 'Search hides default sections');
    check(await page.locator('#b-results .b-card:visible').count() > 0, 'Search shows matching articles');
    check(await page.locator('#b-results .b-card[hidden]:visible').count() === 0, 'Nonmatching cards stay hidden despite their flex layout');
    await input.fill('zzzz-no-such-article-zzzz');
    check(await page.locator('#b-results .b-card:visible').count() === 0, 'No-result search shows no cards');
    check(await page.locator('#b-none').isVisible(), 'No-result search explains the empty state');
    await input.fill('');
    check(await page.locator('#b-results').isHidden(), 'Clearing search hides results');
    check(await page.locator('#b-sections .b-card:visible').count() === allPosts, 'Clearing search restores all articles');
    await input.focus();
    check(await input.evaluate(el => getComputedStyle(el).outlineStyle !== 'none'), 'Search has a visible keyboard focus ring');
  }

  await visit('/blog/?q=knowledge');
  check(await page.getByRole('searchbox').inputValue() === 'knowledge', 'Search query in the URL is restored');
  check(await page.locator('#b-results .b-card:visible').count() > 0, 'URL search displays results');

  await page.getByRole('navigation', { name: 'Topics', exact: true }).getByRole('link', { name: /^Tutorials/ }).click();
  check(new URL(page.url()).pathname === '/blog/category/tutorials/', 'Topic links navigate to the existing URL');
  check(await page.locator('.b-chip[aria-current="page"]').innerText().then(t => t.startsWith('Tutorials')), 'Current topic is marked');
  await layout('Category');

  await visit('/blog/how-to-add-knowledge-to-your-ai-assistant-answer-real-business-questions/');
  await layout('Article');
  const proseBefore = await page.locator('.b-prose').innerText();
  check(proseBefore.includes('Why knowledge matters'), 'Article content renders');
  await page.setViewportSize({ width: 1280, height: 844 });
  const tocLink = page.locator('.b-toc a').nth(2);
  const hash = await tocLink.getAttribute('href');
  await tocLink.click();
  await page.waitForFunction(expected => location.hash === expected, hash);
  check(new URL(page.url()).hash === hash, 'Table of contents navigates to its section');
  const tocTargetExists = await tocLink.evaluate(el => {
    const id = decodeURIComponent(el.hash.slice(1));
    return document.getElementById(id) !== null;
  });
  check(tocTargetExists, 'Contents link points at a real heading');
  const tagPath = await page.locator('.b-tags a[href*="/tag/"]').first().getAttribute('href');
  check(!!tagPath, 'Article retains tag links');
  await visit(tagPath);
  await layout('Tag');

  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'dark' });
  check(await page.locator('.b-card h3').first().evaluate(el => getComputedStyle(el).transitionDuration === '0s'), 'Reduced motion is respected');
  check(await page.locator('main').evaluate(el => getComputedStyle(el).backgroundColor === 'rgb(250, 250, 252)'), 'The intentional light theme remains readable in a dark OS preference');
  check(errors.length === 0, `No browser exceptions: ${errors.join(', ')}`);
  console.log(`PASS: ${checks} blog UI checks (index, category, article, tag; 360–1440px).`);
} finally {
  await browser.close();
}
