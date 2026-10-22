"""Write each case's judge prompt for one round. usage: python3 mkprompts.py <label> <case>..."""
import json, os, sys

base = os.path.dirname(os.path.abspath(__file__))
template = open(f'{base}/judge-prompt.md', encoding='utf-8').read()
cases = json.load(open(f'{base}/cases.json', encoding='utf-8'))
label, slugs = sys.argv[1], sys.argv[2:]
for slug in slugs:
    d = f'{base}/rounds/{label}/{slug}'
    text = (template.replace('{PAGE}', cases[slug]['page']).replace('{DIR}', d)
            .replace('{RUBRIC}', f'{base}/eval/rubric.json').replace('{OUT}', f'{d}/judge.json'))
    open(f'{d}/judge-prompt.txt', 'w', encoding='utf-8').write(text)
print('ok', label, slugs)
