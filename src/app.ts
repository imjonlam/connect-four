import path from "path";

const prodURL = path.join(__dirname, "client", "public", "index.html");
const devURL = path.join(
    __dirname,
    "..",
    "..",
    "client",
    "public",
    "index.html"
);

var express = require("express");
var app = express();
app.use(
    express.static(process.env.NODE_ENV === "production" ? prodURL : devURL)
);

app.get("*", function (req, res) {
    res.sendFile(process.env.NODE_ENV === "production" ? prodURL : devURL);
});

module.exports = app;
