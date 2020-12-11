const Vehicle = require("./vehicle");
class Boat extends Vehicle {
    constructor(id, crew, sound) {
        super(id, 0, sound);
        this.crew = crew;
    }
    crewSoundOff() {
        this.crew.forEach(crewMember => console.log(crewMember));
    }
}

module.exports = Boat;