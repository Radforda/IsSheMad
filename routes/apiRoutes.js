var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
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

  //Post new tweet
  app.post("/api/new", function(req,res){
    console.log(req.body);
    db.userinput.create({
      user: req.body.author,
      text_input: req.body.text,
      score:10
    }).then(function(dbText){
      res.json(dbText)
      console.log(dbText , "DB Text");
    })
  })
};

