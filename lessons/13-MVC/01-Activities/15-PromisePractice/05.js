const inquirer = require("inquirer");
// we can also create functions that return promises
// through the use of the `async` keyword.
// not only does this return a promise, it also allows
// us to flatten out other promises, and it makes
// scoping more simple between promises that need to
// share data.

// e.g.
// old way:
function promiseWay() {
    doYouWantToJoin().then(({ wantToJoin }) => {
        if (wantToJoin) {
            whyDoYouWantToJoin().then(({ whyJoin }) => {
                if (whyJoin === "friends") {
                    console.log("Great you have friends!");
                } else {
                    console.log("I wish I knew why you joined...");
                }
            });
        } else {
            whyDontYouWantToJoin().then(({ whyNotJoin }) => {
                if (whyNotJoin === "ads") {
                    console.log("Sorry, we need money.");
                } else {
                    console.log("I wish I knew why you won't join...");
                }
            });
        }
    });
}

// with async functions:
async function asyncFunctionWay() {
    const { wantToJoin } = await doYouWantToJoin();
    if (wantToJoin) {
        const { whyJoin } = await whyDoYouWantToJoin();
        if (whyJoin === "friends") {
            console.log("Great you have friends!");
        } else {
            console.log("I wish I knew why you joined...");
        }
    } else {
        const { whyNotJoin } = await whyDontYouWantToJoin();
        if (whyNotJoin === "ads") {
            console.log("Sorry, we need money.");
        } else {
            console.log("I wish I knew why you won't join...");
        }
    }
}

// both functions do the same thing:
// but only have 1 uncommented at a time!

// promiseWay();
asyncFunctionWay();

// helper functions:
function doYouWantToJoin() {
    return inquirer.prompt({
        name: "wantToJoin",
        type: "confirm",
        message: "Would you like to join?"
    })
}

// helper functions:
function whyDoYouWantToJoin() {
    return inquirer.prompt({
        name: "whyJoin",
        type: "list",
        choices: ["friends", "other"],
        message: "Why do you want to join?"
    });
}

// helper functions:
function whyDontYouWantToJoin() {
    return inquirer.prompt({
        name: "whyNotJoin",
        type: "list",
        choices: ["ads", "other"],
        message: "Why don't you want to join?"
    });
}