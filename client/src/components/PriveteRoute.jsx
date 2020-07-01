import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import cookie from 'react-cookies';
const PrivateRoute = (props) => {
  const { component: Component, ...restOfProps } = props;
  const token = cookie.load('auth');
  let loggedIn = !!token;
  try {
    const user = JSON.parse(atob(token.split('.')[1]));
    console.log(user);
  } catch (err) {
    console.log(err);
    loggedIn = false;
  }

  // login logic
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        loggedIn ? <Component props /> : <Redirect to={'/'} />
      }
    />
  );
};

export default PrivateRoute;
