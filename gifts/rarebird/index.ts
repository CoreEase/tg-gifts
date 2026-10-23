import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5999116401002939514" as const;

export const models = [
  {
    "name": "Fiscal Hawk",
    "customEmojiId": "5193043278261429220",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/fiscal-hawk.svg",
      "tgs": "gifts/rarebird/assets/models/fiscal-hawk.tgs"
    }
  },
  {
    "name": "Frozen Gold",
    "customEmojiId": "5192825132577496810",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/frozen-gold.svg",
      "tgs": "gifts/rarebird/assets/models/frozen-gold.tgs"
    }
  },
  {
    "name": "Royal Pavo",
    "customEmojiId": "5195161410102923927",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/royal-pavo.svg",
      "tgs": "gifts/rarebird/assets/models/royal-pavo.tgs"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5192912492212295921",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/thunderbird.svg",
      "tgs": "gifts/rarebird/assets/models/thunderbird.tgs"
    }
  },
  {
    "name": "Zombie Rider",
    "customEmojiId": "5193015335204197525",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/zombie-rider.svg",
      "tgs": "gifts/rarebird/assets/models/zombie-rider.tgs"
    }
  },
  {
    "name": "Dark Knight",
    "customEmojiId": "5193075353077191964",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/rarebird/assets/models/dark-knight.svg",
      "tgs": "gifts/rarebird/assets/models/dark-knight.tgs"
    }
  },
  {
    "name": "Dark Prince",
    "customEmojiId": "5193211095518580009",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/rarebird/assets/models/dark-prince.svg",
      "tgs": "gifts/rarebird/assets/models/dark-prince.tgs"
    }
  },
  {
    "name": "Hot Chick",
    "customEmojiId": "5192794908892634550",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/rarebird/assets/models/hot-chick.svg",
      "tgs": "gifts/rarebird/assets/models/hot-chick.tgs"
    }
  },
  {
    "name": "Lucifer",
    "customEmojiId": "5195400944723990744",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/rarebird/assets/models/lucifer.svg",
      "tgs": "gifts/rarebird/assets/models/lucifer.tgs"
    }
  },
  {
    "name": "Rose Fairy",
    "customEmojiId": "5195448034745421630",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/rarebird/assets/models/rose-fairy.svg",
      "tgs": "gifts/rarebird/assets/models/rose-fairy.tgs"
    }
  },
  {
    "name": "Ruby Dodo",
    "customEmojiId": "5192957649498444974",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/rarebird/assets/models/ruby-dodo.svg",
      "tgs": "gifts/rarebird/assets/models/ruby-dodo.tgs"
    }
  },
  {
    "name": "Wave Glider",
    "customEmojiId": "5193169786523129188",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/rarebird/assets/models/wave-glider.svg",
      "tgs": "gifts/rarebird/assets/models/wave-glider.tgs"
    }
  },
  {
    "name": "Apex Drone",
    "customEmojiId": "5193150064033307787",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/apex-drone.svg",
      "tgs": "gifts/rarebird/assets/models/apex-drone.tgs"
    }
  },
  {
    "name": "Aurora Moth",
    "customEmojiId": "5193078978029591403",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/aurora-moth.svg",
      "tgs": "gifts/rarebird/assets/models/aurora-moth.tgs"
    }
  },
  {
    "name": "Black Hawk",
    "customEmojiId": "5192803958388725357",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/black-hawk.svg",
      "tgs": "gifts/rarebird/assets/models/black-hawk.tgs"
    }
  },
  {
    "name": "Dragon",
    "customEmojiId": "5193007325090193262",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/dragon.svg",
      "tgs": "gifts/rarebird/assets/models/dragon.tgs"
    }
  },
  {
    "name": "Fire Rooster",
    "customEmojiId": "5193189642156939544",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/fire-rooster.svg",
      "tgs": "gifts/rarebird/assets/models/fire-rooster.tgs"
    }
  },
  {
    "name": "Gargoyle",
    "customEmojiId": "5193004168289231077",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/gargoyle.svg",
      "tgs": "gifts/rarebird/assets/models/gargoyle.tgs"
    }
  },
  {
    "name": "Gilded Heron",
    "customEmojiId": "5192918384907429753",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/gilded-heron.svg",
      "tgs": "gifts/rarebird/assets/models/gilded-heron.tgs"
    }
  },
  {
    "name": "Golden Falcon",
    "customEmojiId": "5193171478740242731",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/golden-falcon.svg",
      "tgs": "gifts/rarebird/assets/models/golden-falcon.tgs"
    }
  },
  {
    "name": "Manticore",
    "customEmojiId": "5195151819440949202",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/manticore.svg",
      "tgs": "gifts/rarebird/assets/models/manticore.tgs"
    }
  },
  {
    "name": "Shadow Raven",
    "customEmojiId": "5195129932287611384",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/shadow-raven.svg",
      "tgs": "gifts/rarebird/assets/models/shadow-raven.tgs"
    }
  },
  {
    "name": "Sphinx",
    "customEmojiId": "5192700544166171082",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/sphinx.svg",
      "tgs": "gifts/rarebird/assets/models/sphinx.tgs"
    }
  },
  {
    "name": "Treasure",
    "customEmojiId": "5195351277722179508",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/treasure.svg",
      "tgs": "gifts/rarebird/assets/models/treasure.tgs"
    }
  },
  {
    "name": "Winged Victory",
    "customEmojiId": "5194970932598313514",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/winged-victory.svg",
      "tgs": "gifts/rarebird/assets/models/winged-victory.tgs"
    }
  },
  {
    "name": "Bat King",
    "customEmojiId": "5194909840983497064",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/rarebird/assets/models/bat-king.svg",
      "tgs": "gifts/rarebird/assets/models/bat-king.tgs"
    }
  },
  {
    "name": "Battlewing",
    "customEmojiId": "5192867403645621534",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/rarebird/assets/models/battlewing.svg",
      "tgs": "gifts/rarebird/assets/models/battlewing.tgs"
    }
  },
  {
    "name": "Crystal Swift",
    "customEmojiId": "5192732030571418239",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/rarebird/assets/models/crystal-swift.svg",
      "tgs": "gifts/rarebird/assets/models/crystal-swift.tgs"
    }
  },
  {
    "name": "Diamond Owl",
    "customEmojiId": "5192682668512287682",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/rarebird/assets/models/diamond-owl.svg",
      "tgs": "gifts/rarebird/assets/models/diamond-owl.tgs"
    }
  },
  {
    "name": "Hippogriff",
    "customEmojiId": "5193107986238709475",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/rarebird/assets/models/hippogriff.svg",
      "tgs": "gifts/rarebird/assets/models/hippogriff.tgs"
    }
  },
  {
    "name": "Icarus",
    "customEmojiId": "5195392324724625595",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/rarebird/assets/models/icarus.svg",
      "tgs": "gifts/rarebird/assets/models/icarus.tgs"
    }
  },
  {
    "name": "Necromancer",
    "customEmojiId": "5192935878309219716",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/rarebird/assets/models/necromancer.svg",
      "tgs": "gifts/rarebird/assets/models/necromancer.tgs"
    }
  },
  {
    "name": "Prehistoric",
    "customEmojiId": "5192661112071428440",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/rarebird/assets/models/prehistoric.svg",
      "tgs": "gifts/rarebird/assets/models/prehistoric.tgs"
    }
  },
  {
    "name": "Chickadee",
    "customEmojiId": "5192805014950681479",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/chickadee.svg",
      "tgs": "gifts/rarebird/assets/models/chickadee.tgs"
    }
  },
  {
    "name": "Garnet Koel",
    "customEmojiId": "5193104829437746732",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/garnet-koel.svg",
      "tgs": "gifts/rarebird/assets/models/garnet-koel.tgs"
    }
  },
  {
    "name": "Kakapo",
    "customEmojiId": "5192919681987552093",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/kakapo.svg",
      "tgs": "gifts/rarebird/assets/models/kakapo.tgs"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5192931566162056389",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/pegasus.svg",
      "tgs": "gifts/rarebird/assets/models/pegasus.tgs"
    }
  },
  {
    "name": "Silver Spike",
    "customEmojiId": "5192920257513166849",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/silver-spike.svg",
      "tgs": "gifts/rarebird/assets/models/silver-spike.tgs"
    }
  },
  {
    "name": "Silver Wings",
    "customEmojiId": "5195308779020783144",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/silver-wings.svg",
      "tgs": "gifts/rarebird/assets/models/silver-wings.tgs"
    }
  },
  {
    "name": "The Emperor",
    "customEmojiId": "5192872819599381247",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/the-emperor.svg",
      "tgs": "gifts/rarebird/assets/models/the-emperor.tgs"
    }
  },
  {
    "name": "Copper Quack",
    "customEmojiId": "5193155265238700421",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/rarebird/assets/models/copper-quack.svg",
      "tgs": "gifts/rarebird/assets/models/copper-quack.tgs"
    }
  },
  {
    "name": "Pigeon",
    "customEmojiId": "5193068141827104462",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/rarebird/assets/models/pigeon.svg",
      "tgs": "gifts/rarebird/assets/models/pigeon.tgs"
    }
  },
  {
    "name": "Red Vulture",
    "customEmojiId": "5193098094929026381",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/rarebird/assets/models/red-vulture.svg",
      "tgs": "gifts/rarebird/assets/models/red-vulture.tgs"
    }
  },
  {
    "name": "Amber Toucan",
    "customEmojiId": "5193197171234611886",
    "rarityPermille": 35,
    "originalRarityPermille": 35,
    "rarity": 3.5,
    "originalRarity": 3.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/amber-toucan.svg",
      "tgs": "gifts/rarebird/assets/models/amber-toucan.tgs"
    }
  },
  {
    "name": "Azure Spark",
    "customEmojiId": "5192748037914534027",
    "rarityPermille": 35,
    "originalRarityPermille": 35,
    "rarity": 3.5,
    "originalRarity": 3.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/azure-spark.svg",
      "tgs": "gifts/rarebird/assets/models/azure-spark.tgs"
    }
  },
  {
    "name": "Crystal Swan",
    "customEmojiId": "5193037145048131827",
    "rarityPermille": 35,
    "originalRarityPermille": 35,
    "rarity": 3.5,
    "originalRarity": 3.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/crystal-swan.svg",
      "tgs": "gifts/rarebird/assets/models/crystal-swan.tgs"
    }
  },
  {
    "name": "Jade Jay",
    "customEmojiId": "5193162111416569832",
    "rarityPermille": 35,
    "originalRarityPermille": 35,
    "rarity": 3.5,
    "originalRarity": 3.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/jade-jay.svg",
      "tgs": "gifts/rarebird/assets/models/jade-jay.tgs"
    }
  },
  {
    "name": "Noble Puffin",
    "customEmojiId": "5192671617561435206",
    "rarityPermille": 35,
    "originalRarityPermille": 35,
    "rarity": 3.5,
    "originalRarity": 3.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/noble-puffin.svg",
      "tgs": "gifts/rarebird/assets/models/noble-puffin.tgs"
    }
  },
  {
    "name": "Pelican",
    "customEmojiId": "5192785863691505417",
    "rarityPermille": 35,
    "originalRarityPermille": 35,
    "rarity": 3.5,
    "originalRarity": 3.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/pelican.svg",
      "tgs": "gifts/rarebird/assets/models/pelican.tgs"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5192672729957969411",
    "rarityPermille": 35,
    "originalRarityPermille": 35,
    "rarity": 3.5,
    "originalRarity": 3.5,
    "assets": {
      "svg": "gifts/rarebird/assets/models/phoenix.svg",
      "tgs": "gifts/rarebird/assets/models/phoenix.tgs"
    }
  },
  {
    "name": "Paradise",
    "customEmojiId": "5193092197938929283",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/rarebird/assets/models/paradise.svg",
      "tgs": "gifts/rarebird/assets/models/paradise.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/ball.png"
    }
  },
  {
    "name": "Bandana",
    "customEmojiId": "5199711902183232393",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/bandana.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Beret",
    "customEmojiId": "5199710124066771918",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/beret.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/celtic-wolf.png"
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
      "png": "gifts/rarebird/assets/patterns/coconut.png"
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
      "png": "gifts/rarebird/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Divine Falcon",
    "customEmojiId": "5199678478747732305",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/divine-falcon.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/feather.png"
    }
  },
  {
    "name": "Fez",
    "customEmojiId": "5199554328423076266",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/fez.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/griffon.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Jester Hat",
    "customEmojiId": "5199676378508724814",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/jester-hat.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Legionary",
    "customEmojiId": "5199428202413461386",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/legionary.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/like.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/lion-king.png"
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
      "png": "gifts/rarebird/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/mustache.png"
    }
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/novus-ordo.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/owl.png"
    }
  },
  {
    "name": "Peaked Cap",
    "customEmojiId": "5199944066640415730",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/peaked-cap.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/pencil.png"
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
      "png": "gifts/rarebird/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Pith Helmet",
    "customEmojiId": "5199425878836152426",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/pith-helmet.png"
    }
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/police-hat.png"
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
      "png": "gifts/rarebird/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/ramen.png"
    }
  },
  {
    "name": "Robin Hood",
    "customEmojiId": "5199634154685237795",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/robin-hood.png"
    }
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/rooster.png"
    }
  },
  {
    "name": "Sombrero",
    "customEmojiId": "5199736203108190403",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/sombrero.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/tricorne.png"
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
      "png": "gifts/rarebird/assets/patterns/unicorn-head.png"
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
      "png": "gifts/rarebird/assets/patterns/viking.png"
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
      "png": "gifts/rarebird/assets/patterns/viper.png"
    }
  },
  {
    "name": "Visor",
    "customEmojiId": "5199623855353661732",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/visor.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/wontons.png"
    }
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/academic-cap.png"
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
      "png": "gifts/rarebird/assets/patterns/aztec-totem.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/book.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/brain.png"
    }
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/bucket-hat.png"
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
      "png": "gifts/rarebird/assets/patterns/cactus.png"
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
      "png": "gifts/rarebird/assets/patterns/chef-hat.png"
    }
  },
  {
    "name": "Egg Basket",
    "customEmojiId": "5199573548401720659",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/egg-basket.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/fishing-hook.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/flower-sun.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/gingerbread.png"
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
      "png": "gifts/rarebird/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/hazelnut.png"
    }
  },
  {
    "name": "Hersir",
    "customEmojiId": "5199923815869616574",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/hersir.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/horned-helm.png"
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
      "png": "gifts/rarebird/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Iron Helmet",
    "customEmojiId": "5199857089257702611",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/iron-helmet.png"
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
      "png": "gifts/rarebird/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Khinkali",
    "customEmojiId": "5199559430844221150",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/khinkali.png"
    }
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/lotus-flower.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/moon.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/pegasus.png"
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
      "png": "gifts/rarebird/assets/patterns/pilot-hat.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/police-badge.png"
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
      "png": "gifts/rarebird/assets/patterns/pomegranate.png"
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
      "png": "gifts/rarebird/assets/patterns/press-hat.png"
    }
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/propeller-cap.png"
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
      "png": "gifts/rarebird/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/serpent.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/shield.png"
    }
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/shuriken.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/silver-ibis.png"
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
      "png": "gifts/rarebird/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/watching-sun.png"
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
      "png": "gifts/rarebird/assets/patterns/winged-helmet.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/astronaut.png"
    }
  },
  {
    "name": "Basketball",
    "customEmojiId": "5199728789994637327",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/basketball.png"
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
      "png": "gifts/rarebird/assets/patterns/bowler-hat.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/car.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/corn.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Hard Hat",
    "customEmojiId": "5199914431366072974",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/hard-hat.png"
    }
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/meat-leg.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/pear.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Winter Hat",
    "customEmojiId": "5199676112220754626",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/winter-hat.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/all-seeing-eye.png"
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
      "png": "gifts/rarebird/assets/patterns/anchor.png"
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
      "png": "gifts/rarebird/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/axe.png"
    }
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/aztec-falcon.png"
    }
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/banana.png"
    }
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/banner.png"
    }
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/bearskin.png"
    }
  },
  {
    "name": "Bicorne",
    "customEmojiId": "5199462042460782106",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/bicorne.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/burger.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/candy.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/cavalier-hat.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/chili.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/conch.png"
    }
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/coonskin-cap.png"
    }
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/cowboy-hat.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Deerstalker",
    "customEmojiId": "5199479669006568749",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/deerstalker.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/drug.png"
    }
  },
  {
    "name": "Easter Bunny",
    "customEmojiId": "5199627626334947886",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/easter-bunny.png"
    }
  },
  {
    "name": "Easter Egg",
    "customEmojiId": "5199483835124843089",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/easter-egg.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Flag",
    "customEmojiId": "5199874462400414430",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/flag.png"
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
      "png": "gifts/rarebird/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/golden-scarab.png"
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
      "png": "gifts/rarebird/assets/patterns/grape.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/hedgehog.png"
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
      "png": "gifts/rarebird/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Kashket",
    "customEmojiId": "5199448672227594010",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/kashket.png"
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
      "png": "gifts/rarebird/assets/patterns/koala.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/kudu-totem.png"
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
      "png": "gifts/rarebird/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/magic-wand.png"
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
      "png": "gifts/rarebird/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/monarch.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/morgenstern.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Nemean Lion",
    "customEmojiId": "5199957797650858913",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/nemean-lion.png"
    }
  },
  {
    "name": "Neptune",
    "customEmojiId": "5199805712858906090",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/neptune.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/paper-lantern.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/ram-of-amun.png"
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
      "png": "gifts/rarebird/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/sauron.png"
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
      "png": "gifts/rarebird/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/sea-horse.png"
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
      "png": "gifts/rarebird/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/shell.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/spanner.png"
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
      "png": "gifts/rarebird/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/star.png"
    }
  },
  {
    "name": "Straw Hat",
    "customEmojiId": "5199475953859857051",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/straw-hat.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Sushi Rolls",
    "customEmojiId": "5199851312526692154",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/sushi-rolls.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/sword.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/teru-bozu.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/two-katanas.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/war-bonnet.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/rarebird/assets/patterns/wreath.png"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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

export const collection = { slug: "rarebird", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
