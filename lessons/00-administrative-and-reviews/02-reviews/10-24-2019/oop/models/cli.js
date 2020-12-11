const inquirer = require("inquirer");
// the line below isn't pulling from "db" it's pulling from "db/index.js"
const connection = require("../config/promisify-mysql");
const Comment = require("./comment");
const UserGroup = require("./user-group");
const User = require("./user");

class CLI {
    constructor () {
        this.comment = new Comment();
        this.userGroup = new UserGroup();
        this.user = new User();
    }
    // this function asks the user if they'd like to bid or post an auction
    async getAction() {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View Comments',
                    value: this.getComments
                },
                {
                    name: 'View Users',
                    value: this.getUsers
                },
                {
                    name: 'View Full Users',
                    value: this.getFullUsers
                },
                {
                    name: 'View Groups',
                    value: this.getGroups
                },
                {
                    name: 'Exit',
                    value: this.goodbye
                }
            ]
        });
        return await action.bind(this)();
    }

    async getComments() {
        const comments = await this.comment.get();
        comments.display();
    }

    async getUsers() {
        const users = await this.user.get();
        users.display();
    }

    async getFullUsers() {
        const users = await this.user.getFull();
        console.table(users);
    }

    async getGroups() {
        const userGroups = await this.userGroup.get();
        userGroups.display();
    }

    // asks user if they'd like to continue using great bay
    async isContinue() {
        const { isContinue } = await inquirer.prompt({
            type: 'confirm',
            name: 'isContinue',
            message: 'Continue using guild app?'
        });
        return isContinue;
    }

    // says goodbye and closes connection.
    async goodbye() {
        console.log("Thanks for guilding.");
        await connection.end();
        return -1;
    }
}

module.exports = CLI;