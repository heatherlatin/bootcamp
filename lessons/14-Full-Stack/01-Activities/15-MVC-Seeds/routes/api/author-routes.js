var { authorController } = require("../../controllers");
var router = require("express").Router();
router.route("/")
  // method: GET route: /api/authors
  .get(authorController.read)
  // method: POST route: /api/authors
  .post(authorController.create);

router.route("/:id")
  // method: GET route: /api/authors/:id
  .get(authorController.readById)
  // method: DELETE route: /api/authors/:id
  .delete(authorController.delete);

module.exports = router;