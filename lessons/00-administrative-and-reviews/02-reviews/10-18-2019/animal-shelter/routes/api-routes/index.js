var express = require('express')
var router = express.Router()

router.use("/cats", require("./cat-routes"));
router.use("/dogs", require("./dog-routes"));
router.use("/shelter", require("./shelter-routes"));

module.exports = router