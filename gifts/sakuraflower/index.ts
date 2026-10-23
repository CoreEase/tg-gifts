import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5167939598143193218" as const;

export const models = [
  {
    "name": "Flowey",
    "customEmojiId": "5321060727048398789",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/flowey.svg",
      "tgs": "gifts/sakuraflower/assets/models/flowey.tgs"
    }
  },
  {
    "name": "Carnation",
    "customEmojiId": "5318991149812185555",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/carnation.svg",
      "tgs": "gifts/sakuraflower/assets/models/carnation.tgs"
    }
  },
  {
    "name": "Dog Flower",
    "customEmojiId": "5319203974031635238",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/dog-flower.svg",
      "tgs": "gifts/sakuraflower/assets/models/dog-flower.tgs"
    }
  },
  {
    "name": "Meower",
    "customEmojiId": "5318987164082533430",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/meower.svg",
      "tgs": "gifts/sakuraflower/assets/models/meower.tgs"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5319017207378766106",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/sunflower.svg",
      "tgs": "gifts/sakuraflower/assets/models/sunflower.tgs"
    }
  },
  {
    "name": "Wilted",
    "customEmojiId": "5321292792721335488",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/wilted.svg",
      "tgs": "gifts/sakuraflower/assets/models/wilted.tgs"
    }
  },
  {
    "name": "Zap Aster",
    "customEmojiId": "5318821507193924610",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/zap-aster.svg",
      "tgs": "gifts/sakuraflower/assets/models/zap-aster.tgs"
    }
  },
  {
    "name": "Big Bang",
    "customEmojiId": "5318957850930737006",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/big-bang.svg",
      "tgs": "gifts/sakuraflower/assets/models/big-bang.tgs"
    }
  },
  {
    "name": "Blazing Dusk",
    "customEmojiId": "5321448708624113863",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/blazing-dusk.svg",
      "tgs": "gifts/sakuraflower/assets/models/blazing-dusk.tgs"
    }
  },
  {
    "name": "Bubblia",
    "customEmojiId": "5319226329336408430",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/bubblia.svg",
      "tgs": "gifts/sakuraflower/assets/models/bubblia.tgs"
    }
  },
  {
    "name": "Bull’s Eye",
    "customEmojiId": "5321118773531402196",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/bull-s-eye.svg",
      "tgs": "gifts/sakuraflower/assets/models/bull-s-eye.tgs"
    }
  },
  {
    "name": "Dark Neo",
    "customEmojiId": "5321141330699640325",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/dark-neo.svg",
      "tgs": "gifts/sakuraflower/assets/models/dark-neo.tgs"
    }
  },
  {
    "name": "Fire Bloom",
    "customEmojiId": "5318874021759051185",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/fire-bloom.svg",
      "tgs": "gifts/sakuraflower/assets/models/fire-bloom.tgs"
    }
  },
  {
    "name": "Heartbeat",
    "customEmojiId": "5321352235068714290",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/heartbeat.svg",
      "tgs": "gifts/sakuraflower/assets/models/heartbeat.tgs"
    }
  },
  {
    "name": "Icebound",
    "customEmojiId": "5318996411147119175",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/icebound.svg",
      "tgs": "gifts/sakuraflower/assets/models/icebound.tgs"
    }
  },
  {
    "name": "Loves Or Not",
    "customEmojiId": "5321520447462857980",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/loves-or-not.svg",
      "tgs": "gifts/sakuraflower/assets/models/loves-or-not.tgs"
    }
  },
  {
    "name": "Monsoon",
    "customEmojiId": "5321468383869294570",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/monsoon.svg",
      "tgs": "gifts/sakuraflower/assets/models/monsoon.tgs"
    }
  },
  {
    "name": "Pixel Bloom",
    "customEmojiId": "5318877389013412119",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/pixel-bloom.svg",
      "tgs": "gifts/sakuraflower/assets/models/pixel-bloom.tgs"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5319276872511549785",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/sakura.svg",
      "tgs": "gifts/sakuraflower/assets/models/sakura.tgs"
    }
  },
  {
    "name": "Shake It",
    "customEmojiId": "5321499286158991403",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/shake-it.svg",
      "tgs": "gifts/sakuraflower/assets/models/shake-it.tgs"
    }
  },
  {
    "name": "Snowdrop",
    "customEmojiId": "5318882697592991181",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/snowdrop.svg",
      "tgs": "gifts/sakuraflower/assets/models/snowdrop.tgs"
    }
  },
  {
    "name": "Venus Flytrap",
    "customEmojiId": "5319304502036163410",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/venus-flytrap.svg",
      "tgs": "gifts/sakuraflower/assets/models/venus-flytrap.tgs"
    }
  },
  {
    "name": "Myrtella",
    "customEmojiId": "5321283743225241370",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/myrtella.svg",
      "tgs": "gifts/sakuraflower/assets/models/myrtella.tgs"
    }
  },
  {
    "name": "Jellybud",
    "customEmojiId": "5321226899333082017",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/jellybud.svg",
      "tgs": "gifts/sakuraflower/assets/models/jellybud.tgs"
    }
  },
  {
    "name": "Wildflower",
    "customEmojiId": "5318846035752154024",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/wildflower.svg",
      "tgs": "gifts/sakuraflower/assets/models/wildflower.tgs"
    }
  },
  {
    "name": "Glitch",
    "customEmojiId": "5319009824329989380",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/glitch.svg",
      "tgs": "gifts/sakuraflower/assets/models/glitch.tgs"
    }
  },
  {
    "name": "Luminosia",
    "customEmojiId": "5321108633113616689",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/luminosia.svg",
      "tgs": "gifts/sakuraflower/assets/models/luminosia.tgs"
    }
  },
  {
    "name": "Party Time",
    "customEmojiId": "5318771097162774253",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/party-time.svg",
      "tgs": "gifts/sakuraflower/assets/models/party-time.tgs"
    }
  },
  {
    "name": "Ping Blossom",
    "customEmojiId": "5321153575651403074",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/ping-blossom.svg",
      "tgs": "gifts/sakuraflower/assets/models/ping-blossom.tgs"
    }
  },
  {
    "name": "Pokerface",
    "customEmojiId": "5321498281136645771",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/pokerface.svg",
      "tgs": "gifts/sakuraflower/assets/models/pokerface.tgs"
    }
  },
  {
    "name": "Savanna",
    "customEmojiId": "5319292897034530367",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/savanna.svg",
      "tgs": "gifts/sakuraflower/assets/models/savanna.tgs"
    }
  },
  {
    "name": "Shimeria",
    "customEmojiId": "5319197394141734821",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/shimeria.svg",
      "tgs": "gifts/sakuraflower/assets/models/shimeria.tgs"
    }
  },
  {
    "name": "Spotty Leo",
    "customEmojiId": "5321538409016090331",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/spotty-leo.svg",
      "tgs": "gifts/sakuraflower/assets/models/spotty-leo.tgs"
    }
  },
  {
    "name": "Bronzula",
    "customEmojiId": "5318800479034043894",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/bronzula.svg",
      "tgs": "gifts/sakuraflower/assets/models/bronzula.tgs"
    }
  },
  {
    "name": "Dark Loader",
    "customEmojiId": "5321213902762041356",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/dark-loader.svg",
      "tgs": "gifts/sakuraflower/assets/models/dark-loader.tgs"
    }
  },
  {
    "name": "Goldensia",
    "customEmojiId": "5319216798803981523",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/goldensia.svg",
      "tgs": "gifts/sakuraflower/assets/models/goldensia.tgs"
    }
  },
  {
    "name": "Morning Sun",
    "customEmojiId": "5318977594895394184",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/morning-sun.svg",
      "tgs": "gifts/sakuraflower/assets/models/morning-sun.tgs"
    }
  },
  {
    "name": "Party Bloom",
    "customEmojiId": "5318794655058390237",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/party-bloom.svg",
      "tgs": "gifts/sakuraflower/assets/models/party-bloom.tgs"
    }
  },
  {
    "name": "Peony",
    "customEmojiId": "5318941517170109721",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/peony.svg",
      "tgs": "gifts/sakuraflower/assets/models/peony.tgs"
    }
  },
  {
    "name": "Plumeria",
    "customEmojiId": "5318907586928472607",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/plumeria.svg",
      "tgs": "gifts/sakuraflower/assets/models/plumeria.tgs"
    }
  },
  {
    "name": "Red Poppy",
    "customEmojiId": "5321404298662275374",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/red-poppy.svg",
      "tgs": "gifts/sakuraflower/assets/models/red-poppy.tgs"
    }
  },
  {
    "name": "Silveria",
    "customEmojiId": "5321042769790133114",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/silveria.svg",
      "tgs": "gifts/sakuraflower/assets/models/silveria.tgs"
    }
  },
  {
    "name": "White Peony",
    "customEmojiId": "5321154997285577914",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/white-peony.svg",
      "tgs": "gifts/sakuraflower/assets/models/white-peony.tgs"
    }
  },
  {
    "name": "Windy",
    "customEmojiId": "5318862644390686484",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/windy.svg",
      "tgs": "gifts/sakuraflower/assets/models/windy.tgs"
    }
  },
  {
    "name": "Yellow Poppy",
    "customEmojiId": "5318878853597261897",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/yellow-poppy.svg",
      "tgs": "gifts/sakuraflower/assets/models/yellow-poppy.tgs"
    }
  },
  {
    "name": "Aetheris",
    "customEmojiId": "5319068622432268921",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/aetheris.svg",
      "tgs": "gifts/sakuraflower/assets/models/aetheris.tgs"
    }
  },
  {
    "name": "Allamanda",
    "customEmojiId": "5321471875677709437",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/allamanda.svg",
      "tgs": "gifts/sakuraflower/assets/models/allamanda.tgs"
    }
  },
  {
    "name": "Brunnera",
    "customEmojiId": "5321145844710271472",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/brunnera.svg",
      "tgs": "gifts/sakuraflower/assets/models/brunnera.tgs"
    }
  },
  {
    "name": "Bumblebee",
    "customEmojiId": "5319204558147185900",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/bumblebee.svg",
      "tgs": "gifts/sakuraflower/assets/models/bumblebee.tgs"
    }
  },
  {
    "name": "Clivia",
    "customEmojiId": "5321352750464787263",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/clivia.svg",
      "tgs": "gifts/sakuraflower/assets/models/clivia.tgs"
    }
  },
  {
    "name": "Geranium",
    "customEmojiId": "5321430845855129875",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/geranium.svg",
      "tgs": "gifts/sakuraflower/assets/models/geranium.tgs"
    }
  },
  {
    "name": "Gerbera",
    "customEmojiId": "5321396834009112331",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/gerbera.svg",
      "tgs": "gifts/sakuraflower/assets/models/gerbera.tgs"
    }
  },
  {
    "name": "Hellebore",
    "customEmojiId": "5319210953353491826",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/hellebore.svg",
      "tgs": "gifts/sakuraflower/assets/models/hellebore.tgs"
    }
  },
  {
    "name": "Hydrangea",
    "customEmojiId": "5321279744610689208",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/hydrangea.svg",
      "tgs": "gifts/sakuraflower/assets/models/hydrangea.tgs"
    }
  },
  {
    "name": "Nightshade",
    "customEmojiId": "5321070248990892533",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/nightshade.svg",
      "tgs": "gifts/sakuraflower/assets/models/nightshade.tgs"
    }
  },
  {
    "name": "Petunia",
    "customEmojiId": "5321538494915435336",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/petunia.svg",
      "tgs": "gifts/sakuraflower/assets/models/petunia.tgs"
    }
  },
  {
    "name": "Anemone",
    "customEmojiId": "5318961304084444636",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/anemone.svg",
      "tgs": "gifts/sakuraflower/assets/models/anemone.tgs"
    }
  },
  {
    "name": "Dahlia",
    "customEmojiId": "5318968012823356927",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/dahlia.svg",
      "tgs": "gifts/sakuraflower/assets/models/dahlia.tgs"
    }
  },
  {
    "name": "Hollyhock",
    "customEmojiId": "5319047491193170948",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/hollyhock.svg",
      "tgs": "gifts/sakuraflower/assets/models/hollyhock.tgs"
    }
  },
  {
    "name": "Hybrid",
    "customEmojiId": "5321388295614129467",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/hybrid.svg",
      "tgs": "gifts/sakuraflower/assets/models/hybrid.tgs"
    }
  },
  {
    "name": "Lemon Queen",
    "customEmojiId": "5318864139039304219",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/lemon-queen.svg",
      "tgs": "gifts/sakuraflower/assets/models/lemon-queen.tgs"
    }
  },
  {
    "name": "Crimsonia",
    "customEmojiId": "5319257854396362331",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/crimsonia.svg",
      "tgs": "gifts/sakuraflower/assets/models/crimsonia.tgs"
    }
  },
  {
    "name": "Indigo",
    "customEmojiId": "5319118461232770884",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/indigo.svg",
      "tgs": "gifts/sakuraflower/assets/models/indigo.tgs"
    }
  },
  {
    "name": "Oxalis",
    "customEmojiId": "5319011280323898701",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/oxalis.svg",
      "tgs": "gifts/sakuraflower/assets/models/oxalis.tgs"
    }
  },
  {
    "name": "Tropicana",
    "customEmojiId": "5321440513826512108",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/tropicana.svg",
      "tgs": "gifts/sakuraflower/assets/models/tropicana.tgs"
    }
  },
  {
    "name": "Aster",
    "customEmojiId": "5321044608036138078",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/aster.svg",
      "tgs": "gifts/sakuraflower/assets/models/aster.tgs"
    }
  },
  {
    "name": "Aubrieta",
    "customEmojiId": "5321423772043994835",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/aubrieta.svg",
      "tgs": "gifts/sakuraflower/assets/models/aubrieta.tgs"
    }
  },
  {
    "name": "Aurivelle",
    "customEmojiId": "5321174234444096271",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/aurivelle.svg",
      "tgs": "gifts/sakuraflower/assets/models/aurivelle.tgs"
    }
  },
  {
    "name": "Azure",
    "customEmojiId": "5319163021518466632",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/azure.svg",
      "tgs": "gifts/sakuraflower/assets/models/azure.tgs"
    }
  },
  {
    "name": "Barbia",
    "customEmojiId": "5319313903719575912",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/barbia.svg",
      "tgs": "gifts/sakuraflower/assets/models/barbia.tgs"
    }
  },
  {
    "name": "Celestara",
    "customEmojiId": "5319244162040621627",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/celestara.svg",
      "tgs": "gifts/sakuraflower/assets/models/celestara.tgs"
    }
  },
  {
    "name": "Cosmea",
    "customEmojiId": "5318938278764766212",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/cosmea.svg",
      "tgs": "gifts/sakuraflower/assets/models/cosmea.tgs"
    }
  },
  {
    "name": "Eclipsia",
    "customEmojiId": "5318888852281125325",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/eclipsia.svg",
      "tgs": "gifts/sakuraflower/assets/models/eclipsia.tgs"
    }
  },
  {
    "name": "Fabulous",
    "customEmojiId": "5319096612734140844",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/fabulous.svg",
      "tgs": "gifts/sakuraflower/assets/models/fabulous.tgs"
    }
  },
  {
    "name": "False Bird",
    "customEmojiId": "5318803429676577226",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/false-bird.svg",
      "tgs": "gifts/sakuraflower/assets/models/false-bird.tgs"
    }
  },
  {
    "name": "Flameris",
    "customEmojiId": "5321229514968168066",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/flameris.svg",
      "tgs": "gifts/sakuraflower/assets/models/flameris.tgs"
    }
  },
  {
    "name": "Floravelle",
    "customEmojiId": "5319003107001134183",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/floravelle.svg",
      "tgs": "gifts/sakuraflower/assets/models/floravelle.tgs"
    }
  },
  {
    "name": "Floraven",
    "customEmojiId": "5321223579323360994",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/floraven.svg",
      "tgs": "gifts/sakuraflower/assets/models/floraven.tgs"
    }
  },
  {
    "name": "Floris",
    "customEmojiId": "5318914132458628523",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/floris.svg",
      "tgs": "gifts/sakuraflower/assets/models/floris.tgs"
    }
  },
  {
    "name": "Ghostia",
    "customEmojiId": "5318935014589625239",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/ghostia.svg",
      "tgs": "gifts/sakuraflower/assets/models/ghostia.tgs"
    }
  },
  {
    "name": "Hawaii",
    "customEmojiId": "5321153678730619865",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/hawaii.svg",
      "tgs": "gifts/sakuraflower/assets/models/hawaii.tgs"
    }
  },
  {
    "name": "Hibiscus",
    "customEmojiId": "5319055320918552030",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/hibiscus.svg",
      "tgs": "gifts/sakuraflower/assets/models/hibiscus.tgs"
    }
  },
  {
    "name": "Lanceolata",
    "customEmojiId": "5318781018537225529",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/lanceolata.svg",
      "tgs": "gifts/sakuraflower/assets/models/lanceolata.tgs"
    }
  },
  {
    "name": "Lunaris",
    "customEmojiId": "5319187537191793975",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/lunaris.svg",
      "tgs": "gifts/sakuraflower/assets/models/lunaris.tgs"
    }
  },
  {
    "name": "Marigold",
    "customEmojiId": "5318926046697910109",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/marigold.svg",
      "tgs": "gifts/sakuraflower/assets/models/marigold.tgs"
    }
  },
  {
    "name": "Meadowlyn",
    "customEmojiId": "5321328750187536969",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/meadowlyn.svg",
      "tgs": "gifts/sakuraflower/assets/models/meadowlyn.tgs"
    }
  },
  {
    "name": "Nectarium",
    "customEmojiId": "5321148374446004888",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/nectarium.svg",
      "tgs": "gifts/sakuraflower/assets/models/nectarium.tgs"
    }
  },
  {
    "name": "Noctivis",
    "customEmojiId": "5319128571585785697",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/noctivis.svg",
      "tgs": "gifts/sakuraflower/assets/models/noctivis.tgs"
    }
  },
  {
    "name": "Orchidra",
    "customEmojiId": "5321208250585086954",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/orchidra.svg",
      "tgs": "gifts/sakuraflower/assets/models/orchidra.tgs"
    }
  },
  {
    "name": "Peach Perfect",
    "customEmojiId": "5319008364041103377",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/peach-perfect.svg",
      "tgs": "gifts/sakuraflower/assets/models/peach-perfect.tgs"
    }
  },
  {
    "name": "Primrose",
    "customEmojiId": "5321562112940597117",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/primrose.svg",
      "tgs": "gifts/sakuraflower/assets/models/primrose.tgs"
    }
  },
  {
    "name": "Seraphina",
    "customEmojiId": "5321457285673805338",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/seraphina.svg",
      "tgs": "gifts/sakuraflower/assets/models/seraphina.tgs"
    }
  },
  {
    "name": "Solivine",
    "customEmojiId": "5318889973267590766",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/solivine.svg",
      "tgs": "gifts/sakuraflower/assets/models/solivine.tgs"
    }
  },
  {
    "name": "Sylvaris",
    "customEmojiId": "5321556593907622039",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/sylvaris.svg",
      "tgs": "gifts/sakuraflower/assets/models/sylvaris.tgs"
    }
  },
  {
    "name": "Twilight",
    "customEmojiId": "5319111606464964592",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/twilight.svg",
      "tgs": "gifts/sakuraflower/assets/models/twilight.tgs"
    }
  },
  {
    "name": "Vanilla",
    "customEmojiId": "5319057000250766412",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/vanilla.svg",
      "tgs": "gifts/sakuraflower/assets/models/vanilla.tgs"
    }
  },
  {
    "name": "Verdania",
    "customEmojiId": "5318895668394226309",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/verdania.svg",
      "tgs": "gifts/sakuraflower/assets/models/verdania.tgs"
    }
  },
  {
    "name": "Violet",
    "customEmojiId": "5318803889238078110",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/violet.svg",
      "tgs": "gifts/sakuraflower/assets/models/violet.tgs"
    }
  },
  {
    "name": "Violet Iris",
    "customEmojiId": "5321036670936574257",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/violet-iris.svg",
      "tgs": "gifts/sakuraflower/assets/models/violet-iris.tgs"
    }
  },
  {
    "name": "Zephyra",
    "customEmojiId": "5318898808015316647",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/sakuraflower/assets/models/zephyra.svg",
      "tgs": "gifts/sakuraflower/assets/models/zephyra.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/beer.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/gem.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/puzzle.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bucket-hat.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/burger.png"
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
      "png": "gifts/sakuraflower/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/corn.png"
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
      "png": "gifts/sakuraflower/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/cupcake.png"
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
      "png": "gifts/sakuraflower/assets/patterns/dessert.png"
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
      "png": "gifts/sakuraflower/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/kitsune-mask.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/obon-lantern.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/paw.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/pear.png"
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
      "png": "gifts/sakuraflower/assets/patterns/piggy-bank.png"
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
      "png": "gifts/sakuraflower/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sea-dragon.png"
    }
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/serpent.png"
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
      "png": "gifts/sakuraflower/assets/patterns/shell.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tie.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/viper.png"
    }
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/watching-sun.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/acorn.png"
    }
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/all-seeing-eye.png"
    }
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/banner.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bearskin.png"
    }
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bike-helmet.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bone.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bread.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/candy.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/coin.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/crown.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Earflap Hat",
    "customEmojiId": "5199932083681658304",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/earflap-hat.png"
    }
  },
  {
    "name": "Earth",
    "customEmojiId": "5199963814900042040",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/earth.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Hard Hat",
    "customEmojiId": "5199914431366072974",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/hard-hat.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Khinkali",
    "customEmojiId": "5199559430844221150",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/khinkali.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/lily.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/mask.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/melon.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/nemes.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Onigiri",
    "customEmojiId": "5199752717257444302",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/onigiri.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Pirate Hat",
    "customEmojiId": "5199666663292700153",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/pirate-hat.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/plume.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/potion.png"
    }
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/radar.png"
    }
  },
  {
    "name": "Ribeye Steak",
    "customEmojiId": "5199881892693838705",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/ribeye-steak.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/ring.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/steampunk-hat.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sword.png"
    }
  },
  {
    "name": "Thor Hammer",
    "customEmojiId": "5199857621833649230",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/thor-hammer.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tulip.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/wasp.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/axe.png"
    }
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/aztec-totem.png"
    }
  },
  {
    "name": "Beanie",
    "customEmojiId": "5202215137972354788",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/beanie.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bug.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/candle.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/car.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/cash.png"
    }
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/chef-hat.png"
    }
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/chick.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/chili.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/cone.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/crab.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/drug.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/fish.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/grape.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/kite.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/koala.png"
    }
  },
  {
    "name": "Legionary",
    "customEmojiId": "5199428202413461386",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/legionary.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/maple.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/novus-ordo.png"
    }
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/omusubi.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/origami.png"
    }
  },
  {
    "name": "Party Hat",
    "customEmojiId": "5199420192299454140",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/party-hat.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Pilot Hat",
    "customEmojiId": "5199599971040525984",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/pilot-hat.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/planet.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/press-hat.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/rook.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/rose.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/thunderbird.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/turban.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/warhorse.png"
    }
  },
  {
    "name": "Winged Helmet",
    "customEmojiId": "5199518650129746938",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/winged-helmet.png"
    }
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/worker-ant.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/academic-cap.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/baby-bottle.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/ball.png"
    }
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bamboo.png"
    }
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/banana.png"
    }
  },
  {
    "name": "Bascinet",
    "customEmojiId": "5199688421597022189",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bascinet.png"
    }
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/battle-axe.png"
    }
  },
  {
    "name": "Beret",
    "customEmojiId": "5199710124066771918",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/beret.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bowler-hat.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/cavalier-hat.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/clover.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/conch.png"
    }
  },
  {
    "name": "Conical Hat",
    "customEmojiId": "5199648817703584324",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/conical-hat.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/cow-skull.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/dagger.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/duck-face.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/egg.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Fireman Hat",
    "customEmojiId": "5199732475076578186",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/fireman-hat.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/flower.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/flower-sun.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Gua Pi Mao",
    "customEmojiId": "5199440052228229167",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/gua-pi-mao.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/hazelnut.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/heart.png"
    }
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/heater-shield.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/holy-grail.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/horn.png"
    }
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/hourglass.png"
    }
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/ice-cream.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/keffiyeh.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/like.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Mining Helmet",
    "customEmojiId": "5199842336045040776",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/mining-helmet.png"
    }
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/moai-head.png"
    }
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/moon-face.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/mustache.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/old-candle.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/palette.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/plume-shako.png"
    }
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/police-hat.png"
    }
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sailor-hat.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/shuriken.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sun.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/sword-fight.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/tricorne.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Ushanka",
    "customEmojiId": "5202149927483900109",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/ushanka.png"
    }
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/valkyrie.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/vortex.png"
    }
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/war-bonnet.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/sakuraflower/assets/patterns/wolf-rage.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Burnt Sienna",
    "backdropId": 76,
    "customEmojiId": "5377680275889219155",
    "centerColor": 14053180,
    "edgeColor": 11881261,
    "patternColor": 7014658,
    "textColor": 16764080,
    "hex": {
      "centerColor": "#d66f3c",
      "edgeColor": "#b54b2d",
      "patternColor": "#6b0902",
      "textColor": "#ffccb0"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Celtic Blue",
    "backdropId": 74,
    "customEmojiId": "5375186931409777211",
    "centerColor": 4569325,
    "edgeColor": 3704537,
    "patternColor": 16005,
    "textColor": 12773375,
    "hex": {
      "centerColor": "#45b8ed",
      "edgeColor": "#3886d9",
      "patternColor": "#003e85",
      "textColor": "#c2e7ff"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "name": "Feldgrau",
    "backdropId": 68,
    "customEmojiId": "5375107384320485908",
    "centerColor": 9015944,
    "edgeColor": 6187875,
    "patternColor": 1844767,
    "textColor": 14608865,
    "hex": {
      "centerColor": "#899288",
      "edgeColor": "#5e6b63",
      "patternColor": "#1c261f",
      "textColor": "#dee9e1"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
  },
  {
    "name": "Marine Blue",
    "backdropId": 60,
    "customEmojiId": "5375439277918288314",
    "centerColor": 5138588,
    "edgeColor": 3885946,
    "patternColor": 67617,
    "textColor": 12307442,
    "hex": {
      "centerColor": "#4e689c",
      "edgeColor": "#3b4b7a",
      "patternColor": "#010821",
      "textColor": "#bbcbf2"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Camo Green",
    "backdropId": 67,
    "customEmojiId": "5375411489479878975",
    "centerColor": 7705677,
    "edgeColor": 5534529,
    "patternColor": 1455873,
    "textColor": 13625529,
    "hex": {
      "centerColor": "#75944d",
      "edgeColor": "#547341",
      "patternColor": "#163701",
      "textColor": "#cfe8b9"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Dark Green",
    "backdropId": 63,
    "customEmojiId": "5375600953372209854",
    "centerColor": 5333825,
    "edgeColor": 2835759,
    "patternColor": 1281,
    "textColor": 12571049,
    "hex": {
      "centerColor": "#516341",
      "edgeColor": "#2b452f",
      "patternColor": "#000501",
      "textColor": "#bfd1a9"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Deep Cyan",
    "backdropId": 70,
    "customEmojiId": "5377423312290868137",
    "centerColor": 3257770,
    "edgeColor": 1611161,
    "patternColor": 20303,
    "textColor": 13762557,
    "hex": {
      "centerColor": "#31b5aa",
      "edgeColor": "#189599",
      "patternColor": "#004f4f",
      "textColor": "#d1fffd"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Gunmetal",
    "backdropId": 69,
    "customEmojiId": "5375182267075292360",
    "centerColor": 5004643,
    "edgeColor": 3095362,
    "patternColor": 264202,
    "textColor": 11978188,
    "hex": {
      "centerColor": "#4c5d63",
      "edgeColor": "#2f3b42",
      "patternColor": "#04080a",
      "textColor": "#b6c5cc"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Mustard",
    "backdropId": 78,
    "customEmojiId": "5375113225476008176",
    "centerColor": 13932557,
    "edgeColor": 12875538,
    "patternColor": 8004864,
    "textColor": 16768668,
    "hex": {
      "centerColor": "#d4980d",
      "edgeColor": "#c47712",
      "patternColor": "#7a2500",
      "textColor": "#ffde9c"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Old Gold",
    "backdropId": 75,
    "customEmojiId": "5375123404548499298",
    "centerColor": 11898168,
    "edgeColor": 9726245,
    "patternColor": 5190402,
    "textColor": 16768396,
    "hex": {
      "centerColor": "#b58d38",
      "edgeColor": "#946925",
      "patternColor": "#4f3302",
      "textColor": "#ffdd8c"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Ranger Green",
    "backdropId": 66,
    "customEmojiId": "5375074549295510665",
    "centerColor": 6256713,
    "edgeColor": 3952443,
    "patternColor": 1057289,
    "textColor": 12043445,
    "hex": {
      "centerColor": "#5f7849",
      "edgeColor": "#3c4f3b",
      "patternColor": "#102209",
      "textColor": "#b7c4b5"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Rifle Green",
    "backdropId": 65,
    "customEmojiId": "5377619347483158640",
    "centerColor": 6580572,
    "edgeColor": 4936257,
    "patternColor": 987659,
    "textColor": 12830653,
    "hex": {
      "centerColor": "#64695c",
      "edgeColor": "#4b5241",
      "patternColor": "#0f120b",
      "textColor": "#c3c7bd"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
  },
  {
    "name": "Tactical Pine",
    "backdropId": 61,
    "customEmojiId": "5375347412862793082",
    "centerColor": 4489835,
    "edgeColor": 3105641,
    "patternColor": 9764,
    "textColor": 12052179,
    "hex": {
      "centerColor": "#44826b",
      "edgeColor": "#2f6369",
      "patternColor": "#002624",
      "textColor": "#b7e6d3"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Carmine",
    "backdropId": 77,
    "customEmojiId": "5375573362502298464",
    "centerColor": 14702410,
    "edgeColor": 11024443,
    "patternColor": 5177600,
    "textColor": 16758701,
    "hex": {
      "centerColor": "#e0574a",
      "edgeColor": "#a8383b",
      "patternColor": "#4f0100",
      "textColor": "#ffb7ad"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Fire Engine",
    "backdropId": 73,
    "customEmojiId": "5375497006573710335",
    "centerColor": 15753039,
    "edgeColor": 12859721,
    "patternColor": 6881289,
    "textColor": 16758694,
    "hex": {
      "centerColor": "#f05f4f",
      "edgeColor": "#c43949",
      "patternColor": "#690009",
      "textColor": "#ffb7a6"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "French Violet",
    "backdropId": 79,
    "customEmojiId": "5377583218218262703",
    "centerColor": 12738790,
    "edgeColor": 9522905,
    "patternColor": 4850058,
    "textColor": 15452159,
    "hex": {
      "centerColor": "#c260e6",
      "edgeColor": "#914ed9",
      "patternColor": "#4a018a",
      "textColor": "#ebc7ff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Gunship Green",
    "backdropId": 62,
    "customEmojiId": "5375121566302501587",
    "centerColor": 5605989,
    "edgeColor": 4023895,
    "patternColor": 468509,
    "textColor": 11919572,
    "hex": {
      "centerColor": "#558a65",
      "edgeColor": "#3d6657",
      "patternColor": "#07261d",
      "textColor": "#b5e0d4"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Mexican Pink",
    "backdropId": 71,
    "customEmojiId": "5375494846205161879",
    "centerColor": 14902930,
    "edgeColor": 13191548,
    "patternColor": 7668272,
    "textColor": 16766694,
    "hex": {
      "centerColor": "#e36692",
      "edgeColor": "#c9497c",
      "patternColor": "#750230",
      "textColor": "#ffd6e6"
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
    "name": "Seal Brown",
    "backdropId": 64,
    "customEmojiId": "5375269034004608036",
    "centerColor": 6704453,
    "edgeColor": 4666926,
    "patternColor": 656901,
    "textColor": 13941941,
    "hex": {
      "centerColor": "#664d45",
      "edgeColor": "#47362e",
      "patternColor": "#0a0605",
      "textColor": "#d4bcb5"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  },
  {
    "name": "Tomato",
    "backdropId": 72,
    "customEmojiId": "5377723259921916635",
    "centerColor": 15104318,
    "edgeColor": 13913663,
    "patternColor": 8391424,
    "textColor": 16764093,
    "hex": {
      "centerColor": "#e6793e",
      "edgeColor": "#d44e3f",
      "patternColor": "#800b00",
      "textColor": "#ffccbd"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "sakuraflower", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
