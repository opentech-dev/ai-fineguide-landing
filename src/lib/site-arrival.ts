/**
 * Where a visitor came from, and what they did next — the site's own statistics.
 *
 * Every link Fineguide publishes carries its own short code as `utm_source` (`?utm_source=ab12cd` — an Instagram bio,
 * a directory listing, an email); other sites add their own (`utm_source=chatgpt.com`). Every arrival from outside the
 * site is reported, on any page: its source — the code, or without one the referring site's host, or none for a typed
 * address or a bookmark — and its origin (the referring host). A page opened from another of ours is reported as a
 * view, with the page it was opened from; a click on a sign-up, demo, contact or pricing link as a `cta`. The utm
 * parameters leave the address bar, so a shared link does not carry them on.
 *
 * The arrival is remembered for the account made at app.fineguide.ai, in cookies on the parent domain: `fg_src` (the
 * source), `fg_ref` (its referring host) and `fg_utm` (the link's other utm words and the landing page) for 30 days —
 * the latest link from elsewhere wins — and `fg_first`, the very first arrival, for 90 days. The values are the same
 * for everyone who followed that link: no id, no address, nothing that tells one person from another.
 *
 * Our own browsers are not visitors: one with `fg.internal` in its localStorage (test and screenshot scripts set it
 * with scripts/site-eval/internal.mjs) or the `fg_ours` cookie (app.fineguide.ai sets it when one of our accounts signs
 * in) sends nothing and remembers no source; nor does an automated or headless browser, a crawler, or a preview that
 * is not the live site.
 *
 * None is lost: every event waits in this browser's storage (`fg_q`) until the API answers 2xx — busy (429), down or
 * offline, it is sent again with a growing pause, on this page and on the next one. Each carries an id of its own, so
 * one sent again after its answer was lost is not kept twice, and its age, so it keeps the time it happened.
 */

const API = '/api/core/site/events';
const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const DAY = 86_400;
export const SOURCE_COOKIE = 'fg_src';
export const ORIGIN_COOKIE = 'fg_ref';
export const UTM_COOKIE = 'fg_utm';
export const FIRST_COOKIE = 'fg_first';
export const OURS_COOKIE = 'fg_ours';
export const INTERNAL_FLAG = 'fg.internal';
const QUEUE_KEY = 'fg_q';

type Ev = Record<string, string | null>;
type Pending = { id: string; at: number; tries: number; event: Ev };

/** As the API stores it: lowercase, spaces as dashes, letters, digits, dots, dashes and underscores, at most 100. */
export function cleanSource(v: string | null | undefined): string | null {
  const s = (v ?? '').trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9._-]/g, '').replace(/^[^a-z0-9]+/, '').slice(0, 100);
  return s || null;
}

/** A utm word as kept: trimmed, at most 100 characters, null when empty. */
const word = (v: string | null): string | null => (v ?? '').trim().slice(0, 100) || null;

export const ours = (host: string): boolean => host === 'fineguide.ai' || host.endsWith('.fineguide.ai');

function cookie(name: string): string | null {
  try {
    const hit = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`));
    return hit ? decodeURIComponent(hit.slice(name.length + 1)) || null : null;
  } catch {
    return null;
  }
}

function setCookie(name: string, value: string | null, days: number): void {
  const domain = ours(location.hostname) ? '; Domain=fineguide.ai' : '';
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value ?? '')}; Path=/; Max-Age=${value ? days * DAY : 0}; SameSite=Lax${domain}${secure}`;
}

/** The source this browser last arrived with, while it lasts. */
export const currentSource = (): string | null => cleanSource(cookie(SOURCE_COOKIE));

function internalBrowser(): boolean {
  try {
    return cookie(OURS_COOKIE) === '1' || localStorage.getItem(INTERNAL_FLAG) === '1';
  } catch {
    return false;
  }
}

/** Words only crawlers, scripts and headless browsers put in their name (a CUBOT phone is a person). */
const CRAWLER = /bot\b|bot[/_-]|crawl|spider|slurp|mediapartners|googleother|google-inspectiontool|feedfetcher|headless|lighthouse|pagespeed|gtmetrix|facebookexternalhit|meta-external|embedly|bingpreview|chatgpt-user|oai-searchbot|claude-user|perplexity-user|ccbot|phantomjs|puppeteer|playwright|selenium/i;

/** What gives a robot away to the page itself: automation, a crawler's name, Chrome's headless brand, a desktop
 *  name on a server's Linux, headless Chrome's 800×600 screen, no language at all. */
export function robot(): boolean {
  try {
    const n = navigator as Navigator & { userAgentData?: { platform?: string; brands?: Array<{ brand: string }> } };
    const ua = n.userAgent || '';
    if (n.webdriver === true || CRAWLER.test(ua.replace(/cubot/gi, ''))) return true;
    if ((n.userAgentData?.brands ?? []).some((b) => /headless/i.test(b.brand))) return true;
    const linux = /^linux (x86_64|i686)/i.test(n.platform || '') || /^linux$/i.test(n.userAgentData?.platform || '');
    if (linux && !/android/i.test(ua) && /\bWindows NT\b|\bMacintosh\b/.test(ua)) return true;
    if (screen.width === 800 && screen.height === 600) return true;
    return Array.isArray(n.languages) && n.languages.length === 0;
  } catch {
    return false;
  }
}

/** Only the live site reports, and only people. */
const live = (): boolean => ours(location.hostname) && !internalBrowser() && !robot();

// ── delivery: a queue in storage, sent until the API takes it ───────────────────────────────────────────────────
const QUEUE_MAX = 5_000;
const PER_REQUEST = 50;
let queue: Pending[] | null = null;
let sending = false;
let failures = 0;
let timer: ReturnType<typeof setTimeout> | null = null;

function pending(): Pending[] {
  if (queue) return queue;
  queue = [];
  try {
    const saved = JSON.parse(localStorage.getItem(QUEUE_KEY) ?? '[]') as Pending[];
    // Left by an earlier page: it may have been delivered with its answer lost, so the API looks each one up.
    if (Array.isArray(saved)) queue = saved.filter((p) => p && typeof p.id === 'string' && p.event).map((p) => ({ ...p, tries: Math.max(1, p.tries | 0) }));
  } catch { /* no storage: this page's events are still sent and retried while it is open */ }
  return queue;
}

function save(): void {
  try {
    const q = pending();
    if (q.length > QUEUE_MAX) q.splice(0, q.length - QUEUE_MAX);
    if (q.length) localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
    else localStorage.removeItem(QUEUE_KEY);
  } catch { /* storage full or blocked: kept in memory */ }
}

function newId(): string {
  try { return crypto.randomUUID(); } catch { return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`; }
}

/** The pause before trying again: 1 s, 2 s, 4 s … up to 5 minutes, with jitter so many tabs do not come back at once. */
export function retryPause(failed: number): number {
  return Math.round(Math.min(300_000, 1_000 * 2 ** Math.max(0, failed - 1)) * (0.75 + Math.random() * 0.5));
}

function later(ms: number): void {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => { timer = null; deliver(); }, ms);
}

/** Send what waits, a part at a time, one request in flight; on any answer but 2xx, wait and try again. */
export function deliver(): void {
  if (!live()) return;
  const q = pending();
  if (sending || !q.length || timer) return;
  sending = true;
  const part = q.slice(0, PER_REQUEST);
  const now = Date.now();
  const body = JSON.stringify({ events: part.map((p) => ({ ...p.event, id: p.id, ageMs: Math.max(0, now - p.at), tries: p.tries })) });
  // Same site, text/plain: a simple request. keepalive lets it finish while the page closes — its answer is then lost,
  // and the next page sends it again, which the id makes safe.
  fetch(API, { method: 'POST', body, headers: { 'content-type': 'text/plain' }, keepalive: body.length < 60_000, credentials: 'omit' })
    .then((r) => r.ok)
    .catch(() => false)
    .then((ok) => {
      sending = false;
      const done = new Set(part.map((p) => p.id));
      if (ok) {
        failures = 0;
        queue = pending().filter((p) => !done.has(p.id));
      } else {
        failures += 1;
        for (const p of pending()) if (done.has(p.id)) p.tries += 1;
      }
      save();
      if (pending().length) later(ok ? 0 : retryPause(failures));
    });
}

function zone(): string | null {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone || null; } catch { return null; }
}

function send(event: Ev): void {
  pending().push({ id: newId(), at: Date.now(), tries: 0, event: { ...event, tz: zone() } });
  save();
  if (timer && failures === 0) { clearTimeout(timer); timer = null; }
  deliver();
}

/** A reload or a step back is the same arrival again, not a new one. */
function revisit(): boolean {
  const nav = performance.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming | undefined;
  return nav?.type === 'reload' || nav?.type === 'back_forward';
}

/** One arrival remembered: the latest outside link wins; `fg_first` keeps the very first one. */
function remember(source: string, origin: string | null, utm: Ev, path: string): void {
  setCookie(SOURCE_COOKIE, source, 30);
  setCookie(ORIGIN_COOKIE, origin, 30);
  setCookie(UTM_COOKIE, JSON.stringify({ m: utm.medium, c: utm.campaign, ct: utm.content, t: utm.term, lp: path }), 30);
  if (!cookie(FIRST_COOKIE)) setCookie(FIRST_COOKIE, JSON.stringify({ s: source, o: origin, lp: path, at: new Date().toISOString().slice(0, 10) }), 90);
}

export function recordArrival(): void {
  try {
    const q = new URLSearchParams(location.search);
    const code = cleanSource(q.get('utm_source'));
    let ref = '';
    let refPath = '';
    try {
      const r = document.referrer ? new URL(document.referrer) : null;
      ref = r ? r.hostname.toLowerCase() : '';
      refPath = r ? r.pathname : '';
    } catch { ref = ''; }
    const internal = !!ref && ours(ref);
    const external = !!ref && !internal;
    const source = code ?? (external ? cleanSource(ref.replace(/^www\./, '')) : null);
    const utm: Ev = { medium: word(q.get('utm_medium')), campaign: word(q.get('utm_campaign')), content: word(q.get('utm_content')), term: word(q.get('utm_term')) };
    if (q.has('utm_source') || UTM.some((k) => q.has(k))) {
      for (const k of UTM) q.delete(k);
      const rest = q.toString();
      history.replaceState(history.state, '', location.pathname + (rest ? `?${rest}` : '') + location.hash);
    }
    if (revisit()) return;
    // A step from one of our pages to another is a view, kept with the page it came from; a tagged link on one is
    // still counted as an arrival.
    if (internal && !source) {
      if (live()) send({ kind: 'view', path: location.pathname, referrer: ref === location.hostname ? refPath : `${ref}${refPath}` });
      return;
    }
    // A tagged link on one of our own pages keeps what is remembered (unless nothing is yet); a visit with no source
    // at all (typed, bookmarked) leaves everything as it is.
    if (source && (!internal || !currentSource()) && !internalBrowser()) remember(source, external ? cleanSource(ref) : null, utm, location.pathname);
    if (!live()) return;
    send({ kind: 'visit', source, ...utm, path: location.pathname, referrer: ref || null });
  } catch {
    // Counting a visit must never break the page.
  }
}

/** Which call to action a link is: sign-up, demo, contact or pricing; null for any other link. */
export function ctaKind(href: string): string | null {
  let u: URL;
  try { u = new URL(href, location.href); } catch { return null; }
  const host = u.hostname.toLowerCase();
  const p = u.pathname.replace(/^\/(ro|ru)(?=\/)/, '');
  if (host === 'app.fineguide.ai') return p.startsWith('/register') ? 'register' : null;
  if (host === 'calendly.com') return 'demo';
  if (!ours(host)) return null;
  if (p.startsWith('/schedule-demo')) return 'demo';
  if (p.startsWith('/contact')) return 'contact';
  if (p.startsWith('/pricing')) return 'pricing';
  return null;
}

export function trackCtas(): void {
  const onClick = (e: MouseEvent): void => {
    try {
      if (e.type === 'auxclick' && e.button !== 1) return;
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      const detail = a ? ctaKind(a.href) : null;
      if (!detail || !live()) return;
      send({ kind: 'cta', detail, source: currentSource(), path: location.pathname });
    } catch {
      // Counting a click must never stop it.
    }
  };
  document.addEventListener('click', onClick, true);
  document.addEventListener('auxclick', onClick, true);
}

/** Everything, once per page. */
export function trackVisitor(): void {
  recordArrival();
  trackCtas();
  // What earlier pages could not deliver (the API was busy, the browser offline) goes now.
  if (live()) deliver();
  addEventListener('online', () => { failures = 0; if (timer) { clearTimeout(timer); timer = null; } deliver(); });
}
