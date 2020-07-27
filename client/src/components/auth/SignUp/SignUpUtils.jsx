import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { BASE_URL } from '../../../config';
export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('Please add first name'),
  lastName: Yup.string().required('Please add last name'),
  email: Yup.string()
    .email('Invalid email')
    .test('Unique Email', 'Email already in use', function (value) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${BASE_URL}/users/validateEmail`, { email: value })
          .then((res) => {
            if (res.data.status === 'failed') {
              resolve(false);
            }
            resolve(true);
          });
      });
    })
    .required('Please add your email'),
  password: Yup.string().required('Password is required'),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

export const ErrorMessages = (error, errors, touched) => {
  return (
    <div>
      <div
        className={error}
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
            errors.email && touched.email && errors.email ? 'block' : 'none',
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
    </div>
  );
};
