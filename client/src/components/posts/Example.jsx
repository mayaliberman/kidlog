import React, { useContext, useEffect } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import PostContext from '../../context/post/postContext';
const Example = () => {
  const postContext = useContext(PostContext);
  const { getUserData, user } = postContext;
  useEffect(() => {
    getUserData();
  }, []);

  let arrayOfData = user.children
    ? user.children
    : [{ id: 1, name: 'no option' }];
  let options = arrayOfData.map((child) => (
    <option key={child.id} value={child.name}>
      {child.name}
    </option>
  ));

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ email: '', color: '', firstName: '', lastName: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {() => (
          <Form>
            <Field
              type='textarea'
              name='desc'
              placeholder='Write you post here'
            />
            <Field as='select' name='color'>
              <option>Select Item</option>
              {options}
            </Field>

            <Field name='lastName'>
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta,
              }) => (
                <div>
                  <input type='text' placeholder='Email' {...field} />
                  {meta.touched && meta.error && (
                    <div className='error'>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Example;
