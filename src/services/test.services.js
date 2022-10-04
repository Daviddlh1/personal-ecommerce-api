const pool = require("../database");

const testServices = {};

testServices.getResponse = async () => {
  try {
    let data = await pool.query("SELECT * FROM Products");
    return data
  } catch (error) {
    console.error(error);
  }
};

module.exports = testServices