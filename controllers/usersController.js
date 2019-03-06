const { User: db } = require("../models");

// Defining methods for the usersController
module.exports = {
    findAll: function(req, res) {
        console.log(req.email);
        // let query = { email: req.email, password: req.password };
        db.User.find()
            // .sort({ username: -1 })
            .populate("Contact")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User.findById(req.params.id)
            // .populate({ path: "Contact", model: Contact }, "_id")
            // .exec((err, user) => {
            //     if (err || !user)
            //         return res.status("400").json({
            //             error: "User not found",
            //         });
            //     res.json(user);
            // });
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("Creating user: ", req.body);
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
