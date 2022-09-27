const pool = require("../database");

const testServices = {};

testServices.getResponse = async () => {
  try {
    let data = await pool.query("SELECT * FROM Products");
    console.log(data)
    console.log("Pasé")
    return data
  } catch (error) {
    console.error(error);
  }
};

module.exports = testServices