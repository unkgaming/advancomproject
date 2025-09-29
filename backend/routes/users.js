const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Register new user
router.post("/", usersController.registerUser);

// Login user
router.post("/login", usersController.loginUser);

module.exports = router;
