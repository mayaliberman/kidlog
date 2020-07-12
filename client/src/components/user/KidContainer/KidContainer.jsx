import React, { useContext, useEffect } from 'react';
import KidCard from '../KidCard/KidCard';
import UserContext from '../../../context/user/userContext';

const KidContainer = () => {
  const userContext = useContext(UserContext);
  const { getUserData, user, loading } = userContext;
  useEffect(() => {
    getUserData();
  }, []);

  if (loading || !user.children) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
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
