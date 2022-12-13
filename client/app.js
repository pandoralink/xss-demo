var express = require("express");
var path = require("path");
var logger = require("morgan");
var usersRouter = require("./routes/users");
// var initRouter = require("./routes/init");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", initRouter);
app.use("/", usersRouter);

module.exports = app;
