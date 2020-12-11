var db = require("../models");

module.exports = {
    read: function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        return db.Author.findAll({
          include: [db.Post]
        }).then(function (dbAuthor) {
          res.json(dbAuthor);
        });
    },
    readById: function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Author.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Post]
        }).then(function (dbAuthor) {
          res.json(dbAuthor);
        });
    },
    create: function (req, res) {
        db.Author.create(req.body).then(function (dbAuthor) {
          res.json(dbAuthor);
        });
    },
    // update: function (req, res) {
        // FUTURE DEVELOPMENT;
    // },
    delete: function (req, res) {
        db.Author.destroy({
          where: {
            id: req.params.id
          }
        }).then(function (dbAuthor) {
          res.json(dbAuthor);
        });
    }
}