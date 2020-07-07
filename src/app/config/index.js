require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT,
  },
  mongoDB: {
    uri: process.env.MONGO_URL,
  },
};
