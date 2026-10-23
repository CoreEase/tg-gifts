import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Nosferatu",
    "customEmojiId": "5456564668904530225"
  },
  {
    "name": "Shrek Shroom",
    "customEmojiId": "5454202114769182010"
  },
  {
    "name": "Amour Touch",
    "customEmojiId": "5453924488083168624"
  },
  {
    "name": "Radiance",
    "customEmojiId": "5454163820840769371"
  },
  {
    "name": "Blooming Cap",
    "customEmojiId": "5454263816269356933"
  },
  {
    "name": "Ruby Glow",
    "customEmojiId": "5456553072492830782"
  },
  {
    "name": "Nitrous",
    "customEmojiId": "5454288031294973013"
  },
  {
    "name": "Ice Cold",
    "customEmojiId": "5456536777386914209"
  },
  {
    "name": "Sunset Glow",
    "customEmojiId": "5456634066986097852"
  },
  {
    "name": "Safari",
    "customEmojiId": "5454019458400019392"
  },
  {
    "name": "RoboCap",
    "customEmojiId": "5454344720568310337"
  },
  {
    "name": "Pepe Mania",
    "customEmojiId": "5454397256608278241"
  },
  {
    "name": "Ghost Jelly",
    "customEmojiId": "5456437022476505299"
  },
  {
    "name": "Royal Gold",
    "customEmojiId": "5456382467801900813"
  },
  {
    "name": "Emerald Trip",
    "customEmojiId": "5456439290219228637"
  },
  {
    "name": "Savannah",
    "customEmojiId": "5456365446846505423"
  },
  {
    "name": "Ocean Star",
    "customEmojiId": "5454261978023355526"
  },
  {
    "name": "Rainbow Glow",
    "customEmojiId": "5454002987200437300"
  },
  {
    "name": "Die Agaric",
    "customEmojiId": "5454163807955869692"
  },
  {
    "name": "Evil Eye",
    "customEmojiId": "5456251041802642559"
  },
  {
    "name": "Mickey Cap",
    "customEmojiId": "5456518871668252656"
  },
  {
    "name": "Cloudy Night",
    "customEmojiId": "5456307559277290764"
  },
  {
    "name": "Zebra Cap",
    "customEmojiId": "5456339453704429651"
  },
  {
    "name": "Square Cap",
    "customEmojiId": "5454361458055864831"
  },
  {
    "name": "Tiger’s Eye",
    "customEmojiId": "5454281743462850229"
  },
  {
    "name": "Wizard Cap",
    "customEmojiId": "5456663302828483809"
  },
  {
    "name": "D’oh! Shroom",
    "customEmojiId": "5454127987928622793"
  },
  {
    "name": "Acid Trip",
    "customEmojiId": "5454054969189622951"
  },
  {
    "name": "Sunspot",
    "customEmojiId": "5456373796262929980"
  },
  {
    "name": "Teleshroom",
    "customEmojiId": "5454163094991297896"
  },
  {
    "name": "Scaly Cap",
    "customEmojiId": "5454236453032714761"
  },
  {
    "name": "Bliss",
    "customEmojiId": "5453867523931924153"
  },
  {
    "name": "Safari Glam",
    "customEmojiId": "5454356248260532308"
  },
  {
    "name": "Miner’s Bloom",
    "customEmojiId": "5456615658756269006"
  },
  {
    "name": "Hot Stuff",
    "customEmojiId": "5454350033442856837"
  },
  {
    "name": "Mirage",
    "customEmojiId": "5454087907293813586"
  },
  {
    "name": "Marshmallow",
    "customEmojiId": "5456465824527179932"
  },
  {
    "name": "Polka Dot",
    "customEmojiId": "5454402414863999139"
  },
  {
    "name": "Dark Carnaval",
    "customEmojiId": "5456224636343704236"
  },
  {
    "name": "Kilt Cap",
    "customEmojiId": "5453992945566901218"
  },
  {
    "name": "Bag Pipe",
    "customEmojiId": "5456182992340803995"
  },
  {
    "name": "Lime Pop",
    "customEmojiId": "5454173510286992106"
  },
  {
    "name": "Wet Fungus",
    "customEmojiId": "5456379779152372936"
  },
  {
    "name": "Twister",
    "customEmojiId": "5454362308459388238"
  },
  {
    "name": "Prime Night",
    "customEmojiId": "5454273548665248767"
  },
  {
    "name": "Red X",
    "customEmojiId": "5454297961259359432"
  },
  {
    "name": "Skin Cap",
    "customEmojiId": "5454259942208854109"
  },
  {
    "name": "Lab Rat",
    "customEmojiId": "5456532508189417068"
  },
  {
    "name": "Copper Sea",
    "customEmojiId": "5454344342611188891"
  },
  {
    "name": "Liquid Metal",
    "customEmojiId": "5454135663035179712"
  },
  {
    "name": "Prime Day",
    "customEmojiId": "5461096653970756435"
  },
  {
    "name": "Hypnotoad",
    "customEmojiId": "5461137370260739233"
  },
  {
    "name": "Milka",
    "customEmojiId": "5458786833443875418"
  },
  {
    "name": "Dalmatin",
    "customEmojiId": "5461013013777635807"
  },
  {
    "name": "Mercury Drops",
    "customEmojiId": "5460810630623680718"
  },
  {
    "name": "Golden Dust",
    "customEmojiId": "5458476367437916608"
  },
  {
    "name": "Mysctic",
    "customEmojiId": "5461161679775620006"
  },
  {
    "name": "Truffle Trip",
    "customEmojiId": "5458413570721080330"
  },
  {
    "name": "Pixie Cap",
    "customEmojiId": "5458618904517567609"
  },
  {
    "name": "Lemon Haze",
    "customEmojiId": "5460968814269194039"
  },
  {
    "name": "Pinecap",
    "customEmojiId": "5461009401710140565"
  },
  {
    "name": "Fungal Dew",
    "customEmojiId": "5460861753619406301"
  },
  {
    "name": "Cheeto",
    "customEmojiId": "5458863305336580918"
  },
  {
    "name": "Camo",
    "customEmojiId": "5460961341026098953"
  },
  {
    "name": "Periwinkle",
    "customEmojiId": "5461080844196140521"
  },
  {
    "name": "Sour Gummy",
    "customEmojiId": "5458629684885483745"
  },
  {
    "name": "Sunburst",
    "customEmojiId": "5460641662315291819"
  },
  {
    "name": "Merry Cap",
    "customEmojiId": "5461156521519896314"
  },
  {
    "name": "Herbalist",
    "customEmojiId": "5458373193733531056"
  },
  {
    "name": "Limelight",
    "customEmojiId": "5461005944261465583"
  },
  {
    "name": "Acidic",
    "customEmojiId": "5458493371213441148"
  },
  {
    "name": "Nighteye",
    "customEmojiId": "5458682169385837086"
  },
  {
    "name": "Pink Neon",
    "customEmojiId": "5461119597686053089"
  },
  {
    "name": "Lava Lamp",
    "customEmojiId": "5458408395285489675"
  },
  {
    "name": "DuskBloom",
    "customEmojiId": "5460944818286912118"
  },
  {
    "name": "Cloudy",
    "customEmojiId": "5461030026143096815"
  },
  {
    "name": "Cherry Drop",
    "customEmojiId": "5458630866001487076"
  },
  {
    "name": "Monoshroom",
    "customEmojiId": "5458542789107151080"
  },
  {
    "name": "Bleached",
    "customEmojiId": "5460919254641563185"
  },
  {
    "name": "Night Light",
    "customEmojiId": "5460622549710822165"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Autumn Leaves",
    "customEmojiId": "5199868191748166568"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380"
  },
  {
    "name": "Grim Reaper",
    "customEmojiId": "5199657261609290637"
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405"
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271"
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678"
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715"
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Scarecrow",
    "customEmojiId": "5199734102869184064"
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058"
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Bloody Axe",
    "customEmojiId": "5199755874058406442"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006"
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487"
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507"
  },
  {
    "name": "Crow",
    "customEmojiId": "5199426733534641259"
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638"
  },
  {
    "name": "Flying Witch",
    "customEmojiId": "5199639686603112376"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Evil Pumpkin",
    "customEmojiId": "5199669966122550110"
  },
  {
    "name": "Spooky Cat",
    "customEmojiId": "5199795890268706133"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375"
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669"
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Severed Hand",
    "customEmojiId": "5199465194966780844"
  },
  {
    "name": "Happy Smile",
    "customEmojiId": "5199771185616816222"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645"
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004"
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952"
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813"
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721"
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Night Bats",
    "customEmojiId": "5199725388380543708"
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419"
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867"
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Half Moon",
    "customEmojiId": "5199418019046001807"
  },
  {
    "name": "Nice Ghost",
    "customEmojiId": "5199814161059579213"
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755"
  },
  {
    "name": "Voodoo Doll",
    "customEmojiId": "5199629937027353893"
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188"
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198"
  },
  {
    "name": "Treats",
    "customEmojiId": "5199923330538311116"
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768"
  },
  {
    "name": "Gravestone",
    "customEmojiId": "5199458662321521472"
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088"
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817"
  },
  {
    "name": "Jaws",
    "customEmojiId": "5199489388517558658"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  },
  {
    "name": "Witch’s Hat",
    "customEmojiId": null
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826"
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218"
  },
  {
    "name": "Black Widow",
    "customEmojiId": "5199544041976401500"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Eyeball",
    "customEmojiId": "5199500791655727782"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139"
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105"
  },
  {
    "name": "Cauldron",
    "customEmojiId": "5199831577151966735"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Poison Drop",
    "customEmojiId": "5199690302792698006"
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088"
  },
  {
    "name": "Coffin",
    "customEmojiId": "5199800696337107918"
  },
  {
    "name": "Lollipop",
    "customEmojiId": "5199604863008277923"
  },
  {
    "name": "Human Scull",
    "customEmojiId": "5199616090052791141"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Electric Purple",
    "customEmojiId": "5375123176915234503",
    "hex": {
      "centerColor": "#ca70c6",
      "edgeColor": "#9662d4",
      "patternColor": "#620fb4",
      "textColor": "#ebceff"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "spyagaric", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
