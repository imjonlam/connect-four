import path from "path";

var express = require("express");
var app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "client", "public")));
} else {
    app.use(
        express.static(path.join(__dirname, "..", "..", "client", "public"))
    );
}

app.get("/", function (request, response) {
    response.send("Hello World!");
});

module.exports = app;
