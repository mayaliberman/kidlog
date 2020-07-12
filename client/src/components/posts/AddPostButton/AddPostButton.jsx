import React, { useContext, useEffect } from 'react';
import {
  content,
  header,
  text,
  button,
  message,
} from './AddPostButton.module.scss';
import PostContext from '../../../context/post/postContext';
import addIcon from '../../../assets/Add_Icon.svg';
const AddPostButton = (props) => {
  const postContext = useContext(PostContext);
  const { user, getUserData } = postContext;

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className={content}>
      <div className={header}>
        <h6>New Activity</h6>
      </div>
      <div className={text}>
        <h3 className={message}>
          Hello {user.firstName}, ready to add today's activity with your kid?
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
