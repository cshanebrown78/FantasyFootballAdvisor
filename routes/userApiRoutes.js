var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(allUsers) {
      res.json(allUsers);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(newUser) {
      res.json(newUser);
    });
  });
};
