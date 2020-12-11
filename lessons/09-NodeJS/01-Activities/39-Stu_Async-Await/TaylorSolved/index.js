// const fs = require("fs");
// const util = require("util");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// async function combineAnimals() {
//   try {
//     const animalArr = [];
//     const catDataStr = await readFileAsync("cat.json", "utf-8");
//     const catData = JSON.parse(catDataStr);
//     animalArr.push(catData);

//     const dogDataStr = await readFileAsync("dog.json", "utf-8");
//     const dogData = JSON.parse(dogDataStr);
//     animalArr.push(dogData);

//     const goldfishDataStr = await readFileAsync("goldfish.json", "utf-8");
//     const goldfishData = JSON.parse(goldfishDataStr);
//     animalArr.push(goldfishData);

//     const hamsterDataStr = await readFileAsync("hamster.json", "utf-8");
//     const hamsterData = JSON.parse(hamsterDataStr);
//     animalArr.push(hamsterData);

//     console.log(animalArr);
//     //do something with cat data

//     writeFileAsync("combined.json", JSON.stringify(animalArr, null, 2))
//   } catch(err) {

//   }
// }

// combineAnimals();

const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const promiseArr = [];
    promiseArr.push(readFileAsync("cat.json", "utf-8").then(data => JSON.parse(data)));

    promiseArr.push(readFileAsync("dog.json", "utf-8").then(data => JSON.parse(data)));

    promiseArr.push(readFileAsync("goldfish.json", "utf-8").then(data => JSON.parse(data)));

    promiseArr.push(readFileAsync("hamster.json", "utf-8").then(data => JSON.parse(data)));

    const animalArr = await Promise.all(promiseArr);

    writeFileAsync("combined.json", JSON.stringify(animalArr, null, 2))
  } catch(err) {

  }
}

combineAnimals();
