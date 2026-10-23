# Gift data API

This repository generates a static JSON API under `docs/api/v1/`. The weekly sync reads the GiftChanges API and builds the catalog and media links. The `docs` directory is separate from the shared asset tree so it can be published through GitHub Pages without copying the large model and pattern assets.

## Static routes

After GitHub Pages is enabled, the default API base is `https://coreease.github.io/tg-gifts/api/v1`.

- `GET /index.json` returns the API version, catalog counts, source update time, and endpoint templates.
- `GET /gifts.json` lists synchronized collections; `GET /backdrops.json` lists the unique global backdrop catalog.
- `GET /gifts/{gift-slug}/index.json` returns a collection with its model, pattern, and backdrop records.
- `GET /gifts/{gift-slug}/models.json`, `/patterns.json`, and `/backdrops.json` return one category for a collection.
- `GET /gifts/{gift-slug}/models/{model-slug}.json`, `/patterns/{pattern-slug}.json`, and `/backdrops/{backdrop-slug}.json` return a single item by name-derived slug.

Model records provide absolute SVG (`imageUrl`) and TGS (`animationUrl`) links. Pattern records provide an absolute PNG `imageUrl`. Backdrop records provide two absolute SVG links in `assets.circleSvg` and `assets.squareSvg`; `imageUrl` is an alias for the square image. The circular SVG has transparency outside the circle, while the square SVG fills the canvas without rounded corners. Both are generated using only the backdrop's `centerColor` and `edgeColor`. Identical color pairs share files under `assets/backdrops/`. These files are committed to the repository and their URLs point to GitHub's raw content host.

The media URL base can be changed with `ASSET_PUBLIC_BASE_URL`; the Pages API base can be changed with `GITHUB_PAGES_BASE_URL`.

## Weekly sync and publication

The single workflow runs weekly and can also be started manually. It validates the upstream catalog, downloads missing or invalid model and pattern media, generates or updates the shared backdrop SVGs, regenerates TypeScript and API JSON, type-checks the result, and commits any changes. It removes obsolete generated backdrop files when color palettes change.

GitHub Pages is not enabled yet. To publish the API, select **GitHub Actions** in **Settings → Pages → Build and deployment → Source**. The next manual or scheduled sync will publish the contents of `docs/`.

## Upstream data

The live machine-readable GiftChanges documentation is [`https://api.changes.tg/llm`](https://api.changes.tg/llm).

- `GET /total` returns aggregate catalog counts. `GET /gifts` lists upgradable gifts, and `GET /gift/:gift` returns gift metadata with `models[]`, `backdrops[]`, `symbols[]`, and emoji metadata.
- `GET /emoji/:gift` includes custom-emoji mappings for models, backdrops, and patterns. Some model emoji IDs may be `null`.
- `GET /backdrops/:gift` returns backdrop colors, IDs, rarity, and emoji metadata. The generated backdrop images use only `centerColor` and `edgeColor`.
- Download routes are `/model/:gift/:model.svg`, `/model/:gift/:model.tgs`, `/pattern/:gift/:pattern.png`, and `/original/:id.svg`.
- The sync validates catalog totals and exact item-name sets before writing generated data. It retries transient failures and stops when upstream data is incomplete.

GiftChanges requires visible credit. This credit is provided here and in [`docs/index.md`](index.md), not repeated in each API record.
