const express = require("express");
const app = express();
const PORT = 5000;

app.get("/test", (req, res) => {
  res.status(200).json("Welcome, your app is working well 🚀");
});

//* main route
app.get("/", (req, res) => {
  res.status(200).json("Vintage Server Is Running 🚀");
});

app.get("*", (req, res) => {
  res.status(200).json("Invalid Route For Vintage LeftOver 😵❎");
});

app.listen(PORT, () => {
  console.log(`🌐 Server running at PORT:${PORT}`);
});

module.exports = app;
