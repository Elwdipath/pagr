const router = require("express").Router();
const userRoutes = require("./users");
const scheduleRoutes = require("./schedule")

// User routes
router.use("/users", userRoutes);
router.use("/schedule", scheduleRoutes)

module.exports = router;
