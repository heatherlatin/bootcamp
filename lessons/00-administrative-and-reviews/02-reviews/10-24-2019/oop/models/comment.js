// the line below isn't pulling from "db" it's pulling from "db/index.js"
const DataTable = require("../config/orm");
// const inquirer = require("inquirer");

class Comment extends DataTable {
    constructor() {
        super("comment");
    }
    // either updates database or inserts based on id existing or not
    async save({ respondingToId = null, id = null, text, userId }) {
        super.save({id, text, userId, respondingToId })
    }
}

module.exports = Comment;