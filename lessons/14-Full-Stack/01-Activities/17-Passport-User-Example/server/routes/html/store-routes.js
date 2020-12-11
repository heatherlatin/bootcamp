var router = require("express").Router();
const { storeController } = require("../../controllers");

// method: GET route: /stores
router.get("/", storeController.html.list);

// method: GET route: /stores/view/:storeId
router.get("/view/:storeId", storeController.html.view);

// method: GET route: /stores/create
router.get("/create", storeController.html.create);

  // method: GET route: /stores/edit/:storeId
router.get("/edit/:storeId", storeController.html.edit);

module.exports = router;