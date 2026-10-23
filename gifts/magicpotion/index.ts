import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Error Elixir",
    "customEmojiId": "5456455589620114449",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/error-elixir.svg",
      "tgs": "gifts/magicpotion/assets/models/error-elixir.tgs"
    }
  },
  {
    "name": "Spooky Juice",
    "customEmojiId": "5456234828301099539",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/spooky-juice.svg",
      "tgs": "gifts/magicpotion/assets/models/spooky-juice.tgs"
    }
  },
  {
    "name": "Overcharge",
    "customEmojiId": "5456630171450760075",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/overcharge.svg",
      "tgs": "gifts/magicpotion/assets/models/overcharge.tgs"
    }
  },
  {
    "name": "Deep Freeze",
    "customEmojiId": "5453910250266581758",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/deep-freeze.svg",
      "tgs": "gifts/magicpotion/assets/models/deep-freeze.tgs"
    }
  },
  {
    "name": "Fish Sauce",
    "customEmojiId": "5456616315886263698",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/fish-sauce.svg",
      "tgs": "gifts/magicpotion/assets/models/fish-sauce.tgs"
    }
  },
  {
    "name": "Goth Sweat",
    "customEmojiId": "5456293420244951130",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/goth-sweat.svg",
      "tgs": "gifts/magicpotion/assets/models/goth-sweat.tgs"
    }
  },
  {
    "name": "Gold Medal",
    "customEmojiId": "5456208057769942295",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/gold-medal.svg",
      "tgs": "gifts/magicpotion/assets/models/gold-medal.tgs"
    }
  },
  {
    "name": "Bloodlust",
    "customEmojiId": "5456539337187418134",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/bloodlust.svg",
      "tgs": "gifts/magicpotion/assets/models/bloodlust.tgs"
    }
  },
  {
    "name": "Moonlight",
    "customEmojiId": "5453981855961340388",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/moonlight.svg",
      "tgs": "gifts/magicpotion/assets/models/moonlight.tgs"
    }
  },
  {
    "name": "Emerald Elixir",
    "customEmojiId": "5454233369246194931",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/emerald-elixir.svg",
      "tgs": "gifts/magicpotion/assets/models/emerald-elixir.tgs"
    }
  },
  {
    "name": "Star Power",
    "customEmojiId": "5456336425752486595",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/star-power.svg",
      "tgs": "gifts/magicpotion/assets/models/star-power.tgs"
    }
  },
  {
    "name": "False Flight",
    "customEmojiId": "5456604332927509361",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/false-flight.svg",
      "tgs": "gifts/magicpotion/assets/models/false-flight.tgs"
    }
  },
  {
    "name": "Queen Bee",
    "customEmojiId": "5456664660038149512",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/queen-bee.svg",
      "tgs": "gifts/magicpotion/assets/models/queen-bee.tgs"
    }
  },
  {
    "name": "Anaglyph",
    "customEmojiId": "5456375668868669233",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/anaglyph.svg",
      "tgs": "gifts/magicpotion/assets/models/anaglyph.tgs"
    }
  },
  {
    "name": "On Pause",
    "customEmojiId": "5454241074417526057",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/on-pause.svg",
      "tgs": "gifts/magicpotion/assets/models/on-pause.tgs"
    }
  },
  {
    "name": "Vulnerability",
    "customEmojiId": "5456523389973848745",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/vulnerability.svg",
      "tgs": "gifts/magicpotion/assets/models/vulnerability.tgs"
    }
  },
  {
    "name": "Unicorn Blood",
    "customEmojiId": "5454269803453767519",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/unicorn-blood.svg",
      "tgs": "gifts/magicpotion/assets/models/unicorn-blood.tgs"
    }
  },
  {
    "name": "Verdant Vial",
    "customEmojiId": "5456387449963963531",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/verdant-vial.svg",
      "tgs": "gifts/magicpotion/assets/models/verdant-vial.tgs"
    }
  },
  {
    "name": "Tainted Love",
    "customEmojiId": "5454096845120759785",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/tainted-love.svg",
      "tgs": "gifts/magicpotion/assets/models/tainted-love.tgs"
    }
  },
  {
    "name": "Color Drain",
    "customEmojiId": "5456505892277084108",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/color-drain.svg",
      "tgs": "gifts/magicpotion/assets/models/color-drain.tgs"
    }
  },
  {
    "name": "Starsurge",
    "customEmojiId": "5456336765054903379",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/starsurge.svg",
      "tgs": "gifts/magicpotion/assets/models/starsurge.tgs"
    }
  },
  {
    "name": "Fool’s Gold",
    "customEmojiId": "5456383966745487214",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/fool-s-gold.svg",
      "tgs": "gifts/magicpotion/assets/models/fool-s-gold.tgs"
    }
  },
  {
    "name": "Quicksilver",
    "customEmojiId": "5456343254750484771",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/quicksilver.svg",
      "tgs": "gifts/magicpotion/assets/models/quicksilver.tgs"
    }
  },
  {
    "name": "Chromatica",
    "customEmojiId": "5454376726664602382",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/chromatica.svg",
      "tgs": "gifts/magicpotion/assets/models/chromatica.tgs"
    }
  },
  {
    "name": "Red Rum",
    "customEmojiId": "5456584142286250164",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/red-rum.svg",
      "tgs": "gifts/magicpotion/assets/models/red-rum.tgs"
    }
  },
  {
    "name": "Heartbreaker",
    "customEmojiId": "5454087928768649744",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/heartbreaker.svg",
      "tgs": "gifts/magicpotion/assets/models/heartbreaker.tgs"
    }
  },
  {
    "name": "Mummify",
    "customEmojiId": "5454078634459422615",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/mummify.svg",
      "tgs": "gifts/magicpotion/assets/models/mummify.tgs"
    }
  },
  {
    "name": "Hemlock",
    "customEmojiId": "5456306605794549569",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/hemlock.svg",
      "tgs": "gifts/magicpotion/assets/models/hemlock.tgs"
    }
  },
  {
    "name": "Rewind",
    "customEmojiId": "5456619322363371474",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/rewind.svg",
      "tgs": "gifts/magicpotion/assets/models/rewind.tgs"
    }
  },
  {
    "name": "Supernova",
    "customEmojiId": "5456501550065147144",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/supernova.svg",
      "tgs": "gifts/magicpotion/assets/models/supernova.tgs"
    }
  },
  {
    "name": "Poison Toad",
    "customEmojiId": "5456177786840440931",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/poison-toad.svg",
      "tgs": "gifts/magicpotion/assets/models/poison-toad.tgs"
    }
  },
  {
    "name": "Cold Night",
    "customEmojiId": "5456280019946988938",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/cold-night.svg",
      "tgs": "gifts/magicpotion/assets/models/cold-night.tgs"
    }
  },
  {
    "name": "Turning Blue",
    "customEmojiId": "5454421377144617199",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/turning-blue.svg",
      "tgs": "gifts/magicpotion/assets/models/turning-blue.tgs"
    }
  },
  {
    "name": "Dark Side",
    "customEmojiId": "5454192777510281426",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/dark-side.svg",
      "tgs": "gifts/magicpotion/assets/models/dark-side.tgs"
    }
  },
  {
    "name": "Liquid Death",
    "customEmojiId": "5454416583961109672",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/liquid-death.svg",
      "tgs": "gifts/magicpotion/assets/models/liquid-death.tgs"
    }
  },
  {
    "name": "Purple Rain",
    "customEmojiId": "5456317708285012914",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/purple-rain.svg",
      "tgs": "gifts/magicpotion/assets/models/purple-rain.tgs"
    }
  },
  {
    "name": "Agent Orange",
    "customEmojiId": "5453898902962986999",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/agent-orange.svg",
      "tgs": "gifts/magicpotion/assets/models/agent-orange.tgs"
    }
  },
  {
    "name": "Saltwater",
    "customEmojiId": "5456528599769179406",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/saltwater.svg",
      "tgs": "gifts/magicpotion/assets/models/saltwater.tgs"
    }
  },
  {
    "name": "Twilight",
    "customEmojiId": "5454193095337860808",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/twilight.svg",
      "tgs": "gifts/magicpotion/assets/models/twilight.tgs"
    }
  },
  {
    "name": "Angry Amethyst",
    "customEmojiId": "5456628268780249864",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/angry-amethyst.svg",
      "tgs": "gifts/magicpotion/assets/models/angry-amethyst.tgs"
    }
  },
  {
    "name": "Wicked Melon",
    "customEmojiId": "5456641170862008369",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/wicked-melon.svg",
      "tgs": "gifts/magicpotion/assets/models/wicked-melon.tgs"
    }
  },
  {
    "name": "Dimensional",
    "customEmojiId": "5453939520468705194",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/dimensional.svg",
      "tgs": "gifts/magicpotion/assets/models/dimensional.tgs"
    }
  },
  {
    "name": "Blue Lagoon",
    "customEmojiId": "5453991957724420655",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/blue-lagoon.svg",
      "tgs": "gifts/magicpotion/assets/models/blue-lagoon.tgs"
    }
  },
  {
    "name": "Dark Secret",
    "customEmojiId": "5456298342277470955",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/dark-secret.svg",
      "tgs": "gifts/magicpotion/assets/models/dark-secret.tgs"
    }
  },
  {
    "name": "Warm Embrace",
    "customEmojiId": "5456498556472944726",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/warm-embrace.svg",
      "tgs": "gifts/magicpotion/assets/models/warm-embrace.tgs"
    }
  },
  {
    "name": "Black Bile",
    "customEmojiId": "5456471446639371131",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/black-bile.svg",
      "tgs": "gifts/magicpotion/assets/models/black-bile.tgs"
    }
  },
  {
    "name": "Pink Poultice",
    "customEmojiId": "5454302436615284806",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/pink-poultice.svg",
      "tgs": "gifts/magicpotion/assets/models/pink-poultice.tgs"
    }
  },
  {
    "name": "Mad Magenta",
    "customEmojiId": "5456575122854928064",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/mad-magenta.svg",
      "tgs": "gifts/magicpotion/assets/models/mad-magenta.tgs"
    }
  },
  {
    "name": "The Blues",
    "customEmojiId": "5456652887532789397",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/the-blues.svg",
      "tgs": "gifts/magicpotion/assets/models/the-blues.tgs"
    }
  },
  {
    "name": "Green Goo",
    "customEmojiId": "5454360869645343105",
    "assets": {
      "svg": "gifts/magicpotion/assets/models/green-goo.svg",
      "tgs": "gifts/magicpotion/assets/models/green-goo.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/owl.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/dice.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Severed Hand",
    "customEmojiId": "5199465194966780844",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/severed-hand.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/ball.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Voodoo Doll",
    "customEmojiId": "5199629937027353893",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/voodoo-doll.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/cursor.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Spooky Cat",
    "customEmojiId": "5199795890268706133",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/spooky-cat.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/tie.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/maple.png"
    }
  },
  {
    "name": "Lollipop",
    "customEmojiId": "5199604863008277923",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/lollipop.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/corn.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/axe.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Night Bats",
    "customEmojiId": "5199725388380543708",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/night-bats.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/mask.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Scarecrow",
    "customEmojiId": "5199734102869184064",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/scarecrow.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Jaws",
    "customEmojiId": "5199489388517558658",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/jaws.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/ring.png"
    }
  },
  {
    "name": "Happy Smile",
    "customEmojiId": "5199771185616816222",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/happy-smile.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/boat.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/crown.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Coffin",
    "customEmojiId": "5199800696337107918",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/coffin.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/rook.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/like.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/book.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Half Moon",
    "customEmojiId": "5199418019046001807",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/half-moon.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/viking.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Witch’s Hat",
    "customEmojiId": null,
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/witch-s-hat.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/kite.png"
    }
  },
  {
    "name": "Nice Ghost",
    "customEmojiId": "5199814161059579213",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/nice-ghost.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/candle.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/shield.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/grape.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/fire.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/chest.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bee.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/plum.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/heart.png"
    }
  },
  {
    "name": "Cauldron",
    "customEmojiId": "5199831577151966735",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/cauldron.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Flying Witch",
    "customEmojiId": "5199639686603112376",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/flying-witch.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/planet.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Bloody Axe",
    "customEmojiId": "5199755874058406442",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bloody-axe.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Crow",
    "customEmojiId": "5199426733534641259",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/crow.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/cap.png"
    }
  },
  {
    "name": "Gravestone",
    "customEmojiId": "5199458662321521472",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/gravestone.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Poison Drop",
    "customEmojiId": "5199690302792698006",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/poison-drop.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Eyeball",
    "customEmojiId": "5199500791655727782",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/eyeball.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/candy.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/gold.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/moon.png"
    }
  },
  {
    "name": "Treats",
    "customEmojiId": "5199923330538311116",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/treats.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Evil Pumpkin",
    "customEmojiId": "5199669966122550110",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/evil-pumpkin.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/dolphin.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Black Widow",
    "customEmojiId": "5199544041976401500",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/black-widow.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Autumn Leaves",
    "customEmojiId": "5199868191748166568",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/autumn-leaves.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/skull.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/potion.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Grim Reaper",
    "customEmojiId": "5199657261609290637",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/grim-reaper.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Human Scull",
    "customEmojiId": "5199616090052791141",
    "assets": {
      "png": "gifts/magicpotion/assets/patterns/human-scull.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Copper",
    "customEmojiId": "5375444380339435270",
    "hex": {
      "centerColor": "#d08656",
      "edgeColor": "#9d6531",
      "patternColor": "#602901",
      "textColor": "#f4d8be"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "magicpotion", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
