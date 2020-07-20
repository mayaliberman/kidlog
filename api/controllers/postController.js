const Post = require('../models/post');
const Lesson = require('../models/lesson');
const Child = require('../models/child');
const AppError = require('../utils/appError');
const { asyncHandler } = require('../utils/asyncHanlder');
require('dotenv').config();
const multer = require('multer');
const { multerUploads } = require('../utils/multer');
const { parser } = require('../utils/cloudinaryConfig');
// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const storage = require('../utils/multer');

// cloudinary.config({
//   cloud_name: process.env.CLOUDINDARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_seceret: process.env.CLOUDINARY_API_SECERT,
// });

// if (typeof process.env.CLOUDINARY_URL === 'undefined') {
//   console.warn('!! cloudinary config is undefined !!');
//   console.warn('export CLOUDINARY_URL or set dotenv file');
// } else {
//   // Must call config() to register env variables
//   // don't log config in production environment
//   console.log('cloudinary config:', cloudinary.config());
// }

exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();
  return res.json({
    status: 'success',
    results: posts.length,
    data: posts,
  });
});

exports.getUserPosts = asyncHandler(async (req, res, next) => {
  if (!req.user._id) {
    return next(
      new AppError(
        `You are not authorize to visits these posts ${req.originalUrl}`,
        403
      )
    );
  }

  const posts = await Post.find({ userId: req.user._id }).sort({
    createdAt: -1,
  });

  return res.json({
    status: 'success',
    results: posts.length,
    data: posts,
  });
});

exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new AppError(`No post with the ID ${req.originalUrl}`, 404));
  }

  if (String(post.userId._id) !== req.user.id) {
    return next(
      new AppError(
        `You are not authorize to visits this posts ${req.originalUrl}`,
        403
      )
    );
  }
  res.status(200).json({ stats: 'sucess', data: { post } });
});

exports.createPost = asyncHandler(async (req, res, next) => {
  // let file = null;
  // if (req.file !== null) {
  //   console.log(req.file, 'req.files');
  // file = req.files.file;
  // file.mv(`${__dirname}/api/uploads/${file.name}`, (err) => {
  //   console.error(err);
  //   return res.status(500).send(err);
  // });
  // }
  const { desc } = req.body;
  const userId = req.user._id;
  const lesson = await Lesson.findOne({ lessonNum: req.body.lessonNum });
  const child = await Child.findById(req.body.childId);
  const newPost = {
    desc,
    lessonId: lesson._id,
    userId,
    childId: child._id,
    // image: file,
  };
  const post = await Post.create(newPost);
  return res.status(201).json({ status: 'success', data: post });
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new AppError(`No post with the ID ${req.originalUrl}`, 404));
  }

  if (String(post.userId._id) !== req.user.id) {
    return next(
      new AppError(
        `You are not authorize to edit this post ${req.originalUrl}`,
        403
      )
    );
  }

  const lesson = await Lesson.findOne({ lessonNum: req.body.lessonNum });
  if (req.body.lessonNum) req.body.lessonId = lesson.id;
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ status: 'success', data: updatedPost });
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new AppError(`No post with the ID ${req.originalUrl}`, 404));
  }
  if (String(post.userId._id) !== req.user.id) {
    return next(
      new AppError(
        `You are not authorize to delete this post ${req.originalUrl}`,
        403
      )
    );
  }
  post.remove(function (err, item) {
    if (err)
      return next(new AppError(`could not proceed deleting ${err}`, 500));
  });
  res.status(204).json({ status: 'success', data: null });
});

exports.uploadImage = (req, res, next) => {
  try {
    console.log('req.file: ', req.file);
    res.json(req.file);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
