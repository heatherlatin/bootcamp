const inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "ice_creamDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    inquirer.prompt({
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
    }).then(({ isBid }) => {
        if (isBid) {
            console.log("This is where I handle bidding.");
            readAuctions().then(results => {
                //  do something with results like prompt user which one they'd like to bid on.
            })
        } else {
            console.log("This is where I handle posting an auction.");
            inquirer.prompt(/* this is where questions for an auction go */).then(auctionInfo => {
                createAuction(auctionInfo);
            })
        }
    })
});


function readAuctions() {
    console.log("Selecting all products...\n");
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) {
                return reject(err);
            }
            // Log all results of the SELECT statement
            console.log(res);
            resolve(res);
        });
    })
}

function createAuction(auctionInfo) {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO products SET ?",
        {
            flavor: "Rocky Road",
            price: 3.0,
            quantity: 50
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}