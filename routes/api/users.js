const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport")
const verify = require("../../config/middleware/isAuthenticated")


// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// the route for logging a user in and creating a session 
router.route("/login")
  .post(function (req, res, next) {
    console.log("routes/user.js, login, req.body: " + req.body)
    next()
  },
    passport.authenticate('local-login'),
    (req, res) => {
      console.log("logged in", req.user)
      var userInfo = { email: req.user.email, isAdmin: req.user.isAdmin, schedules: req.user.schedules }
      res.send(userInfo)
    }
  )
  
//the route for verifying a user has an authorized session
router.route("/verify")
    .get(verify)

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
