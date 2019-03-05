const express = require("express");
const router = express.Router();
const { User: db } = require("../models");
const passport = require("../passport");

// POST("/user/") -- register a new user in the database if it is not a duplicate
router.post("/", (req, res) => {
    console.log("user signup");

    const { username, password, email } = req.body;
    // ADD VALIDATION -- error if user already exists
    db.User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err);
        } else if (user) {
            res.json({
                error: "Sorry, already a user with the username: ${username}",
            });
        } else {
            const newUser = new db.User({
                username: username,
                password: password,
                email: email,
            });
            newUser.save((err, savedUser) => {
                if (err) {
                    return res.json(err);
                }
                res.json(savedUser);
            });
        }
    });
});

// POST("/user/login") - authenticate the user (add to local session) and return the user info
router.post(
    "/login",
    function(req, res, next) {
        console.log("routes/user.js, login, req.body: ");
        console.log(req.body);
        next();
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in", req.user);
        var userInfo = {
            username: req.user.username,
        };
        res.send(userInfo);
    }
);

// GET("/user/") -- return the current logged in username and database key (_id)
router.get("/", (req, res, next) => {
    console.log("===== user!!======");
    console.log(req.user);
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ user: null });
    }
});

// POST("/user/logout") -- unauthenticates the user from the request and clears the session
router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.send({ msg: "logging out" });
    } else {
        res.send({ msg: "no user to log out" });
    }
});

module.exports = router;
