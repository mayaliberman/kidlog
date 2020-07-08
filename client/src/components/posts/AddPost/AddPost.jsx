import React from 'react';
import { content, header, modal } from './AddPost.module.scss';
import exitIcon from '../../../assets/Exit_icon.svg';
import AddPostForm from '../AddPostForm/AddPostForm';
import { Link } from 'react-router-dom';

const AddPost = (props) => {
  return (
    <>
      <div className={modal}>
        <div className={content}>
          <div className={header}>
            <h6>{props.headerTitle}</h6>
            <Link to='/posts'>
              <img src={exitIcon} alt='exit-icon' onClick={props.togglePop} />
            </Link>
          </div>
          <div>
            <AddPostForm submit={props.togglePop} />
          </div>
        </div>
      </div>
      {/* <div className={postGallery}><PostsContainer /></div> */}
    </>
  );
};

export default AddPost;
