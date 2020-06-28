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
  error,
} from './SignIn.module.scss';
import logo from '../../../assets/Logo_white_splash.svg';
import { Link, useLocation, Redirect } from 'react-router-dom';
import cookies from 'react-cookies';

const sassClasses = {
  input,
  password,
};

const SignIn = (props) => {
  const login = async (email, password) => {
    try {
      const res = await axios.post(`http://localhost:5000/users/signin`, {
        email,
        password,
      });
      if (res) {
        console.log(res.data.token);
        cookies.save('auth', res.data.token, { path: '/' });
        props.history.push('/posts');
      }
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={content}>
      <img alt='company logo' src={logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = '* Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = '* Invalid email address';
          }
          if (!values.password) {
            errors.password = '*Password is required!';
          } else if (values.password.length < 6) {
            errors.password = '*Password has to be longer than 6 characters';
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
            <div
              className={
                errors.email && touched.email && errors.email ? error : null
              }
            >
              {errors.email && touched.email && errors.email}
            </div>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={[input, password].join(' ')}
            />

            <div
              className={
                errors.password && touched.password && errors.password
                  ? error
                  : null
              }
            >
              {errors.password && touched.password && errors.password}
            </div>

            <Link to='/sign-in' className={forgotPassword}>
              Forgot Password?
            </Link>
            <button type='submit' disabled={isSubmitting} className={button}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
