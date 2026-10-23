import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5882252952218894938" as const;

export const models = [
  {
    "name": "Berrific",
    "customEmojiId": "5454064349398195404",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/berrific.svg",
      "tgs": "gifts/berrybox/assets/models/berrific.tgs"
    }
  },
  {
    "name": "Bumberries",
    "customEmojiId": "5454114407242031831",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/bumberries.svg",
      "tgs": "gifts/berrybox/assets/models/bumberries.tgs"
    }
  },
  {
    "name": "Lady Bites",
    "customEmojiId": "5456506506457407510",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/lady-bites.svg",
      "tgs": "gifts/berrybox/assets/models/lady-bites.tgs"
    }
  },
  {
    "name": "Megabite",
    "customEmojiId": "5454264207111379365",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/megabite.svg",
      "tgs": "gifts/berrybox/assets/models/megabite.tgs"
    }
  },
  {
    "name": "Sweet Kiss",
    "customEmojiId": "5453943072406658855",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/sweet-kiss.svg",
      "tgs": "gifts/berrybox/assets/models/sweet-kiss.tgs"
    }
  },
  {
    "name": "Anniversary",
    "customEmojiId": "5456164708665024464",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/anniversary.svg",
      "tgs": "gifts/berrybox/assets/models/anniversary.tgs"
    }
  },
  {
    "name": "Art Project",
    "customEmojiId": "5456544607112292515",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/art-project.svg",
      "tgs": "gifts/berrybox/assets/models/art-project.tgs"
    }
  },
  {
    "name": "Berryllium",
    "customEmojiId": "5454305056545332888",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/berryllium.svg",
      "tgs": "gifts/berrybox/assets/models/berryllium.tgs"
    }
  },
  {
    "name": "Canis Major",
    "customEmojiId": "5456610431781074103",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/canis-major.svg",
      "tgs": "gifts/berrybox/assets/models/canis-major.tgs"
    }
  },
  {
    "name": "Glitchberry",
    "customEmojiId": "5454037106420639606",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/glitchberry.svg",
      "tgs": "gifts/berrybox/assets/models/glitchberry.tgs"
    }
  },
  {
    "name": "Harlequin",
    "customEmojiId": "5456413267012380402",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/harlequin.svg",
      "tgs": "gifts/berrybox/assets/models/harlequin.tgs"
    }
  },
  {
    "name": "High Voltage",
    "customEmojiId": "5454112332772828398",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/high-voltage.svg",
      "tgs": "gifts/berrybox/assets/models/high-voltage.tgs"
    }
  },
  {
    "name": "Infrared",
    "customEmojiId": "5456338895358680279",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/infrared.svg",
      "tgs": "gifts/berrybox/assets/models/infrared.tgs"
    }
  },
  {
    "name": "Kawaii",
    "customEmojiId": "5454136633697787021",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/kawaii.svg",
      "tgs": "gifts/berrybox/assets/models/kawaii.tgs"
    }
  },
  {
    "name": "Lovely Bites",
    "customEmojiId": "5453921241087894387",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/lovely-bites.svg",
      "tgs": "gifts/berrybox/assets/models/lovely-bites.tgs"
    }
  },
  {
    "name": "Lovestorm",
    "customEmojiId": "5453899246560372165",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/lovestorm.svg",
      "tgs": "gifts/berrybox/assets/models/lovestorm.tgs"
    }
  },
  {
    "name": "Mood Ring",
    "customEmojiId": "5453960260865777932",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/mood-ring.svg",
      "tgs": "gifts/berrybox/assets/models/mood-ring.tgs"
    }
  },
  {
    "name": "Natural",
    "customEmojiId": "5456547089603389305",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/natural.svg",
      "tgs": "gifts/berrybox/assets/models/natural.tgs"
    }
  },
  {
    "name": "Nature Box",
    "customEmojiId": "5456120002350441448",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/nature-box.svg",
      "tgs": "gifts/berrybox/assets/models/nature-box.tgs"
    }
  },
  {
    "name": "Noir",
    "customEmojiId": "5456249194966703189",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/noir.svg",
      "tgs": "gifts/berrybox/assets/models/noir.tgs"
    }
  },
  {
    "name": "Sketchy",
    "customEmojiId": "5454001836149202648",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/sketchy.svg",
      "tgs": "gifts/berrybox/assets/models/sketchy.tgs"
    }
  },
  {
    "name": "Spring",
    "customEmojiId": "5454165362734033254",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/spring.svg",
      "tgs": "gifts/berrybox/assets/models/spring.tgs"
    }
  },
  {
    "name": "Strobe",
    "customEmojiId": "5456535020745286224",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/strobe.svg",
      "tgs": "gifts/berrybox/assets/models/strobe.tgs"
    }
  },
  {
    "name": "Wedded",
    "customEmojiId": "5453991231874949589",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/wedded.svg",
      "tgs": "gifts/berrybox/assets/models/wedded.tgs"
    }
  },
  {
    "name": "Zomberry",
    "customEmojiId": "5456598818189544431",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/berrybox/assets/models/zomberry.svg",
      "tgs": "gifts/berrybox/assets/models/zomberry.tgs"
    }
  },
  {
    "name": "Alpha",
    "customEmojiId": "5456488940041167886",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/alpha.svg",
      "tgs": "gifts/berrybox/assets/models/alpha.tgs"
    }
  },
  {
    "name": "Anatomy",
    "customEmojiId": "5456600819644259980",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/anatomy.svg",
      "tgs": "gifts/berrybox/assets/models/anatomy.tgs"
    }
  },
  {
    "name": "Atmosphere",
    "customEmojiId": "5456196255199814892",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/atmosphere.svg",
      "tgs": "gifts/berrybox/assets/models/atmosphere.tgs"
    }
  },
  {
    "name": "Bowtied",
    "customEmojiId": "5456434694604217649",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/bowtied.svg",
      "tgs": "gifts/berrybox/assets/models/bowtied.tgs"
    }
  },
  {
    "name": "Clarity",
    "customEmojiId": "5454094435644105961",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/clarity.svg",
      "tgs": "gifts/berrybox/assets/models/clarity.tgs"
    }
  },
  {
    "name": "Comic Book",
    "customEmojiId": "5456659626336478218",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/comic-book.svg",
      "tgs": "gifts/berrybox/assets/models/comic-book.tgs"
    }
  },
  {
    "name": "Confetti",
    "customEmojiId": "5456631721933955157",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/confetti.svg",
      "tgs": "gifts/berrybox/assets/models/confetti.tgs"
    }
  },
  {
    "name": "Cupid",
    "customEmojiId": "5456119190601622899",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/cupid.svg",
      "tgs": "gifts/berrybox/assets/models/cupid.tgs"
    }
  },
  {
    "name": "Extra Berry",
    "customEmojiId": "5456117880636596888",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/extra-berry.svg",
      "tgs": "gifts/berrybox/assets/models/extra-berry.tgs"
    }
  },
  {
    "name": "Frosty Icing",
    "customEmojiId": "5454231277597124050",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/frosty-icing.svg",
      "tgs": "gifts/berrybox/assets/models/frosty-icing.tgs"
    }
  },
  {
    "name": "Glimglam",
    "customEmojiId": "5456622221466296263",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/glimglam.svg",
      "tgs": "gifts/berrybox/assets/models/glimglam.tgs"
    }
  },
  {
    "name": "Gryffindor",
    "customEmojiId": "5456647965500267842",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/gryffindor.svg",
      "tgs": "gifts/berrybox/assets/models/gryffindor.tgs"
    }
  },
  {
    "name": "Ice Diamond",
    "customEmojiId": "5456166173248873459",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/ice-diamond.svg",
      "tgs": "gifts/berrybox/assets/models/ice-diamond.tgs"
    }
  },
  {
    "name": "Lemon Lime",
    "customEmojiId": "5454162386321694447",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/lemon-lime.svg",
      "tgs": "gifts/berrybox/assets/models/lemon-lime.tgs"
    }
  },
  {
    "name": "Lovey Dovey",
    "customEmojiId": "5456165181111427434",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/lovey-dovey.svg",
      "tgs": "gifts/berrybox/assets/models/lovey-dovey.tgs"
    }
  },
  {
    "name": "Martian",
    "customEmojiId": "5453873292073001140",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/martian.svg",
      "tgs": "gifts/berrybox/assets/models/martian.tgs"
    }
  },
  {
    "name": "Milky Cows",
    "customEmojiId": "5456356083817799954",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/milky-cows.svg",
      "tgs": "gifts/berrybox/assets/models/milky-cows.tgs"
    }
  },
  {
    "name": "Rawberry",
    "customEmojiId": "5454043110784916289",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/rawberry.svg",
      "tgs": "gifts/berrybox/assets/models/rawberry.tgs"
    }
  },
  {
    "name": "Rose Gold",
    "customEmojiId": "5456233402371957902",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/rose-gold.svg",
      "tgs": "gifts/berrybox/assets/models/rose-gold.tgs"
    }
  },
  {
    "name": "Sine Wave",
    "customEmojiId": "5456373813442798292",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/sine-wave.svg",
      "tgs": "gifts/berrybox/assets/models/sine-wave.tgs"
    }
  },
  {
    "name": "Starberry",
    "customEmojiId": "5456616401785614092",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/starberry.svg",
      "tgs": "gifts/berrybox/assets/models/starberry.tgs"
    }
  },
  {
    "name": "Sweet Game",
    "customEmojiId": "5456203655428466343",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/sweet-game.svg",
      "tgs": "gifts/berrybox/assets/models/sweet-game.tgs"
    }
  },
  {
    "name": "Teeth Crush",
    "customEmojiId": "5456330146510298886",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/teeth-crush.svg",
      "tgs": "gifts/berrybox/assets/models/teeth-crush.tgs"
    }
  },
  {
    "name": "Tuxedo",
    "customEmojiId": "5453897760501685081",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/tuxedo.svg",
      "tgs": "gifts/berrybox/assets/models/tuxedo.tgs"
    }
  },
  {
    "name": "Unicorns",
    "customEmojiId": "5456191938757680823",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/berrybox/assets/models/unicorns.svg",
      "tgs": "gifts/berrybox/assets/models/unicorns.tgs"
    }
  },
  {
    "name": "Baubles",
    "customEmojiId": "5458436591745787154",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/baubles.svg",
      "tgs": "gifts/berrybox/assets/models/baubles.tgs"
    }
  },
  {
    "name": "Chillberry",
    "customEmojiId": "5458820965548975720",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/chillberry.svg",
      "tgs": "gifts/berrybox/assets/models/chillberry.tgs"
    }
  },
  {
    "name": "Eiffel 95",
    "customEmojiId": "5461011420344769086",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/eiffel-95.svg",
      "tgs": "gifts/berrybox/assets/models/eiffel-95.tgs"
    }
  },
  {
    "name": "Foraged",
    "customEmojiId": "5460932388651556519",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/foraged.svg",
      "tgs": "gifts/berrybox/assets/models/foraged.tgs"
    }
  },
  {
    "name": "Fresh",
    "customEmojiId": "5461150804918425507",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/fresh.svg",
      "tgs": "gifts/berrybox/assets/models/fresh.tgs"
    }
  },
  {
    "name": "Golden Dip",
    "customEmojiId": "5460708779769222820",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/golden-dip.svg",
      "tgs": "gifts/berrybox/assets/models/golden-dip.tgs"
    }
  },
  {
    "name": "Iridescent",
    "customEmojiId": "5458888989241011856",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/iridescent.svg",
      "tgs": "gifts/berrybox/assets/models/iridescent.tgs"
    }
  },
  {
    "name": "Luxury",
    "customEmojiId": "5460782657501681996",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/luxury.svg",
      "tgs": "gifts/berrybox/assets/models/luxury.tgs"
    }
  },
  {
    "name": "Magenta",
    "customEmojiId": "5460666173693645615",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/magenta.svg",
      "tgs": "gifts/berrybox/assets/models/magenta.tgs"
    }
  },
  {
    "name": "Manga",
    "customEmojiId": "5460652069021045800",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/manga.svg",
      "tgs": "gifts/berrybox/assets/models/manga.tgs"
    }
  },
  {
    "name": "Paparazzi",
    "customEmojiId": "5461021152740662121",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/paparazzi.svg",
      "tgs": "gifts/berrybox/assets/models/paparazzi.tgs"
    }
  },
  {
    "name": "Pointilism",
    "customEmojiId": "5458923117051142127",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/pointilism.svg",
      "tgs": "gifts/berrybox/assets/models/pointilism.tgs"
    }
  },
  {
    "name": "Purple Ribbon",
    "customEmojiId": "5458449266194279547",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/purple-ribbon.svg",
      "tgs": "gifts/berrybox/assets/models/purple-ribbon.tgs"
    }
  },
  {
    "name": "Rarity",
    "customEmojiId": "5461008461112302631",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/rarity.svg",
      "tgs": "gifts/berrybox/assets/models/rarity.tgs"
    }
  },
  {
    "name": "Refraction",
    "customEmojiId": "5460690122431292332",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/refraction.svg",
      "tgs": "gifts/berrybox/assets/models/refraction.tgs"
    }
  },
  {
    "name": "RGBerry",
    "customEmojiId": "5460764957941455923",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/rgberry.svg",
      "tgs": "gifts/berrybox/assets/models/rgberry.tgs"
    }
  },
  {
    "name": "Ribbons",
    "customEmojiId": "5460997964212229685",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/ribbons.svg",
      "tgs": "gifts/berrybox/assets/models/ribbons.tgs"
    }
  },
  {
    "name": "Sweet Star",
    "customEmojiId": "5458836049474120059",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/sweet-star.svg",
      "tgs": "gifts/berrybox/assets/models/sweet-star.tgs"
    }
  },
  {
    "name": "Valentine",
    "customEmojiId": "5461053695707866470",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/valentine.svg",
      "tgs": "gifts/berrybox/assets/models/valentine.tgs"
    }
  },
  {
    "name": "White Cocoa",
    "customEmojiId": "5461094038335674193",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/berrybox/assets/models/white-cocoa.svg",
      "tgs": "gifts/berrybox/assets/models/white-cocoa.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/axe.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bee.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bug.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/burger.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cap.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/car.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cheese.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/clover.png"
    }
  },
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/coin.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/conch.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/corn.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/crab.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/dice.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/drug.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/fish.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/gold.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/kite.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/knight.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/like.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/mountain-lion.png"
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
      "png": "gifts/berrybox/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/owl.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/palette.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pawn.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/planet.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/potion.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/spades.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/star.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/thief.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Broken Heart",
    "customEmojiId": "5199424470086882078",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/broken-heart.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Cute Bear",
    "customEmojiId": "5199832552109543285",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cute-bear.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Fluffy Wolf",
    "customEmojiId": "5199636065945685337",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/fluffy-wolf.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/grape.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/heart.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lily.png"
    }
  },
  {
    "name": "Loveberry",
    "customEmojiId": "5199559143081412940",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/loveberry.png"
    }
  },
  {
    "name": "Lovely Key",
    "customEmojiId": "5199585978037078422",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lovely-key.png"
    }
  },
  {
    "name": "Lovely Rain",
    "customEmojiId": "5199442977100959205",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lovely-rain.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/mask.png"
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
      "png": "gifts/berrybox/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Water Drops",
    "customEmojiId": "5199780544350552415",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/water-drops.png"
    }
  },
  {
    "name": "Amour Scoops",
    "customEmojiId": "5199434537490223092",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/amour-scoops.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/apple.png"
    }
  },
  {
    "name": "Aubergine",
    "customEmojiId": "5199473617397649496",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/aubergine.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/candle.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5199437178895110515",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/chocolate.png"
    }
  },
  {
    "name": "Cupid’s Arrow",
    "customEmojiId": null,
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cupid-s-arrow.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/fire.png"
    }
  },
  {
    "name": "Flirty Message",
    "customEmojiId": "5199585110453685697",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/flirty-message.png"
    }
  },
  {
    "name": "Heart Shades",
    "customEmojiId": "5199498622697246200",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/heart-shades.png"
    }
  },
  {
    "name": "Heartbeat",
    "customEmojiId": "5199608762838583069",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/heartbeat.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/key.png"
    }
  },
  {
    "name": "Love Dove",
    "customEmojiId": "5199713551450672774",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/love-dove.png"
    }
  },
  {
    "name": "Loving Heart",
    "customEmojiId": "5199424448612044780",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/loving-heart.png"
    }
  },
  {
    "name": "Padlock",
    "customEmojiId": "5199791522286967123",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/padlock.png"
    }
  },
  {
    "name": "Patched Heart",
    "customEmojiId": "5201931421022716330",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/patched-heart.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/plum.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/ring.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Shiny Heart",
    "customEmojiId": "5199799154443848625",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/shiny-heart.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Stilettos",
    "customEmojiId": "5199526866402183288",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/stilettos.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Blossom",
    "customEmojiId": "5199927973397957915",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/blossom.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Butterfly",
    "customEmojiId": "5199604893073048970",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/butterfly.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/candy.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/chili.png"
    }
  },
  {
    "name": "Cunning Fox",
    "customEmojiId": "5199544935329597288",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cunning-fox.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Cupid",
    "customEmojiId": "5199526046063441284",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/cupid.png"
    }
  },
  {
    "name": "Double Bed",
    "customEmojiId": "5199507204041903322",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/double-bed.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/flower.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Flying Heart",
    "customEmojiId": "5199791393437943862",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/flying-heart.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Heart Balloon",
    "customEmojiId": "5199420948213697782",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/heart-balloon.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Kitty Cat",
    "customEmojiId": "5199530723282813013",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/kitty-cat.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Lingerie",
    "customEmojiId": "5199610622559422186",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lingerie.png"
    }
  },
  {
    "name": "Lips",
    "customEmojiId": "5199797951853008666",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lips.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Lovebirds",
    "customEmojiId": "5199962199992339292",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lovebirds.png"
    }
  },
  {
    "name": "Lovely Bra",
    "customEmojiId": "5199569678636190884",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lovely-bra.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Lovely Rose",
    "customEmojiId": "5201900810790798810",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/lovely-rose.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/melon.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/moon.png"
    }
  },
  {
    "name": "Napkins",
    "customEmojiId": "5199437329218965470",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/napkins.png"
    }
  },
  {
    "name": "Passion Latte",
    "customEmojiId": "5199415609569347891",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/passion-latte.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/paw.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pear.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/plume.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Rabbit",
    "customEmojiId": "5199887768209097952",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/rabbit.png"
    }
  },
  {
    "name": "Romantic Cake",
    "customEmojiId": "5199478951747031038",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/romantic-cake.png"
    }
  },
  {
    "name": "Sweets Box",
    "customEmojiId": "5199482696958513677",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/sweets-box.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "rarityPermille": 11,
    "originalRarityPermille": 11,
    "rarity": 1.1,
    "originalRarity": 1.1,
    "assets": {
      "png": "gifts/berrybox/assets/patterns/watermelon.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "originalRarity": 1
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
    "originalRarity": 1.5
  },
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "berrybox", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
