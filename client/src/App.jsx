import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/user/SignIn/SignIn';
import SignUp from './components/user/SignUp/SignUp';
import Header from './components/Header/Header';
import PostsGallery from './components/posts/PostGallery/PostsGallery';
import NotFound from './components/NotFound/NotFound';
import PostState from './context/post/PostState';
const App = () => {
  return (
    <PostState>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/posts' component={PostsGallery} />

          <Route
            exact
            path='/my-acount'
            component={() => (
              <div style={{ marginTop: '100px' }}>My Account</div>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </PostState>
  );
};

export default App;
