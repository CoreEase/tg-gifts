import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5782988952268964995" as const;

export const models = [
  {
    "name": "Celestial Map",
    "customEmojiId": "5206555107935688206",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "legendary",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/celestial-map.svg",
      "tgs": "gifts/deskcalendar/assets/models/celestial-map.tgs"
    }
  },
  {
    "name": "Day of Mars",
    "customEmojiId": "5206436592608120719",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "legendary",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/day-of-mars.svg",
      "tgs": "gifts/deskcalendar/assets/models/day-of-mars.tgs"
    }
  },
  {
    "name": "Loki’s Day",
    "customEmojiId": "5206455782521997867",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "legendary",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/loki-s-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/loki-s-day.tgs"
    }
  },
  {
    "name": "May the Fourth",
    "customEmojiId": "5208666496678531072",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "legendary",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/may-the-fourth.svg",
      "tgs": "gifts/deskcalendar/assets/models/may-the-fourth.tgs"
    }
  },
  {
    "name": "Óðinsdagr",
    "customEmojiId": "5208568717453070401",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "legendary",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/o-insdagr.svg",
      "tgs": "gifts/deskcalendar/assets/models/o-insdagr.tgs"
    }
  },
  {
    "name": "Aphrodite",
    "customEmojiId": "5206244444361234933",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/aphrodite.svg",
      "tgs": "gifts/deskcalendar/assets/models/aphrodite.tgs"
    }
  },
  {
    "name": "Frjádagr",
    "customEmojiId": "5208959628196487300",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/frjadagr.svg",
      "tgs": "gifts/deskcalendar/assets/models/frjadagr.tgs"
    }
  },
  {
    "name": "Glam Day",
    "customEmojiId": "5208974205315485953",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/glam-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/glam-day.tgs"
    }
  },
  {
    "name": "Kronos",
    "customEmojiId": "5208760569347217172",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/kronos.svg",
      "tgs": "gifts/deskcalendar/assets/models/kronos.tgs"
    }
  },
  {
    "name": "Lucky Day",
    "customEmojiId": "5208715016924074189",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/lucky-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/lucky-day.tgs"
    }
  },
  {
    "name": "Mánadagr",
    "customEmojiId": "5208601367794454437",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/manadagr.svg",
      "tgs": "gifts/deskcalendar/assets/models/manadagr.tgs"
    }
  },
  {
    "name": "Payday",
    "customEmojiId": "5208556262047910225",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/payday.svg",
      "tgs": "gifts/deskcalendar/assets/models/payday.tgs"
    }
  },
  {
    "name": "Royal Flush",
    "customEmojiId": "5206171223758769570",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/royal-flush.svg",
      "tgs": "gifts/deskcalendar/assets/models/royal-flush.tgs"
    }
  },
  {
    "name": "Selena",
    "customEmojiId": "5208806332223757383",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/selena.svg",
      "tgs": "gifts/deskcalendar/assets/models/selena.tgs"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5208477281894307967",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/shinto-shrine.svg",
      "tgs": "gifts/deskcalendar/assets/models/shinto-shrine.tgs"
    }
  },
  {
    "name": "Sol Invictus",
    "customEmojiId": "5206487603934696683",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/sol-invictus.svg",
      "tgs": "gifts/deskcalendar/assets/models/sol-invictus.tgs"
    }
  },
  {
    "name": "TON Core",
    "customEmojiId": "5208426687179560514",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/ton-core.svg",
      "tgs": "gifts/deskcalendar/assets/models/ton-core.tgs"
    }
  },
  {
    "name": "Treasure Map",
    "customEmojiId": "5206469401863294279",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/treasure-map.svg",
      "tgs": "gifts/deskcalendar/assets/models/treasure-map.tgs"
    }
  },
  {
    "name": "Týsdagr",
    "customEmojiId": "5206531206442684698",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/tysdagr.svg",
      "tgs": "gifts/deskcalendar/assets/models/tysdagr.tgs"
    }
  },
  {
    "name": "Þórsdagr",
    "customEmojiId": "5206285199305906367",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "epic",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/orsdagr.svg",
      "tgs": "gifts/deskcalendar/assets/models/orsdagr.tgs"
    }
  },
  {
    "name": "Artwork",
    "customEmojiId": "5208605877510116935",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/artwork.svg",
      "tgs": "gifts/deskcalendar/assets/models/artwork.tgs"
    }
  },
  {
    "name": "Cat Seasons",
    "customEmojiId": "5208908243207753194",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/cat-seasons.svg",
      "tgs": "gifts/deskcalendar/assets/models/cat-seasons.tgs"
    }
  },
  {
    "name": "Count Dracula",
    "customEmojiId": "5208594805084427178",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/count-dracula.svg",
      "tgs": "gifts/deskcalendar/assets/models/count-dracula.tgs"
    }
  },
  {
    "name": "First Date",
    "customEmojiId": "5208942242168870111",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/first-date.svg",
      "tgs": "gifts/deskcalendar/assets/models/first-date.tgs"
    }
  },
  {
    "name": "Frog Day",
    "customEmojiId": "5208756764006193080",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/frog-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/frog-day.tgs"
    }
  },
  {
    "name": "Ghost Party",
    "customEmojiId": "5208584750565987519",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/ghost-party.svg",
      "tgs": "gifts/deskcalendar/assets/models/ghost-party.tgs"
    }
  },
  {
    "name": "Grimoire",
    "customEmojiId": "5206299166539549817",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/grimoire.svg",
      "tgs": "gifts/deskcalendar/assets/models/grimoire.tgs"
    }
  },
  {
    "name": "Hermes",
    "customEmojiId": "5208828283801603072",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/hermes.svg",
      "tgs": "gifts/deskcalendar/assets/models/hermes.tgs"
    }
  },
  {
    "name": "Outlaw",
    "customEmojiId": "5206384378690704963",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/outlaw.svg",
      "tgs": "gifts/deskcalendar/assets/models/outlaw.tgs"
    }
  },
  {
    "name": "Samhain",
    "customEmojiId": "5206603078425414788",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/samhain.svg",
      "tgs": "gifts/deskcalendar/assets/models/samhain.tgs"
    }
  },
  {
    "name": "Space Era",
    "customEmojiId": "5206409590148732058",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/space-era.svg",
      "tgs": "gifts/deskcalendar/assets/models/space-era.tgs"
    }
  },
  {
    "name": "Weekly Set",
    "customEmojiId": "5208594023400378490",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/weekly-set.svg",
      "tgs": "gifts/deskcalendar/assets/models/weekly-set.tgs"
    }
  },
  {
    "name": "Zeus",
    "customEmojiId": "5206375720036635530",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "rare",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/zeus.svg",
      "tgs": "gifts/deskcalendar/assets/models/zeus.tgs"
    }
  },
  {
    "name": "Anniversary",
    "customEmojiId": "5208964902416323146",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/anniversary.svg",
      "tgs": "gifts/deskcalendar/assets/models/anniversary.tgs"
    }
  },
  {
    "name": "Anno Domini",
    "customEmojiId": "5208669674954333284",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/anno-domini.svg",
      "tgs": "gifts/deskcalendar/assets/models/anno-domini.tgs"
    }
  },
  {
    "name": "April Fools",
    "customEmojiId": "5208823653826861783",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/april-fools.svg",
      "tgs": "gifts/deskcalendar/assets/models/april-fools.tgs"
    }
  },
  {
    "name": "Crunch Time",
    "customEmojiId": "5208915823825033400",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/crunch-time.svg",
      "tgs": "gifts/deskcalendar/assets/models/crunch-time.tgs"
    }
  },
  {
    "name": "Cyberpunk",
    "customEmojiId": "5208481851739509872",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/cyberpunk.svg",
      "tgs": "gifts/deskcalendar/assets/models/cyberpunk.tgs"
    }
  },
  {
    "name": "Daily Bread",
    "customEmojiId": "5206376948397281319",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/daily-bread.svg",
      "tgs": "gifts/deskcalendar/assets/models/daily-bread.tgs"
    }
  },
  {
    "name": "God of Wine",
    "customEmojiId": "5206551470098386675",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/god-of-wine.svg",
      "tgs": "gifts/deskcalendar/assets/models/god-of-wine.tgs"
    }
  },
  {
    "name": "Helios",
    "customEmojiId": "5206320237649108238",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/helios.svg",
      "tgs": "gifts/deskcalendar/assets/models/helios.tgs"
    }
  },
  {
    "name": "Holy Month",
    "customEmojiId": "5208945983085384385",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/holy-month.svg",
      "tgs": "gifts/deskcalendar/assets/models/holy-month.tgs"
    }
  },
  {
    "name": "Launch Date",
    "customEmojiId": "5206662988924228977",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/launch-date.svg",
      "tgs": "gifts/deskcalendar/assets/models/launch-date.tgs"
    }
  },
  {
    "name": "Mesozoic",
    "customEmojiId": "5208535349852146242",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/mesozoic.svg",
      "tgs": "gifts/deskcalendar/assets/models/mesozoic.tgs"
    }
  },
  {
    "name": "New Year",
    "customEmojiId": "5206673674802862568",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/new-year.svg",
      "tgs": "gifts/deskcalendar/assets/models/new-year.tgs"
    }
  },
  {
    "name": "Orchestra",
    "customEmojiId": "5206593028201942059",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/orchestra.svg",
      "tgs": "gifts/deskcalendar/assets/models/orchestra.tgs"
    }
  },
  {
    "name": "Sekhmet",
    "customEmojiId": "5208600233923086856",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/sekhmet.svg",
      "tgs": "gifts/deskcalendar/assets/models/sekhmet.tgs"
    }
  },
  {
    "name": "Shopping List",
    "customEmojiId": "5208883581505540992",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/shopping-list.svg",
      "tgs": "gifts/deskcalendar/assets/models/shopping-list.tgs"
    }
  },
  {
    "name": "Shuffle",
    "customEmojiId": "5206498800914437095",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/shuffle.svg",
      "tgs": "gifts/deskcalendar/assets/models/shuffle.tgs"
    }
  },
  {
    "name": "Steampunk",
    "customEmojiId": "5206355842927989159",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/steampunk.svg",
      "tgs": "gifts/deskcalendar/assets/models/steampunk.tgs"
    }
  },
  {
    "name": "Time Spin",
    "customEmojiId": "5206390267090869264",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/time-spin.svg",
      "tgs": "gifts/deskcalendar/assets/models/time-spin.tgs"
    }
  },
  {
    "name": "Toy Calendar",
    "customEmojiId": "5206533100523263006",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/toy-calendar.svg",
      "tgs": "gifts/deskcalendar/assets/models/toy-calendar.tgs"
    }
  },
  {
    "name": "Vacation",
    "customEmojiId": "5206449696553343221",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/vacation.svg",
      "tgs": "gifts/deskcalendar/assets/models/vacation.tgs"
    }
  },
  {
    "name": "Vintage",
    "customEmojiId": "5206330403836695520",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/vintage.svg",
      "tgs": "gifts/deskcalendar/assets/models/vintage.tgs"
    }
  },
  {
    "name": "Wedding",
    "customEmojiId": "5208624710941708935",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/wedding.svg",
      "tgs": "gifts/deskcalendar/assets/models/wedding.tgs"
    }
  },
  {
    "name": "Women’s Day",
    "customEmojiId": "5208727382134920654",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/women-s-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/women-s-day.tgs"
    }
  },
  {
    "name": "Yoga Time",
    "customEmojiId": "5208638051110131594",
    "rarityPermille": 0,
    "originalRarityPermille": 0,
    "rarity": 0,
    "originalRarity": 0,
    "crafted": true,
    "rarityTier": "uncommon",
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/yoga-time.svg",
      "tgs": "gifts/deskcalendar/assets/models/yoga-time.tgs"
    }
  },
  {
    "name": "Balloon Face",
    "customEmojiId": "5249002475880475571",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/balloon-face.svg",
      "tgs": "gifts/deskcalendar/assets/models/balloon-face.tgs"
    }
  },
  {
    "name": "Burning Time",
    "customEmojiId": "5249069580449507861",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/burning-time.svg",
      "tgs": "gifts/deskcalendar/assets/models/burning-time.tgs"
    }
  },
  {
    "name": "Deadline",
    "customEmojiId": "5249303557382890644",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/deadline.svg",
      "tgs": "gifts/deskcalendar/assets/models/deadline.tgs"
    }
  },
  {
    "name": "Fawkes Night",
    "customEmojiId": "5246736322286087920",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/fawkes-night.svg",
      "tgs": "gifts/deskcalendar/assets/models/fawkes-night.tgs"
    }
  },
  {
    "name": "Independence",
    "customEmojiId": "5249362132146872081",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/independence.svg",
      "tgs": "gifts/deskcalendar/assets/models/independence.tgs"
    }
  },
  {
    "name": "Adult Tasks",
    "customEmojiId": "5249255101561853835",
    "rarityPermille": 3,
    "originalRarityPermille": 2,
    "rarity": 0.3,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/adult-tasks.svg",
      "tgs": "gifts/deskcalendar/assets/models/adult-tasks.tgs"
    }
  },
  {
    "name": "Checklist",
    "customEmojiId": "5247019987696118860",
    "rarityPermille": 3,
    "originalRarityPermille": 4,
    "rarity": 0.3,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/checklist.svg",
      "tgs": "gifts/deskcalendar/assets/models/checklist.tgs"
    }
  },
  {
    "name": "Pepe Plans",
    "customEmojiId": "5249500657727069928",
    "rarityPermille": 3,
    "originalRarityPermille": 2,
    "rarity": 0.3,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/pepe-plans.svg",
      "tgs": "gifts/deskcalendar/assets/models/pepe-plans.tgs"
    }
  },
  {
    "name": "Tic Tac Toe",
    "customEmojiId": "5249462428223168677",
    "rarityPermille": 3,
    "originalRarityPermille": 4,
    "rarity": 0.3,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/tic-tac-toe.svg",
      "tgs": "gifts/deskcalendar/assets/models/tic-tac-toe.tgs"
    }
  },
  {
    "name": "Celebration",
    "customEmojiId": "5249262317106917499",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/celebration.svg",
      "tgs": "gifts/deskcalendar/assets/models/celebration.tgs"
    }
  },
  {
    "name": "Fund Manager",
    "customEmojiId": "5249088121823324350",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/fund-manager.svg",
      "tgs": "gifts/deskcalendar/assets/models/fund-manager.tgs"
    }
  },
  {
    "name": "Luftballons",
    "customEmojiId": "5249476283787661693",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/luftballons.svg",
      "tgs": "gifts/deskcalendar/assets/models/luftballons.tgs"
    }
  },
  {
    "name": "Peach Week",
    "customEmojiId": "5249312684188395609",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/peach-week.svg",
      "tgs": "gifts/deskcalendar/assets/models/peach-week.tgs"
    }
  },
  {
    "name": "Sherlock",
    "customEmojiId": "5249393631437025067",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/sherlock.svg",
      "tgs": "gifts/deskcalendar/assets/models/sherlock.tgs"
    }
  },
  {
    "name": "April",
    "customEmojiId": "5247005517951299552",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/april.svg",
      "tgs": "gifts/deskcalendar/assets/models/april.tgs"
    }
  },
  {
    "name": "August",
    "customEmojiId": "5246775221804889197",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/august.svg",
      "tgs": "gifts/deskcalendar/assets/models/august.tgs"
    }
  },
  {
    "name": "December",
    "customEmojiId": "5249365881653322193",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/december.svg",
      "tgs": "gifts/deskcalendar/assets/models/december.tgs"
    }
  },
  {
    "name": "Durov Day",
    "customEmojiId": "5248972965160181469",
    "rarityPermille": 5,
    "originalRarityPermille": 4,
    "rarity": 0.5,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/durov-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/durov-day.tgs"
    }
  },
  {
    "name": "Festive Day",
    "customEmojiId": "5248966990860671426",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/festive-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/festive-day.tgs"
    }
  },
  {
    "name": "Hodler",
    "customEmojiId": "5248953745181534341",
    "rarityPermille": 5,
    "originalRarityPermille": 4,
    "rarity": 0.5,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/hodler.svg",
      "tgs": "gifts/deskcalendar/assets/models/hodler.tgs"
    }
  },
  {
    "name": "Investor",
    "customEmojiId": "5249091901394542037",
    "rarityPermille": 5,
    "originalRarityPermille": 4,
    "rarity": 0.5,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/investor.svg",
      "tgs": "gifts/deskcalendar/assets/models/investor.tgs"
    }
  },
  {
    "name": "July",
    "customEmojiId": "5246897808761452039",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/july.svg",
      "tgs": "gifts/deskcalendar/assets/models/july.tgs"
    }
  },
  {
    "name": "June",
    "customEmojiId": "5249336877739170532",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/june.svg",
      "tgs": "gifts/deskcalendar/assets/models/june.tgs"
    }
  },
  {
    "name": "March",
    "customEmojiId": "5246823681920887827",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/march.svg",
      "tgs": "gifts/deskcalendar/assets/models/march.tgs"
    }
  },
  {
    "name": "May",
    "customEmojiId": "5249047242324598117",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/may.svg",
      "tgs": "gifts/deskcalendar/assets/models/may.tgs"
    }
  },
  {
    "name": "Monday",
    "customEmojiId": "5249193966997366389",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/monday.svg",
      "tgs": "gifts/deskcalendar/assets/models/monday.tgs"
    }
  },
  {
    "name": "November",
    "customEmojiId": "5249311284029055802",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/november.svg",
      "tgs": "gifts/deskcalendar/assets/models/november.tgs"
    }
  },
  {
    "name": "October",
    "customEmojiId": "5249284195670317769",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/october.svg",
      "tgs": "gifts/deskcalendar/assets/models/october.tgs"
    }
  },
  {
    "name": "Saturday",
    "customEmojiId": "5249380059340370839",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/saturday.svg",
      "tgs": "gifts/deskcalendar/assets/models/saturday.tgs"
    }
  },
  {
    "name": "September",
    "customEmojiId": "5249482876562467917",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/september.svg",
      "tgs": "gifts/deskcalendar/assets/models/september.tgs"
    }
  },
  {
    "name": "Telegram",
    "customEmojiId": "5249464047425837545",
    "rarityPermille": 5,
    "originalRarityPermille": 4,
    "rarity": 0.5,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/telegram.svg",
      "tgs": "gifts/deskcalendar/assets/models/telegram.tgs"
    }
  },
  {
    "name": "Thursday",
    "customEmojiId": "5246859377394085306",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/thursday.svg",
      "tgs": "gifts/deskcalendar/assets/models/thursday.tgs"
    }
  },
  {
    "name": "Tuesday",
    "customEmojiId": "5249471701057559745",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/tuesday.svg",
      "tgs": "gifts/deskcalendar/assets/models/tuesday.tgs"
    }
  },
  {
    "name": "Wednesday",
    "customEmojiId": "5246950215952395280",
    "rarityPermille": 5,
    "originalRarityPermille": 6,
    "rarity": 0.5,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/wednesday.svg",
      "tgs": "gifts/deskcalendar/assets/models/wednesday.tgs"
    }
  },
  {
    "name": "February",
    "customEmojiId": "5249305167995623808",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/february.svg",
      "tgs": "gifts/deskcalendar/assets/models/february.tgs"
    }
  },
  {
    "name": "Friday",
    "customEmojiId": "5249003437953151936",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/friday.svg",
      "tgs": "gifts/deskcalendar/assets/models/friday.tgs"
    }
  },
  {
    "name": "Heartbreak",
    "customEmojiId": "5246864046023540952",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/heartbreak.svg",
      "tgs": "gifts/deskcalendar/assets/models/heartbreak.tgs"
    }
  },
  {
    "name": "January",
    "customEmojiId": "5249402311565929425",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/january.svg",
      "tgs": "gifts/deskcalendar/assets/models/january.tgs"
    }
  },
  {
    "name": "Like Cycle",
    "customEmojiId": "5249326299234724700",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/like-cycle.svg",
      "tgs": "gifts/deskcalendar/assets/models/like-cycle.tgs"
    }
  },
  {
    "name": "Sunday",
    "customEmojiId": "5249131599777258169",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/sunday.svg",
      "tgs": "gifts/deskcalendar/assets/models/sunday.tgs"
    }
  },
  {
    "name": "Day Five",
    "customEmojiId": "5249165220781251975",
    "rarityPermille": 7,
    "originalRarityPermille": 8,
    "rarity": 0.7,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/day-five.svg",
      "tgs": "gifts/deskcalendar/assets/models/day-five.tgs"
    }
  },
  {
    "name": "Ninety Nine",
    "customEmojiId": "5249443422992886407",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/ninety-nine.svg",
      "tgs": "gifts/deskcalendar/assets/models/ninety-nine.tgs"
    }
  },
  {
    "name": "Rare Event",
    "customEmojiId": "5249006483084961105",
    "rarityPermille": 7,
    "originalRarityPermille": 8,
    "rarity": 0.7,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/rare-event.svg",
      "tgs": "gifts/deskcalendar/assets/models/rare-event.tgs"
    }
  },
  {
    "name": "Blank Page",
    "customEmojiId": "5249224237926872258",
    "rarityPermille": 8,
    "originalRarityPermille": 10,
    "rarity": 0.8,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/blank-page.svg",
      "tgs": "gifts/deskcalendar/assets/models/blank-page.tgs"
    }
  },
  {
    "name": "Fresh Start",
    "customEmojiId": "5249169648892534669",
    "rarityPermille": 8,
    "originalRarityPermille": 9,
    "rarity": 0.8,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/fresh-start.svg",
      "tgs": "gifts/deskcalendar/assets/models/fresh-start.tgs"
    }
  },
  {
    "name": "Gato Ocho",
    "customEmojiId": "5249057915318327169",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/gato-ocho.svg",
      "tgs": "gifts/deskcalendar/assets/models/gato-ocho.tgs"
    }
  },
  {
    "name": "Kawaii",
    "customEmojiId": "5249045975309245331",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/kawaii.svg",
      "tgs": "gifts/deskcalendar/assets/models/kawaii.tgs"
    }
  },
  {
    "name": "Blueprint",
    "customEmojiId": "5249103167093757004",
    "rarityPermille": 9,
    "originalRarityPermille": 10,
    "rarity": 0.9,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/blueprint.svg",
      "tgs": "gifts/deskcalendar/assets/models/blueprint.tgs"
    }
  },
  {
    "name": "Crossed Out",
    "customEmojiId": "5249107603794978858",
    "rarityPermille": 9,
    "originalRarityPermille": 10,
    "rarity": 0.9,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/crossed-out.svg",
      "tgs": "gifts/deskcalendar/assets/models/crossed-out.tgs"
    }
  },
  {
    "name": "Monochrome",
    "customEmojiId": "5248986034745664101",
    "rarityPermille": 9,
    "originalRarityPermille": 10,
    "rarity": 0.9,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/monochrome.svg",
      "tgs": "gifts/deskcalendar/assets/models/monochrome.tgs"
    }
  },
  {
    "name": "Shocktober",
    "customEmojiId": "5249028516267185551",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/shocktober.svg",
      "tgs": "gifts/deskcalendar/assets/models/shocktober.tgs"
    }
  },
  {
    "name": "Golden Years",
    "customEmojiId": "5249431908185564070",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/golden-years.svg",
      "tgs": "gifts/deskcalendar/assets/models/golden-years.tgs"
    }
  },
  {
    "name": "Groundhog Day",
    "customEmojiId": "5248949368609859201",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/groundhog-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/groundhog-day.tgs"
    }
  },
  {
    "name": "Newsprint",
    "customEmojiId": "5249159809122460881",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/newsprint.svg",
      "tgs": "gifts/deskcalendar/assets/models/newsprint.tgs"
    }
  },
  {
    "name": "Pink Hearts",
    "customEmojiId": "5249376855294765802",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/pink-hearts.svg",
      "tgs": "gifts/deskcalendar/assets/models/pink-hearts.tgs"
    }
  },
  {
    "name": "Pink Planner",
    "customEmojiId": "5246922474758631972",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/pink-planner.svg",
      "tgs": "gifts/deskcalendar/assets/models/pink-planner.tgs"
    }
  },
  {
    "name": "Basic Blue",
    "customEmojiId": "5249110060516268121",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/basic-blue.svg",
      "tgs": "gifts/deskcalendar/assets/models/basic-blue.tgs"
    }
  },
  {
    "name": "Beachy",
    "customEmojiId": "5249125041362199053",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/beachy.svg",
      "tgs": "gifts/deskcalendar/assets/models/beachy.tgs"
    }
  },
  {
    "name": "Beet Diary",
    "customEmojiId": "5248958851897647070",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/beet-diary.svg",
      "tgs": "gifts/deskcalendar/assets/models/beet-diary.tgs"
    }
  },
  {
    "name": "Blue Sky",
    "customEmojiId": "5249314913276421632",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/blue-sky.svg",
      "tgs": "gifts/deskcalendar/assets/models/blue-sky.tgs"
    }
  },
  {
    "name": "Bright Coral",
    "customEmojiId": "5249003949054254173",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/bright-coral.svg",
      "tgs": "gifts/deskcalendar/assets/models/bright-coral.tgs"
    }
  },
  {
    "name": "Choco Top",
    "customEmojiId": "5249383164601720756",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/choco-top.svg",
      "tgs": "gifts/deskcalendar/assets/models/choco-top.tgs"
    }
  },
  {
    "name": "Eco Friendly",
    "customEmojiId": "5249386617755428292",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/eco-friendly.svg",
      "tgs": "gifts/deskcalendar/assets/models/eco-friendly.tgs"
    }
  },
  {
    "name": "Going Green",
    "customEmojiId": "5248979974546807416",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/going-green.svg",
      "tgs": "gifts/deskcalendar/assets/models/going-green.tgs"
    }
  },
  {
    "name": "Golden Touch",
    "customEmojiId": "5248990256698519999",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/golden-touch.svg",
      "tgs": "gifts/deskcalendar/assets/models/golden-touch.tgs"
    }
  },
  {
    "name": "Green Day",
    "customEmojiId": "5249079115276904992",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/green-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/green-day.tgs"
    }
  },
  {
    "name": "Highlighter",
    "customEmojiId": "5249109420566142435",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/highlighter.svg",
      "tgs": "gifts/deskcalendar/assets/models/highlighter.tgs"
    }
  },
  {
    "name": "Leather Top",
    "customEmojiId": "5249387876180851510",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/leather-top.svg",
      "tgs": "gifts/deskcalendar/assets/models/leather-top.tgs"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5247091344282774820",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/lemon.svg",
      "tgs": "gifts/deskcalendar/assets/models/lemon.tgs"
    }
  },
  {
    "name": "Magic Flow",
    "customEmojiId": "5247097786733717628",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/magic-flow.svg",
      "tgs": "gifts/deskcalendar/assets/models/magic-flow.tgs"
    }
  },
  {
    "name": "Minting Date",
    "customEmojiId": "5248968292235764492",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/minting-date.svg",
      "tgs": "gifts/deskcalendar/assets/models/minting-date.tgs"
    }
  },
  {
    "name": "Purple Front",
    "customEmojiId": "5249457373046663588",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/purple-front.svg",
      "tgs": "gifts/deskcalendar/assets/models/purple-front.tgs"
    }
  },
  {
    "name": "Purple Mint",
    "customEmojiId": "5247117169921125550",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/purple-mint.svg",
      "tgs": "gifts/deskcalendar/assets/models/purple-mint.tgs"
    }
  },
  {
    "name": "Red Pen",
    "customEmojiId": "5249434575360255535",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/red-pen.svg",
      "tgs": "gifts/deskcalendar/assets/models/red-pen.tgs"
    }
  },
  {
    "name": "Sticky Note",
    "customEmojiId": "5249265954944217404",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/sticky-note.svg",
      "tgs": "gifts/deskcalendar/assets/models/sticky-note.tgs"
    }
  },
  {
    "name": "Strong Circle",
    "customEmojiId": "5249069997061333058",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/strong-circle.svg",
      "tgs": "gifts/deskcalendar/assets/models/strong-circle.tgs"
    }
  },
  {
    "name": "Surfer",
    "customEmojiId": "5249034366012644695",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/surfer.svg",
      "tgs": "gifts/deskcalendar/assets/models/surfer.tgs"
    }
  },
  {
    "name": "The Nineties",
    "customEmojiId": "5247165565612616001",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/the-nineties.svg",
      "tgs": "gifts/deskcalendar/assets/models/the-nineties.tgs"
    }
  },
  {
    "name": "Very Visible",
    "customEmojiId": "5249190342044967621",
    "rarityPermille": 13,
    "originalRarityPermille": 14,
    "rarity": 1.3,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/very-visible.svg",
      "tgs": "gifts/deskcalendar/assets/models/very-visible.tgs"
    }
  },
  {
    "name": "Yellow Page",
    "customEmojiId": "5249009936238667725",
    "rarityPermille": 13,
    "originalRarityPermille": 15,
    "rarity": 1.3,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/yellow-page.svg",
      "tgs": "gifts/deskcalendar/assets/models/yellow-page.tgs"
    }
  },
  {
    "name": "Barbie Day",
    "customEmojiId": "5249233493581391930",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/barbie-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/barbie-day.tgs"
    }
  },
  {
    "name": "Black Flip",
    "customEmojiId": "5249410429054115966",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/black-flip.svg",
      "tgs": "gifts/deskcalendar/assets/models/black-flip.tgs"
    }
  },
  {
    "name": "Black Suede",
    "customEmojiId": "5249185132249636769",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/black-suede.svg",
      "tgs": "gifts/deskcalendar/assets/models/black-suede.tgs"
    }
  },
  {
    "name": "Blossoms",
    "customEmojiId": "5249497548170745875",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/blossoms.svg",
      "tgs": "gifts/deskcalendar/assets/models/blossoms.tgs"
    }
  },
  {
    "name": "Dark Binding",
    "customEmojiId": "5249288370378534433",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/dark-binding.svg",
      "tgs": "gifts/deskcalendar/assets/models/dark-binding.tgs"
    }
  },
  {
    "name": "Deep Ocean",
    "customEmojiId": "5246971218342472509",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/deep-ocean.svg",
      "tgs": "gifts/deskcalendar/assets/models/deep-ocean.tgs"
    }
  },
  {
    "name": "Fire Path",
    "customEmojiId": "5249075752317511101",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/fire-path.svg",
      "tgs": "gifts/deskcalendar/assets/models/fire-path.tgs"
    }
  },
  {
    "name": "Gold Leaf",
    "customEmojiId": "5249195392926511448",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/gold-leaf.svg",
      "tgs": "gifts/deskcalendar/assets/models/gold-leaf.tgs"
    }
  },
  {
    "name": "Gold Pink",
    "customEmojiId": "5249384599120798657",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/gold-pink.svg",
      "tgs": "gifts/deskcalendar/assets/models/gold-pink.tgs"
    }
  },
  {
    "name": "Harvest",
    "customEmojiId": "5249250291198486960",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/harvest.svg",
      "tgs": "gifts/deskcalendar/assets/models/harvest.tgs"
    }
  },
  {
    "name": "Lavendays",
    "customEmojiId": "5249487261724074984",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/lavendays.svg",
      "tgs": "gifts/deskcalendar/assets/models/lavendays.tgs"
    }
  },
  {
    "name": "Lilac Black",
    "customEmojiId": "5249464116145316328",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/lilac-black.svg",
      "tgs": "gifts/deskcalendar/assets/models/lilac-black.tgs"
    }
  },
  {
    "name": "Lovely",
    "customEmojiId": "5246756388373295706",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/lovely.svg",
      "tgs": "gifts/deskcalendar/assets/models/lovely.tgs"
    }
  },
  {
    "name": "Miami Beach",
    "customEmojiId": "5246723922715504927",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/miami-beach.svg",
      "tgs": "gifts/deskcalendar/assets/models/miami-beach.tgs"
    }
  },
  {
    "name": "Orange Mood",
    "customEmojiId": "5246869775509912161",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/orange-mood.svg",
      "tgs": "gifts/deskcalendar/assets/models/orange-mood.tgs"
    }
  },
  {
    "name": "Party Time",
    "customEmojiId": "5249151433936232730",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/party-time.svg",
      "tgs": "gifts/deskcalendar/assets/models/party-time.tgs"
    }
  },
  {
    "name": "Pink Day",
    "customEmojiId": "5249358756302582114",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/pink-day.svg",
      "tgs": "gifts/deskcalendar/assets/models/pink-day.tgs"
    }
  },
  {
    "name": "Plum Peach",
    "customEmojiId": "5249401113270049837",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/plum-peach.svg",
      "tgs": "gifts/deskcalendar/assets/models/plum-peach.tgs"
    }
  },
  {
    "name": "Sunshine",
    "customEmojiId": "5248948140249209321",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/sunshine.svg",
      "tgs": "gifts/deskcalendar/assets/models/sunshine.tgs"
    }
  },
  {
    "name": "Tropical",
    "customEmojiId": "5249358185071930417",
    "rarityPermille": 14,
    "originalRarityPermille": 15,
    "rarity": 1.4,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/deskcalendar/assets/models/tropical.svg",
      "tgs": "gifts/deskcalendar/assets/models/tropical.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sun.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/tree-of-life.png"
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
      "png": "gifts/deskcalendar/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/cat-mask.png"
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
      "png": "gifts/deskcalendar/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/conch.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/fish.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/heart.png"
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
      "png": "gifts/deskcalendar/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/love-letter.png"
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
      "png": "gifts/deskcalendar/assets/patterns/maple.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/melon.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pickaxe.png"
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
      "png": "gifts/deskcalendar/assets/patterns/plum.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/rook.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/scorpion.png"
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
      "png": "gifts/deskcalendar/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/boat.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bone.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/brain.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/candle.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/dice.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/dolphin.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/feather.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/flower.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/gear.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/handset.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/knight.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/koala.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/lily.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/mask.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/musical-note.png"
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
      "png": "gifts/deskcalendar/assets/patterns/owl.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/palette.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/potion.png"
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
      "png": "gifts/deskcalendar/assets/patterns/rain-drop.png"
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
      "png": "gifts/deskcalendar/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/ring.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/shell.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/star.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/thief.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/acorn.png"
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
      "png": "gifts/deskcalendar/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bishop.png"
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
      "png": "gifts/deskcalendar/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bug.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/car.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/cheese.png"
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
      "png": "gifts/deskcalendar/assets/patterns/clover.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/coin.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/crab.png"
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
      "png": "gifts/deskcalendar/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/drug.png"
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
      "png": "gifts/deskcalendar/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/eikthyrnir.png"
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
      "png": "gifts/deskcalendar/assets/patterns/fire.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/gem.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/grape.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/leaf.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/lightning.png"
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
      "png": "gifts/deskcalendar/assets/patterns/like.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/lion-head.png"
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
      "png": "gifts/deskcalendar/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/mountain-lion.png"
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
      "png": "gifts/deskcalendar/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pinata.png"
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
      "png": "gifts/deskcalendar/assets/patterns/pizza-slice.png"
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
      "png": "gifts/deskcalendar/assets/patterns/planet.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pomegranate.png"
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
      "png": "gifts/deskcalendar/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/spades.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/spanner.png"
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
      "png": "gifts/deskcalendar/assets/patterns/spider-web.png"
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
      "png": "gifts/deskcalendar/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sun-mountain.png"
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
      "png": "gifts/deskcalendar/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/tie.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/top-hat.png"
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
      "png": "gifts/deskcalendar/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/viking.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/vortex.png"
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
      "png": "gifts/deskcalendar/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/apple.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/avocado.png"
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
      "png": "gifts/deskcalendar/assets/patterns/axe.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/baphomet.png"
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
      "png": "gifts/deskcalendar/assets/patterns/bee.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/book.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bread.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/candy.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/cap.png"
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
      "png": "gifts/deskcalendar/assets/patterns/cash.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/chest.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/chili.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/chili-pepper.png"
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
      "png": "gifts/deskcalendar/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/clubs.png"
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
      "png": "gifts/deskcalendar/assets/patterns/cobra.png"
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
      "png": "gifts/deskcalendar/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/cone.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/corn.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/crown.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/diamond.png"
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
      "png": "gifts/deskcalendar/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/dragonfly.png"
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
      "png": "gifts/deskcalendar/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/elephant.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/gold.png"
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
      "png": "gifts/deskcalendar/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/grenade.png"
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
      "png": "gifts/deskcalendar/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/jumbo-pencil.png"
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
      "png": "gifts/deskcalendar/assets/patterns/key.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/kite.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "rarityPermille": 5,
    "originalRarityPermille": 14,
    "rarity": 0.5,
    "originalRarity": 1.4,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/lemon.png"
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
      "png": "gifts/deskcalendar/assets/patterns/lemon-slice.png"
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
      "png": "gifts/deskcalendar/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/money-bag.png"
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
      "png": "gifts/deskcalendar/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/moon.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/moon-eagle.png"
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
      "png": "gifts/deskcalendar/assets/patterns/moose-head.png"
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
      "png": "gifts/deskcalendar/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/okami-wolf.png"
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
      "png": "gifts/deskcalendar/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/paw.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/pear.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/piggy-bank.png"
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
      "png": "gifts/deskcalendar/assets/patterns/plume.png"
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
      "png": "gifts/deskcalendar/assets/patterns/police-badge.png"
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
      "png": "gifts/deskcalendar/assets/patterns/pyramid.png"
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
      "png": "gifts/deskcalendar/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/scissors.png"
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
      "png": "gifts/deskcalendar/assets/patterns/shark-knife.png"
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
      "png": "gifts/deskcalendar/assets/patterns/shield.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/skull.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/star-crown.png"
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
      "png": "gifts/deskcalendar/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/sword.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/unicorn-head.png"
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
      "png": "gifts/deskcalendar/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/deskcalendar/assets/patterns/wreath.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 9,
    "originalRarityPermille": 10,
    "rarity": 0.9,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/363738-0e0f0f-circle.svg",
      "squareSvg": "assets/backdrops/363738-0e0f0f-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/b39f82-7e735b-circle.svg",
      "squareSvg": "assets/backdrops/b39f82-7e735b-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/78c585-42a171-circle.svg",
      "squareSvg": "assets/backdrops/78c585-42a171-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/9d74c1-794da0-circle.svg",
      "squareSvg": "assets/backdrops/9d74c1-794da0-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/55c49c-3b9977-circle.svg",
      "squareSvg": "assets/backdrops/55c49c-3b9977-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/95b457-3d9755-circle.svg",
      "squareSvg": "assets/backdrops/95b457-3d9755-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/d08b6d-b05770-circle.svg",
      "squareSvg": "assets/backdrops/d08b6d-b05770-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/58b4c8-538bc2-circle.svg",
      "squareSvg": "assets/backdrops/58b4c8-538bc2-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/5ec0b8-3d928e-circle.svg",
      "squareSvg": "assets/backdrops/5ec0b8-3d928e-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/8c8c85-6c6c66-circle.svg",
      "squareSvg": "assets/backdrops/8c8c85-6c6c66-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/d09932-b77431-circle.svg",
      "squareSvg": "assets/backdrops/d09932-b77431-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/db9867-c76f4f-circle.svg",
      "squareSvg": "assets/backdrops/db9867-c76f4f-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/6088cf-5162b8-circle.svg",
      "squareSvg": "assets/backdrops/6088cf-5162b8-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/b17da5-8c577a-circle.svg",
      "squareSvg": "assets/backdrops/b17da5-8c577a-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/a980f3-5b62d8-circle.svg",
      "squareSvg": "assets/backdrops/a980f3-5b62d8-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/7ecb82-459e5a-circle.svg",
      "squareSvg": "assets/backdrops/7ecb82-459e5a-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/d19a3a-c06f47-circle.svg",
      "squareSvg": "assets/backdrops/d19a3a-c06f47-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/e7a75a-c5675f-circle.svg",
      "squareSvg": "assets/backdrops/e7a75a-c5675f-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/a3a8b5-7c808a-circle.svg",
      "squareSvg": "assets/backdrops/a3a8b5-7c808a-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/bf9b47-8d7739-circle.svg",
      "squareSvg": "assets/backdrops/bf9b47-8d7739-square.svg"
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
    "rarityPermille": 16,
    "originalRarityPermille": 15,
    "rarity": 1.6,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/5c6985-354057-circle.svg",
      "squareSvg": "assets/backdrops/5c6985-354057-square.svg"
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
    "rarityPermille": 19,
    "originalRarityPermille": 19,
    "rarity": 1.9,
    "originalRarity": 1.9,
    "assets": {
      "circleSvg": "assets/backdrops/4d5254-313638-circle.svg",
      "squareSvg": "assets/backdrops/4d5254-313638-square.svg"
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
    "rarityPermille": 19,
    "originalRarityPermille": 19,
    "rarity": 1.9,
    "originalRarity": 1.9,
    "assets": {
      "circleSvg": "assets/backdrops/ccab41-987b32-circle.svg",
      "squareSvg": "assets/backdrops/ccab41-987b32-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/5db1cb-448bab-circle.svg",
      "squareSvg": "assets/backdrops/5db1cb-448bab-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/a35e66-6d414a-circle.svg",
      "squareSvg": "assets/backdrops/a35e66-6d414a-square.svg"
    }
  },
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/b1907e-7c6356-circle.svg",
      "squareSvg": "assets/backdrops/b1907e-7c6356-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/d08656-9d6531-circle.svg",
      "squareSvg": "assets/backdrops/d08656-9d6531-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/e28ab6-a4588b-circle.svg",
      "squareSvg": "assets/backdrops/e28ab6-a4588b-square.svg"
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
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/6c9edd-5c6ec9-circle.svg",
      "squareSvg": "assets/backdrops/6c9edd-5c6ec9-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/5abea6-3d95ba-circle.svg",
      "squareSvg": "assets/backdrops/5abea6-3d95ba-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/6ba97c-3e7970-circle.svg",
      "squareSvg": "assets/backdrops/6ba97c-3e7970-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/ae6cae-844784-circle.svg",
      "squareSvg": "assets/backdrops/ae6cae-844784-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/8ab163-559345-circle.svg",
      "squareSvg": "assets/backdrops/8ab163-559345-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/80a4b8-607c91-circle.svg",
      "squareSvg": "assets/backdrops/80a4b8-607c91-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/97a2ac-63727c-circle.svg",
      "squareSvg": "assets/backdrops/97a2ac-63727c-square.svg"
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "circleSvg": "assets/backdrops/dd8e6f-b75a60-circle.svg",
      "squareSvg": "assets/backdrops/dd8e6f-b75a60-square.svg"
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
    "rarityPermille": 21,
    "originalRarityPermille": 21,
    "rarity": 2.1,
    "originalRarity": 2.1,
    "assets": {
      "circleSvg": "assets/backdrops/6fc793-3b9c84-circle.svg",
      "squareSvg": "assets/backdrops/6fc793-3b9c84-square.svg"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "deskcalendar", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
