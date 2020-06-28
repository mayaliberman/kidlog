import {
  content,
  header,
  text,
  message,
  button,
  hidden_elem,
  addPhoto,
  ancore,
  filebutton,
} from './AddPost.module.scss';

import React from 'react';

const AddPost = () => {
  return (
    <div className={content}>
      <div className={header}>
        <h6>New Activity</h6>
        <span>X</span>
      </div>
      <div className={text}>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type='text'
            placeholder='Describe here the activity with your kid'
          />

          <label className={filebutton}>
            <span>
              <input type='file' id='myfile' name='myfile' />
            </span>
          </label>
          <input type='submit' className={button} />
        </form>
        {/* <h3 className={message}>Describe here the activity with your kid</h3> */}
      </div>
    </div>
  );
};

export default AddPost;
