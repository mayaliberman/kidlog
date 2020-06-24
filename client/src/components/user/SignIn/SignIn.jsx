import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
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
import cookies from 'react-cookies';

const sassClasses = {
  input,
  password,
};

const SignIn = (props) => {
  const login = async (email, password) => {
    const res = await axios.post(`http://localhost:5000/users/signin`, {
      email,
      password,
    });
    if (res) {
      console.log(res.data.token);
      cookies.save('auth', res.data.token, { path: '/' });
      console.log(props.history);
      props.history.replace('/posts');
    }
    console.log(res);
  };

  return (
    <div className={content}>
      <img alt='company logo' src={logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          return login(values.email, values.password);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={form}>
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={input}
            />
            {errors.email && touched.email && errors.email}
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={[input, password].join(' ')}
            />
            {errors.password && touched.password && errors.password}
            <Link to='/sign-in' className={forgotPassword}>
              Forgot Password?
            </Link>
            <button type='submit' disabled={isSubmitting} className={button}>
              Submit
            </button>
          </form>
        )}
      </Formik>

      {/* <form className={form}>
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

          <input type='submit' value='Submit' className={button} />
        </form> */}
    </div>
  );
};

export default SignIn;