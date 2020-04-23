const mongoose = require('mongoose');
const childSchema = new mongoose.Schema({
  firstName: String,
  gender: {
    type: String,
    enum: ['male', 'female', 'n/a'],
    default: 'n/a',
  },
  birthYear: Date,
  registered: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Child', childSchema);