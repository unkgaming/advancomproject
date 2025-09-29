const pool = require("../db");

exports.addRating = async (req, res) => {
  try {
    const { book_id, user_id, rating } = req.body;
    const result = await pool.query(
      "INSERT INTO ratings (book_id, user_id, rating) VALUES ($1, $2, $3) RETURNING *",
      [book_id, user_id, rating]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add rating" });
  }
};
