import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Alchemy",
    "customEmojiId": "5395399850663635725"
  },
  {
    "name": "Arctic",
    "customEmojiId": "5397907952650708737"
  },
  {
    "name": "Arts Major",
    "customEmojiId": "5397863113192140088"
  },
  {
    "name": "Banished",
    "customEmojiId": "5395493867497746525"
  },
  {
    "name": "Bat Swarm",
    "customEmojiId": "5397963155865365011"
  },
  {
    "name": "Black Magic",
    "customEmojiId": "5395342615929450448"
  },
  {
    "name": "Bouquet",
    "customEmojiId": "5395600786413609893"
  },
  {
    "name": "Candelabra",
    "customEmojiId": "5395647236484920498"
  },
  {
    "name": "Cat Familiar",
    "customEmojiId": "5395450943594589262"
  },
  {
    "name": "Cherub",
    "customEmojiId": "5395556196063145586"
  },
  {
    "name": "Christmas",
    "customEmojiId": "5395368669201068970"
  },
  {
    "name": "Circus",
    "customEmojiId": "5395403235097865452"
  },
  {
    "name": "Cobweb",
    "customEmojiId": "5395341091216060226"
  },
  {
    "name": "Cone of Cold",
    "customEmojiId": "5397901548854470017"
  },
  {
    "name": "Confetti",
    "customEmojiId": "5395423803696248019"
  },
  {
    "name": "Cthulhu",
    "customEmojiId": "5395639140471565439"
  },
  {
    "name": "Daphnaie",
    "customEmojiId": "5395663226648161926"
  },
  {
    "name": "Dark Side",
    "customEmojiId": "5397840367045339944"
  },
  {
    "name": "DJ Witch",
    "customEmojiId": "5397933894253184216"
  },
  {
    "name": "Fae Touched",
    "customEmojiId": "5395385982214236985"
  },
  {
    "name": "Freyja",
    "customEmojiId": "5395770094024421402"
  },
  {
    "name": "Green Flag",
    "customEmojiId": "5395427686346680727"
  },
  {
    "name": "Halftone",
    "customEmojiId": "5397962283987003243"
  },
  {
    "name": "Hat Shot",
    "customEmojiId": "5395482064927615148"
  },
  {
    "name": "Hatroulette",
    "customEmojiId": "5395866735083548128"
  },
  {
    "name": "Holiday",
    "customEmojiId": "5395558218992741396"
  },
  {
    "name": "Illusion",
    "customEmojiId": "5395695765320396003"
  },
  {
    "name": "Jumpscare",
    "customEmojiId": "5395326359478234102"
  },
  {
    "name": "Merlin",
    "customEmojiId": "5395446000087232470"
  },
  {
    "name": "Mine Time",
    "customEmojiId": "5395411386945791888"
  },
  {
    "name": "Mordor",
    "customEmojiId": "5395491449431162190"
  },
  {
    "name": "Necromancy",
    "customEmojiId": "5395801477350458366"
  },
  {
    "name": "Obi-Wan",
    "customEmojiId": "5397841913233567448"
  },
  {
    "name": "Observer",
    "customEmojiId": "5395551454419250877"
  },
  {
    "name": "Patchwork",
    "customEmojiId": "5395363476585605582"
  },
  {
    "name": "Phantom",
    "customEmojiId": "5395608173757361595"
  },
  {
    "name": "Polka Dot",
    "customEmojiId": "5398097347823560938"
  },
  {
    "name": "Radagast",
    "customEmojiId": "5395814370842276624"
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5395426294777278570"
  },
  {
    "name": "Red Flag",
    "customEmojiId": "5395783378358264955"
  },
  {
    "name": "Sneak Attack",
    "customEmojiId": "5395451489055435581"
  },
  {
    "name": "Sorcière",
    "customEmojiId": "5397611501123037380"
  },
  {
    "name": "Sorting Cat",
    "customEmojiId": "5395865407938652387"
  },
  {
    "name": "Spyglass",
    "customEmojiId": "5395667534500358156"
  },
  {
    "name": "Sylvester",
    "customEmojiId": "5395847283176665548"
  },
  {
    "name": "Ultraviolet",
    "customEmojiId": "5395613954783342449"
  },
  {
    "name": "Canvas",
    "customEmojiId": "5395677043557950067"
  },
  {
    "name": "Downtown",
    "customEmojiId": "5395538281754552866"
  },
  {
    "name": "Hex Taxi",
    "customEmojiId": "5395722578801225504"
  },
  {
    "name": "Hypnosis",
    "customEmojiId": "5395482657633102547"
  },
  {
    "name": "Nebula Mist",
    "customEmojiId": "5395557488848298752"
  },
  {
    "name": "Pinstripe",
    "customEmojiId": "5395415703387923766"
  },
  {
    "name": "Striped",
    "customEmojiId": "5395821839790402023"
  },
  {
    "name": "Techno",
    "customEmojiId": "5395481901718858235"
  },
  {
    "name": "Aeromancy",
    "customEmojiId": "5395506344377739662"
  },
  {
    "name": "Baba Yaga",
    "customEmojiId": "5397956335457298988"
  },
  {
    "name": "Beetroot",
    "customEmojiId": "5395359825863406299"
  },
  {
    "name": "Blood Mage",
    "customEmojiId": "5397577283118590870"
  },
  {
    "name": "Cat’s Grasp",
    "customEmojiId": "5395563501802514967"
  },
  {
    "name": "Classic",
    "customEmojiId": "5397571648121497898"
  },
  {
    "name": "Color Spray",
    "customEmojiId": "5395321102438264357"
  },
  {
    "name": "Dragonfruit",
    "customEmojiId": "5395556784473664320"
  },
  {
    "name": "Ectoplasm",
    "customEmojiId": "5395789271053399619"
  },
  {
    "name": "Ember Touch",
    "customEmojiId": "5397564690274484239"
  },
  {
    "name": "Ethereal",
    "customEmojiId": "5395474132123021090"
  },
  {
    "name": "Folklore",
    "customEmojiId": "5395627599894441220"
  },
  {
    "name": "Guava",
    "customEmojiId": "5395485329102762033"
  },
  {
    "name": "Hallowed",
    "customEmojiId": "5397650838728501270"
  },
  {
    "name": "Harvest",
    "customEmojiId": "5397676844755479122"
  },
  {
    "name": "Hobbit",
    "customEmojiId": "5395624864000274605"
  },
  {
    "name": "Incense",
    "customEmojiId": "5395813043697381562"
  },
  {
    "name": "Junk Mage",
    "customEmojiId": "5395778374721366878"
  },
  {
    "name": "Lemon Aid",
    "customEmojiId": "5395538719841216827"
  },
  {
    "name": "Little Wizard",
    "customEmojiId": "5395812571250976987"
  },
  {
    "name": "Lorendale",
    "customEmojiId": "5395458992363302531"
  },
  {
    "name": "Luminous",
    "customEmojiId": "5395451394566154328"
  },
  {
    "name": "Mad Wizard",
    "customEmojiId": "5397607953480053859"
  },
  {
    "name": "Maleficar",
    "customEmojiId": "5395833002410404811"
  },
  {
    "name": "Manacost",
    "customEmojiId": "5395842485698197765"
  },
  {
    "name": "Martian Night",
    "customEmojiId": "5395748550468465563"
  },
  {
    "name": "Midnight",
    "customEmojiId": "5395420552406003874"
  },
  {
    "name": "Morgana",
    "customEmojiId": "5395416089934983572"
  },
  {
    "name": "Morrigan",
    "customEmojiId": "5395795159453558326"
  },
  {
    "name": "Narnia",
    "customEmojiId": "5395339360344237173"
  },
  {
    "name": "Old Ochre",
    "customEmojiId": "5395862590440107035"
  },
  {
    "name": "Orchard",
    "customEmojiId": "5395320612811994428"
  },
  {
    "name": "Picasso",
    "customEmojiId": "5395381717311715422"
  },
  {
    "name": "Pink Pixie",
    "customEmojiId": "5395779409808485791"
  },
  {
    "name": "Pyromancy",
    "customEmojiId": "5395416412057530492"
  },
  {
    "name": "Sanctuary",
    "customEmojiId": "5395574088896898920"
  },
  {
    "name": "Sand Cloak",
    "customEmojiId": "5397938318069493776"
  },
  {
    "name": "Seaside",
    "customEmojiId": "5395511919245290834"
  },
  {
    "name": "Smoke Veil",
    "customEmojiId": "5395837924442926852"
  },
  {
    "name": "Spellcaster",
    "customEmojiId": "5395552850283620776"
  },
  {
    "name": "Twilight",
    "customEmojiId": "5397625975162824546"
  },
  {
    "name": "Ube Tea",
    "customEmojiId": "5395862998462001348"
  },
  {
    "name": "Vintage",
    "customEmojiId": "5395609767190229564"
  },
  {
    "name": "Wild Magic",
    "customEmojiId": "5395337466263659901"
  },
  {
    "name": "Witch Hazel",
    "customEmojiId": "5397883759099931327"
  },
  {
    "name": "Young Witch",
    "customEmojiId": "5397824973882551650"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Poison Drop",
    "customEmojiId": "5199690302792698006"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537"
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Night Bats",
    "customEmojiId": "5199725388380543708"
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Grim Reaper",
    "customEmojiId": "5199657261609290637"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234"
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Witch’s Hat",
    "customEmojiId": null
  },
  {
    "name": "Crow",
    "customEmojiId": "5199426733534641259"
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077"
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058"
  },
  {
    "name": "Voodoo Doll",
    "customEmojiId": "5199629937027353893"
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826"
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783"
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198"
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004"
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967"
  },
  {
    "name": "Happy Smile",
    "customEmojiId": "5199771185616816222"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Scarecrow",
    "customEmojiId": "5199734102869184064"
  },
  {
    "name": "Jaws",
    "customEmojiId": "5199489388517558658"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107"
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139"
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Human Scull",
    "customEmojiId": "5199616090052791141"
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678"
  },
  {
    "name": "Cauldron",
    "customEmojiId": "5199831577151966735"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Black Widow",
    "customEmojiId": "5199544041976401500"
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651"
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228"
  },
  {
    "name": "Evil Pumpkin",
    "customEmojiId": "5199669966122550110"
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107"
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060"
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880"
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651"
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088"
  },
  {
    "name": "Flying Witch",
    "customEmojiId": "5199639686603112376"
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948"
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675"
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625"
  },
  {
    "name": "Coffin",
    "customEmojiId": "5199800696337107918"
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426"
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836"
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Treats",
    "customEmojiId": "5199923330538311116"
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154"
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055"
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195"
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040"
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519"
  },
  {
    "name": "Severed Hand",
    "customEmojiId": "5199465194966780844"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082"
  },
  {
    "name": "Eyeball",
    "customEmojiId": "5199500791655727782"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Nice Ghost",
    "customEmojiId": "5199814161059579213"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886"
  },
  {
    "name": "Bloody Axe",
    "customEmojiId": "5199755874058406442"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530"
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375"
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Autumn Leaves",
    "customEmojiId": "5199868191748166568"
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715"
  },
  {
    "name": "Spooky Cat",
    "customEmojiId": "5199795890268706133"
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638"
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669"
  },
  {
    "name": "Half Moon",
    "customEmojiId": "5199418019046001807"
  },
  {
    "name": "Lollipop",
    "customEmojiId": "5199604863008277923"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Gravestone",
    "customEmojiId": "5199458662321521472"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118"
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Raspberry",
    "customEmojiId": "5375565034560713219",
    "hex": {
      "centerColor": "#e07b85",
      "edgeColor": "#b65980",
      "patternColor": "#890638",
      "textColor": "#ffd6e6"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "witchhat", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
