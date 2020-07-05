import React from 'react';
import {
  content,
  header,
  desc,
  button,
  secondPartForm,
  filebutton,
  postForm,
  firstPartForm,
  inputSecondPart,
  modal,
} from './AddPost.module.scss';
import exitIcon from '../../../assets/Exit_icon.svg';
import Select from 'react-select';

const colourStyles = {
  control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    borderColor: 'white',

    borderColor: 'white',
    '&:visited': {
      borderColor: 'white',
    },
    '&:hover': {
      borderColor: 'white',
    },
    '&:active': {
      borderColor: 'white',
    },
    '&:focus': {
      borderColor: 'white',
    },
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = 'white';
    return {
      ...styles,
      backgroundColor: isDisabled ? 'lightblue' : 'white',
      color: '#c0d1e1',
      cursor: isDisabled ? 'not-allowed' : 'default',
      borderColor: 'white',
    };
  },
  indicatorSeparator: (styles) => {
    return {
      ...styles,
      backgroundColor: 'white',
    };
  },
};

const groupedOptions = [
  { value: 'Eyal', label: 'Eyal' },
  { value: 'Danielle', label: 'Danielle' },
  { value: 'Romi', label: 'Romi' },
];

const AddPost = (props) => {
  return (
    <div className={modal}>
      <div className={content}>
        <div className={header}>
          <h6>New Activity</h6>
          <img src={exitIcon} alt='exit-icon' onClick={props.togglePop} />
        </div>
        <div>
          <form className={postForm}>
            <div className={firstPartForm}>
              <textarea
                className={desc}
                placeholder='Describe here the activity with your kid'
              />
              <label className={filebutton}>
                <span>
                  <input type='file' id='myfile' name='myfile' />
                </span>
              </label>
            </div>
            <div className={secondPartForm}>
              <div className={inputSecondPart}>
                <label>Kid</label>
                <Select
                  defaultValue={groupedOptions[0]}
                  label='Single select'
                  options={groupedOptions}
                  styles={colourStyles}
                />
              </div>
              <div className={inputSecondPart}>
                <label>Lesson</label>
                <input type='number' />
              </div>
            </div>
            <button className={button} onClick={props.submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
