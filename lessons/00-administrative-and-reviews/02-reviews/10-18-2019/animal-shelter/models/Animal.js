class Animal {
    constructor({ name, color, age, image, description }) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.image = image;
        this.description = description;
    }

    isInvalid() {
        let errorMessage = "";

        if (!(typeof this.name === "string" && this.name.length >= 3)) {
            errorMessage += "Name is invalid, must be a string of at least 3 length\n";
        }
        if (!(typeof this.color === "string" && this.color.length >= 3)) {
            errorMessage += "Color is invalid, must be a string of at least 3 length\n";
        }
        if (!(typeof this.age === "number" && this.age >= 0)) {
            errorMessage += "Age is invalid, must be a number of 0 or greater\n";
        }
        if (!(typeof this.image === "string" && this.image.length >= 11)) {
            errorMessage += "Image is invalid, must be a string of at least 11 length\n";
        }
        if (!(typeof this.description === "string" && this.description.length >= 10)) {
            errorMessage += "Description is invalid, must be a string of at least 10 length\n";
        }

        return errorMessage;
    }
}

module.exports = Animal;