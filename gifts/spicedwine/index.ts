import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Magmarita",
    "customEmojiId": "5454172350645822339"
  },
  {
    "name": "Dark Disco",
    "customEmojiId": "5456293145367045074"
  },
  {
    "name": "Water Spout",
    "customEmojiId": "5454167286879377639"
  },
  {
    "name": "Captain Nemo",
    "customEmojiId": "5456315968823255581"
  },
  {
    "name": "Moon Rocks",
    "customEmojiId": "5456126900067918452"
  },
  {
    "name": "Milky Way",
    "customEmojiId": "5454365057238456977"
  },
  {
    "name": "Black Hole",
    "customEmojiId": "5456577764259814641"
  },
  {
    "name": "Hazmat",
    "customEmojiId": "5456656121643165394"
  },
  {
    "name": "Lightly Chilled",
    "customEmojiId": "5456402031377933262"
  },
  {
    "name": "Loading",
    "customEmojiId": "5456449533716227087"
  },
  {
    "name": "Swamp Gas",
    "customEmojiId": "5456130533610249889"
  },
  {
    "name": "Over Ice",
    "customEmojiId": "5456292260603783954"
  },
  {
    "name": "High Class",
    "customEmojiId": "5456309547847148130"
  },
  {
    "name": "Brain Enhancer",
    "customEmojiId": "5453956459819720289"
  },
  {
    "name": "Flaming Mint",
    "customEmojiId": "5454009159068442996"
  },
  {
    "name": "Chocolate Cherry",
    "customEmojiId": "5456468083679978648"
  },
  {
    "name": "Tiny Trifle",
    "customEmojiId": "5454249462488654389"
  },
  {
    "name": "Sag Sangria",
    "customEmojiId": "5456120955833182395"
  },
  {
    "name": "Glitterwine",
    "customEmojiId": "5454101264642105274"
  },
  {
    "name": "Cube Libra",
    "customEmojiId": "5454417369940123327"
  },
  {
    "name": "With Caution",
    "customEmojiId": "5456185247198634157"
  },
  {
    "name": "Ember Elixir",
    "customEmojiId": "5454072192008476957"
  },
  {
    "name": "Deep Blue Sea",
    "customEmojiId": "5456449237363481738"
  },
  {
    "name": "Cancer Collins",
    "customEmojiId": "5456470991372837848"
  },
  {
    "name": "Shark Attack",
    "customEmojiId": "5456199656813912037"
  },
  {
    "name": "Green Energy",
    "customEmojiId": "5454281941031345834"
  },
  {
    "name": "Aries Rum",
    "customEmojiId": "5454357296232553048"
  },
  {
    "name": "Pisces Sour",
    "customEmojiId": "5454385956549322922"
  },
  {
    "name": "Magenta Mix",
    "customEmojiId": "5454259972273626605"
  },
  {
    "name": "Capri Sun",
    "customEmojiId": "5453889801927286831"
  },
  {
    "name": "Yellow Pop",
    "customEmojiId": "5454350407105013522"
  },
  {
    "name": "Blue Burn",
    "customEmojiId": "5454372049445217624"
  },
  {
    "name": "Green Glitter",
    "customEmojiId": "5456617544246910079"
  },
  {
    "name": "Vin Virgo",
    "customEmojiId": "5456371189217780602"
  },
  {
    "name": "Kiwi Degree",
    "customEmojiId": "5454291085016721066"
  },
  {
    "name": "Love Elixir",
    "customEmojiId": "5454045060700068705"
  },
  {
    "name": "Blew Bubble",
    "customEmojiId": "5454381472603464161"
  },
  {
    "name": "Aquarium",
    "customEmojiId": "5456428119009288550"
  },
  {
    "name": "Gin Gemini",
    "customEmojiId": "5454078759013473519"
  },
  {
    "name": "Scuba Dive",
    "customEmojiId": "5456111378056110134"
  },
  {
    "name": "Gaso Green",
    "customEmojiId": "5456612450415698307"
  },
  {
    "name": "Intense Indigo",
    "customEmojiId": "5456337903221235666"
  },
  {
    "name": "Thought Tonic",
    "customEmojiId": "5456334561736680454"
  },
  {
    "name": "Leonade",
    "customEmojiId": "5456449177233939904"
  },
  {
    "name": "Scorpio Sling",
    "customEmojiId": "5456266301821445282"
  },
  {
    "name": "Taurus-tini",
    "customEmojiId": "5456437129850677044"
  },
  {
    "name": "Birthday Parfait",
    "customEmojiId": "5454392059697846710"
  },
  {
    "name": "Nightbulb",
    "customEmojiId": "5456469763012191026"
  },
  {
    "name": "Pink Flame",
    "customEmojiId": "5456350539015021937"
  },
  {
    "name": "Night Sky",
    "customEmojiId": "5454367539729554594"
  },
  {
    "name": "Blue Brew",
    "customEmojiId": "5460631697991164881"
  },
  {
    "name": "Low Tide",
    "customEmojiId": "5460886496925997445"
  },
  {
    "name": "Vitamin C",
    "customEmojiId": "5460663785691832626"
  },
  {
    "name": "Blood Orange",
    "customEmojiId": "5460651321696739484"
  },
  {
    "name": "Dehydrated",
    "customEmojiId": "5460670503020681175"
  },
  {
    "name": "Color Theory",
    "customEmojiId": "5458676293870576692"
  },
  {
    "name": "Hot Cold",
    "customEmojiId": "5460718361841258911"
  },
  {
    "name": "Purple Potion",
    "customEmojiId": "5460813753064906061"
  },
  {
    "name": "Magenta Mist",
    "customEmojiId": "5458658156223685779"
  },
  {
    "name": "Golden Glow",
    "customEmojiId": "5460702423217627713"
  },
  {
    "name": "Dusky Draft",
    "customEmojiId": "5460702071030309891"
  },
  {
    "name": "Citrus Punch",
    "customEmojiId": "5460744410817910896"
  },
  {
    "name": "Pink Colada",
    "customEmojiId": "5458398323587181986"
  },
  {
    "name": "Rosemary",
    "customEmojiId": "5458810893850667047"
  },
  {
    "name": "Indigo Orange",
    "customEmojiId": "5458859036139087159"
  },
  {
    "name": "The Grinch",
    "customEmojiId": "5458568107939355461"
  },
  {
    "name": "Gluhwein",
    "customEmojiId": "5461059541158357825"
  },
  {
    "name": "Kalamansi",
    "customEmojiId": "5460974513690796659"
  },
  {
    "name": "South Pacific",
    "customEmojiId": "5460687184673659959"
  },
  {
    "name": "Mellow Merlot",
    "customEmojiId": "5458574073648932810"
  },
  {
    "name": "Aqua Vita",
    "customEmojiId": "5460989327032998895"
  },
  {
    "name": "Indigo",
    "customEmojiId": "5460703548499058846"
  },
  {
    "name": "Copper Sun",
    "customEmojiId": "5460962195724592865"
  },
  {
    "name": "Pink Orange",
    "customEmojiId": "5460824447533473127"
  },
  {
    "name": "Whiskey Wine",
    "customEmojiId": "5461000919149732363"
  },
  {
    "name": "Turquoise",
    "customEmojiId": "5461002392323517025"
  },
  {
    "name": "Minty Fresh",
    "customEmojiId": "5458502205961168594"
  },
  {
    "name": "Vague Berry",
    "customEmojiId": "5461065180450412162"
  },
  {
    "name": "Earl Grey",
    "customEmojiId": "5458504860250956373"
  },
  {
    "name": "Desaturated",
    "customEmojiId": "5460970880148462426"
  },
  {
    "name": "Tarkhuna",
    "customEmojiId": "5460957737548536925"
  },
  {
    "name": "Blackout",
    "customEmojiId": "5460804922612143842"
  },
  {
    "name": "Golden Goblet",
    "customEmojiId": "5458452680693280325"
  },
  {
    "name": "Tea Infusion",
    "customEmojiId": "5458521550493870719"
  },
  {
    "name": "Blueberry",
    "customEmojiId": "5461098999022901394"
  },
  {
    "name": "Persimmon",
    "customEmojiId": "5461050302683698430"
  },
  {
    "name": "Purplexed",
    "customEmojiId": "5461008568486486192"
  },
  {
    "name": "Buckwheat",
    "customEmojiId": "5461025928744293487"
  },
  {
    "name": "Melted Ice",
    "customEmojiId": "5460837212176277596"
  },
  {
    "name": "Tequila Sunrise",
    "customEmojiId": "5461045062823598720"
  },
  {
    "name": "Shadow Spirit",
    "customEmojiId": "5460985732145373852"
  },
  {
    "name": "Cranberry Lime",
    "customEmojiId": "5458882233257455284"
  },
  {
    "name": "Cool Water",
    "customEmojiId": "5458778741725490735"
  },
  {
    "name": "Going Grape",
    "customEmojiId": "5460691449576184849"
  },
  {
    "name": "Green Gradient",
    "customEmojiId": "5461089305281717315"
  },
  {
    "name": "Lime Slice",
    "customEmojiId": "5458443205995424545"
  },
  {
    "name": "Greenwein",
    "customEmojiId": "5458640203260389608"
  },
  {
    "name": "Light Grape",
    "customEmojiId": "5458423749793571650"
  },
  {
    "name": "Brass Monkey",
    "customEmojiId": "5461032689022817426"
  },
  {
    "name": "Absinthe",
    "customEmojiId": "5460983503057345562"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125"
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639"
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507"
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419"
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067"
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040"
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269"
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715"
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806"
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475"
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475"
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714"
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060"
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037"
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058"
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419"
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500"
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218"
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469"
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958"
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
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355"
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
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871"
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126"
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654"
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359"
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867"
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820"
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691"
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826"
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797"
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702"
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892"
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131"
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667"
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669"
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405"
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530"
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380"
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638"
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877"
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
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
    "name": "Diamond",
    "customEmojiId": "5199628004292067329"
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088"
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603"
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869"
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783"
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817"
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766"
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107"
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678"
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669"
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721"
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060"
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006"
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440"
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620"
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271"
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148"
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571"
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375"
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675"
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161"
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336"
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368"
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846"
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785"
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865"
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751"
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813"
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484"
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
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
    "name": "Toilet",
    "customEmojiId": "5199426501606409252"
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950"
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107"
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117"
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086"
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190"
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154"
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004"
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
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
    "name": "Sakura",
    "customEmojiId": "5199856934638878837"
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075"
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426"
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118"
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
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
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634"
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088"
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363"
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343"
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645"
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519"
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939"
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967"
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
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
    "name": "Elephant",
    "customEmojiId": "5199694971422146836"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651"
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128"
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183"
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Coral Red",
    "customEmojiId": "5377303611552326657",
    "hex": {
      "centerColor": "#da896b",
      "edgeColor": "#c4654f",
      "patternColor": "#891200",
      "textColor": "#ffd9d2"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "spicedwine", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
