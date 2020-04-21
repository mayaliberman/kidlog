const mongoose = require("mongoose");
const childSchema = new mongoose.Schema({
  firstName: String,
  gender: String,
  birthYear: Number,
  registered: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Child", childSchema);
