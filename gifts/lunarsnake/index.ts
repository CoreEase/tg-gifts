import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "6028426950047957932" as const;

export const models = [
  {
    "name": "Dragon Ball",
    "customEmojiId": "5247152139544849327",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/dragon-ball.svg",
      "tgs": "gifts/lunarsnake/assets/models/dragon-ball.tgs"
    }
  },
  {
    "name": "Gen Zmei",
    "customEmojiId": "5244463447067878939",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/gen-zmei.svg",
      "tgs": "gifts/lunarsnake/assets/models/gen-zmei.tgs"
    }
  },
  {
    "name": "Hot Cherry",
    "customEmojiId": "5246708628336959633",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/hot-cherry.svg",
      "tgs": "gifts/lunarsnake/assets/models/hot-cherry.tgs"
    }
  },
  {
    "name": "Synthwave",
    "customEmojiId": "5244556901261274766",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/synthwave.svg",
      "tgs": "gifts/lunarsnake/assets/models/synthwave.tgs"
    }
  },
  {
    "name": "Angelic",
    "customEmojiId": "5244914212475530451",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/angelic.svg",
      "tgs": "gifts/lunarsnake/assets/models/angelic.tgs"
    }
  },
  {
    "name": "Cryoshard",
    "customEmojiId": "5246881213007814382",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/cryoshard.svg",
      "tgs": "gifts/lunarsnake/assets/models/cryoshard.tgs"
    }
  },
  {
    "name": "Diamondback",
    "customEmojiId": "5247052960160049267",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/diamondback.svg",
      "tgs": "gifts/lunarsnake/assets/models/diamondback.tgs"
    }
  },
  {
    "name": "Ender Snake",
    "customEmojiId": "5247044524844278677",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/ender-snake.svg",
      "tgs": "gifts/lunarsnake/assets/models/ender-snake.tgs"
    }
  },
  {
    "name": "Fire Dragon",
    "customEmojiId": "5247243978830535110",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/fire-dragon.svg",
      "tgs": "gifts/lunarsnake/assets/models/fire-dragon.tgs"
    }
  },
  {
    "name": "Geodesic",
    "customEmojiId": "5247141260392685938",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/geodesic.svg",
      "tgs": "gifts/lunarsnake/assets/models/geodesic.tgs"
    }
  },
  {
    "name": "Gold Quartz",
    "customEmojiId": "5246721109511921339",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/gold-quartz.svg",
      "tgs": "gifts/lunarsnake/assets/models/gold-quartz.tgs"
    }
  },
  {
    "name": "Hellspawn",
    "customEmojiId": "5244830576577376885",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/hellspawn.svg",
      "tgs": "gifts/lunarsnake/assets/models/hellspawn.tgs"
    }
  },
  {
    "name": "Hydra",
    "customEmojiId": "5246944714099285249",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/hydra.svg",
      "tgs": "gifts/lunarsnake/assets/models/hydra.tgs"
    }
  },
  {
    "name": "Lapis",
    "customEmojiId": "5244592433525713607",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/lapis.svg",
      "tgs": "gifts/lunarsnake/assets/models/lapis.tgs"
    }
  },
  {
    "name": "Lunar Year",
    "customEmojiId": "5247090541123884614",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/lunar-year.svg",
      "tgs": "gifts/lunarsnake/assets/models/lunar-year.tgs"
    }
  },
  {
    "name": "Prismatic",
    "customEmojiId": "5244669699987367982",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/prismatic.svg",
      "tgs": "gifts/lunarsnake/assets/models/prismatic.tgs"
    }
  },
  {
    "name": "Psychedelic",
    "customEmojiId": "5247238008825997872",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/psychedelic.svg",
      "tgs": "gifts/lunarsnake/assets/models/psychedelic.tgs"
    }
  },
  {
    "name": "Red Amethyst",
    "customEmojiId": "5247165939274768483",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/red-amethyst.svg",
      "tgs": "gifts/lunarsnake/assets/models/red-amethyst.tgs"
    }
  },
  {
    "name": "Redstone",
    "customEmojiId": "5244773921663775608",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/redstone.svg",
      "tgs": "gifts/lunarsnake/assets/models/redstone.tgs"
    }
  },
  {
    "name": "Rorschach",
    "customEmojiId": "5246789090254282621",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/rorschach.svg",
      "tgs": "gifts/lunarsnake/assets/models/rorschach.tgs"
    }
  },
  {
    "name": "Snake Game",
    "customEmojiId": "5247080718533680602",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/snake-game.svg",
      "tgs": "gifts/lunarsnake/assets/models/snake-game.tgs"
    }
  },
  {
    "name": "Soul Eater",
    "customEmojiId": "5247224642887771913",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/soul-eater.svg",
      "tgs": "gifts/lunarsnake/assets/models/soul-eater.tgs"
    }
  },
  {
    "name": "Timelock",
    "customEmojiId": "5247173880669297646",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/timelock.svg",
      "tgs": "gifts/lunarsnake/assets/models/timelock.tgs"
    }
  },
  {
    "name": "Xenomorph",
    "customEmojiId": "5244555329303243488",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/xenomorph.svg",
      "tgs": "gifts/lunarsnake/assets/models/xenomorph.tgs"
    }
  },
  {
    "name": "Adhesive",
    "customEmojiId": "5246900742224107809",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/adhesive.svg",
      "tgs": "gifts/lunarsnake/assets/models/adhesive.tgs"
    }
  },
  {
    "name": "Candy Stripe",
    "customEmojiId": "5247090562598726888",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/candy-stripe.svg",
      "tgs": "gifts/lunarsnake/assets/models/candy-stripe.tgs"
    }
  },
  {
    "name": "Cyber Ruby",
    "customEmojiId": "5246993981669138372",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/cyber-ruby.svg",
      "tgs": "gifts/lunarsnake/assets/models/cyber-ruby.tgs"
    }
  },
  {
    "name": "Fromage",
    "customEmojiId": "5244716918857819860",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/fromage.svg",
      "tgs": "gifts/lunarsnake/assets/models/fromage.tgs"
    }
  },
  {
    "name": "Frosting",
    "customEmojiId": "5244623056642533345",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/frosting.svg",
      "tgs": "gifts/lunarsnake/assets/models/frosting.tgs"
    }
  },
  {
    "name": "Gold Rush",
    "customEmojiId": "5246725898400458230",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/gold-rush.svg",
      "tgs": "gifts/lunarsnake/assets/models/gold-rush.tgs"
    }
  },
  {
    "name": "Golden Bleu",
    "customEmojiId": "5246868456954946966",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/golden-bleu.svg",
      "tgs": "gifts/lunarsnake/assets/models/golden-bleu.tgs"
    }
  },
  {
    "name": "Hong Kong",
    "customEmojiId": "5244966804350072134",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/hong-kong.svg",
      "tgs": "gifts/lunarsnake/assets/models/hong-kong.tgs"
    }
  },
  {
    "name": "Iron Mine",
    "customEmojiId": "5244806490400779362",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/iron-mine.svg",
      "tgs": "gifts/lunarsnake/assets/models/iron-mine.tgs"
    }
  },
  {
    "name": "Mandarin",
    "customEmojiId": "5246728655769463279",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/mandarin.svg",
      "tgs": "gifts/lunarsnake/assets/models/mandarin.tgs"
    }
  },
  {
    "name": "Night Market",
    "customEmojiId": "5247082114398055121",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/night-market.svg",
      "tgs": "gifts/lunarsnake/assets/models/night-market.tgs"
    }
  },
  {
    "name": "Poisonous",
    "customEmojiId": "5244699889312492197",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/poisonous.svg",
      "tgs": "gifts/lunarsnake/assets/models/poisonous.tgs"
    }
  },
  {
    "name": "Python Dev",
    "customEmojiId": "5244711820731643088",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/python-dev.svg",
      "tgs": "gifts/lunarsnake/assets/models/python-dev.tgs"
    }
  },
  {
    "name": "Red Cheddar",
    "customEmojiId": "5247194436382776181",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/red-cheddar.svg",
      "tgs": "gifts/lunarsnake/assets/models/red-cheddar.tgs"
    }
  },
  {
    "name": "Straciatella",
    "customEmojiId": "5244688400274979074",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/straciatella.svg",
      "tgs": "gifts/lunarsnake/assets/models/straciatella.tgs"
    }
  },
  {
    "name": "Taipei",
    "customEmojiId": "5246982819049136741",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/taipei.svg",
      "tgs": "gifts/lunarsnake/assets/models/taipei.tgs"
    }
  },
  {
    "name": "The Deadliest",
    "customEmojiId": "5244703333876261465",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/the-deadliest.svg",
      "tgs": "gifts/lunarsnake/assets/models/the-deadliest.tgs"
    }
  },
  {
    "name": "Tropicool",
    "customEmojiId": "5244695783323756915",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/tropicool.svg",
      "tgs": "gifts/lunarsnake/assets/models/tropicool.tgs"
    }
  },
  {
    "name": "Venomous",
    "customEmojiId": "5247113240026046517",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/venomous.svg",
      "tgs": "gifts/lunarsnake/assets/models/venomous.tgs"
    }
  },
  {
    "name": "Arctic Viper",
    "customEmojiId": "5244507470482664167",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/arctic-viper.svg",
      "tgs": "gifts/lunarsnake/assets/models/arctic-viper.tgs"
    }
  },
  {
    "name": "Bear Paw",
    "customEmojiId": "5244580347487742992",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/bear-paw.svg",
      "tgs": "gifts/lunarsnake/assets/models/bear-paw.tgs"
    }
  },
  {
    "name": "Glowbra",
    "customEmojiId": "5247150919774135348",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/glowbra.svg",
      "tgs": "gifts/lunarsnake/assets/models/glowbra.tgs"
    }
  },
  {
    "name": "Hissmas Tree",
    "customEmojiId": "5244490952038441985",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/hissmas-tree.svg",
      "tgs": "gifts/lunarsnake/assets/models/hissmas-tree.tgs"
    }
  },
  {
    "name": "Hisstagram",
    "customEmojiId": "5245002370974246465",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/hisstagram.svg",
      "tgs": "gifts/lunarsnake/assets/models/hisstagram.tgs"
    }
  },
  {
    "name": "Jelly Hazard",
    "customEmojiId": "5247009018349645245",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/jelly-hazard.svg",
      "tgs": "gifts/lunarsnake/assets/models/jelly-hazard.tgs"
    }
  },
  {
    "name": "Neurotoxin",
    "customEmojiId": "5246954291876355385",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/neurotoxin.svg",
      "tgs": "gifts/lunarsnake/assets/models/neurotoxin.tgs"
    }
  },
  {
    "name": "Pearl Scales",
    "customEmojiId": "5246807833491562405",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/pearl-scales.svg",
      "tgs": "gifts/lunarsnake/assets/models/pearl-scales.tgs"
    }
  },
  {
    "name": "Polarized",
    "customEmojiId": "5244551871854570772",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/polarized.svg",
      "tgs": "gifts/lunarsnake/assets/models/polarized.tgs"
    }
  },
  {
    "name": "Sea Snake",
    "customEmojiId": "5244677293489547599",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/sea-snake.svg",
      "tgs": "gifts/lunarsnake/assets/models/sea-snake.tgs"
    }
  },
  {
    "name": "Sun Serpent",
    "customEmojiId": "5246977944261258637",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/sun-serpent.svg",
      "tgs": "gifts/lunarsnake/assets/models/sun-serpent.tgs"
    }
  },
  {
    "name": "Sunset Snake",
    "customEmojiId": "5246930609426687359",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/sunset-snake.svg",
      "tgs": "gifts/lunarsnake/assets/models/sunset-snake.tgs"
    }
  },
  {
    "name": "Wood Snake",
    "customEmojiId": "5246751169988026959",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/wood-snake.svg",
      "tgs": "gifts/lunarsnake/assets/models/wood-snake.tgs"
    }
  },
  {
    "name": "Amber Adder",
    "customEmojiId": "5246874384009816250",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/amber-adder.svg",
      "tgs": "gifts/lunarsnake/assets/models/amber-adder.tgs"
    }
  },
  {
    "name": "Amethyssst",
    "customEmojiId": "5246876677522349771",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/amethyssst.svg",
      "tgs": "gifts/lunarsnake/assets/models/amethyssst.tgs"
    }
  },
  {
    "name": "Aurium",
    "customEmojiId": "5247151594083998684",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/aurium.svg",
      "tgs": "gifts/lunarsnake/assets/models/aurium.tgs"
    }
  },
  {
    "name": "Banded Boa",
    "customEmojiId": "5246782132407262578",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/banded-boa.svg",
      "tgs": "gifts/lunarsnake/assets/models/banded-boa.tgs"
    }
  },
  {
    "name": "Blue Horizon",
    "customEmojiId": "5244862342155496850",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/blue-horizon.svg",
      "tgs": "gifts/lunarsnake/assets/models/blue-horizon.tgs"
    }
  },
  {
    "name": "Caustic Moss",
    "customEmojiId": "5247081375663679369",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/caustic-moss.svg",
      "tgs": "gifts/lunarsnake/assets/models/caustic-moss.tgs"
    }
  },
  {
    "name": "Cherry Glitch",
    "customEmojiId": "5244729674910691050",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/cherry-glitch.svg",
      "tgs": "gifts/lunarsnake/assets/models/cherry-glitch.tgs"
    }
  },
  {
    "name": "Crimson Jade",
    "customEmojiId": "5244555574116379088",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/crimson-jade.svg",
      "tgs": "gifts/lunarsnake/assets/models/crimson-jade.tgs"
    }
  },
  {
    "name": "Frost Fangs",
    "customEmojiId": "5244779225948384685",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/frost-fangs.svg",
      "tgs": "gifts/lunarsnake/assets/models/frost-fangs.tgs"
    }
  },
  {
    "name": "Golden Coal",
    "customEmojiId": "5247102618571924342",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/golden-coal.svg",
      "tgs": "gifts/lunarsnake/assets/models/golden-coal.tgs"
    }
  },
  {
    "name": "Golden Sky",
    "customEmojiId": "5244886458396862800",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/golden-sky.svg",
      "tgs": "gifts/lunarsnake/assets/models/golden-sky.tgs"
    }
  },
  {
    "name": "Gulal",
    "customEmojiId": "5244565890627824177",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/gulal.svg",
      "tgs": "gifts/lunarsnake/assets/models/gulal.tgs"
    }
  },
  {
    "name": "Hissium",
    "customEmojiId": "5244795271946201199",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/hissium.svg",
      "tgs": "gifts/lunarsnake/assets/models/hissium.tgs"
    }
  },
  {
    "name": "Jade Serpent",
    "customEmojiId": "5244789757208192472",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/jade-serpent.svg",
      "tgs": "gifts/lunarsnake/assets/models/jade-serpent.tgs"
    }
  },
  {
    "name": "Kinder Garter",
    "customEmojiId": "5247220562668841584",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/kinder-garter.svg",
      "tgs": "gifts/lunarsnake/assets/models/kinder-garter.tgs"
    }
  },
  {
    "name": "Orange Rocks",
    "customEmojiId": "5247038297141699438",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/orange-rocks.svg",
      "tgs": "gifts/lunarsnake/assets/models/orange-rocks.tgs"
    }
  },
  {
    "name": "Pink Venom",
    "customEmojiId": "5244956500723526004",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/pink-venom.svg",
      "tgs": "gifts/lunarsnake/assets/models/pink-venom.tgs"
    }
  },
  {
    "name": "Purple Cap",
    "customEmojiId": "5244883782632238581",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/purple-cap.svg",
      "tgs": "gifts/lunarsnake/assets/models/purple-cap.tgs"
    }
  },
  {
    "name": "Purple Laser",
    "customEmojiId": "5246745397551980932",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/purple-laser.svg",
      "tgs": "gifts/lunarsnake/assets/models/purple-laser.tgs"
    }
  },
  {
    "name": "Rainbow Scale",
    "customEmojiId": "5247022397172768763",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/rainbow-scale.svg",
      "tgs": "gifts/lunarsnake/assets/models/rainbow-scale.tgs"
    }
  },
  {
    "name": "Rosepepper",
    "customEmojiId": "5244950071157484631",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/rosepepper.svg",
      "tgs": "gifts/lunarsnake/assets/models/rosepepper.tgs"
    }
  },
  {
    "name": "Sandrift",
    "customEmojiId": "5244556596318597397",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/sandrift.svg",
      "tgs": "gifts/lunarsnake/assets/models/sandrift.tgs"
    }
  },
  {
    "name": "Spring Burst",
    "customEmojiId": "5246995283044228674",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/spring-burst.svg",
      "tgs": "gifts/lunarsnake/assets/models/spring-burst.tgs"
    }
  },
  {
    "name": "Stone Python",
    "customEmojiId": "5244491965650728174",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/stone-python.svg",
      "tgs": "gifts/lunarsnake/assets/models/stone-python.tgs"
    }
  },
  {
    "name": "Super Hot",
    "customEmojiId": "5244648727662062897",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/super-hot.svg",
      "tgs": "gifts/lunarsnake/assets/models/super-hot.tgs"
    }
  },
  {
    "name": "Vibrant Venom",
    "customEmojiId": "5246709925417082527",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/vibrant-venom.svg",
      "tgs": "gifts/lunarsnake/assets/models/vibrant-venom.tgs"
    }
  },
  {
    "name": "White Grape",
    "customEmojiId": "5246708039926440831",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/white-grape.svg",
      "tgs": "gifts/lunarsnake/assets/models/white-grape.tgs"
    }
  },
  {
    "name": "Albino",
    "customEmojiId": "5244746751700660586",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/albino.svg",
      "tgs": "gifts/lunarsnake/assets/models/albino.tgs"
    }
  },
  {
    "name": "Black Mamba",
    "customEmojiId": "5244575519944502544",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/black-mamba.svg",
      "tgs": "gifts/lunarsnake/assets/models/black-mamba.tgs"
    }
  },
  {
    "name": "Blizzard",
    "customEmojiId": "5247038834012609230",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/blizzard.svg",
      "tgs": "gifts/lunarsnake/assets/models/blizzard.tgs"
    }
  },
  {
    "name": "Blood Adder",
    "customEmojiId": "5246719370050166687",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/blood-adder.svg",
      "tgs": "gifts/lunarsnake/assets/models/blood-adder.tgs"
    }
  },
  {
    "name": "Blue Boa",
    "customEmojiId": "5246812119868923116",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/blue-boa.svg",
      "tgs": "gifts/lunarsnake/assets/models/blue-boa.tgs"
    }
  },
  {
    "name": "Copperhead",
    "customEmojiId": "5247062817109991761",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/copperhead.svg",
      "tgs": "gifts/lunarsnake/assets/models/copperhead.tgs"
    }
  },
  {
    "name": "Dark Rattle",
    "customEmojiId": "5246834715691868194",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/dark-rattle.svg",
      "tgs": "gifts/lunarsnake/assets/models/dark-rattle.tgs"
    }
  },
  {
    "name": "Fallen Star",
    "customEmojiId": "5244895993224258902",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/fallen-star.svg",
      "tgs": "gifts/lunarsnake/assets/models/fallen-star.tgs"
    }
  },
  {
    "name": "Green Flakes",
    "customEmojiId": "5244576310218485000",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/green-flakes.svg",
      "tgs": "gifts/lunarsnake/assets/models/green-flakes.tgs"
    }
  },
  {
    "name": "Green Viper",
    "customEmojiId": "5244505791150450238",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/green-viper.svg",
      "tgs": "gifts/lunarsnake/assets/models/green-viper.tgs"
    }
  },
  {
    "name": "Lancehead",
    "customEmojiId": "5247090283425850181",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/lancehead.svg",
      "tgs": "gifts/lunarsnake/assets/models/lancehead.tgs"
    }
  },
  {
    "name": "Limescale",
    "customEmojiId": "5244883241466360993",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/limescale.svg",
      "tgs": "gifts/lunarsnake/assets/models/limescale.tgs"
    }
  },
  {
    "name": "Purple Mamba",
    "customEmojiId": "5244768174997529746",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/purple-mamba.svg",
      "tgs": "gifts/lunarsnake/assets/models/purple-mamba.tgs"
    }
  },
  {
    "name": "Red Reptile",
    "customEmojiId": "5244619925611375128",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/red-reptile.svg",
      "tgs": "gifts/lunarsnake/assets/models/red-reptile.tgs"
    }
  },
  {
    "name": "Saffron",
    "customEmojiId": "5244983537542653365",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/saffron.svg",
      "tgs": "gifts/lunarsnake/assets/models/saffron.tgs"
    }
  },
  {
    "name": "Water Snake",
    "customEmojiId": "5244740566947752388",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/water-snake.svg",
      "tgs": "gifts/lunarsnake/assets/models/water-snake.tgs"
    }
  },
  {
    "name": "Yellow Cobra",
    "customEmojiId": "5246844426612922684",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/lunarsnake/assets/models/yellow-cobra.svg",
      "tgs": "gifts/lunarsnake/assets/models/yellow-cobra.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/carrot.png"
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
      "png": "gifts/lunarsnake/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/flower.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/handset.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/mask.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/pizza-slice.png"
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
      "png": "gifts/lunarsnake/assets/patterns/plum.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/ufo.png"
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
      "png": "gifts/lunarsnake/assets/patterns/viking.png"
    }
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/burger.png"
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
      "png": "gifts/lunarsnake/assets/patterns/car.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/corn.png"
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
      "png": "gifts/lunarsnake/assets/patterns/crab.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/dolphin.png"
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
      "png": "gifts/lunarsnake/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/fire.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/key.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/mannaz-rune.png"
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
      "png": "gifts/lunarsnake/assets/patterns/maple.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/owl.png"
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
      "png": "gifts/lunarsnake/assets/patterns/phoenix.png"
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
      "png": "gifts/lunarsnake/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/potion.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/ring.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/thief.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/tulip.png"
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
      "png": "gifts/lunarsnake/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/boat.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/brain.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/cactus.png"
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
      "png": "gifts/lunarsnake/assets/patterns/clover.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/coin.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/cone.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/diamond.png"
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
      "png": "gifts/lunarsnake/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/dice.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/drug.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/elephant.png"
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
      "png": "gifts/lunarsnake/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/hand-of-god.png"
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
      "png": "gifts/lunarsnake/assets/patterns/kitsune.png"
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
      "png": "gifts/lunarsnake/assets/patterns/like.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/moon.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/pencil.png"
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
      "png": "gifts/lunarsnake/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/rocket.png"
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
      "png": "gifts/lunarsnake/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/strawberry.png"
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
      "png": "gifts/lunarsnake/assets/patterns/sun.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/watermelon.png"
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
      "png": "gifts/lunarsnake/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/candy.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/chest.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/stocking.png"
    }
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/winter-house.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/candle.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/hot-drink.png"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/mistletoe.png"
    }
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/mittens.png"
    }
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/snowflake.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/star.png"
    }
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/bowtie.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/christmas-tree.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/cookie.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/festive-wreath.png"
    }
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/fireworks.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/ice-skates.png"
    }
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/jingle-bell.png"
    }
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null,
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/new-year-s-eve.png"
    }
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/ornament.png"
    }
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/rudolph.png"
    }
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/santa-hat.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/snow-angel.png"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/snowman.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/lunarsnake/assets/patterns/white-deer.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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

export const collection = { slug: "lunarsnake", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
