import React, { useState } from 'react';
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
  customSelect,
  modal,
} from './AddPost.module.scss';
import PostFeedback from '../PostFeedback/PostFeedback';
import exitIcon from '../../../assets/Exit_icon.svg';

const AddPost = (props) => {
  return (
    <div className={modal}>
      <div className={content}>
        <div className={header}>
          <h6>New Activity</h6>
          <img src={exitIcon} alt='exit-icon' onClick={props.togglePop} />
        </div>
        <div>
          <form className={postForm}>
            <div className={firstPartForm}>
              <textarea
                className={desc}
                placeholder='Describe here the activity with your kid'
              />
              <label className={filebutton}>
                <span>
                  <input type='file' id='myfile' name='myfile' />
                </span>
              </label>
            </div>
            <div className={secondPartForm}>
              <div className={inputSecondPart}>
                <label>Kid</label>
                <select className={customSelect} name='kid' id='kid'>
                  <option value='Eyal'>Eyal</option>
                  <option value='Daniel'>Danielle</option>
                </select>
              </div>
              <div className={inputSecondPart}>
                <label>Lesson</label>
                <input type='number' />
              </div>
            </div>
            <button className={button} onClick={props.submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
