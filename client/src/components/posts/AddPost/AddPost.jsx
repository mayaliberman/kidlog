import React, { useContext, useEffect } from 'react';
import { content, header, modal, postGallery } from './AddPost.module.scss';
import exitIcon from '../../../assets/Exit_icon.svg';
import Select, { Option, ReactSelectProps } from 'react-select';
import PostContext from '../../../context/post/postContext';
import Spinner from '../../ui/Spinner';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import AddPostFrom from './AddPostForm';
import { Link } from 'react-router-dom';
import PostsContainer from '../PostsContainer';
const colourStyles = {
  control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    borderColor: 'white',
    '&:hover': {
      borderColor: 'white',
    },
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? 'lightblue' : 'white',
      color: '#c0d1e1',
      cursor: isDisabled ? 'not-allowed' : 'default',
      borderColor: 'white',
    };
  },
  indicatorSeparator: (styles) => {
    return {
      ...styles,
      backgroundColor: 'white',
    };
  },
};

const AddPost = (props) => {
  const postContext = useContext(PostContext);
  const {
    posts,
    photos,
    newPost,
    loading,
    getUnsplashPhoto,
    getPosts,
    getUserData,
    user,
    createPost,
  } = postContext;
  useEffect(() => {
    getUnsplashPhoto();
    getUserData();
    getPosts();
  }, []);

  let childrenOptions = [];
  if (user.children) {
    childrenOptions = user.children.map((child) => {
      const childOptions = {};
      childOptions.value = child.name;
      childOptions.label = child.name;
      return childOptions;
    });
  }
  const preLoadOptions = [{ value: 'no-options', label: 'No Options' }];

  return (
    <>
      <div className={modal}>
        <div className={content}>
          <div className={header}>
            <h6>New Activity</h6>
            <Link to='/posts'>
              <img src={exitIcon} alt='exit-icon' />
            </Link>
          </div>
          <div>
            <AddPostFrom />
          </div>
        </div>
      </div>
      <div className={postGallery}>
        <PostsContainer />
      </div>
    </>
  );
};

export default AddPost;
