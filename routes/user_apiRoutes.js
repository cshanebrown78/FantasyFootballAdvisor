var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/user-team", function(req, res) {
    db.Team.findAll({}).then(function(dbTeam) {
      res.json(dbTeam);
      
    });
  });

}