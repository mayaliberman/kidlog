const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  name: { firstName: String, lastName: String },
  registered: { type: Date, default: Date.now },
  email: String,
  password: String,
  children: [{ name: String, gender: String, age: Number }]
});

module.exports = mongoose.model("User", usersSchema);
