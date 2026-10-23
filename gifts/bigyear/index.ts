import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Creator",
    "customEmojiId": "5269697299054882614"
  },
  {
    "name": "Game Boy",
    "customEmojiId": "5269475369504768045"
  },
  {
    "name": "Gold Mine",
    "customEmojiId": "5269626243115939378"
  },
  {
    "name": "Jelly Year",
    "customEmojiId": "5269274480999430796"
  },
  {
    "name": "The Nether",
    "customEmojiId": "5267298731618759899"
  },
  {
    "name": "Balloons",
    "customEmojiId": "5267376466231855067"
  },
  {
    "name": "Cheshire Cat",
    "customEmojiId": "5267142639622322394"
  },
  {
    "name": "King of Pop",
    "customEmojiId": "5267203052632308499"
  },
  {
    "name": "Sir Chaplin",
    "customEmojiId": "5269594348688795855"
  },
  {
    "name": "The Hobbit",
    "customEmojiId": "5267006888590996307"
  },
  {
    "name": "Frida Kahlo",
    "customEmojiId": "5269426351043014589"
  },
  {
    "name": "Original Cola",
    "customEmojiId": "5269706417270451650"
  },
  {
    "name": "Sherlock",
    "customEmojiId": "5267034565360256002"
  },
  {
    "name": "Sputnik-1",
    "customEmojiId": "5269420883549644953"
  },
  {
    "name": "Toon Family",
    "customEmojiId": "5269233597205739159"
  },
  {
    "name": "Zombie Film",
    "customEmojiId": "5267514661099567621"
  },
  {
    "name": "A New Hope",
    "customEmojiId": "5267504074005182704"
  },
  {
    "name": "AC/DC",
    "customEmojiId": "5269613482768102692"
  },
  {
    "name": "Big Brother",
    "customEmojiId": "5267024162949464364"
  },
  {
    "name": "Covid-19",
    "customEmojiId": "5269757742129638578"
  },
  {
    "name": "Da Vinci",
    "customEmojiId": "5267212570279836970"
  },
  {
    "name": "Einstein",
    "customEmojiId": "5269629971147553324"
  },
  {
    "name": "First Flight",
    "customEmojiId": "5269650273457963077"
  },
  {
    "name": "First Website",
    "customEmojiId": "5269338922688737906"
  },
  {
    "name": "Mauveine",
    "customEmojiId": "5267262357540731296"
  },
  {
    "name": "Qing Dynasty",
    "customEmojiId": "5269771314226295217"
  },
  {
    "name": "Salvador Dali",
    "customEmojiId": "5267070415452273513"
  },
  {
    "name": "Van Gogh",
    "customEmojiId": "5267050559818464469"
  },
  {
    "name": "War and Peace",
    "customEmojiId": "5269708345710767667"
  },
  {
    "name": "Bikini Bottom",
    "customEmojiId": "5269350201272857794"
  },
  {
    "name": "Christmas Carol",
    "customEmojiId": "5269300895048302930"
  },
  {
    "name": "Columbus",
    "customEmojiId": "5269309948839359684"
  },
  {
    "name": "Fallout",
    "customEmojiId": "5269459813133217656"
  },
  {
    "name": "Frankenstein",
    "customEmojiId": "5269612271587321541"
  },
  {
    "name": "Industrial",
    "customEmojiId": "5269582030722593948"
  },
  {
    "name": "Night Bat",
    "customEmojiId": "5269465014338616448"
  },
  {
    "name": "Nostradamus",
    "customEmojiId": "5269326179520768761"
  },
  {
    "name": "Nuclein",
    "customEmojiId": "5266997976533858903"
  },
  {
    "name": "Pavel Durov",
    "customEmojiId": "5269410030167288604"
  },
  {
    "name": "Periodic Table",
    "customEmojiId": "5267175650740958938"
  },
  {
    "name": "Picasso",
    "customEmojiId": "5269598218454332539"
  },
  {
    "name": "Spider Sense",
    "customEmojiId": "5269583121644288174"
  },
  {
    "name": "Steve Jobs",
    "customEmojiId": "5267221503811813758"
  },
  {
    "name": "Wizard Boy",
    "customEmojiId": "5267001154809657887"
  },
  {
    "name": "2048",
    "customEmojiId": "5269739862180787693"
  },
  {
    "name": "Bitcoin",
    "customEmojiId": "5269436066259040643"
  },
  {
    "name": "Cyberpunk",
    "customEmojiId": "5269410807556370096"
  },
  {
    "name": "Emo Music",
    "customEmojiId": "5267503958041063721"
  },
  {
    "name": "Freddy",
    "customEmojiId": "5267201188616503714"
  },
  {
    "name": "Matrix",
    "customEmojiId": "5269768732950948866"
  },
  {
    "name": "Pokeball",
    "customEmojiId": "5267472269772356033"
  },
  {
    "name": "Retrowave",
    "customEmojiId": "5269299791241704930"
  },
  {
    "name": "Telegram",
    "customEmojiId": "5267146122840799861"
  },
  {
    "name": "Walking Dead",
    "customEmojiId": "5269480742508851943"
  },
  {
    "name": "YouTubes",
    "customEmojiId": "5269432797788924831"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419"
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865"
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740"
  },
  {
    "name": "Spring Chick",
    "customEmojiId": "5199834257211559421"
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419"
  },
  {
    "name": "Straw Hat",
    "customEmojiId": "5199475953859857051"
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603"
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383"
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998"
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218"
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058"
  },
  {
    "name": "Pirate Hat",
    "customEmojiId": "5199666663292700153"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573"
  },
  {
    "name": "High Hat",
    "customEmojiId": "5199803080043958545"
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Neptune",
    "customEmojiId": "5199805712858906090"
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269"
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385"
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060"
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233"
  },
  {
    "name": "Easter Egg",
    "customEmojiId": "5199483835124843089"
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748"
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927"
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567"
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208"
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564"
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437"
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368"
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282"
  },
  {
    "name": "Peace Dove",
    "customEmojiId": "5199441345013386136"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571"
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998"
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527"
  },
  {
    "name": "Iron Helmet",
    "customEmojiId": "5199857089257702611"
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587"
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154"
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550"
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717"
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691"
  },
  {
    "name": "Onigiri",
    "customEmojiId": "5199752717257444302"
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480"
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004"
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305"
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022"
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024"
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618"
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "Doctor Hat",
    "customEmojiId": "5199584148381011556"
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287"
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530"
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851"
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126"
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948"
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877"
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "Paschal Lamb",
    "customEmojiId": "5199584784036172118"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774"
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Sombrero",
    "customEmojiId": "5199736203108190403"
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856"
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785"
  },
  {
    "name": "Jester Hat",
    "customEmojiId": "5199676378508724814"
  },
  {
    "name": "Easter Bunny",
    "customEmojiId": "5199627626334947886"
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823"
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279"
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803"
  },
  {
    "name": "Gua Pi Mao",
    "customEmojiId": "5199440052228229167"
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755"
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139"
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855"
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489"
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516"
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887"
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619"
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Bascinet",
    "customEmojiId": "5199688421597022189"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831"
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806"
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405"
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654"
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900"
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077"
  },
  {
    "name": "Piranha",
    "customEmojiId": "5199947034462818715"
  },
  {
    "name": "Fireman Hat",
    "customEmojiId": "5199732475076578186"
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018"
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017"
  },
  {
    "name": "Bandana",
    "customEmojiId": "5199711902183232393"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  },
  {
    "name": "Flat Cap",
    "customEmojiId": "5199424302583155767"
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088"
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047"
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Nemean Lion",
    "customEmojiId": "5199957797650858913"
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055"
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501"
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582"
  },
  {
    "name": "Pith Helmet",
    "customEmojiId": "5199425878836152426"
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573"
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463"
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183"
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261"
  },
  {
    "name": "Robin Hood",
    "customEmojiId": "5199634154685237795"
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557"
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034"
  },
  {
    "name": "Conical Hat",
    "customEmojiId": "5199648817703584324"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006"
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891"
  },
  {
    "name": "Winged Helmet",
    "customEmojiId": "5199518650129746938"
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075"
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481"
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500"
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651"
  },
  {
    "name": "Snail",
    "customEmojiId": "5199427729967062308"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469"
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475"
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234"
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001"
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519"
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697"
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343"
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105"
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026"
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190"
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741"
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222"
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269"
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369"
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783"
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813"
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263"
  },
  {
    "name": "Moto Helmet",
    "customEmojiId": "5199939002873972654"
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116"
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651"
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667"
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454"
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900"
  },
  {
    "name": "Beret",
    "customEmojiId": "5199710124066771918"
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188"
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537"
  },
  {
    "name": "Peaked Cap",
    "customEmojiId": "5199944066640415730"
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271"
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289"
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039"
  },
  {
    "name": "Ribeye Steak",
    "customEmojiId": "5199881892693838705"
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088"
  },
  {
    "name": "Kashket",
    "customEmojiId": "5199448672227594010"
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104"
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Moonstone",
    "customEmojiId": "5375335404134231481",
    "hex": {
      "centerColor": "#7eb1b4",
      "edgeColor": "#588390",
      "patternColor": "#164552",
      "textColor": "#daf5fd"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "bigyear", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
