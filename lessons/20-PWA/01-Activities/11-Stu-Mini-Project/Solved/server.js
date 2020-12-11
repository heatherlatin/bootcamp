const express = require("express");
const db = require("./models");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/api.js"));

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
})
