const Character = require("./Character.js");

const barbarian = new Character("Gramps", "Barbarian", 30, 75);
const rogue = new Character("FindMe", "Rogue", 45, 55);

while(barbarian.isAlive() && rogue.isAlive()) {
    barbarian.printStats();
    rogue.printStats();
    barbarian.attack(rogue);
    rogue.attack(barbarian);
}

if (barbarian.isAlive()) {
    console.log("barbarian wins!");
} else if (rogue.isAlive()) {
    console.log("rogue wins!");
} else {
    console.log("mutual murder.");
}