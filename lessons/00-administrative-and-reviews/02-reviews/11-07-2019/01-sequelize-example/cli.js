const db = require("./models");
const inquirer = require("inquirer");

db.sequelize.sync().then(async function () {
    console.log("connected!");
    let repeat = true;
    while (repeat) {
        const { action } = await inquirer.prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [{
                name: "Create a shelter.",
                value: 1
            }, {
                name: "Create an animal.",
                value: 2
            }, {
                name: "View shelters.",
                value: 3
            }, {
                name: "View animals.",
                value: 4
            }, {
                name: "View shelters with their animal info.",
                value: 5
            }, {
                name: "View animals with their shelter info.",
                value: 6
            }]
        });
        switch (action) {
            case 1:
                // create a shelter;
                console.log("creating shelter...");
                // ask the user for info on what shelter to create
                const shelter = await inquirer.prompt([{
                    type: "input",
                    name: "name",
                    message: "What is the shelter's name?"
                }, {
                    type: "input",
                    name: "hours",
                    message: "What are the shelter's hours?"
                }, {
                    type: "input",
                    name: "description",
                    message: "What is the shelter's description?"
                }]);
                // then use sequelize to create a shelter
                const createShelterResult = await db.Shelter.create(shelter);
                console.table([createShelterResult.get({ plain: true })]);
                break;
            case 2:
                // create a shelter;
                console.log("creating animal...");
                // get all shelters;
                const shelters = await db.Shelter.findAll({ raw: true });
                // if no shelters, say create a shelter first!
                if (shelters.length === 0) {
                    console.log("please create a shelter first!");
                    break;
                }
                // otherwise ask the user info on what animal to create;
                const animal = await inquirer.prompt([{
                    type: "input",
                    name: "name",
                    message: "What is the animal's name?"
                }, {
                    type: "input",
                    name: "species",
                    message: "What are the animal's species?"
                }, {
                    type: "input",
                    name: "breed",
                    message: "What is the animal's breed?"
                }, {
                    type: "input",
                    name: "color",
                    message: "What is the animal's color?"
                }, {
                    type: "input",
                    name: "age",
                    message: "What is the animal's age?"
                }, {
                    type: "input",
                    name: "description",
                    message: "What is the animal's description?"
                }, {
                    type: "list",
                    name: "ShelterId",
                    message: "What shelter is this pet located at?",
                    choices: shelters.map(shelter => ({
                        name: shelter.name,
                        value: shelter.id
                    }))
                }]);
                // then use sequelize to create an animal
                const createAnimalResult = await db.Animal.create(animal);
                console.table([createAnimalResult.get({ plain: true })]);
                break;
            case 3:
                // create a shelter;
                console.log("get shelters...");
                // use sequelize to get all shelters
                const shelterResults = await db.Shelter.findAll({ raw: true });
                // use console.table to display all shelters
                console.table(shelterResults);

                break;
            case 4:
                // create a shelter;
                console.log("get animals...");
                // use sequelize to get all animals
                const animalResults = await db.Animal.findAll({ raw: true });
                // use console.table to display all animals
                console.table(animalResults);
                break;
            case 5:
                // get joined shelters;
                console.log("get shelters with animals...");
                // use sequelize to get all shelters
                const shelterResultsJoined = await db.Shelter.findAll({ include: [db.Animal] });
                // use console.table to display all animals
                shelterResultsJoined.forEach(shelter => {
                    console.log(`Name: ${shelter.name}`);
                    console.log(`Hours: ${shelter.hours}`);
                    console.log(`Description: ${shelter.description}`);
                    console.log("Animals: ")
                    console.table(shelter.Animals.map(animal => animal.get({plain: true})))
                })
                break;
            case 6:
                    // get joined animals;
                    console.log("get animals with shelters...");
                    // use sequelize to get all animals
                    const animalResultsJoined = await db.Animal.findAll({ include: [db.Shelter] });
                    // use console.table to display all animals
                    animalResultsJoined.forEach(animal => {
                        console.log(`Name: ${animal.name}`);
                        console.log(`Hours: ${animal.hours}`);
                        console.log(`Description: ${animal.description}`);
                        console.log("Shelter: ")
                        console.table([animal.Shelter.get({plain: true})])
                    })
                break;
            default:
                // create a shelter;
                throw new Error("How did you do that?");
        }
        const { repeatAns } = await inquirer.prompt({
            type: "confirm",
            name: "repeatAns",
            message: "Would you like to continue using shelter cli?"
        });
        repeat = repeatAns;
    }
    db.sequelize.close();
});