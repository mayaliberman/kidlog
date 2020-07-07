import {
  GET_POSTS,
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
  SET_LOADING,
  GET_UNSPLASH_PHOTOS,
  GET_USER_DATA,
  POST_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_UNSPLASH_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };

    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CREATE_POST:
      return {
        ...state,
        // photos: action.payload,
        // // photos: [action.payload, ...state.photos],
        // posts: action.payload,
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
