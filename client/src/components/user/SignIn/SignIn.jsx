import React from 'react'
import {
  content,
  form,
  input,
  password,
  button,
  forgotPassword,
} from './SignIn.module.scss';
import logo from '../../../assets/Logo_white_splash.svg';
import { Link } from 'react-router-dom';
const sassClasses = {
    input, password
}

const SignIn = () => {
    return (
      <div className={content}>
        <img alt='company logo' src={logo} />
        <form className={form}>
          <input
            type='text'
            id='password'
            name='Email'
            placeholder='Email'
            className={input}
          />

          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            className={[input, password].join(' ')}
          />
          <Link to='/sign-in' className={forgotPassword}>
            Forgot Password?
          </Link>
          <input type='submit' value='Submit' className={button} />
        </form>
      </div>
    );
}

export default SignIn
