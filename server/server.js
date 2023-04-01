const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var compression = require("compression");
const multer = require("multer");
const upload = multer();
const { uploadFiles } = require("./helpers/cloudinary");
const { apiPostRequest } = require("../src/helpers/api");
const axios = require("axios");

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
    let newBody = {};
    Object.keys(req.body).forEach((key) => {
      newBody[key] = JSON.parse(req.body[key]);
    });
    if (req.files) newBody.photos = await uploadFiles(req.files);
    const response = await apiPostRequest("/reviews", newBody);
    if (response.data === "Created") {
      await res.status(201).json({ message: "Successfully created." });
    } else {
      throw new Error("Failed to upload to api.");
    }
  } catch (err) {
    res.status(500).json({ message: "An error was encountered", err });
  }
});

app.post("/answers", upload.array("photos", 5), async (req, res, next) => {
  const token = process.env.API_KEY;
  const headers = {
    Authorization: token,
  };

  let id = req.body.questionId;
  try {
    const photoUrls = await uploadFiles(req.files);
    let newBody = {};
    Object.keys(req.body).forEach((key) => {
      console.log(key, req.body[key]);
      newBody[key] = JSON.parse(req.body[key]);
    });
    delete newBody.questionId;
    newBody.photos = photoUrls;
    console.log("NEWBODY", newBody);
    // const response = await apiPostRequest(`/questions/${id}/answers`, newBody)
    const response = await axios.post(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/answers`,
      newBody,
      { headers }
    );
    if (response.data === "Created") {
      await res
        .status(201)
        .json({ message: "Successfully created.", photos: newBody.photos });
    } else {
      throw new Error("Failed to upload photo to api.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error has been encountered", err });
  }
});

module.exports = app;
