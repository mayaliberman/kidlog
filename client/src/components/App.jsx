import React from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./Home";
import SignIn from "./user/SignIn";
import SignUp from './user/SignUp';
import theme from "./ui/Theme";
import Header from './ui/Header';
import PostsGallery from '../components/posts/PostsGallery';
const App = () =>  {
 
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
 
}

export default App;
