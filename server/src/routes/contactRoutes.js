const express = require("express");
const { postContactMessage } = require("../controllers/contactController");

const router = express.Router();

router.post("/post", postContactMessage);

module.exports = router;
