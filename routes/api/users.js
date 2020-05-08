const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport")


// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
  // .post(() => console.log("Attempted to post a user to the database"))

  router.route("/login")
    .post(function( req, res, next) {
      console.log("routes/user.js, login, req.body: " + req.body)
      next()
    },

     passport.authenticate('local-login'),
     (req, res) => {
       console.log("logged in", req.user)
       var userInfo = {
         username: req.user.username
       }
      var userInfo = { username: req.user.username}
       res.send(userInfo)
     }
     )
// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
