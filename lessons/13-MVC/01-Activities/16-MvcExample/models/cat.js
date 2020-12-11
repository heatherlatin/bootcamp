// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    return orm.all("cats");
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    return orm.create("cats", cols, vals);
  },
  update: function(objColVals, condition, cb) {
    return orm.update("cats", objColVals, condition);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
