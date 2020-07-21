import React, { useState, useContext } from 'react';
import PostsContainer from '../PostsContainer';
import { postGallery } from './PostGallery.module.scss';
import AddPostButton from '../AddPostButton/AddPostButton';
import AddPost from '../AddPost/AddPost';
import PostFeedback from '../PostFeedback/PostFeedback';
import FeedBackThankYou from '../FeedBackThankYou/FeedBackThankYou';
import PostContext from '../../../context/post/postContext';
const PostsGallery = () => {
  const postContext = useContext(PostContext);
  const { currentPost, clearCurrentPost } = postContext;
  const [editPopup, setEditPopup] = useState(false);
  const [addButtonPopup, setAddButtonPopup] = useState(false);
  const [feedbackPost, setFeedbackPost] = useState(false);
  const [ThankYouPopup, setThankYouPopup] = useState(false);

  const addPostButtonTogglePop = () => {
    setAddButtonPopup(true);
  };

  const feedbackToggle = () => {
    setFeedbackPost(!feedbackPost);
  };
  const submitAddPost = () => {
    setAddButtonPopup(false);
    setFeedbackPost(true);
  };

  const submitFeedback = () => {
    setFeedbackPost(false);
    setThankYouPopup(true);
    setTimeout(() => {
      setThankYouPopup(false);
    }, 1500);
  };

  const toggleEditPost = () => {
    setEditPopup(!editPopup);
  };

  return (
    <div className={postGallery}>
      <AddPostButton togglePop={addPostButtonTogglePop} />
      {addButtonPopup && (
        <AddPost
          close={() => setAddButtonPopup(false)}
          submit={submitAddPost}
          headerTitle={'New Activity'}
          submitButton='Add Post'
        />
      )}
      {feedbackPost && (
        <PostFeedback togglePop={feedbackToggle} submit={submitFeedback} />
      )}
      {ThankYouPopup && (
        <FeedBackThankYou togglePop={() => setThankYouPopup(false)} />
      )}
      {currentPost.desc && (
        <AddPost
          submit={toggleEditPost}
          close={() => clearCurrentPost()}
          headerTitle={'Edit Post'}
          submitButton='Edit Post'
        />
      )}

      {/* <PostFeedback /> */}
      <PostsContainer />
    </div>
  );
};

export default PostsGallery;
