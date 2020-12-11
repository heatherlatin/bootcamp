// ========================================================  //
// =                     Functions                        =  //
// ========================================================  //
function createFoodItem(options) {
    return {
        name: options.name,
        caloriePerServing: options.caloriePerServing,
        servings: options.servings,
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
    }
}


function getFoodItems() {
    var items = [
        {
            name: "Donut",
            caloriePerServing: 400,
            servings: 2
        },
        {
            name: "Chicken Sandwich",
            caloriePerServing: 1000,
            servings: 0.5
        },
        {
            name: "Chocolate Cake",
            caloriePerServing: 100,
            servings: 5
        }
    ];
    var filledOutItems = [];
    for(var i = 0; i < items.length; i++) {
        filledOutItems.push(createFoodItem(items[i]));
    }
    return filledOutItems;
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
var foodItems = getFoodItems();
var keepLooping = true;


// Logic
// ~~~~~~~~~~~~~
// TODO: add up calories
logAllItems(foodItems);
var totalCalories = addUpCalories(foodItems);
console.log("Total Calories: ", totalCalories);

displayAllItems(foodItems);

var calorieDiv = document.getElementById("total-calories");
calorieDiv.textContent = "Total Calories: " + totalCalories;