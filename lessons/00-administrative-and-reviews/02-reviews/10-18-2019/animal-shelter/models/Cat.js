const Animal = require("./Animal");

class Cat extends Animal {
    constructor({ hairLength, mood, ...animal }) {
        super(animal);
        this.hairLength = hairLength;
        this.mood = mood;
    }

    isInvalid() {
        let errorMessage = "";
        errorMessage += super.isInvalid();
        
        if (!(typeof this.hairLength === "string" && this.hairLength.length >= 3)) {
            errorMessage += "Hair Length is invalid, must be a string of at least 3 length\n";
        }
        if (!(typeof this.mood === "string" && this.mood.length >= 3)) {
            errorMessage += "Mood is invalid, must be a string of at least 3 length\n";
        }

        return errorMessage;
    }
}

const cats = [];

Cat.getCats = function () {
    return cats;
}

Cat.addCat = function (cat) {
    cats.push(cat);
}

module.exports = Cat;