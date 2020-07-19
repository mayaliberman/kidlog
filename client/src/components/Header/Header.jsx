import React, { useContext, useEffect } from 'react';
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
import LogoutIcon from '../../assets/logout.svg';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';
import { getUser } from '../../services/cookies';
import { Link } from 'react-router-dom';
const Header = () => {
  const userContext = useContext(UserContext);
  const { isUpdated } = userContext;
  const authContext = useContext(AuthContext);
  const { logout, isLogged } = authContext;
  let header = null;
  const location = useLocation();
  let user = getUser();
  useEffect(() => {
    user = getUser();
  }, [isUpdated]);
  if (
    // isLogged
    location.pathname === '/' ||
    location.pathname === '/sign-in' ||
    location.pathname === '/sign-up' ||
    location.pathname === '/add-kid' ||
    location.pathname === '/forgot-password'
  )
    header = <></>;
  else
    header = (
      <div className={navHeader}>
        <div className={nav}>
          <img alt='company logo' src={logo} className={logoIcon} />
          {/* <h3 className={headerTitle}>{location.pathname.slice(1)}</h3> */}
          <div className={account}>
            <Link to='/my-account' className={account}>
              <img alt='avatar' src={avatarIcon} className={avatar} />
              <p className={accountName}>{user ? user.firstName : null}</p>
            </Link>
            <img
              alt='logout'
              src={LogoutIcon}
              className={logoutIcon}
              onClick={logout}
            />
          </div>
        </div>
      </div>
    );
  return <>{header}</>;
};

export default Header;
