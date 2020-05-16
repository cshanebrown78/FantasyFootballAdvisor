var db = require("../models");

module.exports = function(app) {

  // User info get
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(allUsers) {
      res.json(allUsers);
    })
  })

  // User info push to db
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(newUser) {
      res.json(newUser);
    });
  });

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


};
