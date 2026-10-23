import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "6050827940390765935" as const;

export const models = [
  {
    "name": "Gold",
    "customEmojiId": "5474161923010372224",
    "rarityPermille": 170,
    "originalRarityPermille": 170,
    "rarity": 17,
    "originalRarity": 17,
    "assets": {
      "svg": "gifts/algorithmcup/assets/models/gold.svg",
      "tgs": "gifts/algorithmcup/assets/models/gold.tgs"
    }
  },
  {
    "name": "Silver",
    "customEmojiId": "5474362764271071599",
    "rarityPermille": 330,
    "originalRarityPermille": 330,
    "rarity": 33,
    "originalRarity": 33,
    "assets": {
      "svg": "gifts/algorithmcup/assets/models/silver.svg",
      "tgs": "gifts/algorithmcup/assets/models/silver.tgs"
    }
  },
  {
    "name": "Bronze",
    "customEmojiId": "5474219733270176101",
    "rarityPermille": 500,
    "originalRarityPermille": 500,
    "rarity": 50,
    "originalRarity": 50,
    "assets": {
      "svg": "gifts/algorithmcup/assets/models/bronze.svg",
      "tgs": "gifts/algorithmcup/assets/models/bronze.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/like.png"
    }
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/morgenstern.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/paper-crane.png"
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
      "png": "gifts/algorithmcup/assets/patterns/puzzle.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/battle-axe.png"
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
      "png": "gifts/algorithmcup/assets/patterns/birthday-cake.png"
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
      "png": "gifts/algorithmcup/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/brain.png"
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
      "png": "gifts/algorithmcup/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/crusader-cross.png"
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
      "png": "gifts/algorithmcup/assets/patterns/egg.png"
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
      "png": "gifts/algorithmcup/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/flower-sun.png"
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
      "png": "gifts/algorithmcup/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/greek-sun.png"
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
      "png": "gifts/algorithmcup/assets/patterns/griffon.png"
    }
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/heater-shield.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/horned-helm.png"
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
      "png": "gifts/algorithmcup/assets/patterns/kitsune-mask.png"
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
      "png": "gifts/algorithmcup/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/moai-head.png"
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
      "png": "gifts/algorithmcup/assets/patterns/novus-ordo.png"
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
      "png": "gifts/algorithmcup/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/origami.png"
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
      "png": "gifts/algorithmcup/assets/patterns/palette.png"
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
      "png": "gifts/algorithmcup/assets/patterns/paw.png"
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
      "png": "gifts/algorithmcup/assets/patterns/plum.png"
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
      "png": "gifts/algorithmcup/assets/patterns/plume.png"
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
      "png": "gifts/algorithmcup/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/sharp-sword.png"
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
      "png": "gifts/algorithmcup/assets/patterns/spider-web.png"
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
      "png": "gifts/algorithmcup/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/thief.png"
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
      "png": "gifts/algorithmcup/assets/patterns/totem-bear.png"
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
      "png": "gifts/algorithmcup/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/war-tiger.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Easter Egg",
    "customEmojiId": "5199483835124843089",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/easter-egg.png"
    }
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/fedora.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/owl.png"
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
      "png": "gifts/algorithmcup/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Robin Hood",
    "customEmojiId": "5199634154685237795",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/robin-hood.png"
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
      "png": "gifts/algorithmcup/assets/patterns/steampunk-hat.png"
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
      "png": "gifts/algorithmcup/assets/patterns/sword.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/apple.png"
    }
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/banana.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/cap.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/clover.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/dice.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/feather.png"
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
      "png": "gifts/algorithmcup/assets/patterns/fire.png"
    }
  },
  {
    "name": "Flag",
    "customEmojiId": "5199874462400414430",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/flag.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/gamepad.png"
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
      "png": "gifts/algorithmcup/assets/patterns/gear.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/glasses.png"
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
      "png": "gifts/algorithmcup/assets/patterns/hazelnut.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/heart.png"
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
      "png": "gifts/algorithmcup/assets/patterns/heraldic-lily.png"
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
      "png": "gifts/algorithmcup/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/knight.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/narcissus.png"
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
      "png": "gifts/algorithmcup/assets/patterns/okami-wolf.png"
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
      "png": "gifts/algorithmcup/assets/patterns/planet.png"
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
      "png": "gifts/algorithmcup/assets/patterns/shield.png"
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
      "png": "gifts/algorithmcup/assets/patterns/shuriken.png"
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
      "png": "gifts/algorithmcup/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/spider.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/sun.png"
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
      "png": "gifts/algorithmcup/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/ufo.png"
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
      "png": "gifts/algorithmcup/assets/patterns/warhorse.png"
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
      "png": "gifts/algorithmcup/assets/patterns/winged-helmet.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/axe.png"
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
      "png": "gifts/algorithmcup/assets/patterns/ball.png"
    }
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/baseball-cap.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/bee.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/bug.png"
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
      "png": "gifts/algorithmcup/assets/patterns/cobra.png"
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
      "png": "gifts/algorithmcup/assets/patterns/dagger.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Eye of Horus",
    "customEmojiId": "5199790332581021201",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/eye-of-horus.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/kudu-totem.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Nemean Lion",
    "customEmojiId": "5199957797650858913",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/nemean-lion.png"
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
      "png": "gifts/algorithmcup/assets/patterns/ouroboros.png"
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
      "png": "gifts/algorithmcup/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/police-badge.png"
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
      "png": "gifts/algorithmcup/assets/patterns/rocket.png"
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
      "png": "gifts/algorithmcup/assets/patterns/scorpion.png"
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
      "png": "gifts/algorithmcup/assets/patterns/telescope.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/twin-peaks.png"
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
      "png": "gifts/algorithmcup/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/academic-cap.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/book.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/cash.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/chest.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/holy-grail.png"
    }
  },
  {
    "name": "La Corona",
    "customEmojiId": "5201947986711578027",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/la-corona.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/star.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Wizard Hat",
    "customEmojiId": "5199659452042611516",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/wizard-hat.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/yin-yang.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/dolphin.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Thor Hammer",
    "customEmojiId": "5199857621833649230",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/thor-hammer.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/gold.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Legionary",
    "customEmojiId": "5199428202413461386",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/legionary.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/moon.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/two-katanas.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/viking.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/viper.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/wise-raven.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/banner.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/crown.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/gem.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/sea-dragon.png"
    }
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/serpent.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/thunderbird.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/imperial-lion.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/algorithmcup/assets/patterns/trophy.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4
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
    "rarityPermille": 50,
    "originalRarityPermille": 50,
    "rarity": 5,
    "originalRarity": 5
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
    "rarityPermille": 50,
    "originalRarityPermille": 50,
    "rarity": 5,
    "originalRarity": 5
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
    "rarityPermille": 50,
    "originalRarityPermille": 50,
    "rarity": 5,
    "originalRarity": 5
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
    "rarityPermille": 50,
    "originalRarityPermille": 50,
    "rarity": 5,
    "originalRarity": 5
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
    "rarityPermille": 50,
    "originalRarityPermille": 50,
    "rarity": 5,
    "originalRarity": 5
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
    "rarityPermille": 60,
    "originalRarityPermille": 60,
    "rarity": 6,
    "originalRarity": 6
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
    "rarityPermille": 60,
    "originalRarityPermille": 60,
    "rarity": 6,
    "originalRarity": 6
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
    "rarityPermille": 60,
    "originalRarityPermille": 60,
    "rarity": 6,
    "originalRarity": 6
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
    "rarityPermille": 100,
    "originalRarityPermille": 100,
    "rarity": 10,
    "originalRarity": 10
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
    "rarityPermille": 100,
    "originalRarityPermille": 100,
    "rarity": 10,
    "originalRarity": 10
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
    "rarityPermille": 100,
    "originalRarityPermille": 100,
    "rarity": 10,
    "originalRarity": 10
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
    "rarityPermille": 150,
    "originalRarityPermille": 150,
    "rarity": 15,
    "originalRarity": 15
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "algorithmcup", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
