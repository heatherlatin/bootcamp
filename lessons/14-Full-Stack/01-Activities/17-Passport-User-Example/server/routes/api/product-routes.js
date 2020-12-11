var { productController } = require("../../controllers");
var router = require("express").Router();
router.route("/")
  // method: GET route: /api/products
  .get(productController.api.read)
  // method: POST route: /api/products
  .post(productController.api.create)
  // method: PUT route: /api/products
  .put(productController.api.update);

router.route("/:id")
  // method: GET route: /api/products/:id
  .get(productController.api.readById)
  // method: DELETE route: /api/products/:id
  .delete(productController.api.delete);

module.exports = router;