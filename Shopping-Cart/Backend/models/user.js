const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Binding up some methods to the userschema for the succesful registration and login of a user..
// Hashing the password on user registration...
UserSchema.pre("save", async function () {
  // SOme time consuming stuff
  // Async functions are not executed on main-thread because they may block the main-thread.
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Comparing the database-password & entered-password on login..
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating the Token to be sent to client on register and login..
UserSchema.methods.getSignedJwtToken = function () {
  const token = jwt.sign(
    { id: this._id },
    "This secret key is used to encrypt the payload and generate the token"
  );

  return token;
};

// Creating a model
const User = mongoose.model("User", UserSchema);
module.exports = User; // Exporting the model..
