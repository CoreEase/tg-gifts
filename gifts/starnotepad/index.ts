import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5936017773737018241" as const;

export const models = [
  {
    "name": "Alien Script",
    "customEmojiId": "5262856275145815255",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/alien-script.svg",
      "tgs": "gifts/starnotepad/assets/models/alien-script.tgs"
    }
  },
  {
    "name": "Clown",
    "customEmojiId": "5263011830271339933",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/clown.svg",
      "tgs": "gifts/starnotepad/assets/models/clown.tgs"
    }
  },
  {
    "name": "Mon Amour",
    "customEmojiId": "5262997502260437392",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/mon-amour.svg",
      "tgs": "gifts/starnotepad/assets/models/mon-amour.tgs"
    }
  },
  {
    "name": "Peachless",
    "customEmojiId": "5264984723498754294",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/peachless.svg",
      "tgs": "gifts/starnotepad/assets/models/peachless.tgs"
    }
  },
  {
    "name": "Pepe Diary",
    "customEmojiId": "5262586658573804968",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/pepe-diary.svg",
      "tgs": "gifts/starnotepad/assets/models/pepe-diary.tgs"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5262966157589112749",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/toilet-paper.svg",
      "tgs": "gifts/starnotepad/assets/models/toilet-paper.tgs"
    }
  },
  {
    "name": "Cursed Tome",
    "customEmojiId": "5262987872943760815",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/cursed-tome.svg",
      "tgs": "gifts/starnotepad/assets/models/cursed-tome.tgs"
    }
  },
  {
    "name": "Enigma",
    "customEmojiId": "5262541638726611321",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/enigma.svg",
      "tgs": "gifts/starnotepad/assets/models/enigma.tgs"
    }
  },
  {
    "name": "Grimoire",
    "customEmojiId": "5262645181798181255",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/grimoire.svg",
      "tgs": "gifts/starnotepad/assets/models/grimoire.tgs"
    }
  },
  {
    "name": "Inferno",
    "customEmojiId": "5262850030263365199",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/inferno.svg",
      "tgs": "gifts/starnotepad/assets/models/inferno.tgs"
    }
  },
  {
    "name": "Ink Splatter",
    "customEmojiId": "5262775581300255280",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/ink-splatter.svg",
      "tgs": "gifts/starnotepad/assets/models/ink-splatter.tgs"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5262538052428918194",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/spellbook.svg",
      "tgs": "gifts/starnotepad/assets/models/spellbook.tgs"
    }
  },
  {
    "name": "Brainstorm",
    "customEmojiId": "5262969765361642050",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/brainstorm.svg",
      "tgs": "gifts/starnotepad/assets/models/brainstorm.tgs"
    }
  },
  {
    "name": "Color Switch",
    "customEmojiId": "5262484940863336372",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/color-switch.svg",
      "tgs": "gifts/starnotepad/assets/models/color-switch.tgs"
    }
  },
  {
    "name": "Error Log",
    "customEmojiId": "5262786855589409364",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/error-log.svg",
      "tgs": "gifts/starnotepad/assets/models/error-log.tgs"
    }
  },
  {
    "name": "Florist",
    "customEmojiId": "5262727688119938873",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/florist.svg",
      "tgs": "gifts/starnotepad/assets/models/florist.tgs"
    }
  },
  {
    "name": "Girlboss",
    "customEmojiId": "5262616573021025258",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/girlboss.svg",
      "tgs": "gifts/starnotepad/assets/models/girlboss.tgs"
    }
  },
  {
    "name": "Golden Star",
    "customEmojiId": "5262676535059442935",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/golden-star.svg",
      "tgs": "gifts/starnotepad/assets/models/golden-star.tgs"
    }
  },
  {
    "name": "Hippie",
    "customEmojiId": "5264955784009113040",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/hippie.svg",
      "tgs": "gifts/starnotepad/assets/models/hippie.tgs"
    }
  },
  {
    "name": "Hologram",
    "customEmojiId": "5262976233582391512",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/hologram.svg",
      "tgs": "gifts/starnotepad/assets/models/hologram.tgs"
    }
  },
  {
    "name": "Le Club",
    "customEmojiId": "5262479443305198444",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/le-club.svg",
      "tgs": "gifts/starnotepad/assets/models/le-club.tgs"
    }
  },
  {
    "name": "Leopard",
    "customEmojiId": "5265044200205870302",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/leopard.svg",
      "tgs": "gifts/starnotepad/assets/models/leopard.tgs"
    }
  },
  {
    "name": "Love Affair",
    "customEmojiId": "5265075583531900971",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/love-affair.svg",
      "tgs": "gifts/starnotepad/assets/models/love-affair.tgs"
    }
  },
  {
    "name": "Mermaid",
    "customEmojiId": "5262840787493744291",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/mermaid.svg",
      "tgs": "gifts/starnotepad/assets/models/mermaid.tgs"
    }
  },
  {
    "name": "Metallic",
    "customEmojiId": "5265106850893815260",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/metallic.svg",
      "tgs": "gifts/starnotepad/assets/models/metallic.tgs"
    }
  },
  {
    "name": "Neon Grid",
    "customEmojiId": "5262917521379455080",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/neon-grid.svg",
      "tgs": "gifts/starnotepad/assets/models/neon-grid.tgs"
    }
  },
  {
    "name": "North Pole",
    "customEmojiId": "5262551018935184912",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/north-pole.svg",
      "tgs": "gifts/starnotepad/assets/models/north-pole.tgs"
    }
  },
  {
    "name": "Pearlescent",
    "customEmojiId": "5262662490516384949",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/pearlescent.svg",
      "tgs": "gifts/starnotepad/assets/models/pearlescent.tgs"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5262709224055533309",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/phoenix.svg",
      "tgs": "gifts/starnotepad/assets/models/phoenix.tgs"
    }
  },
  {
    "name": "Princess",
    "customEmojiId": "5262472536997786412",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/princess.svg",
      "tgs": "gifts/starnotepad/assets/models/princess.tgs"
    }
  },
  {
    "name": "Smoothie",
    "customEmojiId": "5262465424531943057",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/smoothie.svg",
      "tgs": "gifts/starnotepad/assets/models/smoothie.tgs"
    }
  },
  {
    "name": "Springfield",
    "customEmojiId": "5262954574062317801",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/springfield.svg",
      "tgs": "gifts/starnotepad/assets/models/springfield.tgs"
    }
  },
  {
    "name": "Swatch",
    "customEmojiId": "5262569371330440243",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/swatch.svg",
      "tgs": "gifts/starnotepad/assets/models/swatch.tgs"
    }
  },
  {
    "name": "Telegram",
    "customEmojiId": "5264802384957172021",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/telegram.svg",
      "tgs": "gifts/starnotepad/assets/models/telegram.tgs"
    }
  },
  {
    "name": "Tiger",
    "customEmojiId": "5262765939098677614",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/tiger.svg",
      "tgs": "gifts/starnotepad/assets/models/tiger.tgs"
    }
  },
  {
    "name": "Trade Ledger",
    "customEmojiId": "5262730973769918741",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/trade-ledger.svg",
      "tgs": "gifts/starnotepad/assets/models/trade-ledger.tgs"
    }
  },
  {
    "name": "True Love",
    "customEmojiId": "5265000546158273845",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/true-love.svg",
      "tgs": "gifts/starnotepad/assets/models/true-love.tgs"
    }
  },
  {
    "name": "Twin Stars",
    "customEmojiId": "5262477128317821537",
    "rarityPermille": 7,
    "originalRarityPermille": 7,
    "rarity": 0.7,
    "originalRarity": 0.7,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/twin-stars.svg",
      "tgs": "gifts/starnotepad/assets/models/twin-stars.tgs"
    }
  },
  {
    "name": "Anemone",
    "customEmojiId": "5262587843984780458",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/anemone.svg",
      "tgs": "gifts/starnotepad/assets/models/anemone.tgs"
    }
  },
  {
    "name": "Chronicles",
    "customEmojiId": "5262843699481569867",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/chronicles.svg",
      "tgs": "gifts/starnotepad/assets/models/chronicles.tgs"
    }
  },
  {
    "name": "Executive",
    "customEmojiId": "5263015820295957959",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/executive.svg",
      "tgs": "gifts/starnotepad/assets/models/executive.tgs"
    }
  },
  {
    "name": "King Arthur",
    "customEmojiId": "5262940095727561970",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/king-arthur.svg",
      "tgs": "gifts/starnotepad/assets/models/king-arthur.tgs"
    }
  },
  {
    "name": "Lord Byron",
    "customEmojiId": "5262505067080085885",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/lord-byron.svg",
      "tgs": "gifts/starnotepad/assets/models/lord-byron.tgs"
    }
  },
  {
    "name": "Novelist",
    "customEmojiId": "5264798944688365868",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/novelist.svg",
      "tgs": "gifts/starnotepad/assets/models/novelist.tgs"
    }
  },
  {
    "name": "Paper Plane",
    "customEmojiId": "5262589759540197072",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/paper-plane.svg",
      "tgs": "gifts/starnotepad/assets/models/paper-plane.tgs"
    }
  },
  {
    "name": "Paw Pads",
    "customEmojiId": "5262792838478850965",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/paw-pads.svg",
      "tgs": "gifts/starnotepad/assets/models/paw-pads.tgs"
    }
  },
  {
    "name": "Positive",
    "customEmojiId": "5262548802732058975",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/positive.svg",
      "tgs": "gifts/starnotepad/assets/models/positive.tgs"
    }
  },
  {
    "name": "Snow Globe",
    "customEmojiId": "5262620820743679376",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/snow-globe.svg",
      "tgs": "gifts/starnotepad/assets/models/snow-globe.tgs"
    }
  },
  {
    "name": "Starry Night",
    "customEmojiId": "5262622147888577652",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/starry-night.svg",
      "tgs": "gifts/starnotepad/assets/models/starry-night.tgs"
    }
  },
  {
    "name": "Superstar",
    "customEmojiId": "5262843549157713224",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/superstar.svg",
      "tgs": "gifts/starnotepad/assets/models/superstar.tgs"
    }
  },
  {
    "name": "Blue Jeans",
    "customEmojiId": "5264758597765586386",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/blue-jeans.svg",
      "tgs": "gifts/starnotepad/assets/models/blue-jeans.tgs"
    }
  },
  {
    "name": "Candy Pink",
    "customEmojiId": "5262512789431282809",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/candy-pink.svg",
      "tgs": "gifts/starnotepad/assets/models/candy-pink.tgs"
    }
  },
  {
    "name": "Central Park",
    "customEmojiId": "5264747263346895067",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/central-park.svg",
      "tgs": "gifts/starnotepad/assets/models/central-park.tgs"
    }
  },
  {
    "name": "Cheerleader",
    "customEmojiId": "5262840525500740449",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/cheerleader.svg",
      "tgs": "gifts/starnotepad/assets/models/cheerleader.tgs"
    }
  },
  {
    "name": "Côte d’Azur",
    "customEmojiId": "5264920354823887424",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/cote-d-azur.svg",
      "tgs": "gifts/starnotepad/assets/models/cote-d-azur.tgs"
    }
  },
  {
    "name": "Coyote",
    "customEmojiId": "5262566214529478276",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/coyote.svg",
      "tgs": "gifts/starnotepad/assets/models/coyote.tgs"
    }
  },
  {
    "name": "Crimson",
    "customEmojiId": "5264847353264757113",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/crimson.svg",
      "tgs": "gifts/starnotepad/assets/models/crimson.tgs"
    }
  },
  {
    "name": "Cyprus",
    "customEmojiId": "5262736621651914229",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/cyprus.svg",
      "tgs": "gifts/starnotepad/assets/models/cyprus.tgs"
    }
  },
  {
    "name": "Daily Blues",
    "customEmojiId": "5262682414869672475",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/daily-blues.svg",
      "tgs": "gifts/starnotepad/assets/models/daily-blues.tgs"
    }
  },
  {
    "name": "Daybook",
    "customEmojiId": "5262490962407484784",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/daybook.svg",
      "tgs": "gifts/starnotepad/assets/models/daybook.tgs"
    }
  },
  {
    "name": "Death Note",
    "customEmojiId": "5262743811427166858",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/death-note.svg",
      "tgs": "gifts/starnotepad/assets/models/death-note.tgs"
    }
  },
  {
    "name": "Faculty",
    "customEmojiId": "5262685047684627335",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/faculty.svg",
      "tgs": "gifts/starnotepad/assets/models/faculty.tgs"
    }
  },
  {
    "name": "Fashion Doll",
    "customEmojiId": "5262504461489696592",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/fashion-doll.svg",
      "tgs": "gifts/starnotepad/assets/models/fashion-doll.tgs"
    }
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5262935379853469270",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/hazelnut.svg",
      "tgs": "gifts/starnotepad/assets/models/hazelnut.tgs"
    }
  },
  {
    "name": "Hipster",
    "customEmojiId": "5262516212520219651",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/hipster.svg",
      "tgs": "gifts/starnotepad/assets/models/hipster.tgs"
    }
  },
  {
    "name": "Hot Pink",
    "customEmojiId": "5263008961233184566",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/hot-pink.svg",
      "tgs": "gifts/starnotepad/assets/models/hot-pink.tgs"
    }
  },
  {
    "name": "Indigo",
    "customEmojiId": "5265087721109480069",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/indigo.svg",
      "tgs": "gifts/starnotepad/assets/models/indigo.tgs"
    }
  },
  {
    "name": "Joker’s Notes",
    "customEmojiId": "5262953899752454250",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/joker-s-notes.svg",
      "tgs": "gifts/starnotepad/assets/models/joker-s-notes.tgs"
    }
  },
  {
    "name": "Leather",
    "customEmojiId": "5262848977996378276",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/leather.svg",
      "tgs": "gifts/starnotepad/assets/models/leather.tgs"
    }
  },
  {
    "name": "Lemonade",
    "customEmojiId": "5265208834892259756",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/lemonade.svg",
      "tgs": "gifts/starnotepad/assets/models/lemonade.tgs"
    }
  },
  {
    "name": "Marakuja",
    "customEmojiId": "5262490648874872679",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/marakuja.svg",
      "tgs": "gifts/starnotepad/assets/models/marakuja.tgs"
    }
  },
  {
    "name": "Marmalade",
    "customEmojiId": "5262519592659479073",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/marmalade.svg",
      "tgs": "gifts/starnotepad/assets/models/marmalade.tgs"
    }
  },
  {
    "name": "Matcha",
    "customEmojiId": "5262702669935439586",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/matcha.svg",
      "tgs": "gifts/starnotepad/assets/models/matcha.tgs"
    }
  },
  {
    "name": "Matte Black",
    "customEmojiId": "5262764723622931446",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/matte-black.svg",
      "tgs": "gifts/starnotepad/assets/models/matte-black.tgs"
    }
  },
  {
    "name": "Meadow",
    "customEmojiId": "5262779335101669605",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/meadow.svg",
      "tgs": "gifts/starnotepad/assets/models/meadow.tgs"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5262903914923061460",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/monarch.svg",
      "tgs": "gifts/starnotepad/assets/models/monarch.tgs"
    }
  },
  {
    "name": "Mustard",
    "customEmojiId": "5262922460591856247",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/mustard.svg",
      "tgs": "gifts/starnotepad/assets/models/mustard.tgs"
    }
  },
  {
    "name": "Negative",
    "customEmojiId": "5262818410714134459",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/negative.svg",
      "tgs": "gifts/starnotepad/assets/models/negative.tgs"
    }
  },
  {
    "name": "Newmarket",
    "customEmojiId": "5264815806729968723",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/newmarket.svg",
      "tgs": "gifts/starnotepad/assets/models/newmarket.tgs"
    }
  },
  {
    "name": "Nightpad",
    "customEmojiId": "5262789896426250197",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/nightpad.svg",
      "tgs": "gifts/starnotepad/assets/models/nightpad.tgs"
    }
  },
  {
    "name": "Oak Tree",
    "customEmojiId": "5264750304183739726",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/oak-tree.svg",
      "tgs": "gifts/starnotepad/assets/models/oak-tree.tgs"
    }
  },
  {
    "name": "Ocean Wave",
    "customEmojiId": "5264992123727404418",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/ocean-wave.svg",
      "tgs": "gifts/starnotepad/assets/models/ocean-wave.tgs"
    }
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5262745520824151422",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/rainbow.svg",
      "tgs": "gifts/starnotepad/assets/models/rainbow.tgs"
    }
  },
  {
    "name": "Ranger",
    "customEmojiId": "5264751914796476119",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/ranger.svg",
      "tgs": "gifts/starnotepad/assets/models/ranger.tgs"
    }
  },
  {
    "name": "Red Cover",
    "customEmojiId": "5264986334111490367",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/red-cover.svg",
      "tgs": "gifts/starnotepad/assets/models/red-cover.tgs"
    }
  },
  {
    "name": "Savoy Blue",
    "customEmojiId": "5262836110274357662",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/savoy-blue.svg",
      "tgs": "gifts/starnotepad/assets/models/savoy-blue.tgs"
    }
  },
  {
    "name": "Skies Above",
    "customEmojiId": "5262897412342574533",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/skies-above.svg",
      "tgs": "gifts/starnotepad/assets/models/skies-above.tgs"
    }
  },
  {
    "name": "Snow White",
    "customEmojiId": "5265042473629014770",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/snow-white.svg",
      "tgs": "gifts/starnotepad/assets/models/snow-white.tgs"
    }
  },
  {
    "name": "Sterling",
    "customEmojiId": "5262773562665626776",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/sterling.svg",
      "tgs": "gifts/starnotepad/assets/models/sterling.tgs"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5262588694388306415",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/sunflower.svg",
      "tgs": "gifts/starnotepad/assets/models/sunflower.tgs"
    }
  },
  {
    "name": "Tangerine",
    "customEmojiId": "5262629397793368860",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/tangerine.svg",
      "tgs": "gifts/starnotepad/assets/models/tangerine.tgs"
    }
  },
  {
    "name": "The Cutie",
    "customEmojiId": "5262937673366005185",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/the-cutie.svg",
      "tgs": "gifts/starnotepad/assets/models/the-cutie.tgs"
    }
  },
  {
    "name": "Timber",
    "customEmojiId": "5262712982151912049",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/timber.svg",
      "tgs": "gifts/starnotepad/assets/models/timber.tgs"
    }
  },
  {
    "name": "Tobacco",
    "customEmojiId": "5262997575274886251",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/tobacco.svg",
      "tgs": "gifts/starnotepad/assets/models/tobacco.tgs"
    }
  },
  {
    "name": "Tropical",
    "customEmojiId": "5262939906748999425",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/tropical.svg",
      "tgs": "gifts/starnotepad/assets/models/tropical.tgs"
    }
  },
  {
    "name": "Tutti Frutti",
    "customEmojiId": "5262972192018164247",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/tutti-frutti.svg",
      "tgs": "gifts/starnotepad/assets/models/tutti-frutti.tgs"
    }
  },
  {
    "name": "Vice City",
    "customEmojiId": "5263003128667598170",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/vice-city.svg",
      "tgs": "gifts/starnotepad/assets/models/vice-city.tgs"
    }
  },
  {
    "name": "Vineyard",
    "customEmojiId": "5262990501463749097",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/vineyard.svg",
      "tgs": "gifts/starnotepad/assets/models/vineyard.tgs"
    }
  },
  {
    "name": "Walnut",
    "customEmojiId": "5262592551268935593",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/walnut.svg",
      "tgs": "gifts/starnotepad/assets/models/walnut.tgs"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5262826992058788113",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/starnotepad/assets/models/watermelon.svg",
      "tgs": "gifts/starnotepad/assets/models/watermelon.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/key.png"
    }
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/serpent.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/astronaut.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/candy.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/grape.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/horn.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/mustache.png"
    }
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/obon-lantern.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Ribeye Steak",
    "customEmojiId": "5199881892693838705",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ribeye-steak.png"
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
      "png": "gifts/starnotepad/assets/patterns/rook.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sword.png"
    }
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/teru-bozu.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tie.png"
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
      "png": "gifts/starnotepad/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/warhorse.png"
    }
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/wontons.png"
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
      "png": "gifts/starnotepad/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Ancient Urn",
    "customEmojiId": "5199861697757609491",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ancient-urn.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/aztec-totem.png"
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
      "png": "gifts/starnotepad/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bastet.png"
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
      "png": "gifts/starnotepad/assets/patterns/bell-pepper.png"
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
      "png": "gifts/starnotepad/assets/patterns/boat.png"
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
      "png": "gifts/starnotepad/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bread.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/burger.png"
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
      "png": "gifts/starnotepad/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/cash.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/champagne.png"
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
      "png": "gifts/starnotepad/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/crown.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/dagger.png"
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
      "png": "gifts/starnotepad/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/elephant.png"
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
      "png": "gifts/starnotepad/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/gold.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/heater-shield.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/magic-hat.png"
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
      "png": "gifts/starnotepad/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/puzzle.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/rose.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sea-dragon.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/thunderbird.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/turtle.png"
    }
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/war-tiger.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/baby-bottle.png"
    }
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/banana.png"
    }
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/battle-axe.png"
    }
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/beer.png"
    }
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/book.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bottlenose.png"
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
      "png": "gifts/starnotepad/assets/patterns/cap.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/chili-pepper.png"
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
      "png": "gifts/starnotepad/assets/patterns/clover.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/corn.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/cow-skull.png"
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
      "png": "gifts/starnotepad/assets/patterns/crab.png"
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
      "png": "gifts/starnotepad/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/donut.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/firebird.png"
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
      "png": "gifts/starnotepad/assets/patterns/fish.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/fish-skeleton.png"
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
      "png": "gifts/starnotepad/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/genie-lamp.png"
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
      "png": "gifts/starnotepad/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ink-pen.png"
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
      "png": "gifts/starnotepad/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/koala.png"
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
      "png": "gifts/starnotepad/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/mask.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/moai-head.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/morgenstern.png"
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
      "png": "gifts/starnotepad/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/owl.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/polar-bear.png"
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
      "png": "gifts/starnotepad/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/porrige.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/potion.png"
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
      "png": "gifts/starnotepad/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ramen.png"
    }
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/rooster.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sakura-flower.png"
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
      "png": "gifts/starnotepad/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/shell.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/skull.png"
    }
  },
  {
    "name": "Sleepy Unicorn",
    "customEmojiId": "5199466646665722804",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sleepy-unicorn.png"
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
      "png": "gifts/starnotepad/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sun.png"
    }
  },
  {
    "name": "Sushi Rolls",
    "customEmojiId": "5199851312526692154",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sushi-rolls.png"
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
      "png": "gifts/starnotepad/assets/patterns/the-eye.png"
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
      "png": "gifts/starnotepad/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/trickster-fox.png"
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
      "png": "gifts/starnotepad/assets/patterns/turkey.png"
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
      "png": "gifts/starnotepad/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/viper.png"
    }
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/wagasa.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/wasp.png"
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
      "png": "gifts/starnotepad/assets/patterns/watermelon.png"
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
      "png": "gifts/starnotepad/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/all-seeing-eye.png"
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
      "png": "gifts/starnotepad/assets/patterns/axe.png"
    }
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/aztec-falcon.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ball.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bone.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/candle.png"
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
      "png": "gifts/starnotepad/assets/patterns/cobra.png"
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
      "png": "gifts/starnotepad/assets/patterns/coin.png"
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
      "png": "gifts/starnotepad/assets/patterns/cone.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/crystal.png"
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
      "png": "gifts/starnotepad/assets/patterns/cupcake.png"
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
      "png": "gifts/starnotepad/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/dice.png"
    }
  },
  {
    "name": "Doghouse",
    "customEmojiId": "5199765365936130864",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/doghouse.png"
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
      "png": "gifts/starnotepad/assets/patterns/drug.png"
    }
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/duck-face.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/egg.png"
    }
  },
  {
    "name": "Eye of Horus",
    "customEmojiId": "5199790332581021201",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/eye-of-horus.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/fire.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/full-moon.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/gamepad.png"
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
      "png": "gifts/starnotepad/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ghost.png"
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
      "png": "gifts/starnotepad/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/griffon.png"
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
      "png": "gifts/starnotepad/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/handset.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/holy-grail.png"
    }
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/hot-matcha.png"
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
      "png": "gifts/starnotepad/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/jewel.png"
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
      "png": "gifts/starnotepad/assets/patterns/kite.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/kitsune-mask.png"
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
      "png": "gifts/starnotepad/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/like.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/lion-head.png"
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
      "png": "gifts/starnotepad/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/magic-wand.png"
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
      "png": "gifts/starnotepad/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/meat-leg.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/monarch.png"
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
      "png": "gifts/starnotepad/assets/patterns/moon.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/omusubi.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/origami.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/palette.png"
    }
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/paper-lantern.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/planet.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/plum.png"
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
      "png": "gifts/starnotepad/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/radar.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/ring.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/seahorse.png"
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
      "png": "gifts/starnotepad/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sharp-sword.png"
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
      "png": "gifts/starnotepad/assets/patterns/shield.png"
    }
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/shuriken.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/spider.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/takoyaki.png"
    }
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tamagotchi.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/two-katanas.png"
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
      "png": "gifts/starnotepad/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/valkyrie.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/vortex.png"
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
      "png": "gifts/starnotepad/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/starnotepad/assets/patterns/yin-yang.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "starnotepad", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
