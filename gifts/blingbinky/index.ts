import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Monarch",
    "customEmojiId": "5204153027216315067",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/monarch.svg",
      "tgs": "gifts/blingbinky/assets/models/monarch.tgs"
    }
  },
  {
    "name": "Red Lipstick",
    "customEmojiId": "5206488591777168839",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/red-lipstick.svg",
      "tgs": "gifts/blingbinky/assets/models/red-lipstick.tgs"
    }
  },
  {
    "name": "Star Fighter",
    "customEmojiId": "5206709043858538144",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/star-fighter.svg",
      "tgs": "gifts/blingbinky/assets/models/star-fighter.tgs"
    }
  },
  {
    "name": "Adult Toy",
    "customEmojiId": "5206592585820310941",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/adult-toy.svg",
      "tgs": "gifts/blingbinky/assets/models/adult-toy.tgs"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5206606608888532333",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/diamond.svg",
      "tgs": "gifts/blingbinky/assets/models/diamond.tgs"
    }
  },
  {
    "name": "Leopard",
    "customEmojiId": "5206605208729193544",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/leopard.svg",
      "tgs": "gifts/blingbinky/assets/models/leopard.tgs"
    }
  },
  {
    "name": "Night Bat",
    "customEmojiId": "5206498242568685716",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/night-bat.svg",
      "tgs": "gifts/blingbinky/assets/models/night-bat.tgs"
    }
  },
  {
    "name": "Peach Flower",
    "customEmojiId": "5206513201939778560",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/peach-flower.svg",
      "tgs": "gifts/blingbinky/assets/models/peach-flower.tgs"
    }
  },
  {
    "name": "Silver Spoon",
    "customEmojiId": "5206616122241089688",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/silver-spoon.svg",
      "tgs": "gifts/blingbinky/assets/models/silver-spoon.tgs"
    }
  },
  {
    "name": "Tribal Skull",
    "customEmojiId": "5206256616298547390",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/tribal-skull.svg",
      "tgs": "gifts/blingbinky/assets/models/tribal-skull.tgs"
    }
  },
  {
    "name": "Water Lily",
    "customEmojiId": "5206355782798442258",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/water-lily.svg",
      "tgs": "gifts/blingbinky/assets/models/water-lily.tgs"
    }
  },
  {
    "name": "Cupid Ruby",
    "customEmojiId": "5206585434699763300",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/cupid-ruby.svg",
      "tgs": "gifts/blingbinky/assets/models/cupid-ruby.tgs"
    }
  },
  {
    "name": "Grizzly Bear",
    "customEmojiId": "5206360833679982809",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/grizzly-bear.svg",
      "tgs": "gifts/blingbinky/assets/models/grizzly-bear.tgs"
    }
  },
  {
    "name": "Ice Queen",
    "customEmojiId": "5206177438576447966",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/ice-queen.svg",
      "tgs": "gifts/blingbinky/assets/models/ice-queen.tgs"
    }
  },
  {
    "name": "Poison Apple",
    "customEmojiId": "5206356929554710081",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/poison-apple.svg",
      "tgs": "gifts/blingbinky/assets/models/poison-apple.tgs"
    }
  },
  {
    "name": "Victorian",
    "customEmojiId": "5206578704486012935",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/victorian.svg",
      "tgs": "gifts/blingbinky/assets/models/victorian.tgs"
    }
  },
  {
    "name": "Baby Lou",
    "customEmojiId": "5206594746188860318",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/baby-lou.svg",
      "tgs": "gifts/blingbinky/assets/models/baby-lou.tgs"
    }
  },
  {
    "name": "Biscuit",
    "customEmojiId": "5206225048288922804",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/biscuit.svg",
      "tgs": "gifts/blingbinky/assets/models/biscuit.tgs"
    }
  },
  {
    "name": "Black Metal",
    "customEmojiId": "5206687315618989720",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/black-metal.svg",
      "tgs": "gifts/blingbinky/assets/models/black-metal.tgs"
    }
  },
  {
    "name": "Christmas",
    "customEmojiId": "5206412463481851989",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/christmas.svg",
      "tgs": "gifts/blingbinky/assets/models/christmas.tgs"
    }
  },
  {
    "name": "Clown",
    "customEmojiId": "5206695454582014361",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/clown.svg",
      "tgs": "gifts/blingbinky/assets/models/clown.tgs"
    }
  },
  {
    "name": "Cthulhu",
    "customEmojiId": "5206172705522483731",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/cthulhu.svg",
      "tgs": "gifts/blingbinky/assets/models/cthulhu.tgs"
    }
  },
  {
    "name": "Cubic",
    "customEmojiId": "5206425966859030893",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/cubic.svg",
      "tgs": "gifts/blingbinky/assets/models/cubic.tgs"
    }
  },
  {
    "name": "Danger Bot",
    "customEmojiId": "5206594570095201374",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/danger-bot.svg",
      "tgs": "gifts/blingbinky/assets/models/danger-bot.tgs"
    }
  },
  {
    "name": "Event Horizon",
    "customEmojiId": "5206187510274759852",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/event-horizon.svg",
      "tgs": "gifts/blingbinky/assets/models/event-horizon.tgs"
    }
  },
  {
    "name": "First Ax",
    "customEmojiId": "5206578751730650903",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/first-ax.svg",
      "tgs": "gifts/blingbinky/assets/models/first-ax.tgs"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5204357592213655559",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/light-bulb.svg",
      "tgs": "gifts/blingbinky/assets/models/light-bulb.tgs"
    }
  },
  {
    "name": "Metal Chain",
    "customEmojiId": "5206182635486874442",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/metal-chain.svg",
      "tgs": "gifts/blingbinky/assets/models/metal-chain.tgs"
    }
  },
  {
    "name": "Soccer",
    "customEmojiId": "5206617230342654933",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/soccer.svg",
      "tgs": "gifts/blingbinky/assets/models/soccer.tgs"
    }
  },
  {
    "name": "The Ankh",
    "customEmojiId": "5206296099932902355",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/the-ankh.svg",
      "tgs": "gifts/blingbinky/assets/models/the-ankh.tgs"
    }
  },
  {
    "name": "Void Watcher",
    "customEmojiId": "5206511801780436533",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/void-watcher.svg",
      "tgs": "gifts/blingbinky/assets/models/void-watcher.tgs"
    }
  },
  {
    "name": "Abyss Binky",
    "customEmojiId": "5204284371611194649",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/abyss-binky.svg",
      "tgs": "gifts/blingbinky/assets/models/abyss-binky.tgs"
    }
  },
  {
    "name": "Brass Knuckles",
    "customEmojiId": "5206165081955535430",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/brass-knuckles.svg",
      "tgs": "gifts/blingbinky/assets/models/brass-knuckles.tgs"
    }
  },
  {
    "name": "Crystal Sky",
    "customEmojiId": "5204331517467201976",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/crystal-sky.svg",
      "tgs": "gifts/blingbinky/assets/models/crystal-sky.tgs"
    }
  },
  {
    "name": "Crystal Wings",
    "customEmojiId": "5206671729182680335",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/crystal-wings.svg",
      "tgs": "gifts/blingbinky/assets/models/crystal-wings.tgs"
    }
  },
  {
    "name": "Rancho",
    "customEmojiId": "5206422685504013731",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/rancho.svg",
      "tgs": "gifts/blingbinky/assets/models/rancho.tgs"
    }
  },
  {
    "name": "Red Bull",
    "customEmojiId": "5206520550628819973",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/red-bull.svg",
      "tgs": "gifts/blingbinky/assets/models/red-bull.tgs"
    }
  },
  {
    "name": "Shiny Armor",
    "customEmojiId": "5206335527732674548",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/shiny-armor.svg",
      "tgs": "gifts/blingbinky/assets/models/shiny-armor.tgs"
    }
  },
  {
    "name": "Toxic Slime",
    "customEmojiId": "5204383581060766376",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/toxic-slime.svg",
      "tgs": "gifts/blingbinky/assets/models/toxic-slime.tgs"
    }
  },
  {
    "name": "Bloodsucker",
    "customEmojiId": "5206200077349062054",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/bloodsucker.svg",
      "tgs": "gifts/blingbinky/assets/models/bloodsucker.tgs"
    }
  },
  {
    "name": "Bullet",
    "customEmojiId": "5204152799583047398",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/bullet.svg",
      "tgs": "gifts/blingbinky/assets/models/bullet.tgs"
    }
  },
  {
    "name": "Gem Seeker",
    "customEmojiId": "5206237645428002195",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/gem-seeker.svg",
      "tgs": "gifts/blingbinky/assets/models/gem-seeker.tgs"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5206191921206167891",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/ice-pop.svg",
      "tgs": "gifts/blingbinky/assets/models/ice-pop.tgs"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5206591018157252484",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/illuminati.svg",
      "tgs": "gifts/blingbinky/assets/models/illuminati.tgs"
    }
  },
  {
    "name": "Irish Kiss",
    "customEmojiId": "5206483205888184978",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/irish-kiss.svg",
      "tgs": "gifts/blingbinky/assets/models/irish-kiss.tgs"
    }
  },
  {
    "name": "Marmalade",
    "customEmojiId": "5206209951478876157",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/marmalade.svg",
      "tgs": "gifts/blingbinky/assets/models/marmalade.tgs"
    }
  },
  {
    "name": "Regent",
    "customEmojiId": "5206441901187698130",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/regent.svg",
      "tgs": "gifts/blingbinky/assets/models/regent.tgs"
    }
  },
  {
    "name": "Royal Heir",
    "customEmojiId": "5206656022487271219",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/royal-heir.svg",
      "tgs": "gifts/blingbinky/assets/models/royal-heir.tgs"
    }
  },
  {
    "name": "Shellfish",
    "customEmojiId": "5206372339897370532",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/shellfish.svg",
      "tgs": "gifts/blingbinky/assets/models/shellfish.tgs"
    }
  },
  {
    "name": "Violetta",
    "customEmojiId": "5204361380374810716",
    "assets": {
      "svg": "gifts/blingbinky/assets/models/violetta.svg",
      "tgs": "gifts/blingbinky/assets/models/violetta.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/hot-matcha.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/mustache.png"
    }
  },
  {
    "name": "Ancient Urn",
    "customEmojiId": "5199861697757609491",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/ancient-urn.png"
    }
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/wontons.png"
    }
  },
  {
    "name": "Fez",
    "customEmojiId": "5199554328423076266",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/fez.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bug.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Bobble Hat",
    "customEmojiId": "5199759262787603566",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bobble-hat.png"
    }
  },
  {
    "name": "Elf Hat",
    "customEmojiId": "5199596066915260460",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/elf-hat.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Eye of Horus",
    "customEmojiId": "5199790332581021201",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/eye-of-horus.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/potion.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/elephant.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/flower.png"
    }
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bearskin.png"
    }
  },
  {
    "name": "Wizard Hat",
    "customEmojiId": "5199659452042611516",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/wizard-hat.png"
    }
  },
  {
    "name": "Peace Dove",
    "customEmojiId": "5199441345013386136",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/peace-dove.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/fire.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Sushi Rolls",
    "customEmojiId": "5199851312526692154",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/sushi-rolls.png"
    }
  },
  {
    "name": "Snail",
    "customEmojiId": "5199427729967062308",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/snail.png"
    }
  },
  {
    "name": "Earth",
    "customEmojiId": "5199963814900042040",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/earth.png"
    }
  },
  {
    "name": "Easter Egg",
    "customEmojiId": "5199483835124843089",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/easter-egg.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/shield.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Khinkali",
    "customEmojiId": "5199559430844221150",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/khinkali.png"
    }
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/plume-shako.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/duck-face.png"
    }
  },
  {
    "name": "High Hat",
    "customEmojiId": "5199803080043958545",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/high-hat.png"
    }
  },
  {
    "name": "Beret",
    "customEmojiId": "5199710124066771918",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/beret.png"
    }
  },
  {
    "name": "Bobby Helmet",
    "customEmojiId": "5199570082363115866",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bobby-helmet.png"
    }
  },
  {
    "name": "Shako",
    "customEmojiId": "5199855955386337078",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/shako.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/coin.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/heater-shield.png"
    }
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/wagasa.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Doghouse",
    "customEmojiId": "5199765365936130864",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/doghouse.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Hersir",
    "customEmojiId": "5199923815869616574",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/hersir.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/warhorse.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/donut.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/horned-helm.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/ring.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/cow-skull.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/monarch.png"
    }
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bowler-hat.png"
    }
  },
  {
    "name": "Spring Chick",
    "customEmojiId": "5199834257211559421",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/spring-chick.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/aztec-falcon.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Piranha",
    "customEmojiId": "5199947034462818715",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/piranha.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/nemes.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "French Fries",
    "customEmojiId": "5199752910530973025",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/french-fries.png"
    }
  },
  {
    "name": "Basketball",
    "customEmojiId": "5199728789994637327",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/basketball.png"
    }
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/sailor-hat.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/origami.png"
    }
  },
  {
    "name": "Neptune",
    "customEmojiId": "5199805712858906090",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/neptune.png"
    }
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bike-helmet.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/imperial-lion.png"
    }
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/holy-grail.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Hard Hat",
    "customEmojiId": "5199914431366072974",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/hard-hat.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/like.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/plum.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/crown.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/moon-face.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/grape.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/cowboy-hat.png"
    }
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/turban.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/chest.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/crusader.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/rook.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/shell.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/kitsune-mask.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Sombrero",
    "customEmojiId": "5199736203108190403",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/sombrero.png"
    }
  },
  {
    "name": "Moto Helmet",
    "customEmojiId": "5199939002873972654",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/moto-helmet.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "La Corona",
    "customEmojiId": "5201947986711578027",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/la-corona.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/palette.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/plume.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/bucket-hat.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/tricorne.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/battle-axe.png"
    }
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/baseball-cap.png"
    }
  },
  {
    "name": "Winter Hat",
    "customEmojiId": "5199676112220754626",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/winter-hat.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/kudu-totem.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/maple.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Divine Falcon",
    "customEmojiId": "5199678478747732305",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/divine-falcon.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Royal Turban",
    "customEmojiId": "5199593258006647336",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/royal-turban.png"
    }
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/flower-sun.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/candy.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/meat-leg.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Earflap Hat",
    "customEmojiId": "5199932083681658304",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/earflap-hat.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/axe.png"
    }
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/beer.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/griffon.png"
    }
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/sword-fight.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/cap.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/yin-yang.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/mask.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/ramen.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/keffiyeh.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/novus-ordo.png"
    }
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/cheese.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/blingbinky/assets/patterns/shooting-star.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Rosewood",
    "customEmojiId": "5375125960054043180",
    "hex": {
      "centerColor": "#b77a77",
      "edgeColor": "#814c52",
      "patternColor": "#551c22",
      "textColor": "#edcacd"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "blingbinky", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
