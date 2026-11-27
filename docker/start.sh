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
# Three times: as soon as this pod answers (the rollout switches traffic within seconds, so a new blog post, /blog/
# and the sitemaps are fresh at once), then at one and three minutes in case the old pod was still answering the edge.
# Error pages (4xx/5xx) are never kept at the edge (the Cache Rule's status_code_ttl), so a post requested while it
# was still a draft does not stay "not found" after it publishes.
( sleep 10; purge; sleep 50; purge; sleep 120; purge ) &
exec httpd-foreground
