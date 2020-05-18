const router = require("express").Router();
const messageController = require("../../controllers/messageController");

// Matches with "/api/message"
router.route("/")
  // .get(contactController.findAll)
  .get(messageController.getUsers);

module.exports = router