var connection = require("./promisify-mysql.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol]).then(function(result) {
      return result;
    }).catch(function(err) {
        throw err;
    });
  }
};

module.exports = orm;
