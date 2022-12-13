const express = require("express");
const useComment = require("../utils/useComment");
const useName = require("../utils/useName");
const { generateHTML, generateSearchHTML } = require("../utils/util");

const router = express.Router();

router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  res.cookie("userId", String(username), {
    expires: new Date(Date.now() + 1000 * 60 * 60),
    httpOnly: true,
    signed: true,
  });
  res.send("success");
});

router.get("/name", function (req, res, next) {
  const [name, setName] = useName();

  res.send(name);
});

router.post("/name", function (req, res, next) {
  const [name, setName] = useName();
  const { name: updateName } = req.body;

  res.send(setName(updateName));
});

router.post("/v2/login", function (req, res, next) {
  const { username, password } = req.body;
  res.cookie("userId", String(username), {
    expires: new Date(Date.now() + 1000 * 60 * 60),
    httpOnly: true,
    signed: true,
  });
  res.send("success");
});

router.get("/name", function (req, res, next) {
  const [name, setName] = useName();

  res.send(name);
});

router.post("/name", function (req, res, next) {
  const [name, setName] = useName();
  const { name: updateName } = req.body;

  res.send(setName(updateName));
});

router.get("/v1/user", function (req, res, next) {
  const [name, setName] = useName();

  res.setHeader("Content-Type", "text/html");
  res.send(generateHTML(name));
});

router.get("/v1/name", function (req, res, next) {
  const [name, setName] = useName();

  res.send(name);
});

router.post("/v1/name", function (req, res, next) {
  const [name, setName] = useName();
  const { username: updateName } = req.body;

  res.send(setName(updateName));
});

router.get("/search", function (req, res, next) {
  const { search } = req.query;
  res.setHeader("Content-Type", "text/html");
  res.send(generateSearchHTML(search));
});

router.get("/v1/comment", function (req, res, next) {
  const [comment, setComment] = useComment();

  res.setHeader("Content-Type", "application/json");
  res.send(comment);
});

router.post("/v1/comment", function (req, res, next) {
  const [comment, setComment] = useComment();
  const { comment: updateComment } = req.body;

  res.send(setComment(updateComment));
});

module.exports = router;
