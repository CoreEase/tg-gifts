import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Dragon Lantern",
    "customEmojiId": "5208829688255909865"
  },
  {
    "name": "Maneki Neko",
    "customEmojiId": "5208636814159549649"
  },
  {
    "name": "Hot Cherry",
    "customEmojiId": "5206461262900267776"
  },
  {
    "name": "Golden Dice",
    "customEmojiId": "5206513085975663959"
  },
  {
    "name": "Krampus",
    "customEmojiId": "5208896109925141210"
  },
  {
    "name": "Little Gifts",
    "customEmojiId": "5206436334910084924"
  },
  {
    "name": "Cash Bags",
    "customEmojiId": "5206210355205804805"
  },
  {
    "name": "Stranding",
    "customEmojiId": "5206429677710774932"
  },
  {
    "name": "Lucky Bell",
    "customEmojiId": "5206405252231762469"
  },
  {
    "name": "White Owl",
    "customEmojiId": "5208693834145370231"
  },
  {
    "name": "Duality",
    "customEmojiId": "5206356843655367908"
  },
  {
    "name": "Silver Maces",
    "customEmojiId": "5208577754064263611"
  },
  {
    "name": "Hedgehogs",
    "customEmojiId": "5208583505025471863"
  },
  {
    "name": "Mushrooms",
    "customEmojiId": "5208830774882635516"
  },
  {
    "name": "Tinker Bell",
    "customEmojiId": "5208575267278195942"
  },
  {
    "name": "Black Gold",
    "customEmojiId": "5208427876885500987"
  },
  {
    "name": "Jungle Bloom",
    "customEmojiId": "5206304539543638167"
  },
  {
    "name": "Circus",
    "customEmojiId": "5206208534139672519"
  },
  {
    "name": "Dolls",
    "customEmojiId": "5208421468794294435"
  },
  {
    "name": "Nutcracker",
    "customEmojiId": "5206301975448162740"
  },
  {
    "name": "Cash Machine",
    "customEmojiId": "5208894980348744334"
  },
  {
    "name": "Bullfinch",
    "customEmojiId": "5206533276616919393"
  },
  {
    "name": "Love Song",
    "customEmojiId": "5208854135209763911"
  },
  {
    "name": "Grinch",
    "customEmojiId": "5206204784633225164"
  },
  {
    "name": "Royal Call",
    "customEmojiId": "5208915823825033406"
  },
  {
    "name": "Wind Chimes",
    "customEmojiId": "5206257608435995477"
  },
  {
    "name": "Candy Houses",
    "customEmojiId": "5208798429483928220"
  },
  {
    "name": "Noble Pearl",
    "customEmojiId": "5208706255190790110"
  },
  {
    "name": "Ice Queen",
    "customEmojiId": "5208541659159106507"
  },
  {
    "name": "Fabergé",
    "customEmojiId": "5208529693380219134"
  },
  {
    "name": "Crystal",
    "customEmojiId": "5206472807772361474"
  },
  {
    "name": "Blue Sapphire",
    "customEmojiId": "5206699728074479260"
  },
  {
    "name": "Santa Claus",
    "customEmojiId": "5208727815926617091"
  },
  {
    "name": "Pharaoh",
    "customEmojiId": "5206483197298250104"
  },
  {
    "name": "Sleigh Bells",
    "customEmojiId": "5208694066073607285"
  },
  {
    "name": "Red Lotus",
    "customEmojiId": "5206255375053000971"
  },
  {
    "name": "Sylvan Echo",
    "customEmojiId": "5206502537535991508"
  },
  {
    "name": "Sarcophagus",
    "customEmojiId": "5208899412754994348"
  },
  {
    "name": "Peonies",
    "customEmojiId": "5206391254933344431"
  },
  {
    "name": "Royal Charm",
    "customEmojiId": "5206279053207703413"
  },
  {
    "name": "Festive Night",
    "customEmojiId": "5208607702871215024"
  },
  {
    "name": "Pink Bow",
    "customEmojiId": "5208879406797329902"
  },
  {
    "name": "Spring Knell",
    "customEmojiId": "5208937169812495011"
  },
  {
    "name": "Royal Hour",
    "customEmojiId": "5206195644942815969"
  },
  {
    "name": "Festive Duo",
    "customEmojiId": "5208806512612378235"
  },
  {
    "name": "Cozy Winter",
    "customEmojiId": "5208471689846887512"
  },
  {
    "name": "Flashlights",
    "customEmojiId": "5206683488803131312"
  },
  {
    "name": "Purple Jingle",
    "customEmojiId": "5206346784841961114"
  },
  {
    "name": "Steampunk",
    "customEmojiId": "5206204943547011614"
  },
  {
    "name": "Reindeer",
    "customEmojiId": "5208413166622512066"
  },
  {
    "name": "Orchestra",
    "customEmojiId": "5206292247347237336"
  },
  {
    "name": "Launchpad",
    "customEmojiId": "5249101831358933784"
  },
  {
    "name": "Yule Bells",
    "customEmojiId": "5249014596278181383"
  },
  {
    "name": "Ribbit",
    "customEmojiId": "5249410566493070540"
  },
  {
    "name": "Glass Bloom",
    "customEmojiId": "5249156291544245332"
  },
  {
    "name": "Star Prize",
    "customEmojiId": "5246950525190040836"
  },
  {
    "name": "Radar",
    "customEmojiId": "5249158228574499077"
  },
  {
    "name": "Fire and Ice",
    "customEmojiId": "5246924553522800174"
  },
  {
    "name": "Spinner",
    "customEmojiId": "5246833517395997219"
  },
  {
    "name": "Deep Roots",
    "customEmojiId": "5249323979952384096"
  },
  {
    "name": "Puppet",
    "customEmojiId": "5246728307877114364"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5249181189469663774"
  },
  {
    "name": "Topsoil",
    "customEmojiId": "5249222485580211625"
  },
  {
    "name": "Fractal",
    "customEmojiId": "5249126724989383746"
  },
  {
    "name": "LED Disco",
    "customEmojiId": "5247107493359807555"
  },
  {
    "name": "Glitch",
    "customEmojiId": "5249506559012138087"
  },
  {
    "name": "New Blooms",
    "customEmojiId": "5249412512113253953"
  },
  {
    "name": "Confection",
    "customEmojiId": "5248981490670265173"
  },
  {
    "name": "Motion Blur",
    "customEmojiId": "5249396861252429089"
  },
  {
    "name": "Ice Chime",
    "customEmojiId": "5249404806941926151"
  },
  {
    "name": "Lipstick",
    "customEmojiId": "5249436173088090145"
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5249049316793802483"
  },
  {
    "name": "Fish Bowl",
    "customEmojiId": "5249082482531265238"
  },
  {
    "name": "Conductive",
    "customEmojiId": "5247200324782943949"
  },
  {
    "name": "Neon Light",
    "customEmojiId": "5249130968417066287"
  },
  {
    "name": "Dark Secret",
    "customEmojiId": "5247150318478718068"
  },
  {
    "name": "Buffering",
    "customEmojiId": "5246870119107291335"
  },
  {
    "name": "Jam Jar",
    "customEmojiId": "5246973739488275498"
  },
  {
    "name": "Melting",
    "customEmojiId": "5247211706446279996"
  },
  {
    "name": "Bubble Pop",
    "customEmojiId": "5248965461852317582"
  },
  {
    "name": "Bumblebell",
    "customEmojiId": "5249258765168958061"
  },
  {
    "name": "Red Sparkle",
    "customEmojiId": "5249503105858428248"
  },
  {
    "name": "Color Shift",
    "customEmojiId": "5249183379902981549"
  },
  {
    "name": "Bellrog",
    "customEmojiId": "5248960380906004469"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5248971260058168000"
  },
  {
    "name": "Liquid Glass",
    "customEmojiId": "5249208479691859110"
  },
  {
    "name": "Solid Gold",
    "customEmojiId": "5247057237947476835"
  },
  {
    "name": "Waffle Cone",
    "customEmojiId": "5246976505447214407"
  },
  {
    "name": "Tulip Time",
    "customEmojiId": "5249320178906326598"
  },
  {
    "name": "Jeweler",
    "customEmojiId": "5249142491814325404"
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5247137592490617935"
  },
  {
    "name": "Brick Wall",
    "customEmojiId": "5249479221545295442"
  },
  {
    "name": "Polynesia",
    "customEmojiId": "5249401731745342041"
  },
  {
    "name": "Silver Bells",
    "customEmojiId": "5249232260925777852"
  },
  {
    "name": "Test Image",
    "customEmojiId": "5246829042040075408"
  },
  {
    "name": "Berry Bell",
    "customEmojiId": "5249029302246204296"
  },
  {
    "name": "Purple Horns",
    "customEmojiId": "5248976551457876237"
  },
  {
    "name": "Orchid Ring",
    "customEmojiId": "5249229997478013623"
  },
  {
    "name": "Bell Hive",
    "customEmojiId": "5248951898345595604"
  },
  {
    "name": "Harlequin",
    "customEmojiId": "5249141134604654825"
  },
  {
    "name": "Elsa Bell",
    "customEmojiId": "5249205473214753126"
  },
  {
    "name": "Hypno Swirl",
    "customEmojiId": "5249258644909877910"
  },
  {
    "name": "Classic Cane",
    "customEmojiId": "5249307521637704447"
  },
  {
    "name": "Golden Cane",
    "customEmojiId": "5246789571290624648"
  },
  {
    "name": "Blue Ribbon",
    "customEmojiId": "5246828535233934090"
  },
  {
    "name": "Peppermint",
    "customEmojiId": "5249444702893139596"
  },
  {
    "name": "Red Petals",
    "customEmojiId": "5249075348590582829"
  },
  {
    "name": "Scarlet Leaf",
    "customEmojiId": "5246878352559600414"
  },
  {
    "name": "Magnet",
    "customEmojiId": "5249143157534252478"
  },
  {
    "name": "Lothlorien",
    "customEmojiId": "5249355788480176924"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5247237978761227042"
  },
  {
    "name": "Uranium",
    "customEmojiId": "5249424336158218803"
  },
  {
    "name": "Barbie",
    "customEmojiId": "5249386858273598036"
  },
  {
    "name": "Blue Chrome",
    "customEmojiId": "5249389237685478879"
  },
  {
    "name": "Woodland",
    "customEmojiId": "5249483469267951504"
  },
  {
    "name": "Copper Pink",
    "customEmojiId": "5247210877517588788"
  },
  {
    "name": "Jade Jingle",
    "customEmojiId": "5249089479032987816"
  },
  {
    "name": "Lilac Chime",
    "customEmojiId": "5248959590632024211"
  },
  {
    "name": "Rose Gold",
    "customEmojiId": "5249116369823225791"
  },
  {
    "name": "Saltwater",
    "customEmojiId": "5246848717285254824"
  },
  {
    "name": "Purple Ring",
    "customEmojiId": "5249497728559377679"
  },
  {
    "name": "Teal Rust",
    "customEmojiId": "5249246885289420942"
  },
  {
    "name": "Old Steel",
    "customEmojiId": "5249143698700136551"
  },
  {
    "name": "Pink Crystal",
    "customEmojiId": "5249048651073871457"
  },
  {
    "name": "Pink Pearl",
    "customEmojiId": "5249385075862165458"
  },
  {
    "name": "Inner Glow",
    "customEmojiId": "5249175971084393808"
  },
  {
    "name": "Pale Moss",
    "customEmojiId": "5249495864543567512"
  },
  {
    "name": "Nightshade",
    "customEmojiId": "5246917084574675641"
  },
  {
    "name": "Dusty Rose",
    "customEmojiId": "5249403041710366656"
  },
  {
    "name": "Purple Glass",
    "customEmojiId": "5249038974512556637"
  },
  {
    "name": "Lichen",
    "customEmojiId": "5249058400649638736"
  },
  {
    "name": "Crimson Steel",
    "customEmojiId": "5249490182301836418"
  },
  {
    "name": "Heatwave",
    "customEmojiId": "5249189770814315545"
  },
  {
    "name": "Lithograph",
    "customEmojiId": "5248959758135749825"
  },
  {
    "name": "Pink Twilight",
    "customEmojiId": "5249272736697575820"
  },
  {
    "name": "Cyber Glow",
    "customEmojiId": "5249066591152268948"
  },
  {
    "name": "Cast Bronze",
    "customEmojiId": "5249161217871731570"
  },
  {
    "name": "Meadow",
    "customEmojiId": "5249425165086911705"
  },
  {
    "name": "Rainforest",
    "customEmojiId": "5249416338929113764"
  },
  {
    "name": "Pink Season",
    "customEmojiId": "5248983264491759172"
  },
  {
    "name": "Sagebrush",
    "customEmojiId": "5248967093939889729"
  },
  {
    "name": "Shiny Opal",
    "customEmojiId": "5249028121130196997"
  },
  {
    "name": "Blue Shadows",
    "customEmojiId": "5249088989406716696"
  },
  {
    "name": "Gamer Color",
    "customEmojiId": "5249062850235750619"
  },
  {
    "name": "Antique",
    "customEmojiId": "5246848386572775342"
  },
  {
    "name": "Citrus Bell",
    "customEmojiId": "5246863161260273613"
  },
  {
    "name": "Monochrome",
    "customEmojiId": "5249285475570576476"
  },
  {
    "name": "Placeholder",
    "customEmojiId": "5247236943674110479"
  },
  {
    "name": "White Gold",
    "customEmojiId": "5248975408996573888"
  },
  {
    "name": "Glacier",
    "customEmojiId": "5249138866861922268"
  },
  {
    "name": "Soft Blush",
    "customEmojiId": "5249283061798956915"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696"
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359"
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209"
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
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634"
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107"
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440"
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335"
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378"
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329"
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813"
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542"
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077"
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107"
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651"
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933"
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019"
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723"
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088"
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198"
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669"
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190"
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148"
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778"
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965"
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806"
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837"
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851"
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867"
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293"
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405"
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944"
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950"
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603"
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797"
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877"
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923"
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303"
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419"
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161"
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040"
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426"
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088"
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826"
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125"
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639"
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936"
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Persimmon",
    "customEmojiId": "5377611079671113314",
    "hex": {
      "centerColor": "#e7a75a",
      "edgeColor": "#c5675f",
      "patternColor": "#ad0e00",
      "textColor": "#ffe4d7"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "jinglebells", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
