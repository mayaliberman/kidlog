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
  radios,
  easyIconImage,
  emojiBox,
} from './PostFeedback.module.scss';
import { Formik, Form, Field } from 'formik';

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
          <Formik
            initialValues={{ difficultyLevel: 0 }}
            onSubmit={async (values) => {
              if (currentPost !== undefined) {
                const requestBody = {
                  difficultyLevel: parseInt(values.difficultyLevel),
                };
                await updatePost(currentPost._id, requestBody);
                await getPosts();
                console.log(requestBody);
                props.submit();
              }
            }}
          >
            {({ values }) => (
              <Form>
                <div
                  role='group'
                  aria-labelledby='my-radio-group'
                  className={radios}
                >
                  <label>
                    <Field type='radio' name='difficultyLevel' value='1' />
                    <div className={emojiBox}>
                      <img
                        src={easyIcon}
                        alt='easy-icon'
                        className={iconImage}
                      />
                      <span>Easy</span>
                    </div>
                  </label>

                  <label>
                    <Field type='radio' name='difficultyLevel' value='2' />
                    <div className={emojiBox}>
                      <img
                        src={justRightIcon}
                        alt='just-right-icon'
                        className={iconImage}
                      />
                      <span> Just Right</span>
                    </div>
                  </label>
                  <label>
                    <Field type='radio' name='difficultyLevel' value='3' />
                    <div className={emojiBox}>
                      <img
                        src={challengingIcon}
                        alt='challenging-icon'
                        className={iconImage}
                      />
                      <span> Challenging</span>
                    </div>
                  </label>
                  <label>
                    <Field type='radio' name='difficultyLevel' value='4' />
                    <div className={emojiBox}>
                      <img
                        src={difficultIcon}
                        alt='difficult-icon'
                        className={iconImage}
                      />
                      <span>Difficult</span>
                    </div>
                  </label>
                  <label>
                    <Field type='radio' name='difficultyLevel' value='5' />
                    <div className={emojiBox}>
                      <img
                        src={tooHardIcon}
                        alt='too-hard-icon'
                        className={iconImage}
                      />
                      <span> Too hard!</span>
                    </div>
                  </label>
                </div>
                <button type='submit' className={button}>
                  Send Feedback
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PostFeedback;
