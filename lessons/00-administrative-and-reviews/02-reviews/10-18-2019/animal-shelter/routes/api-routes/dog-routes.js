var express = require('express')
var router = express.Router()
const { Dog } = require("../../models");

// path: /api/dogs
router.get('/', function (req, res) {
  res.send(Dog.getDogs())
})
// path: /api/dogs/:dogId
router.get('/:dogId', function (req, res) {
  res.send(`get dog with id: ${req.params.dogId}`)
})

module.exports = router