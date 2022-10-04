const express = require("express");
require("./database")
const morgan = require("morgan");
const Router = require("./routes");
const bodyParser = require("body-parser");
const config = require("../config");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.set("port", config.PORT || 5001);
app.use("/api", Router);

app.listen(app.get("port"), () => {
  console.log("listening on port", app.get("port"));
});
