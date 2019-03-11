const router = require("express").Router();
const userRoutes = require("./users");
const schedulerRoutes = require("./scheduler");

// Contact API routes
router.use("/user", userRoutes);
router.use("/scheduler", schedulerRoutes);

module.exports = router;
