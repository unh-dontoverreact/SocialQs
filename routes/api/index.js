const router = require("express").Router();
const contactRoutes = require("./contacts");
const userRoutes = require("./users");
const eventRoutes = require("./events");

// Contact API routes
// router.use("/contacts", contactRoutes);
router.use("/user", userRoutes);
router.use("/events", eventRoutes);

module.exports = router;
