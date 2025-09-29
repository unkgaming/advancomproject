const pool = require("../db");

exports.updateBookStat = async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.body; // like, dislike, read, complete
    let column = "";

    if (action === "like") column = "likes";
    else if (action === "dislike") column = "dislikes";
    else if (action === "read") column = "total_read";
    else if (action === "complete") column = "completion";
    else return res.status(400).json({ error: "Invalid action" });

    const result = await pool.query(
      `UPDATE book_stats SET ${column} = ${column} + 1 WHERE book_id=$1 RETURNING *`,
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update stats" });
  }
};
