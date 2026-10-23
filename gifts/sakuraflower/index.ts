import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Flowey",
    "customEmojiId": "5321060727048398789"
  },
  {
    "name": "Zap Aster",
    "customEmojiId": "5318821507193924610"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5319017207378766106"
  },
  {
    "name": "Carnation",
    "customEmojiId": "5318991149812185555"
  },
  {
    "name": "Dog Flower",
    "customEmojiId": "5319203974031635238"
  },
  {
    "name": "Wilted",
    "customEmojiId": "5321292792721335488"
  },
  {
    "name": "Meower",
    "customEmojiId": "5318987164082533430"
  },
  {
    "name": "Monsoon",
    "customEmojiId": "5321468383869294570"
  },
  {
    "name": "Heartbeat",
    "customEmojiId": "5321352235068714290"
  },
  {
    "name": "Sakura",
    "customEmojiId": "5319276872511549785"
  },
  {
    "name": "Blazing Dusk",
    "customEmojiId": "5321448708624113863"
  },
  {
    "name": "Snowdrop",
    "customEmojiId": "5318882697592991181"
  },
  {
    "name": "Bull’s Eye",
    "customEmojiId": "5321118773531402196"
  },
  {
    "name": "Big Bang",
    "customEmojiId": "5318957850930737006"
  },
  {
    "name": "Pixel Bloom",
    "customEmojiId": "5318877389013412119"
  },
  {
    "name": "Loves Or Not",
    "customEmojiId": "5321520447462857980"
  },
  {
    "name": "Fire Bloom",
    "customEmojiId": "5318874021759051185"
  },
  {
    "name": "Dark Neo",
    "customEmojiId": "5321141330699640325"
  },
  {
    "name": "Bubblia",
    "customEmojiId": "5319226329336408430"
  },
  {
    "name": "Venus Flytrap",
    "customEmojiId": "5319304502036163410"
  },
  {
    "name": "Shake It",
    "customEmojiId": "5321499286158991403"
  },
  {
    "name": "Icebound",
    "customEmojiId": "5318996411147119175"
  },
  {
    "name": "Myrtella",
    "customEmojiId": "5321283743225241370"
  },
  {
    "name": "Jellybud",
    "customEmojiId": "5321226899333082017"
  },
  {
    "name": "Wildflower",
    "customEmojiId": "5318846035752154024"
  },
  {
    "name": "Luminosia",
    "customEmojiId": "5321108633113616689"
  },
  {
    "name": "Ping Blossom",
    "customEmojiId": "5321153575651403074"
  },
  {
    "name": "Pokerface",
    "customEmojiId": "5321498281136645771"
  },
  {
    "name": "Glitch",
    "customEmojiId": "5319009824329989380"
  },
  {
    "name": "Savanna",
    "customEmojiId": "5319292897034530367"
  },
  {
    "name": "Party Time",
    "customEmojiId": "5318771097162774253"
  },
  {
    "name": "Shimeria",
    "customEmojiId": "5319197394141734821"
  },
  {
    "name": "Spotty Leo",
    "customEmojiId": "5321538409016090331"
  },
  {
    "name": "Peony",
    "customEmojiId": "5318941517170109721"
  },
  {
    "name": "Dark Loader",
    "customEmojiId": "5321213902762041356"
  },
  {
    "name": "Windy",
    "customEmojiId": "5318862644390686484"
  },
  {
    "name": "Morning Sun",
    "customEmojiId": "5318977594895394184"
  },
  {
    "name": "Yellow Poppy",
    "customEmojiId": "5318878853597261897"
  },
  {
    "name": "White Peony",
    "customEmojiId": "5321154997285577914"
  },
  {
    "name": "Red Poppy",
    "customEmojiId": "5321404298662275374"
  },
  {
    "name": "Silveria",
    "customEmojiId": "5321042769790133114"
  },
  {
    "name": "Bronzula",
    "customEmojiId": "5318800479034043894"
  },
  {
    "name": "Goldensia",
    "customEmojiId": "5319216798803981523"
  },
  {
    "name": "Party Bloom",
    "customEmojiId": "5318794655058390237"
  },
  {
    "name": "Plumeria",
    "customEmojiId": "5318907586928472607"
  },
  {
    "name": "Hellebore",
    "customEmojiId": "5319210953353491826"
  },
  {
    "name": "Gerbera",
    "customEmojiId": "5321396834009112331"
  },
  {
    "name": "Brunnera",
    "customEmojiId": "5321145844710271472"
  },
  {
    "name": "Petunia",
    "customEmojiId": "5321538494915435336"
  },
  {
    "name": "Hydrangea",
    "customEmojiId": "5321279744610689208"
  },
  {
    "name": "Nightshade",
    "customEmojiId": "5321070248990892533"
  },
  {
    "name": "Clivia",
    "customEmojiId": "5321352750464787263"
  },
  {
    "name": "Allamanda",
    "customEmojiId": "5321471875677709437"
  },
  {
    "name": "Bumblebee",
    "customEmojiId": "5319204558147185900"
  },
  {
    "name": "Geranium",
    "customEmojiId": "5321430845855129875"
  },
  {
    "name": "Aetheris",
    "customEmojiId": "5319068622432268921"
  },
  {
    "name": "Anemone",
    "customEmojiId": "5318961304084444636"
  },
  {
    "name": "Hybrid",
    "customEmojiId": "5321388295614129467"
  },
  {
    "name": "Dahlia",
    "customEmojiId": "5318968012823356927"
  },
  {
    "name": "Hollyhock",
    "customEmojiId": "5319047491193170948"
  },
  {
    "name": "Lemon Queen",
    "customEmojiId": "5318864139039304219"
  },
  {
    "name": "Crimsonia",
    "customEmojiId": "5319257854396362331"
  },
  {
    "name": "Tropicana",
    "customEmojiId": "5321440513826512108"
  },
  {
    "name": "Oxalis",
    "customEmojiId": "5319011280323898701"
  },
  {
    "name": "Indigo",
    "customEmojiId": "5319118461232770884"
  },
  {
    "name": "Floravelle",
    "customEmojiId": "5319003107001134183"
  },
  {
    "name": "Solivine",
    "customEmojiId": "5318889973267590766"
  },
  {
    "name": "Barbia",
    "customEmojiId": "5319313903719575912"
  },
  {
    "name": "Eclipsia",
    "customEmojiId": "5318888852281125325"
  },
  {
    "name": "Noctivis",
    "customEmojiId": "5319128571585785697"
  },
  {
    "name": "Aurivelle",
    "customEmojiId": "5321174234444096271"
  },
  {
    "name": "Violet Iris",
    "customEmojiId": "5321036670936574257"
  },
  {
    "name": "Aubrieta",
    "customEmojiId": "5321423772043994835"
  },
  {
    "name": "Nectarium",
    "customEmojiId": "5321148374446004888"
  },
  {
    "name": "Lunaris",
    "customEmojiId": "5319187537191793975"
  },
  {
    "name": "Twilight",
    "customEmojiId": "5319111606464964592"
  },
  {
    "name": "Floraven",
    "customEmojiId": "5321223579323360994"
  },
  {
    "name": "Hibiscus",
    "customEmojiId": "5319055320918552030"
  },
  {
    "name": "Aster",
    "customEmojiId": "5321044608036138078"
  },
  {
    "name": "Azure",
    "customEmojiId": "5319163021518466632"
  },
  {
    "name": "Verdania",
    "customEmojiId": "5318895668394226309"
  },
  {
    "name": "Celestara",
    "customEmojiId": "5319244162040621627"
  },
  {
    "name": "Primrose",
    "customEmojiId": "5321562112940597117"
  },
  {
    "name": "Fabulous",
    "customEmojiId": "5319096612734140844"
  },
  {
    "name": "Violet",
    "customEmojiId": "5318803889238078110"
  },
  {
    "name": "Ghostia",
    "customEmojiId": "5318935014589625239"
  },
  {
    "name": "Meadowlyn",
    "customEmojiId": "5321328750187536969"
  },
  {
    "name": "Marigold",
    "customEmojiId": "5318926046697910109"
  },
  {
    "name": "Floris",
    "customEmojiId": "5318914132458628523"
  },
  {
    "name": "Orchidra",
    "customEmojiId": "5321208250585086954"
  },
  {
    "name": "Vanilla",
    "customEmojiId": "5319057000250766412"
  },
  {
    "name": "Hawaii",
    "customEmojiId": "5321153678730619865"
  },
  {
    "name": "Lanceolata",
    "customEmojiId": "5318781018537225529"
  },
  {
    "name": "Flameris",
    "customEmojiId": "5321229514968168066"
  },
  {
    "name": "Cosmea",
    "customEmojiId": "5318938278764766212"
  },
  {
    "name": "Peach Perfect",
    "customEmojiId": "5319008364041103377"
  },
  {
    "name": "Zephyra",
    "customEmojiId": "5318898808015316647"
  },
  {
    "name": "Seraphina",
    "customEmojiId": "5321457285673805338"
  },
  {
    "name": "False Bird",
    "customEmojiId": "5318803429676577226"
  },
  {
    "name": "Sylvaris",
    "customEmojiId": "5321556593907622039"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037"
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222"
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973"
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282"
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088"
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669"
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740"
  },
  {
    "name": "Gua Pi Mao",
    "customEmojiId": "5199440052228229167"
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851"
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292"
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715"
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702"
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419"
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567"
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353"
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833"
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125"
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084"
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405"
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129"
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821"
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689"
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729"
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Onigiri",
    "customEmojiId": "5199752717257444302"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218"
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001"
  },
  {
    "name": "Mining Helmet",
    "customEmojiId": "5199842336045040776"
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024"
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Earth",
    "customEmojiId": "5199963814900042040"
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537"
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018"
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375"
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233"
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131"
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200"
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383"
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Hard Hat",
    "customEmojiId": "5199914431366072974"
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047"
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892"
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195"
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527"
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369"
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826"
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060"
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183"
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645"
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961"
  },
  {
    "name": "Thor Hammer",
    "customEmojiId": "5199857621833649230"
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723"
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717"
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305"
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336"
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082"
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419"
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366"
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891"
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573"
  },
  {
    "name": "Khinkali",
    "customEmojiId": "5199559430844221150"
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573"
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803"
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831"
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558"
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273"
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139"
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190"
  },
  {
    "name": "Legionary",
    "customEmojiId": "5199428202413461386"
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578"
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347"
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026"
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603"
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340"
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128"
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741"
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950"
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Beret",
    "customEmojiId": "5199710124066771918"
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770"
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487"
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333"
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618"
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440"
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651"
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204"
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269"
  },
  {
    "name": "Ushanka",
    "customEmojiId": "5202149927483900109"
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161"
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691"
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049"
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376"
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603"
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489"
  },
  {
    "name": "Beanie",
    "customEmojiId": "5202215137972354788"
  },
  {
    "name": "Fireman Hat",
    "customEmojiId": "5199732475076578186"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806"
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880"
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463"
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030"
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799"
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Conical Hat",
    "customEmojiId": "5199648817703584324"
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837"
  },
  {
    "name": "Pilot Hat",
    "customEmojiId": "5199599971040525984"
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Bascinet",
    "customEmojiId": "5199688421597022189"
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498"
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926"
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891"
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998"
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030"
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849"
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088"
  },
  {
    "name": "Earflap Hat",
    "customEmojiId": "5199932083681658304"
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475"
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697"
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486"
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139"
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620"
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164"
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426"
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279"
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359"
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756"
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619"
  },
  {
    "name": "Party Hat",
    "customEmojiId": "5199420192299454140"
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867"
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098"
  },
  {
    "name": "Winged Helmet",
    "customEmojiId": "5199518650129746938"
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530"
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077"
  },
  {
    "name": "Pirate Hat",
    "customEmojiId": "5199666663292700153"
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818"
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564"
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269"
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344"
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967"
  },
  {
    "name": "Ribeye Steak",
    "customEmojiId": "5199881892693838705"
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500"
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634"
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217"
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047"
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
    "name": "Gunship Green",
    "customEmojiId": "5375121566302501587",
    "hex": {
      "centerColor": "#558a65",
      "edgeColor": "#3d6657",
      "patternColor": "#07261d",
      "textColor": "#b5e0d4"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "sakuraflower", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
