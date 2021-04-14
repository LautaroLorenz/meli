const express = require("express");
const check = require("./validator");
const router = express.Router();

router.use(check.validHeaders);

router.get("/", function (req, res) {
  if (check.hasParam(req, "q")) {
    const search = req.query.q;

    return res.send(search);
  }

  res.send();
});

router.get("/:id", function (req, res) {
  const item = {};

  res.send(item);
});

module.exports = router;
