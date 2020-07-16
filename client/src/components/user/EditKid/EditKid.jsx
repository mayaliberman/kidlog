import React, { useContext } from 'react';
import KidForm from '../KidForm/KidForm';
import UserContext from '../../../context/user/userContext';
import { useHistory } from 'react-router-dom';
import { deleteButton, deleteSection } from './EditKid.module.scss';
const EditKid = (props) => {
  let history = useHistory();
  const userContext = useContext(UserContext);
  const { child, deleteChild } = userContext;
  let values = '';
  if (child[0]) {
    const { name, gender, birthYear } = child[0];
    values = { name, gender, birthYear };
  }

  const deleteKid = () => {
    const { id, user } = child[0];
    deleteChild(user, id);
    alert('child has been deleted');
    history.push('/my-account');
  };
  return (
    <div style={{ marginTop: '120px' }}>
      <KidForm
        childValue={values || ''}
        cancel={() => history.push('/my-account')}
      />
      {child[0] && (
        <div className={deleteSection}>
          <button className={deleteButton} onClick={deleteKid}>
            Delete Child
          </button>
        </div>
      )}
    </div>
  );
};

export default EditKid;
