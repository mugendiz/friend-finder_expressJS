// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var htmlRoute = require(path.join(__dirname, "app/routing", "htmlRoutes.js" ))
var apiRoute = require(path.join(__dirname, "app/routing", "apiRoutes.js" ))

var PORT = process.env.PORT || 3030;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.normalize(path.join(__dirname, 'app/public'))));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

module.exports = app;

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
