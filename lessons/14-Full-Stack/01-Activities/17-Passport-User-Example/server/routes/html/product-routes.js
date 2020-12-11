var router = require("express").Router();
const { productController } = require("../../controllers");

// method: GET route: /products
router.get("/", productController.html.list);

// method: GET route: /products/view/:productId
router.get("/view/:productId", productController.html.view);

// method: GET route: /products/create
router.get("/create", productController.html.create);

  // method: GET route: /products/edit/:productId
router.get("/edit/:productId", productController.html.edit);

module.exports = router;