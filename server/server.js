const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var compression = require("compression");
const multer = require("multer");
const upload = multer();
const { uploadFiles } = require("./helpers/cloudinary");
const { apiPostRequest } = require("../src/helpers/api");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

app.use(express.static(path.join(__dirname, "../public")));
app.post("/reviews", upload.array("photos", 5), async (req, res, next) => {
  try {
    const photoUrls = await uploadFiles(req.files);
    let newBody = {};
    Object.keys(req.body).forEach((key) => {
      console.log(key, req.body[key]);
      newBody[key] = JSON.parse(req.body[key]);
    });
    newBody.photos = photoUrls;
    const response = await apiPostRequest("/reviews", newBody);
    if (response.data === "Created") {
      await res.status(201).json({ message: "Successfully created." });
    } else {
      throw new Error("Failed to upload to api.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error was encountered", err });
  }
});

module.exports = app;
