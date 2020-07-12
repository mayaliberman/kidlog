import {
  GET_CHILD,
  CREACT_CHILD,
  UPDATE_CHILD,
  DELETE_CHILD,
  DELETE_ME,
  SET_LOADING,
  GET_USER_DATA,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_CHILD:
      return {
        ...state,
        child: action.payload,
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
