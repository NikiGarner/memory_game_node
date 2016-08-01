var Card = require('./../js/card.js').cardModule;

$(document).ready(function() {
  var eggGuy = new Card('https://static.simpsonswiki.com/images/f/fd/Egg_Council_Guy.png');
  var turtle = new Card('http://www.backwaterreptiles.com/images/turtles/red-eared-slider-turtle-for-sale.jpg');
  var queen =  new Card('http://www.sevenreflections.com/images/biggercards/38.png');
  var mario = new Card('http://img09.deviantart.net/6bb8/i/2006/159/e/d/mario_face_card_by_littlemissysg.jpg');
  var joker = new Card('http://i633.photobucket.com/albums/uu52/euphemia_dco/gambling/JokerCard.jpg');

  var guess1 = 0;
  var guess2 = 0;
  var guess1id;
  var guess2id;
  var counter = 0;

  $('#card1').click(function() {
    counter++;
    $('#card1Src').attr('src', eggGuy.back);
    if (guess1 === 0) {
      guess1 = eggGuy.back;
      guess1id = '#card1Src';
    } else if (guess1 !== 0) {
      guess2 = eggGuy.back;
      guess2id = '#card1Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card2').click(function() {
    counter++;
    $('#card2Src').attr('src', turtle.back);
    if (guess1 === 0) {
      guess1 = turtle.back;
      guess1id = '#card2Src';
    } else if (guess1 !== 0) {
      guess2 = turtle.back;
      guess2id = '#card2Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card3').click(function() {
    counter++;
    $('#card3Src').attr('src', queen.back);
    if (guess1 === 0) {
      guess1 = queen.back;
      guess1id = '#card3Src';
    } else if (guess1 !== 0) {
      guess2 = queen.back;
      guess2id = '#card3Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card4').click(function() {
    counter++;
    $('#card4Src').attr('src', mario.back);
    if (guess1 === 0) {
      guess1 = mario.back;
      guess1id = '#card4Src';
    } else if (guess1 !== 0) {
      guess2 = mario.back;
      guess2id = '#card4Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card5').click(function() {
    counter++;
    $('#card5Src').attr('src', joker.back);
    if (guess1 === 0) {
      guess1 = joker.back;
      guess1id = '#card5Src';
    } else if (guess1 !== 0) {
      guess2 = joker.back;
      guess2id = '#card5Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card6').click(function() {
    counter++;
    $('#card6Src').attr('src', queen.back);
    if (guess1 === 0) {
      guess1 = queen.back;
      guess1id = '#card6Src';
    } else if (guess1 !== 0) {
      guess2 = queen.back;
      guess2id = '#card6Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card7').click(function() {
    counter++;
    $('#card7Src').attr('src', joker.back);
    if (guess1 === 0) {
      guess1 = joker.back;
      guess1id = '#card7Src';
    } else if (guess1 !== 0) {
      guess2 = joker.back;
      guess2id = '#card7Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card8').click(function() {
    counter++;
    $('#card8Src').attr('src', eggGuy.back);
    if (guess1 === 0) {
      guess1 = eggGuy.back;
      guess1id = '#card8Src';
    } else if (guess1 !== 0) {
      guess2 = eggGuy.back;
      guess2id = '#card8Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card9').click(function() {
    counter++;
    $('#card9Src').attr('src', turtle.back);
    if (guess1 === 0) {
      guess1 = turtle.back;
      guess1id = '#card9Src';
    } else if (guess1 !== 0) {
      guess2 = turtle.back;
      guess2id = '#card9Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
  $('#card10').click(function() {
    counter++;
    $('#card10Src').attr('src', mario.back);
    if (guess1 === 0) {
      guess1 = mario.back;
      guess1id = '#card10Src';
    } else if (guess1 !== 0) {
      guess2 = mario.back;
      guess2id = '#card10Src';
    }
    if (guess2 !== 0) {
      if (guess1 === guess2) {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<h3>You guessed correct!</h3>");
      }
      else {
        guess1 = 0;
        guess2 = 0;
        $('#response').html("<span id='wrong'><h3>You guessed incorret. Click here to try again.</h3></span>");
        $('#wrong').click(function() {
          $('#response').html("");
          $(guess1id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
          $(guess2id).attr('src', 'http://jaredbruckner.com/NewestRookWebsite/RP/L/L227/B.jpg');
        });
      }
    }
  });
});
