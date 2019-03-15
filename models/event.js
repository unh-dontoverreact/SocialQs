const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true },
  contact: { type: String },
  contactID: { type: String },
  cueFrequency: { type: String },
  userID: { type: String, required: true },
});

const Event = mongoose.model("Event", eventSchema, "event");

module.exports = {
  Event: Event,
};
