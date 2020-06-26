import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import {
  content,
  form,
  input,
  password,
  button,
  subtitle,
  logoIcon,
  error,
} from './SignUp.module.scss';
import logo from '../../../assets/logo-purple.svg';
import { Link, useLocation, Redirect } from 'react-router-dom';
import cookies from 'react-cookies';

const SignUp = (props) => {
  const signup = async (
    firstName,
    lastName,
    email,
    password,
    passwordConfirm
  ) => {
    try {
      const res = await axios.post(`http://localhost:5000/users/signup`, {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
      });
      if (res) {
        console.log(res.data.token);
        cookies.save('auth', res.data.token, { path: '/' });

        props.history.push('/posts');
        console.log(window.location.pathname);
      }
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={content}>
      <img alt='company logo' src={logo} className={logoIcon} />
      <h4 className={subtitle}>Sign up to create your Kidlog account</h4>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirm: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = '* First name is required!';
          }
          if (!values.lastName) {
            errors.lastName = '* Last name is required!';
          }
          if (!values.email) {
            errors.email = '* Email is required!';
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
          if (!values.passwordConfirm) {
            errors.passwordConfirm = '*Password confirm is required!';
          }
          if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm =
              '* Password and password confirm does not mutch!';
          }
          return errors;
        }}
        onSubmit={(values) => {
          return signup(
            values.firstName,
            values.lastName,
            values.email,
            values.password,
            values.passwordConfirm
          );
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
            <div
              className={errors}
              style={{
                display:
                  errors.firstName && touched.firstName && errors.firstName
                    ? 'block'
                    : 'none',
              }}
            >
              {errors.firstName && touched.firstName && errors.firstName}
            </div>
            <div
              className={error}
              style={{
                display:
                  errors.lastName && touched.lastName && errors.lastName
                    ? 'block'
                    : 'none',
              }}
            >
              {errors.lastName && touched.lastName && errors.lastName}
            </div>
            <div
              className={error}
              style={{
                display:
                  errors.email && touched.email && errors.email
                    ? 'block'
                    : 'none',
              }}
            >
              {errors.email && touched.email && errors.email}
            </div>
            <div
              className={error}
              style={{
                display:
                  errors.password && touched.password && errors.password
                    ? 'block'
                    : 'none',
              }}
            >
              {errors.password && touched.password && errors.password}
            </div>
            <div
              className={error}
              style={{
                display:
                  errors.passwordConfirm &&
                  touched.passwordConfirm &&
                  errors.passwordConfirm
                    ? 'block'
                    : 'none',
              }}
            >
              {errors.passwordConfirm &&
                touched.passwordConfirm &&
                errors.passwordConfirm}
            </div>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              className={input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />

            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              className={input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />

            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email'
              className={input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              className={[input, password].join(' ')}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <input
              type='password'
              id='passwordConfirm'
              name='passwordConfirm'
              placeholder='Confirm Password'
              className={[input, password].join(' ')}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirm}
            />

            <button type='submit' disabled={isSubmitting} className={button}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
