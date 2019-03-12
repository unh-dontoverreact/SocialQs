const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var lastMod = require("./plugins/lastModified");

const eventSchema = new Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true },
  contact: { type: Array },
});

// Plugin to track the last modified date for effecient queries
eventSchema.plugin(lastMod, { index: true });

const Event = mongoose.model("Event", eventSchema, "event");

module.exports = {
  Event: Event,
};
