const router = require("express").Router();
const userRoutes = require("./users");

// Contact API routes
router.use("/user", userRoutes);

module.exports = router;
