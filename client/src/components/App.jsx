import React, { Component } from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from './SignUp';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Header from './ui/Header';
import PostsGallery from './PostsGallery';
class App extends Component {
  state = {
    error: null,
    loading: false,
    users: [],
  };

//  async componentDidMount() {
//    this.setState({ loading: true });
//    const res = await await axios.get(`http://localhost:5000/posts`);
//    this.setState({ users: res.data, loading: false });
//    console.log(this.state.users)
//   }
  render() {
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
}

export default App;
