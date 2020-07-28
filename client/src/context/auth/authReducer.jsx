import {
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  CLEAR_ERRORS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        token: action.payload,
      };
    case USER_LOADED:
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        token: action.payload,
      };

    case LOGOUT: {
      return {
        ...state,
        isLogged: false,
        token: null,
        user: null,
      };
    }
    case REGISTER_FAIL:
    case LOGIN_FAIL: {
      return {
        ...state,
        token: null,
        isLogged: false,
        user: null,
        error: action.payload,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};
