require('dotenv').config();
const morganBody = require('morgan-body');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const postsRouter = require('./api/routes/posts');
const usersRouter = require('./api/routes/users');
const childrenRouter = require('./api/routes/children');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
morganBody(app);

const mongoConnection = require('./api/services/mongo.service');
mongoConnection.db;

app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);

app.use('*', (req, res, next) => {
	res.status(404).send('page not found');
});

const PORT = process.env.PORT || 3003;

server.listen(PORT);
server.on('listening', function() {
	console.log(`server started on address:${server.address().address} ,port:${server.address().port}`);
});
