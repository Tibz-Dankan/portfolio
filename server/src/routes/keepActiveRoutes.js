const express = require("express");
const { getActiveStatus } = require("../controllers/keepActiveController");

const router = express.Router();

router.get("/active", getActiveStatus);

module.exports = router;
