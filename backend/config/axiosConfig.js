const axios = require("axios");

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  params: { key: process.env.API_KEY },
});

module.exports = axiosInstance;
