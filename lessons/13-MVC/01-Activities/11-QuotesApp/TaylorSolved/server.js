var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM quotes;", function(err, quotes) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { quotes });
  });
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function(req, res) {
  connection.query("SELECT * FROM quotes WHERE ?;", [{ id: req.params.id }], function(err, quotes) {
    if (err) {
      return res.status(500).end();
    }

    res.render("single-quote", quotes[0]);
  });
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {
  connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new plan
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {
  connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {
  connection.query("UPDATE quotes SET ? WHERE ?", [{
    author: req.body.author,
    quote: req.body.quote
  }, {
    id: req.params.id
  }], function(err, result) {
    if (err) {
      console.log(err);
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
