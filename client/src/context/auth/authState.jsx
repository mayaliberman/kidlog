import React, { useReducer } from 'react';
import axios from 'axios';
import authReducer from './authReducer';
import AuthContext from './authContext';
import cookies from 'react-cookies';
import { LOGIN_SUCCESS, USER_LOADED, LOGOUT, REGISTER_SUCCESS } from '../types';
import { withRouter } from 'react-router-dom';
import { setUser } from '../../services/cookies';
const AuthState = (props) => {
  const initialState = {
    isLogged: false,
    token: {},
    user: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`http://localhost:5000/users/signin`, {
        email,
        password,
      });
      if (res) {
        const user = JSON.parse(atob(res.data.token.split('.')[1]));
        const id = user.user.id;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.token,
        });
        dispatch({
          type: USER_LOADED,
          payload: {
            // user: JSON.parse(atob(res.data.token.split('.')[1])),
            user: id,
          },
        });
        cookies.save('auth', res.data.token, { path: '/' });
        setUser(res.data.data.user);

        props.history.push('/posts');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signup = async (
    firstName,
    lastName,
    email,
    password,
    passwordConfirm
  ) => {
    try {
      const res = await axios.post(`http://localhost:5000/users/signup`, {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
      });
      if (res) {
        const user = JSON.parse(atob(res.data.token.split('.')[1]));
        const id = user.user.id;
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data.token,
        });
        dispatch({
          type: USER_LOADED,
          payload: { user: id },
          // payload: { user: JSON.parse(atob(res.data.token.split('.')[1])) },
        });

        cookies.save('auth', res.data.token, { path: '/' });

        props.history.push('/posts');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const forgotPassword = async (email) => {
    try {
      await axios.post(`http://localhost:5000/users/forgotPassword`, { email });
    } catch (err) {
      console.error(err);
    }
  };
  const logout = () => {
    dispatch({ type: LOGOUT });
    cookies.remove('auth', { path: '/' });
    cookies.remove('user', { path: '/' });
    props.history.push('/');
  };
  return (
    <AuthContext.Provider
      value={{
        isLogged: state.isLogged,
        token: state.token,
        user: state.user,
        login,
        logout,
        signup,
        forgotPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthState);
