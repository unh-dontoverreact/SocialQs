const { Contact: db } = require("../models");
// const { User: datab } = require("../models");
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
        // let newContact = new Contact(req.body);
        db.Contact.create(req.body)
            .then(dbModel => res.json(dbModel))
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
