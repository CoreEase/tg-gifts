import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';

export const models = [
  {
    "name": "Thumbs Up",
    "customEmojiId": "5246852930648169867",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/thumbs-up.svg",
      "tgs": "gifts/jesterhat/assets/models/thumbs-up.tgs"
    }
  },
  {
    "name": "Jester Box",
    "customEmojiId": "5247249253050378193",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/jester-box.svg",
      "tgs": "gifts/jesterhat/assets/models/jester-box.tgs"
    }
  },
  {
    "name": "Pepe Hop",
    "customEmojiId": "5247198636860795664",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/pepe-hop.svg",
      "tgs": "gifts/jesterhat/assets/models/pepe-hop.tgs"
    }
  },
  {
    "name": "Hellscape",
    "customEmojiId": "5244835721948193841",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/hellscape.svg",
      "tgs": "gifts/jesterhat/assets/models/hellscape.tgs"
    }
  },
  {
    "name": "Mind Blown",
    "customEmojiId": "5247042265691481196",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/mind-blown.svg",
      "tgs": "gifts/jesterhat/assets/models/mind-blown.tgs"
    }
  },
  {
    "name": "Meowscarade",
    "customEmojiId": "5244528996858752166",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/meowscarade.svg",
      "tgs": "gifts/jesterhat/assets/models/meowscarade.tgs"
    }
  },
  {
    "name": "Confetti",
    "customEmojiId": "5246701558820793535",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/confetti.svg",
      "tgs": "gifts/jesterhat/assets/models/confetti.tgs"
    }
  },
  {
    "name": "Wanna Play?",
    "customEmojiId": "5246775621236842036",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/wanna-play.svg",
      "tgs": "gifts/jesterhat/assets/models/wanna-play.tgs"
    }
  },
  {
    "name": "Holidays",
    "customEmojiId": "5246880878000365134",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/holidays.svg",
      "tgs": "gifts/jesterhat/assets/models/holidays.tgs"
    }
  },
  {
    "name": "Flirty",
    "customEmojiId": "5247094282040399016",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/flirty.svg",
      "tgs": "gifts/jesterhat/assets/models/flirty.tgs"
    }
  },
  {
    "name": "Evil Eye",
    "customEmojiId": "5246818510780261780",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/evil-eye.svg",
      "tgs": "gifts/jesterhat/assets/models/evil-eye.tgs"
    }
  },
  {
    "name": "Comeback",
    "customEmojiId": "5244747039463466531",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/comeback.svg",
      "tgs": "gifts/jesterhat/assets/models/comeback.tgs"
    }
  },
  {
    "name": "Harley-Bee",
    "customEmojiId": "5247012815100732188",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/harley-bee.svg",
      "tgs": "gifts/jesterhat/assets/models/harley-bee.tgs"
    }
  },
  {
    "name": "Witch’s Flame",
    "customEmojiId": "5244715565943124248",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/witch-s-flame.svg",
      "tgs": "gifts/jesterhat/assets/models/witch-s-flame.tgs"
    }
  },
  {
    "name": "Hellfire",
    "customEmojiId": "5244483092248291693",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/hellfire.svg",
      "tgs": "gifts/jesterhat/assets/models/hellfire.tgs"
    }
  },
  {
    "name": "Aquarium",
    "customEmojiId": "5246769917520275951",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/aquarium.svg",
      "tgs": "gifts/jesterhat/assets/models/aquarium.tgs"
    }
  },
  {
    "name": "Take It Off",
    "customEmojiId": "5244454311672440288",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/take-it-off.svg",
      "tgs": "gifts/jesterhat/assets/models/take-it-off.tgs"
    }
  },
  {
    "name": "Leprechaun",
    "customEmojiId": "5244655629674505838",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/leprechaun.svg",
      "tgs": "gifts/jesterhat/assets/models/leprechaun.tgs"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5246786921295797124",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/ghost.svg",
      "tgs": "gifts/jesterhat/assets/models/ghost.tgs"
    }
  },
  {
    "name": "Beholder",
    "customEmojiId": "5244969802237240191",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/beholder.svg",
      "tgs": "gifts/jesterhat/assets/models/beholder.tgs"
    }
  },
  {
    "name": "Mystery Mask",
    "customEmojiId": "5246843017863653586",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/mystery-mask.svg",
      "tgs": "gifts/jesterhat/assets/models/mystery-mask.tgs"
    }
  },
  {
    "name": "Fire Breather",
    "customEmojiId": "5246835956937416499",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/fire-breather.svg",
      "tgs": "gifts/jesterhat/assets/models/fire-breather.tgs"
    }
  },
  {
    "name": "Сourt Jester",
    "customEmojiId": "5247031309229909401",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/ourt-jester.svg",
      "tgs": "gifts/jesterhat/assets/models/ourt-jester.tgs"
    }
  },
  {
    "name": "Honk!",
    "customEmojiId": "5247147960541670292",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/honk.svg",
      "tgs": "gifts/jesterhat/assets/models/honk.tgs"
    }
  },
  {
    "name": "Leopard",
    "customEmojiId": "5246856456816320624",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/leopard.svg",
      "tgs": "gifts/jesterhat/assets/models/leopard.tgs"
    }
  },
  {
    "name": "Kitty Bells",
    "customEmojiId": "5246739582166261755",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/kitty-bells.svg",
      "tgs": "gifts/jesterhat/assets/models/kitty-bells.tgs"
    }
  },
  {
    "name": "Green Tassels",
    "customEmojiId": "5244864257710911312",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/green-tassels.svg",
      "tgs": "gifts/jesterhat/assets/models/green-tassels.tgs"
    }
  },
  {
    "name": "Star Kissed",
    "customEmojiId": "5244800228338460079",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/star-kissed.svg",
      "tgs": "gifts/jesterhat/assets/models/star-kissed.tgs"
    }
  },
  {
    "name": "Heartwarming",
    "customEmojiId": "5247128701908310812",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/heartwarming.svg",
      "tgs": "gifts/jesterhat/assets/models/heartwarming.tgs"
    }
  },
  {
    "name": "Golden Boy",
    "customEmojiId": "5246977970031060206",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/golden-boy.svg",
      "tgs": "gifts/jesterhat/assets/models/golden-boy.tgs"
    }
  },
  {
    "name": "Fable",
    "customEmojiId": "5244976334882499114",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/fable.svg",
      "tgs": "gifts/jesterhat/assets/models/fable.tgs"
    }
  },
  {
    "name": "Twinkle Boom",
    "customEmojiId": "5244910467264048389",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/twinkle-boom.svg",
      "tgs": "gifts/jesterhat/assets/models/twinkle-boom.tgs"
    }
  },
  {
    "name": "Lovely Twist",
    "customEmojiId": "5246810290212855786",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/lovely-twist.svg",
      "tgs": "gifts/jesterhat/assets/models/lovely-twist.tgs"
    }
  },
  {
    "name": "Sparkler",
    "customEmojiId": "5246945972524703668",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/sparkler.svg",
      "tgs": "gifts/jesterhat/assets/models/sparkler.tgs"
    }
  },
  {
    "name": "Great Again",
    "customEmojiId": "5247178278715810088",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/great-again.svg",
      "tgs": "gifts/jesterhat/assets/models/great-again.tgs"
    }
  },
  {
    "name": "Neon White",
    "customEmojiId": "5246722054404726623",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/neon-white.svg",
      "tgs": "gifts/jesterhat/assets/models/neon-white.tgs"
    }
  },
  {
    "name": "Spring Meadow",
    "customEmojiId": "5247011479365902587",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/spring-meadow.svg",
      "tgs": "gifts/jesterhat/assets/models/spring-meadow.tgs"
    }
  },
  {
    "name": "Gamer Clown",
    "customEmojiId": "5246864114743008069",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/gamer-clown.svg",
      "tgs": "gifts/jesterhat/assets/models/gamer-clown.tgs"
    }
  },
  {
    "name": "King of Jokes",
    "customEmojiId": "5244753164086830847",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/king-of-jokes.svg",
      "tgs": "gifts/jesterhat/assets/models/king-of-jokes.tgs"
    }
  },
  {
    "name": "Xmas Prank",
    "customEmojiId": "5246999023960742699",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/xmas-prank.svg",
      "tgs": "gifts/jesterhat/assets/models/xmas-prank.tgs"
    }
  },
  {
    "name": "Magic Trick",
    "customEmojiId": "5246767877410808299",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/magic-trick.svg",
      "tgs": "gifts/jesterhat/assets/models/magic-trick.tgs"
    }
  },
  {
    "name": "Blue Jaguar",
    "customEmojiId": "5244589611732199684",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/blue-jaguar.svg",
      "tgs": "gifts/jesterhat/assets/models/blue-jaguar.tgs"
    }
  },
  {
    "name": "Ripe Banana",
    "customEmojiId": "5246937421244819127",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/ripe-banana.svg",
      "tgs": "gifts/jesterhat/assets/models/ripe-banana.tgs"
    }
  },
  {
    "name": "Neon Night",
    "customEmojiId": "5247224264930645417",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/neon-night.svg",
      "tgs": "gifts/jesterhat/assets/models/neon-night.tgs"
    }
  },
  {
    "name": "Dotted Joke",
    "customEmojiId": "5244571504150079494",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/dotted-joke.svg",
      "tgs": "gifts/jesterhat/assets/models/dotted-joke.tgs"
    }
  },
  {
    "name": "Phosphorus",
    "customEmojiId": "5244504120408172724",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/phosphorus.svg",
      "tgs": "gifts/jesterhat/assets/models/phosphorus.tgs"
    }
  },
  {
    "name": "Night Bounce",
    "customEmojiId": "5247168606449459029",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/night-bounce.svg",
      "tgs": "gifts/jesterhat/assets/models/night-bounce.tgs"
    }
  },
  {
    "name": "Comedian",
    "customEmojiId": "5244678354346469838",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/comedian.svg",
      "tgs": "gifts/jesterhat/assets/models/comedian.tgs"
    }
  },
  {
    "name": "Pinky Circus",
    "customEmojiId": "5246829231018630826",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/pinky-circus.svg",
      "tgs": "gifts/jesterhat/assets/models/pinky-circus.tgs"
    }
  },
  {
    "name": "Lemon Spin",
    "customEmojiId": "5244540726414438706",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/lemon-spin.svg",
      "tgs": "gifts/jesterhat/assets/models/lemon-spin.tgs"
    }
  },
  {
    "name": "Twinkling Stars",
    "customEmojiId": "5247216018593438953",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/twinkling-stars.svg",
      "tgs": "gifts/jesterhat/assets/models/twinkling-stars.tgs"
    }
  },
  {
    "name": "Rainbow Joy",
    "customEmojiId": "5244699708923866047",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/rainbow-joy.svg",
      "tgs": "gifts/jesterhat/assets/models/rainbow-joy.tgs"
    }
  },
  {
    "name": "Dashed Prank",
    "customEmojiId": "5244830997484173133",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/dashed-prank.svg",
      "tgs": "gifts/jesterhat/assets/models/dashed-prank.tgs"
    }
  },
  {
    "name": "Pop Art",
    "customEmojiId": "5246907012876363448",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/pop-art.svg",
      "tgs": "gifts/jesterhat/assets/models/pop-art.tgs"
    }
  },
  {
    "name": "Funny Mood",
    "customEmojiId": "5244502432486025230",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/funny-mood.svg",
      "tgs": "gifts/jesterhat/assets/models/funny-mood.tgs"
    }
  },
  {
    "name": "Blue Buffoon",
    "customEmojiId": "5244961263842256017",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/blue-buffoon.svg",
      "tgs": "gifts/jesterhat/assets/models/blue-buffoon.tgs"
    }
  },
  {
    "name": "Froggy",
    "customEmojiId": "5244907744254781861",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/froggy.svg",
      "tgs": "gifts/jesterhat/assets/models/froggy.tgs"
    }
  },
  {
    "name": "Carnival",
    "customEmojiId": "5244859541836818895",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/carnival.svg",
      "tgs": "gifts/jesterhat/assets/models/carnival.tgs"
    }
  },
  {
    "name": "Azure Joker",
    "customEmojiId": "5246872030367736080",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/azure-joker.svg",
      "tgs": "gifts/jesterhat/assets/models/azure-joker.tgs"
    }
  },
  {
    "name": "Inverse",
    "customEmojiId": "5247211057906213366",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/inverse.svg",
      "tgs": "gifts/jesterhat/assets/models/inverse.tgs"
    }
  },
  {
    "name": "Funster",
    "customEmojiId": "5244905983318191480",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/funster.svg",
      "tgs": "gifts/jesterhat/assets/models/funster.tgs"
    }
  },
  {
    "name": "Gecko",
    "customEmojiId": "5246783382242745246",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/gecko.svg",
      "tgs": "gifts/jesterhat/assets/models/gecko.tgs"
    }
  },
  {
    "name": "Prankster",
    "customEmojiId": "5244899639651498132",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/prankster.svg",
      "tgs": "gifts/jesterhat/assets/models/prankster.tgs"
    }
  },
  {
    "name": "Forest Stream",
    "customEmojiId": "5244674720804137422",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/forest-stream.svg",
      "tgs": "gifts/jesterhat/assets/models/forest-stream.tgs"
    }
  },
  {
    "name": "Comic",
    "customEmojiId": "5244910231040847242",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/comic.svg",
      "tgs": "gifts/jesterhat/assets/models/comic.tgs"
    }
  },
  {
    "name": "Sandy Beach",
    "customEmojiId": "5247121868615344461",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/sandy-beach.svg",
      "tgs": "gifts/jesterhat/assets/models/sandy-beach.tgs"
    }
  },
  {
    "name": "Jungle Bells",
    "customEmojiId": "5244447014523006649",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/jungle-bells.svg",
      "tgs": "gifts/jesterhat/assets/models/jungle-bells.tgs"
    }
  },
  {
    "name": "Tropic Vibe",
    "customEmojiId": "5246869492042064036",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/tropic-vibe.svg",
      "tgs": "gifts/jesterhat/assets/models/tropic-vibe.tgs"
    }
  },
  {
    "name": "Harley Quinn",
    "customEmojiId": "5247212475245419478",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/harley-quinn.svg",
      "tgs": "gifts/jesterhat/assets/models/harley-quinn.tgs"
    }
  },
  {
    "name": "Gingle Frost",
    "customEmojiId": "5244713388394702308",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/gingle-frost.svg",
      "tgs": "gifts/jesterhat/assets/models/gingle-frost.tgs"
    }
  },
  {
    "name": "So Cute!",
    "customEmojiId": "5244895898734982152",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/so-cute.svg",
      "tgs": "gifts/jesterhat/assets/models/so-cute.tgs"
    }
  },
  {
    "name": "Whimsy Bells",
    "customEmojiId": "5244581451294338010",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/whimsy-bells.svg",
      "tgs": "gifts/jesterhat/assets/models/whimsy-bells.tgs"
    }
  },
  {
    "name": "Arlequin",
    "customEmojiId": "5244714792849013002",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/arlequin.svg",
      "tgs": "gifts/jesterhat/assets/models/arlequin.tgs"
    }
  },
  {
    "name": "Madcap",
    "customEmojiId": "5246861035251456486",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/madcap.svg",
      "tgs": "gifts/jesterhat/assets/models/madcap.tgs"
    }
  },
  {
    "name": "Stardust",
    "customEmojiId": "5247120296657312366",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/stardust.svg",
      "tgs": "gifts/jesterhat/assets/models/stardust.tgs"
    }
  },
  {
    "name": "Dagonet",
    "customEmojiId": "5247233658024126323",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/dagonet.svg",
      "tgs": "gifts/jesterhat/assets/models/dagonet.tgs"
    }
  },
  {
    "name": "Party Time",
    "customEmojiId": "5244590754193500401",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/party-time.svg",
      "tgs": "gifts/jesterhat/assets/models/party-time.tgs"
    }
  },
  {
    "name": "Bumble Hat",
    "customEmojiId": "5246910483209937594",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/bumble-hat.svg",
      "tgs": "gifts/jesterhat/assets/models/bumble-hat.tgs"
    }
  },
  {
    "name": "Carousel",
    "customEmojiId": "5246711871037267684",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/carousel.svg",
      "tgs": "gifts/jesterhat/assets/models/carousel.tgs"
    }
  },
  {
    "name": "Moonlit",
    "customEmojiId": "5244949109084809552",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/moonlit.svg",
      "tgs": "gifts/jesterhat/assets/models/moonlit.tgs"
    }
  },
  {
    "name": "Aurora",
    "customEmojiId": "5244901546616974480",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/aurora.svg",
      "tgs": "gifts/jesterhat/assets/models/aurora.tgs"
    }
  },
  {
    "name": "Sugar Dust",
    "customEmojiId": "5244603793714210534",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/sugar-dust.svg",
      "tgs": "gifts/jesterhat/assets/models/sugar-dust.tgs"
    }
  },
  {
    "name": "Court Jester",
    "customEmojiId": "5244570404638452440",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/court-jester.svg",
      "tgs": "gifts/jesterhat/assets/models/court-jester.tgs"
    }
  },
  {
    "name": "Rigoletto",
    "customEmojiId": "5244586433456399902",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/rigoletto.svg",
      "tgs": "gifts/jesterhat/assets/models/rigoletto.tgs"
    }
  },
  {
    "name": "Trick Tones",
    "customEmojiId": "5244539961910258161",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/trick-tones.svg",
      "tgs": "gifts/jesterhat/assets/models/trick-tones.tgs"
    }
  },
  {
    "name": "Bleached",
    "customEmojiId": "5244855551812199451",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/bleached.svg",
      "tgs": "gifts/jesterhat/assets/models/bleached.tgs"
    }
  },
  {
    "name": "Plum Swirl",
    "customEmojiId": "5246729527647820721",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/plum-swirl.svg",
      "tgs": "gifts/jesterhat/assets/models/plum-swirl.tgs"
    }
  },
  {
    "name": "Marshmallow",
    "customEmojiId": "5244884998107981686",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/marshmallow.svg",
      "tgs": "gifts/jesterhat/assets/models/marshmallow.tgs"
    }
  },
  {
    "name": "Chuckle Crown",
    "customEmojiId": "5244643208629085655",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/chuckle-crown.svg",
      "tgs": "gifts/jesterhat/assets/models/chuckle-crown.tgs"
    }
  },
  {
    "name": "Trickster",
    "customEmojiId": "5244961886612517731",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/trickster.svg",
      "tgs": "gifts/jesterhat/assets/models/trickster.tgs"
    }
  },
  {
    "name": "Jolly Orange",
    "customEmojiId": "5244756638715374384",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/jolly-orange.svg",
      "tgs": "gifts/jesterhat/assets/models/jolly-orange.tgs"
    }
  },
  {
    "name": "Witty Whisper",
    "customEmojiId": "5244753202741537066",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/witty-whisper.svg",
      "tgs": "gifts/jesterhat/assets/models/witty-whisper.tgs"
    }
  },
  {
    "name": "Triboulet",
    "customEmojiId": "5244497948540169692",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/triboulet.svg",
      "tgs": "gifts/jesterhat/assets/models/triboulet.tgs"
    }
  },
  {
    "name": "Hot Midday",
    "customEmojiId": "5247042699483176342",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/hot-midday.svg",
      "tgs": "gifts/jesterhat/assets/models/hot-midday.tgs"
    }
  },
  {
    "name": "Joy Dance",
    "customEmojiId": "5244614170355198681",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/joy-dance.svg",
      "tgs": "gifts/jesterhat/assets/models/joy-dance.tgs"
    }
  },
  {
    "name": "Pierrot",
    "customEmojiId": "5247090158871796590",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/pierrot.svg",
      "tgs": "gifts/jesterhat/assets/models/pierrot.tgs"
    }
  },
  {
    "name": "Sketchy",
    "customEmojiId": "5244920852494968892",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/sketchy.svg",
      "tgs": "gifts/jesterhat/assets/models/sketchy.tgs"
    }
  },
  {
    "name": "Party Drink",
    "customEmojiId": "5244578384687687197",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/party-drink.svg",
      "tgs": "gifts/jesterhat/assets/models/party-drink.tgs"
    }
  },
  {
    "name": "Motley Fool",
    "customEmojiId": "5247096987869796427",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/motley-fool.svg",
      "tgs": "gifts/jesterhat/assets/models/motley-fool.tgs"
    }
  },
  {
    "name": "Fancy",
    "customEmojiId": "5244679307829208989",
    "assets": {
      "svg": "gifts/jesterhat/assets/models/fancy.svg",
      "tgs": "gifts/jesterhat/assets/models/fancy.tgs"
    }
  }
] satisfies readonly GiftModel[];

export const patterns = [
  {
    "name": "Coat of Arms",
    "customEmojiId": "5199543926012283083",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/coat-of-arms.png"
    }
  },
  {
    "name": "Arabian Horse",
    "customEmojiId": "5199442384395467198",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/arabian-horse.png"
    }
  },
  {
    "name": "Elephant",
    "customEmojiId": "5199694971422146836",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/elephant.png"
    }
  },
  {
    "name": "Magic Wand",
    "customEmojiId": "5199565744446145009",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/magic-wand.png"
    }
  },
  {
    "name": "Knight",
    "customEmojiId": "5199568179692599944",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/knight.png"
    }
  },
  {
    "name": "Tooth",
    "customEmojiId": "5199462351698429183",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/tooth.png"
    }
  },
  {
    "name": "Scorpion",
    "customEmojiId": "5199940630666579018",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/scorpion.png"
    }
  },
  {
    "name": "Chest",
    "customEmojiId": "5199799017004894591",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/chest.png"
    }
  },
  {
    "name": "Sea Horse",
    "customEmojiId": "5199693631392352882",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sea-horse.png"
    }
  },
  {
    "name": "Totem Bear",
    "customEmojiId": "5199656939486742424",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/totem-bear.png"
    }
  },
  {
    "name": "Venetian Mask",
    "customEmojiId": "5199793845864267822",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/venetian-mask.png"
    }
  },
  {
    "name": "Mushroom",
    "customEmojiId": "5199901374665492419",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/mushroom.png"
    }
  },
  {
    "name": "Doberman",
    "customEmojiId": "5199561689997017519",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/doberman.png"
    }
  },
  {
    "name": "Bandage",
    "customEmojiId": "5199488155861947055",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bandage.png"
    }
  },
  {
    "name": "Corn",
    "customEmojiId": "5199836340270695549",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/corn.png"
    }
  },
  {
    "name": "Flashlight",
    "customEmojiId": "5199659250179147232",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/flashlight.png"
    }
  },
  {
    "name": "Strawberry",
    "customEmojiId": "5199925473726988633",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/strawberry.png"
    }
  },
  {
    "name": "Flipper",
    "customEmojiId": "5199562548990477877",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/flipper.png"
    }
  },
  {
    "name": "Toilet",
    "customEmojiId": "5199426501606409252",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/toilet.png"
    }
  },
  {
    "name": "Hamburger",
    "customEmojiId": "5199558610505467372",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/hamburger.png"
    }
  },
  {
    "name": "Carrot",
    "customEmojiId": "5199942498977352363",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/carrot.png"
    }
  },
  {
    "name": "Book",
    "customEmojiId": "5199463541404373712",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/book.png"
    }
  },
  {
    "name": "Kitsune",
    "customEmojiId": "5199625959887635892",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/kitsune.png"
    }
  },
  {
    "name": "Owl",
    "customEmojiId": "5199736804403612865",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/owl.png"
    }
  },
  {
    "name": "Clubs",
    "customEmojiId": "5199913752761238667",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/clubs.png"
    }
  },
  {
    "name": "Alarm",
    "customEmojiId": "5199575713065239188",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/alarm.png"
    }
  },
  {
    "name": "Scissors",
    "customEmojiId": "5199668037682237139",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/scissors.png"
    }
  },
  {
    "name": "Ram of Amun",
    "customEmojiId": "5199770601501268034",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ram-of-amun.png"
    }
  },
  {
    "name": "Mayan Moth",
    "customEmojiId": "5199778452701480675",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/mayan-moth.png"
    }
  },
  {
    "name": "Piñata",
    "customEmojiId": "5199490110072061851",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pinata.png"
    }
  },
  {
    "name": "Money Bag",
    "customEmojiId": "5199426943988044271",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/money-bag.png"
    }
  },
  {
    "name": "Crab",
    "customEmojiId": "5199541684039353419",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/crab.png"
    }
  },
  {
    "name": "PC Mouse",
    "customEmojiId": "5199776412592014669",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pc-mouse.png"
    }
  },
  {
    "name": "Oxen of Fire",
    "customEmojiId": "5199717897957573867",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/oxen-of-fire.png"
    }
  },
  {
    "name": "Crystal Ball",
    "customEmojiId": "5199590410443328799",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/crystal-ball.png"
    }
  },
  {
    "name": "Bunny",
    "customEmojiId": "5199800120811489322",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bunny.png"
    }
  },
  {
    "name": "Jumbo Pencil",
    "customEmojiId": "5199442723697888040",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/jumbo-pencil.png"
    }
  },
  {
    "name": "Guitar",
    "customEmojiId": "5199926040662672669",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/guitar.png"
    }
  },
  {
    "name": "Ring",
    "customEmojiId": "5199821179036142060",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ring.png"
    }
  },
  {
    "name": "Tulip",
    "customEmojiId": "5199743169545146465",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/tulip.png"
    }
  },
  {
    "name": "Fish Skeleton",
    "customEmojiId": "5199448302860405743",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/fish-skeleton.png"
    }
  },
  {
    "name": "Skull",
    "customEmojiId": "5199619431537348678",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/skull.png"
    }
  },
  {
    "name": "Rain Drop",
    "customEmojiId": "5199596200059239228",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/rain-drop.png"
    }
  },
  {
    "name": "The Eye",
    "customEmojiId": "5199464073980313985",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/the-eye.png"
    }
  },
  {
    "name": "Flower Tulip",
    "customEmojiId": "5199785517922683567",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/flower-tulip.png"
    }
  },
  {
    "name": "Lovely Kiss",
    "customEmojiId": "5199851368361267380",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/lovely-kiss.png"
    }
  },
  {
    "name": "Eikthyrnir",
    "customEmojiId": "5199875514667404240",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/eikthyrnir.png"
    }
  },
  {
    "name": "Bottlenose",
    "customEmojiId": "5199797414982094107",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bottlenose.png"
    }
  },
  {
    "name": "Cherry",
    "customEmojiId": "5199513358730037370",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cherry.png"
    }
  },
  {
    "name": "Cursor",
    "customEmojiId": "5199454088181354831",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cursor.png"
    }
  },
  {
    "name": "Cone",
    "customEmojiId": "5199449329357589107",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cone.png"
    }
  },
  {
    "name": "Alkonost",
    "customEmojiId": "5199529237224130039",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/alkonost.png"
    }
  },
  {
    "name": "Leaf",
    "customEmojiId": "5199589658824052117",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/leaf.png"
    }
  },
  {
    "name": "Like",
    "customEmojiId": "5199438957011572772",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/like.png"
    }
  },
  {
    "name": "Firebird",
    "customEmojiId": "5199747116620088950",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/firebird.png"
    }
  },
  {
    "name": "Coin",
    "customEmojiId": "5199414832180268714",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/coin.png"
    }
  },
  {
    "name": "Wasp",
    "customEmojiId": "5199841038964917820",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/wasp.png"
    }
  },
  {
    "name": "Diamonds",
    "customEmojiId": "5199700121087937827",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/diamonds.png"
    }
  },
  {
    "name": "Phoenix",
    "customEmojiId": "5199683091542608723",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/phoenix.png"
    }
  },
  {
    "name": "Ink Pen",
    "customEmojiId": "5199514776069247457",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ink-pen.png"
    }
  },
  {
    "name": "Cocktail",
    "customEmojiId": "5199925405007515741",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cocktail.png"
    }
  },
  {
    "name": "Heart",
    "customEmojiId": "5199448474659098272",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/heart.png"
    }
  },
  {
    "name": "Feather",
    "customEmojiId": "5199561191780815148",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/feather.png"
    }
  },
  {
    "name": "Shell",
    "customEmojiId": "5199502470987945576",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/shell.png"
    }
  },
  {
    "name": "Cap",
    "customEmojiId": "5199697466798143755",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cap.png"
    }
  },
  {
    "name": "Sharp Sword",
    "customEmojiId": "5199910510060932554",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sharp-sword.png"
    }
  },
  {
    "name": "Maple Leaf",
    "customEmojiId": "5199771361710473077",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/maple-leaf.png"
    }
  },
  {
    "name": "Champagne",
    "customEmojiId": "5199679432230471443",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/champagne.png"
    }
  },
  {
    "name": "Coffee Bean",
    "customEmojiId": "5199617662010820206",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/coffee-bean.png"
    }
  },
  {
    "name": "Tree of Life",
    "customEmojiId": "5199597209376558882",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/tree-of-life.png"
    }
  },
  {
    "name": "Musical Note",
    "customEmojiId": "5199763458970653234",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/musical-note.png"
    }
  },
  {
    "name": "Spanner",
    "customEmojiId": "5199442762352593351",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/spanner.png"
    }
  },
  {
    "name": "Maple",
    "customEmojiId": "5199893351666582880",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/maple.png"
    }
  },
  {
    "name": "Pineapple",
    "customEmojiId": "5199590977379009936",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pineapple.png"
    }
  },
  {
    "name": "Jellyfish",
    "customEmojiId": "5199463842052082744",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/jellyfish.png"
    }
  },
  {
    "name": "Crusader",
    "customEmojiId": "5199701096045512582",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/crusader.png"
    }
  },
  {
    "name": "Plum",
    "customEmojiId": "5199962951611612377",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/plum.png"
    }
  },
  {
    "name": "Narcissus",
    "customEmojiId": "5199732805789058517",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/narcissus.png"
    }
  },
  {
    "name": "Baphomet",
    "customEmojiId": "5199603441374108638",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/baphomet.png"
    }
  },
  {
    "name": "Boat",
    "customEmojiId": "5199564713653997766",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/boat.png"
    }
  },
  {
    "name": "Potion",
    "customEmojiId": "5199510532641560275",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/potion.png"
    }
  },
  {
    "name": "Rook",
    "customEmojiId": "5199812241209201867",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/rook.png"
    }
  },
  {
    "name": "Inca Sun",
    "customEmojiId": "5199572075227940967",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/inca-sun.png"
    }
  },
  {
    "name": "Toy Bucket",
    "customEmojiId": "5199747872534338785",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/toy-bucket.png"
    }
  },
  {
    "name": "Pear",
    "customEmojiId": "5199711558585845500",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pear.png"
    }
  },
  {
    "name": "Dice",
    "customEmojiId": "5199905927330827651",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/dice.png"
    }
  },
  {
    "name": "Coin Purse",
    "customEmojiId": "5199421974710879091",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/coin-purse.png"
    }
  },
  {
    "name": "Turtle",
    "customEmojiId": "5199802964079839347",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/turtle.png"
    }
  },
  {
    "name": "Twin Peaks",
    "customEmojiId": "5199548495857482960",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/twin-peaks.png"
    }
  },
  {
    "name": "Plume",
    "customEmojiId": "5199642800454407125",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/plume.png"
    }
  },
  {
    "name": "Grenade",
    "customEmojiId": "5199860864533955715",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/grenade.png"
    }
  },
  {
    "name": "Tribal Shield",
    "customEmojiId": "5199940531882326218",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/tribal-shield.png"
    }
  },
  {
    "name": "Bread",
    "customEmojiId": "5199525547847224334",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bread.png"
    }
  },
  {
    "name": "Cupcake",
    "customEmojiId": "5199460788330335122",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cupcake.png"
    }
  },
  {
    "name": "Eagle",
    "customEmojiId": "5199844350384703801",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/eagle.png"
    }
  },
  {
    "name": "Polar Bear",
    "customEmojiId": "5199407315987502006",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/polar-bear.png"
    }
  },
  {
    "name": "Coconut",
    "customEmojiId": "5199939960651680778",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/coconut.png"
    }
  },
  {
    "name": "Ball",
    "customEmojiId": "5199921152989891702",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ball.png"
    }
  },
  {
    "name": "Planet",
    "customEmojiId": "5199952033804749816",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/planet.png"
    }
  },
  {
    "name": "Shield",
    "customEmojiId": "5199474497865945550",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/shield.png"
    }
  },
  {
    "name": "Ice Pop",
    "customEmojiId": "5202206762786127395",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ice-pop.png"
    }
  },
  {
    "name": "Cheese",
    "customEmojiId": "5199949985105348813",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cheese.png"
    }
  },
  {
    "name": "Moon Cross",
    "customEmojiId": "5199926568943652086",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/moon-cross.png"
    }
  },
  {
    "name": "Fenrir",
    "customEmojiId": "5199525530667354783",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/fenrir.png"
    }
  },
  {
    "name": "Golden Scarab",
    "customEmojiId": "5199515630767736867",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/golden-scarab.png"
    }
  },
  {
    "name": "Koala",
    "customEmojiId": "5199786591664505620",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/koala.png"
    }
  },
  {
    "name": "Bunny Ears",
    "customEmojiId": "5199774076129808154",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bunny-ears.png"
    }
  },
  {
    "name": "Ouroboros",
    "customEmojiId": "5199428661974962024",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ouroboros.png"
    }
  },
  {
    "name": "Moose Head",
    "customEmojiId": "5199916278202010569",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/moose-head.png"
    }
  },
  {
    "name": "Sea Jelly",
    "customEmojiId": "5199917369123703634",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sea-jelly.png"
    }
  },
  {
    "name": "Star",
    "customEmojiId": "5199425320490407263",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/star.png"
    }
  },
  {
    "name": "Lion Head",
    "customEmojiId": "5199655049701172498",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/lion-head.png"
    }
  },
  {
    "name": "Trophy",
    "customEmojiId": "5199543874472675475",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/trophy.png"
    }
  },
  {
    "name": "Hammerhead",
    "customEmojiId": "5199846888710377808",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/hammerhead.png"
    }
  },
  {
    "name": "Celtic Cross",
    "customEmojiId": "5199560126628923287",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/celtic-cross.png"
    }
  },
  {
    "name": "Shooting Star",
    "customEmojiId": "5199756398044416521",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/shooting-star.png"
    }
  },
  {
    "name": "Candy",
    "customEmojiId": "5199911012572105730",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/candy.png"
    }
  },
  {
    "name": "Sun Lion",
    "customEmojiId": "5199909337534861617",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sun-lion.png"
    }
  },
  {
    "name": "Scarab",
    "customEmojiId": "5199439627026463806",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/scarab.png"
    }
  },
  {
    "name": "Nordic Wolf",
    "customEmojiId": "5199895056768603137",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/nordic-wolf.png"
    }
  },
  {
    "name": "Police Badge",
    "customEmojiId": "5199500710051351632",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/police-badge.png"
    }
  },
  {
    "name": "Spades",
    "customEmojiId": "5199913155760783674",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/spades.png"
    }
  },
  {
    "name": "Sauron",
    "customEmojiId": "5199852081325838722",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sauron.png"
    }
  },
  {
    "name": "Gamepad",
    "customEmojiId": "5199672727786522651",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/gamepad.png"
    }
  },
  {
    "name": "Mask",
    "customEmojiId": "5199413122783298258",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/mask.png"
    }
  },
  {
    "name": "Dragonfly",
    "customEmojiId": "5199491647670355164",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/dragonfly.png"
    }
  },
  {
    "name": "Crown",
    "customEmojiId": "5199763085308495651",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/crown.png"
    }
  },
  {
    "name": "Melon",
    "customEmojiId": "5199664507219118426",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/melon.png"
    }
  },
  {
    "name": "Sun",
    "customEmojiId": "5199964983131145958",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sun.png"
    }
  },
  {
    "name": "Grape",
    "customEmojiId": "5199618417925067376",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/grape.png"
    }
  },
  {
    "name": "Lightning",
    "customEmojiId": "5202201454206549813",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/lightning.png"
    }
  },
  {
    "name": "Bubbles",
    "customEmojiId": "5199440863977046426",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bubbles.png"
    }
  },
  {
    "name": "Hermit Shell",
    "customEmojiId": "5199762329394253336",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/hermit-shell.png"
    }
  },
  {
    "name": "Gear",
    "customEmojiId": "5199963565791939900",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/gear.png"
    }
  },
  {
    "name": "Flower",
    "customEmojiId": "5199829013056490060",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/flower.png"
    }
  },
  {
    "name": "Unicorn",
    "customEmojiId": "5199548367008467469",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/unicorn.png"
    }
  },
  {
    "name": "Ghost",
    "customEmojiId": "5199766383843378029",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ghost.png"
    }
  },
  {
    "name": "Fire",
    "customEmojiId": "5199557987735208484",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/fire.png"
    }
  },
  {
    "name": "Bastet",
    "customEmojiId": "5199520204907910380",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bastet.png"
    }
  },
  {
    "name": "Yogi Shaman",
    "customEmojiId": "5199445571261203846",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/yogi-shaman.png"
    }
  },
  {
    "name": "Lemon Slice",
    "customEmojiId": "5199964953066377215",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/lemon-slice.png"
    }
  },
  {
    "name": "Turkey",
    "customEmojiId": "5199906644590363463",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/turkey.png"
    }
  },
  {
    "name": "Bell Pepper",
    "customEmojiId": "5199683718607834440",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bell-pepper.png"
    }
  },
  {
    "name": "Drug",
    "customEmojiId": "5199963359633511195",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/drug.png"
    }
  },
  {
    "name": "Sun Mountain",
    "customEmojiId": "5199464829894562233",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sun-mountain.png"
    }
  },
  {
    "name": "Toilet Paper",
    "customEmojiId": "5199519908555163902",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/toilet-paper.png"
    }
  },
  {
    "name": "Garden Pot",
    "customEmojiId": "5199961336703914826",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/garden-pot.png"
    }
  },
  {
    "name": "Croissant",
    "customEmojiId": "5199706980150706028",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/croissant.png"
    }
  },
  {
    "name": "Sumerian Bird",
    "customEmojiId": "5199797367737452718",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sumerian-bird.png"
    }
  },
  {
    "name": "UFO",
    "customEmojiId": "5199788069133256359",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ufo.png"
    }
  },
  {
    "name": "Sword",
    "customEmojiId": "5199810643481365864",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sword.png"
    }
  },
  {
    "name": "Apple",
    "customEmojiId": "5199834806967375335",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/apple.png"
    }
  },
  {
    "name": "Octopus",
    "customEmojiId": "5199415742713335939",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/octopus.png"
    }
  },
  {
    "name": "Eggplant",
    "customEmojiId": "5199864798724001703",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/eggplant.png"
    }
  },
  {
    "name": "Kite",
    "customEmojiId": "5199550252499111740",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/kite.png"
    }
  },
  {
    "name": "Moon",
    "customEmojiId": "5199499052193973671",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/moon.png"
    }
  },
  {
    "name": "Inguz Rune",
    "customEmojiId": "5199780557235455952",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/inguz-rune.png"
    }
  },
  {
    "name": "Sprout",
    "customEmojiId": "5199705945063589397",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sprout.png"
    }
  },
  {
    "name": "Fehu Rune",
    "customEmojiId": "5201658535980598965",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/fehu-rune.png"
    }
  },
  {
    "name": "Genie Lamp",
    "customEmojiId": "5199760491148248638",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/genie-lamp.png"
    }
  },
  {
    "name": "Hand of God",
    "customEmojiId": "5199440739422996762",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/hand-of-god.png"
    }
  },
  {
    "name": "Rocket",
    "customEmojiId": "5199857192336916692",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/rocket.png"
    }
  },
  {
    "name": "Seahorse",
    "customEmojiId": "5199707001625546696",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/seahorse.png"
    }
  },
  {
    "name": "Bow Tie",
    "customEmojiId": "5199652756188594205",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bow-tie.png"
    }
  },
  {
    "name": "Spirit Impala",
    "customEmojiId": "5199800047797046538",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/spirit-impala.png"
    }
  },
  {
    "name": "Cobra",
    "customEmojiId": "5199726195834392948",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cobra.png"
    }
  },
  {
    "name": "Burger",
    "customEmojiId": "5199576765332229212",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/burger.png"
    }
  },
  {
    "name": "Cicada",
    "customEmojiId": "5199501453080693075",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cicada.png"
    }
  },
  {
    "name": "Paw",
    "customEmojiId": "5199716562222744161",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/paw.png"
    }
  },
  {
    "name": "Lemon",
    "customEmojiId": "5199949400989796691",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/lemon.png"
    }
  },
  {
    "name": "Glasses",
    "customEmojiId": "5199843323887519152",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/glasses.png"
    }
  },
  {
    "name": "Brain",
    "customEmojiId": "5199813422325207751",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/brain.png"
    }
  },
  {
    "name": "Piggy Bank",
    "customEmojiId": "5199476082708878264",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/piggy-bank.png"
    }
  },
  {
    "name": "Candle",
    "customEmojiId": "5199639604998733687",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/candle.png"
    }
  },
  {
    "name": "Hedgehog",
    "customEmojiId": "5199443440957426886",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/hedgehog.png"
    }
  },
  {
    "name": "Gem",
    "customEmojiId": "5199568523289988128",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/gem.png"
    }
  },
  {
    "name": "Fleur-de-lis",
    "customEmojiId": "5199655573687140713",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/fleur-de-lis.png"
    }
  },
  {
    "name": "Chili",
    "customEmojiId": "5199718404763713565",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/chili.png"
    }
  },
  {
    "name": "Cat Mask",
    "customEmojiId": "5199751016450395261",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cat-mask.png"
    }
  },
  {
    "name": "Fish",
    "customEmojiId": "5199862024175126001",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/fish.png"
    }
  },
  {
    "name": "Bull of Heaven",
    "customEmojiId": "5199518259287723654",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bull-of-heaven.png"
    }
  },
  {
    "name": "Bone",
    "customEmojiId": "5199640352323047571",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bone.png"
    }
  },
  {
    "name": "Spider Web",
    "customEmojiId": "5201766709026913537",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/spider-web.png"
    }
  },
  {
    "name": "Mafdet",
    "customEmojiId": "5199698669388988419",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/mafdet.png"
    }
  },
  {
    "name": "Mannaz Rune",
    "customEmojiId": "5199593631668799507",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/mannaz-rune.png"
    }
  },
  {
    "name": "Moon Eagle",
    "customEmojiId": "5199513281420625625",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/moon-eagle.png"
    }
  },
  {
    "name": "Smartphone",
    "customEmojiId": "5199833724635614475",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/smartphone.png"
    }
  },
  {
    "name": "Celtic Wolf",
    "customEmojiId": "5199434919742310645",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/celtic-wolf.png"
    }
  },
  {
    "name": "Cactus",
    "customEmojiId": "5199664352600297564",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cactus.png"
    }
  },
  {
    "name": "Wreath",
    "customEmojiId": "5199506340753473869",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/wreath.png"
    }
  },
  {
    "name": "Carambola",
    "customEmojiId": "5199563687156815774",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/carambola.png"
    }
  },
  {
    "name": "Vortex",
    "customEmojiId": "5199813753037687817",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/vortex.png"
    }
  },
  {
    "name": "Pencil",
    "customEmojiId": "5199649638042340721",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pencil.png"
    }
  },
  {
    "name": "Hippo",
    "customEmojiId": "5199545558099857226",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/hippo.png"
    }
  },
  {
    "name": "Royal Crown",
    "customEmojiId": "5199769278651342343",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/royal-crown.png"
    }
  },
  {
    "name": "Viking",
    "customEmojiId": "5199809080113267301",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/viking.png"
    }
  },
  {
    "name": "Flamingo",
    "customEmojiId": "5199960670983983099",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/flamingo.png"
    }
  },
  {
    "name": "Bubble Tea",
    "customEmojiId": "5199799150148883131",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bubble-tea.png"
    }
  },
  {
    "name": "Sparks",
    "customEmojiId": "5199534721897367416",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sparks.png"
    }
  },
  {
    "name": "Wolf Rage",
    "customEmojiId": "5199809844617447088",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/wolf-rage.png"
    }
  },
  {
    "name": "White Deer",
    "customEmojiId": "5199804858160416090",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/white-deer.png"
    }
  },
  {
    "name": "Tie",
    "customEmojiId": "5199849435625984324",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/tie.png"
    }
  },
  {
    "name": "Bottle",
    "customEmojiId": "5199580759651813806",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bottle.png"
    }
  },
  {
    "name": "Pawn",
    "customEmojiId": "5199596131339765368",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pawn.png"
    }
  },
  {
    "name": "Bishop",
    "customEmojiId": "5199551953306157566",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bishop.png"
    }
  },
  {
    "name": "Sunflower",
    "customEmojiId": "5199874518234992013",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/sunflower.png"
    }
  },
  {
    "name": "Bug",
    "customEmojiId": "5199687519653889118",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bug.png"
    }
  },
  {
    "name": "Top Hat",
    "customEmojiId": "5199704811192221997",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/top-hat.png"
    }
  },
  {
    "name": "Illuminati",
    "customEmojiId": "5199959970904312871",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/illuminati.png"
    }
  },
  {
    "name": "Pyramid",
    "customEmojiId": "5199649565027895118",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pyramid.png"
    }
  },
  {
    "name": "Mountain Goat",
    "customEmojiId": "5199689319245190164",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/mountain-goat.png"
    }
  },
  {
    "name": "Gift Box",
    "customEmojiId": "5199854971838826197",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/gift-box.png"
    }
  },
  {
    "name": "Clover",
    "customEmojiId": "5199896852064926891",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/clover.png"
    }
  },
  {
    "name": "Pizza Slice",
    "customEmojiId": "5199578066707317639",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pizza-slice.png"
    }
  },
  {
    "name": "Unicorn Head",
    "customEmojiId": "5199885517646234797",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/unicorn-head.png"
    }
  },
  {
    "name": "Acorn",
    "customEmojiId": "5199500774475870841",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/acorn.png"
    }
  },
  {
    "name": "Pomegranate",
    "customEmojiId": "5199497579020194190",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pomegranate.png"
    }
  },
  {
    "name": "Watermelon",
    "customEmojiId": "5199448229845961538",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/watermelon.png"
    }
  },
  {
    "name": "Car",
    "customEmojiId": "5199704214191765603",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/car.png"
    }
  },
  {
    "name": "Shark Knife",
    "customEmojiId": "5199666796436687154",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/shark-knife.png"
    }
  },
  {
    "name": "Cash",
    "customEmojiId": "5199583108998922344",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/cash.png"
    }
  },
  {
    "name": "Rhino Warrior",
    "customEmojiId": "5199722768450487484",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/rhino-warrior.png"
    }
  },
  {
    "name": "Gold",
    "customEmojiId": "5199529048245569871",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/gold.png"
    }
  },
  {
    "name": "Ladybug",
    "customEmojiId": "5199818340062758355",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/ladybug.png"
    }
  },
  {
    "name": "Pegasus",
    "customEmojiId": "5199615102210311126",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pegasus.png"
    }
  },
  {
    "name": "Thief",
    "customEmojiId": "5199501362886377899",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/thief.png"
    }
  },
  {
    "name": "Axe",
    "customEmojiId": "5199830537769879159",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/axe.png"
    }
  },
  {
    "name": "Beetle",
    "customEmojiId": "5199410751961337105",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/beetle.png"
    }
  },
  {
    "name": "Gingerbread",
    "customEmojiId": "5199945376605439444",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/gingerbread.png"
    }
  },
  {
    "name": "Monstera",
    "customEmojiId": "5199712567903159375",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/monstera.png"
    }
  },
  {
    "name": "Oak Leaf",
    "customEmojiId": "5199714255825309269",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/oak-leaf.png"
    }
  },
  {
    "name": "Flower Cross",
    "customEmojiId": "5199741412903518768",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/flower-cross.png"
    }
  },
  {
    "name": "Lion King",
    "customEmojiId": "5199514870558527530",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/lion-king.png"
    }
  },
  {
    "name": "Bee",
    "customEmojiId": "5199604974677428405",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/bee.png"
    }
  },
  {
    "name": "Palette",
    "customEmojiId": "5199833587196661886",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/palette.png"
    }
  },
  {
    "name": "High Heels",
    "customEmojiId": "5199687292020627714",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/high-heels.png"
    }
  },
  {
    "name": "Birthday Cake",
    "customEmojiId": "5199528562914267487",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/birthday-cake.png"
    }
  },
  {
    "name": "Pickaxe",
    "customEmojiId": "5199445292088328237",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pickaxe.png"
    }
  },
  {
    "name": "Love Lock",
    "customEmojiId": "5199543157213139030",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/love-lock.png"
    }
  },
  {
    "name": "Red Deer",
    "customEmojiId": "5199967207924207004",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/red-deer.png"
    }
  },
  {
    "name": "Pearl",
    "customEmojiId": "5199540305354854917",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/pearl.png"
    }
  },
  {
    "name": "Dolphin",
    "customEmojiId": "5199801499495994058",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/dolphin.png"
    }
  },
  {
    "name": "Calm Wolf",
    "customEmojiId": "5199642521281532199",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/calm-wolf.png"
    }
  },
  {
    "name": "Diamond",
    "customEmojiId": "5199628004292067329",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/diamond.png"
    }
  },
  {
    "name": "Avocado",
    "customEmojiId": "5199464318793453067",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/avocado.png"
    }
  },
  {
    "name": "Blood Drop",
    "customEmojiId": "5199450016552355691",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/blood-drop.png"
    }
  },
  {
    "name": "Lily",
    "customEmojiId": "5199594718295526169",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/lily.png"
    }
  },
  {
    "name": "Manta Ray",
    "customEmojiId": "5199852231649690419",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/manta-ray.png"
    }
  },
  {
    "name": "Chili Pepper",
    "customEmojiId": "5199643277195772037",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/chili-pepper.png"
    }
  },
  {
    "name": "Key",
    "customEmojiId": "5199761882717653195",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/key.png"
    }
  },
  {
    "name": "Anchor",
    "customEmojiId": "5199524130508019696",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/anchor.png"
    }
  },
  {
    "name": "Conch",
    "customEmojiId": "5199858635445929849",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/conch.png"
    }
  },
  {
    "name": "Mountain Lion",
    "customEmojiId": "5199456879910094088",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/mountain-lion.png"
    }
  },
  {
    "name": "Love Letter",
    "customEmojiId": "5199624482418887229",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/love-letter.png"
    }
  },
  {
    "name": "Star Crown",
    "customEmojiId": "5199486442169993955",
    "assets": {
      "png": "gifts/jesterhat/assets/patterns/star-crown.png"
    }
  }
] satisfies readonly GiftPattern[];

export const backdrops = [
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
    "name": "Mystic Pearl",
    "customEmojiId": "5375343865219805643",
    "hex": {
      "centerColor": "#d08b6d",
      "edgeColor": "#b05770",
      "patternColor": "#9b0526",
      "textColor": "#fedde0"
    }
  }
] satisfies readonly Backdrop[];

export const collection = { slug: "jesterhat", models, patterns, backdrops } satisfies GiftCollection;

export default collection;
