const router = require("express").Router();
const db = require("../models");
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Requiring our custom middleware for checking if a user is logged in
const isNotAuthenticated = require("../config/middleware/isNotAuthenticated");


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                        Middleware section                               //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// usually we don't separate the middleware section like this from the
// page routes below this section, but for this example it helps us
// to see the difference between handlebars and react

// These routes should redirect to home page if they are already logged in:
router.route(["/signup", "/login"]).get(isNotAuthenticated);

// These routes should redirect to login page if they are not logged in:
router.route(["/", "/candle", "/candle/create"]).get(isAuthenticated);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                      END Middleware section                             //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                       HTML Routes section                               //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
router.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/views/signup.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/views/login.html"));
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/views/index.html"));
});

router.get("/candle", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/views/candle/list.html"));
});

router.get("/candle/create", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/views/candle/create.html"));
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                     END HTML Routes section                             //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

router.get("*", function (req, res) {
  res.status(404).sendFile(path.join(__dirname, "../../client/views/404.html"));
});

module.exports = router;