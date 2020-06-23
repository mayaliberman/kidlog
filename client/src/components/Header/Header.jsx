import React from 'react'
import { nav, logoIcon, headerTitle, avatar, account, accountName, logoutIcon } from './Header.module.scss';
import avatarIcon from '../../assets/image-4.svg';
import logo from '../../assets/Logo_white_splash.svg';
import logout from '../../assets/logout.svg'
const Header = () => {
    return (
      <div className={nav}>
        <img alt='company logo' src={logo} className={logoIcon} />
        <h3 className={headerTitle}>My Posts</h3>
        <div className={account}>
          <img alt='avatar' src={avatarIcon} className={avatar} />
          <p className={accountName}>Maya</p>
          <p className={accountName}>Log Out</p>
          {/* <img alt='logout' src={logout} className={logoutIcon} /> */}
        </div>
      </div>
    );
}

export default Header
