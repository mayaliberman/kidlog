import React, {Component} from 'react';
import './App.scss';
import  Welcome  from './components/welcome/welcome';

class App extends Component {
  
    state = {
      error: null,
      isLoaded: false,
      items: []
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
    console.log(this.state.items)
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>{this.state.items.message}</h1>
          <h2><Welcome></Welcome></h2>
        </div>
      );
    }
  }
}

export default App;
