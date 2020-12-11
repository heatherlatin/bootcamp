var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function () {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return displayHome(res);

        case "/foods":
            return displayFavoriteFoods(res);

        case "/movies":
            return displayFavoriteMovies(res);

        case "/css":
            return displayFavoriteCSS(res);

        default:
            return display404(path, res);
    }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayHome(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/public/index.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayFavoriteFoods(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/public/foods.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayFavoriteMovies(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/public/movies.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayFavoriteCSS(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/public/css.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/public/404.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
    });
}
