import React, { useState, useContext } from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
import AddPostButton from '../AddPostButton/AddPostButton';
import AddPost from '../AddPost/AddPost';
import PostFeedback from '../PostFeedback/PostFeedback';
import FeedBackThankYou from '../FeedBackThankYou/FeedBackThankYou';
import PostContext from '../../../context/post/postContext';
const PostsGallery = () => {
  const [editPopup, setEditPopup] = useState(false);
  const [addButtonPopup, setAddButtonPopup] = useState(false);
  const [feedbackPost, setFeedbackPost] = useState(false);
  const [ThankYouPopup, setThankYouPopup] = useState(false);
  const postContext = useContext(PostContext);
  const { currentPost } = postContext;

  const togglePop = () => {
    // setPopup(!popup);
  };

  const addPostButtonTogglePop = () => {
    setAddButtonPopup(true);
  };

  const feedbackToggle = () => {
    setEditPopup(false);
    setFeedbackPost(false);
  };
  const submitAddPost = (e) => {
    // e.preventDefault();
    console.log('add post');
    setAddButtonPopup(false);
    setFeedbackPost(true);
  };

  const submitFeedback = () => {
    // e.preventDefault();
    setFeedbackPost(false);
    setThankYouPopup(true);
    setTimeout(() => {
      setThankYouPopup(false);
    }, 1500);
  };

  return (
    <div className={postGallery}>
      <AddPostButton togglePop={addPostButtonTogglePop} />
      {addButtonPopup && (
        <AddPost
          close={() => setAddButtonPopup(false)}
          submit={submitAddPost}
          headerTitle={'New Activity'}
        />
      )}
      {editPopup && (
        <AddPost submit={submitAddPost} headerTitle={'Edit Post'} />
      )}
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
