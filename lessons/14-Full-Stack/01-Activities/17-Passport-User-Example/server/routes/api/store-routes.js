var { storeController } = require("../../controllers");
var router = require("express").Router();
router.route("/")
  // method: GET route: /api/stores
  .get(storeController.api.read)
  // method: POST route: /api/stores
  .post(storeController.api.create)
  // method: PUT route: /api/stores
  .put(storeController.api.update);

router.route("/:id")
  // method: GET route: /api/stores/:id
  .get(storeController.api.readById)
  // method: DELETE route: /api/stores/:id
  .delete(storeController.api.delete);

module.exports = router;