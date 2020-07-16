import React, { useContext, useState } from 'react';
import KidForm from '../KidForm/KidForm';
import UserContext from '../../../../context/user/userContext';
import { useHistory } from 'react-router-dom';
import {
  deleteButton,
  deleteSection,
  container,
  header,
} from './EditKid.module.scss';
import CancelKidModal from '../CancelKidModal/CancelKidModal';
import { Link } from 'react-router-dom';
import exitIcon from '../../../../assets/Exit_icon.svg';
const EditKid = (props) => {
  let history = useHistory();
  const userContext = useContext(UserContext);
  const { child, deleteChild } = userContext;

  const [confirmDelete, setConfirmDelete] = useState(false);
  let values = '';
  if (child[0]) {
    const { name, gender, birthYear } = child[0];
    values = { name, gender, birthYear };
  }

  const deleteKid = () => {
    const { id, user } = child[0];
    deleteChild(user, id);
    history.push('/my-account');
  };
  return (
    <div className={container}>
      <div className={header}>
        <h6>My Kid</h6>
        <Link to='/my-account'>
          <img src={exitIcon} alt='exit-icon' />
        </Link>
      </div>
      <KidForm
        childValue={values || ''}
        cancel={() => history.push('/my-account')}
      />
      {child[0] && (
        <div className={deleteSection}>
          <button
            className={deleteButton}
            onClick={() => setConfirmDelete(true)}
          >
            Delete Child
          </button>
        </div>
      )}
      {confirmDelete && (
        <CancelKidModal
          delete={deleteKid}
          cancel={() => setConfirmDelete(false)}
        />
      )}
    </div>
  );
};

export default EditKid;
