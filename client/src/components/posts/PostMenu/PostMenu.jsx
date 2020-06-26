import React from 'react';
import {
  box,
  toggleBox,
  notificationList,
  deleteButton,
  editButton,
} from './PostMenu.module.scss';
import deleteIcon from '../../../assets/delete.svg';
import editIcon from '../../../assets/edit.svg';
import { Link } from 'react-router-dom';
const PostMenu = () => {
  return (
    <div className={[box, toggleBox].join(' ')}>
      <ul className={notificationList}>
        <li>
          <Link className={deleteButton}>
            <img src={editIcon} style={{ paddingRight: '10px' }} />
            Edit
          </Link>
        </li>
        <li>
          <Link className={editButton}>
            <img src={deleteIcon} style={{ paddingRight: '10px' }} />
            Delete
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PostMenu;
