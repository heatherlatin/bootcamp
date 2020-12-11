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
    console.log(req.method);
    console.log(path);
    if (req.method === "GET") {
        // Depending on the URL, display a different HTML file.
        switch (path) {
    
            case "/":
                return displayPage("/index", 200, res);
    
            // case "/foods":
            // case "/movies":
            // case "/css":
            //     return displayPage(path, 200, res);
    
            default:
                return displayPage("/404", 404, res);
        }
    } else {
        // Saving the request data as a variable
        var requestData = "";
      
        // When the server receives data...
        req.on("data", function(data) {
      
          // Add it to requestData.
          requestData += data;
        });
      
        // When the request has ended...
        req.on("end", function() {
      
          // Log (server-side) the request method, as well as the data received!
          console.log("You did a", req.method, "with the data:\n", requestData);
          res.end("ok");
        });
    }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayPage(filename, status, res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(`${__dirname}/public${filename}.html`, function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(status, { "Content-Type": "text/html" });
        res.end(data);
    });
}