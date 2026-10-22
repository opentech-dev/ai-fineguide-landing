#!/bin/bash
# Evaluate the built blog for one round: design_check + judge screens + measure.mjs per case, one after the other.
# usage: ./evaluate.sh <label> <case>...   e.g. ./evaluate.sh baseline-1 index post   (cases in cases.json)
# Needs: the site built (npm run build → dist/), Tesseract's canvas-design design_check (TESSERACT, default the sibling
# checkout), Playwright (this repo's node_modules) and PIL for python3.
set -u
HERE="$(cd "$(dirname "$0")" && pwd)"
DIST="$HERE/../../dist"
TESSERACT="${TESSERACT:-$HERE/../../../tesseract}"
DC="$TESSERACT/apps/desktop/resources/builtin-skills/canvas-design/scripts/design_check.mjs"
export PLAYWRIGHT_MODULE="${PLAYWRIGHT_MODULE:-$TESSERACT/node_modules/playwright/index.mjs}"
LABEL="$1"; shift
PORT=4410
node "$HERE/serve.mjs" "$DIST" $PORT >/dev/null 2>&1 &
SRV=$!
trap 'kill $SRV 2>/dev/null' EXIT
sleep 1
for C in "$@"; do
  P=$(python3 -c "import json,sys;print(json.load(open('$HERE/cases.json'))['$C']['path'])")
  ENTRY=$(python3 -c "import json,sys;print(json.load(open('$HERE/cases.json'))['$C']['entry'])")
  OUT="$HERE/rounds/$LABEL/$C"; mkdir -p "$OUT"
  node "$DC" "http://127.0.0.1:$PORT$P" --out "$OUT" --timeout 120 > "$OUT/report.json" 2> "$OUT/dc-err.txt"
  node "$HERE/shots.mjs" "http://127.0.0.1:$PORT$P" "$OUT" 2> "$OUT/shots-err.txt"
  node "$HERE/measure.mjs" "http://127.0.0.1:$PORT" "$P" "$ENTRY" "$OUT/measure.json" > /dev/null 2> "$OUT/m-err.txt"
  # phone screens side by side, three to a picture, for the judge
  python3 - "$OUT" <<'PY'
import sys, glob, re
from PIL import Image
out = sys.argv[1]
key = lambda f: int(re.search(r'-(\d+)\.jpg$', f).group(1))
ph = sorted(glob.glob(f'{out}/judge-phone-*.jpg'), key=key)
ph = [f for f in ph if 'strip' not in f]
for i in range(0, len(ph), 3):
    ims = [Image.open(f) for f in ph[i:i+3]]
    w = sum(im.width for im in ims) + 24 * (len(ims) - 1); h = max(im.height for im in ims)
    c = Image.new('RGB', (w, h), (128, 128, 128)); x = 0
    for im in ims: c.paste(im, (x, 0)); x += im.width + 24
    c.save(f'{out}/judge-phone-strip-{i//3 + 1}.jpg', quality=85)
PY
  echo "$C: $(python3 -c "import json;r=json.load(open('$OUT/report.json'));print(r['summary']['faults'], r['summary']['errors'])") | $(python3 -c "import json;m=json.load(open('$OUT/measure.json'));print('MB',m['weight']['mb'],'flesch',m['reading']['flesch'],'sem',len(m['semantics']),'nav',m['phoneNav']['reachable'],'/',m['phoneNav']['total'],'cpl',m['measure'],'first',[(f['width'],f['h1'],f['entry']) for f in m['firstScreen']])")"
done
