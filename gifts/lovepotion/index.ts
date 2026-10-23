import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Banana",
    "customEmojiId": "5294039554485937212"
  },
  {
    "name": "Whole Milk",
    "customEmojiId": "5294528716901211155"
  },
  {
    "name": "Star Power",
    "customEmojiId": "5294421033481167772"
  },
  {
    "name": "Angel Wings",
    "customEmojiId": "5292267828936731369"
  },
  {
    "name": "Ice Queen",
    "customEmojiId": "5294341327478087373"
  },
  {
    "name": "Beholder",
    "customEmojiId": "5294252675058131710"
  },
  {
    "name": "Emo Tears",
    "customEmojiId": "5294220123500993644"
  },
  {
    "name": "Bloodlust",
    "customEmojiId": "5294188525426599889"
  },
  {
    "name": "Energy Drink",
    "customEmojiId": "5294505657221800916"
  },
  {
    "name": "Molten Gold",
    "customEmojiId": "5294412258862982352"
  },
  {
    "name": "No Signal",
    "customEmojiId": "5293998404404272267"
  },
  {
    "name": "Healing Potion",
    "customEmojiId": "5292286469094796999"
  },
  {
    "name": "Jinx Tonic",
    "customEmojiId": "5292124995504336301"
  },
  {
    "name": "Nurgle’s Rot",
    "customEmojiId": "5294456518500966007"
  },
  {
    "name": "Dragon Soul",
    "customEmojiId": "5291797714701418373"
  },
  {
    "name": "First Kiss",
    "customEmojiId": "5291812850166163641"
  },
  {
    "name": "Lucky Charm",
    "customEmojiId": "5292068082892698031"
  },
  {
    "name": "Pickle Rick",
    "customEmojiId": "5291969556342925064"
  },
  {
    "name": "Unicorn Tears",
    "customEmojiId": "5294406245908770049"
  },
  {
    "name": "Durov Duck",
    "customEmojiId": "5294277195026426226"
  },
  {
    "name": "Astral Guide",
    "customEmojiId": "5291975878534786208"
  },
  {
    "name": "Espresso",
    "customEmojiId": "5294139249266811986"
  },
  {
    "name": "Eye-lixir",
    "customEmojiId": "5294174876020533564"
  },
  {
    "name": "Bubble Gum",
    "customEmojiId": "5294533102062826741"
  },
  {
    "name": "Spades",
    "customEmojiId": "5294374029359081348"
  },
  {
    "name": "Kiwi Juice",
    "customEmojiId": "5292086753115531819"
  },
  {
    "name": "Gothic Cola",
    "customEmojiId": "5291741094147551817"
  },
  {
    "name": "Clubs",
    "customEmojiId": "5294419624731894402"
  },
  {
    "name": "Tropicano",
    "customEmojiId": "5292257881792477987"
  },
  {
    "name": "Beauty Brew",
    "customEmojiId": "5292054055529509489"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5291805823599668704"
  },
  {
    "name": "Hearts",
    "customEmojiId": "5294432015712542310"
  },
  {
    "name": "Bubble Bath",
    "customEmojiId": "5294372015019419434"
  },
  {
    "name": "Fragrant Oil",
    "customEmojiId": "5292230247972894840"
  },
  {
    "name": "First Aid",
    "customEmojiId": "5292073597630704974"
  },
  {
    "name": "White Ink",
    "customEmojiId": "5294424168807292129"
  },
  {
    "name": "Laxative",
    "customEmojiId": "5294139996591121333"
  },
  {
    "name": "Fine Mead",
    "customEmojiId": "5294415467203552719"
  },
  {
    "name": "Surreal",
    "customEmojiId": "5294281146396338359"
  },
  {
    "name": "Flat Pink",
    "customEmojiId": "5294504909897492278"
  },
  {
    "name": "Crime Scene",
    "customEmojiId": "5294441125338177403"
  },
  {
    "name": "Paint Bottle",
    "customEmojiId": "5294034958870928022"
  },
  {
    "name": "Ruby Essence",
    "customEmojiId": "5294018960117751284"
  },
  {
    "name": "Golden Mire",
    "customEmojiId": "5294228769270162803"
  },
  {
    "name": "Peach Nectar",
    "customEmojiId": "5294497363639952706"
  },
  {
    "name": "Romeo",
    "customEmojiId": "5291735570819610083"
  },
  {
    "name": "Milkshake",
    "customEmojiId": "5294311249822112201"
  },
  {
    "name": "Mouthwash",
    "customEmojiId": "5292041767628073717"
  },
  {
    "name": "Poison Flask",
    "customEmojiId": "5294193185466116016"
  },
  {
    "name": "Cherry Wine",
    "customEmojiId": "5294421840935020543"
  },
  {
    "name": "Berry Bomb",
    "customEmojiId": "5294137252107019081"
  },
  {
    "name": "Copper Sulfate",
    "customEmojiId": "5294254105282242000"
  },
  {
    "name": "Mystic Dew",
    "customEmojiId": "5294086227895542537"
  },
  {
    "name": "Royal Spritz",
    "customEmojiId": "5292283217804554975"
  },
  {
    "name": "Sunset Serum",
    "customEmojiId": "5292009044272245620"
  },
  {
    "name": "Formic Acid",
    "customEmojiId": "5294373419473722119"
  },
  {
    "name": "Fairy Pollen",
    "customEmojiId": "5294481601109978060"
  },
  {
    "name": "Sour Cider",
    "customEmojiId": "5293994796631744672"
  },
  {
    "name": "Liquid Pearl",
    "customEmojiId": "5294238737889256019"
  },
  {
    "name": "Toxic Waste",
    "customEmojiId": "5291978936551502743"
  },
  {
    "name": "Seeker’s Wish",
    "customEmojiId": "5294130998634635043"
  },
  {
    "name": "Starry Night",
    "customEmojiId": "5292284274366509788"
  },
  {
    "name": "Old Rum",
    "customEmojiId": "5291848017358383891"
  },
  {
    "name": "Gold Rush",
    "customEmojiId": "5292228156323821082"
  },
  {
    "name": "Aerogel",
    "customEmojiId": "5294047246772364359"
  },
  {
    "name": "Ocean Glow",
    "customEmojiId": "5292168121270955319"
  },
  {
    "name": "Sugar Ponies",
    "customEmojiId": "5294112689189053165"
  },
  {
    "name": "Sea Salt",
    "customEmojiId": "5294468870826909489"
  },
  {
    "name": "Juliet",
    "customEmojiId": "5292050714044952143"
  },
  {
    "name": "Rusty Water",
    "customEmojiId": "5294104344067596367"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Passion Latte",
    "customEmojiId": "5199415609569347891"
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5199862591110811286"
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994"
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669"
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741"
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261"
  },
  {
    "name": "Mars & Venus",
    "customEmojiId": "5199510476806984762"
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667"
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823"
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154"
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161"
  },
  {
    "name": "Love Puzzle",
    "customEmojiId": "5199822600670314306"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "Water Drops",
    "customEmojiId": "5199780544350552415"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998"
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405"
  },
  {
    "name": "Romantic Cake",
    "customEmojiId": "5199478951747031038"
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849"
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501"
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717"
  },
  {
    "name": "Imperial Lion",
    "customEmojiId": "5199687841776437832"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Like Button",
    "customEmojiId": "5199576408849942354"
  },
  {
    "name": "Love Cherry",
    "customEmojiId": "5199696457480832394"
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017"
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305"
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Loving Heart",
    "customEmojiId": "5199424448612044780"
  },
  {
    "name": "February 14",
    "customEmojiId": "5199470713999756537"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5199437178895110515"
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846"
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570"
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519"
  },
  {
    "name": "Sleepy Unicorn",
    "customEmojiId": "5199466646665722804"
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037"
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958"
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837"
  },
  {
    "name": "Panty",
    "customEmojiId": "5199834450485085491"
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690"
  },
  {
    "name": "Lips",
    "customEmojiId": "5199797951853008666"
  },
  {
    "name": "Cupid",
    "customEmojiId": "5199526046063441284"
  },
  {
    "name": "Heart Ring",
    "customEmojiId": "5199655955939234158"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797"
  },
  {
    "name": "Pixel Heart",
    "customEmojiId": "5199859623288405556"
  },
  {
    "name": "Tongue",
    "customEmojiId": "5199867281215097265"
  },
  {
    "name": "Lovestruck",
    "customEmojiId": "5199557437979398051"
  },
  {
    "name": "Party Popper",
    "customEmojiId": "5199941017213636977"
  },
  {
    "name": "Two Hearts",
    "customEmojiId": "5199852042671128551"
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192"
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Cute Paw",
    "customEmojiId": "5199960164177840714"
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783"
  },
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875"
  },
  {
    "name": "Headband",
    "customEmojiId": "5199633115303149797"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Rabbit",
    "customEmojiId": "5199887768209097952"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Lovely Rain",
    "customEmojiId": "5199442977100959205"
  },
  {
    "name": "Spicy Chilli",
    "customEmojiId": "5199513839766375756"
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917"
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075"
  },
  {
    "name": "Cupid’s Arrow",
    "customEmojiId": null
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392"
  },
  {
    "name": "Lovely Key",
    "customEmojiId": "5199585978037078422"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Mailbox",
    "customEmojiId": "5199540932420078897"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487"
  },
  {
    "name": "Khinkali",
    "customEmojiId": "5199559430844221150"
  },
  {
    "name": "Napkins",
    "customEmojiId": "5199437329218965470"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Wine Toast",
    "customEmojiId": "5199921823004789063"
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047"
  },
  {
    "name": "Flirty Message",
    "customEmojiId": "5199585110453685697"
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567"
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363"
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927"
  },
  {
    "name": "Fluffy Wolf",
    "customEmojiId": "5199636065945685337"
  },
  {
    "name": "Rose Blossom",
    "customEmojiId": "5199606207333043015"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Love Dove",
    "customEmojiId": "5199713551450672774"
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060"
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891"
  },
  {
    "name": "Angelic Heart",
    "customEmojiId": "5199927711404955175"
  },
  {
    "name": "Heart Box",
    "customEmojiId": "5199879650720908912"
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001"
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856"
  },
  {
    "name": "Tic-Tac-Toe",
    "customEmojiId": "5199425337670273609"
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Pigeon",
    "customEmojiId": "5199552168054524122"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Handcuffs",
    "customEmojiId": "5199955323749696987"
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287"
  },
  {
    "name": "Wepwawet",
    "customEmojiId": "5199485793629930536"
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Heart Glasses",
    "customEmojiId": "5199408900830433125"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118"
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770"
  },
  {
    "name": "Blossom",
    "customEmojiId": "5199927973397957915"
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Flying Heart",
    "customEmojiId": "5199791393437943862"
  },
  {
    "name": "Flaming Heart",
    "customEmojiId": "5199802946899970622"
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289"
  },
  {
    "name": "Kitty Cat",
    "customEmojiId": "5199530723282813013"
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689"
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188"
  },
  {
    "name": "Love Scene",
    "customEmojiId": "5199496964839870880"
  },
  {
    "name": "Lovely Bra",
    "customEmojiId": "5199569678636190884"
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "Sweets Box",
    "customEmojiId": "5199482696958513677"
  },
  {
    "name": "Rabbit Mask",
    "customEmojiId": "5199524899307162798"
  },
  {
    "name": "Heart Balloon",
    "customEmojiId": "5199420948213697782"
  },
  {
    "name": "Lovely Rose",
    "customEmojiId": "5201900810790798810"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Stilettos",
    "customEmojiId": "5199526866402183288"
  },
  {
    "name": "Neko Mask",
    "customEmojiId": "5199539420591589559"
  },
  {
    "name": "Butterfly",
    "customEmojiId": "5199604893073048970"
  },
  {
    "name": "Pierced Heart",
    "customEmojiId": "5199831693116082727"
  },
  {
    "name": "Broken Heart",
    "customEmojiId": "5199424470086882078"
  },
  {
    "name": "Heartbeat",
    "customEmojiId": "5199608762838583069"
  },
  {
    "name": "Patched Heart",
    "customEmojiId": "5201931421022716330"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086"
  },
  {
    "name": "Shiny Heart",
    "customEmojiId": "5199799154443848625"
  },
  {
    "name": "Bouquet",
    "customEmojiId": "5199875252674397860"
  },
  {
    "name": "Cute Bear",
    "customEmojiId": "5199832552109543285"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Aubergine",
    "customEmojiId": "5199473617397649496"
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821"
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "Heart Lock",
    "customEmojiId": "5199623305597848266"
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630"
  },
  {
    "name": "Cupid’s Bow",
    "customEmojiId": null
  },
  {
    "name": "Love Mug",
    "customEmojiId": "5199912941012420166"
  },
  {
    "name": "Gift",
    "customEmojiId": "5199482976131383979"
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217"
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486"
  },
  {
    "name": "Heart Shades",
    "customEmojiId": "5199498622697246200"
  },
  {
    "name": "Ace Of Hearts",
    "customEmojiId": "5201936622228113674"
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Valentine",
    "customEmojiId": "5199862522391330751"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007"
  },
  {
    "name": "Lovebirds",
    "customEmojiId": "5199962199992339292"
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024"
  },
  {
    "name": "Padlock",
    "customEmojiId": "5199791522286967123"
  },
  {
    "name": "Cake",
    "customEmojiId": "5199720036851288924"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573"
  },
  {
    "name": "Love Candy",
    "customEmojiId": "5199732174428867377"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Love Daisy",
    "customEmojiId": "5199738440786153015"
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502"
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766"
  },
  {
    "name": "Amour Scoops",
    "customEmojiId": "5199434537490223092"
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781"
  },
  {
    "name": "Love Bell",
    "customEmojiId": "5199502393678528259"
  },
  {
    "name": "Balloon",
    "customEmojiId": "5199576666547980545"
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426"
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833"
  },
  {
    "name": "French Fries",
    "customEmojiId": "5199752910530973025"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107"
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692"
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026"
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Teddy Bear",
    "customEmojiId": "5199500701461418059"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329"
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333"
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899"
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851"
  },
  {
    "name": "Love Berry",
    "customEmojiId": "5199632827540340466"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Muffin",
    "customEmojiId": "5199876712963279535"
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774"
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383"
  },
  {
    "name": "Cunning Fox",
    "customEmojiId": "5199544935329597288"
  },
  {
    "name": "Hearts",
    "customEmojiId": "5199563412278905067"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Cupid Archer",
    "customEmojiId": "5199520986591956201"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Love",
    "customEmojiId": "5199631105258459055"
  },
  {
    "name": "Date Pin",
    "customEmojiId": "5199428271132935454"
  },
  {
    "name": "Angel",
    "customEmojiId": "5199834008103454742"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269"
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049"
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5199962457690375276"
  },
  {
    "name": "Heart Donut",
    "customEmojiId": "5199707989468027619"
  },
  {
    "name": "Lotus Flower",
    "customEmojiId": "5199764283604373260"
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335"
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368"
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527"
  },
  {
    "name": "Little Cupid",
    "customEmojiId": "5199668819366285440"
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040"
  },
  {
    "name": "Double Bed",
    "customEmojiId": "5199507204041903322"
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Lingerie",
    "customEmojiId": "5199610622559422186"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498"
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Succubus",
    "customEmojiId": "5199794271066034126"
  },
  {
    "name": "Fried Egg",
    "customEmojiId": "5199508084510201810"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233"
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004"
  },
  {
    "name": "Loveberry",
    "customEmojiId": "5199559143081412940"
  },
  {
    "name": "Love Potion",
    "customEmojiId": "5199874041493622893"
  },
  {
    "name": "Love Bulb",
    "customEmojiId": "5199492317685254591"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Fandango",
    "customEmojiId": "5377665664410477598",
    "hex": {
      "centerColor": "#e28ab6",
      "edgeColor": "#a4588b",
      "patternColor": "#8e054e",
      "textColor": "#ffc7eb"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "lovepotion", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
