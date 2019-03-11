const router = require("express").Router();
const schedulerController = require("../../controllers/schedulerController");

// Scheduler Controller - interfaces to manage the background processes of updating user reminders programatically
//                 Note:  API used by an admin console and should not be accessed by any end users

// POST("/api/scheduler/start) -- starts the background process to refresh the cues
router.route("/start").post(schedulerController.start);

// POST("/api/scheduler/stop) -- stops the background process from refreshing the cues
router.route("/stop").post(schedulerController.stop);

// POST("/api/scheduler/test") -- enables minute-by-minute jobs,  used for test only
router.route("/test").post(schedulerController.test);

module.exports = router;
