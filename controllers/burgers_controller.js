var express = require("express");
const burgerORM = require("../models/burger.js");

var router = express.Router();

//send back all the burgers
router.get("/", function (req, res) {
  burgerORM.selectAll(function (result) {
    res.render("index", {
      burgers: result,
    });
  });
});

//creating the burger
router.post("/create", function (req, res) {
  var createBurger = "INSERT";
  burgerORM.insertOne(req.body, function (result) {
    res.json(result);
  });
});

//delete a burger when you eat it
router.put("/devour/:id", function (req, res) {
  burgerORM.updateOne(
    {
      devoured: true,
    },
    req.params.id,
    function (result) {
      res.json(result);
    }
  );
});

module.exports = router;
