const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, "../public")));
app.post("/reviews", async (req, res, next) => {
  console.log(req.body.photos);

  res.json({ message: "wip" });
});

module.exports = app;
