import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Death Note",
    "customEmojiId": "5334598421015731428",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/death-note.svg",
      "tgs": "gifts/timelessbook/assets/models/death-note.tgs"
    }
  },
  {
    "name": "The Ledger",
    "customEmojiId": "5337294097109525977",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/the-ledger.svg",
      "tgs": "gifts/timelessbook/assets/models/the-ledger.tgs"
    }
  },
  {
    "name": "Token Vault",
    "customEmojiId": "5334949246829371782",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/token-vault.svg",
      "tgs": "gifts/timelessbook/assets/models/token-vault.tgs"
    }
  },
  {
    "name": "Evidence",
    "customEmojiId": "5337091653826027709",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/evidence.svg",
      "tgs": "gifts/timelessbook/assets/models/evidence.tgs"
    }
  },
  {
    "name": "Journal 1",
    "customEmojiId": "5334675412599480338",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/journal-1.svg",
      "tgs": "gifts/timelessbook/assets/models/journal-1.tgs"
    }
  },
  {
    "name": "Kamasutra",
    "customEmojiId": "5336829549151823064",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/kamasutra.svg",
      "tgs": "gifts/timelessbook/assets/models/kamasutra.tgs"
    }
  },
  {
    "name": "Rebel Dog",
    "customEmojiId": "5336824240572243316",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/rebel-dog.svg",
      "tgs": "gifts/timelessbook/assets/models/rebel-dog.tgs"
    }
  },
  {
    "name": "Tom’s Diary",
    "customEmojiId": "5335049963812462851",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/tom-s-diary.svg",
      "tgs": "gifts/timelessbook/assets/models/tom-s-diary.tgs"
    }
  },
  {
    "name": "Dragon Age",
    "customEmojiId": "5337260733803568620",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/dragon-age.svg",
      "tgs": "gifts/timelessbook/assets/models/dragon-age.tgs"
    }
  },
  {
    "name": "Fahrenheit 451",
    "customEmojiId": "5334833278417414222",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/fahrenheit-451.svg",
      "tgs": "gifts/timelessbook/assets/models/fahrenheit-451.tgs"
    }
  },
  {
    "name": "Fairy Tales",
    "customEmojiId": "5337129372228816979",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/fairy-tales.svg",
      "tgs": "gifts/timelessbook/assets/models/fairy-tales.tgs"
    }
  },
  {
    "name": "Froges",
    "customEmojiId": "5337151177777779020",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/froges.svg",
      "tgs": "gifts/timelessbook/assets/models/froges.tgs"
    }
  },
  {
    "name": "Lovecraft",
    "customEmojiId": "5334781644320580583",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/lovecraft.svg",
      "tgs": "gifts/timelessbook/assets/models/lovecraft.tgs"
    }
  },
  {
    "name": "Monster Book",
    "customEmojiId": "5335022570511046644",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/monster-book.svg",
      "tgs": "gifts/timelessbook/assets/models/monster-book.tgs"
    }
  },
  {
    "name": "Astrology",
    "customEmojiId": "5337056130151520561",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/astrology.svg",
      "tgs": "gifts/timelessbook/assets/models/astrology.tgs"
    }
  },
  {
    "name": "Billy Milligan",
    "customEmojiId": "5337092942316213509",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/billy-milligan.svg",
      "tgs": "gifts/timelessbook/assets/models/billy-milligan.tgs"
    }
  },
  {
    "name": "E-Reader",
    "customEmojiId": "5336849228691972264",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/e-reader.svg",
      "tgs": "gifts/timelessbook/assets/models/e-reader.tgs"
    }
  },
  {
    "name": "Hitchhiker",
    "customEmojiId": "5334524272700332792",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/hitchhiker.svg",
      "tgs": "gifts/timelessbook/assets/models/hitchhiker.tgs"
    }
  },
  {
    "name": "Liberty Scroll",
    "customEmojiId": "5334666264319141034",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/liberty-scroll.svg",
      "tgs": "gifts/timelessbook/assets/models/liberty-scroll.tgs"
    }
  },
  {
    "name": "Metro",
    "customEmojiId": "5336827075250659772",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/metro.svg",
      "tgs": "gifts/timelessbook/assets/models/metro.tgs"
    }
  },
  {
    "name": "Wisdom Scroll",
    "customEmojiId": "5337014550573128147",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/wisdom-scroll.svg",
      "tgs": "gifts/timelessbook/assets/models/wisdom-scroll.tgs"
    }
  },
  {
    "name": "Big Brother",
    "customEmojiId": "5337202678730630109",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/big-brother.svg",
      "tgs": "gifts/timelessbook/assets/models/big-brother.tgs"
    }
  },
  {
    "name": "Burn Book",
    "customEmojiId": "5337285107742973333",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/burn-book.svg",
      "tgs": "gifts/timelessbook/assets/models/burn-book.tgs"
    }
  },
  {
    "name": "Crazy Book",
    "customEmojiId": "5336774191318345803",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/crazy-book.svg",
      "tgs": "gifts/timelessbook/assets/models/crazy-book.tgs"
    }
  },
  {
    "name": "Crystal Tome",
    "customEmojiId": "5334585394379922861",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/crystal-tome.svg",
      "tgs": "gifts/timelessbook/assets/models/crystal-tome.tgs"
    }
  },
  {
    "name": "Lord of Flies",
    "customEmojiId": "5337168456431213033",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/lord-of-flies.svg",
      "tgs": "gifts/timelessbook/assets/models/lord-of-flies.tgs"
    }
  },
  {
    "name": "Mystique",
    "customEmojiId": "5336920409184967576",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/mystique.svg",
      "tgs": "gifts/timelessbook/assets/models/mystique.tgs"
    }
  },
  {
    "name": "Rocket Science",
    "customEmojiId": "5334875493650967463",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/rocket-science.svg",
      "tgs": "gifts/timelessbook/assets/models/rocket-science.tgs"
    }
  },
  {
    "name": "Secret Chapter",
    "customEmojiId": "5334859426178313935",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/secret-chapter.svg",
      "tgs": "gifts/timelessbook/assets/models/secret-chapter.tgs"
    }
  },
  {
    "name": "Songbook",
    "customEmojiId": "5337183699270147354",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/songbook.svg",
      "tgs": "gifts/timelessbook/assets/models/songbook.tgs"
    }
  },
  {
    "name": "Tiny Kingdom",
    "customEmojiId": "5334693674800419091",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/tiny-kingdom.svg",
      "tgs": "gifts/timelessbook/assets/models/tiny-kingdom.tgs"
    }
  },
  {
    "name": "Ulysses",
    "customEmojiId": "5334841391610634649",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/ulysses.svg",
      "tgs": "gifts/timelessbook/assets/models/ulysses.tgs"
    }
  },
  {
    "name": "Unfinished",
    "customEmojiId": "5334746438473651565",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/unfinished.svg",
      "tgs": "gifts/timelessbook/assets/models/unfinished.tgs"
    }
  },
  {
    "name": "Anatomy",
    "customEmojiId": "5337160746964919130",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/anatomy.svg",
      "tgs": "gifts/timelessbook/assets/models/anatomy.tgs"
    }
  },
  {
    "name": "Animator",
    "customEmojiId": "5334827815219010666",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/animator.svg",
      "tgs": "gifts/timelessbook/assets/models/animator.tgs"
    }
  },
  {
    "name": "Divine Comedy",
    "customEmojiId": "5337119940480635549",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/divine-comedy.svg",
      "tgs": "gifts/timelessbook/assets/models/divine-comedy.tgs"
    }
  },
  {
    "name": "Love Story",
    "customEmojiId": "5334930069800396598",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/love-story.svg",
      "tgs": "gifts/timelessbook/assets/models/love-story.tgs"
    }
  },
  {
    "name": "Pirate Tales",
    "customEmojiId": "5334691222374094913",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/pirate-tales.svg",
      "tgs": "gifts/timelessbook/assets/models/pirate-tales.tgs"
    }
  },
  {
    "name": "Secret Files",
    "customEmojiId": "5334655599915343684",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/secret-files.svg",
      "tgs": "gifts/timelessbook/assets/models/secret-files.tgs"
    }
  },
  {
    "name": "Unipedia",
    "customEmojiId": "5334571994081959176",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/unipedia.svg",
      "tgs": "gifts/timelessbook/assets/models/unipedia.tgs"
    }
  },
  {
    "name": "Voodoo",
    "customEmojiId": "5336841364606854909",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/voodoo.svg",
      "tgs": "gifts/timelessbook/assets/models/voodoo.tgs"
    }
  },
  {
    "name": "Chemistry",
    "customEmojiId": "5337176990531233537",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/chemistry.svg",
      "tgs": "gifts/timelessbook/assets/models/chemistry.tgs"
    }
  },
  {
    "name": "Clay Tablets",
    "customEmojiId": "5334960439514144850",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/clay-tablets.svg",
      "tgs": "gifts/timelessbook/assets/models/clay-tablets.tgs"
    }
  },
  {
    "name": "Ice Nine",
    "customEmojiId": "5337315683615150886",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/ice-nine.svg",
      "tgs": "gifts/timelessbook/assets/models/ice-nine.tgs"
    }
  },
  {
    "name": "Shakespeare",
    "customEmojiId": "5337164539421041850",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/shakespeare.svg",
      "tgs": "gifts/timelessbook/assets/models/shakespeare.tgs"
    }
  },
  {
    "name": "Academic",
    "customEmojiId": "5334597158295347764",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/academic.svg",
      "tgs": "gifts/timelessbook/assets/models/academic.tgs"
    }
  },
  {
    "name": "Alphabet",
    "customEmojiId": "5336854077710048344",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/alphabet.svg",
      "tgs": "gifts/timelessbook/assets/models/alphabet.tgs"
    }
  },
  {
    "name": "Animal Friends",
    "customEmojiId": "5334687223759542328",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/animal-friends.svg",
      "tgs": "gifts/timelessbook/assets/models/animal-friends.tgs"
    }
  },
  {
    "name": "Cookbook",
    "customEmojiId": "5336908198592944331",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/cookbook.svg",
      "tgs": "gifts/timelessbook/assets/models/cookbook.tgs"
    }
  },
  {
    "name": "Geometry",
    "customEmojiId": "5337222418400319432",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/geometry.svg",
      "tgs": "gifts/timelessbook/assets/models/geometry.tgs"
    }
  },
  {
    "name": "Herbarium",
    "customEmojiId": "5337218290936749946",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/herbarium.svg",
      "tgs": "gifts/timelessbook/assets/models/herbarium.tgs"
    }
  },
  {
    "name": "Paleontology",
    "customEmojiId": "5336776063924083190",
    "assets": {
      "svg": "gifts/timelessbook/assets/models/paleontology.svg",
      "tgs": "gifts/timelessbook/assets/models/paleontology.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/paw-print.png"
    }
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/hourglass.png"
    }
  },
  {
    "name": "French Fries",
    "customEmojiId": "5199752910530973025",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/french-fries.png"
    }
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ramen.png"
    }
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/rose.png"
    }
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/tamagotchi.png"
    }
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/chef-hat.png"
    }
  },
  {
    "name": "High Hat",
    "customEmojiId": "5199803080043958545",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/high-hat.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/gear.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/like.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/thief.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/melon.png"
    }
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/kudu-totem.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/elephant.png"
    }
  },
  {
    "name": "Deerstalker",
    "customEmojiId": "5199479669006568749",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/deerstalker.png"
    }
  },
  {
    "name": "Flag",
    "customEmojiId": "5199874462400414430",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/flag.png"
    }
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bucket-hat.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Royal Turban",
    "customEmojiId": "5199593258006647336",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/royal-turban.png"
    }
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/baseball-cap.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Gua Pi Mao",
    "customEmojiId": "5199440052228229167",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/gua-pi-mao.png"
    }
  },
  {
    "name": "Kashket",
    "customEmojiId": "5199448672227594010",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/kashket.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/moon.png"
    }
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/obon-lantern.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/coonskin-cap.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Robin Hood",
    "customEmojiId": "5199634154685237795",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/robin-hood.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/clover.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/shield.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/shell.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/dolphin.png"
    }
  },
  {
    "name": "Straw Hat",
    "customEmojiId": "5199475953859857051",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/straw-hat.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Winged Helmet",
    "customEmojiId": "5199518650129746938",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/winged-helmet.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/lily.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/palette.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/feather.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pear.png"
    }
  },
  {
    "name": "Ancient Urn",
    "customEmojiId": "5199861697757609491",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ancient-urn.png"
    }
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/meat-leg.png"
    }
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ice-cream.png"
    }
  },
  {
    "name": "Doctor Hat",
    "customEmojiId": "5199584148381011556",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/doctor-hat.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Bobby Helmet",
    "customEmojiId": "5199570082363115866",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bobby-helmet.png"
    }
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/academic-cap.png"
    }
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/police-hat.png"
    }
  },
  {
    "name": "Bandana",
    "customEmojiId": "5199711902183232393",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bandana.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/monarch.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/wise-raven.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/burger.png"
    }
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/press-hat.png"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/leprechaun.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/shuriken.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/apple.png"
    }
  },
  {
    "name": "Pirate Hat",
    "customEmojiId": "5199666663292700153",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pirate-hat.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Divine Falcon",
    "customEmojiId": "5199678478747732305",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/divine-falcon.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/kitsune-mask.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/viper.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Wepwawet",
    "customEmojiId": "5199485793629930536",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/wepwawet.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/two-katanas.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/aztec-falcon.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/heart.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/mask.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ring.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/car.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Sleepy Unicorn",
    "customEmojiId": "5199466646665722804",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/sleepy-unicorn.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/egg.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/sword-fight.png"
    }
  },
  {
    "name": "Iron Helmet",
    "customEmojiId": "5199857089257702611",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/iron-helmet.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/moai-head.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Arcane Mirror",
    "customEmojiId": "5199560770874018874",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/arcane-mirror.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/knight.png"
    }
  },
  {
    "name": "Piranha",
    "customEmojiId": "5199947034462818715",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/piranha.png"
    }
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/porrige.png"
    }
  },
  {
    "name": "Fried Egg",
    "customEmojiId": "5199508084510201810",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/fried-egg.png"
    }
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/fishing-hook.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/rook.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/horned-helm.png"
    }
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/fedora.png"
    }
  },
  {
    "name": "Elf Hat",
    "customEmojiId": "5199596066915260460",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/elf-hat.png"
    }
  },
  {
    "name": "Peaked Cap",
    "customEmojiId": "5199944066640415730",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/peaked-cap.png"
    }
  },
  {
    "name": "Pith Helmet",
    "customEmojiId": "5199425878836152426",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pith-helmet.png"
    }
  },
  {
    "name": "Wizard Hat",
    "customEmojiId": "5199659452042611516",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/wizard-hat.png"
    }
  },
  {
    "name": "Egg Basket",
    "customEmojiId": "5199573548401720659",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/egg-basket.png"
    }
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/tricorne.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/chest.png"
    }
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/propeller-cap.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Conical Hat",
    "customEmojiId": "5199648817703584324",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/conical-hat.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/donut.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Moto Helmet",
    "customEmojiId": "5199939002873972654",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/moto-helmet.png"
    }
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bearskin.png"
    }
  },
  {
    "name": "Bobble Hat",
    "customEmojiId": "5199759262787603566",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bobble-hat.png"
    }
  },
  {
    "name": "Doghouse",
    "customEmojiId": "5199765365936130864",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/doghouse.png"
    }
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/spider.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/coin.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/conch.png"
    }
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/greek-helmet.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/sakura-flower.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/lotus-flower.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/candle.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/potion.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/crab.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/axe.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/light-bulb.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/cone.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bee.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "La Corona",
    "customEmojiId": "5201947986711578027",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/la-corona.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/fire.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/aztec-totem.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Eye of Horus",
    "customEmojiId": "5199790332581021201",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/eye-of-horus.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/boat.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/takoyaki.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/fish.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/viking-shield.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/flower.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/grape.png"
    }
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/moon-face.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Hersir",
    "customEmojiId": "5199923815869616574",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/hersir.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "assets": {
      "png": "gifts/timelessbook/assets/patterns/mustache.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Electric Indigo",
    "customEmojiId": "5375368406662934349",
    "hex": {
      "centerColor": "#a980f3",
      "edgeColor": "#5b62d8",
      "patternColor": "#3722ab",
      "textColor": "#d8d8ff"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "timelessbook", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
