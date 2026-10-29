/**
 * Cloudflare Turnstile on the website's contact form (chat-api lib/bot-check.ts checks the token, on the tickets
 * route the form posts to). "Managed" and rendered `interaction-only`: a visitor sees nothing, and only one Cloudflare
 * suspects is a bot gets the challenge, in a small box at the bottom of the page. chat-api says whether the check is
 * on (`GET /api/chat/bot-check` → its site key, null while off), so the page never sends a token nobody reads.
 */

/** The header the token rides in — chat-api's BOT_CHECK_HEADER. */
export const BOT_CHECK_HEADER = 'x-turnstile-token';

/** What a token is made for; chat-api refuses one made for another form. */
export type BotCheckAction = 'contact';

interface Turnstile {
  render(el: HTMLElement, opts: Record<string, unknown>): string | undefined;
  remove(id: string): void;
}

const SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
/** How long a person may take over a challenge they were shown. */
const CHALLENGE_MS = 3 * 60_000;

let siteKey: Promise<string | null> | null = null;
let script: Promise<Turnstile> | null = null;

function askSiteKey(chatApi: string): Promise<string | null> {
  return fetch(`${chatApi}/bot-check`)
    .then((r) => (r.ok ? (r.json() as Promise<{ data?: { siteKey?: string | null } }>) : Promise.reject(new Error(String(r.status)))))
    .then((d) => d.data?.siteKey ?? null)
    .catch(() => {
      siteKey = null; // asked again next time
      return null;
    });
}

function loadScript(): Promise<Turnstile> {
  return new Promise<Turnstile>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = SCRIPT;
    s.async = true;
    s.onload = () => {
      const t = (window as unknown as { turnstile?: Turnstile }).turnstile;
      if (t) resolve(t); else reject(new Error('turnstile missing'));
    };
    s.onerror = () => reject(new Error('turnstile did not load'));
    document.head.append(s);
  }).catch((e: Error) => {
    script = null;
    throw e;
  });
}

/** A check that did not pass carries chat-api's own code for one, so the form tells the two the same way. */
const failed = (): Error => Object.assign(new Error('bot check failed'), { code: 'BOT_CHECK_FAILED' });

/** Whether [e] is the bot check saying no — here (the box went unanswered, Turnstile failed to load) or at chat-api
 *  (`BOT_CHECK_REQUIRED`, `BOT_CHECK_FAILED`). */
export function isBotCheckRefusal(e: unknown): boolean {
  const code = (e as { code?: unknown } | null)?.code;
  return typeof code === 'string' && code.startsWith('BOT_CHECK_');
}

const watchers = new Set<(showing: boolean) => void>();
/** Told true when Cloudflare puts its box up for this visitor, false when it is gone: the form says to tick it. */
export function onBotChallenge(cb: (showing: boolean) => void): () => void {
  watchers.add(cb);
  return () => { watchers.delete(cb); };
}
const challenge = (showing: boolean): void => { for (const w of watchers) w(showing); };

/** A fresh token for [action], or null while the check is off. */
export async function botCheckToken(action: BotCheckAction, chatApi: string): Promise<string | null> {
  const key = await (siteKey ??= askSiteKey(chatApi));
  if (!key) return null;
  const turnstile = await (script ??= loadScript()).catch(() => { throw failed(); });
  const box = document.createElement('div');
  box.setAttribute('style', 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483647');
  document.body.append(box);
  return new Promise<string>((resolve, reject) => {
    let id: string | undefined;
    const end = (): void => {
      clearTimeout(timer);
      try { if (id) turnstile.remove(id); } catch { /* already gone */ }
      box.remove();
      challenge(false);
    };
    const timer = setTimeout(() => { end(); reject(failed()); }, CHALLENGE_MS);
    try {
      id = turnstile.render(box, {
        sitekey: key,
        action,
        appearance: 'interaction-only',
        'response-field': false,
        'before-interactive-callback': () => challenge(true),
        callback: (token: string) => { end(); resolve(token); },
        'error-callback': () => { end(); reject(failed()); },
        'timeout-callback': () => { end(); reject(failed()); },
      });
    } catch {
      end();
      reject(failed());
    }
  });
}

/** The header to send with the form's request: the token, or nothing while the check is off. */
export async function botCheckHeaders(action: BotCheckAction, chatApi: string): Promise<Record<string, string>> {
  const token = await botCheckToken(action, chatApi);
  return token ? { [BOT_CHECK_HEADER]: token } : {};
}
