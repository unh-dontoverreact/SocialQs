const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const  {contactSchema }  = require("./contact");
// const contactSchemaDisplay = mongoose.model(contactSchema).schema;
const { eventSchema } = require("./event");
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const userSchema = new Schema({
    username: { type: String },
    password: { type: String, required: true },
    email: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    image: { type: String },
    contacts: [{
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Contact"
    }],
    events: [eventSchema],
});

// Define schema methods
userSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10);
    },
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
    if (!this.password) {
        console.log("models/user.js =======NO PASSWORD PROVIDED=======");
        next();
    } else {
        console.log("models/user.js hashPassword in pre save");

        this.password = this.hashPassword(this.password);
        next();
    }
});

const User = mongoose.model("User", userSchema, "user");

module.exports = {
    User:User,
}
