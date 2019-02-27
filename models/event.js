const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  date: { type: Date, required: true },
  lastName: { type: String, required: true},
  contacts: { type: Array }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = {
  Event : Event,
  eventtSchema : eventSchema
}