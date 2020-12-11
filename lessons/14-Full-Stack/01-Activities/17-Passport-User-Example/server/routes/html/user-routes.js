var { userController } = require("../../controllers");
var router = require("express").Router();

// Route for logging user out
router.get("/logout", userController.html.logout);

router.get("/", userController.html.home);

router.get("/login", userController.html.login);

router.get("/signup", userController.html.signup);

module.exports = router;