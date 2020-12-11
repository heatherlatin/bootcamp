const express = require("express");
const db = require("../../models");
const router = express.Router();

// method: GET route: /api/animals
router.get("/", async function (req, res) {
    // use sequelize to get all animals
    const animals = await db.Animal.findAll({ raw: true });
    res.json(animals)
})

// method: POST route: /api/animals
router.post("/", async function (req, res) {
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
    const animal = await db.Animal.create(newAnimal).get({plain: true});
    res.json(animal);
})

// method: GET route: /api/animals/full
router.get("/full", async function (req, res) {
    // use sequelize to get all animals
    const animals = await db.Animal.findAll({ include: [db.Shelter] }).map(animal => animal.get({plain: true}));
    // use console.table to display all animals
    res.json(animals);
});

// method: GET route: /api/animals/full/:id
router.get("/full/:id", async function (req, res) {
    // use sequelize to get all animals
    const dbAnimal = await db.Animal.findOne({ where: { id: parseInt(req.params.id) }, include: [db.Shelter] });
    const animal = dbAnimal.get({plain: true});
    // use console.table to display all animals
    res.json(animal);
});

module.exports = router;