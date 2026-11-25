#!/bin/sh
# Container start (Dockerfile CMD): serve the site with Apache, and once this new copy has taken over the traffic,
# empty Cloudflare's cache for the fineguide.ai host so visitors get the new pages (a Cloudflare Cache Rule keeps the
# site's HTML at the edge; see apache/fineguide.conf and the seo notes). CF_PURGE_TOKEN comes from the cf-purge Secret
# (a token that can only purge this zone's cache); without it, nothing is purged and the site still starts.
purge() {
  [ -n "$CF_PURGE_TOKEN" ] && [ -n "$CF_ZONE_ID" ] || return 0
  curl -s -o /dev/null -w "cf purge: %{http_code}\n" -X POST \
    -H "Authorization: Bearer $CF_PURGE_TOKEN" -H "Content-Type: application/json" \
    --data '{"hosts":["fineguide.ai"]}' \
    "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/purge_cache" || true
}
# Twice: once the rollout has switched traffic to this pod (about a minute), and again in case the old pod was still
# answering the edge at the first purge.
( sleep 60; purge; sleep 120; purge ) &
exec httpd-foreground
