const mongoose = require("mongoose");
const Child = require('./child');
const userSchema = new mongoose.Schema({
  // name: {  firstName: {type: String} },
  firstName: String,
  lastName: String,
  registered: { type: Date, default: Date.now },
  email: String,
  password: String,
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Child" }],
});


module.exports = mongoose.model("User", userSchema);
