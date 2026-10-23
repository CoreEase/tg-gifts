import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Thumbs Up",
    "customEmojiId": "5246852930648169867"
  },
  {
    "name": "Jester Box",
    "customEmojiId": "5247249253050378193"
  },
  {
    "name": "Pepe Hop",
    "customEmojiId": "5247198636860795664"
  },
  {
    "name": "Hellscape",
    "customEmojiId": "5244835721948193841"
  },
  {
    "name": "Mind Blown",
    "customEmojiId": "5247042265691481196"
  },
  {
    "name": "Meowscarade",
    "customEmojiId": "5244528996858752166"
  },
  {
    "name": "Confetti",
    "customEmojiId": "5246701558820793535"
  },
  {
    "name": "Wanna Play?",
    "customEmojiId": "5246775621236842036"
  },
  {
    "name": "Holidays",
    "customEmojiId": "5246880878000365134"
  },
  {
    "name": "Flirty",
    "customEmojiId": "5247094282040399016"
  },
  {
    "name": "Evil Eye",
    "customEmojiId": "5246818510780261780"
  },
  {
    "name": "Comeback",
    "customEmojiId": "5244747039463466531"
  },
  {
    "name": "Harley-Bee",
    "customEmojiId": "5247012815100732188"
  },
  {
    "name": "Witch’s Flame",
    "customEmojiId": "5244715565943124248"
  },
  {
    "name": "Hellfire",
    "customEmojiId": "5244483092248291693"
  },
  {
    "name": "Aquarium",
    "customEmojiId": "5246769917520275951"
  },
  {
    "name": "Take It Off",
    "customEmojiId": "5244454311672440288"
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5244655629674505838"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5246786921295797124"
  },
  {
    "name": "Beholder",
    "customEmojiId": "5244969802237240191"
  },
  {
    "name": "Mystery Mask",
    "customEmojiId": "5246843017863653586"
  },
  {
    "name": "Fire Breather",
    "customEmojiId": "5246835956937416499"
  },
  {
    "name": "Сourt Jester",
    "customEmojiId": "5247031309229909401"
  },
  {
    "name": "Honk!",
    "customEmojiId": "5247147960541670292"
  },
  {
    "name": "Leopard",
    "customEmojiId": "5246856456816320624"
  },
  {
    "name": "Kitty Bells",
    "customEmojiId": "5246739582166261755"
  },
  {
    "name": "Green Tassels",
    "customEmojiId": "5244864257710911312"
  },
  {
    "name": "Star Kissed",
    "customEmojiId": "5244800228338460079"
  },
  {
    "name": "Heartwarming",
    "customEmojiId": "5247128701908310812"
  },
  {
    "name": "Golden Boy",
    "customEmojiId": "5246977970031060206"
  },
  {
    "name": "Fable",
    "customEmojiId": "5244976334882499114"
  },
  {
    "name": "Twinkle Boom",
    "customEmojiId": "5244910467264048389"
  },
  {
    "name": "Lovely Twist",
    "customEmojiId": "5246810290212855786"
  },
  {
    "name": "Sparkler",
    "customEmojiId": "5246945972524703668"
  },
  {
    "name": "Great Again",
    "customEmojiId": "5247178278715810088"
  },
  {
    "name": "Neon White",
    "customEmojiId": "5246722054404726623"
  },
  {
    "name": "Spring Meadow",
    "customEmojiId": "5247011479365902587"
  },
  {
    "name": "Gamer Clown",
    "customEmojiId": "5246864114743008069"
  },
  {
    "name": "King of Jokes",
    "customEmojiId": "5244753164086830847"
  },
  {
    "name": "Xmas Prank",
    "customEmojiId": "5246999023960742699"
  },
  {
    "name": "Magic Trick",
    "customEmojiId": "5246767877410808299"
  },
  {
    "name": "Blue Jaguar",
    "customEmojiId": "5244589611732199684"
  },
  {
    "name": "Ripe Banana",
    "customEmojiId": "5246937421244819127"
  },
  {
    "name": "Neon Night",
    "customEmojiId": "5247224264930645417"
  },
  {
    "name": "Dotted Joke",
    "customEmojiId": "5244571504150079494"
  },
  {
    "name": "Phosphorus",
    "customEmojiId": "5244504120408172724"
  },
  {
    "name": "Night Bounce",
    "customEmojiId": "5247168606449459029"
  },
  {
    "name": "Comedian",
    "customEmojiId": "5244678354346469838"
  },
  {
    "name": "Pinky Circus",
    "customEmojiId": "5246829231018630826"
  },
  {
    "name": "Lemon Spin",
    "customEmojiId": "5244540726414438706"
  },
  {
    "name": "Twinkling Stars",
    "customEmojiId": "5247216018593438953"
  },
  {
    "name": "Rainbow Joy",
    "customEmojiId": "5244699708923866047"
  },
  {
    "name": "Dashed Prank",
    "customEmojiId": "5244830997484173133"
  },
  {
    "name": "Pop Art",
    "customEmojiId": "5246907012876363448"
  },
  {
    "name": "Funny Mood",
    "customEmojiId": "5244502432486025230"
  },
  {
    "name": "Blue Buffoon",
    "customEmojiId": "5244961263842256017"
  },
  {
    "name": "Froggy",
    "customEmojiId": "5244907744254781861"
  },
  {
    "name": "Carnival",
    "customEmojiId": "5244859541836818895"
  },
  {
    "name": "Azure Joker",
    "customEmojiId": "5246872030367736080"
  },
  {
    "name": "Inverse",
    "customEmojiId": "5247211057906213366"
  },
  {
    "name": "Funster",
    "customEmojiId": "5244905983318191480"
  },
  {
    "name": "Gecko",
    "customEmojiId": "5246783382242745246"
  },
  {
    "name": "Prankster",
    "customEmojiId": "5244899639651498132"
  },
  {
    "name": "Forest Stream",
    "customEmojiId": "5244674720804137422"
  },
  {
    "name": "Comic",
    "customEmojiId": "5244910231040847242"
  },
  {
    "name": "Sandy Beach",
    "customEmojiId": "5247121868615344461"
  },
  {
    "name": "Jungle Bells",
    "customEmojiId": "5244447014523006649"
  },
  {
    "name": "Tropic Vibe",
    "customEmojiId": "5246869492042064036"
  },
  {
    "name": "Harley Quinn",
    "customEmojiId": "5247212475245419478"
  },
  {
    "name": "Gingle Frost",
    "customEmojiId": "5244713388394702308"
  },
  {
    "name": "So Cute!",
    "customEmojiId": "5244895898734982152"
  },
  {
    "name": "Whimsy Bells",
    "customEmojiId": "5244581451294338010"
  },
  {
    "name": "Arlequin",
    "customEmojiId": "5244714792849013002"
  },
  {
    "name": "Madcap",
    "customEmojiId": "5246861035251456486"
  },
  {
    "name": "Stardust",
    "customEmojiId": "5247120296657312366"
  },
  {
    "name": "Dagonet",
    "customEmojiId": "5247233658024126323"
  },
  {
    "name": "Party Time",
    "customEmojiId": "5244590754193500401"
  },
  {
    "name": "Bumble Hat",
    "customEmojiId": "5246910483209937594"
  },
  {
    "name": "Carousel",
    "customEmojiId": "5246711871037267684"
  },
  {
    "name": "Moonlit",
    "customEmojiId": "5244949109084809552"
  },
  {
    "name": "Aurora",
    "customEmojiId": "5244901546616974480"
  },
  {
    "name": "Sugar Dust",
    "customEmojiId": "5244603793714210534"
  },
  {
    "name": "Court Jester",
    "customEmojiId": "5244570404638452440"
  },
  {
    "name": "Rigoletto",
    "customEmojiId": "5244586433456399902"
  },
  {
    "name": "Trick Tones",
    "customEmojiId": "5244539961910258161"
  },
  {
    "name": "Bleached",
    "customEmojiId": "5244855551812199451"
  },
  {
    "name": "Plum Swirl",
    "customEmojiId": "5246729527647820721"
  },
  {
    "name": "Marshmallow",
    "customEmojiId": "5244884998107981686"
  },
  {
    "name": "Chuckle Crown",
    "customEmojiId": "5244643208629085655"
  },
  {
    "name": "Trickster",
    "customEmojiId": "5244961886612517731"
  },
  {
    "name": "Jolly Orange",
    "customEmojiId": "5244756638715374384"
  },
  {
    "name": "Witty Whisper",
    "customEmojiId": "5244753202741537066"
  },
  {
    "name": "Triboulet",
    "customEmojiId": "5244497948540169692"
  },
  {
    "name": "Hot Midday",
    "customEmojiId": "5247042699483176342"
  },
  {
    "name": "Joy Dance",
    "customEmojiId": "5244614170355198681"
  },
  {
    "name": "Pierrot",
    "customEmojiId": "5247090158871796590"
  },
  {
    "name": "Sketchy",
    "customEmojiId": "5244920852494968892"
  },
  {
    "name": "Party Drink",
    "customEmojiId": "5244578384687687197"
  },
  {
    "name": "Motley Fool",
    "customEmojiId": "5247096987869796427"
  },
  {
    "name": "Fancy",
    "customEmojiId": "5244679307829208989"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198"
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944"
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183"
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419"
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519"
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877"
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892"
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865"
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667"
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188"
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139"
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034"
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675"
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851"
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271"
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419"
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669"
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040"
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669"
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678"
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228"
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831"
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107"
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039"
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950"
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714"
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723"
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582"
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638"
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867"
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967"
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785"
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
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125"
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715"
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006"
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778"
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813"
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086"
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783"
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867"
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620"
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154"
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634"
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263"
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498"
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164"
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651"
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336"
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900"
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060"
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380"
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463"
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440"
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902"
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335"
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075"
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
    "name": "Glasses",
    "customEmojiId": "5199843323887519152"
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886"
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261"
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001"
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654"
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537"
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419"
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507"
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625"
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475"
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645"
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564"
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869"
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774"
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817"
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343"
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301"
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099"
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806"
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871"
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891"
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639"
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603"
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154"
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344"
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355"
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126"
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375"
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269"
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768"
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530"
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030"
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004"
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917"
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329"
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067"
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419"
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849"
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Mystic Pearl",
    "customEmojiId": "5375343865219805643",
    "hex": {
      "centerColor": "#d08b6d",
      "edgeColor": "#b05770",
      "patternColor": "#9b0526",
      "textColor": "#fedde0"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "jesterhat", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
