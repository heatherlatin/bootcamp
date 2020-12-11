module.exports = function(sequelize, DataTypes) {
  var store = sequelize.define("store", {
    // Giving the Store model a name of type STRING
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  store.associate = function(models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
    store.belongsToMany(models.product, {
      through: models.inventory
    });
    store.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return store;
};
