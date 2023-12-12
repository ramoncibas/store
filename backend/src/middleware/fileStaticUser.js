const express = require('express');
const path = require('path');

const { BUCKET_USER_PICTURE } = process.env;

const fileStaticUser = express.static(path.join(__dirname, BUCKET_USER_PICTURE));

module.exports = fileStaticUser;
