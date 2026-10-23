import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "6003735372041814769" as const;

export const models = [
  {
    "name": "Gold Dust",
    "customEmojiId": "5269340395862520400",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/gold-dust.svg",
      "tgs": "gifts/holidaydrink/assets/models/gold-dust.tgs"
    }
  },
  {
    "name": "Cyber Mix",
    "customEmojiId": "5269573406428266717",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/cyber-mix.svg",
      "tgs": "gifts/holidaydrink/assets/models/cyber-mix.tgs"
    }
  },
  {
    "name": "Brain Gum",
    "customEmojiId": "5267502553586758923",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/brain-gum.svg",
      "tgs": "gifts/holidaydrink/assets/models/brain-gum.tgs"
    }
  },
  {
    "name": "Depresso",
    "customEmojiId": "5269397450208078614",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/depresso.svg",
      "tgs": "gifts/holidaydrink/assets/models/depresso.tgs"
    }
  },
  {
    "name": "Honolulu",
    "customEmojiId": "5269215622767606205",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/honolulu.svg",
      "tgs": "gifts/holidaydrink/assets/models/honolulu.tgs"
    }
  },
  {
    "name": "Ogre Latte",
    "customEmojiId": "5267244954333253124",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/ogre-latte.svg",
      "tgs": "gifts/holidaydrink/assets/models/ogre-latte.tgs"
    }
  },
  {
    "name": "Pumpkin Juice",
    "customEmojiId": "5269694180908624962",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/pumpkin-juice.svg",
      "tgs": "gifts/holidaydrink/assets/models/pumpkin-juice.tgs"
    }
  },
  {
    "name": "Mermaid",
    "customEmojiId": "5269660078868295020",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/mermaid.svg",
      "tgs": "gifts/holidaydrink/assets/models/mermaid.tgs"
    }
  },
  {
    "name": "Darkside",
    "customEmojiId": "5266966159416129661",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/darkside.svg",
      "tgs": "gifts/holidaydrink/assets/models/darkside.tgs"
    }
  },
  {
    "name": "Fish Basket",
    "customEmojiId": "5269657965744385817",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/fish-basket.svg",
      "tgs": "gifts/holidaydrink/assets/models/fish-basket.tgs"
    }
  },
  {
    "name": "Lizard Blood",
    "customEmojiId": "5269680797790536838",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/lizard-blood.svg",
      "tgs": "gifts/holidaydrink/assets/models/lizard-blood.tgs"
    }
  },
  {
    "name": "Milky Way",
    "customEmojiId": "5267373910726310340",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/milky-way.svg",
      "tgs": "gifts/holidaydrink/assets/models/milky-way.tgs"
    }
  },
  {
    "name": "Emo Drip",
    "customEmojiId": "5269330143775581761",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/emo-drip.svg",
      "tgs": "gifts/holidaydrink/assets/models/emo-drip.tgs"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5267076759118970787",
    "rarityPermille": 9,
    "originalRarityPermille": 9,
    "rarity": 0.9,
    "originalRarity": 0.9,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/leprechaun.svg",
      "tgs": "gifts/holidaydrink/assets/models/leprechaun.tgs"
    }
  },
  {
    "name": "Checkmate",
    "customEmojiId": "5269736782689238253",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/checkmate.svg",
      "tgs": "gifts/holidaydrink/assets/models/checkmate.tgs"
    }
  },
  {
    "name": "Toxic Waste",
    "customEmojiId": "5269760692772173809",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/toxic-waste.svg",
      "tgs": "gifts/holidaydrink/assets/models/toxic-waste.tgs"
    }
  },
  {
    "name": "Area 51",
    "customEmojiId": "5267138434849342387",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/area-51.svg",
      "tgs": "gifts/holidaydrink/assets/models/area-51.tgs"
    }
  },
  {
    "name": "Blue Taser",
    "customEmojiId": "5269563596722962280",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/blue-taser.svg",
      "tgs": "gifts/holidaydrink/assets/models/blue-taser.tgs"
    }
  },
  {
    "name": "Bowser Brew",
    "customEmojiId": "5267363345106763684",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/bowser-brew.svg",
      "tgs": "gifts/holidaydrink/assets/models/bowser-brew.tgs"
    }
  },
  {
    "name": "Mr. Freeze",
    "customEmojiId": "5269694971182610428",
    "rarityPermille": 13,
    "originalRarityPermille": 13,
    "rarity": 1.3,
    "originalRarity": 1.3,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/mr-freeze.svg",
      "tgs": "gifts/holidaydrink/assets/models/mr-freeze.tgs"
    }
  },
  {
    "name": "Crystal Shot",
    "customEmojiId": "5269423142702445845",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/crystal-shot.svg",
      "tgs": "gifts/holidaydrink/assets/models/crystal-shot.tgs"
    }
  },
  {
    "name": "Cubism",
    "customEmojiId": "5269682266669347979",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/cubism.svg",
      "tgs": "gifts/holidaydrink/assets/models/cubism.tgs"
    }
  },
  {
    "name": "Fire Chariot",
    "customEmojiId": "5269740115583860199",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/fire-chariot.svg",
      "tgs": "gifts/holidaydrink/assets/models/fire-chariot.tgs"
    }
  },
  {
    "name": "Flaming B-52",
    "customEmojiId": "5269403428802559105",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/flaming-b-52.svg",
      "tgs": "gifts/holidaydrink/assets/models/flaming-b-52.tgs"
    }
  },
  {
    "name": "Love Potion",
    "customEmojiId": "5269419298706715713",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/love-potion.svg",
      "tgs": "gifts/holidaydrink/assets/models/love-potion.tgs"
    }
  },
  {
    "name": "Lucid Roast",
    "customEmojiId": "5269490135602325283",
    "rarityPermille": 14,
    "originalRarityPermille": 14,
    "rarity": 1.4,
    "originalRarity": 1.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/lucid-roast.svg",
      "tgs": "gifts/holidaydrink/assets/models/lucid-roast.tgs"
    }
  },
  {
    "name": "Candyman",
    "customEmojiId": "5267075900125510234",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/candyman.svg",
      "tgs": "gifts/holidaydrink/assets/models/candyman.tgs"
    }
  },
  {
    "name": "Stickers",
    "customEmojiId": null,
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/stickers.svg",
      "tgs": "gifts/holidaydrink/assets/models/stickers.tgs"
    }
  },
  {
    "name": "Berry Pixel",
    "customEmojiId": "5267160150203987646",
    "rarityPermille": 16,
    "originalRarityPermille": 16,
    "rarity": 1.6,
    "originalRarity": 1.6,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/berry-pixel.svg",
      "tgs": "gifts/holidaydrink/assets/models/berry-pixel.tgs"
    }
  },
  {
    "name": "Peach Latte",
    "customEmojiId": "5269756372035072686",
    "rarityPermille": 17,
    "originalRarityPermille": 17,
    "rarity": 1.7,
    "originalRarity": 1.7,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/peach-latte.svg",
      "tgs": "gifts/holidaydrink/assets/models/peach-latte.tgs"
    }
  },
  {
    "name": "Low Poly",
    "customEmojiId": "5267233804598148550",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/low-poly.svg",
      "tgs": "gifts/holidaydrink/assets/models/low-poly.tgs"
    }
  },
  {
    "name": "Kiwi Box",
    "customEmojiId": "5269697530983115685",
    "rarityPermille": 19,
    "originalRarityPermille": 19,
    "rarity": 1.9,
    "originalRarity": 1.9,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/kiwi-box.svg",
      "tgs": "gifts/holidaydrink/assets/models/kiwi-box.tgs"
    }
  },
  {
    "name": "Orange Ghost",
    "customEmojiId": "5266965029839731083",
    "rarityPermille": 24,
    "originalRarityPermille": 24,
    "rarity": 2.4,
    "originalRarity": 2.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/orange-ghost.svg",
      "tgs": "gifts/holidaydrink/assets/models/orange-ghost.tgs"
    }
  },
  {
    "name": "Hot Fuchsia",
    "customEmojiId": "5269693016972487081",
    "rarityPermille": 26,
    "originalRarityPermille": 26,
    "rarity": 2.6,
    "originalRarity": 2.6,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/hot-fuchsia.svg",
      "tgs": "gifts/holidaydrink/assets/models/hot-fuchsia.tgs"
    }
  },
  {
    "name": "Cotton Candy",
    "customEmojiId": "5267463319060511567",
    "rarityPermille": 27,
    "originalRarityPermille": 27,
    "rarity": 2.7,
    "originalRarity": 2.7,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/cotton-candy.svg",
      "tgs": "gifts/holidaydrink/assets/models/cotton-candy.tgs"
    }
  },
  {
    "name": "Honeyfire",
    "customEmojiId": "5267312398204699458",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/honeyfire.svg",
      "tgs": "gifts/holidaydrink/assets/models/honeyfire.tgs"
    }
  },
  {
    "name": "Ginger Joker",
    "customEmojiId": "5269477173391029102",
    "rarityPermille": 31,
    "originalRarityPermille": 31,
    "rarity": 3.1,
    "originalRarity": 3.1,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/ginger-joker.svg",
      "tgs": "gifts/holidaydrink/assets/models/ginger-joker.tgs"
    }
  },
  {
    "name": "Matcha",
    "customEmojiId": "5269769944131728569",
    "rarityPermille": 32,
    "originalRarityPermille": 32,
    "rarity": 3.2,
    "originalRarity": 3.2,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/matcha.svg",
      "tgs": "gifts/holidaydrink/assets/models/matcha.tgs"
    }
  },
  {
    "name": "Hibiscus Tea",
    "customEmojiId": "5269262742853810364",
    "rarityPermille": 33,
    "originalRarityPermille": 33,
    "rarity": 3.3,
    "originalRarity": 3.3,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/hibiscus-tea.svg",
      "tgs": "gifts/holidaydrink/assets/models/hibiscus-tea.tgs"
    }
  },
  {
    "name": "Lavender Tea",
    "customEmojiId": "5267100643432102521",
    "rarityPermille": 34,
    "originalRarityPermille": 34,
    "rarity": 3.4,
    "originalRarity": 3.4,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/lavender-tea.svg",
      "tgs": "gifts/holidaydrink/assets/models/lavender-tea.tgs"
    }
  },
  {
    "name": "Moonberry",
    "customEmojiId": "5269440099233330242",
    "rarityPermille": 35,
    "originalRarityPermille": 35,
    "rarity": 3.5,
    "originalRarity": 3.5,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/moonberry.svg",
      "tgs": "gifts/holidaydrink/assets/models/moonberry.tgs"
    }
  },
  {
    "name": "Marigold",
    "customEmojiId": "5267026958973174940",
    "rarityPermille": 36,
    "originalRarityPermille": 36,
    "rarity": 3.6,
    "originalRarity": 3.6,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/marigold.svg",
      "tgs": "gifts/holidaydrink/assets/models/marigold.tgs"
    }
  },
  {
    "name": "Citrus",
    "customEmojiId": "5267234006461609610",
    "rarityPermille": 37,
    "originalRarityPermille": 37,
    "rarity": 3.7,
    "originalRarity": 3.7,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/citrus.svg",
      "tgs": "gifts/holidaydrink/assets/models/citrus.tgs"
    }
  },
  {
    "name": "Bubblegum",
    "customEmojiId": "5267017329656493677",
    "rarityPermille": 39,
    "originalRarityPermille": 39,
    "rarity": 3.9,
    "originalRarity": 3.9,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/bubblegum.svg",
      "tgs": "gifts/holidaydrink/assets/models/bubblegum.tgs"
    }
  },
  {
    "name": "Choco Mint",
    "customEmojiId": "5269300053234712159",
    "rarityPermille": 45,
    "originalRarityPermille": 45,
    "rarity": 4.5,
    "originalRarity": 4.5,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/choco-mint.svg",
      "tgs": "gifts/holidaydrink/assets/models/choco-mint.tgs"
    }
  },
  {
    "name": "Black Russian",
    "customEmojiId": "5267485262048426365",
    "rarityPermille": 47,
    "originalRarityPermille": 47,
    "rarity": 4.7,
    "originalRarity": 4.7,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/black-russian.svg",
      "tgs": "gifts/holidaydrink/assets/models/black-russian.tgs"
    }
  },
  {
    "name": "Rose Velvet",
    "customEmojiId": "5269425298776025077",
    "rarityPermille": 48,
    "originalRarityPermille": 48,
    "rarity": 4.8,
    "originalRarity": 4.8,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/rose-velvet.svg",
      "tgs": "gifts/holidaydrink/assets/models/rose-velvet.tgs"
    }
  },
  {
    "name": "Banana Split",
    "customEmojiId": "5269536216306447589",
    "rarityPermille": 49,
    "originalRarityPermille": 49,
    "rarity": 4.9,
    "originalRarity": 4.9,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/banana-split.svg",
      "tgs": "gifts/holidaydrink/assets/models/banana-split.tgs"
    }
  },
  {
    "name": "Mango Blast",
    "customEmojiId": "5267421894100941882",
    "rarityPermille": 49,
    "originalRarityPermille": 49,
    "rarity": 4.9,
    "originalRarity": 4.9,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/mango-blast.svg",
      "tgs": "gifts/holidaydrink/assets/models/mango-blast.tgs"
    }
  },
  {
    "name": "Apple Mousse",
    "customEmojiId": "5267100875360336185",
    "rarityPermille": 50,
    "originalRarityPermille": 50,
    "rarity": 5,
    "originalRarity": 5,
    "assets": {
      "svg": "gifts/holidaydrink/assets/models/apple-mousse.svg",
      "tgs": "gifts/holidaydrink/assets/models/apple-mousse.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/astronaut.png"
    }
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/aztec-falcon.png"
    }
  },
  {
    "name": "Bascinet",
    "customEmojiId": "5199688421597022189",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bascinet.png"
    }
  },
  {
    "name": "Basketball",
    "customEmojiId": "5199728789994637327",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/basketball.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bee.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/book.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bowler-hat.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/cactus.png"
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
      "png": "gifts/holidaydrink/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/corn.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/donut.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Elf Hat",
    "customEmojiId": "5199596066915260460",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/elf-hat.png"
    }
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/fedora.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/hot-matcha.png"
    }
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/hourglass.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/like.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/magic-hat.png"
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
      "png": "gifts/holidaydrink/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/novus-ordo.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/pirate-scull.png"
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
      "png": "gifts/holidaydrink/assets/patterns/plum.png"
    }
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/plume-shako.png"
    }
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/press-hat.png"
    }
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/radar.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/rose.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Shako",
    "customEmojiId": "5199855955386337078",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/shako.png"
    }
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/shuriken.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Spring Chick",
    "customEmojiId": "5199834257211559421",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/spring-chick.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Straw Hat",
    "customEmojiId": "5199475953859857051",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/straw-hat.png"
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
      "png": "gifts/holidaydrink/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Thor Hammer",
    "customEmojiId": "5199857621833649230",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/thor-hammer.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/viking.png"
    }
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/wagasa.png"
    }
  },
  {
    "name": "Winter Hat",
    "customEmojiId": "5199676112220754626",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/winter-hat.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/wise-raven.png"
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
      "png": "gifts/holidaydrink/assets/patterns/bandage.png"
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
      "png": "gifts/holidaydrink/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Beret",
    "customEmojiId": "5199710124066771918",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/beret.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/black-cat.png"
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
      "png": "gifts/holidaydrink/assets/patterns/bottle.png"
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
      "png": "gifts/holidaydrink/assets/patterns/bunny.png"
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
      "png": "gifts/holidaydrink/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/coonskin-cap.png"
    }
  },
  {
    "name": "Cricket Helmet",
    "customEmojiId": "5199841202173676889",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/cricket-helmet.png"
    }
  },
  {
    "name": "Deerstalker",
    "customEmojiId": "5199479669006568749",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/deerstalker.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/duck-face.png"
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
      "png": "gifts/holidaydrink/assets/patterns/evil-dragon.png"
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
      "png": "gifts/holidaydrink/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/fishing-hook.png"
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
      "png": "gifts/holidaydrink/assets/patterns/galaxy.png"
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
      "png": "gifts/holidaydrink/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/horn.png"
    }
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/keffiyeh.png"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/leprechaun.png"
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
      "png": "gifts/holidaydrink/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/maple-leaf.png"
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
      "png": "gifts/holidaydrink/assets/patterns/money-bag.png"
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
      "png": "gifts/holidaydrink/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/pear.png"
    }
  },
  {
    "name": "Piranha",
    "customEmojiId": "5199947034462818715",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/piranha.png"
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
      "png": "gifts/holidaydrink/assets/patterns/police-badge.png"
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
      "png": "gifts/holidaydrink/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/rook.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/thunderbird.png"
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
      "png": "gifts/holidaydrink/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Wizard Hat",
    "customEmojiId": "5199659452042611516",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/wizard-hat.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/yin-yang.png"
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
      "png": "gifts/holidaydrink/assets/patterns/apple.png"
    }
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bamboo.png"
    }
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/baseball-cap.png"
    }
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Bicorne",
    "customEmojiId": "5199462042460782106",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bicorne.png"
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
      "png": "gifts/holidaydrink/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/chick.png"
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
      "png": "gifts/holidaydrink/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Conical Hat",
    "customEmojiId": "5199648817703584324",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/conical-hat.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/crescent.png"
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
      "png": "gifts/holidaydrink/assets/patterns/croissant.png"
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
      "png": "gifts/holidaydrink/assets/patterns/crown.png"
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
      "png": "gifts/holidaydrink/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Divine Falcon",
    "customEmojiId": "5199678478747732305",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/divine-falcon.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/dolphin.png"
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
      "png": "gifts/holidaydrink/assets/patterns/drug.png"
    }
  },
  {
    "name": "Earth",
    "customEmojiId": "5199963814900042040",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/earth.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/feather.png"
    }
  },
  {
    "name": "Flat Cap",
    "customEmojiId": "5199424302583155767",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/flat-cap.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/flower-tulip.png"
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
      "png": "gifts/holidaydrink/assets/patterns/flying-dragon.png"
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
      "png": "gifts/holidaydrink/assets/patterns/ghost.png"
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
      "png": "gifts/holidaydrink/assets/patterns/gold.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/guitar.png"
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
      "png": "gifts/holidaydrink/assets/patterns/handset.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/hedgehog.png"
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
      "png": "gifts/holidaydrink/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/inguz-rune.png"
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
      "png": "gifts/holidaydrink/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/kudu-totem.png"
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
      "png": "gifts/holidaydrink/assets/patterns/lion-head.png"
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
      "png": "gifts/holidaydrink/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/maple.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/mayan-moth.png"
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
      "png": "gifts/holidaydrink/assets/patterns/moon.png"
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
      "png": "gifts/holidaydrink/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/morgenstern.png"
    }
  },
  {
    "name": "Moto Helmet",
    "customEmojiId": "5199939002873972654",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/moto-helmet.png"
    }
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/nemes.png"
    }
  },
  {
    "name": "Party Hat",
    "customEmojiId": "5199420192299454140",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/party-hat.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/pickaxe.png"
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
      "png": "gifts/holidaydrink/assets/patterns/plume.png"
    }
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/propeller-cap.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/sailor-hat.png"
    }
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/serpent.png"
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
      "png": "gifts/holidaydrink/assets/patterns/sharp-sword.png"
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
      "png": "gifts/holidaydrink/assets/patterns/shield.png"
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
      "png": "gifts/holidaydrink/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/sun.png"
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
      "png": "gifts/holidaydrink/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/turban.png"
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
      "png": "gifts/holidaydrink/assets/patterns/turtle.png"
    }
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/war-bonnet.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/watching-sun.png"
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
      "png": "gifts/holidaydrink/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/bowtie.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/candle.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/cookie.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/snowman.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/star.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/candy.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/mistletoe.png"
    }
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/snowflake.png"
    }
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/stocking.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/chest.png"
    }
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/christmas-tree.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/festive-wreath.png"
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
      "png": "gifts/holidaydrink/assets/patterns/fireworks.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/gift-box.png"
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
      "png": "gifts/holidaydrink/assets/patterns/hot-drink.png"
    }
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/ice-skates.png"
    }
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/jingle-bell.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/mittens.png"
    }
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null,
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/new-year-s-eve.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/nordic-wolf.png"
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
      "png": "gifts/holidaydrink/assets/patterns/ornament.png"
    }
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/rudolph.png"
    }
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/santa-hat.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/holidaydrink/assets/patterns/shooting-star.png"
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
      "png": "gifts/holidaydrink/assets/patterns/snow-angel.png"
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
      "png": "gifts/holidaydrink/assets/patterns/winter-house.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/60b195-46abb4-circle.svg",
      "squareSvg": "assets/backdrops/60b195-46abb4-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/be6f54-994838-circle.svg",
      "squareSvg": "assets/backdrops/be6f54-994838-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/858ff3-865fd3-circle.svg",
      "squareSvg": "assets/backdrops/858ff3-865fd3-square.svg"
    }
  },
  {
    "name": "Dark Green",
    "backdropId": 63,
    "customEmojiId": "5375600953372209854",
    "centerColor": 5333825,
    "edgeColor": 2835759,
    "patternColor": 1281,
    "textColor": 12571049,
    "hex": {
      "centerColor": "#516341",
      "edgeColor": "#2b452f",
      "patternColor": "#000501",
      "textColor": "#bfd1a9"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/516341-2b452f-circle.svg",
      "squareSvg": "assets/backdrops/516341-2b452f-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/b17da5-8c577a-circle.svg",
      "squareSvg": "assets/backdrops/b17da5-8c577a-square.svg"
    }
  },
  {
    "name": "Deep Cyan",
    "backdropId": 70,
    "customEmojiId": "5377423312290868137",
    "centerColor": 3257770,
    "edgeColor": 1611161,
    "patternColor": 20303,
    "textColor": 13762557,
    "hex": {
      "centerColor": "#31b5aa",
      "edgeColor": "#189599",
      "patternColor": "#004f4f",
      "textColor": "#d1fffd"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/31b5aa-189599-circle.svg",
      "squareSvg": "assets/backdrops/31b5aa-189599-square.svg"
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
    "name": "Gunship Green",
    "backdropId": 62,
    "customEmojiId": "5375121566302501587",
    "centerColor": 5605989,
    "edgeColor": 4023895,
    "patternColor": 468509,
    "textColor": 11919572,
    "hex": {
      "centerColor": "#558a65",
      "edgeColor": "#3d6657",
      "patternColor": "#07261d",
      "textColor": "#b5e0d4"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/558a65-3d6657-circle.svg",
      "squareSvg": "assets/backdrops/558a65-3d6657-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/bab6b1-a19d97-circle.svg",
      "squareSvg": "assets/backdrops/bab6b1-a19d97-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/7eb1b4-588390-circle.svg",
      "squareSvg": "assets/backdrops/7eb1b4-588390-square.svg"
    }
  },
  {
    "name": "Mustard",
    "backdropId": 78,
    "customEmojiId": "5375113225476008176",
    "centerColor": 13932557,
    "edgeColor": 12875538,
    "patternColor": 8004864,
    "textColor": 16768668,
    "hex": {
      "centerColor": "#d4980d",
      "edgeColor": "#c47712",
      "patternColor": "#7a2500",
      "textColor": "#ffde9c"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/d4980d-c47712-circle.svg",
      "squareSvg": "assets/backdrops/d4980d-c47712-square.svg"
    }
  },
  {
    "name": "Old Gold",
    "backdropId": 75,
    "customEmojiId": "5375123404548499298",
    "centerColor": 11898168,
    "edgeColor": 9726245,
    "patternColor": 5190402,
    "textColor": 16768396,
    "hex": {
      "centerColor": "#b58d38",
      "edgeColor": "#946925",
      "patternColor": "#4f3302",
      "textColor": "#ffdd8c"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/b58d38-946925-circle.svg",
      "squareSvg": "assets/backdrops/b58d38-946925-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/4d5254-313638-circle.svg",
      "squareSvg": "assets/backdrops/4d5254-313638-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/d19a3a-c06f47-circle.svg",
      "squareSvg": "assets/backdrops/d19a3a-c06f47-square.svg"
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
    "name": "Rifle Green",
    "backdropId": 65,
    "customEmojiId": "5377619347483158640",
    "centerColor": 6580572,
    "edgeColor": 4936257,
    "patternColor": 987659,
    "textColor": 12830653,
    "hex": {
      "centerColor": "#64695c",
      "edgeColor": "#4b5241",
      "patternColor": "#0f120b",
      "textColor": "#c3c7bd"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/64695c-4b5241-circle.svg",
      "squareSvg": "assets/backdrops/64695c-4b5241-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/b77a77-814c52-circle.svg",
      "squareSvg": "assets/backdrops/b77a77-814c52-square.svg"
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/80a4b8-607c91-circle.svg",
      "squareSvg": "assets/backdrops/80a4b8-607c91-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/5db1cb-448bab-circle.svg",
      "squareSvg": "assets/backdrops/5db1cb-448bab-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/8c8c85-6c6c66-circle.svg",
      "squareSvg": "assets/backdrops/8c8c85-6c6c66-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/a35e66-6d414a-circle.svg",
      "squareSvg": "assets/backdrops/a35e66-6d414a-square.svg"
    }
  },
  {
    "name": "Camo Green",
    "backdropId": 67,
    "customEmojiId": "5375411489479878975",
    "centerColor": 7705677,
    "edgeColor": 5534529,
    "patternColor": 1455873,
    "textColor": 13625529,
    "hex": {
      "centerColor": "#75944d",
      "edgeColor": "#547341",
      "patternColor": "#163701",
      "textColor": "#cfe8b9"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/75944d-547341-circle.svg",
      "squareSvg": "assets/backdrops/75944d-547341-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/d09932-b77431-circle.svg",
      "squareSvg": "assets/backdrops/d09932-b77431-square.svg"
    }
  },
  {
    "name": "Carmine",
    "backdropId": 77,
    "customEmojiId": "5375573362502298464",
    "centerColor": 14702410,
    "edgeColor": 11024443,
    "patternColor": 5177600,
    "textColor": 16758701,
    "hex": {
      "centerColor": "#e0574a",
      "edgeColor": "#a8383b",
      "patternColor": "#4f0100",
      "textColor": "#ffb7ad"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/e0574a-a8383b-circle.svg",
      "squareSvg": "assets/backdrops/e0574a-a8383b-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/db9867-c76f4f-circle.svg",
      "squareSvg": "assets/backdrops/db9867-c76f4f-square.svg"
    }
  },
  {
    "name": "Celtic Blue",
    "backdropId": 74,
    "customEmojiId": "5375186931409777211",
    "centerColor": 4569325,
    "edgeColor": 3704537,
    "patternColor": 16005,
    "textColor": 12773375,
    "hex": {
      "centerColor": "#45b8ed",
      "edgeColor": "#3886d9",
      "patternColor": "#003e85",
      "textColor": "#c2e7ff"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/45b8ed-3886d9-circle.svg",
      "squareSvg": "assets/backdrops/45b8ed-3886d9-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/ca70c6-9662d4-circle.svg",
      "squareSvg": "assets/backdrops/ca70c6-9662d4-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/78c585-42a171-circle.svg",
      "squareSvg": "assets/backdrops/78c585-42a171-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/e28ab6-a4588b-circle.svg",
      "squareSvg": "assets/backdrops/e28ab6-a4588b-square.svg"
    }
  },
  {
    "name": "Feldgrau",
    "backdropId": 68,
    "customEmojiId": "5375107384320485908",
    "centerColor": 9015944,
    "edgeColor": 6187875,
    "patternColor": 1844767,
    "textColor": 14608865,
    "hex": {
      "centerColor": "#899288",
      "edgeColor": "#5e6b63",
      "patternColor": "#1c261f",
      "textColor": "#dee9e1"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/899288-5e6b63-circle.svg",
      "squareSvg": "assets/backdrops/899288-5e6b63-square.svg"
    }
  },
  {
    "name": "Fire Engine",
    "backdropId": 73,
    "customEmojiId": "5375497006573710335",
    "centerColor": 15753039,
    "edgeColor": 12859721,
    "patternColor": 6881289,
    "textColor": 16758694,
    "hex": {
      "centerColor": "#f05f4f",
      "edgeColor": "#c43949",
      "patternColor": "#690009",
      "textColor": "#ffb7a6"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/f05f4f-c43949-circle.svg",
      "squareSvg": "assets/backdrops/f05f4f-c43949-square.svg"
    }
  },
  {
    "name": "French Violet",
    "backdropId": 79,
    "customEmojiId": "5377583218218262703",
    "centerColor": 12738790,
    "edgeColor": 9522905,
    "patternColor": 4850058,
    "textColor": 15452159,
    "hex": {
      "centerColor": "#c260e6",
      "edgeColor": "#914ed9",
      "patternColor": "#4a018a",
      "textColor": "#ebc7ff"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/c260e6-914ed9-circle.svg",
      "squareSvg": "assets/backdrops/c260e6-914ed9-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/9d74c1-794da0-circle.svg",
      "squareSvg": "assets/backdrops/9d74c1-794da0-square.svg"
    }
  },
  {
    "name": "Gunmetal",
    "backdropId": 69,
    "customEmojiId": "5375182267075292360",
    "centerColor": 5004643,
    "edgeColor": 3095362,
    "patternColor": 264202,
    "textColor": 11978188,
    "hex": {
      "centerColor": "#4c5d63",
      "edgeColor": "#2f3b42",
      "patternColor": "#04080a",
      "textColor": "#b6c5cc"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/4c5d63-2f3b42-circle.svg",
      "squareSvg": "assets/backdrops/4c5d63-2f3b42-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/b789e4-8a5abc-circle.svg",
      "squareSvg": "assets/backdrops/b789e4-8a5abc-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/aeb85a-559345-circle.svg",
      "squareSvg": "assets/backdrops/aeb85a-559345-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/c2af64-887e45-circle.svg",
      "squareSvg": "assets/backdrops/c2af64-887e45-square.svg"
    }
  },
  {
    "name": "Mexican Pink",
    "backdropId": 71,
    "customEmojiId": "5375494846205161879",
    "centerColor": 14902930,
    "edgeColor": 13191548,
    "patternColor": 7668272,
    "textColor": 16766694,
    "hex": {
      "centerColor": "#e36692",
      "edgeColor": "#c9497c",
      "patternColor": "#750230",
      "textColor": "#ffd6e6"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/e36692-c9497c-circle.svg",
      "squareSvg": "assets/backdrops/e36692-c9497c-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/7596f9-6862e4-circle.svg",
      "squareSvg": "assets/backdrops/7596f9-6862e4-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/b2aea7-88847e-circle.svg",
      "squareSvg": "assets/backdrops/b2aea7-88847e-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/e07b85-b65980-circle.svg",
      "squareSvg": "assets/backdrops/e07b85-b65980-square.svg"
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/97a2ac-63727c-circle.svg",
      "squareSvg": "assets/backdrops/97a2ac-63727c-square.svg"
    }
  },
  {
    "name": "Tactical Pine",
    "backdropId": 61,
    "customEmojiId": "5375347412862793082",
    "centerColor": 4489835,
    "edgeColor": 3105641,
    "patternColor": 9764,
    "textColor": 12052179,
    "hex": {
      "centerColor": "#44826b",
      "edgeColor": "#2f6369",
      "patternColor": "#002624",
      "textColor": "#b7e6d3"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/44826b-2f6369-circle.svg",
      "squareSvg": "assets/backdrops/44826b-2f6369-square.svg"
    }
  },
  {
    "name": "Tomato",
    "backdropId": 72,
    "customEmojiId": "5377723259921916635",
    "centerColor": 15104318,
    "edgeColor": 13913663,
    "patternColor": 8391424,
    "textColor": 16764093,
    "hex": {
      "centerColor": "#e6793e",
      "edgeColor": "#d44e3f",
      "patternColor": "#800b00",
      "textColor": "#ffccbd"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/e6793e-d44e3f-circle.svg",
      "squareSvg": "assets/backdrops/e6793e-d44e3f-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/dab345-b1802a-circle.svg",
      "squareSvg": "assets/backdrops/dab345-b1802a-square.svg"
    }
  },
  {
    "name": "Burnt Sienna",
    "backdropId": 76,
    "customEmojiId": "5377680275889219155",
    "centerColor": 14053180,
    "edgeColor": 11881261,
    "patternColor": 7014658,
    "textColor": 16764080,
    "hex": {
      "centerColor": "#d66f3c",
      "edgeColor": "#b54b2d",
      "patternColor": "#6b0902",
      "textColor": "#ffccb0"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/d66f3c-b54b2d-circle.svg",
      "squareSvg": "assets/backdrops/d66f3c-b54b2d-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/5c9bc4-37739a-circle.svg",
      "squareSvg": "assets/backdrops/5c9bc4-37739a-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/adb070-6b7d54-circle.svg",
      "squareSvg": "assets/backdrops/adb070-6b7d54-square.svg"
    }
  },
  {
    "name": "Marine Blue",
    "backdropId": 60,
    "customEmojiId": "5375439277918288314",
    "centerColor": 5138588,
    "edgeColor": 3885946,
    "patternColor": 67617,
    "textColor": 12307442,
    "hex": {
      "centerColor": "#4e689c",
      "edgeColor": "#3b4b7a",
      "patternColor": "#010821",
      "textColor": "#bbcbf2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/4e689c-3b4b7a-circle.svg",
      "squareSvg": "assets/backdrops/4e689c-3b4b7a-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/5abea6-3d95ba-circle.svg",
      "squareSvg": "assets/backdrops/5abea6-3d95ba-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/97b07c-5c814c-circle.svg",
      "squareSvg": "assets/backdrops/97b07c-5c814c-square.svg"
    }
  },
  {
    "name": "Ranger Green",
    "backdropId": 66,
    "customEmojiId": "5375074549295510665",
    "centerColor": 6256713,
    "edgeColor": 3952443,
    "patternColor": 1057289,
    "textColor": 12043445,
    "hex": {
      "centerColor": "#5f7849",
      "edgeColor": "#3c4f3b",
      "patternColor": "#102209",
      "textColor": "#b7c4b5"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/5f7849-3c4f3b-circle.svg",
      "squareSvg": "assets/backdrops/5f7849-3c4f3b-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/58a3c8-5379c2-circle.svg",
      "squareSvg": "assets/backdrops/58a3c8-5379c2-square.svg"
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
    "name": "Seal Brown",
    "backdropId": 64,
    "customEmojiId": "5375269034004608036",
    "centerColor": 6704453,
    "edgeColor": 4666926,
    "patternColor": 656901,
    "textColor": 13941941,
    "hex": {
      "centerColor": "#664d45",
      "edgeColor": "#47362e",
      "patternColor": "#0a0605",
      "textColor": "#d4bcb5"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/664d45-47362e-circle.svg",
      "squareSvg": "assets/backdrops/664d45-47362e-square.svg"
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/8ab163-559345-circle.svg",
      "squareSvg": "assets/backdrops/8ab163-559345-square.svg"
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
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "holidaydrink", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
