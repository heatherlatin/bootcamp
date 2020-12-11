// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/character");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
    }

    // Otherwise...
    else {
      Character.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;

    var routeName = character.name.replace(/\s+/g, "").toLowerCase();
    console.log(routeName);

    character.routeName = routeName;

    Character.create(character).then(function(results) {
      // `results` here would be the newly created chirp
      console.log(results);
      res.end();
    });

  });
};
