var router = require("express").Router();

const inventoryRoutes = require("./inventory-routes");
router.use("/inventory", inventoryRoutes);

const productRoutes = require("./product-routes");
router.use("/products", productRoutes);

const storeRoutes = require("./store-routes");
router.use("/stores", storeRoutes);

module.exports = router;