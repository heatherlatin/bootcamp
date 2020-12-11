function Character(name, profession, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.age = 1;
    this.strength = strength;
    this.hp = hitpoints;
}

Character.prototype.printStats = function() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`name: ${this.name}`);
    console.log(`profession: ${this.profession}`);
    console.log(`age: ${this.age}`);
    console.log(`hitpoints: ${this.hp}`);
    console.log(`strength: ${this.strength}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

Character.prototype.isAlive = function() {
    if (this.hp > 0) {
        console.log(`${this.name} is still alive...`);
        return true;
    }
    console.log(`${this.name} is DEAD!`);
    return false;
}

Character.prototype.attack = function(defender) {
    console.log(`${this.name} is attacking ${defender.name}`);
    defender.hp -= this.strength;
}

Character.prototype.levelUp = function() {
    console.log(`${this.name} is leveling up!`);
    this.hp += 25;
    this.strength += 5;
    this.age++;
    console.log(`${this.name}'s new stats:`);
    this.printStats();
}

module.exports = Character;