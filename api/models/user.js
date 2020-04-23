const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	registered: { type: Date, default: Date.now },
	gender: {
		type: String,
		enum: [ 'male', 'female', 'n/a' ],
		default: 'n/a',
	},
	password: String,
	isAdmin: { type: Boolean, default: false },
	children: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Child' } ],
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: 'Email address is required',
		match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address' ],
	},
});

module.exports = mongoose.model('User', userSchema);
