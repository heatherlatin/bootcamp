// the line below isn't pulling from "db" it's pulling from "db/index.js"
const DataTable = require("../config/orm");
// const inquirer = require("inquirer");

class UserGroup extends DataTable {
    constructor() {
        super("userGroup");
    }
    // either updates database or inserts based on id existing or not
    async save({ id = null, name }) {
        super.save({id, name})
    }
}

module.exports = UserGroup;