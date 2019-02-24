const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { contactSchema } = require("./contact");

const userSchema = new Schema({
  firstname: { type: String, required: true  },
  lastname: { type: String, required: true  },
  password: { type: String, required: true  },
  image: { type: String },
  email: { type: String, required: true  },
  contacts: [contactSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User : User
}