const express = require("express");
const router = express.Router();

const getGames = require("../controllers/gamesController");

router.route("/games").get(getGames);

module.exports = router;
