import React, { useEffect, useContext } from 'react';
import EditIcon from '../../../assets/Edit_icon.svg';
import Avatar from '../../../assets/image-4.svg';
import { card, edit, kid, avatar } from './KidCard.module.scss';
import UserContext from '../../../context/user/userContext';

const KidCard = (props) => {
  const userContext = useContext(UserContext);
  const { showCurrentChild } = userContext;
  const { name, id } = props;
  const openEditChild = () => {
    showCurrentChild(id);
  };
  return (
    <div className={card}>
      <div className={kid}>
        <img src={Avatar} alt='avatar' className={avatar} />
        <h2>{name}</h2>
      </div>
      <div className={edit} onClick={openEditChild}>
        <img src={EditIcon}></img>
        <p>Edit</p>
      </div>
    </div>
  );
};

export default KidCard;
