import React, { useState } from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
import AddPostButton from '../AddPostButton/AddPostButton';
import AddPost from '../AddPost/AddPost';
import PostFeedback from '../PostFeedback/PostFeedback';
import FeedBackThankYou from '../FeedBackThankYou/FeedBackThankYou';
const PostsGallery = () => {
  const [popup, setPopup] = useState(false);

  const togglePop = () => {
    setPopup(!popup);
  };

  return (
    <div className={postGallery}>
      <AddPostButton togglePop={togglePop} />
      {popup ? <AddPost togglePop={togglePop} /> : null}

      {/* <PostFeedback /> */}
      <FeedBackThankYou />
      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
