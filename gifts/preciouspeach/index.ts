import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Smelting",
    "customEmojiId": "5456245935086525723"
  },
  {
    "name": "Caramel Red",
    "customEmojiId": "5456279702119408051"
  },
  {
    "name": "Cherry Secret",
    "customEmojiId": "5456496052507008754"
  },
  {
    "name": "Shocking",
    "customEmojiId": "5456636566657065486"
  },
  {
    "name": "Spanked",
    "customEmojiId": "5453981559608599977"
  },
  {
    "name": "Bubbling Blue",
    "customEmojiId": "5453935354350427095"
  },
  {
    "name": "Xmas Lights",
    "customEmojiId": "5456501511410442137"
  },
  {
    "name": "Blizzard",
    "customEmojiId": "5456573344738470306"
  },
  {
    "name": "Saint Nickel",
    "customEmojiId": "5456464024935881291"
  },
  {
    "name": "Gleam Bite",
    "customEmojiId": "5456409319937433964"
  },
  {
    "name": "Spoiled",
    "customEmojiId": "5454028825723692431"
  },
  {
    "name": "Impeached",
    "customEmojiId": "5454264207111379469"
  },
  {
    "name": "Angelic",
    "customEmojiId": "5456467151672075598"
  },
  {
    "name": "Pink Cupid",
    "customEmojiId": "5456235335107239570"
  },
  {
    "name": "Jelly Bubble",
    "customEmojiId": "5453935191141672870"
  },
  {
    "name": "Premium",
    "customEmojiId": "5454181344307338743"
  },
  {
    "name": "Rich Green",
    "customEmojiId": "5456368560697795689"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5456470329947872503"
  },
  {
    "name": "Bumblebee",
    "customEmojiId": "5454032012589424010"
  },
  {
    "name": "Cherry Season",
    "customEmojiId": "5454406241679861522"
  },
  {
    "name": "Cutout",
    "customEmojiId": "5454201719632191950"
  },
  {
    "name": "Airy Bright",
    "customEmojiId": "5456609873435321010"
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5456246227144305754"
  },
  {
    "name": "Morningstar",
    "customEmojiId": "5456618549269257087"
  },
  {
    "name": "Smooch",
    "customEmojiId": "5453861154495423585"
  },
  {
    "name": "Jelly Stars",
    "customEmojiId": "5456491577151087475"
  },
  {
    "name": "999 Karat",
    "customEmojiId": "5454276207250005274"
  },
  {
    "name": "Yin Yang",
    "customEmojiId": "5456264777108055256"
  },
  {
    "name": "Glass Heart",
    "customEmojiId": "5456196388343800678"
  },
  {
    "name": "Crypto Orange",
    "customEmojiId": "5454399507171139184"
  },
  {
    "name": "Tonfruit",
    "customEmojiId": "5456616315886263872"
  },
  {
    "name": "Lush Green",
    "customEmojiId": "5456267281073988174"
  },
  {
    "name": "Glossy Pink",
    "customEmojiId": "5454372710870180796"
  },
  {
    "name": "Moss Posh",
    "customEmojiId": "5453865101570367871"
  },
  {
    "name": "Dreamer",
    "customEmojiId": "5456536081602207771"
  },
  {
    "name": "Terra Firma",
    "customEmojiId": "5456582840911159714"
  },
  {
    "name": "Cozy Warmth",
    "customEmojiId": "5456236013712073843"
  },
  {
    "name": "Golden Shine",
    "customEmojiId": "5454051709309444367"
  },
  {
    "name": "Malachite",
    "customEmojiId": "5456435785525912440"
  },
  {
    "name": "Bismuth",
    "customEmojiId": "5453905684716346179"
  },
  {
    "name": "Peach Black",
    "customEmojiId": "5456503156382916971"
  },
  {
    "name": "Iridescent",
    "customEmojiId": "5456230473204260000"
  },
  {
    "name": "Neo-Chrome",
    "customEmojiId": "5453862236827179971"
  },
  {
    "name": "Berry Pit",
    "customEmojiId": "5456198729100976253"
  },
  {
    "name": "Juicy Orange",
    "customEmojiId": "5454081065410912595"
  },
  {
    "name": "Twilight",
    "customEmojiId": "5454269275172791604"
  },
  {
    "name": "Ripe Green",
    "customEmojiId": "5456399956908729542"
  },
  {
    "name": "Faded Silver",
    "customEmojiId": "5456580319765357564"
  },
  {
    "name": "Juicy Tones",
    "customEmojiId": "5456193368981793016"
  },
  {
    "name": "Clear Sky",
    "customEmojiId": "5456444757712593156"
  },
  {
    "name": "Soap Bubble",
    "customEmojiId": "5461053442304795125"
  },
  {
    "name": "Heirloom",
    "customEmojiId": "5458597064608866739"
  },
  {
    "name": "Iron Blush",
    "customEmojiId": "5458382986258966182"
  },
  {
    "name": "Elegance",
    "customEmojiId": "5458419364631964489"
  },
  {
    "name": "Cutie Pink",
    "customEmojiId": "5458735525764557397"
  },
  {
    "name": "Party-Ready",
    "customEmojiId": "5461144044639901887"
  },
  {
    "name": "Honey Gold",
    "customEmojiId": "5458632648412914336"
  },
  {
    "name": "Bright Amber",
    "customEmojiId": "5458537549247050762"
  },
  {
    "name": "Bright Coral",
    "customEmojiId": "5458779364495747532"
  },
  {
    "name": "Morning Haze",
    "customEmojiId": "5458464148255959239"
  },
  {
    "name": "Bronze",
    "customEmojiId": "5458455790249601599"
  },
  {
    "name": "Christmas",
    "customEmojiId": "5458757593306524346"
  },
  {
    "name": "Mardi Gras",
    "customEmojiId": "5458674747682358788"
  },
  {
    "name": "Sunset",
    "customEmojiId": "5460671821575645198"
  },
  {
    "name": "Purple Glow",
    "customEmojiId": "5458516675705989505"
  },
  {
    "name": "Cold Iron",
    "customEmojiId": "5458909119752725095"
  },
  {
    "name": "Pure Peach",
    "customEmojiId": "5461169264687863754"
  },
  {
    "name": "Polaris",
    "customEmojiId": "5458639292727325093"
  },
  {
    "name": "Ruby Slice",
    "customEmojiId": "5458837952144634196"
  },
  {
    "name": "Ruby Red",
    "customEmojiId": "5460831409675459868"
  },
  {
    "name": "Smooth Touch",
    "customEmojiId": "5458609760532196945"
  },
  {
    "name": "Stardust",
    "customEmojiId": "5461049173107301344"
  },
  {
    "name": "Fuzzy Lilac",
    "customEmojiId": "5458385129447647970"
  },
  {
    "name": "Neptune",
    "customEmojiId": "5460751192571270591"
  },
  {
    "name": "Rosegold",
    "customEmojiId": "5458382286179297701"
  },
  {
    "name": "Soft Sunset",
    "customEmojiId": "5458612066929634381"
  },
  {
    "name": "Ogre Green",
    "customEmojiId": "5461068831172613522"
  },
  {
    "name": "Pyrite",
    "customEmojiId": "5460838492076527400"
  },
  {
    "name": "Glossy Finish",
    "customEmojiId": "5458869859456675958"
  },
  {
    "name": "Ripe Pink",
    "customEmojiId": "5458712096717957963"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Napkins",
    "customEmojiId": "5199437329218965470"
  },
  {
    "name": "Cunning Fox",
    "customEmojiId": "5199544935329597288"
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669"
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107"
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813"
  },
  {
    "name": "Butterfly",
    "customEmojiId": "5199604893073048970"
  },
  {
    "name": "Flirty Message",
    "customEmojiId": "5199585110453685697"
  },
  {
    "name": "Fluffy Wolf",
    "customEmojiId": "5199636065945685337"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077"
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058"
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363"
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Lovely Key",
    "customEmojiId": "5199585978037078422"
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639"
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519"
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566"
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696"
  },
  {
    "name": "Sweets Box",
    "customEmojiId": "5199482696958513677"
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864"
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148"
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886"
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234"
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233"
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091"
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128"
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271"
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118"
  },
  {
    "name": "Rabbit",
    "customEmojiId": "5199887768209097952"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806"
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152"
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024"
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899"
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620"
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692"
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5199437178895110515"
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347"
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799"
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457"
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867"
  },
  {
    "name": "Shiny Heart",
    "customEmojiId": "5199799154443848625"
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851"
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215"
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740"
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651"
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774"
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565"
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
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
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939"
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125"
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405"
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849"
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846"
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651"
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343"
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117"
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981"
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801"
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917"
  },
  {
    "name": "Flying Heart",
    "customEmojiId": "5199791393437943862"
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955"
  },
  {
    "name": "Cupid",
    "customEmojiId": "5199526046063441284"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836"
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190"
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218"
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722"
  },
  {
    "name": "Lips",
    "customEmojiId": "5199797951853008666"
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
  },
  {
    "name": "Heart Balloon",
    "customEmojiId": "5199420948213697782"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Double Bed",
    "customEmojiId": "5199507204041903322"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948"
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654"
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674"
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122"
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263"
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088"
  },
  {
    "name": "Heart Shades",
    "customEmojiId": "5199498622697246200"
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517"
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055"
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891"
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039"
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287"
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018"
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958"
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902"
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004"
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368"
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137"
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808"
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865"
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837"
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030"
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336"
  },
  {
    "name": "Lingerie",
    "customEmojiId": "5199610622559422186"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090"
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638"
  },
  {
    "name": "Aubergine",
    "customEmojiId": "5199473617397649496"
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301"
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359"
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831"
  },
  {
    "name": "Patched Heart",
    "customEmojiId": "5201931421022716330"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Romantic Cake",
    "customEmojiId": "5199478951747031038"
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444"
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952"
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892"
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088"
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195"
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702"
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691"
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443"
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762"
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785"
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099"
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783"
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376"
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886"
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985"
  },
  {
    "name": "Cute Bear",
    "customEmojiId": "5199832552109543285"
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944"
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075"
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882"
  },
  {
    "name": "Passion Latte",
    "customEmojiId": "5199415609569347891"
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877"
  },
  {
    "name": "Lovely Rose",
    "customEmojiId": "5201900810790798810"
  },
  {
    "name": "Blossom",
    "customEmojiId": "5199927973397957915"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
  },
  {
    "name": "Padlock",
    "customEmojiId": "5199791522286967123"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198"
  },
  {
    "name": "Lovebirds",
    "customEmojiId": "5199962199992339292"
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675"
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603"
  },
  {
    "name": "Stilettos",
    "customEmojiId": "5199526866402183288"
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034"
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755"
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009"
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678"
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900"
  },
  {
    "name": "Heartbeat",
    "customEmojiId": "5199608762838583069"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161"
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375"
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126"
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538"
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867"
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118"
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564"
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950"
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419"
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651"
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Lovely Bra",
    "customEmojiId": "5199569678636190884"
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500"
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715"
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617"
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269"
  },
  {
    "name": "Loving Heart",
    "customEmojiId": "5199424448612044780"
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264"
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820"
  },
  {
    "name": "Amour Scoops",
    "customEmojiId": "5199434537490223092"
  },
  {
    "name": "Loveberry",
    "customEmojiId": "5199559143081412940"
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667"
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721"
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530"
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329"
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797"
  },
  {
    "name": "Love Dove",
    "customEmojiId": "5199713551450672774"
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691"
  },
  {
    "name": "Kitty Cat",
    "customEmojiId": "5199530723282813013"
  },
  {
    "name": "Cupid’s Arrow",
    "customEmojiId": null
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107"
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582"
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723"
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867"
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419"
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086"
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006"
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
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669"
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778"
  },
  {
    "name": "Lovely Rain",
    "customEmojiId": "5199442977100959205"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841"
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
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
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638"
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228"
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
    "name": "Broken Heart",
    "customEmojiId": "5199424470086882078"
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967"
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Light Bulb",
    "customEmojiId": "5199494031377208082"
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817"
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869"
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714"
  },
  {
    "name": "Water Drops",
    "customEmojiId": "5199780544350552415"
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645"
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813"
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Black",
    "customEmojiId": "5377437666071568792",
    "hex": {
      "centerColor": "#363738",
      "edgeColor": "#0e0f0f",
      "patternColor": "#6c6868",
      "textColor": "#8c8f91"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "preciouspeach", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
