const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// Matches with "/api/schedule"
router.route("/")
  // .get(contactController.findAll)
  .post(contactController);

module.exports = router