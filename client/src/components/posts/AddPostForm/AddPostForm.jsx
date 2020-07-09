import React, { useContext, useEffect } from 'react';
import Spinner from '../../ui/Spinner';
import {
  desc,
  button,
  secondPartForm,
  postForm,
  firstPartForm,
  inputSecondPart,
  inputErrors,
  filebutton,
  selectInput,
} from './AddPostForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import PostContext from '../../../context/post/postContext';

const AddPostSchema = Yup.object().shape({
  desc: Yup.string().required('Required'),
  lessonNum: Yup.number().required('Required'),
  childId: Yup.string().required('Required'),
});

const AddPostForm = (props) => {
  const postContext = useContext(PostContext);
  const {
    getUserData,
    user,
    createPost,
    loading,
    currentPost,
    clearCurrentPost,
    getPosts,
    showCurrentPost,
    updatePost,
  } = postContext;
  useEffect(() => {
    getUserData();
    // showCurrentPost();
  }, []);

  let arrayOfData = user.children || [{ id: 1, name: 'no option' }];
  let options = arrayOfData.map((child) => (
    <option key={child.id} value={child.id}>
      {child.name}
    </option>
  ));

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <Formik
          initialValues={
            currentPost.childId
              ? {
                  desc: currentPost.desc,
                  childId: currentPost.childId.id,
                  lessonNum: currentPost.lessonId.lessonNum,
                }
              : { desc: '', childId: '', lessonNum: '' }
          }
          validationSchema={AddPostSchema}
          onSubmit={async (values) => {
            const requestBody = {
              desc: values.desc,
              childId: values.childId,
              lessonNum: values.lessonNum,
            };
            currentPost.childId
              ? await updatePost(currentPost._id, requestBody)
              : await createPost(requestBody);

            props.submit();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
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

                <label className={filebutton}>
                  <span>
                    <input type='file' name='photo' id='myfile' name='myfile' />
                  </span>
                </label>
                {errors.desc && touched.desc ? (
                  <div className={inputErrors}>{errors.desc} </div>
                ) : null}
              </div>

              <div className={secondPartForm}>
                <div className={inputSecondPart}>
                  <label>Kid</label>

                  <Field
                    className={selectInput}
                    as='select'
                    name='childId'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.chilId}
                    default
                  >
                    <option value=''>Select a kid</option>
                    {options}
                  </Field>
                  {errors.childId && touched.childId ? (
                    <div className={inputErrors}>{errors.childId}</div>
                  ) : null}
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
                  {errors.lessonNum && touched.lessonNum ? (
                    <div className={inputErrors}>{errors.lessonNum}</div>
                  ) : null}
                </div>
              </div>
              <button type='submit' className={button} disabled={isSubmitting}>
                {props.submitButton}
              </button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
};
export default AddPostForm;
