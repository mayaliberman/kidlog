import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { SET_LOADING, GET_CHILD, USER_ERROR, UPDATE_USER } from '../types';
import axios from '../../services/axios';
import { setUser, getUser } from '../../services/cookies';

const UserState = (props) => {
  const initialState = {
    loading: false,
    photos: [],
    isUpdated: false,
    user: {},
    child: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const showCurrentChild = (id) => {
    setLoading();
    const user = getUser();
    const child = user.children.filter((child) => child.id === id);
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
        setUser(res.data.data);

        dispatch({ type: UPDATE_USER, payload: false });
      }
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response });
    }
  };

  const createChild = async (body) => {
    setLoading();
    try {
      const user = getUser();
      const res = await axios.post(`/users/${body.user}/children`, body);
      if (res) {
        const user = await axios.get('/users/me');
        setUser(user.data.data);
        dispatch({ SET_LOADING, payload: false });
      }
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response });
    }
  };

  const updateChild = async (body) => {
    setLoading();
    try {
      const { name, gender, birthYear } = body;
      const reqBody = { name, gender, birthYear };
      await axios.patch(`/users/${body.user}/children/${body.id}`, reqBody);
      const user = await axios.get('/users/me');
      setUser(user.data.data);
      dispatch({ type: GET_CHILD, payload: [] });
      dispatch({ SET_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response });
    }
  };

  const deleteChild = async (userId, childId) => {
    setLoading();
    try {
      const deleteChild = await axios.delete(
        `/users/${userId}/children/${childId}`
      );
      if (deleteChild) {
        const user = await axios.get('/users/me');
        setUser(user.data.data);
        dispatch({ type: GET_CHILD, payload: [] });
        dispatch({ SET_LOADING, payload: false });
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
        updateChild,
        showCurrentChild,
        updateUser,
        createChild,
        deleteChild,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
