const express = require("express");
const router = express.Router();
const ratingsController = require("../controllers/ratingsController");

// Add a rating for a book
router.post("/", ratingsController.addRating);

module.exports = router;
