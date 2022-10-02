const mongoose = require("mongoose");
const { CONNECTION_STRING } = require("../config");
const { Schema } = mongoose

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose