import React, { useState, useContext, useEffect } from 'react';
import {
  content,
  header,
  text,
  avatar,
  button,
  kidContainer,
  passwordButton,
} from './MyAccount.module.scss';
import { Link } from 'react-router-dom';
import exitIcon from '../../../assets/Exit_icon.svg';
import KidContainer from '../kid/KidContainer/KidContainer';
import AccountForm from '../AccountForm/AccountForm';
import KidForm from '../kid/KidForm/KidForm';
import PlusIcon from '../../../assets/Plus_icon.svg';
import { getUser } from '../../../services/cookies';
import UserContext from '../../../context/user/userContext';

const MyAccount = () => {
  const userContext = useContext(UserContext);
  const { child } = userContext;

  let user = getUser();
  useEffect(() => {
    user = getUser();
  }, [child, user]);
  const [showEditChild, setShowEditChild] = useState(false);
  const toggleEditChild = () => {
    setShowEditChild(!showEditChild);
  };

  return (
    <div className={content}>
      <div className={header}>
        <h6>My Account</h6>
        <Link to='/posts'>
          <img src={exitIcon} alt='exit-icon' />
        </Link>
      </div>

      <div className={text}>
        <div className={avatar}></div>
        <div>
          <AccountForm />
          <Link to='update-password'>
            <button className={passwordButton}>Update My Password</button>
          </Link>
        </div>
      </div>
      <div className={header} style={{ borderRadius: ' 0px', m: '20px' }}>
        <h6>My Kids</h6>
      </div>
      <div className={kidContainer}>
        <KidContainer />
        {showEditChild && (
          <KidForm cancel={toggleEditChild} childValue={child[0]} />
        )}

        {!showEditChild && (
          <button className={button} onClick={toggleEditChild}>
            <img src={PlusIcon} alt='add-child-icon' />
            <span>Add Kid</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
