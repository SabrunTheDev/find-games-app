const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: String,
  background_image: String,
  parent_platforms: [
    {
      platform: {
        name: String,
        slug: String,
      },
    },
  ],
  metacritic: Number,
  rating_top: Number,
});

module.exports = mongoose.model("Game", gameSchema);
