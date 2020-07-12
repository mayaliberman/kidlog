import React, { useContext } from 'react';
import { content, header, text, avatar } from './MyAccount.module.scss';
import { Link } from 'react-router-dom';
import exitIcon from '../../../assets/Exit_icon.svg';
import KidContainer from '../KidContainer/KidContainer';
import UserContext from '../../../context/user/userContext';

const MyAccount = () => {
  const userContext = useContext(UserContext);
  const { showCurrentChild, child } = userContext;

  console.log(child);
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
        <div> Here goes the disabled form </div>
        {/* <h1 className={message}>We got it!</h1>
        <p className={subtext}>Thank you for your feedback</p> */}
      </div>
      <div className={header} style={{ borderRadius: ' 0px', m: '20px' }}>
        <h6>My Kids</h6>
      </div>
      <div style={{ paddingTop: '20px' }}>
        <KidContainer />
      </div>
    </div>
  );
};

export default MyAccount;
