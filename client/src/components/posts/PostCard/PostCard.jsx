import React, { useState } from 'react';
import PostMenu from '../PostMenu/PostMenu';
import {
  content,
  avatar,
  header,
  postInfo,
  more,
  tagsTitle,
  lessonDesc,
  postPhoto,
  description,
  photoFigure,
} from './PostCard.module.scss';
import avatarIcon from '../../../assets/image-4.svg';
import moreInfo from '../../../assets/moreInfo.svg';

const PostCard = ({
  desc,
  photoTitle,
  defaultPhoto,
  date,
  lessonTags,
  childName,
  lessonNum,
}) => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const toggleHidden = () => {
    setToggleMenu(!toggleMenu);
  };
  const postDate = new Date(date);
  const year = postDate.getFullYear();
  const day = postDate.getDate();
  const monthIndex = postDate.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthName = months[monthIndex];
  const lessonDetails = `${monthName} ${day} , ${year} | Lesson ${lessonNum}`;

  const tags = lessonTags
    .map((tag) => tag.charAt(0).toUpperCase() + tag.substr(1))
    .join(', ');

  const postChild = `${tags} with ${childName}`;
  return (
    <div className={content}>
      <div className={header}>
        <div className={postInfo}>
          <img alt='avatar' src={avatarIcon} className={avatar} />
          <div style={{ marginLeft: '10px' }}>
            <h4 className={tagsTitle}>{postChild}</h4>
            <p className={lessonDesc}>{lessonDetails}</p>
          </div>
        </div>

        <img
          alt='more-info'
          src={moreInfo}
          className={more}
          onClick={toggleHidden}
        />
        {!toggleMenu && <PostMenu />}
      </div>
      <div>
        <figure className={photoFigure}>
          <img alt={photoTitle} src={defaultPhoto} className={postPhoto} />
        </figure>
        <p className={description}>{desc}</p>
      </div>
    </div>
  );
};

export default PostCard;
