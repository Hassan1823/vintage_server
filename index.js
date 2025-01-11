const express = require("express");
const app = express();
const PORT = 4000;

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

//* main route
app.get("/", (req, res) => {
  res.status(200).json("Vintage Server Is Running 🚀");
});

app.listen(PORT, () => {
  console.log(`🌐 Server running at PORT:${PORT}`);
});

module.exports = app;
