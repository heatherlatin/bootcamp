const express = require('express')
const router = express.Router()
const { Cat } = require("../../models");

// path: /api/cats
router.get('/', function (req, res) {
  res.json(Cat.getCats());
})
// path: /api/cats/:catId
router.get('/:catId', function (req, res) {
  res.send(`get cat with id: ${req.params.catId}`)
})

module.exports = router