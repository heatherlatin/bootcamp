const router = require("express").Router();
const { inventoryController } = require("../../controllers");

// method: GET route: /inventory/create/store/:storeId
router.get("/create/store/:storeId", inventoryController.html.createStoreInventory);

// method: GET route: /inventory/create/product/:productId
router.get("/create/product/:productId", inventoryController.html.createProductInventory);

// method: GET route: /inventory/edit/:storeId/:productId
router.get("/edit/store/:storeId/:productId", inventoryController.html.editStoreInventory);

// method: GET route: /inventory/edit/:storeId/:productId
router.get("/edit/product/:productId/:storeId", inventoryController.html.editProductInventory);

module.exports = router;