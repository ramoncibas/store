const upload = require("express-fileupload")

const uploadUser = upload({
  useTempFiles: true,
  tempFileDir: "temp",
  limits: { fileSize: 50 * 1024 * 1024 },
  preserveExtension: true,
  safeFileNames: true,
  debug: true
});

module.exports = uploadUser;