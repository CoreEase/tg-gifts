# tg-gifts API

Static JSON endpoints for Telegram gift collections, models, patterns, and backdrops. The weekly sync validates the catalog, manages media assets, generates shared backdrop SVGs, and rebuilds the API data.

- [API reference](API.md)
- [API root document](api/v1/index.json)
- [Gift collection list](api/v1/gifts.json)
- [Global backdrop list](api/v1/backdrops.json)

Every backdrop has a circular SVG and a square SVG generated from its center and edge colors. The images are shared by color pair under the repository's `assets/backdrops/` directory; API records include direct links to both variants.

After GitHub Pages is enabled, the site URL will be `https://coreease.github.io/tg-gifts/` and the API will be below `/api/v1/`. GitHub Pages is not enabled yet.

Powered by [@GiftChanges](https://t.me/GiftChanges) via [api.changes.tg](https://api.changes.tg).
