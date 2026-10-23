import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Portal",
    "customEmojiId": "5269761624780076041",
    "assets": {
      "svg": "gifts/petsnake/assets/models/portal.svg",
      "tgs": "gifts/petsnake/assets/models/portal.tgs"
    }
  },
  {
    "name": "Banana",
    "customEmojiId": "5269468970003497122",
    "assets": {
      "svg": "gifts/petsnake/assets/models/banana.svg",
      "tgs": "gifts/petsnake/assets/models/banana.tgs"
    }
  },
  {
    "name": "Spooky",
    "customEmojiId": "5267305994408458049",
    "assets": {
      "svg": "gifts/petsnake/assets/models/spooky.svg",
      "tgs": "gifts/petsnake/assets/models/spooky.tgs"
    }
  },
  {
    "name": "Sherlock",
    "customEmojiId": "5269518881818437964",
    "assets": {
      "svg": "gifts/petsnake/assets/models/sherlock.svg",
      "tgs": "gifts/petsnake/assets/models/sherlock.tgs"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5269350982956909739",
    "assets": {
      "svg": "gifts/petsnake/assets/models/sunflower.svg",
      "tgs": "gifts/petsnake/assets/models/sunflower.tgs"
    }
  },
  {
    "name": "Dragon",
    "customEmojiId": "5267133607306099898",
    "assets": {
      "svg": "gifts/petsnake/assets/models/dragon.svg",
      "tgs": "gifts/petsnake/assets/models/dragon.tgs"
    }
  },
  {
    "name": "Autumn",
    "customEmojiId": "5267480327131002682",
    "assets": {
      "svg": "gifts/petsnake/assets/models/autumn.svg",
      "tgs": "gifts/petsnake/assets/models/autumn.tgs"
    }
  },
  {
    "name": "Confused",
    "customEmojiId": "5269584822451333983",
    "assets": {
      "svg": "gifts/petsnake/assets/models/confused.svg",
      "tgs": "gifts/petsnake/assets/models/confused.tgs"
    }
  },
  {
    "name": "Dobby",
    "customEmojiId": "5269573750025648641",
    "assets": {
      "svg": "gifts/petsnake/assets/models/dobby.svg",
      "tgs": "gifts/petsnake/assets/models/dobby.tgs"
    }
  },
  {
    "name": "Dracula",
    "customEmojiId": "5269439192995230183",
    "assets": {
      "svg": "gifts/petsnake/assets/models/dracula.svg",
      "tgs": "gifts/petsnake/assets/models/dracula.tgs"
    }
  },
  {
    "name": "Flushed Away",
    "customEmojiId": "5269760276160346286",
    "assets": {
      "svg": "gifts/petsnake/assets/models/flushed-away.svg",
      "tgs": "gifts/petsnake/assets/models/flushed-away.tgs"
    }
  },
  {
    "name": "Goofy Twins",
    "customEmojiId": "5267222465884484435",
    "assets": {
      "svg": "gifts/petsnake/assets/models/goofy-twins.svg",
      "tgs": "gifts/petsnake/assets/models/goofy-twins.tgs"
    }
  },
  {
    "name": "Party Popper",
    "customEmojiId": "5269357064630600508",
    "assets": {
      "svg": "gifts/petsnake/assets/models/party-popper.svg",
      "tgs": "gifts/petsnake/assets/models/party-popper.tgs"
    }
  },
  {
    "name": "Rainy Day",
    "customEmojiId": "5269628497973768870",
    "assets": {
      "svg": "gifts/petsnake/assets/models/rainy-day.svg",
      "tgs": "gifts/petsnake/assets/models/rainy-day.tgs"
    }
  },
  {
    "name": "Soap Bubble",
    "customEmojiId": "5269336994248420824",
    "assets": {
      "svg": "gifts/petsnake/assets/models/soap-bubble.svg",
      "tgs": "gifts/petsnake/assets/models/soap-bubble.tgs"
    }
  },
  {
    "name": "Spicy Wings",
    "customEmojiId": "5267050168976440614",
    "assets": {
      "svg": "gifts/petsnake/assets/models/spicy-wings.svg",
      "tgs": "gifts/petsnake/assets/models/spicy-wings.tgs"
    }
  },
  {
    "name": "The Deceiver",
    "customEmojiId": "5269506254614592282",
    "assets": {
      "svg": "gifts/petsnake/assets/models/the-deceiver.svg",
      "tgs": "gifts/petsnake/assets/models/the-deceiver.tgs"
    }
  },
  {
    "name": "Yaaaaaay!",
    "customEmojiId": "5267417431629923096",
    "assets": {
      "svg": "gifts/petsnake/assets/models/yaaaaaay.svg",
      "tgs": "gifts/petsnake/assets/models/yaaaaaay.tgs"
    }
  },
  {
    "name": "Zombie",
    "customEmojiId": "5267401651920073916",
    "assets": {
      "svg": "gifts/petsnake/assets/models/zombie.svg",
      "tgs": "gifts/petsnake/assets/models/zombie.tgs"
    }
  },
  {
    "name": "Beer Mamba",
    "customEmojiId": "5266992436026046107",
    "assets": {
      "svg": "gifts/petsnake/assets/models/beer-mamba.svg",
      "tgs": "gifts/petsnake/assets/models/beer-mamba.tgs"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5269311864394776964",
    "assets": {
      "svg": "gifts/petsnake/assets/models/champagne.svg",
      "tgs": "gifts/petsnake/assets/models/champagne.tgs"
    }
  },
  {
    "name": "Coffee!",
    "customEmojiId": "5269248870109442695",
    "assets": {
      "svg": "gifts/petsnake/assets/models/coffee.svg",
      "tgs": "gifts/petsnake/assets/models/coffee.tgs"
    }
  },
  {
    "name": "Fast Food",
    "customEmojiId": "5267219837364499268",
    "assets": {
      "svg": "gifts/petsnake/assets/models/fast-food.svg",
      "tgs": "gifts/petsnake/assets/models/fast-food.tgs"
    }
  },
  {
    "name": "Hisssmas",
    "customEmojiId": "5269746558034802617",
    "assets": {
      "svg": "gifts/petsnake/assets/models/hisssmas.svg",
      "tgs": "gifts/petsnake/assets/models/hisssmas.tgs"
    }
  },
  {
    "name": "Nimbus",
    "customEmojiId": "5269752742787710107",
    "assets": {
      "svg": "gifts/petsnake/assets/models/nimbus.svg",
      "tgs": "gifts/petsnake/assets/models/nimbus.tgs"
    }
  },
  {
    "name": "Snakey Mouse",
    "customEmojiId": "5269564391291907743",
    "assets": {
      "svg": "gifts/petsnake/assets/models/snakey-mouse.svg",
      "tgs": "gifts/petsnake/assets/models/snakey-mouse.tgs"
    }
  },
  {
    "name": "Sweet Dreams",
    "customEmojiId": "5269558644625671476",
    "assets": {
      "svg": "gifts/petsnake/assets/models/sweet-dreams.svg",
      "tgs": "gifts/petsnake/assets/models/sweet-dreams.tgs"
    }
  },
  {
    "name": "Deadline",
    "customEmojiId": "5269584040767286461",
    "assets": {
      "svg": "gifts/petsnake/assets/models/deadline.svg",
      "tgs": "gifts/petsnake/assets/models/deadline.tgs"
    }
  },
  {
    "name": "Domination",
    "customEmojiId": "5267109375100616655",
    "assets": {
      "svg": "gifts/petsnake/assets/models/domination.svg",
      "tgs": "gifts/petsnake/assets/models/domination.tgs"
    }
  },
  {
    "name": "Hooded",
    "customEmojiId": "5269424237919106280",
    "assets": {
      "svg": "gifts/petsnake/assets/models/hooded.svg",
      "tgs": "gifts/petsnake/assets/models/hooded.tgs"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5269336680715808991",
    "assets": {
      "svg": "gifts/petsnake/assets/models/mistletoe.svg",
      "tgs": "gifts/petsnake/assets/models/mistletoe.tgs"
    }
  },
  {
    "name": "Water Snake",
    "customEmojiId": "5269445223129314822",
    "assets": {
      "svg": "gifts/petsnake/assets/models/water-snake.svg",
      "tgs": "gifts/petsnake/assets/models/water-snake.tgs"
    }
  },
  {
    "name": "Cherry Bomb",
    "customEmojiId": "5269244862904957346",
    "assets": {
      "svg": "gifts/petsnake/assets/models/cherry-bomb.svg",
      "tgs": "gifts/petsnake/assets/models/cherry-bomb.tgs"
    }
  },
  {
    "name": "Crayon",
    "customEmojiId": "5269716171141180439",
    "assets": {
      "svg": "gifts/petsnake/assets/models/crayon.svg",
      "tgs": "gifts/petsnake/assets/models/crayon.tgs"
    }
  },
  {
    "name": "Durov’s Cap",
    "customEmojiId": "5269571430743307262",
    "assets": {
      "svg": "gifts/petsnake/assets/models/durov-s-cap.svg",
      "tgs": "gifts/petsnake/assets/models/durov-s-cap.tgs"
    }
  },
  {
    "name": "Neko-San",
    "customEmojiId": "5269592205500122642",
    "assets": {
      "svg": "gifts/petsnake/assets/models/neko-san.svg",
      "tgs": "gifts/petsnake/assets/models/neko-san.tgs"
    }
  },
  {
    "name": "Poopsicle",
    "customEmojiId": "5269484285856871791",
    "assets": {
      "svg": "gifts/petsnake/assets/models/poopsicle.svg",
      "tgs": "gifts/petsnake/assets/models/poopsicle.tgs"
    }
  },
  {
    "name": "Pure Gold",
    "customEmojiId": "5267154377767944613",
    "assets": {
      "svg": "gifts/petsnake/assets/models/pure-gold.svg",
      "tgs": "gifts/petsnake/assets/models/pure-gold.tgs"
    }
  },
  {
    "name": "Libertarian",
    "customEmojiId": "5269453478056452744",
    "assets": {
      "svg": "gifts/petsnake/assets/models/libertarian.svg",
      "tgs": "gifts/petsnake/assets/models/libertarian.tgs"
    }
  },
  {
    "name": "Black Mamba",
    "customEmojiId": "5269661814035081237",
    "assets": {
      "svg": "gifts/petsnake/assets/models/black-mamba.svg",
      "tgs": "gifts/petsnake/assets/models/black-mamba.tgs"
    }
  },
  {
    "name": "Dalmatian",
    "customEmojiId": "5267091864518953473",
    "assets": {
      "svg": "gifts/petsnake/assets/models/dalmatian.svg",
      "tgs": "gifts/petsnake/assets/models/dalmatian.tgs"
    }
  },
  {
    "name": "Froggy",
    "customEmojiId": "5267479670001008916",
    "assets": {
      "svg": "gifts/petsnake/assets/models/froggy.svg",
      "tgs": "gifts/petsnake/assets/models/froggy.tgs"
    }
  },
  {
    "name": "Jungle",
    "customEmojiId": "5267148570972157608",
    "assets": {
      "svg": "gifts/petsnake/assets/models/jungle.svg",
      "tgs": "gifts/petsnake/assets/models/jungle.tgs"
    }
  },
  {
    "name": "King Cobra",
    "customEmojiId": "5269317112844809654",
    "assets": {
      "svg": "gifts/petsnake/assets/models/king-cobra.svg",
      "tgs": "gifts/petsnake/assets/models/king-cobra.tgs"
    }
  },
  {
    "name": "Luminous",
    "customEmojiId": "5267076690399493097",
    "assets": {
      "svg": "gifts/petsnake/assets/models/luminous.svg",
      "tgs": "gifts/petsnake/assets/models/luminous.tgs"
    }
  },
  {
    "name": "Pink Bunny",
    "customEmojiId": "5269286841915303890",
    "assets": {
      "svg": "gifts/petsnake/assets/models/pink-bunny.svg",
      "tgs": "gifts/petsnake/assets/models/pink-bunny.tgs"
    }
  },
  {
    "name": "Pink Leo",
    "customEmojiId": "5267173902689271810",
    "assets": {
      "svg": "gifts/petsnake/assets/models/pink-leo.svg",
      "tgs": "gifts/petsnake/assets/models/pink-leo.tgs"
    }
  },
  {
    "name": "Rainbow",
    "customEmojiId": "5269341375115063034",
    "assets": {
      "svg": "gifts/petsnake/assets/models/rainbow.svg",
      "tgs": "gifts/petsnake/assets/models/rainbow.tgs"
    }
  },
  {
    "name": "Sketchy",
    "customEmojiId": "5267469959079953642",
    "assets": {
      "svg": "gifts/petsnake/assets/models/sketchy.svg",
      "tgs": "gifts/petsnake/assets/models/sketchy.tgs"
    }
  },
  {
    "name": "Wiggly",
    "customEmojiId": "5269639527449783795",
    "assets": {
      "svg": "gifts/petsnake/assets/models/wiggly.svg",
      "tgs": "gifts/petsnake/assets/models/wiggly.tgs"
    }
  },
  {
    "name": "Albino",
    "customEmojiId": "5269238970209826547",
    "assets": {
      "svg": "gifts/petsnake/assets/models/albino.svg",
      "tgs": "gifts/petsnake/assets/models/albino.tgs"
    }
  },
  {
    "name": "Santa’s Helper",
    "customEmojiId": "5269455075784293557",
    "assets": {
      "svg": "gifts/petsnake/assets/models/santa-s-helper.svg",
      "tgs": "gifts/petsnake/assets/models/santa-s-helper.tgs"
    }
  },
  {
    "name": "Tempest",
    "customEmojiId": "5269513560353961343",
    "assets": {
      "svg": "gifts/petsnake/assets/models/tempest.svg",
      "tgs": "gifts/petsnake/assets/models/tempest.tgs"
    }
  },
  {
    "name": "Venomous",
    "customEmojiId": "5267497962266723124",
    "assets": {
      "svg": "gifts/petsnake/assets/models/venomous.svg",
      "tgs": "gifts/petsnake/assets/models/venomous.tgs"
    }
  },
  {
    "name": "Cold-Blooded",
    "customEmojiId": "5267030059939559807",
    "assets": {
      "svg": "gifts/petsnake/assets/models/cold-blooded.svg",
      "tgs": "gifts/petsnake/assets/models/cold-blooded.tgs"
    }
  },
  {
    "name": "Lava Viper",
    "customEmojiId": "5267514003969570732",
    "assets": {
      "svg": "gifts/petsnake/assets/models/lava-viper.svg",
      "tgs": "gifts/petsnake/assets/models/lava-viper.tgs"
    }
  },
  {
    "name": "Lollipop",
    "customEmojiId": "5267046629923390395",
    "assets": {
      "svg": "gifts/petsnake/assets/models/lollipop.svg",
      "tgs": "gifts/petsnake/assets/models/lollipop.tgs"
    }
  },
  {
    "name": "Mojito",
    "customEmojiId": "5267373111862392282",
    "assets": {
      "svg": "gifts/petsnake/assets/models/mojito.svg",
      "tgs": "gifts/petsnake/assets/models/mojito.tgs"
    }
  },
  {
    "name": "Rainforest",
    "customEmojiId": "5269751110700136576",
    "assets": {
      "svg": "gifts/petsnake/assets/models/rainforest.svg",
      "tgs": "gifts/petsnake/assets/models/rainforest.tgs"
    }
  },
  {
    "name": "Sour Bites",
    "customEmojiId": "5269637491635285075",
    "assets": {
      "svg": "gifts/petsnake/assets/models/sour-bites.svg",
      "tgs": "gifts/petsnake/assets/models/sour-bites.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Winter House",
    "customEmojiId": "5199701675866098449",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/winter-house.png"
    }
  },
  {
    "name": "Tamagotchi",
    "customEmojiId": "5199853902391968563",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/tamagotchi.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Snowman",
    "customEmojiId": "5199936215440198936",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/snowman.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Double Axe",
    "customEmojiId": "5199414905194712818",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/double-axe.png"
    }
  },
  {
    "name": "Nemes",
    "customEmojiId": "5199898990958646583",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/nemes.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Sword Fight",
    "customEmojiId": "5202054218432674026",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/sword-fight.png"
    }
  },
  {
    "name": "Dessert",
    "customEmojiId": "5199456540607676981",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/dessert.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Heater Shield",
    "customEmojiId": "5199906721899780489",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/heater-shield.png"
    }
  },
  {
    "name": "Pirate Hat",
    "customEmojiId": "5199666663292700153",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/pirate-hat.png"
    }
  },
  {
    "name": "Pirate Scull",
    "customEmojiId": "5199610403516089508",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/pirate-scull.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Beer",
    "customEmojiId": "5199920405665583833",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/beer.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/shell.png"
    }
  },
  {
    "name": "Winged Helmet",
    "customEmojiId": "5199518650129746938",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/winged-helmet.png"
    }
  },
  {
    "name": "Shortsword",
    "customEmojiId": "5199699219144807756",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/shortsword.png"
    }
  },
  {
    "name": "Rudolph",
    "customEmojiId": "5199540056246747378",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/rudolph.png"
    }
  },
  {
    "name": "Meat Leg",
    "customEmojiId": "5199442135287366557",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/meat-leg.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Snail",
    "customEmojiId": "5199427729967062308",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/snail.png"
    }
  },
  {
    "name": "Jewel",
    "customEmojiId": "5199798166601371927",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/jewel.png"
    }
  },
  {
    "name": "Jingle Bell",
    "customEmojiId": "5199776322397706499",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/jingle-bell.png"
    }
  },
  {
    "name": "Doghouse",
    "customEmojiId": "5199765365936130864",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/doghouse.png"
    }
  },
  {
    "name": "Party Hat",
    "customEmojiId": "5199420192299454140",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/party-hat.png"
    }
  },
  {
    "name": "Silver Ibis",
    "customEmojiId": "5199513981500297130",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/silver-ibis.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/candy.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Breeze",
    "customEmojiId": "5199658631703859803",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/breeze.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Santa Hat",
    "customEmojiId": "5199534056177437209",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/santa-hat.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/sparks.png"
    }
  },
  {
    "name": "New Year’s Eve",
    "customEmojiId": null,
    "assets": {
      "png": "gifts/petsnake/assets/patterns/new-year-s-eve.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Monarch",
    "customEmojiId": "5199967568701462550",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/monarch.png"
    }
  },
  {
    "name": "Keffiyeh",
    "customEmojiId": "5199444398735132234",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/keffiyeh.png"
    }
  },
  {
    "name": "Easter Bunny",
    "customEmojiId": "5199627626334947886",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/easter-bunny.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Banana",
    "customEmojiId": "5199719637419326222",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/banana.png"
    }
  },
  {
    "name": "Griffon",
    "customEmojiId": "5199733754976831104",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/griffon.png"
    }
  },
  {
    "name": "Crystal",
    "customEmojiId": "5199505833947336625",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/crystal.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Worker Ant",
    "customEmojiId": "5199496204630661208",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/worker-ant.png"
    }
  },
  {
    "name": "Doctor Hat",
    "customEmojiId": "5199584148381011556",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/doctor-hat.png"
    }
  },
  {
    "name": "Steampunk Hat",
    "customEmojiId": "5199923729970268578",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/steampunk-hat.png"
    }
  },
  {
    "name": "Wontons",
    "customEmojiId": "5199961989538942623",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/wontons.png"
    }
  },
  {
    "name": "Mittens",
    "customEmojiId": "5199968565133871696",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/mittens.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Bobble Hat",
    "customEmojiId": "5199759262787603566",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/bobble-hat.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Hot Drink",
    "customEmojiId": "5199502050081148019",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/hot-drink.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/shield.png"
    }
  },
  {
    "name": "Mistletoe",
    "customEmojiId": "5199936279864708293",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/mistletoe.png"
    }
  },
  {
    "name": "Arcane Mirror",
    "customEmojiId": "5199560770874018874",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/arcane-mirror.png"
    }
  },
  {
    "name": "Porrige",
    "customEmojiId": "5199425857361315324",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/porrige.png"
    }
  },
  {
    "name": "Trickster Fox",
    "customEmojiId": "5199707800489464034",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/trickster-fox.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Snowflake",
    "customEmojiId": "5199610674099031923",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/snowflake.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Peaked Cap",
    "customEmojiId": "5199944066640415730",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/peaked-cap.png"
    }
  },
  {
    "name": "Peace Dove",
    "customEmojiId": "5199441345013386136",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/peace-dove.png"
    }
  },
  {
    "name": "Teru Bōzu",
    "customEmojiId": "5199948172629150385",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/teru-bozu.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "Ornament",
    "customEmojiId": "5199660508604566307",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/ornament.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/sun.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/crown.png"
    }
  },
  {
    "name": "Tsunami",
    "customEmojiId": "5199500714346319781",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/tsunami.png"
    }
  },
  {
    "name": "Cookie",
    "customEmojiId": "5199706417509992965",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/cookie.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Ice Skates",
    "customEmojiId": "5199870438016060797",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/ice-skates.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Horned Helm",
    "customEmojiId": "5199925937583456568",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/horned-helm.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/mask.png"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5199899240066749481",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/leprechaun.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/chili.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Khinkali",
    "customEmojiId": "5199559430844221150",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/khinkali.png"
    }
  },
  {
    "name": "Mustang",
    "customEmojiId": "5199436757988311690",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/mustang.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/pear.png"
    }
  },
  {
    "name": "Legionary",
    "customEmojiId": "5199428202413461386",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/legionary.png"
    }
  },
  {
    "name": "Horseshoe",
    "customEmojiId": "5199843530045950060",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/horseshoe.png"
    }
  },
  {
    "name": "Christmas Tree",
    "customEmojiId": "5201690116875126303",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/christmas-tree.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/candle.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/cap.png"
    }
  },
  {
    "name": "Bowtie",
    "customEmojiId": "5199828179832835125",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/bowtie.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/lily.png"
    }
  },
  {
    "name": "Greek Sun",
    "customEmojiId": "5199681906131637748",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/greek-sun.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/crab.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Tiki Mask",
    "customEmojiId": "5199412916624854882",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/tiki-mask.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/boat.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/chest.png"
    }
  },
  {
    "name": "Crusader Cross",
    "customEmojiId": "5199468566516105305",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/crusader-cross.png"
    }
  },
  {
    "name": "Alert Serpent",
    "customEmojiId": "5199488392085146030",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/alert-serpent.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Chef Hat",
    "customEmojiId": "5199467063277553530",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/chef-hat.png"
    }
  },
  {
    "name": "Stocking",
    "customEmojiId": "5199503016448790503",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/stocking.png"
    }
  },
  {
    "name": "Cricket Helmet",
    "customEmojiId": "5199841202173676889",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/cricket-helmet.png"
    }
  },
  {
    "name": "Snow Angel",
    "customEmojiId": "5199879135324836933",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/snow-angel.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/palette.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/drug.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/hippo.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/apple.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/star.png"
    }
  },
  {
    "name": "Bonsai",
    "customEmojiId": "5199553400710137770",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/bonsai.png"
    }
  },
  {
    "name": "Festive Wreath",
    "customEmojiId": "5199830851302495542",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/festive-wreath.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Fireworks",
    "customEmojiId": "5199661414842666249",
    "assets": {
      "png": "gifts/petsnake/assets/patterns/fireworks.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Cyberpunk",
    "customEmojiId": "5375292097978986361",
    "hex": {
      "centerColor": "#858ff3",
      "edgeColor": "#865fd3",
      "patternColor": "#4318a6",
      "textColor": "#e0d9ff"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "petsnake", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
