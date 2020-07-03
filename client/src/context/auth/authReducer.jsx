import { LOGIN_SUCCESS, USER_LOADED, LOGOUT, REGISTER_SUCCESS } from '../types';

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
      };

    case LOGOUT: {
      return {
        ...state,
        isLogged: false,
        token: null,
        user: null,
      };
    }
    default:
      return state;
  }
};
