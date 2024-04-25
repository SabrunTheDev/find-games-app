const Games = require("../models/Games");
const axiosInstance = require("../config/axiosConfig");

async function getGames(req, res) {
  try {
    const response = await axiosInstance.get("/games");
    const gamesData = response.data.results;

    const formattedData = [];

    for (const game of gamesData) {
      const existingGame = await Games.findOne({ name: game.name });

      if (!existingGame) {
        const formattedGame = {
          name: game.name,
          background_image: game.background_image,
          parent_platforms: game.parent_platforms.map(({ platform }) => ({
            platform: {
              id: platform.id,
              name: platform.name,
              slug: platform.slug,
            },
          })),
          metacritic: game.metacritic,
          rating_top: game.rating_top,
        };

        formattedData.push(formattedGame);
      }
    }

    if (formattedData.length > 0) {
      await Games.insertMany(formattedData);
    }

    console.log("Formatted data:", formattedData);
    res.json(formattedData);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Failed to fetch and insert games data" });
  }
}

module.exports = getGames;
