import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/user/SignIn/SignIn';
import SignUp from './components/user/SignUp/SignUp';
import Header from './components/Header/Header';
import PostsGallery from './components/posts/PostGallery/PostsGallery';
import NotFound from './components/NotFound/NotFound';
import PostState from './context/post/PostState';
import AuthState from './context/auth/AuthState';
import UserState from './context/user/UserState';
import MyAccount from './components/user/MyAccount/MyAccount';
import PrivateRoute from './components/PriveteRoute';

const App = () => {
  return (
    <BrowserRouter>
      <AuthState>
        <PostState>
          <UserState>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/sign-in' component={SignIn} />
              <Route exact path='/sign-up' component={SignUp} />
              <PrivateRoute path={'/posts'} exact component={PostsGallery} />
              <PrivateRoute exact path='/my-account' component={MyAccount} />
              <Route component={NotFound} />
            </Switch>
          </UserState>
        </PostState>
      </AuthState>
    </BrowserRouter>
  );
};

export default App;
