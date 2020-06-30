import React from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
import AddPostButton from '../AddPostButton/AddPostButton';
import AddPost from '../AddPost/AddPost';
import PostFeedback from '../PostFeedback/PostFeedback';
import FeedBackThankYou from '../FeedBackThankYou/FeedBackThankYou';
const PostsGallery = () => {
  return (
    <div className={postGallery}>
      <AddPostButton />
      <AddPost />
      <PostFeedback />
      <FeedBackThankYou />
      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
