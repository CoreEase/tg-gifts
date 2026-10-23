import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Claw Crane",
    "customEmojiId": "5269526187557809102",
    "assets": {
      "svg": "gifts/snakebox/assets/models/claw-crane.svg",
      "tgs": "gifts/snakebox/assets/models/claw-crane.tgs"
    }
  },
  {
    "name": "Jackbox",
    "customEmojiId": "5269384419277303455",
    "assets": {
      "svg": "gifts/snakebox/assets/models/jackbox.svg",
      "tgs": "gifts/snakebox/assets/models/jackbox.tgs"
    }
  },
  {
    "name": "Aquarium",
    "customEmojiId": "5267035596152406024",
    "assets": {
      "svg": "gifts/snakebox/assets/models/aquarium.svg",
      "tgs": "gifts/snakebox/assets/models/aquarium.tgs"
    }
  },
  {
    "name": "Balloons",
    "customEmojiId": "5269440438535746329",
    "assets": {
      "svg": "gifts/snakebox/assets/models/balloons.svg",
      "tgs": "gifts/snakebox/assets/models/balloons.tgs"
    }
  },
  {
    "name": "Gummy Worms",
    "customEmojiId": "5269493816389299384",
    "assets": {
      "svg": "gifts/snakebox/assets/models/gummy-worms.svg",
      "tgs": "gifts/snakebox/assets/models/gummy-worms.tgs"
    }
  },
  {
    "name": "Ice Cube",
    "customEmojiId": "5269755199509003234",
    "assets": {
      "svg": "gifts/snakebox/assets/models/ice-cube.svg",
      "tgs": "gifts/snakebox/assets/models/ice-cube.tgs"
    }
  },
  {
    "name": "Love Naga",
    "customEmojiId": "5269231179139152498",
    "assets": {
      "svg": "gifts/snakebox/assets/models/love-naga.svg",
      "tgs": "gifts/snakebox/assets/models/love-naga.tgs"
    }
  },
  {
    "name": "Snake Wok",
    "customEmojiId": "5269652137473764832",
    "assets": {
      "svg": "gifts/snakebox/assets/models/snake-wok.svg",
      "tgs": "gifts/snakebox/assets/models/snake-wok.tgs"
    }
  },
  {
    "name": "Bronze Award",
    "customEmojiId": "5266971193117801472",
    "assets": {
      "svg": "gifts/snakebox/assets/models/bronze-award.svg",
      "tgs": "gifts/snakebox/assets/models/bronze-award.tgs"
    }
  },
  {
    "name": "Cheese",
    "customEmojiId": "5267234337174091829",
    "assets": {
      "svg": "gifts/snakebox/assets/models/cheese.svg",
      "tgs": "gifts/snakebox/assets/models/cheese.tgs"
    }
  },
  {
    "name": "Furnace",
    "customEmojiId": "5267148613921831140",
    "assets": {
      "svg": "gifts/snakebox/assets/models/furnace.svg",
      "tgs": "gifts/snakebox/assets/models/furnace.tgs"
    }
  },
  {
    "name": "Gold Award",
    "customEmojiId": "5269734884313692921",
    "assets": {
      "svg": "gifts/snakebox/assets/models/gold-award.svg",
      "tgs": "gifts/snakebox/assets/models/gold-award.tgs"
    }
  },
  {
    "name": "Prison Cell",
    "customEmojiId": "5269509282566534612",
    "assets": {
      "svg": "gifts/snakebox/assets/models/prison-cell.svg",
      "tgs": "gifts/snakebox/assets/models/prison-cell.tgs"
    }
  },
  {
    "name": "Silver Award",
    "customEmojiId": "5269622785667264475",
    "assets": {
      "svg": "gifts/snakebox/assets/models/silver-award.svg",
      "tgs": "gifts/snakebox/assets/models/silver-award.tgs"
    }
  },
  {
    "name": "Bento",
    "customEmojiId": "5267084953916570986",
    "assets": {
      "svg": "gifts/snakebox/assets/models/bento.svg",
      "tgs": "gifts/snakebox/assets/models/bento.tgs"
    }
  },
  {
    "name": "Berry Box",
    "customEmojiId": "5269761916837851750",
    "assets": {
      "svg": "gifts/snakebox/assets/models/berry-box.svg",
      "tgs": "gifts/snakebox/assets/models/berry-box.tgs"
    }
  },
  {
    "name": "Birthday",
    "customEmojiId": "5269584474558985445",
    "assets": {
      "svg": "gifts/snakebox/assets/models/birthday.svg",
      "tgs": "gifts/snakebox/assets/models/birthday.tgs"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5267391326818699396",
    "assets": {
      "svg": "gifts/snakebox/assets/models/burger.svg",
      "tgs": "gifts/snakebox/assets/models/burger.tgs"
    }
  },
  {
    "name": "Candy Bubble",
    "customEmojiId": "5269372968894492226",
    "assets": {
      "svg": "gifts/snakebox/assets/models/candy-bubble.svg",
      "tgs": "gifts/snakebox/assets/models/candy-bubble.tgs"
    }
  },
  {
    "name": "Donut Box",
    "customEmojiId": "5269390548195637539",
    "assets": {
      "svg": "gifts/snakebox/assets/models/donut-box.svg",
      "tgs": "gifts/snakebox/assets/models/donut-box.tgs"
    }
  },
  {
    "name": "Jelly Snake",
    "customEmojiId": "5267449729783986527",
    "assets": {
      "svg": "gifts/snakebox/assets/models/jelly-snake.svg",
      "tgs": "gifts/snakebox/assets/models/jelly-snake.tgs"
    }
  },
  {
    "name": "Pink Boa",
    "customEmojiId": "5269594975754021017",
    "assets": {
      "svg": "gifts/snakebox/assets/models/pink-boa.svg",
      "tgs": "gifts/snakebox/assets/models/pink-boa.tgs"
    }
  },
  {
    "name": "Pixel Cobra",
    "customEmojiId": "5269594864084875816",
    "assets": {
      "svg": "gifts/snakebox/assets/models/pixel-cobra.svg",
      "tgs": "gifts/snakebox/assets/models/pixel-cobra.tgs"
    }
  },
  {
    "name": "Poison Ivy",
    "customEmojiId": "5269494318900473211",
    "assets": {
      "svg": "gifts/snakebox/assets/models/poison-ivy.svg",
      "tgs": "gifts/snakebox/assets/models/poison-ivy.tgs"
    }
  },
  {
    "name": "Popcorn",
    "customEmojiId": "5267124970126868983",
    "assets": {
      "svg": "gifts/snakebox/assets/models/popcorn.svg",
      "tgs": "gifts/snakebox/assets/models/popcorn.tgs"
    }
  },
  {
    "name": "Santa Cobrus",
    "customEmojiId": "5269470108169828695",
    "assets": {
      "svg": "gifts/snakebox/assets/models/santa-cobrus.svg",
      "tgs": "gifts/snakebox/assets/models/santa-cobrus.tgs"
    }
  },
  {
    "name": "Shopping",
    "customEmojiId": "5269751973988563546",
    "assets": {
      "svg": "gifts/snakebox/assets/models/shopping.svg",
      "tgs": "gifts/snakebox/assets/models/shopping.tgs"
    }
  },
  {
    "name": "Best Hisses!",
    "customEmojiId": "5269257034842270639",
    "assets": {
      "svg": "gifts/snakebox/assets/models/best-hisses.svg",
      "tgs": "gifts/snakebox/assets/models/best-hisses.tgs"
    }
  },
  {
    "name": "Dream Big",
    "customEmojiId": "5269531607806538370",
    "assets": {
      "svg": "gifts/snakebox/assets/models/dream-big.svg",
      "tgs": "gifts/snakebox/assets/models/dream-big.tgs"
    }
  },
  {
    "name": "Fluorescent",
    "customEmojiId": "5269734008140359368",
    "assets": {
      "svg": "gifts/snakebox/assets/models/fluorescent.svg",
      "tgs": "gifts/snakebox/assets/models/fluorescent.tgs"
    }
  },
  {
    "name": "Fragile",
    "customEmojiId": "5269259457203828557",
    "assets": {
      "svg": "gifts/snakebox/assets/models/fragile.svg",
      "tgs": "gifts/snakebox/assets/models/fragile.tgs"
    }
  },
  {
    "name": "Green Spots",
    "customEmojiId": "5269756393509910108",
    "assets": {
      "svg": "gifts/snakebox/assets/models/green-spots.svg",
      "tgs": "gifts/snakebox/assets/models/green-spots.tgs"
    }
  },
  {
    "name": "Heart Box",
    "customEmojiId": "5269635382806343634",
    "assets": {
      "svg": "gifts/snakebox/assets/models/heart-box.svg",
      "tgs": "gifts/snakebox/assets/models/heart-box.tgs"
    }
  },
  {
    "name": "Neon Fang",
    "customEmojiId": "5269226746732902025",
    "assets": {
      "svg": "gifts/snakebox/assets/models/neon-fang.svg",
      "tgs": "gifts/snakebox/assets/models/neon-fang.tgs"
    }
  },
  {
    "name": "Shine Bright",
    "customEmojiId": "5269538788991859553",
    "assets": {
      "svg": "gifts/snakebox/assets/models/shine-bright.svg",
      "tgs": "gifts/snakebox/assets/models/shine-bright.tgs"
    }
  },
  {
    "name": "Double Joy",
    "customEmojiId": "5267353539696426641",
    "assets": {
      "svg": "gifts/snakebox/assets/models/double-joy.svg",
      "tgs": "gifts/snakebox/assets/models/double-joy.tgs"
    }
  },
  {
    "name": "Golden Fang",
    "customEmojiId": "5267272287505120018",
    "assets": {
      "svg": "gifts/snakebox/assets/models/golden-fang.svg",
      "tgs": "gifts/snakebox/assets/models/golden-fang.tgs"
    }
  },
  {
    "name": "Honey Bee",
    "customEmojiId": "5269709690035533673",
    "assets": {
      "svg": "gifts/snakebox/assets/models/honey-bee.svg",
      "tgs": "gifts/snakebox/assets/models/honey-bee.tgs"
    }
  },
  {
    "name": "Love Nest",
    "customEmojiId": "5269677585154997409",
    "assets": {
      "svg": "gifts/snakebox/assets/models/love-nest.svg",
      "tgs": "gifts/snakebox/assets/models/love-nest.tgs"
    }
  },
  {
    "name": "Player 456",
    "customEmojiId": "5267322667471504339",
    "assets": {
      "svg": "gifts/snakebox/assets/models/player-456.svg",
      "tgs": "gifts/snakebox/assets/models/player-456.tgs"
    }
  },
  {
    "name": "Shamrock",
    "customEmojiId": "5269335920506599257",
    "assets": {
      "svg": "gifts/snakebox/assets/models/shamrock.svg",
      "tgs": "gifts/snakebox/assets/models/shamrock.tgs"
    }
  },
  {
    "name": "Choco Surprise",
    "customEmojiId": "5269585883308258846",
    "assets": {
      "svg": "gifts/snakebox/assets/models/choco-surprise.svg",
      "tgs": "gifts/snakebox/assets/models/choco-surprise.tgs"
    }
  },
  {
    "name": "Copper",
    "customEmojiId": "5269601319420720525",
    "assets": {
      "svg": "gifts/snakebox/assets/models/copper.svg",
      "tgs": "gifts/snakebox/assets/models/copper.tgs"
    }
  },
  {
    "name": "Elegance",
    "customEmojiId": "5267026941793303274",
    "assets": {
      "svg": "gifts/snakebox/assets/models/elegance.svg",
      "tgs": "gifts/snakebox/assets/models/elegance.tgs"
    }
  },
  {
    "name": "Interstellar",
    "customEmojiId": "5269355810500145765",
    "assets": {
      "svg": "gifts/snakebox/assets/models/interstellar.svg",
      "tgs": "gifts/snakebox/assets/models/interstellar.tgs"
    }
  },
  {
    "name": "Shimmer",
    "customEmojiId": "5269362136986970688",
    "assets": {
      "svg": "gifts/snakebox/assets/models/shimmer.svg",
      "tgs": "gifts/snakebox/assets/models/shimmer.tgs"
    }
  },
  {
    "name": "Sketch",
    "customEmojiId": "5267503339565774102",
    "assets": {
      "svg": "gifts/snakebox/assets/models/sketch.svg",
      "tgs": "gifts/snakebox/assets/models/sketch.tgs"
    }
  },
  {
    "name": "Lemonade",
    "customEmojiId": "5269257069202008181",
    "assets": {
      "svg": "gifts/snakebox/assets/models/lemonade.svg",
      "tgs": "gifts/snakebox/assets/models/lemonade.tgs"
    }
  },
  {
    "name": "Morning Fog",
    "customEmojiId": "5267267412717239187",
    "assets": {
      "svg": "gifts/snakebox/assets/models/morning-fog.svg",
      "tgs": "gifts/snakebox/assets/models/morning-fog.tgs"
    }
  },
  {
    "name": "Black Box",
    "customEmojiId": "5269756595373373965",
    "assets": {
      "svg": "gifts/snakebox/assets/models/black-box.svg",
      "tgs": "gifts/snakebox/assets/models/black-box.tgs"
    }
  },
  {
    "name": "Bluebell",
    "customEmojiId": "5269456420109056146",
    "assets": {
      "svg": "gifts/snakebox/assets/models/bluebell.svg",
      "tgs": "gifts/snakebox/assets/models/bluebell.tgs"
    }
  },
  {
    "name": "Buttercup",
    "customEmojiId": "5267319399001388317",
    "assets": {
      "svg": "gifts/snakebox/assets/models/buttercup.svg",
      "tgs": "gifts/snakebox/assets/models/buttercup.tgs"
    }
  },
  {
    "name": "Cobra Noir",
    "customEmojiId": "5269773727997918243",
    "assets": {
      "svg": "gifts/snakebox/assets/models/cobra-noir.svg",
      "tgs": "gifts/snakebox/assets/models/cobra-noir.tgs"
    }
  },
  {
    "name": "Cotton Candy",
    "customEmojiId": "5269456832425917649",
    "assets": {
      "svg": "gifts/snakebox/assets/models/cotton-candy.svg",
      "tgs": "gifts/snakebox/assets/models/cotton-candy.tgs"
    }
  },
  {
    "name": "Emerald",
    "customEmojiId": "5269730735375282336",
    "assets": {
      "svg": "gifts/snakebox/assets/models/emerald.svg",
      "tgs": "gifts/snakebox/assets/models/emerald.tgs"
    }
  },
  {
    "name": "Fantasy",
    "customEmojiId": "5267205861540920681",
    "assets": {
      "svg": "gifts/snakebox/assets/models/fantasy.svg",
      "tgs": "gifts/snakebox/assets/models/fantasy.tgs"
    }
  },
  {
    "name": "Fresh Mint",
    "customEmojiId": "5269707581206589494",
    "assets": {
      "svg": "gifts/snakebox/assets/models/fresh-mint.svg",
      "tgs": "gifts/snakebox/assets/models/fresh-mint.tgs"
    }
  },
  {
    "name": "Fuchsia",
    "customEmojiId": "5269434876553100099",
    "assets": {
      "svg": "gifts/snakebox/assets/models/fuchsia.svg",
      "tgs": "gifts/snakebox/assets/models/fuchsia.tgs"
    }
  },
  {
    "name": "Holly Jolly",
    "customEmojiId": "5269667736794986072",
    "assets": {
      "svg": "gifts/snakebox/assets/models/holly-jolly.svg",
      "tgs": "gifts/snakebox/assets/models/holly-jolly.tgs"
    }
  },
  {
    "name": "Meadow",
    "customEmojiId": "5266999033095813450",
    "assets": {
      "svg": "gifts/snakebox/assets/models/meadow.svg",
      "tgs": "gifts/snakebox/assets/models/meadow.tgs"
    }
  },
  {
    "name": "Pink Bloom",
    "customEmojiId": "5269762196010727902",
    "assets": {
      "svg": "gifts/snakebox/assets/models/pink-bloom.svg",
      "tgs": "gifts/snakebox/assets/models/pink-bloom.tgs"
    }
  },
  {
    "name": "Polka Dot",
    "customEmojiId": "5269573088600684247",
    "assets": {
      "svg": "gifts/snakebox/assets/models/polka-dot.svg",
      "tgs": "gifts/snakebox/assets/models/polka-dot.tgs"
    }
  },
  {
    "name": "Purple",
    "customEmojiId": "5267301596361946556",
    "assets": {
      "svg": "gifts/snakebox/assets/models/purple.svg",
      "tgs": "gifts/snakebox/assets/models/purple.tgs"
    }
  },
  {
    "name": "Raspberry",
    "customEmojiId": "5269283431711273068",
    "assets": {
      "svg": "gifts/snakebox/assets/models/raspberry.svg",
      "tgs": "gifts/snakebox/assets/models/raspberry.tgs"
    }
  },
  {
    "name": "Red Dash",
    "customEmojiId": "5269325320527314060",
    "assets": {
      "svg": "gifts/snakebox/assets/models/red-dash.svg",
      "tgs": "gifts/snakebox/assets/models/red-dash.tgs"
    }
  },
  {
    "name": "Red Ribbon",
    "customEmojiId": "5267236922744405385",
    "assets": {
      "svg": "gifts/snakebox/assets/models/red-ribbon.svg",
      "tgs": "gifts/snakebox/assets/models/red-ribbon.tgs"
    }
  },
  {
    "name": "Scarlet Gold",
    "customEmojiId": "5267395707685335874",
    "assets": {
      "svg": "gifts/snakebox/assets/models/scarlet-gold.svg",
      "tgs": "gifts/snakebox/assets/models/scarlet-gold.tgs"
    }
  },
  {
    "name": "Seashore",
    "customEmojiId": "5267454707651083787",
    "assets": {
      "svg": "gifts/snakebox/assets/models/seashore.svg",
      "tgs": "gifts/snakebox/assets/models/seashore.tgs"
    }
  },
  {
    "name": "Secret Santa",
    "customEmojiId": "5269677048284083149",
    "assets": {
      "svg": "gifts/snakebox/assets/models/secret-santa.svg",
      "tgs": "gifts/snakebox/assets/models/secret-santa.tgs"
    }
  },
  {
    "name": "Sunshine",
    "customEmojiId": "5269607422569248714",
    "assets": {
      "svg": "gifts/snakebox/assets/models/sunshine.svg",
      "tgs": "gifts/snakebox/assets/models/sunshine.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null,
    "assets": {
      "png": "gifts/snakebox/assets/patterns/new-year-s-eve.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/turban.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/owl.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Arcane Mirror",
    "customEmojiId": "5199560770874018874",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/arcane-mirror.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/snow-angel.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/hot-drink.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/mustache.png"
    }
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/hourglass.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Elf Hat",
    "customEmojiId": "5199596066915260460",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/elf-hat.png"
    }
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/sailor-hat.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/star.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Peace Dove",
    "customEmojiId": "5199441345013386136",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/peace-dove.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/potion.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/police-hat.png"
    }
  },
  {
    "name": "Winter Hat",
    "customEmojiId": "5199676112220754626",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/winter-hat.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/gold.png"
    }
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/steampunk-hat.png"
    }
  },
  {
    "name": "Onigiri",
    "customEmojiId": "5199752717257444302",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/onigiri.png"
    }
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/bowtie.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/brain.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/rudolph.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Fried Egg",
    "customEmojiId": "5199508084510201810",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/fried-egg.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/burger.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/mittens.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/propeller-cap.png"
    }
  },
  {
    "name": "Winged Helmet",
    "customEmojiId": "5199518650129746938",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/winged-helmet.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/ball.png"
    }
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/fedora.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/chest.png"
    }
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/ice-skates.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/candle.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/horn.png"
    }
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/tricorne.png"
    }
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/lotus-flower.png"
    }
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/cowboy-hat.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/worker-ant.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/winter-house.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/festive-wreath.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/handset.png"
    }
  },
  {
    "name": "Pith Helmet",
    "customEmojiId": "5199425878836152426",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/pith-helmet.png"
    }
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/ornament.png"
    }
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/cavalier-hat.png"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/mistletoe.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/thunderbird.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/christmas-tree.png"
    }
  },
  {
    "name": "Gua Pi Mao",
    "customEmojiId": "5199440052228229167",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/gua-pi-mao.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/spades.png"
    }
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/nemes.png"
    }
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/jingle-bell.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/takoyaki.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/koala.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/fireworks.png"
    }
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/cookie.png"
    }
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/teru-bozu.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/candy.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/shield.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/knight.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/snowman.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/academic-cap.png"
    }
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/aztec-totem.png"
    }
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/hazelnut.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/stocking.png"
    }
  },
  {
    "name": "Straw Hat",
    "customEmojiId": "5199475953859857051",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/straw-hat.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/all-seeing-eye.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/flower-sun.png"
    }
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/snowflake.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/wontons.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/book.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/corn.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Iron Helmet",
    "customEmojiId": "5199857089257702611",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/iron-helmet.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209",
    "assets": {
      "png": "gifts/snakebox/assets/patterns/santa-hat.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Tomato",
    "customEmojiId": "5377723259921916635",
    "hex": {
      "centerColor": "#e6793e",
      "edgeColor": "#d44e3f",
      "patternColor": "#800b00",
      "textColor": "#ffccbd"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "snakebox", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
