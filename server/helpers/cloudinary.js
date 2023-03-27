require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { createReadStream } = require("fs");
const { Readable } = require("stream");

function bufferToStream(buffer) {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
}

cloudinary.config();

function uploadFiles(files) {
  return Promise.all(
    Array.from(files).map((file) => {
      return new Promise((resolve, reject) => {
        let uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "benj",
          },
          function (error, result) {
            if (error) return reject(error);
            else return resolve(result.secure_url);
          }
        );
        bufferToStream(file.buffer).pipe(uploadStream);
      });
    })
  ).catch((err) =>
    console.log("error encountered when trying to upload the photos", err)
  );
}

module.exports = { uploadFiles };
