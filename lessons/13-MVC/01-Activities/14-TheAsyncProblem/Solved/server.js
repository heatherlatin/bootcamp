var orm = require("./config/orm.js");

// Call orm method, utilizing the .then to handle the data that comes back.
orm.selectWhere("parties", "party_type", "grown-up").then(function(result) {
  var data = result;
  console.log(data);
});
