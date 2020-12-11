module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  const post = sequelize.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    category: DataTypes.STRING
  });
  return post;
};
