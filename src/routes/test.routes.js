const router = require("express").Router();
const { Controllers } = require("../controllers");
const testControllers = Controllers.Test;

router.get("/test", testControllers.test);

module.exports = router;