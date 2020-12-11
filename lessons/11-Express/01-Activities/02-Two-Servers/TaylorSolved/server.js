// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT_ONE = 7000;
 
// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Great Job!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT_ONE, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT_ONE);
});



// Define a port to listen for incoming requests
var PORT_TWO = 7500;
 
// Create a generic function to handle requests and responses
function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Awesome Job!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server2.listen(PORT_TWO, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT_TWO);
});