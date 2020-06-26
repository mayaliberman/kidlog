import React from 'react';
import { box, toggleBox, notificationList } from './PostMenu.module.scss';
const PostMenu = () => {
  return (
    <div className={[box, toggleBox].join(' ')}>
      <ul className={notificationList}>
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </div>
  );
};

export default PostMenu;
