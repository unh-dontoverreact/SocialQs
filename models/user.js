const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const  {contactSchema }  = require("./contact");
// const contactSchemaDisplay = mongoose.model(contactSchema).schema;
const { eventSchema } = require("./event");

const userSchema = new Schema({
    loginName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String, required: true },
    image: { type: String },
    email: { type: String, required: true },
    contacts: [{ type: Schema.Types.ObjectId, ref: "Contact" }],
    events: [eventSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = {
    User: User,
};
