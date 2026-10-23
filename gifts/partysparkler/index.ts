import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "6003643167683903930" as const;

export const models = [
  {
    "name": "Bitcoin",
    "customEmojiId": "5244500203397997938",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bitcoin.svg",
      "tgs": "gifts/partysparkler/assets/models/bitcoin.tgs"
    }
  },
  {
    "name": "Mad Chemist",
    "customEmojiId": "5247125841460090667",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/mad-chemist.svg",
      "tgs": "gifts/partysparkler/assets/models/mad-chemist.tgs"
    }
  },
  {
    "name": "Power Line",
    "customEmojiId": "5247193465720170044",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/power-line.svg",
      "tgs": "gifts/partysparkler/assets/models/power-line.tgs"
    }
  },
  {
    "name": "Premium",
    "customEmojiId": "5244571401070865140",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/premium.svg",
      "tgs": "gifts/partysparkler/assets/models/premium.tgs"
    }
  },
  {
    "name": "Star Time",
    "customEmojiId": "5246990764738637051",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/star-time.svg",
      "tgs": "gifts/partysparkler/assets/models/star-time.tgs"
    }
  },
  {
    "name": "Bumble",
    "customEmojiId": "5247226975055013294",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bumble.svg",
      "tgs": "gifts/partysparkler/assets/models/bumble.tgs"
    }
  },
  {
    "name": "Dryad Wand",
    "customEmojiId": "5247181341027493256",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/dryad-wand.svg",
      "tgs": "gifts/partysparkler/assets/models/dryad-wand.tgs"
    }
  },
  {
    "name": "La Bomba",
    "customEmojiId": "5246862328036614466",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/la-bomba.svg",
      "tgs": "gifts/partysparkler/assets/models/la-bomba.tgs"
    }
  },
  {
    "name": "Party Hard",
    "customEmojiId": "5244615677888720407",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/party-hard.svg",
      "tgs": "gifts/partysparkler/assets/models/party-hard.tgs"
    }
  },
  {
    "name": "Superpower",
    "customEmojiId": "5246959832384170900",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/superpower.svg",
      "tgs": "gifts/partysparkler/assets/models/superpower.tgs"
    }
  },
  {
    "name": "Tri-Nitro",
    "customEmojiId": "5246867460522529977",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/tri-nitro.svg",
      "tgs": "gifts/partysparkler/assets/models/tri-nitro.tgs"
    }
  },
  {
    "name": "Uranium",
    "customEmojiId": "5244485067933249800",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/uranium.svg",
      "tgs": "gifts/partysparkler/assets/models/uranium.tgs"
    }
  },
  {
    "name": "Druidic",
    "customEmojiId": "5247101029434025682",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/druidic.svg",
      "tgs": "gifts/partysparkler/assets/models/druidic.tgs"
    }
  },
  {
    "name": "Fortune",
    "customEmojiId": "5247170101098077059",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/fortune.svg",
      "tgs": "gifts/partysparkler/assets/models/fortune.tgs"
    }
  },
  {
    "name": "Pika Pika",
    "customEmojiId": "5244993682255408712",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/pika-pika.svg",
      "tgs": "gifts/partysparkler/assets/models/pika-pika.tgs"
    }
  },
  {
    "name": "Privacy",
    "customEmojiId": "5247035123160865919",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/privacy.svg",
      "tgs": "gifts/partysparkler/assets/models/privacy.tgs"
    }
  },
  {
    "name": "Windy Day",
    "customEmojiId": "5244797952005795018",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/windy-day.svg",
      "tgs": "gifts/partysparkler/assets/models/windy-day.tgs"
    }
  },
  {
    "name": "Peppermint",
    "customEmojiId": "5246831962617833551",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/peppermint.svg",
      "tgs": "gifts/partysparkler/assets/models/peppermint.tgs"
    }
  },
  {
    "name": "Spearmint",
    "customEmojiId": "5244762458396061808",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/spearmint.svg",
      "tgs": "gifts/partysparkler/assets/models/spearmint.tgs"
    }
  },
  {
    "name": "4th of July",
    "customEmojiId": "5244838217324195751",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/4th-of-july.svg",
      "tgs": "gifts/partysparkler/assets/models/4th-of-july.tgs"
    }
  },
  {
    "name": "Al Capone",
    "customEmojiId": "5247115799826555132",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/al-capone.svg",
      "tgs": "gifts/partysparkler/assets/models/al-capone.tgs"
    }
  },
  {
    "name": "Assault",
    "customEmojiId": "5244909801544117187",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/assault.svg",
      "tgs": "gifts/partysparkler/assets/models/assault.tgs"
    }
  },
  {
    "name": "Birthday",
    "customEmojiId": "5247044091052579891",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/birthday.svg",
      "tgs": "gifts/partysparkler/assets/models/birthday.tgs"
    }
  },
  {
    "name": "Blue Sparks",
    "customEmojiId": "5246803766157535504",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/blue-sparks.svg",
      "tgs": "gifts/partysparkler/assets/models/blue-sparks.tgs"
    }
  },
  {
    "name": "Blueberry",
    "customEmojiId": "5247112883543760375",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/blueberry.svg",
      "tgs": "gifts/partysparkler/assets/models/blueberry.tgs"
    }
  },
  {
    "name": "Bronze",
    "customEmojiId": "5244767728320931651",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bronze.svg",
      "tgs": "gifts/partysparkler/assets/models/bronze.tgs"
    }
  },
  {
    "name": "Candy Goth",
    "customEmojiId": "5244950504949177954",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/candy-goth.svg",
      "tgs": "gifts/partysparkler/assets/models/candy-goth.tgs"
    }
  },
  {
    "name": "Carapace",
    "customEmojiId": "5247152852509417855",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/carapace.svg",
      "tgs": "gifts/partysparkler/assets/models/carapace.tgs"
    }
  },
  {
    "name": "Chosen One",
    "customEmojiId": "5246698303235580613",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/chosen-one.svg",
      "tgs": "gifts/partysparkler/assets/models/chosen-one.tgs"
    }
  },
  {
    "name": "Chrome",
    "customEmojiId": "5246696250241214042",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/chrome.svg",
      "tgs": "gifts/partysparkler/assets/models/chrome.tgs"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5244881046738069285",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/crystal.svg",
      "tgs": "gifts/partysparkler/assets/models/crystal.tgs"
    }
  },
  {
    "name": "Cupid Caster",
    "customEmojiId": "5244587537262994899",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/cupid-caster.svg",
      "tgs": "gifts/partysparkler/assets/models/cupid-caster.tgs"
    }
  },
  {
    "name": "Dynamite",
    "customEmojiId": "5247227992962260535",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/dynamite.svg",
      "tgs": "gifts/partysparkler/assets/models/dynamite.tgs"
    }
  },
  {
    "name": "Franky",
    "customEmojiId": "5244952987440276581",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/franky.svg",
      "tgs": "gifts/partysparkler/assets/models/franky.tgs"
    }
  },
  {
    "name": "Glenda",
    "customEmojiId": "5247229981532121808",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/glenda.svg",
      "tgs": "gifts/partysparkler/assets/models/glenda.tgs"
    }
  },
  {
    "name": "Golden Gun",
    "customEmojiId": "5244621480389535319",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/golden-gun.svg",
      "tgs": "gifts/partysparkler/assets/models/golden-gun.tgs"
    }
  },
  {
    "name": "Holographic",
    "customEmojiId": "5244634425420968537",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/holographic.svg",
      "tgs": "gifts/partysparkler/assets/models/holographic.tgs"
    }
  },
  {
    "name": "Kenobi",
    "customEmojiId": "5247055279442387888",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/kenobi.svg",
      "tgs": "gifts/partysparkler/assets/models/kenobi.tgs"
    }
  },
  {
    "name": "Lady Serenity",
    "customEmojiId": "5246777695706044439",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/lady-serenity.svg",
      "tgs": "gifts/partysparkler/assets/models/lady-serenity.tgs"
    }
  },
  {
    "name": "Le Pepe",
    "customEmojiId": "5247124007509055554",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/le-pepe.svg",
      "tgs": "gifts/partysparkler/assets/models/le-pepe.tgs"
    }
  },
  {
    "name": "Lord Vader",
    "customEmojiId": "5244632149088300119",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/lord-vader.svg",
      "tgs": "gifts/partysparkler/assets/models/lord-vader.tgs"
    }
  },
  {
    "name": "Midas Party",
    "customEmojiId": "5244929214796294428",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/midas-party.svg",
      "tgs": "gifts/partysparkler/assets/models/midas-party.tgs"
    }
  },
  {
    "name": "Neo Tokyo",
    "customEmojiId": "5246772485910715427",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/neo-tokyo.svg",
      "tgs": "gifts/partysparkler/assets/models/neo-tokyo.tgs"
    }
  },
  {
    "name": "Punk Caster",
    "customEmojiId": "5244735125224193987",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/punk-caster.svg",
      "tgs": "gifts/partysparkler/assets/models/punk-caster.tgs"
    }
  },
  {
    "name": "Running Hot",
    "customEmojiId": "5246974001481276438",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/running-hot.svg",
      "tgs": "gifts/partysparkler/assets/models/running-hot.tgs"
    }
  },
  {
    "name": "Safety First",
    "customEmojiId": "5244942477655306802",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/safety-first.svg",
      "tgs": "gifts/partysparkler/assets/models/safety-first.tgs"
    }
  },
  {
    "name": "Sailor Moon",
    "customEmojiId": "5247038443170586073",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/sailor-moon.svg",
      "tgs": "gifts/partysparkler/assets/models/sailor-moon.tgs"
    }
  },
  {
    "name": "Shimmer",
    "customEmojiId": "5247100221980171074",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/shimmer.svg",
      "tgs": "gifts/partysparkler/assets/models/shimmer.tgs"
    }
  },
  {
    "name": "Sonic Blue",
    "customEmojiId": "5247023582583741708",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/sonic-blue.svg",
      "tgs": "gifts/partysparkler/assets/models/sonic-blue.tgs"
    }
  },
  {
    "name": "Sparkly Eve",
    "customEmojiId": "5244698738261258881",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/sparkly-eve.svg",
      "tgs": "gifts/partysparkler/assets/models/sparkly-eve.tgs"
    }
  },
  {
    "name": "Timebomb",
    "customEmojiId": "5244807254904957989",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/timebomb.svg",
      "tgs": "gifts/partysparkler/assets/models/timebomb.tgs"
    }
  },
  {
    "name": "Yoshi Green",
    "customEmojiId": "5244758657350004647",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/yoshi-green.svg",
      "tgs": "gifts/partysparkler/assets/models/yoshi-green.tgs"
    }
  },
  {
    "name": "Airsoft",
    "customEmojiId": "5244628691639625767",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/airsoft.svg",
      "tgs": "gifts/partysparkler/assets/models/airsoft.tgs"
    }
  },
  {
    "name": "Cobalt",
    "customEmojiId": "5246844293468937017",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/cobalt.svg",
      "tgs": "gifts/partysparkler/assets/models/cobalt.tgs"
    }
  },
  {
    "name": "Copper",
    "customEmojiId": "5246777773015471238",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/copper.svg",
      "tgs": "gifts/partysparkler/assets/models/copper.tgs"
    }
  },
  {
    "name": "Green Shine",
    "customEmojiId": "5247234035981247399",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/green-shine.svg",
      "tgs": "gifts/partysparkler/assets/models/green-shine.tgs"
    }
  },
  {
    "name": "Iris Shine",
    "customEmojiId": "5247074705579466201",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/iris-shine.svg",
      "tgs": "gifts/partysparkler/assets/models/iris-shine.tgs"
    }
  },
  {
    "name": "Marksman",
    "customEmojiId": "5247043554181669110",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/marksman.svg",
      "tgs": "gifts/partysparkler/assets/models/marksman.tgs"
    }
  },
  {
    "name": "Patina Chrome",
    "customEmojiId": "5246827882398901227",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/patina-chrome.svg",
      "tgs": "gifts/partysparkler/assets/models/patina-chrome.tgs"
    }
  },
  {
    "name": "Polychrome",
    "customEmojiId": "5244879599334092581",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/polychrome.svg",
      "tgs": "gifts/partysparkler/assets/models/polychrome.tgs"
    }
  },
  {
    "name": "Ruby Shine",
    "customEmojiId": "5247206303377415262",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/ruby-shine.svg",
      "tgs": "gifts/partysparkler/assets/models/ruby-shine.tgs"
    }
  },
  {
    "name": "Teal Polish",
    "customEmojiId": "5246771025621835517",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/teal-polish.svg",
      "tgs": "gifts/partysparkler/assets/models/teal-polish.tgs"
    }
  },
  {
    "name": "Anemone",
    "customEmojiId": "5247069478604265867",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/anemone.svg",
      "tgs": "gifts/partysparkler/assets/models/anemone.tgs"
    }
  },
  {
    "name": "Azurite",
    "customEmojiId": "5244948009573181407",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/azurite.svg",
      "tgs": "gifts/partysparkler/assets/models/azurite.tgs"
    }
  },
  {
    "name": "Blueshift",
    "customEmojiId": "5246841222567321667",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/blueshift.svg",
      "tgs": "gifts/partysparkler/assets/models/blueshift.tgs"
    }
  },
  {
    "name": "Bright Flare",
    "customEmojiId": "5247086198911953591",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bright-flare.svg",
      "tgs": "gifts/partysparkler/assets/models/bright-flare.tgs"
    }
  },
  {
    "name": "Burnt End",
    "customEmojiId": "5246823346913436357",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/burnt-end.svg",
      "tgs": "gifts/partysparkler/assets/models/burnt-end.tgs"
    }
  },
  {
    "name": "Classic",
    "customEmojiId": "5246748472748563715",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/classic.svg",
      "tgs": "gifts/partysparkler/assets/models/classic.tgs"
    }
  },
  {
    "name": "Cool Hue",
    "customEmojiId": "5246928655216566581",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/cool-hue.svg",
      "tgs": "gifts/partysparkler/assets/models/cool-hue.tgs"
    }
  },
  {
    "name": "Green Stripe",
    "customEmojiId": "5244961530130229018",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/green-stripe.svg",
      "tgs": "gifts/partysparkler/assets/models/green-stripe.tgs"
    }
  },
  {
    "name": "Hellfire",
    "customEmojiId": "5244994403809914454",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/hellfire.svg",
      "tgs": "gifts/partysparkler/assets/models/hellfire.tgs"
    }
  },
  {
    "name": "Hot Core",
    "customEmojiId": "5244533863056698027",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/hot-core.svg",
      "tgs": "gifts/partysparkler/assets/models/hot-core.tgs"
    }
  },
  {
    "name": "Hot Handle",
    "customEmojiId": "5247154982813195532",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/hot-handle.svg",
      "tgs": "gifts/partysparkler/assets/models/hot-handle.tgs"
    }
  },
  {
    "name": "Inverted",
    "customEmojiId": "5244500972197144238",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/inverted.svg",
      "tgs": "gifts/partysparkler/assets/models/inverted.tgs"
    }
  },
  {
    "name": "Iridescent",
    "customEmojiId": "5246701687669807821",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/iridescent.svg",
      "tgs": "gifts/partysparkler/assets/models/iridescent.tgs"
    }
  },
  {
    "name": "Lime Time",
    "customEmojiId": "5244839342605625216",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/lime-time.svg",
      "tgs": "gifts/partysparkler/assets/models/lime-time.tgs"
    }
  },
  {
    "name": "Luminous",
    "customEmojiId": "5244619410215298434",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/luminous.svg",
      "tgs": "gifts/partysparkler/assets/models/luminous.tgs"
    }
  },
  {
    "name": "Mai Tai",
    "customEmojiId": "5247007863003441869",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/mai-tai.svg",
      "tgs": "gifts/partysparkler/assets/models/mai-tai.tgs"
    }
  },
  {
    "name": "Mint Powder",
    "customEmojiId": "5244964369103612465",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/mint-powder.svg",
      "tgs": "gifts/partysparkler/assets/models/mint-powder.tgs"
    }
  },
  {
    "name": "Mint Stick",
    "customEmojiId": "5246989175600733460",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/mint-stick.svg",
      "tgs": "gifts/partysparkler/assets/models/mint-stick.tgs"
    }
  },
  {
    "name": "Molten Core",
    "customEmojiId": "5247014876685034541",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/molten-core.svg",
      "tgs": "gifts/partysparkler/assets/models/molten-core.tgs"
    }
  },
  {
    "name": "Ninja Turtle",
    "customEmojiId": "5246699256718319837",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/ninja-turtle.svg",
      "tgs": "gifts/partysparkler/assets/models/ninja-turtle.tgs"
    }
  },
  {
    "name": "Phosphor",
    "customEmojiId": "5244614488182779945",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/phosphor.svg",
      "tgs": "gifts/partysparkler/assets/models/phosphor.tgs"
    }
  },
  {
    "name": "Pink Pocky",
    "customEmojiId": "5246769857390732075",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/pink-pocky.svg",
      "tgs": "gifts/partysparkler/assets/models/pink-pocky.tgs"
    }
  },
  {
    "name": "Punk Pink",
    "customEmojiId": "5247105650818833790",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/punk-pink.svg",
      "tgs": "gifts/partysparkler/assets/models/punk-pink.tgs"
    }
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5244570370278713902",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/rainbow.svg",
      "tgs": "gifts/partysparkler/assets/models/rainbow.tgs"
    }
  },
  {
    "name": "Red Hot",
    "customEmojiId": "5246718021430436338",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/red-hot.svg",
      "tgs": "gifts/partysparkler/assets/models/red-hot.tgs"
    }
  },
  {
    "name": "Sour Gummy",
    "customEmojiId": "5247044069577746037",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/sour-gummy.svg",
      "tgs": "gifts/partysparkler/assets/models/sour-gummy.tgs"
    }
  },
  {
    "name": "Tutti Frutti",
    "customEmojiId": "5247158208333637368",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/tutti-frutti.svg",
      "tgs": "gifts/partysparkler/assets/models/tutti-frutti.tgs"
    }
  },
  {
    "name": "Violet Rave",
    "customEmojiId": "5246817733391178411",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/violet-rave.svg",
      "tgs": "gifts/partysparkler/assets/models/violet-rave.tgs"
    }
  },
  {
    "name": "Amethyst",
    "customEmojiId": "5244642547204126091",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/amethyst.svg",
      "tgs": "gifts/partysparkler/assets/models/amethyst.tgs"
    }
  },
  {
    "name": "Bubblegum",
    "customEmojiId": "5247171621516500826",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/bubblegum.svg",
      "tgs": "gifts/partysparkler/assets/models/bubblegum.tgs"
    }
  },
  {
    "name": "Cyan Sizzle",
    "customEmojiId": "5244884860669030822",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/cyan-sizzle.svg",
      "tgs": "gifts/partysparkler/assets/models/cyan-sizzle.tgs"
    }
  },
  {
    "name": "Green Light",
    "customEmojiId": "5244473106449329520",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/green-light.svg",
      "tgs": "gifts/partysparkler/assets/models/green-light.tgs"
    }
  },
  {
    "name": "Indigo Dance",
    "customEmojiId": "5247151018558380795",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/indigo-dance.svg",
      "tgs": "gifts/partysparkler/assets/models/indigo-dance.tgs"
    }
  },
  {
    "name": "Little Fairy",
    "customEmojiId": "5246864260771896563",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/little-fairy.svg",
      "tgs": "gifts/partysparkler/assets/models/little-fairy.tgs"
    }
  },
  {
    "name": "Neon Pink",
    "customEmojiId": "5244445829112034000",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/neon-pink.svg",
      "tgs": "gifts/partysparkler/assets/models/neon-pink.tgs"
    }
  },
  {
    "name": "Purple Rain",
    "customEmojiId": "5247189694738881449",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/purple-rain.svg",
      "tgs": "gifts/partysparkler/assets/models/purple-rain.tgs"
    }
  },
  {
    "name": "Red Burst",
    "customEmojiId": "5246718944848403082",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/red-burst.svg",
      "tgs": "gifts/partysparkler/assets/models/red-burst.tgs"
    }
  },
  {
    "name": "Seafoam",
    "customEmojiId": "5247166574929929404",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/partysparkler/assets/models/seafoam.svg",
      "tgs": "gifts/partysparkler/assets/models/seafoam.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bread.png"
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
      "png": "gifts/partysparkler/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/garden-pot.png"
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
      "png": "gifts/partysparkler/assets/patterns/guitar.png"
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
      "png": "gifts/partysparkler/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/maple.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/musical-note.png"
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
      "png": "gifts/partysparkler/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/skull.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/brain.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bubble-tea.png"
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
      "png": "gifts/partysparkler/assets/patterns/cap.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/fish.png"
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
      "png": "gifts/partysparkler/assets/patterns/gamepad.png"
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
      "png": "gifts/partysparkler/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gold.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/like.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/paw.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/plum.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/burger.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cash.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/coin.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/conch.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/drug.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gear.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gem.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/key.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mask.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/melon.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/plume.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/rook.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/shell.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/shield.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/candy.png"
    }
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cookie.png"
    }
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/fireworks.png"
    }
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/hot-drink.png"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mistletoe.png"
    }
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ornament.png"
    }
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/snow-angel.png"
    }
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/snowflake.png"
    }
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/stocking.png"
    }
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/winter-house.png"
    }
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/christmas-tree.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/festive-wreath.png"
    }
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/jingle-bell.png"
    }
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null,
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/new-year-s-eve.png"
    }
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/santa-hat.png"
    }
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/bowtie.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/candle.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/chest.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/ice-skates.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/mittens.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/rudolph.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/snowman.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/star.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/partysparkler/assets/patterns/white-deer.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/b1907e-7c6356-circle.svg",
      "squareSvg": "assets/backdrops/b1907e-7c6356-square.svg"
    }
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/d09932-b77431-circle.svg",
      "squareSvg": "assets/backdrops/d09932-b77431-square.svg"
    }
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
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/5c6985-354057-circle.svg",
      "squareSvg": "assets/backdrops/5c6985-354057-square.svg"
    }
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/7ecb82-459e5a-circle.svg",
      "squareSvg": "assets/backdrops/7ecb82-459e5a-square.svg"
    }
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
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/6c9edd-5c6ec9-circle.svg",
      "squareSvg": "assets/backdrops/6c9edd-5c6ec9-square.svg"
    }
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
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/5abea6-3d95ba-circle.svg",
      "squareSvg": "assets/backdrops/5abea6-3d95ba-square.svg"
    }
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/ae6cae-844784-circle.svg",
      "squareSvg": "assets/backdrops/ae6cae-844784-square.svg"
    }
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/bf9b47-8d7739-circle.svg",
      "squareSvg": "assets/backdrops/bf9b47-8d7739-square.svg"
    }
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/8ab163-559345-circle.svg",
      "squareSvg": "assets/backdrops/8ab163-559345-square.svg"
    }
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/dd8e6f-b75a60-circle.svg",
      "squareSvg": "assets/backdrops/dd8e6f-b75a60-square.svg"
    }
  },
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/60b195-46abb4-circle.svg",
      "squareSvg": "assets/backdrops/60b195-46abb4-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/5db1cb-448bab-circle.svg",
      "squareSvg": "assets/backdrops/5db1cb-448bab-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/363738-0e0f0f-circle.svg",
      "squareSvg": "assets/backdrops/363738-0e0f0f-square.svg"
    }
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
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/a35e66-6d414a-circle.svg",
      "squareSvg": "assets/backdrops/a35e66-6d414a-square.svg"
    }
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
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/be6f54-994838-circle.svg",
      "squareSvg": "assets/backdrops/be6f54-994838-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/d08656-9d6531-circle.svg",
      "squareSvg": "assets/backdrops/d08656-9d6531-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/ca70c6-9662d4-circle.svg",
      "squareSvg": "assets/backdrops/ca70c6-9662d4-square.svg"
    }
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
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/b186bb-875a91-circle.svg",
      "squareSvg": "assets/backdrops/b186bb-875a91-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/e28ab6-a4588b-circle.svg",
      "squareSvg": "assets/backdrops/e28ab6-a4588b-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/9d74c1-794da0-circle.svg",
      "squareSvg": "assets/backdrops/9d74c1-794da0-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/8fae78-4b825b-circle.svg",
      "squareSvg": "assets/backdrops/8fae78-4b825b-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/bab6b1-a19d97-circle.svg",
      "squareSvg": "assets/backdrops/bab6b1-a19d97-square.svg"
    }
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
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/aeb85a-559345-circle.svg",
      "squareSvg": "assets/backdrops/aeb85a-559345-square.svg"
    }
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
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/4d5254-313638-circle.svg",
      "squareSvg": "assets/backdrops/4d5254-313638-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/6ba97c-3e7970-circle.svg",
      "squareSvg": "assets/backdrops/6ba97c-3e7970-square.svg"
    }
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
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/b2aea7-88847e-circle.svg",
      "squareSvg": "assets/backdrops/b2aea7-88847e-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/80a4b8-607c91-circle.svg",
      "squareSvg": "assets/backdrops/80a4b8-607c91-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/58b4c8-538bc2-circle.svg",
      "squareSvg": "assets/backdrops/58b4c8-538bc2-square.svg"
    }
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/97a2ac-63727c-circle.svg",
      "squareSvg": "assets/backdrops/97a2ac-63727c-square.svg"
    }
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
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/5ec0b8-3d928e-circle.svg",
      "squareSvg": "assets/backdrops/5ec0b8-3d928e-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/dab345-b1802a-circle.svg",
      "squareSvg": "assets/backdrops/dab345-b1802a-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/8c8c85-6c6c66-circle.svg",
      "squareSvg": "assets/backdrops/8c8c85-6c6c66-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/db9867-c76f4f-circle.svg",
      "squareSvg": "assets/backdrops/db9867-c76f4f-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/a46e58-74443b-circle.svg",
      "squareSvg": "assets/backdrops/a46e58-74443b-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/6088cf-5162b8-circle.svg",
      "squareSvg": "assets/backdrops/6088cf-5162b8-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/da896b-c4654f-circle.svg",
      "squareSvg": "assets/backdrops/da896b-c4654f-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/858ff3-865fd3-circle.svg",
      "squareSvg": "assets/backdrops/858ff3-865fd3-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/b17da5-8c577a-circle.svg",
      "squareSvg": "assets/backdrops/b17da5-8c577a-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/b39f82-7e735b-circle.svg",
      "squareSvg": "assets/backdrops/b39f82-7e735b-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/a980f3-5b62d8-circle.svg",
      "squareSvg": "assets/backdrops/a980f3-5b62d8-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/78c585-42a171-circle.svg",
      "squareSvg": "assets/backdrops/78c585-42a171-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/5c9bc4-37739a-circle.svg",
      "squareSvg": "assets/backdrops/5c9bc4-37739a-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/537991-416479-circle.svg",
      "squareSvg": "assets/backdrops/537991-416479-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/55c49c-3b9977-circle.svg",
      "squareSvg": "assets/backdrops/55c49c-3b9977-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/adb070-6b7d54-circle.svg",
      "squareSvg": "assets/backdrops/adb070-6b7d54-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/b789e4-8a5abc-circle.svg",
      "squareSvg": "assets/backdrops/b789e4-8a5abc-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/c2af64-887e45-circle.svg",
      "squareSvg": "assets/backdrops/c2af64-887e45-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/95b457-3d9755-circle.svg",
      "squareSvg": "assets/backdrops/95b457-3d9755-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/7eb1b4-588390-circle.svg",
      "squareSvg": "assets/backdrops/7eb1b4-588390-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/d08b6d-b05770-circle.svg",
      "squareSvg": "assets/backdrops/d08b6d-b05770-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/7596f9-6862e4-circle.svg",
      "squareSvg": "assets/backdrops/7596f9-6862e4-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/d19a3a-c06f47-circle.svg",
      "squareSvg": "assets/backdrops/d19a3a-c06f47-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/6fc793-3b9c84-circle.svg",
      "squareSvg": "assets/backdrops/6fc793-3b9c84-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/e7a75a-c5675f-circle.svg",
      "squareSvg": "assets/backdrops/e7a75a-c5675f-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/97b07c-5c814c-circle.svg",
      "squareSvg": "assets/backdrops/97b07c-5c814c-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/ccab41-987b32-circle.svg",
      "squareSvg": "assets/backdrops/ccab41-987b32-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/e07b85-b65980-circle.svg",
      "squareSvg": "assets/backdrops/e07b85-b65980-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/a3a8b5-7c808a-circle.svg",
      "squareSvg": "assets/backdrops/a3a8b5-7c808a-square.svg"
    }
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/b77a77-814c52-circle.svg",
      "squareSvg": "assets/backdrops/b77a77-814c52-square.svg"
    }
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
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/58a3c8-5379c2-circle.svg",
      "squareSvg": "assets/backdrops/58a3c8-5379c2-square.svg"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "partysparkler", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
