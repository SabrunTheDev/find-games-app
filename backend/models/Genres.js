const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: String,
  slug: String,
  games_count: Number,
  image_background: String,
  games: [
    {
      slug: String,
      name: String,
      added: Number,
    },
  ],
});

module.exports = mongoose.model("Genre", genreSchema);
