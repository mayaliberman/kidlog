const User = require('../models/user');
const Child = require('../models/child');
const { asyncHandler } = require('../utils/asyncHanlder');
const AppError = require('../utils/appError');

exports.getChild = asyncHandler(async (req, res, next) => {
  const child = await Child.findById(req.params.childId);

  if (!child) {
    return next(
      new AppError(`No child with the ID ${req.params.childId}`, 404)
    );
  }

  if (child.active === false) {
    return next(new AppError('This child have been cancelled', 400));
  }

  if (String(child.user) !== req.params.id) {
    return next(
      new AppError(
        `You are not authorize to visits this page ${req.originalUrl}`,
        403
      )
    );
  }
  return res.status(200).json({ status: 'success', data: child });
});

exports.createChild = asyncHandler(async (req, res, next) => {
  const { name, birthYear, gender } = req.body;
  const user = req.user.id;
  const childBody = {
    name,
    birthYear,
    gender,
    user,
  };
  const checkChild = await Child.findOne({ name: name });
  if (checkChild) {
    return next(
      new AppError(`this child already exists ${checkChild._id}`, 400)
    );
  }
  const newChild = await Child.create(childBody);

  return res.status(201).json({
    status: 'success',
    data: { child: newChild },
  });
});

exports.updateChild = asyncHandler(async (req, res, next) => {
  const { name, birthYear, gender } = req.body;
  const updatedFields = {
    'children.$.name': name,
    'children.$.birthYear': birthYear,
    'children.$.gender': gender,
  };
  const user = await User.findById(req.user.id);
  const child = user.children.id(req.params.childId);

  if (!child) {
    return next(
      new AppError(`No child with the ID ${req.params.childId}`, 404)
    );
  }

  if (child.active === false) {
    return next(
      new AppError(
        'This child have been cancelled, please connect the administrator',
        400
      )
    );
  }

  if (!user) {
    return next(new AppError(`No user with the ID ${req.originalUrl}`, 404));
  }

  if (String(user._id) !== req.user.id) {
    return next(
      new AppError(
        `You are not authorize to visits this page ${req.originalUrl}`,
        403
      )
    );
  }

  const updatedUser = await User.findOneAndUpdate(
    { 'children._id': req.params.childId },
    {
      $set: updatedFields,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).send(updatedUser);
});

exports.deleteChild = asyncHandler(async (req, res, next) => {
  const child = await Child.findOne({ _id: req.params.childId });
  
  if (!child) {
    return next(new AppError(`No user with the ID ${req.originalUrl}`, 404));
  }

  if (child.user !== req.user._id) {
     return next(
      new AppError(
        `You are not authorize to visits this page ${req.originalUrl}`,
        403
      ))
  }
  if (child.active === false) {
    return next(new AppError(`This user already been cancelled ${req.params.childId}`, 400));
  }
  
  child.active = false;
  child.save();
  res.status(204).json({
    status: 'success',
    data: null
  });
});
