const Vehicle = require("./vehicle");
class Car extends Vehicle {
    constructor(id, color, passengers, sound) {
        super(id, 4, sound);
        this.color = color;
        this.passengers = passengers;
    }
    checkPassengers() {
        if (this.passengers.length >= 5) {
            console.log("Too many passengers!");
        } else {
            console.log("Good amount of passengers.");
        }
    }
}

module.exports = Car;