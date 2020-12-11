module.exports = function (sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
      name: DataTypes.STRING,
      value: DataTypes.DECIMAL,
      date: {
        type: DataTypes.DATE,
        default: Date.now
      }
  });

  return Transaction;
};
