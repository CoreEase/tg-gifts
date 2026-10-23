import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5783075783622787539" as const;

export const models = [
  {
    "name": "Birthday",
    "customEmojiId": "5456617746110372885",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/birthday.svg",
      "tgs": "gifts/homemadecake/assets/models/birthday.tgs"
    }
  },
  {
    "name": "Blue Depth",
    "customEmojiId": "5456165451694365450",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/blue-depth.svg",
      "tgs": "gifts/homemadecake/assets/models/blue-depth.tgs"
    }
  },
  {
    "name": "Bonecake",
    "customEmojiId": "5454411915331664910",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/bonecake.svg",
      "tgs": "gifts/homemadecake/assets/models/bonecake.tgs"
    }
  },
  {
    "name": "Candy Cane",
    "customEmojiId": "5456420504032274213",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/candy-cane.svg",
      "tgs": "gifts/homemadecake/assets/models/candy-cane.tgs"
    }
  },
  {
    "name": "Cherry Kiss",
    "customEmojiId": "5453863628396584658",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cherry-kiss.svg",
      "tgs": "gifts/homemadecake/assets/models/cherry-kiss.tgs"
    }
  },
  {
    "name": "Fire Blast",
    "customEmojiId": "5454142337414357985",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/fire-blast.svg",
      "tgs": "gifts/homemadecake/assets/models/fire-blast.tgs"
    }
  },
  {
    "name": "Frosty",
    "customEmojiId": "5456566232272625087",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/frosty.svg",
      "tgs": "gifts/homemadecake/assets/models/frosty.tgs"
    }
  },
  {
    "name": "Interstellar",
    "customEmojiId": "5454057146738040652",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/interstellar.svg",
      "tgs": "gifts/homemadecake/assets/models/interstellar.tgs"
    }
  },
  {
    "name": "Toxicake",
    "customEmojiId": "5454317778238465059",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/toxicake.svg",
      "tgs": "gifts/homemadecake/assets/models/toxicake.tgs"
    }
  },
  {
    "name": "Volcano",
    "customEmojiId": "5454172518149546175",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/volcano.svg",
      "tgs": "gifts/homemadecake/assets/models/volcano.tgs"
    }
  },
  {
    "name": "Berry Сrown",
    "customEmojiId": "5454159298240208123",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/berry-rown.svg",
      "tgs": "gifts/homemadecake/assets/models/berry-rown.tgs"
    }
  },
  {
    "name": "Best Wishes",
    "customEmojiId": "5456357818984590046",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/best-wishes.svg",
      "tgs": "gifts/homemadecake/assets/models/best-wishes.tgs"
    }
  },
  {
    "name": "Cheesecake",
    "customEmojiId": "5454088126337147218",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cheesecake.svg",
      "tgs": "gifts/homemadecake/assets/models/cheesecake.tgs"
    }
  },
  {
    "name": "Cherry Cake",
    "customEmojiId": "5456250758334800593",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cherry-cake.svg",
      "tgs": "gifts/homemadecake/assets/models/cherry-cake.tgs"
    }
  },
  {
    "name": "Cream Pie",
    "customEmojiId": "5453912698397940403",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cream-pie.svg",
      "tgs": "gifts/homemadecake/assets/models/cream-pie.tgs"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5453865273369059999",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/diamond.svg",
      "tgs": "gifts/homemadecake/assets/models/diamond.tgs"
    }
  },
  {
    "name": "Honey Cake",
    "customEmojiId": "5456536176091487511",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/honey-cake.svg",
      "tgs": "gifts/homemadecake/assets/models/honey-cake.tgs"
    }
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5454160831543532911",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/ice-cream.svg",
      "tgs": "gifts/homemadecake/assets/models/ice-cream.tgs"
    }
  },
  {
    "name": "Jelly Fantasy",
    "customEmojiId": "5456234665092342556",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/jelly-fantasy.svg",
      "tgs": "gifts/homemadecake/assets/models/jelly-fantasy.tgs"
    }
  },
  {
    "name": "Jellycious",
    "customEmojiId": "5454146653856487950",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/jellycious.svg",
      "tgs": "gifts/homemadecake/assets/models/jellycious.tgs"
    }
  },
  {
    "name": "Just A Slice",
    "customEmojiId": "5454218886616473998",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/just-a-slice.svg",
      "tgs": "gifts/homemadecake/assets/models/just-a-slice.tgs"
    }
  },
  {
    "name": "Luigi Cake",
    "customEmojiId": "5456463148762555013",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/luigi-cake.svg",
      "tgs": "gifts/homemadecake/assets/models/luigi-cake.tgs"
    }
  },
  {
    "name": "Mario Cake",
    "customEmojiId": "5454092189376209296",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/mario-cake.svg",
      "tgs": "gifts/homemadecake/assets/models/mario-cake.tgs"
    }
  },
  {
    "name": "Meadow",
    "customEmojiId": "5456161556159030344",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/meadow.svg",
      "tgs": "gifts/homemadecake/assets/models/meadow.tgs"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5456382437737129157",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/mistletoe.svg",
      "tgs": "gifts/homemadecake/assets/models/mistletoe.tgs"
    }
  },
  {
    "name": "Naughty",
    "customEmojiId": "5454404240225099876",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/naughty.svg",
      "tgs": "gifts/homemadecake/assets/models/naughty.tgs"
    }
  },
  {
    "name": "Paradise",
    "customEmojiId": "5456449864428709270",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/paradise.svg",
      "tgs": "gifts/homemadecake/assets/models/paradise.tgs"
    }
  },
  {
    "name": "Premium",
    "customEmojiId": "5456598423052509597",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/premium.svg",
      "tgs": "gifts/homemadecake/assets/models/premium.tgs"
    }
  },
  {
    "name": "Rainbow Glow",
    "customEmojiId": "5456241635824265020",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/rainbow-glow.svg",
      "tgs": "gifts/homemadecake/assets/models/rainbow-glow.tgs"
    }
  },
  {
    "name": "Red Pearl",
    "customEmojiId": "5454286669790337742",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/red-pearl.svg",
      "tgs": "gifts/homemadecake/assets/models/red-pearl.tgs"
    }
  },
  {
    "name": "Red Velvet",
    "customEmojiId": "5454001728775023939",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/red-velvet.svg",
      "tgs": "gifts/homemadecake/assets/models/red-velvet.tgs"
    }
  },
  {
    "name": "Sand Castle",
    "customEmojiId": "5454218040507916867",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sand-castle.svg",
      "tgs": "gifts/homemadecake/assets/models/sand-castle.tgs"
    }
  },
  {
    "name": "Starry Sky",
    "customEmojiId": "5454178307765461417",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/starry-sky.svg",
      "tgs": "gifts/homemadecake/assets/models/starry-sky.tgs"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5454084686068342404",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/strawberry.svg",
      "tgs": "gifts/homemadecake/assets/models/strawberry.tgs"
    }
  },
  {
    "name": "Sugar Bows",
    "customEmojiId": "5235852029049466198",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sugar-bows.svg",
      "tgs": "gifts/homemadecake/assets/models/sugar-bows.tgs"
    }
  },
  {
    "name": "Sweet  Lilac",
    "customEmojiId": "5456218735058640203",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sweet-lilac.svg",
      "tgs": "gifts/homemadecake/assets/models/sweet-lilac.tgs"
    }
  },
  {
    "name": "Telegram",
    "customEmojiId": "5456657534687405750",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/telegram.svg",
      "tgs": "gifts/homemadecake/assets/models/telegram.tgs"
    }
  },
  {
    "name": "Valentine",
    "customEmojiId": "5456159189632050209",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/valentine.svg",
      "tgs": "gifts/homemadecake/assets/models/valentine.tgs"
    }
  },
  {
    "name": "Yours Only",
    "customEmojiId": "5456511325410714426",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/yours-only.svg",
      "tgs": "gifts/homemadecake/assets/models/yours-only.tgs"
    }
  },
  {
    "name": "Candy Candle",
    "customEmojiId": "5460745995660843558",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/candy-candle.svg",
      "tgs": "gifts/homemadecake/assets/models/candy-candle.tgs"
    }
  },
  {
    "name": "Cocoa Cloud",
    "customEmojiId": "5454301994233652533",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cocoa-cloud.svg",
      "tgs": "gifts/homemadecake/assets/models/cocoa-cloud.tgs"
    }
  },
  {
    "name": "Cotton Candy",
    "customEmojiId": "5456142482209269079",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cotton-candy.svg",
      "tgs": "gifts/homemadecake/assets/models/cotton-candy.tgs"
    }
  },
  {
    "name": "Festive Mint",
    "customEmojiId": "5454386665218923636",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/festive-mint.svg",
      "tgs": "gifts/homemadecake/assets/models/festive-mint.tgs"
    }
  },
  {
    "name": "Fondant Fancy",
    "customEmojiId": "5456136202967081528",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/fondant-fancy.svg",
      "tgs": "gifts/homemadecake/assets/models/fondant-fancy.tgs"
    }
  },
  {
    "name": "It’s My Party",
    "customEmojiId": "5456125229325639189",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/it-s-my-party.svg",
      "tgs": "gifts/homemadecake/assets/models/it-s-my-party.tgs"
    }
  },
  {
    "name": "Jam Layer",
    "customEmojiId": "5454062936353957689",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/jam-layer.svg",
      "tgs": "gifts/homemadecake/assets/models/jam-layer.tgs"
    }
  },
  {
    "name": "Mickey Mousse",
    "customEmojiId": "5460667097111617388",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/mickey-mousse.svg",
      "tgs": "gifts/homemadecake/assets/models/mickey-mousse.tgs"
    }
  },
  {
    "name": "Midsummer",
    "customEmojiId": "5456279478781109389",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/midsummer.svg",
      "tgs": "gifts/homemadecake/assets/models/midsummer.tgs"
    }
  },
  {
    "name": "Noir Night",
    "customEmojiId": "5456572618888994354",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/noir-night.svg",
      "tgs": "gifts/homemadecake/assets/models/noir-night.tgs"
    }
  },
  {
    "name": "Pink Whirl",
    "customEmojiId": "5456423201271734685",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/pink-whirl.svg",
      "tgs": "gifts/homemadecake/assets/models/pink-whirl.tgs"
    }
  },
  {
    "name": "Pinkie Pie",
    "customEmojiId": "5460848301781834997",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/pinkie-pie.svg",
      "tgs": "gifts/homemadecake/assets/models/pinkie-pie.tgs"
    }
  },
  {
    "name": "Sprinkles",
    "customEmojiId": "5460944135387112890",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sprinkles.svg",
      "tgs": "gifts/homemadecake/assets/models/sprinkles.tgs"
    }
  },
  {
    "name": "Toffee",
    "customEmojiId": "5456321625295182177",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/toffee.svg",
      "tgs": "gifts/homemadecake/assets/models/toffee.tgs"
    }
  },
  {
    "name": "Wishlist",
    "customEmojiId": "5456485491182428238",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/wishlist.svg",
      "tgs": "gifts/homemadecake/assets/models/wishlist.tgs"
    }
  },
  {
    "name": "Сhoco Сhips",
    "customEmojiId": "5456379521454335222",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/hoco-hips.svg",
      "tgs": "gifts/homemadecake/assets/models/hoco-hips.tgs"
    }
  },
  {
    "name": "Angel Cake",
    "customEmojiId": "5461163380582669042",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/angel-cake.svg",
      "tgs": "gifts/homemadecake/assets/models/angel-cake.tgs"
    }
  },
  {
    "name": "Blush",
    "customEmojiId": "5460671031301658396",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/blush.svg",
      "tgs": "gifts/homemadecake/assets/models/blush.tgs"
    }
  },
  {
    "name": "Candy Parade",
    "customEmojiId": "5458687855922539091",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/candy-parade.svg",
      "tgs": "gifts/homemadecake/assets/models/candy-parade.tgs"
    }
  },
  {
    "name": "Caramel Joy",
    "customEmojiId": "5458537343088615711",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/caramel-joy.svg",
      "tgs": "gifts/homemadecake/assets/models/caramel-joy.tgs"
    }
  },
  {
    "name": "Carrot Cake",
    "customEmojiId": "5458567631197988694",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/carrot-cake.svg",
      "tgs": "gifts/homemadecake/assets/models/carrot-cake.tgs"
    }
  },
  {
    "name": "Choco Dream",
    "customEmojiId": "5458566823744136801",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/choco-dream.svg",
      "tgs": "gifts/homemadecake/assets/models/choco-dream.tgs"
    }
  },
  {
    "name": "Choco Twist",
    "customEmojiId": "5460633295718996274",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/choco-twist.svg",
      "tgs": "gifts/homemadecake/assets/models/choco-twist.tgs"
    }
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5458547668189997257",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/chocolate.svg",
      "tgs": "gifts/homemadecake/assets/models/chocolate.tgs"
    }
  },
  {
    "name": "Cinnamon",
    "customEmojiId": "5460661436344720056",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cinnamon.svg",
      "tgs": "gifts/homemadecake/assets/models/cinnamon.tgs"
    }
  },
  {
    "name": "Cold Heaven",
    "customEmojiId": "5460973435654004449",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cold-heaven.svg",
      "tgs": "gifts/homemadecake/assets/models/cold-heaven.tgs"
    }
  },
  {
    "name": "Cream Dream",
    "customEmojiId": "5458720708127386123",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/cream-dream.svg",
      "tgs": "gifts/homemadecake/assets/models/cream-dream.tgs"
    }
  },
  {
    "name": "Fantasy",
    "customEmojiId": "5458455502486790836",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/fantasy.svg",
      "tgs": "gifts/homemadecake/assets/models/fantasy.tgs"
    }
  },
  {
    "name": "French Yogurt",
    "customEmojiId": "5458604009570985249",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/french-yogurt.svg",
      "tgs": "gifts/homemadecake/assets/models/french-yogurt.tgs"
    }
  },
  {
    "name": "Frosted Mint",
    "customEmojiId": "5460644359554751596",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/frosted-mint.svg",
      "tgs": "gifts/homemadecake/assets/models/frosted-mint.tgs"
    }
  },
  {
    "name": "Frosty Mocha",
    "customEmojiId": "5458692120825061877",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/frosty-mocha.svg",
      "tgs": "gifts/homemadecake/assets/models/frosty-mocha.tgs"
    }
  },
  {
    "name": "Golden Hour",
    "customEmojiId": "5460851767820440849",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/golden-hour.svg",
      "tgs": "gifts/homemadecake/assets/models/golden-hour.tgs"
    }
  },
  {
    "name": "Lemon Mint",
    "customEmojiId": "5460980672673898945",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/lemon-mint.svg",
      "tgs": "gifts/homemadecake/assets/models/lemon-mint.tgs"
    }
  },
  {
    "name": "Lil Princess",
    "customEmojiId": "5458684604632297578",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/lil-princess.svg",
      "tgs": "gifts/homemadecake/assets/models/lil-princess.tgs"
    }
  },
  {
    "name": "Lilac Slice",
    "customEmojiId": "5461161963243460412",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/lilac-slice.svg",
      "tgs": "gifts/homemadecake/assets/models/lilac-slice.tgs"
    }
  },
  {
    "name": "Lilac Splash",
    "customEmojiId": "5458735701858215129",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/lilac-splash.svg",
      "tgs": "gifts/homemadecake/assets/models/lilac-splash.tgs"
    }
  },
  {
    "name": "Mellow Gold",
    "customEmojiId": "5460770769032209019",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/mellow-gold.svg",
      "tgs": "gifts/homemadecake/assets/models/mellow-gold.tgs"
    }
  },
  {
    "name": "Meringue",
    "customEmojiId": "5460845900895115793",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/meringue.svg",
      "tgs": "gifts/homemadecake/assets/models/meringue.tgs"
    }
  },
  {
    "name": "Mint Kiss",
    "customEmojiId": "5460901877203888160",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/mint-kiss.svg",
      "tgs": "gifts/homemadecake/assets/models/mint-kiss.tgs"
    }
  },
  {
    "name": "Nutty Joy",
    "customEmojiId": "5460809428032837953",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/nutty-joy.svg",
      "tgs": "gifts/homemadecake/assets/models/nutty-joy.tgs"
    }
  },
  {
    "name": "Ocean Wave",
    "customEmojiId": "5460749710807556071",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/ocean-wave.svg",
      "tgs": "gifts/homemadecake/assets/models/ocean-wave.tgs"
    }
  },
  {
    "name": "Opera Cake",
    "customEmojiId": "5460807491002587153",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/opera-cake.svg",
      "tgs": "gifts/homemadecake/assets/models/opera-cake.tgs"
    }
  },
  {
    "name": "Pastel",
    "customEmojiId": "5458655673732589042",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/pastel.svg",
      "tgs": "gifts/homemadecake/assets/models/pastel.tgs"
    }
  },
  {
    "name": "Peachy Bloom",
    "customEmojiId": "5460934914092323774",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/peachy-bloom.svg",
      "tgs": "gifts/homemadecake/assets/models/peachy-bloom.tgs"
    }
  },
  {
    "name": "Pink Velvet",
    "customEmojiId": "5458849836319136608",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/pink-velvet.svg",
      "tgs": "gifts/homemadecake/assets/models/pink-velvet.tgs"
    }
  },
  {
    "name": "Pistachio",
    "customEmojiId": "5460817124614234312",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/pistachio.svg",
      "tgs": "gifts/homemadecake/assets/models/pistachio.tgs"
    }
  },
  {
    "name": "Pistachio Sky",
    "customEmojiId": "5461046699206139861",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/pistachio-sky.svg",
      "tgs": "gifts/homemadecake/assets/models/pistachio-sky.tgs"
    }
  },
  {
    "name": "Pumpkin Pie",
    "customEmojiId": "5460784719085987969",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/pumpkin-pie.svg",
      "tgs": "gifts/homemadecake/assets/models/pumpkin-pie.tgs"
    }
  },
  {
    "name": "Red Layer",
    "customEmojiId": "5460703904981347632",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/red-layer.svg",
      "tgs": "gifts/homemadecake/assets/models/red-layer.tgs"
    }
  },
  {
    "name": "Rosy Frost",
    "customEmojiId": "5460924687775195859",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/rosy-frost.svg",
      "tgs": "gifts/homemadecake/assets/models/rosy-frost.tgs"
    }
  },
  {
    "name": "Sponge Cake",
    "customEmojiId": "5458694723575248955",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sponge-cake.svg",
      "tgs": "gifts/homemadecake/assets/models/sponge-cake.tgs"
    }
  },
  {
    "name": "Spring Bloom",
    "customEmojiId": "5460730168706357832",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/spring-bloom.svg",
      "tgs": "gifts/homemadecake/assets/models/spring-bloom.tgs"
    }
  },
  {
    "name": "Sugarstorm",
    "customEmojiId": "5460670335516955201",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sugarstorm.svg",
      "tgs": "gifts/homemadecake/assets/models/sugarstorm.tgs"
    }
  },
  {
    "name": "Sunset",
    "customEmojiId": "5460783439185729123",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sunset.svg",
      "tgs": "gifts/homemadecake/assets/models/sunset.tgs"
    }
  },
  {
    "name": "Sweet Bite",
    "customEmojiId": "5458889869709306114",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sweet-bite.svg",
      "tgs": "gifts/homemadecake/assets/models/sweet-bite.tgs"
    }
  },
  {
    "name": "Sweet Dawn",
    "customEmojiId": "5460793759992144340",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/sweet-dawn.svg",
      "tgs": "gifts/homemadecake/assets/models/sweet-dawn.tgs"
    }
  },
  {
    "name": "Tender Peach",
    "customEmojiId": "5458482496356248590",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/tender-peach.svg",
      "tgs": "gifts/homemadecake/assets/models/tender-peach.tgs"
    }
  },
  {
    "name": "Tropical Mist",
    "customEmojiId": "5458645443120490933",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/tropical-mist.svg",
      "tgs": "gifts/homemadecake/assets/models/tropical-mist.tgs"
    }
  },
  {
    "name": "Vanilla Sky",
    "customEmojiId": "5461087028949048589",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/vanilla-sky.svg",
      "tgs": "gifts/homemadecake/assets/models/vanilla-sky.tgs"
    }
  },
  {
    "name": "Velvet Cocoa",
    "customEmojiId": "5460758528375411740",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/velvet-cocoa.svg",
      "tgs": "gifts/homemadecake/assets/models/velvet-cocoa.tgs"
    }
  },
  {
    "name": "Сitrus Matcha",
    "customEmojiId": "5458838287152080313",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/homemadecake/assets/models/itrus-matcha.svg",
      "tgs": "gifts/homemadecake/assets/models/itrus-matcha.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/axe.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/feather.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "rarityPermille": 1,
    "originalRarityPermille": 1,
    "rarity": 0.1,
    "originalRarity": 0.1,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/brain.png"
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
      "png": "gifts/homemadecake/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/coin-purse.png"
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
      "png": "gifts/homemadecake/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/fire.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/gem.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/gift-box.png"
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
      "png": "gifts/homemadecake/assets/patterns/heart.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/mask.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/pearl.png"
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
      "png": "gifts/homemadecake/assets/patterns/plum.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/shell.png"
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
      "png": "gifts/homemadecake/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/toilet.png"
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
      "png": "gifts/homemadecake/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/apple.png"
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
      "png": "gifts/homemadecake/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/bishop.png"
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
      "png": "gifts/homemadecake/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/book.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/bug.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/candy.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/clover.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/clubs.png"
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
      "png": "gifts/homemadecake/assets/patterns/crown.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/cupcake.png"
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
      "png": "gifts/homemadecake/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/doberman.png"
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
      "png": "gifts/homemadecake/assets/patterns/flower.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/flower-tulip.png"
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
      "png": "gifts/homemadecake/assets/patterns/gamepad.png"
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
      "png": "gifts/homemadecake/assets/patterns/gold.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/hippo.png"
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
      "png": "gifts/homemadecake/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/key.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/kite.png"
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
      "png": "gifts/homemadecake/assets/patterns/knight.png"
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
      "png": "gifts/homemadecake/assets/patterns/koala.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/lemon-slice.png"
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
      "png": "gifts/homemadecake/assets/patterns/lily.png"
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
      "png": "gifts/homemadecake/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/octopus.png"
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
      "png": "gifts/homemadecake/assets/patterns/palette.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/planet.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/plume.png"
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
      "png": "gifts/homemadecake/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/spider-web.png"
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
      "png": "gifts/homemadecake/assets/patterns/star.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/strawberry.png"
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
      "png": "gifts/homemadecake/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/the-eye.png"
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
      "png": "gifts/homemadecake/assets/patterns/thief.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/tooth.png"
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
      "png": "gifts/homemadecake/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/unicorn-head.png"
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
      "png": "gifts/homemadecake/assets/patterns/acorn.png"
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
      "png": "gifts/homemadecake/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/anchor.png"
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
      "png": "gifts/homemadecake/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/ball.png"
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
      "png": "gifts/homemadecake/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/baphomet.png"
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
      "png": "gifts/homemadecake/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/bone.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/bread.png"
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
      "png": "gifts/homemadecake/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/cactus.png"
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
      "png": "gifts/homemadecake/assets/patterns/cap.png"
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
      "png": "gifts/homemadecake/assets/patterns/car.png"
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
      "png": "gifts/homemadecake/assets/patterns/celtic-cross.png"
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
      "png": "gifts/homemadecake/assets/patterns/champagne.png"
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
      "png": "gifts/homemadecake/assets/patterns/cheese.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/chili.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/conch.png"
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
      "png": "gifts/homemadecake/assets/patterns/corn.png"
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
      "png": "gifts/homemadecake/assets/patterns/crab.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/elephant.png"
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
      "png": "gifts/homemadecake/assets/patterns/flamingo.png"
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
      "png": "gifts/homemadecake/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/gear.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/golden-scarab.png"
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
      "png": "gifts/homemadecake/assets/patterns/hamburger.png"
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
      "png": "gifts/homemadecake/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/handset.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/hedgehog.png"
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
      "png": "gifts/homemadecake/assets/patterns/kitsune.png"
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
      "png": "gifts/homemadecake/assets/patterns/ladybug.png"
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
      "png": "gifts/homemadecake/assets/patterns/leaf.png"
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
      "png": "gifts/homemadecake/assets/patterns/lion-head.png"
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
      "png": "gifts/homemadecake/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/melon.png"
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
      "png": "gifts/homemadecake/assets/patterns/money-bag.png"
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
      "png": "gifts/homemadecake/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/musical-note.png"
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
      "png": "gifts/homemadecake/assets/patterns/narcissus.png"
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
      "png": "gifts/homemadecake/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/ouroboros.png"
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
      "png": "gifts/homemadecake/assets/patterns/owl.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/oxen-of-fire.png"
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
      "png": "gifts/homemadecake/assets/patterns/paw.png"
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
      "png": "gifts/homemadecake/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/piggy-bank.png"
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
      "png": "gifts/homemadecake/assets/patterns/pizza-slice.png"
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
      "png": "gifts/homemadecake/assets/patterns/potion.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/rocket.png"
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
      "png": "gifts/homemadecake/assets/patterns/rook.png"
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
      "png": "gifts/homemadecake/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/scissors.png"
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
      "png": "gifts/homemadecake/assets/patterns/scorpion.png"
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
      "png": "gifts/homemadecake/assets/patterns/sea-horse.png"
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
      "png": "gifts/homemadecake/assets/patterns/seahorse.png"
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
      "png": "gifts/homemadecake/assets/patterns/shooting-star.png"
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
      "png": "gifts/homemadecake/assets/patterns/sun.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/sword.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/toy-bucket.png"
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
      "png": "gifts/homemadecake/assets/patterns/tribal-shield.png"
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
      "png": "gifts/homemadecake/assets/patterns/tulip.png"
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
      "png": "gifts/homemadecake/assets/patterns/turtle.png"
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
      "png": "gifts/homemadecake/assets/patterns/viking.png"
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
      "png": "gifts/homemadecake/assets/patterns/wasp.png"
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
      "png": "gifts/homemadecake/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/alarm.png"
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
      "png": "gifts/homemadecake/assets/patterns/bee.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/boat.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/bottlenose.png"
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
      "png": "gifts/homemadecake/assets/patterns/bow-tie.png"
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
      "png": "gifts/homemadecake/assets/patterns/bubbles.png"
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
      "png": "gifts/homemadecake/assets/patterns/bunny-ears.png"
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
      "png": "gifts/homemadecake/assets/patterns/burger.png"
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
      "png": "gifts/homemadecake/assets/patterns/calm-wolf.png"
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
      "png": "gifts/homemadecake/assets/patterns/candle.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/carrot.png"
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
      "png": "gifts/homemadecake/assets/patterns/cash.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/celtic-wolf.png"
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
      "png": "gifts/homemadecake/assets/patterns/chest.png"
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
      "png": "gifts/homemadecake/assets/patterns/chili-pepper.png"
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
      "png": "gifts/homemadecake/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/cocktail.png"
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
      "png": "gifts/homemadecake/assets/patterns/coconut.png"
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
      "png": "gifts/homemadecake/assets/patterns/coffee-bean.png"
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
      "png": "gifts/homemadecake/assets/patterns/coin.png"
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
      "png": "gifts/homemadecake/assets/patterns/cone.png"
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
      "png": "gifts/homemadecake/assets/patterns/crystal-ball.png"
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
      "png": "gifts/homemadecake/assets/patterns/diamond.png"
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
      "png": "gifts/homemadecake/assets/patterns/dice.png"
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
      "png": "gifts/homemadecake/assets/patterns/dolphin.png"
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
      "png": "gifts/homemadecake/assets/patterns/dragonfly.png"
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
      "png": "gifts/homemadecake/assets/patterns/drug.png"
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
      "png": "gifts/homemadecake/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/eikthyrnir.png"
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
      "png": "gifts/homemadecake/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/fish.png"
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
      "png": "gifts/homemadecake/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/fleur-de-lis.png"
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
      "png": "gifts/homemadecake/assets/patterns/genie-lamp.png"
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
      "png": "gifts/homemadecake/assets/patterns/gingerbread.png"
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
      "png": "gifts/homemadecake/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/grape.png"
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
      "png": "gifts/homemadecake/assets/patterns/grenade.png"
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
      "png": "gifts/homemadecake/assets/patterns/guitar.png"
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
      "png": "gifts/homemadecake/assets/patterns/hammerhead.png"
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
      "png": "gifts/homemadecake/assets/patterns/hermit-shell.png"
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
      "png": "gifts/homemadecake/assets/patterns/high-heels.png"
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
      "png": "gifts/homemadecake/assets/patterns/illuminati.png"
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
      "png": "gifts/homemadecake/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/lightning.png"
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
      "png": "gifts/homemadecake/assets/patterns/like.png"
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
      "png": "gifts/homemadecake/assets/patterns/lovely-kiss.png"
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
      "png": "gifts/homemadecake/assets/patterns/magic-wand.png"
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
      "png": "gifts/homemadecake/assets/patterns/mannaz-rune.png"
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
      "png": "gifts/homemadecake/assets/patterns/maple.png"
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
      "png": "gifts/homemadecake/assets/patterns/maple-leaf.png"
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
      "png": "gifts/homemadecake/assets/patterns/moon.png"
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
      "png": "gifts/homemadecake/assets/patterns/moon-eagle.png"
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
      "png": "gifts/homemadecake/assets/patterns/moose-head.png"
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
      "png": "gifts/homemadecake/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/mushroom.png"
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
      "png": "gifts/homemadecake/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/pc-mouse.png"
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
      "png": "gifts/homemadecake/assets/patterns/pear.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/pegasus.png"
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
      "png": "gifts/homemadecake/assets/patterns/pencil.png"
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
      "png": "gifts/homemadecake/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/pinata.png"
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
      "png": "gifts/homemadecake/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/pomegranate.png"
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
      "png": "gifts/homemadecake/assets/patterns/pyramid.png"
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
      "png": "gifts/homemadecake/assets/patterns/ram-of-amun.png"
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
      "png": "gifts/homemadecake/assets/patterns/ring.png"
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
      "png": "gifts/homemadecake/assets/patterns/shark-knife.png"
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
      "png": "gifts/homemadecake/assets/patterns/sharp-sword.png"
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
      "png": "gifts/homemadecake/assets/patterns/shield.png"
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
      "png": "gifts/homemadecake/assets/patterns/skull.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/spades.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/spirit-impala.png"
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
      "png": "gifts/homemadecake/assets/patterns/sprout.png"
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
      "png": "gifts/homemadecake/assets/patterns/star-crown.png"
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
      "png": "gifts/homemadecake/assets/patterns/sumerian-bird.png"
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
      "png": "gifts/homemadecake/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/tie.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/tree-of-life.png"
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
      "png": "gifts/homemadecake/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/twin-peaks.png"
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
      "png": "gifts/homemadecake/assets/patterns/ufo.png"
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
      "png": "gifts/homemadecake/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/watermelon.png"
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
      "png": "gifts/homemadecake/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/homemadecake/assets/patterns/yogi-shaman.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "originalRarity": 2
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
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "homemadecake", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
