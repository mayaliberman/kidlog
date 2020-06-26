import React from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
import AddPostButton from '../AddPostButton/AddPostButton';
const PostsGallery = () => {
  return (
    <div className={postGallery}>
      <AddPostButton />
      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
