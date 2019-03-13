const router = require("express").Router();
const userRoutes = require("./users");
const schedulerRoutes = require("./scheduler");
const contactRoutes = require("./contacts");

// Contact API routes
router.use("/user", userRoutes);
router.use("/scheduler", schedulerRoutes);
router.use("/contacts", contactRoutes);

module.exports = router;
