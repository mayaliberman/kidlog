const express = require('express');
const morganBody = require('morgan-body');
const fileUpload = require('express-fileupload');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController.js');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const sgMail = require('@sendgrid/mail');
const app = express();

//CORS support cross-origin resource sharing or CORS
app.use(cors());

//**GLOBAL MIDDLEWARES */
//Set security HTTP Header
app.use(helmet());

//Development logging
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  morganBody(app);
}

//Limit Requests from same API
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
});
app.use('/', limiter);

//Body parser, reading data from the body into req.body
app.use(express.json({ limit: '10k' }));

//Data sanitization again NoSQL query injections
app.use(mongoSanitize());

//Data sanitization against XSS
app.use(xss());

//Prevent parameter pollution
app.use(hpp());

//Serving static files - add this then building the client
// app.use(express.static(path.join(__dirname, '../client/build')));

//Enabling file uploading
app.post('/send-mail', (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'mayaliberman1@gmail.com',
    from: 'mayaliberman1@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  res.json({
    message: 'Mail send successfuly',
  });
  sgMail.send(msg);
});
//*****GENERAL ROUTEES*****
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Kidlog project!',
  });
});

//*****OTHER ROUTEES*****
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

// send 404 if no other route matched
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
