import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Graffiti",
    "customEmojiId": "5294394262950015415",
    "assets": {
      "svg": "gifts/diamondring/assets/models/graffiti.svg",
      "tgs": "gifts/diamondring/assets/models/graffiti.tgs"
    }
  },
  {
    "name": "Ocean Gem",
    "customEmojiId": "5292079619174852549",
    "assets": {
      "svg": "gifts/diamondring/assets/models/ocean-gem.svg",
      "tgs": "gifts/diamondring/assets/models/ocean-gem.tgs"
    }
  },
  {
    "name": "Firestorm",
    "customEmojiId": "5294393854928114808",
    "assets": {
      "svg": "gifts/diamondring/assets/models/firestorm.svg",
      "tgs": "gifts/diamondring/assets/models/firestorm.tgs"
    }
  },
  {
    "name": "Royal Purple",
    "customEmojiId": "5291855099759453521",
    "assets": {
      "svg": "gifts/diamondring/assets/models/royal-purple.svg",
      "tgs": "gifts/diamondring/assets/models/royal-purple.tgs"
    }
  },
  {
    "name": "Bubble Burst",
    "customEmojiId": "5294186734425236014",
    "assets": {
      "svg": "gifts/diamondring/assets/models/bubble-burst.svg",
      "tgs": "gifts/diamondring/assets/models/bubble-burst.tgs"
    }
  },
  {
    "name": "Line Art",
    "customEmojiId": "5292236905172202953",
    "assets": {
      "svg": "gifts/diamondring/assets/models/line-art.svg",
      "tgs": "gifts/diamondring/assets/models/line-art.tgs"
    }
  },
  {
    "name": "Midnight",
    "customEmojiId": "5294443564879604456",
    "assets": {
      "svg": "gifts/diamondring/assets/models/midnight.svg",
      "tgs": "gifts/diamondring/assets/models/midnight.tgs"
    }
  },
  {
    "name": "Freehand",
    "customEmojiId": "5291892697903167042",
    "assets": {
      "svg": "gifts/diamondring/assets/models/freehand.svg",
      "tgs": "gifts/diamondring/assets/models/freehand.tgs"
    }
  },
  {
    "name": "Pink Diamond",
    "customEmojiId": "5294467101300384316",
    "assets": {
      "svg": "gifts/diamondring/assets/models/pink-diamond.svg",
      "tgs": "gifts/diamondring/assets/models/pink-diamond.tgs"
    }
  },
  {
    "name": "Silver Star",
    "customEmojiId": "5294357678418586476",
    "assets": {
      "svg": "gifts/diamondring/assets/models/silver-star.svg",
      "tgs": "gifts/diamondring/assets/models/silver-star.tgs"
    }
  },
  {
    "name": "Doodle",
    "customEmojiId": "5291918356037791339",
    "assets": {
      "svg": "gifts/diamondring/assets/models/doodle.svg",
      "tgs": "gifts/diamondring/assets/models/doodle.tgs"
    }
  },
  {
    "name": "Valentine",
    "customEmojiId": "5294002591997386118",
    "assets": {
      "svg": "gifts/diamondring/assets/models/valentine.svg",
      "tgs": "gifts/diamondring/assets/models/valentine.tgs"
    }
  },
  {
    "name": "Cold Desire",
    "customEmojiId": "5292276169763222509",
    "assets": {
      "svg": "gifts/diamondring/assets/models/cold-desire.svg",
      "tgs": "gifts/diamondring/assets/models/cold-desire.tgs"
    }
  },
  {
    "name": "Nocturne",
    "customEmojiId": "5291878954007818080",
    "assets": {
      "svg": "gifts/diamondring/assets/models/nocturne.svg",
      "tgs": "gifts/diamondring/assets/models/nocturne.tgs"
    }
  },
  {
    "name": "Sketch",
    "customEmojiId": "5292240753462899690",
    "assets": {
      "svg": "gifts/diamondring/assets/models/sketch.svg",
      "tgs": "gifts/diamondring/assets/models/sketch.tgs"
    }
  },
  {
    "name": "Blood Orange",
    "customEmojiId": "5294242757978645439",
    "assets": {
      "svg": "gifts/diamondring/assets/models/blood-orange.svg",
      "tgs": "gifts/diamondring/assets/models/blood-orange.tgs"
    }
  },
  {
    "name": "Bloodstone",
    "customEmojiId": "5294372186818108643",
    "assets": {
      "svg": "gifts/diamondring/assets/models/bloodstone.svg",
      "tgs": "gifts/diamondring/assets/models/bloodstone.tgs"
    }
  },
  {
    "name": "Iron Feather",
    "customEmojiId": "5292013511038236193",
    "assets": {
      "svg": "gifts/diamondring/assets/models/iron-feather.svg",
      "tgs": "gifts/diamondring/assets/models/iron-feather.tgs"
    }
  },
  {
    "name": "Marigold",
    "customEmojiId": "5294256884126082614",
    "assets": {
      "svg": "gifts/diamondring/assets/models/marigold.svg",
      "tgs": "gifts/diamondring/assets/models/marigold.tgs"
    }
  },
  {
    "name": "Snake Eye",
    "customEmojiId": "5291827135227392312",
    "assets": {
      "svg": "gifts/diamondring/assets/models/snake-eye.svg",
      "tgs": "gifts/diamondring/assets/models/snake-eye.tgs"
    }
  },
  {
    "name": "Black Hole",
    "customEmojiId": "5292166506363253306",
    "assets": {
      "svg": "gifts/diamondring/assets/models/black-hole.svg",
      "tgs": "gifts/diamondring/assets/models/black-hole.tgs"
    }
  },
  {
    "name": "Color Blocks",
    "customEmojiId": "5294061235480847107",
    "assets": {
      "svg": "gifts/diamondring/assets/models/color-blocks.svg",
      "tgs": "gifts/diamondring/assets/models/color-blocks.tgs"
    }
  },
  {
    "name": "Color Spray",
    "customEmojiId": "5294318207669132199",
    "assets": {
      "svg": "gifts/diamondring/assets/models/color-spray.svg",
      "tgs": "gifts/diamondring/assets/models/color-spray.tgs"
    }
  },
  {
    "name": "Ocean Agate",
    "customEmojiId": "5294174412164064401",
    "assets": {
      "svg": "gifts/diamondring/assets/models/ocean-agate.svg",
      "tgs": "gifts/diamondring/assets/models/ocean-agate.tgs"
    }
  },
  {
    "name": "Obsidian",
    "customEmojiId": "5294453417534578701",
    "assets": {
      "svg": "gifts/diamondring/assets/models/obsidian.svg",
      "tgs": "gifts/diamondring/assets/models/obsidian.tgs"
    }
  },
  {
    "name": "Fireball",
    "customEmojiId": "5292234667494240855",
    "assets": {
      "svg": "gifts/diamondring/assets/models/fireball.svg",
      "tgs": "gifts/diamondring/assets/models/fireball.tgs"
    }
  },
  {
    "name": "Manhattan",
    "customEmojiId": "5294229628263620680",
    "assets": {
      "svg": "gifts/diamondring/assets/models/manhattan.svg",
      "tgs": "gifts/diamondring/assets/models/manhattan.tgs"
    }
  },
  {
    "name": "Whirlpool",
    "customEmojiId": "5294147478424151452",
    "assets": {
      "svg": "gifts/diamondring/assets/models/whirlpool.svg",
      "tgs": "gifts/diamondring/assets/models/whirlpool.tgs"
    }
  },
  {
    "name": "Pure Love",
    "customEmojiId": "5294406340398047138",
    "assets": {
      "svg": "gifts/diamondring/assets/models/pure-love.svg",
      "tgs": "gifts/diamondring/assets/models/pure-love.tgs"
    }
  },
  {
    "name": "Sapphire",
    "customEmojiId": "5294010816859758926",
    "assets": {
      "svg": "gifts/diamondring/assets/models/sapphire.svg",
      "tgs": "gifts/diamondring/assets/models/sapphire.tgs"
    }
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5294296281861088880",
    "assets": {
      "svg": "gifts/diamondring/assets/models/rainbow.svg",
      "tgs": "gifts/diamondring/assets/models/rainbow.tgs"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5294293391348095111",
    "assets": {
      "svg": "gifts/diamondring/assets/models/diamond.svg",
      "tgs": "gifts/diamondring/assets/models/diamond.tgs"
    }
  },
  {
    "name": "Tesla",
    "customEmojiId": "5292147346514145325",
    "assets": {
      "svg": "gifts/diamondring/assets/models/tesla.svg",
      "tgs": "gifts/diamondring/assets/models/tesla.tgs"
    }
  },
  {
    "name": "Goldfinger",
    "customEmojiId": "5294436302089907750",
    "assets": {
      "svg": "gifts/diamondring/assets/models/goldfinger.svg",
      "tgs": "gifts/diamondring/assets/models/goldfinger.tgs"
    }
  },
  {
    "name": "Silver Smoke",
    "customEmojiId": "5294459817035849111",
    "assets": {
      "svg": "gifts/diamondring/assets/models/silver-smoke.svg",
      "tgs": "gifts/diamondring/assets/models/silver-smoke.tgs"
    }
  },
  {
    "name": "Black Thorn",
    "customEmojiId": "5294035787799619142",
    "assets": {
      "svg": "gifts/diamondring/assets/models/black-thorn.svg",
      "tgs": "gifts/diamondring/assets/models/black-thorn.tgs"
    }
  },
  {
    "name": "Cold Fusion",
    "customEmojiId": "5294323228485904148",
    "assets": {
      "svg": "gifts/diamondring/assets/models/cold-fusion.svg",
      "tgs": "gifts/diamondring/assets/models/cold-fusion.tgs"
    }
  },
  {
    "name": "Cobalt Rose",
    "customEmojiId": "5294424881771865676",
    "assets": {
      "svg": "gifts/diamondring/assets/models/cobalt-rose.svg",
      "tgs": "gifts/diamondring/assets/models/cobalt-rose.tgs"
    }
  },
  {
    "name": "Inferno",
    "customEmojiId": "5291843516232657775",
    "assets": {
      "svg": "gifts/diamondring/assets/models/inferno.svg",
      "tgs": "gifts/diamondring/assets/models/inferno.tgs"
    }
  },
  {
    "name": "Vice City",
    "customEmojiId": "5291756826612755821",
    "assets": {
      "svg": "gifts/diamondring/assets/models/vice-city.svg",
      "tgs": "gifts/diamondring/assets/models/vice-city.tgs"
    }
  },
  {
    "name": "Blood Band",
    "customEmojiId": "5291824858894726257",
    "assets": {
      "svg": "gifts/diamondring/assets/models/blood-band.svg",
      "tgs": "gifts/diamondring/assets/models/blood-band.tgs"
    }
  },
  {
    "name": "Orion",
    "customEmojiId": "5294169262498276598",
    "assets": {
      "svg": "gifts/diamondring/assets/models/orion.svg",
      "tgs": "gifts/diamondring/assets/models/orion.tgs"
    }
  },
  {
    "name": "Velvet Rose",
    "customEmojiId": "5291895846114193428",
    "assets": {
      "svg": "gifts/diamondring/assets/models/velvet-rose.svg",
      "tgs": "gifts/diamondring/assets/models/velvet-rose.tgs"
    }
  },
  {
    "name": "Couture",
    "customEmojiId": "5291918111224656083",
    "assets": {
      "svg": "gifts/diamondring/assets/models/couture.svg",
      "tgs": "gifts/diamondring/assets/models/couture.tgs"
    }
  },
  {
    "name": "Pink Lover",
    "customEmojiId": "5294310506792769327",
    "assets": {
      "svg": "gifts/diamondring/assets/models/pink-lover.svg",
      "tgs": "gifts/diamondring/assets/models/pink-lover.tgs"
    }
  },
  {
    "name": "Frostband",
    "customEmojiId": "5292209292827456614",
    "assets": {
      "svg": "gifts/diamondring/assets/models/frostband.svg",
      "tgs": "gifts/diamondring/assets/models/frostband.tgs"
    }
  },
  {
    "name": "Red Velvet",
    "customEmojiId": "5294206748972833638",
    "assets": {
      "svg": "gifts/diamondring/assets/models/red-velvet.svg",
      "tgs": "gifts/diamondring/assets/models/red-velvet.tgs"
    }
  },
  {
    "name": "El Dorado",
    "customEmojiId": "5294325693797132182",
    "assets": {
      "svg": "gifts/diamondring/assets/models/el-dorado.svg",
      "tgs": "gifts/diamondring/assets/models/el-dorado.tgs"
    }
  },
  {
    "name": "Steampunk",
    "customEmojiId": "5291852617268357248",
    "assets": {
      "svg": "gifts/diamondring/assets/models/steampunk.svg",
      "tgs": "gifts/diamondring/assets/models/steampunk.tgs"
    }
  },
  {
    "name": "Silver Lake",
    "customEmojiId": "5292027306473189445",
    "assets": {
      "svg": "gifts/diamondring/assets/models/silver-lake.svg",
      "tgs": "gifts/diamondring/assets/models/silver-lake.tgs"
    }
  },
  {
    "name": "Sunset",
    "customEmojiId": "5294304682817121104",
    "assets": {
      "svg": "gifts/diamondring/assets/models/sunset.svg",
      "tgs": "gifts/diamondring/assets/models/sunset.tgs"
    }
  },
  {
    "name": "Twilight",
    "customEmojiId": "5291884455860920922",
    "assets": {
      "svg": "gifts/diamondring/assets/models/twilight.svg",
      "tgs": "gifts/diamondring/assets/models/twilight.tgs"
    }
  },
  {
    "name": "Eclipse",
    "customEmojiId": "5294188211893982825",
    "assets": {
      "svg": "gifts/diamondring/assets/models/eclipse.svg",
      "tgs": "gifts/diamondring/assets/models/eclipse.tgs"
    }
  },
  {
    "name": "Aurora",
    "customEmojiId": "5294383860539220685",
    "assets": {
      "svg": "gifts/diamondring/assets/models/aurora.svg",
      "tgs": "gifts/diamondring/assets/models/aurora.tgs"
    }
  },
  {
    "name": "Acid Green",
    "customEmojiId": "5294358507347272886",
    "assets": {
      "svg": "gifts/diamondring/assets/models/acid-green.svg",
      "tgs": "gifts/diamondring/assets/models/acid-green.tgs"
    }
  },
  {
    "name": "Water Lily",
    "customEmojiId": "5291730605837411810",
    "assets": {
      "svg": "gifts/diamondring/assets/models/water-lily.svg",
      "tgs": "gifts/diamondring/assets/models/water-lily.tgs"
    }
  },
  {
    "name": "Dark Orchid",
    "customEmojiId": "5294454877823459680",
    "assets": {
      "svg": "gifts/diamondring/assets/models/dark-orchid.svg",
      "tgs": "gifts/diamondring/assets/models/dark-orchid.tgs"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5294026085468495860",
    "assets": {
      "svg": "gifts/diamondring/assets/models/champagne.svg",
      "tgs": "gifts/diamondring/assets/models/champagne.tgs"
    }
  },
  {
    "name": "Red Wedding",
    "customEmojiId": "5294107797221304152",
    "assets": {
      "svg": "gifts/diamondring/assets/models/red-wedding.svg",
      "tgs": "gifts/diamondring/assets/models/red-wedding.tgs"
    }
  },
  {
    "name": "Canary",
    "customEmojiId": "5294346640352631240",
    "assets": {
      "svg": "gifts/diamondring/assets/models/canary.svg",
      "tgs": "gifts/diamondring/assets/models/canary.tgs"
    }
  },
  {
    "name": "Black Velvet",
    "customEmojiId": "5294268368868629820",
    "assets": {
      "svg": "gifts/diamondring/assets/models/black-velvet.svg",
      "tgs": "gifts/diamondring/assets/models/black-velvet.tgs"
    }
  },
  {
    "name": "Miami Beach",
    "customEmojiId": "5294127794589033361",
    "assets": {
      "svg": "gifts/diamondring/assets/models/miami-beach.svg",
      "tgs": "gifts/diamondring/assets/models/miami-beach.tgs"
    }
  },
  {
    "name": "Color Chaos",
    "customEmojiId": "5294256531938767780",
    "assets": {
      "svg": "gifts/diamondring/assets/models/color-chaos.svg",
      "tgs": "gifts/diamondring/assets/models/color-chaos.tgs"
    }
  },
  {
    "name": "Red Light",
    "customEmojiId": "5292070251851181031",
    "assets": {
      "svg": "gifts/diamondring/assets/models/red-light.svg",
      "tgs": "gifts/diamondring/assets/models/red-light.tgs"
    }
  },
  {
    "name": "Citrus Shift",
    "customEmojiId": "5294435391556835731",
    "assets": {
      "svg": "gifts/diamondring/assets/models/citrus-shift.svg",
      "tgs": "gifts/diamondring/assets/models/citrus-shift.tgs"
    }
  },
  {
    "name": "Forest Lake",
    "customEmojiId": "5294037157894186707",
    "assets": {
      "svg": "gifts/diamondring/assets/models/forest-lake.svg",
      "tgs": "gifts/diamondring/assets/models/forest-lake.tgs"
    }
  },
  {
    "name": "Quick Silver",
    "customEmojiId": "5294460250827546818",
    "assets": {
      "svg": "gifts/diamondring/assets/models/quick-silver.svg",
      "tgs": "gifts/diamondring/assets/models/quick-silver.tgs"
    }
  },
  {
    "name": "Hot Pink",
    "customEmojiId": "5294280227273333553",
    "assets": {
      "svg": "gifts/diamondring/assets/models/hot-pink.svg",
      "tgs": "gifts/diamondring/assets/models/hot-pink.tgs"
    }
  },
  {
    "name": "Emerald",
    "customEmojiId": "5291911007348747591",
    "assets": {
      "svg": "gifts/diamondring/assets/models/emerald.svg",
      "tgs": "gifts/diamondring/assets/models/emerald.tgs"
    }
  },
  {
    "name": "Topaz",
    "customEmojiId": "5294522905810459159",
    "assets": {
      "svg": "gifts/diamondring/assets/models/topaz.svg",
      "tgs": "gifts/diamondring/assets/models/topaz.tgs"
    }
  },
  {
    "name": "Sunrise",
    "customEmojiId": "5294419521652680033",
    "assets": {
      "svg": "gifts/diamondring/assets/models/sunrise.svg",
      "tgs": "gifts/diamondring/assets/models/sunrise.tgs"
    }
  },
  {
    "name": "Barbie Gem",
    "customEmojiId": "5294390139781408346",
    "assets": {
      "svg": "gifts/diamondring/assets/models/barbie-gem.svg",
      "tgs": "gifts/diamondring/assets/models/barbie-gem.tgs"
    }
  },
  {
    "name": "Arabian Night",
    "customEmojiId": "5294365959115528446",
    "assets": {
      "svg": "gifts/diamondring/assets/models/arabian-night.svg",
      "tgs": "gifts/diamondring/assets/models/arabian-night.tgs"
    }
  },
  {
    "name": "Vintage Glam",
    "customEmojiId": "5294498918418114856",
    "assets": {
      "svg": "gifts/diamondring/assets/models/vintage-glam.svg",
      "tgs": "gifts/diamondring/assets/models/vintage-glam.tgs"
    }
  },
  {
    "name": "Honeydew",
    "customEmojiId": "5294397935147046462",
    "assets": {
      "svg": "gifts/diamondring/assets/models/honeydew.svg",
      "tgs": "gifts/diamondring/assets/models/honeydew.tgs"
    }
  },
  {
    "name": "Rose Quartz",
    "customEmojiId": "5294292321901239663",
    "assets": {
      "svg": "gifts/diamondring/assets/models/rose-quartz.svg",
      "tgs": "gifts/diamondring/assets/models/rose-quartz.tgs"
    }
  },
  {
    "name": "Azurite",
    "customEmojiId": "5294338935181302145",
    "assets": {
      "svg": "gifts/diamondring/assets/models/azurite.svg",
      "tgs": "gifts/diamondring/assets/models/azurite.tgs"
    }
  },
  {
    "name": "Space Steel",
    "customEmojiId": "5294074455390183578",
    "assets": {
      "svg": "gifts/diamondring/assets/models/space-steel.svg",
      "tgs": "gifts/diamondring/assets/models/space-steel.tgs"
    }
  },
  {
    "name": "Bondi Blue",
    "customEmojiId": "5294224311094110686",
    "assets": {
      "svg": "gifts/diamondring/assets/models/bondi-blue.svg",
      "tgs": "gifts/diamondring/assets/models/bondi-blue.tgs"
    }
  },
  {
    "name": "Mikado Yellow",
    "customEmojiId": "5294410261703191107",
    "assets": {
      "svg": "gifts/diamondring/assets/models/mikado-yellow.svg",
      "tgs": "gifts/diamondring/assets/models/mikado-yellow.tgs"
    }
  },
  {
    "name": "Mint Candy",
    "customEmojiId": "5292008146624083055",
    "assets": {
      "svg": "gifts/diamondring/assets/models/mint-candy.svg",
      "tgs": "gifts/diamondring/assets/models/mint-candy.tgs"
    }
  },
  {
    "name": "Dragon Eyes",
    "customEmojiId": "5292012501720922604",
    "assets": {
      "svg": "gifts/diamondring/assets/models/dragon-eyes.svg",
      "tgs": "gifts/diamondring/assets/models/dragon-eyes.tgs"
    }
  },
  {
    "name": "Bronze Heart",
    "customEmojiId": "5294159190799965117",
    "assets": {
      "svg": "gifts/diamondring/assets/models/bronze-heart.svg",
      "tgs": "gifts/diamondring/assets/models/bronze-heart.tgs"
    }
  },
  {
    "name": "Scrapyard",
    "customEmojiId": "5294131728779074536",
    "assets": {
      "svg": "gifts/diamondring/assets/models/scrapyard.svg",
      "tgs": "gifts/diamondring/assets/models/scrapyard.tgs"
    }
  },
  {
    "name": "Prismatic",
    "customEmojiId": "5292247084244693616",
    "assets": {
      "svg": "gifts/diamondring/assets/models/prismatic.svg",
      "tgs": "gifts/diamondring/assets/models/prismatic.tgs"
    }
  },
  {
    "name": "Peridot",
    "customEmojiId": "5291833448829317947",
    "assets": {
      "svg": "gifts/diamondring/assets/models/peridot.svg",
      "tgs": "gifts/diamondring/assets/models/peridot.tgs"
    }
  },
  {
    "name": "Black Amber",
    "customEmojiId": "5294052907539263183",
    "assets": {
      "svg": "gifts/diamondring/assets/models/black-amber.svg",
      "tgs": "gifts/diamondring/assets/models/black-amber.tgs"
    }
  },
  {
    "name": "Ultramarine",
    "customEmojiId": "5294372989976994661",
    "assets": {
      "svg": "gifts/diamondring/assets/models/ultramarine.svg",
      "tgs": "gifts/diamondring/assets/models/ultramarine.tgs"
    }
  },
  {
    "name": "Blue Pearl",
    "customEmojiId": "5294355015538860746",
    "assets": {
      "svg": "gifts/diamondring/assets/models/blue-pearl.svg",
      "tgs": "gifts/diamondring/assets/models/blue-pearl.tgs"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5291731722528911149",
    "assets": {
      "svg": "gifts/diamondring/assets/models/flamingo.svg",
      "tgs": "gifts/diamondring/assets/models/flamingo.tgs"
    }
  },
  {
    "name": "Nightshade",
    "customEmojiId": "5294145425429782618",
    "assets": {
      "svg": "gifts/diamondring/assets/models/nightshade.svg",
      "tgs": "gifts/diamondring/assets/models/nightshade.tgs"
    }
  },
  {
    "name": "Amethyst",
    "customEmojiId": "5294325818351182759",
    "assets": {
      "svg": "gifts/diamondring/assets/models/amethyst.svg",
      "tgs": "gifts/diamondring/assets/models/amethyst.tgs"
    }
  },
  {
    "name": "Dorodango",
    "customEmojiId": "5294436272025132576",
    "assets": {
      "svg": "gifts/diamondring/assets/models/dorodango.svg",
      "tgs": "gifts/diamondring/assets/models/dorodango.tgs"
    }
  },
  {
    "name": "Elven Tears",
    "customEmojiId": "5294199962924508326",
    "assets": {
      "svg": "gifts/diamondring/assets/models/elven-tears.svg",
      "tgs": "gifts/diamondring/assets/models/elven-tears.tgs"
    }
  },
  {
    "name": "Copper Rose",
    "customEmojiId": "5294013230631378156",
    "assets": {
      "svg": "gifts/diamondring/assets/models/copper-rose.svg",
      "tgs": "gifts/diamondring/assets/models/copper-rose.tgs"
    }
  },
  {
    "name": "Clam Shell",
    "customEmojiId": "5294436864730621715",
    "assets": {
      "svg": "gifts/diamondring/assets/models/clam-shell.svg",
      "tgs": "gifts/diamondring/assets/models/clam-shell.tgs"
    }
  },
  {
    "name": "Princess Cut",
    "customEmojiId": "5294183650638715364",
    "assets": {
      "svg": "gifts/diamondring/assets/models/princess-cut.svg",
      "tgs": "gifts/diamondring/assets/models/princess-cut.tgs"
    }
  },
  {
    "name": "Glamour",
    "customEmojiId": "5294032854336953620",
    "assets": {
      "svg": "gifts/diamondring/assets/models/glamour.svg",
      "tgs": "gifts/diamondring/assets/models/glamour.tgs"
    }
  },
  {
    "name": "Neon Chrome",
    "customEmojiId": "5294107466508817720",
    "assets": {
      "svg": "gifts/diamondring/assets/models/neon-chrome.svg",
      "tgs": "gifts/diamondring/assets/models/neon-chrome.tgs"
    }
  },
  {
    "name": "Sovereign",
    "customEmojiId": "5292129496630063423",
    "assets": {
      "svg": "gifts/diamondring/assets/models/sovereign.svg",
      "tgs": "gifts/diamondring/assets/models/sovereign.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Panty",
    "customEmojiId": "5199834450485085491",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/panty.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/paper-lantern.png"
    }
  },
  {
    "name": "Mailbox",
    "customEmojiId": "5199540932420078897",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mailbox.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/spider.png"
    }
  },
  {
    "name": "Love",
    "customEmojiId": "5199631105258459055",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/paw.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cap.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/spades.png"
    }
  },
  {
    "name": "Heart Lock",
    "customEmojiId": "5199623305597848266",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/heart-lock.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/moon.png"
    }
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/novus-ordo.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/knight.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Lovestruck",
    "customEmojiId": "5199557437979398051",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lovestruck.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/dice.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sea-dragon.png"
    }
  },
  {
    "name": "Love Scene",
    "customEmojiId": "5199496964839870880",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love-scene.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/holy-grail.png"
    }
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cheese.png"
    }
  },
  {
    "name": "Handcuffs",
    "customEmojiId": "5199955323749696987",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/handcuffs.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/egg.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mustache.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/hot-matcha.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Double Bed",
    "customEmojiId": "5199507204041903322",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/double-bed.png"
    }
  },
  {
    "name": "Romantic Cake",
    "customEmojiId": "5199478951747031038",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/romantic-cake.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/fire.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/plume.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Two Hearts",
    "customEmojiId": "5199852042671128551",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/two-hearts.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/tie.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Eye of Horus",
    "customEmojiId": "5199790332581021201",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/eye-of-horus.png"
    }
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/radar.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/paw-print.png"
    }
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5199862591110811286",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/rainbow.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/griffon.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/tamagotchi.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/rooster.png"
    }
  },
  {
    "name": "Loveberry",
    "customEmojiId": "5199559143081412940",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/loveberry.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/kite.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/koala.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/geisha-fan.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/yin-yang.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/shield.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Divine Falcon",
    "customEmojiId": "5199678478747732305",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/divine-falcon.png"
    }
  },
  {
    "name": "Amour Scoops",
    "customEmojiId": "5199434537490223092",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/amour-scoops.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Rabbit Mask",
    "customEmojiId": "5199524899307162798",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/rabbit-mask.png"
    }
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/valkyrie.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/origami.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pear.png"
    }
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Teddy Bear",
    "customEmojiId": "5199500701461418059",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/teddy-bear.png"
    }
  },
  {
    "name": "Cupid’s Arrow",
    "customEmojiId": null,
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cupid-s-arrow.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ball.png"
    }
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/porrige.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cone.png"
    }
  },
  {
    "name": "Muffin",
    "customEmojiId": "5199876712963279535",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/muffin.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Blossom",
    "customEmojiId": "5199927973397957915",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/blossom.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/old-candle.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cow-skull.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/corn.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Succubus",
    "customEmojiId": "5199794271066034126",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/succubus.png"
    }
  },
  {
    "name": "Gift",
    "customEmojiId": "5199482976131383979",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/gift.png"
    }
  },
  {
    "name": "Water Drops",
    "customEmojiId": "5199780544350552415",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/water-drops.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/thief.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/chili.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/monarch.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/gold.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Aubergine",
    "customEmojiId": "5199473617397649496",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/aubergine.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Lingerie",
    "customEmojiId": "5199610622559422186",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lingerie.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Love Potion",
    "customEmojiId": "5199874041493622893",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love-potion.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sword-fight.png"
    }
  },
  {
    "name": "Headband",
    "customEmojiId": "5199633115303149797",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/headband.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/two-katanas.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/warhorse.png"
    }
  },
  {
    "name": "Heart Balloon",
    "customEmojiId": "5199420948213697782",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/heart-balloon.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/gem.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/rook.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/wagasa.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/rose.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/worker-ant.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/car.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/morgenstern.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mask.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/trophy.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/palette.png"
    }
  },
  {
    "name": "Love Bulb",
    "customEmojiId": "5199492317685254591",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love-bulb.png"
    }
  },
  {
    "name": "Lovebirds",
    "customEmojiId": "5199962199992339292",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lovebirds.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/leaf.png"
    }
  },
  {
    "name": "French Fries",
    "customEmojiId": "5199752910530973025",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/french-fries.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/crown.png"
    }
  },
  {
    "name": "Snail",
    "customEmojiId": "5199427729967062308",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/snail.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/flower.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/full-moon.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/owl.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Broken Heart",
    "customEmojiId": "5199424470086882078",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/broken-heart.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Lovely Rose",
    "customEmojiId": "5201900810790798810",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lovely-rose.png"
    }
  },
  {
    "name": "Lovely Key",
    "customEmojiId": "5199585978037078422",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lovely-key.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/imperial-lion.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/axe.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Mars & Venus",
    "customEmojiId": "5199510476806984762",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/mars-venus.png"
    }
  },
  {
    "name": "Heart Box",
    "customEmojiId": "5199879650720908912",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/heart-box.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/handset.png"
    }
  },
  {
    "name": "Sweets Box",
    "customEmojiId": "5199482696958513677",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sweets-box.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cash.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/coin.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Cake",
    "customEmojiId": "5199720036851288924",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cake.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/grape.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pearl.png"
    }
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/all-seeing-eye.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "La Corona",
    "customEmojiId": "5201947986711578027",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/la-corona.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Pigeon",
    "customEmojiId": "5199552168054524122",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pigeon.png"
    }
  },
  {
    "name": "Neko Mask",
    "customEmojiId": "5199539420591589559",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/neko-mask.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/flower-sun.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bone.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/key.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Love Cherry",
    "customEmojiId": "5199696457480832394",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love-cherry.png"
    }
  },
  {
    "name": "Balloon",
    "customEmojiId": "5199576666547980545",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/balloon.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Hersir",
    "customEmojiId": "5199923815869616574",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/hersir.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/candle.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/fish.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/drug.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/dagger.png"
    }
  },
  {
    "name": "Hearts",
    "customEmojiId": "5199563412278905067",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/hearts.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ring.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Love Mug",
    "customEmojiId": "5199912941012420166",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love-mug.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/crab.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/horn.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/wise-raven.png"
    }
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lotus-flower.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Wepwawet",
    "customEmojiId": "5199485793629930536",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/wepwawet.png"
    }
  },
  {
    "name": "Flaming Heart",
    "customEmojiId": "5199802946899970622",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/flaming-heart.png"
    }
  },
  {
    "name": "Wine Toast",
    "customEmojiId": "5199921823004789063",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/wine-toast.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/maple.png"
    }
  },
  {
    "name": "Party Popper",
    "customEmojiId": "5199941017213636977",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/party-popper.png"
    }
  },
  {
    "name": "Cute Bear",
    "customEmojiId": "5199832552109543285",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cute-bear.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/apple.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Cupid",
    "customEmojiId": "5199526046063441284",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/cupid.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/takoyaki.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Love Puzzle",
    "customEmojiId": "5199822600670314306",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/love-puzzle.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/chest.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/viper.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ice-cream.png"
    }
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/war-tiger.png"
    }
  },
  {
    "name": "Angel",
    "customEmojiId": "5199834008103454742",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/angel.png"
    }
  },
  {
    "name": "Lovely Bra",
    "customEmojiId": "5199569678636190884",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lovely-bra.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/chick.png"
    }
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/bamboo.png"
    }
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/aztec-falcon.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Nemean Lion",
    "customEmojiId": "5199957797650858913",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/nemean-lion.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Ace Of Hearts",
    "customEmojiId": "5201936622228113674",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/ace-of-hearts.png"
    }
  },
  {
    "name": "Khinkali",
    "customEmojiId": "5199559430844221150",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/khinkali.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/star.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/shell.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Shiny Heart",
    "customEmojiId": "5199799154443848625",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/shiny-heart.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "assets": {
      "png": "gifts/diamondring/assets/patterns/sea-horse.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Satin Gold",
    "customEmojiId": "5377843106689344328",
    "hex": {
      "centerColor": "#bf9b47",
      "edgeColor": "#8d7739",
      "patternColor": "#5d3b00",
      "textColor": "#fee4a9"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "diamondring", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
