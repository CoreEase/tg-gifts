import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Tamagotchi",
    "customEmojiId": "5251215191491763566",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/tamagotchi.svg",
      "tgs": "gifts/hypnolollipop/assets/models/tamagotchi.tgs"
    }
  },
  {
    "name": "Compact Disc",
    "customEmojiId": "5251680495363712449",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/compact-disc.svg",
      "tgs": "gifts/hypnolollipop/assets/models/compact-disc.tgs"
    }
  },
  {
    "name": "Graffiti",
    "customEmojiId": "5251527972485098470",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/graffiti.svg",
      "tgs": "gifts/hypnolollipop/assets/models/graffiti.tgs"
    }
  },
  {
    "name": "Kawaii Dog",
    "customEmojiId": "5251505591410520211",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/kawaii-dog.svg",
      "tgs": "gifts/hypnolollipop/assets/models/kawaii-dog.tgs"
    }
  },
  {
    "name": "Reward",
    "customEmojiId": "5251256650811075124",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/reward.svg",
      "tgs": "gifts/hypnolollipop/assets/models/reward.tgs"
    }
  },
  {
    "name": "Telegram",
    "customEmojiId": "5251623483967826665",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/telegram.svg",
      "tgs": "gifts/hypnolollipop/assets/models/telegram.tgs"
    }
  },
  {
    "name": "Flashing",
    "customEmojiId": "5251447149790521070",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/flashing.svg",
      "tgs": "gifts/hypnolollipop/assets/models/flashing.tgs"
    }
  },
  {
    "name": "Hale-Pop",
    "customEmojiId": "5251686826145509657",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/hale-pop.svg",
      "tgs": "gifts/hypnolollipop/assets/models/hale-pop.tgs"
    }
  },
  {
    "name": "Shirtless",
    "customEmojiId": "5251500239881265133",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/shirtless.svg",
      "tgs": "gifts/hypnolollipop/assets/models/shirtless.tgs"
    }
  },
  {
    "name": "Amphibian",
    "customEmojiId": "5253689092654257755",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/amphibian.svg",
      "tgs": "gifts/hypnolollipop/assets/models/amphibian.tgs"
    }
  },
  {
    "name": "Moon Candy",
    "customEmojiId": "5251581672461202967",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/moon-candy.svg",
      "tgs": "gifts/hypnolollipop/assets/models/moon-candy.tgs"
    }
  },
  {
    "name": "Ginger Man",
    "customEmojiId": "5251318794692876267",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/ginger-man.svg",
      "tgs": "gifts/hypnolollipop/assets/models/ginger-man.tgs"
    }
  },
  {
    "name": "Tricky Treat",
    "customEmojiId": "5251468182245371181",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/tricky-treat.svg",
      "tgs": "gifts/hypnolollipop/assets/models/tricky-treat.tgs"
    }
  },
  {
    "name": "Radiation",
    "customEmojiId": "5251489042901523840",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/radiation.svg",
      "tgs": "gifts/hypnolollipop/assets/models/radiation.tgs"
    }
  },
  {
    "name": "Saturn",
    "customEmojiId": "5251601356296316800",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/saturn.svg",
      "tgs": "gifts/hypnolollipop/assets/models/saturn.tgs"
    }
  },
  {
    "name": "Marksman",
    "customEmojiId": "5251396658154986317",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/marksman.svg",
      "tgs": "gifts/hypnolollipop/assets/models/marksman.tgs"
    }
  },
  {
    "name": "Day Night",
    "customEmojiId": "5251236309845962891",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/day-night.svg",
      "tgs": "gifts/hypnolollipop/assets/models/day-night.tgs"
    }
  },
  {
    "name": "Lucipop",
    "customEmojiId": "5251629028770602051",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/lucipop.svg",
      "tgs": "gifts/hypnolollipop/assets/models/lucipop.tgs"
    }
  },
  {
    "name": "Sweetheart",
    "customEmojiId": "5251312957832325965",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/sweetheart.svg",
      "tgs": "gifts/hypnolollipop/assets/models/sweetheart.tgs"
    }
  },
  {
    "name": "Choco Donut",
    "customEmojiId": "5251391362460311947",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/choco-donut.svg",
      "tgs": "gifts/hypnolollipop/assets/models/choco-donut.tgs"
    }
  },
  {
    "name": "Strabismus",
    "customEmojiId": "5251502632178050135",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/strabismus.svg",
      "tgs": "gifts/hypnolollipop/assets/models/strabismus.tgs"
    }
  },
  {
    "name": "Beach Ball",
    "customEmojiId": "5251348769269638580",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/beach-ball.svg",
      "tgs": "gifts/hypnolollipop/assets/models/beach-ball.tgs"
    }
  },
  {
    "name": "Grand Slam",
    "customEmojiId": "5251445333019355711",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/grand-slam.svg",
      "tgs": "gifts/hypnolollipop/assets/models/grand-slam.tgs"
    }
  },
  {
    "name": "Classic Vinyl",
    "customEmojiId": "5251319941449149132",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/classic-vinyl.svg",
      "tgs": "gifts/hypnolollipop/assets/models/classic-vinyl.tgs"
    }
  },
  {
    "name": "Ice Bauble",
    "customEmojiId": "5253514665442433651",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/ice-bauble.svg",
      "tgs": "gifts/hypnolollipop/assets/models/ice-bauble.tgs"
    }
  },
  {
    "name": "Mac Loader",
    "customEmojiId": "5251373138914077898",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/mac-loader.svg",
      "tgs": "gifts/hypnolollipop/assets/models/mac-loader.tgs"
    }
  },
  {
    "name": "Pangea",
    "customEmojiId": "5251416883155986018",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/pangea.svg",
      "tgs": "gifts/hypnolollipop/assets/models/pangea.tgs"
    }
  },
  {
    "name": "Teddy Bear",
    "customEmojiId": "5251574237872812842",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/teddy-bear.svg",
      "tgs": "gifts/hypnolollipop/assets/models/teddy-bear.tgs"
    }
  },
  {
    "name": "Rollin Donut",
    "customEmojiId": "5251588372610182416",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/rollin-donut.svg",
      "tgs": "gifts/hypnolollipop/assets/models/rollin-donut.tgs"
    }
  },
  {
    "name": "Bomb Pop",
    "customEmojiId": "5251403427023446911",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/bomb-pop.svg",
      "tgs": "gifts/hypnolollipop/assets/models/bomb-pop.tgs"
    }
  },
  {
    "name": "Ketchum",
    "customEmojiId": "5251304462387015075",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/ketchum.svg",
      "tgs": "gifts/hypnolollipop/assets/models/ketchum.tgs"
    }
  },
  {
    "name": "Frozen",
    "customEmojiId": "5251655679042675929",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/frozen.svg",
      "tgs": "gifts/hypnolollipop/assets/models/frozen.tgs"
    }
  },
  {
    "name": "Webby",
    "customEmojiId": "5251637915057941371",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/webby.svg",
      "tgs": "gifts/hypnolollipop/assets/models/webby.tgs"
    }
  },
  {
    "name": "Fragile Orb",
    "customEmojiId": "5251665909654776602",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/fragile-orb.svg",
      "tgs": "gifts/hypnolollipop/assets/models/fragile-orb.tgs"
    }
  },
  {
    "name": "No Disturb",
    "customEmojiId": "5251368788112202607",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/no-disturb.svg",
      "tgs": "gifts/hypnolollipop/assets/models/no-disturb.tgs"
    }
  },
  {
    "name": "Monster Eye",
    "customEmojiId": "5251287780734034285",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/monster-eye.svg",
      "tgs": "gifts/hypnolollipop/assets/models/monster-eye.tgs"
    }
  },
  {
    "name": "Spiraling",
    "customEmojiId": "5251502215566226057",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/spiraling.svg",
      "tgs": "gifts/hypnolollipop/assets/models/spiraling.tgs"
    }
  },
  {
    "name": "Aperture",
    "customEmojiId": "5251290800096044058",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/aperture.svg",
      "tgs": "gifts/hypnolollipop/assets/models/aperture.tgs"
    }
  },
  {
    "name": "Dark Cherry",
    "customEmojiId": "5251721288963091574",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/dark-cherry.svg",
      "tgs": "gifts/hypnolollipop/assets/models/dark-cherry.tgs"
    }
  },
  {
    "name": "Blue Beat",
    "customEmojiId": "5251299823822339146",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/blue-beat.svg",
      "tgs": "gifts/hypnolollipop/assets/models/blue-beat.tgs"
    }
  },
  {
    "name": "Snake Eyes",
    "customEmojiId": "5251429360035977386",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/snake-eyes.svg",
      "tgs": "gifts/hypnolollipop/assets/models/snake-eyes.tgs"
    }
  },
  {
    "name": "Orange Peel",
    "customEmojiId": "5251643601594640915",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/orange-peel.svg",
      "tgs": "gifts/hypnolollipop/assets/models/orange-peel.tgs"
    }
  },
  {
    "name": "Pink Blur",
    "customEmojiId": "5251713334683657172",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/pink-blur.svg",
      "tgs": "gifts/hypnolollipop/assets/models/pink-blur.tgs"
    }
  },
  {
    "name": "Hysteria",
    "customEmojiId": "5251606729300403265",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/hysteria.svg",
      "tgs": "gifts/hypnolollipop/assets/models/hysteria.tgs"
    }
  },
  {
    "name": "Lemon Drop",
    "customEmojiId": "5251361619811790485",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/lemon-drop.svg",
      "tgs": "gifts/hypnolollipop/assets/models/lemon-drop.tgs"
    }
  },
  {
    "name": "Treat Time",
    "customEmojiId": "5251483412199402764",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/treat-time.svg",
      "tgs": "gifts/hypnolollipop/assets/models/treat-time.tgs"
    }
  },
  {
    "name": "The Maze",
    "customEmojiId": "5251427337106388344",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/the-maze.svg",
      "tgs": "gifts/hypnolollipop/assets/models/the-maze.tgs"
    }
  },
  {
    "name": "Bloodshot",
    "customEmojiId": "5251436373717572877",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/bloodshot.svg",
      "tgs": "gifts/hypnolollipop/assets/models/bloodshot.tgs"
    }
  },
  {
    "name": "Lime Wedge",
    "customEmojiId": "5251747780321370803",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/lime-wedge.svg",
      "tgs": "gifts/hypnolollipop/assets/models/lime-wedge.tgs"
    }
  },
  {
    "name": "Sickly Sweet",
    "customEmojiId": "5251710113458183464",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/sickly-sweet.svg",
      "tgs": "gifts/hypnolollipop/assets/models/sickly-sweet.tgs"
    }
  },
  {
    "name": "White Bloom",
    "customEmojiId": "5251278787072520501",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/white-bloom.svg",
      "tgs": "gifts/hypnolollipop/assets/models/white-bloom.tgs"
    }
  },
  {
    "name": "Island Ice",
    "customEmojiId": "5251226727773921470",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/island-ice.svg",
      "tgs": "gifts/hypnolollipop/assets/models/island-ice.tgs"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5251423785168429529",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/strawberry.svg",
      "tgs": "gifts/hypnolollipop/assets/models/strawberry.tgs"
    }
  },
  {
    "name": "Lemon Zest",
    "customEmojiId": "5251520116989913955",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/lemon-zest.svg",
      "tgs": "gifts/hypnolollipop/assets/models/lemon-zest.tgs"
    }
  },
  {
    "name": "Seventies",
    "customEmojiId": "5251580577244537918",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/seventies.svg",
      "tgs": "gifts/hypnolollipop/assets/models/seventies.tgs"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5251315375898914803",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/sakura.svg",
      "tgs": "gifts/hypnolollipop/assets/models/sakura.tgs"
    }
  },
  {
    "name": "Hypno Yellow",
    "customEmojiId": "5251705483483442164",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/hypno-yellow.svg",
      "tgs": "gifts/hypnolollipop/assets/models/hypno-yellow.tgs"
    }
  },
  {
    "name": "Orange Spin",
    "customEmojiId": "5251252158275281063",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/orange-spin.svg",
      "tgs": "gifts/hypnolollipop/assets/models/orange-spin.tgs"
    }
  },
  {
    "name": "Orange Petal",
    "customEmojiId": "5251518137009995466",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/orange-petal.svg",
      "tgs": "gifts/hypnolollipop/assets/models/orange-petal.tgs"
    }
  },
  {
    "name": "Manic Melon",
    "customEmojiId": "5251226826558172125",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/manic-melon.svg",
      "tgs": "gifts/hypnolollipop/assets/models/manic-melon.tgs"
    }
  },
  {
    "name": "Green Mist",
    "customEmojiId": "5251400532215491151",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/green-mist.svg",
      "tgs": "gifts/hypnolollipop/assets/models/green-mist.tgs"
    }
  },
  {
    "name": "Scary Movie",
    "customEmojiId": "5251612604815663619",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/scary-movie.svg",
      "tgs": "gifts/hypnolollipop/assets/models/scary-movie.tgs"
    }
  },
  {
    "name": "Sugar Buzz",
    "customEmojiId": "5251398642429878473",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/sugar-buzz.svg",
      "tgs": "gifts/hypnolollipop/assets/models/sugar-buzz.tgs"
    }
  },
  {
    "name": "Mint Coating",
    "customEmojiId": "5251657229525872323",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/mint-coating.svg",
      "tgs": "gifts/hypnolollipop/assets/models/mint-coating.tgs"
    }
  },
  {
    "name": "Vanilla Mint",
    "customEmojiId": "5251652535126614788",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/vanilla-mint.svg",
      "tgs": "gifts/hypnolollipop/assets/models/vanilla-mint.tgs"
    }
  },
  {
    "name": "Green Goblin",
    "customEmojiId": "5251580963791591856",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/green-goblin.svg",
      "tgs": "gifts/hypnolollipop/assets/models/green-goblin.tgs"
    }
  },
  {
    "name": "Rainbow Pop",
    "customEmojiId": "5251604422902965041",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/rainbow-pop.svg",
      "tgs": "gifts/hypnolollipop/assets/models/rainbow-pop.tgs"
    }
  },
  {
    "name": "Cinematic",
    "customEmojiId": "5251427865387359971",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/cinematic.svg",
      "tgs": "gifts/hypnolollipop/assets/models/cinematic.tgs"
    }
  },
  {
    "name": "Neon Treat",
    "customEmojiId": "5251308869023460274",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/neon-treat.svg",
      "tgs": "gifts/hypnolollipop/assets/models/neon-treat.tgs"
    }
  },
  {
    "name": "Flower Sky",
    "customEmojiId": "5251255186227226512",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/flower-sky.svg",
      "tgs": "gifts/hypnolollipop/assets/models/flower-sky.tgs"
    }
  },
  {
    "name": "Umbrella Corp",
    "customEmojiId": "5251248816790726503",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/umbrella-corp.svg",
      "tgs": "gifts/hypnolollipop/assets/models/umbrella-corp.tgs"
    }
  },
  {
    "name": "Nightfall",
    "customEmojiId": "5251220860848598678",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/nightfall.svg",
      "tgs": "gifts/hypnolollipop/assets/models/nightfall.tgs"
    }
  },
  {
    "name": "Secret Citrus",
    "customEmojiId": "5251741655698006041",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/secret-citrus.svg",
      "tgs": "gifts/hypnolollipop/assets/models/secret-citrus.tgs"
    }
  },
  {
    "name": "Flytrap",
    "customEmojiId": "5251344740590313806",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/flytrap.svg",
      "tgs": "gifts/hypnolollipop/assets/models/flytrap.tgs"
    }
  },
  {
    "name": "Goldberry",
    "customEmojiId": "5251338091980944835",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/goldberry.svg",
      "tgs": "gifts/hypnolollipop/assets/models/goldberry.tgs"
    }
  },
  {
    "name": "Moving Mauve",
    "customEmojiId": "5251283176529094953",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/moving-mauve.svg",
      "tgs": "gifts/hypnolollipop/assets/models/moving-mauve.tgs"
    }
  },
  {
    "name": "Citrus Fresh",
    "customEmojiId": "5251407034795976772",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/citrus-fresh.svg",
      "tgs": "gifts/hypnolollipop/assets/models/citrus-fresh.tgs"
    }
  },
  {
    "name": "Grape Medley",
    "customEmojiId": "5251262758254570454",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/grape-medley.svg",
      "tgs": "gifts/hypnolollipop/assets/models/grape-medley.tgs"
    }
  },
  {
    "name": "Choco Cherry",
    "customEmojiId": "5251368856831679706",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/choco-cherry.svg",
      "tgs": "gifts/hypnolollipop/assets/models/choco-cherry.tgs"
    }
  },
  {
    "name": "Candy Carrot",
    "customEmojiId": "5251486569000366597",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/candy-carrot.svg",
      "tgs": "gifts/hypnolollipop/assets/models/candy-carrot.tgs"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5251279903764013431",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/watermelon.svg",
      "tgs": "gifts/hypnolollipop/assets/models/watermelon.tgs"
    }
  },
  {
    "name": "Purple Petal",
    "customEmojiId": "5251656885928484373",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/purple-petal.svg",
      "tgs": "gifts/hypnolollipop/assets/models/purple-petal.tgs"
    }
  },
  {
    "name": "Red Wheel",
    "customEmojiId": "5251212391173092470",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/red-wheel.svg",
      "tgs": "gifts/hypnolollipop/assets/models/red-wheel.tgs"
    }
  },
  {
    "name": "Windmill",
    "customEmojiId": "5251313060911541013",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/windmill.svg",
      "tgs": "gifts/hypnolollipop/assets/models/windmill.tgs"
    }
  },
  {
    "name": "Glowing Pink",
    "customEmojiId": "5251200476933806852",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/glowing-pink.svg",
      "tgs": "gifts/hypnolollipop/assets/models/glowing-pink.tgs"
    }
  },
  {
    "name": "Expired",
    "customEmojiId": "5251461284527890960",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/expired.svg",
      "tgs": "gifts/hypnolollipop/assets/models/expired.tgs"
    }
  },
  {
    "name": "Beach Treat",
    "customEmojiId": "5251210076185719411",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/beach-treat.svg",
      "tgs": "gifts/hypnolollipop/assets/models/beach-treat.tgs"
    }
  },
  {
    "name": "Inside Out",
    "customEmojiId": "5251598014811761667",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/inside-out.svg",
      "tgs": "gifts/hypnolollipop/assets/models/inside-out.tgs"
    }
  },
  {
    "name": "Going Green",
    "customEmojiId": "5251435712292612512",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/going-green.svg",
      "tgs": "gifts/hypnolollipop/assets/models/going-green.tgs"
    }
  },
  {
    "name": "Greenwich",
    "customEmojiId": "5251243856103497412",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/greenwich.svg",
      "tgs": "gifts/hypnolollipop/assets/models/greenwich.tgs"
    }
  },
  {
    "name": "Verdant",
    "customEmojiId": "5251636398934484003",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/verdant.svg",
      "tgs": "gifts/hypnolollipop/assets/models/verdant.tgs"
    }
  },
  {
    "name": "Dark Side",
    "customEmojiId": "5251312738788994505",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/dark-side.svg",
      "tgs": "gifts/hypnolollipop/assets/models/dark-side.tgs"
    }
  },
  {
    "name": "Pacific",
    "customEmojiId": "5253835860276700087",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/pacific.svg",
      "tgs": "gifts/hypnolollipop/assets/models/pacific.tgs"
    }
  },
  {
    "name": "Pink Clouds",
    "customEmojiId": "5251349739932249608",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/pink-clouds.svg",
      "tgs": "gifts/hypnolollipop/assets/models/pink-clouds.tgs"
    }
  },
  {
    "name": "Color Swap",
    "customEmojiId": "5251745306420210197",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/color-swap.svg",
      "tgs": "gifts/hypnolollipop/assets/models/color-swap.tgs"
    }
  },
  {
    "name": "Budding",
    "customEmojiId": "5251229300459336988",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/budding.svg",
      "tgs": "gifts/hypnolollipop/assets/models/budding.tgs"
    }
  },
  {
    "name": "Red Berries",
    "customEmojiId": "5251655429934572612",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/red-berries.svg",
      "tgs": "gifts/hypnolollipop/assets/models/red-berries.tgs"
    }
  },
  {
    "name": "Summer Bliss",
    "customEmojiId": "5251300888974224321",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/summer-bliss.svg",
      "tgs": "gifts/hypnolollipop/assets/models/summer-bliss.tgs"
    }
  },
  {
    "name": "Sunrays",
    "customEmojiId": "5251757547077006482",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/sunrays.svg",
      "tgs": "gifts/hypnolollipop/assets/models/sunrays.tgs"
    }
  },
  {
    "name": "Berry Swirl",
    "customEmojiId": "5251529243795420407",
    "assets": {
      "svg": "gifts/hypnolollipop/assets/models/berry-swirl.svg",
      "tgs": "gifts/hypnolollipop/assets/models/berry-swirl.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sword.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/elephant.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sun.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/lily.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/plum.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/heart.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/paw.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/planet.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/skull.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/gem.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cash.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/flower.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cap.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/like.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/knight.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sparks.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/viking.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/boat.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/melon.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/car.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bread.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/spades.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ball.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/chest.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cheese.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/thief.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bone.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/fish.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/candle.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/coin.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ring.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/star.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/dolphin.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/maple.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bee.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/corn.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/drug.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cone.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/plume.png"
    }
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/potion.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/chili.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/conch.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/gold.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/burger.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/candy.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bug.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/clover.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/owl.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/axe.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/crown.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/tie.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/feather.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/book.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/leaf.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/brain.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/koala.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/shell.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/apple.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/crab.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/mask.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/moon.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/rook.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/dice.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/gear.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pear.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/handset.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/kite.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/key.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/fire.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/shield.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/hypnolollipop/assets/patterns/grape.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Shamrock Green",
    "customEmojiId": "5377843866898555150",
    "hex": {
      "centerColor": "#8ab163",
      "edgeColor": "#559345",
      "patternColor": "#126b00",
      "textColor": "#d5fbc8"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "hypnolollipop", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
