const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
// const { multerUploads } = require('../utils/multer');
// const { parser } = require('../utils/cloudinaryConfig');
const router = express.Router();

const {
  getPost,
  createPost,
  getUserPosts,
  updatePost,
  deletePost,
  getPosts,
  uploadImage,
  uploadMulter,
} = require('../controllers/postController');

//***ROUTES */
//USER ROUTES
router.use(protect);
router.get('/', getPosts);
//get all user posts posts
router.get('/myposts', getUserPosts);

//get a single post
router.get('/:id', getPost);

// create a new post
router.post('/', createPost);

//update a post
router.patch('/:id', updatePost);

//delete a post
router.delete('/:id', deletePost);
//Return when posts are ready in client
// router.get('/', restrictTo('admin'), getPosts);
// router.post('/upload', parser.single('image'), uploadImage);
// router.post('/upload-multer', uploadMulter);
module.exports = router;
