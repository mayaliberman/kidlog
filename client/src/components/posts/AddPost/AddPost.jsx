import React, { useContext, useEffect } from 'react';
import {
  content,
  header,
  desc,
  button,
  secondPartForm,
  filebutton,
  postForm,
  firstPartForm,
  inputSecondPart,
  modal,
} from './AddPost.module.scss';
import exitIcon from '../../../assets/Exit_icon.svg';
import Select, { Option, ReactSelectProps } from 'react-select';
import PostContext from '../../../context/post/postContext';
import Spinner from '../../ui/Spinner';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import AddPostFrom from './AddPostForm';
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
    console.log(childrenOptions);
  }
  const preLoadOptions = [{ value: 'no-options', label: 'No Options' }];

  return (
    <div className={modal}>
      <div className={content}>
        <div className={header}>
          <h6>New Activity</h6>
          <img src={exitIcon} alt='exit-icon' onClick={props.togglePop} />
        </div>
        <div>
          <AddPostFrom goToFeedback={props.submit} />
          {/* <form className={postForm}>
            <div className={firstPartForm}>
              <input
                type='textarea'
                name='desc'
                className={desc}
                placeholder='Describe here the activity with your kid'
              />
              <label className={filebutton}>
                <span>
                  <input type='file' name='photo' id='myfile' name='myfile' />
                </span>
              </label>
            </div>
            <div className={secondPartForm}>
              <div className={inputSecondPart}>
                <label>Kid</label>
                <Select
                  defaultValue={
                    user.children ? childrenOptions[0] : preLoadOptions[0]
                  }
                  label='Single select'
                  options={user.children ? childrenOptions : preLoadOptions}
                  styles={colourStyles}
                />
              </div>
              <div className={inputSecondPart}>
                <label>Lesson</label>
                <input type='number' />
              </div>
            </div>
            <button className={button} onClick={props.submit}>
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default AddPost;
