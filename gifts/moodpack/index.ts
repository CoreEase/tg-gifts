import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Battle Royale",
    "customEmojiId": "5317017354641643043",
    "assets": {
      "svg": "gifts/moodpack/assets/models/battle-royale.svg",
      "tgs": "gifts/moodpack/assets/models/battle-royale.tgs"
    }
  },
  {
    "name": "Jetpack",
    "customEmojiId": "5319060792706898073",
    "assets": {
      "svg": "gifts/moodpack/assets/models/jetpack.svg",
      "tgs": "gifts/moodpack/assets/models/jetpack.tgs"
    }
  },
  {
    "name": "Net Worth",
    "customEmojiId": "5316569385257702225",
    "assets": {
      "svg": "gifts/moodpack/assets/models/net-worth.svg",
      "tgs": "gifts/moodpack/assets/models/net-worth.tgs"
    }
  },
  {
    "name": "Pepe Unleashed",
    "customEmojiId": "5318872213577834693",
    "assets": {
      "svg": "gifts/moodpack/assets/models/pepe-unleashed.svg",
      "tgs": "gifts/moodpack/assets/models/pepe-unleashed.tgs"
    }
  },
  {
    "name": "Proton Pack",
    "customEmojiId": "5318894933954826992",
    "assets": {
      "svg": "gifts/moodpack/assets/models/proton-pack.svg",
      "tgs": "gifts/moodpack/assets/models/proton-pack.tgs"
    }
  },
  {
    "name": "Golden Dragon",
    "customEmojiId": "5316928770941166998",
    "assets": {
      "svg": "gifts/moodpack/assets/models/golden-dragon.svg",
      "tgs": "gifts/moodpack/assets/models/golden-dragon.tgs"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5318790287076664156",
    "assets": {
      "svg": "gifts/moodpack/assets/models/jolly-roger.svg",
      "tgs": "gifts/moodpack/assets/models/jolly-roger.tgs"
    }
  },
  {
    "name": "Lady Arcana",
    "customEmojiId": "5318845069384524041",
    "assets": {
      "svg": "gifts/moodpack/assets/models/lady-arcana.svg",
      "tgs": "gifts/moodpack/assets/models/lady-arcana.tgs"
    }
  },
  {
    "name": "Laika Dog",
    "customEmojiId": "5316647613792034781",
    "assets": {
      "svg": "gifts/moodpack/assets/models/laika-dog.svg",
      "tgs": "gifts/moodpack/assets/models/laika-dog.tgs"
    }
  },
  {
    "name": "Moon Power",
    "customEmojiId": "5319284148186160395",
    "assets": {
      "svg": "gifts/moodpack/assets/models/moon-power.svg",
      "tgs": "gifts/moodpack/assets/models/moon-power.tgs"
    }
  },
  {
    "name": "Nezuko",
    "customEmojiId": "5318783720071667562",
    "assets": {
      "svg": "gifts/moodpack/assets/models/nezuko.svg",
      "tgs": "gifts/moodpack/assets/models/nezuko.tgs"
    }
  },
  {
    "name": "Travel Duck",
    "customEmojiId": "5316961219419087210",
    "assets": {
      "svg": "gifts/moodpack/assets/models/travel-duck.svg",
      "tgs": "gifts/moodpack/assets/models/travel-duck.tgs"
    }
  },
  {
    "name": "Void Beast",
    "customEmojiId": "5318777934750720757",
    "assets": {
      "svg": "gifts/moodpack/assets/models/void-beast.svg",
      "tgs": "gifts/moodpack/assets/models/void-beast.tgs"
    }
  },
  {
    "name": "Crystal Scarab",
    "customEmojiId": "5319055462652483350",
    "assets": {
      "svg": "gifts/moodpack/assets/models/crystal-scarab.svg",
      "tgs": "gifts/moodpack/assets/models/crystal-scarab.tgs"
    }
  },
  {
    "name": "Infernal Goat",
    "customEmojiId": "5318820884423678230",
    "assets": {
      "svg": "gifts/moodpack/assets/models/infernal-goat.svg",
      "tgs": "gifts/moodpack/assets/models/infernal-goat.tgs"
    }
  },
  {
    "name": "Rare Drop",
    "customEmojiId": "5319176920032648233",
    "assets": {
      "svg": "gifts/moodpack/assets/models/rare-drop.svg",
      "tgs": "gifts/moodpack/assets/models/rare-drop.tgs"
    }
  },
  {
    "name": "Ruby Heart",
    "customEmojiId": "5319014965405854502",
    "assets": {
      "svg": "gifts/moodpack/assets/models/ruby-heart.svg",
      "tgs": "gifts/moodpack/assets/models/ruby-heart.tgs"
    }
  },
  {
    "name": "VIP Pass",
    "customEmojiId": "5319014527319184571",
    "assets": {
      "svg": "gifts/moodpack/assets/models/vip-pass.svg",
      "tgs": "gifts/moodpack/assets/models/vip-pass.tgs"
    }
  },
  {
    "name": "Bank Vault",
    "customEmojiId": "5319273745775375068",
    "assets": {
      "svg": "gifts/moodpack/assets/models/bank-vault.svg",
      "tgs": "gifts/moodpack/assets/models/bank-vault.tgs"
    }
  },
  {
    "name": "Emo Phase",
    "customEmojiId": "5318919316484170491",
    "assets": {
      "svg": "gifts/moodpack/assets/models/emo-phase.svg",
      "tgs": "gifts/moodpack/assets/models/emo-phase.tgs"
    }
  },
  {
    "name": "Fluffy Monster",
    "customEmojiId": "5318997648097711555",
    "assets": {
      "svg": "gifts/moodpack/assets/models/fluffy-monster.svg",
      "tgs": "gifts/moodpack/assets/models/fluffy-monster.tgs"
    }
  },
  {
    "name": "Plush Shark",
    "customEmojiId": "5316742837511952329",
    "assets": {
      "svg": "gifts/moodpack/assets/models/plush-shark.svg",
      "tgs": "gifts/moodpack/assets/models/plush-shark.tgs"
    }
  },
  {
    "name": "Road Rebel",
    "customEmojiId": "5316622123161134050",
    "assets": {
      "svg": "gifts/moodpack/assets/models/road-rebel.svg",
      "tgs": "gifts/moodpack/assets/models/road-rebel.tgs"
    }
  },
  {
    "name": "Turtle Shell",
    "customEmojiId": "5316606656983897572",
    "assets": {
      "svg": "gifts/moodpack/assets/models/turtle-shell.svg",
      "tgs": "gifts/moodpack/assets/models/turtle-shell.tgs"
    }
  },
  {
    "name": "Aquarium",
    "customEmojiId": "5319135718411376081",
    "assets": {
      "svg": "gifts/moodpack/assets/models/aquarium.svg",
      "tgs": "gifts/moodpack/assets/models/aquarium.tgs"
    }
  },
  {
    "name": "Davy Jones",
    "customEmojiId": "5319085132286566015",
    "assets": {
      "svg": "gifts/moodpack/assets/models/davy-jones.svg",
      "tgs": "gifts/moodpack/assets/models/davy-jones.tgs"
    }
  },
  {
    "name": "Fallout",
    "customEmojiId": "5318802020927313216",
    "assets": {
      "svg": "gifts/moodpack/assets/models/fallout.svg",
      "tgs": "gifts/moodpack/assets/models/fallout.tgs"
    }
  },
  {
    "name": "Fashionista",
    "customEmojiId": "5319292136825331779",
    "assets": {
      "svg": "gifts/moodpack/assets/models/fashionista.svg",
      "tgs": "gifts/moodpack/assets/models/fashionista.tgs"
    }
  },
  {
    "name": "Fast Courier",
    "customEmojiId": "5319128270938085412",
    "assets": {
      "svg": "gifts/moodpack/assets/models/fast-courier.svg",
      "tgs": "gifts/moodpack/assets/models/fast-courier.tgs"
    }
  },
  {
    "name": "Fire Show",
    "customEmojiId": "5319105262798283487",
    "assets": {
      "svg": "gifts/moodpack/assets/models/fire-show.svg",
      "tgs": "gifts/moodpack/assets/models/fire-show.tgs"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5316880057422092583",
    "assets": {
      "svg": "gifts/moodpack/assets/models/gingerbread.svg",
      "tgs": "gifts/moodpack/assets/models/gingerbread.tgs"
    }
  },
  {
    "name": "Grand Slam",
    "customEmojiId": "5316628007266328577",
    "assets": {
      "svg": "gifts/moodpack/assets/models/grand-slam.svg",
      "tgs": "gifts/moodpack/assets/models/grand-slam.tgs"
    }
  },
  {
    "name": "Master Angler",
    "customEmojiId": "5319121910091518359",
    "assets": {
      "svg": "gifts/moodpack/assets/models/master-angler.svg",
      "tgs": "gifts/moodpack/assets/models/master-angler.tgs"
    }
  },
  {
    "name": "Movie Night",
    "customEmojiId": "5319009880164570032",
    "assets": {
      "svg": "gifts/moodpack/assets/models/movie-night.svg",
      "tgs": "gifts/moodpack/assets/models/movie-night.tgs"
    }
  },
  {
    "name": "Paladin",
    "customEmojiId": "5316543868856998612",
    "assets": {
      "svg": "gifts/moodpack/assets/models/paladin.svg",
      "tgs": "gifts/moodpack/assets/models/paladin.tgs"
    }
  },
  {
    "name": "Retro Wave",
    "customEmojiId": "5319173406749399387",
    "assets": {
      "svg": "gifts/moodpack/assets/models/retro-wave.svg",
      "tgs": "gifts/moodpack/assets/models/retro-wave.tgs"
    }
  },
  {
    "name": "Rock and Roll",
    "customEmojiId": "5318967849614612729",
    "assets": {
      "svg": "gifts/moodpack/assets/models/rock-and-roll.svg",
      "tgs": "gifts/moodpack/assets/models/rock-and-roll.tgs"
    }
  },
  {
    "name": "Rodeo King",
    "customEmojiId": "5316724996217804032",
    "assets": {
      "svg": "gifts/moodpack/assets/models/rodeo-king.svg",
      "tgs": "gifts/moodpack/assets/models/rodeo-king.tgs"
    }
  },
  {
    "name": "Striker",
    "customEmojiId": "5318953332625151975",
    "assets": {
      "svg": "gifts/moodpack/assets/models/striker.svg",
      "tgs": "gifts/moodpack/assets/models/striker.tgs"
    }
  },
  {
    "name": "Wanderer",
    "customEmojiId": "5318964898972081085",
    "assets": {
      "svg": "gifts/moodpack/assets/models/wanderer.svg",
      "tgs": "gifts/moodpack/assets/models/wanderer.tgs"
    }
  },
  {
    "name": "Angel Wings",
    "customEmojiId": "5319013397742791046",
    "assets": {
      "svg": "gifts/moodpack/assets/models/angel-wings.svg",
      "tgs": "gifts/moodpack/assets/models/angel-wings.tgs"
    }
  },
  {
    "name": "Bloom Pack",
    "customEmojiId": "5318889243123162265",
    "assets": {
      "svg": "gifts/moodpack/assets/models/bloom-pack.svg",
      "tgs": "gifts/moodpack/assets/models/bloom-pack.tgs"
    }
  },
  {
    "name": "Burger Bag",
    "customEmojiId": "5316561199050038962",
    "assets": {
      "svg": "gifts/moodpack/assets/models/burger-bag.svg",
      "tgs": "gifts/moodpack/assets/models/burger-bag.tgs"
    }
  },
  {
    "name": "Cat Pack",
    "customEmojiId": "5319149913278291744",
    "assets": {
      "svg": "gifts/moodpack/assets/models/cat-pack.svg",
      "tgs": "gifts/moodpack/assets/models/cat-pack.tgs"
    }
  },
  {
    "name": "Croc Sack",
    "customEmojiId": "5318962541035037439",
    "assets": {
      "svg": "gifts/moodpack/assets/models/croc-sack.svg",
      "tgs": "gifts/moodpack/assets/models/croc-sack.tgs"
    }
  },
  {
    "name": "Goth Gir",
    "customEmojiId": "5318763778538509298",
    "assets": {
      "svg": "gifts/moodpack/assets/models/goth-gir.svg",
      "tgs": "gifts/moodpack/assets/models/goth-gir.tgs"
    }
  },
  {
    "name": "Love Letters",
    "customEmojiId": "5319157906212429181",
    "assets": {
      "svg": "gifts/moodpack/assets/models/love-letters.svg",
      "tgs": "gifts/moodpack/assets/models/love-letters.tgs"
    }
  },
  {
    "name": "Space Cat",
    "customEmojiId": "5319152369999580481",
    "assets": {
      "svg": "gifts/moodpack/assets/models/space-cat.svg",
      "tgs": "gifts/moodpack/assets/models/space-cat.tgs"
    }
  },
  {
    "name": "Star Pupil",
    "customEmojiId": "5318768988333837692",
    "assets": {
      "svg": "gifts/moodpack/assets/models/star-pupil.svg",
      "tgs": "gifts/moodpack/assets/models/star-pupil.tgs"
    }
  },
  {
    "name": "Street Art",
    "customEmojiId": "5316867627786738602",
    "assets": {
      "svg": "gifts/moodpack/assets/models/street-art.svg",
      "tgs": "gifts/moodpack/assets/models/street-art.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/paw.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/plume.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/pear.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/maple.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bee.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/feather.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/astronaut.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/sea-dragon.png"
    }
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cowboy-hat.png"
    }
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bike-helmet.png"
    }
  },
  {
    "name": "Paschal Lamb",
    "customEmojiId": "5199584784036172118",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/paschal-lamb.png"
    }
  },
  {
    "name": "Easter Egg",
    "customEmojiId": "5199483835124843089",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/easter-egg.png"
    }
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/propeller-cap.png"
    }
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/porrige.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/egg.png"
    }
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/valkyrie.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/aztec-totem.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/hot-matcha.png"
    }
  },
  {
    "name": "Sushi Rolls",
    "customEmojiId": "5199851312526692154",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/sushi-rolls.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/key.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/star.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/horn.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/crown.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/chest.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/planet.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/candle.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/apple.png"
    }
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/obon-lantern.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/geisha-fan.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/yin-yang.png"
    }
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/wagasa.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/like.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/rooster.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/viking.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/morgenstern.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Party Hat",
    "customEmojiId": "5199420192299454140",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/party-hat.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Fireman Hat",
    "customEmojiId": "5199732475076578186",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/fireman-hat.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/rook.png"
    }
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/plume-shako.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Peace Dove",
    "customEmojiId": "5199441345013386136",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/peace-dove.png"
    }
  },
  {
    "name": "Bobby Helmet",
    "customEmojiId": "5199570082363115866",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bobby-helmet.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/dice.png"
    }
  },
  {
    "name": "Straw Hat",
    "customEmojiId": "5199475953859857051",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/straw-hat.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/owl.png"
    }
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/battle-axe.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/viper.png"
    }
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/fishing-hook.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/thief.png"
    }
  },
  {
    "name": "Robin Hood",
    "customEmojiId": "5199634154685237795",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/robin-hood.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Bascinet",
    "customEmojiId": "5199688421597022189",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bascinet.png"
    }
  },
  {
    "name": "Visor",
    "customEmojiId": "5199623855353661732",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/visor.png"
    }
  },
  {
    "name": "Royal Turban",
    "customEmojiId": "5199593258006647336",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/royal-turban.png"
    }
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/chef-hat.png"
    }
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/full-moon.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Cricket Helmet",
    "customEmojiId": "5199841202173676889",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cricket-helmet.png"
    }
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/police-hat.png"
    }
  },
  {
    "name": "Bobble Hat",
    "customEmojiId": "5199759262787603566",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bobble-hat.png"
    }
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bucket-hat.png"
    }
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/chick.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Bandana",
    "customEmojiId": "5199711902183232393",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bandana.png"
    }
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/ice-cream.png"
    }
  },
  {
    "name": "Elf Hat",
    "customEmojiId": "5199596066915260460",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/elf-hat.png"
    }
  },
  {
    "name": "Flag",
    "customEmojiId": "5199874462400414430",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/flag.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/coin.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/duck-face.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/banner.png"
    }
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/keffiyeh.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/leprechaun.png"
    }
  },
  {
    "name": "Arcane Mirror",
    "customEmojiId": "5199560770874018874",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/arcane-mirror.png"
    }
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cavalier-hat.png"
    }
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/wontons.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/rose.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cash.png"
    }
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/hazelnut.png"
    }
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/meat-leg.png"
    }
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/radar.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/fire.png"
    }
  },
  {
    "name": "Flat Cap",
    "customEmojiId": "5199424302583155767",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/flat-cap.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Sleepy Unicorn",
    "customEmojiId": "5199466646665722804",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/sleepy-unicorn.png"
    }
  },
  {
    "name": "Eye of Horus",
    "customEmojiId": "5199790332581021201",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/eye-of-horus.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/tie.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/handset.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/spades.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/car.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/koala.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/palette.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/knight.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/kudu-totem.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/moon-face.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/ramen.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cap.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/corn.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/cone.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/plum.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/crab.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333",
    "assets": {
      "png": "gifts/moodpack/assets/patterns/bamboo.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Marine Blue",
    "customEmojiId": "5375439277918288314",
    "hex": {
      "centerColor": "#4e689c",
      "edgeColor": "#3b4b7a",
      "patternColor": "#010821",
      "textColor": "#bbcbf2"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "moodpack", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
