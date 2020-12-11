var express = require('express')
var router = express.Router()

router.use(require("./html-routes"));
router.use("/api", require("./api-routes"));

module.exports = router