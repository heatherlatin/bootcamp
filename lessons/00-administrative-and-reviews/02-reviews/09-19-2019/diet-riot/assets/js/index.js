// ========================================================  //
// =                     Functions                        =  //
// ========================================================  //

function getFoodItem() {
    var name = prompt("What is the food item's name?");
    // while this works for prompt, be careful using this
    // user input validation method for straight html code
    // (when there are no alerts, confirms, or prompts)
    var caloriePerServing;
    while(caloriePerServing === ""
        || caloriePerServing === null
        || isNaN(caloriePerServing)
        || caloriePerServing < 0) {
        caloriePerServing = prompt("Please enter the calories per serving of this item.");
    }
    caloriePerServing = parseInt(caloriePerServing);

    var servings;
    while(servings === ""
        || servings === null
        || isNaN(servings)
        || servings <= 0) {
            servings = prompt("Please enter the amount of servings you ate.");
    }
    servings = parseFloat(servings);
    return {
        name: name,
        caloriePerServing: caloriePerServing,
        servings: servings,
        getTotalCalories: function () {
            return this.caloriePerServing * this.servings;
        },
        log: function() {
            console.log("Name: ", this.name);
            console.log("Calories per Serving: ", this.caloriePerServing);
            console.log("Number of Servings: ", this.servings);
            console.log("Total Calorie Count: ", this.getTotalCalories());
            console.log("==================");
        },
        display: function() {
            var displayDiv = document.getElementById("food-items");
            function appendDiv(text, className) {
                var newDiv = document.createElement("div");
                newDiv.textContent = text;
                newDiv.classList.add(className);
                displayDiv.appendChild(newDiv);
            }
            appendDiv("Name: " + this.name, "name-div");
            appendDiv("Calories per Serving: " + this.caloriePerServing, "cps-div");
            appendDiv("Number of Servings: " + this.servings, "servings-div");
            appendDiv("Total Calorie Count: " + this.getTotalCalories(), "total-div");
        }
    };
}

function displayAllItems(foods) {
    for (var i = 0; i < foods.length; i++) {
        var foodItem = foods[i];
        foodItem.display();
    }
}

function logAllItems(foods) {
    for (var i = 0; i < foods.length; i++) {
        var foodItem = foods[i];
        foodItem.log();
    }
}

function addUpCalories(foods) {
    var totalCalories = 0;
    for (var i = 0; i < foods.length; i++) {
        var foodItem = foods[i];
        totalCalories += foodItem.getTotalCalories();
    }
    return totalCalories;
}

// ========================================================  //
// =                   Main Program                       =  //
// ========================================================  //

// Variables
// ~~~~~~~~~~~~~
var foodItems = [];
var keepLooping = true;


// Logic
// ~~~~~~~~~~~~~
while (keepLooping) {
    var newItem = getFoodItem();
    foodItems.push(newItem);
    keepLooping = confirm("Do you wish to keep adding food?");
}
// TODO: add up calories
logAllItems(foodItems);
var totalCalories = addUpCalories(foodItems);
console.log("Total Calories: ", totalCalories);

displayAllItems(foodItems);

var calorieDiv = document.getElementById("total-calories");
calorieDiv.textContent = "Total Calories: " + totalCalories;