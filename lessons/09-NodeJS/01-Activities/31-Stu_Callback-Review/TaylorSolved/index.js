const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  console.log(animalJSON);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = animalJSON.filter(({species}) => species === 'dog');
  const cats = animalJSON.filter(({species}) => species === 'cat');

  const dogsStr = JSON.stringify(dogs);
  fs.writeFile("dogs.json", dogsStr, function(err) {
    if (err) {
      throw err;
    }
    console.log("dog success!");
  });
  const catsStr = JSON.stringify(cats);
  fs.writeFile("cats.json", catsStr, function(err) {
    if (err) {
      throw err;
    }
    console.log("cat success!");
  });
});
