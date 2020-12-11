const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function(res) {
    appendFileAsync("jokes.txt", res.data.joke + "\n").then(() => {
      readFileAsync("jokes.txt", "utf-8").then(jokes => {
        console.log(jokes);
      }).catch((err) => {
        throw err
      });
    }).catch((err) => {
      throw err
    });
  });


const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function (res) {
    return appendFileAsync("jokes.txt", res.data.joke);
  }).then(function () {
    return readFileAsync("jokes.txt", "utf-8");
  }).then(function (jokes) {
    console.log(jokes);
  });
