import {
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  UPDATE_PASSWORD,
  CLEAR_ERRORS,
  UPDATE_PASSWORD_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
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
    case UPDATE_PASSWORD_FAIL:
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
