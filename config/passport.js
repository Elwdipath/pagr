const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../database/models");
const messageController = require("../controllers/messageController");

// registration handler
passport.use(
  "local-signup",
  new LocalStrategy({
      emailField: "email",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      db.User.findOne({
        email: email
      }).then(function (err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, {
            message: "email is already in use."
          });
        }
        db.User.create({
          email: email,
          password: password,
        }).then(function (dbUser) {
          return done(null, dbUser);
        });
      });
    }
  )
);

// login handler
passport.use(
  "local-login",
  new LocalStrategy({
      usernameField: "email"
    },
    function (email, password, done) {
      db.User.findOne({
        email: email
      }, (err, user) => {
        // console.log(user)
        if (!user) {
          return done(null, false, {
            message: "email incorrect"
          });
        }
        if (!user.checkPassword(password)) {
          return done(null, false, {
            message: "Incorrect password"
          });
        }
        if (!user.slackUserID) {
          let userEmail = user.email
          messageController.getUsers(userEmail)
        }
        // else {
        //   let email = user
        //   messageController.getUsers(user.email)
        // }

        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = passport;