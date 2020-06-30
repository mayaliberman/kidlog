import React from 'react';
import {
  content,
  header,
  text,
  button,
  message,
  subtext,
  iconList,
  feedbackQuestion,
  iconImage,
  iconText,
} from './PostFeedback.module.scss';
import exitIcon from '../../../assets/Exit_icon.svg';
import challengingIcon from '../../../assets/Challenging_icon.svg';
import difficultIcon from '../../../assets/Difficult_icon.svg';
import easyIcon from '../../../assets/Easy_icon.svg';
import justRightIcon from '../../../assets/Just_right_icon.svg';
import tooHardIcon from '../../../assets/Too_hard_icon.svg';

const PostFeedback = () => {
  return (
    <div className={content}>
      <div className={header}>
        <h6>Activity feedback</h6>
        <img src={exitIcon} alt='exit-icon' />
      </div>
      <div className={text}>
        <h3 className={message}>Success! Your activity was uploaded</h3>
        <p className={subtext}>
          By providing us feedback on this activity, you're helping us improve
          our lesson plans
        </p>
        <h6 className={feedbackQuestion}>How difficult was the activity?</h6>
        <ul className={iconList}>
          <li>
            <img src={easyIcon} className={iconImage} alt='easy-icon' />
          </li>
          <li>
            <img
              src={justRightIcon}
              className={iconImage}
              alt='just-right-icon'
            />
          </li>
          <li>
            <img
              src={challengingIcon}
              className={iconImage}
              alt='challenging-icon'
            />
          </li>
          <li>
            <img
              src={difficultIcon}
              className={iconImage}
              alt='difficult-icon'
            />
          </li>
          <li>
            <img src={tooHardIcon} className={iconImage} alt='too-hard-icon' />
          </li>
        </ul>
        <ul className={iconText}>
          <li>Easy</li>
          <li>
            <span>Just Right</span>
          </li>
          <li>
            <span>Challenging</span>
          </li>
          <li>
            <span>Difficult</span>
          </li>
          <li>
            <span>Too hard!</span>
          </li>
        </ul>
        <button className={button}>Send Feedback</button>
      </div>
    </div>
  );
};

export default PostFeedback;
