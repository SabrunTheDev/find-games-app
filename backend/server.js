const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

// Import Configs
const connectToMongoDB = require("./config/db");

const app = express();

const gamesRoute = require("./routes/gamesRoute");
app.use("/api", gamesRoute);

const genresRoute = require("./routes/genresRoute");
app.use("/api", genresRoute);

async function startApp() {
  await connectToMongoDB("games");
  portListen();
}

function portListen() {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`This server is running on http://localhost:${port}`);
  });
}

// Run the application
startApp();
