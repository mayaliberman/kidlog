import React, { useContext, useEffect } from 'react';
import KidCard from '../KidCard/KidCard';
import UserContext from '../../../context/user/userContext';
import { getUser } from '../../../services/cookies';
import KidForm from '../KidForm/KidForm';
const KidContainer = () => {
  const userContext = useContext(UserContext);
  const { child } = userContext;
  let user = getUser();
  useEffect(() => {
    console.log(child);
    user = getUser();
  }, [child]);
  if (!user.children) {
    return null;
  } else {
    return (
      <>
        {user.children.map((child) => {
          return <KidCard key={child.id} name={child.name} id={child.id} />;
        })}
      </>
    );
  }
};

export default KidContainer;
