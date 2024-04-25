const mongoose = require("mongoose");

const connectToMongoDB = async (dbName = "games") => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: dbName,
    });
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Could not connect to MongoDB: ", error);
    process.exit(1);
  }
};

module.exports = connectToMongoDB;
