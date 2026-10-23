import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5983259145522906006" as const;

export const models = [
  {
    "name": "Berry Meadow",
    "customEmojiId": "5355020213119116238",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/berry-meadow.svg",
      "tgs": "gifts/winterwreath/assets/models/berry-meadow.tgs"
    }
  },
  {
    "name": "Black Kitty",
    "customEmojiId": "5354930259324070334",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/black-kitty.svg",
      "tgs": "gifts/winterwreath/assets/models/black-kitty.tgs"
    }
  },
  {
    "name": "Candles",
    "customEmojiId": "5354966818085695219",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/candles.svg",
      "tgs": "gifts/winterwreath/assets/models/candles.tgs"
    }
  },
  {
    "name": "Crossbones",
    "customEmojiId": "5355092188181066780",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/crossbones.svg",
      "tgs": "gifts/winterwreath/assets/models/crossbones.tgs"
    }
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5355220594818313899",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/fireworks.svg",
      "tgs": "gifts/winterwreath/assets/models/fireworks.tgs"
    }
  },
  {
    "name": "Hellfire",
    "customEmojiId": "5355327393475095050",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/hellfire.svg",
      "tgs": "gifts/winterwreath/assets/models/hellfire.tgs"
    }
  },
  {
    "name": "Love Smoke",
    "customEmojiId": "5354814179242964287",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/love-smoke.svg",
      "tgs": "gifts/winterwreath/assets/models/love-smoke.tgs"
    }
  },
  {
    "name": "Neon Sign",
    "customEmojiId": "5355028008484760307",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/neon-sign.svg",
      "tgs": "gifts/winterwreath/assets/models/neon-sign.tgs"
    }
  },
  {
    "name": "Seashell",
    "customEmojiId": "5357530776122448490",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/seashell.svg",
      "tgs": "gifts/winterwreath/assets/models/seashell.tgs"
    }
  },
  {
    "name": "Telegram",
    "customEmojiId": "5355039480342405447",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/telegram.svg",
      "tgs": "gifts/winterwreath/assets/models/telegram.tgs"
    }
  },
  {
    "name": "Festive Pepe",
    "customEmojiId": "5355055255757283990",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/festive-pepe.svg",
      "tgs": "gifts/winterwreath/assets/models/festive-pepe.tgs"
    }
  },
  {
    "name": "Fluffy",
    "customEmojiId": "5354799198397030313",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/fluffy.svg",
      "tgs": "gifts/winterwreath/assets/models/fluffy.tgs"
    }
  },
  {
    "name": "Moon Cat",
    "customEmojiId": "5355165503272807205",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/moon-cat.svg",
      "tgs": "gifts/winterwreath/assets/models/moon-cat.tgs"
    }
  },
  {
    "name": "Mouse",
    "customEmojiId": "5355115986594854067",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/mouse.svg",
      "tgs": "gifts/winterwreath/assets/models/mouse.tgs"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5355030924767555707",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/snowman.svg",
      "tgs": "gifts/winterwreath/assets/models/snowman.tgs"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5354982009385018592",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/spider-web.svg",
      "tgs": "gifts/winterwreath/assets/models/spider-web.tgs"
    }
  },
  {
    "name": "Wonderland",
    "customEmojiId": "5355274299089384413",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/wonderland.svg",
      "tgs": "gifts/winterwreath/assets/models/wonderland.tgs"
    }
  },
  {
    "name": "Candy Cane",
    "customEmojiId": "5355056879254926241",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/candy-cane.svg",
      "tgs": "gifts/winterwreath/assets/models/candy-cane.tgs"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5355081863079685829",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/gingerbread.svg",
      "tgs": "gifts/winterwreath/assets/models/gingerbread.tgs"
    }
  },
  {
    "name": "Holly Leaves",
    "customEmojiId": "5355152386442685289",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/holly-leaves.svg",
      "tgs": "gifts/winterwreath/assets/models/holly-leaves.tgs"
    }
  },
  {
    "name": "Butterfly",
    "customEmojiId": "5354904124448074946",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/butterfly.svg",
      "tgs": "gifts/winterwreath/assets/models/butterfly.tgs"
    }
  },
  {
    "name": "Halloween",
    "customEmojiId": "5354918095976687162",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/halloween.svg",
      "tgs": "gifts/winterwreath/assets/models/halloween.tgs"
    }
  },
  {
    "name": "Happy Santa",
    "customEmojiId": "5357238512187892272",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/happy-santa.svg",
      "tgs": "gifts/winterwreath/assets/models/happy-santa.tgs"
    }
  },
  {
    "name": "Heart Bell",
    "customEmojiId": "5355061977381103280",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/heart-bell.svg",
      "tgs": "gifts/winterwreath/assets/models/heart-bell.tgs"
    }
  },
  {
    "name": "Ornament",
    "customEmojiId": "5355106142529810855",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/ornament.svg",
      "tgs": "gifts/winterwreath/assets/models/ornament.tgs"
    }
  },
  {
    "name": "Winter Tea",
    "customEmojiId": "5357425386214941222",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/winter-tea.svg",
      "tgs": "gifts/winterwreath/assets/models/winter-tea.tgs"
    }
  },
  {
    "name": "Golden Bough",
    "customEmojiId": "5355027553218227888",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/golden-bough.svg",
      "tgs": "gifts/winterwreath/assets/models/golden-bough.tgs"
    }
  },
  {
    "name": "Rowan Berry",
    "customEmojiId": "5354830646147574067",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/rowan-berry.svg",
      "tgs": "gifts/winterwreath/assets/models/rowan-berry.tgs"
    }
  },
  {
    "name": "Aquamarine",
    "customEmojiId": "5355126096947867872",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/aquamarine.svg",
      "tgs": "gifts/winterwreath/assets/models/aquamarine.tgs"
    }
  },
  {
    "name": "Barbie Core",
    "customEmojiId": "5355312790586289424",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/barbie-core.svg",
      "tgs": "gifts/winterwreath/assets/models/barbie-core.tgs"
    }
  },
  {
    "name": "Berry Yogurt",
    "customEmojiId": "5357522203367728023",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/berry-yogurt.svg",
      "tgs": "gifts/winterwreath/assets/models/berry-yogurt.tgs"
    }
  },
  {
    "name": "Blueberry",
    "customEmojiId": "5355008530808075039",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/blueberry.svg",
      "tgs": "gifts/winterwreath/assets/models/blueberry.tgs"
    }
  },
  {
    "name": "Bubble Gum",
    "customEmojiId": "5355265258183223551",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/bubble-gum.svg",
      "tgs": "gifts/winterwreath/assets/models/bubble-gum.tgs"
    }
  },
  {
    "name": "Celebration",
    "customEmojiId": "5355113096081859609",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/celebration.svg",
      "tgs": "gifts/winterwreath/assets/models/celebration.tgs"
    }
  },
  {
    "name": "Cheesecake",
    "customEmojiId": "5355072835058431215",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/cheesecake.svg",
      "tgs": "gifts/winterwreath/assets/models/cheesecake.tgs"
    }
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5354867892103964309",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/chocolate.svg",
      "tgs": "gifts/winterwreath/assets/models/chocolate.tgs"
    }
  },
  {
    "name": "Cold Night",
    "customEmojiId": "5354926806170360894",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/cold-night.svg",
      "tgs": "gifts/winterwreath/assets/models/cold-night.tgs"
    }
  },
  {
    "name": "Coloring Book",
    "customEmojiId": "5354878990299457347",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/coloring-book.svg",
      "tgs": "gifts/winterwreath/assets/models/coloring-book.tgs"
    }
  },
  {
    "name": "Comics",
    "customEmojiId": "5355321440650423633",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/comics.svg",
      "tgs": "gifts/winterwreath/assets/models/comics.tgs"
    }
  },
  {
    "name": "Confetti",
    "customEmojiId": "5357299754126565522",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/confetti.svg",
      "tgs": "gifts/winterwreath/assets/models/confetti.tgs"
    }
  },
  {
    "name": "Cotton Candy",
    "customEmojiId": "5354967299122035957",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/cotton-candy.svg",
      "tgs": "gifts/winterwreath/assets/models/cotton-candy.tgs"
    }
  },
  {
    "name": "Dragee",
    "customEmojiId": "5355297637941671735",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/dragee.svg",
      "tgs": "gifts/winterwreath/assets/models/dragee.tgs"
    }
  },
  {
    "name": "Everbright",
    "customEmojiId": "5355306326660508328",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/everbright.svg",
      "tgs": "gifts/winterwreath/assets/models/everbright.tgs"
    }
  },
  {
    "name": "Evergreen",
    "customEmojiId": "5354890689790373701",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/evergreen.svg",
      "tgs": "gifts/winterwreath/assets/models/evergreen.tgs"
    }
  },
  {
    "name": "Festivity",
    "customEmojiId": "5354808157698814338",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/festivity.svg",
      "tgs": "gifts/winterwreath/assets/models/festivity.tgs"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5355179534930963906",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/flamingo.svg",
      "tgs": "gifts/winterwreath/assets/models/flamingo.tgs"
    }
  },
  {
    "name": "Frosty",
    "customEmojiId": "5354966324164454932",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/frosty.svg",
      "tgs": "gifts/winterwreath/assets/models/frosty.tgs"
    }
  },
  {
    "name": "Glimmer",
    "customEmojiId": "5355270669842016151",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/glimmer.svg",
      "tgs": "gifts/winterwreath/assets/models/glimmer.tgs"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5355135653250104187",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/grape.svg",
      "tgs": "gifts/winterwreath/assets/models/grape.tgs"
    }
  },
  {
    "name": "Harmony",
    "customEmojiId": "5355201331889991248",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/harmony.svg",
      "tgs": "gifts/winterwreath/assets/models/harmony.tgs"
    }
  },
  {
    "name": "Hearth",
    "customEmojiId": "5354932471232230051",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/hearth.svg",
      "tgs": "gifts/winterwreath/assets/models/hearth.tgs"
    }
  },
  {
    "name": "Honey Dew",
    "customEmojiId": "5355160512520810006",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/honey-dew.svg",
      "tgs": "gifts/winterwreath/assets/models/honey-dew.tgs"
    }
  },
  {
    "name": "Lemon Cake",
    "customEmojiId": "5354956269646015687",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/lemon-cake.svg",
      "tgs": "gifts/winterwreath/assets/models/lemon-cake.tgs"
    }
  },
  {
    "name": "Mojito",
    "customEmojiId": "5354802204874141109",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/mojito.svg",
      "tgs": "gifts/winterwreath/assets/models/mojito.tgs"
    }
  },
  {
    "name": "Mulled Wine",
    "customEmojiId": "5355252506425321591",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/mulled-wine.svg",
      "tgs": "gifts/winterwreath/assets/models/mulled-wine.tgs"
    }
  },
  {
    "name": "Negative",
    "customEmojiId": "5355341072945932647",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/negative.svg",
      "tgs": "gifts/winterwreath/assets/models/negative.tgs"
    }
  },
  {
    "name": "Night Bell",
    "customEmojiId": "5354995963733765020",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/night-bell.svg",
      "tgs": "gifts/winterwreath/assets/models/night-bell.tgs"
    }
  },
  {
    "name": "Noel Twist",
    "customEmojiId": "5355304801947116567",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/noel-twist.svg",
      "tgs": "gifts/winterwreath/assets/models/noel-twist.tgs"
    }
  },
  {
    "name": "Old Movie",
    "customEmojiId": "5355076326866838405",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/old-movie.svg",
      "tgs": "gifts/winterwreath/assets/models/old-movie.tgs"
    }
  },
  {
    "name": "Pine Bloom",
    "customEmojiId": "5355062286618750283",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/pine-bloom.svg",
      "tgs": "gifts/winterwreath/assets/models/pine-bloom.tgs"
    }
  },
  {
    "name": "Princess Day",
    "customEmojiId": "5355226500398344935",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/princess-day.svg",
      "tgs": "gifts/winterwreath/assets/models/princess-day.tgs"
    }
  },
  {
    "name": "Pumpkin",
    "customEmojiId": "5355306434034692931",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/pumpkin.svg",
      "tgs": "gifts/winterwreath/assets/models/pumpkin.tgs"
    }
  },
  {
    "name": "Raspberry",
    "customEmojiId": "5355230017976561622",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/raspberry.svg",
      "tgs": "gifts/winterwreath/assets/models/raspberry.tgs"
    }
  },
  {
    "name": "Snowball",
    "customEmojiId": "5355208989816681483",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/snowball.svg",
      "tgs": "gifts/winterwreath/assets/models/snowball.tgs"
    }
  },
  {
    "name": "Spirit",
    "customEmojiId": "5357162667360411328",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/spirit.svg",
      "tgs": "gifts/winterwreath/assets/models/spirit.tgs"
    }
  },
  {
    "name": "Sprinkles",
    "customEmojiId": "5355011782098317385",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/sprinkles.svg",
      "tgs": "gifts/winterwreath/assets/models/sprinkles.tgs"
    }
  },
  {
    "name": "Starry Night",
    "customEmojiId": "5354832892415469052",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/starry-night.svg",
      "tgs": "gifts/winterwreath/assets/models/starry-night.tgs"
    }
  },
  {
    "name": "Sunny Bunny",
    "customEmojiId": "5354965233242763534",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/sunny-bunny.svg",
      "tgs": "gifts/winterwreath/assets/models/sunny-bunny.tgs"
    }
  },
  {
    "name": "Tinsel",
    "customEmojiId": "5354848753729696531",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/tinsel.svg",
      "tgs": "gifts/winterwreath/assets/models/tinsel.tgs"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5357509279811134721",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/winterwreath/assets/models/unicorn.svg",
      "tgs": "gifts/winterwreath/assets/models/unicorn.tgs"
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
      "png": "gifts/winterwreath/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/apple.png"
    }
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/astronaut.png"
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
      "png": "gifts/winterwreath/assets/patterns/bandana.png"
    }
  },
  {
    "name": "Basketball",
    "customEmojiId": "5199728789994637327",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/basketball.png"
    }
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/beer.png"
    }
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/bike-helmet.png"
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
      "png": "gifts/winterwreath/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Bobby Helmet",
    "customEmojiId": "5199570082363115866",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/bobby-helmet.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/bone.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/bug.png"
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
      "png": "gifts/winterwreath/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/cavalier-hat.png"
    }
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/chef-hat.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/chili.png"
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
      "png": "gifts/winterwreath/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/clubs.png"
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
      "png": "gifts/winterwreath/assets/patterns/coat-of-arms.png"
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
      "png": "gifts/winterwreath/assets/patterns/coconut.png"
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
      "png": "gifts/winterwreath/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Conical Hat",
    "customEmojiId": "5199648817703584324",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/conical-hat.png"
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
      "png": "gifts/winterwreath/assets/patterns/corn.png"
    }
  },
  {
    "name": "Deerstalker",
    "customEmojiId": "5199479669006568749",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/deerstalker.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Earflap Hat",
    "customEmojiId": "5199932083681658304",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/earflap-hat.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/egg.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/fenrir.png"
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
      "png": "gifts/winterwreath/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/flashlight.png"
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
      "png": "gifts/winterwreath/assets/patterns/flower.png"
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
      "png": "gifts/winterwreath/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/gem.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/greek-helmet.png"
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
      "png": "gifts/winterwreath/assets/patterns/guitar.png"
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
      "png": "gifts/winterwreath/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/heart.png"
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
      "png": "gifts/winterwreath/assets/patterns/hedgehog.png"
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
      "png": "gifts/winterwreath/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/leaf.png"
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
      "png": "gifts/winterwreath/assets/patterns/lily.png"
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
      "png": "gifts/winterwreath/assets/patterns/lion-king.png"
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
      "png": "gifts/winterwreath/assets/patterns/lotus-flower.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/magic-vial.png"
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
      "png": "gifts/winterwreath/assets/patterns/maple-leaf.png"
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
      "png": "gifts/winterwreath/assets/patterns/mask.png"
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
      "png": "gifts/winterwreath/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/monarch.png"
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
      "png": "gifts/winterwreath/assets/patterns/money-bag.png"
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
      "png": "gifts/winterwreath/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/moon-cross.png"
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
      "png": "gifts/winterwreath/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/narcissus.png"
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
      "png": "gifts/winterwreath/assets/patterns/novus-ordo.png"
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
      "png": "gifts/winterwreath/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/old-candle.png"
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
      "png": "gifts/winterwreath/assets/patterns/peaked-cap.png"
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
      "png": "gifts/winterwreath/assets/patterns/pear.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/phoenix.png"
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
      "png": "gifts/winterwreath/assets/patterns/pineapple.png"
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
      "png": "gifts/winterwreath/assets/patterns/pizza-slice.png"
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
      "png": "gifts/winterwreath/assets/patterns/planet.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/potion.png"
    }
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/press-hat.png"
    }
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/propeller-cap.png"
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
      "png": "gifts/winterwreath/assets/patterns/robin-hood.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/sea-horse.png"
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
      "png": "gifts/winterwreath/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Shako",
    "customEmojiId": "5199855955386337078",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/shako.png"
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
      "png": "gifts/winterwreath/assets/patterns/shell.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/shinto-shrine.png"
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
      "png": "gifts/winterwreath/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/spider.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/spirit-impala.png"
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
      "png": "gifts/winterwreath/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/tamagotchi.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/teru-bozu.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/thunderbird.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/tooth.png"
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
      "png": "gifts/winterwreath/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/turban.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/two-katanas.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/venetian-mask.png"
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
      "png": "gifts/winterwreath/assets/patterns/viking.png"
    }
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/war-bonnet.png"
    }
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/bowtie.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/candle.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/fireworks.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/ice-skates.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null,
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/new-year-s-eve.png"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/snowman.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/candy.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/mittens.png"
    }
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/santa-hat.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/star.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/chest.png"
    }
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/christmas-tree.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/cookie.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/festive-wreath.png"
    }
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/hot-drink.png"
    }
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/jingle-bell.png"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/mistletoe.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/ornament.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/rudolph.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/snow-angel.png"
    }
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/snowflake.png"
    }
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/stocking.png"
    }
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "png": "gifts/winterwreath/assets/patterns/winter-house.png"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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

export const collection = { slug: "winterwreath", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
