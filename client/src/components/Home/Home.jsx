import React from 'react'
import { content , title, subtitle, button} from './Home.module.scss';
import logo from '../../assets/Logo_white_splash.svg';
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <div className={content}>
            <img alt='company logo' src={logo} />
            <h1 className={title}>Every kid can become multi-talent</h1>
            <h4 className={subtitle}>Track your kid's progress and share your experiences</h4>
            <Link to='/sign-in' className={button}> Let's Start</Link>
      </div>
    );
}

export default Home;
