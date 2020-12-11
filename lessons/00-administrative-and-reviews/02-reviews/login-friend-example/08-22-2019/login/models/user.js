// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
    // Associating Product with Posts
    // When an Product is deleted, also delete any associated Posts
    User.belongsToMany(User, {
      // this relationship will show as friend1 in resulting object
      as: "friend1",
      // the column to hold the info will be friend2Id
      foreignKey: "friend2Id",
      through: models.Friend,
      required: true
    });
    User.belongsToMany(User, {
      // this relationship will show as friend2 in resulting object
      as: "friend2",
      // the column to hold the info will be friend1Id
      foreignKey: "friend1Id",
      through: models.Friend,
      required: true
    });
  };
  User.prototype.getFriends = function () {
    var friend1 = this.friend1;
    var friend2 = this.friend2;
    if (!friend1) {
      friend1 = [];
    }
    if (!friend2) {
      friend2 = [];
    }
    return [...this.friend1, ...this.friend2];
  }

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate(function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
