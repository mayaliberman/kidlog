import React, { useState, useContext } from 'react';
import {
  modal,
  content,
  header,
  text,
  button,
  message,
  subtext,
  feedbackQuestion,
  iconImage,
  iconImageFull,
  ratingBox,
} from './PostFeedback.module.scss';
import Rating from 'react-rating';
import exitIcon from '../../../assets/Exit_icon.svg';
import challengingIcon from '../../../assets/Challenging_icon.svg';
import difficultIcon from '../../../assets/Difficult_icon.svg';
import easyIcon from '../../../assets/Easy_icon.svg';
import justRightIcon from '../../../assets/Just_right_icon.svg';
import tooHardIcon from '../../../assets/Too_hard_icon.svg';
import PostContext from '../../../context/post/postContext';
const PostFeedback = (props) => {
  const [rating, setRating] = useState({ value: 0 });

  const postContext = useContext(PostContext);
  const { posts, updatePost, getPosts } = postContext;
  const currentPost = posts[posts.length - 1];

  const submitFeedback = async () => {
    if (currentPost !== undefined) {
      const requestBody = { difficultyLevel: rating };
      await updatePost(currentPost._id, requestBody);
      await getPosts();
      setRating({ value: 0 });
      props.submit();
    }
  };
  const getTarget = (e) => {
    console.log(console.log('working', (e.target.className = iconImageFull)));
  };
  return (
    <div className={modal}>
      <div className={content}>
        <div className={header}>
          <h6>Activity feedback</h6>
          <img src={exitIcon} alt='exit-icon' onClick={props.togglePop} />
        </div>
        <div className={text}>
          <h3 className={message}>Success! Your activity was uploaded</h3>
          <p className={subtext}>
            By providing us feedback on this activity, you're helping us improve
            our lesson plans
          </p>
          <h6 className={feedbackQuestion}>How difficult was the activity?</h6>
          <Rating
            initialRating={rating}
            quiet={true}
            emptySymbol={[
              <div className={ratingBox}>
                <img src={easyIcon} className={iconImage} alt='easy-icon' />{' '}
                <span>Easy</span>
              </div>,
              <div className={ratingBox}>
                <img
                  src={justRightIcon}
                  className={iconImage}
                  alt='just-right-icon'
                />{' '}
                <span>Just Right</span>
              </div>,
              <div className={ratingBox}>
                <img
                  src={challengingIcon}
                  className={iconImage}
                  alt='difficult-icon'
                />{' '}
                <span>Challenging</span>
              </div>,
              <div className={ratingBox}>
                <img
                  src={difficultIcon}
                  className={iconImage}
                  alt='difficult-icon'
                />{' '}
                <span>Difficult</span>
              </div>,
              <div className={ratingBox}>
                <img
                  src={tooHardIcon}
                  className={iconImage}
                  alt='difficult-icon'
                />{' '}
                <span>Too hard!</span>
              </div>,
            ]}
            fullSymbol={[
              <div className={ratingBox} onClick={getTarget}>
                <img src={easyIcon} className={iconImage} alt='easy-icon' />
                <span>Easy</span>
              </div>,
              <div className={ratingBox} onClick={getTarget}>
                <img
                  src={justRightIcon}
                  className={iconImage}
                  alt='just-right-icon'
                />
                <span>Just Right</span>
              </div>,
              <div className={ratingBox} onClick={getTarget}>
                <img
                  src={challengingIcon}
                  className={iconImage}
                  alt='challenging-icon'
                />
                <span>Challenging</span>
              </div>,
              <div className={ratingBox} onClick={getTarget}>
                <img
                  src={difficultIcon}
                  className={iconImage}
                  alt='difficult-icon'
                />
                <span>Difficult</span>
              </div>,
              <div className={ratingBox} onClick={getTarget}>
                <img
                  src={tooHardIcon}
                  className={iconImage}
                  alt='too-hard-icon'
                />
                <span>Too Hard!</span>
              </div>,
            ]}
          />
          <button className={button} onClick={() => submitFeedback()}>
            Send Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFeedback;
