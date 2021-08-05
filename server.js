const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Running"));
// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
