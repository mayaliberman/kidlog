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
} from './AddPost.module.scss';
import exitIcon from '../../../assets/Exit_icon.svg';

import React from 'react';

const AddPost = () => {
  return (
    <div className={content}>
      <div className={header}>
        <h6>New Activity</h6>
        <img src={exitIcon} alt='exit-icon' />
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
          <input type='submit' className={button} />
        </form>
      </div>
    </div>
  );
};

export default AddPost;
