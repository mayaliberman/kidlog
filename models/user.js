const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
  lastName: String,
  registered: { type: Date, default: Date.now },
  email: String,
  password: String,
  // children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Child" }],
  children: [String]
  
});


module.exports = mongoose.model("User", userSchema);
