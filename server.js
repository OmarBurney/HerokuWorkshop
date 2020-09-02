var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.get("/rollDice", function (req, res) {
  res.send({ roll: Math.ceil(6 * Math.random()) });
});

app.listen(3000, function () {
  console.log("App listening on port: 3000");
});
