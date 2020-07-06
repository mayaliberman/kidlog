import React, { useState } from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
import AddPostButton from '../AddPostButton/AddPostButton';
import AddPost from '../AddPost/AddPost';
import PostFeedback from '../PostFeedback/PostFeedback';
import FeedBackThankYou from '../FeedBackThankYou/FeedBackThankYou';
const PostsGallery = () => {
  const [popup, setPopup] = useState(false);
  const [feedbackPost, setFeedbackPost] = useState(false);
  const [ThankYouPopup, setThankYouPopup] = useState(false);

  const togglePop = () => {
    setPopup(!popup);
  };

  const feedbackToggle = () => {
    setPopup(false);
    setFeedbackPost(false);
  };
  const submitPost = (e) => {
    e.preventDefault();
    setPopup(false);
    setFeedbackPost(true);
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    setFeedbackPost(false);
    setThankYouPopup(true);
    setTimeout(() => {
      setThankYouPopup(false);
    }, 1500);
  };

  return (
    <div className={postGallery}>
      <AddPostButton />
      {/* {popup && <AddPost togglePop={togglePop} submit={submitPost} />}
      {feedbackPost && (
        <PostFeedback togglePop={feedbackToggle} submit={submitFeedback} />
      )}
      {ThankYouPopup && (
        <FeedBackThankYou togglePop={() => setThankYouPopup(false)} />
      )} */}
      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
