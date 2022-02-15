const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/movies", function (req, res, next) {
  Movie.find().then((results) => {
    res.render("movies",{results: results});
    console.log("got all movies");
  });
});

router.get("/oneMovie/:one", function (req, res, next) {
  Movie.findById(req.params.one).then((results) => {
    res.render("oneMovie", results);
    console.log("worked showing one movie", results);
  });
});

module.exports = router;