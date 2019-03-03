const router = require("express").Router();

// HTML (React) Routes -- included to allow for security
router
    .route("/")
    .get(require("connect-ensure-login").ensureLoggedIn(), (req, res) => {
        console.log("Captured html route and Passport");
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

module.exports = router;
