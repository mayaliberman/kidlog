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
  const submit = (e) => {
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

  const toggleThankyouFeedback = () => {
    setThankYouPopup(false);
  };
  return (
    <div className={postGallery}>
      <AddPostButton togglePop={togglePop} />
      {popup ? <AddPost togglePop={togglePop} submit={submit} /> : null}
      {feedbackPost ? (
        <PostFeedback togglePop={feedbackToggle} submit={submitFeedback} />
      ) : null}
      {ThankYouPopup ? (
        <FeedBackThankYou togglePop={toggleThankyouFeedback} />
      ) : null}

      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
