import React, { useReducer } from 'react';
import axios from 'axios';
import authReducer from './authReducer';
import AuthContext from './authContext';
import cookies from 'react-cookies';
import axiosService from '../../services/axios';
import {
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
} from '../types';
import { withRouter } from 'react-router-dom';
import { setUser } from '../../services/cookies';
const AuthState = (props) => {
  const initialState = {
    isLogged: false,
    token: {},
    user: null,
    error: null,
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
            user: id,
          },
        });
        cookies.save('auth', res.data.token, { path: '/' });
        setUser(res.data.data.user);

        props.history.push('/posts');
      }
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    }
  };

  const signup = async (
    firstName,
    lastName,
    email,
    password,
    passwordConfirm
  ) => {
    dispatch({ type: LOGOUT });
    cookies.remove('auth', { path: '/' });
    cookies.remove('user', { path: '/' });
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
        });

        cookies.save('auth', res.data.token, { path: '/' });
        setUser(res.data.data.user);
        props.history.push('/add-kid');
      }
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response });
    }
  };

  const updatePassword = async (passwordCurrent, password, passwordConfirm) => {
    try {
      const res = await axiosService.patch(
        `http://localhost:5000/users/updateMyPassword`,
        { passwordCurrent, password, passwordConfirm }
      );

      if (res) {
        const user = JSON.parse(atob(res.data.token.split('.')[1]));
        const id = user.user.id;
        dispatch({
          type: UPDATE_PASSWORD,
          payload: res.data.token,
        });
        dispatch({
          type: USER_LOADED,
          payload: {
            user: id,
          },
        });
        cookies.save('auth', res.data.token, { path: '/' });
        setUser(res.data.data.user);

        props.history.push('/my-account');
      }
    } catch (err) {
      dispatch({ type: UPDATE_PASSWORD_FAIL, payload: err.response });
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

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <AuthContext.Provider
      value={{
        isLogged: state.isLogged,
        token: state.token,
        user: state.user,
        error: state.error,
        login,
        logout,
        signup,
        updatePassword,
        forgotPassword,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthState);
