// End-to-end check of the site's statistics (src/lib/site-arrival.ts) on the built site, served as fineguide.ai with the
// events endpoint mocked. Run after `npm run build`:  node scripts/site-eval/site-arrival.e2e.mjs
// A person's browser is what it checks, so the test browser hides the signs that give automation away (the script
// rightly sends nothing for a robot); one context is marked as ours to prove that one sends nothing.
import { chromium } from 'playwright';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import assert from 'node:assert/strict';
import { markInternal } from './internal.mjs';

const DIST = new URL('../../dist/', import.meta.url).pathname;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain' };
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';

function fileFor(pathname) {
  let p = join(DIST, decodeURIComponent(pathname));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  else if (!extname(p) && existsSync(`${p}/index.html`)) p = `${p}/index.html`;
  return existsSync(p) ? p : null;
}

async function personContext(browser, { failFirst = 0 } = {}) {
  const ctx = await browser.newContext({ userAgent: UA, viewport: { width: 1366, height: 900 }, screen: { width: 1440, height: 900 }, locale: 'en-US' });
  await ctx.addInitScript(() => {
    Object.defineProperty(Navigator.prototype, 'webdriver', { get: () => false });
    try { Object.defineProperty(Navigator.prototype, 'userAgentData', { get: () => ({ platform: 'macOS', brands: [{ brand: 'Google Chrome', version: '140' }] }) }); } catch { /* none */ }
    Object.defineProperty(Navigator.prototype, 'platform', { get: () => 'MacIntel' });
  });
  const posts = [];
  let failing = failFirst;
  await ctx.route('**/*', async (route) => {
    const u = new URL(route.request().url());
    if (u.hostname === 'fineguide.ai' && u.pathname === '/api/core/site/events') {
      const body = JSON.parse(route.request().postData() || '{}');
      posts.push({ status: failing > 0 ? 503 : 204, contentType: route.request().headers()['content-type'], body });
      if (failing > 0) { failing -= 1; return route.fulfill({ status: 503, body: '' }); }
      return route.fulfill({ status: 204, body: '' });
    }
    if (u.hostname === 'fineguide.ai') {
      const f = fileFor(u.pathname);
      if (!f) return route.fulfill({ status: 404, body: 'not found' });
      return route.fulfill({ status: 200, body: readFileSync(f), headers: { 'content-type': TYPES[extname(f)] || 'application/octet-stream' } });
    }
    if (u.hostname === 'app.fineguide.ai') return route.fulfill({ status: 200, body: '<!doctype html><title>Register</title><h1>Register</h1>', headers: { 'content-type': 'text/html' } });
    return route.abort();
  });
  return { ctx, posts };
}

const events = (posts) => posts.filter((p) => p.status === 204).flatMap((p) => p.body.events);
async function waitFor(fn, ms = 8000) {
  const end = Date.now() + ms;
  while (Date.now() < end) { if (fn()) return true; await new Promise((r) => setTimeout(r, 100)); }
  return false;
}

// The bundled browser, or any installed headless shell (PW_CHROMIUM=/path/to/chrome-headless-shell) — never a window.
const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
let failed = 0;
const check = (name, fn) => { try { fn(); console.log(`ok   ${name}`); } catch (e) { failed += 1; console.log(`FAIL ${name}: ${e.message}`); } };
try {
  // 1. A person arrives from Instagram with our tagged link.
  const { ctx, posts } = await personContext(browser);
  const page = await ctx.newPage();
  await page.goto('https://fineguide.ai/?utm_source=AB12cd&utm_medium=bio&utm_campaign=launch&keep=1', { referer: 'https://www.instagram.com/' });
  await waitFor(() => events(posts).some((e) => e.kind === 'visit'));
  const visit = events(posts).find((e) => e.kind === 'visit');
  check('one visit event with the code, utm words, page and referring host', () => {
    assert.equal(events(posts).filter((e) => e.kind === 'visit').length, 1);
    assert.equal(visit.source, 'ab12cd');
    assert.equal(visit.medium, 'bio');
    assert.equal(visit.campaign, 'launch');
    assert.equal(visit.path, '/');
    assert.equal(visit.referrer, 'www.instagram.com');
    assert.ok(visit.id && typeof visit.ageMs === 'number' && visit.tries === 0);
    assert.ok(!('ip' in visit) && !('visitor' in visit));
  });
  check('sent as text/plain, same origin', () => assert.match(posts[0].contentType, /text\/plain/));
  check('utm parameters left the address bar, other parameters stay', () => assert.equal(page.url(), 'https://fineguide.ai/?keep=1'));
  const jar = Object.fromEntries((await ctx.cookies('https://app.fineguide.ai/')).map((c) => [c.name, c]));
  check('arrival cookies on the parent domain', () => {
    assert.equal(jar.fg_src?.value, 'ab12cd');
    assert.equal(jar.fg_src?.domain, '.fineguide.ai');
    assert.equal(jar.fg_ref?.value, 'www.instagram.com');
    const utm = JSON.parse(decodeURIComponent(jar.fg_utm.value));
    assert.deepEqual([utm.m, utm.c, utm.lp], ['bio', 'launch', '/']);
    const first = JSON.parse(decodeURIComponent(jar.fg_first.value));
    assert.equal(first.s, 'ab12cd');
    const days = (jar.fg_first.expires - Date.now() / 1000) / 86400;
    assert.ok(days > 89 && days <= 90, `fg_first lasts ${days} days`);
  });

  // 2. A step to another of our pages is a view; the pricing link is also a call to action.
  await page.locator('a[href="/pricing/"]:visible').first().click();
  await page.waitForURL('https://fineguide.ai/pricing/');
  await waitFor(() => events(posts).some((e) => e.kind === 'view'));
  check('a view with the page it came from', () => {
    const v = events(posts).find((e) => e.kind === 'view');
    assert.equal(v.path, '/pricing/');
    assert.equal(v.referrer, '/');
  });
  check('pricing click counted as a call to action with the remembered source', () => {
    const c = events(posts).find((e) => e.kind === 'cta' && e.detail === 'pricing');
    assert.ok(c, 'no pricing cta');
    assert.equal(c.source, 'ab12cd');
  });

  // 3. Sign up: the app is reached and can read where the visitor came from.
  await page.locator('a[href^="https://app.fineguide.ai/register"]:visible').first().click();
  await page.waitForURL(/app\.fineguide\.ai\/register/);
  const appCookies = await page.evaluate(() => document.cookie);
  check('the app page is reached and reads the arrival', () => {
    assert.match(appCookies, /fg_src=ab12cd/);
    assert.match(appCookies, /fg_first=/);
  });
  await waitFor(() => events(posts).some((e) => e.kind === 'cta' && e.detail === 'register'));
  check('sign-up click counted', () => assert.ok(events(posts).some((e) => e.kind === 'cta' && e.detail === 'register')));
  await ctx.close();

  // 4. Our own browser sends nothing and remembers nothing.
  const ours = await personContext(browser);
  await markInternal(ours.ctx);
  const p2 = await ours.ctx.newPage();
  await p2.goto('https://fineguide.ai/?utm_source=zz99zz', { referer: 'https://www.google.com/' });
  await p2.waitForTimeout(1500);
  const oursJar = await ours.ctx.cookies('https://fineguide.ai/');
  check('a browser marked as ours sends nothing', () => assert.equal(ours.posts.length, 0));
  check('… and keeps no source', () => assert.ok(!oursJar.some((c) => c.name === 'fg_src')));
  await ours.ctx.close();

  // 5. A robot (automation left visible) sends nothing.
  const robotCtx = await browser.newContext();
  let robotPosts = 0;
  await robotCtx.route('**/*', async (route) => {
    const u = new URL(route.request().url());
    if (u.pathname === '/api/core/site/events') { robotPosts += 1; return route.fulfill({ status: 204 }); }
    if (u.hostname === 'fineguide.ai') { const f = fileFor(u.pathname); return f ? route.fulfill({ status: 200, body: readFileSync(f), headers: { 'content-type': TYPES[extname(f)] || 'application/octet-stream' } }) : route.fulfill({ status: 404 }); }
    return route.abort();
  });
  const p3 = await robotCtx.newPage();
  await p3.goto('https://fineguide.ai/?utm_source=rb01ot');
  await p3.waitForTimeout(1500);
  check('an automated browser sends nothing', () => assert.equal(robotPosts, 0));
  await robotCtx.close();

  // 6. The API is busy: the event waits and goes again with the same id, marked as a resend.
  const busy = await personContext(browser, { failFirst: 1 });
  const p4 = await busy.ctx.newPage();
  await p4.goto('https://fineguide.ai/crm/', { referer: 'https://www.bing.com/' });
  await waitFor(() => busy.posts.filter((p) => p.status === 204).length > 0, 10000);
  check('resent after a 503 with the same id and tries=1', () => {
    assert.equal(busy.posts[0].status, 503);
    const first = busy.posts[0].body.events[0];
    const again = busy.posts.find((p) => p.status === 204).body.events.find((e) => e.id === first.id);
    assert.ok(again, 'not resent');
    assert.equal(again.tries, 1);
    assert.equal(again.source, 'bing.com');
  });
  const left = await p4.evaluate(() => localStorage.getItem('fg_q'));
  check('queue emptied once delivered', () => assert.equal(left, null));
  await busy.ctx.close();
} finally {
  await browser.close();
}
console.log(failed ? `${failed} check(s) failed` : 'all checks passed');
process.exit(failed ? 1 : 0);
