const mongoose = require('mongoose');

const db = mongoose.connection;
const dbURI = process.env.DATABASE_URL;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
	auto_reconnect: true,
};

// various event handling
db.on('connecting', function() {
	console.log('connecting to MongoDB...');
});

db.on('error', function(error) {
	console.error('Error in MongoDb connection: ' + error);
	mongoose.disconnect();
});

db.on('connected', function() {
	console.log('MongoDB connected!');
});

db.once('open', function() {
	console.log('MongoDB connection opened!');
});

db.on('reconnected', function() {
	console.log('MongoDB reconnected!');
});

// reconnect on disconnect
db.on('disconnected', function() {
	console.log('MongoDB disconnected!');
	mongoose.connect(dbURI, options);
});

mongoose.connect(dbURI, options);

module.exports = { db };
