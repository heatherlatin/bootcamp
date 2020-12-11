var { inventoryController } = require("../../controllers");
var router = require("express").Router();

router.route("/")
  // method: POST route: /api/inventory
  .post(inventoryController.api.create)
  // method: PUT route: /api/inventory
  .put(inventoryController.api.update);

router.route("/:storeId/:productId")
  // method: DELETE route: /api/inventory/:storeId/:productId
  .delete(inventoryController.api.delete);

module.exports = router;