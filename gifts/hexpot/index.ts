import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5825801628657124140" as const;

export const models = [
  {
    "name": "Amortentia",
    "customEmojiId": "5456648304802687102",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/amortentia.svg",
      "tgs": "gifts/hexpot/assets/models/amortentia.tgs"
    }
  },
  {
    "name": "Defensive",
    "customEmojiId": "5454252000814328233",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/defensive.svg",
      "tgs": "gifts/hexpot/assets/models/defensive.tgs"
    }
  },
  {
    "name": "Felix Felicis",
    "customEmojiId": "5456668439609367338",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/felix-felicis.svg",
      "tgs": "gifts/hexpot/assets/models/felix-felicis.tgs"
    }
  },
  {
    "name": "Fire Storm",
    "customEmojiId": "5456633749158520837",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/fire-storm.svg",
      "tgs": "gifts/hexpot/assets/models/fire-storm.tgs"
    }
  },
  {
    "name": "Gust of Wind",
    "customEmojiId": "5453931699333259940",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/gust-of-wind.svg",
      "tgs": "gifts/hexpot/assets/models/gust-of-wind.tgs"
    }
  },
  {
    "name": "Pikabrew",
    "customEmojiId": "5454371293530972263",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/pikabrew.svg",
      "tgs": "gifts/hexpot/assets/models/pikabrew.tgs"
    }
  },
  {
    "name": "Beholder",
    "customEmojiId": "5454153723372659478",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/beholder.svg",
      "tgs": "gifts/hexpot/assets/models/beholder.tgs"
    }
  },
  {
    "name": "Bubble Bath",
    "customEmojiId": "5456204656155845927",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/bubble-bath.svg",
      "tgs": "gifts/hexpot/assets/models/bubble-bath.tgs"
    }
  },
  {
    "name": "Coldbrew",
    "customEmojiId": "5456565128466031542",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/coldbrew.svg",
      "tgs": "gifts/hexpot/assets/models/coldbrew.tgs"
    }
  },
  {
    "name": "Backstroke",
    "customEmojiId": "5456444920921349796",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/backstroke.svg",
      "tgs": "gifts/hexpot/assets/models/backstroke.tgs"
    }
  },
  {
    "name": "Banana Split",
    "customEmojiId": "5456169132481339673",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/banana-split.svg",
      "tgs": "gifts/hexpot/assets/models/banana-split.tgs"
    }
  },
  {
    "name": "Blueprint",
    "customEmojiId": "5456252248688452613",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/blueprint.svg",
      "tgs": "gifts/hexpot/assets/models/blueprint.tgs"
    }
  },
  {
    "name": "Cherry Bomb",
    "customEmojiId": "5456482330086499596",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/cherry-bomb.svg",
      "tgs": "gifts/hexpot/assets/models/cherry-bomb.tgs"
    }
  },
  {
    "name": "Choco Cloud",
    "customEmojiId": "5456234759581623105",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/choco-cloud.svg",
      "tgs": "gifts/hexpot/assets/models/choco-cloud.tgs"
    }
  },
  {
    "name": "Citrus Bubbles",
    "customEmojiId": "5454034963231956650",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/citrus-bubbles.svg",
      "tgs": "gifts/hexpot/assets/models/citrus-bubbles.tgs"
    }
  },
  {
    "name": "Code Red",
    "customEmojiId": "5456274797266755674",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/code-red.svg",
      "tgs": "gifts/hexpot/assets/models/code-red.tgs"
    }
  },
  {
    "name": "Daiquiri",
    "customEmojiId": "5456508520797068723",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/daiquiri.svg",
      "tgs": "gifts/hexpot/assets/models/daiquiri.tgs"
    }
  },
  {
    "name": "Death Star",
    "customEmojiId": "5453882977224253520",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/death-star.svg",
      "tgs": "gifts/hexpot/assets/models/death-star.tgs"
    }
  },
  {
    "name": "Desert Friend",
    "customEmojiId": "5456590786600657559",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/desert-friend.svg",
      "tgs": "gifts/hexpot/assets/models/desert-friend.tgs"
    }
  },
  {
    "name": "Digital Sap",
    "customEmojiId": "5456417832562623721",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/digital-sap.svg",
      "tgs": "gifts/hexpot/assets/models/digital-sap.tgs"
    }
  },
  {
    "name": "Fine Wine",
    "customEmojiId": "5456331963281465349",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/fine-wine.svg",
      "tgs": "gifts/hexpot/assets/models/fine-wine.tgs"
    }
  },
  {
    "name": "Halloween Brew",
    "customEmojiId": "5454076272227407926",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/halloween-brew.svg",
      "tgs": "gifts/hexpot/assets/models/halloween-brew.tgs"
    }
  },
  {
    "name": "Holiday Spirit",
    "customEmojiId": "5453893864966348143",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/holiday-spirit.svg",
      "tgs": "gifts/hexpot/assets/models/holiday-spirit.tgs"
    }
  },
  {
    "name": "Hypnosis",
    "customEmojiId": "5456263462848060568",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/hypnosis.svg",
      "tgs": "gifts/hexpot/assets/models/hypnosis.tgs"
    }
  },
  {
    "name": "Ice Citrus",
    "customEmojiId": "5454045361347780875",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/ice-citrus.svg",
      "tgs": "gifts/hexpot/assets/models/ice-citrus.tgs"
    }
  },
  {
    "name": "Inky",
    "customEmojiId": "5454243471009276168",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/inky.svg",
      "tgs": "gifts/hexpot/assets/models/inky.tgs"
    }
  },
  {
    "name": "Lava",
    "customEmojiId": "5454086597328791207",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/lava.svg",
      "tgs": "gifts/hexpot/assets/models/lava.tgs"
    }
  },
  {
    "name": "Mad Eye",
    "customEmojiId": "5453893469829358265",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/mad-eye.svg",
      "tgs": "gifts/hexpot/assets/models/mad-eye.tgs"
    }
  },
  {
    "name": "Malibu",
    "customEmojiId": "5453900363251867465",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/malibu.svg",
      "tgs": "gifts/hexpot/assets/models/malibu.tgs"
    }
  },
  {
    "name": "Matrix",
    "customEmojiId": "5456549786842849814",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/matrix.svg",
      "tgs": "gifts/hexpot/assets/models/matrix.tgs"
    }
  },
  {
    "name": "Melon Brew",
    "customEmojiId": "5456313383252941806",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/melon-brew.svg",
      "tgs": "gifts/hexpot/assets/models/melon-brew.tgs"
    }
  },
  {
    "name": "Movie Night",
    "customEmojiId": "5454158022634921809",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/movie-night.svg",
      "tgs": "gifts/hexpot/assets/models/movie-night.tgs"
    }
  },
  {
    "name": "Neon",
    "customEmojiId": "5454060591301811965",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/neon.svg",
      "tgs": "gifts/hexpot/assets/models/neon.tgs"
    }
  },
  {
    "name": "Peachy Fume",
    "customEmojiId": "5456383953860583932",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/peachy-fume.svg",
      "tgs": "gifts/hexpot/assets/models/peachy-fume.tgs"
    }
  },
  {
    "name": "Peppermint",
    "customEmojiId": "5456612712408704881",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/peppermint.svg",
      "tgs": "gifts/hexpot/assets/models/peppermint.tgs"
    }
  },
  {
    "name": "Quicksilver",
    "customEmojiId": "5453948153352969428",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/quicksilver.svg",
      "tgs": "gifts/hexpot/assets/models/quicksilver.tgs"
    }
  },
  {
    "name": "Rainbow Pearl",
    "customEmojiId": "5453979029872861571",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/rainbow-pearl.svg",
      "tgs": "gifts/hexpot/assets/models/rainbow-pearl.tgs"
    }
  },
  {
    "name": "Starlight",
    "customEmojiId": "5454022924438625277",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/starlight.svg",
      "tgs": "gifts/hexpot/assets/models/starlight.tgs"
    }
  },
  {
    "name": "Strike",
    "customEmojiId": "5454297505992824829",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/strike.svg",
      "tgs": "gifts/hexpot/assets/models/strike.tgs"
    }
  },
  {
    "name": "Sunset",
    "customEmojiId": "5453916443609423672",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/sunset.svg",
      "tgs": "gifts/hexpot/assets/models/sunset.tgs"
    }
  },
  {
    "name": "Tornado",
    "customEmojiId": "5456515783586767330",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/hexpot/assets/models/tornado.svg",
      "tgs": "gifts/hexpot/assets/models/tornado.tgs"
    }
  },
  {
    "name": "Firefly",
    "customEmojiId": "5456658866127265295",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/hexpot/assets/models/firefly.svg",
      "tgs": "gifts/hexpot/assets/models/firefly.tgs"
    }
  },
  {
    "name": "Butterbeer",
    "customEmojiId": "5454418353487635944",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/butterbeer.svg",
      "tgs": "gifts/hexpot/assets/models/butterbeer.tgs"
    }
  },
  {
    "name": "Fairy Fluff",
    "customEmojiId": "5458523994330261127",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/fairy-fluff.svg",
      "tgs": "gifts/hexpot/assets/models/fairy-fluff.tgs"
    }
  },
  {
    "name": "Golden Glow",
    "customEmojiId": "5454133764659634640",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/golden-glow.svg",
      "tgs": "gifts/hexpot/assets/models/golden-glow.tgs"
    }
  },
  {
    "name": "Greenwitch",
    "customEmojiId": "5454107097207693391",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/greenwitch.svg",
      "tgs": "gifts/hexpot/assets/models/greenwitch.tgs"
    }
  },
  {
    "name": "Gummy Worm",
    "customEmojiId": "5461018184918261765",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/gummy-worm.svg",
      "tgs": "gifts/hexpot/assets/models/gummy-worm.tgs"
    }
  },
  {
    "name": "Heat Map",
    "customEmojiId": "5461033251663536090",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/heat-map.svg",
      "tgs": "gifts/hexpot/assets/models/heat-map.tgs"
    }
  },
  {
    "name": "Minty Fresh",
    "customEmojiId": "5454249140366106249",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/minty-fresh.svg",
      "tgs": "gifts/hexpot/assets/models/minty-fresh.tgs"
    }
  },
  {
    "name": "Moonlight",
    "customEmojiId": "5456366400329248191",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/moonlight.svg",
      "tgs": "gifts/hexpot/assets/models/moonlight.tgs"
    }
  },
  {
    "name": "Night Mixture",
    "customEmojiId": "5458400492545664738",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/night-mixture.svg",
      "tgs": "gifts/hexpot/assets/models/night-mixture.tgs"
    }
  },
  {
    "name": "Petalwine",
    "customEmojiId": "5453966106316267990",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/petalwine.svg",
      "tgs": "gifts/hexpot/assets/models/petalwine.tgs"
    }
  },
  {
    "name": "Purple Haze",
    "customEmojiId": "5458779639373656036",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/purple-haze.svg",
      "tgs": "gifts/hexpot/assets/models/purple-haze.tgs"
    }
  },
  {
    "name": "Red Shift",
    "customEmojiId": "5456342941217872817",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/red-shift.svg",
      "tgs": "gifts/hexpot/assets/models/red-shift.tgs"
    }
  },
  {
    "name": "Ruby Ocean",
    "customEmojiId": "5460797432189178714",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/ruby-ocean.svg",
      "tgs": "gifts/hexpot/assets/models/ruby-ocean.tgs"
    }
  },
  {
    "name": "Soft Coral",
    "customEmojiId": "5456405879668629242",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/soft-coral.svg",
      "tgs": "gifts/hexpot/assets/models/soft-coral.tgs"
    }
  },
  {
    "name": "Spectral Dew",
    "customEmojiId": "5460876085925274793",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/spectral-dew.svg",
      "tgs": "gifts/hexpot/assets/models/spectral-dew.tgs"
    }
  },
  {
    "name": "Aurora",
    "customEmojiId": "5458811362002101361",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/aurora.svg",
      "tgs": "gifts/hexpot/assets/models/aurora.tgs"
    }
  },
  {
    "name": "Burned Love",
    "customEmojiId": "5460751484629048087",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/burned-love.svg",
      "tgs": "gifts/hexpot/assets/models/burned-love.tgs"
    }
  },
  {
    "name": "Burnt Petals",
    "customEmojiId": "5458778342293531430",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/burnt-petals.svg",
      "tgs": "gifts/hexpot/assets/models/burnt-petals.tgs"
    }
  },
  {
    "name": "Burnt Roses",
    "customEmojiId": "5460667432119064124",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/burnt-roses.svg",
      "tgs": "gifts/hexpot/assets/models/burnt-roses.tgs"
    }
  },
  {
    "name": "Honeydew",
    "customEmojiId": "5458588809681725667",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/honeydew.svg",
      "tgs": "gifts/hexpot/assets/models/honeydew.tgs"
    }
  },
  {
    "name": "Red Mirage",
    "customEmojiId": "5460793094272211422",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/red-mirage.svg",
      "tgs": "gifts/hexpot/assets/models/red-mirage.tgs"
    }
  },
  {
    "name": "Violet Veil",
    "customEmojiId": "5458624518039823957",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/hexpot/assets/models/violet-veil.svg",
      "tgs": "gifts/hexpot/assets/models/violet-veil.tgs"
    }
  },
  {
    "name": "Citrus",
    "customEmojiId": "5458603051793278807",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/citrus.svg",
      "tgs": "gifts/hexpot/assets/models/citrus.tgs"
    }
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5460752373687292137",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/full-moon.svg",
      "tgs": "gifts/hexpot/assets/models/full-moon.tgs"
    }
  },
  {
    "name": "Indigo Storm",
    "customEmojiId": "5458817422200956832",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/indigo-storm.svg",
      "tgs": "gifts/hexpot/assets/models/indigo-storm.tgs"
    }
  },
  {
    "name": "Jade Grog",
    "customEmojiId": "5460708882848440124",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/jade-grog.svg",
      "tgs": "gifts/hexpot/assets/models/jade-grog.tgs"
    }
  },
  {
    "name": "Sangria",
    "customEmojiId": "5458667235784548858",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/sangria.svg",
      "tgs": "gifts/hexpot/assets/models/sangria.tgs"
    }
  },
  {
    "name": "Scarlet Sun",
    "customEmojiId": "5458834262767724450",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/scarlet-sun.svg",
      "tgs": "gifts/hexpot/assets/models/scarlet-sun.tgs"
    }
  },
  {
    "name": "Skygold",
    "customEmojiId": "5458841882039708674",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/skygold.svg",
      "tgs": "gifts/hexpot/assets/models/skygold.tgs"
    }
  },
  {
    "name": "Skywash",
    "customEmojiId": "5460967345390377049",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/skywash.svg",
      "tgs": "gifts/hexpot/assets/models/skywash.tgs"
    }
  },
  {
    "name": "Vermilion",
    "customEmojiId": "5460975823655820026",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/hexpot/assets/models/vermilion.svg",
      "tgs": "gifts/hexpot/assets/models/vermilion.tgs"
    }
  },
  {
    "name": "Amethyst",
    "customEmojiId": "5460910621757301254",
    "rarityPermille": 26,
    "originalRarityPermille": 26,
    "rarity": 2.6,
    "originalRarity": 2.6,
    "assets": {
      "svg": "gifts/hexpot/assets/models/amethyst.svg",
      "tgs": "gifts/hexpot/assets/models/amethyst.tgs"
    }
  },
  {
    "name": "Blue Inferno",
    "customEmojiId": "5458434019060378777",
    "rarityPermille": 26,
    "originalRarityPermille": 26,
    "rarity": 2.6,
    "originalRarity": 2.6,
    "assets": {
      "svg": "gifts/hexpot/assets/models/blue-inferno.svg",
      "tgs": "gifts/hexpot/assets/models/blue-inferno.tgs"
    }
  },
  {
    "name": "Fairy",
    "customEmojiId": "5458786034579958601",
    "rarityPermille": 26,
    "originalRarityPermille": 26,
    "rarity": 2.6,
    "originalRarity": 2.6,
    "assets": {
      "svg": "gifts/hexpot/assets/models/fairy.svg",
      "tgs": "gifts/hexpot/assets/models/fairy.tgs"
    }
  },
  {
    "name": "Orchid Volt",
    "customEmojiId": "5458402970741794751",
    "rarityPermille": 26,
    "originalRarityPermille": 26,
    "rarity": 2.6,
    "originalRarity": 2.6,
    "assets": {
      "svg": "gifts/hexpot/assets/models/orchid-volt.svg",
      "tgs": "gifts/hexpot/assets/models/orchid-volt.tgs"
    }
  },
  {
    "name": "Potpourri",
    "customEmojiId": "5458660943657464120",
    "rarityPermille": 26,
    "originalRarityPermille": 26,
    "rarity": 2.6,
    "originalRarity": 2.6,
    "assets": {
      "svg": "gifts/hexpot/assets/models/potpourri.svg",
      "tgs": "gifts/hexpot/assets/models/potpourri.tgs"
    }
  },
  {
    "name": "Rusty",
    "customEmojiId": "5458772999354216495",
    "rarityPermille": 26,
    "originalRarityPermille": 26,
    "rarity": 2.6,
    "originalRarity": 2.6,
    "assets": {
      "svg": "gifts/hexpot/assets/models/rusty.svg",
      "tgs": "gifts/hexpot/assets/models/rusty.tgs"
    }
  },
  {
    "name": "Witchy",
    "customEmojiId": "5460828287234236945",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/hexpot/assets/models/witchy.svg",
      "tgs": "gifts/hexpot/assets/models/witchy.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/ball.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/bee.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/boat.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/book.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/cash.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/chest.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/coin.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/drug.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/gold.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/key.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/kite.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/knight.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/lily.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/palette.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/planet.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/plum.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/plume.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/rook.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/shell.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/shield.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/sun.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/viking.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/wasp.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Crow",
    "customEmojiId": "5199426733534641259",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/crow.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Eyeball",
    "customEmojiId": "5199500791655727782",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/eyeball.png"
    }
  },
  {
    "name": "Half Moon",
    "customEmojiId": "5199418019046001807",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/half-moon.png"
    }
  },
  {
    "name": "Happy Smile",
    "customEmojiId": "5199771185616816222",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/happy-smile.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Lollipop",
    "customEmojiId": "5199604863008277923",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/lollipop.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/moon.png"
    }
  },
  {
    "name": "Poison Drop",
    "customEmojiId": "5199690302792698006",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/poison-drop.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Flying Witch",
    "customEmojiId": "5199639686603112376",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/flying-witch.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Nice Ghost",
    "customEmojiId": "5199814161059579213",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/nice-ghost.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/potion.png"
    }
  },
  {
    "name": "Scarecrow",
    "customEmojiId": "5199734102869184064",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/scarecrow.png"
    }
  },
  {
    "name": "Severed Hand",
    "customEmojiId": "5199465194966780844",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/severed-hand.png"
    }
  },
  {
    "name": "Autumn Leaves",
    "customEmojiId": "5199868191748166568",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/autumn-leaves.png"
    }
  },
  {
    "name": "Black Widow",
    "customEmojiId": "5199544041976401500",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/black-widow.png"
    }
  },
  {
    "name": "Bloody Axe",
    "customEmojiId": "5199755874058406442",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/bloody-axe.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/candle.png"
    }
  },
  {
    "name": "Cauldron",
    "customEmojiId": "5199831577151966735",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/cauldron.png"
    }
  },
  {
    "name": "Coffin",
    "customEmojiId": "5199800696337107918",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/coffin.png"
    }
  },
  {
    "name": "Evil Pumpkin",
    "customEmojiId": "5199669966122550110",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/evil-pumpkin.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Gravestone",
    "customEmojiId": "5199458662321521472",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/gravestone.png"
    }
  },
  {
    "name": "Grim Reaper",
    "customEmojiId": "5199657261609290637",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/grim-reaper.png"
    }
  },
  {
    "name": "Human Scull",
    "customEmojiId": "5199616090052791141",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/human-scull.png"
    }
  },
  {
    "name": "Jaws",
    "customEmojiId": "5199489388517558658",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/jaws.png"
    }
  },
  {
    "name": "Night Bats",
    "customEmojiId": "5199725388380543708",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/night-bats.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/skull.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Spooky Cat",
    "customEmojiId": "5199795890268706133",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/spooky-cat.png"
    }
  },
  {
    "name": "Treats",
    "customEmojiId": "5199923330538311116",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/treats.png"
    }
  },
  {
    "name": "Voodoo Doll",
    "customEmojiId": "5199629937027353893",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/voodoo-doll.png"
    }
  },
  {
    "name": "Witch’s Hat",
    "customEmojiId": null,
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/hexpot/assets/patterns/witch-s-hat.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
  {
    "name": "Cobalt Blue",
    "backdropId": 53,
    "customEmojiId": "5375508658819986305",
    "centerColor": 6326479,
    "edgeColor": 5333688,
    "patternColor": 1254524,
    "textColor": 12768245,
    "hex": {
      "centerColor": "#6088cf",
      "edgeColor": "#5162b8",
      "patternColor": "#13247c",
      "textColor": "#c2d3f5"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Coral Red",
    "backdropId": 25,
    "customEmojiId": "5377303611552326657",
    "centerColor": 14322027,
    "edgeColor": 12870991,
    "patternColor": 8983040,
    "textColor": 16767442,
    "hex": {
      "centerColor": "#da896b",
      "edgeColor": "#c4654f",
      "patternColor": "#891200",
      "textColor": "#ffd9d2"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Emerald",
    "backdropId": 13,
    "customEmojiId": "5375465786456438121",
    "centerColor": 7914885,
    "edgeColor": 4366705,
    "patternColor": 25906,
    "textColor": 12188121,
    "hex": {
      "centerColor": "#78c585",
      "edgeColor": "#42a171",
      "patternColor": "#006532",
      "textColor": "#b9f9d9"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "English Violet",
    "backdropId": 32,
    "customEmojiId": "5377317497181595389",
    "centerColor": 11634363,
    "edgeColor": 8870545,
    "patternColor": 5513823,
    "textColor": 15124461,
    "hex": {
      "centerColor": "#b186bb",
      "edgeColor": "#875a91",
      "patternColor": "#54225f",
      "textColor": "#e6c7ed"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Khaki Green",
    "backdropId": 37,
    "customEmojiId": "5377549107587998846",
    "centerColor": 11382896,
    "edgeColor": 7044436,
    "patternColor": 3756059,
    "textColor": 13887163,
    "hex": {
      "centerColor": "#adb070",
      "edgeColor": "#6b7d54",
      "patternColor": "#39501b",
      "textColor": "#d3e6bb"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Mystic Pearl",
    "backdropId": 29,
    "customEmojiId": "5375343865219805643",
    "centerColor": 13667181,
    "edgeColor": 11556720,
    "patternColor": 10159398,
    "textColor": 16702944,
    "hex": {
      "centerColor": "#d08b6d",
      "edgeColor": "#b05770",
      "patternColor": "#9b0526",
      "textColor": "#fedde0"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Platinum",
    "backdropId": 42,
    "customEmojiId": "5375209243764877171",
    "centerColor": 11710119,
    "edgeColor": 8946814,
    "patternColor": 4012077,
    "textColor": 15329250,
    "hex": {
      "centerColor": "#b2aea7",
      "edgeColor": "#88847e",
      "patternColor": "#3d382d",
      "textColor": "#e9e7e2"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Pure Gold",
    "backdropId": 20,
    "customEmojiId": "5377566347586724653",
    "centerColor": 13413185,
    "edgeColor": 9993010,
    "patternColor": 7355392,
    "textColor": 16770475,
    "hex": {
      "centerColor": "#ccab41",
      "edgeColor": "#987b32",
      "patternColor": "#703c00",
      "textColor": "#ffe5ab"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Raspberry",
    "backdropId": 28,
    "customEmojiId": "5375565034560713219",
    "centerColor": 14711685,
    "edgeColor": 11950464,
    "patternColor": 8980024,
    "textColor": 16766694,
    "hex": {
      "centerColor": "#e07b85",
      "edgeColor": "#b65980",
      "patternColor": "#890638",
      "textColor": "#ffd6e6"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Silver Blue",
    "backdropId": 45,
    "customEmojiId": "5375068162679139533",
    "centerColor": 8430776,
    "edgeColor": 6323345,
    "patternColor": 1390411,
    "textColor": 13231348,
    "hex": {
      "centerColor": "#80a4b8",
      "edgeColor": "#607c91",
      "patternColor": "#15374b",
      "textColor": "#c9e4f4"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Amber",
    "backdropId": 21,
    "customEmojiId": "5375590628270831231",
    "centerColor": 14332741,
    "edgeColor": 11632682,
    "patternColor": 8007936,
    "textColor": 16772551,
    "hex": {
      "centerColor": "#dab345",
      "edgeColor": "#b1802a",
      "patternColor": "#7a3100",
      "textColor": "#ffedc7"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Azure Blue",
    "backdropId": 9,
    "customEmojiId": "5375057773153254940",
    "centerColor": 6140363,
    "edgeColor": 4492203,
    "patternColor": 151668,
    "textColor": 11922687,
    "hex": {
      "centerColor": "#5db1cb",
      "edgeColor": "#448bab",
      "patternColor": "#025074",
      "textColor": "#b5ecff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Cappuccino",
    "backdropId": 39,
    "customEmojiId": "5375084663943491762",
    "centerColor": 11636862,
    "edgeColor": 8151894,
    "patternColor": 4862502,
    "textColor": 15455432,
    "hex": {
      "centerColor": "#b1907e",
      "edgeColor": "#7c6356",
      "patternColor": "#4a3226",
      "textColor": "#ebd4c8"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Chocolate",
    "backdropId": 59,
    "customEmojiId": "5375145089838378346",
    "centerColor": 10776152,
    "edgeColor": 7619643,
    "patternColor": 4065794,
    "textColor": 14988972,
    "hex": {
      "centerColor": "#a46e58",
      "edgeColor": "#74443b",
      "patternColor": "#3e0a02",
      "textColor": "#e4b6ac"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Dark Lilac",
    "backdropId": 31,
    "customEmojiId": "5375595296900280612",
    "centerColor": 11632037,
    "edgeColor": 9197434,
    "patternColor": 6629458,
    "textColor": 15779042,
    "hex": {
      "centerColor": "#b17da5",
      "edgeColor": "#8c577a",
      "patternColor": "#652852",
      "textColor": "#f0c4e2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Electric Indigo",
    "backdropId": 4,
    "customEmojiId": "5375368406662934349",
    "centerColor": 11108595,
    "edgeColor": 5989080,
    "patternColor": 3613355,
    "textColor": 14211327,
    "hex": {
      "centerColor": "#a980f3",
      "edgeColor": "#5b62d8",
      "patternColor": "#3722ab",
      "textColor": "#d8d8ff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Electric Purple",
    "backdropId": 1,
    "customEmojiId": "5375123176915234503",
    "centerColor": 13267142,
    "edgeColor": 9855700,
    "patternColor": 6426548,
    "textColor": 15453951,
    "hex": {
      "centerColor": "#ca70c6",
      "edgeColor": "#9662d4",
      "patternColor": "#620fb4",
      "textColor": "#ebceff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Fandango",
    "backdropId": 30,
    "customEmojiId": "5377665664410477598",
    "centerColor": 14846646,
    "edgeColor": 10770571,
    "patternColor": 9307470,
    "textColor": 16762859,
    "hex": {
      "centerColor": "#e28ab6",
      "edgeColor": "#a4588b",
      "patternColor": "#8e054e",
      "textColor": "#ffc7eb"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "French Blue",
    "backdropId": 54,
    "customEmojiId": "5375333269535485469",
    "centerColor": 6069188,
    "edgeColor": 3634074,
    "patternColor": 473948,
    "textColor": 12706809,
    "hex": {
      "centerColor": "#5c9bc4",
      "edgeColor": "#37739a",
      "patternColor": "#073b5c",
      "textColor": "#c1e3f9"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Indigo Dye",
    "backdropId": 47,
    "customEmojiId": "5375159374899604169",
    "centerColor": 5470609,
    "edgeColor": 4285561,
    "patternColor": 203561,
    "textColor": 12770542,
    "hex": {
      "centerColor": "#537991",
      "edgeColor": "#416479",
      "patternColor": "#031b29",
      "textColor": "#c2dcee"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Jade Green",
    "backdropId": 56,
    "customEmojiId": "5375392875091620167",
    "centerColor": 5620892,
    "edgeColor": 3905911,
    "patternColor": 280881,
    "textColor": 12517095,
    "hex": {
      "centerColor": "#55c49c",
      "edgeColor": "#3b9977",
      "patternColor": "#044931",
      "textColor": "#befee7"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Lemongrass",
    "backdropId": 17,
    "customEmojiId": "5375580127075793214",
    "centerColor": 11450458,
    "edgeColor": 5608261,
    "patternColor": 4614663,
    "textColor": 14217922,
    "hex": {
      "centerColor": "#aeb85a",
      "edgeColor": "#559345",
      "patternColor": "#466a07",
      "textColor": "#d8f2c2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Midnight Blue",
    "backdropId": 48,
    "customEmojiId": "5375050733701852215",
    "centerColor": 6056325,
    "edgeColor": 3489879,
    "patternColor": 199192,
    "textColor": 12569824,
    "hex": {
      "centerColor": "#5c6985",
      "edgeColor": "#354057",
      "patternColor": "#030a18",
      "textColor": "#bfcce0"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Navy Blue",
    "backdropId": 6,
    "customEmojiId": "5375095358412057425",
    "centerColor": 7118557,
    "edgeColor": 6057673,
    "patternColor": 1194402,
    "textColor": 13885951,
    "hex": {
      "centerColor": "#6c9edd",
      "edgeColor": "#5c6ec9",
      "patternColor": "#1239a2",
      "textColor": "#d3e1ff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Neon Blue",
    "backdropId": 5,
    "customEmojiId": "5375064164064586786",
    "centerColor": 7706361,
    "edgeColor": 6841060,
    "patternColor": 2631868,
    "textColor": 13622783,
    "hex": {
      "centerColor": "#7596f9",
      "edgeColor": "#6862e4",
      "patternColor": "#2828bc",
      "textColor": "#cfddff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Pine Green",
    "backdropId": 34,
    "customEmojiId": "5375456049765578111",
    "centerColor": 7055740,
    "edgeColor": 4094320,
    "patternColor": 739379,
    "textColor": 14218725,
    "hex": {
      "centerColor": "#6ba97c",
      "edgeColor": "#3e7970",
      "patternColor": "#0b4833",
      "textColor": "#d8f5e5"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Roman Silver",
    "backdropId": 43,
    "customEmojiId": "5375482502469152633",
    "centerColor": 10725557,
    "edgeColor": 8159370,
    "patternColor": 4146512,
    "textColor": 14344162,
    "hex": {
      "centerColor": "#a3a8b5",
      "edgeColor": "#7c808a",
      "patternColor": "#3f4550",
      "textColor": "#dadfe2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Rosewood",
    "backdropId": 40,
    "customEmojiId": "5375125960054043180",
    "centerColor": 12024439,
    "edgeColor": 8473682,
    "patternColor": 5577762,
    "textColor": 15583949,
    "hex": {
      "centerColor": "#b77a77",
      "edgeColor": "#814c52",
      "patternColor": "#551c22",
      "textColor": "#edcacd"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Sapphire",
    "backdropId": 7,
    "customEmojiId": "5377394836657695827",
    "centerColor": 5809096,
    "edgeColor": 5470658,
    "patternColor": 869814,
    "textColor": 12705535,
    "hex": {
      "centerColor": "#58a3c8",
      "edgeColor": "#5379c2",
      "patternColor": "#0d45b6",
      "textColor": "#c1deff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Satin Gold",
    "backdropId": 19,
    "customEmojiId": "5377843106689344328",
    "centerColor": 12557127,
    "edgeColor": 9271097,
    "patternColor": 6109952,
    "textColor": 16704681,
    "hex": {
      "centerColor": "#bf9b47",
      "edgeColor": "#8d7739",
      "patternColor": "#5d3b00",
      "textColor": "#fee4a9"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Aquamarine",
    "backdropId": 11,
    "customEmojiId": "5377657950649214703",
    "centerColor": 6336917,
    "edgeColor": 4631476,
    "patternColor": 221031,
    "textColor": 13106686,
    "hex": {
      "centerColor": "#60b195",
      "edgeColor": "#46abb4",
      "patternColor": "#035f67",
      "textColor": "#c7fdfe"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Battleship Grey",
    "backdropId": 50,
    "customEmojiId": "5375258223571925187",
    "centerColor": 9211013,
    "edgeColor": 7105638,
    "patternColor": 2828832,
    "textColor": 13618884,
    "hex": {
      "centerColor": "#8c8c85",
      "edgeColor": "#6c6c66",
      "patternColor": "#2b2a20",
      "textColor": "#cfcec4"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Black",
    "backdropId": 0,
    "customEmojiId": "5377437666071568792",
    "centerColor": 3553080,
    "edgeColor": 921359,
    "patternColor": 7104616,
    "textColor": 9211793,
    "hex": {
      "centerColor": "#363738",
      "edgeColor": "#0e0f0f",
      "patternColor": "#6c6868",
      "textColor": "#8c8f91"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Burgundy",
    "backdropId": 46,
    "customEmojiId": "5375243216956193305",
    "centerColor": 10706534,
    "edgeColor": 7160138,
    "patternColor": 3408647,
    "textColor": 15187136,
    "hex": {
      "centerColor": "#a35e66",
      "edgeColor": "#6d414a",
      "patternColor": "#340307",
      "textColor": "#e7bcc0"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Caramel",
    "backdropId": 22,
    "customEmojiId": "5375311837648678407",
    "centerColor": 13670706,
    "edgeColor": 12022833,
    "patternColor": 8205824,
    "textColor": 16767411,
    "hex": {
      "centerColor": "#d09932",
      "edgeColor": "#b77431",
      "patternColor": "#7d3600",
      "textColor": "#ffd9b3"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Carrot Juice",
    "backdropId": 24,
    "customEmojiId": "5377603262830633515",
    "centerColor": 14391399,
    "edgeColor": 13070159,
    "patternColor": 9314560,
    "textColor": 16766922,
    "hex": {
      "centerColor": "#db9867",
      "edgeColor": "#c76f4f",
      "patternColor": "#8e2100",
      "textColor": "#ffd7ca"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Chestnut",
    "backdropId": 58,
    "customEmojiId": "5375124757463201258",
    "centerColor": 12480340,
    "edgeColor": 10045496,
    "patternColor": 6296840,
    "textColor": 16697017,
    "hex": {
      "centerColor": "#be6f54",
      "edgeColor": "#994838",
      "patternColor": "#601508",
      "textColor": "#fec6b9"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Copper",
    "backdropId": 57,
    "customEmojiId": "5375444380339435270",
    "centerColor": 13665878,
    "edgeColor": 10315057,
    "patternColor": 6301953,
    "textColor": 16046270,
    "hex": {
      "centerColor": "#d08656",
      "edgeColor": "#9d6531",
      "patternColor": "#602901",
      "textColor": "#f4d8be"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Cyberpunk",
    "backdropId": 3,
    "customEmojiId": "5375292097978986361",
    "centerColor": 8753139,
    "edgeColor": 8806355,
    "patternColor": 4397222,
    "textColor": 14735871,
    "hex": {
      "centerColor": "#858ff3",
      "edgeColor": "#865fd3",
      "patternColor": "#4318a6",
      "textColor": "#e0d9ff"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Desert Sand",
    "backdropId": 38,
    "customEmojiId": "5375295684276677732",
    "centerColor": 11771778,
    "edgeColor": 8287067,
    "patternColor": 5260329,
    "textColor": 15918541,
    "hex": {
      "centerColor": "#b39f82",
      "edgeColor": "#7e735b",
      "patternColor": "#504429",
      "textColor": "#f2e5cd"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Grape",
    "backdropId": 52,
    "customEmojiId": "5375533853098147113",
    "centerColor": 10319041,
    "edgeColor": 7949728,
    "patternColor": 4065899,
    "textColor": 14728702,
    "hex": {
      "centerColor": "#9d74c1",
      "edgeColor": "#794da0",
      "patternColor": "#3e0a6b",
      "textColor": "#e0bdfe"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Hunter Green",
    "backdropId": 35,
    "customEmojiId": "5375046438734558335",
    "centerColor": 9416312,
    "edgeColor": 4948571,
    "patternColor": 1853727,
    "textColor": 14218718,
    "hex": {
      "centerColor": "#8fae78",
      "edgeColor": "#4b825b",
      "patternColor": "#1c491f",
      "textColor": "#d8f5de"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Ivory White",
    "backdropId": 41,
    "customEmojiId": "5375500438252580046",
    "centerColor": 12236465,
    "edgeColor": 10591639,
    "patternColor": 6709074,
    "textColor": 16119026,
    "hex": {
      "centerColor": "#bab6b1",
      "edgeColor": "#a19d97",
      "patternColor": "#665f52",
      "textColor": "#f5f4f2"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Lavender",
    "backdropId": 2,
    "customEmojiId": "5375569106189712018",
    "centerColor": 12028388,
    "edgeColor": 9067196,
    "patternColor": 5968043,
    "textColor": 15258111,
    "hex": {
      "centerColor": "#b789e4",
      "edgeColor": "#8a5abc",
      "patternColor": "#5b10ab",
      "textColor": "#e8d1ff"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Light Olive",
    "backdropId": 18,
    "customEmojiId": "5375600553940250812",
    "centerColor": 12758884,
    "edgeColor": 8945221,
    "patternColor": 5852164,
    "textColor": 16116668,
    "hex": {
      "centerColor": "#c2af64",
      "edgeColor": "#887e45",
      "patternColor": "#594c04",
      "textColor": "#f5ebbc"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Malachite",
    "backdropId": 15,
    "customEmojiId": "5377519721421758750",
    "centerColor": 9811031,
    "edgeColor": 4036437,
    "patternColor": 289542,
    "textColor": 12775358,
    "hex": {
      "centerColor": "#95b457",
      "edgeColor": "#3d9755",
      "patternColor": "#046b06",
      "textColor": "#c2efbe"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Mint Green",
    "backdropId": 14,
    "customEmojiId": "5375453017518666054",
    "centerColor": 8309634,
    "edgeColor": 4562522,
    "patternColor": 158498,
    "textColor": 12451788,
    "hex": {
      "centerColor": "#7ecb82",
      "edgeColor": "#459e5a",
      "patternColor": "#026b22",
      "textColor": "#bdffcc"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Moonstone",
    "backdropId": 33,
    "customEmojiId": "5375335404134231481",
    "centerColor": 8303028,
    "edgeColor": 5800848,
    "patternColor": 1459538,
    "textColor": 14349821,
    "hex": {
      "centerColor": "#7eb1b4",
      "edgeColor": "#588390",
      "patternColor": "#164552",
      "textColor": "#daf5fd"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Onyx Black",
    "backdropId": 49,
    "customEmojiId": "5377775263385937055",
    "centerColor": 5067348,
    "edgeColor": 3225144,
    "patternColor": 0,
    "textColor": 11119533,
    "hex": {
      "centerColor": "#4d5254",
      "edgeColor": "#313638",
      "patternColor": "#000000",
      "textColor": "#a9abad"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Orange",
    "backdropId": 23,
    "customEmojiId": "5375479315603420454",
    "centerColor": 13736506,
    "edgeColor": 12611399,
    "patternColor": 10303751,
    "textColor": 16769475,
    "hex": {
      "centerColor": "#d19a3a",
      "edgeColor": "#c06f47",
      "patternColor": "#9d3907",
      "textColor": "#ffe1c3"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Pacific Cyan",
    "backdropId": 10,
    "customEmojiId": "5375176666437938248",
    "centerColor": 5947046,
    "edgeColor": 4036026,
    "patternColor": 156813,
    "textColor": 11988991,
    "hex": {
      "centerColor": "#5abea6",
      "edgeColor": "#3d95ba",
      "patternColor": "#02648d",
      "textColor": "#b6efff"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Pacific Green",
    "backdropId": 12,
    "customEmojiId": "5375523141449707206",
    "centerColor": 7325587,
    "edgeColor": 3906692,
    "patternColor": 24905,
    "textColor": 13041648,
    "hex": {
      "centerColor": "#6fc793",
      "edgeColor": "#3b9c84",
      "patternColor": "#006149",
      "textColor": "#c6fff0"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Persimmon",
    "backdropId": 26,
    "customEmojiId": "5377611079671113314",
    "centerColor": 15181658,
    "edgeColor": 12937055,
    "patternColor": 11341312,
    "textColor": 16770263,
    "hex": {
      "centerColor": "#e7a75a",
      "edgeColor": "#c5675f",
      "patternColor": "#ad0e00",
      "textColor": "#ffe4d7"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Pistachio",
    "backdropId": 36,
    "customEmojiId": "5375280450027679837",
    "centerColor": 9941116,
    "edgeColor": 6062412,
    "patternColor": 2639643,
    "textColor": 14283465,
    "hex": {
      "centerColor": "#97b07c",
      "edgeColor": "#5c814c",
      "patternColor": "#28471b",
      "textColor": "#d9f2c9"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Purple",
    "backdropId": 51,
    "customEmojiId": "5375106490967289982",
    "centerColor": 11431086,
    "edgeColor": 8669060,
    "patternColor": 4656199,
    "textColor": 15977459,
    "hex": {
      "centerColor": "#ae6cae",
      "edgeColor": "#844784",
      "patternColor": "#470c47",
      "textColor": "#f3cbf3"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Shamrock Green",
    "backdropId": 16,
    "customEmojiId": "5377843866898555150",
    "centerColor": 9089379,
    "edgeColor": 5608261,
    "patternColor": 1207040,
    "textColor": 14023624,
    "hex": {
      "centerColor": "#8ab163",
      "edgeColor": "#559345",
      "patternColor": "#126b00",
      "textColor": "#d5fbc8"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Sky Blue",
    "backdropId": 8,
    "customEmojiId": "5375428136773120397",
    "centerColor": 5813448,
    "edgeColor": 5475266,
    "patternColor": 483483,
    "textColor": 13494525,
    "hex": {
      "centerColor": "#58b4c8",
      "edgeColor": "#538bc2",
      "patternColor": "#07609b",
      "textColor": "#cde8fd"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Steel Grey",
    "backdropId": 44,
    "customEmojiId": "5377767863157283654",
    "centerColor": 9937580,
    "edgeColor": 6517372,
    "patternColor": 3360082,
    "textColor": 14673128,
    "hex": {
      "centerColor": "#97a2ac",
      "edgeColor": "#63727c",
      "patternColor": "#334552",
      "textColor": "#dfe4e8"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Strawberry",
    "backdropId": 27,
    "customEmojiId": "5377810976039004691",
    "centerColor": 14519919,
    "edgeColor": 12016224,
    "patternColor": 11078668,
    "textColor": 16765907,
    "hex": {
      "centerColor": "#dd8e6f",
      "edgeColor": "#b75a60",
      "patternColor": "#a90c0c",
      "textColor": "#ffd3d3"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  },
  {
    "name": "Turquoise",
    "backdropId": 55,
    "customEmojiId": "5375084470669966301",
    "centerColor": 6209720,
    "edgeColor": 4035214,
    "patternColor": 1135436,
    "textColor": 12450034,
    "hex": {
      "centerColor": "#5ec0b8",
      "edgeColor": "#3d928e",
      "patternColor": "#11534c",
      "textColor": "#bdf8f2"
    },
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "hexpot", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
