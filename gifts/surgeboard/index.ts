import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Duke",
    "customEmojiId": "5352530450642410035",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/duke.svg",
      "tgs": "gifts/surgeboard/assets/models/duke.tgs"
    }
  },
  {
    "name": "Balls of Steel",
    "customEmojiId": "5352803679281916216",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/balls-of-steel.svg",
      "tgs": "gifts/surgeboard/assets/models/balls-of-steel.tgs"
    }
  },
  {
    "name": "Pepe Surfer",
    "customEmojiId": "5352735977712426027",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/pepe-surfer.svg",
      "tgs": "gifts/surgeboard/assets/models/pepe-surfer.tgs"
    }
  },
  {
    "name": "Ayanami",
    "customEmojiId": "5353003141858106651",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/ayanami.svg",
      "tgs": "gifts/surgeboard/assets/models/ayanami.tgs"
    }
  },
  {
    "name": "Bitcoin",
    "customEmojiId": "5352921516004646488",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/bitcoin.svg",
      "tgs": "gifts/surgeboard/assets/models/bitcoin.tgs"
    }
  },
  {
    "name": "Firefly Board",
    "customEmojiId": "5352642072547464783",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/firefly-board.svg",
      "tgs": "gifts/surgeboard/assets/models/firefly-board.tgs"
    }
  },
  {
    "name": "Obsidian",
    "customEmojiId": "5355174788992116949",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/obsidian.svg",
      "tgs": "gifts/surgeboard/assets/models/obsidian.tgs"
    }
  },
  {
    "name": "Carpe Diem",
    "customEmojiId": "5355190461327778079",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/carpe-diem.svg",
      "tgs": "gifts/surgeboard/assets/models/carpe-diem.tgs"
    }
  },
  {
    "name": "TON Shard",
    "customEmojiId": "5352994023642536635",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/ton-shard.svg",
      "tgs": "gifts/surgeboard/assets/models/ton-shard.tgs"
    }
  },
  {
    "name": "Surrealist",
    "customEmojiId": "5352681573361691182",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/surrealist.svg",
      "tgs": "gifts/surgeboard/assets/models/surrealist.tgs"
    }
  },
  {
    "name": "Great Dragon",
    "customEmojiId": "5353041152318676916",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/great-dragon.svg",
      "tgs": "gifts/surgeboard/assets/models/great-dragon.tgs"
    }
  },
  {
    "name": "Titanic",
    "customEmojiId": "5352718252382397059",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/titanic.svg",
      "tgs": "gifts/surgeboard/assets/models/titanic.tgs"
    }
  },
  {
    "name": "Akoya Pearl",
    "customEmojiId": "5352537150791393589",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/akoya-pearl.svg",
      "tgs": "gifts/surgeboard/assets/models/akoya-pearl.tgs"
    }
  },
  {
    "name": "Onyx Gold",
    "customEmojiId": "5353042750046513430",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/onyx-gold.svg",
      "tgs": "gifts/surgeboard/assets/models/onyx-gold.tgs"
    }
  },
  {
    "name": "Golden Hoard",
    "customEmojiId": "5354859959299383839",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/golden-hoard.svg",
      "tgs": "gifts/surgeboard/assets/models/golden-hoard.tgs"
    }
  },
  {
    "name": "Golden Siren",
    "customEmojiId": "5352622659295289235",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/golden-siren.svg",
      "tgs": "gifts/surgeboard/assets/models/golden-siren.tgs"
    }
  },
  {
    "name": "Oracle",
    "customEmojiId": "5352794080030008901",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/oracle.svg",
      "tgs": "gifts/surgeboard/assets/models/oracle.tgs"
    }
  },
  {
    "name": "Ouija Board",
    "customEmojiId": "5352971745647173873",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/ouija-board.svg",
      "tgs": "gifts/surgeboard/assets/models/ouija-board.tgs"
    }
  },
  {
    "name": "Pixel Feet",
    "customEmojiId": "5352745503949890174",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/pixel-feet.svg",
      "tgs": "gifts/surgeboard/assets/models/pixel-feet.tgs"
    }
  },
  {
    "name": "Planet Express",
    "customEmojiId": "5353061974320127462",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/planet-express.svg",
      "tgs": "gifts/surgeboard/assets/models/planet-express.tgs"
    }
  },
  {
    "name": "New Age",
    "customEmojiId": "5352823633699972794",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/new-age.svg",
      "tgs": "gifts/surgeboard/assets/models/new-age.tgs"
    }
  },
  {
    "name": "Starboard",
    "customEmojiId": "5352966230909163859",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/starboard.svg",
      "tgs": "gifts/surgeboard/assets/models/starboard.tgs"
    }
  },
  {
    "name": "Love Shard",
    "customEmojiId": "5355164386581323896",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/love-shard.svg",
      "tgs": "gifts/surgeboard/assets/models/love-shard.tgs"
    }
  },
  {
    "name": "Divinity",
    "customEmojiId": "5355217072945142605",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/divinity.svg",
      "tgs": "gifts/surgeboard/assets/models/divinity.tgs"
    }
  },
  {
    "name": "Quantum",
    "customEmojiId": "5352698568547281590",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/quantum.svg",
      "tgs": "gifts/surgeboard/assets/models/quantum.tgs"
    }
  },
  {
    "name": "Magic Carpet",
    "customEmojiId": "5352851396368573969",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/magic-carpet.svg",
      "tgs": "gifts/surgeboard/assets/models/magic-carpet.tgs"
    }
  },
  {
    "name": "Da Vinci",
    "customEmojiId": "5353056176114278932",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/da-vinci.svg",
      "tgs": "gifts/surgeboard/assets/models/da-vinci.tgs"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5352863177463863481",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/scarab.svg",
      "tgs": "gifts/surgeboard/assets/models/scarab.tgs"
    }
  },
  {
    "name": "French Riviera",
    "customEmojiId": "5352923891121562835",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/french-riviera.svg",
      "tgs": "gifts/surgeboard/assets/models/french-riviera.tgs"
    }
  },
  {
    "name": "One Percenter",
    "customEmojiId": "5352702936529018707",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/one-percenter.svg",
      "tgs": "gifts/surgeboard/assets/models/one-percenter.tgs"
    }
  },
  {
    "name": "Steam Jet",
    "customEmojiId": "5353067965799505562",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/steam-jet.svg",
      "tgs": "gifts/surgeboard/assets/models/steam-jet.tgs"
    }
  },
  {
    "name": "Rune Nova",
    "customEmojiId": "5353002738131178615",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/rune-nova.svg",
      "tgs": "gifts/surgeboard/assets/models/rune-nova.tgs"
    }
  },
  {
    "name": "Polar Shard",
    "customEmojiId": "5353001368036618883",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/polar-shard.svg",
      "tgs": "gifts/surgeboard/assets/models/polar-shard.tgs"
    }
  },
  {
    "name": "Magma Missile",
    "customEmojiId": "5353074008818491184",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/magma-missile.svg",
      "tgs": "gifts/surgeboard/assets/models/magma-missile.tgs"
    }
  },
  {
    "name": "Made in Heaven",
    "customEmojiId": "5352583764071456137",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/made-in-heaven.svg",
      "tgs": "gifts/surgeboard/assets/models/made-in-heaven.tgs"
    }
  },
  {
    "name": "Gothic Glider",
    "customEmojiId": "5355202208063331744",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/gothic-glider.svg",
      "tgs": "gifts/surgeboard/assets/models/gothic-glider.tgs"
    }
  },
  {
    "name": "Privateer",
    "customEmojiId": "5352598534463989613",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/privateer.svg",
      "tgs": "gifts/surgeboard/assets/models/privateer.tgs"
    }
  },
  {
    "name": "Poseidon",
    "customEmojiId": "5352758023779554740",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/poseidon.svg",
      "tgs": "gifts/surgeboard/assets/models/poseidon.tgs"
    }
  },
  {
    "name": "Drakkar",
    "customEmojiId": "5352902609558615646",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/drakkar.svg",
      "tgs": "gifts/surgeboard/assets/models/drakkar.tgs"
    }
  },
  {
    "name": "Tiki Spirit",
    "customEmojiId": "5352957748348757228",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/tiki-spirit.svg",
      "tgs": "gifts/surgeboard/assets/models/tiki-spirit.tgs"
    }
  },
  {
    "name": "Canine Cool",
    "customEmojiId": "5352544065688740682",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/canine-cool.svg",
      "tgs": "gifts/surgeboard/assets/models/canine-cool.tgs"
    }
  },
  {
    "name": "Celestial",
    "customEmojiId": "5352769873594326505",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/celestial.svg",
      "tgs": "gifts/surgeboard/assets/models/celestial.tgs"
    }
  },
  {
    "name": "Isotope",
    "customEmojiId": "5352615980621145283",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/isotope.svg",
      "tgs": "gifts/surgeboard/assets/models/isotope.tgs"
    }
  },
  {
    "name": "Tiger Mask",
    "customEmojiId": "5352687126754402468",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/tiger-mask.svg",
      "tgs": "gifts/surgeboard/assets/models/tiger-mask.tgs"
    }
  },
  {
    "name": "Hoverboard",
    "customEmojiId": "5353037948273073329",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/hoverboard.svg",
      "tgs": "gifts/surgeboard/assets/models/hoverboard.tgs"
    }
  },
  {
    "name": "Sugar Breeze",
    "customEmojiId": "5353045666329305898",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/sugar-breeze.svg",
      "tgs": "gifts/surgeboard/assets/models/sugar-breeze.tgs"
    }
  },
  {
    "name": "Wild Cat",
    "customEmojiId": "5355159254095403843",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/wild-cat.svg",
      "tgs": "gifts/surgeboard/assets/models/wild-cat.tgs"
    }
  },
  {
    "name": "Aloha",
    "customEmojiId": "5354874776936554824",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/aloha.svg",
      "tgs": "gifts/surgeboard/assets/models/aloha.tgs"
    }
  },
  {
    "name": "Blåhaj",
    "customEmojiId": "5352745791712698487",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/blahaj.svg",
      "tgs": "gifts/surgeboard/assets/models/blahaj.tgs"
    }
  },
  {
    "name": "Graffiti",
    "customEmojiId": "5352853363463598004",
    "assets": {
      "svg": "gifts/surgeboard/assets/models/graffiti.svg",
      "tgs": "gifts/surgeboard/assets/models/graffiti.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/owl.png"
    }
  },
  {
    "name": "Onigiri",
    "customEmojiId": "5199752717257444302",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/onigiri.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/wagasa.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/wise-raven.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/paw-print.png"
    }
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/hourglass.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/lily.png"
    }
  },
  {
    "name": "Bascinet",
    "customEmojiId": "5199688421597022189",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bascinet.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/shinto-shrine.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/melon.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/thunderbird.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/kudu-totem.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/yin-yang.png"
    }
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/fishing-hook.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/horned-helm.png"
    }
  },
  {
    "name": "Gua Pi Mao",
    "customEmojiId": "5199440052228229167",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/gua-pi-mao.png"
    }
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/cavalier-hat.png"
    }
  },
  {
    "name": "Moto Helmet",
    "customEmojiId": "5199939002873972654",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/moto-helmet.png"
    }
  },
  {
    "name": "Deerstalker",
    "customEmojiId": "5199479669006568749",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/deerstalker.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/coonskin-cap.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/cap.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/key.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/chest.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/planet.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Easter Bunny",
    "customEmojiId": "5199627626334947886",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/easter-bunny.png"
    }
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/tricorne.png"
    }
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/turban.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/crab.png"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/leprechaun.png"
    }
  },
  {
    "name": "La Corona",
    "customEmojiId": "5201947986711578027",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/la-corona.png"
    }
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/tamagotchi.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/galaxy.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/plum.png"
    }
  },
  {
    "name": "Wizard Hat",
    "customEmojiId": "5199659452042611516",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/wizard-hat.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/chili.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/boat.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/crown.png"
    }
  },
  {
    "name": "Egg Basket",
    "customEmojiId": "5199573548401720659",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/egg-basket.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Peace Dove",
    "customEmojiId": "5199441345013386136",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/peace-dove.png"
    }
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/dagger.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/elephant.png"
    }
  },
  {
    "name": "Spring Chick",
    "customEmojiId": "5199834257211559421",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/spring-chick.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/fish.png"
    }
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/sea-dragon.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/duck-face.png"
    }
  },
  {
    "name": "Paschal Lamb",
    "customEmojiId": "5199584784036172118",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/paschal-lamb.png"
    }
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/imperial-lion.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/baseball-cap.png"
    }
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/fedora.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Fez",
    "customEmojiId": "5199554328423076266",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/fez.png"
    }
  },
  {
    "name": "Beret",
    "customEmojiId": "5199710124066771918",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/beret.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/donut.png"
    }
  },
  {
    "name": "Earflap Hat",
    "customEmojiId": "5199932083681658304",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/earflap-hat.png"
    }
  },
  {
    "name": "Sushi Rolls",
    "customEmojiId": "5199851312526692154",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/sushi-rolls.png"
    }
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/paper-lantern.png"
    }
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/warhorse.png"
    }
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/press-hat.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/mustache.png"
    }
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/porrige.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/hot-matcha.png"
    }
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/meat-leg.png"
    }
  },
  {
    "name": "Divine Falcon",
    "customEmojiId": "5199678478747732305",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/divine-falcon.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/apple.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/candy.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/thief.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/potion.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/burger.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/candle.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Ancient Urn",
    "customEmojiId": "5199861697757609491",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/ancient-urn.png"
    }
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/horn.png"
    }
  },
  {
    "name": "Neptune",
    "customEmojiId": "5199805712858906090",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/neptune.png"
    }
  },
  {
    "name": "Basketball",
    "customEmojiId": "5199728789994637327",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/basketball.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Sleepy Unicorn",
    "customEmojiId": "5199466646665722804",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/sleepy-unicorn.png"
    }
  },
  {
    "name": "Iron Helmet",
    "customEmojiId": "5199857089257702611",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/iron-helmet.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Arcane Mirror",
    "customEmojiId": "5199560770874018874",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/arcane-mirror.png"
    }
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/serpent.png"
    }
  },
  {
    "name": "Doghouse",
    "customEmojiId": "5199765365936130864",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/doghouse.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/cow-skull.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/corn.png"
    }
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/sailor-hat.png"
    }
  },
  {
    "name": "Shako",
    "customEmojiId": "5199855955386337078",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/shako.png"
    }
  },
  {
    "name": "Hard Hat",
    "customEmojiId": "5199914431366072974",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/hard-hat.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/cash.png"
    }
  },
  {
    "name": "Peaked Cap",
    "customEmojiId": "5199944066640415730",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/peaked-cap.png"
    }
  },
  {
    "name": "Pilot Hat",
    "customEmojiId": "5199599971040525984",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pilot-hat.png"
    }
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/steampunk-hat.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/gold.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/clover.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/lightning.png"
    }
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/war-bonnet.png"
    }
  },
  {
    "name": "Mining Helmet",
    "customEmojiId": "5199842336045040776",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/mining-helmet.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Sombrero",
    "customEmojiId": "5199736203108190403",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/sombrero.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/chef-hat.png"
    }
  },
  {
    "name": "High Hat",
    "customEmojiId": "5199803080043958545",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/high-hat.png"
    }
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bowler-hat.png"
    }
  },
  {
    "name": "Bicorne",
    "customEmojiId": "5199462042460782106",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bicorne.png"
    }
  },
  {
    "name": "Jester Hat",
    "customEmojiId": "5199676378508724814",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/jester-hat.png"
    }
  },
  {
    "name": "Royal Turban",
    "customEmojiId": "5199593258006647336",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/royal-turban.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/like.png"
    }
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/plume-shako.png"
    }
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bucket-hat.png"
    }
  },
  {
    "name": "Beanie",
    "customEmojiId": "5202215137972354788",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/beanie.png"
    }
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bearskin.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/hazelnut.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/gear.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/tie.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/shell.png"
    }
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/aztec-totem.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/dice.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/spades.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/novus-ordo.png"
    }
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/war-tiger.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/griffon.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bread.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/paw.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/flower.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/book.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Flag",
    "customEmojiId": "5199874462400414430",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/flag.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/kitsune-mask.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/feather.png"
    }
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/lotus-flower.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Snail",
    "customEmojiId": "5199427729967062308",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/snail.png"
    }
  },
  {
    "name": "Ribeye Steak",
    "customEmojiId": "5199881892693838705",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/ribeye-steak.png"
    }
  },
  {
    "name": "Fried Egg",
    "customEmojiId": "5199508084510201810",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/fried-egg.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/rose.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/rooster.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/valkyrie.png"
    }
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/watching-sun.png"
    }
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/jormungandr.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/takoyaki.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/geisha-fan.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009",
    "assets": {
      "png": "gifts/surgeboard/assets/patterns/moai-head.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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

export const collection = { slug: "surgeboard", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
