// var db = require("../models");
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/clubhouse", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/clubhouse.html"));
  });

  app.get("/draft", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/draft.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
