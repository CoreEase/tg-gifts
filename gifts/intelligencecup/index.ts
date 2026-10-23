import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Gold",
    "customEmojiId": "5469668742973662988",
    "assets": {
      "svg": "gifts/intelligencecup/assets/models/gold.svg",
      "tgs": "gifts/intelligencecup/assets/models/gold.tgs"
    }
  },
  {
    "name": "Silver",
    "customEmojiId": "5469834898078477178",
    "assets": {
      "svg": "gifts/intelligencecup/assets/models/silver.svg",
      "tgs": "gifts/intelligencecup/assets/models/silver.tgs"
    }
  },
  {
    "name": "Bronze",
    "customEmojiId": "5470073938778305649",
    "assets": {
      "svg": "gifts/intelligencecup/assets/models/bronze.svg",
      "tgs": "gifts/intelligencecup/assets/models/bronze.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/morgenstern.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/like.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/plume.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/flower-sun.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/griffon.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/paw.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/leaf.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/bee.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/palette.png"
    }
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/heater-shield.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/viking.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/thief.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/viper.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/brain.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/kitsune-mask.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/novus-ordo.png"
    }
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/war-tiger.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/monarch.png"
    }
  },
  {
    "name": "Iron Helmet",
    "customEmojiId": "5199857089257702611",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/iron-helmet.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/moai-head.png"
    }
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/battle-axe.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/horned-helm.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Earth",
    "customEmojiId": "5199963814900042040",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/earth.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/egg.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/two-katanas.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/puzzle.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sword.png"
    }
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/lotus-flower.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Easter Egg",
    "customEmojiId": "5199483835124843089",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/easter-egg.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/cone.png"
    }
  },
  {
    "name": "Robin Hood",
    "customEmojiId": "5199634154685237795",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/robin-hood.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/owl.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/fedora.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/gear.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/planet.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/heart.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/fire.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/clover.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/steampunk-hat.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/cap.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/spider.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/warhorse.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sun.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/dice.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/knight.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/origami.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/lily.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/apple.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/plum.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/hazelnut.png"
    }
  },
  {
    "name": "Thor Hammer",
    "customEmojiId": "5199857621833649230",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/thor-hammer.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/maple.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/feather.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/paw-print.png"
    }
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/shuriken.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Winged Helmet",
    "customEmojiId": "5199518650129746938",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/winged-helmet.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/axe.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/ball.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Flag",
    "customEmojiId": "5199874462400414430",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/flag.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Nemean Lion",
    "customEmojiId": "5199957797650858913",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/nemean-lion.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/kudu-totem.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/baseball-cap.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/dagger.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/academic-cap.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/book.png"
    }
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/holy-grail.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/cash.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/chest.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/shield.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/yin-yang.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/star.png"
    }
  },
  {
    "name": "La Corona",
    "customEmojiId": "5201947986711578027",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/la-corona.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Wizard Hat",
    "customEmojiId": "5199659452042611516",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/wizard-hat.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/dolphin.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/wise-raven.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/moon.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/gold.png"
    }
  },
  {
    "name": "Legionary",
    "customEmojiId": "5199428202413461386",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/legionary.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/gem.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/banner.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/sea-dragon.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/crown.png"
    }
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/serpent.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/imperial-lion.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/thunderbird.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/intelligencecup/assets/patterns/cicada.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
  {
    "name": "Copper",
    "customEmojiId": "5375444380339435270",
    "hex": {
      "centerColor": "#d08656",
      "edgeColor": "#9d6531",
      "patternColor": "#602901",
      "textColor": "#f4d8be"
    }
  },
  {
    "name": "Battleship Grey",
    "customEmojiId": "5375258223571925187",
    "hex": {
      "centerColor": "#8c8c85",
      "edgeColor": "#6c6c66",
      "patternColor": "#2b2a20",
      "textColor": "#cfcec4"
    }
  },
  {
    "name": "Feldgrau",
    "customEmojiId": "5375107384320485908",
    "hex": {
      "centerColor": "#899288",
      "edgeColor": "#5e6b63",
      "patternColor": "#1c261f",
      "textColor": "#dee9e1"
    }
  },
  {
    "name": "Old Gold",
    "customEmojiId": "5375123404548499298",
    "hex": {
      "centerColor": "#b58d38",
      "edgeColor": "#946925",
      "patternColor": "#4f3302",
      "textColor": "#ffdd8c"
    }
  },
  {
    "name": "Neon Blue",
    "customEmojiId": "5375064164064586786",
    "hex": {
      "centerColor": "#7596f9",
      "edgeColor": "#6862e4",
      "patternColor": "#2828bc",
      "textColor": "#cfddff"
    }
  },
  {
    "name": "Navy Blue",
    "customEmojiId": "5375095358412057425",
    "hex": {
      "centerColor": "#6c9edd",
      "edgeColor": "#5c6ec9",
      "patternColor": "#1239a2",
      "textColor": "#d3e1ff"
    }
  },
  {
    "name": "Sapphire",
    "customEmojiId": "5377394836657695827",
    "hex": {
      "centerColor": "#58a3c8",
      "edgeColor": "#5379c2",
      "patternColor": "#0d45b6",
      "textColor": "#c1deff"
    }
  },
  {
    "name": "Silver Blue",
    "customEmojiId": "5375068162679139533",
    "hex": {
      "centerColor": "#80a4b8",
      "edgeColor": "#607c91",
      "patternColor": "#15374b",
      "textColor": "#c9e4f4"
    }
  },
  {
    "name": "Steel Grey",
    "customEmojiId": "5377767863157283654",
    "hex": {
      "centerColor": "#97a2ac",
      "edgeColor": "#63727c",
      "patternColor": "#334552",
      "textColor": "#dfe4e8"
    }
  },
  {
    "name": "Roman Silver",
    "customEmojiId": "5375482502469152633",
    "hex": {
      "centerColor": "#a3a8b5",
      "edgeColor": "#7c808a",
      "patternColor": "#3f4550",
      "textColor": "#dadfe2"
    }
  },
  {
    "name": "Amber",
    "customEmojiId": "5375590628270831231",
    "hex": {
      "centerColor": "#dab345",
      "edgeColor": "#b1802a",
      "patternColor": "#7a3100",
      "textColor": "#ffedc7"
    }
  },
  {
    "name": "Ivory White",
    "customEmojiId": "5375500438252580046",
    "hex": {
      "centerColor": "#bab6b1",
      "edgeColor": "#a19d97",
      "patternColor": "#665f52",
      "textColor": "#f5f4f2"
    }
  },
  {
    "name": "Platinum",
    "customEmojiId": "5375209243764877171",
    "hex": {
      "centerColor": "#b2aea7",
      "edgeColor": "#88847e",
      "patternColor": "#3d382d",
      "textColor": "#e9e7e2"
    }
  },
  {
    "name": "Pure Gold",
    "customEmojiId": "5377566347586724653",
    "hex": {
      "centerColor": "#ccab41",
      "edgeColor": "#987b32",
      "patternColor": "#703c00",
      "textColor": "#ffe5ab"
    }
  },
  {
    "name": "Satin Gold",
    "customEmojiId": "5377843106689344328",
    "hex": {
      "centerColor": "#bf9b47",
      "edgeColor": "#8d7739",
      "patternColor": "#5d3b00",
      "textColor": "#fee4a9"
    }
  },
  {
    "name": "Gunmetal",
    "customEmojiId": "5375182267075292360",
    "hex": {
      "centerColor": "#4c5d63",
      "edgeColor": "#2f3b42",
      "patternColor": "#04080a",
      "textColor": "#b6c5cc"
    }
  },
  {
    "name": "Midnight Blue",
    "customEmojiId": "5375050733701852215",
    "hex": {
      "centerColor": "#5c6985",
      "edgeColor": "#354057",
      "patternColor": "#030a18",
      "textColor": "#bfcce0"
    }
  },
  {
    "name": "Onyx Black",
    "customEmojiId": "5377775263385937055",
    "hex": {
      "centerColor": "#4d5254",
      "edgeColor": "#313638",
      "patternColor": "#000000",
      "textColor": "#a9abad"
    }
  },
  {
    "name": "Black",
    "customEmojiId": "5377437666071568792",
    "hex": {
      "centerColor": "#363738",
      "edgeColor": "#0e0f0f",
      "patternColor": "#6c6868",
      "textColor": "#8c8f91"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "intelligencecup", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
