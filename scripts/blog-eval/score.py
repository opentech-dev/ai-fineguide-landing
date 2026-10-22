"""Turn one round's evidence into a loop.py scores file.
usage: python3 score.py <label> <case>... > eval/scores-<label>.json
Measured metrics come from report.json (design_check) and measure.json; judged ones from judge.json in each case's
folder (written by the judge helper). The mappings below are the rubric's `how` — frozen with the rubric."""
import json, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
label, cases_in = sys.argv[1], sys.argv[2:]
JUDGED = ['j_purpose', 'j_hierarchy', 'j_typography', 'j_color', 'j_findability', 'j_imagery', 'j_consistency',
          'j_credibility', 'j_next', 'j_organic']
# Two known artefacts of the tools, filtered (ledger v2, 2026-10-22):
# - the site's "Platform" menu is a closed <details>: nothing of it is drawn at rest, but design_check counts its links
#   (their own class, a.block.px-4) as text over the headline, and measure.mjs's first version read their names as empty;
# - design_check visits as a first-time visitor, so the cookie banner — a fixed overlay shown once, the site's and not
#   the blog's — "overlaps" whatever is under it. The judges' screens are taken with the choice already made.
CONSENT = ('We use the storage', 'Accept', 'Reject', 'Cookie settings')

def clamp(x): return max(1.0, min(10.0, round(x, 2)))

def artefact(f):
    if f.get('kind') != 'overlap': return False
    els = [e.strip() for e in str(f.get('el', '')).split(' × ')]
    texts = [t.strip() for t in str(f.get('text', '')).split(' × ')]
    return any(e.startswith('a.block.px-4') for e in els) or any(t.startswith(CONSENT) for t in texts)

def kept(rep, kinds):
    return [f for f in rep.get('findings', []) if f.get('kind') in kinds and not artefact(f)]

def unique(fs):
    seen = set(); out = []
    for f in fs:
        k = (f.get('kind'), f.get('el'), str(f.get('text', ''))[:40], f.get('src'))
        if k not in seen: seen.add(k); out.append(f)
    return out

def describe(fs):
    return [f"{f.get('view')}: {f.get('kind')} on <{f.get('el')}> \"{str(f.get('text', ''))[:40]}\"" + (f" {f.get('ratio')}:1 needs {f.get('need')}" if f.get('ratio') else '') + (f" {f.get('size')}" if f.get('size') else '') + (f" {f.get('src')}" if f.get('src') else '') for f in fs][:6]

out = {}
for case in cases_in:
    d = os.path.join(HERE, 'rounds', label, case)
    rep = json.load(open(os.path.join(d, 'report.json')))
    m = json.load(open(os.path.join(d, 'measure.json')))
    j = json.load(open(os.path.join(d, 'judge.json')))
    er = rep['summary']['errors']
    c = {}
    def put(mid, score, evidence, issues):
        c[mid] = {'score': clamp(score), 'evidence': evidence, 'issues': issues}
    f = unique(kept(rep, ['contrast']))
    put('m_contrast', 10 - len(f), f'{len(f)} unique contrast faults (design_check, 4 views)', describe(f))
    f = unique(kept(rep, ['overflow', 'clipped', 'overlap', 'gutter']))
    put('m_layout', 10 - 2 * len(f), f'{len(f)} unique overflow/clipped/overlap/gutter faults (the closed Platform menu and the cookie banner filtered)', describe(f))
    f = unique(kept(rep, ['tap-target']))
    put('m_tap', 10 - 0.5 * len(f), f'{len(f)} unique controls too small to tap on the phone', describe(f))
    f = unique(kept(rep, ['image', 'image-low-res', 'image-stretched']))
    put('m_images', 10 - len(f), f'{len(f)} unique image faults (failed, low-res, stretched)', describe(f))
    f = unique(kept(rep, ['hidden-at-rest', 'ground', 'font', 'empty']))
    n = len(f) + er.get('exceptions', 0) + er.get('console_errors', 0) + er.get('failed_requests', 0)
    put('m_runtime', 10 - 2 * n, f"{len(f)} hidden/font/empty faults, {er.get('exceptions', 0)} exceptions, {er.get('console_errors', 0)} console errors, {er.get('failed_requests', 0)} failed requests",
        describe(f) + ([f'runtime errors {er}'] if any(er.values()) else []))
    mb = m['weight']['mb']; over = max(0.0, mb - 1.5); steps = 0 if over <= 0 else int(-(-over // 0.5))
    put('m_weight', 10 - steps, f'{mb} MB downloaded after scrolling to the end (desktop)', [f'heavy files: {", ".join(m["weight"]["big"][:4])}'] if steps else [])
    fl = m['reading']['flesch']; below = max(0.0, 60 - fl)
    put('m_reading', 10 - below / 4, f'Flesch reading ease {fl} over {m["reading"]["words"]} words', [f'reading ease {fl} is below 60: shorter sentences and words'] if below else [])
    sem = [e for e in m['semantics'] if not (e.startswith('a without a name') and 'class="block px-4 py-2' in e)]
    put('m_semantics', 10 - 2 * len(sem), f'{len(sem)} structure errors', sem[:6])
    pn = m['phoneNav']; ratio = pn['reachable'] / max(1, pn['total'])
    put('m_phone_nav', 10 * ratio, f'{pn["reachable"]}/{pn["total"]} top-bar destinations reachable on a 390 px phone', [f'not reachable on the phone: {", ".join(pn["missing"])}'] if pn['missing'] else [])
    fs = m['firstScreen']; passed = sum(int(x['h1']) + int(x['entry']) for x in fs)
    put('m_first_screen', 10 * passed / 4, 'first screen: ' + '; '.join(f"{x['width']}px h1={'yes' if x['h1'] else 'no'} entry={'yes' if x['entry'] else 'no'}" for x in fs),
        [f"{x['width']}px: {'headline cut or below the fold; ' if not x['h1'] else ''}{'the way in (articles / byline) is not in the first screen' if not x['entry'] else ''}".strip('; ') for x in fs if not (x['h1'] and x['entry'])])
    ms = m['measure']
    if ms['median'] is None:
        put('m_measure', 10, 'no wrapping paragraphs to measure', [])
    else:
        med = ms['median']; dist = 0 if 45 <= med <= 80 else (45 - med if med < 45 else med - 80)
        share = ms['outside'] / max(1, ms['paragraphs'])
        put('m_measure', 10 - dist / 4 - 4 * share, f'median {med} characters per line over {ms["paragraphs"]} wrapping paragraphs; {ms["outside"]} outside 45–80',
            ([f'median line length {med} is outside 45–80'] if dist else []) + ([f'{ms["outside"]} paragraphs set outside 45–80 characters a line'] if ms['outside'] else []))
    for k in JUDGED:
        v = j[k]
        c[k] = {'score': float(v['score']), 'evidence': v['evidence'], 'issues': v.get('issues', [])}
    for k, v in c.items():
        if v['score'] < 10 and not v['issues']: v['issues'] = ['see evidence']
    out[case] = c

print(json.dumps({'cases': out}, indent=1))
