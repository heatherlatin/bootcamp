const express = require("express");
const db = require("../../models");
const router = express.Router();

// method: GET route: /api/shelters
router.get("/", async function (req, res) {
    // use sequelize to get all shelters
    const shelters = await db.Shelter.findAll({ raw: true });
    res.json(shelters)
})

// method: POST route: /api/shelters
router.post("/", async function (req, res) {
    const {
        name,
        hours,
        description
    } = req.body;
    if (!name || !hours || !description) {
        return res.status(400).send("You must include name, hours and description along with request.")
    }
    const newShelter = {
        name,
        hours,
        description
    };
    const shelter = await db.Shelter.create(newShelter).get({plain: true});
    res.json(shelter);
})

// method: GET route: /api/shelters/full
router.get("/full", async function (req, res) {
    // use sequelize to get all shelters
    const shelters = await db.Shelter.findAll({ include: [db.Animal] }).map(shelter => shelter.get({plain: true}));
    // use console.table to display all shelters
    res.json(shelters);
});

// method: GET route: /api/shelters/full/:id
router.get("/full/:id", async function (req, res) {
    // use sequelize to get all shelters
    const dbShelter = await db.Shelter.findOne({ where: { id: parseInt(req.params.id) }, include: [db.Animal] });
    const shelter = dbShelter.get({plain: true});
    // use console.table to display all shelters
    res.json(shelter);
});

module.exports = router;