import React, { useContext, useEffect } from 'react';
import {
  nav,
  logoIcon,
  avatar,
  account,
  accountName,
  logoutIcon,
  navHeader,
} from './Header.module.scss';
import avatarIcon from '../../assets/image-4.svg';
import logo from '../../assets/Logo_white_splash.svg';
import LogoutIcon from '../../assets/logout.svg';
import AuthContext from '../../context/auth/authContext';
import { getUser } from '../../services/cookies';
import { Link } from 'react-router-dom';
const Header = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  let header = null;

  let user = getUser();
  useEffect(() => {
    user = getUser();
  }, [user]);
  if (!user) header = <></>;
  else
    header = (
      <div className={navHeader}>
        <div className={nav}>
          <img alt='company logo' src={logo} className={logoIcon} />
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
