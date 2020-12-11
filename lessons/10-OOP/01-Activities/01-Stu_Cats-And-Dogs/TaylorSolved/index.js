const dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

const cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

function massHysteria(cats, dogs) {
    if (cats.raining === true && dogs.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    } else {
        console.log("I guess it's not mass hysteria.");
    }
}

massHysteria(cats, dogs);

dogs.makeNoise();

cats.raining = true;
cats.makeNoise();

massHysteria(cats, dogs);