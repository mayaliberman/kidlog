import React from 'react';
import {
  content,
  header,
  text,
  button,
  message,
} from './AddPostButton.module.scss';
import { Link } from 'react-router-dom';
import addIcon from '../../../assets/Add_Icon.svg';
const AddPostButton = () => {
  return (
    <div className={content}>
      <div className={header}>
        <p>New Activity</p>
      </div>
      <div className={text}>
        <p className={message}>
          Hello Maya, ready to add today's activity with your kid?
        </p>
        <div>
          <Link to='/sign-in' className={button}>
            <img src={addIcon} />
            Add
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddPostButton;
