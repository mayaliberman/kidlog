import React, { useReducer, useContext } from 'react';
import axios from 'axios';
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
import AuthContext from '../auth/authContext';
import cookie, { getToken, logout } from 'react-cookies';
const unsplash = new Unsplash({
  accessKey: UNSPLASH_ACESS_KEY,
  secret: UNSPLAH_SECRET_KEY,
});

const PostState = (props) => {
  // const authContext = useContext(AuthContext);
  const initialState = {
    posts: [],
    loading: true,
    photos: [],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  const getPosts = async () => {
    const token = cookie.load('auth');
    const user = JSON.parse(atob(token.split('.')[1]));
    console.log(user.id);
    console.log(token);
    setLoading();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    const res = axios.create({
      baseURL: 'http://localhost:5000/posts/myposts',
      headers: {
        'Cache-control': 'no-cache, no-store',
        Pragma: 'no-cache',
        'Content-Type': 'application/json',
      },

      // timeout: 10000,
      // transform the request before it get sent
      transformRequest: [
        function (user, headers) {
          headers['Expires'] = '0';
          if (getToken()) headers['Authorization'] = `Bearer ` + getToken();

          return JSON.stringify(user);
        },
      ], // transform the response before it get recieved
      transformResponse: [
        function (user, headers) {
          if (headers['content-type'].indexOf('application/json') > -1) {
            const json = JSON.parse(user);
            console.log(json);
            return json;
          }
          dispatch({ type: GET_POSTS, payload: user });
          return user;
        },
      ],
    });

    res.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status >= 401) {
          return logout();
        }
        throw new Error(error.response.status);
      }
    );

    // const res = await axios.get(`http://localhost:5000/posts`);

    // dispatch({ type: GET_POSTS, payload: res.data.data });
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
