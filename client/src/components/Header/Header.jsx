import React, { useContext } from 'react';
import {
  nav,
  logoIcon,
  headerTitle,
  avatar,
  account,
  accountName,
  logoutIcon,
  navHeader,
} from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import avatarIcon from '../../assets/image-4.svg';
import logo from '../../assets/Logo_white_splash.svg';
import logout from '../../assets/logout.svg';
import AuthContext from '../../context/auth/authContext';
import { getUser } from '../../services/cookies';
const Header = () => {
  const user = getUser();
  const authContext = useContext(AuthContext);
  let header = null;
  const location = useLocation();
  if (
    location.pathname === '/' ||
    location.pathname === '/sign-in' ||
    location.pathname === '/sign-up'
  )
    header = <></>;
  else
    header = (
      <div className={navHeader}>
        <div className={nav}>
          <img alt='company logo' src={logo} className={logoIcon} />
          <h3 className={headerTitle}>{location.pathname.slice(1)}</h3>
          <div className={account}>
            <img alt='avatar' src={avatarIcon} className={avatar} />
            <p className={accountName}>{user.firstName}</p>
            <img
              alt='logout'
              src={logout}
              className={logoutIcon}
              onClick={authContext.logout}
            />
          </div>
        </div>
      </div>
    );
  return <>{header}</>;
};

export default Header;
