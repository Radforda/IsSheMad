var db = require("../models");
var logic = require("../logic/logic")

module.exports = function(app) {
  // Get all top ten
  app.get("/api/topten", function(req, res) {
    db.userinputs.findAll({
      order: [["score", "DESC"]]
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/rank", function(req, res) {
    db.userinputs.findAll({
      order: [["score", "DESC"]]
    }).then(function(data) {
      res.json(data);
    })
  })

  //Post new tweet
  app.post("/api/new", function(req,res){
    var num = logic.run(req.body.text);
    db.userinputs.create({
      user: req.body.author,
      text: req.body.text,
      score:num
    }).then(function(dbText){
      res.json(dbText)
      console.log(dbText , "DB Text");
    })
  })

};

