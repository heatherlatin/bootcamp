var router = require("express").Router();
// middleware is used to make it so users can't access routes when they aren't
// logged in.
const isAuthenticated = require("../../config/middleware/isAuthenticated");

const inventoryRoutes = require("./inventory-routes");
// middleware is used to make it so users can't access routes when they aren't
// logged in.
router.use("/inventory", isAuthenticated, inventoryRoutes);

const productRoutes = require("./product-routes");
// middleware is used to make it so users can't access routes when they aren't
// logged in.
router.use("/products", isAuthenticated, productRoutes);

const storeRoutes = require("./store-routes");
// middleware is used to make it so users can't access routes when they aren't
// logged in.
router.use("/stores", isAuthenticated, storeRoutes);

const userRoutes = require("./user-routes");
router.use(userRoutes);

module.exports = router;