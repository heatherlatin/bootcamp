module.exports = function (sequelize, DataTypes) {
    var Animal = sequelize.define("Animal", {
        name: DataTypes.STRING,
        species: DataTypes.STRING,
        breed: DataTypes.STRING,
        color: DataTypes.STRING,
        age: DataTypes.DECIMAL,
        description: DataTypes.STRING
    });

    Animal.associate = function (models) {
        Animal.belongsTo(models.Shelter);
    }

    return Animal;
};