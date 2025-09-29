const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController");

// Update book stats: like, dislike, read, complete
router.post("/:id", statsController.updateBookStat);

module.exports = router;
