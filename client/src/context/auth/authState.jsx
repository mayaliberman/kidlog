import React, { useReducer } from 'react';
import axios from 'axios';
import authReducer from './authReducer';
import AuthContext from './authContext';
import cookies from 'react-cookies';
import { LOGIN_SUCCESS } from '../types';
const AuthState = (props) => {
  const initialState = {
    isLogged: false,
    userId: {},
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`http://localhost:5000/users/signin`, {
        email,
        password,
      });
      if (res) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { ['auth']: res.data.token },
        });
        console.log(res.data.token);
        cookies.save('auth', res.data.token, { path: '/' });
        props.history.push('/posts');
      }
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <AuthContext.Provider
      values={{
        isLogged: state.isLogged,
        userId: state.userId,
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
