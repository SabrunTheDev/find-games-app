const Genres = require("../models/Genres");
const axiosInstance = require("../config/axiosConfig");

async function getGenres(req, res) {
  try {
    const response = await axiosInstance.get("/genres");
    const genreData = response.data.results;

    const formattedGenreData = [];

    for (const genre of genreData) {
      console.log(genre);
      const existingGenre = await Genres.findOne({ name: genre.name });

      if (!existingGenre) {
        const formattedGenre = {
          name: genre.name,
          image_background: genre.image_background,
          slug: genre.slug,
          id: genre.id,
          games_count: genre.games_count,
          games: genre.games.map((game) => ({
            slug: game.slug,
            name: game.name,
            added: game.added,
          })),
        };

        formattedGenreData.push(formattedGenre);
      }
    }

    if (formattedGenreData.length > 0) {
      await Genres.insertMany(formattedGenreData);
    }

    console.log("Formatted data:", formattedGenreData);
    res.json(formattedGenreData);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Failed to fetch and insert games data" });
  }
}

module.exports = getGenres;
