const express = require("express");
const router = express.Router();

router.use("/animals", require("./animal-routes"));
router.use("/shelters", require("./shelter-routes"));

module.exports = router;