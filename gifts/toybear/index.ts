import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Golden Cub",
    "customEmojiId": "5294516583618602416"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5294450535611524766"
  },
  {
    "name": "Dark Knight",
    "customEmojiId": "5294340116297309284"
  },
  {
    "name": "Deadpool",
    "customEmojiId": "5294153637407252771"
  },
  {
    "name": "Ursa Major",
    "customEmojiId": "5294493360730432278"
  },
  {
    "name": "Blueprint",
    "customEmojiId": "5294347842943475075"
  },
  {
    "name": "Lunaris",
    "customEmojiId": "5294510055268313065"
  },
  {
    "name": "Matrix",
    "customEmojiId": "5294352425673581991"
  },
  {
    "name": "Copper",
    "customEmojiId": "5292244777847255734"
  },
  {
    "name": "Lapis Lazuli",
    "customEmojiId": "5294038257405811454"
  },
  {
    "name": "Wall Street",
    "customEmojiId": "5293988212446885020"
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5292116920965821001"
  },
  {
    "name": "Dragon Ruby",
    "customEmojiId": "5294536761374960409"
  },
  {
    "name": "Fazbear",
    "customEmojiId": "5292178618171027550"
  },
  {
    "name": "Pooh",
    "customEmojiId": "5294410686904953387"
  },
  {
    "name": "Kumamon",
    "customEmojiId": "5294225079893254117"
  },
  {
    "name": "Angel",
    "customEmojiId": "5294511159074906223"
  },
  {
    "name": "Rilakkuma",
    "customEmojiId": "5294435108088998202"
  },
  {
    "name": "The Devil",
    "customEmojiId": "5294361281896143454"
  },
  {
    "name": "Tiger",
    "customEmojiId": "5291929260959756605"
  },
  {
    "name": "Winnie",
    "customEmojiId": "5291875045587578832"
  },
  {
    "name": "Teddy-800",
    "customEmojiId": "5292186039874514986"
  },
  {
    "name": "Bumblebear",
    "customEmojiId": "5291871845836941986"
  },
  {
    "name": "Checkmate",
    "customEmojiId": "5294373075876341184"
  },
  {
    "name": "Bearly Visible",
    "customEmojiId": "5292280761083259719"
  },
  {
    "name": "Alter Ego",
    "customEmojiId": "5294205962993821666"
  },
  {
    "name": "Cuddle",
    "customEmojiId": "5294240735049050698"
  },
  {
    "name": "Little Pepe",
    "customEmojiId": "5292193903959632248"
  },
  {
    "name": "Tricolor",
    "customEmojiId": "5294125372227476115"
  },
  {
    "name": "Pajamas",
    "customEmojiId": "5294002763796077877"
  },
  {
    "name": "Matroskin",
    "customEmojiId": "5294052125855212656"
  },
  {
    "name": "Panda",
    "customEmojiId": "5292023668635889471"
  },
  {
    "name": "Los Muertos",
    "customEmojiId": "5294387610045669865"
  },
  {
    "name": "Cowboy",
    "customEmojiId": "5291853837039070755"
  },
  {
    "name": "Cozy Boy",
    "customEmojiId": "5294360556046673818"
  },
  {
    "name": "Contractor",
    "customEmojiId": "5294175773668698659"
  },
  {
    "name": "Panda Cow",
    "customEmojiId": "5292279154765494194"
  },
  {
    "name": "Toady Bear",
    "customEmojiId": "5291741712622842131"
  },
  {
    "name": "Tuxedo",
    "customEmojiId": "5294055974145910519"
  },
  {
    "name": "Color Switch",
    "customEmojiId": "5292057457143607740"
  },
  {
    "name": "Graduate",
    "customEmojiId": "5292291030350067013"
  },
  {
    "name": "Macchiato",
    "customEmojiId": "5294530134240422220"
  },
  {
    "name": "Wizard",
    "customEmojiId": "5292193611901857527"
  },
  {
    "name": "Froggo",
    "customEmojiId": "5293989114390011047"
  },
  {
    "name": "Snowman",
    "customEmojiId": "5294231539524070889"
  },
  {
    "name": "Zebra",
    "customEmojiId": "5292032980124988285"
  },
  {
    "name": "Polygon",
    "customEmojiId": "5294131179023262816"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5292062873097366939"
  },
  {
    "name": "Nurse",
    "customEmojiId": "5294265302261981513"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5294541421414475040"
  },
  {
    "name": "Night Cub",
    "customEmojiId": "5294503032996782671"
  },
  {
    "name": "Cotton",
    "customEmojiId": "5292131072883060177"
  },
  {
    "name": "Citrus",
    "customEmojiId": "5292044001011068903"
  },
  {
    "name": "Viola Pansy",
    "customEmojiId": "5294082847756279164"
  },
  {
    "name": "Noir Et Rose",
    "customEmojiId": "5292239602411663127"
  },
  {
    "name": "Pink Doodle",
    "customEmojiId": "5294214200741091899"
  },
  {
    "name": "Blueberry",
    "customEmojiId": "5294490869649399795"
  },
  {
    "name": "Purple Heart",
    "customEmojiId": "5291863071218758855"
  },
  {
    "name": "El Rojo",
    "customEmojiId": "5292088608541406434"
  },
  {
    "name": "Skittles",
    "customEmojiId": "5291763470927163290"
  },
  {
    "name": "Circus Bear",
    "customEmojiId": "5293998619152640644"
  },
  {
    "name": "Coral Reef",
    "customEmojiId": "5292098847743438797"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5294242672079299235"
  },
  {
    "name": "Malibu",
    "customEmojiId": "5291733715393738848"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5292125583914855767"
  },
  {
    "name": "Red Velvet",
    "customEmojiId": "5294426608348718927"
  },
  {
    "name": "Blue Dandy",
    "customEmojiId": "5291736056150910743"
  },
  {
    "name": "Pink Cactus",
    "customEmojiId": "5294451222806290667"
  },
  {
    "name": "Carrot",
    "customEmojiId": "5292026499019336972"
  },
  {
    "name": "Peanut",
    "customEmojiId": "5294050394983393436"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Love Mug",
    "customEmojiId": "5199912941012420166"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440"
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439"
  },
  {
    "name": "Love",
    "customEmojiId": "5199631105258459055"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Sweets Box",
    "customEmojiId": "5199482696958513677"
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392"
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208"
  },
  {
    "name": "Rabbit",
    "customEmojiId": "5199887768209097952"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355"
  },
  {
    "name": "Lovely Rain",
    "customEmojiId": "5199442977100959205"
  },
  {
    "name": "French Fries",
    "customEmojiId": "5199752910530973025"
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282"
  },
  {
    "name": "Handcuffs",
    "customEmojiId": "5199955323749696987"
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741"
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195"
  },
  {
    "name": "Love Daisy",
    "customEmojiId": "5199738440786153015"
  },
  {
    "name": "Loving Heart",
    "customEmojiId": "5199424448612044780"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376"
  },
  {
    "name": "Cute Paw",
    "customEmojiId": "5199960164177840714"
  },
  {
    "name": "Lips",
    "customEmojiId": "5199797951853008666"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774"
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260"
  },
  {
    "name": "Water Drops",
    "customEmojiId": "5199780544350552415"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846"
  },
  {
    "name": "Cupid",
    "customEmojiId": "5199526046063441284"
  },
  {
    "name": "Headband",
    "customEmojiId": "5199633115303149797"
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007"
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891"
  },
  {
    "name": "February 14",
    "customEmojiId": "5199470713999756537"
  },
  {
    "name": "Blossom",
    "customEmojiId": "5199927973397957915"
  },
  {
    "name": "Flying Heart",
    "customEmojiId": "5199791393437943862"
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882"
  },
  {
    "name": "Love Puzzle",
    "customEmojiId": "5199822600670314306"
  },
  {
    "name": "Flaming Heart",
    "customEmojiId": "5199802946899970622"
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756"
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891"
  },
  {
    "name": "Neko Mask",
    "customEmojiId": "5199539420591589559"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508"
  },
  {
    "name": "Padlock",
    "customEmojiId": "5199791522286967123"
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818"
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799"
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831"
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039"
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152"
  },
  {
    "name": "Spicy Chilli",
    "customEmojiId": "5199513839766375756"
  },
  {
    "name": "Heart Ring",
    "customEmojiId": "5199655955939234158"
  },
  {
    "name": "Loveberry",
    "customEmojiId": "5199559143081412940"
  },
  {
    "name": "Succubus",
    "customEmojiId": "5199794271066034126"
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Romantic Cake",
    "customEmojiId": "5199478951747031038"
  },
  {
    "name": "Earth",
    "customEmojiId": "5199963814900042040"
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926"
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Cute Bear",
    "customEmojiId": "5199832552109543285"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Tic-Tac-Toe",
    "customEmojiId": "5199425337670273609"
  },
  {
    "name": "Love Scene",
    "customEmojiId": "5199496964839870880"
  },
  {
    "name": "Love Cherry",
    "customEmojiId": "5199696457480832394"
  },
  {
    "name": "Heart Box",
    "customEmojiId": "5199879650720908912"
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200"
  },
  {
    "name": "Kitty Cat",
    "customEmojiId": "5199530723282813013"
  },
  {
    "name": "Heart Shades",
    "customEmojiId": "5199498622697246200"
  },
  {
    "name": "Lovely Rose",
    "customEmojiId": "5201900810790798810"
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887"
  },
  {
    "name": "Cupid’s Bow",
    "customEmojiId": null
  },
  {
    "name": "Wine Toast",
    "customEmojiId": "5199921823004789063"
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603"
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034"
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161"
  },
  {
    "name": "Shiny Heart",
    "customEmojiId": "5199799154443848625"
  },
  {
    "name": "Angelic Heart",
    "customEmojiId": "5199927711404955175"
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204"
  },
  {
    "name": "Lovebirds",
    "customEmojiId": "5199962199992339292"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Flag",
    "customEmojiId": "5199874462400414430"
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691"
  },
  {
    "name": "Lingerie",
    "customEmojiId": "5199610622559422186"
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084"
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154"
  },
  {
    "name": "Heart Donut",
    "customEmojiId": "5199707989468027619"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Two Hearts",
    "customEmojiId": "5199852042671128551"
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527"
  },
  {
    "name": "Mars & Venus",
    "customEmojiId": "5199510476806984762"
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Aubergine",
    "customEmojiId": "5199473617397649496"
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516"
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5199862591110811286"
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715"
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674"
  },
  {
    "name": "Patched Heart",
    "customEmojiId": "5201931421022716330"
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075"
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385"
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707"
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457"
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826"
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104"
  },
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875"
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060"
  },
  {
    "name": "Amour Scoops",
    "customEmojiId": "5199434537490223092"
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690"
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743"
  },
  {
    "name": "Butterfly",
    "customEmojiId": "5199604893073048970"
  },
  {
    "name": "Balloon",
    "customEmojiId": "5199576666547980545"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Lovely Bra",
    "customEmojiId": "5199569678636190884"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630"
  },
  {
    "name": "Valentine",
    "customEmojiId": "5199862522391330751"
  },
  {
    "name": "Pigeon",
    "customEmojiId": "5199552168054524122"
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837"
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998"
  },
  {
    "name": "Love Berry",
    "customEmojiId": "5199632827540340466"
  },
  {
    "name": "Fluffy Wolf",
    "customEmojiId": "5199636065945685337"
  },
  {
    "name": "Heart Lock",
    "customEmojiId": "5199623305597848266"
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836"
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832"
  },
  {
    "name": "Passion Latte",
    "customEmojiId": "5199415609569347891"
  },
  {
    "name": "Rabbit Mask",
    "customEmojiId": "5199524899307162798"
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336"
  },
  {
    "name": "Napkins",
    "customEmojiId": "5199437329218965470"
  },
  {
    "name": "Love Bulb",
    "customEmojiId": "5199492317685254591"
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851"
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269"
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619"
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049"
  },
  {
    "name": "Love Candy",
    "customEmojiId": "5199732174428867377"
  },
  {
    "name": "Like Button",
    "customEmojiId": "5199576408849942354"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Love Dove",
    "customEmojiId": "5199713551450672774"
  },
  {
    "name": "Cupid Archer",
    "customEmojiId": "5199520986591956201"
  },
  {
    "name": "Hearts",
    "customEmojiId": "5199563412278905067"
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770"
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405"
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Heart Glasses",
    "customEmojiId": "5199408900830433125"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Rose Blossom",
    "customEmojiId": "5199606207333043015"
  },
  {
    "name": "Ace Of Hearts",
    "customEmojiId": "5201936622228113674"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Broken Heart",
    "customEmojiId": "5199424470086882078"
  },
  {
    "name": "Pixel Heart",
    "customEmojiId": "5199859623288405556"
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217"
  },
  {
    "name": "Tongue",
    "customEmojiId": "5199867281215097265"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880"
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729"
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674"
  },
  {
    "name": "Double Bed",
    "customEmojiId": "5199507204041903322"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335"
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263"
  },
  {
    "name": "Party Popper",
    "customEmojiId": "5199941017213636977"
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426"
  },
  {
    "name": "Little Cupid",
    "customEmojiId": "5199668819366285440"
  },
  {
    "name": "Lovely Key",
    "customEmojiId": "5199585978037078422"
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030"
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105"
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297"
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813"
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570"
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500"
  },
  {
    "name": "Gift",
    "customEmojiId": "5199482976131383979"
  },
  {
    "name": "Muffin",
    "customEmojiId": "5199876712963279535"
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252"
  },
  {
    "name": "Cunning Fox",
    "customEmojiId": "5199544935329597288"
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651"
  },
  {
    "name": "Love Potion",
    "customEmojiId": "5199874041493622893"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Cake",
    "customEmojiId": "5199720036851288924"
  },
  {
    "name": "Love Bell",
    "customEmojiId": "5199502393678528259"
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261"
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192"
  },
  {
    "name": "Heartbeat",
    "customEmojiId": "5199608762838583069"
  },
  {
    "name": "Bouquet",
    "customEmojiId": "5199875252674397860"
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5199437178895110515"
  },
  {
    "name": "Pierced Heart",
    "customEmojiId": "5199831693116082727"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Panty",
    "customEmojiId": "5199834450485085491"
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125"
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917"
  },
  {
    "name": "Heart Balloon",
    "customEmojiId": "5199420948213697782"
  },
  {
    "name": "Mailbox",
    "customEmojiId": "5199540932420078897"
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550"
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958"
  },
  {
    "name": "Stilettos",
    "customEmojiId": "5199526866402183288"
  },
  {
    "name": "Cupid’s Arrow",
    "customEmojiId": null
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373"
  },
  {
    "name": "Date Pin",
    "customEmojiId": "5199428271132935454"
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118"
  },
  {
    "name": "Flirty Message",
    "customEmojiId": "5199585110453685697"
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625"
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380"
  },
  {
    "name": "Lovestruck",
    "customEmojiId": "5199557437979398051"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550"
  },
  {
    "name": "Teddy Bear",
    "customEmojiId": "5199500701461418059"
  },
  {
    "name": "Angel",
    "customEmojiId": "5199834008103454742"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Light Olive",
    "customEmojiId": "5375600553940250812",
    "hex": {
      "centerColor": "#c2af64",
      "edgeColor": "#887e45",
      "patternColor": "#594c04",
      "textColor": "#f5ebbc"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "toybear", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
