const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER || "admin",
  host: "localhost",
  database: process.env.DB_NAME || "articles",
  password: process.env.DB_PASS || "admin123",
  port: 5432,
});

module.exports = pool;
