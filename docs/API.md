# Gift data API

This repository generates a static JSON API under `docs/api/v1/`. The weekly sync uses the GiftChanges API as its upstream source. The `docs` directory is kept separate from the media assets so it can be published as a GitHub Pages site without copying the large asset tree.

## Static routes

After publication, the default API base is `https://coreease.github.io/tg-gifts/api/v1`.

- `GET /index.json` returns the API version, counts, attribution, and endpoint templates.
- `GET /gifts.json` lists the synchronized gift collections; `GET /backdrops.json` lists the unique global backdrop/color catalog.
- `GET /gifts/{gift-slug}/index.json` returns a complete collection, including all its model, pattern, and backdrop records.
- `GET /gifts/{gift-slug}/models.json`, `/patterns.json`, and `/backdrops.json` return one category for a collection.
- `GET /gifts/{gift-slug}/models/{model-slug}.json`, `/patterns/{pattern-slug}.json`, and `/backdrops/{backdrop-slug}.json` return a single item by name-derived slug.

Each model record has absolute `imageUrl` (SVG) and `animationUrl` (TGS) links. Each pattern has an absolute PNG `imageUrl`. Backdrops return color values and have `imageUrl: null` because the upstream describes them as color/material definitions without downloadable image files. All media links are absolute raw GitHub URLs. The URL base can be changed using `GITHUB_PAGES_BASE_URL` and `ASSET_PUBLIC_BASE_URL`.

The workflow includes a conditional Pages deployment job. The repository remains private and Pages remains disabled until the owner makes the repository public and selects **GitHub Actions** in **Settings → Pages → Build and deployment → Source**. The next manual or scheduled sync publishes the contents of `docs/`.

## Upstream contract reviewed

The live machine-readable documentation is [`https://api.changes.tg/llm`](https://api.changes.tg/llm).

- `GET /total` returns aggregate counts. At review time it reported 151 total gifts, of which 123 are upgradable, plus 7,806 models, 80 unique backdrops, and 26,065 patterns.
- `GET /gifts` lists upgradable gifts only. It returned 123 names at review time; this intentionally matches the repository's collection set, rather than all 151 catalogued gifts.
- `GET /gift/:gift` returns one gift's metadata and its `models[]`, `backdrops[]`, `symbols[]`, and `emoji` object.
- `GET /emoji/:gift` includes the custom-emoji mapping for models, backdrops, and patterns. Some model emoji IDs may be `null`.
- `GET /backdrops/:gift` returns backdrop colors, IDs, rarity, and emoji metadata. Backdrops are color/material definitions and do not have downloadable image files.
- Download routes are `/model/:gift/:model.svg`, `/model/:gift/:model.tgs`, `/pattern/:gift/:pattern.png`, and `/original/:id.svg`.
- Gift, model, backdrop, and pattern names accept common case and separator variants; numeric gift IDs are also accepted. The sync uses API gift IDs for asset requests and exact item names for model/pattern requests.
- The service is eventually consistent; its documentation says underlying maps update about every 30 seconds. The sync validates counts and exact name sets before writing generated data. It retries transient failures and stops on missing or incomplete API data.
- The upstream API requires visible credit to `@GiftChanges`. This repository preserves that credit in its API metadata and documentation.

The count check uses `/total`, `/gifts`, `/backdrops`, and the sum of every `/gift/:gift` response. These values can change as the upstream catalog changes, so the numbers above describe the review-time snapshot only.
