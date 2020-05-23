const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../database/models");
const messageController = require("../controllers/messageController");


const sendError = (err, res) => res.status(400).json({ err: err.toString() });
const badCredentials = "There was a problem with your login credentials. Please make sure your username and password are correct.";


// registration handler
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      db.User.findOne({ 'email': email }).then(async function (err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, { message: "email is already in use." });
        } else {
        await db.User.create({
          email: email,
          password: password,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        }).then(function (dbUser) {
          return done(null, dbUser);
        });
        }
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