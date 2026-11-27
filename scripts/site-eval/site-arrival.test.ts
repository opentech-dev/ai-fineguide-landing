// Unit checks for src/lib/site-arrival.ts — run: node --test scripts/site-eval/site-arrival.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanSource, ctaKind, ours, retryPause } from '../../src/lib/site-arrival.ts';

(globalThis as { location?: unknown }).location = new URL('https://fineguide.ai/pricing/');

test('cleanSource keeps what the API keeps', () => {
  assert.equal(cleanSource('ab12cd'), 'ab12cd');
  assert.equal(cleanSource('  ChatGPT.com '), 'chatgpt.com');
  assert.equal(cleanSource('My Campaign!'), 'my-campaign');
  assert.equal(cleanSource('--x'), 'x');
  assert.equal(cleanSource(''), null);
  assert.equal(cleanSource(null), null);
  assert.equal(cleanSource('a'.repeat(150))?.length, 100);
});

test('ours is the site and its subdomains only', () => {
  assert.ok(ours('fineguide.ai'));
  assert.ok(ours('app.fineguide.ai'));
  assert.ok(!ours('notfineguide.ai'));
  assert.ok(!ours('fineguide.ai.evil.com'));
});

test('ctaKind names sign-up, demo, contact and pricing links', () => {
  assert.equal(ctaKind('https://app.fineguide.ai/register'), 'register');
  assert.equal(ctaKind('https://app.fineguide.ai/register?ref=abc'), 'register');
  assert.equal(ctaKind('https://app.fineguide.ai/login'), null);
  assert.equal(ctaKind('/schedule-demo/'), 'demo');
  assert.equal(ctaKind('https://fineguide.ai/ro/schedule-demo/'), 'demo');
  assert.equal(ctaKind('https://calendly.com/fineguide-ai/fineguide-ai'), 'demo');
  assert.equal(ctaKind('/ru/contact/'), 'contact');
  assert.equal(ctaKind('/pricing/'), 'pricing');
  assert.equal(ctaKind('/blog/'), null);
  assert.equal(ctaKind('https://example.com/pricing/'), null);
});

test('retryPause grows to five minutes, with jitter', () => {
  for (let i = 0; i < 50; i++) {
    const p1 = retryPause(1);
    assert.ok(p1 >= 750 && p1 <= 1250);
    const p20 = retryPause(20);
    assert.ok(p20 >= 225_000 && p20 <= 375_000);
  }
});
