import React from 'react';
import { content, header, modal } from './AddPost.module.scss';
import exitIcon from '../../../assets/Exit_icon.svg';
import AddPostForm from '../AddPostForm/AddPostForm';
import { Link } from 'react-router-dom';

const AddPost = (props) => {
  const { submit, submitButton } = props;

  return (
    <>
      <div className={modal}>
        <div className={content}>
          <div className={header}>
            <h6>{props.headerTitle}</h6>
            <Link to='/posts'>
              <img
                src={exitIcon}
                alt='exit-icon'
                onClick={() => props.close()}
              />
            </Link>
          </div>
          <div>
            <AddPostForm submit={submit} submitButton={submitButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
