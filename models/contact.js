const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lastMod = require("./plugins/lastModified");
const birthdatePlugin = require("./plugins/birthdate");

const contactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  birthDate: { type: Date },
  address: { type: String },
  relationship: { type: String },
  occupation: { type: String },
  hobbies: { type: String },
  notes: { type: String },
  userID: { type: String, required: true },
});

// Plugin to track the last modified date for effecient queries
contactSchema.plugin(lastMod, { index: true });

// Plugin to add birthdate day and month for effecient queries
contactSchema.plugin(birthdatePlugin, { index: true });

const Contact = mongoose.model("Contact", contactSchema, "contact");

module.exports = {
  Contact: Contact,
};
