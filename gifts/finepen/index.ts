import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "School Time",
    "customEmojiId": "5449731053814066008",
    "assets": {
      "svg": "gifts/finepen/assets/models/school-time.svg",
      "tgs": "gifts/finepen/assets/models/school-time.tgs"
    }
  },
  {
    "name": "Coin Mint",
    "customEmojiId": "5447230579688909184",
    "assets": {
      "svg": "gifts/finepen/assets/models/coin-mint.svg",
      "tgs": "gifts/finepen/assets/models/coin-mint.tgs"
    }
  },
  {
    "name": "Redacted",
    "customEmojiId": "5449443273825363725",
    "assets": {
      "svg": "gifts/finepen/assets/models/redacted.svg",
      "tgs": "gifts/finepen/assets/models/redacted.tgs"
    }
  },
  {
    "name": "Survivalist",
    "customEmojiId": "5447613909815043571",
    "assets": {
      "svg": "gifts/finepen/assets/models/survivalist.svg",
      "tgs": "gifts/finepen/assets/models/survivalist.tgs"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5449576387746767940",
    "assets": {
      "svg": "gifts/finepen/assets/models/firebird.svg",
      "tgs": "gifts/finepen/assets/models/firebird.tgs"
    }
  },
  {
    "name": "Heart Key",
    "customEmojiId": "5449411911974169578",
    "assets": {
      "svg": "gifts/finepen/assets/models/heart-key.svg",
      "tgs": "gifts/finepen/assets/models/heart-key.tgs"
    }
  },
  {
    "name": "Neuralyzer",
    "customEmojiId": "5449880333992372614",
    "assets": {
      "svg": "gifts/finepen/assets/models/neuralyzer.svg",
      "tgs": "gifts/finepen/assets/models/neuralyzer.tgs"
    }
  },
  {
    "name": "Red Lipstick",
    "customEmojiId": "5447342764234680189",
    "assets": {
      "svg": "gifts/finepen/assets/models/red-lipstick.svg",
      "tgs": "gifts/finepen/assets/models/red-lipstick.tgs"
    }
  },
  {
    "name": "Hopscotch",
    "customEmojiId": "5449826565296793713",
    "assets": {
      "svg": "gifts/finepen/assets/models/hopscotch.svg",
      "tgs": "gifts/finepen/assets/models/hopscotch.tgs"
    }
  },
  {
    "name": "Crystal Spire",
    "customEmojiId": "5447290520252491050",
    "assets": {
      "svg": "gifts/finepen/assets/models/crystal-spire.svg",
      "tgs": "gifts/finepen/assets/models/crystal-spire.tgs"
    }
  },
  {
    "name": "Nesting Doll",
    "customEmojiId": "5447135295839446359",
    "assets": {
      "svg": "gifts/finepen/assets/models/nesting-doll.svg",
      "tgs": "gifts/finepen/assets/models/nesting-doll.tgs"
    }
  },
  {
    "name": "Snakebound",
    "customEmojiId": "5447235050749864048",
    "assets": {
      "svg": "gifts/finepen/assets/models/snakebound.svg",
      "tgs": "gifts/finepen/assets/models/snakebound.tgs"
    }
  },
  {
    "name": "Secret Message",
    "customEmojiId": "5447516452712129125",
    "assets": {
      "svg": "gifts/finepen/assets/models/secret-message.svg",
      "tgs": "gifts/finepen/assets/models/secret-message.tgs"
    }
  },
  {
    "name": "Tip and Strip",
    "customEmojiId": "5449844269151988816",
    "assets": {
      "svg": "gifts/finepen/assets/models/tip-and-strip.svg",
      "tgs": "gifts/finepen/assets/models/tip-and-strip.tgs"
    }
  },
  {
    "name": "Big Iron",
    "customEmojiId": "5449671920704335913",
    "assets": {
      "svg": "gifts/finepen/assets/models/big-iron.svg",
      "tgs": "gifts/finepen/assets/models/big-iron.tgs"
    }
  },
  {
    "name": "Gram Validator",
    "customEmojiId": "5449574605335341599",
    "assets": {
      "svg": "gifts/finepen/assets/models/gram-validator.svg",
      "tgs": "gifts/finepen/assets/models/gram-validator.tgs"
    }
  },
  {
    "name": "Master Stroke",
    "customEmojiId": "5447442025223857849",
    "assets": {
      "svg": "gifts/finepen/assets/models/master-stroke.svg",
      "tgs": "gifts/finepen/assets/models/master-stroke.tgs"
    }
  },
  {
    "name": "Sea Legend",
    "customEmojiId": "5447177871850250405",
    "assets": {
      "svg": "gifts/finepen/assets/models/sea-legend.svg",
      "tgs": "gifts/finepen/assets/models/sea-legend.tgs"
    }
  },
  {
    "name": "Cheetah King",
    "customEmojiId": "5447595896722202364",
    "assets": {
      "svg": "gifts/finepen/assets/models/cheetah-king.svg",
      "tgs": "gifts/finepen/assets/models/cheetah-king.tgs"
    }
  },
  {
    "name": "Calligraphy",
    "customEmojiId": "5449835601907982976",
    "assets": {
      "svg": "gifts/finepen/assets/models/calligraphy.svg",
      "tgs": "gifts/finepen/assets/models/calligraphy.tgs"
    }
  },
  {
    "name": "Royal Ink",
    "customEmojiId": "5449443239465626373",
    "assets": {
      "svg": "gifts/finepen/assets/models/royal-ink.svg",
      "tgs": "gifts/finepen/assets/models/royal-ink.tgs"
    }
  },
  {
    "name": "Dragon Dynasty",
    "customEmojiId": "5447320602203435082",
    "assets": {
      "svg": "gifts/finepen/assets/models/dragon-dynasty.svg",
      "tgs": "gifts/finepen/assets/models/dragon-dynasty.tgs"
    }
  },
  {
    "name": "Ravenlord",
    "customEmojiId": "5447544412949229343",
    "assets": {
      "svg": "gifts/finepen/assets/models/ravenlord.svg",
      "tgs": "gifts/finepen/assets/models/ravenlord.tgs"
    }
  },
  {
    "name": "Triple Meow",
    "customEmojiId": "5449803999538620691",
    "assets": {
      "svg": "gifts/finepen/assets/models/triple-meow.svg",
      "tgs": "gifts/finepen/assets/models/triple-meow.tgs"
    }
  },
  {
    "name": "Ocean Shell",
    "customEmojiId": "5449913740248000168",
    "assets": {
      "svg": "gifts/finepen/assets/models/ocean-shell.svg",
      "tgs": "gifts/finepen/assets/models/ocean-shell.tgs"
    }
  },
  {
    "name": "Doom Scrawler",
    "customEmojiId": "5447523779926337747",
    "assets": {
      "svg": "gifts/finepen/assets/models/doom-scrawler.svg",
      "tgs": "gifts/finepen/assets/models/doom-scrawler.tgs"
    }
  },
  {
    "name": "Berserker",
    "customEmojiId": "5447661090030788931",
    "assets": {
      "svg": "gifts/finepen/assets/models/berserker.svg",
      "tgs": "gifts/finepen/assets/models/berserker.tgs"
    }
  },
  {
    "name": "Laser Pointer",
    "customEmojiId": "5447375182647831260",
    "assets": {
      "svg": "gifts/finepen/assets/models/laser-pointer.svg",
      "tgs": "gifts/finepen/assets/models/laser-pointer.tgs"
    }
  },
  {
    "name": "Flesh Etcher",
    "customEmojiId": "5447323999522569183",
    "assets": {
      "svg": "gifts/finepen/assets/models/flesh-etcher.svg",
      "tgs": "gifts/finepen/assets/models/flesh-etcher.tgs"
    }
  },
  {
    "name": "Dream Caster",
    "customEmojiId": "5449865821297878230",
    "assets": {
      "svg": "gifts/finepen/assets/models/dream-caster.svg",
      "tgs": "gifts/finepen/assets/models/dream-caster.tgs"
    }
  },
  {
    "name": "Unbreakable",
    "customEmojiId": "5447662155182679885",
    "assets": {
      "svg": "gifts/finepen/assets/models/unbreakable.svg",
      "tgs": "gifts/finepen/assets/models/unbreakable.tgs"
    }
  },
  {
    "name": "Pharaoh",
    "customEmojiId": "5449908015056593243",
    "assets": {
      "svg": "gifts/finepen/assets/models/pharaoh.svg",
      "tgs": "gifts/finepen/assets/models/pharaoh.tgs"
    }
  },
  {
    "name": "Imperial Gem",
    "customEmojiId": "5449623245839969148",
    "assets": {
      "svg": "gifts/finepen/assets/models/imperial-gem.svg",
      "tgs": "gifts/finepen/assets/models/imperial-gem.tgs"
    }
  },
  {
    "name": "Constellation",
    "customEmojiId": "5447304204018294913",
    "assets": {
      "svg": "gifts/finepen/assets/models/constellation.svg",
      "tgs": "gifts/finepen/assets/models/constellation.tgs"
    }
  },
  {
    "name": "London Fog",
    "customEmojiId": "5449596294920184641",
    "assets": {
      "svg": "gifts/finepen/assets/models/london-fog.svg",
      "tgs": "gifts/finepen/assets/models/london-fog.tgs"
    }
  },
  {
    "name": "Lotus Lines",
    "customEmojiId": "5449440254463356579",
    "assets": {
      "svg": "gifts/finepen/assets/models/lotus-lines.svg",
      "tgs": "gifts/finepen/assets/models/lotus-lines.tgs"
    }
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5447348691289551041",
    "assets": {
      "svg": "gifts/finepen/assets/models/astronaut.svg",
      "tgs": "gifts/finepen/assets/models/astronaut.tgs"
    }
  },
  {
    "name": "Wood Burn",
    "customEmojiId": "5447277381947535374",
    "assets": {
      "svg": "gifts/finepen/assets/models/wood-burn.svg",
      "tgs": "gifts/finepen/assets/models/wood-burn.tgs"
    }
  },
  {
    "name": "Tsar Gold",
    "customEmojiId": "5449762561694148320",
    "assets": {
      "svg": "gifts/finepen/assets/models/tsar-gold.svg",
      "tgs": "gifts/finepen/assets/models/tsar-gold.tgs"
    }
  },
  {
    "name": "Stylus",
    "customEmojiId": "5449387520854895335",
    "assets": {
      "svg": "gifts/finepen/assets/models/stylus.svg",
      "tgs": "gifts/finepen/assets/models/stylus.tgs"
    }
  },
  {
    "name": "Aether",
    "customEmojiId": "5449479446039928554",
    "assets": {
      "svg": "gifts/finepen/assets/models/aether.svg",
      "tgs": "gifts/finepen/assets/models/aether.tgs"
    }
  },
  {
    "name": "Bony Skull",
    "customEmojiId": "5447563615748007065",
    "assets": {
      "svg": "gifts/finepen/assets/models/bony-skull.svg",
      "tgs": "gifts/finepen/assets/models/bony-skull.tgs"
    }
  },
  {
    "name": "Sultan’s Peacock",
    "customEmojiId": "5447175690006865018",
    "assets": {
      "svg": "gifts/finepen/assets/models/sultan-s-peacock.svg",
      "tgs": "gifts/finepen/assets/models/sultan-s-peacock.tgs"
    }
  },
  {
    "name": "Mesh Maker",
    "customEmojiId": "5447414271145189859",
    "assets": {
      "svg": "gifts/finepen/assets/models/mesh-maker.svg",
      "tgs": "gifts/finepen/assets/models/mesh-maker.tgs"
    }
  },
  {
    "name": "Airbrush",
    "customEmojiId": "5449545768924919029",
    "assets": {
      "svg": "gifts/finepen/assets/models/airbrush.svg",
      "tgs": "gifts/finepen/assets/models/airbrush.tgs"
    }
  },
  {
    "name": "Rhinestone",
    "customEmojiId": "5447510431167981437",
    "assets": {
      "svg": "gifts/finepen/assets/models/rhinestone.svg",
      "tgs": "gifts/finepen/assets/models/rhinestone.tgs"
    }
  },
  {
    "name": "Detective",
    "customEmojiId": "5447186045173017847",
    "assets": {
      "svg": "gifts/finepen/assets/models/detective.svg",
      "tgs": "gifts/finepen/assets/models/detective.tgs"
    }
  },
  {
    "name": "Umbra Inferno",
    "customEmojiId": "5449841859675333606",
    "assets": {
      "svg": "gifts/finepen/assets/models/umbra-inferno.svg",
      "tgs": "gifts/finepen/assets/models/umbra-inferno.tgs"
    }
  },
  {
    "name": "Solar Atlas",
    "customEmojiId": "5447343606048270972",
    "assets": {
      "svg": "gifts/finepen/assets/models/solar-atlas.svg",
      "tgs": "gifts/finepen/assets/models/solar-atlas.tgs"
    }
  },
  {
    "name": "Elastic",
    "customEmojiId": "5447488900496926973",
    "assets": {
      "svg": "gifts/finepen/assets/models/elastic.svg",
      "tgs": "gifts/finepen/assets/models/elastic.tgs"
    }
  },
  {
    "name": "Silver Feather",
    "customEmojiId": "5447661515232551467",
    "assets": {
      "svg": "gifts/finepen/assets/models/silver-feather.svg",
      "tgs": "gifts/finepen/assets/models/silver-feather.tgs"
    }
  },
  {
    "name": "Tender Rose",
    "customEmojiId": "5447501772513913048",
    "assets": {
      "svg": "gifts/finepen/assets/models/tender-rose.svg",
      "tgs": "gifts/finepen/assets/models/tender-rose.tgs"
    }
  },
  {
    "name": "Vibe Coder",
    "customEmojiId": "5447455253723131487",
    "assets": {
      "svg": "gifts/finepen/assets/models/vibe-coder.svg",
      "tgs": "gifts/finepen/assets/models/vibe-coder.tgs"
    }
  },
  {
    "name": "My Little Pen",
    "customEmojiId": "5449367025270959729",
    "assets": {
      "svg": "gifts/finepen/assets/models/my-little-pen.svg",
      "tgs": "gifts/finepen/assets/models/my-little-pen.tgs"
    }
  },
  {
    "name": "Signature Scribe",
    "customEmojiId": "5447540139456767183",
    "assets": {
      "svg": "gifts/finepen/assets/models/signature-scribe.svg",
      "tgs": "gifts/finepen/assets/models/signature-scribe.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Pith Helmet",
    "customEmojiId": "5199425878836152426",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pith-helmet.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "assets": {
      "png": "gifts/finepen/assets/patterns/thunderbird.png"
    }
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047",
    "assets": {
      "png": "gifts/finepen/assets/patterns/serpent.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "assets": {
      "png": "gifts/finepen/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "assets": {
      "png": "gifts/finepen/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "assets": {
      "png": "gifts/finepen/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "assets": {
      "png": "gifts/finepen/assets/patterns/gear.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/finepen/assets/patterns/owl.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "assets": {
      "png": "gifts/finepen/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "assets": {
      "png": "gifts/finepen/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204",
    "assets": {
      "png": "gifts/finepen/assets/patterns/valkyrie.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "assets": {
      "png": "gifts/finepen/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Wepwawet",
    "customEmojiId": "5199485793629930536",
    "assets": {
      "png": "gifts/finepen/assets/patterns/wepwawet.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "assets": {
      "png": "gifts/finepen/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292",
    "assets": {
      "png": "gifts/finepen/assets/patterns/watching-sun.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "assets": {
      "png": "gifts/finepen/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/finepen/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "assets": {
      "png": "gifts/finepen/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "assets": {
      "png": "gifts/finepen/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "assets": {
      "png": "gifts/finepen/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "assets": {
      "png": "gifts/finepen/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "assets": {
      "png": "gifts/finepen/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/finepen/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "assets": {
      "png": "gifts/finepen/assets/patterns/melon.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "assets": {
      "png": "gifts/finepen/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cherry.png"
    }
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674",
    "assets": {
      "png": "gifts/finepen/assets/patterns/war-tiger.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "assets": {
      "png": "gifts/finepen/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "assets": {
      "png": "gifts/finepen/assets/patterns/elephant.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/finepen/assets/patterns/grape.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "assets": {
      "png": "gifts/finepen/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022",
    "assets": {
      "png": "gifts/finepen/assets/patterns/baseball-cap.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "assets": {
      "png": "gifts/finepen/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/finepen/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/finepen/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Bobble Hat",
    "customEmojiId": "5199759262787603566",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bobble-hat.png"
    }
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bearskin.png"
    }
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961",
    "assets": {
      "png": "gifts/finepen/assets/patterns/plume-shako.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "assets": {
      "png": "gifts/finepen/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047",
    "assets": {
      "png": "gifts/finepen/assets/patterns/turban.png"
    }
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489",
    "assets": {
      "png": "gifts/finepen/assets/patterns/heater-shield.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/finepen/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578",
    "assets": {
      "png": "gifts/finepen/assets/patterns/steampunk-hat.png"
    }
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sailor-hat.png"
    }
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623",
    "assets": {
      "png": "gifts/finepen/assets/patterns/wontons.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "assets": {
      "png": "gifts/finepen/assets/patterns/key.png"
    }
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459",
    "assets": {
      "png": "gifts/finepen/assets/patterns/coonskin-cap.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "assets": {
      "png": "gifts/finepen/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855",
    "assets": {
      "png": "gifts/finepen/assets/patterns/astronaut.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "assets": {
      "png": "gifts/finepen/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bone.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "assets": {
      "png": "gifts/finepen/assets/patterns/clover.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "assets": {
      "png": "gifts/finepen/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "assets": {
      "png": "gifts/finepen/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "assets": {
      "png": "gifts/finepen/assets/patterns/chili.png"
    }
  },
  {
    "name": "Earflap Hat",
    "customEmojiId": "5199932083681658304",
    "assets": {
      "png": "gifts/finepen/assets/patterns/earflap-hat.png"
    }
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098",
    "assets": {
      "png": "gifts/finepen/assets/patterns/academic-cap.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "assets": {
      "png": "gifts/finepen/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563",
    "assets": {
      "png": "gifts/finepen/assets/patterns/tamagotchi.png"
    }
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sword-fight.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Pirate Hat",
    "customEmojiId": "5199666663292700153",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pirate-hat.png"
    }
  },
  {
    "name": "Beret",
    "customEmojiId": "5199710124066771918",
    "assets": {
      "png": "gifts/finepen/assets/patterns/beret.png"
    }
  },
  {
    "name": "Visor",
    "customEmojiId": "5199623855353661732",
    "assets": {
      "png": "gifts/finepen/assets/patterns/visor.png"
    }
  },
  {
    "name": "Egg Basket",
    "customEmojiId": "5199573548401720659",
    "assets": {
      "png": "gifts/finepen/assets/patterns/egg-basket.png"
    }
  },
  {
    "name": "Peaked Cap",
    "customEmojiId": "5199944066640415730",
    "assets": {
      "png": "gifts/finepen/assets/patterns/peaked-cap.png"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481",
    "assets": {
      "png": "gifts/finepen/assets/patterns/leprechaun.png"
    }
  },
  {
    "name": "Kashket",
    "customEmojiId": "5199448672227594010",
    "assets": {
      "png": "gifts/finepen/assets/patterns/kashket.png"
    }
  },
  {
    "name": "Fried Egg",
    "customEmojiId": "5199508084510201810",
    "assets": {
      "png": "gifts/finepen/assets/patterns/fried-egg.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "assets": {
      "png": "gifts/finepen/assets/patterns/rose.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "assets": {
      "png": "gifts/finepen/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/finepen/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "La Corona",
    "customEmojiId": "5201947986711578027",
    "assets": {
      "png": "gifts/finepen/assets/patterns/la-corona.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "assets": {
      "png": "gifts/finepen/assets/patterns/fish.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392",
    "assets": {
      "png": "gifts/finepen/assets/patterns/paper-lantern.png"
    }
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439",
    "assets": {
      "png": "gifts/finepen/assets/patterns/takoyaki.png"
    }
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557",
    "assets": {
      "png": "gifts/finepen/assets/patterns/meat-leg.png"
    }
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330",
    "assets": {
      "png": "gifts/finepen/assets/patterns/rooster.png"
    }
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603",
    "assets": {
      "png": "gifts/finepen/assets/patterns/hourglass.png"
    }
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516",
    "assets": {
      "png": "gifts/finepen/assets/patterns/fishing-hook.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "assets": {
      "png": "gifts/finepen/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "assets": {
      "png": "gifts/finepen/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "assets": {
      "png": "gifts/finepen/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "assets": {
      "png": "gifts/finepen/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "assets": {
      "png": "gifts/finepen/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/finepen/assets/patterns/mask.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "assets": {
      "png": "gifts/finepen/assets/patterns/tie.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "assets": {
      "png": "gifts/finepen/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/finepen/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/finepen/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "assets": {
      "png": "gifts/finepen/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/finepen/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "assets": {
      "png": "gifts/finepen/assets/patterns/dice.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "assets": {
      "png": "gifts/finepen/assets/patterns/car.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/finepen/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/finepen/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/finepen/assets/patterns/eagle.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "assets": {
      "png": "gifts/finepen/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/finepen/assets/patterns/shield.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/finepen/assets/patterns/rook.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/finepen/assets/patterns/knight.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "assets": {
      "png": "gifts/finepen/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Divine Falcon",
    "customEmojiId": "5199678478747732305",
    "assets": {
      "png": "gifts/finepen/assets/patterns/divine-falcon.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/finepen/assets/patterns/ring.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "assets": {
      "png": "gifts/finepen/assets/patterns/yin-yang.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/finepen/assets/patterns/chest.png"
    }
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129",
    "assets": {
      "png": "gifts/finepen/assets/patterns/tricorne.png"
    }
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222",
    "assets": {
      "png": "gifts/finepen/assets/patterns/banana.png"
    }
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208",
    "assets": {
      "png": "gifts/finepen/assets/patterns/worker-ant.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/finepen/assets/patterns/gold.png"
    }
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501",
    "assets": {
      "png": "gifts/finepen/assets/patterns/chick.png"
    }
  },
  {
    "name": "Hard Hat",
    "customEmojiId": "5199914431366072974",
    "assets": {
      "png": "gifts/finepen/assets/patterns/hard-hat.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/finepen/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "assets": {
      "png": "gifts/finepen/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "assets": {
      "png": "gifts/finepen/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683",
    "assets": {
      "png": "gifts/finepen/assets/patterns/press-hat.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "assets": {
      "png": "gifts/finepen/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "assets": {
      "png": "gifts/finepen/assets/patterns/origami.png"
    }
  },
  {
    "name": "Easter Egg",
    "customEmojiId": "5199483835124843089",
    "assets": {
      "png": "gifts/finepen/assets/patterns/easter-egg.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "assets": {
      "png": "gifts/finepen/assets/patterns/gem.png"
    }
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Paschal Lamb",
    "customEmojiId": "5199584784036172118",
    "assets": {
      "png": "gifts/finepen/assets/patterns/paschal-lamb.png"
    }
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619",
    "assets": {
      "png": "gifts/finepen/assets/patterns/war-bonnet.png"
    }
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385",
    "assets": {
      "png": "gifts/finepen/assets/patterns/teru-bozu.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "assets": {
      "png": "gifts/finepen/assets/patterns/wise-raven.png"
    }
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "assets": {
      "png": "gifts/finepen/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/finepen/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/finepen/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "assets": {
      "png": "gifts/finepen/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353",
    "assets": {
      "png": "gifts/finepen/assets/patterns/bowler-hat.png"
    }
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cowboy-hat.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cap.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234",
    "assets": {
      "png": "gifts/finepen/assets/patterns/keffiyeh.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "assets": {
      "png": "gifts/finepen/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/finepen/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/finepen/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/finepen/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383",
    "assets": {
      "png": "gifts/finepen/assets/patterns/radar.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/finepen/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "assets": {
      "png": "gifts/finepen/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cash.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "assets": {
      "png": "gifts/finepen/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/finepen/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619",
    "assets": {
      "png": "gifts/finepen/assets/patterns/ramen.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "assets": {
      "png": "gifts/finepen/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "assets": {
      "png": "gifts/finepen/assets/patterns/horn.png"
    }
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cavalier-hat.png"
    }
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276",
    "assets": {
      "png": "gifts/finepen/assets/patterns/hazelnut.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "assets": {
      "png": "gifts/finepen/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "assets": {
      "png": "gifts/finepen/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Hersir",
    "customEmojiId": "5199923815869616574",
    "assets": {
      "png": "gifts/finepen/assets/patterns/hersir.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "assets": {
      "png": "gifts/finepen/assets/patterns/two-katanas.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/finepen/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "assets": {
      "png": "gifts/finepen/assets/patterns/kitsune-mask.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/finepen/assets/patterns/crown.png"
    }
  },
  {
    "name": "Thor Hammer",
    "customEmojiId": "5199857621833649230",
    "assets": {
      "png": "gifts/finepen/assets/patterns/thor-hammer.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "assets": {
      "png": "gifts/finepen/assets/patterns/kudu-totem.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "assets": {
      "png": "gifts/finepen/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "assets": {
      "png": "gifts/finepen/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "assets": {
      "png": "gifts/finepen/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986",
    "assets": {
      "png": "gifts/finepen/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/finepen/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "assets": {
      "png": "gifts/finepen/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "assets": {
      "png": "gifts/finepen/assets/patterns/spider.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "assets": {
      "png": "gifts/finepen/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "assets": {
      "png": "gifts/finepen/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cow-skull.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "assets": {
      "png": "gifts/finepen/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/finepen/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Legionary",
    "customEmojiId": "5199428202413461386",
    "assets": {
      "png": "gifts/finepen/assets/patterns/legionary.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/finepen/assets/patterns/thief.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "assets": {
      "png": "gifts/finepen/assets/patterns/skull.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "assets": {
      "png": "gifts/finepen/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "assets": {
      "png": "gifts/finepen/assets/patterns/morgenstern.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "assets": {
      "png": "gifts/finepen/assets/patterns/conch.png"
    }
  },
  {
    "name": "Nemean Lion",
    "customEmojiId": "5199957797650858913",
    "assets": {
      "png": "gifts/finepen/assets/patterns/nemean-lion.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "assets": {
      "png": "gifts/finepen/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "assets": {
      "png": "gifts/finepen/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/finepen/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/finepen/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "assets": {
      "png": "gifts/finepen/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697",
    "assets": {
      "png": "gifts/finepen/assets/patterns/dagger.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "assets": {
      "png": "gifts/finepen/assets/patterns/boat.png"
    }
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570",
    "assets": {
      "png": "gifts/finepen/assets/patterns/hot-matcha.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/finepen/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "assets": {
      "png": "gifts/finepen/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "assets": {
      "png": "gifts/finepen/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "assets": {
      "png": "gifts/finepen/assets/patterns/book.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "assets": {
      "png": "gifts/finepen/assets/patterns/drug.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "assets": {
      "png": "gifts/finepen/assets/patterns/grenade.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "assets": {
      "png": "gifts/finepen/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "assets": {
      "png": "gifts/finepen/assets/patterns/flower-sun.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "assets": {
      "png": "gifts/finepen/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "assets": {
      "png": "gifts/finepen/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "assets": {
      "png": "gifts/finepen/assets/patterns/leaf.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/finepen/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/finepen/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "assets": {
      "png": "gifts/finepen/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376",
    "assets": {
      "png": "gifts/finepen/assets/patterns/obon-lantern.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Marine Blue",
    "customEmojiId": "5375439277918288314",
    "hex": {
      "centerColor": "#4e689c",
      "edgeColor": "#3b4b7a",
      "patternColor": "#010821",
      "textColor": "#bbcbf2"
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
    "name": "Midnight Blue",
    "customEmojiId": "5375050733701852215",
    "hex": {
      "centerColor": "#5c6985",
      "edgeColor": "#354057",
      "patternColor": "#030a18",
      "textColor": "#bfcce0"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "finepen", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
