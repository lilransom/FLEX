﻿require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ Corrected console.log statement
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
