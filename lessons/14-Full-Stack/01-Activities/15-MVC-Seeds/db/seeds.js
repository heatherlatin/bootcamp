// Requiring our models for syncing
var db = require("../models");
var data = require("./seeds.json");

// Syncing our sequelize models and then starting our Express app
// =============================================================

function seedDb(Model, models) {
    return Promise.all(models.map(model => Model.create(model)));
}

// if you want next deployment to wipe out and remake database,
// uncomment {force:true} and push to heroku, 
// but be sure to comment it back at some
// point so it doesn't always remake your database.
db.sequelize.sync(/*{force: true}*/).then(async function() {
    // since posts require authors as a column, we run authors first
    await seedDb(db.Author, data.authors);
    await seedDb(db.Post, data.posts);
    await db.sequelize.close();
});