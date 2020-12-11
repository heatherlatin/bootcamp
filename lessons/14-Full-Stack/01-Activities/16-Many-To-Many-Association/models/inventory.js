module.exports = function(sequelize, DataTypes) {
    var inventory = sequelize.define("inventory", {
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.FLOAT(12, 2) 
      }
    }, {
        freezeTableName: true
    });
  
    return inventory;
  };
  