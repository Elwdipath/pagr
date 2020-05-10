const router = require("express").Router();
const userRoutes = require("./users");
const scheduleRoutes = require("./schedule")
const contactRoutes = require("./contact")
// User routes
router.use("/users", userRoutes);
router.use("/schedule", scheduleRoutes);
router.use("/contact", contactRoutes)

module.exports = router;
