const express = require("express");
const cors = require("cors");
require("dotenv").config();

const booksRoutes = require("./routes/books");
const usersRoutes = require("./routes/users");
const statsRoutes = require("./routes/stats");
const ratingsRoutes = require("./routes/ratings");
const historyRoutes = require("./routes/history");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/books", booksRoutes);
app.use("/users", usersRoutes);
app.use("/stats", statsRoutes);
app.use("/ratings", ratingsRoutes);
app.use("/history", historyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
