const upload = require("express-fileupload")

const fileUpload = upload({
  useTempFiles: true,
  tempFileDir: "temp",
  limits: { fileSize: 50 * 1024 * 1024 },
  preserveExtension: true,
  safeFileNames: true,
  debug: true
});

module.exports = fileUpload;