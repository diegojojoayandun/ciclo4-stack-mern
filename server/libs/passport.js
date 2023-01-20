// const passport = require("passport");
// const localStrategy = require("passport-local");

// passport.use(
//   "local.signup",
//   new localStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//       passReqToCallback: true,
//     },
//     async (req, username, password, done) => {
//       console.log(req.body);
//     }
//   )
// );

import passport from "passport";
import localStrategy from "passport-local";
// const localStrategy = require("passport-local");

passport.use(
  "local.signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      console.log(req.body);
    }
  )
);
