const { User: db } = require("../models");
const securityUtils = require("../utils/securityUtils");

var passport = require("passport");

passport.use(
  new BasicStrategy(function(username, password, cb) {
    db.User.findOne({ username: username }, (err, user) => {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password !== securityUtils.hashData(password)) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);
