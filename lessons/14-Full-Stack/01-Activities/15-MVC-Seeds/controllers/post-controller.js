var db = require("../models");

module.exports = {
    read: function (req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Post.findAll({
            where: query,
            include: [db.Author]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    readById: function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Author]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    create: function (req, res) {
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    update: function (req, res) {
        db.Post.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }
        ).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    delete: function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    }
}