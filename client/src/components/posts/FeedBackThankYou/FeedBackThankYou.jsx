import React from 'react';
import {
  content,
  header,
  text,
  message,
  subtext,
} from './FeedBackThankYou.module.scss';
import exitIcon from '../../../assets/Exit_icon.svg';
import thankYouIcon from '../../../assets/Thanks_icon.svg';
const FeedBackThankYou = () => {
  return (
    <div className={content}>
      <div className={header}>
        <h6>Activity feedback</h6>
        <img src={exitIcon} alt='exit-icon' />
      </div>
      <div className={text}>
        <img src={thankYouIcon} alt='thank-you-icon' />
        <h1 className={message}>We got it!</h1>
        <p className={subtext}>Thanks you for your feedback</p>
      </div>
    </div>
  );
};

export default FeedBackThankYou;