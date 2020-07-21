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
// const cloudinary = require('cloudinary').v2;
// const cloudinaryStorage = require('multer-storage-cloudinary');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const app = express();
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const storage = cloudinaryStorage({
//   cloudinary,

//   folder: 'kidlog',
//   allowedFormats: ['jpg', 'png'],
//   transformation: [{ width: 500, height: 500, crop: 'limit' }],
// });
// console.log(storage);
// const parser = multer({ storage });

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
app.use(
  hpp()
  // put this inside the app function{
  // whitelist: [
  //   'createdAt',
  //   'tags',
  //   'child',
  //   'difficlutyLevel',
  //
  // ]
  // }
);

//Serving static files - add this then building the client
// app.use(express.static(path.join(__dirname, '../client/build')));

//Enabling file uploading

// app.use(fileUpload());

//*****GENERAL ROUTEES*****
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Kidlog project!',
  });
});

// app.post('/image', upload.single('demo_image'), (req, res, next) => {
//   console.log(req.file);
//   res.send(req.file);
// });
//*****OTHER ROUTEES*****
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

// send 404 if no other route matched
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
