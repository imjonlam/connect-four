import path from "path";

const prodURL = path.join(__dirname, "..", "..", "client", "public");
const devURL = path.join(__dirname, "..", "..", "client", "public");

var express = require("express");
var app = express();
app.use(
    express.static(process.env.NODE_ENV === "production" ? prodURL : devURL)
);

module.exports = app;
