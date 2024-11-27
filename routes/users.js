var jwt = require("jsonwebtoken");

var express = require("express");
var router = express.Router();
let User = require("../model/user");

function checklogin(req, res, next) {
  console.log(req.headers.authentication);
  let token = req.headers.authentication;
  try {
    var decoded = jwt.verify(token, "demoLogin");
    next();
  } catch (err) {
    res.status(404).json({ message: "Dang nhap that bai" });
  }
}
/* GET users listing. */
router.get("/", checklogin, async function (req, res, next) {
  let user = await User.find({});
  res.status(200).json({ data: user });
});

module.exports = router;
