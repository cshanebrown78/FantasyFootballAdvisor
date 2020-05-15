var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.post("/api/users", function(req, res) {
  //   console.log(req.body);
  //   db.User.findAll({}).then(function(returningUser) {
  //     console.log(db.User)
  //     for (var i = 0; i < db.User.length; i++){
  //       if (req.body.userName === db.User[i].userName && req.body.password === db.User[i].password){
  //         db.User.push(req.body);
  //         res.json(returningUser);
  //       } else if (req.body.userName !== db.User[i].userName || req.body.password !== db.User[i].password) {
  //         res.send("User not found.");
  //       }
  //     }
  //   });
  // });
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(allUsers) {
      res.json(allUsers);
    })
  })

  // Create a new example
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(newUser) {
      res.json(newUser);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
