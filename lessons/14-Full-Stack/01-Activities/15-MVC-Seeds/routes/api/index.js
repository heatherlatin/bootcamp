var router = require("express").Router();

const authorRoutes = require("./author-routes");
router.use("/authors", authorRoutes);

const postRoutes = require("./post-routes");
router.use("/posts", postRoutes);

module.exports = router;