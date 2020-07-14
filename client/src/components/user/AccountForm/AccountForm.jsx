import React, { useContext, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { form, input, button, error } from './AccountForm.module.scss';
import UserContext from '../../../context/user/userContext';
const AccountForm = () => {
  const userContext = useContext(UserContext);
  const { user, getUserData, loading, updateUser } = userContext;

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <Formik
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('* First Name is Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('* Last Name is Required'),
          email: Yup.string()
            .email('* Invalid Email Address')
            .required('* Email is Required'),
        })}
        onSubmit={async (values) => {
          const requestBody = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
          };
          await updateUser(requestBody);
          getUserData();
        }}
      >
        <Form className={form}>
          <ErrorMessage
            name='firstName'
            render={(msg) => <div className={error}>{msg}</div>}
          />

          <label htmlFor='firstName'>First Name</label>
          <Field
            name='firstName'
            type='text'
            className={input}
            placeholder={user.firstName}
          />
          <ErrorMessage
            name='lastName'
            render={(msg) => <div className={error}>{msg}</div>}
          />
          <label htmlFor='lastName'>Last Name</label>
          <Field
            name='lastName'
            type='text'
            placeholder='Last Name'
            className={input}
          />
          <ErrorMessage
            name='email'
            render={(msg) => <div className={error}>{msg}</div>}
          />
          <label htmlFor='email'>Email Address</label>
          <Field
            name='email'
            type='email'
            placeholder='Email'
            className={input}
          />
          <button type='submit' className={button}>
            Update
          </button>
        </Form>
      </Formik>
    );
  }
};

export default AccountForm;
