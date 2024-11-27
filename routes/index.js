var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", function (req, res, next) {
  console.log(req.body);
  let user = { name: "nguyen van A", email: "abc@gmail.com" };
  let token = jwt.sign(user, "demoLogin", {
    expiresIn: "1800s",
  });
  res.status(200).json({ accsesToken: token });
});

module.exports = router;
