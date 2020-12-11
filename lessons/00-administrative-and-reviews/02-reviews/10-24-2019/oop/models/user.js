// the line below isn't pulling from "db" it's pulling from "db/index.js"
const DataTable = require("../config/orm");
// const inquirer = require("inquirer");

class User extends DataTable {
    constructor() {
        super("user");
    }
    // either updates database or inserts based on id existing or not
    async save({ userGroupId, id = null, username }) {
        super.save({id, username, userGroupId })
    }
    async getFull() {
        return await super.join(["username", "name"], [{
            name: "user"
        }, {
            name: "userGroup",
            joinOnTable: "user",
            joinOnColumn: "userGroupId",
        }])
    }
}

module.exports = User;