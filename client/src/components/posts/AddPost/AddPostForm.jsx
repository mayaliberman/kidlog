import React, { useContext, useEffect } from 'react';
import {
  desc,
  button,
  secondPartForm,
  postForm,
  firstPartForm,
  inputSecondPart,
} from './AddPost.module.scss';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import PostContext from '../../../context/post/postContext';
const AddPostForm = (props) => {
  const postContext = useContext(PostContext);
  const {
    getUserData,
    user,
    createPost,
    getPosts,
    getUnsplashPhoto,
    posts,
    photos,
  } = postContext;
  useEffect(() => {
    getUserData();
  }, []);

  let arrayOfData = user.children
    ? user.children
    : [{ id: 1, name: 'no option' }];
  let options = arrayOfData.map((child) => (
    <option key={child.id} value={child.id}>
      {child.name}
    </option>
  ));

  return (
    <>
      <Formik
        initialValues={{ desc: '', childId: '', lessonNum: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.desc) {
            errors.desc = '* Required';
          }
          if (!values.childId) {
            errors.childId = '* Required';
          }
          if (!values.lessonNum) {
            errors.lessonNum = '* Required';
          }
        }}
        onSubmit={async (values) => {
          const requestBody = {
            desc: values.desc,
            childId: values.childId,
            lessonNum: values.lessonNum,
          };
          await createPost(requestBody);

          return props.history.replace('/posts');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          setFieldValue,
          handleBlur,
          handlSubmit,
          isSubmitting,
        }) => (
          <Form className={postForm}>
            <div className={firstPartForm}>
              <Field
                as='textarea'
                name='desc'
                className={desc}
                placeholder='Describe here the activity with your kid'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desc}
              />

              {/* <label className={filebutton}>
            <span>
              <input type='file' name='photo' id='myfile' name='myfile' />
            </span>
          </label> */}
            </div>
            <div className={secondPartForm}>
              <div className={inputSecondPart}>
                <label>Kid</label>
                <Field
                  as='select'
                  name='childId'
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {options}
                </Field>
              </div>
              <div className={inputSecondPart}>
                <label>Lesson</label>
                <input
                  type='number'
                  name='lessonNum'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lessonNum}
                />
              </div>
            </div>
            <button type='submit' className={button} disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddPostForm;
