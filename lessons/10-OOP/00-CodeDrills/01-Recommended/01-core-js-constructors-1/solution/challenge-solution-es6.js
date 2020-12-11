// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
class Card {
    constructor(value) {
        if (value >= 1 && value <= 13) {
            this.value = value;
        } else {
            this.value = 1;
        }
    }
    print() {
        // This is a ternary statement and has the syntax of
        // <conditional> ? <value if true> : <value if false>
        var printValue = this.value < 10 ? "0" + this.value : this.value;
        console.log(`
      -----------
      |${printValue}       |
      |         |
      |         |
      |         |
      |         |
      |       ${printValue}|
      -----------
      `)
    }
}

// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------

class Deck {
    constructor(cards = []) {
        this.cards = cards;
    }
    count() {
        return this.cards.length;
    }
    shuffle() {
        for (var i = this.cards.length - 1; i >= 0; i--) {
            var randIndex = Math.floor(Math.random() * (i + 1));
            var tempCard = this.cards[i];
            this.cards[i] = this.cards[randIndex];
            this.cards[randIndex] = tempCard;
        }
    }
    draw() {
        return this.cards.pop();
    }
    add(card) {
        this.cards.push(card);
        this.shuffle();
    }
}

// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------

module.exports.Card = Card;
module.exports.Deck = Deck;

  // --------------------- End Code Area --------------------
