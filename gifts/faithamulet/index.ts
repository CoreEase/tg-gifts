import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "6003456431095808759" as const;

export const models = [
  {
    "name": "Gold Night",
    "customEmojiId": "6003850958201690867",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/gold-night.svg",
      "tgs": "gifts/faithamulet/assets/models/gold-night.tgs"
    }
  },
  {
    "name": "Golden Lace",
    "customEmojiId": "6003717307409373641",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/golden-lace.svg",
      "tgs": "gifts/faithamulet/assets/models/golden-lace.tgs"
    }
  },
  {
    "name": "Ocean Glass",
    "customEmojiId": "6001306056934825040",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/ocean-glass.svg",
      "tgs": "gifts/faithamulet/assets/models/ocean-glass.tgs"
    }
  },
  {
    "name": "Ruby Drop",
    "customEmojiId": "6001453193924451124",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/ruby-drop.svg",
      "tgs": "gifts/faithamulet/assets/models/ruby-drop.tgs"
    }
  },
  {
    "name": "Dark Night",
    "customEmojiId": "6001530615004928114",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/dark-night.svg",
      "tgs": "gifts/faithamulet/assets/models/dark-night.tgs"
    }
  },
  {
    "name": "Eternal Light",
    "customEmojiId": "6001344307913562525",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/eternal-light.svg",
      "tgs": "gifts/faithamulet/assets/models/eternal-light.tgs"
    }
  },
  {
    "name": "Lightwoven",
    "customEmojiId": "6001351029537382674",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/lightwoven.svg",
      "tgs": "gifts/faithamulet/assets/models/lightwoven.tgs"
    }
  },
  {
    "name": "Miracle",
    "customEmojiId": "6001178324607441155",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/miracle.svg",
      "tgs": "gifts/faithamulet/assets/models/miracle.tgs"
    }
  },
  {
    "name": "Secret Bloom",
    "customEmojiId": "6001300898679103287",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/secret-bloom.svg",
      "tgs": "gifts/faithamulet/assets/models/secret-bloom.tgs"
    }
  },
  {
    "name": "Midnight",
    "customEmojiId": "6003736836625668630",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/midnight.svg",
      "tgs": "gifts/faithamulet/assets/models/midnight.tgs"
    }
  },
  {
    "name": "Moonlight",
    "customEmojiId": "6001494240926898695",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/moonlight.svg",
      "tgs": "gifts/faithamulet/assets/models/moonlight.tgs"
    }
  },
  {
    "name": "Obsidian",
    "customEmojiId": "6001061475727186534",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/obsidian.svg",
      "tgs": "gifts/faithamulet/assets/models/obsidian.tgs"
    }
  },
  {
    "name": "Princess",
    "customEmojiId": "6003762808292907367",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/princess.svg",
      "tgs": "gifts/faithamulet/assets/models/princess.tgs"
    }
  },
  {
    "name": "Soft Whisper",
    "customEmojiId": "6001400039409195084",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/soft-whisper.svg",
      "tgs": "gifts/faithamulet/assets/models/soft-whisper.tgs"
    }
  },
  {
    "name": "Starry Eve",
    "customEmojiId": "6001545776239483358",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/starry-eve.svg",
      "tgs": "gifts/faithamulet/assets/models/starry-eve.tgs"
    }
  },
  {
    "name": "Sunset Gem",
    "customEmojiId": "6001490719053715141",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/sunset-gem.svg",
      "tgs": "gifts/faithamulet/assets/models/sunset-gem.tgs"
    }
  },
  {
    "name": "Winter",
    "customEmojiId": "6001357356024207985",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/winter.svg",
      "tgs": "gifts/faithamulet/assets/models/winter.tgs"
    }
  },
  {
    "name": "Cool Breeze",
    "customEmojiId": "6003670616819898908",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/cool-breeze.svg",
      "tgs": "gifts/faithamulet/assets/models/cool-breeze.tgs"
    }
  },
  {
    "name": "Emerald",
    "customEmojiId": "6001203815238342553",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/emerald.svg",
      "tgs": "gifts/faithamulet/assets/models/emerald.tgs"
    }
  },
  {
    "name": "Ethereal",
    "customEmojiId": "6001469304346778826",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/ethereal.svg",
      "tgs": "gifts/faithamulet/assets/models/ethereal.tgs"
    }
  },
  {
    "name": "Moon Gem",
    "customEmojiId": "6003443163941837488",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/moon-gem.svg",
      "tgs": "gifts/faithamulet/assets/models/moon-gem.tgs"
    }
  },
  {
    "name": "Purple Dunes",
    "customEmojiId": "6001457390107499044",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/purple-dunes.svg",
      "tgs": "gifts/faithamulet/assets/models/purple-dunes.tgs"
    }
  },
  {
    "name": "Radiance",
    "customEmojiId": "6001490852197702292",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/radiance.svg",
      "tgs": "gifts/faithamulet/assets/models/radiance.tgs"
    }
  },
  {
    "name": "Serenity",
    "customEmojiId": "6001570901798165769",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/serenity.svg",
      "tgs": "gifts/faithamulet/assets/models/serenity.tgs"
    }
  },
  {
    "name": "Stained Glass",
    "customEmojiId": "6003405741891786838",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/stained-glass.svg",
      "tgs": "gifts/faithamulet/assets/models/stained-glass.tgs"
    }
  },
  {
    "name": "Starlace",
    "customEmojiId": "6001546493499022071",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/starlace.svg",
      "tgs": "gifts/faithamulet/assets/models/starlace.tgs"
    }
  },
  {
    "name": "Sunny Mosaic",
    "customEmojiId": "6001294593667113044",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/sunny-mosaic.svg",
      "tgs": "gifts/faithamulet/assets/models/sunny-mosaic.tgs"
    }
  },
  {
    "name": "Aurora",
    "customEmojiId": "6003586783353248973",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/aurora.svg",
      "tgs": "gifts/faithamulet/assets/models/aurora.tgs"
    }
  },
  {
    "name": "Azure Glow",
    "customEmojiId": "6003457745355807559",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/azure-glow.svg",
      "tgs": "gifts/faithamulet/assets/models/azure-glow.tgs"
    }
  },
  {
    "name": "Celestial Gem",
    "customEmojiId": "6001511364961507259",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/celestial-gem.svg",
      "tgs": "gifts/faithamulet/assets/models/celestial-gem.tgs"
    }
  },
  {
    "name": "Frosty Night",
    "customEmojiId": "6001136019179577198",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/frosty-night.svg",
      "tgs": "gifts/faithamulet/assets/models/frosty-night.tgs"
    }
  },
  {
    "name": "Greenstone",
    "customEmojiId": "6003622302732786594",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/greenstone.svg",
      "tgs": "gifts/faithamulet/assets/models/greenstone.tgs"
    }
  },
  {
    "name": "Lavender",
    "customEmojiId": "6001342121775208870",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/lavender.svg",
      "tgs": "gifts/faithamulet/assets/models/lavender.tgs"
    }
  },
  {
    "name": "Lilac Dream",
    "customEmojiId": "6001266667789753137",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/lilac-dream.svg",
      "tgs": "gifts/faithamulet/assets/models/lilac-dream.tgs"
    }
  },
  {
    "name": "Luminous",
    "customEmojiId": "6001572155928615339",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/luminous.svg",
      "tgs": "gifts/faithamulet/assets/models/luminous.tgs"
    }
  },
  {
    "name": "Morning Dew",
    "customEmojiId": "6003846418421259266",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/morning-dew.svg",
      "tgs": "gifts/faithamulet/assets/models/morning-dew.tgs"
    }
  },
  {
    "name": "Royal Green",
    "customEmojiId": "6001577872530087787",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/royal-green.svg",
      "tgs": "gifts/faithamulet/assets/models/royal-green.tgs"
    }
  },
  {
    "name": "Shiny Silk",
    "customEmojiId": "6001493072695794941",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/shiny-silk.svg",
      "tgs": "gifts/faithamulet/assets/models/shiny-silk.tgs"
    }
  },
  {
    "name": "Silver Charm",
    "customEmojiId": "6001465447466146462",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/silver-charm.svg",
      "tgs": "gifts/faithamulet/assets/models/silver-charm.tgs"
    }
  },
  {
    "name": "Silver Gold",
    "customEmojiId": "6003624394381859399",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/silver-gold.svg",
      "tgs": "gifts/faithamulet/assets/models/silver-gold.tgs"
    }
  },
  {
    "name": "Sunrise",
    "customEmojiId": "6003710349562353215",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/sunrise.svg",
      "tgs": "gifts/faithamulet/assets/models/sunrise.tgs"
    }
  },
  {
    "name": "Twilight Rose",
    "customEmojiId": "6001368140687088040",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/twilight-rose.svg",
      "tgs": "gifts/faithamulet/assets/models/twilight-rose.tgs"
    }
  },
  {
    "name": "Velvet Dusk",
    "customEmojiId": "6001133961890241407",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/velvet-dusk.svg",
      "tgs": "gifts/faithamulet/assets/models/velvet-dusk.tgs"
    }
  },
  {
    "name": "Bronze Tower",
    "customEmojiId": "6001531254955055143",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/bronze-tower.svg",
      "tgs": "gifts/faithamulet/assets/models/bronze-tower.tgs"
    }
  },
  {
    "name": "Constellation",
    "customEmojiId": "6001598797610752538",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/constellation.svg",
      "tgs": "gifts/faithamulet/assets/models/constellation.tgs"
    }
  },
  {
    "name": "Crystal Leaf",
    "customEmojiId": "6001366525779385202",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/crystal-leaf.svg",
      "tgs": "gifts/faithamulet/assets/models/crystal-leaf.tgs"
    }
  },
  {
    "name": "Lunar Veil",
    "customEmojiId": "6001475871351773623",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/lunar-veil.svg",
      "tgs": "gifts/faithamulet/assets/models/lunar-veil.tgs"
    }
  },
  {
    "name": "Mystic Tide",
    "customEmojiId": "6001413383872585231",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/mystic-tide.svg",
      "tgs": "gifts/faithamulet/assets/models/mystic-tide.tgs"
    }
  },
  {
    "name": "Rose Gold",
    "customEmojiId": "6001492355436256762",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/rose-gold.svg",
      "tgs": "gifts/faithamulet/assets/models/rose-gold.tgs"
    }
  },
  {
    "name": "Rose Pearl",
    "customEmojiId": "6003371261894335417",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/faithamulet/assets/models/rose-pearl.svg",
      "tgs": "gifts/faithamulet/assets/models/rose-pearl.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/candy.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/car.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/carambola.png"
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
      "png": "gifts/faithamulet/assets/patterns/carrot.png"
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
      "png": "gifts/faithamulet/assets/patterns/chili-pepper.png"
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
      "png": "gifts/faithamulet/assets/patterns/coconut.png"
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
      "png": "gifts/faithamulet/assets/patterns/flipper.png"
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
      "png": "gifts/faithamulet/assets/patterns/flower.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/glasses.png"
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
      "png": "gifts/faithamulet/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/lotus-flower.png"
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
      "png": "gifts/faithamulet/assets/patterns/mountain-goat.png"
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
      "png": "gifts/faithamulet/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pyramid.png"
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
      "png": "gifts/faithamulet/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/star.png"
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
      "png": "gifts/faithamulet/assets/patterns/strawberry.png"
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
      "png": "gifts/faithamulet/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/twin-koi.png"
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
      "png": "gifts/faithamulet/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bread.png"
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
      "png": "gifts/faithamulet/assets/patterns/candle.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/cat-mask.png"
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
      "png": "gifts/faithamulet/assets/patterns/corn.png"
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
      "png": "gifts/faithamulet/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/gear.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/handset.png"
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
      "png": "gifts/faithamulet/assets/patterns/key.png"
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
      "png": "gifts/faithamulet/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/light-bulb.png"
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
      "png": "gifts/faithamulet/assets/patterns/lightning.png"
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
      "png": "gifts/faithamulet/assets/patterns/maple.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/mountain-lion.png"
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
      "png": "gifts/faithamulet/assets/patterns/owl.png"
    }
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/paper-lantern.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/plum.png"
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
      "png": "gifts/faithamulet/assets/patterns/sea-horse.png"
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
      "png": "gifts/faithamulet/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/trophy.png"
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
      "png": "gifts/faithamulet/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/wasp.png"
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
      "png": "gifts/faithamulet/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/dolphin.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/fire.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/lemon.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/shell.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/turtle.png"
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
      "png": "gifts/faithamulet/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/sun.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bee.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/book.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/cap.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/clover.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/cone.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/crab.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/elephant.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/fish.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/gem.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/grape.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/kite.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/knight.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/koala.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/leaf.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/lily.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/moon.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/origami.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/palette.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/paw.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/planet.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/plume.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/rook.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/shield.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/tie.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/wagasa.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/chili.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/feather.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/ring.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/tulip.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/ball.png"
    }
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/cheese.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/apple.png"
    }
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bamboo.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/conch.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/melon.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/pear.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/faithamulet/assets/patterns/sprout.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "faithamulet", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
