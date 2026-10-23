import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const giftId = "5846192273657692751" as const;

export const models = [
  {
    "name": "Bad Fortune",
    "customEmojiId": "5354782795916929280",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/bad-fortune.svg",
      "tgs": "gifts/electricskull/assets/models/bad-fortune.tgs"
    }
  },
  {
    "name": "Calavera",
    "customEmojiId": "5355138711266825648",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/calavera.svg",
      "tgs": "gifts/electricskull/assets/models/calavera.tgs"
    }
  },
  {
    "name": "Nightmare",
    "customEmojiId": "5355242572165968153",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/nightmare.svg",
      "tgs": "gifts/electricskull/assets/models/nightmare.tgs"
    }
  },
  {
    "name": "Terminator",
    "customEmojiId": "5355001620205695950",
    "rarityPermille": 3,
    "originalRarityPermille": 3,
    "rarity": 0.3,
    "originalRarity": 0.3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/terminator.svg",
      "tgs": "gifts/electricskull/assets/models/terminator.tgs"
    }
  },
  {
    "name": "Clockwork",
    "customEmojiId": "5355122892902261875",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/clockwork.svg",
      "tgs": "gifts/electricskull/assets/models/clockwork.tgs"
    }
  },
  {
    "name": "Cobweb",
    "customEmojiId": "5355190237989463655",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/cobweb.svg",
      "tgs": "gifts/electricskull/assets/models/cobweb.tgs"
    }
  },
  {
    "name": "Creeper Berry",
    "customEmojiId": "5355099592704681796",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/creeper-berry.svg",
      "tgs": "gifts/electricskull/assets/models/creeper-berry.tgs"
    }
  },
  {
    "name": "Divinity",
    "customEmojiId": "5355015334036271925",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/divinity.svg",
      "tgs": "gifts/electricskull/assets/models/divinity.tgs"
    }
  },
  {
    "name": "Fiesta",
    "customEmojiId": "5354966788020921477",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/fiesta.svg",
      "tgs": "gifts/electricskull/assets/models/fiesta.tgs"
    }
  },
  {
    "name": "Party Soul",
    "customEmojiId": "5355161603442502478",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/party-soul.svg",
      "tgs": "gifts/electricskull/assets/models/party-soul.tgs"
    }
  },
  {
    "name": "Sleepy Hollow",
    "customEmojiId": "5355328248173587655",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/sleepy-hollow.svg",
      "tgs": "gifts/electricskull/assets/models/sleepy-hollow.tgs"
    }
  },
  {
    "name": "Smiley",
    "customEmojiId": "5354810223578083251",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/smiley.svg",
      "tgs": "gifts/electricskull/assets/models/smiley.tgs"
    }
  },
  {
    "name": "Starman",
    "customEmojiId": "5355107770322412112",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/starman.svg",
      "tgs": "gifts/electricskull/assets/models/starman.tgs"
    }
  },
  {
    "name": "Half Alive",
    "customEmojiId": "5355002629523006294",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "svg": "gifts/electricskull/assets/models/half-alive.svg",
      "tgs": "gifts/electricskull/assets/models/half-alive.tgs"
    }
  },
  {
    "name": "Dead Apple",
    "customEmojiId": "5355112653700232060",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/electricskull/assets/models/dead-apple.svg",
      "tgs": "gifts/electricskull/assets/models/dead-apple.tgs"
    }
  },
  {
    "name": "Gentleman",
    "customEmojiId": "5354933862801634097",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/electricskull/assets/models/gentleman.svg",
      "tgs": "gifts/electricskull/assets/models/gentleman.tgs"
    }
  },
  {
    "name": "Hellfire",
    "customEmojiId": "5354810511340890749",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/electricskull/assets/models/hellfire.svg",
      "tgs": "gifts/electricskull/assets/models/hellfire.tgs"
    }
  },
  {
    "name": "Ink Skull",
    "customEmojiId": "5355121084721030013",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/electricskull/assets/models/ink-skull.svg",
      "tgs": "gifts/electricskull/assets/models/ink-skull.tgs"
    }
  },
  {
    "name": "Starborn",
    "customEmojiId": "5354843647013577467",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/electricskull/assets/models/starborn.svg",
      "tgs": "gifts/electricskull/assets/models/starborn.tgs"
    }
  },
  {
    "name": "Twisted Heart",
    "customEmojiId": "5355164996466670001",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/electricskull/assets/models/twisted-heart.svg",
      "tgs": "gifts/electricskull/assets/models/twisted-heart.tgs"
    }
  },
  {
    "name": "Void Totem",
    "customEmojiId": "5355111296490563829",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/electricskull/assets/models/void-totem.svg",
      "tgs": "gifts/electricskull/assets/models/void-totem.tgs"
    }
  },
  {
    "name": "Wild Desire",
    "customEmojiId": "5355032994941791146",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "svg": "gifts/electricskull/assets/models/wild-desire.svg",
      "tgs": "gifts/electricskull/assets/models/wild-desire.tgs"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5354845236151482288",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/cactus.svg",
      "tgs": "gifts/electricskull/assets/models/cactus.tgs"
    }
  },
  {
    "name": "Cute Monster",
    "customEmojiId": "5354980609225683452",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/cute-monster.svg",
      "tgs": "gifts/electricskull/assets/models/cute-monster.tgs"
    }
  },
  {
    "name": "Dead Kitty",
    "customEmojiId": "5355263767829575271",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/dead-kitty.svg",
      "tgs": "gifts/electricskull/assets/models/dead-kitty.tgs"
    }
  },
  {
    "name": "Happy End",
    "customEmojiId": "5355047546290991792",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/happy-end.svg",
      "tgs": "gifts/electricskull/assets/models/happy-end.tgs"
    }
  },
  {
    "name": "Polka Dead",
    "customEmojiId": "5355109037337762870",
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5,
    "assets": {
      "svg": "gifts/electricskull/assets/models/polka-dead.svg",
      "tgs": "gifts/electricskull/assets/models/polka-dead.tgs"
    }
  },
  {
    "name": "Bubblegum",
    "customEmojiId": "5355152128744650335",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/electricskull/assets/models/bubblegum.svg",
      "tgs": "gifts/electricskull/assets/models/bubblegum.tgs"
    }
  },
  {
    "name": "Nightfall",
    "customEmojiId": "5355281750857638112",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/electricskull/assets/models/nightfall.svg",
      "tgs": "gifts/electricskull/assets/models/nightfall.tgs"
    }
  },
  {
    "name": "Phantom",
    "customEmojiId": "5355206021994277469",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/electricskull/assets/models/phantom.svg",
      "tgs": "gifts/electricskull/assets/models/phantom.tgs"
    }
  },
  {
    "name": "Sunset Veil",
    "customEmojiId": "5354925195557629026",
    "rarityPermille": 20,
    "originalRarityPermille": 20,
    "rarity": 2,
    "originalRarity": 2,
    "assets": {
      "svg": "gifts/electricskull/assets/models/sunset-veil.svg",
      "tgs": "gifts/electricskull/assets/models/sunset-veil.tgs"
    }
  },
  {
    "name": "Chromatic",
    "customEmojiId": "5355319718368538639",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/chromatic.svg",
      "tgs": "gifts/electricskull/assets/models/chromatic.tgs"
    }
  },
  {
    "name": "Corpse Mint",
    "customEmojiId": "5357310779307618243",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/corpse-mint.svg",
      "tgs": "gifts/electricskull/assets/models/corpse-mint.tgs"
    }
  },
  {
    "name": "Deadly Sweet",
    "customEmojiId": "5355292191923134672",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/deadly-sweet.svg",
      "tgs": "gifts/electricskull/assets/models/deadly-sweet.tgs"
    }
  },
  {
    "name": "Frost Wraith",
    "customEmojiId": "5354940953792641273",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/frost-wraith.svg",
      "tgs": "gifts/electricskull/assets/models/frost-wraith.tgs"
    }
  },
  {
    "name": "Radiant",
    "customEmojiId": "5354907981328709151",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/radiant.svg",
      "tgs": "gifts/electricskull/assets/models/radiant.tgs"
    }
  },
  {
    "name": "Red Death",
    "customEmojiId": "5355270966194760322",
    "rarityPermille": 30,
    "originalRarityPermille": 30,
    "rarity": 3,
    "originalRarity": 3,
    "assets": {
      "svg": "gifts/electricskull/assets/models/red-death.svg",
      "tgs": "gifts/electricskull/assets/models/red-death.tgs"
    }
  },
  {
    "name": "Bone White",
    "customEmojiId": "5354872354574986362",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/bone-white.svg",
      "tgs": "gifts/electricskull/assets/models/bone-white.tgs"
    }
  },
  {
    "name": "Brass Fossil",
    "customEmojiId": "5355277305566488070",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/brass-fossil.svg",
      "tgs": "gifts/electricskull/assets/models/brass-fossil.tgs"
    }
  },
  {
    "name": "Deadman",
    "customEmojiId": "5355105403795434718",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/deadman.svg",
      "tgs": "gifts/electricskull/assets/models/deadman.tgs"
    }
  },
  {
    "name": "Diablo",
    "customEmojiId": "5354921531950528006",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/diablo.svg",
      "tgs": "gifts/electricskull/assets/models/diablo.tgs"
    }
  },
  {
    "name": "Herbal Glow",
    "customEmojiId": "5354952249556625418",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/herbal-glow.svg",
      "tgs": "gifts/electricskull/assets/models/herbal-glow.tgs"
    }
  },
  {
    "name": "Indigo Husk",
    "customEmojiId": "5355208620449493513",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/indigo-husk.svg",
      "tgs": "gifts/electricskull/assets/models/indigo-husk.tgs"
    }
  },
  {
    "name": "Metal Shade",
    "customEmojiId": "5355041937063701172",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/metal-shade.svg",
      "tgs": "gifts/electricskull/assets/models/metal-shade.tgs"
    }
  },
  {
    "name": "Neon Green",
    "customEmojiId": "5354889259566264008",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/neon-green.svg",
      "tgs": "gifts/electricskull/assets/models/neon-green.tgs"
    }
  },
  {
    "name": "Rose Quartz",
    "customEmojiId": "5354783616255681766",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/rose-quartz.svg",
      "tgs": "gifts/electricskull/assets/models/rose-quartz.tgs"
    }
  },
  {
    "name": "Ruby Eyes",
    "customEmojiId": "5355287832531327899",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/ruby-eyes.svg",
      "tgs": "gifts/electricskull/assets/models/ruby-eyes.tgs"
    }
  },
  {
    "name": "Solar Stone",
    "customEmojiId": "5355057068233484804",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/solar-stone.svg",
      "tgs": "gifts/electricskull/assets/models/solar-stone.tgs"
    }
  },
  {
    "name": "Tangerine",
    "customEmojiId": "5354811335974618434",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/tangerine.svg",
      "tgs": "gifts/electricskull/assets/models/tangerine.tgs"
    }
  },
  {
    "name": "Zombie",
    "customEmojiId": "5354873870698443389",
    "rarityPermille": 40,
    "originalRarityPermille": 40,
    "rarity": 4,
    "originalRarity": 4,
    "assets": {
      "svg": "gifts/electricskull/assets/models/zombie.svg",
      "tgs": "gifts/electricskull/assets/models/zombie.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Bicorne",
    "customEmojiId": "5199462042460782106",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/bicorne.png"
    }
  },
  {
    "name": "Chick",
    "customEmojiId": "5199684294133452501",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/chick.png"
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
      "png": "gifts/electricskull/assets/patterns/cobra.png"
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
      "png": "gifts/electricskull/assets/patterns/coin.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/dessert.png"
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
      "png": "gifts/electricskull/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Ice Cream",
    "customEmojiId": "5199587451210861217",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/ice-cream.png"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/leprechaun.png"
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
      "png": "gifts/electricskull/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/nemes.png"
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
      "png": "gifts/electricskull/assets/patterns/piggy-bank.png"
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
      "png": "gifts/electricskull/assets/patterns/red-deer.png"
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
      "png": "gifts/electricskull/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "rarityPermille": 2,
    "originalRarityPermille": 2,
    "rarity": 0.2,
    "originalRarity": 0.2,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/strawberry.png"
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
      "png": "gifts/electricskull/assets/patterns/wasp.png"
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
      "png": "gifts/electricskull/assets/patterns/yogi-shaman.png"
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
      "png": "gifts/electricskull/assets/patterns/all-seeing-eye.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Basketball",
    "customEmojiId": "5199728789994637327",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/basketball.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Bearskin",
    "customEmojiId": "5199745828129901558",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/bearskin.png"
    }
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/beer.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Bucket Hat",
    "customEmojiId": "5199537066949512116",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/bucket-hat.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/calm-wolf.png"
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
      "png": "gifts/electricskull/assets/patterns/cash.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Conical Hat",
    "customEmojiId": "5199648817703584324",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/conical-hat.png"
    }
  },
  {
    "name": "Coonskin Cap",
    "customEmojiId": "5199711867823495459",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/coonskin-cap.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Egg",
    "customEmojiId": "5199786226592283587",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/egg.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Kashket",
    "customEmojiId": "5199448672227594010",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/kashket.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/kite.png"
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
      "png": "gifts/electricskull/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Nigiri",
    "customEmojiId": "5199706554948942813",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/nigiri.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/palette.png"
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
      "png": "gifts/electricskull/assets/patterns/paw.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/plum.png"
    }
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/porrige.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/ring.png"
    }
  },
  {
    "name": "Rooster",
    "customEmojiId": "5199454002282004330",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/rooster.png"
    }
  },
  {
    "name": "Sailor Hat",
    "customEmojiId": "5199827045961471340",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/sailor-hat.png"
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
      "png": "gifts/electricskull/assets/patterns/star-crown.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/sun.png"
    }
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/teru-bozu.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Trinity Knot",
    "customEmojiId": "5199449449616675994",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/trinity-knot.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "rarityPermille": 4,
    "originalRarityPermille": 4,
    "rarity": 0.4,
    "originalRarity": 0.4,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/viking.png"
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
      "png": "gifts/electricskull/assets/patterns/winged-helm.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Bamboo",
    "customEmojiId": "5199966902981528333",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/bamboo.png"
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
      "png": "gifts/electricskull/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Black Widow",
    "customEmojiId": "5199544041976401500",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/black-widow.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/car.png"
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
      "png": "gifts/electricskull/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Cowboy Hat",
    "customEmojiId": "5199727909526343129",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/cowboy-hat.png"
    }
  },
  {
    "name": "Donut",
    "customEmojiId": "5199509415950058480",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/donut.png"
    }
  },
  {
    "name": "Evil Pumpkin",
    "customEmojiId": "5199669966122550110",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/evil-pumpkin.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/fire.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/fish.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Flying Witch",
    "customEmojiId": "5199639686603112376",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/flying-witch.png"
    }
  },
  {
    "name": "French Fries",
    "customEmojiId": "5199752910530973025",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/french-fries.png"
    }
  },
  {
    "name": "Geisha Fan",
    "customEmojiId": "5199432901107683017",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/geisha-fan.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/gem.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/griffon.png"
    }
  },
  {
    "name": "Grim Reaper",
    "customEmojiId": "5199657261609290637",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/grim-reaper.png"
    }
  },
  {
    "name": "Half Moon",
    "customEmojiId": "5199418019046001807",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/half-moon.png"
    }
  },
  {
    "name": "Haunted House",
    "customEmojiId": "5199572393055520845",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/haunted-house.png"
    }
  },
  {
    "name": "Heraldic Lily",
    "customEmojiId": "5199447267773286405",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/heraldic-lily.png"
    }
  },
  {
    "name": "Holy Grail",
    "customEmojiId": "5199865060717016269",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/holy-grail.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/horned-helm.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Lion of Babylon",
    "customEmojiId": "5199765593569398366",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/lion-of-babylon.png"
    }
  },
  {
    "name": "Magic Elixir",
    "customEmojiId": "5199465379650374635",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/magic-elixir.png"
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
      "png": "gifts/electricskull/assets/patterns/maple.png"
    }
  },
  {
    "name": "Nemean Lion",
    "customEmojiId": "5199957797650858913",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/nemean-lion.png"
    }
  },
  {
    "name": "Neptune",
    "customEmojiId": "5199805712858906090",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/neptune.png"
    }
  },
  {
    "name": "Origami",
    "customEmojiId": "5199778723284421527",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/origami.png"
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
      "png": "gifts/electricskull/assets/patterns/paper-crane.png"
    }
  },
  {
    "name": "Paw Print",
    "customEmojiId": "5199721767723108875",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/paw-print.png"
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
      "png": "gifts/electricskull/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Ramen",
    "customEmojiId": "5199591943746650619",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/ramen.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/shell.png"
    }
  },
  {
    "name": "Snail",
    "customEmojiId": "5199427729967062308",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/snail.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Telescope",
    "customEmojiId": "5199588391808698998",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/telescope.png"
    }
  },
  {
    "name": "Treats",
    "customEmojiId": "5199923330538311116",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/treats.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Twin Koi",
    "customEmojiId": "5199691170376093717",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/twin-koi.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Ushanka",
    "customEmojiId": "5202149927483900109",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/ushanka.png"
    }
  },
  {
    "name": "Viper",
    "customEmojiId": "5199937503930385823",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/viper.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Yin-Yang",
    "customEmojiId": "5199579720269730289",
    "rarityPermille": 5,
    "originalRarityPermille": 5,
    "rarity": 0.5,
    "originalRarity": 0.5,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/yin-yang.png"
    }
  },
  {
    "name": "Bloody Axe",
    "customEmojiId": "5199755874058406442",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/bloody-axe.png"
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
      "png": "gifts/electricskull/assets/patterns/candle.png"
    }
  },
  {
    "name": "Casket",
    "customEmojiId": "5199960104048297591",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/casket.png"
    }
  },
  {
    "name": "Cauldron",
    "customEmojiId": "5199831577151966735",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/cauldron.png"
    }
  },
  {
    "name": "Cow Skull",
    "customEmojiId": "5199674639046968689",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/cow-skull.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Dagger",
    "customEmojiId": "5199675966191864697",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/dagger.png"
    }
  },
  {
    "name": "Gravestone",
    "customEmojiId": "5199458662321521472",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/gravestone.png"
    }
  },
  {
    "name": "Hex Pot",
    "customEmojiId": "5199769617953756160",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/hex-pot.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Jack-O-Lantern",
    "customEmojiId": "5199711824873819920",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/jack-o-lantern.png"
    }
  },
  {
    "name": "Jaws",
    "customEmojiId": "5199489388517558658",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/jaws.png"
    }
  },
  {
    "name": "Jolly Roger",
    "customEmojiId": "5199466333133113018",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/jolly-roger.png"
    }
  },
  {
    "name": "Lollipop",
    "customEmojiId": "5199604863008277923",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/lollipop.png"
    }
  },
  {
    "name": "Magic Hat",
    "customEmojiId": "5199903041112803502",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/magic-hat.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/moon.png"
    }
  },
  {
    "name": "Mortar",
    "customEmojiId": "5199689576943227981",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/mortar.png"
    }
  },
  {
    "name": "Oculus",
    "customEmojiId": "5199618645558330282",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/oculus.png"
    }
  },
  {
    "name": "Old Scull",
    "customEmojiId": "5199747825289689945",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/old-scull.png"
    }
  },
  {
    "name": "Poison Drop",
    "customEmojiId": "5199690302792698006",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/poison-drop.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Severed Hand",
    "customEmojiId": "5199465194966780844",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/severed-hand.png"
    }
  },
  {
    "name": "Spellbook",
    "customEmojiId": "5199951127566647821",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/spellbook.png"
    }
  },
  {
    "name": "Spider",
    "customEmojiId": "5199675867407617007",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/spider.png"
    }
  },
  {
    "name": "Spooky Cat",
    "customEmojiId": "5199795890268706133",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/spooky-cat.png"
    }
  },
  {
    "name": "Vampire Bat",
    "customEmojiId": "5199512194793899794",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/vampire-bat.png"
    }
  },
  {
    "name": "Voodoo",
    "customEmojiId": "5201989252757355352",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/voodoo.png"
    }
  },
  {
    "name": "Wise Raven",
    "customEmojiId": "5199774827749083086",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/wise-raven.png"
    }
  },
  {
    "name": "Witch Hat",
    "customEmojiId": "5199493425786815353",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/witch-hat.png"
    }
  },
  {
    "name": "Zombie Hand",
    "customEmojiId": "5199725212286879512",
    "rarityPermille": 8,
    "originalRarityPermille": 8,
    "rarity": 0.8,
    "originalRarity": 0.8,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/zombie-hand.png"
    }
  },
  {
    "name": "Anubis",
    "customEmojiId": "5199800163761162785",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/anubis.png"
    }
  },
  {
    "name": "Arcane Mirror",
    "customEmojiId": "5199560770874018874",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/arcane-mirror.png"
    }
  },
  {
    "name": "Autumn Leaves",
    "customEmojiId": "5199868191748166568",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/autumn-leaves.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Black Cat",
    "customEmojiId": "5199686110904618188",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/black-cat.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Coffin",
    "customEmojiId": "5199800696337107918",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/coffin.png"
    }
  },
  {
    "name": "Creepy Eye",
    "customEmojiId": "5199885066674670167",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/creepy-eye.png"
    }
  },
  {
    "name": "Crescent",
    "customEmojiId": "5199777439089200573",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/crescent.png"
    }
  },
  {
    "name": "Crow",
    "customEmojiId": "5199426733534641259",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/crow.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Evil Dragon",
    "customEmojiId": "5199535271653181454",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/evil-dragon.png"
    }
  },
  {
    "name": "Eyeball",
    "customEmojiId": "5199500791655727782",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/eyeball.png"
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
      "png": "gifts/electricskull/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Happy Smile",
    "customEmojiId": "5199771185616816222",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/happy-smile.png"
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
      "png": "gifts/electricskull/assets/patterns/human-scull.png"
    }
  },
  {
    "name": "Magic Vial",
    "customEmojiId": "5199608535205315973",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/magic-vial.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Nice Ghost",
    "customEmojiId": "5199814161059579213",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/nice-ghost.png"
    }
  },
  {
    "name": "Night Bats",
    "customEmojiId": "5199725388380543708",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/night-bats.png"
    }
  },
  {
    "name": "Old Candle",
    "customEmojiId": "5199902654565747851",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/old-candle.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/potion.png"
    }
  },
  {
    "name": "Pumpkin Coach",
    "customEmojiId": "5199890607182480707",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/pumpkin-coach.png"
    }
  },
  {
    "name": "Scarecrow",
    "customEmojiId": "5199734102869184064",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/scarecrow.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/skull.png"
    }
  },
  {
    "name": "Tarot Cards",
    "customEmojiId": "5199684994213119796",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/tarot-cards.png"
    }
  },
  {
    "name": "Tombstone",
    "customEmojiId": "5199581511271091251",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/tombstone.png"
    }
  },
  {
    "name": "Voodoo Doll",
    "customEmojiId": "5199629937027353893",
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/voodoo-doll.png"
    }
  },
  {
    "name": "Witch’s Hat",
    "customEmojiId": null,
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1,
    "assets": {
      "png": "gifts/electricskull/assets/patterns/witch-s-hat.png"
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "originalRarity": 1
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
    "rarityPermille": 10,
    "originalRarityPermille": 10,
    "rarity": 1,
    "originalRarity": 1
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 12,
    "originalRarityPermille": 12,
    "rarity": 1.2,
    "originalRarity": 1.2
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
    "rarityPermille": 15,
    "originalRarityPermille": 15,
    "rarity": 1.5,
    "originalRarity": 1.5
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
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "electricskull", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
