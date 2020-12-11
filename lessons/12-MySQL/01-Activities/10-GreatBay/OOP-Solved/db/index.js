var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "greatBay_DB"
});

const connectionPromise = new Promise((resolve, reject) => {
    connection.connect(function (err) {
        if (err) {
            return reject(err);
        };
        resolve(connection);
    });
});

// this function just makes things look nicer, usually we would just
// say `await connectionPromise` instead of `await getConnection()` below
function getConnection() {
    return connectionPromise;
}

async function query(...inputs) {
    // ensure every time we query we have a connection
    const connection = await getConnection();
    return new Promise((resolve, reject) => {
        connection.query(...inputs,
            function (err, results) {
                if (err) return reject(err);
                resolve(results);
            }
        );
    })
}

async function end() {
    // ensure before we end a connection, it has been established
    const connection = await getConnection();
    return connection.end();
}

module.exports = {
    query,
    end
}