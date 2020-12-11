// the line below isn't pulling from "db" it's pulling from "db/index.js"
const { query } = require("../db");
const inquirer = require("inquirer");

class Auction {
    constructor(name, category, startingBid, highestBid, id = null) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.startingBid = startingBid;
        this.highestBid = highestBid;
    }
    // converts javascript object (camel case) to database underscored columns
    toDatabase() {
        return {
            id: this.id,
            item_name: this.name,
            category: this.category,
            starting_bid: this.startingBid,
            highest_bid: this.highestBid
        }
    }
    // either updates database or inserts based on id existing or not
    async save() {
        const { id, ...update } = this.toDatabase();
        if (this.id === null) {
            return await query("INSERT INTO auctions SET ?", update);
        }
        return await query("UPDATE auctions SET ? WHERE ?", [update, { id }]);
    }
    // tries to bid if successful, return true, otherwise return false
    bid(bid) {
        if (bid > this.highestBid) {
            console.log("Your bid is higher!");
            this.highestBid = bid;
            return true;
        }
        console.log("Sorry, your bid is lower...");
        return false;
    }
}

// gets a unique set of category strings
Auction.getCategories = async function () {
    // this might eventually be in a category constructor.
    const categories = await query("SELECT DISTINCT category FROM auctions");
    return categories.map(({ category }) => category)
}

// prompts all information for an auction and builds an object with that info
Auction.prompt = async function () {
    const categories = await Auction.getCategories();
    categories.push("other - (create new)");
    let { name, category } = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the item you would like to submit?"
        },
        {
            type: 'list',
            name: 'category',
            message: 'Which category would this item belong to?',
            choices: categories
        }
    ]);
    if (category === "other - (create new)") {
        let { newCategory } = await inquirer.prompt({
            name: "newCategory",
            type: "input",
            message: "Which category would you like to create?",
            validate: function (value) {
                if (value === "other - (create new)") {
                    return false;
                }
                return true;
            }
        });
        category = newCategory;
    }
    const { startingBid } = await inquirer.prompt({
        name: "startingBid",
        type: "input",
        message: "What would you like your starting bid to be?",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        },
        filter: Number
    });
    return new Auction(name, category, startingBid, startingBid);
}

// takes a database row from a query and creates an auction object from it
Auction.fromDatabase = function ({ item_name: name, category, starting_bid: startingBid, highest_bid: highestBid, id }) {
    return new Auction(name, category, startingBid, highestBid, id);
}

// gets all auctions for a given category string.
Auction.getAuctions = async function (category) {
    const auctions = await query("SELECT * FROM auctions WHERE ?", { category });
    return auctions.map(auction => Auction.fromDatabase(auction));
}

module.exports = Auction;