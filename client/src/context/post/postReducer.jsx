import {
  GET_POSTS,
  REMOVE_POST,
  CREATE_POST,
  UPDATE_POST,
  SET_LOADING,
  GET_UNSPLASH_PHOTOS,
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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
