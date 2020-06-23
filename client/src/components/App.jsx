import React from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Home from './Home/Home.jsx';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

import Header from './Header/Header';
import PostsGallery from '../components/posts/PostsGallery';
const App = () =>  {
 
    return (
      
        <BrowserRouter>
          {window.location.pathname === "/" ||
          window.location.pathname === "/sign-up" ||
          window.location.pathname === "/sign-in"  ? null : (
            <Header />
          )}
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/posts" component={PostsGallery} />
            <Route
              exact
              path="/my-acount"
              component={() => <div>My Account</div>}
            />
          </Switch>
        </BrowserRouter>
     
    );
 
}

export default App;
