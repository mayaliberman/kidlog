import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./welcome";
import Login from "./login";
import Layout from "./Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";

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
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/posts" component={Layout} />
            </Switch>
          </>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
