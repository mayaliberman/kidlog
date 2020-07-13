import React, { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  form,
  input,
  button,
  error,
  formSecondPart,
} from './KidForm.module.scss';
import UserContext from '../../../context/user/userContext';
const KidForm = () => {
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
          name: '',
          age: '',
          gender: 'user.email',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('* Name is Required'),
          birthYear: Yup.number()
            .min(1950, 'Must be born after 1950')
            .required('* Last Name is Required'),
          gender: Yup.string().required('* Gender is Required'),
        })}
        onSubmit={async (values) => {
          const requestBody = {
            name: values.name,
            birthYear: values.birthYear,
            gender: values.gender,
          };
          //   await updateUser(requestBody);
          //   getUserData();
        }}
      >
        <Form className={form}>
          <ErrorMessage
            name='name'
            render={(msg) => <div className={error}>{msg}</div>}
          />

          <label htmlFor='firstName'>First Name</label>
          <Field
            name='name'
            type='text'
            className={input}
            // placeholder={user.firstName}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={formSecondPart}>
              <ErrorMessage
                name='birthYear'
                render={(msg) => <div className={error}>{msg}</div>}
              />
              <label htmlFor='birthYear'>Birth Year</label>
              <Field
                name='birthYear'
                type='text'
                // placeholder='Last Name'
                className={input}
              />
            </div>
            <div className={formSecondPart}>
              <ErrorMessage
                name='gender'
                render={(msg) => <div className={error}>{msg}</div>}
              />

              <label htmlFor='gender'>Gender</label>
              <Field name='gnder' as='select' className={input} default>
                <option value=''>Select a gender</option>
                <option value='female'>Femle</option>
                <option value='male'>Male</option>
                <option value='other'>Other</option>
              </Field>
            </div>
          </div>
          <button type='submit' className={button}>
            Update
          </button>
        </Form>
      </Formik>
    );
  }
};
export default KidForm;
