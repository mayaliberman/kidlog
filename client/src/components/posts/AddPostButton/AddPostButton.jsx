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
const AddPostButton = (props) => {
  return (
    <div className={content}>
      <div className={header}>
        <h6>New Activity</h6>
      </div>
      <div className={text}>
        <h3 className={message}>
          Hello Maya, ready to add today's activity with your kid?
        </h3>
        <div>
          <button className={button} onClick={props.togglePop}>
            <img src={addIcon} alt='add-icon' />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostButton;
