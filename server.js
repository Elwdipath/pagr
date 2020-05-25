const express = require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();
const morgan = require("morgan");
const passport = require("passport")
// const passport = require("./config/passport")
const session = require("express-session");

// User authentication using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({ secret: "some secrets", resave: false, saveUninitialized: false })
);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//morgan for route tracing && debugging
app.use(morgan("combined"));

morgan(function (tokens, req, res) {
  return req.method + " " + req.url;
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/pagr", {
    useNewUrlParser: true,
  })
  .then(console.log("Connected to Mongoose!"));

// initialize Express
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
