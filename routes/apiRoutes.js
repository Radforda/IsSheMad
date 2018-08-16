var db = require("../models");

module.exports = function(app) {
  // Get all top ten
  app.get("/api/topten", function(req, res) {
    db.Post.findAll({
      where: {
        score: req.body.score
      },
      order: ["score", "DESC"]
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Post.create(req.body).then(function(dbExample) {
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
    console.log("hi")
    db.userInput.create({
      user: req.body.authorName,
      text_input: body.author.inputText,
      score:10
    }).then(function(dbText){
      res.json(dbText)
      console.log("Post request made");
    })
  })

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Post.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

};

