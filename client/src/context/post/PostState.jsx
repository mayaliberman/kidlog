import React, { useReducer, useContext } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { UNSPLASH_ACESS_KEY, UNSPLAH_SECRET_KEY } from '../../config';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
  GET_POSTS,
  GET_UNSPLASH_PHOTOS,
  SET_LOADING,
  REGISTER_SUCCESS,
} from '../types';
import axios from '../../services/axios';
const unsplash = new Unsplash({
  accessKey: UNSPLASH_ACESS_KEY,
  secret: UNSPLAH_SECRET_KEY,
});

const PostState = (props) => {
  const initialState = {
    posts: [],
    loading: true,
    photos: [],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  const getPosts = async () => {
    setLoading();
    const response = await axios.get('/posts/myposts');
    dispatch({ type: GET_POSTS, payload: response.data.data });
  };

  const getUnsplashPhoto = async () => {
    setLoading();
    await unsplash.search
      .photos('children', 1, state.posts.length, {
        orientation: 'portrait',
      })
      .then(toJson)
      .then((json) => {
        dispatch({ type: GET_UNSPLASH_PHOTOS, payload: json });
      });
  };
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        photos: state.photos,
        loading: state.loading,
        getUnsplashPhoto,
        getPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
