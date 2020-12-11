const router = require("express").Router();
const db = require("../models");

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
  res.render("signup", { isLoggedOut: true });
});

router.get("/login", function (req, res) {
  res.render("login", { isLoggedOut: true });
});

router.get("/", function (req, res) {
  res.render("index", { email: req.user.email, home: true });
});

router.get("/candle", function (req, res) {
  db.Candle.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function (candles) {
    res.render("candle/list", { candles, candleList: true });
  }).catch(function (err) {
    res.status(500).json(err);
  });
});

router.get("/candle/create", function (req, res) {
  res.render("candle/create", { candleCreate: true });
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                     END HTML Routes section                             //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

router.get("*", function (req, res) {
  res.status(404).render("404", { path: req.path, isLoggedOut: !req.user });
})

module.exports = router;