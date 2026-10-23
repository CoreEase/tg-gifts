import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5845776576658015084" as const;

export const models = [
  {
    "name": "Brewtoad",
    "customEmojiId": "5456581217413523850",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/brewtoad.svg",
      "tgs": "gifts/kissedfrog/assets/models/brewtoad.tgs"
    }
  },
  {
    "name": "Count Croakula",
    "customEmojiId": "5456408250490577530",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/count-croakula.svg",
      "tgs": "gifts/kissedfrog/assets/models/count-croakula.tgs"
    }
  },
  {
    "name": "Frogmaid",
    "customEmojiId": "5454024732619857782",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/frogmaid.svg",
      "tgs": "gifts/kissedfrog/assets/models/frogmaid.tgs"
    }
  },
  {
    "name": "Happy Pepe",
    "customEmojiId": "5456440918011829152",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/happy-pepe.svg",
      "tgs": "gifts/kissedfrog/assets/models/happy-pepe.tgs"
    }
  },
  {
    "name": "Honeyhop",
    "customEmojiId": "5456512755634823024",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/honeyhop.svg",
      "tgs": "gifts/kissedfrog/assets/models/honeyhop.tgs"
    }
  },
  {
    "name": "Lilie Pond",
    "customEmojiId": "5456270081392665071",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/lilie-pond.svg",
      "tgs": "gifts/kissedfrog/assets/models/lilie-pond.tgs"
    }
  },
  {
    "name": "Lucifrog",
    "customEmojiId": "5456594849639718349",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/lucifrog.svg",
      "tgs": "gifts/kissedfrog/assets/models/lucifrog.tgs"
    }
  },
  {
    "name": "Melty Butter",
    "customEmojiId": "5454414865974189906",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/melty-butter.svg",
      "tgs": "gifts/kissedfrog/assets/models/melty-butter.tgs"
    }
  },
  {
    "name": "Puddles",
    "customEmojiId": "5454259181999643374",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/puddles.svg",
      "tgs": "gifts/kissedfrog/assets/models/puddles.tgs"
    }
  },
  {
    "name": "Rocky Hopper",
    "customEmojiId": "5454072883498213606",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/rocky-hopper.svg",
      "tgs": "gifts/kissedfrog/assets/models/rocky-hopper.tgs"
    }
  },
  {
    "name": "Sweet Dream",
    "customEmojiId": "5456658256241909436",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/sweet-dream.svg",
      "tgs": "gifts/kissedfrog/assets/models/sweet-dream.tgs"
    }
  },
  {
    "name": "Tree Frog",
    "customEmojiId": "5454061759532917461",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/tree-frog.svg",
      "tgs": "gifts/kissedfrog/assets/models/tree-frog.tgs"
    }
  },
  {
    "name": "Zodiak Croak",
    "customEmojiId": "5454226192355843862",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/zodiak-croak.svg",
      "tgs": "gifts/kissedfrog/assets/models/zodiak-croak.tgs"
    }
  },
  {
    "name": "Icefrog",
    "customEmojiId": "5454418005595284242",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/icefrog.svg",
      "tgs": "gifts/kissedfrog/assets/models/icefrog.tgs"
    }
  },
  {
    "name": "Lava Leap",
    "customEmojiId": "5454382451856007504",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/lava-leap.svg",
      "tgs": "gifts/kissedfrog/assets/models/lava-leap.tgs"
    }
  },
  {
    "name": "Pond Fairy",
    "customEmojiId": "5454080322381571425",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/pond-fairy.svg",
      "tgs": "gifts/kissedfrog/assets/models/pond-fairy.tgs"
    }
  },
  {
    "name": "Tesla Frog",
    "customEmojiId": "5454154286013375005",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/tesla-frog.svg",
      "tgs": "gifts/kissedfrog/assets/models/tesla-frog.tgs"
    }
  },
  {
    "name": "Trixie",
    "customEmojiId": "5456224357170832122",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/trixie.svg",
      "tgs": "gifts/kissedfrog/assets/models/trixie.tgs"
    }
  },
  {
    "name": "Boingo",
    "customEmojiId": "5456535634925609306",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/boingo.svg",
      "tgs": "gifts/kissedfrog/assets/models/boingo.tgs"
    }
  },
  {
    "name": "Cupid",
    "customEmojiId": "5456288743025566433",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/cupid.svg",
      "tgs": "gifts/kissedfrog/assets/models/cupid.tgs"
    }
  },
  {
    "name": "Desert Frog",
    "customEmojiId": "5454096948199972859",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/desert-frog.svg",
      "tgs": "gifts/kissedfrog/assets/models/desert-frog.tgs"
    }
  },
  {
    "name": "Hopberry",
    "customEmojiId": "5454400945985183418",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/hopberry.svg",
      "tgs": "gifts/kissedfrog/assets/models/hopberry.tgs"
    }
  },
  {
    "name": "Ms. Toad",
    "customEmojiId": "5454123031536368414",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/ms-toad.svg",
      "tgs": "gifts/kissedfrog/assets/models/ms-toad.tgs"
    }
  },
  {
    "name": "Prince Ribbit",
    "customEmojiId": "5456197681128954825",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/prince-ribbit.svg",
      "tgs": "gifts/kissedfrog/assets/models/prince-ribbit.tgs"
    }
  },
  {
    "name": "Toadstool",
    "customEmojiId": "5456269806514759170",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/toadstool.svg",
      "tgs": "gifts/kissedfrog/assets/models/toadstool.tgs"
    }
  },
  {
    "name": "Bronze",
    "customEmojiId": "5456631086278797784",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/bronze.svg",
      "tgs": "gifts/kissedfrog/assets/models/bronze.tgs"
    }
  },
  {
    "name": "Silver",
    "customEmojiId": "5454127305028824707",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/silver.svg",
      "tgs": "gifts/kissedfrog/assets/models/silver.tgs"
    }
  },
  {
    "name": "Duskhopper",
    "customEmojiId": "5454325792647436736",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/duskhopper.svg",
      "tgs": "gifts/kissedfrog/assets/models/duskhopper.tgs"
    }
  },
  {
    "name": "Ectobloom",
    "customEmojiId": "5456166482486518794",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/ectobloom.svg",
      "tgs": "gifts/kissedfrog/assets/models/ectobloom.tgs"
    }
  },
  {
    "name": "Ectofrog",
    "customEmojiId": "5454079381783732443",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/ectofrog.svg",
      "tgs": "gifts/kissedfrog/assets/models/ectofrog.tgs"
    }
  },
  {
    "name": "Lemon Drop",
    "customEmojiId": "5456633581654794413",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/lemon-drop.svg",
      "tgs": "gifts/kissedfrog/assets/models/lemon-drop.tgs"
    }
  },
  {
    "name": "Minty Bloom",
    "customEmojiId": "5453995054395842197",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/minty-bloom.svg",
      "tgs": "gifts/kissedfrog/assets/models/minty-bloom.tgs"
    }
  },
  {
    "name": "Poison",
    "customEmojiId": "5456356796782372106",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/poison.svg",
      "tgs": "gifts/kissedfrog/assets/models/poison.tgs"
    }
  },
  {
    "name": "Ramune",
    "customEmojiId": "5454413792232366454",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/ramune.svg",
      "tgs": "gifts/kissedfrog/assets/models/ramune.tgs"
    }
  },
  {
    "name": "Sarutoad",
    "customEmojiId": "5456161723662754149",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/sarutoad.svg",
      "tgs": "gifts/kissedfrog/assets/models/sarutoad.tgs"
    }
  },
  {
    "name": "Starry Night",
    "customEmojiId": "5456559210001114737",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/starry-night.svg",
      "tgs": "gifts/kissedfrog/assets/models/starry-night.tgs"
    }
  },
  {
    "name": "Void Hopper",
    "customEmojiId": "5456538147481475168",
    "rarityPermille": 25,
    "originalRarityPermille": 25,
    "rarity": 2.5,
    "originalRarity": 2.5,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/void-hopper.svg",
      "tgs": "gifts/kissedfrog/assets/models/void-hopper.tgs"
    }
  },
  {
    "name": "Banana Pox",
    "customEmojiId": "5456331263201799155",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/banana-pox.svg",
      "tgs": "gifts/kissedfrog/assets/models/banana-pox.tgs"
    }
  },
  {
    "name": "Frogtart",
    "customEmojiId": "5456519232445504144",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/frogtart.svg",
      "tgs": "gifts/kissedfrog/assets/models/frogtart.tgs"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5453975465050006109",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/melon.svg",
      "tgs": "gifts/kissedfrog/assets/models/melon.tgs"
    }
  },
  {
    "name": "Brownie",
    "customEmojiId": "5454135100394464383",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/brownie.svg",
      "tgs": "gifts/kissedfrog/assets/models/brownie.tgs"
    }
  },
  {
    "name": "Cranberry",
    "customEmojiId": "5456191371821998029",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/cranberry.svg",
      "tgs": "gifts/kissedfrog/assets/models/cranberry.tgs"
    }
  },
  {
    "name": "Frogwave",
    "customEmojiId": "5456616337361100856",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/frogwave.svg",
      "tgs": "gifts/kissedfrog/assets/models/frogwave.tgs"
    }
  },
  {
    "name": "Lemon Juice",
    "customEmojiId": "5453921812318544617",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/lemon-juice.svg",
      "tgs": "gifts/kissedfrog/assets/models/lemon-juice.tgs"
    }
  },
  {
    "name": "Lily Pond",
    "customEmojiId": "5453977140087249388",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/lily-pond.svg",
      "tgs": "gifts/kissedfrog/assets/models/lily-pond.tgs"
    }
  },
  {
    "name": "Peach",
    "customEmojiId": "5456605097431686611",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/peach.svg",
      "tgs": "gifts/kissedfrog/assets/models/peach.tgs"
    }
  },
  {
    "name": "Sea Breeze",
    "customEmojiId": "5454235267621742300",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/sea-breeze.svg",
      "tgs": "gifts/kissedfrog/assets/models/sea-breeze.tgs"
    }
  },
  {
    "name": "Sky Leaper",
    "customEmojiId": "5456368758266289674",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/sky-leaper.svg",
      "tgs": "gifts/kissedfrog/assets/models/sky-leaper.tgs"
    }
  },
  {
    "name": "Tide Pod",
    "customEmojiId": "5456474526130922751",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/tide-pod.svg",
      "tgs": "gifts/kissedfrog/assets/models/tide-pod.tgs"
    }
  },
  {
    "name": "Toadberry",
    "customEmojiId": "5456659531847197473",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/kissedfrog/assets/models/toadberry.svg",
      "tgs": "gifts/kissedfrog/assets/models/toadberry.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Blossom",
    "customEmojiId": "5199927973397957915",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/blossom.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/boat.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/bone.png"
    }
  },
  {
    "name": "Broken Heart",
    "customEmojiId": "5199424470086882078",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/broken-heart.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/bubble-tea.png"
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
      "png": "gifts/kissedfrog/assets/patterns/bug.png"
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
      "png": "gifts/kissedfrog/assets/patterns/bull-of-heaven.png"
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
      "png": "gifts/kissedfrog/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/candy.png"
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
      "png": "gifts/kissedfrog/assets/patterns/cap.png"
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
      "png": "gifts/kissedfrog/assets/patterns/car.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cash.png"
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
      "png": "gifts/kissedfrog/assets/patterns/celtic-wolf.png"
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
      "png": "gifts/kissedfrog/assets/patterns/cheese.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/chest.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cicada.png"
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
      "png": "gifts/kissedfrog/assets/patterns/clover.png"
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
      "png": "gifts/kissedfrog/assets/patterns/coat-of-arms.png"
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
      "png": "gifts/kissedfrog/assets/patterns/cobra.png"
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
      "png": "gifts/kissedfrog/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/coin-purse.png"
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
      "png": "gifts/kissedfrog/assets/patterns/conch.png"
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
      "png": "gifts/kissedfrog/assets/patterns/cone.png"
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
      "png": "gifts/kissedfrog/assets/patterns/corn.png"
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
      "png": "gifts/kissedfrog/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Cunning Fox",
    "customEmojiId": "5199544935329597288",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cunning-fox.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cursor.png"
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
      "png": "gifts/kissedfrog/assets/patterns/diamonds.png"
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
      "png": "gifts/kissedfrog/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/eagle.png"
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
      "png": "gifts/kissedfrog/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/feather.png"
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
      "png": "gifts/kissedfrog/assets/patterns/fenrir.png"
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
      "png": "gifts/kissedfrog/assets/patterns/fish.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/flower.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/gem.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/hand-of-god.png"
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
      "png": "gifts/kissedfrog/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/hermit-shell.png"
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
      "png": "gifts/kissedfrog/assets/patterns/hippo.png"
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
      "png": "gifts/kissedfrog/assets/patterns/inguz-rune.png"
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
      "png": "gifts/kissedfrog/assets/patterns/ink-pen.png"
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
      "png": "gifts/kissedfrog/assets/patterns/jumbo-pencil.png"
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
      "png": "gifts/kissedfrog/assets/patterns/kitsune.png"
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
      "png": "gifts/kissedfrog/assets/patterns/knight.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/koala.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/leaf.png"
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
      "png": "gifts/kissedfrog/assets/patterns/like.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lily.png"
    }
  },
  {
    "name": "Lingerie",
    "customEmojiId": "5199610622559422186",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lingerie.png"
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
      "png": "gifts/kissedfrog/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Lips",
    "customEmojiId": "5199797951853008666",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lips.png"
    }
  },
  {
    "name": "Loveberry",
    "customEmojiId": "5199559143081412940",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/loveberry.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Lovely Rain",
    "customEmojiId": "5199442977100959205",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lovely-rain.png"
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
      "png": "gifts/kissedfrog/assets/patterns/mafdet.png"
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
      "png": "gifts/kissedfrog/assets/patterns/mannaz-rune.png"
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
      "png": "gifts/kissedfrog/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/mask.png"
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
      "png": "gifts/kissedfrog/assets/patterns/monstera.png"
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
      "png": "gifts/kissedfrog/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/oxen-of-fire.png"
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
      "png": "gifts/kissedfrog/assets/patterns/pawn.png"
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
      "png": "gifts/kissedfrog/assets/patterns/pc-mouse.png"
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
      "png": "gifts/kissedfrog/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/polar-bear.png"
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
      "png": "gifts/kissedfrog/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Rabbit",
    "customEmojiId": "5199887768209097952",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/rabbit.png"
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
      "png": "gifts/kissedfrog/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/ram-of-amun.png"
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
      "png": "gifts/kissedfrog/assets/patterns/rhino-warrior.png"
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
      "png": "gifts/kissedfrog/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Romantic Cake",
    "customEmojiId": "5199478951747031038",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/romantic-cake.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/scissors.png"
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
      "png": "gifts/kissedfrog/assets/patterns/scorpion.png"
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
      "png": "gifts/kissedfrog/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/seahorse.png"
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
      "png": "gifts/kissedfrog/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/shield.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/smartphone.png"
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
      "png": "gifts/kissedfrog/assets/patterns/spades.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/sprout.png"
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
      "png": "gifts/kissedfrog/assets/patterns/sun-mountain.png"
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
      "png": "gifts/kissedfrog/assets/patterns/sword.png"
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
      "png": "gifts/kissedfrog/assets/patterns/thief.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/tie.png"
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
      "png": "gifts/kissedfrog/assets/patterns/toilet.png"
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
      "png": "gifts/kissedfrog/assets/patterns/tooth.png"
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
      "png": "gifts/kissedfrog/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/toy-bucket.png"
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
      "png": "gifts/kissedfrog/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/tribal-shield.png"
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
      "png": "gifts/kissedfrog/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/tulip.png"
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
      "png": "gifts/kissedfrog/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/vortex.png"
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
      "png": "gifts/kissedfrog/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Amour Scoops",
    "customEmojiId": "5199434537490223092",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/amour-scoops.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/apple.png"
    }
  },
  {
    "name": "Aubergine",
    "customEmojiId": "5199473617397649496",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/aubergine.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Butterfly",
    "customEmojiId": "5199604893073048970",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/butterfly.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/chili.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Cupid’s Arrow",
    "customEmojiId": null,
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cupid-s-arrow.png"
    }
  },
  {
    "name": "Cute Bear",
    "customEmojiId": "5199832552109543285",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cute-bear.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/fire.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Flying Heart",
    "customEmojiId": "5199791393437943862",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/flying-heart.png"
    }
  },
  {
    "name": "Heart Balloon",
    "customEmojiId": "5199420948213697782",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/heart-balloon.png"
    }
  },
  {
    "name": "Heart Shades",
    "customEmojiId": "5199498622697246200",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/heart-shades.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/key.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Love Dove",
    "customEmojiId": "5199713551450672774",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/love-dove.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Lovebirds",
    "customEmojiId": "5199962199992339292",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lovebirds.png"
    }
  },
  {
    "name": "Lovely Key",
    "customEmojiId": "5199585978037078422",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lovely-key.png"
    }
  },
  {
    "name": "Lovely Rose",
    "customEmojiId": "5201900810790798810",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lovely-rose.png"
    }
  },
  {
    "name": "Loving Heart",
    "customEmojiId": "5199424448612044780",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/loving-heart.png"
    }
  },
  {
    "name": "Napkins",
    "customEmojiId": "5199437329218965470",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/napkins.png"
    }
  },
  {
    "name": "Passion Latte",
    "customEmojiId": "5199415609569347891",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/passion-latte.png"
    }
  },
  {
    "name": "Patched Heart",
    "customEmojiId": "5201931421022716330",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/patched-heart.png"
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
      "png": "gifts/kissedfrog/assets/patterns/paw.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/pear.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Sakura",
    "customEmojiId": "5199856934638878837",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/sakura.png"
    }
  },
  {
    "name": "Shiny Heart",
    "customEmojiId": "5199799154443848625",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/shiny-heart.png"
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
      "png": "gifts/kissedfrog/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Sweets Box",
    "customEmojiId": "5199482696958513677",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/sweets-box.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Chocolate",
    "customEmojiId": "5199437178895110515",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/chocolate.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/crab.png"
    }
  },
  {
    "name": "Cupid",
    "customEmojiId": "5199526046063441284",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cupid.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Double Bed",
    "customEmojiId": "5199507204041903322",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/double-bed.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Flirty Message",
    "customEmojiId": "5199585110453685697",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/flirty-message.png"
    }
  },
  {
    "name": "Fluffy Wolf",
    "customEmojiId": "5199636065945685337",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/fluffy-wolf.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/grape.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/heart.png"
    }
  },
  {
    "name": "Heartbeat",
    "customEmojiId": "5199608762838583069",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/heartbeat.png"
    }
  },
  {
    "name": "Kitty Cat",
    "customEmojiId": "5199530723282813013",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/kitty-cat.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Lovely Bra",
    "customEmojiId": "5199569678636190884",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lovely-bra.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/melon.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Padlock",
    "customEmojiId": "5199791522286967123",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/padlock.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/plum.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/plume.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/ring.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Stilettos",
    "customEmojiId": "5199526866402183288",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/stilettos.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Water Drops",
    "customEmojiId": "5199780544350552415",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/water-drops.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "rarityPermille": 6,
    "originalRarityPermille": 6,
    "rarity": 0.6,
    "originalRarity": 0.6,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Autumn Leaves",
    "customEmojiId": "5199868191748166568",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/autumn-leaves.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Coffin",
    "customEmojiId": "5199800696337107918",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/coffin.png"
    }
  },
  {
    "name": "Crow",
    "customEmojiId": "5199426733534641259",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/crow.png"
    }
  },
  {
    "name": "Evil Pumpkin",
    "customEmojiId": "5199669966122550110",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/evil-pumpkin.png"
    }
  },
  {
    "name": "Flying Witch",
    "customEmojiId": "5199639686603112376",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/flying-witch.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Nice Ghost",
    "customEmojiId": "5199814161059579213",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/nice-ghost.png"
    }
  },
  {
    "name": "Scarecrow",
    "customEmojiId": "5199734102869184064",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/scarecrow.png"
    }
  },
  {
    "name": "Witch’s Hat",
    "customEmojiId": null,
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/witch-s-hat.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/candle.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Grim Reaper",
    "customEmojiId": "5199657261609290637",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/grim-reaper.png"
    }
  },
  {
    "name": "Human Scull",
    "customEmojiId": "5199616090052791141",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/human-scull.png"
    }
  },
  {
    "name": "Jaws",
    "customEmojiId": "5199489388517558658",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/jaws.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/moon.png"
    }
  },
  {
    "name": "Treats",
    "customEmojiId": "5199923330538311116",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/treats.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Black Widow",
    "customEmojiId": "5199544041976401500",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/black-widow.png"
    }
  },
  {
    "name": "Bloody Axe",
    "customEmojiId": "5199755874058406442",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/bloody-axe.png"
    }
  },
  {
    "name": "Cauldron",
    "customEmojiId": "5199831577151966735",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/cauldron.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Eyeball",
    "customEmojiId": "5199500791655727782",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/eyeball.png"
    }
  },
  {
    "name": "Gravestone",
    "customEmojiId": "5199458662321521472",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/gravestone.png"
    }
  },
  {
    "name": "Half Moon",
    "customEmojiId": "5199418019046001807",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/half-moon.png"
    }
  },
  {
    "name": "Happy Smile",
    "customEmojiId": "5199771185616816222",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/happy-smile.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Lollipop",
    "customEmojiId": "5199604863008277923",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/lollipop.png"
    }
  },
  {
    "name": "Night Bats",
    "customEmojiId": "5199725388380543708",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/night-bats.png"
    }
  },
  {
    "name": "Poison Drop",
    "customEmojiId": "5199690302792698006",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/poison-drop.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/potion.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Severed Hand",
    "customEmojiId": "5199465194966780844",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/severed-hand.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/skull.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Spooky Cat",
    "customEmojiId": "5199795890268706133",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/spooky-cat.png"
    }
  },
  {
    "name": "Voodoo Doll",
    "customEmojiId": "5199629937027353893",
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2,
    "assets": {
      "png": "gifts/kissedfrog/assets/patterns/voodoo-doll.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
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
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "kissedfrog", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
