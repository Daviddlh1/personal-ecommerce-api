const express = require("express")
const morgan = require("morgan")
const Router = require("./routes")
const app = express()

app.use("/api", Router)

app.listen("5001", () => {
    console.log("listening on port 5001")
})