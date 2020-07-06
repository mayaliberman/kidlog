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
import PrivateRoute from './components/PriveteRoute';
import Example from './components/posts/Example';
import AddPostForm from './components/posts/AddPost/AddPostForm';
const App = () => {
  return (
    <BrowserRouter>
      <AuthState>
        <PostState>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/example' component={AddPostForm} />
            <PrivateRoute path={'/posts'} exact component={PostsGallery} />

            <Route
              exact
              path='/my-acount'
              component={() => (
                <div style={{ marginTop: '100px' }}>My Account</div>
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </PostState>
      </AuthState>
    </BrowserRouter>
  );
};

export default App;
