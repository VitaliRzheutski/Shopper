const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const { db } = require("./db");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sessionStore = new SequelizeStore({ db });
const { User } = require("./db");
const app = express();

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === "test") {
  after("close the session store", () => sessionStore.stopExpiringSessions());
}
// session middleware with passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || "my best friend is Cody",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// passport registration
passport.serializeUser((user, done) => done(null, user.id));
// passport.serializeUser(function (user, done) {
//   console.log("user,", user);

//   done(null, user.id);
// });

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
// logging middleware
// Only use logging middleware when not running tests

// app.use(volleyball.custom({ debug }))
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.use("/auth", require("./auth"));
app.use("/api", require("./api")); // include our routes!
// app.use('/google', require('./auth/google'))
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
