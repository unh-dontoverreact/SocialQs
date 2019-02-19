const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { contactSchema } = require("./contact");

const userSchema = new Schema({
  username: { type: String, required: true  },
  password: { type: String  },
  image: { type: String },
  email: { type: String  },
  contacts: [contactSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User : User
}