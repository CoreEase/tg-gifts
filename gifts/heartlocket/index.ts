import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Cirque",
    "customEmojiId": "5890784230442539498",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/cirque.svg",
      "tgs": "gifts/heartlocket/assets/models/cirque.tgs"
    }
  },
  {
    "name": "Golden",
    "customEmojiId": "5893177661097777505",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/golden.svg",
      "tgs": "gifts/heartlocket/assets/models/golden.tgs"
    }
  },
  {
    "name": "Great Wave",
    "customEmojiId": "5890875116245489797",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/great-wave.svg",
      "tgs": "gifts/heartlocket/assets/models/great-wave.tgs"
    }
  },
  {
    "name": "Mirror",
    "customEmojiId": "5890764490772846732",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/mirror.svg",
      "tgs": "gifts/heartlocket/assets/models/mirror.tgs"
    }
  },
  {
    "name": "Neptune",
    "customEmojiId": "5893305844396726724",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/neptune.svg",
      "tgs": "gifts/heartlocket/assets/models/neptune.tgs"
    }
  },
  {
    "name": "Turtles",
    "customEmojiId": "5893518595601733855",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/turtles.svg",
      "tgs": "gifts/heartlocket/assets/models/turtles.tgs"
    }
  },
  {
    "name": "Tuxedo Mask",
    "customEmojiId": "5890997643072510274",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/tuxedo-mask.svg",
      "tgs": "gifts/heartlocket/assets/models/tuxedo-mask.tgs"
    }
  },
  {
    "name": "Uranus",
    "customEmojiId": "5893470350234097782",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/uranus.svg",
      "tgs": "gifts/heartlocket/assets/models/uranus.tgs"
    }
  },
  {
    "name": "Valentine",
    "customEmojiId": "5893166356743853910",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/valentine.svg",
      "tgs": "gifts/heartlocket/assets/models/valentine.tgs"
    }
  },
  {
    "name": "White Wolf",
    "customEmojiId": "5893251521650367294",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/white-wolf.svg",
      "tgs": "gifts/heartlocket/assets/models/white-wolf.tgs"
    }
  },
  {
    "name": "Acorn Hunter",
    "customEmojiId": "5893366433500370525",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/acorn-hunter.svg",
      "tgs": "gifts/heartlocket/assets/models/acorn-hunter.tgs"
    }
  },
  {
    "name": "Casino Bugs",
    "customEmojiId": "5893137838161009364",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/casino-bugs.svg",
      "tgs": "gifts/heartlocket/assets/models/casino-bugs.tgs"
    }
  },
  {
    "name": "Fairy Dust",
    "customEmojiId": "5893388741560506158",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/fairy-dust.svg",
      "tgs": "gifts/heartlocket/assets/models/fairy-dust.tgs"
    }
  },
  {
    "name": "Gem Shards",
    "customEmojiId": "5893283287228487780",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/gem-shards.svg",
      "tgs": "gifts/heartlocket/assets/models/gem-shards.tgs"
    }
  },
  {
    "name": "Jupiter",
    "customEmojiId": "5890833339098601610",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/jupiter.svg",
      "tgs": "gifts/heartlocket/assets/models/jupiter.tgs"
    }
  },
  {
    "name": "Koi Pond",
    "customEmojiId": "5893472218544871611",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/koi-pond.svg",
      "tgs": "gifts/heartlocket/assets/models/koi-pond.tgs"
    }
  },
  {
    "name": "Lady Bug",
    "customEmojiId": "5890896977629026507",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/lady-bug.svg",
      "tgs": "gifts/heartlocket/assets/models/lady-bug.tgs"
    }
  },
  {
    "name": "Lunar Grail",
    "customEmojiId": "5891082503036344794",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/lunar-grail.svg",
      "tgs": "gifts/heartlocket/assets/models/lunar-grail.tgs"
    }
  },
  {
    "name": "Mars",
    "customEmojiId": "5891176159093201380",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/mars.svg",
      "tgs": "gifts/heartlocket/assets/models/mars.tgs"
    }
  },
  {
    "name": "Matryoshka",
    "customEmojiId": "5893505113699392565",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/matryoshka.svg",
      "tgs": "gifts/heartlocket/assets/models/matryoshka.tgs"
    }
  },
  {
    "name": "Mecha Love",
    "customEmojiId": "5893254541012375423",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/mecha-love.svg",
      "tgs": "gifts/heartlocket/assets/models/mecha-love.tgs"
    }
  },
  {
    "name": "Mercury",
    "customEmojiId": "5893168315248942279",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/mercury.svg",
      "tgs": "gifts/heartlocket/assets/models/mercury.tgs"
    }
  },
  {
    "name": "Ocean Star",
    "customEmojiId": "5893186697708968291",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/ocean-star.svg",
      "tgs": "gifts/heartlocket/assets/models/ocean-star.tgs"
    }
  },
  {
    "name": "Pluto",
    "customEmojiId": "5893406471185504524",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/pluto.svg",
      "tgs": "gifts/heartlocket/assets/models/pluto.tgs"
    }
  },
  {
    "name": "Queen Bee",
    "customEmojiId": "5892969277874509750",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/queen-bee.svg",
      "tgs": "gifts/heartlocket/assets/models/queen-bee.tgs"
    }
  },
  {
    "name": "Rebellion",
    "customEmojiId": "5893474645201394762",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/rebellion.svg",
      "tgs": "gifts/heartlocket/assets/models/rebellion.tgs"
    }
  },
  {
    "name": "Royal Heart",
    "customEmojiId": "5893177411989674986",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/royal-heart.svg",
      "tgs": "gifts/heartlocket/assets/models/royal-heart.tgs"
    }
  },
  {
    "name": "Sanctuary",
    "customEmojiId": "5893311767156628375",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/sanctuary.svg",
      "tgs": "gifts/heartlocket/assets/models/sanctuary.tgs"
    }
  },
  {
    "name": "Saturn",
    "customEmojiId": "5893298173585136119",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/saturn.svg",
      "tgs": "gifts/heartlocket/assets/models/saturn.tgs"
    }
  },
  {
    "name": "Shaman",
    "customEmojiId": "5893175646758116199",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/shaman.svg",
      "tgs": "gifts/heartlocket/assets/models/shaman.tgs"
    }
  },
  {
    "name": "Shield of Sun",
    "customEmojiId": "5892965601382505054",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/shield-of-sun.svg",
      "tgs": "gifts/heartlocket/assets/models/shield-of-sun.tgs"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5890729856156571495",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/spider-web.svg",
      "tgs": "gifts/heartlocket/assets/models/spider-web.tgs"
    }
  },
  {
    "name": "Stone Flower",
    "customEmojiId": "5891172478306227855",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/stone-flower.svg",
      "tgs": "gifts/heartlocket/assets/models/stone-flower.tgs"
    }
  },
  {
    "name": "Synthwave",
    "customEmojiId": "5893268564080598170",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/synthwave.svg",
      "tgs": "gifts/heartlocket/assets/models/synthwave.tgs"
    }
  },
  {
    "name": "Telegram",
    "customEmojiId": "5893152110337333956",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/telegram.svg",
      "tgs": "gifts/heartlocket/assets/models/telegram.tgs"
    }
  },
  {
    "name": "Venus",
    "customEmojiId": "5893381135173425628",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/venus.svg",
      "tgs": "gifts/heartlocket/assets/models/venus.tgs"
    }
  },
  {
    "name": "Angelic Pink",
    "customEmojiId": "5893247900992935710",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/angelic-pink.svg",
      "tgs": "gifts/heartlocket/assets/models/angelic-pink.tgs"
    }
  },
  {
    "name": "Black Hole",
    "customEmojiId": "5893452762343020580",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/black-hole.svg",
      "tgs": "gifts/heartlocket/assets/models/black-hole.tgs"
    }
  },
  {
    "name": "Compass",
    "customEmojiId": "5893354858563508694",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/compass.svg",
      "tgs": "gifts/heartlocket/assets/models/compass.tgs"
    }
  },
  {
    "name": "Emocore",
    "customEmojiId": "5893275075251019088",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/emocore.svg",
      "tgs": "gifts/heartlocket/assets/models/emocore.tgs"
    }
  },
  {
    "name": "Glam Furry",
    "customEmojiId": "5893504920425863579",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/glam-furry.svg",
      "tgs": "gifts/heartlocket/assets/models/glam-furry.tgs"
    }
  },
  {
    "name": "Heartwood",
    "customEmojiId": "5893356855723303193",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/heartwood.svg",
      "tgs": "gifts/heartlocket/assets/models/heartwood.tgs"
    }
  },
  {
    "name": "Hell Rise",
    "customEmojiId": "5892965962159758698",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/hell-rise.svg",
      "tgs": "gifts/heartlocket/assets/models/hell-rise.tgs"
    }
  },
  {
    "name": "Karaoke Bar",
    "customEmojiId": "5890768635416287279",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/karaoke-bar.svg",
      "tgs": "gifts/heartlocket/assets/models/karaoke-bar.tgs"
    }
  },
  {
    "name": "Love Ring",
    "customEmojiId": "5893456589158881611",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/love-ring.svg",
      "tgs": "gifts/heartlocket/assets/models/love-ring.tgs"
    }
  },
  {
    "name": "Luna",
    "customEmojiId": "5891268762883069940",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/luna.svg",
      "tgs": "gifts/heartlocket/assets/models/luna.tgs"
    }
  },
  {
    "name": "Reactor",
    "customEmojiId": "5893493465748084773",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/reactor.svg",
      "tgs": "gifts/heartlocket/assets/models/reactor.tgs"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5893154120382028173",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/sakura.svg",
      "tgs": "gifts/heartlocket/assets/models/sakura.tgs"
    }
  },
  {
    "name": "Satoru",
    "customEmojiId": "5893185495118126307",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/satoru.svg",
      "tgs": "gifts/heartlocket/assets/models/satoru.tgs"
    }
  },
  {
    "name": "Soulkeeper",
    "customEmojiId": "5893361842180332393",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/soulkeeper.svg",
      "tgs": "gifts/heartlocket/assets/models/soulkeeper.tgs"
    }
  },
  {
    "name": "Toy Joy",
    "customEmojiId": "5893157118269200925",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/toy-joy.svg",
      "tgs": "gifts/heartlocket/assets/models/toy-joy.tgs"
    }
  },
  {
    "name": "Trapped Heart",
    "customEmojiId": "5893365668996193035",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/trapped-heart.svg",
      "tgs": "gifts/heartlocket/assets/models/trapped-heart.tgs"
    }
  },
  {
    "name": "Vampire",
    "customEmojiId": "5893251556010105096",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/vampire.svg",
      "tgs": "gifts/heartlocket/assets/models/vampire.tgs"
    }
  },
  {
    "name": "Waffle Maker",
    "customEmojiId": "5893176475686803659",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/waffle-maker.svg",
      "tgs": "gifts/heartlocket/assets/models/waffle-maker.tgs"
    }
  },
  {
    "name": "Azure Gem",
    "customEmojiId": "5893297653894094223",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/azure-gem.svg",
      "tgs": "gifts/heartlocket/assets/models/azure-gem.tgs"
    }
  },
  {
    "name": "Comic Book",
    "customEmojiId": "5892969050241243189",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/comic-book.svg",
      "tgs": "gifts/heartlocket/assets/models/comic-book.tgs"
    }
  },
  {
    "name": "Disco",
    "customEmojiId": "5891075618203769370",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/disco.svg",
      "tgs": "gifts/heartlocket/assets/models/disco.tgs"
    }
  },
  {
    "name": "Nightclub",
    "customEmojiId": "5893446702144166345",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/nightclub.svg",
      "tgs": "gifts/heartlocket/assets/models/nightclub.tgs"
    }
  },
  {
    "name": "Pepperoni",
    "customEmojiId": "5893209194747665671",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/pepperoni.svg",
      "tgs": "gifts/heartlocket/assets/models/pepperoni.tgs"
    }
  },
  {
    "name": "Royal Flush",
    "customEmojiId": "5891080110739560734",
    "assets": {
      "svg": "gifts/heartlocket/assets/models/royal-flush.svg",
      "tgs": "gifts/heartlocket/assets/models/royal-flush.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/viking.png"
    }
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/war-bonnet.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/egg.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Muffin",
    "customEmojiId": "5199876712963279535",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/muffin.png"
    }
  },
  {
    "name": "Lavender",
    "customEmojiId": "5199588404693603667",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/lavender.png"
    }
  },
  {
    "name": "Egg Basket",
    "customEmojiId": "5199573548401720659",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/egg-basket.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/flower-sun.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/kite.png"
    }
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/imperial-lion.png"
    }
  },
  {
    "name": "Ribeye Steak",
    "customEmojiId": "5199881892693838705",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/ribeye-steak.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/axe.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Piranha",
    "customEmojiId": "5199947034462818715",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/piranha.png"
    }
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/coonskin-cap.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/burger.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/duck-face.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Bicorne",
    "customEmojiId": "5199462042460782106",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bicorne.png"
    }
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/watching-sun.png"
    }
  },
  {
    "name": "Petunia",
    "customEmojiId": "5199472638145103916",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/petunia.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/candy.png"
    }
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/cowboy-hat.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/maple.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/melon.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/cow-skull.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/drug.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Wizard Hat",
    "customEmojiId": "5199659452042611516",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/wizard-hat.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/sword.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/battle-axe.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/two-katanas.png"
    }
  },
  {
    "name": "Lovely Rain",
    "customEmojiId": "5199442977100959205",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/lovely-rain.png"
    }
  },
  {
    "name": "Date Pin",
    "customEmojiId": "5199428271132935454",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/date-pin.png"
    }
  },
  {
    "name": "Sleepy Unicorn",
    "customEmojiId": "5199466646665722804",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/sleepy-unicorn.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/conch.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/plume-shako.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/gear.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/thief.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Carnation",
    "customEmojiId": "5199722227284609449",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/carnation.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/rooster.png"
    }
  },
  {
    "name": "Pith Helmet",
    "customEmojiId": "5199425878836152426",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pith-helmet.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pear.png"
    }
  },
  {
    "name": "Bouquet",
    "customEmojiId": "5199875252674397860",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bouquet.png"
    }
  },
  {
    "name": "Loveberry",
    "customEmojiId": "5199559143081412940",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/loveberry.png"
    }
  },
  {
    "name": "Pilot Hat",
    "customEmojiId": "5199599971040525984",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pilot-hat.png"
    }
  },
  {
    "name": "Iron Helmet",
    "customEmojiId": "5199857089257702611",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/iron-helmet.png"
    }
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bearskin.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Doghouse",
    "customEmojiId": "5199765365936130864",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/doghouse.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/shell.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/owl.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Cupid Archer",
    "customEmojiId": "5199520986591956201",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/cupid-archer.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/coin.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/potion.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/shield.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/ring.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Ancient Urn",
    "customEmojiId": "5199861697757609491",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/ancient-urn.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/key.png"
    }
  },
  {
    "name": "Padlock",
    "customEmojiId": "5199791522286967123",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/padlock.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/tie.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/plum.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/knight.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Tic-Tac-Toe",
    "customEmojiId": "5199425337670273609",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/tic-tac-toe.png"
    }
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/sword-fight.png"
    }
  },
  {
    "name": "Spring Chick",
    "customEmojiId": "5199834257211559421",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/spring-chick.png"
    }
  },
  {
    "name": "Patched Heart",
    "customEmojiId": "5201931421022716330",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/patched-heart.png"
    }
  },
  {
    "name": "Spider Lily",
    "customEmojiId": "5199741215335021861",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/spider-lily.png"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/leprechaun.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/viper.png"
    }
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/heater-shield.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/police-hat.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/avocado.png"
    }
  },
  {
    "name": "May Bells",
    "customEmojiId": "5199654276607018619",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/may-bells.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/astronaut.png"
    }
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/war-tiger.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/full-moon.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/fish.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/monarch.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/brain.png"
    }
  },
  {
    "name": "Love Scene",
    "customEmojiId": "5199496964839870880",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/love-scene.png"
    }
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/sea-dragon.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/geisha-fan.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/fedora.png"
    }
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/tricorne.png"
    }
  },
  {
    "name": "Visor",
    "customEmojiId": "5199623855353661732",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/visor.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Two Hearts",
    "customEmojiId": "5199852042671128551",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/two-hearts.png"
    }
  },
  {
    "name": "Rabbit Mask",
    "customEmojiId": "5199524899307162798",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/rabbit-mask.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/grape.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/propeller-cap.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/turban.png"
    }
  },
  {
    "name": "Bobble Hat",
    "customEmojiId": "5199759262787603566",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bobble-hat.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/chest.png"
    }
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/dagger.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Divine Falcon",
    "customEmojiId": "5199678478747732305",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/divine-falcon.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Gua Pi Mao",
    "customEmojiId": "5199440052228229167",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/gua-pi-mao.png"
    }
  },
  {
    "name": "Beanie",
    "customEmojiId": "5202215137972354788",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/beanie.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/valkyrie.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/horn.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Party Hat",
    "customEmojiId": "5199420192299454140",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/party-hat.png"
    }
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/teru-bozu.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/spider.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/cone.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/planet.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/star.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/paw.png"
    }
  },
  {
    "name": "Love Bell",
    "customEmojiId": "5199502393678528259",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/love-bell.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/obon-lantern.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Love Daisy",
    "customEmojiId": "5199738440786153015",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/love-daisy.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/fire.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bike-helmet.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Mailbox",
    "customEmojiId": "5199540932420078897",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/mailbox.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/banner.png"
    }
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/wagasa.png"
    }
  },
  {
    "name": "Bellflower",
    "customEmojiId": "5199885251358264341",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bellflower.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Party Popper",
    "customEmojiId": "5199941017213636977",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/party-popper.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/kudu-totem.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bucket-hat.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Starflower",
    "customEmojiId": "5199553005573144994",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/starflower.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Balloon",
    "customEmojiId": "5199576666547980545",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/balloon.png"
    }
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/porrige.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/paper-lantern.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/cash.png"
    }
  },
  {
    "name": "Easter Bunny",
    "customEmojiId": "5199627626334947886",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/easter-bunny.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "High Hat",
    "customEmojiId": "5199803080043958545",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/high-hat.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/like.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Straw Hat",
    "customEmojiId": "5199475953859857051",
    "assets": {
      "png": "gifts/heartlocket/assets/patterns/straw-hat.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Battleship Grey",
    "customEmojiId": "5375258223571925187",
    "hex": {
      "centerColor": "#8c8c85",
      "edgeColor": "#6c6c66",
      "patternColor": "#2b2a20",
      "textColor": "#cfcec4"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "heartlocket", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
