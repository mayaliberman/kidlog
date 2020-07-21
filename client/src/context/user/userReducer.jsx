import {
  GET_CHILD,
  CREACT_CHILD,
  UPDATE_CHILD,
  DELETE_CHILD,
  DELETE_ME,
  SET_LOADING,
  GET_USER_DATA,
  UPDATE_USER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        isUpdated: action.payload,
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
