import {
  GET_POSTS,
  REMOVE_POST,
  CREATE_POST,
  UPDATE_POST,
  SET_LOADING,
  GET_UNSPLASH_PHOTOS,
  GET_USER_DATA,
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
        newPost: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
