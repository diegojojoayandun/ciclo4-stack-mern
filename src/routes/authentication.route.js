const express = require("express");
const passport = require("passport");
const router = express.Router();
require("../lib/passport");

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res) => {
  passport.authenticate("local.signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    failureFlash: true,
  });
});

router.get("/login", (req, res) => {
  res.send("THIS IS YOUR PROFILE!");
});
module.exports = router;
