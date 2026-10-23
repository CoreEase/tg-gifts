import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Telegram",
    "customEmojiId": "5355039480342405447"
  },
  {
    "name": "Seashell",
    "customEmojiId": "5357530776122448490"
  },
  {
    "name": "Hellfire",
    "customEmojiId": "5355327393475095050"
  },
  {
    "name": "Candles",
    "customEmojiId": "5354966818085695219"
  },
  {
    "name": "Crossbones",
    "customEmojiId": "5355092188181066780"
  },
  {
    "name": "Black Kitty",
    "customEmojiId": "5354930259324070334"
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5355220594818313899"
  },
  {
    "name": "Berry Meadow",
    "customEmojiId": "5355020213119116238"
  },
  {
    "name": "Neon Sign",
    "customEmojiId": "5355028008484760307"
  },
  {
    "name": "Love Smoke",
    "customEmojiId": "5354814179242964287"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5354982009385018592"
  },
  {
    "name": "Snowman",
    "customEmojiId": "5355030924767555707"
  },
  {
    "name": "Fluffy",
    "customEmojiId": "5354799198397030313"
  },
  {
    "name": "Mouse",
    "customEmojiId": "5355115986594854067"
  },
  {
    "name": "Moon Cat",
    "customEmojiId": "5355165503272807205"
  },
  {
    "name": "Wonderland",
    "customEmojiId": "5355274299089384413"
  },
  {
    "name": "Festive Pepe",
    "customEmojiId": "5355055255757283990"
  },
  {
    "name": "Candy Cane",
    "customEmojiId": "5355056879254926241"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5355081863079685829"
  },
  {
    "name": "Holly Leaves",
    "customEmojiId": "5355152386442685289"
  },
  {
    "name": "Halloween",
    "customEmojiId": "5354918095976687162"
  },
  {
    "name": "Winter Tea",
    "customEmojiId": "5357425386214941222"
  },
  {
    "name": "Ornament",
    "customEmojiId": "5355106142529810855"
  },
  {
    "name": "Butterfly",
    "customEmojiId": "5354904124448074946"
  },
  {
    "name": "Happy Santa",
    "customEmojiId": "5357238512187892272"
  },
  {
    "name": "Heart Bell",
    "customEmojiId": "5355061977381103280"
  },
  {
    "name": "Golden Bough",
    "customEmojiId": "5355027553218227888"
  },
  {
    "name": "Rowan Berry",
    "customEmojiId": "5354830646147574067"
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5354867892103964309"
  },
  {
    "name": "Mojito",
    "customEmojiId": "5354802204874141109"
  },
  {
    "name": "Dragee",
    "customEmojiId": "5355297637941671735"
  },
  {
    "name": "Raspberry",
    "customEmojiId": "5355230017976561622"
  },
  {
    "name": "Starry Night",
    "customEmojiId": "5354832892415469052"
  },
  {
    "name": "Honey Dew",
    "customEmojiId": "5355160512520810006"
  },
  {
    "name": "Pumpkin",
    "customEmojiId": "5355306434034692931"
  },
  {
    "name": "Bubble Gum",
    "customEmojiId": "5355265258183223551"
  },
  {
    "name": "Glimmer",
    "customEmojiId": "5355270669842016151"
  },
  {
    "name": "Harmony",
    "customEmojiId": "5355201331889991248"
  },
  {
    "name": "Sunny Bunny",
    "customEmojiId": "5354965233242763534"
  },
  {
    "name": "Noel Twist",
    "customEmojiId": "5355304801947116567"
  },
  {
    "name": "Tinsel",
    "customEmojiId": "5354848753729696531"
  },
  {
    "name": "Cheesecake",
    "customEmojiId": "5355072835058431215"
  },
  {
    "name": "Festivity",
    "customEmojiId": "5354808157698814338"
  },
  {
    "name": "Hearth",
    "customEmojiId": "5354932471232230051"
  },
  {
    "name": "Old Movie",
    "customEmojiId": "5355076326866838405"
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5355179534930963906"
  },
  {
    "name": "Grape",
    "customEmojiId": "5355135653250104187"
  },
  {
    "name": "Berry Yogurt",
    "customEmojiId": "5357522203367728023"
  },
  {
    "name": "Night Bell",
    "customEmojiId": "5354995963733765020"
  },
  {
    "name": "Pine Bloom",
    "customEmojiId": "5355062286618750283"
  },
  {
    "name": "Mulled Wine",
    "customEmojiId": "5355252506425321591"
  },
  {
    "name": "Barbie Core",
    "customEmojiId": "5355312790586289424"
  },
  {
    "name": "Comics",
    "customEmojiId": "5355321440650423633"
  },
  {
    "name": "Lemon Cake",
    "customEmojiId": "5354956269646015687"
  },
  {
    "name": "Coloring Book",
    "customEmojiId": "5354878990299457347"
  },
  {
    "name": "Snowball",
    "customEmojiId": "5355208989816681483"
  },
  {
    "name": "Princess Day",
    "customEmojiId": "5355226500398344935"
  },
  {
    "name": "Negative",
    "customEmojiId": "5355341072945932647"
  },
  {
    "name": "Everbright",
    "customEmojiId": "5355306326660508328"
  },
  {
    "name": "Cold Night",
    "customEmojiId": "5354926806170360894"
  },
  {
    "name": "Cotton Candy",
    "customEmojiId": "5354967299122035957"
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5357509279811134721"
  },
  {
    "name": "Evergreen",
    "customEmojiId": "5354890689790373701"
  },
  {
    "name": "Frosty",
    "customEmojiId": "5354966324164454932"
  },
  {
    "name": "Blueberry",
    "customEmojiId": "5355008530808075039"
  },
  {
    "name": "Celebration",
    "customEmojiId": "5355113096081859609"
  },
  {
    "name": "Spirit",
    "customEmojiId": "5357162667360411328"
  },
  {
    "name": "Aquamarine",
    "customEmojiId": "5355126096947867872"
  },
  {
    "name": "Confetti",
    "customEmojiId": "5357299754126565522"
  },
  {
    "name": "Sprinkles",
    "customEmojiId": "5355011782098317385"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675"
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060"
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563"
  },
  {
    "name": "Bandana",
    "customEmojiId": "5199711902183232393"
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519"
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939"
  },
  {
    "name": "Basketball",
    "customEmojiId": "5199728789994637327"
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347"
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500"
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499"
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986"
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886"
  },
  {
    "name": "Earflap Hat",
    "customEmojiId": "5199932083681658304"
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117"
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683"
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933"
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271"
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475"
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209"
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443"
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550"
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530"
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723"
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821"
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567"
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273"
  },
  {
    "name": "Robin Hood",
    "customEmojiId": "5199634154685237795"
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571"
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Conical Hat",
    "customEmojiId": "5199648817703584324"
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619"
  },
  {
    "name": "Bobby Helmet",
    "customEmojiId": "5199570082363115866"
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077"
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542"
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303"
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037"
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385"
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362"
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128"
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263"
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973"
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248"
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139"
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587"
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164"
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "Deerstalker",
    "customEmojiId": "5199479669006568749"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696"
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047"
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375"
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Shako",
    "customEmojiId": "5199855955386337078"
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936"
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260"
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Peaked Cap",
    "customEmojiId": "5199944066640415730"
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768"
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125"
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
  {
    "name": "Pine Green",
    "customEmojiId": "5375456049765578111",
    "hex": {
      "centerColor": "#6ba97c",
      "edgeColor": "#3e7970",
      "patternColor": "#0b4833",
      "textColor": "#d8f5e5"
    }
  },
  {
    "name": "Desert Sand",
    "customEmojiId": "5375295684276677732",
    "hex": {
      "centerColor": "#b39f82",
      "edgeColor": "#7e735b",
      "patternColor": "#504429",
      "textColor": "#f2e5cd"
    }
  },
  {
    "name": "Malachite",
    "customEmojiId": "5377519721421758750",
    "hex": {
      "centerColor": "#95b457",
      "edgeColor": "#3d9755",
      "patternColor": "#046b06",
      "textColor": "#c2efbe"
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
    "name": "Lemongrass",
    "customEmojiId": "5375580127075793214",
    "hex": {
      "centerColor": "#aeb85a",
      "edgeColor": "#559345",
      "patternColor": "#466a07",
      "textColor": "#d8f2c2"
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
    "name": "Pacific Green",
    "customEmojiId": "5375523141449707206",
    "hex": {
      "centerColor": "#6fc793",
      "edgeColor": "#3b9c84",
      "patternColor": "#006149",
      "textColor": "#c6fff0"
    }
  },
  {
    "name": "Marine Blue",
    "customEmojiId": "5375439277918288314",
    "hex": {
      "centerColor": "#4e689c",
      "edgeColor": "#3b4b7a",
      "patternColor": "#010821",
      "textColor": "#bbcbf2"
    }
  },
  {
    "name": "Raspberry",
    "customEmojiId": "5375565034560713219",
    "hex": {
      "centerColor": "#e07b85",
      "edgeColor": "#b65980",
      "patternColor": "#890638",
      "textColor": "#ffd6e6"
    }
  },
  {
    "name": "Purple",
    "customEmojiId": "5375106490967289982",
    "hex": {
      "centerColor": "#ae6cae",
      "edgeColor": "#844784",
      "patternColor": "#470c47",
      "textColor": "#f3cbf3"
    }
  },
  {
    "name": "Celtic Blue",
    "customEmojiId": "5375186931409777211",
    "hex": {
      "centerColor": "#45b8ed",
      "edgeColor": "#3886d9",
      "patternColor": "#003e85",
      "textColor": "#c2e7ff"
    }
  },
  {
    "name": "Indigo Dye",
    "customEmojiId": "5375159374899604169",
    "hex": {
      "centerColor": "#537991",
      "edgeColor": "#416479",
      "patternColor": "#031b29",
      "textColor": "#c2dcee"
    }
  },
  {
    "name": "Moonstone",
    "customEmojiId": "5375335404134231481",
    "hex": {
      "centerColor": "#7eb1b4",
      "edgeColor": "#588390",
      "patternColor": "#164552",
      "textColor": "#daf5fd"
    }
  },
  {
    "name": "Sky Blue",
    "customEmojiId": "5375428136773120397",
    "hex": {
      "centerColor": "#58b4c8",
      "edgeColor": "#538bc2",
      "patternColor": "#07609b",
      "textColor": "#cde8fd"
    }
  },
  {
    "name": "French Blue",
    "customEmojiId": "5375333269535485469",
    "hex": {
      "centerColor": "#5c9bc4",
      "edgeColor": "#37739a",
      "patternColor": "#073b5c",
      "textColor": "#c1e3f9"
    }
  },
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
    "name": "Ranger Green",
    "customEmojiId": "5375074549295510665",
    "hex": {
      "centerColor": "#5f7849",
      "edgeColor": "#3c4f3b",
      "patternColor": "#102209",
      "textColor": "#b7c4b5"
    }
  },
  {
    "name": "Chestnut",
    "customEmojiId": "5375124757463201258",
    "hex": {
      "centerColor": "#be6f54",
      "edgeColor": "#994838",
      "patternColor": "#601508",
      "textColor": "#fec6b9"
    }
  },
  {
    "name": "Dark Lilac",
    "customEmojiId": "5375595296900280612",
    "hex": {
      "centerColor": "#b17da5",
      "edgeColor": "#8c577a",
      "patternColor": "#652852",
      "textColor": "#f0c4e2"
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
    "name": "Coral Red",
    "customEmojiId": "5377303611552326657",
    "hex": {
      "centerColor": "#da896b",
      "edgeColor": "#c4654f",
      "patternColor": "#891200",
      "textColor": "#ffd9d2"
    }
  },
  {
    "name": "Turquoise",
    "customEmojiId": "5375084470669966301",
    "hex": {
      "centerColor": "#5ec0b8",
      "edgeColor": "#3d928e",
      "patternColor": "#11534c",
      "textColor": "#bdf8f2"
    }
  },
  {
    "name": "Orange",
    "customEmojiId": "5375479315603420454",
    "hex": {
      "centerColor": "#d19a3a",
      "edgeColor": "#c06f47",
      "patternColor": "#9d3907",
      "textColor": "#ffe1c3"
    }
  },
  {
    "name": "Persimmon",
    "customEmojiId": "5377611079671113314",
    "hex": {
      "centerColor": "#e7a75a",
      "edgeColor": "#c5675f",
      "patternColor": "#ad0e00",
      "textColor": "#ffe4d7"
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
    "name": "Shamrock Green",
    "customEmojiId": "5377843866898555150",
    "hex": {
      "centerColor": "#8ab163",
      "edgeColor": "#559345",
      "patternColor": "#126b00",
      "textColor": "#d5fbc8"
    }
  },
  {
    "name": "Burgundy",
    "customEmojiId": "5375243216956193305",
    "hex": {
      "centerColor": "#a35e66",
      "edgeColor": "#6d414a",
      "patternColor": "#340307",
      "textColor": "#e7bcc0"
    }
  },
  {
    "name": "Mustard",
    "customEmojiId": "5375113225476008176",
    "hex": {
      "centerColor": "#d4980d",
      "edgeColor": "#c47712",
      "patternColor": "#7a2500",
      "textColor": "#ffde9c"
    }
  },
  {
    "name": "Gunship Green",
    "customEmojiId": "5375121566302501587",
    "hex": {
      "centerColor": "#558a65",
      "edgeColor": "#3d6657",
      "patternColor": "#07261d",
      "textColor": "#b5e0d4"
    }
  },
  {
    "name": "Emerald",
    "customEmojiId": "5375465786456438121",
    "hex": {
      "centerColor": "#78c585",
      "edgeColor": "#42a171",
      "patternColor": "#006532",
      "textColor": "#b9f9d9"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5375533853098147113",
    "hex": {
      "centerColor": "#9d74c1",
      "edgeColor": "#794da0",
      "patternColor": "#3e0a6b",
      "textColor": "#e0bdfe"
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
    "name": "Dark Green",
    "customEmojiId": "5375600953372209854",
    "hex": {
      "centerColor": "#516341",
      "edgeColor": "#2b452f",
      "patternColor": "#000501",
      "textColor": "#bfd1a9"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5377810976039004691",
    "hex": {
      "centerColor": "#dd8e6f",
      "edgeColor": "#b75a60",
      "patternColor": "#a90c0c",
      "textColor": "#ffd3d3"
    }
  },
  {
    "name": "English Violet",
    "customEmojiId": "5377317497181595389",
    "hex": {
      "centerColor": "#b186bb",
      "edgeColor": "#875a91",
      "patternColor": "#54225f",
      "textColor": "#e6c7ed"
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
    "name": "French Violet",
    "customEmojiId": "5377583218218262703",
    "hex": {
      "centerColor": "#c260e6",
      "edgeColor": "#914ed9",
      "patternColor": "#4a018a",
      "textColor": "#ebc7ff"
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
    "name": "Chocolate",
    "customEmojiId": "5375145089838378346",
    "hex": {
      "centerColor": "#a46e58",
      "edgeColor": "#74443b",
      "patternColor": "#3e0a02",
      "textColor": "#e4b6ac"
    }
  },
  {
    "name": "Deep Cyan",
    "customEmojiId": "5377423312290868137",
    "hex": {
      "centerColor": "#31b5aa",
      "edgeColor": "#189599",
      "patternColor": "#004f4f",
      "textColor": "#d1fffd"
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
    "name": "Carmine",
    "customEmojiId": "5375573362502298464",
    "hex": {
      "centerColor": "#e0574a",
      "edgeColor": "#a8383b",
      "patternColor": "#4f0100",
      "textColor": "#ffb7ad"
    }
  },
  {
    "name": "Light Olive",
    "customEmojiId": "5375600553940250812",
    "hex": {
      "centerColor": "#c2af64",
      "edgeColor": "#887e45",
      "patternColor": "#594c04",
      "textColor": "#f5ebbc"
    }
  },
  {
    "name": "Rosewood",
    "customEmojiId": "5375125960054043180",
    "hex": {
      "centerColor": "#b77a77",
      "edgeColor": "#814c52",
      "patternColor": "#551c22",
      "textColor": "#edcacd"
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
    "name": "Electric Purple",
    "customEmojiId": "5375123176915234503",
    "hex": {
      "centerColor": "#ca70c6",
      "edgeColor": "#9662d4",
      "patternColor": "#620fb4",
      "textColor": "#ebceff"
    }
  },
  {
    "name": "Rifle Green",
    "customEmojiId": "5377619347483158640",
    "hex": {
      "centerColor": "#64695c",
      "edgeColor": "#4b5241",
      "patternColor": "#0f120b",
      "textColor": "#c3c7bd"
    }
  },
  {
    "name": "Cappuccino",
    "customEmojiId": "5375084663943491762",
    "hex": {
      "centerColor": "#b1907e",
      "edgeColor": "#7c6356",
      "patternColor": "#4a3226",
      "textColor": "#ebd4c8"
    }
  },
  {
    "name": "Azure Blue",
    "customEmojiId": "5375057773153254940",
    "hex": {
      "centerColor": "#5db1cb",
      "edgeColor": "#448bab",
      "patternColor": "#025074",
      "textColor": "#b5ecff"
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
    "name": "Camo Green",
    "customEmojiId": "5375411489479878975",
    "hex": {
      "centerColor": "#75944d",
      "edgeColor": "#547341",
      "patternColor": "#163701",
      "textColor": "#cfe8b9"
    }
  },
  {
    "name": "Mint Green",
    "customEmojiId": "5375453017518666054",
    "hex": {
      "centerColor": "#7ecb82",
      "edgeColor": "#459e5a",
      "patternColor": "#026b22",
      "textColor": "#bdffcc"
    }
  },
  {
    "name": "Fandango",
    "customEmojiId": "5377665664410477598",
    "hex": {
      "centerColor": "#e28ab6",
      "edgeColor": "#a4588b",
      "patternColor": "#8e054e",
      "textColor": "#ffc7eb"
    }
  },
  {
    "name": "Cobalt Blue",
    "customEmojiId": "5375508658819986305",
    "hex": {
      "centerColor": "#6088cf",
      "edgeColor": "#5162b8",
      "patternColor": "#13247c",
      "textColor": "#c2d3f5"
    }
  },
  {
    "name": "Tomato",
    "customEmojiId": "5377723259921916635",
    "hex": {
      "centerColor": "#e6793e",
      "edgeColor": "#d44e3f",
      "patternColor": "#800b00",
      "textColor": "#ffccbd"
    }
  },
  {
    "name": "Khaki Green",
    "customEmojiId": "5377549107587998846",
    "hex": {
      "centerColor": "#adb070",
      "edgeColor": "#6b7d54",
      "patternColor": "#39501b",
      "textColor": "#d3e6bb"
    }
  },
  {
    "name": "Aquamarine",
    "customEmojiId": "5377657950649214703",
    "hex": {
      "centerColor": "#60b195",
      "edgeColor": "#46abb4",
      "patternColor": "#035f67",
      "textColor": "#c7fdfe"
    }
  },
  {
    "name": "Caramel",
    "customEmojiId": "5375311837648678407",
    "hex": {
      "centerColor": "#d09932",
      "edgeColor": "#b77431",
      "patternColor": "#7d3600",
      "textColor": "#ffd9b3"
    }
  },
  {
    "name": "Cyberpunk",
    "customEmojiId": "5375292097978986361",
    "hex": {
      "centerColor": "#858ff3",
      "edgeColor": "#865fd3",
      "patternColor": "#4318a6",
      "textColor": "#e0d9ff"
    }
  },
  {
    "name": "Burnt Sienna",
    "customEmojiId": "5377680275889219155",
    "hex": {
      "centerColor": "#d66f3c",
      "edgeColor": "#b54b2d",
      "patternColor": "#6b0902",
      "textColor": "#ffccb0"
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
    "name": "Pacific Cyan",
    "customEmojiId": "5375176666437938248",
    "hex": {
      "centerColor": "#5abea6",
      "edgeColor": "#3d95ba",
      "patternColor": "#02648d",
      "textColor": "#b6efff"
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
    "name": "Pistachio",
    "customEmojiId": "5375280450027679837",
    "hex": {
      "centerColor": "#97b07c",
      "edgeColor": "#5c814c",
      "patternColor": "#28471b",
      "textColor": "#d9f2c9"
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
    "name": "Fire Engine",
    "customEmojiId": "5375497006573710335",
    "hex": {
      "centerColor": "#f05f4f",
      "edgeColor": "#c43949",
      "patternColor": "#690009",
      "textColor": "#ffb7a6"
    }
  },
  {
    "name": "Hunter Green",
    "customEmojiId": "5375046438734558335",
    "hex": {
      "centerColor": "#8fae78",
      "edgeColor": "#4b825b",
      "patternColor": "#1c491f",
      "textColor": "#d8f5de"
    }
  },
  {
    "name": "Seal Brown",
    "customEmojiId": "5375269034004608036",
    "hex": {
      "centerColor": "#664d45",
      "edgeColor": "#47362e",
      "patternColor": "#0a0605",
      "textColor": "#d4bcb5"
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
    "name": "Electric Indigo",
    "customEmojiId": "5375368406662934349",
    "hex": {
      "centerColor": "#a980f3",
      "edgeColor": "#5b62d8",
      "patternColor": "#3722ab",
      "textColor": "#d8d8ff"
    }
  },
  {
    "name": "Mystic Pearl",
    "customEmojiId": "5375343865219805643",
    "hex": {
      "centerColor": "#d08b6d",
      "edgeColor": "#b05770",
      "patternColor": "#9b0526",
      "textColor": "#fedde0"
    }
  },
  {
    "name": "Jade Green",
    "customEmojiId": "5375392875091620167",
    "hex": {
      "centerColor": "#55c49c",
      "edgeColor": "#3b9977",
      "patternColor": "#044931",
      "textColor": "#befee7"
    }
  },
  {
    "name": "Carrot Juice",
    "customEmojiId": "5377603262830633515",
    "hex": {
      "centerColor": "#db9867",
      "edgeColor": "#c76f4f",
      "patternColor": "#8e2100",
      "textColor": "#ffd7ca"
    }
  },
  {
    "name": "Lavender",
    "customEmojiId": "5375569106189712018",
    "hex": {
      "centerColor": "#b789e4",
      "edgeColor": "#8a5abc",
      "patternColor": "#5b10ab",
      "textColor": "#e8d1ff"
    }
  },
  {
    "name": "Mexican Pink",
    "customEmojiId": "5375494846205161879",
    "hex": {
      "centerColor": "#e36692",
      "edgeColor": "#c9497c",
      "patternColor": "#750230",
      "textColor": "#ffd6e6"
    }
  },
  {
    "name": "Tactical Pine",
    "customEmojiId": "5375347412862793082",
    "hex": {
      "centerColor": "#44826b",
      "edgeColor": "#2f6369",
      "patternColor": "#002624",
      "textColor": "#b7e6d3"
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
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "winterwreath", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
