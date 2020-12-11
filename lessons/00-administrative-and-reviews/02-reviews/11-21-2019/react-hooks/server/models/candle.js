module.exports = function(sequelize, DataTypes) {
  var PetPage = sequelize.define("PetPage", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    image: DataTypes.STRING
  });

  PetPage.associate = function (models) {
    PetPage.belongsTo(models.User);
  }
  
  return PetPage;
};
