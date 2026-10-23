import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Cashback",
    "customEmojiId": "5436013374947229317",
    "assets": {
      "svg": "gifts/swagbag/assets/models/cashback.svg",
      "tgs": "gifts/swagbag/assets/models/cashback.tgs"
    }
  },
  {
    "name": "Cookie Dude",
    "customEmojiId": "5438344034655437228",
    "assets": {
      "svg": "gifts/swagbag/assets/models/cookie-dude.svg",
      "tgs": "gifts/swagbag/assets/models/cookie-dude.tgs"
    }
  },
  {
    "name": "Gin & Jewels",
    "customEmojiId": "5436067878082216004",
    "assets": {
      "svg": "gifts/swagbag/assets/models/gin-jewels.svg",
      "tgs": "gifts/swagbag/assets/models/gin-jewels.tgs"
    }
  },
  {
    "name": "Happy Herbs",
    "customEmojiId": "5438552374929030344",
    "assets": {
      "svg": "gifts/swagbag/assets/models/happy-herbs.svg",
      "tgs": "gifts/swagbag/assets/models/happy-herbs.tgs"
    }
  },
  {
    "name": "Missionary",
    "customEmojiId": "5438573368729173862",
    "assets": {
      "svg": "gifts/swagbag/assets/models/missionary.svg",
      "tgs": "gifts/swagbag/assets/models/missionary.tgs"
    }
  },
  {
    "name": "Snoop Life",
    "customEmojiId": "5438477337555403700",
    "assets": {
      "svg": "gifts/swagbag/assets/models/snoop-life.svg",
      "tgs": "gifts/swagbag/assets/models/snoop-life.tgs"
    }
  },
  {
    "name": "Blind Bag",
    "customEmojiId": "5438387929221202047",
    "assets": {
      "svg": "gifts/swagbag/assets/models/blind-bag.svg",
      "tgs": "gifts/swagbag/assets/models/blind-bag.tgs"
    }
  },
  {
    "name": "Darkness",
    "customEmojiId": "5436096937830938661",
    "assets": {
      "svg": "gifts/swagbag/assets/models/darkness.svg",
      "tgs": "gifts/swagbag/assets/models/darkness.tgs"
    }
  },
  {
    "name": "Golden Nugs",
    "customEmojiId": "5436260030624071041",
    "assets": {
      "svg": "gifts/swagbag/assets/models/golden-nugs.svg",
      "tgs": "gifts/swagbag/assets/models/golden-nugs.tgs"
    }
  },
  {
    "name": "Leopard",
    "customEmojiId": "5436346810438285367",
    "assets": {
      "svg": "gifts/swagbag/assets/models/leopard.svg",
      "tgs": "gifts/swagbag/assets/models/leopard.tgs"
    }
  },
  {
    "name": "P.I.M.P.",
    "customEmojiId": "5438618397166302970",
    "assets": {
      "svg": "gifts/swagbag/assets/models/p-i-m-p.svg",
      "tgs": "gifts/swagbag/assets/models/p-i-m-p.tgs"
    }
  },
  {
    "name": "The Last Meal",
    "customEmojiId": "5438583964413493405",
    "assets": {
      "svg": "gifts/swagbag/assets/models/the-last-meal.svg",
      "tgs": "gifts/swagbag/assets/models/the-last-meal.tgs"
    }
  },
  {
    "name": "Doll Buttons",
    "customEmojiId": "5438641620054472676",
    "assets": {
      "svg": "gifts/swagbag/assets/models/doll-buttons.svg",
      "tgs": "gifts/swagbag/assets/models/doll-buttons.tgs"
    }
  },
  {
    "name": "Snoop S",
    "customEmojiId": "5435973290017457216",
    "assets": {
      "svg": "gifts/swagbag/assets/models/snoop-s.svg",
      "tgs": "gifts/swagbag/assets/models/snoop-s.tgs"
    }
  },
  {
    "name": "Stack Pack",
    "customEmojiId": "5438351142826310748",
    "assets": {
      "svg": "gifts/swagbag/assets/models/stack-pack.svg",
      "tgs": "gifts/swagbag/assets/models/stack-pack.tgs"
    }
  },
  {
    "name": "April 20th",
    "customEmojiId": "5438497949103454498",
    "assets": {
      "svg": "gifts/swagbag/assets/models/april-20th.svg",
      "tgs": "gifts/swagbag/assets/models/april-20th.tgs"
    }
  },
  {
    "name": "Aviators",
    "customEmojiId": "5438490858112451374",
    "assets": {
      "svg": "gifts/swagbag/assets/models/aviators.svg",
      "tgs": "gifts/swagbag/assets/models/aviators.tgs"
    }
  },
  {
    "name": "Baggy Bag",
    "customEmojiId": "5436336077315013494",
    "assets": {
      "svg": "gifts/swagbag/assets/models/baggy-bag.svg",
      "tgs": "gifts/swagbag/assets/models/baggy-bag.tgs"
    }
  },
  {
    "name": "Boiling Hot",
    "customEmojiId": "5438508106701110788",
    "assets": {
      "svg": "gifts/swagbag/assets/models/boiling-hot.svg",
      "tgs": "gifts/swagbag/assets/models/boiling-hot.tgs"
    }
  },
  {
    "name": "Bulk Order",
    "customEmojiId": "5436258832328196478",
    "assets": {
      "svg": "gifts/swagbag/assets/models/bulk-order.svg",
      "tgs": "gifts/swagbag/assets/models/bulk-order.tgs"
    }
  },
  {
    "name": "Candy Shop",
    "customEmojiId": "5438266703769270615",
    "assets": {
      "svg": "gifts/swagbag/assets/models/candy-shop.svg",
      "tgs": "gifts/swagbag/assets/models/candy-shop.tgs"
    }
  },
  {
    "name": "Doggy Doggs",
    "customEmojiId": "5438281431212129913",
    "assets": {
      "svg": "gifts/swagbag/assets/models/doggy-doggs.svg",
      "tgs": "gifts/swagbag/assets/models/doggy-doggs.tgs"
    }
  },
  {
    "name": "Doggystyle",
    "customEmojiId": "5436211063701930829",
    "assets": {
      "svg": "gifts/swagbag/assets/models/doggystyle.svg",
      "tgs": "gifts/swagbag/assets/models/doggystyle.tgs"
    }
  },
  {
    "name": "Fish Hat",
    "customEmojiId": "5438227018271455951",
    "assets": {
      "svg": "gifts/swagbag/assets/models/fish-hat.svg",
      "tgs": "gifts/swagbag/assets/models/fish-hat.tgs"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5438553921117254229",
    "assets": {
      "svg": "gifts/swagbag/assets/models/money-bag.svg",
      "tgs": "gifts/swagbag/assets/models/money-bag.tgs"
    }
  },
  {
    "name": "Muffins",
    "customEmojiId": "5438202128935975929",
    "assets": {
      "svg": "gifts/swagbag/assets/models/muffins.svg",
      "tgs": "gifts/swagbag/assets/models/muffins.tgs"
    }
  },
  {
    "name": "Platinum 8",
    "customEmojiId": "5436104587167694783",
    "assets": {
      "svg": "gifts/swagbag/assets/models/platinum-8.svg",
      "tgs": "gifts/swagbag/assets/models/platinum-8.tgs"
    }
  },
  {
    "name": "Shuffle",
    "customEmojiId": "5436216797483270412",
    "assets": {
      "svg": "gifts/swagbag/assets/models/shuffle.svg",
      "tgs": "gifts/swagbag/assets/models/shuffle.tgs"
    }
  },
  {
    "name": "Take It Easy",
    "customEmojiId": "5438297880936871711",
    "assets": {
      "svg": "gifts/swagbag/assets/models/take-it-easy.svg",
      "tgs": "gifts/swagbag/assets/models/take-it-easy.tgs"
    }
  },
  {
    "name": "Walk Of Fame",
    "customEmojiId": "5435938814314969766",
    "assets": {
      "svg": "gifts/swagbag/assets/models/walk-of-fame.svg",
      "tgs": "gifts/swagbag/assets/models/walk-of-fame.tgs"
    }
  },
  {
    "name": "West Toast",
    "customEmojiId": "5438136909857588404",
    "assets": {
      "svg": "gifts/swagbag/assets/models/west-toast.svg",
      "tgs": "gifts/swagbag/assets/models/west-toast.tgs"
    }
  },
  {
    "name": "Bark & Tag",
    "customEmojiId": "5438424397788509129",
    "assets": {
      "svg": "gifts/swagbag/assets/models/bark-tag.svg",
      "tgs": "gifts/swagbag/assets/models/bark-tag.tgs"
    }
  },
  {
    "name": "Crook To Cook",
    "customEmojiId": "5438135539763019749",
    "assets": {
      "svg": "gifts/swagbag/assets/models/crook-to-cook.svg",
      "tgs": "gifts/swagbag/assets/models/crook-to-cook.tgs"
    }
  },
  {
    "name": "Purple Smoke",
    "customEmojiId": "5438298546656803244",
    "assets": {
      "svg": "gifts/swagbag/assets/models/purple-smoke.svg",
      "tgs": "gifts/swagbag/assets/models/purple-smoke.tgs"
    }
  },
  {
    "name": "Rastafari",
    "customEmojiId": "5438615407869066536",
    "assets": {
      "svg": "gifts/swagbag/assets/models/rastafari.svg",
      "tgs": "gifts/swagbag/assets/models/rastafari.tgs"
    }
  },
  {
    "name": "Serious Dude",
    "customEmojiId": "5438276552129278117",
    "assets": {
      "svg": "gifts/swagbag/assets/models/serious-dude.svg",
      "tgs": "gifts/swagbag/assets/models/serious-dude.tgs"
    }
  },
  {
    "name": "Tag Bag",
    "customEmojiId": "5438171187991576851",
    "assets": {
      "svg": "gifts/swagbag/assets/models/tag-bag.svg",
      "tgs": "gifts/swagbag/assets/models/tag-bag.tgs"
    }
  },
  {
    "name": "Choco Doggs",
    "customEmojiId": "5438443763796050430",
    "assets": {
      "svg": "gifts/swagbag/assets/models/choco-doggs.svg",
      "tgs": "gifts/swagbag/assets/models/choco-doggs.tgs"
    }
  },
  {
    "name": "Choco Kush",
    "customEmojiId": "5436169733231639503",
    "assets": {
      "svg": "gifts/swagbag/assets/models/choco-kush.svg",
      "tgs": "gifts/swagbag/assets/models/choco-kush.tgs"
    }
  },
  {
    "name": "Dogg Treats",
    "customEmojiId": "5438492971236360366",
    "assets": {
      "svg": "gifts/swagbag/assets/models/dogg-treats.svg",
      "tgs": "gifts/swagbag/assets/models/dogg-treats.tgs"
    }
  },
  {
    "name": "Dogg’s Loot",
    "customEmojiId": "5438582186297026974",
    "assets": {
      "svg": "gifts/swagbag/assets/models/dogg-s-loot.svg",
      "tgs": "gifts/swagbag/assets/models/dogg-s-loot.tgs"
    }
  },
  {
    "name": "Gin and Juice",
    "customEmojiId": "5436001379103572355",
    "assets": {
      "svg": "gifts/swagbag/assets/models/gin-and-juice.svg",
      "tgs": "gifts/swagbag/assets/models/gin-and-juice.tgs"
    }
  },
  {
    "name": "Gummies",
    "customEmojiId": "5438198100256651863",
    "assets": {
      "svg": "gifts/swagbag/assets/models/gummies.svg",
      "tgs": "gifts/swagbag/assets/models/gummies.tgs"
    }
  },
  {
    "name": "Hop Corn",
    "customEmojiId": "5438601771347903573",
    "assets": {
      "svg": "gifts/swagbag/assets/models/hop-corn.svg",
      "tgs": "gifts/swagbag/assets/models/hop-corn.tgs"
    }
  },
  {
    "name": "Lollipops",
    "customEmojiId": "5436201954076294979",
    "assets": {
      "svg": "gifts/swagbag/assets/models/lollipops.svg",
      "tgs": "gifts/swagbag/assets/models/lollipops.tgs"
    }
  },
  {
    "name": "Platinum Drip",
    "customEmojiId": "5438424711321125039",
    "assets": {
      "svg": "gifts/swagbag/assets/models/platinum-drip.svg",
      "tgs": "gifts/swagbag/assets/models/platinum-drip.tgs"
    }
  },
  {
    "name": "Smokefest",
    "customEmojiId": "5438385652888534964",
    "assets": {
      "svg": "gifts/swagbag/assets/models/smokefest.svg",
      "tgs": "gifts/swagbag/assets/models/smokefest.tgs"
    }
  },
  {
    "name": "Snoopcoins",
    "customEmojiId": "5438206033061248088",
    "assets": {
      "svg": "gifts/swagbag/assets/models/snoopcoins.svg",
      "tgs": "gifts/swagbag/assets/models/snoopcoins.tgs"
    }
  },
  {
    "name": "Spicy Onion",
    "customEmojiId": "5438564778794580216",
    "assets": {
      "svg": "gifts/swagbag/assets/models/spicy-onion.svg",
      "tgs": "gifts/swagbag/assets/models/spicy-onion.tgs"
    }
  },
  {
    "name": "Lemon Pepper",
    "customEmojiId": "5438552787245890850",
    "assets": {
      "svg": "gifts/swagbag/assets/models/lemon-pepper.svg",
      "tgs": "gifts/swagbag/assets/models/lemon-pepper.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cash.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/grape.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Swag Bandana",
    "customEmojiId": "5199450188351046792",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/swag-bandana.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/car.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/novus-ordo.png"
    }
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/baby-bottle.png"
    }
  },
  {
    "name": "Doctor Hat",
    "customEmojiId": "5199584148381011556",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/doctor-hat.png"
    }
  },
  {
    "name": "Boombox",
    "customEmojiId": "5199586841325506003",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/boombox.png"
    }
  },
  {
    "name": "Head Scarf",
    "customEmojiId": "5199429765781555604",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/head-scarf.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/moon-face.png"
    }
  },
  {
    "name": "Los Angeles",
    "customEmojiId": "5199582997329775383",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/los-angeles.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/chick.png"
    }
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/holy-grail.png"
    }
  },
  {
    "name": "Revolver",
    "customEmojiId": "5199915006891691950",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/revolver.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/paw-print.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/full-moon.png"
    }
  },
  {
    "name": "Blunt",
    "customEmojiId": "5199523894284813020",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/blunt.png"
    }
  },
  {
    "name": "Palm Trees",
    "customEmojiId": "5199492171656364550",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/palm-trees.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/rose.png"
    }
  },
  {
    "name": "Winter Hat",
    "customEmojiId": "5199676112220754626",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/winter-hat.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Wepwawet",
    "customEmojiId": "5199485793629930536",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/wepwawet.png"
    }
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/wontons.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/corn.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/griffon.png"
    }
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/war-bonnet.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/like.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/origami.png"
    }
  },
  {
    "name": "Deerstalker",
    "customEmojiId": "5199479669006568749",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/deerstalker.png"
    }
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/sailor-hat.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/fire.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Peaked Cap",
    "customEmojiId": "5199944066640415730",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/peaked-cap.png"
    }
  },
  {
    "name": "Wizard Hat",
    "customEmojiId": "5199659452042611516",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/wizard-hat.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Hersir",
    "customEmojiId": "5199923815869616574",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/hersir.png"
    }
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/omusubi.png"
    }
  },
  {
    "name": "213",
    "customEmojiId": "5199597488549434909",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/213.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/nemes.png"
    }
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/all-seeing-eye.png"
    }
  },
  {
    "name": "Beanie",
    "customEmojiId": "5202215137972354788",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/beanie.png"
    }
  },
  {
    "name": "Pilot Hat",
    "customEmojiId": "5199599971040525984",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/pilot-hat.png"
    }
  },
  {
    "name": "Rap Sign",
    "customEmojiId": "5199894872085010619",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/rap-sign.png"
    }
  },
  {
    "name": "Snoop Collar",
    "customEmojiId": "5199530658858308320",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/snoop-collar.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/crown.png"
    }
  },
  {
    "name": "Cute Paw",
    "customEmojiId": "5199960164177840714",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cute-paw.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/plume.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/flower.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/chili.png"
    }
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/moai-head.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/gem.png"
    }
  },
  {
    "name": "Headphones",
    "customEmojiId": "5199736980497270388",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/headphones.png"
    }
  },
  {
    "name": "Spray Paint",
    "customEmojiId": "5199752545458747049",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/spray-paint.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Panty",
    "customEmojiId": "5199834450485085491",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/panty.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Arcane Mirror",
    "customEmojiId": "5199560770874018874",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/arcane-mirror.png"
    }
  },
  {
    "name": "Ushanka",
    "customEmojiId": "5202149927483900109",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/ushanka.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/chef-hat.png"
    }
  },
  {
    "name": "Westside Hand",
    "customEmojiId": "5199430504515930470",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/westside-hand.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/imperial-lion.png"
    }
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/geisha-fan.png"
    }
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/police-hat.png"
    }
  },
  {
    "name": "Black Bandana",
    "customEmojiId": "5199409596615132950",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/black-bandana.png"
    }
  },
  {
    "name": "Rap Mic",
    "customEmojiId": "5199480528000031785",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/rap-mic.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/ring.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/puzzle.png"
    }
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/obon-lantern.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/kitsune-mask.png"
    }
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/astronaut.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/knight.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/palette.png"
    }
  },
  {
    "name": "Beretta",
    "customEmojiId": "5199917351943832803",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/beretta.png"
    }
  },
  {
    "name": "Bong",
    "customEmojiId": "5199531165664442359",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/bong.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Ancient Urn",
    "customEmojiId": "5199861697757609491",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/ancient-urn.png"
    }
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/propeller-cap.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cap.png"
    }
  },
  {
    "name": "Low Rider",
    "customEmojiId": "5199830512000078489",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/low-rider.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/horned-helm.png"
    }
  },
  {
    "name": "Hip-Hop",
    "customEmojiId": "5199555874611299686",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/hip-hop.png"
    }
  },
  {
    "name": "Loudspeaker",
    "customEmojiId": "5199796135081839538",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/loudspeaker.png"
    }
  },
  {
    "name": "Music Skull",
    "customEmojiId": "5199447121744399613",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/music-skull.png"
    }
  },
  {
    "name": "Cash Cap",
    "customEmojiId": "5199576043777723654",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cash-cap.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Snoop Leaf",
    "customEmojiId": "5199915221640055629",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/snoop-leaf.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Brass Knuckles",
    "customEmojiId": "5199924546014052526",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/brass-knuckles.png"
    }
  },
  {
    "name": "Desert Eagle",
    "customEmojiId": "5199964265871611461",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/desert-eagle.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/thief.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cowboy-hat.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/paw.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Royal Turban",
    "customEmojiId": "5199593258006647336",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/royal-turban.png"
    }
  },
  {
    "name": "Basketball",
    "customEmojiId": "5199728789994637327",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/basketball.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/bread.png"
    }
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/ice-cream.png"
    }
  },
  {
    "name": "Earth",
    "customEmojiId": "5199963814900042040",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/earth.png"
    }
  },
  {
    "name": "Easter Bunny",
    "customEmojiId": "5199627626334947886",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/easter-bunny.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "UZI",
    "customEmojiId": "5199435392188712389",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/uzi.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Vinyl Record",
    "customEmojiId": "5199870635584551794",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/vinyl-record.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/sun.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Snoop Logo",
    "customEmojiId": "5199772435452299061",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/snoop-logo.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Dollar Graffiti",
    "customEmojiId": "5199837087595004659",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/dollar-graffiti.png"
    }
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/bamboo.png"
    }
  },
  {
    "name": "Yo Sign",
    "customEmojiId": "5199924683453008944",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/yo-sign.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Paisley",
    "customEmojiId": "5199498309164632323",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/paisley.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/bone.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/kite.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Pro Headphones",
    "customEmojiId": "5199484230261838343",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/pro-headphones.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/swagbag/assets/patterns/gold.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Onyx Black",
    "customEmojiId": "5377775263385937055",
    "hex": {
      "centerColor": "#4d5254",
      "edgeColor": "#313638",
      "patternColor": "#000000",
      "textColor": "#a9abad"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "swagbag", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
