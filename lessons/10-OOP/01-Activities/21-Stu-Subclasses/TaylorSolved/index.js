const Boat = require("./boat");
const Car = require("./car");

const car = new Car(1, "blue", ["Taylor", "John", "Blanche", "Nick", "Calum"], "Beep Beep.");
car.useHorn();
car.printInfo();
car.checkPassengers();

const boat = new Boat(2, ["Taylor", "John", "Blanche"], "Hooooooonkk");
boat.useHorn();
boat.printInfo();
boat.crewSoundOff();
