const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");

// Get user's reading history
router.get("/:user_id", historyController.getUserHistory);

module.exports = router;
