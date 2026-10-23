import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Homeland",
    "customEmojiId": "5352788449327882313"
  },
  {
    "name": "Rebel Royal",
    "customEmojiId": "5353021296684868545"
  },
  {
    "name": "MAGA",
    "customEmojiId": "5352689553410922089"
  },
  {
    "name": "iFather",
    "customEmojiId": "5352677660646481152"
  },
  {
    "name": "Marilyn",
    "customEmojiId": "5352545483027948570"
  },
  {
    "name": "Baywatch",
    "customEmojiId": "5352630184077990847"
  },
  {
    "name": "Moonwalker",
    "customEmojiId": "5352903116364749888"
  },
  {
    "name": "Psycho",
    "customEmojiId": "5352919166657537306"
  },
  {
    "name": "King of Rock",
    "customEmojiId": "5355179182743657091"
  },
  {
    "name": "Excelsior",
    "customEmojiId": "5352864268385559634"
  },
  {
    "name": "Warhol",
    "customEmojiId": "5352816117507204346"
  },
  {
    "name": "Oppenheimer",
    "customEmojiId": "5352902811422073501"
  },
  {
    "name": "Uncle Sam",
    "customEmojiId": "5352552921911306816"
  },
  {
    "name": "Astronaut",
    "customEmojiId": "5352991652820590649"
  },
  {
    "name": "Jester",
    "customEmojiId": "5352787659053900069"
  },
  {
    "name": "Burger Queen",
    "customEmojiId": "5355039128155103829"
  },
  {
    "name": "Miss USA",
    "customEmojiId": "5352819514826336042"
  },
  {
    "name": "Justice",
    "customEmojiId": "5352727138669731871"
  },
  {
    "name": "Jacqueline",
    "customEmojiId": "5352958190730388411"
  },
  {
    "name": "Edison",
    "customEmojiId": "5352941796840221376"
  },
  {
    "name": "Ford",
    "customEmojiId": "5355176395309883338"
  },
  {
    "name": "Tesla",
    "customEmojiId": "5352839576618573606"
  },
  {
    "name": "Lincoln",
    "customEmojiId": "5352992318540520322"
  },
  {
    "name": "Washington",
    "customEmojiId": "5354959877418559991"
  },
  {
    "name": "Jordan",
    "customEmojiId": "5352779451371395764"
  },
  {
    "name": "Ali",
    "customEmojiId": "5355000220046370495"
  },
  {
    "name": "Street Beats",
    "customEmojiId": "5352847711286630978"
  },
  {
    "name": "Block Lady",
    "customEmojiId": "5354958541683732254"
  },
  {
    "name": "Obsidian",
    "customEmojiId": "5352801664942253028"
  },
  {
    "name": "Earhart",
    "customEmojiId": "5352655202262492925"
  },
  {
    "name": "Columbia",
    "customEmojiId": "5352799998494941150"
  },
  {
    "name": "Hippie",
    "customEmojiId": "5352674392176368916"
  },
  {
    "name": "Rebellion",
    "customEmojiId": "5352577424699730344"
  },
  {
    "name": "Pumpkin",
    "customEmojiId": "5353060441016803712"
  },
  {
    "name": "Independence",
    "customEmojiId": "5352939988658987139"
  },
  {
    "name": "Treant",
    "customEmojiId": "5352786606786912054"
  },
  {
    "name": "Columbus",
    "customEmojiId": "5352678528229874048"
  },
  {
    "name": "Gold Rush",
    "customEmojiId": "5353025845055239553"
  },
  {
    "name": "Chieftain",
    "customEmojiId": "5352845130011287609"
  },
  {
    "name": "Plushie",
    "customEmojiId": "5352832412613124097"
  },
  {
    "name": "Quarterback",
    "customEmojiId": "5352794646965691502"
  },
  {
    "name": "Girl Scout",
    "customEmojiId": "5352617432320090874"
  },
  {
    "name": "Deputy",
    "customEmojiId": "5352732524558721403"
  },
  {
    "name": "Cowboy",
    "customEmojiId": "5354984302897568855"
  },
  {
    "name": "Gearhead",
    "customEmojiId": "5352650473503500717"
  },
  {
    "name": "Amethyst",
    "customEmojiId": "5352848716308981381"
  },
  {
    "name": "Red Porcelain",
    "customEmojiId": "5352645229348429928"
  },
  {
    "name": "Settler",
    "customEmojiId": "5352779683299632228"
  },
  {
    "name": "Pitcher",
    "customEmojiId": "5352945662310783458"
  },
  {
    "name": "Hula Girl",
    "customEmojiId": "5352718368346512199"
  },
  {
    "name": "West Egg",
    "customEmojiId": "5353002755311053185"
  },
  {
    "name": "Rose Quartz",
    "customEmojiId": "5352929517528719257"
  },
  {
    "name": "Fire Opal",
    "customEmojiId": "5352726923921369213"
  },
  {
    "name": "Ice Queen",
    "customEmojiId": "5353050309188951502"
  },
  {
    "name": "Golden Torch",
    "customEmojiId": "5355191307436335478"
  },
  {
    "name": "Ruby Flame",
    "customEmojiId": "5354932518476883334"
  },
  {
    "name": "Diamond",
    "customEmojiId": "5352745108812897019"
  },
  {
    "name": "Aquamarine",
    "customEmojiId": "5353017405444497310"
  },
  {
    "name": "Carrara",
    "customEmojiId": "5352538413511779979"
  },
  {
    "name": "Peridot",
    "customEmojiId": "5353037059214841508"
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487"
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161"
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030"
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877"
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620"
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567"
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206"
  },
  {
    "name": "Valkyrie",
    "customEmojiId": "5199881720895146204"
  },
  {
    "name": "Thor Hammer",
    "customEmojiId": "5199857621833649230"
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292"
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851"
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363"
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576"
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148"
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564"
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013"
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107"
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822"
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188"
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258"
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827"
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751"
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703"
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994"
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289"
  },
  {
    "name": "Baseball Cap",
    "customEmojiId": "5199873423018329022"
  },
  {
    "name": "Bike Helmet",
    "customEmojiId": "5199780634544872443"
  },
  {
    "name": "Deerstalker",
    "customEmojiId": "5199479669006568749"
  },
  {
    "name": "Cricket Helmet",
    "customEmojiId": "5199841202173676889"
  },
  {
    "name": "Royal Turban",
    "customEmojiId": "5199593258006647336"
  },
  {
    "name": "Fedora",
    "customEmojiId": "5199413530805178187"
  },
  {
    "name": "Easter Egg",
    "customEmojiId": "5199483835124843089"
  },
  {
    "name": "Press Hat",
    "customEmojiId": "5199819379444842683"
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583"
  },
  {
    "name": "Fireman Hat",
    "customEmojiId": "5199732475076578186"
  },
  {
    "name": "Full Moon",
    "customEmojiId": "5199549311901275297"
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625"
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587"
  },
  {
    "name": "Baby Bottle",
    "customEmojiId": "5199867139481178799"
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208"
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756"
  },
  {
    "name": "Flag",
    "customEmojiId": "5199874462400414430"
  },
  {
    "name": "Ribeye Steak",
    "customEmojiId": "5199881892693838705"
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
    "name": "Wontons",
    "customEmojiId": "5199961989538942623"
  },
  {
    "name": "Ancient Urn",
    "customEmojiId": "5199861697757609491"
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287"
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774"
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380"
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772"
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
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099"
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741"
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958"
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625"
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778"
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029"
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322"
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651"
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998"
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355"
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275"
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
    "name": "Cherry",
    "customEmojiId": "5199513358730037370"
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634"
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501"
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833"
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405"
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846"
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424"
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882"
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334"
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465"
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
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343"
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395"
  },
  {
    "name": "Shuriken",
    "customEmojiId": "5199657373278441561"
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527"
  },
  {
    "name": "Hourglass",
    "customEmojiId": "5199866430811571603"
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570"
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741"
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086"
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997"
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821"
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729"
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871"
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347"
  },
  {
    "name": "Viking Shield",
    "customEmojiId": "5199415012568896891"
  },
  {
    "name": "Aztec Falcon",
    "customEmojiId": "5199675880292517991"
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234"
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480"
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372"
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748"
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104"
  },
  {
    "name": "Hersir",
    "customEmojiId": "5199923815869616574"
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330"
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730"
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034"
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973"
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714"
  },
  {
    "name": "Moto Helmet",
    "customEmojiId": "5199939002873972654"
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419"
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855"
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261"
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004"
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129"
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638"
  },
  {
    "name": "Straw Hat",
    "customEmojiId": "5199475953859857051"
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197"
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475"
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416"
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083"
  },
  {
    "name": "Kashket",
    "customEmojiId": "5199448672227594010"
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530"
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944"
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232"
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324"
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869"
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228"
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714"
  },
  {
    "name": "Paschal Lamb",
    "customEmojiId": "5199584784036172118"
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459"
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785"
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712"
  },
  {
    "name": "Bicorne",
    "customEmojiId": "5199462042460782106"
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039"
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849"
  },
  {
    "name": "Turban",
    "customEmojiId": "5199446709427536047"
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058"
  },
  {
    "name": "Shako",
    "customEmojiId": "5199855955386337078"
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340"
  },
  {
    "name": "Piranha",
    "customEmojiId": "5199947034462818715"
  },
  {
    "name": "Hard Hat",
    "customEmojiId": "5199914431366072974"
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324"
  },
  {
    "name": "Snail",
    "customEmojiId": "5199427729967062308"
  },
  {
    "name": "Greek Helmet",
    "customEmojiId": "5199497274077514887"
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633"
  },
  {
    "name": "Visor",
    "customEmojiId": "5199623855353661732"
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263"
  },
  {
    "name": "Spring Chick",
    "customEmojiId": "5199834257211559421"
  },
  {
    "name": "Legionary",
    "customEmojiId": "5199428202413461386"
  },
  {
    "name": "Tricorne",
    "customEmojiId": "5199835163449654129"
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578"
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611"
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217"
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632"
  },
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875"
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454"
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818"
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692"
  },
  {
    "name": "Fez",
    "customEmojiId": "5199554328423076266"
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558"
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139"
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229"
  },
  {
    "name": "Neptune",
    "customEmojiId": "5199805712858906090"
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871"
  },
  {
    "name": "Galaxy",
    "customEmojiId": "5199493898233219049"
  },
  {
    "name": "Academic Cap",
    "customEmojiId": "5199683830276984098"
  },
  {
    "name": "Sombrero",
    "customEmojiId": "5199736203108190403"
  },
  {
    "name": "Party Hat",
    "customEmojiId": "5199420192299454140"
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707"
  },
  {
    "name": "Mining Helmet",
    "customEmojiId": "5199842336045040776"
  },
  {
    "name": "Serpent",
    "customEmojiId": "5199799880293323047"
  },
  {
    "name": "Banner",
    "customEmojiId": "5199763055243726900"
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271"
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568"
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781"
  },
  {
    "name": "Bobby Helmet",
    "customEmojiId": "5199570082363115866"
  },
  {
    "name": "Plume Shako",
    "customEmojiId": "5199423851611589961"
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713"
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269"
  },
  {
    "name": "Pith Helmet",
    "customEmojiId": "5199425878836152426"
  },
  {
    "name": "Thunderbird",
    "customEmojiId": "5199756144641346567"
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205"
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426"
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603"
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645"
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696"
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965"
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507"
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538"
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813"
  },
  {
    "name": "Handset",
    "customEmojiId": "5199548491562517801"
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457"
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086"
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351"
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687"
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359"
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723"
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336"
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018"
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164"
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
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199"
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960"
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164"
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169"
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654"
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801"
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797"
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006"
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405"
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820"
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484"
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865"
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948"
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569"
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212"
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950"
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237"
  },
  {
    "name": "Jörmungandr",
    "customEmojiId": "5199764777525611986"
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159"
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034"
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882"
  },
  {
    "name": "Novus Ordo",
    "customEmojiId": "5199450368739677084"
  },
  {
    "name": "Kudu Totem",
    "customEmojiId": "5199943018668394204"
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618"
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721"
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018"
  },
  {
    "name": "Wagasa",
    "customEmojiId": "5199688541856110192"
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813"
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573"
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743"
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549"
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273"
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017"
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130"
  },
  {
    "name": "Flower Sun",
    "customEmojiId": "5199422558826431486"
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554"
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521"
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939"
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117"
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226"
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718"
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886"
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744"
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397"
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669"
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030"
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785"
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028"
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377"
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639"
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936"
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899"
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Electric Indigo",
    "customEmojiId": "5375368406662934349",
    "hex": {
      "centerColor": "#a980f3",
      "edgeColor": "#5b62d8",
      "patternColor": "#3722ab",
      "textColor": "#d8d8ff"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "libertyfigure", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
