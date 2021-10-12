import path from "path";

const prodRootURL = path.join(__dirname, "..", "..", "client", "public");
const devRootURL = path.join(__dirname, "..", "..", "client", "public");

var express = require("express");
var app = express();
app.use(
    express.static(
        process.env.NODE_ENV === "production" ? prodRootURL : devRootURL
    )
);

module.exports = app;
