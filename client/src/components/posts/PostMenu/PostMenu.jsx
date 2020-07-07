import React, { useContext } from 'react';
import {
  box,
  toggleBox,
  notificationList,
  deleteButton,
  editButton,
} from './PostMenu.module.scss';
import deleteIcon from '../../../assets/delete.svg';
import editIcon from '../../../assets/edit.svg';
import PostContext from '../../../context/post/postContext';

const PostMenu = ({ postData }) => {
  const postContext = useContext(PostContext);
  const {
    posts,
    photos,
    loading,
    getUnsplashPhoto,
    getPosts,
    deletePost,
  } = postContext;
  const id = postData._id;

  const onDelete = async (id) => {
    await deletePost(id);
    await getPosts();
  };
  return (
    <div className={[box, toggleBox].join(' ')}>
      <ul className={notificationList}>
        <li className={deleteButton}>
          <img
            src={editIcon}
            style={{ paddingRight: '10px' }}
            alt='edit-icon'
          />
          Edit
        </li>
        <li className={editButton} onClick={() => onDelete(id)}>
          <img
            src={deleteIcon}
            style={{ paddingRight: '10px' }}
            alt='delete-icon'
          />
          Delete
        </li>
      </ul>
    </div>
  );
};

export default PostMenu;
