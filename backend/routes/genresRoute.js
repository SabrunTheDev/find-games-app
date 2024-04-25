const express = require("express");
const router = express.Router();

const getGenres = require("../controllers/genreController");

router.route("/genres").get(getGenres);

module.exports = router;
