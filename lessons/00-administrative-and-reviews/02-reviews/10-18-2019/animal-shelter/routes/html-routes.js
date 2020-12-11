const express = require('express');
const path = require("path");

const router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
})
// define the adopt a cat page
router.get('/cats', function (req, res) {
  res.sendFile(path.join(__dirname, "../views/cats.html"));
})
// define the adopt a dog page
router.get('/dogs', function (req, res) {
  res.sendFile(path.join(__dirname, "../views/dogs.html"));
})
// define the admin page
router.get('/admin', function (req, res) {
  res.sendFile(path.join(__dirname, "../views/admin.html"));
})

module.exports = router