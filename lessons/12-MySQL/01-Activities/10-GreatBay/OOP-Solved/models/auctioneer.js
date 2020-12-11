const inquirer = require("inquirer");
// the line below isn't pulling from "db" it's pulling from "db/index.js"
const { end } = require("../db");
const Auction = require("./auction");

class Auctioneer {
    // this function asks the user if they'd like to bid or post an auction
    async isBid() {
        const { isBid } = await inquirer.prompt({
            type: 'list',
            name: 'isBid',
            message: 'Post or Bid?',
            choices: [
                {
                    name: 'Post an Auction',
                    value: false
                },
                {
                    name: 'Bid an Auction',
                    value: true
                }
            ]
        });
        return isBid;
    }

    // user attempts to bid on an item, if they are successful save the updated info.
    async bid() {
        const categories = await Auction.getCategories();
        const { category } = await inquirer.prompt({
            type: 'list',
            name: 'category',
            message: 'Which category would you like to bid on?',
            choices: categories
        });
        const auctions = await Auction.getAuctions(category);
        const { auction, bid } = await inquirer.prompt([{
            type: 'list',
            name: 'auction',
            message: 'Which category would you like to bid on?',
            choices: auctions.map(auction => ({
                name: `${auction.name} - current bid: ${auction.highestBid}`,
                value: auction
            }))
        }, {
            name: "bid",
            type: "input",
            message: "What would you like to bid?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false
            },
            filter: Number
        }]);
        if (auction.bid(bid)) {
            return await auction.save();
        }
    }

    // user will input necessary info for an auction, then we will attempt to save it
    async post() {
        const auction = await Auction.prompt();
        auction.save();
    }

    // asks user if they'd like to continue using great bay
    async isContinue() {
        const { isContinue } = await inquirer.prompt({
            type: 'confirm',
            name: 'isContinue',
            message: 'Continue using great bay?'
        });
        return isContinue;
    }

    // says goodbye and closes connection.
    async goodbye() {
        console.log("Thanks for shopping.");
        end();
    }
}

module.exports = Auctioneer;