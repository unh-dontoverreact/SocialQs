// const db  = require("../models");
const { Contact: db } = require("../models");
const { User: udb } = require("../models");
// const User = require("../models/user");
// const Contact = require("../models/contact");
// Defining methods for the contactsController
module.exports = {
    findAll: function(req, res) {
        db.Contact.find(req.query)
            .sort([["lastName", 1], ["firstName", 1]])
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Contact.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("Creating contact: ", req.body);
        db.Contact.create(req.body)
            .then(function(dbContact) {
                return udb.User.findOneAndUpdate(
                    { _id: req.params.id },
                    { $push: { contacts: dbContact._id } }
                );
            })
            .then(function(dbUser) {
                // If the User was updated successfully, send it back to the client
                res.json(dbUser);
            })
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Contact.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Contact.findById({ _id: req.params.contactid })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
