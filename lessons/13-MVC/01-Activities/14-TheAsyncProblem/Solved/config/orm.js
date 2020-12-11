var connection = require("./promisify-mysql.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    // It is key to return a promise so we can use it in other files.
    return connection.query(queryString, [tableInput, colToSearch, valOfCol]).then(function(result) {
      return result;
    }).catch(function(err) {
        throw err;
    });
  }
};

module.exports = orm;
