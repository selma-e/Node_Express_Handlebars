var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Read about this, index comes from index.handlebar
router.get("/index", function (req, res) {
    res.render("index", {

    });
});

module.exports = router;