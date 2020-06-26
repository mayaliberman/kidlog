import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Home from './Home/Home.jsx';
import SignIn from './user/SignIn/SignIn';
import SignUp from './user/SignUp/SignUp';
import Header from './Header/Header';
import PostsGallery from '../components/posts/PostGallery/PostsGallery';
import NotFound from '../components/NotFound/NotFound';
const App = () => {
  return (
    <BrowserRouter>
      {/* {location.pathname === '/' ||
      location.pathname === '/sign-up' ||
      location.pathname === '/sign-in' ? null : (
        <Header />
      )} */}

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/posts' component={PostsGallery} />

        <Route
          exact
          path='/my-acount'
          component={() => <div>My Account</div>}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
