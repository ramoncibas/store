const isAdmin = require("./isAdmin");
const auth = require("./auth");
const fileUpload = require("./fileUpload");
const fileStaticUser= require('./fileStaticUser');

module.exports = {
  isAdmin,
  auth,
  fileUpload,
  fileStaticUser
};