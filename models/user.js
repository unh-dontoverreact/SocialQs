const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

mongoose.promise = Promise;

const userSchema = new Schema({
  username: { type: String },
  password: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  image: { type: String },
  contacts: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Contact",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  cues: [String],
});

// Define schema methods
userSchema.methods = {
  // checkPassword() - called by Passport on logins to compare encrpted passwords
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },

  // hashPassowrd() - called pre-save to encrypt our password before storing
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// "Save Hook" - Called by Passport before persisting a new user to encrypt the password
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
  User: User,
};
