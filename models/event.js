const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true},
  contact: { type: Array }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = {
  Event : Event,
  eventSchema : eventSchema
}