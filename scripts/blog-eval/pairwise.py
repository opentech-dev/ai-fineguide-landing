# The improve-results final check: a judge the loop never used (OpenAI gpt-5.5, another maker than the loop's
# judges) compares the first version and the best, shown in both orders. usage: python3 pairwise.py <key> <rounds dir> <first> <best> <out.json>
import base64, json, sys, urllib.request

key = open(sys.argv[1]).read().strip()
rounds, first, best, out = sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5]
SHOTS = ['index/judge-desktop-1.jpg', 'index/judge-desktop-2.jpg', 'index/judge-phone-strip-1.jpg',
         'post/judge-desktop-1.jpg', 'post/judge-desktop-2.jpg', 'post/judge-phone-strip-1.jpg']
PROMPT = """You are an independent design judge. Two versions (A and B) of the same company blog are shown: Fineguide, an AI-first CRM
and business-automation platform. For each version you get six screenshots at actual size: the blog's front page
(two desktop screens at 1440 px, then three phone screens side by side) and a long tutorial post (the same).
The owner wants the blog to feel "nice and modern, cozy looking, polished and clean", "beautiful and organic", like a
mature, premium company's editorial blog.

Compare A and B as a visitor would meet them. Judge only what is on the screens; do not reward length or effort.
Answer ONLY with JSON:
{"preferred": "A" | "B" | "tie", "confidence": 1-5,
 "criteria": {"beautiful_organic": "A"|"B"|"tie", "typography": "A"|"B"|"tie", "hierarchy": "A"|"B"|"tie",
              "credibility_premium": "A"|"B"|"tie", "findability": "A"|"B"|"tie", "phone": "A"|"B"|"tie"},
 "reasons": ["…", "…", "…"]}"""

def img(path):
    return {'type': 'input_image', 'image_url': 'data:image/jpeg;base64,' + base64.b64encode(open(path, 'rb').read()).decode(), 'detail': 'high'}

def ask(a, b):
    content = [{'type': 'input_text', 'text': PROMPT}]
    for label, version in (('A', a), ('B', b)):
        content.append({'type': 'input_text', 'text': f'Version {label}:'})
        content += [img(f'{rounds}/{version}/{s}') for s in SHOTS]
    body = {'model': 'gpt-5.5', 'input': [{'role': 'user', 'content': content}], 'text': {'format': {'type': 'json_object'}}}
    req = urllib.request.Request('https://api.openai.com/v1/responses', data=json.dumps(body).encode(), method='POST',
                                 headers={'Authorization': f'Bearer {key}', 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=600) as r:
        res = json.load(r)
    text = ''.join(c.get('text', '') for o in res.get('output', []) if o.get('type') == 'message' for c in o.get('content', []))
    return json.loads(text), res.get('usage', {})

results = {}
for order, (a, b) in (('first-as-A', (first, best)), ('best-as-A', (best, first))):
    verdict, usage = ask(a, b)
    # translate A/B back to first/best
    name = {'A': 'first' if a == first else 'best', 'B': 'best' if a == first else 'first', 'tie': 'tie'}
    results[order] = {'preferred': name[verdict['preferred']], 'confidence': verdict.get('confidence'),
                      'criteria': {k: name.get(v, v) for k, v in verdict.get('criteria', {}).items()},
                      'reasons': verdict.get('reasons', []), 'usage': usage}
    print(order, '->', results[order]['preferred'], results[order]['confidence'], results[order]['criteria'])
json.dump(results, open(out, 'w'), indent=1)
