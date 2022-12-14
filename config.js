const dotenv = require("dotenv");
const path = require("path")

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + ".env")
})

module.exports = {
    PORT: process.env.PORT,
    CONNECTION_STRING: process.env.CONNECTION_STRING
}