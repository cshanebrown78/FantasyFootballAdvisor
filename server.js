require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");
var path = require("path");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


app.set("views", path.join(__dirname, "public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

// Routes
require("./routes/players_apiRoutes")(app);
// require("./team_apiRoutes")
require("./routes/htmlRoutes")(app);
require("./routes/user_apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// Test
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
