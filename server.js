
var express = require("express");
var app = express();

app.use(express.static("./dist/rkVersonTwo"));

app.get("/*", function (req, res) {
    res.sendFile("index.html", { root: "dist/rkVersonTwo/" }
    );
});

app.listen(process.env.PORT || 8080);