var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.json(dbPlayers);
      
    });
  });

  app.get("/api/players/position/QB", function(req,res) {
      db.Players.findAll({
      where: {
        position: "QB"
      }
    }).then(function(dbPlayers) {
      res.json(dbPlayers)
    });
  });

  app.get("/api/players/position/RB", function(req,res) {
      db.Players.findAll({
      where: {
        position: "RB"
      }
    }).then(function(dbPlayers) {
      res.json(dbPlayers)
    });
  });

  app.get("/api/players/position/WR", function(req,res) {
    db.Players.findAll({
    where: {
      position: "WR"
    }
  }).then(function(dbPlayers) {
    res.json(dbPlayers)
  });
});

app.get("/api/players/position/TE", function(req,res) {
  db.Players.findAll({
  where: {
    position: "TE"
  }
}).then(function(dbPlayers) {
  res.json(dbPlayers)
});
});

app.get("/api/players/position/RB", function(req,res) {
      db.Players.findAll({
      where: {
        position: "RB"
      }
    }).then(function(dbPlayers) {
      res.json(dbPlayers)
    });
  });

  // PUt route for updating draft status
  app.put("/api/players/:id", function(req, res) {
    db.Players.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbPlayers) {
        res.json(dbPlayers)
      });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
