import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Mad Chemist",
    "customEmojiId": "5247125841460090667",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/mad-chemist.svg",
      "tgs": "gifts/partysparkler/assets/models/mad-chemist.tgs"
    }
  },
  {
    "name": "Power Line",
    "customEmojiId": "5247193465720170044",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/power-line.svg",
      "tgs": "gifts/partysparkler/assets/models/power-line.tgs"
    }
  },
  {
    "name": "Star Time",
    "customEmojiId": "5246990764738637051",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/star-time.svg",
      "tgs": "gifts/partysparkler/assets/models/star-time.tgs"
    }
  },
  {
    "name": "Bitcoin",
    "customEmojiId": "5244500203397997938",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bitcoin.svg",
      "tgs": "gifts/partysparkler/assets/models/bitcoin.tgs"
    }
  },
  {
    "name": "Premium",
    "customEmojiId": "5244571401070865140",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/premium.svg",
      "tgs": "gifts/partysparkler/assets/models/premium.tgs"
    }
  },
  {
    "name": "La Bomba",
    "customEmojiId": "5246862328036614466",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/la-bomba.svg",
      "tgs": "gifts/partysparkler/assets/models/la-bomba.tgs"
    }
  },
  {
    "name": "Dryad Wand",
    "customEmojiId": "5247181341027493256",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/dryad-wand.svg",
      "tgs": "gifts/partysparkler/assets/models/dryad-wand.tgs"
    }
  },
  {
    "name": "Superpower",
    "customEmojiId": "5246959832384170900",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/superpower.svg",
      "tgs": "gifts/partysparkler/assets/models/superpower.tgs"
    }
  },
  {
    "name": "Tri-Nitro",
    "customEmojiId": "5246867460522529977",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/tri-nitro.svg",
      "tgs": "gifts/partysparkler/assets/models/tri-nitro.tgs"
    }
  },
  {
    "name": "Party Hard",
    "customEmojiId": "5244615677888720407",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/party-hard.svg",
      "tgs": "gifts/partysparkler/assets/models/party-hard.tgs"
    }
  },
  {
    "name": "Bumble",
    "customEmojiId": "5247226975055013294",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bumble.svg",
      "tgs": "gifts/partysparkler/assets/models/bumble.tgs"
    }
  },
  {
    "name": "Uranium",
    "customEmojiId": "5244485067933249800",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/uranium.svg",
      "tgs": "gifts/partysparkler/assets/models/uranium.tgs"
    }
  },
  {
    "name": "Windy Day",
    "customEmojiId": "5244797952005795018",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/windy-day.svg",
      "tgs": "gifts/partysparkler/assets/models/windy-day.tgs"
    }
  },
  {
    "name": "Privacy",
    "customEmojiId": "5247035123160865919",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/privacy.svg",
      "tgs": "gifts/partysparkler/assets/models/privacy.tgs"
    }
  },
  {
    "name": "Druidic",
    "customEmojiId": "5247101029434025682",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/druidic.svg",
      "tgs": "gifts/partysparkler/assets/models/druidic.tgs"
    }
  },
  {
    "name": "Fortune",
    "customEmojiId": "5247170101098077059",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/fortune.svg",
      "tgs": "gifts/partysparkler/assets/models/fortune.tgs"
    }
  },
  {
    "name": "Pika Pika",
    "customEmojiId": "5244993682255408712",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/pika-pika.svg",
      "tgs": "gifts/partysparkler/assets/models/pika-pika.tgs"
    }
  },
  {
    "name": "Spearmint",
    "customEmojiId": "5244762458396061808",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/spearmint.svg",
      "tgs": "gifts/partysparkler/assets/models/spearmint.tgs"
    }
  },
  {
    "name": "Peppermint",
    "customEmojiId": "5246831962617833551",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/peppermint.svg",
      "tgs": "gifts/partysparkler/assets/models/peppermint.tgs"
    }
  },
  {
    "name": "Blue Sparks",
    "customEmojiId": "5246803766157535504",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/blue-sparks.svg",
      "tgs": "gifts/partysparkler/assets/models/blue-sparks.tgs"
    }
  },
  {
    "name": "Sonic Blue",
    "customEmojiId": "5247023582583741708",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/sonic-blue.svg",
      "tgs": "gifts/partysparkler/assets/models/sonic-blue.tgs"
    }
  },
  {
    "name": "Yoshi Green",
    "customEmojiId": "5244758657350004647",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/yoshi-green.svg",
      "tgs": "gifts/partysparkler/assets/models/yoshi-green.tgs"
    }
  },
  {
    "name": "Carapace",
    "customEmojiId": "5247152852509417855",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/carapace.svg",
      "tgs": "gifts/partysparkler/assets/models/carapace.tgs"
    }
  },
  {
    "name": "Chrome",
    "customEmojiId": "5246696250241214042",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/chrome.svg",
      "tgs": "gifts/partysparkler/assets/models/chrome.tgs"
    }
  },
  {
    "name": "Holographic",
    "customEmojiId": "5244634425420968537",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/holographic.svg",
      "tgs": "gifts/partysparkler/assets/models/holographic.tgs"
    }
  },
  {
    "name": "Assault",
    "customEmojiId": "5244909801544117187",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/assault.svg",
      "tgs": "gifts/partysparkler/assets/models/assault.tgs"
    }
  },
  {
    "name": "Dynamite",
    "customEmojiId": "5247227992962260535",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/dynamite.svg",
      "tgs": "gifts/partysparkler/assets/models/dynamite.tgs"
    }
  },
  {
    "name": "Al Capone",
    "customEmojiId": "5247115799826555132",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/al-capone.svg",
      "tgs": "gifts/partysparkler/assets/models/al-capone.tgs"
    }
  },
  {
    "name": "Midas Party",
    "customEmojiId": "5244929214796294428",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/midas-party.svg",
      "tgs": "gifts/partysparkler/assets/models/midas-party.tgs"
    }
  },
  {
    "name": "Safety First",
    "customEmojiId": "5244942477655306802",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/safety-first.svg",
      "tgs": "gifts/partysparkler/assets/models/safety-first.tgs"
    }
  },
  {
    "name": "4th of July",
    "customEmojiId": "5244838217324195751",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/4th-of-july.svg",
      "tgs": "gifts/partysparkler/assets/models/4th-of-july.tgs"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5244881046738069285",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/crystal.svg",
      "tgs": "gifts/partysparkler/assets/models/crystal.tgs"
    }
  },
  {
    "name": "Running Hot",
    "customEmojiId": "5246974001481276438",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/running-hot.svg",
      "tgs": "gifts/partysparkler/assets/models/running-hot.tgs"
    }
  },
  {
    "name": "Punk Caster",
    "customEmojiId": "5244735125224193987",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/punk-caster.svg",
      "tgs": "gifts/partysparkler/assets/models/punk-caster.tgs"
    }
  },
  {
    "name": "Kenobi",
    "customEmojiId": "5247055279442387888",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/kenobi.svg",
      "tgs": "gifts/partysparkler/assets/models/kenobi.tgs"
    }
  },
  {
    "name": "Lord Vader",
    "customEmojiId": "5244632149088300119",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/lord-vader.svg",
      "tgs": "gifts/partysparkler/assets/models/lord-vader.tgs"
    }
  },
  {
    "name": "Franky",
    "customEmojiId": "5244952987440276581",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/franky.svg",
      "tgs": "gifts/partysparkler/assets/models/franky.tgs"
    }
  },
  {
    "name": "Blueberry",
    "customEmojiId": "5247112883543760375",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/blueberry.svg",
      "tgs": "gifts/partysparkler/assets/models/blueberry.tgs"
    }
  },
  {
    "name": "Neo Tokyo",
    "customEmojiId": "5246772485910715427",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/neo-tokyo.svg",
      "tgs": "gifts/partysparkler/assets/models/neo-tokyo.tgs"
    }
  },
  {
    "name": "Candy Goth",
    "customEmojiId": "5244950504949177954",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/candy-goth.svg",
      "tgs": "gifts/partysparkler/assets/models/candy-goth.tgs"
    }
  },
  {
    "name": "Chosen One",
    "customEmojiId": "5246698303235580613",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/chosen-one.svg",
      "tgs": "gifts/partysparkler/assets/models/chosen-one.tgs"
    }
  },
  {
    "name": "Golden Gun",
    "customEmojiId": "5244621480389535319",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/golden-gun.svg",
      "tgs": "gifts/partysparkler/assets/models/golden-gun.tgs"
    }
  },
  {
    "name": "Glenda",
    "customEmojiId": "5247229981532121808",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/glenda.svg",
      "tgs": "gifts/partysparkler/assets/models/glenda.tgs"
    }
  },
  {
    "name": "Cupid Caster",
    "customEmojiId": "5244587537262994899",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/cupid-caster.svg",
      "tgs": "gifts/partysparkler/assets/models/cupid-caster.tgs"
    }
  },
  {
    "name": "Timebomb",
    "customEmojiId": "5244807254904957989",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/timebomb.svg",
      "tgs": "gifts/partysparkler/assets/models/timebomb.tgs"
    }
  },
  {
    "name": "Lady Serenity",
    "customEmojiId": "5246777695706044439",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/lady-serenity.svg",
      "tgs": "gifts/partysparkler/assets/models/lady-serenity.tgs"
    }
  },
  {
    "name": "Sparkly Eve",
    "customEmojiId": "5244698738261258881",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/sparkly-eve.svg",
      "tgs": "gifts/partysparkler/assets/models/sparkly-eve.tgs"
    }
  },
  {
    "name": "Bronze",
    "customEmojiId": "5244767728320931651",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bronze.svg",
      "tgs": "gifts/partysparkler/assets/models/bronze.tgs"
    }
  },
  {
    "name": "Le Pepe",
    "customEmojiId": "5247124007509055554",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/le-pepe.svg",
      "tgs": "gifts/partysparkler/assets/models/le-pepe.tgs"
    }
  },
  {
    "name": "Sailor Moon",
    "customEmojiId": "5247038443170586073",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/sailor-moon.svg",
      "tgs": "gifts/partysparkler/assets/models/sailor-moon.tgs"
    }
  },
  {
    "name": "Birthday",
    "customEmojiId": "5247044091052579891",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/birthday.svg",
      "tgs": "gifts/partysparkler/assets/models/birthday.tgs"
    }
  },
  {
    "name": "Shimmer",
    "customEmojiId": "5247100221980171074",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/shimmer.svg",
      "tgs": "gifts/partysparkler/assets/models/shimmer.tgs"
    }
  },
  {
    "name": "Green Shine",
    "customEmojiId": "5247234035981247399",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/green-shine.svg",
      "tgs": "gifts/partysparkler/assets/models/green-shine.tgs"
    }
  },
  {
    "name": "Teal Polish",
    "customEmojiId": "5246771025621835517",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/teal-polish.svg",
      "tgs": "gifts/partysparkler/assets/models/teal-polish.tgs"
    }
  },
  {
    "name": "Iris Shine",
    "customEmojiId": "5247074705579466201",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/iris-shine.svg",
      "tgs": "gifts/partysparkler/assets/models/iris-shine.tgs"
    }
  },
  {
    "name": "Polychrome",
    "customEmojiId": "5244879599334092581",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/polychrome.svg",
      "tgs": "gifts/partysparkler/assets/models/polychrome.tgs"
    }
  },
  {
    "name": "Cobalt",
    "customEmojiId": "5246844293468937017",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/cobalt.svg",
      "tgs": "gifts/partysparkler/assets/models/cobalt.tgs"
    }
  },
  {
    "name": "Marksman",
    "customEmojiId": "5247043554181669110",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/marksman.svg",
      "tgs": "gifts/partysparkler/assets/models/marksman.tgs"
    }
  },
  {
    "name": "Copper",
    "customEmojiId": "5246777773015471238",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/copper.svg",
      "tgs": "gifts/partysparkler/assets/models/copper.tgs"
    }
  },
  {
    "name": "Ruby Shine",
    "customEmojiId": "5247206303377415262",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/ruby-shine.svg",
      "tgs": "gifts/partysparkler/assets/models/ruby-shine.tgs"
    }
  },
  {
    "name": "Patina Chrome",
    "customEmojiId": "5246827882398901227",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/patina-chrome.svg",
      "tgs": "gifts/partysparkler/assets/models/patina-chrome.tgs"
    }
  },
  {
    "name": "Airsoft",
    "customEmojiId": "5244628691639625767",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/airsoft.svg",
      "tgs": "gifts/partysparkler/assets/models/airsoft.tgs"
    }
  },
  {
    "name": "Hot Handle",
    "customEmojiId": "5247154982813195532",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/hot-handle.svg",
      "tgs": "gifts/partysparkler/assets/models/hot-handle.tgs"
    }
  },
  {
    "name": "Anemone",
    "customEmojiId": "5247069478604265867",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/anemone.svg",
      "tgs": "gifts/partysparkler/assets/models/anemone.tgs"
    }
  },
  {
    "name": "Blueshift",
    "customEmojiId": "5246841222567321667",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/blueshift.svg",
      "tgs": "gifts/partysparkler/assets/models/blueshift.tgs"
    }
  },
  {
    "name": "Red Hot",
    "customEmojiId": "5246718021430436338",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/red-hot.svg",
      "tgs": "gifts/partysparkler/assets/models/red-hot.tgs"
    }
  },
  {
    "name": "Inverted",
    "customEmojiId": "5244500972197144238",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/inverted.svg",
      "tgs": "gifts/partysparkler/assets/models/inverted.tgs"
    }
  },
  {
    "name": "Bright Flare",
    "customEmojiId": "5247086198911953591",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bright-flare.svg",
      "tgs": "gifts/partysparkler/assets/models/bright-flare.tgs"
    }
  },
  {
    "name": "Phosphor",
    "customEmojiId": "5244614488182779945",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/phosphor.svg",
      "tgs": "gifts/partysparkler/assets/models/phosphor.tgs"
    }
  },
  {
    "name": "Hellfire",
    "customEmojiId": "5244994403809914454",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/hellfire.svg",
      "tgs": "gifts/partysparkler/assets/models/hellfire.tgs"
    }
  },
  {
    "name": "Punk Pink",
    "customEmojiId": "5247105650818833790",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/punk-pink.svg",
      "tgs": "gifts/partysparkler/assets/models/punk-pink.tgs"
    }
  },
  {
    "name": "Lime Time",
    "customEmojiId": "5244839342605625216",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/lime-time.svg",
      "tgs": "gifts/partysparkler/assets/models/lime-time.tgs"
    }
  },
  {
    "name": "Burnt End",
    "customEmojiId": "5246823346913436357",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/burnt-end.svg",
      "tgs": "gifts/partysparkler/assets/models/burnt-end.tgs"
    }
  },
  {
    "name": "Sour Gummy",
    "customEmojiId": "5247044069577746037",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/sour-gummy.svg",
      "tgs": "gifts/partysparkler/assets/models/sour-gummy.tgs"
    }
  },
  {
    "name": "Mint Powder",
    "customEmojiId": "5244964369103612465",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/mint-powder.svg",
      "tgs": "gifts/partysparkler/assets/models/mint-powder.tgs"
    }
  },
  {
    "name": "Cool Hue",
    "customEmojiId": "5246928655216566581",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/cool-hue.svg",
      "tgs": "gifts/partysparkler/assets/models/cool-hue.tgs"
    }
  },
  {
    "name": "Tutti Frutti",
    "customEmojiId": "5247158208333637368",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/tutti-frutti.svg",
      "tgs": "gifts/partysparkler/assets/models/tutti-frutti.tgs"
    }
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5244570370278713902",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/rainbow.svg",
      "tgs": "gifts/partysparkler/assets/models/rainbow.tgs"
    }
  },
  {
    "name": "Hot Core",
    "customEmojiId": "5244533863056698027",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/hot-core.svg",
      "tgs": "gifts/partysparkler/assets/models/hot-core.tgs"
    }
  },
  {
    "name": "Azurite",
    "customEmojiId": "5244948009573181407",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/azurite.svg",
      "tgs": "gifts/partysparkler/assets/models/azurite.tgs"
    }
  },
  {
    "name": "Luminous",
    "customEmojiId": "5244619410215298434",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/luminous.svg",
      "tgs": "gifts/partysparkler/assets/models/luminous.tgs"
    }
  },
  {
    "name": "Violet Rave",
    "customEmojiId": "5246817733391178411",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/violet-rave.svg",
      "tgs": "gifts/partysparkler/assets/models/violet-rave.tgs"
    }
  },
  {
    "name": "Molten Core",
    "customEmojiId": "5247014876685034541",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/molten-core.svg",
      "tgs": "gifts/partysparkler/assets/models/molten-core.tgs"
    }
  },
  {
    "name": "Pink Pocky",
    "customEmojiId": "5246769857390732075",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/pink-pocky.svg",
      "tgs": "gifts/partysparkler/assets/models/pink-pocky.tgs"
    }
  },
  {
    "name": "Green Stripe",
    "customEmojiId": "5244961530130229018",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/green-stripe.svg",
      "tgs": "gifts/partysparkler/assets/models/green-stripe.tgs"
    }
  },
  {
    "name": "Classic",
    "customEmojiId": "5246748472748563715",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/classic.svg",
      "tgs": "gifts/partysparkler/assets/models/classic.tgs"
    }
  },
  {
    "name": "Iridescent",
    "customEmojiId": "5246701687669807821",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/iridescent.svg",
      "tgs": "gifts/partysparkler/assets/models/iridescent.tgs"
    }
  },
  {
    "name": "Ninja Turtle",
    "customEmojiId": "5246699256718319837",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/ninja-turtle.svg",
      "tgs": "gifts/partysparkler/assets/models/ninja-turtle.tgs"
    }
  },
  {
    "name": "Mai Tai",
    "customEmojiId": "5247007863003441869",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/mai-tai.svg",
      "tgs": "gifts/partysparkler/assets/models/mai-tai.tgs"
    }
  },
  {
    "name": "Mint Stick",
    "customEmojiId": "5246989175600733460",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/mint-stick.svg",
      "tgs": "gifts/partysparkler/assets/models/mint-stick.tgs"
    }
  },
  {
    "name": "Purple Rain",
    "customEmojiId": "5247189694738881449",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/purple-rain.svg",
      "tgs": "gifts/partysparkler/assets/models/purple-rain.tgs"
    }
  },
  {
    "name": "Bubblegum",
    "customEmojiId": "5247171621516500826",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bubblegum.svg",
      "tgs": "gifts/partysparkler/assets/models/bubblegum.tgs"
    }
  },
  {
    "name": "Amethyst",
    "customEmojiId": "5244642547204126091",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/amethyst.svg",
      "tgs": "gifts/partysparkler/assets/models/amethyst.tgs"
    }
  },
  {
    "name": "Cyan Sizzle",
    "customEmojiId": "5244884860669030822",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/cyan-sizzle.svg",
      "tgs": "gifts/partysparkler/assets/models/cyan-sizzle.tgs"
    }
  },
  {
    "name": "Seafoam",
    "customEmojiId": "5247166574929929404",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/seafoam.svg",
      "tgs": "gifts/partysparkler/assets/models/seafoam.tgs"
    }
  },
  {
    "name": "Indigo Dance",
    "customEmojiId": "5247151018558380795",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/indigo-dance.svg",
      "tgs": "gifts/partysparkler/assets/models/indigo-dance.tgs"
    }
  },
  {
    "name": "Neon Pink",
    "customEmojiId": "5244445829112034000",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/neon-pink.svg",
      "tgs": "gifts/partysparkler/assets/models/neon-pink.tgs"
    }
  },
  {
    "name": "Green Light",
    "customEmojiId": "5244473106449329520",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/green-light.svg",
      "tgs": "gifts/partysparkler/assets/models/green-light.tgs"
    }
  },
  {
    "name": "Little Fairy",
    "customEmojiId": "5246864260771896563",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/little-fairy.svg",
      "tgs": "gifts/partysparkler/assets/models/little-fairy.tgs"
    }
  },
  {
    "name": "Red Burst",
    "customEmojiId": "5246718944848403082",
    "assets": {
      "svg": "gifts/partysparkler/assets/models/red-burst.svg",
      "tgs": "gifts/partysparkler/assets/models/red-burst.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ornament.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bread.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/snowflake.png"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mistletoe.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/star.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/paw.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cookie.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/snow-angel.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/key.png"
    }
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/stocking.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/melon.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/rook.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/candle.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/fish.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/candy.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/plume.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/drug.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/skull.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/burger.png"
    }
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/christmas-tree.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/shell.png"
    }
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/rudolph.png"
    }
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bowtie.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/like.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/brain.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/winter-house.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gold.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sakura.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hot-drink.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/snowman.png"
    }
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mittens.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/conch.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cash.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/plum.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cap.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gear.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/shield.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/festive-wreath.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/fireworks.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/maple.png"
    }
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/new-year-s-eve.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/coin.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gem.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ice-skates.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/santa-hat.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mask.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/chest.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/jingle-bell.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/love-letter.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "partysparkler", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
