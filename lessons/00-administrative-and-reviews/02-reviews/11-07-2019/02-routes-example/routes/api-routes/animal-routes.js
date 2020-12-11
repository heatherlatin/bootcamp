const express = require("express");
const router = express.Router();

// method: GET route: /api/animals
router.get("/", function (req, res) {
    res.send("You hit the route where we will get all animals and return them to you.");
})

// method: POST route: /api/animals
router.post("/", function (req, res) {
    const {
        name,
        species,
        breed,
        color,
        age,
        description,
        ShelterId
    } = req.body;
    if (!name || !species || !breed || !color || !age || !description || !ShelterId) {
        return res.status(400).send("You must include name, species, breed, color, age, description and ShelterId along with request.")
    }
    const newAnimal = {
        name,
        species,
        breed,
        color,
        age,
        description,
        ShelterId
    };
    res.send("You hit the route where we will create a new animal.\n" + JSON.stringify(newAnimal, null, 2));
})

// method: GET route: /api/animals/full
router.get("/full", function (req, res) {
    res.send("You hit the route where we will get all animals and their shelters and return them to you.");
});

// method: GET route: /api/animals/full/:id
router.get("/full/:id", function (req, res) {
    res.send("You hit the route where we will get all an animal with id: " + req.params.id + " and its shelter and return the data to you.");
});

module.exports = router;