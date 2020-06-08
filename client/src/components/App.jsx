import React, { Component } from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Header from './ui/Header';
import PostsGallery from './PostsGallery';

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {window.location.pathname === "/" ||
          window.location.pathname === "/sing-up" ||
          window.location.pathname === "/sign-in"  ? null : (
            <Header />
          )}
          {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={() => <div>Sign Up</div>} />
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
}

export default App;
