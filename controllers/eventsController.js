const { Event: db } = require("../models");
const { User: userDb } = require("../models");

// Defining methods for the eventsController
module.exports = {
  findAll: function(req, res) {
    db.Event.find(req.query)
      .sort("-date")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Event.findById(req.params.eventid)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Creating event: ", req.body);
    db.Event.create(req.body)
      .then(function(dbEvent) {
        return userDb.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { events: dbEvent._id } }
        );
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event.findOneAndUpdate({ _id: req.params.eventid }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event.findById({ _id: req.params.eventid })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
