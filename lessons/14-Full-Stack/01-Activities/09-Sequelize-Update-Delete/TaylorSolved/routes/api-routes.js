// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.Todo.findAll({}).then(results => {
      res.json(results);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    const { id, createdAt, updatedAt, ...body } = req.body;
    db.Todo.create(body).then(results => {
      res.json(results);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(results => {
      res.json(results);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    const { id, createdAt, updatedAt, ...body } = req.body;
    db.Todo.update(body,{
      where: {
        id
      }
    }).then(results => {
      res.json(results);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  });
};
