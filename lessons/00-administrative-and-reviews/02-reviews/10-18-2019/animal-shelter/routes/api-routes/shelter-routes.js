const express = require('express');
const { Cat, Dog } = require("../../models");
const router = express.Router()

// path: /api/shelter
router.post('/', function (req, res) {
  const { type, ...animalData } = req.body;
  let animal;
  if (type === "cat") {
    animal = new Cat(animalData);
    const isInvalid = animal.isInvalid();
    if (isInvalid) {
      return res.status(400).send(isInvalid);
    }
    Cat.addCat(animal);
  } else if (type === "dog") {
    animal = new Dog(animalData);
    const isInvalid = animal.isInvalid();
    if (isInvalid) {
      return res.status(400).send(isInvalid);
    }
    Dog.addDog(animal);
  } else {
    return res.status(400).send("Must have a type of cat or dog.");
  }
  res.send(`Create animal with data: ${JSON.stringify(animal)}`);

})

module.exports = router