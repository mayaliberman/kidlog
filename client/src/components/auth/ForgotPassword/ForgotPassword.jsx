import React, { useContext } from 'react';
import {
  content,
  form,
  input,
  error,
  button,
  redirect,
} from './ForgotPassword.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/Logo_white_splash.svg';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Please add your email'),
});

const ForgotPassword = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className={content}>
      <img alt='company logo' src={logo} />
      <h3>Please write your email to reset your password via email email</h3>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => {
          return authContext.forgotPassword(values.email);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={form}>
            <Field placeholder='Email' name='email' className={input} />
            <div
              className={
                errors.email && touched.email && errors.email ? error : null
              }
            >
              {errors.email && touched.email && errors.email}
            </div>
            <button type='submit' disabled={isSubmitting} className={button}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Link className={redirect} to='/'>
        <span>Return to home page</span>
      </Link>
    </div>
  );
};

export default ForgotPassword;
