function Card(back) {
  this.back = back;
}

Card.prototype.sameBack = function(guess) {
  if (guess === this.back) {
    return true;
  }
  else {
    return false;
  }
};
exports.cardModule = Card;
