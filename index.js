const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/academics", function (req, res) {
  res.sendFile(path.join(__dirname, "Academics.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "Contact.html"));
});

app.get("/skills", function (req, res) {
  res.sendFile(path.join(__dirname, "Skills.html"));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
