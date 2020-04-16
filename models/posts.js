const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  desc: String,
  lessonNum: Number,
  ratings: { type: Number, min: 1, max: 5 },
  created: { type: Date, default: Date.now },
  userId:  mongoose.ObjectId
});

module.exports = mongoose.model("Post", postsSchema);
