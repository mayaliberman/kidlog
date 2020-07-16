import React, { useContext } from 'react';
import KidForm from '../KidForm/KidForm';
import UserContext from '../../../context/user/userContext';
import { useHistory } from 'react-router-dom';
const EditKid = (props) => {
  let history = useHistory();
  const userContext = useContext(UserContext);
  const { child } = userContext;
  let values = '';
  if (child[0]) {
    const { name, gender, birthYear } = child[0];
    values = { name, gender, birthYear };
  }

  return (
    <div style={{ marginTop: '120px' }}>
      <KidForm
        childValue={values || ''}
        cancel={() => history.push('/my-account')}
      />
    </div>
  );
};

export default EditKid;
