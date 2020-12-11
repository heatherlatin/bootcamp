const Animal = require("./Animal");

class Dog extends Animal {
    constructor({ size, breed, ...animal }) {
        super(animal);
        this.size = size;
        this.breed = breed;
    }

    isInvalid() {
        let errorMessage = "";
        errorMessage += super.isInvalid();
        
        if (!(typeof this.size === "string" && this.size.length >= 3)) {
            errorMessage += "Size is invalid, must be a string of at least 3 length\n";
        }
        if (!(typeof this.breed === "string" && this.breed.length >= 3)) {
            errorMessage += "Breed is invalid, must be a string of at least 3 length\n";
        }

        return errorMessage;
    }
}

const dogs = [];

Dog.getDogs = function () {
    return dogs;
}

Dog.addDog = function (dog) {
    dogs.push(dog);
}

module.exports = Dog;