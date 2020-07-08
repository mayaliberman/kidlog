import React, { useReducer } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { UNSPLASH_ACESS_KEY, UNSPLAH_SECRET_KEY } from '../../config';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
  GET_POSTS,
  GET_UNSPLASH_PHOTOS,
  SET_LOADING,
  GET_USER_DATA,
  DELETE_POST,
  POST_ERROR,
  CURRENT_POST,
  CLEAR_CURRENT_POST,
} from '../types';
import axios from '../../services/axios';
import { getUser } from '../../services/cookies';

const unsplash = new Unsplash({
  accessKey: UNSPLASH_ACESS_KEY,
  secret: UNSPLAH_SECRET_KEY,
});

const PostState = (props) => {
  const initialState = {
    posts: [],
    loading: true,
    photos: [],
    user: {},
    currentPost: {},
    isDeleted: false,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  const getUserData = async () => {
    setLoading();
    const user = await getUser();
    dispatch({ type: GET_USER_DATA, payload: user });
  };
  const getPosts = async () => {
    setLoading();
    try {
      const response = await axios.get('/posts/myposts');
      dispatch({ type: GET_POSTS, payload: response.data.data });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };

  const createPost = async (body) => {
    setLoading();
    try {
      await axios.post('/posts', body);
      await getPosts();
      await getUnsplashPhoto();
      await clearCurrentPost();
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };
  const getUnsplashPhoto = async () => {
    setLoading();
    try {
      if (state.photos) {
        await unsplash.search
          .photos('children', 15, 100, {
            orientation: 'portrait',
          })
          .then(toJson)
          .then((json) => {
            dispatch({ type: GET_UNSPLASH_PHOTOS, payload: json });
          });
      }
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };

  const showCurrentPost = (data) => {
    setLoading();
    try {
      dispatch({ type: CURRENT_POST, payload: data });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };

  const clearCurrentPost = () => {
    dispatch({ type: CLEAR_CURRENT_POST });
  };
  const deletePost = async (postId) => {
    try {
      console.log('delete from state');
      axios.delete(`/posts/${postId}`);
      dispatch({ DELETE_POST, payload: true });
      //post deleted
      getPosts();
      console.log('get posts');
      dispatch({ DELETE_POST, payload: false });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        photos: state.photos,
        loading: state.loading,
        user: state.user,
        newPost: state.newPost,
        error: state.error,
        isDeleted: state.isDeleted,
        currentPost: state.currentPost,
        getUnsplashPhoto,
        getPosts,
        getUserData,
        createPost,
        deletePost,
        showCurrentPost,
        clearCurrentPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;