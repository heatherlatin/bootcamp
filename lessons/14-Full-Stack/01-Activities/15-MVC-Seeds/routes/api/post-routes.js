// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var { postController } = require("../../controllers");
var router = require("express").Router();

// Routes
// =============================================================

router.route("/")
  // method: GET route: /api/posts
  .get(postController.read)
  // method: POST route: /api/posts
  .post(postController.create)
  // method: PUT route: /api/posts
  .put(postController.update);

router.route("/:id")
  // method: GET route: /api/posts/:id
  .get(postController.readById)
  // method: DELETE route: /api/posts/:id
  .delete(postController.delete);

module.exports = router;
