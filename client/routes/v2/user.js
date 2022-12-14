const express = require("express");
const { generateSearchHTMLWithEscape } = require("../../utils/util");

const router = express.Router();

router.get("/search", function (req, res, next) {
  const { search } = req.query;
  res.setHeader("Content-Type", "text/html");
  res.send(generateSearchHTMLWithEscape(search));
});

module.exports = router;
