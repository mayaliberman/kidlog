import { LOGIN_SUCCESS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userId: action.payload,
      };
    default:
      return state;
  }
};
