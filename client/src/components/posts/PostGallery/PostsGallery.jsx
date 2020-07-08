import React, { useState, useEffect, useContext } from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
import AddPostButton from '../AddPostButton/AddPostButton';
import AddPost from '../AddPost/AddPost';
import PostFeedback from '../PostFeedback/PostFeedback';
import FeedBackThankYou from '../FeedBackThankYou/FeedBackThankYou';
import PostContext from '../../../context/post/postContext';
const PostsGallery = () => {
  const [popup, setPopup] = useState(false);
  const [addButtonPopup, setAddButtonPopup] = useState(false);
  const [feedbackPost, setFeedbackPost] = useState(false);
  const [ThankYouPopup, setThankYouPopup] = useState(false);
  const postContext = useContext(PostContext);
  const { currentPost } = postContext;

  const togglePop = () => {
    setPopup(!popup);
  };

  const addPostButtonTogglePop = () => {
    setAddButtonPopup(!addButtonPopup);
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
      <AddPostButton togglePop={addPostButtonTogglePop} />
      {popup ||
        (currentPost._id && (
          <AddPost
            togglePop={togglePop}
            submit={submitPost}
            headerTitle={currentPost._id ? 'Edit Post' : 'New Activity'}
          />
        ))}
      {feedbackPost && (
        <PostFeedback togglePop={feedbackToggle} submit={submitFeedback} />
      )}
      {ThankYouPopup && (
        <FeedBackThankYou togglePop={() => setThankYouPopup(false)} />
      )}
      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
