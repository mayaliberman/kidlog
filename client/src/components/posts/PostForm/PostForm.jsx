import React, { useContext, useEffect } from 'react';
import {
  desc,
  button,
  secondPartForm,
  postForm,
  firstPartForm,
  inputSecondPart,
  inputErrors,
  selectInput,
  filebutton,
} from './PostForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getUser } from '../../../services/cookies';
import PostContext from '../../../context/post/postContext';
import UserContext from '../../../context/user/userContext';

const AddPostSchema = Yup.object().shape({
  desc: Yup.string().required('Required'),
  lessonNum: Yup.number().required('Required'),
  childId: Yup.string().required('Required'),
  file: Yup.mixed(),
});

const AddPostForm = (props) => {
  const postContext = useContext(PostContext);
  const userContext = useContext(UserContext);
  const { createPost, loading, currentPost, updatePost } = postContext;
  const { isUpdated } = userContext;
  let user = getUser();
  useEffect(() => {
    user = getUser();
  }, [isUpdated]);

  let arrayOfData = user.children.filter(
    (kid) => (kid = kid.active === true)
  ) || [{ id: 1, name: 'no option' }];
  let options = arrayOfData.map((child) => (
    <option key={child.id} value={child.id}>
      {child.name}
    </option>
  ));

  if (loading) {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Loading...</h2>
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
                  image: currentPost.image || null,
                }
              : {
                  desc: '',
                  childId: '',
                  lessonNum: '',
                  file: '',
                }
          }
          validationSchema={AddPostSchema}
          onSubmit={async (values) => {
            const requestBody = {
              desc: values.desc,
              childId: values.childId,
              lessonNum: values.lessonNum,
              file: values.file,
            };

            const formData = new FormData();
            formData.set('desc', values.desc);
            formData.set('childId', values.childId);
            formData.set('lessonNum', values.lessonNum);
            formData.append('image', values.file);

            currentPost.childId
              ? await updatePost(currentPost._id, formData)
              : await createPost(formData);

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
            setFieldValue,
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

                <label
                  className={currentPost.childId ? null : filebutton}
                  style={
                    currentPost.childId
                      ? {
                          backgroundImage: `url(${currentPost.image})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'contain',

                          width: '10%',
                          height: '40px',
                          // borderRadius: '5px',
                          overflow: 'hidden',
                          position: 'relative',
                          opacity: '0.5',
                          objectFit: 'cover',
                        }
                      : null
                  }
                >
                  <span>
                    <input
                      type='file'
                      name='file'
                      id='file'
                      onChange={(e) => {
                        setFieldValue('file', e.currentTarget.files[0]);
                      }}
                      // value={file}
                    />
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
                    value={values.childId}
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
