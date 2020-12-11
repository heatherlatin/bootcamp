var db = require("../models");
var data = require("./seeds.json");

async function makeData(Model, models) {
    return await Promise.all(models.map(model => Model.create(model)));
}
db.sequelize.sync(/*{force:true}*/).then(async function () {
    await makeData(db.store, data.stores);
    await makeData(db.product, data.products);
    await makeData(db.inventory, data.inventory);
    await db.sequelize.close();
})