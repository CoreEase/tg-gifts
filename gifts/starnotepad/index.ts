import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Mon Amour",
    "customEmojiId": "5262997502260437392"
  },
  {
    "name": "Clown",
    "customEmojiId": "5263011830271339933"
  },
  {
    "name": "Peachless",
    "customEmojiId": "5264984723498754294"
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5262966157589112749"
  },
  {
    "name": "Pepe Diary",
    "customEmojiId": "5262586658573804968"
  },
  {
    "name": "Alien Script",
    "customEmojiId": "5262856275145815255"
  },
  {
    "name": "Grimoire",
    "customEmojiId": "5262645181798181255"
  },
  {
    "name": "Ink Splatter",
    "customEmojiId": "5262775581300255280"
  },
  {
    "name": "Cursed Tome",
    "customEmojiId": "5262987872943760815"
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5262538052428918194"
  },
  {
    "name": "Enigma",
    "customEmojiId": "5262541638726611321"
  },
  {
    "name": "Inferno",
    "customEmojiId": "5262850030263365199"
  },
  {
    "name": "Leopard",
    "customEmojiId": "5265044200205870302"
  },
  {
    "name": "Swatch",
    "customEmojiId": "5262569371330440243"
  },
  {
    "name": "Girlboss",
    "customEmojiId": "5262616573021025258"
  },
  {
    "name": "Springfield",
    "customEmojiId": "5262954574062317801"
  },
  {
    "name": "Mermaid",
    "customEmojiId": "5262840787493744291"
  },
  {
    "name": "Princess",
    "customEmojiId": "5262472536997786412"
  },
  {
    "name": "Error Log",
    "customEmojiId": "5262786855589409364"
  },
  {
    "name": "Neon Grid",
    "customEmojiId": "5262917521379455080"
  },
  {
    "name": "Golden Star",
    "customEmojiId": "5262676535059442935"
  },
  {
    "name": "Brainstorm",
    "customEmojiId": "5262969765361642050"
  },
  {
    "name": "Trade Ledger",
    "customEmojiId": "5262730973769918741"
  },
  {
    "name": "Twin Stars",
    "customEmojiId": "5262477128317821537"
  },
  {
    "name": "Love Affair",
    "customEmojiId": "5265075583531900971"
  },
  {
    "name": "Smoothie",
    "customEmojiId": "5262465424531943057"
  },
  {
    "name": "Pearlescent",
    "customEmojiId": "5262662490516384949"
  },
  {
    "name": "Le Club",
    "customEmojiId": "5262479443305198444"
  },
  {
    "name": "True Love",
    "customEmojiId": "5265000546158273845"
  },
  {
    "name": "North Pole",
    "customEmojiId": "5262551018935184912"
  },
  {
    "name": "Hippie",
    "customEmojiId": "5264955784009113040"
  },
  {
    "name": "Florist",
    "customEmojiId": "5262727688119938873"
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5262709224055533309"
  },
  {
    "name": "Telegram",
    "customEmojiId": "5264802384957172021"
  },
  {
    "name": "Tiger",
    "customEmojiId": "5262765939098677614"
  },
  {
    "name": "Hologram",
    "customEmojiId": "5262976233582391512"
  },
  {
    "name": "Color Switch",
    "customEmojiId": "5262484940863336372"
  },
  {
    "name": "Metallic",
    "customEmojiId": "5265106850893815260"
  },
  {
    "name": "Paper Plane",
    "customEmojiId": "5262589759540197072"
  },
  {
    "name": "Paw Pads",
    "customEmojiId": "5262792838478850965"
  },
  {
    "name": "Superstar",
    "customEmojiId": "5262843549157713224"
  },
  {
    "name": "Snow Globe",
    "customEmojiId": "5262620820743679376"
  },
  {
    "name": "Executive",
    "customEmojiId": "5263015820295957959"
  },
  {
    "name": "Positive",
    "customEmojiId": "5262548802732058975"
  },
  {
    "name": "Novelist",
    "customEmojiId": "5264798944688365868"
  },
  {
    "name": "Starry Night",
    "customEmojiId": "5262622147888577652"
  },
  {
    "name": "King Arthur",
    "customEmojiId": "5262940095727561970"
  },
  {
    "name": "Chronicles",
    "customEmojiId": "5262843699481569867"
  },
  {
    "name": "Lord Byron",
    "customEmojiId": "5262505067080085885"
  },
  {
    "name": "Anemone",
    "customEmojiId": "5262587843984780458"
  },
  {
    "name": "Savoy Blue",
    "customEmojiId": "5262836110274357662"
  },
  {
    "name": "Daily Blues",
    "customEmojiId": "5262682414869672475"
  },
  {
    "name": "Walnut",
    "customEmojiId": "5262592551268935593"
  },
  {
    "name": "Hazelnut",
    "customEmojiId": "5262935379853469270"
  },
  {
    "name": "Cyprus",
    "customEmojiId": "5262736621651914229"
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5262745520824151422"
  },
  {
    "name": "Negative",
    "customEmojiId": "5262818410714134459"
  },
  {
    "name": "Tangerine",
    "customEmojiId": "5262629397793368860"
  },
  {
    "name": "Indigo",
    "customEmojiId": "5265087721109480069"
  },
  {
    "name": "Lemonade",
    "customEmojiId": "5265208834892259756"
  },
  {
    "name": "Ranger",
    "customEmojiId": "5264751914796476119"
  },
  {
    "name": "Death Note",
    "customEmojiId": "5262743811427166858"
  },
  {
    "name": "Joker’s Notes",
    "customEmojiId": "5262953899752454250"
  },
  {
    "name": "The Cutie",
    "customEmojiId": "5262937673366005185"
  },
  {
    "name": "Matcha",
    "customEmojiId": "5262702669935439586"
  },
  {
    "name": "Candy Pink",
    "customEmojiId": "5262512789431282809"
  },
  {
    "name": "Tutti Frutti",
    "customEmojiId": "5262972192018164247"
  },
  {
    "name": "Newmarket",
    "customEmojiId": "5264815806729968723"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5262588694388306415"
  },
  {
    "name": "Red Cover",
    "customEmojiId": "5264986334111490367"
  },
  {
    "name": "Marmalade",
    "customEmojiId": "5262519592659479073"
  },
  {
    "name": "Daybook",
    "customEmojiId": "5262490962407484784"
  },
  {
    "name": "Oak Tree",
    "customEmojiId": "5264750304183739726"
  },
  {
    "name": "Hipster",
    "customEmojiId": "5262516212520219651"
  },
  {
    "name": "Hot Pink",
    "customEmojiId": "5263008961233184566"
  },
  {
    "name": "Mustard",
    "customEmojiId": "5262922460591856247"
  },
  {
    "name": "Matte Black",
    "customEmojiId": "5262764723622931446"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5262826992058788113"
  },
  {
    "name": "Tropical",
    "customEmojiId": "5262939906748999425"
  },
  {
    "name": "Blue Jeans",
    "customEmojiId": "5264758597765586386"
  },
  {
    "name": "Tobacco",
    "customEmojiId": "5262997575274886251"
  },
  {
    "name": "Central Park",
    "customEmojiId": "5264747263346895067"
  },
  {
    "name": "Meadow",
    "customEmojiId": "5262779335101669605"
  },
  {
    "name": "Timber",
    "customEmojiId": "5262712982151912049"
  },
  {
    "name": "Crimson",
    "customEmojiId": "5264847353264757113"
  },
  {
    "name": "Cheerleader",
    "customEmojiId": "5262840525500740449"
  },
  {
    "name": "Fashion Doll",
    "customEmojiId": "5262504461489696592"
  },
  {
    "name": "Faculty",
    "customEmojiId": "5262685047684627335"
  },
  {
    "name": "Leather",
    "customEmojiId": "5262848977996378276"
  },
  {
    "name": "Vice City",
    "customEmojiId": "5263003128667598170"
  },
  {
    "name": "Vineyard",
    "customEmojiId": "5262990501463749097"
  },
  {
    "name": "Marakuja",
    "customEmojiId": "5262490648874872679"
  },
  {
    "name": "Côte d’Azur",
    "customEmojiId": "5264920354823887424"
  },
  {
    "name": "Sterling",
    "customEmojiId": "5262773562665626776"
  },
  {
    "name": "Monarch",
    "customEmojiId": "5262903914923061460"
  },
  {
    "name": "Skies Above",
    "customEmojiId": "5262897412342574533"
  },
  {
    "name": "Snow White",
    "customEmojiId": "5265042473629014770"
  },
  {
    "name": "Nightpad",
    "customEmojiId": "5262789896426250197"
  },
  {
    "name": "Coyote",
    "customEmojiId": "5262566214529478276"
  },
  {
    "name": "Ocean Wave",
    "customEmojiId": "5264992123727404418"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690"
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806"
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376"
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269"
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188"
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654"
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623"
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107"
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154"
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958"
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001"
  },
  {
    "name": "Sushi Rolls",
    "customEmojiId": "5199851312526692154"
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743"
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927"
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324"
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561"
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5199581154788806855"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573"
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619"
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948"
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820"
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697"
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130"
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457"
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823"
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781"
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877"
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139"
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508"
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
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
    "name": "Eye of Horus",
    "customEmojiId": "5199790332581021201"
  },
  {
    "name": "Doghouse",
    "customEmojiId": "5199765365936130864"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "Warhorse",
    "customEmojiId": "5199428060679541926"
  },
  {
    "name": "Sleepy Unicorn",
    "customEmojiId": "5199466646665722804"
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799"
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Ancient Urn",
    "customEmojiId": "5199861697757609491"
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865"
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Puzzle",
    "customEmojiId": "5199967783449824573"
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049"
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707"
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Battle Axe",
    "customEmojiId": "5199628420903899369"
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037"
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439"
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678"
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651"
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748"
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188"
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480"
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183"
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950"
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833"
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571"
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620"
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082"
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060"
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006"
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740"
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204"
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891"
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527"
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
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Radar",
    "customEmojiId": "5199811519654695383"
  },
  {
    "name": "Ribeye Steak",
    "customEmojiId": "5199881892693838705"
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359"
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550"
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867"
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625"
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475"
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484"
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419"
  },
  {
    "name": "Aztec Totem",
    "customEmojiId": "5199726925978831254"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088"
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766"
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867"
  },
  {
    "name": "Duck Face",
    "customEmojiId": "5199541576665173998"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419"
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218"
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587"
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489"
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289"
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985"
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564"
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222"
  },
  {
    "name": "Moai Head",
    "customEmojiId": "5199419934601418009"
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107"
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030"
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675"
  },
  {
    "name": "Two Katanas",
    "customEmojiId": "5199814255548864362"
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419"
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392"
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380"
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817"
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355"
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813"
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271"
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060"
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Horn",
    "customEmojiId": "5199723906616821437"
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785"
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519"
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067"
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154"
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Sea Dragon",
    "customEmojiId": "5201953540104291279"
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563"
  },
  {
    "name": "Shinto Shrine",
    "customEmojiId": "5199478432055988373"
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717"
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330"
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801"
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502"
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570"
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702"
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871"
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998"
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336"
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034"
  },
  {
    "name": "Rose",
    "customEmojiId": "5199847348271877856"
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973"
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104"
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055"
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691"
  },
  {
    "name": "Sakura Flower",
    "customEmojiId": "5199826225622713630"
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869"
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405"
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611"
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651"
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768"
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Shamrock Green",
    "customEmojiId": "5377843866898555150",
    "hex": {
      "centerColor": "#8ab163",
      "edgeColor": "#559345",
      "patternColor": "#126b00",
      "textColor": "#d5fbc8"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "starnotepad", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
