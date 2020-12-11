class Character {
  constructor(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as follows:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitpoints > 0) {
      console.log(`${this.name} is still alive!`);
      return true;
    }
    console.log(`${this.name} is dead...`);
    return false;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${this.name} is attacking ${opponent.name} and deals ${this.strength} damage.`)
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitpoints -= this.strength;
  }
}

// Create two unique characters using the "character" class
const barb = new Character("gramps", 50, 100);
const rogue = new Character("find me", 75, 75);

// Create an interval that alternates attacks every 2000 milliseconds

const players = [barb, rogue];
let currentAttacker = 1;
let game = setInterval(() => {
  const attacker = players[currentAttacker];
  const defender = (currentAttacker === 1) ? players[0] : players[1];
  attacker.attack(defender);
  defender.printStats();
  if (!defender.isAlive()) {
    clearInterval(game);
    console.log(`${attacker.name} is victorious!`);
    attacker.printStats();
    return;
  }
  currentAttacker = (currentAttacker === 1) ? 0 : 1;
}, 1000);