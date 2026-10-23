import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Abandoned",
    "customEmojiId": "5269299301615433377"
  },
  {
    "name": "Cash Balance",
    "customEmojiId": "5267292512506117006"
  },
  {
    "name": "Cowboy",
    "customEmojiId": "5266971227477543338"
  },
  {
    "name": "Crypto Wallet",
    "customEmojiId": "5269764609782343385"
  },
  {
    "name": "Fairy Tale",
    "customEmojiId": "5269488885766846829"
  },
  {
    "name": "Fireplace",
    "customEmojiId": "5269486742578165846"
  },
  {
    "name": "Gold Mine",
    "customEmojiId": "5269625959648097339"
  },
  {
    "name": "Halloween",
    "customEmojiId": "5267510439146715208"
  },
  {
    "name": "Heaven",
    "customEmojiId": "5269252834364255946"
  },
  {
    "name": "Malevich",
    "customEmojiId": "5269417365971431941"
  },
  {
    "name": "Monster",
    "customEmojiId": "5269613804890650772"
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5269489263723970360"
  },
  {
    "name": "Overdose",
    "customEmojiId": "5269766405078678550"
  },
  {
    "name": "Toxic Brew",
    "customEmojiId": "5269226257106629661"
  },
  {
    "name": "Shinobi",
    "customEmojiId": "5269223783205470771"
  },
  {
    "name": "Circus",
    "customEmojiId": "5269544969449793195"
  },
  {
    "name": "Gemstone",
    "customEmojiId": "5267068985228162835"
  },
  {
    "name": "Arctic",
    "customEmojiId": "5269580265491036880"
  },
  {
    "name": "Bada-Boom!",
    "customEmojiId": "5267263366858047300"
  },
  {
    "name": "Banana Love",
    "customEmojiId": "5267474086543523478"
  },
  {
    "name": "Boggy Glow",
    "customEmojiId": "5269619534377020369"
  },
  {
    "name": "Electric Sock",
    "customEmojiId": "5269498815731235418"
  },
  {
    "name": "Emo Love",
    "customEmojiId": "5266993733106169373"
  },
  {
    "name": "Light Show",
    "customEmojiId": "5269635576079872923"
  },
  {
    "name": "Little Mouse",
    "customEmojiId": "5269542375289549144"
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5269674402584230558"
  },
  {
    "name": "Pixel Tools",
    "customEmojiId": "5269327854558017956"
  },
  {
    "name": "Privet",
    "customEmojiId": "5269624185826602019"
  },
  {
    "name": "Radioactive",
    "customEmojiId": "5267235423800820525"
  },
  {
    "name": "Retro Disco",
    "customEmojiId": "5269733063247558961"
  },
  {
    "name": "Shine On!",
    "customEmojiId": "5269428021785292505"
  },
  {
    "name": "Shiny Peach",
    "customEmojiId": "5269642362128198396"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5267215770030471203"
  },
  {
    "name": "Swamp Party",
    "customEmojiId": "5269664129022460316"
  },
  {
    "name": "Universe",
    "customEmojiId": "5267046720117701858"
  },
  {
    "name": "Pink Glitter",
    "customEmojiId": "5269737246545704589"
  },
  {
    "name": "Candy Shop",
    "customEmojiId": "5269610944442432112"
  },
  {
    "name": "Midnight",
    "customEmojiId": "5267366128245569032"
  },
  {
    "name": "Outline",
    "customEmojiId": "5267088879516679455"
  },
  {
    "name": "Pink Ink",
    "customEmojiId": "5269739857885818478"
  },
  {
    "name": "Translucent",
    "customEmojiId": "5267328860814342014"
  },
  {
    "name": "Caramel Fest",
    "customEmojiId": "5269679887257468807"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5269251941011061647"
  },
  {
    "name": "Darkvision",
    "customEmojiId": "5267241058797910476"
  },
  {
    "name": "Fresh Lemon",
    "customEmojiId": "5269537255688532570"
  },
  {
    "name": "Hot Winter",
    "customEmojiId": "5269284312179569154"
  },
  {
    "name": "Lavender",
    "customEmojiId": "5269758029892449192"
  },
  {
    "name": "Nightmirror",
    "customEmojiId": "5269276727267322763"
  },
  {
    "name": "Old School",
    "customEmojiId": "5269746308926698974"
  },
  {
    "name": "Orange Dusk",
    "customEmojiId": "5269709715805340272"
  },
  {
    "name": "Poison Ivy",
    "customEmojiId": "5269490848566902779"
  },
  {
    "name": "Bloody",
    "customEmojiId": "5269320351250151574"
  },
  {
    "name": "Cold Feet",
    "customEmojiId": "5269458099441266977"
  },
  {
    "name": "Frozen Moss",
    "customEmojiId": "5269465607044099605"
  },
  {
    "name": "Helltaker",
    "customEmojiId": "5267337751396646186"
  },
  {
    "name": "Kindergarten",
    "customEmojiId": "5269664610058794100"
  },
  {
    "name": "Lime Treats",
    "customEmojiId": "5266971901787403339"
  },
  {
    "name": "Mint Stitches",
    "customEmojiId": "5269394375011497252"
  },
  {
    "name": "Photo Negative",
    "customEmojiId": "5269463562639670241"
  },
  {
    "name": "Pink Faerie",
    "customEmojiId": "5269433686847156642"
  },
  {
    "name": "Tangerine",
    "customEmojiId": "5267328933828788237"
  },
  {
    "name": "Toffee",
    "customEmojiId": "5267200394047552398"
  },
  {
    "name": "Toxic Grape",
    "customEmojiId": "5269616201482401792"
  },
  {
    "name": "Vintage",
    "customEmojiId": "5269550359633754829"
  },
  {
    "name": "Wonderland",
    "customEmojiId": "5269498265975417908"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060"
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340"
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "High Hat",
    "customEmojiId": "5199803080043958545"
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785"
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463"
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125"
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691"
  },
  {
    "name": "Pirate Hat",
    "customEmojiId": "5199666663292700153"
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729"
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933"
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018"
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440"
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058"
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867"
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217"
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060"
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222"
  },
  {
    "name": "Khinkali",
    "customEmojiId": "5199559430844221150"
  },
  {
    "name": "Doghouse",
    "customEmojiId": "5199765365936130864"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164"
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006"
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449"
  },
  {
    "name": "Robin Hood",
    "customEmojiId": "5199634154685237795"
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831"
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939"
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419"
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766"
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634"
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Doctor Hat",
    "customEmojiId": "5199584148381011556"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
  },
  {
    "name": "Bandana",
    "customEmojiId": "5199711902183232393"
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486"
  },
  {
    "name": "Spring Chick",
    "customEmojiId": "5199834257211559421"
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148"
  },
  {
    "name": "Elf Hat",
    "customEmojiId": "5199596066915260460"
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797"
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125"
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803"
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851"
  },
  {
    "name": "Thor Hammer",
    "customEmojiId": "5199857621833649230"
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674"
  },
  {
    "name": "Wepwawet",
    "customEmojiId": "5199485793629930536"
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917"
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781"
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991"
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542"
  },
  {
    "name": "Bicorne",
    "customEmojiId": "5199462042460782106"
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755"
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297"
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965"
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751"
  },
  {
    "name": "Snail",
    "customEmojiId": "5199427729967062308"
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503"
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null
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
    "name": "Trophy",
    "customEmojiId": "5199543874472675475"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Propeller Cap",
    "customEmojiId": "5199861745002254248"
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443"
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813"
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030"
  },
  {
    "name": "La Corona",
    "customEmojiId": "5201947986711578027"
  },
  {
    "name": "Paschal Lamb",
    "customEmojiId": "5199584784036172118"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837"
  },
  {
    "name": "Royal Turban",
    "customEmojiId": "5199593258006647336"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Visor",
    "customEmojiId": "5199623855353661732"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630"
  },
  {
    "name": "Sombrero",
    "customEmojiId": "5199736203108190403"
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218"
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821"
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899"
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714"
  },
  {
    "name": "Arcane Mirror",
    "customEmojiId": "5199560770874018874"
  },
  {
    "name": "Gua Pi Mao",
    "customEmojiId": "5199440052228229167"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877"
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099"
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869"
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329"
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439"
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376"
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498"
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330"
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481"
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936"
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187"
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948"
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019"
  },
  {
    "name": "Neptune",
    "customEmojiId": "5199805712858906090"
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696"
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405"
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587"
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855"
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690"
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669"
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324"
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557"
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128"
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293"
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "French Fries",
    "customEmojiId": "5199752910530973025"
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799"
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084"
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Moto Helmet",
    "customEmojiId": "5199939002873972654"
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303"
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573"
  },
  {
    "name": "Piranha",
    "customEmojiId": "5199947034462818715"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801"
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405"
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "War Bonnet",
    "customEmojiId": "5199865125141516619"
  },
  {
    "name": "Fishing Hook",
    "customEmojiId": "5199562218277996516"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Easter Bunny",
    "customEmojiId": "5199627626334947886"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Police Hat",
    "customEmojiId": "5199767113987824870"
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
    "name": "Star",
    "customEmojiId": "5199425320490407263"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674"
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040"
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563"
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998"
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
    "name": "Hunter Green",
    "customEmojiId": "5375046438734558335",
    "hex": {
      "centerColor": "#8fae78",
      "edgeColor": "#4b825b",
      "patternColor": "#1c491f",
      "textColor": "#d8f5de"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "xmasstocking", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
