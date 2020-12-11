var connection = require("./promisify-mysql.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol]).then(function(result) {
      console.table(result);
    }).catch(function (err) {
        throw err;
    });
  },
  select: function(table) {
    var queryString = "SELECT * FROM ??";
    console.log(queryString);
    connection.query(queryString, [table]).then(function(result) {
      console.table(result);
    }).catch(function (err) {
        throw err;
    });
  },
  join: function(tableOne, tableTwo, tableTwoCol) {
    var queryString =
      "SELECT * FROM ?? JOIN ?? ON ??.?? = ??.id";

    connection.query(
      queryString,
      [tableOne, tableTwo, tableTwo, tableTwoCol, tableOne])
    .then(function(result) {
      console.table(result.reduce((prev, { id, ...current }) => {
        prev[id] = current;
        return prev;
      }, {}));
    }).catch(function (err) {
        throw err;
    });
  }
};

module.exports = orm;
