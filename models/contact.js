const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    birthDate: { type: Date },
    userID: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema, "contact");

module.exports = {
    Contact: Contact,
}
    //   contactSchema : contactSchema

