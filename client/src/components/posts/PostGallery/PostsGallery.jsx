import React from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
const PostsGallery = () => {
  return (
    <div className={postGallery}>
      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
