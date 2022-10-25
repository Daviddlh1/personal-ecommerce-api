const express = require("express");
const morgan = require("morgan");
const { database } = require("./keys")
const bodyParser = require("body-parser");
const cors = require("cors")
const config = require("../config");
const Router = require("./routes");
const app = express();
//require("./database")

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors())
app.set("port", config.PORT || 5001);
app.use("/api", Router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.listen(app.get("port"), () => {
  console.log("listening on port", app.get("port"));
});
