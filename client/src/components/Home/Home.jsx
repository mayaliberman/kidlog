import React from 'react';
import { content, title, button } from './Home.module.scss';
import logo from '../../assets/Logo_white_splash.svg';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div className={content}>
      <img alt='company logo' src={logo} />
      <h1 className={title}>Every kid can become multi-talent</h1>
      <h3>Track your kid's progress and share your experiences</h3>
      <Link to='/sign-in' className={button}>
        Sign In
      </Link>
      <Link
        to='/sign-up'
        className={button}
        style={{ backgroundColor: '#6f8ba4' }}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Home;
