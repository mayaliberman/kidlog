import React from 'react'
import {
  content,
  form,
  input,
  password,
    button,
  subtitle
  
} from './SignUp.module.scss';
import logo from '../../assets/logo-purple.svg';
const SignUp = () => {
    return (
      <div className={content}>
            <img alt='company logo' src={logo} />
            <h4 className={subtitle}>Sign up to create your Kidlog account</h4>
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
          <input
            type='password'
            id='passwordConfirm'
            name='passwordConfirm'
            placeholder='Confirm Password'
            className={[input, password].join(' ')}
          />
          <input type='submit' value='Continue' className={button} />
        </form>
      </div>
    );
}

export default SignUp
