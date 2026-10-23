import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5981132629905245483" as const;

export const models = [
  {
    "name": "Cherry Duck",
    "customEmojiId": "5354935361745217948",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/cherry-duck.svg",
      "tgs": "gifts/snowglobe/assets/models/cherry-duck.tgs"
    }
  },
  {
    "name": "Musk",
    "customEmojiId": "5354959886008479882",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/musk.svg",
      "tgs": "gifts/snowglobe/assets/models/musk.tgs"
    }
  },
  {
    "name": "Pepe Frost",
    "customEmojiId": "5355156977762724895",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/pepe-frost.svg",
      "tgs": "gifts/snowglobe/assets/models/pepe-frost.tgs"
    }
  },
  {
    "name": "Bag End",
    "customEmojiId": "5355017953966317288",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/bag-end.svg",
      "tgs": "gifts/snowglobe/assets/models/bag-end.tgs"
    }
  },
  {
    "name": "Fish Tank",
    "customEmojiId": "5355119521352938818",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/fish-tank.svg",
      "tgs": "gifts/snowglobe/assets/models/fish-tank.tgs"
    }
  },
  {
    "name": "Ginger House",
    "customEmojiId": "5354986647949700693",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/ginger-house.svg",
      "tgs": "gifts/snowglobe/assets/models/ginger-house.tgs"
    }
  },
  {
    "name": "House of Cards",
    "customEmojiId": "5355228201205397410",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/house-of-cards.svg",
      "tgs": "gifts/snowglobe/assets/models/house-of-cards.tgs"
    }
  },
  {
    "name": "Party Cat",
    "customEmojiId": "5355125555781992384",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/party-cat.svg",
      "tgs": "gifts/snowglobe/assets/models/party-cat.tgs"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5354911043640389182",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/piggy-bank.svg",
      "tgs": "gifts/snowglobe/assets/models/piggy-bank.tgs"
    }
  },
  {
    "name": "Secret Gift",
    "customEmojiId": "5354856111008676412",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/secret-gift.svg",
      "tgs": "gifts/snowglobe/assets/models/secret-gift.tgs"
    }
  },
  {
    "name": "Smurf Cabin",
    "customEmojiId": "5355113465449050229",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/smurf-cabin.svg",
      "tgs": "gifts/snowglobe/assets/models/smurf-cabin.tgs"
    }
  },
  {
    "name": "Autumn",
    "customEmojiId": "5355194923798784905",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/autumn.svg",
      "tgs": "gifts/snowglobe/assets/models/autumn.tgs"
    }
  },
  {
    "name": "Baobab",
    "customEmojiId": "5354800787534935494",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/baobab.svg",
      "tgs": "gifts/snowglobe/assets/models/baobab.tgs"
    }
  },
  {
    "name": "Bedrock",
    "customEmojiId": "5355076558795075349",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/bedrock.svg",
      "tgs": "gifts/snowglobe/assets/models/bedrock.tgs"
    }
  },
  {
    "name": "Bikini Bottom",
    "customEmojiId": "5357331910546709889",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/bikini-bottom.svg",
      "tgs": "gifts/snowglobe/assets/models/bikini-bottom.tgs"
    }
  },
  {
    "name": "Bronze Temple",
    "customEmojiId": "5357202936973779270",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/bronze-temple.svg",
      "tgs": "gifts/snowglobe/assets/models/bronze-temple.tgs"
    }
  },
  {
    "name": "Crimson Cabin",
    "customEmojiId": "5355143899587309599",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/crimson-cabin.svg",
      "tgs": "gifts/snowglobe/assets/models/crimson-cabin.tgs"
    }
  },
  {
    "name": "Dracula",
    "customEmojiId": "5355157162446316665",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/dracula.svg",
      "tgs": "gifts/snowglobe/assets/models/dracula.tgs"
    }
  },
  {
    "name": "Ender Estate",
    "customEmojiId": "5355160641369826327",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/ender-estate.svg",
      "tgs": "gifts/snowglobe/assets/models/ender-estate.tgs"
    }
  },
  {
    "name": "Happy Town",
    "customEmojiId": "5354857030131674489",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/happy-town.svg",
      "tgs": "gifts/snowglobe/assets/models/happy-town.tgs"
    }
  },
  {
    "name": "Minehouse",
    "customEmojiId": "5355079264624471689",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/minehouse.svg",
      "tgs": "gifts/snowglobe/assets/models/minehouse.tgs"
    }
  },
  {
    "name": "Nether House",
    "customEmojiId": "5354820617398939407",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/nether-house.svg",
      "tgs": "gifts/snowglobe/assets/models/nether-house.tgs"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5355121016001555840",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/pyramid.svg",
      "tgs": "gifts/snowglobe/assets/models/pyramid.tgs"
    }
  },
  {
    "name": "Silver Frost",
    "customEmojiId": "5355090079352122392",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/silver-frost.svg",
      "tgs": "gifts/snowglobe/assets/models/silver-frost.tgs"
    }
  },
  {
    "name": "Spring",
    "customEmojiId": "5355017644728676533",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/spring.svg",
      "tgs": "gifts/snowglobe/assets/models/spring.tgs"
    }
  },
  {
    "name": "Summer",
    "customEmojiId": "5355160134563686218",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/summer.svg",
      "tgs": "gifts/snowglobe/assets/models/summer.tgs"
    }
  },
  {
    "name": "Wild West",
    "customEmojiId": "5355048877730853397",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/wild-west.svg",
      "tgs": "gifts/snowglobe/assets/models/wild-west.tgs"
    }
  },
  {
    "name": "Winter",
    "customEmojiId": "5355094292715039309",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/winter.svg",
      "tgs": "gifts/snowglobe/assets/models/winter.tgs"
    }
  },
  {
    "name": "Apocalypse",
    "customEmojiId": "5355099738733571186",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/apocalypse.svg",
      "tgs": "gifts/snowglobe/assets/models/apocalypse.tgs"
    }
  },
  {
    "name": "Amethyst",
    "customEmojiId": "5355169828304873472",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/amethyst.svg",
      "tgs": "gifts/snowglobe/assets/models/amethyst.tgs"
    }
  },
  {
    "name": "Caramel",
    "customEmojiId": "5354986239927806313",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/caramel.svg",
      "tgs": "gifts/snowglobe/assets/models/caramel.tgs"
    }
  },
  {
    "name": "Choco Waffle",
    "customEmojiId": "5355131444182151884",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/choco-waffle.svg",
      "tgs": "gifts/snowglobe/assets/models/choco-waffle.tgs"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5354826385540016988",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/diamond.svg",
      "tgs": "gifts/snowglobe/assets/models/diamond.tgs"
    }
  },
  {
    "name": "Emerald",
    "customEmojiId": "5357242966068978876",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/emerald.svg",
      "tgs": "gifts/snowglobe/assets/models/emerald.tgs"
    }
  },
  {
    "name": "Garnet Dawn",
    "customEmojiId": "5354862282876677790",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/garnet-dawn.svg",
      "tgs": "gifts/snowglobe/assets/models/garnet-dawn.tgs"
    }
  },
  {
    "name": "Green Villa",
    "customEmojiId": "5355065494959320633",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/green-villa.svg",
      "tgs": "gifts/snowglobe/assets/models/green-villa.tgs"
    }
  },
  {
    "name": "Inversion",
    "customEmojiId": "5355030289112393988",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/inversion.svg",
      "tgs": "gifts/snowglobe/assets/models/inversion.tgs"
    }
  },
  {
    "name": "Lavender",
    "customEmojiId": "5355174522704129519",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/lavender.svg",
      "tgs": "gifts/snowglobe/assets/models/lavender.tgs"
    }
  },
  {
    "name": "Lost Color",
    "customEmojiId": "5354938153473963601",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/lost-color.svg",
      "tgs": "gifts/snowglobe/assets/models/lost-color.tgs"
    }
  },
  {
    "name": "Mango Lodge",
    "customEmojiId": "5355250517855464342",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/mango-lodge.svg",
      "tgs": "gifts/snowglobe/assets/models/mango-lodge.tgs"
    }
  },
  {
    "name": "Meadow",
    "customEmojiId": "5355180471233835303",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/meadow.svg",
      "tgs": "gifts/snowglobe/assets/models/meadow.tgs"
    }
  },
  {
    "name": "Midas Manor",
    "customEmojiId": "5355327071352548374",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/midas-manor.svg",
      "tgs": "gifts/snowglobe/assets/models/midas-manor.tgs"
    }
  },
  {
    "name": "Night Snow",
    "customEmojiId": "5355321393405784354",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/night-snow.svg",
      "tgs": "gifts/snowglobe/assets/models/night-snow.tgs"
    }
  },
  {
    "name": "Ocean Oasis",
    "customEmojiId": "5357373490125103308",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/ocean-oasis.svg",
      "tgs": "gifts/snowglobe/assets/models/ocean-oasis.tgs"
    }
  },
  {
    "name": "Orange Tale",
    "customEmojiId": "5354817941634313666",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/orange-tale.svg",
      "tgs": "gifts/snowglobe/assets/models/orange-tale.tgs"
    }
  },
  {
    "name": "Pink Dreams",
    "customEmojiId": "5355267216688313097",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/pink-dreams.svg",
      "tgs": "gifts/snowglobe/assets/models/pink-dreams.tgs"
    }
  },
  {
    "name": "Rose Pink",
    "customEmojiId": "5354828193721248797",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/rose-pink.svg",
      "tgs": "gifts/snowglobe/assets/models/rose-pink.tgs"
    }
  },
  {
    "name": "Sea Whisper",
    "customEmojiId": "5355280453777517720",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/sea-whisper.svg",
      "tgs": "gifts/snowglobe/assets/models/sea-whisper.tgs"
    }
  },
  {
    "name": "Sky Terrace",
    "customEmojiId": "5357166438341696247",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/sky-terrace.svg",
      "tgs": "gifts/snowglobe/assets/models/sky-terrace.tgs"
    }
  },
  {
    "name": "White Day",
    "customEmojiId": "5355140772851116843",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/snowglobe/assets/models/white-day.svg",
      "tgs": "gifts/snowglobe/assets/models/white-day.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Bobby Helmet",
    "customEmojiId": "5199570082363115866",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/bobby-helmet.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/bread.png"
    }
  },
  {
    "name": "Cavalier Hat",
    "customEmojiId": "5199484170132292855",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cavalier-hat.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cone.png"
    }
  },
  {
    "name": "Fez",
    "customEmojiId": "5199554328423076266",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/fez.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/keffiyeh.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Onigiri",
    "customEmojiId": "5199752717257444302",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/onigiri.png"
    }
  },
  {
    "name": "Royal Turban",
    "customEmojiId": "5199593258006647336",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/royal-turban.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/sword.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/wise-raven.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "All-Seeing Eye",
    "customEmojiId": "5199922359875701200",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/all-seeing-eye.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Bowler Hat",
    "customEmojiId": "5199745982748721353",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/bowler-hat.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cap.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cash.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Fried Egg",
    "customEmojiId": "5199508084510201810",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/fried-egg.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Kitsune Mask",
    "customEmojiId": "5199633360116285741",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/kitsune-mask.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/lily.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/moon.png"
    }
  },
  {
    "name": "Mustache",
    "customEmojiId": "5199490530978856729",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/mustache.png"
    }
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/nemes.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/owl.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/paw.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/ramen.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Tetsubin",
    "customEmojiId": "5199641735302519273",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/tetsubin.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "War Tiger",
    "customEmojiId": "5199588829895364674",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/war-tiger.png"
    }
  },
  {
    "name": "Watching Sun",
    "customEmojiId": "5199594327453501292",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/watching-sun.png"
    }
  },
  {
    "name": "Winged Helm",
    "customEmojiId": "5202028006247268831",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/burger.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/coonskin-cap.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cow-skull.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Flying Dragon",
    "customEmojiId": "5199467896501208139",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/flying-dragon.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/gold.png"
    }
  },
  {
    "name": "Hard Hat",
    "customEmojiId": "5199914431366072974",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/hard-hat.png"
    }
  },
  {
    "name": "Hot Matcha",
    "customEmojiId": "5199951325135144570",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/hot-matcha.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/kite.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/maple.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Moon Face",
    "customEmojiId": "5199410219385393618",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/moon-face.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Morgenstern",
    "customEmojiId": "5199655161370280611",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/morgenstern.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Obon Lantern",
    "customEmojiId": "5199784405526151376",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/obon-lantern.png"
    }
  },
  {
    "name": "Okami Wolf",
    "customEmojiId": "5199728489346925958",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/okami-wolf.png"
    }
  },
  {
    "name": "Omusubi",
    "customEmojiId": "5199717678914241233",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/omusubi.png"
    }
  },
  {
    "name": "Paper Crane",
    "customEmojiId": "5199459267911913743",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Paper Lantern",
    "customEmojiId": "5199406474173906392",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/paper-lantern.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Pirate Hat",
    "customEmojiId": "5199666663292700153",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/pirate-hat.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/plume.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/potion.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Takoyaki",
    "customEmojiId": "5199446662182899439",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/takoyaki.png"
    }
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/tamagotchi.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/bowtie.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/candle.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/festive-wreath.png"
    }
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/fireworks.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/snow-angel.png"
    }
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/snowflake.png"
    }
  },
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/winter-house.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/candy.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/hot-drink.png"
    }
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/ornament.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/chest.png"
    }
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/christmas-tree.png"
    }
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cookie.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/ice-skates.png"
    }
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/jingle-bell.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/mistletoe.png"
    }
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/mittens.png"
    }
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null,
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/new-year-s-eve.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/rudolph.png"
    }
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/santa-hat.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/snowman.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/star.png"
    }
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/stocking.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "rarityPermille": 18,
    "originalRarityPermille": 18,
    "rarity": 1.8,
    "originalRarity": 1.8,
    "assets": {
      "png": "gifts/snowglobe/assets/patterns/white-deer.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
  {
    "name": "Burgundy",
    "backdropId": 46,
    "customEmojiId": "5375243216956193305",
    "centerColor": 10706534,
    "edgeColor": 7160138,
    "patternColor": 3408647,
    "textColor": 15187136,
    "hex": {
      "centerColor": "#a35e66",
      "edgeColor": "#6d414a",
      "patternColor": "#340307",
      "textColor": "#e7bcc0"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/a35e66-6d414a-circle.svg",
      "squareSvg": "assets/backdrops/a35e66-6d414a-square.svg"
    }
  },
  {
    "name": "Cappuccino",
    "backdropId": 39,
    "customEmojiId": "5375084663943491762",
    "centerColor": 11636862,
    "edgeColor": 8151894,
    "patternColor": 4862502,
    "textColor": 15455432,
    "hex": {
      "centerColor": "#b1907e",
      "edgeColor": "#7c6356",
      "patternColor": "#4a3226",
      "textColor": "#ebd4c8"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/b1907e-7c6356-circle.svg",
      "squareSvg": "assets/backdrops/b1907e-7c6356-square.svg"
    }
  },
  {
    "name": "Carmine",
    "backdropId": 77,
    "customEmojiId": "5375573362502298464",
    "centerColor": 14702410,
    "edgeColor": 11024443,
    "patternColor": 5177600,
    "textColor": 16758701,
    "hex": {
      "centerColor": "#e0574a",
      "edgeColor": "#a8383b",
      "patternColor": "#4f0100",
      "textColor": "#ffb7ad"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/e0574a-a8383b-circle.svg",
      "squareSvg": "assets/backdrops/e0574a-a8383b-square.svg"
    }
  },
  {
    "name": "Carrot Juice",
    "backdropId": 24,
    "customEmojiId": "5377603262830633515",
    "centerColor": 14391399,
    "edgeColor": 13070159,
    "patternColor": 9314560,
    "textColor": 16766922,
    "hex": {
      "centerColor": "#db9867",
      "edgeColor": "#c76f4f",
      "patternColor": "#8e2100",
      "textColor": "#ffd7ca"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/db9867-c76f4f-circle.svg",
      "squareSvg": "assets/backdrops/db9867-c76f4f-square.svg"
    }
  },
  {
    "name": "Celtic Blue",
    "backdropId": 74,
    "customEmojiId": "5375186931409777211",
    "centerColor": 4569325,
    "edgeColor": 3704537,
    "patternColor": 16005,
    "textColor": 12773375,
    "hex": {
      "centerColor": "#45b8ed",
      "edgeColor": "#3886d9",
      "patternColor": "#003e85",
      "textColor": "#c2e7ff"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/45b8ed-3886d9-circle.svg",
      "squareSvg": "assets/backdrops/45b8ed-3886d9-square.svg"
    }
  },
  {
    "name": "Electric Purple",
    "backdropId": 1,
    "customEmojiId": "5375123176915234503",
    "centerColor": 13267142,
    "edgeColor": 9855700,
    "patternColor": 6426548,
    "textColor": 15453951,
    "hex": {
      "centerColor": "#ca70c6",
      "edgeColor": "#9662d4",
      "patternColor": "#620fb4",
      "textColor": "#ebceff"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/ca70c6-9662d4-circle.svg",
      "squareSvg": "assets/backdrops/ca70c6-9662d4-square.svg"
    }
  },
  {
    "name": "French Violet",
    "backdropId": 79,
    "customEmojiId": "5377583218218262703",
    "centerColor": 12738790,
    "edgeColor": 9522905,
    "patternColor": 4850058,
    "textColor": 15452159,
    "hex": {
      "centerColor": "#c260e6",
      "edgeColor": "#914ed9",
      "patternColor": "#4a018a",
      "textColor": "#ebc7ff"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/c260e6-914ed9-circle.svg",
      "squareSvg": "assets/backdrops/c260e6-914ed9-square.svg"
    }
  },
  {
    "name": "Gunmetal",
    "backdropId": 69,
    "customEmojiId": "5375182267075292360",
    "centerColor": 5004643,
    "edgeColor": 3095362,
    "patternColor": 264202,
    "textColor": 11978188,
    "hex": {
      "centerColor": "#4c5d63",
      "edgeColor": "#2f3b42",
      "patternColor": "#04080a",
      "textColor": "#b6c5cc"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/4c5d63-2f3b42-circle.svg",
      "squareSvg": "assets/backdrops/4c5d63-2f3b42-square.svg"
    }
  },
  {
    "name": "Khaki Green",
    "backdropId": 37,
    "customEmojiId": "5377549107587998846",
    "centerColor": 11382896,
    "edgeColor": 7044436,
    "patternColor": 3756059,
    "textColor": 13887163,
    "hex": {
      "centerColor": "#adb070",
      "edgeColor": "#6b7d54",
      "patternColor": "#39501b",
      "textColor": "#d3e6bb"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/adb070-6b7d54-circle.svg",
      "squareSvg": "assets/backdrops/adb070-6b7d54-square.svg"
    }
  },
  {
    "name": "Malachite",
    "backdropId": 15,
    "customEmojiId": "5377519721421758750",
    "centerColor": 9811031,
    "edgeColor": 4036437,
    "patternColor": 289542,
    "textColor": 12775358,
    "hex": {
      "centerColor": "#95b457",
      "edgeColor": "#3d9755",
      "patternColor": "#046b06",
      "textColor": "#c2efbe"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/95b457-3d9755-circle.svg",
      "squareSvg": "assets/backdrops/95b457-3d9755-square.svg"
    }
  },
  {
    "name": "Mexican Pink",
    "backdropId": 71,
    "customEmojiId": "5375494846205161879",
    "centerColor": 14902930,
    "edgeColor": 13191548,
    "patternColor": 7668272,
    "textColor": 16766694,
    "hex": {
      "centerColor": "#e36692",
      "edgeColor": "#c9497c",
      "patternColor": "#750230",
      "textColor": "#ffd6e6"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/e36692-c9497c-circle.svg",
      "squareSvg": "assets/backdrops/e36692-c9497c-square.svg"
    }
  },
  {
    "name": "Mystic Pearl",
    "backdropId": 29,
    "customEmojiId": "5375343865219805643",
    "centerColor": 13667181,
    "edgeColor": 11556720,
    "patternColor": 10159398,
    "textColor": 16702944,
    "hex": {
      "centerColor": "#d08b6d",
      "edgeColor": "#b05770",
      "patternColor": "#9b0526",
      "textColor": "#fedde0"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/d08b6d-b05770-circle.svg",
      "squareSvg": "assets/backdrops/d08b6d-b05770-square.svg"
    }
  },
  {
    "name": "Neon Blue",
    "backdropId": 5,
    "customEmojiId": "5375064164064586786",
    "centerColor": 7706361,
    "edgeColor": 6841060,
    "patternColor": 2631868,
    "textColor": 13622783,
    "hex": {
      "centerColor": "#7596f9",
      "edgeColor": "#6862e4",
      "patternColor": "#2828bc",
      "textColor": "#cfddff"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/7596f9-6862e4-circle.svg",
      "squareSvg": "assets/backdrops/7596f9-6862e4-square.svg"
    }
  },
  {
    "name": "Onyx Black",
    "backdropId": 49,
    "customEmojiId": "5377775263385937055",
    "centerColor": 5067348,
    "edgeColor": 3225144,
    "patternColor": 0,
    "textColor": 11119533,
    "hex": {
      "centerColor": "#4d5254",
      "edgeColor": "#313638",
      "patternColor": "#000000",
      "textColor": "#a9abad"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/4d5254-313638-circle.svg",
      "squareSvg": "assets/backdrops/4d5254-313638-square.svg"
    }
  },
  {
    "name": "Orange",
    "backdropId": 23,
    "customEmojiId": "5375479315603420454",
    "centerColor": 13736506,
    "edgeColor": 12611399,
    "patternColor": 10303751,
    "textColor": 16769475,
    "hex": {
      "centerColor": "#d19a3a",
      "edgeColor": "#c06f47",
      "patternColor": "#9d3907",
      "textColor": "#ffe1c3"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/d19a3a-c06f47-circle.svg",
      "squareSvg": "assets/backdrops/d19a3a-c06f47-square.svg"
    }
  },
  {
    "name": "Pine Green",
    "backdropId": 34,
    "customEmojiId": "5375456049765578111",
    "centerColor": 7055740,
    "edgeColor": 4094320,
    "patternColor": 739379,
    "textColor": 14218725,
    "hex": {
      "centerColor": "#6ba97c",
      "edgeColor": "#3e7970",
      "patternColor": "#0b4833",
      "textColor": "#d8f5e5"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/6ba97c-3e7970-circle.svg",
      "squareSvg": "assets/backdrops/6ba97c-3e7970-square.svg"
    }
  },
  {
    "name": "Pistachio",
    "backdropId": 36,
    "customEmojiId": "5375280450027679837",
    "centerColor": 9941116,
    "edgeColor": 6062412,
    "patternColor": 2639643,
    "textColor": 14283465,
    "hex": {
      "centerColor": "#97b07c",
      "edgeColor": "#5c814c",
      "patternColor": "#28471b",
      "textColor": "#d9f2c9"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/97b07c-5c814c-circle.svg",
      "squareSvg": "assets/backdrops/97b07c-5c814c-square.svg"
    }
  },
  {
    "name": "Raspberry",
    "backdropId": 28,
    "customEmojiId": "5375565034560713219",
    "centerColor": 14711685,
    "edgeColor": 11950464,
    "patternColor": 8980024,
    "textColor": 16766694,
    "hex": {
      "centerColor": "#e07b85",
      "edgeColor": "#b65980",
      "patternColor": "#890638",
      "textColor": "#ffd6e6"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/e07b85-b65980-circle.svg",
      "squareSvg": "assets/backdrops/e07b85-b65980-square.svg"
    }
  },
  {
    "name": "Rosewood",
    "backdropId": 40,
    "customEmojiId": "5375125960054043180",
    "centerColor": 12024439,
    "edgeColor": 8473682,
    "patternColor": 5577762,
    "textColor": 15583949,
    "hex": {
      "centerColor": "#b77a77",
      "edgeColor": "#814c52",
      "patternColor": "#551c22",
      "textColor": "#edcacd"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/b77a77-814c52-circle.svg",
      "squareSvg": "assets/backdrops/b77a77-814c52-square.svg"
    }
  },
  {
    "name": "Satin Gold",
    "backdropId": 19,
    "customEmojiId": "5377843106689344328",
    "centerColor": 12557127,
    "edgeColor": 9271097,
    "patternColor": 6109952,
    "textColor": 16704681,
    "hex": {
      "centerColor": "#bf9b47",
      "edgeColor": "#8d7739",
      "patternColor": "#5d3b00",
      "textColor": "#fee4a9"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/bf9b47-8d7739-circle.svg",
      "squareSvg": "assets/backdrops/bf9b47-8d7739-square.svg"
    }
  },
  {
    "name": "Silver Blue",
    "backdropId": 45,
    "customEmojiId": "5375068162679139533",
    "centerColor": 8430776,
    "edgeColor": 6323345,
    "patternColor": 1390411,
    "textColor": 13231348,
    "hex": {
      "centerColor": "#80a4b8",
      "edgeColor": "#607c91",
      "patternColor": "#15374b",
      "textColor": "#c9e4f4"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/80a4b8-607c91-circle.svg",
      "squareSvg": "assets/backdrops/80a4b8-607c91-square.svg"
    }
  },
  {
    "name": "Strawberry",
    "backdropId": 27,
    "customEmojiId": "5377810976039004691",
    "centerColor": 14519919,
    "edgeColor": 12016224,
    "patternColor": 11078668,
    "textColor": 16765907,
    "hex": {
      "centerColor": "#dd8e6f",
      "edgeColor": "#b75a60",
      "patternColor": "#a90c0c",
      "textColor": "#ffd3d3"
    },
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "circleSvg": "assets/backdrops/dd8e6f-b75a60-circle.svg",
      "squareSvg": "assets/backdrops/dd8e6f-b75a60-square.svg"
    }
  },
  {
    "name": "Azure Blue",
    "backdropId": 9,
    "customEmojiId": "5375057773153254940",
    "centerColor": 6140363,
    "edgeColor": 4492203,
    "patternColor": 151668,
    "textColor": 11922687,
    "hex": {
      "centerColor": "#5db1cb",
      "edgeColor": "#448bab",
      "patternColor": "#025074",
      "textColor": "#b5ecff"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/5db1cb-448bab-circle.svg",
      "squareSvg": "assets/backdrops/5db1cb-448bab-square.svg"
    }
  },
  {
    "name": "Black",
    "backdropId": 0,
    "customEmojiId": "5377437666071568792",
    "centerColor": 3553080,
    "edgeColor": 921359,
    "patternColor": 7104616,
    "textColor": 9211793,
    "hex": {
      "centerColor": "#363738",
      "edgeColor": "#0e0f0f",
      "patternColor": "#6c6868",
      "textColor": "#8c8f91"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/363738-0e0f0f-circle.svg",
      "squareSvg": "assets/backdrops/363738-0e0f0f-square.svg"
    }
  },
  {
    "name": "Burnt Sienna",
    "backdropId": 76,
    "customEmojiId": "5377680275889219155",
    "centerColor": 14053180,
    "edgeColor": 11881261,
    "patternColor": 7014658,
    "textColor": 16764080,
    "hex": {
      "centerColor": "#d66f3c",
      "edgeColor": "#b54b2d",
      "patternColor": "#6b0902",
      "textColor": "#ffccb0"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/d66f3c-b54b2d-circle.svg",
      "squareSvg": "assets/backdrops/d66f3c-b54b2d-square.svg"
    }
  },
  {
    "name": "Camo Green",
    "backdropId": 67,
    "customEmojiId": "5375411489479878975",
    "centerColor": 7705677,
    "edgeColor": 5534529,
    "patternColor": 1455873,
    "textColor": 13625529,
    "hex": {
      "centerColor": "#75944d",
      "edgeColor": "#547341",
      "patternColor": "#163701",
      "textColor": "#cfe8b9"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/75944d-547341-circle.svg",
      "squareSvg": "assets/backdrops/75944d-547341-square.svg"
    }
  },
  {
    "name": "Chestnut",
    "backdropId": 58,
    "customEmojiId": "5375124757463201258",
    "centerColor": 12480340,
    "edgeColor": 10045496,
    "patternColor": 6296840,
    "textColor": 16697017,
    "hex": {
      "centerColor": "#be6f54",
      "edgeColor": "#994838",
      "patternColor": "#601508",
      "textColor": "#fec6b9"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/be6f54-994838-circle.svg",
      "squareSvg": "assets/backdrops/be6f54-994838-square.svg"
    }
  },
  {
    "name": "Chocolate",
    "backdropId": 59,
    "customEmojiId": "5375145089838378346",
    "centerColor": 10776152,
    "edgeColor": 7619643,
    "patternColor": 4065794,
    "textColor": 14988972,
    "hex": {
      "centerColor": "#a46e58",
      "edgeColor": "#74443b",
      "patternColor": "#3e0a02",
      "textColor": "#e4b6ac"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/a46e58-74443b-circle.svg",
      "squareSvg": "assets/backdrops/a46e58-74443b-square.svg"
    }
  },
  {
    "name": "Cobalt Blue",
    "backdropId": 53,
    "customEmojiId": "5375508658819986305",
    "centerColor": 6326479,
    "edgeColor": 5333688,
    "patternColor": 1254524,
    "textColor": 12768245,
    "hex": {
      "centerColor": "#6088cf",
      "edgeColor": "#5162b8",
      "patternColor": "#13247c",
      "textColor": "#c2d3f5"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/6088cf-5162b8-circle.svg",
      "squareSvg": "assets/backdrops/6088cf-5162b8-square.svg"
    }
  },
  {
    "name": "Cyberpunk",
    "backdropId": 3,
    "customEmojiId": "5375292097978986361",
    "centerColor": 8753139,
    "edgeColor": 8806355,
    "patternColor": 4397222,
    "textColor": 14735871,
    "hex": {
      "centerColor": "#858ff3",
      "edgeColor": "#865fd3",
      "patternColor": "#4318a6",
      "textColor": "#e0d9ff"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/858ff3-865fd3-circle.svg",
      "squareSvg": "assets/backdrops/858ff3-865fd3-square.svg"
    }
  },
  {
    "name": "Dark Green",
    "backdropId": 63,
    "customEmojiId": "5375600953372209854",
    "centerColor": 5333825,
    "edgeColor": 2835759,
    "patternColor": 1281,
    "textColor": 12571049,
    "hex": {
      "centerColor": "#516341",
      "edgeColor": "#2b452f",
      "patternColor": "#000501",
      "textColor": "#bfd1a9"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/516341-2b452f-circle.svg",
      "squareSvg": "assets/backdrops/516341-2b452f-square.svg"
    }
  },
  {
    "name": "Deep Cyan",
    "backdropId": 70,
    "customEmojiId": "5377423312290868137",
    "centerColor": 3257770,
    "edgeColor": 1611161,
    "patternColor": 20303,
    "textColor": 13762557,
    "hex": {
      "centerColor": "#31b5aa",
      "edgeColor": "#189599",
      "patternColor": "#004f4f",
      "textColor": "#d1fffd"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/31b5aa-189599-circle.svg",
      "squareSvg": "assets/backdrops/31b5aa-189599-square.svg"
    }
  },
  {
    "name": "Desert Sand",
    "backdropId": 38,
    "customEmojiId": "5375295684276677732",
    "centerColor": 11771778,
    "edgeColor": 8287067,
    "patternColor": 5260329,
    "textColor": 15918541,
    "hex": {
      "centerColor": "#b39f82",
      "edgeColor": "#7e735b",
      "patternColor": "#504429",
      "textColor": "#f2e5cd"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/b39f82-7e735b-circle.svg",
      "squareSvg": "assets/backdrops/b39f82-7e735b-square.svg"
    }
  },
  {
    "name": "Electric Indigo",
    "backdropId": 4,
    "customEmojiId": "5375368406662934349",
    "centerColor": 11108595,
    "edgeColor": 5989080,
    "patternColor": 3613355,
    "textColor": 14211327,
    "hex": {
      "centerColor": "#a980f3",
      "edgeColor": "#5b62d8",
      "patternColor": "#3722ab",
      "textColor": "#d8d8ff"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/a980f3-5b62d8-circle.svg",
      "squareSvg": "assets/backdrops/a980f3-5b62d8-square.svg"
    }
  },
  {
    "name": "Feldgrau",
    "backdropId": 68,
    "customEmojiId": "5375107384320485908",
    "centerColor": 9015944,
    "edgeColor": 6187875,
    "patternColor": 1844767,
    "textColor": 14608865,
    "hex": {
      "centerColor": "#899288",
      "edgeColor": "#5e6b63",
      "patternColor": "#1c261f",
      "textColor": "#dee9e1"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/899288-5e6b63-circle.svg",
      "squareSvg": "assets/backdrops/899288-5e6b63-square.svg"
    }
  },
  {
    "name": "French Blue",
    "backdropId": 54,
    "customEmojiId": "5375333269535485469",
    "centerColor": 6069188,
    "edgeColor": 3634074,
    "patternColor": 473948,
    "textColor": 12706809,
    "hex": {
      "centerColor": "#5c9bc4",
      "edgeColor": "#37739a",
      "patternColor": "#073b5c",
      "textColor": "#c1e3f9"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/5c9bc4-37739a-circle.svg",
      "squareSvg": "assets/backdrops/5c9bc4-37739a-square.svg"
    }
  },
  {
    "name": "Grape",
    "backdropId": 52,
    "customEmojiId": "5375533853098147113",
    "centerColor": 10319041,
    "edgeColor": 7949728,
    "patternColor": 4065899,
    "textColor": 14728702,
    "hex": {
      "centerColor": "#9d74c1",
      "edgeColor": "#794da0",
      "patternColor": "#3e0a6b",
      "textColor": "#e0bdfe"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/9d74c1-794da0-circle.svg",
      "squareSvg": "assets/backdrops/9d74c1-794da0-square.svg"
    }
  },
  {
    "name": "Lavender",
    "backdropId": 2,
    "customEmojiId": "5375569106189712018",
    "centerColor": 12028388,
    "edgeColor": 9067196,
    "patternColor": 5968043,
    "textColor": 15258111,
    "hex": {
      "centerColor": "#b789e4",
      "edgeColor": "#8a5abc",
      "patternColor": "#5b10ab",
      "textColor": "#e8d1ff"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/b789e4-8a5abc-circle.svg",
      "squareSvg": "assets/backdrops/b789e4-8a5abc-square.svg"
    }
  },
  {
    "name": "Light Olive",
    "backdropId": 18,
    "customEmojiId": "5375600553940250812",
    "centerColor": 12758884,
    "edgeColor": 8945221,
    "patternColor": 5852164,
    "textColor": 16116668,
    "hex": {
      "centerColor": "#c2af64",
      "edgeColor": "#887e45",
      "patternColor": "#594c04",
      "textColor": "#f5ebbc"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/c2af64-887e45-circle.svg",
      "squareSvg": "assets/backdrops/c2af64-887e45-square.svg"
    }
  },
  {
    "name": "Marine Blue",
    "backdropId": 60,
    "customEmojiId": "5375439277918288314",
    "centerColor": 5138588,
    "edgeColor": 3885946,
    "patternColor": 67617,
    "textColor": 12307442,
    "hex": {
      "centerColor": "#4e689c",
      "edgeColor": "#3b4b7a",
      "patternColor": "#010821",
      "textColor": "#bbcbf2"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/4e689c-3b4b7a-circle.svg",
      "squareSvg": "assets/backdrops/4e689c-3b4b7a-square.svg"
    }
  },
  {
    "name": "Midnight Blue",
    "backdropId": 48,
    "customEmojiId": "5375050733701852215",
    "centerColor": 6056325,
    "edgeColor": 3489879,
    "patternColor": 199192,
    "textColor": 12569824,
    "hex": {
      "centerColor": "#5c6985",
      "edgeColor": "#354057",
      "patternColor": "#030a18",
      "textColor": "#bfcce0"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/5c6985-354057-circle.svg",
      "squareSvg": "assets/backdrops/5c6985-354057-square.svg"
    }
  },
  {
    "name": "Moonstone",
    "backdropId": 33,
    "customEmojiId": "5375335404134231481",
    "centerColor": 8303028,
    "edgeColor": 5800848,
    "patternColor": 1459538,
    "textColor": 14349821,
    "hex": {
      "centerColor": "#7eb1b4",
      "edgeColor": "#588390",
      "patternColor": "#164552",
      "textColor": "#daf5fd"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/7eb1b4-588390-circle.svg",
      "squareSvg": "assets/backdrops/7eb1b4-588390-square.svg"
    }
  },
  {
    "name": "Mustard",
    "backdropId": 78,
    "customEmojiId": "5375113225476008176",
    "centerColor": 13932557,
    "edgeColor": 12875538,
    "patternColor": 8004864,
    "textColor": 16768668,
    "hex": {
      "centerColor": "#d4980d",
      "edgeColor": "#c47712",
      "patternColor": "#7a2500",
      "textColor": "#ffde9c"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/d4980d-c47712-circle.svg",
      "squareSvg": "assets/backdrops/d4980d-c47712-square.svg"
    }
  },
  {
    "name": "Navy Blue",
    "backdropId": 6,
    "customEmojiId": "5375095358412057425",
    "centerColor": 7118557,
    "edgeColor": 6057673,
    "patternColor": 1194402,
    "textColor": 13885951,
    "hex": {
      "centerColor": "#6c9edd",
      "edgeColor": "#5c6ec9",
      "patternColor": "#1239a2",
      "textColor": "#d3e1ff"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/6c9edd-5c6ec9-circle.svg",
      "squareSvg": "assets/backdrops/6c9edd-5c6ec9-square.svg"
    }
  },
  {
    "name": "Old Gold",
    "backdropId": 75,
    "customEmojiId": "5375123404548499298",
    "centerColor": 11898168,
    "edgeColor": 9726245,
    "patternColor": 5190402,
    "textColor": 16768396,
    "hex": {
      "centerColor": "#b58d38",
      "edgeColor": "#946925",
      "patternColor": "#4f3302",
      "textColor": "#ffdd8c"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/b58d38-946925-circle.svg",
      "squareSvg": "assets/backdrops/b58d38-946925-square.svg"
    }
  },
  {
    "name": "Pacific Green",
    "backdropId": 12,
    "customEmojiId": "5375523141449707206",
    "centerColor": 7325587,
    "edgeColor": 3906692,
    "patternColor": 24905,
    "textColor": 13041648,
    "hex": {
      "centerColor": "#6fc793",
      "edgeColor": "#3b9c84",
      "patternColor": "#006149",
      "textColor": "#c6fff0"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/6fc793-3b9c84-circle.svg",
      "squareSvg": "assets/backdrops/6fc793-3b9c84-square.svg"
    }
  },
  {
    "name": "Persimmon",
    "backdropId": 26,
    "customEmojiId": "5377611079671113314",
    "centerColor": 15181658,
    "edgeColor": 12937055,
    "patternColor": 11341312,
    "textColor": 16770263,
    "hex": {
      "centerColor": "#e7a75a",
      "edgeColor": "#c5675f",
      "patternColor": "#ad0e00",
      "textColor": "#ffe4d7"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/e7a75a-c5675f-circle.svg",
      "squareSvg": "assets/backdrops/e7a75a-c5675f-square.svg"
    }
  },
  {
    "name": "Roman Silver",
    "backdropId": 43,
    "customEmojiId": "5375482502469152633",
    "centerColor": 10725557,
    "edgeColor": 8159370,
    "patternColor": 4146512,
    "textColor": 14344162,
    "hex": {
      "centerColor": "#a3a8b5",
      "edgeColor": "#7c808a",
      "patternColor": "#3f4550",
      "textColor": "#dadfe2"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/a3a8b5-7c808a-circle.svg",
      "squareSvg": "assets/backdrops/a3a8b5-7c808a-square.svg"
    }
  },
  {
    "name": "Shamrock Green",
    "backdropId": 16,
    "customEmojiId": "5377843866898555150",
    "centerColor": 9089379,
    "edgeColor": 5608261,
    "patternColor": 1207040,
    "textColor": 14023624,
    "hex": {
      "centerColor": "#8ab163",
      "edgeColor": "#559345",
      "patternColor": "#126b00",
      "textColor": "#d5fbc8"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/8ab163-559345-circle.svg",
      "squareSvg": "assets/backdrops/8ab163-559345-square.svg"
    }
  },
  {
    "name": "Steel Grey",
    "backdropId": 44,
    "customEmojiId": "5377767863157283654",
    "centerColor": 9937580,
    "edgeColor": 6517372,
    "patternColor": 3360082,
    "textColor": 14673128,
    "hex": {
      "centerColor": "#97a2ac",
      "edgeColor": "#63727c",
      "patternColor": "#334552",
      "textColor": "#dfe4e8"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/97a2ac-63727c-circle.svg",
      "squareSvg": "assets/backdrops/97a2ac-63727c-square.svg"
    }
  },
  {
    "name": "Tactical Pine",
    "backdropId": 61,
    "customEmojiId": "5375347412862793082",
    "centerColor": 4489835,
    "edgeColor": 3105641,
    "patternColor": 9764,
    "textColor": 12052179,
    "hex": {
      "centerColor": "#44826b",
      "edgeColor": "#2f6369",
      "patternColor": "#002624",
      "textColor": "#b7e6d3"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/44826b-2f6369-circle.svg",
      "squareSvg": "assets/backdrops/44826b-2f6369-square.svg"
    }
  },
  {
    "name": "Turquoise",
    "backdropId": 55,
    "customEmojiId": "5375084470669966301",
    "centerColor": 6209720,
    "edgeColor": 4035214,
    "patternColor": 1135436,
    "textColor": 12450034,
    "hex": {
      "centerColor": "#5ec0b8",
      "edgeColor": "#3d928e",
      "patternColor": "#11534c",
      "textColor": "#bdf8f2"
    },
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "circleSvg": "assets/backdrops/5ec0b8-3d928e-circle.svg",
      "squareSvg": "assets/backdrops/5ec0b8-3d928e-square.svg"
    }
  },
  {
    "name": "Amber",
    "backdropId": 21,
    "customEmojiId": "5375590628270831231",
    "centerColor": 14332741,
    "edgeColor": 11632682,
    "patternColor": 8007936,
    "textColor": 16772551,
    "hex": {
      "centerColor": "#dab345",
      "edgeColor": "#b1802a",
      "patternColor": "#7a3100",
      "textColor": "#ffedc7"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/dab345-b1802a-circle.svg",
      "squareSvg": "assets/backdrops/dab345-b1802a-square.svg"
    }
  },
  {
    "name": "Aquamarine",
    "backdropId": 11,
    "customEmojiId": "5377657950649214703",
    "centerColor": 6336917,
    "edgeColor": 4631476,
    "patternColor": 221031,
    "textColor": 13106686,
    "hex": {
      "centerColor": "#60b195",
      "edgeColor": "#46abb4",
      "patternColor": "#035f67",
      "textColor": "#c7fdfe"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/60b195-46abb4-circle.svg",
      "squareSvg": "assets/backdrops/60b195-46abb4-square.svg"
    }
  },
  {
    "name": "Battleship Grey",
    "backdropId": 50,
    "customEmojiId": "5375258223571925187",
    "centerColor": 9211013,
    "edgeColor": 7105638,
    "patternColor": 2828832,
    "textColor": 13618884,
    "hex": {
      "centerColor": "#8c8c85",
      "edgeColor": "#6c6c66",
      "patternColor": "#2b2a20",
      "textColor": "#cfcec4"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/8c8c85-6c6c66-circle.svg",
      "squareSvg": "assets/backdrops/8c8c85-6c6c66-square.svg"
    }
  },
  {
    "name": "Caramel",
    "backdropId": 22,
    "customEmojiId": "5375311837648678407",
    "centerColor": 13670706,
    "edgeColor": 12022833,
    "patternColor": 8205824,
    "textColor": 16767411,
    "hex": {
      "centerColor": "#d09932",
      "edgeColor": "#b77431",
      "patternColor": "#7d3600",
      "textColor": "#ffd9b3"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/d09932-b77431-circle.svg",
      "squareSvg": "assets/backdrops/d09932-b77431-square.svg"
    }
  },
  {
    "name": "Copper",
    "backdropId": 57,
    "customEmojiId": "5375444380339435270",
    "centerColor": 13665878,
    "edgeColor": 10315057,
    "patternColor": 6301953,
    "textColor": 16046270,
    "hex": {
      "centerColor": "#d08656",
      "edgeColor": "#9d6531",
      "patternColor": "#602901",
      "textColor": "#f4d8be"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/d08656-9d6531-circle.svg",
      "squareSvg": "assets/backdrops/d08656-9d6531-square.svg"
    }
  },
  {
    "name": "Coral Red",
    "backdropId": 25,
    "customEmojiId": "5377303611552326657",
    "centerColor": 14322027,
    "edgeColor": 12870991,
    "patternColor": 8983040,
    "textColor": 16767442,
    "hex": {
      "centerColor": "#da896b",
      "edgeColor": "#c4654f",
      "patternColor": "#891200",
      "textColor": "#ffd9d2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/da896b-c4654f-circle.svg",
      "squareSvg": "assets/backdrops/da896b-c4654f-square.svg"
    }
  },
  {
    "name": "Dark Lilac",
    "backdropId": 31,
    "customEmojiId": "5375595296900280612",
    "centerColor": 11632037,
    "edgeColor": 9197434,
    "patternColor": 6629458,
    "textColor": 15779042,
    "hex": {
      "centerColor": "#b17da5",
      "edgeColor": "#8c577a",
      "patternColor": "#652852",
      "textColor": "#f0c4e2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/b17da5-8c577a-circle.svg",
      "squareSvg": "assets/backdrops/b17da5-8c577a-square.svg"
    }
  },
  {
    "name": "Emerald",
    "backdropId": 13,
    "customEmojiId": "5375465786456438121",
    "centerColor": 7914885,
    "edgeColor": 4366705,
    "patternColor": 25906,
    "textColor": 12188121,
    "hex": {
      "centerColor": "#78c585",
      "edgeColor": "#42a171",
      "patternColor": "#006532",
      "textColor": "#b9f9d9"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/78c585-42a171-circle.svg",
      "squareSvg": "assets/backdrops/78c585-42a171-square.svg"
    }
  },
  {
    "name": "English Violet",
    "backdropId": 32,
    "customEmojiId": "5377317497181595389",
    "centerColor": 11634363,
    "edgeColor": 8870545,
    "patternColor": 5513823,
    "textColor": 15124461,
    "hex": {
      "centerColor": "#b186bb",
      "edgeColor": "#875a91",
      "patternColor": "#54225f",
      "textColor": "#e6c7ed"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/b186bb-875a91-circle.svg",
      "squareSvg": "assets/backdrops/b186bb-875a91-square.svg"
    }
  },
  {
    "name": "Fandango",
    "backdropId": 30,
    "customEmojiId": "5377665664410477598",
    "centerColor": 14846646,
    "edgeColor": 10770571,
    "patternColor": 9307470,
    "textColor": 16762859,
    "hex": {
      "centerColor": "#e28ab6",
      "edgeColor": "#a4588b",
      "patternColor": "#8e054e",
      "textColor": "#ffc7eb"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/e28ab6-a4588b-circle.svg",
      "squareSvg": "assets/backdrops/e28ab6-a4588b-square.svg"
    }
  },
  {
    "name": "Fire Engine",
    "backdropId": 73,
    "customEmojiId": "5375497006573710335",
    "centerColor": 15753039,
    "edgeColor": 12859721,
    "patternColor": 6881289,
    "textColor": 16758694,
    "hex": {
      "centerColor": "#f05f4f",
      "edgeColor": "#c43949",
      "patternColor": "#690009",
      "textColor": "#ffb7a6"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/f05f4f-c43949-circle.svg",
      "squareSvg": "assets/backdrops/f05f4f-c43949-square.svg"
    }
  },
  {
    "name": "Gunship Green",
    "backdropId": 62,
    "customEmojiId": "5375121566302501587",
    "centerColor": 5605989,
    "edgeColor": 4023895,
    "patternColor": 468509,
    "textColor": 11919572,
    "hex": {
      "centerColor": "#558a65",
      "edgeColor": "#3d6657",
      "patternColor": "#07261d",
      "textColor": "#b5e0d4"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/558a65-3d6657-circle.svg",
      "squareSvg": "assets/backdrops/558a65-3d6657-square.svg"
    }
  },
  {
    "name": "Hunter Green",
    "backdropId": 35,
    "customEmojiId": "5375046438734558335",
    "centerColor": 9416312,
    "edgeColor": 4948571,
    "patternColor": 1853727,
    "textColor": 14218718,
    "hex": {
      "centerColor": "#8fae78",
      "edgeColor": "#4b825b",
      "patternColor": "#1c491f",
      "textColor": "#d8f5de"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/8fae78-4b825b-circle.svg",
      "squareSvg": "assets/backdrops/8fae78-4b825b-square.svg"
    }
  },
  {
    "name": "Indigo Dye",
    "backdropId": 47,
    "customEmojiId": "5375159374899604169",
    "centerColor": 5470609,
    "edgeColor": 4285561,
    "patternColor": 203561,
    "textColor": 12770542,
    "hex": {
      "centerColor": "#537991",
      "edgeColor": "#416479",
      "patternColor": "#031b29",
      "textColor": "#c2dcee"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/537991-416479-circle.svg",
      "squareSvg": "assets/backdrops/537991-416479-square.svg"
    }
  },
  {
    "name": "Ivory White",
    "backdropId": 41,
    "customEmojiId": "5375500438252580046",
    "centerColor": 12236465,
    "edgeColor": 10591639,
    "patternColor": 6709074,
    "textColor": 16119026,
    "hex": {
      "centerColor": "#bab6b1",
      "edgeColor": "#a19d97",
      "patternColor": "#665f52",
      "textColor": "#f5f4f2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/bab6b1-a19d97-circle.svg",
      "squareSvg": "assets/backdrops/bab6b1-a19d97-square.svg"
    }
  },
  {
    "name": "Jade Green",
    "backdropId": 56,
    "customEmojiId": "5375392875091620167",
    "centerColor": 5620892,
    "edgeColor": 3905911,
    "patternColor": 280881,
    "textColor": 12517095,
    "hex": {
      "centerColor": "#55c49c",
      "edgeColor": "#3b9977",
      "patternColor": "#044931",
      "textColor": "#befee7"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/55c49c-3b9977-circle.svg",
      "squareSvg": "assets/backdrops/55c49c-3b9977-square.svg"
    }
  },
  {
    "name": "Lemongrass",
    "backdropId": 17,
    "customEmojiId": "5375580127075793214",
    "centerColor": 11450458,
    "edgeColor": 5608261,
    "patternColor": 4614663,
    "textColor": 14217922,
    "hex": {
      "centerColor": "#aeb85a",
      "edgeColor": "#559345",
      "patternColor": "#466a07",
      "textColor": "#d8f2c2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/aeb85a-559345-circle.svg",
      "squareSvg": "assets/backdrops/aeb85a-559345-square.svg"
    }
  },
  {
    "name": "Mint Green",
    "backdropId": 14,
    "customEmojiId": "5375453017518666054",
    "centerColor": 8309634,
    "edgeColor": 4562522,
    "patternColor": 158498,
    "textColor": 12451788,
    "hex": {
      "centerColor": "#7ecb82",
      "edgeColor": "#459e5a",
      "patternColor": "#026b22",
      "textColor": "#bdffcc"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/7ecb82-459e5a-circle.svg",
      "squareSvg": "assets/backdrops/7ecb82-459e5a-square.svg"
    }
  },
  {
    "name": "Pacific Cyan",
    "backdropId": 10,
    "customEmojiId": "5375176666437938248",
    "centerColor": 5947046,
    "edgeColor": 4036026,
    "patternColor": 156813,
    "textColor": 11988991,
    "hex": {
      "centerColor": "#5abea6",
      "edgeColor": "#3d95ba",
      "patternColor": "#02648d",
      "textColor": "#b6efff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/5abea6-3d95ba-circle.svg",
      "squareSvg": "assets/backdrops/5abea6-3d95ba-square.svg"
    }
  },
  {
    "name": "Platinum",
    "backdropId": 42,
    "customEmojiId": "5375209243764877171",
    "centerColor": 11710119,
    "edgeColor": 8946814,
    "patternColor": 4012077,
    "textColor": 15329250,
    "hex": {
      "centerColor": "#b2aea7",
      "edgeColor": "#88847e",
      "patternColor": "#3d382d",
      "textColor": "#e9e7e2"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/b2aea7-88847e-circle.svg",
      "squareSvg": "assets/backdrops/b2aea7-88847e-square.svg"
    }
  },
  {
    "name": "Pure Gold",
    "backdropId": 20,
    "customEmojiId": "5377566347586724653",
    "centerColor": 13413185,
    "edgeColor": 9993010,
    "patternColor": 7355392,
    "textColor": 16770475,
    "hex": {
      "centerColor": "#ccab41",
      "edgeColor": "#987b32",
      "patternColor": "#703c00",
      "textColor": "#ffe5ab"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/ccab41-987b32-circle.svg",
      "squareSvg": "assets/backdrops/ccab41-987b32-square.svg"
    }
  },
  {
    "name": "Purple",
    "backdropId": 51,
    "customEmojiId": "5375106490967289982",
    "centerColor": 11431086,
    "edgeColor": 8669060,
    "patternColor": 4656199,
    "textColor": 15977459,
    "hex": {
      "centerColor": "#ae6cae",
      "edgeColor": "#844784",
      "patternColor": "#470c47",
      "textColor": "#f3cbf3"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/ae6cae-844784-circle.svg",
      "squareSvg": "assets/backdrops/ae6cae-844784-square.svg"
    }
  },
  {
    "name": "Ranger Green",
    "backdropId": 66,
    "customEmojiId": "5375074549295510665",
    "centerColor": 6256713,
    "edgeColor": 3952443,
    "patternColor": 1057289,
    "textColor": 12043445,
    "hex": {
      "centerColor": "#5f7849",
      "edgeColor": "#3c4f3b",
      "patternColor": "#102209",
      "textColor": "#b7c4b5"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/5f7849-3c4f3b-circle.svg",
      "squareSvg": "assets/backdrops/5f7849-3c4f3b-square.svg"
    }
  },
  {
    "name": "Rifle Green",
    "backdropId": 65,
    "customEmojiId": "5377619347483158640",
    "centerColor": 6580572,
    "edgeColor": 4936257,
    "patternColor": 987659,
    "textColor": 12830653,
    "hex": {
      "centerColor": "#64695c",
      "edgeColor": "#4b5241",
      "patternColor": "#0f120b",
      "textColor": "#c3c7bd"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/64695c-4b5241-circle.svg",
      "squareSvg": "assets/backdrops/64695c-4b5241-square.svg"
    }
  },
  {
    "name": "Sapphire",
    "backdropId": 7,
    "customEmojiId": "5377394836657695827",
    "centerColor": 5809096,
    "edgeColor": 5470658,
    "patternColor": 869814,
    "textColor": 12705535,
    "hex": {
      "centerColor": "#58a3c8",
      "edgeColor": "#5379c2",
      "patternColor": "#0d45b6",
      "textColor": "#c1deff"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/58a3c8-5379c2-circle.svg",
      "squareSvg": "assets/backdrops/58a3c8-5379c2-square.svg"
    }
  },
  {
    "name": "Seal Brown",
    "backdropId": 64,
    "customEmojiId": "5375269034004608036",
    "centerColor": 6704453,
    "edgeColor": 4666926,
    "patternColor": 656901,
    "textColor": 13941941,
    "hex": {
      "centerColor": "#664d45",
      "edgeColor": "#47362e",
      "patternColor": "#0a0605",
      "textColor": "#d4bcb5"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/664d45-47362e-circle.svg",
      "squareSvg": "assets/backdrops/664d45-47362e-square.svg"
    }
  },
  {
    "name": "Sky Blue",
    "backdropId": 8,
    "customEmojiId": "5375428136773120397",
    "centerColor": 5813448,
    "edgeColor": 5475266,
    "patternColor": 483483,
    "textColor": 13494525,
    "hex": {
      "centerColor": "#58b4c8",
      "edgeColor": "#538bc2",
      "patternColor": "#07609b",
      "textColor": "#cde8fd"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/58b4c8-538bc2-circle.svg",
      "squareSvg": "assets/backdrops/58b4c8-538bc2-square.svg"
    }
  },
  {
    "name": "Tomato",
    "backdropId": 72,
    "customEmojiId": "5377723259921916635",
    "centerColor": 15104318,
    "edgeColor": 13913663,
    "patternColor": 8391424,
    "textColor": 16764093,
    "hex": {
      "centerColor": "#e6793e",
      "edgeColor": "#d44e3f",
      "patternColor": "#800b00",
      "textColor": "#ffccbd"
    },
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "circleSvg": "assets/backdrops/e6793e-d44e3f-circle.svg",
      "squareSvg": "assets/backdrops/e6793e-d44e3f-square.svg"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "snowglobe", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
