module.exports = function (sequelize, DataTypes) {
    var Shelter = sequelize.define("Shelter", {
        name: DataTypes.STRING,
        hours: DataTypes.STRING,
        description: DataTypes.STRING
    });

    Shelter.associate = function (models) {
        Shelter.hasMany(models.Animal);
    }

    return Shelter;
};