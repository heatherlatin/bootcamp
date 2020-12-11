const obj = {
    example: "value"
};
obj.example = "new";
console.log(obj);
const arr = [{
    food: "hotdog",
    eaten: 12
},{
    food: "lettuce",
    eaten: 10
},{
    food: "tomato",
    eaten: 5
},{
    food: "asparagus",
    eaten: 24
},{
    food: "egg",
    eaten: 7
}];
arr.push({
    food: "miscellaneous",
    eaten: 120
});
console.log(arr);

for(let i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(arr[i]);
        console.log("Eating one more of this.");
        arr[i].eaten++;
        console.log(arr[i]);
    }, 100);
}

const howManyEaten = arr.map(({eaten}) => eaten).reduce((prev, current) => prev + current, 0);
console.log(howManyEaten);

function noOptionsExample(isAwesome, likesSushi, whatKindOfSushi, likesGingerTea, hasCat, isAtUCI) {
    if (isAwesome) {
        console.log("Sup person.");
    }
    if (likesSushi) {
        console.log(`You like ${whatKindOfSushi}`);
    }
    if (likesGingerTea) {
        console.log("Ginger tea is okay.");
    }
    if (hasCat) {
        console.log("SO DO I!");
    }
    if (isAtUCI) {
        console.log("I'll see you tomorrow.");
    }
}

noOptionsExample(true, false, "I SAID I DON'T LIKE SUSHI", true, true, true);

function optionsExample({isAwesome = true, likesSushi = false, whatKindOfSushi, likesGingerTea = false, hasCat = false, isAtUCI = true}) {
    if (isAwesome) {
        console.log("Sup person.");
    }
    if (likesSushi) {
        console.log(`You like ${whatKindOfSushi}`);
    }
    if (likesGingerTea) {
        console.log("Ginger tea is okay.");
    }
    if (hasCat) {
        console.log("SO DO I!");
    }
    if (isAtUCI) {
        console.log("I'll see you tomorrow.");
    }
    
}

optionsExample({
    likesGingerTea: true,
    hasCat: true
});


function name(things) {
    //do stuff
    console.log("Hello " + things);
}

name("Taylor");

const name2 = (things) => {
    //do stuff
    console.log("Hello2 " + things);
}

name("John");


const person = {
    name: "Taylor Blanche",
    sayMyName: function() {
        console.log("Hey there " + this.name);
        function helper() {
            console.log("This is " + this.name + " responding");
        }
        helper();
    }
}

person.sayMyName();


const person2 = {
    name: "Taylor Blanche",
    sayMyName: () => {
        console.log("Hey there " + this.name);
        const helper = () => {
            console.log("This is " + this.name + " responding");
        }
        helper();
    }
}

person2.sayMyName();


const person3 = {
    name: "Taylor Blanche",
    sayMyName: function() {
        console.log("Hey there " + this.name);
        const helper = () => {
            console.log("This is " + this.name + " responding");
        }
        helper();
    }
}

person3.sayMyName();