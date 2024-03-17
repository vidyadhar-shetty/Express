const { addStudent } = require("../controllers/studecontroller");

const router = require("express").Router();

router.post("/add", addStudent);

module.exports = router;
