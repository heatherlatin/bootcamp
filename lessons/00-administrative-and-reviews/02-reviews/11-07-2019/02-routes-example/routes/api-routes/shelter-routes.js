const express = require("express");
const router = express.Router();

// method: GET route: /api/shelters
router.get("/", function (req, res) {
    res.send("You hit the route where we will get all shelters and return them to you.");
})

// method: POST route: /api/shelters
router.post("/", function (req, res) {
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
    res.send("You hit the route where we will create a new shelter.\n" + JSON.stringify(newShelter, null, 2));
})

// method: GET route: /api/shelters/full
router.get("/full", function (req, res) {
    res.send("You hit the route where we will get all shelters and their animals and return them to you.");
});

// method: GET route: /api/shelters/full/:id
router.get("/full/:id", function (req, res) {
    res.send("You hit the route where we will get all an shelter with id: " + req.params.id + " and its animals and return the data to you.");
});

module.exports = router;