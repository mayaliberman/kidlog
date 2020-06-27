import React from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
import AddPostButton from '../AddPostButton/AddPostButton';
import AddPost from '../AddPost/AddPost';
const PostsGallery = () => {
  return (
    <div className={postGallery}>
      <AddPostButton />
      <AddPost />
      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
