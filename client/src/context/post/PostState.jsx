import React, { useReducer, useContext } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { UNSPLASH_ACESS_KEY, UNSPLAH_SECRET_KEY } from '../../config';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
  GET_POSTS,
  GET_UNSPLASH_PHOTOS,
  SET_LOADING,
  GET_USER_DATA,
  CREATE_POST,
  DELETE_POST,
  POST_ERROR,
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
      const res = await axios.post('/posts', body);
      await getPosts();
      await getUnsplashPhoto();
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };
  const getUnsplashPhoto = async () => {
    setLoading();
    try {
      await unsplash.search
        .photos('children', 10, state.posts.length, {
          orientation: 'portrait',
        })
        .then(toJson)
        .then((json) => {
          dispatch({ type: GET_UNSPLASH_PHOTOS, payload: json });
        });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`/posts/${postId}`);
      dispatch({ DELETE_POST, payload: postId });
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
        getUnsplashPhoto,
        getPosts,
        getUserData,
        createPost,
        deletePost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
