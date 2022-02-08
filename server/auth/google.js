const router = require("express").Router();
const passport = require("passport");
const { User } = require("../db");
const {
  GOOGLE_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CALLBACK,
} = require("../../secrets");

module.exports = router;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const googleConfig = {
  clientID: GOOGLE_CLIENT_ID,

  clientSecret: GOOGLE_SECRET,
  callbackURL: GOOGLE_CALLBACK,
};

const strategy = new GoogleStrategy(
  googleConfig,
  async (token, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    const firstName = profile.name.givenName || "a";
    const lastName = profile.name.familyName;
    const password = "123";
    const info = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      address: "default",
    };

    await User.findOrCreate({
      where: { googleId: profile.id },
      defaults: info,
    })
      .spread((user) => {
        done(null, user);
      })
      .catch(done);
  }
);
//google verifies the user
passport.use(strategy);

// Google authentication and login (GET /auth/google)
router.get(
  "/",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// handles the callback after Google has authenticated the user (GET /auth/google/callback)
router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "/home",
    failureRedirect: "/login",
  })
);
