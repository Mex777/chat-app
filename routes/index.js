var express = require("express");
var moment = require("moment");
var router = express.Router();

const messages = [
  {
    title: "Hello",
    text: "Hi there!",
    user: "Amando",
    added: moment().format("LLL"),
  },
  {
    title: "Hi",
    text: "Hello World!",
    user: "Charles",
    added: moment().format("LLL"),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages });
});

router.get("/add", function (req, res, next) {
  res.render("add");
});

router.post("/add", (req, res) => {
  let obj = req.body;
  obj["added"] = moment().format("LLL");
  messages.push(obj);
  res.redirect("/");
  console.log(req.body);
});

module.exports = router;
