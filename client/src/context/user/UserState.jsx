import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import {
  GET_USER_DATA,
  SET_LOADING,
  GET_CHILD,
  USER_ERROR,
  UPDATE_USER,
} from '../types';
import axios from '../../services/axios';

const UserState = (props) => {
  const initialState = {
    loading: true,
    photos: [],
    isUpdated: false,
    user: {},
    child: {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUserData = async () => {
    setLoading();
    try {
      const user = await axios.get(`/users/me`);
      if (user) {
        dispatch({ type: GET_USER_DATA, payload: user.data.data });
      }
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response });
    }
  };

  const showCurrentChild = (id) => {
    setLoading();
    const child = state.user.children.filter((child) => child.id === id);
    try {
      dispatch({ type: GET_CHILD, payload: child });
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response });
    }
  };

  const updateUser = async (body) => {
    setLoading();
    try {
      const res = await axios.patch(`/users/updateMe`, body);
      if (res) {
        dispatch({ type: UPDATE_USER, payload: true });
        await getUserData();
        dispatch({ type: UPDATE_USER, payload: false });
      }
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response });
    }
  };

  const createChild = async (body) => {
    try {
      const res = await axios.post(`/users/${body.user}/children`, body);
      if (res) {
        await getUserData();
      }
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response });
    }
  };
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        child: state.child,
        error: state.error,
        loading: state.loading,
        isUpdated: state.isUpdated,
        getUserData,
        showCurrentChild,
        updateUser,
        createChild,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
