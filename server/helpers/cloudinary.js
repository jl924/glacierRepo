require("dotenv").config();
const cloudinary = require("cloudinary").v2;

function uploadFiles(files) {
  const allFileUploads = [];

  files.forEach((file) => {
    allFileUploads.push(cloudinary.uploader.upload(file));
  });

  return Promise.all(allFileUploads).then((results) =>
    results.forEach((result) => console.log(result))
  );
}

module.exports = uploadFiles;
