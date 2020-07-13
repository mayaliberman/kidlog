import React, { useContext, useState, useEffect } from 'react';
import {
  content,
  header,
  text,
  avatar,
  button,
  kidContainer,
} from './MyAccount.module.scss';
import { Link } from 'react-router-dom';
import exitIcon from '../../../assets/Exit_icon.svg';
import KidContainer from '../KidContainer/KidContainer';
import UserContext from '../../../context/user/userContext';
import AccountForm from '../AccountForm/AccountForm';
import KidForm from '../KidForm/KidForm';
import PlusIcon from '../../../assets/Plus_icon.svg';
const MyAccount = () => {
  const userContext = useContext(UserContext);
  const { user, getUserData } = userContext;

  useEffect(() => {
    getUserData();
  }, []);
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
        </div>
        {/* <h1 className={message}>We got it!</h1>
        <p className={subtext}>Thank you for your feedback</p> */}
      </div>
      <div className={header} style={{ borderRadius: ' 0px', m: '20px' }}>
        <h6>My Kids</h6>
      </div>
      <div className={kidContainer}>
        <KidContainer />
        {showEditChild && <KidForm cancel={toggleEditChild} />}

        {!showEditChild && (
          <button className={button} onClick={toggleEditChild}>
            <img src={PlusIcon} />
            <span>Add Kid</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
