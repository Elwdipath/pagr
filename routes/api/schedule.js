const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedule"
router.route("/")
  .get(scheduleController.findAll)
  .post(scheduleController.create);


// Matches with "/api/schedule/:id"
router
  .route("/:id")
  .get(scheduleController.findById)
  .put(scheduleController.update)
  .delete(scheduleController.remove);

module.exports = router;